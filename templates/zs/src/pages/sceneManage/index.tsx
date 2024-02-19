// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  Form,
  HorizontalView,
  Input,
  MultipleSelect,
  Select,
  Table,
  TextArea,
  Tree,
  TreeSelect,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const SceneManage$$Page: React.FC<PageProps> = ({
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
  const isOutSystemSupport = (options_069046: any) => {
    // console 168430695150004130
    console.log('是否外部已支持事件');
    const eventDatagetValue78: any = [
      {
        type: 'getValue',
        dataId: 166366764050025500,
        options: {
          compId: 'Select_333194',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Select',
          id: '7185844',
        },
        line_number: 2,
        callback1: [
          {
            type: 'console',
            dataId: 168430702570346100,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '080281',
              pageJsonId: '90041',
              value: ['是否外部已支持下拉值：', '$value_7185844$'],
            },
            line_number: 3,
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '294454',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$value_7185844$',
                  operate: '==',
                  manualValue: '1',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166366764455072200,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166366766706068670,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166366777073838140,
                    children: [],
                    todoOptions: ['disabled'],
                    options: {
                      compId: 'Input_323114',
                      compLib: 'comm',
                      pageJsonId: '90041',
                      compName: 'Input',
                      id: '071326',
                      disabled: '',
                    },
                    actionObjId: 'Input_323114',
                    actionObjName: 'Input',
                    value: 'setDisable',
                    compLib: 'comm',
                    line_number: 17,
                  },
                  {
                    dataName: 'action',
                    dataId: 166366778085133980,
                    children: [],
                    todoOptions: ['required'],
                    options: {
                      compId: 'Input_323114',
                      compLib: 'comm',
                      pageJsonId: '90041',
                      compName: 'Input',
                      id: '843205',
                      required: '',
                    },
                    actionObjId: 'Input_323114',
                    actionObjName: 'Input',
                    value: 'setRequired',
                    compLib: 'comm',
                    line_number: 18,
                  },
                  {
                    dataName: 'action',
                    dataId: 166366780805356600,
                    children: [],
                    todoOptions: ['disabled'],
                    options: {
                      compId: [
                        'Select_565959',
                        'Select_082425',
                        'Select_1346751',
                        'Select_242215',
                        'Select_889808',
                        'Select_6137299',
                        'Select_742253',
                        'Select_8729274',
                      ],
                      compLib: 'comm',
                      pageJsonId: '90041',
                      compName: 'Select',
                      id: '29051',
                      disabled: '',
                      compid: [
                        'Select_565959',
                        'Select_082425',
                        'Select_1346751',
                        'Select_242215',
                        'Select_889808',
                        'Select_6137299',
                        'Select_742253',
                        'Select_8729274',
                      ],
                    },
                    actionObjId: 'Select_565959',
                    actionObjName: 'Select',
                    value: 'setDisable',
                    compLib: 'comm',
                    line_number: 19,
                  },
                  {
                    dataName: 'action',
                    dataId: 166764123286213730,
                    children: [],
                    todoOptions: ['required'],
                    options: {
                      compId: [
                        'Select_242215',
                        'Select_889808',
                        'Select_6137299',
                        'Select_742253',
                        'Select_8729274',
                      ],
                      compLib: 'comm',
                      pageJsonId: '90041',
                      compName: 'Select',
                      id: '537647',
                      required: 'true',
                      compid: [
                        'Select_242215',
                        'Select_889808',
                        'Select_6137299',
                        'Select_742253',
                        'Select_8729274',
                      ],
                    },
                    actionObjId: 'Select_565959',
                    actionObjName: 'Select',
                    value: 'setRequired',
                    compLib: 'comm',
                    line_number: 20,
                  },
                ],
                condition: [],
                desc: '未支撑',
                callback: [
                  {
                    type: 'setDisable',
                    dataId: 166366777073838140,
                    options: {
                      compId: 'Input_323114',
                      compLib: 'comm',
                      pageJsonId: '90041',
                      compName: 'Input',
                      id: '071326',
                      disabled: '',
                    },
                    line_number: 17,
                  },
                  {
                    type: 'setRequired',
                    dataId: 166366778085133980,
                    options: {
                      compId: 'Input_323114',
                      compLib: 'comm',
                      pageJsonId: '90041',
                      compName: 'Input',
                      id: '843205',
                      required: '',
                    },
                    line_number: 18,
                  },
                  {
                    type: 'setDisable',
                    dataId: 166366780805356600,
                    options: {
                      compId: [
                        'Select_565959',
                        'Select_082425',
                        'Select_1346751',
                        'Select_242215',
                        'Select_889808',
                        'Select_6137299',
                        'Select_742253',
                        'Select_8729274',
                      ],
                      compLib: 'comm',
                      pageJsonId: '90041',
                      compName: 'Select',
                      id: '29051',
                      disabled: '',
                      compid: [
                        'Select_565959',
                        'Select_082425',
                        'Select_1346751',
                        'Select_242215',
                        'Select_889808',
                        'Select_6137299',
                        'Select_742253',
                        'Select_8729274',
                      ],
                    },
                    line_number: 19,
                  },
                  {
                    type: 'setRequired',
                    dataId: 166764123286213730,
                    options: {
                      compId: [
                        'Select_242215',
                        'Select_889808',
                        'Select_6137299',
                        'Select_742253',
                        'Select_8729274',
                      ],
                      compLib: 'comm',
                      pageJsonId: '90041',
                      compName: 'Select',
                      id: '537647',
                      required: 'true',
                      compid: [
                        'Select_242215',
                        'Select_889808',
                        'Select_6137299',
                        'Select_742253',
                        'Select_8729274',
                      ],
                    },
                    line_number: 20,
                  },
                ],
              },
            ],
            line_number: 4,
            callback1: [
              {
                type: 'setDisable',
                dataId: 166366767948388060,
                options: {
                  compId: 'Input_323114',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Input',
                  id: '778071',
                  disabled: '',
                },
                line_number: 5,
              },
              {
                type: 'setRequired',
                dataId: 166366769028480900,
                options: {
                  compId: 'Input_323114',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Input',
                  id: '935546',
                  required: 'true',
                },
                line_number: 6,
              },
              {
                type: 'setDisable',
                dataId: 166366773713151740,
                options: {
                  compId: [
                    'Select_565959',
                    'Select_082425',
                    'Select_1346751',
                    'Select_242215',
                    'Select_889808',
                    'Select_6137299',
                    'Select_742253',
                    'Select_8729274',
                  ],
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '1446814',
                  disabled: 'true',
                  compid: [
                    'Select_565959',
                    'Select_082425',
                    'Select_1346751',
                    'Select_242215',
                    'Select_889808',
                    'Select_6137299',
                    'Select_742253',
                    'Select_8729274',
                  ],
                },
                line_number: 7,
              },
              {
                type: 'setRequired',
                dataId: 166764106893549200,
                options: {
                  compId: [
                    'Select_082425',
                    'Select_1346751',
                    'Select_242215',
                    'Select_889808',
                    'Select_6137299',
                    'Select_742253',
                    'Select_565959',
                    'Select_8729274',
                  ],
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '919649',
                  required: '',
                  compid: [
                    'Select_082425',
                    'Select_1346751',
                    'Select_242215',
                    'Select_889808',
                    'Select_6137299',
                    'Select_742253',
                    'Select_565959',
                    'Select_8729274',
                  ],
                },
                line_number: 8,
              },
              {
                type: 'clearValue',
                dataId: 166367534964759230,
                options: {
                  compId: 'Select_242215',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '117161',
                },
                line_number: 9,
              },
              {
                type: 'clearValue',
                dataId: 168430724550692540,
                options: {
                  compId: 'Select_742253',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '636656',
                },
                line_number: 10,
              },
              {
                type: 'clearValue',
                dataId: 168430725568167070,
                options: {
                  compId: 'Select_6137299',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '829287',
                },
                line_number: 11,
              },
              {
                type: 'clearValue',
                dataId: 168430726072605660,
                options: {
                  compId: 'Select_889808',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '0417088',
                },
                line_number: 12,
              },
              {
                type: 'clearValue',
                dataId: 168430726931853950,
                options: {
                  compId: 'Select_8729274',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '8597904',
                },
                line_number: 13,
              },
              {
                type: 'clearValue',
                dataId: 168430259838877980,
                options: {
                  compId: 'Select_1346751',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '704912',
                },
                line_number: 14,
              },
              {
                type: 'clearValue',
                dataId: 166367536226912320,
                options: {
                  compId: 'Select_082425',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '911135',
                },
                line_number: 15,
              },
              {
                type: 'clearValue',
                dataId: 166367536866424160,
                options: {
                  compId: 'Select_565959',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'Select',
                  id: '8414235',
                },
                line_number: 16,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue78.params =
      [
        {
          title: '事件入参',
          name: 'options_069046',
          value: '$options_069046$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue78, { options_069046 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const onLoadTable = (options_7465254: any) => {
    const eventDatareloadDataSource21: any = [
      {
        type: 'reloadDataSource',
        dataId: 166671167680146620,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '09612',
          pageJsonId: '90041',
          dataSourceId: 166115308466248830,
          dataSourceName: 'qryScenePageByParentCode',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '31416',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '8061062',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '7014377',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '6508876',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '2519406',
                  code: 'catalogName',
                  name: 'catalogName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_092772', 'getFieldsValue'],
                    code: 'sceneName',
                  },
                },
                {
                  attrId: '802721',
                  code: 'catalogCode',
                  name: 'catalogCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_092772', 'getFieldsValue'],
                    code: 'sceneCode',
                  },
                },
                {
                  attrId: '2171466',
                  code: 'parentCatalogCode',
                  name: 'parentCatalogCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['datasource', 'local_vars', 'data'],
                    code: 'selectNodeKey',
                  },
                },
                {
                  attrId: '708409',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['context', '$options_7465254$'], code: '' },
                },
                {
                  attrId: '99204',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '817998',
                  code: 'sortName',
                  name: 'sortName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '31032',
                  code: 'sortOrder',
                  name: 'sortOrder',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '805114',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '31001177',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '42389',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '938269',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '998832',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '013065',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '364572',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '976704',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '543796',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '31157',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '7007546',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '427741',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '151008',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '65315001',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '0473483',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '378035',
                      code: 'approveContentTpl',
                      name: '审批内容模板',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '577425',
                      code: 'flowCode',
                      name: 'flowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '868818',
                      code: 'isExclusiveFlow',
                      name: 'isExclusiveFlow',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '736829',
                      code: 'catalogStatus',
                      name: 'catalogStatus',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3884487',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '130765',
                      code: 'catalogType',
                      name: 'catalogType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '460063',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3346057',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '226826',
                      code: 'col1',
                      name: 'col1',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '690137',
                      code: 'sort',
                      name: 'sort',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '3454457',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '915172',
                      code: 'catalogSubType',
                      name: 'catalogSubType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '678371',
                      code: 'cfgVersion',
                      name: 'cfgVersion',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '734942',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '675665',
                      code: 'catalogDesc',
                      name: 'catalogDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5906375',
                      code: 'col10',
                      name: 'col10',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '712626',
                      code: 'belongType',
                      name: 'belongType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6082755',
                      code: 'isContainsMatrixAttr',
                      name: 'isContainsMatrixAttr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2058216',
                      code: 'parentCatalogCode',
                      name: 'parentCatalogCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '716693',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '467415',
                      code: 'catalogName',
                      name: 'catalogName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5086327',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '290971',
                      code: 'col7',
                      name: 'col7',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '071793',
                      code: 'col4',
                      name: 'col4',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '329982',
                      code: 'col5',
                      name: 'col5',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '296552',
                      code: 'sourceFrom',
                      name: 'sourceFrom',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9080584',
                      code: 'col3',
                      name: 'col3',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '776378',
                      code: 'col2',
                      name: 'col2',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '029621',
                      code: 'secondType',
                      name: 'secondType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '796878',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '010914',
                      code: 'col8',
                      name: 'col8',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '663295',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '881723',
                      code: 'col9',
                      name: 'col9',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6125789',
                      code: 'catalogCode',
                      name: 'catalogCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '339997',
                      code: 'col6',
                      name: 'col6',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2823045',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '602529',
                      code: 'isMultiInst',
                      name: 'isMultiInst',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '253556',
                      code: 'catalogId',
                      name: 'catalogId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                  ],
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource21.params =
      [
        {
          title: '事件入参',
          name: 'options_7465254',
          value: '$options_7465254$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource21,
      { options_7465254 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    isOutSystemSupport,
    onLoadTable,
  }));

  useEffect(() => {
    const eventDataapiRequest373: any = [
      {
        type: 'apiRequest',
        dataId: 166088048754847740,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '1112665',
          pageJsonId: '90041',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogToTreeNodeListByParentCode',
          _apiCode: 'qryCatalogToTreeNodeListByParentCode',
          _source: 'rhin',
          _serviceId: '877545868169199616',
          _serviceTitle:
            '田善铭-根据父类目编码分页查询场景类目数据: qryCatalogToTreeNodeListByParentCode',
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
              dataKey: '1112665_header',
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
              dataKey: '1112665_path',
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
              dataKey: '1112665_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'parentCatalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentCatalogCode',
                  compType: 'Input',
                  name: 'parentCatalogCode',
                  parents: ['body'],
                  id: 'body.parentCatalogCode',
                  dataKey: '1112665_body.parentCatalogCode',
                  value: { type: ['customize'], code: '-1' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
                {
                  code: 'isQryAll',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  defaultValue: 'false',
                  _id: 'body.isQryAll',
                  compType: 'Input',
                  parents: ['body'],
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '1112665_body',
              key: '3',
            },
          ],
          actionTitle: '加载二级类目数据',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166139583552752480,
            options: {
              compId: 'Tree_1493453',
              compLib: 'comm',
              pageJsonId: '90041',
              compName: 'Tree',
              id: '131657',
              data: '$reply_1112665?.resultData$',
              labelKey: 'nodeValue',
              nodeValueKey: 'nodeKey',
              selectable: 'isCheck',
              childrenKey: 'children',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'customActionCode',
            dataId: 167835566065619140,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '7732117',
              pageJsonId: '90041',
              code: 'function main(data,state,success,fail){var _reply_,_reply_2;console.log("\\u8FD4\\u56DE\\u7684\\u6570\\u636E:",(_reply_=reply_1112665)===null||_reply_===void 0?void 0:_reply_.resultData);var result=(_reply_2=reply_1112665)===null||_reply_2===void 0?void 0:_reply_2.resultData;for(var i=0;i<result.length;i++){result[i]["isCheck"]=false;for(var j=0;j<result[i]["children"].length;j++){result[i]["children"][j]["isCheck"]=false}}console.log(result);success(result)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'reloadData',
                dataId: 167835633094596770,
                options: {
                  compId: 'TreeSelect_688155',
                  compLib: 'comm',
                  pageJsonId: '90041',
                  compName: 'TreeSelect',
                  id: '5843564',
                  data: '$data_7732117$',
                  labelKey: 'nodeValue',
                  nodeValueKey: 'nodeKey',
                  selectable: 'isCheck',
                  childrenKey: 'children',
                },
                line_number: 4,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest373.params = [] || [];
    CMDGenerator(eventDataapiRequest373, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest374: any = [
      {
        type: 'apiRequest',
        dataId: 166175387095287230,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '950192',
          pageJsonId: '90041',
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
              dataKey: '950192_header',
              key: '0',
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
                  dataKey: '950192_path.attrCode',
                  value: { type: ['customize'], code: 'INITIATE_SOURCE' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '950192_path',
              value: { type: [], code: '' },
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
              dataKey: '950192_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '950192_body',
              key: '3',
            },
          ],
          actionTitle: '查询发起来源标识',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166175432303698720,
            options: {
              compId: 'Select_8729274',
              compLib: 'comm',
              pageJsonId: '90041',
              compName: 'Select',
              id: '55304858',
              data: '$reply_950192?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 6,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest374.params = [] || [];
    CMDGenerator(eventDataapiRequest374, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest375: any = [
      {
        type: 'apiRequest',
        dataId: 166316246995624480,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '574505',
          pageJsonId: '90041',
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
              dataKey: '574505_header',
              key: '0',
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
                  dataKey: '574505_path.attrCode',
                  value: { type: ['customize'], code: 'GROUP_TYPE' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '574505_path',
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
              dataKey: '574505_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '574505_body',
              key: '3',
            },
          ],
          actionTitle: '查询集团类型',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166316253491744640,
            options: {
              compId: 'Select_98314808',
              compLib: 'comm',
              pageJsonId: '90041',
              compName: 'Select',
              id: '2967187',
              data: '$reply_574505?.resultData$',
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
    eventDataapiRequest375.params = [] || [];
    CMDGenerator(eventDataapiRequest375, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest376: any = [
      {
        type: 'apiRequest',
        dataId: 166316479582340770,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '65383',
          pageJsonId: '90041',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryFlowListByFlowType',
          _apiCode: 'qryFlowListByFlowType',
          _source: 'rhin',
          _serviceId: '887340076843663360',
          _serviceTitle: '根据流程类型查询流程列表-tsm: qryFlowListByFlowType',
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
              dataKey: '65383_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'flowType',
                  name: '流程类型',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.flowType',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.flowType',
                  dataKey: '65383_path.flowType',
                  value: { type: ['customize'], code: '1001' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '65383_path',
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
              dataKey: '65383_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '65383_body',
              key: '3',
            },
          ],
          actionTitle: '查询重客流程',
          _sourceName: '根据流程类型查询流程列表-tsm',
        },
        line_number: 9,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166316485400411680,
            options: {
              compId: 'Select_1346751',
              compLib: 'comm',
              pageJsonId: '90041',
              compName: 'Select',
              id: '919149',
              data: '$reply_65383?.resultData$',
              labelKey: 'flowName',
              valueKey: 'flowCode',
            },
            line_number: 10,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest376.params = [] || [];
    CMDGenerator(eventDataapiRequest376, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest377: any = [
      {
        type: 'apiRequest',
        dataId: 166316512990057180,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '153078',
          pageJsonId: '90041',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryFlowListByFlowType',
          _apiCode: 'qryFlowListByFlowType',
          _source: 'rhin',
          _serviceId: '887340076843663360',
          _serviceTitle: '根据流程类型查询流程列表-tsm: qryFlowListByFlowType',
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
              dataKey: '153078_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'flowType',
                  name: '流程类型',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.flowType',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.flowType',
                  dataKey: '153078_path.flowType',
                  value: { type: ['customize'], code: '1002' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '153078_path',
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
              dataKey: '153078_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '153078_body',
              key: '3',
            },
          ],
          actionTitle: '查询地市流程',
          _sourceName: '根据流程类型查询流程列表-tsm',
        },
        line_number: 11,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166316516682328000,
            options: {
              compId: 'Select_082425',
              compLib: 'comm',
              pageJsonId: '90041',
              compName: 'Select',
              id: '563323',
              data: '$reply_153078?.resultData$',
              labelKey: 'flowName',
              valueKey: 'flowCode',
            },
            line_number: 12,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest377.params = [] || [];
    CMDGenerator(eventDataapiRequest377, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest378: any = [
      {
        type: 'apiRequest',
        dataId: 166316512685939460,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '3185363',
          pageJsonId: '90041',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryFlowListByFlowType',
          _apiCode: 'qryFlowListByFlowType',
          _source: 'rhin',
          _serviceId: '887340076843663360',
          _serviceTitle: '根据流程类型查询流程列表-tsm: qryFlowListByFlowType',
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
              dataKey: '3185363_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'flowType',
                  name: '流程类型',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.flowType',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.flowType',
                  dataKey: '3185363_path.flowType',
                  value: { type: ['customize'], code: '1003' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '3185363_path',
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
              dataKey: '3185363_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '3185363_body',
              key: '3',
            },
          ],
          actionTitle: '查询区县流程',
          _sourceName: '根据流程类型查询流程列表-tsm',
        },
        line_number: 13,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166316521363123170,
            options: {
              compId: 'Select_565959',
              compLib: 'comm',
              pageJsonId: '90041',
              compName: 'Select',
              id: '281718',
              data: '$reply_3185363?.resultData$',
              labelKey: 'flowName',
              valueKey: 'flowCode',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest378.params = [] || [];
    CMDGenerator(eventDataapiRequest378, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest379: any = [
      {
        type: 'apiRequest',
        dataId: 167592467505783840,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '268935',
          pageJsonId: '90041',
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
              dataKey: '268935_header',
              key: '0',
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
                  dataKey: '268935_path.attrCode',
                  value: { type: ['customize'], code: 'RELEASE_CHANNEL' },
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '268935_path',
              value: { type: [], code: '' },
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
              dataKey: '268935_query',
              key: '2',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '268935_body',
              key: '3',
            },
          ],
          actionTitle: '查询发布渠道',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 15,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167592472524518180,
            options: {
              compId: 'MultipleSelect_412347',
              compLib: 'comm',
              pageJsonId: '90041',
              compName: 'MultipleSelect',
              id: '65011',
              data: '$reply_268935?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 16,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest379.params = [] || [];
    CMDGenerator(eventDataapiRequest379, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest380: any = [
      {
        type: 'apiRequest',
        dataId: 169932297959921820,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '079756',
          pageJsonId: '90041',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
          _requestType: 'object',
          valueType: 'object',
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
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                  id: 'root.header',
                  dataKey: '079756_root.header',
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
                      _id: 'root.path.attrCode',
                      compType: 'Input',
                      parents: ['root', 'path'],
                      parentType: 'object',
                      parentKey: '0-1',
                      key: '0-1-0',
                      id: 'root.path.attrCode',
                      dataKey: '079756_root.path.attrCode',
                      value: { type: ['customize'], code: 'ENV_CODE' },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '079756_root.path',
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
                  dataKey: '079756_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '079756_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '079756_root',
            },
          ],
          params: 'object',
        },
        line_number: 17,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169932305037729950,
            options: {
              compId: 'MultipleSelect_1903767',
              compLib: 'comm',
              pageJsonId: '90041',
              compName: 'MultipleSelect',
              id: '661413',
              data: '$reply_079756?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 18,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest380.params = [] || [];
    CMDGenerator(eventDataapiRequest380, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetDisable50: any = [
      {
        type: 'setDisable',
        dataId: 166139771664992260,
        options: {
          compId: 'Form_092772',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Form',
          id: '8474434',
          disabled: '',
        },
        line_number: 19,
      },
    ];
    eventDatasetDisable50.params = [] || [];
    CMDGenerator(eventDatasetDisable50, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable51: any = [
      {
        type: 'setDisable',
        dataId: 166139794066633280,
        options: {
          compId: 'Form_6963977_3957773',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Form',
          id: '514411',
          disabled: 'true',
        },
        line_number: 20,
      },
    ];
    eventDatasetDisable51.params = [] || [];
    CMDGenerator(eventDatasetDisable51, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable52: any = [
      {
        type: 'setDisable',
        dataId: 166247433911242180,
        options: {
          compId: 'Button_11272',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Button',
          id: '5222',
          disabled: 'true',
        },
        line_number: 21,
      },
    ];
    eventDatasetDisable52.params = [] || [];
    CMDGenerator(eventDatasetDisable52, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable53: any = [
      {
        type: 'setDisable',
        dataId: 166247434430119800,
        options: {
          compId: 'Button_9487313',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Button',
          id: '1617423',
          disabled: 'true',
        },
        line_number: 22,
      },
    ];
    eventDatasetDisable53.params = [] || [];
    CMDGenerator(eventDatasetDisable53, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable54: any = [
      {
        type: 'setDisable',
        dataId: 166247444522749980,
        options: {
          compId: 'Button_857839',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Button',
          id: '899614',
          disabled: 'true',
        },
        line_number: 23,
      },
    ];
    eventDatasetDisable54.params = [] || [];
    CMDGenerator(eventDatasetDisable54, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable55: any = [
      {
        type: 'setDisable',
        dataId: 166247444928632500,
        options: {
          compId: 'Button_3677173',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Button',
          id: '9874638',
          disabled: 'true',
        },
        line_number: 24,
      },
    ];
    eventDatasetDisable55.params = [] || [];
    CMDGenerator(eventDatasetDisable55, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable56: any = [
      {
        type: 'setDisable',
        dataId: 166247455355740960,
        options: {
          compId: 'Button_8429776',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Button',
          id: '098865',
          disabled: 'true',
        },
        line_number: 25,
      },
    ];
    eventDatasetDisable56.params = [] || [];
    CMDGenerator(eventDatasetDisable56, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable57: any = [
      {
        type: 'setDisable',
        dataId: 166247455994605860,
        options: {
          compId: 'Button_178963',
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Button',
          id: '701194',
          disabled: 'true',
        },
        line_number: 26,
      },
    ];
    eventDatasetDisable57.params = [] || [];
    CMDGenerator(eventDatasetDisable57, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable58: any = [
      {
        type: 'setDisable',
        dataId: 167835782741769630,
        options: {
          compId: [
            'Button_857839',
            'Button_3677173',
            'Input_409544',
            'Input_832782',
          ],
          compLib: 'comm',
          pageJsonId: '90041',
          compName: 'Button',
          id: '0608035',
          disabled: '',
          compid: [
            'Button_857839',
            'Button_3677173',
            'Input_409544',
            'Input_832782',
          ],
        },
        line_number: 27,
      },
    ];
    eventDatasetDisable58.params = [] || [];
    CMDGenerator(eventDatasetDisable58, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_90041__">
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_90041_1',
          uid: 'View_90041_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '20px 20px 20px 20px',
          overflowY: 'auto',
          width: '100%',
          height: '100%',
        }}
        ref={(r: any) => (refs['View_90041_1'] = r)}
        {...injectData}
      >
        <HorizontalView
          name={'左右布局'}
          $$componentItem={{
            id: 'HorizontalView_673887',
            uid: 'HorizontalView_673887',
            type: 'HorizontalView',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => (refs['HorizontalView_673887'] = r)}
          {...injectData}
        >
          <View
            name={'左布局容器'}
            $$componentItem={{
              id: 'View_902712',
              uid: 'View_902712',
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
              width: '25%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => (refs['View_902712'] = r)}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'类目树'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              formItemIndex={0}
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
                id: 'Card_859846',
                uid: 'Card_859846',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0px 5px 0px 0px',
                height: '100%',
                width: 'auto',
              }}
              ref={(r: any) => (refs['Card_859846'] = r)}
              {...injectData}
            >
              <Tree
                name={'树形控件'}
                defaultExpandAll={false}
                showLine={true}
                selectable={true}
                isAsync={false}
                treeData={[
                  {
                    title: '第一列',
                    key: 'column1',
                    selectable: true,
                    value: 'column1',
                    label: '第一列',
                    children: [
                      {
                        title: '第二列',
                        key: 'column2',
                        value: 'column2',
                        selectable: true,
                        label: '第二列',
                      },
                      { title: '标题', key: '180363', value: '180363' },
                      { title: '标题', key: '551575588', value: '551575588' },
                    ],
                    disabled: true,
                  },
                ]}
                showLineIcon={false}
                nodeIcons={[]}
                treeColumns={{
                  key: 'nodeKey',
                  title: 'nodeValue',
                  selectable: 'isCheck',
                  children: 'children',
                  selectedService: {
                    busiApiId: '877545868169199616',
                    busiApiNbr: 'qryCatalogToTreeNodeListByParentCode',
                    busiApiName: '根据父类目编码查询类目数据-tsm',
                    busiObjId: '877545868169199616',
                    apiParam:
                      '[{"apiId":877545868169199616,"apiParamId":877545868303417344,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"1000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868303417345,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868303417345,"serviceObjectPath":"877545868303417345","statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},"paramObjectId":877545868303417345,"paramType":"1000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868307611648,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"2000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868311805952,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868311805952,"serviceObjectPath":"877545868311805952","statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805952,"paramType":"2000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805953,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"3000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868311805954,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868311805954,"serviceObjectPath":"877545868311805954","statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805954,"paramType":"3000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805955,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"4000","remark":"根节点","rootServiceObjectId":877545868311805956,"serviceObject":[],"serviceObjectAttrs":[{"attrId":878888728903589890,"attrSpec":{"attrId":878888728903589890,"attrName":"是否全查","attrNbr":"isQryAll","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661149801670,"createStaff":50167,"defaultValue":"false","desensitizeRule":"1001","desensitizeType":"1001","exampleValue":"true","mustFlag":"F","remark":"新增节点","serviceObjAttrId":878888728903589889,"serviceObjectId":877545868311805956,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":877545868487966721,"attrSpec":{"attrId":877545868487966721,"attrName":"parentCatalogCode","attrNbr":"parentCatalogCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661150341276,"createStaff":50167,"exampleValue":"-1","mustFlag":"F","serviceObjAttrId":878890991944241152,"serviceObjectId":877545868311805956,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":877545868311805956,"serviceObjectPath":"877545868311805956","statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805956,"paramType":"4000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805957,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"5000","remark":"根节点","rootServiceObjectId":877545868311805958,"serviceObject":[{"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"isList":"T","level":2,"parServiceObjectId":877545868311805958,"paramType":"5000","rootServiceObjectId":877545868311805958,"serviceObject":[{"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"isList":"T","level":3,"parServiceObjectId":884431907475169280,"paramType":"5000","rootServiceObjectId":877545868311805958,"serviceObject":[],"serviceObjectAttrs":[{"attrId":882189604210556929,"attrSpec":{"attrId":882189604210556929,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"true","mustFlag":"F","serviceObjAttrId":884431908163035136,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"政企客户服务费申请","mustFlag":"F","serviceObjAttrId":884431908163035137,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":877859343021883393,"attrSpec":{"attrId":877859343021883393,"attrName":"catalogType","attrNbr":"catalogType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"1002","mustFlag":"F","serviceObjAttrId":884431908163035138,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"CLS_JC","mustFlag":"F","serviceObjAttrId":884431908163035139,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":876452546450206723,"attrSpec":{"attrId":876452546450206723,"attrName":"children","attrNbr":"children","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":884431908163035140,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":884431908163035142,"attrSpec":{"attrId":884431908163035142,"attrName":"isContainsMatrixAttr","attrNbr":"isContainsMatrixAttr","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":884431908163035141,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"CLS_JC_0001","mustFlag":"F","serviceObjAttrId":884431908163035143,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":881794055997313029,"attrSpec":{"attrId":881794055997313029,"attrName":"isMatrixSubType","attrNbr":"isMatrixSubType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":884431908163035144,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":884431908167229441,"attrSpec":{"attrId":884431908167229441,"attrName":"isExclusiveFlow","attrNbr":"isExclusiveFlow","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":884431908167229440,"serviceObjectId":884431907475169281,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"}],"serviceObjectCode":"children","serviceObjectId":884431907475169281,"serviceObjectPath":"877545868311805958,884431907475169280,884431907475169281","statusCd":"1000","tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":882189604210556929,"attrSpec":{"attrId":882189604210556929,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"false","mustFlag":"F","serviceObjAttrId":884431908095926272,"serviceObjectId":884431907475169280,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"基础类","mustFlag":"F","serviceObjAttrId":884431908095926273,"serviceObjectId":884431907475169280,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":877859343021883393,"attrSpec":{"attrId":877859343021883393,"attrName":"catalogType","attrNbr":"catalogType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"1001","mustFlag":"F","serviceObjAttrId":884431908095926274,"serviceObjectId":884431907475169280,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"-1","mustFlag":"F","serviceObjAttrId":884431908100120576,"serviceObjectId":884431907475169280,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":884431908100120578,"attrSpec":{"attrId":884431908100120578,"attrName":"isContainsMatrixAttr","attrNbr":"isContainsMatrixAttr","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":884431908100120577,"serviceObjectId":884431907475169280,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"CLS_JC","mustFlag":"F","serviceObjAttrId":884431908100120579,"serviceObjectId":884431907475169280,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":881794055997313029,"attrSpec":{"attrId":881794055997313029,"attrName":"isMatrixSubType","attrNbr":"isMatrixSubType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":884431908100120580,"serviceObjectId":884431907475169280,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":884431908100120582,"attrSpec":{"attrId":884431908100120582,"attrName":"isExclusiveFlow","attrNbr":"isExclusiveFlow","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":884431908100120581,"serviceObjectId":884431907475169280,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"}],"serviceObjectCode":"resultData","serviceObjectId":884431907475169280,"serviceObjectPath":"877545868311805958,884431907475169280","statusCd":"1000","tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":842306878819315712,"attrSpec":{"attrId":842306878819315712,"attrName":"resultCode","attrNbr":"resultCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"0","mustFlag":"F","serviceObjAttrId":884431907491946496,"serviceObjectId":877545868311805958,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":874132034551685121,"attrSpec":{"attrId":874132034551685121,"attrName":"resultMsgCode","attrNbr":"resultMsgCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":884431907491946497,"serviceObjectId":877545868311805958,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},{"attrId":842306878819315714,"attrSpec":{"attrId":842306878819315714,"attrName":"resultMsg","attrNbr":"resultMsg","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1662471397970,"createStaff":50167,"exampleValue":"SUCCESS","mustFlag":"F","serviceObjAttrId":884431907491946498,"serviceObjectId":877545868311805958,"statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":877545868311805958,"serviceObjectPath":"877545868311805958","statusCd":"1000","statusDate":1662471397970,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805958,"paramType":"5000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"}]',
                    request: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'header',
                          name: '请求头参数',
                          attrType: 'object',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                        },
                        { code: 'query', name: 'URL 参数', attrType: 'object' },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'isQryAll',
                              name: '新增节点',
                              attrType: 'field',
                              type: '1500',
                              mustFlag: 'F',
                              defaultValue: 'false',
                            },
                            {
                              code: 'parentCatalogCode',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                          ],
                        },
                      ],
                    },
                    response: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'resultCode',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultMsgCode',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultMsg',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultData',
                          attrType: 'objectArray',
                          children: [
                            {
                              code: 'isCheck',
                              attrType: 'field',
                              type: '1500',
                              mustFlag: 'F',
                            },
                            {
                              code: 'nodeValue',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'catalogType',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'parentCode',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isContainsMatrixAttr',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'nodeKey',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isMatrixSubType',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isExclusiveFlow',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'children',
                              attrType: 'objectArray',
                              children: [
                                {
                                  code: 'isCheck',
                                  attrType: 'field',
                                  type: '1500',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'nodeValue',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'catalogType',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'parentCode',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'children',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'isContainsMatrixAttr',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'nodeKey',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'isMatrixSubType',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'isExclusiveFlow',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    productId: '11095',
                    api: '/app/rhin/gateway/callRhinEngine',
                    _source: 'rhin',
                    _serviceId: '877545868169199616',
                    _serviceTitle:
                      '根据父类目编码查询类目数据-tsm: qryCatalogToTreeNodeListByParentCode',
                    _capabilityCode: 'qryCatalogToTreeNodeListByParentCode',
                    _apiCode: 'qryCatalogToTreeNodeListByParentCode',
                    isServiceParam: true,
                    requestType: 'object',
                    responseType: 'object',
                  },
                }}
                treeService={{
                  appId: '871672424566726656',
                  _serviceId: '877545868169199616',
                  _source: 'rhin',
                  api: '/app/rhin/gateway/callRhinEngine',
                  key: 'nodeKey',
                  title: 'nodeValue',
                  selectable: 'isCheck',
                  children: 'children',
                }}
                checkable={false}
                showSearch={true}
                $$componentItem={{
                  id: 'Tree_1493453',
                  uid: 'Tree_1493453',
                  type: 'Tree',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onSelect={(selectedKeys: any, { node }: any) => {
                  const eventDataifelse482: any = [
                    {
                      type: 'ifelse',
                      shielding: true,
                      condition: [
                        {
                          condId: '066225',
                          options: {
                            context: '$selectedKeys[0]$',
                            operate: 'empty',
                            manualValue: 'undefined',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166808566565069700,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166808575081737180,
                          children: [
                            {
                              dataName: 'condition',
                              dataId: 166808576715620830,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166808576715605400,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 166808576715691970,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                      elseIfs: [],
                                      shielding: true,
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 166808576715680420,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      elseIfs: [],
                                      shielding: true,
                                    },
                                  ],
                                  todoOptions: [
                                    'selectAllDataSource',
                                    'dataSourceSetValue',
                                    'onlySetPatch',
                                  ],
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '75778088',
                                    pageJsonId: '90041',
                                    dataSourceId: 166177181413166820,
                                    dataSourceName: 'local_vars',
                                    dataSourceRelType: 'custom',
                                    dataSourceReloadFilter: [],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '513039',
                                        code: 'operType',
                                        name: '操作类型',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '332593',
                                        code: 'selectNodeKey',
                                        name: '已选节点编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'context',
                                            '$selectedKeys[0]$',
                                          ],
                                          code: '',
                                        },
                                      },
                                      {
                                        attrId: '285431',
                                        code: 'pageNum',
                                        name: '页码',
                                        type: 'number',
                                        initialData: { type: 'static' },
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                  },
                                  actionObjId: 'setDataSource',
                                  actionObjName: 'page',
                                  value: 'setDataSource',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 4,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166808576715658660,
                                  children: [],
                                  todoOptions: [],
                                  options: {
                                    compId: 'Form_092772',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Form',
                                    id: '473845',
                                  },
                                  actionObjId: 'Form_092772',
                                  actionObjName: 'Form',
                                  value: 'resetCurrentForm',
                                  compLib: 'comm',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 5,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166808576715614750,
                                  children: [],
                                  todoOptions: ['disabled'],
                                  options: {
                                    compId: 'Form_092772',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Form',
                                    id: '6166423',
                                    disabled: 'toggle',
                                  },
                                  actionObjId: 'Form_092772',
                                  actionObjName: 'Form',
                                  value: 'setDisable',
                                  compLib: 'comm',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 6,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166808576715674500,
                                  children: [],
                                  todoOptions: ['disabled'],
                                  options: {
                                    compId: 'Button_857839',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Button',
                                    id: '024418',
                                    disabled: 'toggle',
                                  },
                                  actionObjId: 'Button_857839',
                                  actionObjName: 'Button',
                                  value: 'setDisable',
                                  compLib: 'comm',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 7,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166808576715638660,
                                  children: [],
                                  todoOptions: ['disabled'],
                                  options: {
                                    compId: 'Button_3677173',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Button',
                                    id: '443543',
                                    disabled: 'toggle',
                                  },
                                  actionObjId: 'Button_3677173',
                                  actionObjName: 'Button',
                                  value: 'setDisable',
                                  compLib: 'comm',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 8,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166808576715684860,
                                  children: [],
                                  todoOptions: ['disabled'],
                                  options: {
                                    compId: 'Button_11272',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Button',
                                    id: '5324663',
                                    disabled: 'toggle',
                                  },
                                  actionObjId: 'Button_11272',
                                  actionObjName: 'Button',
                                  value: 'setDisable',
                                  compLib: 'comm',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 9,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166808576715632700,
                                  children: [],
                                  todoOptions: ['disabled'],
                                  options: {
                                    compId: 'Button_9487313',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Button',
                                    id: '5539434',
                                    disabled: 'toggle',
                                  },
                                  actionObjId: 'Button_9487313',
                                  actionObjName: 'Button',
                                  value: 'setDisable',
                                  compLib: 'comm',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 10,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 166808576715689280,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 166808576715693380,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                      elseIfs: [],
                                      shielding: true,
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 166808576715607360,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      elseIfs: [],
                                      shielding: true,
                                    },
                                  ],
                                  todoOptions: [
                                    'selectServerDataSource',
                                    'dataSourceReloadFilter',
                                  ],
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '214217',
                                    pageJsonId: '90041',
                                    dataSourceId: 166115308466248830,
                                    dataSourceName: 'qryScenePageByParentCode',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '31416',
                                        code: 'header',
                                        name: '请求头参数',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        type: 'object',
                                      },
                                      {
                                        attrId: '8061062',
                                        code: 'path',
                                        name: '请求路径参数',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        type: 'object',
                                      },
                                      {
                                        attrId: '7014377',
                                        code: 'query',
                                        name: 'URL 参数',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        type: 'object',
                                      },
                                      {
                                        attrId: '6508876',
                                        code: 'body',
                                        name: '请求体',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        type: 'object',
                                        children: [
                                          {
                                            attrId: '2171466',
                                            code: 'parentCatalogCode',
                                            name: 'parentCatalogCode',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                            value: {
                                              type: [
                                                'datasource',
                                                'local_vars',
                                                'data',
                                              ],
                                              code: 'selectNodeKey',
                                            },
                                          },
                                          {
                                            attrId: '2519406',
                                            code: 'catalogName',
                                            name: 'catalogName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '802721',
                                            code: 'catalogCode',
                                            name: 'catalogCode',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '708409',
                                            code: 'pageNum',
                                            name: 'pageNum',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '99204',
                                            code: 'pageSize',
                                            name: 'pageSize',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                            value: {
                                              type: ['customize'],
                                              code: '5',
                                            },
                                          },
                                          {
                                            attrId: '817998',
                                            code: 'sortName',
                                            name: 'sortName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '31032',
                                            code: 'sortOrder',
                                            name: 'sortOrder',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                        ],
                                      },
                                    ],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '805114',
                                        code: 'resultCode',
                                        name: 'resultCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '31001177',
                                        code: 'resultMsgCode',
                                        name: 'resultMsgCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '42389',
                                        code: 'resultMsg',
                                        name: 'resultMsg',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '938269',
                                        code: 'resultData',
                                        name: 'resultData',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                        children: [
                                          {
                                            attrId: '998832',
                                            code: 'total',
                                            name: 'total',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                          },
                                          {
                                            attrId: '013065',
                                            code: 'current',
                                            name: 'current',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                          },
                                          {
                                            attrId: '364572',
                                            code: 'hitCount',
                                            name: 'hitCount',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'boolean',
                                          },
                                          {
                                            attrId: '976704',
                                            code: 'size',
                                            name: 'size',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                          },
                                          {
                                            attrId: '543796',
                                            code: 'optimizeCountSql',
                                            name: 'optimizeCountSql',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'boolean',
                                          },
                                          {
                                            attrId: '31157',
                                            code: 'maxLimit',
                                            name: 'maxLimit',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '7007546',
                                            code: 'orders',
                                            name: 'orders',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'fieldArray',
                                            children: [
                                              {
                                                attrId: '427741',
                                                code: 'listItem',
                                                name: '列表元素',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'object',
                                              },
                                            ],
                                          },
                                          {
                                            attrId: '151008',
                                            code: 'countId',
                                            name: 'countId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '65315001',
                                            code: 'isSearchCount',
                                            name: 'isSearchCount',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'boolean',
                                          },
                                          {
                                            attrId: '0473483',
                                            code: 'records',
                                            name: 'records',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'objectArray',
                                            children: [
                                              {
                                                attrId: '460063',
                                                code: 'updateDate',
                                                name: 'updateDate',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '130765',
                                                code: 'catalogType',
                                                name: 'catalogType',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '6125789',
                                                code: 'catalogCode',
                                                name: 'catalogCode',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '663295',
                                                code: 'remark',
                                                name: 'remark',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '796878',
                                                code: 'lanId',
                                                name: 'lanId',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '029621',
                                                code: 'secondType',
                                                name: 'secondType',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '2823045',
                                                code: 'createStaffName',
                                                name: 'createStaffName',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '602529',
                                                code: 'isMultiInst',
                                                name: 'isMultiInst',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '253556',
                                                code: 'catalogId',
                                                name: 'catalogId',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'long',
                                              },
                                              {
                                                attrId: '577425',
                                                code: 'flowCode',
                                                name: 'flowCode',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '010914',
                                                code: 'col8',
                                                name: 'col8',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '881723',
                                                code: 'col9',
                                                name: 'col9',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '339997',
                                                code: 'col6',
                                                name: 'col6',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '290971',
                                                code: 'col7',
                                                name: 'col7',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '071793',
                                                code: 'col4',
                                                name: 'col4',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '329982',
                                                code: 'col5',
                                                name: 'col5',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '776378',
                                                code: 'col2',
                                                name: 'col2',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '9080584',
                                                code: 'col3',
                                                name: 'col3',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '296552',
                                                code: 'sourceFrom',
                                                name: 'sourceFrom',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '226826',
                                                code: 'col1',
                                                name: 'col1',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '3346057',
                                                code: 'createDate',
                                                name: 'createDate',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '712626',
                                                code: 'belongType',
                                                name: 'belongType',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '678371',
                                                code: 'cfgVersion',
                                                name: 'cfgVersion',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '915172',
                                                code: 'catalogSubType',
                                                name: 'catalogSubType',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '3454457',
                                                code: 'statusCd',
                                                name: 'statusCd',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '690137',
                                                code: 'sort',
                                                name: 'sort',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'long',
                                              },
                                              {
                                                attrId: '2058216',
                                                code: 'parentCatalogCode',
                                                name: 'parentCatalogCode',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '3884487',
                                                code: 'provinceId',
                                                name: 'provinceId',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '736829',
                                                code: 'catalogStatus',
                                                name: 'catalogStatus',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '868818',
                                                code: 'isExclusiveFlow',
                                                name: 'isExclusiveFlow',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '5086327',
                                                code: 'createStaff',
                                                name: 'createStaff',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '467415',
                                                code: 'catalogName',
                                                name: 'catalogName',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '716693',
                                                code: 'areaId',
                                                name: 'areaId',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '6082755',
                                                code: 'isContainsMatrixAttr',
                                                name: 'isContainsMatrixAttr',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '5906375',
                                                code: 'col10',
                                                name: 'col10',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '675665',
                                                code: 'catalogDesc',
                                                name: 'catalogDesc',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '734942',
                                                code: 'updateStaff',
                                                name: 'updateStaff',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                  },
                                  actionObjId: 'reloadDataSource',
                                  actionObjName: 'page',
                                  value: 'reloadDataSource',
                                  elseIfs: [],
                                  shielding: true,
                                  line_number: 11,
                                },
                              ],
                              elseIfs: [],
                              condition: [
                                {
                                  condId: '9853416',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context:
                                      '$node.props.data.data.catalogType$',
                                    operate: '==',
                                    manualValue: '1002',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              desc: '是二级节点刷新网格数据，重置查询条件，启用按钮',
                              shielding: true,
                              line_number: 3,
                            },
                          ],
                          condition: [],
                          elseIfs: [],
                          desc: '不为空',
                          shielding: true,
                          callback: [
                            {
                              type: 'ifelse',
                              shielding: true,
                              condition: [
                                {
                                  condId: '9853416',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context:
                                      '$node.props.data.data.catalogType$',
                                    operate: '==',
                                    manualValue: '1002',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166808576715620830,
                              elseIfs: [],
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 166808576715605400,
                                  shielding: true,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '75778088',
                                    pageJsonId: '90041',
                                    dataSourceId: 166177181413166820,
                                    dataSourceName: 'local_vars',
                                    dataSourceRelType: 'custom',
                                    dataSourceReloadFilter: [],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '513039',
                                        code: 'operType',
                                        name: '操作类型',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '332593',
                                        code: 'selectNodeKey',
                                        name: '已选节点编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        value: {
                                          type: [
                                            'context',
                                            '$selectedKeys[0]$',
                                          ],
                                          code: '',
                                        },
                                      },
                                      {
                                        attrId: '285431',
                                        code: 'pageNum',
                                        name: '页码',
                                        type: 'number',
                                        initialData: { type: 'static' },
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                                {
                                  type: 'resetCurrentForm',
                                  dataId: 166808576715658660,
                                  shielding: true,
                                  options: {
                                    compId: 'Form_092772',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Form',
                                    id: '473845',
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'setDisable',
                                  dataId: 166808576715614750,
                                  shielding: true,
                                  options: {
                                    compId: 'Form_092772',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Form',
                                    id: '6166423',
                                    disabled: 'toggle',
                                  },
                                  line_number: 6,
                                },
                                {
                                  type: 'setDisable',
                                  dataId: 166808576715674500,
                                  shielding: true,
                                  options: {
                                    compId: 'Button_857839',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Button',
                                    id: '024418',
                                    disabled: 'toggle',
                                  },
                                  line_number: 7,
                                },
                                {
                                  type: 'setDisable',
                                  dataId: 166808576715638660,
                                  shielding: true,
                                  options: {
                                    compId: 'Button_3677173',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Button',
                                    id: '443543',
                                    disabled: 'toggle',
                                  },
                                  line_number: 8,
                                },
                                {
                                  type: 'setDisable',
                                  dataId: 166808576715684860,
                                  shielding: true,
                                  options: {
                                    compId: 'Button_11272',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Button',
                                    id: '5324663',
                                    disabled: 'toggle',
                                  },
                                  line_number: 9,
                                },
                                {
                                  type: 'setDisable',
                                  dataId: 166808576715632700,
                                  shielding: true,
                                  options: {
                                    compId: 'Button_9487313',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Button',
                                    id: '5539434',
                                    disabled: 'toggle',
                                  },
                                  line_number: 10,
                                },
                                {
                                  type: 'reloadDataSource',
                                  dataId: 166808576715689280,
                                  shielding: true,
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '214217',
                                    pageJsonId: '90041',
                                    dataSourceId: 166115308466248830,
                                    dataSourceName: 'qryScenePageByParentCode',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '31416',
                                        code: 'header',
                                        name: '请求头参数',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        type: 'object',
                                      },
                                      {
                                        attrId: '8061062',
                                        code: 'path',
                                        name: '请求路径参数',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        type: 'object',
                                      },
                                      {
                                        attrId: '7014377',
                                        code: 'query',
                                        name: 'URL 参数',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        type: 'object',
                                      },
                                      {
                                        attrId: '6508876',
                                        code: 'body',
                                        name: '请求体',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '',
                                        },
                                        type: 'object',
                                        children: [
                                          {
                                            attrId: '2171466',
                                            code: 'parentCatalogCode',
                                            name: 'parentCatalogCode',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                            value: {
                                              type: [
                                                'datasource',
                                                'local_vars',
                                                'data',
                                              ],
                                              code: 'selectNodeKey',
                                            },
                                          },
                                          {
                                            attrId: '2519406',
                                            code: 'catalogName',
                                            name: 'catalogName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '802721',
                                            code: 'catalogCode',
                                            name: 'catalogCode',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '708409',
                                            code: 'pageNum',
                                            name: 'pageNum',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '99204',
                                            code: 'pageSize',
                                            name: 'pageSize',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                            value: {
                                              type: ['customize'],
                                              code: '5',
                                            },
                                          },
                                          {
                                            attrId: '817998',
                                            code: 'sortName',
                                            name: 'sortName',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '31032',
                                            code: 'sortOrder',
                                            name: 'sortOrder',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                        ],
                                      },
                                    ],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '805114',
                                        code: 'resultCode',
                                        name: 'resultCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '31001177',
                                        code: 'resultMsgCode',
                                        name: 'resultMsgCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '42389',
                                        code: 'resultMsg',
                                        name: 'resultMsg',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '938269',
                                        code: 'resultData',
                                        name: 'resultData',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'object',
                                        children: [
                                          {
                                            attrId: '998832',
                                            code: 'total',
                                            name: 'total',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                          },
                                          {
                                            attrId: '013065',
                                            code: 'current',
                                            name: 'current',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                          },
                                          {
                                            attrId: '364572',
                                            code: 'hitCount',
                                            name: 'hitCount',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'boolean',
                                          },
                                          {
                                            attrId: '976704',
                                            code: 'size',
                                            name: 'size',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'long',
                                          },
                                          {
                                            attrId: '543796',
                                            code: 'optimizeCountSql',
                                            name: 'optimizeCountSql',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'boolean',
                                          },
                                          {
                                            attrId: '31157',
                                            code: 'maxLimit',
                                            name: 'maxLimit',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '7007546',
                                            code: 'orders',
                                            name: 'orders',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'fieldArray',
                                            children: [
                                              {
                                                attrId: '427741',
                                                code: 'listItem',
                                                name: '列表元素',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'object',
                                              },
                                            ],
                                          },
                                          {
                                            attrId: '151008',
                                            code: 'countId',
                                            name: 'countId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '65315001',
                                            code: 'isSearchCount',
                                            name: 'isSearchCount',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'boolean',
                                          },
                                          {
                                            attrId: '0473483',
                                            code: 'records',
                                            name: 'records',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'objectArray',
                                            children: [
                                              {
                                                attrId: '460063',
                                                code: 'updateDate',
                                                name: 'updateDate',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '130765',
                                                code: 'catalogType',
                                                name: 'catalogType',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '6125789',
                                                code: 'catalogCode',
                                                name: 'catalogCode',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '663295',
                                                code: 'remark',
                                                name: 'remark',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '796878',
                                                code: 'lanId',
                                                name: 'lanId',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '029621',
                                                code: 'secondType',
                                                name: 'secondType',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '2823045',
                                                code: 'createStaffName',
                                                name: 'createStaffName',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '602529',
                                                code: 'isMultiInst',
                                                name: 'isMultiInst',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '253556',
                                                code: 'catalogId',
                                                name: 'catalogId',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'long',
                                              },
                                              {
                                                attrId: '577425',
                                                code: 'flowCode',
                                                name: 'flowCode',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '010914',
                                                code: 'col8',
                                                name: 'col8',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '881723',
                                                code: 'col9',
                                                name: 'col9',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '339997',
                                                code: 'col6',
                                                name: 'col6',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '290971',
                                                code: 'col7',
                                                name: 'col7',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '071793',
                                                code: 'col4',
                                                name: 'col4',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '329982',
                                                code: 'col5',
                                                name: 'col5',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '776378',
                                                code: 'col2',
                                                name: 'col2',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '9080584',
                                                code: 'col3',
                                                name: 'col3',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '296552',
                                                code: 'sourceFrom',
                                                name: 'sourceFrom',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '226826',
                                                code: 'col1',
                                                name: 'col1',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '3346057',
                                                code: 'createDate',
                                                name: 'createDate',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '712626',
                                                code: 'belongType',
                                                name: 'belongType',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '678371',
                                                code: 'cfgVersion',
                                                name: 'cfgVersion',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '915172',
                                                code: 'catalogSubType',
                                                name: 'catalogSubType',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '3454457',
                                                code: 'statusCd',
                                                name: 'statusCd',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '690137',
                                                code: 'sort',
                                                name: 'sort',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'long',
                                              },
                                              {
                                                attrId: '2058216',
                                                code: 'parentCatalogCode',
                                                name: 'parentCatalogCode',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '3884487',
                                                code: 'provinceId',
                                                name: 'provinceId',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '736829',
                                                code: 'catalogStatus',
                                                name: 'catalogStatus',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '868818',
                                                code: 'isExclusiveFlow',
                                                name: 'isExclusiveFlow',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '5086327',
                                                code: 'createStaff',
                                                name: 'createStaff',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '467415',
                                                code: 'catalogName',
                                                name: 'catalogName',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '716693',
                                                code: 'areaId',
                                                name: 'areaId',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '6082755',
                                                code: 'isContainsMatrixAttr',
                                                name: 'isContainsMatrixAttr',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '5906375',
                                                code: 'col10',
                                                name: 'col10',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '675665',
                                                code: 'catalogDesc',
                                                name: 'catalogDesc',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                              {
                                                attrId: '734942',
                                                code: 'updateStaff',
                                                name: 'updateStaff',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                type: 'string',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                  },
                                  line_number: 11,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 166808566565094050,
                          shielding: true,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '2678323',
                            pageJsonId: '90041',
                            type: 'success',
                            value: '为空',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDataifelse482.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataifelse482,
                    { selectedKeys, node },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                  const forms109 = getFormByCompId('Form_092772', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms109) ? forms109 : [forms109]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const eventDatagetTreeSelectedKey4: any = [
                    {
                      type: 'getTreeSelectedKey',
                      dataId: 167936596885454200,
                      options: {
                        compId: 'Tree_1493453',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Tree',
                        id: '121702',
                      },
                      line_number: 13,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '2368195',
                              options: {
                                context: '$selectedKeys_121702[0]$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167936600413828860,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167936607299054800,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167936607595154180,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 167936607595182980,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 167936607595132540,
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 167936607595127100,
                                              children: [],
                                              value: 'callback1',
                                              params: [],
                                              elseIfs: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 167936607595150340,
                                              children: [],
                                              value: 'callback2',
                                              params: [],
                                              elseIfs: [],
                                            },
                                          ],
                                          todoOptions: [
                                            'customFuncName',
                                            'customFuncParams',
                                          ],
                                          options: {
                                            compId: 'callSelfFunc',
                                            compName: 'system',
                                            id: '837447',
                                            pageJsonId: '90041',
                                            customFuncName: 'onLoadTable',
                                          },
                                          actionObjId: 'callSelfFunc',
                                          actionObjName: 'system',
                                          value: 'callSelfFunc',
                                          elseIfs: [],
                                          line_number: 18,
                                        },
                                      ],
                                      value: 'callback1',
                                      params: [],
                                      elseIfs: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 167936607595103520,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      elseIfs: [],
                                    },
                                  ],
                                  todoOptions: [
                                    'selectAllDataSource',
                                    'dataSourceSetValue',
                                    'onlySetPatch',
                                  ],
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '4510525',
                                    pageJsonId: '90041',
                                    dataSourceId: 166177181413166820,
                                    dataSourceName: 'local_vars',
                                    dataSourceRelType: 'custom',
                                    dataSourceReloadFilter: [],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '513039',
                                        code: 'operType',
                                        name: '操作类型',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '332593',
                                        code: 'selectNodeKey',
                                        name: '已选节点编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        value: {
                                          type: ['customize'],
                                          code: '-1',
                                        },
                                      },
                                      {
                                        attrId: '285431',
                                        code: 'pageNum',
                                        name: '页码',
                                        type: 'number',
                                        initialData: { type: 'static' },
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                  },
                                  actionObjId: 'setDataSource',
                                  actionObjName: 'page',
                                  value: 'setDataSource',
                                  elseIfs: [],
                                  line_number: 17,
                                },
                              ],
                              condition: [],
                              callback: [
                                {
                                  type: 'setDataSource',
                                  dataId: 167936607595154180,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '4510525',
                                    pageJsonId: '90041',
                                    dataSourceId: 166177181413166820,
                                    dataSourceName: 'local_vars',
                                    dataSourceRelType: 'custom',
                                    dataSourceReloadFilter: [],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '513039',
                                        code: 'operType',
                                        name: '操作类型',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                      },
                                      {
                                        attrId: '332593',
                                        code: 'selectNodeKey',
                                        name: '已选节点编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        value: {
                                          type: ['customize'],
                                          code: '-1',
                                        },
                                      },
                                      {
                                        attrId: '285431',
                                        code: 'pageNum',
                                        name: '页码',
                                        type: 'number',
                                        initialData: { type: 'static' },
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                  },
                                  line_number: 17,
                                  callback1: [
                                    {
                                      type: 'callSelfFunc',
                                      dataId: 167936607595132540,
                                      options: {
                                        compId: 'callSelfFunc',
                                        compName: 'system',
                                        id: '837447',
                                        pageJsonId: '90041',
                                        customFuncName: 'onLoadTable',
                                      },
                                      line_number: 18,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ],
                                  callback2: [],
                                },
                              ],
                            },
                          ],
                          line_number: 14,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167936606870333700,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '101759',
                                pageJsonId: '90041',
                                dataSourceId: 166177181413166820,
                                dataSourceName: 'local_vars',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '513039',
                                    code: 'operType',
                                    name: '操作类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '332593',
                                    code: 'selectNodeKey',
                                    name: '已选节点编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$selectedKeys[0]$'],
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '285431',
                                    code: 'pageNum',
                                    name: '页码',
                                    type: 'number',
                                    initialData: { type: 'static' },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 15,
                              callback1: [
                                {
                                  type: 'callSelfFunc',
                                  dataId: 167936606870301020,
                                  options: {
                                    compId: 'callSelfFunc',
                                    compName: 'system',
                                    id: '601547',
                                    pageJsonId: '90041',
                                    customFuncName: 'onLoadTable',
                                  },
                                  line_number: 16,
                                  callback1: [],
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
                  eventDatagetTreeSelectedKey4.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatagetTreeSelectedKey4,
                    { selectedKeys, node },
                    'getTreeSelectedKey',
                    {
                      id: 'getTreeSelectedKey',
                      name: 'getTreeSelectedKey',
                      type: 'getTreeSelectedKey',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource158: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167835484062996580,
                      shielding: true,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '540223',
                        pageJsonId: '90041',
                        dataSourceId: 166177181413166820,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '513039',
                            code: 'operType',
                            name: '操作类型',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '332593',
                            code: 'selectNodeKey',
                            name: '已选节点编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$selectedKeys[0]$'],
                              code: '',
                            },
                          },
                          {
                            attrId: '285431',
                            code: 'pageNum',
                            name: '页码',
                            type: 'number',
                            initialData: { type: 'static' },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 19,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 167835504038673500,
                          shielding: true,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '8430547',
                            pageJsonId: '90041',
                            customFuncName: 'onLoadTable',
                          },
                          line_number: 20,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource158.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDataSource158,
                    { selectedKeys, node },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const forms110 = getFormByCompId(
                    'Form_6963977_3957773',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms110) ? forms110 : [forms110]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const eventDatasetDisable97: any = [
                    {
                      type: 'setDisable',
                      dataId: 167835485801407970,
                      options: {
                        compId: ['Form_092772'],
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Form',
                        id: '479641',
                        disabled: '',
                        compid: ['Form_092772'],
                      },
                      line_number: 22,
                    },
                  ];
                  eventDatasetDisable97.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDisable97,
                    { selectedKeys, node },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable98: any = [
                    {
                      type: 'setDisable',
                      dataId: 167835732105434660,
                      options: {
                        compId: [
                          'Form_6963977_3957773',
                          'Input_172385_1767063',
                          'Input_149739_442001',
                          'Select_98314808',
                          'MultipleSelect_412347',
                          'Select_333194',
                          'Select_742253',
                          'Input_323114',
                          'Select_6137299',
                          'Select_1346751',
                          'Select_889808',
                          'Select_082425',
                          'Select_242215',
                          'Select_565959',
                          'Select_8729274',
                          'Select_435749',
                          'TreeSelect_688155',
                          'TextArea_436859',
                          'TextArea_60733',
                          'Input_149406',
                          'Button_8429776',
                          'Button_178963',
                        ],
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Form',
                        id: '65937',
                        disabled: 'true',
                        compid: [
                          'Form_6963977_3957773',
                          'Input_172385_1767063',
                          'Input_149739_442001',
                          'Select_98314808',
                          'MultipleSelect_412347',
                          'Select_333194',
                          'Select_742253',
                          'Input_323114',
                          'Select_6137299',
                          'Select_1346751',
                          'Select_889808',
                          'Select_082425',
                          'Select_242215',
                          'Select_565959',
                          'Select_8729274',
                          'Select_435749',
                          'TreeSelect_688155',
                          'TextArea_436859',
                          'TextArea_60733',
                          'Input_149406',
                          'Button_8429776',
                          'Button_178963',
                        ],
                      },
                      line_number: 23,
                    },
                  ];
                  eventDatasetDisable98.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDisable98,
                    { selectedKeys, node },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable99: any = [
                    {
                      type: 'setDisable',
                      dataId: 167835486722869540,
                      shielding: true,
                      options: {
                        compId: 'Button_857839',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Button',
                        id: '223111',
                        disabled: 'toggle',
                      },
                      line_number: 24,
                    },
                  ];
                  eventDatasetDisable99.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDisable99,
                    { selectedKeys, node },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable100: any = [
                    {
                      type: 'setDisable',
                      dataId: 167835487590713540,
                      shielding: true,
                      options: {
                        compId: 'Button_3677173',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Button',
                        id: '091431',
                        disabled: 'toggle',
                      },
                      line_number: 25,
                    },
                  ];
                  eventDatasetDisable100.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDisable100,
                    { selectedKeys, node },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable101: any = [
                    {
                      type: 'setDisable',
                      dataId: 167835488216106500,
                      shielding: true,
                      options: {
                        compId: 'Button_11272',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Button',
                        id: '541175',
                        disabled: 'toggle',
                      },
                      line_number: 26,
                    },
                  ];
                  eventDatasetDisable101.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDisable101,
                    { selectedKeys, node },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable102: any = [
                    {
                      type: 'setDisable',
                      dataId: 167835488722710050,
                      shielding: true,
                      options: {
                        compId: 'Button_9487313',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Button',
                        id: '796913',
                        disabled: 'toggle',
                      },
                      line_number: 27,
                    },
                  ];
                  eventDatasetDisable102.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDisable102,
                    { selectedKeys, node },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Tree_1493453'] = r)}
                {...injectData}
              />
            </Card>
          </View>
          <View
            name={'右布局容器'}
            $$componentItem={{
              id: 'View_196885',
              uid: 'View_196885',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'block',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => (refs['View_196885'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_076837',
                uid: 'View_076837',
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
              ref={(r: any) => (refs['View_076837'] = r)}
              {...injectData}
            >
              <Card
                name={'卡片'}
                cardIconType={'middle'}
                title={'场景列表'}
                bordered={true}
                size={'default'}
                hasHeader={true}
                hasIcon={true}
                formItemIndex={0}
                extend={[
                  {
                    id: '368901',
                    title: '新增场景',
                    iconPos: 'left',
                    btnType: 'primary',
                  },
                  {
                    id: '89247845',
                    title: '批量删除',
                    iconPos: 'left',
                    btnType: 'danger',
                  },
                ]}
                extendNum={4}
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
                  id: 'Card_5972654',
                  uid: 'Card_5972654',
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
                onClickBtn1={(e: any) => {
                  const forms111 = getFormByCompId(
                    'Form_6963977_3957773',
                    refs,
                  );
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms111) ? forms111 : [forms111]).forEach(
                    (form) => form?.resetFields(),
                  );
                  const eventDatasetDisable103: any = [
                    {
                      type: 'setDisable',
                      dataId: 166670804331106780,
                      options: {
                        compId: [
                          'Form_6963977_3957773',
                          'Input_172385_1767063',
                          'Button_8429776',
                          'Button_178963',
                          'Input_149739_442001',
                          'Select_98314808',
                          'Select_435749',
                          'Select_333194',
                          'Select_742253',
                          'Input_323114',
                          'Select_6137299',
                          'Select_889808',
                          'Select_1346751',
                          'Select_082425',
                          'Select_242215',
                          'Select_8729274',
                          'Select_565959',
                          'TextArea_436859',
                          'TextArea_60733',
                          'Input_149406',
                          'TreeSelect_688155',
                          'MultipleSelect_412347',
                        ],
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Form',
                        id: '77807',
                        disabled: '',
                        compid: [
                          'Form_6963977_3957773',
                          'Input_172385_1767063',
                          'Button_8429776',
                          'Button_178963',
                          'Input_149739_442001',
                          'Select_98314808',
                          'Select_435749',
                          'Select_333194',
                          'Select_742253',
                          'Input_323114',
                          'Select_6137299',
                          'Select_889808',
                          'Select_1346751',
                          'Select_082425',
                          'Select_242215',
                          'Select_8729274',
                          'Select_565959',
                          'TextArea_436859',
                          'TextArea_60733',
                          'Input_149406',
                          'TreeSelect_688155',
                          'MultipleSelect_412347',
                        ],
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable103.params =
                    [{ title: '新增场景点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(eventDatasetDisable103, { e }, 'setDisable', {
                    id: 'setDisable',
                    name: 'setDisable',
                    type: 'setDisable',
                    platform: 'pc',
                  });
                  const eventDatasetDataSource159: any = [
                    {
                      type: 'setDataSource',
                      dataId: 166670798634434370,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '8466186',
                        pageJsonId: '90041',
                        dataSourceId: 166177181413166820,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '513039',
                            code: 'operType',
                            name: '操作类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'add' },
                          },
                          {
                            attrId: '332593',
                            code: 'selectNodeKey',
                            name: '已选节点编码',
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
                  ];
                  eventDatasetDataSource159.params =
                    [{ title: '新增场景点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(
                    eventDatasetDataSource159,
                    { e },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetValue34: any = [
                    {
                      type: 'setValue',
                      dataId: 166670802288701630,
                      options: {
                        compId: ['Select_333194'],
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Select',
                        id: '152927',
                        value: '0',
                        valueList: { Select_333194: '0' },
                        compid: ['Select_333194'],
                      },
                      line_number: 4,
                      callback1: [],
                    },
                  ];
                  eventDatasetValue34.params =
                    [{ title: '新增场景点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(eventDatasetValue34, { e }, 'setValue', {
                    id: 'setValue',
                    name: 'setValue',
                    type: 'setValue',
                    platform: 'pc',
                  });
                  const eventDatagetSelectedData319: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 167835656736170430,
                      options: {
                        compId: 'Tree_1493453',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Tree',
                        id: '4092193',
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '384136',
                              options: {
                                useManual: true,
                                useObject: false,
                                context:
                                  '$selectedData_4092193[0].catalogType$',
                                operate: '==',
                                manualValue: '1002',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167835657503945300,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167835711911923330,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167835713253028030,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 167835713253058140,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                    },
                                  ],
                                  todoOptions: ['compId', 'valueList'],
                                  options: {
                                    compId: 'TreeSelect_688155',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'TreeSelect',
                                    id: '623859',
                                    valueList: { TreeSelect_688155: '' },
                                  },
                                  actionObjId: 'TreeSelect_688155',
                                  actionObjName: 'TreeSelect',
                                  value: 'setValue',
                                  compLib: 'comm',
                                  line_number: 8,
                                },
                              ],
                              condition: [],
                              callback: [
                                {
                                  type: 'setValue',
                                  dataId: 167835713253028030,
                                  options: {
                                    compId: 'TreeSelect_688155',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'TreeSelect',
                                    id: '623859',
                                    valueList: { TreeSelect_688155: '' },
                                  },
                                  line_number: 8,
                                  callback1: [],
                                },
                              ],
                            },
                          ],
                          line_number: 6,
                          callback1: [
                            {
                              type: 'setValue',
                              dataId: 167835663979327170,
                              options: {
                                compId: 'TreeSelect_688155',
                                compLib: 'comm',
                                pageJsonId: '90041',
                                compName: 'TreeSelect',
                                id: '39861084',
                                valueList: {
                                  TreeSelect_688155:
                                    '$data.local_vars.selectNodeKey$',
                                },
                              },
                              line_number: 7,
                              callback1: [],
                            },
                          ],
                        },
                      ],
                      callback2: [
                        {
                          type: 'setValue',
                          dataId: 167835717983405760,
                          options: {
                            compId: 'TreeSelect_688155',
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'TreeSelect',
                            id: '070012',
                            valueList: { TreeSelect_688155: '' },
                          },
                          line_number: 9,
                          callback1: [],
                        },
                      ],
                    },
                  ];
                  eventDatagetSelectedData319.params =
                    [{ title: '新增场景点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(
                    eventDatagetSelectedData319,
                    { e },
                    'getSelectedData',
                    {
                      id: 'getSelectedData',
                      name: 'getSelectedData',
                      type: 'getSelectedData',
                      platform: 'pc',
                    },
                  );
                  const eventDataresetDataSource: any = [
                    {
                      type: 'resetDataSource',
                      dataId: 169933593516651070,
                      options: {
                        compId: 'resetDataSource',
                        compName: 'page',
                        id: '958056',
                        pageJsonId: '90041',
                        dataSourceId: 167600850858546780,
                        dataSourceName: 'pageParam',
                        dataSourceRelType: 'custom',
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 10,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDataresetDataSource.params =
                    [{ title: '新增场景点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(
                    eventDataresetDataSource,
                    { e },
                    'resetDataSource',
                    {
                      id: 'resetDataSource',
                      name: 'resetDataSource',
                      type: 'resetDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode620: any = [
                    {
                      type: 'customActionCode',
                      dataId: 169934580225615870,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '505784',
                        pageJsonId: '90041',
                        actionTitle: '手动赋值undefined',
                        code: 'function main(data,state,success,fail){success(undefined)};',
                      },
                      line_number: 11,
                      callback1: [
                        {
                          type: 'setValue',
                          dataId: 169934584436339620,
                          options: {
                            compId: [
                              'MultipleSelect_412347',
                              'MultipleSelect_1903767',
                              'TreeSelect_688155',
                            ],
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'MultipleSelect',
                            id: '0993265',
                            valueList: {
                              MultipleSelect_412347: '$data_505784$',
                              TreeSelect_688155: '$data_505784$',
                              MultipleSelect_1903767: '$data_505784$',
                            },
                            compid: [
                              'MultipleSelect_412347',
                              'MultipleSelect_1903767',
                              'TreeSelect_688155',
                            ],
                          },
                          line_number: 12,
                          callback1: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode620.params =
                    [{ title: '新增场景点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode620,
                    { e },
                    'customActionCode',
                    {
                      id: 'customActionCode',
                      name: 'customActionCode',
                      type: 'customActionCode',
                      platform: 'pc',
                    },
                  );
                }}
                onClickBtn2={(e: any) => {
                  const eventDatagetTableSelectedKey63: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 166670809564677400,
                      options: {
                        compId: 'Table_234352',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Table',
                        id: '6847657',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 166670809564634660,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '648639',
                            pageJsonId: '90041',
                            value: [
                              '$JSON.stringify(selectedRowKeys_6847657)$',
                            ],
                          },
                          line_number: 2,
                        },
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '812929',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$selectedRowKeys_6847657.length$',
                                operate: '>',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166670809564666700,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166670809564644540,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166670809564644830,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '203861',
                                    pageJsonId: '90041',
                                    type: 'info',
                                    value: '请选择要删除的场景！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  line_number: 10,
                                },
                              ],
                              condition: [],
                              desc: '已选择记录 <= 0',
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166670809564644830,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '203861',
                                    pageJsonId: '90041',
                                    type: 'info',
                                    value: '请选择要删除的场景！',
                                  },
                                  line_number: 10,
                                },
                              ],
                            },
                          ],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'showModal',
                              dataId: 166670809564690750,
                              options: {
                                compId: 'showModal',
                                compName: 'page',
                                id: '0647',
                                pageJsonId: '90041',
                                type: 'confirm',
                                title: '系统提示',
                                content: '确定要删除所选记录？',
                                okText: '确定',
                                cancelText: '取消',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'apiRequest',
                                  dataId: 166670809564635360,
                                  options: {
                                    compId: 'apiRequest',
                                    compName: 'system',
                                    id: '977717',
                                    pageJsonId: '90041',
                                    sync: false,
                                    method: 'post',
                                    url: '/app/rhin/gateway/callRhinEngine',
                                    _capabilityCode: 'delBatchDcCatalog',
                                    _apiCode: 'delBatchDcCatalog',
                                    _source: 'rhin',
                                    _serviceId: '881476424178565120',
                                    _serviceTitle:
                                      '类目批量删除-tsm: delBatchDcCatalog',
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
                                        dataKey: '131026_header',
                                      },
                                      {
                                        code: 'path',
                                        name: '请求路径参数',
                                        attrType: 'object',
                                        _id: 'path',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'path',
                                        dataKey: '131026_path',
                                      },
                                      {
                                        code: 'query',
                                        name: 'URL 参数',
                                        attrType: 'object',
                                        _id: 'query',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'query',
                                        dataKey: '131026_query',
                                      },
                                      {
                                        code: 'body',
                                        name: '请求体',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'catalogIds',
                                            name: '场景标识列表 1,2,3',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'body.catalogIds',
                                            compType: 'Input',
                                            parents: ['body'],
                                            id: 'body.catalogIds',
                                            dataKey: '131026_body.catalogIds',
                                            value: {
                                              type: ['customize'],
                                              code: '$JSON.stringify(selectedRowKeys_6847657)$',
                                            },
                                          },
                                        ],
                                        _id: 'body',
                                        compType: 'Input',
                                        parents: [],
                                        id: 'body',
                                        dataKey: '131026_body',
                                      },
                                    ],
                                    _sourceName: '类目批量删除-tsm',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '693602',
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context:
                                              '$reply_977717?.resultCode$',
                                            operate: '==',
                                            manualValue: '0',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 166670809564603500,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 166670809564626430,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 166670809564652220,
                                              children: [],
                                              todoOptions: ['msgType', 'value'],
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '160852',
                                                pageJsonId: '90041',
                                                type: 'error',
                                                value: '所选场景删除失败！',
                                              },
                                              actionObjId: 'showMessage',
                                              actionObjName: 'system',
                                              value: 'showMessage',
                                              line_number: 9,
                                            },
                                          ],
                                          condition: [],
                                          desc: 'resultCode != 0',
                                          callback: [
                                            {
                                              type: 'showMessage',
                                              dataId: 166670809564652220,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '160852',
                                                pageJsonId: '90041',
                                                type: 'error',
                                                value: '所选场景删除失败！',
                                              },
                                              line_number: 9,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 6,
                                      callback1: [
                                        {
                                          type: 'showMessage',
                                          dataId: 166670809564647840,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '428581',
                                            pageJsonId: '90041',
                                            type: 'success',
                                            value: '所选场景删除成功！',
                                          },
                                          line_number: 7,
                                        },
                                        {
                                          type: 'callSelfFunc',
                                          dataId: 166671184392911420,
                                          options: {
                                            compId: 'callSelfFunc',
                                            compName: 'system',
                                            id: '718828',
                                            pageJsonId: '90041',
                                            customFuncName: 'onLoadTable',
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
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelectedKey63.params =
                    [{ title: '批量删除点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey63,
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
                onClickBtn3={(e: any) => {
                  const eventDatashowMessage2: any = [
                    {
                      type: 'showMessage',
                      dataId: 166671019545064860,
                      shielding: true,
                      options: {
                        compId: 'showMessage',
                        compName: 'system',
                        id: '516921',
                        pageJsonId: '90041',
                        type: 'success',
                        value: '暂未开放',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatashowMessage2.params =
                    [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(eventDatashowMessage2, { e }, 'showMessage', {
                    id: 'showMessage',
                    name: 'showMessage',
                    type: 'showMessage',
                    platform: 'pc',
                  });
                  const eventDatagetTableSelectedKey64: any = [
                    {
                      type: 'getTableSelectedKey',
                      dataId: 166861205857593630,
                      shielding: true,
                      options: {
                        compId: 'Table_234352',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Table',
                        id: '091441',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'ifelse',
                          shielding: true,
                          condition: [
                            {
                              condId: '597414',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$selectedRowKeys_091441.length$',
                                operate: '>',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166861211359628800,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166861214536582850,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166861216799790400,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '207199',
                                    pageJsonId: '90041',
                                    type: 'info',
                                    value: '请选择要导出的场景！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  shielding: true,
                                  line_number: 5,
                                },
                              ],
                              condition: [],
                              desc: '未选',
                              shielding: true,
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166861216799790400,
                                  shielding: true,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '207199',
                                    pageJsonId: '90041',
                                    type: 'info',
                                    value: '请选择要导出的场景！',
                                  },
                                  line_number: 5,
                                },
                              ],
                            },
                          ],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 166861215844807780,
                              shielding: true,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '275599',
                                pageJsonId: '90041',
                                sync: false,
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'exportSceneUpgradeScript',
                                _apiCode: 'exportSceneUpgradeScript',
                                _source: 'rhin',
                                _serviceId: '910185281585168384',
                                _serviceTitle:
                                  '导出场景配套的升级脚本-tsm: exportSceneUpgradeScript',
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
                                    dataKey: '275599_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '275599_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'exportType',
                                        name: '导出类型：all=全场景，selected=已选',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'T',
                                        defaultValue: '',
                                        _id: 'query.exportType',
                                        compType: 'Input',
                                        parents: ['query'],
                                        id: 'query.exportType',
                                        dataKey: '275599_query.exportType',
                                        value: {
                                          type: ['customize'],
                                          code: 'selected',
                                        },
                                      },
                                      {
                                        code: 'sceneIds',
                                        name: '场景ID列表，多个ID用多号分割',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'query.sceneIds',
                                        compType: 'Input',
                                        parents: ['query'],
                                        id: 'query.sceneIds',
                                        dataKey: '275599_query.sceneIds',
                                        value: {
                                          type: ['customize'],
                                          code: '40101,20707',
                                        },
                                      },
                                    ],
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '275599_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '275599_body',
                                  },
                                ],
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
                  ];
                  eventDatagetTableSelectedKey64.params =
                    [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(
                    eventDatagetTableSelectedKey64,
                    { e },
                    'getTableSelectedKey',
                    {
                      id: 'getTableSelectedKey',
                      name: 'getTableSelectedKey',
                      type: 'getTableSelectedKey',
                      platform: 'pc',
                    },
                  );
                  const eventDatagetTableSelected63: any = [
                    {
                      type: 'getTableSelected',
                      dataId: 168438025167307800,
                      options: {
                        compId: 'Table_234352',
                        compLib: 'comm',
                        pageJsonId: '90041',
                        compName: 'Table',
                        id: '7111195',
                      },
                      line_number: 6,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 168438025702243700,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '410953',
                            pageJsonId: '90041',
                            value: ['$selectedRows_7111195[0]$'],
                          },
                          line_number: 7,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetTableSelected63.params =
                    [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(
                    eventDatagetTableSelected63,
                    { e },
                    'getTableSelected',
                    {
                      id: 'getTableSelected',
                      name: 'getTableSelected',
                      type: 'getTableSelected',
                      platform: 'pc',
                    },
                  );
                }}
                onClickBtn4={(e: any) => {
                  const eventDatashowMessage3: any = [
                    {
                      type: 'showMessage',
                      dataId: 166808595125496930,
                      options: {
                        compId: 'showMessage',
                        compName: 'system',
                        id: '428376',
                        pageJsonId: '90041',
                        type: 'success',
                        value: '暂未开放',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatashowMessage3.params =
                    [{ title: 'undefined点击回调', value: '$e$', name: 'e' }] ||
                    [];
                  CMDGenerator(eventDatashowMessage3, { e }, 'showMessage', {
                    id: 'showMessage',
                    name: 'showMessage',
                    type: 'showMessage',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Card_5972654'] = r)}
                {...injectData}
              >
                <Form
                  name={'场景查询条件表单'}
                  colSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  colon={true}
                  layout={'horizontal'}
                  labelAlign={'right'}
                  header={'标题'}
                  colSpace={0}
                  rowSpace={16}
                  formCode={'Form_092772'}
                  $$componentItem={{
                    id: 'Form_092772',
                    uid: 'Form_092772',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => (refs['Form_092772'] = r)}
                  {...injectData}
                >
                  <Input
                    name={'场景编码'}
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
                    fieldName={'sceneCode'}
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
                      id: 'Input_832782',
                      uid: 'Input_832782',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onPressEnter={(e: any) => {
                      const eventDatacallSelfFunc465: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166671175895041280,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '783304',
                            pageJsonId: '90041',
                            customFuncName: 'onLoadTable',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc465.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc465,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['Input_832782'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'场景名称'}
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
                    formItemIndex={1}
                    fieldName={'sceneName'}
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
                      id: 'Input_409544',
                      uid: 'Input_409544',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onPressEnter={(e: any) => {
                      const eventDatacallSelfFunc466: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166671177697947200,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '669313',
                            pageJsonId: '90041',
                            customFuncName: 'onLoadTable',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc466.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc466,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['Input_409544'] = r)}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_84902764',
                      uid: 'View_84902764',
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
                        formItemIndex: 2,
                        style: undefined,
                        selfSpan: undefined,
                      },
                    }}
                    style={{
                      display: 'block',
                      flexDirection: 'column',
                      padding: '0px 0px 0px 0px',
                      width: '100%',
                      textAlign: 'left',
                    }}
                    ref={(r: any) => (refs['View_84902764'] = r)}
                    {...injectData}
                  >
                    <Button
                      name={'查询'}
                      classification={'default'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      type={'primary'}
                      labelCol={8}
                      wrapperCol={16}
                      hasIcon={false}
                      $$componentItem={{
                        id: 'Button_857839',
                        uid: 'Button_857839',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: 'fit-content',
                        margin: '0px 20px 0px 20px',
                      }}
                      onClick={(e: any) => {
                        const eventDatacallSelfFunc467: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 166671182851404380,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '388252',
                              pageJsonId: '90041',
                              customFuncName: 'onLoadTable',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc467.params =
                          [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                          [];
                        CMDGenerator(
                          eventDatacallSelfFunc467,
                          { e },
                          'callSelfFunc',
                          {
                            id: 'callSelfFunc',
                            name: 'callSelfFunc',
                            type: 'callSelfFunc',
                            platform: 'pc',
                          },
                        );
                      }}
                      ref={(r: any) => (refs['Button_857839'] = r)}
                      {...injectData}
                    />
                    <Button
                      name={'重置'}
                      shape={null}
                      classification={'default'}
                      autoProcessFlow={false}
                      flowProcessResult={'common'}
                      iconPosition={'left'}
                      ghost={false}
                      block={false}
                      size={'default'}
                      type={'default'}
                      hasIcon={false}
                      $$componentItem={{
                        id: 'Button_3677173',
                        uid: 'Button_3677173',
                        type: 'Button',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{ width: 'fit-content' }}
                      onClick={(e: any) => {
                        const forms113 = getFormByCompId('Form_092772', refs);
                        // 支持循环容器中的表单重置
                        (Array.isArray(forms113)
                          ? forms113
                          : [forms113]
                        ).forEach((form) => form?.resetFields());
                      }}
                      ref={(r: any) => (refs['Button_3677173'] = r)}
                      {...injectData}
                    />
                  </View>
                </Form>
                <Table
                  name={'场景表格'}
                  pageSize={data?.qryScenePageByParentCode?.resultData?.size}
                  current={data?.qryScenePageByParentCode?.resultData?.current}
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
                      title: '场景标识',
                      key: 'catalogId',
                      dataIndex: 'catalogId',
                      className: '',
                      id: '16692',
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
                      title: '场景编码',
                      key: 'catalogCode',
                      dataIndex: 'catalogCode',
                      className: 'divider',
                      id: '763283',
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
                      title: '场景名称',
                      key: 'catalogName',
                      dataIndex: 'catalogName',
                      className: 'divider',
                      id: '854226',
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
                      title: '归属类型',
                      key: 'belongType',
                      dataIndex: 'belongType',
                      className: 'divider',
                      id: '252185',
                      width: 120,
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
                      title: '二级分类',
                      key: 'secondType',
                      dataIndex: 'secondType',
                      className: 'divider',
                      id: '747489',
                      width: 120,
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
                      title: '场景状态',
                      key: 'catalogStatus',
                      dataIndex: 'catalogStatus',
                      id: '4038185',
                      className: 'divider',
                      customRendering:
                        '/** * 自定义渲染函数 * @param {String} text 单元格显示的文字内容 * @param {Object} row 行数据对象 * @param {number} index 行索引 * @returns 渲染的内容：纯色标签 html 模板字符串 */function renderFunc(text, row, index) {  let fontColor = "#0000FF";  if (row.catalogStatus === "1100") {    fontColor = "#FF0000";  }  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";}',
                      originCustomRendering: [
                        ' /**',
                        ' * 自定义渲染函数',
                        ' * @param {String} text 单元格显示的文字内容',
                        ' * @param {Object} row 行数据对象',
                        ' * @param {number} index 行索引',
                        ' * @returns 渲染的内容：纯色标签 html 模板字符串',
                        ' */',
                        'function renderFunc(text, row, index) {',
                        '',
                        '  let fontColor = "#0000FF";',
                        '',
                        '  if (row.catalogStatus === "1100") {',
                        '    fontColor = "#FF0000";',
                        '  }',
                        '',
                        '  return text ? "<span style=\\"color: ".concat(fontColor, "; \\">").concat(text, "</span>") : "";',
                        '}',
                        '',
                      ],
                      staticDataSource: attrDataMap['SCENE_STATUS_CD'],
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
                      title: '创建人',
                      key: 'createStaffName',
                      dataIndex: 'createStaffName',
                      id: '266196',
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
                      title: '创建时间',
                      key: 'createDate',
                      dataIndex: 'createDate',
                      id: '534176',
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
                  page={true}
                  rowKeyType={'specified'}
                  editMode={'single'}
                  selectType={'checkbox'}
                  bordered={'border'}
                  size={'middle'}
                  fixedAction={true}
                  rowSelection={{ type: 'checkbox' }}
                  showHead={false}
                  showTotal={true}
                  showSizeChanger={false}
                  showQuickJumper={true}
                  pageSizeOptions={'[5,10,20]'}
                  rowKey={'catalogId'}
                  rowActions={[
                    {
                      title: '编辑',
                      iconPos: 'left',
                      icon: {
                        theme: 'outlined',
                        type: 'form',
                        isIconFont: false,
                      },
                      type: 'edit',
                      id: '752941',
                      isIcon: false,
                      checked: true,
                    },
                    {
                      title: '删除',
                      iconPos: 'left',
                      icon: {
                        theme: 'outlined',
                        type: 'close',
                        isIconFont: false,
                      },
                      type: 'delete',
                      id: '3056',
                      isIcon: false,
                      checked: true,
                    },
                  ]}
                  extend={[
                    {
                      id: '638541',
                      title: '生效',
                      iconPos: 'left',
                      rule: 'row.catalogStatus == "1000"',
                      checked: true,
                    },
                    {
                      id: '432959',
                      title: '失效',
                      iconPos: 'left',
                      rule: 'row.catalogStatus == "1100"',
                      checked: true,
                    },
                  ]}
                  dataSource={
                    data?.qryScenePageByParentCode?.resultData?.records
                  }
                  total={data?.qryScenePageByParentCode?.resultData?.total}
                  fieldName={'data.qryScenePageByParentCode.resultData.total'}
                  isFlexColumn={false}
                  dataSourceFromDataSourceConfig={
                    'data.qryScenePageByParentCode.resultData.records'
                  }
                  $$componentItem={{
                    id: 'Table_234352',
                    uid: 'Table_234352',
                    type: 'Table',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ margin: '30px 0px 0px 0px' }}
                  onRowDelete={(rowId: any, row: any, index: any) => {
                    const eventDataapiRequest743: any = [
                      {
                        type: 'apiRequest',
                        dataId: 166176285808903740,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '1062792',
                          pageJsonId: '90041',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'delDcCatalog',
                          _apiCode: 'delDcCatalog',
                          _source: 'rhin',
                          _serviceId: '881452824284975104',
                          _serviceTitle: '类目删除-tsm: delDcCatalog',
                          params: 'object',
                          actionTitle: '删除场景',
                          apiRequestSetParams: [
                            {
                              code: 'header',
                              name: '请求头参数',
                              attrType: 'object',
                              _id: 'header',
                              compType: 'Input',
                              parents: [],
                              id: 'header',
                              dataKey: '1062792_header',
                              key: '0',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'catalogId',
                                  name: '类目ID',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'path.catalogId',
                                  compType: 'Input',
                                  parents: ['path'],
                                  id: 'path.catalogId',
                                  dataKey: '1062792_path.catalogId',
                                  value: {
                                    type: ['context', '$rowId$'],
                                    code: '',
                                  },
                                  parentType: 'object',
                                  parentKey: '1',
                                  key: '1-0',
                                },
                              ],
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '1062792_path',
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
                              dataKey: '1062792_query',
                              key: '2',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '1062792_body',
                              key: '3',
                            },
                          ],
                          _sourceName: '类目删除-tsm',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '5153892',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_1062792?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166176285808997700,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166176285808917700,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166176285808946700,
                                    children: [],
                                    todoOptions: ['msgType', 'value'],
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '054638',
                                      pageJsonId: '90041',
                                      type: 'error',
                                      value: '所选场景删除失败！',
                                    },
                                    actionObjId: 'showMessage',
                                    actionObjName: 'system',
                                    value: 'showMessage',
                                    line_number: 5,
                                  },
                                ],
                                condition: [],
                                desc: 'resultCode != 0',
                                callback: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166176285808946700,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '054638',
                                      pageJsonId: '90041',
                                      type: 'error',
                                      value: '所选场景删除失败！',
                                    },
                                    line_number: 5,
                                  },
                                ],
                              },
                            ],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166176285808924540,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '9232204',
                                  pageJsonId: '90041',
                                  type: 'success',
                                  value: '所选场景删除成功！',
                                },
                                line_number: 3,
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 166671187428038100,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '259752',
                                  pageJsonId: '90041',
                                  customFuncName: 'onLoadTable',
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
                    ];
                    eventDataapiRequest743.params =
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
                      eventDataapiRequest743,
                      { rowId, row, index },
                      'apiRequest',
                      {
                        id: 'apiRequest',
                        name: 'apiRequest',
                        type: 'apiRequest',
                        platform: 'pc',
                      },
                    );
                  }}
                  onRowEdit={(rowId: any, row: any, index: any) => {
                    const eventDatasetDisable104: any = [
                      {
                        type: 'setDisable',
                        dataId: 166177168200331740,
                        options: {
                          compId: ['Input_172385_1767063'],
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Form',
                          id: '3193909',
                          disabled: 'true',
                          compid: ['Input_172385_1767063'],
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetDisable104.params =
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
                      eventDatasetDisable104,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable105: any = [
                      {
                        type: 'setDisable',
                        dataId: 167385400660073540,
                        options: {
                          compId: [
                            'Input_149739_442001',
                            'Select_98314808',
                            'Form_6963977_3957773',
                            'Select_435749',
                            'Select_333194',
                            'Select_742253',
                            'Input_323114',
                            'Select_6137299',
                            'Select_1346751',
                            'Select_889808',
                            'Select_082425',
                            'Select_242215',
                            'Select_565959',
                            'Select_8729274',
                            'Input_149406',
                            'TextArea_436859',
                            'TextArea_60733',
                            'Button_8429776',
                            'Button_178963',
                            'TreeSelect_688155',
                            'MultipleSelect_412347',
                          ],
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Form',
                          id: '991338',
                          disabled: '',
                          compid: [
                            'Input_149739_442001',
                            'Select_98314808',
                            'Form_6963977_3957773',
                            'Select_435749',
                            'Select_333194',
                            'Select_742253',
                            'Input_323114',
                            'Select_6137299',
                            'Select_1346751',
                            'Select_889808',
                            'Select_082425',
                            'Select_242215',
                            'Select_565959',
                            'Select_8729274',
                            'Input_149406',
                            'TextArea_436859',
                            'TextArea_60733',
                            'Button_8429776',
                            'Button_178963',
                            'TreeSelect_688155',
                            'MultipleSelect_412347',
                          ],
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetDisable105.params =
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
                      eventDatasetDisable105,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const forms114 = getFormByCompId(
                      'Form_6963977_3957773',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms114) ? forms114 : [forms114]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatacustomActionCode621: any = [
                      {
                        type: 'customActionCode',
                        dataId: 167600973706330200,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '890612',
                          pageJsonId: '90041',
                          code: 'function main(data,state,success,fail){var rowData=row;console.log("===\\u5F53\\u524D\\u884C\\u6570\\u636E===");var result=rowData.releaseChannel||[];var envCode=rowData.envCode||[];if(typeof result=="string"){result=result.split(",")}if(typeof envCode=="string"){envCode=envCode.split(",")}if(!data.pageParam){data.pageParam={}}data.pageParam.releaseChannel=result.join()||"";data.pageParam.envCode=envCode.join()||"";rowData.releaseChannel=result.length==0?undefined:result;rowData.envCode=envCode.length==0?undefined:envCode;rowData.belongCatalog=rowData.parentCatalogCode;success(rowData)};',
                          actionTitle: '',
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'setCurrentFormValues',
                            dataId: 167601037111544930,
                            options: {
                              compId: 'Form_6963977_3957773',
                              compLib: 'comm',
                              pageJsonId: '90041',
                              compName: 'Form',
                              id: '431737',
                              params: '$data_890612$',
                            },
                            line_number: 5,
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode621.params =
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
                      eventDatacustomActionCode621,
                      { rowId, row, index },
                      'customActionCode',
                      {
                        id: 'customActionCode',
                        name: 'customActionCode',
                        type: 'customActionCode',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetCurrentFormValues21: any = [
                      {
                        type: 'setCurrentFormValues',
                        dataId: 166177161783070660,
                        shielding: true,
                        options: {
                          compId: 'Form_6963977_3957773',
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Form',
                          id: '75578',
                          params: '$row$',
                        },
                        line_number: 6,
                      },
                    ];
                    eventDatasetCurrentFormValues21.params =
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
                      eventDatasetCurrentFormValues21,
                      { rowId, row, index },
                      'setCurrentFormValues',
                      {
                        id: 'setCurrentFormValues',
                        name: 'setCurrentFormValues',
                        type: 'setCurrentFormValues',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDataSource160: any = [
                      {
                        type: 'setDataSource',
                        dataId: 166247228091859800,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '8575333',
                          pageJsonId: '90041',
                          dataSourceId: 166177181413166820,
                          dataSourceName: 'local_vars',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '513039',
                              code: 'operType',
                              name: '操作类型',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: { type: ['customize'], code: 'mod' },
                            },
                            {
                              attrId: '332593',
                              code: 'selectNodeKey',
                              name: '已选节点编码',
                              type: 'string',
                              initialData: { type: 'static' },
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
                    ];
                    eventDatasetDataSource160.params =
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
                      eventDatasetDataSource160,
                      { rowId, row, index },
                      'setDataSource',
                      {
                        id: 'setDataSource',
                        name: 'setDataSource',
                        type: 'setDataSource',
                        platform: 'pc',
                      },
                    );
                  }}
                  onRowDetail={(rowId: any, row: any, index: any) => {
                    const eventDatasetDisable106: any = [
                      {
                        type: 'setDisable',
                        dataId: 166177243600248640,
                        options: {
                          compId: 'Form_6963977_3957773',
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Form',
                          id: '8623076',
                          disabled: 'true',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetDisable106.params =
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
                      eventDatasetDisable106,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const forms115 = getFormByCompId(
                      'Form_6963977_3957773',
                      refs,
                    );
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms115) ? forms115 : [forms115]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatacustomActionCode622: any = [
                      {
                        type: 'customActionCode',
                        dataId: 167601036338276480,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '533583',
                          pageJsonId: '90041',
                          code: 'function main(data,state,success,fail){var rowData=row;var result=rowData.releaseChannel||[];if(typeof result=="string"){result=result.split(",")}if(!data.pageParam){data.pageParam={}}data.pageParam.releaseChannel=result.join()||"";rowData.releaseChannel=result;rowData.belongCatalog=rowData.parentCatalogCode;success(rowData)};',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'setCurrentFormValues',
                            dataId: 167601038058869630,
                            options: {
                              compId: 'Form_6963977_3957773',
                              compLib: 'comm',
                              pageJsonId: '90041',
                              compName: 'Form',
                              id: '3781006',
                              params: '$data_533583$',
                            },
                            line_number: 4,
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode622.params =
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
                      eventDatacustomActionCode622,
                      { rowId, row, index },
                      'customActionCode',
                      {
                        id: 'customActionCode',
                        name: 'customActionCode',
                        type: 'customActionCode',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetCurrentFormValues22: any = [
                      {
                        type: 'setCurrentFormValues',
                        dataId: 166177246147896300,
                        shielding: true,
                        options: {
                          compId: 'Form_6963977_3957773',
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Form',
                          id: '861879',
                          params: '$row$',
                        },
                        line_number: 5,
                      },
                    ];
                    eventDatasetCurrentFormValues22.params =
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
                      eventDatasetCurrentFormValues22,
                      { rowId, row, index },
                      'setCurrentFormValues',
                      {
                        id: 'setCurrentFormValues',
                        name: 'setCurrentFormValues',
                        type: 'setCurrentFormValues',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable107: any = [
                      {
                        type: 'setDisable',
                        dataId: 166177248415496830,
                        options: {
                          compId: 'Button_8429776',
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Button',
                          id: '71313',
                          disabled: 'true',
                        },
                        line_number: 6,
                      },
                    ];
                    eventDatasetDisable107.params =
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
                      eventDatasetDisable107,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable108: any = [
                      {
                        type: 'setDisable',
                        dataId: 166177249278850300,
                        options: {
                          compId: 'Button_178963',
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Button',
                          id: '1093016',
                          disabled: 'true',
                        },
                        line_number: 7,
                      },
                    ];
                    eventDatasetDisable108.params =
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
                      eventDatasetDisable108,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                  }}
                  onPageChange={(page: any, pageSize: any) => {
                    const eventDatasetDataSource161: any = [
                      {
                        type: 'setDataSource',
                        dataId: 166670964320130340,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '507882',
                          pageJsonId: '90041',
                          dataSourceId: 166177181413166820,
                          dataSourceName: 'local_vars',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '513039',
                              code: 'operType',
                              name: '操作类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '332593',
                              code: 'selectNodeKey',
                              name: '已选节点编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '285431',
                              code: 'pageNum',
                              name: '页码',
                              type: 'number',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$page$'],
                                hideAttr: true,
                                code: '',
                              },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatasetDataSource161.params =
                      [
                        {
                          title: '当前页码取值',
                          name: 'page',
                          value: '$page$',
                          attrType: 'number',
                        },
                        {
                          title: '当前页尺寸',
                          name: 'pageSize',
                          value: '$pageSize$',
                          attrType: 'number',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatasetDataSource161,
                      { page, pageSize },
                      'setDataSource',
                      {
                        id: 'setDataSource',
                        name: 'setDataSource',
                        type: 'setDataSource',
                        platform: 'pc',
                      },
                    );
                    const eventDatacallSelfFunc468: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 166671189422460600,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '429945',
                          pageJsonId: '90041',
                          customFuncName: 'onLoadTable',
                          customFuncParams: '$page$',
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc468.params =
                      [
                        {
                          title: '当前页码取值',
                          name: 'page',
                          value: '$page$',
                          attrType: 'number',
                        },
                        {
                          title: '当前页尺寸',
                          name: 'pageSize',
                          value: '$pageSize$',
                          attrType: 'number',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc468,
                      { page, pageSize },
                      'callSelfFunc',
                      {
                        id: 'callSelfFunc',
                        name: 'callSelfFunc',
                        type: 'callSelfFunc',
                        platform: 'pc',
                      },
                    );
                  }}
                  onRowClick={(rowId: any, row: any, index: any) => {
                    const eventDatasetCurrentFormValues23: any = [
                      {
                        type: 'setCurrentFormValues',
                        dataId: 166236532767149800,
                        shielding: true,
                        options: {
                          compId: 'Form_6963977_3957773',
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Form',
                          id: '773443',
                          params: '$row$',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatasetCurrentFormValues23.params =
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
                      eventDatasetCurrentFormValues23,
                      { rowId, row, index },
                      'setCurrentFormValues',
                      {
                        id: 'setCurrentFormValues',
                        name: 'setCurrentFormValues',
                        type: 'setCurrentFormValues',
                        platform: 'pc',
                      },
                    );
                    const eventDatacustomActionCode623: any = [
                      {
                        type: 'customActionCode',
                        dataId: 167601042387373700,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '7329316',
                          pageJsonId: '90041',
                          code: 'function main(data,state,success,fail){console.log(row);var rowData=row;var result=rowData.releaseChannel||[];var envCode=rowData.envCode||[];if(typeof result=="string"){result=result.split(",")}if(typeof envCode=="string"){envCode=envCode.split(",")}console.log(result,envCode,"123456");if(!data.pageParam){data.pageParam={}}data.pageParam.releaseChannel=result.join()||"";data.pageParam.envCode=envCode.join()||"";rowData.releaseChannel=result.length==0?undefined:result;rowData.envCode=envCode.length==0?undefined:envCode;rowData.belongCatalog=rowData.parentCatalogCode;success(rowData)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setCurrentFormValues',
                            dataId: 167601042387385150,
                            options: {
                              compId: 'Form_6963977_3957773',
                              compLib: 'comm',
                              pageJsonId: '90041',
                              compName: 'Form',
                              id: '5375585',
                              params: '$data_7329316$',
                            },
                            line_number: 3,
                          },
                          {
                            type: 'console',
                            dataId: 167826433787354900,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '2877904',
                              pageJsonId: '90041',
                              value: ['更新后的行数据：', '$data_7329316$'],
                            },
                            line_number: 4,
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode623.params =
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
                      eventDatacustomActionCode623,
                      { rowId, row, index },
                      'customActionCode',
                      {
                        id: 'customActionCode',
                        name: 'customActionCode',
                        type: 'customActionCode',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetDisable109: any = [
                      {
                        type: 'setDisable',
                        dataId: 166236534037320960,
                        options: {
                          compId: [
                            'Button_178963',
                            'Form_6963977_3957773',
                            'Input_172385_1767063',
                            'Input_149739_442001',
                            'Select_98314808',
                            'Select_435749',
                            'Select_333194',
                            'Button_8429776',
                            'Select_742253',
                            'Input_323114',
                            'Select_6137299',
                            'Select_1346751',
                            'Select_889808',
                            'Select_082425',
                            'Select_242215',
                            'Select_565959',
                            'Select_8729274',
                            'TextArea_436859',
                            'Input_149406',
                            'TextArea_60733',
                            'TreeSelect_688155',
                            'MultipleSelect_412347',
                          ],
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Button',
                          id: '814868',
                          disabled: 'true',
                          compid: [
                            'Button_178963',
                            'Form_6963977_3957773',
                            'Input_172385_1767063',
                            'Input_149739_442001',
                            'Select_98314808',
                            'Select_435749',
                            'Select_333194',
                            'Button_8429776',
                            'Select_742253',
                            'Input_323114',
                            'Select_6137299',
                            'Select_1346751',
                            'Select_889808',
                            'Select_082425',
                            'Select_242215',
                            'Select_565959',
                            'Select_8729274',
                            'TextArea_436859',
                            'Input_149406',
                            'TextArea_60733',
                            'TreeSelect_688155',
                            'MultipleSelect_412347',
                          ],
                        },
                        line_number: 5,
                      },
                    ];
                    eventDatasetDisable109.params =
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
                      eventDatasetDisable109,
                      { rowId, row, index },
                      'setDisable',
                      {
                        id: 'setDisable',
                        name: 'setDisable',
                        type: 'setDisable',
                        platform: 'pc',
                      },
                    );
                    const eventDatasetSelectedRowKeys: any = [
                      {
                        type: 'setSelectedRowKeys',
                        dataId: 166840531597272220,
                        options: {
                          compId: 'Table_234352',
                          compLib: 'comm',
                          pageJsonId: '90041',
                          compName: 'Table',
                          id: '37952737',
                          value: '$row$',
                        },
                        line_number: 6,
                        callback1: [],
                      },
                    ];
                    eventDatasetSelectedRowKeys.params =
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
                      eventDatasetSelectedRowKeys,
                      { rowId, row, index },
                      'setSelectedRowKeys',
                      {
                        id: 'setSelectedRowKeys',
                        name: 'setSelectedRowKeys',
                        type: 'setSelectedRowKeys',
                        platform: 'pc',
                      },
                    );
                  }}
                  onClickBtn1={(rowId: any, row: any, index: any) => {
                    const eventDataapiRequest744: any = [
                      {
                        type: 'apiRequest',
                        dataId: 166670911216464860,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '064729',
                          pageJsonId: '90041',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'modDcCatalogStatus',
                          _apiCode: 'modDcCatalogStatus',
                          _source: 'rhin',
                          _serviceId: '975691735460769792',
                          _serviceTitle:
                            '类目生失效状态修改-tsm: modDcCatalogStatus',
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
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-0',
                                  id: 'root.header',
                                  dataKey: '064729_root.header',
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
                                  dataKey: '064729_root.path',
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
                                  dataKey: '064729_root.query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'catalogId',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'root.body.catalogId',
                                      compType: 'Input',
                                      name: 'catalogId',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.catalogId',
                                      dataKey: '064729_root.body.catalogId',
                                      value: {
                                        type: ['context', '$rowId$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      code: 'catalogStatus',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.catalogStatus',
                                      compType: 'Input',
                                      name: 'catalogStatus',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-1',
                                      id: 'root.body.catalogStatus',
                                      dataKey: '064729_root.body.catalogStatus',
                                      value: {
                                        type: ['customize'],
                                        code: '1000',
                                      },
                                    },
                                  ],
                                  _id: 'root.body',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-3',
                                  id: 'root.body',
                                  dataKey: '064729_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '064729_root',
                            },
                          ],
                          _sourceName: '类目生失效状态修改-tsm',
                          valueType: 'object',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '9079675',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_064729?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166670923942825250,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166670926869522530,
                                children: [],
                                condition: [],
                                desc: '失败',
                              },
                            ],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166670927759862980,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '769535',
                                  pageJsonId: '90041',
                                  type: 'success',
                                  value: '场景已生效！',
                                },
                                line_number: 3,
                              },
                              {
                                type: 'reloadDataSource',
                                dataId: 166670935063878530,
                                shielding: true,
                                options: {
                                  compId: 'reloadDataSource',
                                  compName: 'page',
                                  id: '0379198',
                                  pageJsonId: '90041',
                                  dataSourceId: 166115308466248830,
                                  dataSourceName: 'qryScenePageByParentCode',
                                  dataSourceRelType: 'service',
                                  dataSourceReloadFilter: [
                                    {
                                      attrId: '31416',
                                      code: 'header',
                                      name: '请求头参数',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      _codePath: ['header'],
                                      _idpath: ['31416'],
                                    },
                                    {
                                      attrId: '8061062',
                                      code: 'path',
                                      name: '请求路径参数',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      _codePath: ['path'],
                                      _idpath: ['8061062'],
                                    },
                                    {
                                      attrId: '7014377',
                                      code: 'query',
                                      name: 'URL 参数',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      _codePath: ['query'],
                                      _idpath: ['7014377'],
                                    },
                                    {
                                      attrId: '6508876',
                                      code: 'body',
                                      name: '请求体',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      children: [
                                        {
                                          attrId: '2519406',
                                          code: 'catalogName',
                                          name: 'catalogName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_092772',
                                              'getFieldsValue',
                                            ],
                                            code: 'sceneName',
                                          },
                                          _codePath: ['body', 'catalogName'],
                                          _idpath: ['6508876', '2519406'],
                                        },
                                        {
                                          attrId: '802721',
                                          code: 'catalogCode',
                                          name: 'catalogCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_092772',
                                              'getFieldsValue',
                                            ],
                                            code: 'sceneCode',
                                          },
                                          _codePath: ['body', 'catalogCode'],
                                          _idpath: ['6508876', '802721'],
                                        },
                                        {
                                          attrId: '2171466',
                                          code: 'parentCatalogCode',
                                          name: 'parentCatalogCode',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '-1',
                                          },
                                          type: 'string',
                                          value: {
                                            type: [
                                              'datasource',
                                              'local_vars',
                                              'data',
                                            ],
                                            code: 'selectNodeKey',
                                          },
                                          _codePath: [
                                            'body',
                                            'parentCatalogCode',
                                          ],
                                          _idpath: ['6508876', '2171466'],
                                        },
                                        {
                                          attrId: '708409',
                                          code: 'pageNum',
                                          name: 'pageNum',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                          value: {
                                            type: [
                                              'datasource',
                                              'local_vars',
                                              'data',
                                            ],
                                            code: 'pageNum',
                                          },
                                          _codePath: ['body', 'pageNum'],
                                          _idpath: ['6508876', '708409'],
                                        },
                                        {
                                          attrId: '99204',
                                          code: 'pageSize',
                                          name: 'pageSize',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '5',
                                          },
                                          type: 'long',
                                          value: {
                                            type: ['customize'],
                                            code: '5',
                                          },
                                          _codePath: ['body', 'pageSize'],
                                          _idpath: ['6508876', '99204'],
                                        },
                                        {
                                          attrId: '817998',
                                          code: 'sortName',
                                          name: 'sortName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          _codePath: ['body', 'sortName'],
                                          _idpath: ['6508876', '817998'],
                                        },
                                        {
                                          attrId: '31032',
                                          code: 'sortOrder',
                                          name: 'sortOrder',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          _codePath: ['body', 'sortOrder'],
                                          _idpath: ['6508876', '31032'],
                                        },
                                      ],
                                      _codePath: ['body'],
                                      _idpath: ['6508876'],
                                    },
                                  ],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '805114',
                                      code: 'resultCode',
                                      name: 'resultCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '31001177',
                                      code: 'resultMsgCode',
                                      name: 'resultMsgCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '42389',
                                      code: 'resultMsg',
                                      name: 'resultMsg',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '938269',
                                      code: 'resultData',
                                      name: 'resultData',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      children: [
                                        {
                                          attrId: '998832',
                                          code: 'total',
                                          name: 'total',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                        },
                                        {
                                          attrId: '013065',
                                          code: 'current',
                                          name: 'current',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                        },
                                        {
                                          attrId: '364572',
                                          code: 'hitCount',
                                          name: 'hitCount',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '976704',
                                          code: 'size',
                                          name: 'size',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                        },
                                        {
                                          attrId: '543796',
                                          code: 'optimizeCountSql',
                                          name: 'optimizeCountSql',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '31157',
                                          code: 'maxLimit',
                                          name: 'maxLimit',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '7007546',
                                          code: 'orders',
                                          name: 'orders',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'fieldArray',
                                          children: [
                                            {
                                              attrId: '427741',
                                              code: 'listItem',
                                              name: '列表元素',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'object',
                                            },
                                          ],
                                        },
                                        {
                                          attrId: '151008',
                                          code: 'countId',
                                          name: 'countId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '65315001',
                                          code: 'isSearchCount',
                                          name: 'isSearchCount',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '0473483',
                                          code: 'records',
                                          name: 'records',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'objectArray',
                                          children: [
                                            {
                                              attrId: '378035',
                                              code: 'approveContentTpl',
                                              name: '审批内容模板',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '577425',
                                              code: 'flowCode',
                                              name: 'flowCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '868818',
                                              code: 'isExclusiveFlow',
                                              name: 'isExclusiveFlow',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '736829',
                                              code: 'catalogStatus',
                                              name: 'catalogStatus',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '3884487',
                                              code: 'provinceId',
                                              name: 'provinceId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '130765',
                                              code: 'catalogType',
                                              name: 'catalogType',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '460063',
                                              code: 'updateDate',
                                              name: 'updateDate',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '3346057',
                                              code: 'createDate',
                                              name: 'createDate',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '226826',
                                              code: 'col1',
                                              name: 'col1',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '690137',
                                              code: 'sort',
                                              name: 'sort',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                            },
                                            {
                                              attrId: '3454457',
                                              code: 'statusCd',
                                              name: 'statusCd',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '915172',
                                              code: 'catalogSubType',
                                              name: 'catalogSubType',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '678371',
                                              code: 'cfgVersion',
                                              name: 'cfgVersion',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '734942',
                                              code: 'updateStaff',
                                              name: 'updateStaff',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '675665',
                                              code: 'catalogDesc',
                                              name: 'catalogDesc',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '5906375',
                                              code: 'col10',
                                              name: 'col10',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '712626',
                                              code: 'belongType',
                                              name: 'belongType',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '6082755',
                                              code: 'isContainsMatrixAttr',
                                              name: 'isContainsMatrixAttr',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '2058216',
                                              code: 'parentCatalogCode',
                                              name: 'parentCatalogCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '716693',
                                              code: 'areaId',
                                              name: 'areaId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '467415',
                                              code: 'catalogName',
                                              name: 'catalogName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '5086327',
                                              code: 'createStaff',
                                              name: 'createStaff',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '290971',
                                              code: 'col7',
                                              name: 'col7',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '071793',
                                              code: 'col4',
                                              name: 'col4',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '329982',
                                              code: 'col5',
                                              name: 'col5',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '296552',
                                              code: 'sourceFrom',
                                              name: 'sourceFrom',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '9080584',
                                              code: 'col3',
                                              name: 'col3',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '776378',
                                              code: 'col2',
                                              name: 'col2',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '029621',
                                              code: 'secondType',
                                              name: 'secondType',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '796878',
                                              code: 'lanId',
                                              name: 'lanId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '010914',
                                              code: 'col8',
                                              name: 'col8',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '663295',
                                              code: 'remark',
                                              name: 'remark',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '881723',
                                              code: 'col9',
                                              name: 'col9',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '6125789',
                                              code: 'catalogCode',
                                              name: 'catalogCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '339997',
                                              code: 'col6',
                                              name: 'col6',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '2823045',
                                              code: 'createStaffName',
                                              name: 'createStaffName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '602529',
                                              code: 'isMultiInst',
                                              name: 'isMultiInst',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '253556',
                                              code: 'catalogId',
                                              name: 'catalogId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  otherObjectArrayOptions: {},
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 168146563162665760,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '034067',
                                  pageJsonId: '90041',
                                  customFuncName: 'onLoadTable',
                                },
                                line_number: 5,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDataapiRequest744.params =
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
                      eventDataapiRequest744,
                      { rowId, row, index },
                      'apiRequest',
                      {
                        id: 'apiRequest',
                        name: 'apiRequest',
                        type: 'apiRequest',
                        platform: 'pc',
                      },
                    );
                  }}
                  onClickBtn2={(rowId: any, row: any, index: any) => {
                    const eventDataapiRequest745: any = [
                      {
                        type: 'apiRequest',
                        dataId: 166670983729649150,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '938792',
                          pageJsonId: '90041',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'modDcCatalogStatus',
                          _apiCode: 'modDcCatalogStatus',
                          _source: 'rhin',
                          _serviceId: '975691735460769792',
                          _serviceTitle:
                            '类目生失效状态修改-tsm: modDcCatalogStatus',
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
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-0',
                                  id: 'root.header',
                                  dataKey: '938792_root.header',
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
                                  dataKey: '938792_root.path',
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
                                  dataKey: '938792_root.query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'catalogId',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'root.body.catalogId',
                                      compType: 'Input',
                                      name: 'catalogId',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.catalogId',
                                      dataKey: '938792_root.body.catalogId',
                                      value: {
                                        type: ['context', '$rowId$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      code: 'catalogStatus',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'root.body.catalogStatus',
                                      compType: 'Input',
                                      name: 'catalogStatus',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-1',
                                      id: 'root.body.catalogStatus',
                                      dataKey: '938792_root.body.catalogStatus',
                                      value: {
                                        type: ['customize'],
                                        code: '1100',
                                      },
                                    },
                                  ],
                                  _id: 'root.body',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-3',
                                  id: 'root.body',
                                  dataKey: '938792_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '938792_root',
                            },
                          ],
                          _sourceName: '类目生失效状态修改-tsm',
                          valueType: 'object',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '9079675',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  context: '$reply_938792?.resultCode$',
                                  operate: '==',
                                  manualValue: '0',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 166670983729642530,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 166670983729691680,
                                children: [],
                                condition: [],
                                desc: '失败',
                              },
                            ],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166670983729624200,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '884398',
                                  pageJsonId: '90041',
                                  type: 'success',
                                  value: '场景已失效！',
                                },
                                line_number: 3,
                              },
                              {
                                type: 'reloadDataSource',
                                dataId: 166670983729674240,
                                shielding: true,
                                options: {
                                  compId: 'reloadDataSource',
                                  compName: 'page',
                                  id: '731766',
                                  pageJsonId: '90041',
                                  dataSourceId: 166115308466248830,
                                  dataSourceName: 'qryScenePageByParentCode',
                                  dataSourceRelType: 'service',
                                  dataSourceReloadFilter: [
                                    {
                                      attrId: '31416',
                                      code: 'header',
                                      name: '请求头参数',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      _codePath: ['header'],
                                      _idpath: ['31416'],
                                    },
                                    {
                                      attrId: '8061062',
                                      code: 'path',
                                      name: '请求路径参数',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      _codePath: ['path'],
                                      _idpath: ['8061062'],
                                    },
                                    {
                                      attrId: '7014377',
                                      code: 'query',
                                      name: 'URL 参数',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      _codePath: ['query'],
                                      _idpath: ['7014377'],
                                    },
                                    {
                                      attrId: '6508876',
                                      code: 'body',
                                      name: '请求体',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      children: [
                                        {
                                          attrId: '2519406',
                                          code: 'catalogName',
                                          name: 'catalogName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_092772',
                                              'getFieldsValue',
                                            ],
                                            code: 'sceneName',
                                          },
                                          _codePath: ['body', 'catalogName'],
                                          _idpath: ['6508876', '2519406'],
                                        },
                                        {
                                          attrId: '802721',
                                          code: 'catalogCode',
                                          name: 'catalogCode',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_092772',
                                              'getFieldsValue',
                                            ],
                                            code: 'sceneCode',
                                          },
                                          _codePath: ['body', 'catalogCode'],
                                          _idpath: ['6508876', '802721'],
                                        },
                                        {
                                          attrId: '2171466',
                                          code: 'parentCatalogCode',
                                          name: 'parentCatalogCode',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '-1',
                                          },
                                          type: 'string',
                                          value: {
                                            type: [
                                              'datasource',
                                              'local_vars',
                                              'data',
                                            ],
                                            code: 'selectNodeKey',
                                          },
                                          _codePath: [
                                            'body',
                                            'parentCatalogCode',
                                          ],
                                          _idpath: ['6508876', '2171466'],
                                        },
                                        {
                                          attrId: '708409',
                                          code: 'pageNum',
                                          name: 'pageNum',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                          value: {
                                            type: [
                                              'datasource',
                                              'local_vars',
                                              'data',
                                            ],
                                            code: 'pageNum',
                                          },
                                          _codePath: ['body', 'pageNum'],
                                          _idpath: ['6508876', '708409'],
                                        },
                                        {
                                          attrId: '99204',
                                          code: 'pageSize',
                                          name: 'pageSize',
                                          sort: { isSort: true },
                                          initialData: {
                                            type: 'static',
                                            value: '5',
                                          },
                                          type: 'long',
                                          value: {
                                            type: ['customize'],
                                            code: '5',
                                          },
                                          _codePath: ['body', 'pageSize'],
                                          _idpath: ['6508876', '99204'],
                                        },
                                        {
                                          attrId: '817998',
                                          code: 'sortName',
                                          name: 'sortName',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          _codePath: ['body', 'sortName'],
                                          _idpath: ['6508876', '817998'],
                                        },
                                        {
                                          attrId: '31032',
                                          code: 'sortOrder',
                                          name: 'sortOrder',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                          _codePath: ['body', 'sortOrder'],
                                          _idpath: ['6508876', '31032'],
                                        },
                                      ],
                                      _codePath: ['body'],
                                      _idpath: ['6508876'],
                                    },
                                  ],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '805114',
                                      code: 'resultCode',
                                      name: 'resultCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '31001177',
                                      code: 'resultMsgCode',
                                      name: 'resultMsgCode',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '42389',
                                      code: 'resultMsg',
                                      name: 'resultMsg',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'string',
                                    },
                                    {
                                      attrId: '938269',
                                      code: 'resultData',
                                      name: 'resultData',
                                      sort: { isSort: true },
                                      initialData: { type: 'static' },
                                      type: 'object',
                                      children: [
                                        {
                                          attrId: '998832',
                                          code: 'total',
                                          name: 'total',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                        },
                                        {
                                          attrId: '013065',
                                          code: 'current',
                                          name: 'current',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                        },
                                        {
                                          attrId: '364572',
                                          code: 'hitCount',
                                          name: 'hitCount',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '976704',
                                          code: 'size',
                                          name: 'size',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'long',
                                        },
                                        {
                                          attrId: '543796',
                                          code: 'optimizeCountSql',
                                          name: 'optimizeCountSql',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '31157',
                                          code: 'maxLimit',
                                          name: 'maxLimit',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '7007546',
                                          code: 'orders',
                                          name: 'orders',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'fieldArray',
                                          children: [
                                            {
                                              attrId: '427741',
                                              code: 'listItem',
                                              name: '列表元素',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'object',
                                            },
                                          ],
                                        },
                                        {
                                          attrId: '151008',
                                          code: 'countId',
                                          name: 'countId',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'string',
                                        },
                                        {
                                          attrId: '65315001',
                                          code: 'isSearchCount',
                                          name: 'isSearchCount',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'boolean',
                                        },
                                        {
                                          attrId: '0473483',
                                          code: 'records',
                                          name: 'records',
                                          sort: { isSort: true },
                                          initialData: { type: 'static' },
                                          type: 'objectArray',
                                          children: [
                                            {
                                              attrId: '378035',
                                              code: 'approveContentTpl',
                                              name: '审批内容模板',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '577425',
                                              code: 'flowCode',
                                              name: 'flowCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '868818',
                                              code: 'isExclusiveFlow',
                                              name: 'isExclusiveFlow',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '736829',
                                              code: 'catalogStatus',
                                              name: 'catalogStatus',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '3884487',
                                              code: 'provinceId',
                                              name: 'provinceId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '130765',
                                              code: 'catalogType',
                                              name: 'catalogType',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '460063',
                                              code: 'updateDate',
                                              name: 'updateDate',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '3346057',
                                              code: 'createDate',
                                              name: 'createDate',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '226826',
                                              code: 'col1',
                                              name: 'col1',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '690137',
                                              code: 'sort',
                                              name: 'sort',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                            },
                                            {
                                              attrId: '3454457',
                                              code: 'statusCd',
                                              name: 'statusCd',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '915172',
                                              code: 'catalogSubType',
                                              name: 'catalogSubType',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '678371',
                                              code: 'cfgVersion',
                                              name: 'cfgVersion',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '734942',
                                              code: 'updateStaff',
                                              name: 'updateStaff',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '675665',
                                              code: 'catalogDesc',
                                              name: 'catalogDesc',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '5906375',
                                              code: 'col10',
                                              name: 'col10',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '712626',
                                              code: 'belongType',
                                              name: 'belongType',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '6082755',
                                              code: 'isContainsMatrixAttr',
                                              name: 'isContainsMatrixAttr',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '2058216',
                                              code: 'parentCatalogCode',
                                              name: 'parentCatalogCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '716693',
                                              code: 'areaId',
                                              name: 'areaId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '467415',
                                              code: 'catalogName',
                                              name: 'catalogName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '5086327',
                                              code: 'createStaff',
                                              name: 'createStaff',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '290971',
                                              code: 'col7',
                                              name: 'col7',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '071793',
                                              code: 'col4',
                                              name: 'col4',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '329982',
                                              code: 'col5',
                                              name: 'col5',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '296552',
                                              code: 'sourceFrom',
                                              name: 'sourceFrom',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '9080584',
                                              code: 'col3',
                                              name: 'col3',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '776378',
                                              code: 'col2',
                                              name: 'col2',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '029621',
                                              code: 'secondType',
                                              name: 'secondType',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '796878',
                                              code: 'lanId',
                                              name: 'lanId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '010914',
                                              code: 'col8',
                                              name: 'col8',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '663295',
                                              code: 'remark',
                                              name: 'remark',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '881723',
                                              code: 'col9',
                                              name: 'col9',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '6125789',
                                              code: 'catalogCode',
                                              name: 'catalogCode',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '339997',
                                              code: 'col6',
                                              name: 'col6',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '2823045',
                                              code: 'createStaffName',
                                              name: 'createStaffName',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '602529',
                                              code: 'isMultiInst',
                                              name: 'isMultiInst',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'string',
                                            },
                                            {
                                              attrId: '253556',
                                              code: 'catalogId',
                                              name: 'catalogId',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              type: 'long',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  otherObjectArrayOptions: {},
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [],
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 168146564489539200,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '928547',
                                  pageJsonId: '90041',
                                  customFuncName: 'onLoadTable',
                                },
                                line_number: 5,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDataapiRequest745.params =
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
                      eventDataapiRequest745,
                      { rowId, row, index },
                      'apiRequest',
                      {
                        id: 'apiRequest',
                        name: 'apiRequest',
                        type: 'apiRequest',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['Table_234352'] = r)}
                  {...injectData}
                />
              </Card>
            </View>
            <View
              name={'布局容器'}
              formItemIndex={2}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_148617_002395',
                uid: 'View_148617_002395',
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
              ref={(r: any) => (refs['View_148617_002395'] = r)}
              {...injectData}
            >
              <Card
                name={'卡片'}
                cardIconType={'middle'}
                title={'场景详情'}
                bordered={true}
                size={'default'}
                hasHeader={true}
                hasIcon={true}
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
                  id: 'Card_9647674',
                  uid: 'Card_9647674',
                  type: 'Card',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  padding: '20px 20px 20px 20px',
                  overflowY: 'visible',
                  margin: '30px 0px 16px 0px',
                }}
                ref={(r: any) => (refs['Card_9647674'] = r)}
                {...injectData}
              >
                <Form
                  name={'场景表单'}
                  colSpan={12}
                  labelCol={8}
                  wrapperCol={16}
                  colon={true}
                  layout={'horizontal'}
                  labelAlign={'right'}
                  header={'标题'}
                  colSpace={0}
                  rowSpace={16}
                  formCode={'Form_69639772'}
                  $$componentItem={{
                    id: 'Form_6963977_3957773',
                    uid: 'Form_6963977_3957773',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => (refs['Form_6963977_3957773'] = r)}
                  {...injectData}
                >
                  <Input
                    name={'场景编码'}
                    size={'default'}
                    selfSpan={12}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipContent={''}
                    prefixIconPosition={'before'}
                    postfix={''}
                    postfixIconPosition={'before'}
                    required={true}
                    placeholder={'请输入'}
                    formItemIndex={0}
                    fieldName={'catalogCode'}
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
                      id: 'Input_172385_1767063',
                      uid: 'Input_172385_1767063',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_172385_1767063'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'场景名称'}
                    size={'default'}
                    selfSpan={12}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipContent={''}
                    prefixIconPosition={'before'}
                    postfix={''}
                    postfixIconPosition={'before'}
                    required={true}
                    placeholder={'请输入'}
                    formItemIndex={1}
                    fieldName={'catalogName'}
                    regexp={[]}
                    maxLength={30}
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
                      id: 'Input_149739_442001',
                      uid: 'Input_149739_442001',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_149739_442001'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'集团类型'}
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
                    formItemIndex={2}
                    fieldName={'groupType'}
                    $$componentItem={{
                      id: 'Select_98314808',
                      uid: 'Select_98314808',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_98314808'] = r)}
                    {...injectData}
                  />
                  <MultipleSelect
                    name={'发布渠道'}
                    size={'default'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={true}
                    filter={'none'}
                    attr={{}}
                    placeholder={'请选择'}
                    mode={'multiple'}
                    formItemIndex={3}
                    fieldName={'releaseChannel'}
                    $$componentItem={{
                      id: 'MultipleSelect_412347',
                      uid: 'MultipleSelect_412347',
                      type: 'MultipleSelect',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onChange={(e: any) => {
                      const eventDatagetValue219: any = [
                        {
                          type: 'getValue',
                          dataId: 167600829899865730,
                          options: {
                            compId: 'MultipleSelect_412347',
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'MultipleSelect',
                            id: '0210724',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 167600831037888000,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '711093',
                                pageJsonId: '90041',
                                code: 'function main(data,state,success,fail){console.log("=====\\u53D1\\u5E03\\u6E20\\u9053\\u590D\\u9009=====",value_0210724);var values=value_0210724||[];var res=values.join();success(res)};',
                              },
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 167600852007586940,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '17379',
                                    pageJsonId: '90041',
                                    dataSourceId: 167600850858546780,
                                    dataSourceName: 'pageParam',
                                    dataSourceRelType: 'custom',
                                    dataSourceReloadFilter: [],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '750597',
                                        code: 'releaseChannel',
                                        name: '发布渠道',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        value: {
                                          type: ['context', '$data_711093$'],
                                          code: '',
                                        },
                                        showInput: true,
                                        _codePath: ['releaseChannel'],
                                        _idpath: ['750597'],
                                      },
                                      {
                                        attrId: '642879',
                                        code: 'belongCatalog',
                                        name: '归属目录',
                                        type: 'array',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['belongCatalog'],
                                        _idpath: ['642879'],
                                      },
                                      {
                                        attrId: '6253503',
                                        code: 'catalogCode',
                                        name: '刷新表格的场景编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['catalogCode'],
                                        _idpath: ['6253503'],
                                      },
                                      {
                                        attrId: '9233436',
                                        code: 'envCode',
                                        name: '适配环境',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['envCode'],
                                        _idpath: ['9233436'],
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
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '588577',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$value_0210724.length$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 169934556905542820,
                              elseIfs: [],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'customActionCode',
                                  dataId: 169934564585165380,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '782342',
                                    pageJsonId: '90041',
                                    code: 'function main(data,state,success,fail){success(undefined)};',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'setValue',
                                      dataId: 169934566266580060,
                                      options: {
                                        compId: 'MultipleSelect_412347',
                                        compLib: 'comm',
                                        pageJsonId: '90041',
                                        compName: 'MultipleSelect',
                                        id: '4995165',
                                        valueList: {
                                          MultipleSelect_412347:
                                            '$data_782342$',
                                        },
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
                      ];
                      eventDatagetValue219.params =
                        [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                        [];
                      CMDGenerator(eventDatagetValue219, { e }, 'getValue', {
                        id: 'getValue',
                        name: 'getValue',
                        type: 'getValue',
                        platform: 'pc',
                      });
                      const eventDatagetCurrentFormValues26: any = [
                        {
                          type: 'getCurrentFormValues',
                          dataId: 169934488808347550,
                          shielding: true,
                          options: {
                            compId: 'Form_6963977_3957773',
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'Form',
                            id: '6312223',
                          },
                          line_number: 7,
                          callback1: [
                            {
                              type: 'getValue',
                              dataId: 169934490543006660,
                              shielding: true,
                              options: {
                                compId: 'MultipleSelect_412347',
                                compLib: 'comm',
                                pageJsonId: '90041',
                                compName: 'MultipleSelect',
                                id: '97313',
                              },
                              line_number: 8,
                              callback1: [
                                {
                                  type: 'customActionCode',
                                  dataId: 169934490543061150,
                                  shielding: true,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '447555',
                                    pageJsonId: '90041',
                                    code: 'function main(data,state,success,fail){console.log("=====\\u53D1\\u5E03\\u6E20\\u9053\\u590D\\u9009=====",value_97313);var values=value_97313||[];var res=values.join();success(res)};',
                                  },
                                  line_number: 9,
                                  callback1: [
                                    {
                                      type: 'setDataSource',
                                      dataId: 169934490543026460,
                                      shielding: true,
                                      options: {
                                        compId: 'setDataSource',
                                        compName: 'page',
                                        id: '45256559',
                                        pageJsonId: '90041',
                                        dataSourceId: 167600850858546780,
                                        dataSourceName: 'pageParam',
                                        dataSourceRelType: 'custom',
                                        dataSourceReloadFilter: [],
                                        dataSourceSetValue: [
                                          {
                                            attrId: '750597',
                                            code: 'releaseChannel',
                                            name: '发布渠道',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            value: {
                                              type: [
                                                'context',
                                                '$data_447555$',
                                              ],
                                              code: '',
                                            },
                                            showInput: true,
                                            _codePath: ['releaseChannel'],
                                            _idpath: ['750597'],
                                          },
                                          {
                                            attrId: '642879',
                                            code: 'belongCatalog',
                                            name: '归属目录',
                                            type: 'array',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['belongCatalog'],
                                            _idpath: ['642879'],
                                          },
                                          {
                                            attrId: '6253503',
                                            code: 'catalogCode',
                                            name: '刷新表格的场景编码',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['catalogCode'],
                                            _idpath: ['6253503'],
                                          },
                                          {
                                            attrId: '9233436',
                                            code: 'envCode',
                                            name: '适配环境',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: true,
                                            _codePath: ['envCode'],
                                            _idpath: ['9233436'],
                                          },
                                        ],
                                        operateType: 1,
                                        onlySetPatch: true,
                                        otherObjectArrayOptions: {},
                                      },
                                      line_number: 10,
                                      callback1: [],
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
                      eventDatagetCurrentFormValues26.params =
                        [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                        [];
                      CMDGenerator(
                        eventDatagetCurrentFormValues26,
                        { e },
                        'getCurrentFormValues',
                        {
                          id: 'getCurrentFormValues',
                          name: 'getCurrentFormValues',
                          type: 'getCurrentFormValues',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['MultipleSelect_412347'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'是否其他系统已支撑'}
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
                    fieldName={'isExtSystemSupport'}
                    dataSource={attrDataMap['PUB_001']}
                    $$componentItem={{
                      id: 'Select_333194',
                      uid: 'Select_333194',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onChange={(e: any) => {
                      const eventDataclearValue144: any = [
                        {
                          type: 'clearValue',
                          dataId: 166177904935249340,
                          options: {
                            compId: 'Input_323114',
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'Input',
                            id: '215956',
                          },
                          line_number: 1,
                        },
                      ];
                      eventDataclearValue144.params =
                        [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                        [];
                      CMDGenerator(
                        eventDataclearValue144,
                        { e },
                        'clearValue',
                        {
                          id: 'clearValue',
                          name: 'clearValue',
                          type: 'clearValue',
                          platform: 'pc',
                        },
                      );
                      const eventDatacallSelfFunc470: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166366787550916300,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '23473',
                            pageJsonId: '90041',
                            customFuncName: 'isOutSystemSupport',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc470.params =
                        [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                        [];
                      CMDGenerator(
                        eventDatacallSelfFunc470,
                        { e },
                        'callSelfFunc',
                        {
                          id: 'callSelfFunc',
                          name: 'callSelfFunc',
                          type: 'callSelfFunc',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['Select_333194'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'是否包含矩阵要素'}
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
                    fieldName={'isContainsMatrixAttr'}
                    dataSource={attrDataMap['PUB_001']}
                    $$componentItem={{
                      id: 'Select_742253',
                      uid: 'Select_742253',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_742253'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'外部审批单地址'}
                    size={'default'}
                    selfSpan={12}
                    labelCol={'8'}
                    wrapperCol={'16'}
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
                    fieldName={'extSystemAddress'}
                    allowClear={true}
                    maxLength={128}
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
                      id: 'Input_323114',
                      uid: 'Input_323114',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_323114'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'是否支持甩单'}
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
                    fieldName={'isSupportThrowOrder'}
                    dataSource={attrDataMap['PUB_001']}
                    $$componentItem={{
                      id: 'Select_6137299',
                      uid: 'Select_6137299',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_6137299'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'省级/重客流程'}
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
                    formItemIndex={8}
                    fieldName={'importantFlowCode'}
                    allowClear={true}
                    $$componentItem={{
                      id: 'Select_1346751',
                      uid: 'Select_1346751',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_1346751'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'是否多实例'}
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
                    formItemIndex={9}
                    fieldName={'isMultiInst'}
                    dataSource={attrDataMap['PUB_001']}
                    $$componentItem={{
                      id: 'Select_889808',
                      uid: 'Select_889808',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_889808'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'地市流程'}
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
                    formItemIndex={10}
                    fieldName={'cityFlowCode'}
                    allowClear={true}
                    $$componentItem={{
                      id: 'Select_082425',
                      uid: 'Select_082425',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_082425'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'边办边审'}
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
                    formItemIndex={11}
                    fieldName={'isBeforeApproveAfterHandle'}
                    dataSource={attrDataMap['PUB_002']}
                    $$componentItem={{
                      id: 'Select_242215',
                      uid: 'Select_242215',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_242215'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'区县流程'}
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
                    formItemIndex={12}
                    fieldName={'countyFlowCode'}
                    allowClear={true}
                    $$componentItem={{
                      id: 'Select_565959',
                      uid: 'Select_565959',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_565959'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'发起来源'}
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
                    formItemIndex={13}
                    fieldName={'sourceFrom'}
                    $$componentItem={{
                      id: 'Select_8729274',
                      uid: 'Select_8729274',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_8729274'] = r)}
                    {...injectData}
                  />
                  <TreeSelect
                    name={'归属类目'}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    treeDefaultExpandAll={false}
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
                    formItemIndex={14}
                    fieldName={'belongCatalog'}
                    required={true}
                    placeholder={'请选择'}
                    allowClear={true}
                    filter={'local'}
                    $$componentItem={{
                      id: 'TreeSelect_688155',
                      uid: 'TreeSelect_688155',
                      type: 'TreeSelect',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onSelect={(value: any, node: any) => {
                      // console 167825923667830880
                      console.log(node?.props?.data);
                      const eventDatasetValue36: any = [
                        {
                          type: 'setValue',
                          dataId: 168221988531190100,
                          options: {
                            compId: 'Input_652144',
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'Input',
                            id: '243646',
                            valueList: {
                              Input_652144: '$node.props.data.roleCode$',
                            },
                          },
                          line_number: 2,
                          callback1: [],
                        },
                      ];
                      eventDatasetValue36.params =
                        [
                          { title: '节点key', name: 'value', value: '$value$' },
                          {
                            title: '节点数据',
                            name: 'node',
                            value: '$node.props.data$',
                            attrType: 'object',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatasetValue36,
                        { value, node },
                        'setValue',
                        {
                          id: 'setValue',
                          name: 'setValue',
                          type: 'setValue',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['TreeSelect_688155'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'授权审批'}
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
                    formItemIndex={15}
                    fieldName={'isApprovalAuthorization'}
                    dataSource={attrDataMap['PUB_002']}
                    $$componentItem={{
                      id: 'Select_923109',
                      uid: 'Select_923109',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_923109'] = r)}
                    {...injectData}
                  />
                  <MultipleSelect
                    name={'适配环境'}
                    size={'default'}
                    selfSpan={''}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={true}
                    filter={'none'}
                    attr={{}}
                    placeholder={'请选择'}
                    mode={'multiple'}
                    formItemIndex={16}
                    fieldName={'envCode'}
                    $$componentItem={{
                      id: 'MultipleSelect_1903767',
                      uid: 'MultipleSelect_1903767',
                      type: 'MultipleSelect',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    onChange={(e: any) => {
                      const eventDatagetValue220: any = [
                        {
                          type: 'getValue',
                          dataId: 169932396343439650,
                          options: {
                            compId: 'MultipleSelect_1903767',
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'MultipleSelect',
                            id: '603512',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 169932410337795040,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '362331',
                                pageJsonId: '90041',
                                code: 'function main(data,state,success,fail){var values=value_603512||[];var res=values.join();console.log(res);success(res)};',
                              },
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 169932450481704300,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '923597',
                                    pageJsonId: '90041',
                                    dataSourceId: 167600850858546780,
                                    dataSourceName: 'pageParam',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '750597',
                                        code: 'releaseChannel',
                                        name: '发布渠道',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['releaseChannel'],
                                        _idpath: ['750597'],
                                      },
                                      {
                                        attrId: '642879',
                                        code: 'belongCatalog',
                                        name: '归属目录',
                                        type: 'array',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['belongCatalog'],
                                        _idpath: ['642879'],
                                      },
                                      {
                                        attrId: '6253503',
                                        code: 'catalogCode',
                                        name: '刷新表格的场景编码',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        _codePath: ['catalogCode'],
                                        _idpath: ['6253503'],
                                      },
                                      {
                                        attrId: '9233436',
                                        code: 'envCode',
                                        name: '适配环境',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        value: {
                                          type: ['context', '$data_362331$'],
                                          code: '',
                                        },
                                        _codePath: ['envCode'],
                                        _idpath: ['9233436'],
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
                              ],
                              callback2: [],
                            },
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '0754063',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$value_603512.length$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 169934608351037300,
                              elseIfs: [],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'customActionCode',
                                  dataId: 169934611617099840,
                                  options: {
                                    compId: 'customActionCode',
                                    compName: 'page',
                                    id: '105984',
                                    pageJsonId: '90041',
                                    code: 'function main(data,state,success,fail){success(undefined)};',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'setValue',
                                      dataId: 169934612926332540,
                                      options: {
                                        compId: 'MultipleSelect_1903767',
                                        compLib: 'comm',
                                        pageJsonId: '90041',
                                        compName: 'MultipleSelect',
                                        id: '04993',
                                        valueList: {
                                          MultipleSelect_1903767:
                                            '$data_105984$',
                                        },
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
                      ];
                      eventDatagetValue220.params =
                        [{ title: '下拉框取值', name: 'e', value: '$e$' }] ||
                        [];
                      CMDGenerator(eventDatagetValue220, { e }, 'getValue', {
                        id: 'getValue',
                        name: 'getValue',
                        type: 'getValue',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['MultipleSelect_1903767'] = r)}
                    {...injectData}
                  />
                  <TextArea
                    name={'场景填写描述'}
                    selfSpan={24}
                    labelCol={'4'}
                    wrapperCol={20}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    required={false}
                    placeholder={'请输入'}
                    formItemIndex={18}
                    fieldName={'catalogDesc'}
                    maxLength={340}
                    $$componentItem={{
                      id: 'TextArea_436859',
                      uid: 'TextArea_436859',
                      type: 'TextArea',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['TextArea_436859'] = r)}
                    {...injectData}
                  />
                  <TextArea
                    name={'审批内容模板'}
                    selfSpan={24}
                    labelCol={'4'}
                    wrapperCol={20}
                    titleTip={'notext'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    required={false}
                    placeholder={'请输入'}
                    formItemIndex={19}
                    fieldName={'approveContentTpl'}
                    $$componentItem={{
                      id: 'TextArea_60733',
                      uid: 'TextArea_60733',
                      type: 'TextArea',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['TextArea_60733'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'场景ID'}
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
                    formItemIndex={20}
                    fieldName={'catalogId'}
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
                      id: 'Input_149406',
                      uid: 'Input_149406',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_149406'] = r)}
                    {...injectData}
                  />
                  <Select
                    name={'是否个性化流程'}
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
                    formItemIndex={21}
                    fieldName={'isExclusiveFlow'}
                    dataSource={attrDataMap['PUB_001']}
                    $$componentItem={{
                      id: 'Select_435749',
                      uid: 'Select_435749',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Select_435749'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'身份角色编码'}
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
                    formItemIndex={22}
                    fieldName={'roleCode'}
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
                      id: 'Input_652144',
                      uid: 'Input_652144',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_652144'] = r)}
                    {...injectData}
                  />
                </Form>
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_2988045',
                    uid: 'View_2988045',
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
                    textAlign: 'center',
                    margin: '20px 0px 0px 0px',
                  }}
                  ref={(r: any) => (refs['View_2988045'] = r)}
                  {...injectData}
                >
                  <Button
                    name={'确定'}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    type={'primary'}
                    formItemIndex={15}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_8429776',
                      uid: 'Button_8429776',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatavalidateCurrentForm74: any = [
                        {
                          type: 'validateCurrentForm',
                          dataId: 169932373155792400,
                          options: {
                            compId: 'Form_6963977_3957773',
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'Form',
                            id: '482952',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 169943245270091900,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '057392',
                                pageJsonId: '90041',
                                code: 'function main(data,state,success,fail){if(Form_6963977_3957773.cityFlowCode||Form_6963977_3957773.countyFlowCode||Form_6963977_3957773.importantFlowCode){success()}else{fail()}};',
                                actionTitle: '三个流程必填一个校验',
                              },
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '635764',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$data.local_vars.operType$',
                                        operate: '==',
                                        manualValue: 'add',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 169943256167786100,
                                  elseIfs: [],
                                  line_number: 3,
                                  callback1: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 169943256167705500,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '060257',
                                        pageJsonId: '90041',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'addDcCatalog',
                                        _apiCode: 'addDcCatalog',
                                        _source: 'rhin',
                                        _serviceId: '881435775030611968',
                                        _serviceTitle:
                                          '类目新增-tsm: addDcCatalog',
                                        params: 'object',
                                        actionTitle: '新增场景',
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
                                                dataKey: '060257_root.header',
                                                key: '0-0',
                                                parentType: 'object',
                                                parentKey: '0',
                                              },
                                              {
                                                code: 'path',
                                                name: '请求路径参数',
                                                attrType: 'object',
                                                _id: 'root.path',
                                                compType: 'Input',
                                                parents: ['root'],
                                                id: 'root.path',
                                                dataKey: '060257_root.path',
                                                key: '0-1',
                                                parentType: 'object',
                                                parentKey: '0',
                                              },
                                              {
                                                code: 'query',
                                                name: 'URL 参数',
                                                attrType: 'object',
                                                _id: 'root.query',
                                                compType: 'Input',
                                                parents: ['root'],
                                                id: 'root.query',
                                                dataKey: '060257_root.query',
                                                key: '0-2',
                                                parentType: 'object',
                                                parentKey: '0',
                                              },
                                              {
                                                code: 'body',
                                                name: '请求体',
                                                attrType: 'object',
                                                children: [
                                                  {
                                                    code: 'releaseChannel',
                                                    name: '发布渠道，支持多选逗号分割。1001=PC端，1002=APP端',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.releaseChannel',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.releaseChannel',
                                                    dataKey:
                                                      '060257_root.body.releaseChannel',
                                                    value: {
                                                      type: [
                                                        'datasource',
                                                        'pageParam',
                                                        'data',
                                                      ],
                                                      code: 'releaseChannel',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-14',
                                                  },
                                                  {
                                                    code: 'isBeforeApproveAfterHandle',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isBeforeApproveAfterHandle',
                                                    compType: 'Input',
                                                    name: 'isBeforeApproveAfterHandle',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isBeforeApproveAfterHandle',
                                                    dataKey:
                                                      '060257_root.body.isBeforeApproveAfterHandle',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isBeforeApproveAfterHandle',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-16',
                                                  },
                                                  {
                                                    code: 'isSupportThrowOrder',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isSupportThrowOrder',
                                                    compType: 'Input',
                                                    name: 'isSupportThrowOrder',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isSupportThrowOrder',
                                                    dataKey:
                                                      '060257_root.body.isSupportThrowOrder',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isSupportThrowOrder',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-2',
                                                  },
                                                  {
                                                    code: 'groupType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.groupType',
                                                    compType: 'Input',
                                                    name: 'groupType',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.groupType',
                                                    dataKey:
                                                      '060257_root.body.groupType',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'groupType',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-3',
                                                  },
                                                  {
                                                    code: 'importantFlowCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.importantFlowCode',
                                                    compType: 'Input',
                                                    name: 'importantFlowCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.importantFlowCode',
                                                    dataKey:
                                                      '060257_root.body.importantFlowCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'importantFlowCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-4',
                                                  },
                                                  {
                                                    code: 'isMultiInst',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isMultiInst',
                                                    compType: 'Input',
                                                    name: 'isMultiInst',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isMultiInst',
                                                    dataKey:
                                                      '060257_root.body.isMultiInst',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isMultiInst',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-5',
                                                  },
                                                  {
                                                    code: 'catalogType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogType',
                                                    compType: 'Input',
                                                    name: 'catalogType',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogType',
                                                    dataKey:
                                                      '060257_root.body.catalogType',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '1003',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-6',
                                                  },
                                                  {
                                                    code: 'catalogDesc',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogDesc',
                                                    compType: 'Input',
                                                    name: 'catalogDesc',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogDesc',
                                                    dataKey:
                                                      '060257_root.body.catalogDesc',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'catalogDesc',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-8',
                                                  },
                                                  {
                                                    code: 'approveContentTpl',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.approveContentTpl',
                                                    compType: 'Input',
                                                    name: 'approveContentTpl',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.approveContentTpl',
                                                    dataKey:
                                                      '060257_root.body.approveContentTpl',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'approveContentTpl',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-7',
                                                  },
                                                  {
                                                    code: 'isExclusiveFlow',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isExclusiveFlow',
                                                    compType: 'Input',
                                                    name: 'isExclusiveFlow',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isExclusiveFlow',
                                                    dataKey:
                                                      '060257_root.body.isExclusiveFlow',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isExclusiveFlow',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-9',
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
                                                    dataKey:
                                                      '060257_root.body.catalogCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'catalogCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-10',
                                                  },
                                                  {
                                                    code: 'parentCatalogCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.parentCatalogCode',
                                                    compType: 'Input',
                                                    name: 'parentCatalogCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.parentCatalogCode',
                                                    dataKey:
                                                      '060257_root.body.parentCatalogCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'belongCatalog',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-11',
                                                  },
                                                  {
                                                    code: 'catalogName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogName',
                                                    compType: 'Input',
                                                    name: 'catalogName',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogName',
                                                    dataKey:
                                                      '060257_root.body.catalogName',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'catalogName',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-12',
                                                  },
                                                  {
                                                    code: 'sourceFrom',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.sourceFrom',
                                                    compType: 'Input',
                                                    name: 'sourceFrom',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.sourceFrom',
                                                    dataKey:
                                                      '060257_root.body.sourceFrom',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'sourceFrom',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-13',
                                                  },
                                                  {
                                                    code: 'isContainsMatrixAttr',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isContainsMatrixAttr',
                                                    compType: 'Input',
                                                    name: 'isContainsMatrixAttr',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isContainsMatrixAttr',
                                                    dataKey:
                                                      '060257_root.body.isContainsMatrixAttr',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isContainsMatrixAttr',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-15',
                                                  },
                                                  {
                                                    code: 'catalogSubType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogSubType',
                                                    compType: 'Input',
                                                    name: 'catalogSubType',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogSubType',
                                                    dataKey:
                                                      '060257_root.body.catalogSubType',
                                                    value: {
                                                      type: [
                                                        'EMPTY_DATA',
                                                        'string',
                                                      ],
                                                      hideAttr: true,
                                                      code: '$EMPTY_DATA.string$',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-18',
                                                  },
                                                  {
                                                    code: 'isExtSystemSupport',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isExtSystemSupport',
                                                    compType: 'Input',
                                                    name: 'isExtSystemSupport',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isExtSystemSupport',
                                                    dataKey:
                                                      '060257_root.body.isExtSystemSupport',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isExtSystemSupport',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-19',
                                                  },
                                                  {
                                                    code: 'extSystemAddress',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.extSystemAddress',
                                                    compType: 'Input',
                                                    name: 'extSystemAddress',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.extSystemAddress',
                                                    dataKey:
                                                      '060257_root.body.extSystemAddress',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'extSystemAddress',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-20',
                                                  },
                                                  {
                                                    code: 'cityFlowCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.cityFlowCode',
                                                    compType: 'Input',
                                                    name: 'cityFlowCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.cityFlowCode',
                                                    dataKey:
                                                      '060257_root.body.cityFlowCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'cityFlowCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-21',
                                                  },
                                                  {
                                                    code: 'countyFlowCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.countyFlowCode',
                                                    compType: 'Input',
                                                    name: 'countyFlowCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.countyFlowCode',
                                                    dataKey:
                                                      '060257_root.body.countyFlowCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'countyFlowCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-0',
                                                  },
                                                  {
                                                    code: 'roleCode',
                                                    name: '角色编码',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.roleCode',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-1',
                                                    id: 'root.body.roleCode',
                                                    dataKey:
                                                      '060257_root.body.roleCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'roleCode',
                                                    },
                                                  },
                                                  {
                                                    code: 'isApprovalAuthorization',
                                                    name: '是否授权审批',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.isApprovalAuthorization',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-17',
                                                    id: 'root.body.isApprovalAuthorization',
                                                    dataKey:
                                                      '060257_root.body.isApprovalAuthorization',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isApprovalAuthorization',
                                                    },
                                                  },
                                                  {
                                                    code: 'envCode',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.envCode',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-22',
                                                    id: 'root.body.envCode',
                                                    dataKey:
                                                      '060257_root.body.envCode',
                                                    value: {
                                                      type: [
                                                        'datasource',
                                                        'pageParam',
                                                        'data',
                                                      ],
                                                      code: 'envCode',
                                                    },
                                                  },
                                                ],
                                                _id: 'root.body',
                                                compType: 'Input',
                                                parents: ['root'],
                                                id: 'root.body',
                                                dataKey: '060257_root.body',
                                                key: '0-3',
                                                parentType: 'object',
                                                parentKey: '0',
                                              },
                                            ],
                                            _id: 'root',
                                            compType: 'Input',
                                            isRoot: true,
                                            parents: [],
                                            key: '0',
                                            id: 'root',
                                            dataKey: '060257_root',
                                          },
                                        ],
                                        _sourceName: '类目新增-tsm',
                                      },
                                      line_number: 4,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '645089',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context:
                                                  '$reply_060257?.resultCode$',
                                                operate: '==',
                                                manualValue: '0',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 169943256167771230,
                                          elseIfs: [
                                            {
                                              dataName: 'elseIf',
                                              dataId: 169943256167718800,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169943256167740500,
                                                  children: [],
                                                  todoOptions: [
                                                    'msgType',
                                                    'value',
                                                  ],
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '0823126',
                                                    pageJsonId: '90041',
                                                    type: 'error',
                                                    value: '场景新增失败！',
                                                  },
                                                  actionObjId: 'showMessage',
                                                  actionObjName: 'system',
                                                  value: 'showMessage',
                                                  line_number: 10,
                                                },
                                              ],
                                              condition: [],
                                              desc: 'resultCode != 0',
                                              callback: [
                                                {
                                                  type: 'showMessage',
                                                  dataId: 169943256167740500,
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '0823126',
                                                    pageJsonId: '90041',
                                                    type: 'error',
                                                    value: '场景新增失败！',
                                                  },
                                                  line_number: 10,
                                                },
                                              ],
                                            },
                                          ],
                                          line_number: 5,
                                          callback1: [
                                            {
                                              type: 'showMessage',
                                              dataId: 169943256167779400,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '5825378',
                                                pageJsonId: '90041',
                                                type: 'success',
                                                value: '场景新增成功！',
                                              },
                                              line_number: 6,
                                            },
                                            {
                                              type: 'resetCurrentForm',
                                              dataId: 169943256167729250,
                                              options: {
                                                compId: 'Form_6963977_3957773',
                                                compLib: 'comm',
                                                pageJsonId: '90041',
                                                compName: 'Form',
                                                id: '765298697',
                                              },
                                              line_number: 7,
                                            },
                                            {
                                              type: 'setDisable',
                                              dataId: 169943256167738240,
                                              options: {
                                                compId: [
                                                  'Form_6963977_3957773',
                                                  'Input_172385_1767063',
                                                  'Select_435749',
                                                  'Select_98314808',
                                                  'Input_149739_442001',
                                                  'Select_333194',
                                                  'Select_742253',
                                                  'Input_323114',
                                                  'Select_1346751',
                                                  'Select_6137299',
                                                  'Select_889808',
                                                  'Select_242215',
                                                  'Select_082425',
                                                  'Select_565959',
                                                  'Select_8729274',
                                                  'TextArea_436859',
                                                  'Input_149406',
                                                  'TextArea_60733',
                                                  'Button_8429776',
                                                  'Button_178963',
                                                  'TreeSelect_688155',
                                                  'MultipleSelect_412347',
                                                ],
                                                compLib: 'comm',
                                                pageJsonId: '90041',
                                                compName: 'Form',
                                                id: '358176',
                                                disabled: 'true',
                                                compid: [
                                                  'Form_6963977_3957773',
                                                  'Input_172385_1767063',
                                                  'Select_435749',
                                                  'Select_98314808',
                                                  'Input_149739_442001',
                                                  'Select_333194',
                                                  'Select_742253',
                                                  'Input_323114',
                                                  'Select_1346751',
                                                  'Select_6137299',
                                                  'Select_889808',
                                                  'Select_242215',
                                                  'Select_082425',
                                                  'Select_565959',
                                                  'Select_8729274',
                                                  'TextArea_436859',
                                                  'Input_149406',
                                                  'TextArea_60733',
                                                  'Button_8429776',
                                                  'Button_178963',
                                                  'TreeSelect_688155',
                                                  'MultipleSelect_412347',
                                                ],
                                              },
                                              line_number: 8,
                                            },
                                            {
                                              type: 'callSelfFunc',
                                              dataId: 169943256167713060,
                                              options: {
                                                compId: 'callSelfFunc',
                                                compName: 'system',
                                                id: '493236',
                                                pageJsonId: '90041',
                                                customFuncName: 'onLoadTable',
                                              },
                                              line_number: 9,
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
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '635764',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$data.local_vars.operType$',
                                        operate: '==',
                                        manualValue: 'mod',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 169943256771805820,
                                  elseIfs: [],
                                  line_number: 11,
                                  callback1: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 169943256771892670,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '301515',
                                        pageJsonId: '90041',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'modDcCatalog',
                                        _apiCode: 'modDcCatalog',
                                        _source: 'rhin',
                                        _serviceId: '881496316982296576',
                                        _serviceTitle:
                                          '类目修改-tsm: modDcCatalog',
                                        params: 'object',
                                        actionTitle: '修改场景',
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
                                                dataKey: '700727_root.header',
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
                                                dataKey: '700727_root.path',
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
                                                dataKey: '700727_root.query',
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
                                                    code: 'catalogDesc',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogDesc',
                                                    compType: 'Input',
                                                    name: 'catalogDesc',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogDesc',
                                                    dataKey:
                                                      '700727_root.body.catalogDesc',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'catalogDesc',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-3',
                                                  },
                                                  {
                                                    code: 'releaseChannel',
                                                    name: '发布渠道，支持多选逗号分割。1001=PC端，1002=APP端',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.releaseChannel',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.releaseChannel',
                                                    dataKey:
                                                      '700727_root.body.releaseChannel',
                                                    value: {
                                                      type: [
                                                        'datasource',
                                                        'pageParam',
                                                        'data',
                                                      ],
                                                      code: 'releaseChannel',
                                                    },
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
                                                    dataKey:
                                                      '700727_root.body.catalogCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'catalogCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-9',
                                                  },
                                                  {
                                                    code: 'sourceFrom',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.sourceFrom',
                                                    compType: 'Input',
                                                    name: 'sourceFrom',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.sourceFrom',
                                                    dataKey:
                                                      '700727_root.body.sourceFrom',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'sourceFrom',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-10',
                                                  },
                                                  {
                                                    code: 'isBeforeApproveAfterHandle',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isBeforeApproveAfterHandle',
                                                    compType: 'Input',
                                                    name: 'isBeforeApproveAfterHandle',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isBeforeApproveAfterHandle',
                                                    dataKey:
                                                      '700727_root.body.isBeforeApproveAfterHandle',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isBeforeApproveAfterHandle',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-11',
                                                  },
                                                  {
                                                    code: 'catalogId',
                                                    attrType: 'field',
                                                    type: 'long',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogId',
                                                    compType: 'Input',
                                                    name: 'catalogId',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogId',
                                                    dataKey:
                                                      '700727_root.body.catalogId',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'catalogId',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-17',
                                                  },
                                                  {
                                                    code: 'parentCatalogCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.parentCatalogCode',
                                                    compType: 'Input',
                                                    name: 'parentCatalogCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.parentCatalogCode',
                                                    dataKey:
                                                      '700727_root.body.parentCatalogCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'belongCatalog',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-18',
                                                  },
                                                  {
                                                    code: 'catalogName',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogName',
                                                    compType: 'Input',
                                                    name: 'catalogName',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogName',
                                                    dataKey:
                                                      '700727_root.body.catalogName',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'catalogName',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-12',
                                                  },
                                                  {
                                                    code: 'approveContentTpl',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.approveContentTpl',
                                                    compType: 'Input',
                                                    name: 'approveContentTpl',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.approveContentTpl',
                                                    dataKey:
                                                      '700727_root.body.approveContentTpl',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'approveContentTpl',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-19',
                                                  },
                                                  {
                                                    code: 'catalogType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogType',
                                                    compType: 'Input',
                                                    name: 'catalogType',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogType',
                                                    dataKey:
                                                      '700727_root.body.catalogType',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '1003',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-13',
                                                  },
                                                  {
                                                    code: 'isExclusiveFlow',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isExclusiveFlow',
                                                    compType: 'Input',
                                                    name: 'isExclusiveFlow',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isExclusiveFlow',
                                                    dataKey:
                                                      '700727_root.body.isExclusiveFlow',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isExclusiveFlow',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-20',
                                                  },
                                                  {
                                                    code: 'countyFlowCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.countyFlowCode',
                                                    compType: 'Input',
                                                    name: 'countyFlowCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.countyFlowCode',
                                                    dataKey:
                                                      '700727_root.body.countyFlowCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'countyFlowCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-21',
                                                  },
                                                  {
                                                    code: 'importantFlowCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.importantFlowCode',
                                                    compType: 'Input',
                                                    name: 'importantFlowCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.importantFlowCode',
                                                    dataKey:
                                                      '700727_root.body.importantFlowCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'importantFlowCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-22',
                                                  },
                                                  {
                                                    code: 'cityFlowCode',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.cityFlowCode',
                                                    compType: 'Input',
                                                    name: 'cityFlowCode',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.cityFlowCode',
                                                    dataKey:
                                                      '700727_root.body.cityFlowCode',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'cityFlowCode',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-15',
                                                  },
                                                  {
                                                    code: 'catalogSubType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.catalogSubType',
                                                    compType: 'Input',
                                                    name: 'catalogSubType',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.catalogSubType',
                                                    dataKey:
                                                      '700727_root.body.catalogSubType',
                                                    value: {
                                                      type: [
                                                        'EMPTY_DATA',
                                                        'string',
                                                      ],
                                                      hideAttr: true,
                                                      code: '$EMPTY_DATA.string$',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-16',
                                                  },
                                                  {
                                                    code: 'isContainsMatrixAttr',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isContainsMatrixAttr',
                                                    compType: 'Input',
                                                    name: 'isContainsMatrixAttr',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isContainsMatrixAttr',
                                                    dataKey:
                                                      '700727_root.body.isContainsMatrixAttr',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isContainsMatrixAttr',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-0',
                                                  },
                                                  {
                                                    code: 'extSystemAddress',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.extSystemAddress',
                                                    compType: 'Input',
                                                    name: 'extSystemAddress',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.extSystemAddress',
                                                    dataKey:
                                                      '700727_root.body.extSystemAddress',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'extSystemAddress',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-1',
                                                  },
                                                  {
                                                    code: 'isMultiInst',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isMultiInst',
                                                    compType: 'Input',
                                                    name: 'isMultiInst',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isMultiInst',
                                                    dataKey:
                                                      '700727_root.body.isMultiInst',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isMultiInst',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-2',
                                                  },
                                                  {
                                                    code: 'isExtSystemSupport',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isExtSystemSupport',
                                                    compType: 'Input',
                                                    name: 'isExtSystemSupport',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isExtSystemSupport',
                                                    dataKey:
                                                      '700727_root.body.isExtSystemSupport',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isExtSystemSupport',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-5',
                                                  },
                                                  {
                                                    code: 'groupType',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.groupType',
                                                    compType: 'Input',
                                                    name: 'groupType',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.groupType',
                                                    dataKey:
                                                      '700727_root.body.groupType',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'groupType',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-6',
                                                  },
                                                  {
                                                    code: 'isSupportThrowOrder',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    _id: 'root.body.isSupportThrowOrder',
                                                    compType: 'Input',
                                                    name: 'isSupportThrowOrder',
                                                    parents: ['root', 'body'],
                                                    id: 'root.body.isSupportThrowOrder',
                                                    dataKey:
                                                      '700727_root.body.isSupportThrowOrder',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isSupportThrowOrder',
                                                    },
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-7',
                                                  },
                                                  {
                                                    code: 'isApprovalAuthorization',
                                                    name: '是否授权',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.isApprovalAuthorization',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-14',
                                                    id: 'root.body.isApprovalAuthorization',
                                                    dataKey:
                                                      '700727_root.body.isApprovalAuthorization',
                                                    value: {
                                                      type: [
                                                        'form',
                                                        'Form_6963977_3957773',
                                                        'validateFields',
                                                      ],
                                                      code: 'isApprovalAuthorization',
                                                    },
                                                  },
                                                  {
                                                    code: 'envCode',
                                                    name: '新增节点',
                                                    attrType: 'field',
                                                    type: 'string',
                                                    mustFlag: 'F',
                                                    defaultValue: '',
                                                    _id: 'root.body.envCode',
                                                    compType: 'Input',
                                                    parents: ['root', 'body'],
                                                    parentType: 'object',
                                                    parentKey: '0-3',
                                                    key: '0-3-8',
                                                    id: 'root.body.envCode',
                                                    dataKey:
                                                      '700727_root.body.envCode',
                                                    value: {
                                                      type: [
                                                        'datasource',
                                                        'pageParam',
                                                        'data',
                                                      ],
                                                      code: 'envCode',
                                                    },
                                                  },
                                                ],
                                                _id: 'root.body',
                                                compType: 'Input',
                                                parents: ['root'],
                                                id: 'root.body',
                                                dataKey: '700727_root.body',
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
                                            dataKey: '700727_root',
                                          },
                                        ],
                                        _sourceName: '类目修改-tsm',
                                      },
                                      line_number: 12,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '645089',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context:
                                                  '$reply_301515?.resultCode$',
                                                operate: '==',
                                                manualValue: '0',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 169943256771805020,
                                          elseIfs: [
                                            {
                                              dataName: 'elseIf',
                                              dataId: 169943256771842200,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 169943256771810080,
                                                  children: [],
                                                  todoOptions: [
                                                    'msgType',
                                                    'value',
                                                  ],
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '1913526',
                                                    pageJsonId: '90041',
                                                    type: 'error',
                                                    value: '场景修改失败！',
                                                  },
                                                  actionObjId: 'showMessage',
                                                  actionObjName: 'system',
                                                  value: 'showMessage',
                                                  line_number: 18,
                                                },
                                              ],
                                              condition: [],
                                              desc: 'resultCode != 0',
                                              callback: [
                                                {
                                                  type: 'showMessage',
                                                  dataId: 169943256771810080,
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '1913526',
                                                    pageJsonId: '90041',
                                                    type: 'error',
                                                    value: '场景修改失败！',
                                                  },
                                                  line_number: 18,
                                                },
                                              ],
                                            },
                                          ],
                                          line_number: 13,
                                          callback1: [
                                            {
                                              type: 'showMessage',
                                              dataId: 169943256771825100,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '20324325',
                                                pageJsonId: '90041',
                                                type: 'success',
                                                value: '场景修改成功！',
                                              },
                                              line_number: 14,
                                            },
                                            {
                                              type: 'resetCurrentForm',
                                              dataId: 169943256771865250,
                                              options: {
                                                compId: 'Form_6963977_3957773',
                                                compLib: 'comm',
                                                pageJsonId: '90041',
                                                compName: 'Form',
                                                id: '856199',
                                              },
                                              line_number: 15,
                                            },
                                            {
                                              type: 'setDisable',
                                              dataId: 169943256771814600,
                                              options: {
                                                compId: [
                                                  'Form_6963977_3957773',
                                                  'Input_172385_1767063',
                                                  'Select_435749',
                                                  'Select_98314808',
                                                  'Input_149739_442001',
                                                  'Select_333194',
                                                  'Select_742253',
                                                  'Input_323114',
                                                  'Select_1346751',
                                                  'Select_6137299',
                                                  'Select_889808',
                                                  'Select_242215',
                                                  'Select_082425',
                                                  'Select_565959',
                                                  'Select_8729274',
                                                  'TextArea_436859',
                                                  'Input_149406',
                                                  'TextArea_60733',
                                                  'Button_8429776',
                                                  'Button_178963',
                                                  'MultipleSelect_412347',
                                                  'TreeSelect_688155',
                                                ],
                                                compLib: 'comm',
                                                pageJsonId: '90041',
                                                compName: 'Form',
                                                id: '0572372',
                                                disabled: 'true',
                                                compid: [
                                                  'Form_6963977_3957773',
                                                  'Input_172385_1767063',
                                                  'Select_435749',
                                                  'Select_98314808',
                                                  'Input_149739_442001',
                                                  'Select_333194',
                                                  'Select_742253',
                                                  'Input_323114',
                                                  'Select_1346751',
                                                  'Select_6137299',
                                                  'Select_889808',
                                                  'Select_242215',
                                                  'Select_082425',
                                                  'Select_565959',
                                                  'Select_8729274',
                                                  'TextArea_436859',
                                                  'Input_149406',
                                                  'TextArea_60733',
                                                  'Button_8429776',
                                                  'Button_178963',
                                                  'MultipleSelect_412347',
                                                  'TreeSelect_688155',
                                                ],
                                              },
                                              line_number: 16,
                                            },
                                            {
                                              type: 'callSelfFunc',
                                              dataId: 169943256771863260,
                                              options: {
                                                compId: 'callSelfFunc',
                                                compName: 'system',
                                                id: '81566996',
                                                pageJsonId: '90041',
                                                customFuncName: 'onLoadTable',
                                              },
                                              line_number: 17,
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
                              callback2: [
                                {
                                  type: 'validateMsg',
                                  dataId: 169943258942788450,
                                  options: {
                                    compId: 'Select_082425',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Select',
                                    id: '681278',
                                    validateStatus: 'error',
                                    help: '三个流程必须选则一个',
                                  },
                                  line_number: 19,
                                },
                                {
                                  type: 'validateMsg',
                                  dataId: 169943259427353700,
                                  options: {
                                    compId: 'Select_1346751',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Select',
                                    id: '0538632',
                                    validateStatus: 'error',
                                    help: '三个流程必须选则一个',
                                  },
                                  line_number: 20,
                                },
                                {
                                  type: 'validateMsg',
                                  dataId: 169943259832072320,
                                  options: {
                                    compId: 'Select_565959',
                                    compLib: 'comm',
                                    pageJsonId: '90041',
                                    compName: 'Select',
                                    id: '637874',
                                    validateStatus: 'error',
                                    help: '三个流程必须选则一个',
                                  },
                                  line_number: 21,
                                },
                              ],
                            },
                          ],
                          callback2: [
                            {
                              type: 'console',
                              dataId: 169933567753177900,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '705026',
                                pageJsonId: '90041',
                                value: [
                                  '$Form_6963977_3957773$',
                                  '$data.pageParam$',
                                ],
                              },
                              line_number: 22,
                            },
                          ],
                        },
                      ];
                      eventDatavalidateCurrentForm74.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatavalidateCurrentForm74,
                        { e },
                        'validateCurrentForm',
                        {
                          id: 'validateCurrentForm',
                          name: 'validateCurrentForm',
                          type: 'validateCurrentForm',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['Button_8429776'] = r)}
                    {...injectData}
                  />
                  <Button
                    name={'取消'}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    type={'default'}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_178963',
                      uid: 'Button_178963',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                    onClick={(e: any) => {
                      const forms116 = getFormByCompId(
                        'Form_6963977_3957773',
                        refs,
                      );
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms116) ? forms116 : [forms116]).forEach(
                        (form) => form?.resetFields(),
                      );
                      const eventDatasetDisable110: any = [
                        {
                          type: 'setDisable',
                          dataId: 166175504403389700,
                          options: {
                            compId: [
                              'Form_6963977_3957773',
                              'Input_172385_1767063',
                              'Input_149739_442001',
                              'Select_98314808',
                              'Select_435749',
                              'Select_333194',
                              'Select_742253',
                              'Input_323114',
                              'Select_6137299',
                              'Select_1346751',
                              'Select_082425',
                              'Select_889808',
                              'Select_242215',
                              'Select_565959',
                              'Select_8729274',
                              'Input_149406',
                              'TextArea_60733',
                              'TextArea_436859',
                              'Button_8429776',
                              'Button_178963',
                              'MultipleSelect_412347',
                              'TreeSelect_688155',
                            ],
                            compLib: 'comm',
                            pageJsonId: '90041',
                            compName: 'Form',
                            id: '506526',
                            disabled: 'true',
                            compid: [
                              'Form_6963977_3957773',
                              'Input_172385_1767063',
                              'Input_149739_442001',
                              'Select_98314808',
                              'Select_435749',
                              'Select_333194',
                              'Select_742253',
                              'Input_323114',
                              'Select_6137299',
                              'Select_1346751',
                              'Select_082425',
                              'Select_889808',
                              'Select_242215',
                              'Select_565959',
                              'Select_8729274',
                              'Input_149406',
                              'TextArea_60733',
                              'TextArea_436859',
                              'Button_8429776',
                              'Button_178963',
                              'MultipleSelect_412347',
                              'TreeSelect_688155',
                            ],
                          },
                          line_number: 2,
                        },
                      ];
                      eventDatasetDisable110.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatasetDisable110,
                        { e },
                        'setDisable',
                        {
                          id: 'setDisable',
                          name: 'setDisable',
                          type: 'setDisable',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => (refs['Button_178963'] = r)}
                    {...injectData}
                  />
                </View>
              </Card>
            </View>
          </View>
        </HorizontalView>
      </View>
    </div>
  );
};

export default withPageHOC(SceneManage$$Page, {
  pageId: '871695112643387392',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
