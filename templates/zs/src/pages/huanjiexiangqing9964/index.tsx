// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Input,
  Select,
  MultipleSelect,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '900035813064024064';
const Huanjiexiangqing9964$$Modal: React.FC<PageProps> = ({
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
  const setHandler = (options_836554: any) => {
    const eventDatasetValue9: any = [
      {
        type: 'setValue',
        dataId: 166935682329833730,
        options: {
          compId: ['Input_668689_5940303', 'Input_098526'],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '2016278',
          valueList: {
            Input_668689_5940303: '$options_836554.handleStaffName$',
            Input_098526: '$options_836554.handleStaff$',
          },
          compid: ['Input_668689_5940303', 'Input_098526'],
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue9.params =
      [
        {
          title: '事件入参',
          name: 'options_836554',
          value: '$options_836554$',
        },
      ] || [];
    CMDGenerator(eventDatasetValue9, { options_836554 }, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
  };
  const chooseOrg = (options_484695: any) => {
    const eventDatasetDisable17: any = [
      {
        type: 'setDisable',
        dataId: 166936177638859840,
        options: {
          compId: ['Select_049724'],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '451163',
          disabled: 'true',
          compid: ['Select_049724'],
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable17.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable17, { options_484695 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired7: any = [
      {
        type: 'setRequired',
        dataId: 166935835621412350,
        options: {
          compId: [
            'Select_049724',
            'Input_668689_5940303',
            'Input_668689_5940303_573587',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '9313165',
          required: '',
          compid: [
            'Select_049724',
            'Input_668689_5940303',
            'Input_668689_5940303_573587',
          ],
        },
        line_number: 2,
      },
    ];
    eventDatasetRequired7.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired7, { options_484695 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
    const eventDataclearValue20: any = [
      {
        type: 'clearValue',
        dataId: 166935837163489150,
        options: {
          compId: 'Select_049724',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '427058',
        },
        line_number: 3,
      },
    ];
    eventDataclearValue20.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue20, { options_484695 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue21: any = [
      {
        type: 'clearValue',
        dataId: 166935837917026050,
        options: {
          compId: 'Input_668689_5940303',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '3945728',
        },
        line_number: 4,
      },
    ];
    eventDataclearValue21.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue21, { options_484695 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue22: any = [
      {
        type: 'clearValue',
        dataId: 166935838132375200,
        options: {
          compId: 'Input_098526',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '218419',
        },
        line_number: 5,
      },
    ];
    eventDataclearValue22.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue22, { options_484695 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue23: any = [
      {
        type: 'clearValue',
        dataId: 166935838341871700,
        options: {
          compId: 'Input_668689_5940303_573587',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '231723',
        },
        line_number: 6,
      },
    ];
    eventDataclearValue23.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue23, { options_484695 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue24: any = [
      {
        type: 'clearValue',
        dataId: 166935838547866000,
        options: {
          compId: 'Input_533642',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '3965575',
        },
        line_number: 7,
      },
    ];
    eventDataclearValue24.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue24, { options_484695 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatasetDisable18: any = [
      {
        type: 'setDisable',
        dataId: 166936181250418200,
        options: {
          compId: [
            'Select_163479',
            'MultipleSelect_5854355',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_7085787',
            'MultipleSelect_086387',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'TreeSelect',
          id: '694732',
          disabled: '',
          compid: [
            'Select_163479',
            'MultipleSelect_5854355',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_7085787',
            'MultipleSelect_086387',
          ],
        },
        line_number: 8,
      },
    ];
    eventDatasetDisable18.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable18, { options_484695 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired8: any = [
      {
        type: 'setRequired',
        dataId: 166935844344987550,
        options: {
          compId: [
            'Select_4282221',
            'MultipleSelect_5854355',
            'Select_7370283',
            'MultipleSelect_7085787',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '117434',
          required: 'true',
          compid: [
            'Select_4282221',
            'MultipleSelect_5854355',
            'Select_7370283',
            'MultipleSelect_7085787',
          ],
        },
        line_number: 9,
      },
    ];
    eventDatasetRequired8.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired8, { options_484695 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
    const eventDatagetValue102: any = [
      {
        type: 'getValue',
        dataId: 167825437156826300,
        options: {
          compId: 'Input_098526_81943',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '4863131',
        },
        line_number: 10,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '552554',
                options: { context: '$value_4863131$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167825437977841950,
            elseIfs: [],
            line_number: 11,
            callback1: [
              {
                type: 'setRequired',
                dataId: 167825442607306800,
                options: {
                  compId: ['MultipleSelect_7085787', 'MultipleSelect_5854355'],
                  compLib: 'comm',
                  pageJsonId: '098531',
                  compName: 'Input',
                  id: '4606317',
                  required: '',
                  compid: ['MultipleSelect_7085787', 'MultipleSelect_5854355'],
                },
                line_number: 12,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue102.params =
      [
        {
          title: '事件入参',
          name: 'options_484695',
          value: '$options_484695$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue102, { options_484695 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const chooseHandler = (options_8289403: any) => {
    const eventDatasetDisable19: any = [
      {
        type: 'setDisable',
        dataId: 166936185779963000,
        options: {
          compId: [
            'Select_049724',
            'Select_163479',
            'MultipleSelect_5854355',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_086387',
            'MultipleSelect_7085787',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '486893',
          disabled: 'true',
          compid: [
            'Select_049724',
            'Select_163479',
            'MultipleSelect_5854355',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_086387',
            'MultipleSelect_7085787',
          ],
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable19.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable19, { options_8289403 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired9: any = [
      {
        type: 'setRequired',
        dataId: 166935854627222050,
        options: {
          compId: [
            'Select_049724',
            'Input_668689_5940303_573587',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_5854355',
            'MultipleSelect_7085787',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '835899',
          required: '',
          compid: [
            'Select_049724',
            'Input_668689_5940303_573587',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_5854355',
            'MultipleSelect_7085787',
          ],
        },
        line_number: 2,
      },
    ];
    eventDatasetRequired9.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired9, { options_8289403 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
    const eventDataclearValue25: any = [
      {
        type: 'clearValue',
        dataId: 166935856553142300,
        options: {
          compId: 'Select_049724',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '582926',
        },
        line_number: 3,
      },
    ];
    eventDataclearValue25.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue25, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue26: any = [
      {
        type: 'clearValue',
        dataId: 166935856907880580,
        options: {
          compId: 'Input_668689_5940303_573587',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '486193',
        },
        line_number: 4,
      },
    ];
    eventDataclearValue26.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue26, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue27: any = [
      {
        type: 'clearValue',
        dataId: 166935857187165060,
        options: {
          compId: 'Input_533642',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '2744615',
        },
        line_number: 5,
      },
    ];
    eventDataclearValue27.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue27, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue28: any = [
      {
        type: 'clearValue',
        dataId: 166944230243488740,
        options: {
          compId: 'Input_668689_5940303_9095515',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '947484',
        },
        line_number: 6,
      },
    ];
    eventDataclearValue28.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue28, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue29: any = [
      {
        type: 'clearValue',
        dataId: 166944230751091400,
        options: {
          compId: 'Input_098526_81943',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '381708',
        },
        line_number: 7,
      },
    ];
    eventDataclearValue29.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue29, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue30: any = [
      {
        type: 'clearValue',
        dataId: 166935857762918340,
        options: {
          compId: 'Select_163479',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '242359',
        },
        line_number: 8,
      },
    ];
    eventDataclearValue30.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue30, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue31: any = [
      {
        type: 'clearValue',
        dataId: 167273270140447740,
        options: {
          compId: 'MultipleSelect_086387',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '815185',
        },
        line_number: 9,
      },
    ];
    eventDataclearValue31.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue31, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue32: any = [
      {
        type: 'clearValue',
        dataId: 166935858030329820,
        options: {
          compId: 'Select_4282221',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '827763',
        },
        line_number: 10,
      },
    ];
    eventDataclearValue32.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue32, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue33: any = [
      {
        type: 'clearValue',
        dataId: 166935858252613060,
        options: {
          compId: 'MultipleSelect_5854355',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '939272',
        },
        line_number: 11,
      },
    ];
    eventDataclearValue33.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue33, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue34: any = [
      {
        type: 'clearValue',
        dataId: 166935859603485860,
        options: {
          compId: 'Select_7370283',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '9930695',
        },
        line_number: 12,
      },
    ];
    eventDataclearValue34.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue34, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue35: any = [
      {
        type: 'clearValue',
        dataId: 167273271529304030,
        options: {
          compId: 'MultipleSelect_7085787',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '5478156',
        },
        line_number: 13,
      },
    ];
    eventDataclearValue35.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue35, { options_8289403 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatasetDisable20: any = [
      {
        type: 'setDisable',
        dataId: 166936187869064700,
        options: {
          compId: 'Input_668689_5940303',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '971544',
          disabled: '',
        },
        line_number: 14,
      },
    ];
    eventDatasetDisable20.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable20, { options_8289403 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired10: any = [
      {
        type: 'setRequired',
        dataId: 166935861950147620,
        options: {
          compId: 'Input_668689_5940303',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '110177',
          required: 'true',
        },
        line_number: 15,
      },
    ];
    eventDatasetRequired10.params =
      [
        {
          title: '事件入参',
          name: 'options_8289403',
          value: '$options_8289403$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired10, { options_8289403 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
  };
  const choosePost = (options_918582: any) => {
    const eventDatasetDisable21: any = [
      {
        type: 'setDisable',
        dataId: 166936190029358820,
        options: {
          compId: [
            'Select_049724',
            'MultipleSelect_5854355',
            'Select_7370283',
            'Select_4282221',
            'Select_163479',
            'MultipleSelect_086387',
            'MultipleSelect_7085787',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '93828',
          disabled: 'true',
          compid: [
            'Select_049724',
            'MultipleSelect_5854355',
            'Select_7370283',
            'Select_4282221',
            'Select_163479',
            'MultipleSelect_086387',
            'MultipleSelect_7085787',
          ],
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable21.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable21, { options_918582 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired11: any = [
      {
        type: 'setRequired',
        dataId: 166935882615695650,
        options: {
          compId: [
            'Select_049724',
            'Input_668689_5940303',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_5854355',
            'MultipleSelect_7085787',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '418315',
          required: '',
          compid: [
            'Select_049724',
            'Input_668689_5940303',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_5854355',
            'MultipleSelect_7085787',
          ],
        },
        line_number: 2,
      },
    ];
    eventDatasetRequired11.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired11, { options_918582 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
    const eventDataclearValue36: any = [
      {
        type: 'clearValue',
        dataId: 166935885040553500,
        options: {
          compId: 'Select_049724',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '660665',
        },
        line_number: 3,
      },
    ];
    eventDataclearValue36.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue36, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue37: any = [
      {
        type: 'clearValue',
        dataId: 166935885345714600,
        options: {
          compId: 'Input_668689_5940303',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '594273',
        },
        line_number: 4,
      },
    ];
    eventDataclearValue37.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue37, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue38: any = [
      {
        type: 'clearValue',
        dataId: 166935885666625540,
        options: {
          compId: 'Input_098526',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '689162',
        },
        line_number: 5,
      },
    ];
    eventDataclearValue38.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue38, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue39: any = [
      {
        type: 'clearValue',
        dataId: 166944236205882080,
        options: {
          compId: 'Input_668689_5940303_9095515',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '72172',
        },
        line_number: 6,
      },
    ];
    eventDataclearValue39.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue39, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue40: any = [
      {
        type: 'clearValue',
        dataId: 166944236558528900,
        options: {
          compId: 'Input_098526_81943',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '511475',
        },
        line_number: 7,
      },
    ];
    eventDataclearValue40.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue40, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue41: any = [
      {
        type: 'clearValue',
        dataId: 166935886328538700,
        options: {
          compId: 'Select_163479',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '875435',
        },
        line_number: 8,
      },
    ];
    eventDataclearValue41.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue41, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue42: any = [
      {
        type: 'clearValue',
        dataId: 167273283992901380,
        options: {
          compId: 'MultipleSelect_086387',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '205927',
        },
        line_number: 9,
      },
    ];
    eventDataclearValue42.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue42, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue43: any = [
      {
        type: 'clearValue',
        dataId: 166935886794123970,
        options: {
          compId: 'Select_7370283',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '801163',
        },
        line_number: 10,
      },
    ];
    eventDataclearValue43.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue43, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue44: any = [
      {
        type: 'clearValue',
        dataId: 167273284512800160,
        options: {
          compId: 'MultipleSelect_7085787',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '71439',
        },
        line_number: 11,
      },
    ];
    eventDataclearValue44.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue44, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue45: any = [
      {
        type: 'clearValue',
        dataId: 166935887004785250,
        options: {
          compId: 'Select_4282221',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '3776054',
        },
        line_number: 12,
      },
    ];
    eventDataclearValue45.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue45, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue46: any = [
      {
        type: 'clearValue',
        dataId: 166935887223638270,
        options: {
          compId: 'MultipleSelect_5854355',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '527932',
        },
        line_number: 13,
      },
    ];
    eventDataclearValue46.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue46, { options_918582 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatasetDisable22: any = [
      {
        type: 'setDisable',
        dataId: 166936191921258880,
        options: {
          compId: 'Input_668689_5940303_573587',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '84981',
          disabled: '',
        },
        line_number: 14,
      },
    ];
    eventDatasetDisable22.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable22, { options_918582 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired12: any = [
      {
        type: 'setRequired',
        dataId: 166935889408983550,
        options: {
          compId: 'Input_668689_5940303_573587',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '3208677',
          required: 'true',
        },
        line_number: 15,
      },
    ];
    eventDatasetRequired12.params =
      [
        {
          title: '事件入参',
          name: 'options_918582',
          value: '$options_918582$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired12, { options_918582 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
  };
  const chooseTache = (options_952115: any) => {
    const eventDatasetDisable23: any = [
      {
        type: 'setDisable',
        dataId: 166936193708519100,
        options: {
          compId: [
            'Select_163479',
            'MultipleSelect_5854355',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_086387',
            'MultipleSelect_7085787',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '2872191',
          disabled: 'true',
          compid: [
            'Select_163479',
            'MultipleSelect_5854355',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_086387',
            'MultipleSelect_7085787',
          ],
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable23.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable23, { options_952115 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired13: any = [
      {
        type: 'setRequired',
        dataId: 166936054129810850,
        options: {
          compId: [
            'Input_668689_5940303',
            'Input_668689_5940303_573587',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_5854355',
            'MultipleSelect_7085787',
          ],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '746131',
          required: '',
          compid: [
            'Input_668689_5940303',
            'Input_668689_5940303_573587',
            'Select_7370283',
            'Select_4282221',
            'MultipleSelect_5854355',
            'MultipleSelect_7085787',
          ],
        },
        line_number: 2,
      },
    ];
    eventDatasetRequired13.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired13, { options_952115 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
    const eventDataclearValue47: any = [
      {
        type: 'clearValue',
        dataId: 166936055555507330,
        options: {
          compId: 'Input_668689_5940303',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '917031',
        },
        line_number: 3,
      },
    ];
    eventDataclearValue47.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue47, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue48: any = [
      {
        type: 'clearValue',
        dataId: 166936055932826240,
        options: {
          compId: 'Input_098526',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '234502',
        },
        line_number: 4,
      },
    ];
    eventDataclearValue48.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue48, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue49: any = [
      {
        type: 'clearValue',
        dataId: 166936056258777820,
        options: {
          compId: 'Input_668689_5940303_573587',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '465774',
        },
        line_number: 5,
      },
    ];
    eventDataclearValue49.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue49, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue50: any = [
      {
        type: 'clearValue',
        dataId: 166936056549443550,
        options: {
          compId: 'Input_533642',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '405165',
        },
        line_number: 6,
      },
    ];
    eventDataclearValue50.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue50, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue51: any = [
      {
        type: 'clearValue',
        dataId: 166944238580609570,
        options: {
          compId: 'Input_668689_5940303_9095515',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '0535497',
        },
        line_number: 7,
      },
    ];
    eventDataclearValue51.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue51, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue52: any = [
      {
        type: 'clearValue',
        dataId: 166944239654651100,
        options: {
          compId: 'Input_098526_81943',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '609147',
        },
        line_number: 8,
      },
    ];
    eventDataclearValue52.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue52, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue53: any = [
      {
        type: 'clearValue',
        dataId: 166936057271412100,
        options: {
          compId: 'Select_163479',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '07474753',
        },
        line_number: 9,
      },
    ];
    eventDataclearValue53.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue53, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue54: any = [
      {
        type: 'clearValue',
        dataId: 167273292020064000,
        options: {
          compId: 'MultipleSelect_086387',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '205597',
        },
        line_number: 10,
      },
    ];
    eventDataclearValue54.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue54, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue55: any = [
      {
        type: 'clearValue',
        dataId: 166936058172631300,
        options: {
          compId: 'Select_7370283',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '633996',
        },
        line_number: 11,
      },
    ];
    eventDataclearValue55.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue55, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue56: any = [
      {
        type: 'clearValue',
        dataId: 167273293450095140,
        options: {
          compId: 'MultipleSelect_7085787',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '529121',
        },
        line_number: 12,
      },
    ];
    eventDataclearValue56.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue56, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue57: any = [
      {
        type: 'clearValue',
        dataId: 166936066924531420,
        options: {
          compId: 'Select_4282221',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '300589',
        },
        line_number: 13,
      },
    ];
    eventDataclearValue57.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue57, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDataclearValue58: any = [
      {
        type: 'clearValue',
        dataId: 166936060006276400,
        options: {
          compId: 'MultipleSelect_5854355',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'MultipleSelect',
          id: '8225025',
        },
        line_number: 14,
      },
    ];
    eventDataclearValue58.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDataclearValue58, { options_952115 }, 'clearValue', {
      id: 'clearValue',
      name: 'clearValue',
      type: 'clearValue',
      platform: 'undefined',
    });
    const eventDatasetVisible11: any = [
      {
        type: 'setVisible',
        dataId: 166936060484919700,
        options: {
          compId: 'Select_049724',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '806121',
          visible: 'true',
        },
        line_number: 15,
      },
    ];
    eventDatasetVisible11.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDatasetVisible11, { options_952115 }, 'setVisible', {
      id: 'setVisible',
      name: 'setVisible',
      type: 'setVisible',
      platform: 'undefined',
    });
    const eventDatasetDisable24: any = [
      {
        type: 'setDisable',
        dataId: 166936196667166460,
        options: {
          compId: 'Select_049724',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '1657816',
          disabled: '',
        },
        line_number: 16,
      },
    ];
    eventDatasetDisable24.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable24, { options_952115 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetRequired14: any = [
      {
        type: 'setRequired',
        dataId: 166936061371990400,
        options: {
          compId: 'Select_049724',
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Select',
          id: '772766',
          required: 'true',
        },
        line_number: 17,
      },
    ];
    eventDatasetRequired14.params =
      [
        {
          title: '事件入参',
          name: 'options_952115',
          value: '$options_952115$',
        },
      ] || [];
    CMDGenerator(eventDatasetRequired14, { options_952115 }, 'setRequired', {
      id: 'setRequired',
      name: 'setRequired',
      type: 'setRequired',
      platform: 'undefined',
    });
  };
  const setPost = (options_5516572: any) => {
    const eventDatasetValue10: any = [
      {
        type: 'setValue',
        dataId: 166936093589543500,
        options: {
          compId: ['Input_668689_5940303_573587', 'Input_533642'],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '934305',
          valueList: {
            Input_668689_5940303_573587: '$options_5516572.postName$',
            Input_533642: '$options_5516572.postId$',
          },
          compid: ['Input_668689_5940303_573587', 'Input_533642'],
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue10.params =
      [
        {
          title: '事件入参',
          name: 'options_5516572',
          value: '$options_5516572$',
        },
      ] || [];
    CMDGenerator(eventDatasetValue10, { options_5516572 }, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
  };
  const handleTypeChange = (options_5372136: any) => {
    const eventDataifelse59: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '7717377',
            options: {
              useManual: true,
              useObject: false,
              context: '$options_5372136.handleFilterType$',
              operate: '==',
              manualValue: '1001',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166942837385647970,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166942837385615900,
            children: [
              {
                dataName: 'action',
                dataId: 166942837385642400,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 166942837385696200,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 166942837385692300,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['customFuncName', 'customFuncParams'],
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '8710457',
                  pageJsonId: '098531',
                  customFuncName: 'choosePost',
                },
                actionObjId: 'callSelfFunc',
                actionObjName: 'system',
                value: 'callSelfFunc',
                line_number: 3,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$options_5372136.handleFilterType$',
                  operate: '==',
                  manualValue: '1002',
                },
                condId: '047885',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '岗位',
            callback: [
              {
                type: 'callSelfFunc',
                dataId: 166942837385642400,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '8710457',
                  pageJsonId: '098531',
                  customFuncName: 'choosePost',
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 166942837385650980,
            children: [
              {
                dataName: 'action',
                dataId: 166942837385600480,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 166942837385649950,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 166942837385621760,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['customFuncName', 'customFuncParams'],
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '717851',
                  pageJsonId: '098531',
                  customFuncName: 'chooseOrg',
                },
                actionObjId: 'callSelfFunc',
                actionObjName: 'system',
                value: 'callSelfFunc',
                line_number: 4,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$options_5372136.handleFilterType$',
                  operate: '==',
                  manualValue: '1003',
                },
                condId: '626731',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '组织',
            callback: [
              {
                type: 'callSelfFunc',
                dataId: 166942837385600480,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '717851',
                  pageJsonId: '098531',
                  customFuncName: 'chooseOrg',
                },
                line_number: 4,
                callback1: [],
                callback2: [],
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 166942837385649470,
            children: [
              {
                dataName: 'action',
                dataId: 166942837385607200,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 166942837385621220,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 166942837385652930,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['customFuncName', 'customFuncParams'],
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '3918612',
                  pageJsonId: '098531',
                  customFuncName: 'chooseTache',
                },
                actionObjId: 'callSelfFunc',
                actionObjName: 'system',
                value: 'callSelfFunc',
                line_number: 5,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$options_5372136.handleFilterType$',
                  operate: '==',
                  manualValue: '1004',
                },
                condId: '148476',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '同环节',
            callback: [
              {
                type: 'callSelfFunc',
                dataId: 166942837385607200,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '3918612',
                  pageJsonId: '098531',
                  customFuncName: 'chooseTache',
                },
                line_number: 5,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'callSelfFunc',
            dataId: 166942837385678370,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '31668',
              pageJsonId: '098531',
              customFuncName: 'chooseHandler',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse59.params =
      [
        {
          title: '事件入参',
          name: 'options_5372136',
          value: '$options_5372136$',
        },
      ] || [];
    CMDGenerator(eventDataifelse59, { options_5372136 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 166942875627852000
    console.log('处理类型值变更-事件入参', options_5372136);
  };
  const chooseHandlerOrg = (options_182162: any) => {
    // console 166944384382315200
    console.log('指定处理人事件入参', options_182162);
    const eventDatasetValue11: any = [
      {
        type: 'setValue',
        dataId: 166944429569280540,
        options: {
          compId: ['Input_668689_5940303_9095515', 'Input_098526_81943'],
          compLib: 'comm',
          pageJsonId: '098531',
          compName: 'Input',
          id: '431887',
          valueList: {
            Input_668689_5940303_9095515: '$options_182162.orgName$',
            Input_098526_81943: '$options_182162.orgCode$',
          },
          compid: ['Input_668689_5940303_9095515', 'Input_098526_81943'],
        },
        line_number: 2,
        callback1: [
          {
            type: 'setRequired',
            dataId: 167825430387454200,
            options: {
              compId: ['MultipleSelect_5854355', 'MultipleSelect_7085787'],
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'MultipleSelect',
              id: '8134807',
              required: '',
              compid: ['MultipleSelect_5854355', 'MultipleSelect_7085787'],
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDatasetValue11.params =
      [
        {
          title: '事件入参',
          name: 'options_182162',
          value: '$options_182162$',
        },
      ] || [];
    CMDGenerator(eventDatasetValue11, { options_182162 }, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    setHandler,
    chooseOrg,
    chooseHandler,
    choosePost,
    chooseTache,
    setPost,
    handleTypeChange,
    chooseHandlerOrg,
  }));

  const onOk = () => {
    const eventDataifelse277: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0194315',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'A',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166619339974073820,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166936682899035520,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '383911765',
              pageJsonId: '098531',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'addDcTacheCfg',
              _apiCode: 'addDcTacheCfg',
              _source: 'rhin',
              _serviceId: '884804230919749632',
              _serviceTitle: '环节新增-tsm: addDcTacheCfg',
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
                  dataKey: '383911765_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '383911765_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '383911765_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'remark',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.remark',
                      compType: 'Input',
                      name: 'remark',
                      parents: ['body'],
                      id: 'body.remark',
                      dataKey: '383911765_body.remark',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'remark',
                      },
                    },
                    {
                      code: 'isSupportMergeOrder',
                      name: '是否支持合单',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.isSupportMergeOrder',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.isSupportMergeOrder',
                      dataKey: '383911765_body.isSupportMergeOrder',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isSupportMergeOrder',
                      },
                    },
                    {
                      code: 'handlePostLevel',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handlePostLevel',
                      compType: 'Input',
                      name: 'handlePostLevel',
                      parents: ['body'],
                      id: 'body.handlePostLevel',
                      dataKey: '383911765_body.handlePostLevel',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handlePostLevel',
                      },
                    },
                    {
                      code: 'isLeaderCountersign',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isLeaderCountersign',
                      compType: 'Input',
                      name: 'isLeaderCountersign',
                      parents: ['body'],
                      id: 'body.isLeaderCountersign',
                      dataKey: '383911765_body.isLeaderCountersign',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isLeaderCountersign',
                      },
                    },
                    {
                      code: 'isNormalCountersign',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isNormalCountersign',
                      compType: 'Input',
                      name: 'isNormalCountersign',
                      parents: ['body'],
                      id: 'body.isNormalCountersign',
                      dataKey: '383911765_body.isNormalCountersign',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isNormalCountersign',
                      },
                    },
                    {
                      code: 'tacheName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.tacheName',
                      compType: 'Input',
                      name: 'tacheName',
                      parents: ['body'],
                      id: 'body.tacheName',
                      dataKey: '383911765_body.tacheName',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'tacheName',
                      },
                    },
                    {
                      code: 'tacheSort',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.tacheSort',
                      compType: 'Input',
                      name: 'tacheSort',
                      parents: ['body'],
                      id: 'body.tacheSort',
                      dataKey: '383911765_body.tacheSort',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'tacheSort',
                      },
                    },
                    {
                      code: 'flowDefineId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.flowDefineId',
                      compType: 'Input',
                      name: 'flowDefineId',
                      parents: ['body'],
                      id: 'body.flowDefineId',
                      dataKey: '383911765_body.flowDefineId',
                      value: {
                        type: ['context', '$state.flowDefineId$'],
                        code: '',
                      },
                    },
                    {
                      code: 'extTacheName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.extTacheName',
                      compType: 'Input',
                      name: 'extTacheName',
                      parents: ['body'],
                      id: 'body.extTacheName',
                      dataKey: '383911765_body.extTacheName',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'extTacheName',
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
                      dataKey: '383911765_body.tacheCode',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'tacheCode',
                      },
                    },
                    {
                      code: 'extTacheCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.extTacheCode',
                      compType: 'Input',
                      name: 'extTacheCode',
                      parents: ['body'],
                      id: 'body.extTacheCode',
                      dataKey: '383911765_body.extTacheCode',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'extTacheCode',
                      },
                    },
                    {
                      code: 'orgTypes',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'body.orgTypes.listItem',
                          compType: 'Input',
                          parents: ['body', 'orgTypes'],
                          id: 'body.orgTypes.listItem',
                          dataKey: '383911765_body.orgTypes.listItem',
                        },
                      ],
                      _id: 'body.orgTypes',
                      compType: 'Input',
                      name: 'orgTypes',
                      parents: ['body'],
                      id: 'body.orgTypes',
                      dataKey: '383911765_body.orgTypes',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'orgTypes',
                      },
                    },
                    {
                      code: 'withAppointTacheCode',
                      name: '同指定环节编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.withAppointTacheCode',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.withAppointTacheCode',
                      dataKey: '383911765_body.withAppointTacheCode',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'withAppointTacheCode',
                      },
                    },
                    {
                      code: 'isHandleEditable',
                      name: '是否允许处理可编辑',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.isHandleEditable',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.isHandleEditable',
                      dataKey: '383911765_body.isHandleEditable',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isHandleEditable',
                      },
                    },
                    {
                      code: 'approveGrade',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.approveGrade',
                      compType: 'Input',
                      name: 'approveGrade',
                      parents: ['body'],
                      id: 'body.approveGrade',
                      dataKey: '383911765_body.approveGrade',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'approveGrade',
                      },
                    },
                    {
                      code: 'handleOrgLevels',
                      name: '处理人组织等级，多选',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'body.handleOrgLevels.listItem',
                          compType: 'Input',
                          parents: ['body', 'handleOrgLevels'],
                          id: 'body.handleOrgLevels.listItem',
                          dataKey: '383911765_body.handleOrgLevels.listItem',
                        },
                      ],
                      _id: 'body.handleOrgLevels',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleOrgLevels',
                      dataKey: '383911765_body.handleOrgLevels',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleOrgLevels',
                      },
                    },
                    {
                      code: 'handleRegion',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.handleRegion',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleRegion',
                      dataKey: '383911765_body.handleRegion',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleRegion',
                      },
                    },
                    {
                      code: 'handleRegions',
                      name: '处理人区域，多选',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'body.handleRegions.listItem',
                          compType: 'Input',
                          parents: ['body', 'handleRegions'],
                          id: 'body.handleRegions.listItem',
                          dataKey: '383911765_body.handleRegions.listItem',
                        },
                      ],
                      _id: 'body.handleRegions',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleRegions',
                      dataKey: '383911765_body.handleRegions',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleRegions',
                      },
                    },
                    {
                      code: 'smsArriveTemplate',
                      name: '短信到达模板编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.smsArriveTemplate',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.smsArriveTemplate',
                      dataKey: '383911765_body.smsArriveTemplate',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'smsArriveTemplate',
                      },
                    },
                    {
                      code: 'smsOneTemplate',
                      name: '短信T+1模板编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.smsOneTemplate',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.smsOneTemplate',
                      dataKey: '383911765_body.smsOneTemplate',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'smsOneTemplate',
                      },
                    },
                    {
                      code: 'smsTwoTemplate',
                      name: '短信T+2模板编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.smsTwoTemplate',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.smsTwoTemplate',
                      dataKey: '383911765_body.smsTwoTemplate',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'smsTwoTemplate',
                      },
                    },
                    {
                      code: 'handlePost',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handlePost',
                      compType: 'Input',
                      name: 'handlePost',
                      parents: ['body'],
                      id: 'body.handlePost',
                      dataKey: '383911765_body.handlePost',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handlePost',
                      },
                    },
                    {
                      code: 'handleAppointOrgCode',
                      name: '处理人指定组织编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.handleAppointOrgCode',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleAppointOrgCode',
                      dataKey: '383911765_body.handleAppointOrgCode',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleAppointOrgCode',
                      },
                    },
                    {
                      code: 'handleStaff',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handleStaff',
                      compType: 'Input',
                      name: 'handleStaff',
                      parents: ['body'],
                      id: 'body.handleStaff',
                      dataKey: '383911765_body.handleStaff',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleStaff',
                      },
                    },
                    {
                      code: 'isAreaCountersign',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isAreaCountersign',
                      compType: 'Input',
                      name: 'isAreaCountersign',
                      parents: ['body'],
                      id: 'body.isAreaCountersign',
                      dataKey: '383911765_body.isAreaCountersign',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isAreaCountersign',
                      },
                    },
                    {
                      code: 'readHandleType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.readHandleType',
                      compType: 'Input',
                      name: 'readHandleType',
                      parents: ['body'],
                      id: 'body.readHandleType',
                      dataKey: '383911765_body.readHandleType',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'readHandleType',
                      },
                    },
                    {
                      code: 'handleRegionFilterType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handleRegionFilterType',
                      compType: 'Input',
                      name: 'handleRegionFilterType',
                      parents: ['body'],
                      id: 'body.handleRegionFilterType',
                      dataKey: '383911765_body.handleRegionFilterType',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleRegionFilterType',
                      },
                    },
                    {
                      code: 'handleOrgLevel',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handleOrgLevel',
                      compType: 'Input',
                      name: 'handleOrgLevel',
                      parents: ['body'],
                      id: 'body.handleOrgLevel',
                      dataKey: '383911765_body.handleOrgLevel',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleOrgLevel',
                      },
                    },
                    {
                      code: 'handleFilterType',
                      name: '处理过滤类型',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.handleFilterType',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleFilterType',
                      dataKey: '383911765_body.handleFilterType',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleFilterType',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '383911765_body',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '512082',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_383911765?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166936698644939260,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166936698644986700,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166936698644998560,
                        children: [],
                        todoOptions: ['msgType', 'value'],
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '102668',
                          pageJsonId: '098531',
                          type: 'error',
                          value: '环节新增失败！',
                        },
                        actionObjId: 'showMessage',
                        actionObjName: 'system',
                        value: 'showMessage',
                        elseIfs: [],
                        line_number: 7,
                      },
                    ],
                    condition: [],
                    desc: '失败',
                    elseIfs: [],
                    callback: [
                      {
                        type: 'showMessage',
                        dataId: 166936698644998560,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '102668',
                          pageJsonId: '098531',
                          type: 'error',
                          value: '环节新增失败！',
                        },
                        line_number: 7,
                      },
                    ],
                  },
                ],
                line_number: 3,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166936698644945760,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '8377994',
                      pageJsonId: '098531',
                      type: 'success',
                      value: '环节新增成功！',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166936698644928900,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '93874908',
                      pageJsonId: '098531',
                    },
                    line_number: 5,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166936698644989500,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '379844',
                      pageJsonId: '098531',
                    },
                    line_number: 6,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'getValue',
            dataId: 166943158057349920,
            shielding: true,
            options: {
              compId: 'TreeSelect_9963718',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'TreeSelect',
              id: '2107031',
            },
            line_number: 8,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166943158760797400,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '9798246',
                  pageJsonId: '098531',
                  code: 'function main(data,state,success,fail){console.log("\\u6307\\u5B9A\\u5904\\u7406\\u4EBA\\u7EC4\\u7EC7",value_2107031);if(Object.prototype.toString.call(value_2107031)==="[object Array]"){success("")}else{success(value_2107031)}};',
                },
                line_number: 9,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166943280062387700,
                    shielding: true,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '38701286',
                      pageJsonId: '098531',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'addDcTacheCfg',
                      _apiCode: 'addDcTacheCfg',
                      _source: 'rhin',
                      _serviceId: '884804230919749632',
                      _serviceTitle: '环节新增-tsm: addDcTacheCfg',
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
                          dataKey: '38701286_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '38701286_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '38701286_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'handleRegion',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.handleRegion',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.handleRegion',
                              dataKey: '38701286_body.handleRegion',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleRegion',
                              },
                            },
                            {
                              code: 'approveGrade',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.approveGrade',
                              compType: 'Input',
                              name: 'approveGrade',
                              parents: ['body'],
                              id: 'body.approveGrade',
                              dataKey: '38701286_body.approveGrade',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'approveGrade',
                              },
                            },
                            {
                              code: 'remark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.remark',
                              compType: 'Input',
                              name: 'remark',
                              parents: ['body'],
                              id: 'body.remark',
                              dataKey: '38701286_body.remark',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'remark',
                              },
                            },
                            {
                              code: 'flowDefineId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.flowDefineId',
                              compType: 'Input',
                              name: 'flowDefineId',
                              parents: ['body'],
                              id: 'body.flowDefineId',
                              dataKey: '38701286_body.flowDefineId',
                              value: {
                                type: ['context', '$state.flowDefineId$'],
                                code: '',
                              },
                            },
                            {
                              code: 'extTacheName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.extTacheName',
                              compType: 'Input',
                              name: 'extTacheName',
                              parents: ['body'],
                              id: 'body.extTacheName',
                              dataKey: '38701286_body.extTacheName',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'extTacheName',
                              },
                            },
                            {
                              code: 'handleRegionFilterType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handleRegionFilterType',
                              compType: 'Input',
                              name: 'handleRegionFilterType',
                              parents: ['body'],
                              id: 'body.handleRegionFilterType',
                              dataKey: '38701286_body.handleRegionFilterType',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleRegionFilterType',
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
                              dataKey: '38701286_body.tacheCode',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'tacheCode',
                              },
                            },
                            {
                              code: 'extTacheCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.extTacheCode',
                              compType: 'Input',
                              name: 'extTacheCode',
                              parents: ['body'],
                              id: 'body.extTacheCode',
                              dataKey: '38701286_body.extTacheCode',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'extTacheCode',
                              },
                            },
                            {
                              code: 'handleOrgLevel',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handleOrgLevel',
                              compType: 'Input',
                              name: 'handleOrgLevel',
                              parents: ['body'],
                              id: 'body.handleOrgLevel',
                              dataKey: '38701286_body.handleOrgLevel',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleOrgLevel',
                              },
                            },
                            {
                              code: 'orgTypes',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.orgTypes.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'orgTypes'],
                                  id: 'body.orgTypes.listItem',
                                  dataKey: '38701286_body.orgTypes.listItem',
                                },
                              ],
                              _id: 'body.orgTypes',
                              compType: 'Input',
                              name: 'orgTypes',
                              parents: ['body'],
                              id: 'body.orgTypes',
                              dataKey: '38701286_body.orgTypes',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'orgTypes',
                              },
                            },
                            {
                              code: 'tacheName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.tacheName',
                              compType: 'Input',
                              name: 'tacheName',
                              parents: ['body'],
                              id: 'body.tacheName',
                              dataKey: '38701286_body.tacheName',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'tacheName',
                              },
                            },
                            {
                              code: 'isSupportMergeOrder',
                              name: '是否支持合单',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.isSupportMergeOrder',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.isSupportMergeOrder',
                              dataKey: '38701286_body.isSupportMergeOrder',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'isSupportMergeOrder',
                              },
                            },
                            {
                              code: 'handlePostLevel',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handlePostLevel',
                              compType: 'Input',
                              name: 'handlePostLevel',
                              parents: ['body'],
                              id: 'body.handlePostLevel',
                              dataKey: '38701286_body.handlePostLevel',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handlePostLevel',
                              },
                            },
                            {
                              code: 'handlePost',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handlePost',
                              compType: 'Input',
                              name: 'handlePost',
                              parents: ['body'],
                              id: 'body.handlePost',
                              dataKey: '38701286_body.handlePost',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handlePost',
                              },
                            },
                            {
                              code: 'handleStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handleStaff',
                              compType: 'Input',
                              name: 'handleStaff',
                              parents: ['body'],
                              id: 'body.handleStaff',
                              dataKey: '38701286_body.handleStaff',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleStaff',
                              },
                            },
                            {
                              code: 'isLeaderCountersign',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.isLeaderCountersign',
                              compType: 'Input',
                              name: 'isLeaderCountersign',
                              parents: ['body'],
                              id: 'body.isLeaderCountersign',
                              dataKey: '38701286_body.isLeaderCountersign',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'isLeaderCountersign',
                              },
                            },
                            {
                              code: 'isAreaCountersign',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.isAreaCountersign',
                              compType: 'Input',
                              name: 'isAreaCountersign',
                              parents: ['body'],
                              id: 'body.isAreaCountersign',
                              dataKey: '38701286_body.isAreaCountersign',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'isAreaCountersign',
                              },
                            },
                            {
                              code: 'readHandleType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.readHandleType',
                              compType: 'Input',
                              name: 'readHandleType',
                              parents: ['body'],
                              id: 'body.readHandleType',
                              dataKey: '38701286_body.readHandleType',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'readHandleType',
                              },
                            },
                            {
                              code: 'isNormalCountersign',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.isNormalCountersign',
                              compType: 'Input',
                              name: 'isNormalCountersign',
                              parents: ['body'],
                              id: 'body.isNormalCountersign',
                              dataKey: '38701286_body.isNormalCountersign',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'isNormalCountersign',
                              },
                            },
                            {
                              code: 'tacheSort',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.tacheSort',
                              compType: 'Input',
                              name: 'tacheSort',
                              parents: ['body'],
                              id: 'body.tacheSort',
                              dataKey: '38701286_body.tacheSort',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'tacheSort',
                              },
                            },
                            {
                              code: 'handleFilterType',
                              name: '处理过滤类型',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.handleFilterType',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.handleFilterType',
                              dataKey: '38701286_body.handleFilterType',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleFilterType',
                              },
                            },
                            {
                              code: 'withAppointTacheCode',
                              name: '同指定环节编码',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.withAppointTacheCode',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.withAppointTacheCode',
                              dataKey: '38701286_body.withAppointTacheCode',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'withAppointTacheCode',
                              },
                            },
                            {
                              code: 'handleAppointOrgCode',
                              name: '处理人指定组织编码',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.handleAppointOrgCode',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.handleAppointOrgCode',
                              dataKey: '38701286_body.handleAppointOrgCode',
                              value: {
                                type: ['context', '$data_9798246$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '38701286_body',
                        },
                      ],
                    },
                    line_number: 10,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '512082',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_38701286?.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166943280062344300,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166943280062366140,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166943280062303000,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '093237',
                                  pageJsonId: '098531',
                                  type: 'error',
                                  value: '环节新增失败！',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                                shielding: true,
                                line_number: 15,
                              },
                            ],
                            condition: [],
                            desc: '失败',
                            elseIfs: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166943280062303000,
                                shielding: true,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '093237',
                                  pageJsonId: '098531',
                                  type: 'error',
                                  value: '环节新增失败！',
                                },
                                line_number: 15,
                              },
                            ],
                          },
                        ],
                        line_number: 11,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166943280062370800,
                            shielding: true,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '835123',
                              pageJsonId: '098531',
                              type: 'success',
                              value: '环节新增成功！',
                            },
                            line_number: 12,
                          },
                          {
                            type: 'closeModal',
                            dataId: 166943280062332500,
                            shielding: true,
                            options: {
                              compId: 'closeModal',
                              compName: 'page',
                              id: '445548',
                              pageJsonId: '098531',
                            },
                            line_number: 13,
                          },
                          {
                            type: 'okCallbackData',
                            dataId: 166943280062393900,
                            shielding: true,
                            options: {
                              compId: 'okCallbackData',
                              compName: 'page',
                              id: '064928',
                              pageJsonId: '098531',
                            },
                            line_number: 14,
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
          },
        ],
      },
    ];
    eventDataifelse277.params = [] || [];
    CMDGenerator(eventDataifelse277, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse278: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0194315',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166619340203813820,
        elseIfs: [],
        line_number: 16,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166936701921115420,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '670309',
              pageJsonId: '098531',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'modDcTacheCfg',
              _apiCode: 'modDcTacheCfg',
              _source: 'rhin',
              _serviceId: '884804879015129088',
              _serviceTitle: '环节修改-tsm: modDcTacheCfg',
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
                  dataKey: '670309_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '670309_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '670309_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'handlePost',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handlePost',
                      compType: 'Input',
                      name: 'handlePost',
                      parents: ['body'],
                      id: 'body.handlePost',
                      dataKey: '670309_body.handlePost',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handlePost',
                      },
                    },
                    {
                      code: 'handlePostLevel',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handlePostLevel',
                      compType: 'Input',
                      name: 'handlePostLevel',
                      parents: ['body'],
                      id: 'body.handlePostLevel',
                      dataKey: '670309_body.handlePostLevel',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handlePostLevel',
                      },
                    },
                    {
                      code: 'handleAppointOrgCode',
                      name: '处理人指定组织编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.handleAppointOrgCode',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleAppointOrgCode',
                      dataKey: '670309_body.handleAppointOrgCode',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleAppointOrgCode',
                      },
                    },
                    {
                      code: 'withAppointTacheCode',
                      name: '同指定环节编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.withAppointTacheCode',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.withAppointTacheCode',
                      dataKey: '670309_body.withAppointTacheCode',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'withAppointTacheCode',
                      },
                    },
                    {
                      code: 'extTacheCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.extTacheCode',
                      compType: 'Input',
                      name: 'extTacheCode',
                      parents: ['body'],
                      id: 'body.extTacheCode',
                      dataKey: '670309_body.extTacheCode',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'extTacheCode',
                      },
                    },
                    {
                      code: 'tacheName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.tacheName',
                      compType: 'Input',
                      name: 'tacheName',
                      parents: ['body'],
                      id: 'body.tacheName',
                      dataKey: '670309_body.tacheName',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'tacheName',
                      },
                    },
                    {
                      code: 'tacheSort',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.tacheSort',
                      compType: 'Input',
                      name: 'tacheSort',
                      parents: ['body'],
                      id: 'body.tacheSort',
                      dataKey: '670309_body.tacheSort',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'tacheSort',
                      },
                    },
                    {
                      code: 'orgTypes',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'body.orgTypes.listItem',
                          compType: 'Input',
                          parents: ['body', 'orgTypes'],
                          id: 'body.orgTypes.listItem',
                          dataKey: '670309_body.orgTypes.listItem',
                        },
                      ],
                      _id: 'body.orgTypes',
                      compType: 'Input',
                      name: 'orgTypes',
                      parents: ['body'],
                      id: 'body.orgTypes',
                      dataKey: '670309_body.orgTypes',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'orgTypes',
                      },
                    },
                    {
                      code: 'handleOrgLevels',
                      name: '处理人组织等级，多选',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'body.handleOrgLevels.listItem',
                          compType: 'Input',
                          parents: ['body', 'handleOrgLevels'],
                          id: 'body.handleOrgLevels.listItem',
                          dataKey: '670309_body.handleOrgLevels.listItem',
                        },
                      ],
                      _id: 'body.handleOrgLevels',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleOrgLevels',
                      dataKey: '670309_body.handleOrgLevels',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleOrgLevels',
                      },
                    },
                    {
                      code: 'smsArriveTemplate',
                      name: '短信到达模板编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.smsArriveTemplate',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.smsArriveTemplate',
                      dataKey: '670309_body.smsArriveTemplate',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'smsArriveTemplate',
                      },
                    },
                    {
                      code: 'smsOneTemplate',
                      name: '短信T+1模板编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.smsOneTemplate',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.smsOneTemplate',
                      dataKey: '670309_body.smsOneTemplate',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'smsOneTemplate',
                      },
                    },
                    {
                      code: 'smsTwoTemplate',
                      name: '短信T+2模板编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.smsTwoTemplate',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.smsTwoTemplate',
                      dataKey: '670309_body.smsTwoTemplate',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'smsTwoTemplate',
                      },
                    },
                    {
                      code: 'handleRegions',
                      name: '处理人区域，多选',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'body.handleRegions.listItem',
                          compType: 'Input',
                          parents: ['body', 'handleRegions'],
                          id: 'body.handleRegions.listItem',
                          dataKey: '670309_body.handleRegions.listItem',
                        },
                      ],
                      _id: 'body.handleRegions',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleRegions',
                      dataKey: '670309_body.handleRegions',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleRegions',
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
                      dataKey: '670309_body.tacheCode',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'tacheCode',
                      },
                    },
                    {
                      code: 'handleStaff',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handleStaff',
                      compType: 'Input',
                      name: 'handleStaff',
                      parents: ['body'],
                      id: 'body.handleStaff',
                      dataKey: '670309_body.handleStaff',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleStaff',
                      },
                    },
                    {
                      code: 'handleOrgLevel',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handleOrgLevel',
                      compType: 'Input',
                      name: 'handleOrgLevel',
                      parents: ['body'],
                      id: 'body.handleOrgLevel',
                      dataKey: '670309_body.handleOrgLevel',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleOrgLevel',
                      },
                    },
                    {
                      code: 'handleRegionFilterType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.handleRegionFilterType',
                      compType: 'Input',
                      name: 'handleRegionFilterType',
                      parents: ['body'],
                      id: 'body.handleRegionFilterType',
                      dataKey: '670309_body.handleRegionFilterType',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleRegionFilterType',
                      },
                    },
                    {
                      code: 'remark',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.remark',
                      compType: 'Input',
                      name: 'remark',
                      parents: ['body'],
                      id: 'body.remark',
                      dataKey: '670309_body.remark',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'remark',
                      },
                    },
                    {
                      code: 'handleFilterType',
                      name: '处理过滤类型',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.handleFilterType',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleFilterType',
                      dataKey: '670309_body.handleFilterType',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleFilterType',
                      },
                    },
                    {
                      code: 'extTacheName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.extTacheName',
                      compType: 'Input',
                      name: 'extTacheName',
                      parents: ['body'],
                      id: 'body.extTacheName',
                      dataKey: '670309_body.extTacheName',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'extTacheName',
                      },
                    },
                    {
                      code: 'approveGrade',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.approveGrade',
                      compType: 'Input',
                      name: 'approveGrade',
                      parents: ['body'],
                      id: 'body.approveGrade',
                      dataKey: '670309_body.approveGrade',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'approveGrade',
                      },
                    },
                    {
                      code: 'isNormalCountersign',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isNormalCountersign',
                      compType: 'Input',
                      name: 'isNormalCountersign',
                      parents: ['body'],
                      id: 'body.isNormalCountersign',
                      dataKey: '670309_body.isNormalCountersign',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isNormalCountersign',
                      },
                    },
                    {
                      code: 'flowDefineId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.flowDefineId',
                      compType: 'Input',
                      name: 'flowDefineId',
                      parents: ['body'],
                      id: 'body.flowDefineId',
                      dataKey: '670309_body.flowDefineId',
                      value: {
                        type: ['context', '$state.flowDefineId$'],
                        code: '',
                      },
                    },
                    {
                      code: 'isSupportMergeOrder',
                      name: '是否支持合单',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.isSupportMergeOrder',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.isSupportMergeOrder',
                      dataKey: '670309_body.isSupportMergeOrder',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isSupportMergeOrder',
                      },
                    },
                    {
                      code: 'cfgId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.cfgId',
                      compType: 'Input',
                      name: 'cfgId',
                      parents: ['body'],
                      id: 'body.cfgId',
                      dataKey: '670309_body.cfgId',
                      value: { type: ['context', '$state.bizId$'], code: '' },
                    },
                    {
                      code: 'readHandleType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.readHandleType',
                      compType: 'Input',
                      name: 'readHandleType',
                      parents: ['body'],
                      id: 'body.readHandleType',
                      dataKey: '670309_body.readHandleType',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'readHandleType',
                      },
                    },
                    {
                      code: 'isLeaderCountersign',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isLeaderCountersign',
                      compType: 'Input',
                      name: 'isLeaderCountersign',
                      parents: ['body'],
                      id: 'body.isLeaderCountersign',
                      dataKey: '670309_body.isLeaderCountersign',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isLeaderCountersign',
                      },
                    },
                    {
                      code: 'isHandleEditable',
                      name: '是否允许处理可编辑',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.isHandleEditable',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.isHandleEditable',
                      dataKey: '670309_body.isHandleEditable',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isHandleEditable',
                      },
                    },
                    {
                      code: 'isAreaCountersign',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.isAreaCountersign',
                      compType: 'Input',
                      name: 'isAreaCountersign',
                      parents: ['body'],
                      id: 'body.isAreaCountersign',
                      dataKey: '670309_body.isAreaCountersign',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'isAreaCountersign',
                      },
                    },
                    {
                      code: 'handleRegion',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'body.handleRegion',
                      compType: 'Input',
                      parents: ['body'],
                      id: 'body.handleRegion',
                      dataKey: '670309_body.handleRegion',
                      value: {
                        type: ['form', 'Form_039517', 'validateFields'],
                        code: 'handleRegion',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '670309_body',
                },
              ],
            },
            line_number: 17,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '512082',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_670309?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166936710265606460,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166936710265628930,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166936710265668380,
                        children: [],
                        todoOptions: ['msgType', 'value'],
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '948384',
                          pageJsonId: '098531',
                          type: 'error',
                          value: '环节修改失败！',
                        },
                        actionObjId: 'showMessage',
                        actionObjName: 'system',
                        value: 'showMessage',
                        elseIfs: [],
                        line_number: 22,
                      },
                    ],
                    condition: [],
                    desc: '失败',
                    elseIfs: [],
                    callback: [
                      {
                        type: 'showMessage',
                        dataId: 166936710265668380,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '948384',
                          pageJsonId: '098531',
                          type: 'error',
                          value: '环节修改失败！',
                        },
                        line_number: 22,
                      },
                    ],
                  },
                ],
                line_number: 18,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166936710265697600,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '1781422',
                      pageJsonId: '098531',
                      type: 'success',
                      value: '环节修改成功！',
                    },
                    line_number: 19,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166936710265633470,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '9965009',
                      pageJsonId: '098531',
                    },
                    line_number: 20,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166936710265685250,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '879968',
                      pageJsonId: '098531',
                    },
                    line_number: 21,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'getValue',
            dataId: 166943318026436380,
            shielding: true,
            options: {
              compId: 'TreeSelect_9963718',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'TreeSelect',
              id: '302617',
            },
            line_number: 23,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166943318026454560,
                shielding: true,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '224631',
                  pageJsonId: '098531',
                  code: 'function main(data,state,success,fail){console.log("\\u6307\\u5B9A\\u5904\\u7406\\u4EBA\\u7EC4\\u7EC7",value_302617);if(Object.prototype.toString.call(value_302617)==="[object Array]"){success("")}else{success(value_302617)}};',
                },
                line_number: 24,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 166943321191105600,
                    shielding: true,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '391683',
                      pageJsonId: '098531',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'modDcTacheCfg',
                      _apiCode: 'modDcTacheCfg',
                      _source: 'rhin',
                      _serviceId: '884804879015129088',
                      _serviceTitle: '环节修改-tsm: modDcTacheCfg',
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
                          dataKey: '391683_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '391683_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '391683_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'handleRegion',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.handleRegion',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.handleRegion',
                              dataKey: '391683_body.handleRegion',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleRegion',
                              },
                            },
                            {
                              code: 'orgTypes',
                              attrType: 'fieldArray',
                              mustFlag: 'F',
                              children: [
                                {
                                  code: 'listItem',
                                  name: '列表元素',
                                  attrType: 'field',
                                  type: 'object',
                                  _id: 'body.orgTypes.listItem',
                                  compType: 'Input',
                                  parents: ['body', 'orgTypes'],
                                  id: 'body.orgTypes.listItem',
                                  dataKey: '391683_body.orgTypes.listItem',
                                },
                              ],
                              _id: 'body.orgTypes',
                              compType: 'Input',
                              name: 'orgTypes',
                              parents: ['body'],
                              id: 'body.orgTypes',
                              dataKey: '391683_body.orgTypes',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'orgTypes',
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
                              dataKey: '391683_body.tacheCode',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'tacheCode',
                              },
                            },
                            {
                              code: 'extTacheName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.extTacheName',
                              compType: 'Input',
                              name: 'extTacheName',
                              parents: ['body'],
                              id: 'body.extTacheName',
                              dataKey: '391683_body.extTacheName',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'extTacheName',
                              },
                            },
                            {
                              code: 'extTacheCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.extTacheCode',
                              compType: 'Input',
                              name: 'extTacheCode',
                              parents: ['body'],
                              id: 'body.extTacheCode',
                              dataKey: '391683_body.extTacheCode',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'extTacheCode',
                              },
                            },
                            {
                              code: 'tacheSort',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.tacheSort',
                              compType: 'Input',
                              name: 'tacheSort',
                              parents: ['body'],
                              id: 'body.tacheSort',
                              dataKey: '391683_body.tacheSort',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'tacheSort',
                              },
                            },
                            {
                              code: 'approveGrade',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.approveGrade',
                              compType: 'Input',
                              name: 'approveGrade',
                              parents: ['body'],
                              id: 'body.approveGrade',
                              dataKey: '391683_body.approveGrade',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'approveGrade',
                              },
                            },
                            {
                              code: 'flowDefineId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.flowDefineId',
                              compType: 'Input',
                              name: 'flowDefineId',
                              parents: ['body'],
                              id: 'body.flowDefineId',
                              dataKey: '391683_body.flowDefineId',
                              value: {
                                type: ['context', '$state.flowDefineId$'],
                                code: '',
                              },
                            },
                            {
                              code: 'cfgId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'body.cfgId',
                              compType: 'Input',
                              name: 'cfgId',
                              parents: ['body'],
                              id: 'body.cfgId',
                              dataKey: '391683_body.cfgId',
                              value: {
                                type: ['context', '$state.bizId$'],
                                code: '',
                              },
                            },
                            {
                              code: 'tacheName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.tacheName',
                              compType: 'Input',
                              name: 'tacheName',
                              parents: ['body'],
                              id: 'body.tacheName',
                              dataKey: '391683_body.tacheName',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'tacheName',
                              },
                            },
                            {
                              code: 'handleStaff',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handleStaff',
                              compType: 'Input',
                              name: 'handleStaff',
                              parents: ['body'],
                              id: 'body.handleStaff',
                              dataKey: '391683_body.handleStaff',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleStaff',
                              },
                            },
                            {
                              code: 'handleOrgLevel',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handleOrgLevel',
                              compType: 'Input',
                              name: 'handleOrgLevel',
                              parents: ['body'],
                              id: 'body.handleOrgLevel',
                              dataKey: '391683_body.handleOrgLevel',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleOrgLevel',
                              },
                            },
                            {
                              code: 'readHandleType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.readHandleType',
                              compType: 'Input',
                              name: 'readHandleType',
                              parents: ['body'],
                              id: 'body.readHandleType',
                              dataKey: '391683_body.readHandleType',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'readHandleType',
                              },
                            },
                            {
                              code: 'isLeaderCountersign',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.isLeaderCountersign',
                              compType: 'Input',
                              name: 'isLeaderCountersign',
                              parents: ['body'],
                              id: 'body.isLeaderCountersign',
                              dataKey: '391683_body.isLeaderCountersign',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'isLeaderCountersign',
                              },
                            },
                            {
                              code: 'isAreaCountersign',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.isAreaCountersign',
                              compType: 'Input',
                              name: 'isAreaCountersign',
                              parents: ['body'],
                              id: 'body.isAreaCountersign',
                              dataKey: '391683_body.isAreaCountersign',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'isAreaCountersign',
                              },
                            },
                            {
                              code: 'handlePost',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handlePost',
                              compType: 'Input',
                              name: 'handlePost',
                              parents: ['body'],
                              id: 'body.handlePost',
                              dataKey: '391683_body.handlePost',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handlePost',
                              },
                            },
                            {
                              code: 'handleRegionFilterType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handleRegionFilterType',
                              compType: 'Input',
                              name: 'handleRegionFilterType',
                              parents: ['body'],
                              id: 'body.handleRegionFilterType',
                              dataKey: '391683_body.handleRegionFilterType',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleRegionFilterType',
                              },
                            },
                            {
                              code: 'handlePostLevel',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.handlePostLevel',
                              compType: 'Input',
                              name: 'handlePostLevel',
                              parents: ['body'],
                              id: 'body.handlePostLevel',
                              dataKey: '391683_body.handlePostLevel',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handlePostLevel',
                              },
                            },
                            {
                              code: 'remark',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.remark',
                              compType: 'Input',
                              name: 'remark',
                              parents: ['body'],
                              id: 'body.remark',
                              dataKey: '391683_body.remark',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'remark',
                              },
                            },
                            {
                              code: 'isNormalCountersign',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              _id: 'body.isNormalCountersign',
                              compType: 'Input',
                              name: 'isNormalCountersign',
                              parents: ['body'],
                              id: 'body.isNormalCountersign',
                              dataKey: '391683_body.isNormalCountersign',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'isNormalCountersign',
                              },
                            },
                            {
                              code: 'isSupportMergeOrder',
                              name: '是否支持合单',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.isSupportMergeOrder',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.isSupportMergeOrder',
                              dataKey: '391683_body.isSupportMergeOrder',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'isSupportMergeOrder',
                              },
                            },
                            {
                              code: 'withAppointTacheCode',
                              name: '同指定环节编码',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.withAppointTacheCode',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.withAppointTacheCode',
                              dataKey: '391683_body.withAppointTacheCode',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'withAppointTacheCode',
                              },
                            },
                            {
                              code: 'handleAppointOrgCode',
                              name: '处理人指定组织编码',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.handleAppointOrgCode',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.handleAppointOrgCode',
                              dataKey: '391683_body.handleAppointOrgCode',
                              value: {
                                type: ['context', '$data_224631$'],
                                code: '',
                              },
                            },
                            {
                              code: 'handleFilterType',
                              name: '处理过滤类型',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'body.handleFilterType',
                              compType: 'Input',
                              parents: ['body'],
                              id: 'body.handleFilterType',
                              dataKey: '391683_body.handleFilterType',
                              value: {
                                type: ['form', 'Form_039517', 'validateFields'],
                                code: 'handleFilterType',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '391683_body',
                        },
                      ],
                    },
                    line_number: 25,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '512082',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_391683?.resultCode$',
                              operate: '==',
                              manualValue: '0',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166943321191141540,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166943321191196000,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166943321191173630,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '87416',
                                  pageJsonId: '098531',
                                  type: 'error',
                                  value: '环节修改失败！',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                                shielding: true,
                                line_number: 30,
                              },
                            ],
                            condition: [],
                            desc: '失败',
                            elseIfs: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166943321191173630,
                                shielding: true,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '87416',
                                  pageJsonId: '098531',
                                  type: 'error',
                                  value: '环节修改失败！',
                                },
                                line_number: 30,
                              },
                            ],
                          },
                        ],
                        line_number: 26,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166943321191195600,
                            shielding: true,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '306603',
                              pageJsonId: '098531',
                              type: 'success',
                              value: '环节修改成功！',
                            },
                            line_number: 27,
                          },
                          {
                            type: 'closeModal',
                            dataId: 166943321191108960,
                            shielding: true,
                            options: {
                              compId: 'closeModal',
                              compName: 'page',
                              id: '28248',
                              pageJsonId: '098531',
                            },
                            line_number: 28,
                          },
                          {
                            type: 'okCallbackData',
                            dataId: 166943321191150400,
                            shielding: true,
                            options: {
                              compId: 'okCallbackData',
                              compName: 'page',
                              id: '540247',
                              pageJsonId: '098531',
                            },
                            line_number: 29,
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
          },
        ],
      },
    ];
    eventDataifelse278.params = [] || [];
    CMDGenerator(eventDataifelse278, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal89: any = [
      {
        type: 'closeModal',
        dataId: '745095_1',
        options: { compId: 'page', compName: 'page', id: '44032' },
        line_number: 1,
      },
    ];
    eventDatacloseModal89.params = [] || [];
    CMDGenerator(eventDatacloseModal89, {}, 'closeModal', {
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
    const eventDataapiRequest558: any = [
      {
        type: 'apiRequest',
        dataId: 167514851772825100,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '820397',
          pageJsonId: '098531',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '820397_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'attrCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '820397_path.attrCode',
                  value: { type: ['customize'], code: 'IS_HANDLE_EDITABLE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '820397_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '820397_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '820397_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167514858123049200,
            options: {
              compId: 'Select_848626',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'Select',
              id: '8846194',
              data: '$reply_820397?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest558.params = [] || [];
    CMDGenerator(eventDataapiRequest558, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest559: any = [
      {
        type: 'apiRequest',
        dataId: 166619180604171170,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '58856',
          pageJsonId: '098531',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '58856_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'attrCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '58856_path.attrCode',
                  value: { type: ['customize'], code: 'ORG_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '58856_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '58856_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '58856_body',
            },
          ],
          actionTitle: '组织类型查询',
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166619202205344860,
            options: {
              compId: 'MultipleSelect_5854355',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'MultipleSelect',
              id: '5662688',
              data: '$reply_58856?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest559.params = [] || [];
    CMDGenerator(eventDataapiRequest559, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest560: any = [
      {
        type: 'apiRequest',
        dataId: 166936429240930780,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '449094',
          pageJsonId: '098531',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryDcOaOrgListByParentOrgKey',
          _apiCode: 'qryDcOaOrgListByParentOrgKey',
          _source: 'rhin',
          _serviceId: '913340523929903104',
          _serviceTitle:
            '根据父ID查询组织列表-tsm: qryDcOaOrgListByParentOrgKey',
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
              dataKey: '449094_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '449094_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '449094_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'parentOrgKey',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentOrgKey',
                  compType: 'Input',
                  name: 'parentOrgKey',
                  parents: ['body'],
                  id: 'body.parentOrgKey',
                  dataKey: '449094_body.parentOrgKey',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  code: 'orgCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.orgCode',
                  compType: 'Input',
                  name: 'orgCode',
                  parents: ['body'],
                  id: 'body.orgCode',
                  dataKey: '449094_body.orgCode',
                },
                {
                  code: 'orgName',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.orgName',
                  compType: 'Input',
                  name: 'orgName',
                  parents: ['body'],
                  id: 'body.orgName',
                  dataKey: '449094_body.orgName',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '449094_body',
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166936432430596580,
            options: {
              compId: 'TreeSelect_9963718',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'TreeSelect',
              id: '56300264',
              data: '$reply_449094?.resultData$',
              labelKey: 'orgName',
              nodeValueKey: 'orgCode',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest560.params = [] || [];
    CMDGenerator(eventDataapiRequest560, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest561: any = [
      {
        type: 'apiRequest',
        dataId: 166619169798226430,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '098541',
          pageJsonId: '098531',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '098541_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'attrCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '098541_path.attrCode',
                  value: { type: ['customize'], code: 'READ_HANDLE_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '098541_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '098541_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '098541_body',
            },
          ],
          actionTitle: '阅办类型查询',
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166619183185015650,
            options: {
              compId: 'Select_6964566',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'Select',
              id: '68636415',
              data: '$reply_098541?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 8,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest561.params = [] || [];
    CMDGenerator(eventDataapiRequest561, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest562: any = [
      {
        type: 'apiRequest',
        dataId: 166619178528356960,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '6721825',
          pageJsonId: '098531',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '6721825_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'attrCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '6721825_path.attrCode',
                  value: {
                    type: ['customize'],
                    code: 'HANDLE_REGION_FILTER_TYPE',
                  },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '6721825_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '6721825_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '6721825_body',
            },
          ],
          actionTitle: '处理人区域过滤类型查询',
        },
        line_number: 9,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166619189735554720,
            options: {
              compId: 'Select_304146',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'Select',
              id: '441183',
              data: '$reply_6721825?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 10,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest562.params = [] || [];
    CMDGenerator(eventDataapiRequest562, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest563: any = [
      {
        type: 'apiRequest',
        dataId: 166619180196566050,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5639647',
          pageJsonId: '098531',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '5639647_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'attrCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '5639647_path.attrCode',
                  value: { type: ['customize'], code: 'ORG_LEVEL' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '5639647_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '5639647_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '5639647_body',
            },
          ],
          actionTitle: '处理人组织等级查询',
        },
        line_number: 11,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167273240802839870,
            options: {
              compId: 'MultipleSelect_7085787',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'MultipleSelect',
              id: '130009',
              data: '$reply_5639647?.resultData$',
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
    eventDataapiRequest563.params = [] || [];
    CMDGenerator(eventDataapiRequest563, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest564: any = [
      {
        type: 'apiRequest',
        dataId: 166619180329305000,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '747334',
          pageJsonId: '098531',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
              dataKey: '747334_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'attrCode',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.attrCode',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.attrCode',
                  dataKey: '747334_path.attrCode',
                  value: { type: ['customize'], code: 'POST_LEVEL' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '747334_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '747334_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '747334_body',
            },
          ],
          actionTitle: '处理人岗位等级查询',
        },
        line_number: 13,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166619198534079550,
            options: {
              compId: 'Select_4282221',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'Select',
              id: '606657',
              data: '$reply_747334?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest564.params = [] || [];
    CMDGenerator(eventDataapiRequest564, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse279: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0194315',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166619204571391970,
        elseIfs: [],
        line_number: 15,
        callback1: [
          {
            type: 'setDisable',
            dataId: 166619211013258080,
            options: {
              compId: 'Form_039517',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'Form',
              id: '095571',
              disabled: 'true',
            },
            line_number: 16,
          },
          {
            type: 'setCurrentFormValues',
            dataId: 166619240220856930,
            options: {
              compId: 'Form_039517',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'Form',
              id: '375528',
              params: '$state.tacheObj$',
            },
            line_number: 17,
          },
          {
            type: 'callSelfFunc',
            dataId: 166942730111149570,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '159717',
              pageJsonId: '098531',
              customFuncName: 'handleTypeChange',
              customFuncParams: 'object',
              paramsObj: {
                handleFilterType: '$state.tacheObj.handleFilterType$',
              },
              paramsObjKeyValueMap: {
                handleFilterType: '$state.tacheObj.handleFilterType$',
              },
            },
            line_number: 18,
            callback1: [],
            callback2: [],
          },
          {
            type: 'setValue',
            dataId: 166619213503075700,
            shielding: true,
            options: {
              compId: 'MultipleSelect_5854355',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'MultipleSelect',
              id: '574578',
              value: '$state.tacheObj.orgTypeList.split(",")$',
              valueList: {
                MultipleSelect_5854355:
                  '$state.tacheObj.orgTypeList?.split(",")$',
              },
            },
            line_number: 19,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 167273381630466300,
            options: {
              compId: [
                'MultipleSelect_5854355',
                'MultipleSelect_086387',
                'MultipleSelect_7085787',
              ],
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'MultipleSelect',
              id: '668185',
              value: '$state.tacheObj.orgTypeList.split(",")$',
              valueList: {
                MultipleSelect_5854355:
                  '$state.tacheObj.orgTypeList?.split(",") || []$',
                MultipleSelect_7085787:
                  '$state.tacheObj.handleOrgLevel?.split(",") || []$',
                MultipleSelect_086387:
                  '$state.tacheObj.handleRegion?.split(",") || []$',
              },
              compid: [
                'MultipleSelect_5854355',
                'MultipleSelect_086387',
                'MultipleSelect_7085787',
              ],
            },
            line_number: 20,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse279.params = [] || [];
    CMDGenerator(eventDataifelse279, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse280: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0194315',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166619208032267870,
        elseIfs: [],
        line_number: 21,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 166619241602285120,
            options: {
              compId: 'Form_039517',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'Form',
              id: '21596715',
              params: '$state.tacheObj$',
            },
            line_number: 22,
          },
          {
            type: 'callSelfFunc',
            dataId: 166942731739054560,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '7577447',
              pageJsonId: '098531',
              customFuncName: 'handleTypeChange',
              customFuncParams: 'object',
              paramsObj: {
                handleFilterType: '$state.tacheObj.handleFilterType$',
              },
              paramsObjKeyValueMap: {
                handleFilterType: '$state.tacheObj.handleFilterType$',
              },
            },
            line_number: 23,
            callback1: [],
            callback2: [],
          },
          {
            type: 'setValue',
            dataId: 167273459238554270,
            options: {
              compId: [
                'MultipleSelect_5854355',
                'MultipleSelect_086387',
                'MultipleSelect_7085787',
              ],
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'MultipleSelect',
              id: '050182',
              value: '$state.tacheObj.orgTypeList.split(",")$',
              valueList: {
                MultipleSelect_5854355:
                  '$state.tacheObj.orgTypeList?.split(",") || []$',
                MultipleSelect_7085787:
                  '$state.tacheObj.handleOrgLevel?.split(",") || []$',
                MultipleSelect_086387:
                  '$state.tacheObj.handleRegion?.split(",") || []$',
              },
              compid: [
                'MultipleSelect_5854355',
                'MultipleSelect_086387',
                'MultipleSelect_7085787',
              ],
            },
            line_number: 24,
            callback1: [],
          },
          {
            type: 'console',
            dataId: 166942821413842180,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '966989',
              pageJsonId: '098531',
              value: ['tacheObj', '$state.tacheObj$'],
            },
            line_number: 25,
          },
        ],
      },
    ];
    eventDataifelse280.params = [] || [];
    CMDGenerator(eventDataifelse280, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse281: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0194315',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'A',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 16661920832174992,
        elseIfs: [],
        line_number: 26,
        callback1: [
          {
            type: 'setValue',
            dataId: 167765111498366800,
            options: {
              compId: 'Input_796387',
              compLib: 'comm',
              pageJsonId: '098531',
              compName: 'Input',
              id: '40142',
              valueList: { Input_796387: 'TACHE_ARRIVE' },
            },
            line_number: 27,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse281.params = [] || [];
    CMDGenerator(eventDataifelse281, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_098531__"
    >
      <View
        className="View_View_098531_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_098531_1',
          uid: 'View_098531_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_098531_1')}
        {...injectData}
      >
        <View
          className="View_View_7476677"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_7476677',
            uid: 'View_7476677',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_7476677')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={12}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_039517'}
            formColumns={[
              {
                id: 'Input_583192',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '环节名称',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: true,
                  placeholder: '请输入',
                  formItemIndex: 0,
                  fieldName: 'tacheName',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_379906',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '环节编码',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: true,
                  placeholder: '请输入',
                  formItemIndex: 1,
                  fieldName: 'tacheCode',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_116058375',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '外部环节名称',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: true,
                  placeholder: '请输入',
                  formItemIndex: 2,
                  fieldName: 'extTacheName',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_332043',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '外部环节编码',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: true,
                  placeholder: '请输入',
                  formItemIndex: 3,
                  fieldName: 'extTacheCode',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_2689077',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '是否允许会签',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  attr: {
                    attrName: '公共_是否通用',
                    attrId: '884379924399366144',
                    attrNbr: 'PUB_001',
                    childKeys: [],
                    dataType: 'all',
                    selectedKeyTags: [],
                  },
                  placeholder: '请选择',
                  formItemIndex: 4,
                  fieldName: 'isNormalCountersign',
                  staticData: {
                    data: {
                      statusCd: '00A',
                      creatorId: '50167',
                      updatorId: null,
                      createdTime: '2022-09-06 18:10:04',
                      updatedTime: '2022-09-06 18:10:04',
                      statusTime: '2022-09-06 18:10:04',
                      remark: null,
                      tenantCode: null,
                      attrId: '884379924399366144',
                      busiTypeId: null,
                      attrNbr: 'PUB_001',
                      attrName: '公共_是否通用',
                      attrDesc: null,
                      extAttrId: null,
                      parAttrId: null,
                      defaultValue: null,
                      attrValueDataType: null,
                      attrValueType: null,
                      appId: '871672424566726656',
                      actionType: null,
                      creatorName: null,
                      updatorName: null,
                      attrValueDTOList: null,
                      script: null,
                      childKeys: [],
                      dataType: 'all',
                      selectedKeyTags: [],
                    },
                    type: 'static',
                  },
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_2023626',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '是否允许领导会签',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  attr: {
                    attrName: '公共_是否通用',
                    attrId: '884379924399366144',
                    attrNbr: 'PUB_001',
                    childKeys: [],
                    dataType: 'all',
                    selectedKeyTags: [],
                  },
                  placeholder: '请选择',
                  formItemIndex: 5,
                  staticData: {
                    data: {
                      statusCd: '00A',
                      creatorId: '50167',
                      updatorId: null,
                      createdTime: '2022-09-06 18:10:04',
                      updatedTime: '2022-09-06 18:10:04',
                      statusTime: '2022-09-06 18:10:04',
                      remark: null,
                      tenantCode: null,
                      attrId: '884379924399366144',
                      busiTypeId: null,
                      attrNbr: 'PUB_001',
                      attrName: '公共_是否通用',
                      attrDesc: null,
                      extAttrId: null,
                      parAttrId: null,
                      defaultValue: null,
                      attrValueDataType: null,
                      attrValueType: null,
                      appId: '871672424566726656',
                      actionType: null,
                      creatorName: null,
                      updatorName: null,
                      attrValueDTOList: null,
                      script: null,
                      childKeys: [],
                      dataType: 'all',
                      selectedKeyTags: [],
                    },
                    type: 'static',
                  },
                  fieldName: 'isLeaderCountersign',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_3559509',
                label: '下拉单选',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '是否允许其他区县会签',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  attr: {
                    attrName: '公共_是否通用',
                    attrId: '884379924399366144',
                    attrNbr: 'PUB_001',
                    childKeys: [],
                    dataType: 'all',
                    selectedKeyTags: [],
                  },
                  placeholder: '请选择',
                  formItemIndex: 6,
                  fieldName: 'isAreaCountersign',
                  staticData: {
                    data: {
                      statusCd: '00A',
                      creatorId: '50167',
                      updatorId: null,
                      createdTime: '2022-09-06 18:10:04',
                      updatedTime: '2022-09-06 18:10:04',
                      statusTime: '2022-09-06 18:10:04',
                      remark: null,
                      tenantCode: null,
                      attrId: '884379924399366144',
                      busiTypeId: null,
                      attrNbr: 'PUB_001',
                      attrName: '公共_是否通用',
                      attrDesc: null,
                      extAttrId: null,
                      parAttrId: null,
                      defaultValue: null,
                      attrValueDataType: null,
                      attrValueType: null,
                      appId: '871672424566726656',
                      actionType: null,
                      creatorName: null,
                      updatorName: null,
                      attrValueDTOList: null,
                      script: null,
                      childKeys: [],
                      dataType: 'all',
                      selectedKeyTags: [],
                    },
                    type: 'static',
                  },
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_4565668',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '是否支持合单',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  attr: {
                    attrName: '公共_是否通用',
                    attrId: '884379924399366144',
                    attrNbr: 'PUB_001',
                    childKeys: [],
                    dataType: 'all',
                    selectedKeyTags: [],
                  },
                  placeholder: '请选择',
                  formItemIndex: 7,
                  fieldName: 'isSupportMergeOrder',
                  staticData: {
                    data: {
                      statusCd: '00A',
                      creatorId: '50167',
                      updatorId: null,
                      createdTime: '2022-09-06 18:10:04',
                      updatedTime: '2022-09-06 18:10:04',
                      statusTime: '2022-09-06 18:10:04',
                      remark: null,
                      tenantCode: null,
                      attrId: '884379924399366144',
                      busiTypeId: null,
                      attrNbr: 'PUB_001',
                      attrName: '公共_是否通用',
                      attrDesc: null,
                      extAttrId: null,
                      parAttrId: null,
                      defaultValue: null,
                      attrValueDataType: null,
                      attrValueType: null,
                      appId: '871672424566726656',
                      actionType: null,
                      creatorName: null,
                      updatorName: null,
                      attrValueDTOList: null,
                      script: null,
                      childKeys: [],
                      dataType: 'all',
                      selectedKeyTags: [],
                    },
                    type: 'static',
                  },
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_6964566',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '阅办类型',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  attr: { selectedKeyTags: [], dataType: 'local' },
                  placeholder: '请选择',
                  formItemIndex: 8,
                  fieldName: 'readHandleType',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_304146',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理人区域过滤类型',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  attr: { selectedKeyTags: [], dataType: 'local' },
                  placeholder: '请选择',
                  formItemIndex: 9,
                  fieldName: 'handleRegionFilterType',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_6431794',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '环节顺序',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  formItemIndex: 10,
                  fieldName: 'tacheSort',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_7113795',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '审批等级',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  formItemIndex: 11,
                  fieldName: 'approveGrade',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_378379',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理类型',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: true,
                  filter: 'none',
                  classification: 'default',
                  placeholder: '请选择',
                  formItemIndex: 12,
                  fieldName: 'tacheHandleFilterType',
                  staticData: {
                    data: [
                      { id: '4656104', label: '固定人过滤', value: '1001' },
                      { id: '23376', label: '固定岗位过滤', value: '1002' },
                      { id: '8280845', label: '按组织过滤', value: '1003' },
                      { id: '906731', label: '同指定环节过滤', value: '1004' },
                    ],
                    type: 'custom',
                  },
                  options: [
                    { id: '4656104', label: '固定人过滤', value: '1001' },
                    { id: '23376', label: '固定岗位过滤', value: '1002' },
                    { id: '8280845', label: '按组织过滤', value: '1003' },
                    { id: '906731', label: '同指定环节过滤', value: '1004' },
                  ],
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [
                  {
                    dataName: 'event',
                    dataId: 166934487494139500,
                    children: [
                      {
                        dataName: 'condition',
                        dataId: 166934488411962720,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166934667785278460,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166934667785301250,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166934667785349820,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '795963',
                              pageJsonId: '098531',
                              customFuncName: 'hideOrg',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                          },
                          {
                            dataName: 'action',
                            dataId: 166934668438840640,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166934668438827200,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166934668438879900,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '940536',
                              pageJsonId: '098531',
                              customFuncName: 'hideTache',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                          },
                          {
                            dataName: 'action',
                            dataId: 166934669074882080,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166934669074802800,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166934669074967680,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '912527',
                              pageJsonId: '098531',
                              customFuncName: 'hideHandlePost',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                          },
                          {
                            dataName: 'action',
                            dataId: 166934670006956060,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166934670006965500,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166934670006985000,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '042241',
                              pageJsonId: '098531',
                              customFuncName: 'showHandle',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                          },
                        ],
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166934510254897470,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166934672842927460,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934672842916480,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934672842948740,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '2063876',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideOrg',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934673650087580,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934673650019500,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934673650069380,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '525928',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideHandle',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934673818857730,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934673818859600,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934673818871500,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '512354',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideTache',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934673979699650,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934673979688960,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934673979686080,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '530314',
                                  pageJsonId: '098531',
                                  customFuncName: 'showHandlePost',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: e,
                                  operate: '==',
                                  manualValue: '1002',
                                },
                                condId: '225385',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            elseIfs: [],
                            desc: '岗位',
                          },
                          {
                            dataName: 'elseIf',
                            dataId: 166934675438149730,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166934678327793920,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934678327714000,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934678327714460,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '6092597',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideHandle',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934678586171600,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934678586158000,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934678586100640,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '040163',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideTache',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934678750184500,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934678750171840,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934678750145820,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '226252',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideHandlePost',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934678900341280,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934678900370600,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934678900319580,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '153063',
                                  pageJsonId: '098531',
                                  customFuncName: 'showOrg',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: e,
                                  operate: '==',
                                  manualValue: '1003',
                                },
                                condId: '1809386',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '组织',
                          },
                          {
                            dataName: 'elseIf',
                            dataId: 166934681452525060,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166934683500580030,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934683500532800,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934683500513730,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '242214',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideOrg',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934683669579360,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934683669510100,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934683669566600,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '1114545',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideHandle',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934683826807260,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934683826857300,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934683826817380,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '146538',
                                  pageJsonId: '098531',
                                  customFuncName: 'hideHandlePost',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                              {
                                dataName: 'action',
                                dataId: 166934683986111040,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166934683986154430,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166934683986137760,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                  },
                                ],
                                todoOptions: [
                                  'customFuncName',
                                  'customFuncParams',
                                ],
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '109587',
                                  pageJsonId: '098531',
                                  customFuncName: 'showTache',
                                },
                                actionObjId: 'callSelfFunc',
                                actionObjName: 'system',
                                value: 'callSelfFunc',
                              },
                            ],
                            condition: [
                              {
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: e,
                                  operate: '==',
                                  manualValue: '1004',
                                },
                                condId: '05865',
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            desc: '同环节',
                          },
                          {
                            dataName: 'elseIf',
                            dataId: 16693468697455044,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166934690426315650,
                                children: [],
                                todoOptions: ['valueArray'],
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '7189328',
                                  pageJsonId: '098531',
                                  value: ['处理类型值：', e],
                                },
                                actionObjId: 'debug',
                                actionObjName: 'system',
                                value: 'console',
                              },
                            ],
                            condition: [],
                            desc: '处理类型未取得约定值',
                          },
                        ],
                        condition: [
                          {
                            condId: '209038',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: e,
                              operate: '==',
                              manualValue: '1001',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '处理人',
                      },
                    ],
                    value: 'onChange',
                    params: [{ title: '下拉框取值', name: 'e', value: e }],
                    elseIfs: [],
                  },
                ],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_049724',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '同指定环节',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  filter: 'none',
                  classification: 'default',
                  attr: {},
                  placeholder: '请选择',
                  formItemIndex: 13,
                  fieldName: 'withAppointTacheId',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_668689_5940303',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理人员',
                  basicStatus: 4,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: '16',
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '选择处理人员',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  formItemIndex: 14,
                  fieldName: 'handleStaffName',
                  postfixStyle: '3',
                  disabled: false,
                  visible: true,
                  readOnly: true,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [
                  {
                    dataName: 'event',
                    dataId: 166210684131586180,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166547684276573920,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166547684276595200,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 16659723928556222,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166597239957664580,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166597239957601250,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166597239957605150,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166597239957636030,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: ['value'],
                                            options: {
                                              compId: 'Input_668689_5940303',
                                              compLib: 'comm',
                                              pageJsonId: '530274',
                                              compName: 'Input',
                                              id: '694321',
                                              value: okData_443613.userName,
                                            },
                                            actionObjId: 'Input_668689_5940303',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166597239957634750,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166597239957613280,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: ['value'],
                                            options: {
                                              compId: 'Input_9206452',
                                              compLib: 'comm',
                                              pageJsonId: '530274',
                                              compName: 'Input',
                                              id: '6445214',
                                              value: okData_443613.userCode,
                                            },
                                            actionObjId: 'Input_9206452',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [
                                          {
                                            title: '弹窗确认回调参数',
                                            name: 'okData_016049',
                                            value: okData_443613,
                                          },
                                        ],
                                        elseIfs: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166597239957606620,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: ['modalname', 'compState'],
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '443613',
                                      pageJsonId: '530274',
                                      modalname: '/audit/selectonepostuser',
                                      pageId: '897014700989980672',
                                      paramsObj: {
                                        tacheCode:
                                          selectedData_1932047[0]?.value,
                                        flowCode: data?.globalParam?.flowCode,
                                      },
                                      paramsObjKeyValueMap: {
                                        tacheCode:
                                          selectedData_1932047[0]?.value,
                                        flowCode: data?.globalParam?.flowCode,
                                      },
                                    },
                                    actionObjId: 'showCustomModal',
                                    actionObjName: 'page',
                                    value: 'showCustomModal',
                                    elseIfs: [],
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166597344303980830,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166597344881641600,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166597344881645300,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166597344881630400,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166597344881636060,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: ['value'],
                                                options: {
                                                  compId:
                                                    'Input_668689_5940303',
                                                  compLib: 'comm',
                                                  pageJsonId: '530274',
                                                  compName: 'Input',
                                                  id: '288118',
                                                  value:
                                                    okData_1424606.staffSelect
                                                      ?.userName,
                                                },
                                                actionObjId:
                                                  'Input_668689_5940303',
                                                actionObjName: 'Input',
                                                value: 'setValue',
                                                compLib: 'comm',
                                                elseIfs: [],
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 16659734488161124,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166597344881695360,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: ['value'],
                                                options: {
                                                  compId: 'Input_9206452',
                                                  compLib: 'comm',
                                                  pageJsonId: '530274',
                                                  compName: 'Input',
                                                  id: '306824',
                                                  value:
                                                    okData_1424606.staffSelect
                                                      ?.userCode,
                                                },
                                                actionObjId: 'Input_9206452',
                                                actionObjName: 'Input',
                                                value: 'setValue',
                                                compLib: 'comm',
                                                elseIfs: [],
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [
                                              {
                                                title: '弹窗确认回调参数',
                                                name: 'okData_016049',
                                                value: okData_1424606,
                                              },
                                            ],
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166597344881613600,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: ['modalname', 'compState'],
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'page',
                                          id: '1424606',
                                          pageJsonId: '530274',
                                          modalname: '/audit/selectoneuser',
                                          pageId: '881887068344979456',
                                          paramsObj: {
                                            tacheCode:
                                              selectedData_1932047[0]?.value,
                                            flowCode:
                                              data?.globalParam?.flowCode,
                                            workItemId:
                                              data?.globalParam?.workItemId,
                                          },
                                          paramsObjKeyValueMap: {
                                            tacheCode:
                                              selectedData_1932047[0]?.value,
                                            flowCode:
                                              data?.globalParam?.flowCode,
                                            workItemId:
                                              data?.globalParam?.workItemId,
                                          },
                                        },
                                        actionObjId: 'showCustomModal',
                                        actionObjName: 'page',
                                        value: 'showCustomModal',
                                        elseIfs: [],
                                      },
                                    ],
                                    condition: [],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '417841',
                                    options: {
                                      context: data?.globalParam?.popupType,
                                      operate: '==',
                                      useManual: true,
                                      manualValue: 'post',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166547684276564130,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166547754215848640,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '719037',
                                  pageJsonId: '530274',
                                  type: 'info',
                                  value: '请先选择下一处理环节',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                              },
                            ],
                            value: 'callback2',
                            params: [],
                            elseIfs: [],
                          },
                        ],
                        todoOptions: [],
                        options: {
                          compId: 'Select_6041524',
                          compLib: 'comm',
                          pageJsonId: '530274',
                          compName: 'Select',
                          id: '1932047',
                        },
                        actionObjId: 'Select_6041524',
                        actionObjName: 'Select',
                        value: 'getSelectedData',
                        compLib: 'comm',
                        elseIfs: [],
                      },
                    ],
                    value: 'onIconClick',
                    params: [],
                    elseIfs: [],
                  },
                ],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_098526',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理人员隐藏',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  formItemIndex: 15,
                  fieldName: 'handleStaff',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Input_668689_5940303_573587',
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理岗位',
                  basicStatus: 4,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: '16',
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '选择处理岗位',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  formItemIndex: 16,
                  fieldName: 'handlePostName',
                  postfixStyle: '3',
                  disabled: false,
                  visible: true,
                  readOnly: true,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [
                  {
                    dataName: 'event',
                    dataId: 166210684131586180,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166547684276573920,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166547684276595200,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 16659723928556222,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166597239957664580,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166597239957601250,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166597239957605150,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166597239957636030,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: ['value'],
                                            options: {
                                              compId:
                                                'Input_668689_5940303_573587',
                                              compLib: 'comm',
                                              pageJsonId: '530274',
                                              compName: 'Input',
                                              id: '694321',
                                              value: okData_443613.userName,
                                            },
                                            actionObjId:
                                              'Input_668689_5940303_573587',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166597239957634750,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166597239957613280,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                              },
                                            ],
                                            todoOptions: ['value'],
                                            options: {
                                              compId: 'Input_9206452',
                                              compLib: 'comm',
                                              pageJsonId: '530274',
                                              compName: 'Input',
                                              id: '6445214',
                                              value: okData_443613.userCode,
                                            },
                                            actionObjId: 'Input_9206452',
                                            actionObjName: 'Input',
                                            value: 'setValue',
                                            compLib: 'comm',
                                            elseIfs: [],
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [
                                          {
                                            title: '弹窗确认回调参数',
                                            name: 'okData_016049',
                                            value: okData_443613,
                                          },
                                        ],
                                        elseIfs: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166597239957606620,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: ['modalname', 'compState'],
                                    options: {
                                      compId: 'showCustomModal',
                                      compName: 'page',
                                      id: '443613',
                                      pageJsonId: '530274',
                                      modalname: '/audit/selectonepostuser',
                                      pageId: '897014700989980672',
                                      paramsObj: {
                                        tacheCode:
                                          selectedData_1932047[0]?.value,
                                        flowCode: data?.globalParam?.flowCode,
                                      },
                                      paramsObjKeyValueMap: {
                                        tacheCode:
                                          selectedData_1932047[0]?.value,
                                        flowCode: data?.globalParam?.flowCode,
                                      },
                                    },
                                    actionObjId: 'showCustomModal',
                                    actionObjName: 'page',
                                    value: 'showCustomModal',
                                    elseIfs: [],
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166597344303980830,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166597344881641600,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166597344881645300,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166597344881630400,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166597344881636060,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: ['value'],
                                                options: {
                                                  compId:
                                                    'Input_668689_5940303_573587',
                                                  compLib: 'comm',
                                                  pageJsonId: '530274',
                                                  compName: 'Input',
                                                  id: '288118',
                                                  value:
                                                    okData_1424606.staffSelect
                                                      ?.userName,
                                                },
                                                actionObjId:
                                                  'Input_668689_5940303_573587',
                                                actionObjName: 'Input',
                                                value: 'setValue',
                                                compLib: 'comm',
                                                elseIfs: [],
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 16659734488161124,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166597344881695360,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: ['value'],
                                                options: {
                                                  compId: 'Input_9206452',
                                                  compLib: 'comm',
                                                  pageJsonId: '530274',
                                                  compName: 'Input',
                                                  id: '306824',
                                                  value:
                                                    okData_1424606.staffSelect
                                                      ?.userCode,
                                                },
                                                actionObjId: 'Input_9206452',
                                                actionObjName: 'Input',
                                                value: 'setValue',
                                                compLib: 'comm',
                                                elseIfs: [],
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [
                                              {
                                                title: '弹窗确认回调参数',
                                                name: 'okData_016049',
                                                value: okData_1424606,
                                              },
                                            ],
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166597344881613600,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: ['modalname', 'compState'],
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'page',
                                          id: '1424606',
                                          pageJsonId: '530274',
                                          modalname: '/audit/selectoneuser',
                                          pageId: '881887068344979456',
                                          paramsObj: {
                                            tacheCode:
                                              selectedData_1932047[0]?.value,
                                            flowCode:
                                              data?.globalParam?.flowCode,
                                            workItemId:
                                              data?.globalParam?.workItemId,
                                          },
                                          paramsObjKeyValueMap: {
                                            tacheCode:
                                              selectedData_1932047[0]?.value,
                                            flowCode:
                                              data?.globalParam?.flowCode,
                                            workItemId:
                                              data?.globalParam?.workItemId,
                                          },
                                        },
                                        actionObjId: 'showCustomModal',
                                        actionObjName: 'page',
                                        value: 'showCustomModal',
                                        elseIfs: [],
                                      },
                                    ],
                                    condition: [],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '417841',
                                    options: {
                                      context: data?.globalParam?.popupType,
                                      operate: '==',
                                      useManual: true,
                                      manualValue: 'post',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                              },
                            ],
                            value: 'callback1',
                            params: [],
                            elseIfs: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166547684276564130,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166547754215848640,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '719037',
                                  pageJsonId: '530274',
                                  type: 'info',
                                  value: '请先选择下一处理环节',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                              },
                            ],
                            value: 'callback2',
                            params: [],
                            elseIfs: [],
                          },
                        ],
                        todoOptions: [],
                        options: {
                          compId: 'Select_6041524',
                          compLib: 'comm',
                          pageJsonId: '530274',
                          compName: 'Select',
                          id: '1932047',
                        },
                        actionObjId: 'Select_6041524',
                        actionObjName: 'Select',
                        value: 'getSelectedData',
                        compLib: 'comm',
                        elseIfs: [],
                      },
                    ],
                    value: 'onIconClick',
                    params: [],
                    elseIfs: [],
                  },
                ],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_770567',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理岗位隐藏',
                  basicStatus: 2,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  filter: 'none',
                  classification: 'default',
                  attr: { selectedKeyTags: [], dataType: 'local' },
                  placeholder: '请选择',
                  formItemIndex: 17,
                  fieldName: 'handlePost',
                  allowClear: true,
                  disabled: false,
                  visible: false,
                  readOnly: false,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'TreeSelect_9963718',
                label: '树选择',
                compName: 'TreeSelect',
                type: 'TreeSelect',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '指定处理人组织',
                  basicStatus: 1,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  treeDefaultExpandAll: true,
                  size: 'default',
                  showSearch: false,
                  treeNodeFilterProp: 'title',
                  treeData: [
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
                  ],
                  visible: true,
                  formItemIndex: 18,
                  fieldName: 'handleAppointOrgId',
                  required: false,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'TreeSelect',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_163479',
                label: '下拉框',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理人区域',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  filter: 'none',
                  classification: 'default',
                  attr: {
                    attrName: '地市编码',
                    attrId: '882796693946773504',
                    attrNbr: 'CITY_CODE',
                    childKeys: [],
                    dataType: 'all',
                    selectedKeyTags: [],
                  },
                  placeholder: '请选择',
                  formItemIndex: 19,
                  fieldName: 'handleRegion',
                  staticData: {
                    data: {
                      statusCd: '00A',
                      creatorId: '50167',
                      updatorId: null,
                      createdTime: '2022-09-02 09:18:53',
                      updatedTime: '2022-09-02 09:18:53',
                      statusTime: '2022-09-02 09:18:53',
                      remark: null,
                      tenantCode: null,
                      attrId: '882796693946773504',
                      busiTypeId: null,
                      attrNbr: 'CITY_CODE',
                      attrName: '地市编码',
                      attrDesc: null,
                      extAttrId: null,
                      parAttrId: null,
                      defaultValue: null,
                      attrValueDataType: null,
                      attrValueType: null,
                      appId: '871672424566726656',
                      actionType: null,
                      creatorName: null,
                      updatorName: null,
                      attrValueDTOList: null,
                      script: null,
                      childKeys: [],
                      dataType: 'all',
                      selectedKeyTags: [],
                    },
                    type: 'static',
                  },
                  allowClear: true,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_7370283',
                label: '下拉单选',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理人组织等级',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  filter: 'none',
                  classification: 'default',
                  attr: { selectedKeyTags: [], dataType: 'local' },
                  placeholder: '请选择',
                  formItemIndex: 20,
                  fieldName: 'handleOrgLevel',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'Select_4282221',
                label: '下拉单选',
                compName: 'Select',
                type: 'Select',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '处理人岗位等级',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  filter: 'none',
                  classification: 'default',
                  attr: { selectedKeyTags: [], dataType: 'local' },
                  placeholder: '请选择',
                  formItemIndex: 21,
                  fieldName: 'handlePostLevel',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Select',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
              {
                id: 'MultipleSelect_5854355',
                label: '下拉框',
                compName: 'MultipleSelect',
                type: 'MultipleSelect',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '组织类型',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  filter: 'none',
                  attr: {},
                  placeholder: '请选择',
                  mode: 'multiple',
                  formItemIndex: 22,
                  fieldName: 'orgTypes',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'MultipleSelect',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                hasValue: true,
                components: [],
              },
              {
                id: 'TextArea_144542',
                label: '文本框',
                compName: 'TextArea',
                type: 'TextArea',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '备注',
                  selfSpan: 24,
                  labelCol: '4',
                  wrapperCol: 20,
                  readOnly: false,
                  disabled: false,
                  visible: true,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipPlacement: 'top',
                  required: false,
                  placeholder: '请输入',
                  formItemIndex: 23,
                  fieldName: 'remark',
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'TextArea',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                isLabelDropBoxChild: false,
                components: [],
              },
            ]}
            $$componentItem={{
              id: 'Form_039517',
              uid: 'Form_039517',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_039517')}
            {...injectData}
          >
            <Input
              name={'环节名称'}
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
              formItemIndex={0}
              fieldName={'tacheName'}
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
                id: 'Input_583192',
                uid: 'Input_583192',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_583192')}
              {...injectData}
            />
            <Input
              name={'环节编码'}
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
              formItemIndex={1}
              fieldName={'tacheCode'}
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
                id: 'Input_379906',
                uid: 'Input_379906',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_379906')}
              {...injectData}
            />
            <Input
              name={'外部环节名称'}
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
              formItemIndex={2}
              fieldName={'extTacheName'}
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
                id: 'Input_116058375',
                uid: 'Input_116058375',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_116058375')}
              {...injectData}
            />
            <Input
              name={'外部环节编码'}
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
              formItemIndex={3}
              fieldName={'extTacheCode'}
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
                id: 'Input_332043',
                uid: 'Input_332043',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_332043')}
              {...injectData}
            />
            <Select
              name={'是否允许会签'}
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
              placeholder={'请选择'}
              formItemIndex={4}
              fieldName={'isNormalCountersign'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_2689077',
                uid: 'Select_2689077',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_2689077')}
              {...injectData}
            />
            <Select
              name={'是否允许领导会签'}
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
              placeholder={'请选择'}
              formItemIndex={5}
              fieldName={'isLeaderCountersign'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_2023626',
                uid: 'Select_2023626',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_2023626')}
              {...injectData}
            />
            <Select
              name={'是否允许其他区县会签'}
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
              placeholder={'请选择'}
              formItemIndex={6}
              fieldName={'isAreaCountersign'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_3559509',
                uid: 'Select_3559509',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_3559509')}
              {...injectData}
            />
            <Select
              name={'是否支持合单'}
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
              placeholder={'请选择'}
              formItemIndex={7}
              fieldName={'isSupportMergeOrder'}
              dataSource={attrDataMap['PUB_001']}
              $$componentItem={{
                id: 'Select_4565668',
                uid: 'Select_4565668',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_4565668')}
              {...injectData}
            />
            <Select
              name={'阅办类型'}
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
              attr={{ selectedKeyTags: [], dataType: 'local' }}
              placeholder={'请选择'}
              formItemIndex={8}
              fieldName={'readHandleType'}
              $$componentItem={{
                id: 'Select_6964566',
                uid: 'Select_6964566',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_6964566')}
              {...injectData}
            />
            <Select
              name={'处理人区域过滤类型'}
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
              attr={{ selectedKeyTags: [], dataType: 'local' }}
              placeholder={'请选择'}
              formItemIndex={9}
              fieldName={'handleRegionFilterType'}
              $$componentItem={{
                id: 'Select_304146',
                uid: 'Select_304146',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_304146')}
              {...injectData}
            />
            <Input
              name={'环节顺序'}
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
              formItemIndex={10}
              fieldName={'tacheSort'}
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
                id: 'Input_6431794',
                uid: 'Input_6431794',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_6431794')}
              {...injectData}
            />
            <Input
              name={'审批等级'}
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
              formItemIndex={11}
              fieldName={'approveGrade'}
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
                id: 'Input_7113795',
                uid: 'Input_7113795',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_7113795')}
              {...injectData}
            />
            <Select
              name={'处理类型'}
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
              placeholder={'请选择'}
              formItemIndex={12}
              fieldName={'handleFilterType'}
              dataSource={[
                { id: '4656104', label: '固定人过滤', value: '1001' },
                { id: '23376', label: '固定岗位过滤', value: '1002' },
                { id: '8280845', label: '按组织过滤', value: '1003' },
                { id: '906731', label: '同指定环节过滤', value: '1004' },
              ]}
              $$componentItem={{
                id: 'Select_378379',
                uid: 'Select_378379',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                // console 166942864739048200
                console.log('触发处理类型值变更');
                const eventDataifelse540: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '209038',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$e$',
                          operate: '==',
                          manualValue: '1001',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 166934488411962720,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 166934510254897470,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166936077974495970,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166936077974446980,
                                children: [],
                                value: 'callback1',
                                params: [],
                                elseIfs: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166936077974458180,
                                children: [],
                                value: 'callback2',
                                params: [],
                                elseIfs: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '2484475',
                              pageJsonId: '098531',
                              customFuncName: 'choosePost',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                            elseIfs: [],
                            line_number: 4,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$e$',
                              operate: '==',
                              manualValue: '1002',
                            },
                            condId: '225385',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        elseIfs: [],
                        desc: '岗位',
                        callback: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166936077974495970,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '2484475',
                              pageJsonId: '098531',
                              customFuncName: 'choosePost',
                            },
                            line_number: 4,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        dataName: 'elseIf',
                        dataId: 166934675438149730,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166935866454068030,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166935866454110270,
                                children: [],
                                value: 'callback1',
                                params: [],
                                elseIfs: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166935866454192600,
                                children: [],
                                value: 'callback2',
                                params: [],
                                elseIfs: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '463917',
                              pageJsonId: '098531',
                              customFuncName: 'chooseOrg',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                            elseIfs: [],
                            line_number: 5,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$e$',
                              operate: '==',
                              manualValue: '1003',
                            },
                            condId: '1809386',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '组织',
                        elseIfs: [],
                        callback: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166935866454068030,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '463917',
                              pageJsonId: '098531',
                              customFuncName: 'chooseOrg',
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        dataName: 'elseIf',
                        dataId: 166934681452525060,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166936079761651970,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166936079761622820,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 166936079761625120,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '661337',
                              pageJsonId: '098531',
                              customFuncName: 'chooseTache',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                            line_number: 6,
                          },
                        ],
                        condition: [
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$e$',
                              operate: '==',
                              manualValue: '1004',
                            },
                            condId: '05865',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '同环节',
                        elseIfs: [],
                        callback: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166936079761651970,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '661337',
                              pageJsonId: '098531',
                              customFuncName: 'chooseTache',
                            },
                            line_number: 6,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        dataName: 'elseIf',
                        dataId: 16693468697455044,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166934690426315650,
                            children: [],
                            todoOptions: ['valueArray'],
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '7189328',
                              pageJsonId: '098531',
                              value: ['处理类型值：', '$e$'],
                            },
                            actionObjId: 'debug',
                            actionObjName: 'system',
                            value: 'console',
                            elseIfs: [],
                            line_number: 7,
                          },
                        ],
                        condition: [],
                        desc: '处理类型未取得约定值',
                        elseIfs: [],
                        callback: [
                          {
                            type: 'console',
                            dataId: 166934690426315650,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '7189328',
                              pageJsonId: '098531',
                              value: ['处理类型值：', '$e$'],
                            },
                            line_number: 7,
                          },
                        ],
                      },
                    ],
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 166935864726549900,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '196693',
                          pageJsonId: '098531',
                          customFuncName: 'chooseHandler',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDataifelse540.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse540, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_378379')}
              {...injectData}
            />
            <Select
              name={'同指定环节'}
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
              placeholder={'请选择'}
              formItemIndex={13}
              fieldName={'withAppointTacheCode'}
              disabled={true}
              visible={true}
              readOnly={false}
              dataSource={getStaticDataSourceService(
                data?.qryTacheListByFlowDefineId?.resultData,
                'tacheName',
                'tacheCode',
              )}
              $$componentItem={{
                id: 'Select_049724',
                uid: 'Select_049724',
                type: 'Select',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_049724')}
              {...injectData}
            />
            <Input
              name={'处理人员'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择处理人员'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={14}
              fieldName={'handleStaffName'}
              postfixStyle={'3'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_668689_5940303',
                uid: 'Input_668689_5940303',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue257: any = [
                  {
                    type: 'getValue',
                    dataId: 166936200134916200,
                    options: {
                      compId: 'Select_378379',
                      compLib: 'comm',
                      pageJsonId: '098531',
                      compName: 'Select',
                      id: '802921',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '307588',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$value_802921$',
                              operate: '==',
                              manualValue: '1001',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166936200399789300,
                        elseIfs: [],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'getValue',
                            dataId: 166936202015763900,
                            options: {
                              compId: 'Input_098526',
                              compLib: 'comm',
                              pageJsonId: '098531',
                              compName: 'Input',
                              id: '768168',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'showCustomModal',
                                dataId: 166936202015709900,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '7928463',
                                  pageJsonId: '098531',
                                  modalname: '/chooseTacheWithHandler',
                                  pageId: '913307460160167936',
                                  paramsObj: { userKey: '$value_768168$' },
                                  paramsObjKeyValueMap: {
                                    userKey: '$value_768168$',
                                  },
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue257.params = [] || [];
                CMDGenerator(eventDatagetValue257, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_668689_5940303')}
              {...injectData}
            />
            <Input
              name={'处理岗位'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择处理岗位'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={15}
              fieldName={'handlePostName'}
              postfixStyle={'3'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_668689_5940303_573587',
                uid: 'Input_668689_5940303_573587',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue258: any = [
                  {
                    type: 'getValue',
                    dataId: 166936222003672830,
                    options: {
                      compId: 'Select_378379',
                      compLib: 'comm',
                      pageJsonId: '098531',
                      compName: 'Select',
                      id: '726829',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '3791846',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$value_726829$',
                              operate: '==',
                              manualValue: '1002',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166936222234026900,
                        elseIfs: [],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'getValue',
                            dataId: 166936226011822340,
                            options: {
                              compId: 'Input_533642',
                              compLib: 'comm',
                              pageJsonId: '098531',
                              compName: 'Input',
                              id: '81085644',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'showCustomModal',
                                dataId: 166936226755760260,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '679628',
                                  pageJsonId: '098531',
                                  modalname: '/chooseTacheWithPost',
                                  pageId: '913309000971296768',
                                  paramsObj: { postId: '$value_81085644$' },
                                  paramsObjKeyValueMap: {
                                    postId: '$value_81085644$',
                                  },
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue258.params = [] || [];
                CMDGenerator(eventDatagetValue258, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_668689_5940303_573587')
              }
              {...injectData}
            />
            <Input
              name={'指定处理人组织'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择指定处理人组织'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={16}
              fieldName={'handleAppointOrgCodeName'}
              postfixStyle={'3'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_668689_5940303_9095515',
                uid: 'Input_668689_5940303_9095515',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatagetValue259: any = [
                  {
                    type: 'getValue',
                    dataId: 166944266878015420,
                    options: {
                      compId: 'Select_378379',
                      compLib: 'comm',
                      pageJsonId: '098531',
                      compName: 'Select',
                      id: '692125',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '730282',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$value_692125$',
                              operate: '==',
                              manualValue: '1003',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166944267138341200,
                        elseIfs: [],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showCustomModal',
                            dataId: 166944268557567200,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '8882168',
                              pageJsonId: '098531',
                              modalname: '/xuanzezhidingchulirenzuzhi4157',
                              pageId: '913666163952467968',
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue259.params = [] || [];
                CMDGenerator(eventDatagetValue259, {}, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_668689_5940303_9095515')
              }
              {...injectData}
            />
            <MultipleSelect
              name={'处理人区域'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              placeholder={'请选择'}
              mode={'multiple'}
              formItemIndex={17}
              fieldName={'handleRegions'}
              disabled={true}
              visible={true}
              readOnly={false}
              dataSource={attrDataMap['PROVINCE_CITY_CODE']}
              $$componentItem={{
                id: 'MultipleSelect_086387',
                uid: 'MultipleSelect_086387',
                type: 'MultipleSelect',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'MultipleSelect_086387')}
              {...injectData}
            />
            <MultipleSelect
              name={'组织类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              attr={{}}
              placeholder={'请选择'}
              mode={'multiple'}
              formItemIndex={18}
              fieldName={'orgTypes'}
              disabled={true}
              visible={true}
              readOnly={false}
              $$componentItem={{
                id: 'MultipleSelect_5854355',
                uid: 'MultipleSelect_5854355',
                type: 'MultipleSelect',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'MultipleSelect_5854355')
              }
              {...injectData}
            />
            <MultipleSelect
              name={'处理人组织等级'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              filter={'none'}
              attr={{ selectedKeyTags: [], dataType: 'local' }}
              placeholder={'请选择'}
              mode={'multiple'}
              formItemIndex={19}
              fieldName={'handleOrgLevels'}
              disabled={true}
              visible={true}
              readOnly={false}
              $$componentItem={{
                id: 'MultipleSelect_7085787',
                uid: 'MultipleSelect_7085787',
                type: 'MultipleSelect',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'MultipleSelect_7085787')
              }
              {...injectData}
            />
            <Select
              name={'处理人岗位等级'}
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
              attr={{ selectedKeyTags: [], dataType: 'local' }}
              placeholder={'请选择'}
              formItemIndex={20}
              fieldName={'handlePostLevel'}
              disabled={true}
              visible={true}
              readOnly={false}
              $$componentItem={{
                id: 'Select_4282221',
                uid: 'Select_4282221',
                type: 'Select',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_4282221')}
              {...injectData}
            />
            <Select
              name={'是否允许处理可编辑'}
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
              formItemIndex={21}
              fieldName={'isHandleEditable'}
              defaultValue={'0'}
              $$componentItem={{
                id: 'Select_848626',
                uid: 'Select_848626',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_848626')}
              {...injectData}
            />
            <Input
              name={'短信到达模板'}
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
              formItemIndex={22}
              fieldName={'smsArriveTemplate'}
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
                id: 'Input_796387',
                uid: 'Input_796387',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_796387')}
              {...injectData}
            />
            <Input
              name={'T+1短信模板'}
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
              formItemIndex={23}
              fieldName={'smsOneTemplate'}
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
                id: 'Input_790251',
                uid: 'Input_790251',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_790251')}
              {...injectData}
            />
            <Input
              name={'T+2短信模板'}
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
              formItemIndex={24}
              fieldName={'smsTwoTemplate'}
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
                id: 'Input_016818',
                uid: 'Input_016818',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_016818')}
              {...injectData}
            />
            <TextArea
              name={'备注'}
              selfSpan={24}
              labelCol={'4'}
              wrapperCol={20}
              readOnly={false}
              disabled={false}
              visible={true}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={25}
              fieldName={'remark'}
              $$componentItem={{
                id: 'TextArea_144542',
                uid: 'TextArea_144542',
                type: 'TextArea',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_144542')}
              {...injectData}
            />
            <Input
              name={'处理人员隐藏'}
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
              formItemIndex={26}
              fieldName={'handleStaff'}
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
                id: 'Input_098526',
                uid: 'Input_098526',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_098526')}
              {...injectData}
            />
            <Input
              name={'处理岗位隐藏'}
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
              formItemIndex={27}
              fieldName={'handlePost'}
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
                id: 'Input_533642',
                uid: 'Input_533642',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_533642')}
              {...injectData}
            />
            <Input
              name={'指定处理人组织隐藏'}
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
              formItemIndex={28}
              fieldName={'handleAppointOrgCode'}
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
                id: 'Input_098526_81943',
                uid: 'Input_098526_81943',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_098526_81943')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Huanjiexiangqing9964$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', flowDefineId: '', tacheObj: '' },
});
