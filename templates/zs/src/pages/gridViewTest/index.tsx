// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Input,
  Button,
  Collapse,
  CollapsePanel,
  GridView,
  HorizontalView,
  Text,
  Icon,
  VerticalView,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '915933352828162048';
const GridViewTest$$Page: React.FC<PageProps> = ({
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
  const select_node = (options_485879: any) => {
    const eventDatacustomActionCode213: any = [
      {
        type: 'customActionCode',
        dataId: 166341180903246180,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '437422',
          pageJsonId: '866861',
          code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166341180903389900,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '886778',
              pageJsonId: '866861',
              dataSourceId: 166341035337970140,
              dataSourceName: 'selectedNodes',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '142214',
                  code: 'nodes',
                  name: '属性',
                  type: 'object',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$data_437422$'], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [
              {
                type: 'console',
                dataId: 166341188639034050,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '2731613',
                  pageJsonId: '866861',
                  value: ['$data.selectedNodes$'],
                },
                line_number: 3,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode213.params =
      [
        {
          title: '事件入参',
          name: 'options_485879',
          value: '$options_485879$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode213,
      { options_485879 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const onLoadSceneNode = (options_485601: any) => {
    const eventDatagetValue103: any = [
      {
        type: 'getValue',
        dataId: 166964690601845380,
        options: {
          compId: 'Input_5357175',
          compLib: 'comm',
          pageJsonId: '866861',
          compName: 'Input',
          id: '2211283',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadDataSource',
            dataId: 166964693509999100,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '495284',
              pageJsonId: '866861',
              dataSourceId: 166305304245640540,
              dataSourceName: 'selectAlltreeNodeCode',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '222926',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '7399277',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '858874',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '831632',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '3285892',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: 'CLS_TY' },
                    },
                    {
                      attrId: '951212',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
                  ],
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '937773463',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5201218',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '37018',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '17578',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '059641',
                      code: 'nodeValue',
                      name: 'nodeValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '486331',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '594082',
                      code: 'parentCode',
                      name: 'parentCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '43752',
                      code: 'children',
                      name: 'children',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '741171',
                          code: 'nodeKey',
                          name: 'nodeKey',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '349837',
                          code: 'nodeValue',
                          name: 'nodeValue',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '774947',
                          code: 'children',
                          name: 'children',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '03089',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '4665593',
                          code: 'parentCode',
                          name: 'parentCode',
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
            line_number: 2,
            callback1: [],
            callback2: [],
          },
          {
            type: 'reloadDataSource',
            dataId: 166964693612073860,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '144429',
              pageJsonId: '866861',
              dataSourceId: 166305762583687330,
              dataSourceName: 'jichulei',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '93142236',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '5541864',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '9000299',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '213779',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '792402',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: 'CLS_JC' },
                    },
                    {
                      attrId: '536329',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
                  ],
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '1463085',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '7638504',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '513151',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '118526',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '281217',
                      code: 'nodeValue',
                      name: 'nodeValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '379361',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '954346',
                      code: 'parentCode',
                      name: 'parentCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '90271',
                      code: 'children',
                      name: 'children',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '585501647',
                          code: 'nodeKey',
                          name: 'nodeKey',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '3696457',
                          code: 'nodeValue',
                          name: 'nodeValue',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '562087',
                          code: 'children',
                          name: 'children',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '888576',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '748312',
                          code: 'parentCode',
                          name: 'parentCode',
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
            line_number: 3,
            callback1: [],
            callback2: [],
          },
          {
            type: 'reloadDataSource',
            dataId: 166964693662488320,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '03461657',
              pageJsonId: '866861',
              dataSourceId: 166305773466855420,
              dataSourceName: 'chanpinlei',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '674198',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '266602',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '777506',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '1407874',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '517287',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: 'CLS_CP' },
                    },
                    {
                      attrId: '124619',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
                  ],
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '359989',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '41977',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '784308',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '14877',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '4341527',
                      code: 'nodeValue',
                      name: 'nodeValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '992013',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '374508',
                      code: 'parentCode',
                      name: 'parentCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '145747',
                      code: 'children',
                      name: 'children',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '746308',
                          code: 'nodeKey',
                          name: 'nodeKey',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '1126966',
                          code: 'nodeValue',
                          name: 'nodeValue',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '008252',
                          code: 'children',
                          name: 'children',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '6292188',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '324336',
                          code: 'parentCode',
                          name: 'parentCode',
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
            line_number: 4,
            callback1: [],
            callback2: [],
          },
          {
            type: 'reloadDataSource',
            dataId: 166964693701786240,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '5391253',
              pageJsonId: '866861',
              dataSourceId: 166305775855125120,
              dataSourceName: 'yingxiaoanlei',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '6996998',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '653788',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '201335',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '2270458',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '336337',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: 'CLS_YX' },
                    },
                    {
                      attrId: '3671',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
                  ],
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '673683',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '2283536',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '458075',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '917443',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '204225',
                      code: 'nodeValue',
                      name: 'nodeValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1199901',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '02113',
                      code: 'parentCode',
                      name: 'parentCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '635566',
                      code: 'children',
                      name: 'children',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '05122336',
                          code: 'nodeKey',
                          name: 'nodeKey',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '202486',
                          code: 'nodeValue',
                          name: 'nodeValue',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '0229784',
                          code: 'children',
                          name: 'children',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '7212235',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '519418',
                          code: 'parentCode',
                          name: 'parentCode',
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
            line_number: 5,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 166971285997154140,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '847923',
              pageJsonId: '866861',
              actionTitle: '',
              code: 'function main(data,state,success,fail){success({})};',
            },
            line_number: 6,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166971285997174300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '765493',
                  pageJsonId: '866861',
                  dataSourceId: 166341035337970140,
                  dataSourceName: 'selectedNodes',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '142214',
                      code: 'nodes',
                      name: '属性',
                      type: 'object',
                      initialData: { type: 'static' },
                      value: { type: ['context', '$data_847923$'], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: false,
                  otherObjectArrayOptions: {},
                },
                line_number: 7,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatagetValue103.params =
      [
        {
          title: '事件入参',
          name: 'options_485601',
          value: '$options_485601$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue103, { options_485601 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    select_node,
    onLoadSceneNode,
  }));

  useEffect(() => {
    const eventDatacallSelfFunc47: any = [
      {
        type: 'callSelfFunc',
        dataId: 166964719015826940,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '604968',
          pageJsonId: '866861',
          customFuncName: 'onLoadSceneNode',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc47.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc47, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDatasetDataSource22: any = [
      {
        type: 'setDataSource',
        dataId: 166998291446109730,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '257056',
          pageJsonId: '866861',
          dataSourceId: 166998286643572320,
          dataSourceName: 'emptyArray',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '5818224',
              code: 'array',
              name: '属性',
              type: 'array',
              initialData: { type: 'static', value: '$[]$' },
              value: { type: ['customize'], code: '$[]$' },
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
    ];
    eventDatasetDataSource22.params = [] || [];
    CMDGenerator(eventDatasetDataSource22, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_866861__"
    >
      <View
        className="View_View_866861_1"
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_866861_1',
          uid: 'View_866861_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 0px',
          overflowY: 'auto',
          width: 'auto',
          height: '100%',
          fontSize: '',
          flex: '',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_866861_1')}
        {...injectData}
      >
        <View
          className="View_View_129586"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_129586',
            uid: 'View_129586',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_129586')}
          {...injectData}
        >
          <View
            className="View_View_510588"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_510588',
              uid: 'View_510588',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 24px 12px 24px',
              width: '100%',
              height: '52px',
              margin: '0px 0px 0px 0px',
              background: '#FFFFFF',
              'box-shadow': '0px2px8px0pxrgba(0,0,0,0.08)',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_510588')}
            {...injectData}
          >
            <View
              className="View_View_782558"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_782558',
                uid: 'View_782558',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '8px 50px 0px 0px',
                width: '50%',
                justifyContent: 'flex-start',
                height: '100%',
                textAlign: 'left',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_782558')}
              {...injectData}
            >
              <Input
                name={'输入框'}
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
                placeholder={'请输入审批场景名称'}
                fieldName={'name'}
                icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
                prefixIcon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Input_5357175',
                  uid: 'Input_5357175',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  background: '#FFFFFF',
                  'box-shadow': '0px2px8px0pxrgba(0,    0,    0,    0.08)',
                  width: '200px',
                }}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc777: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166964702265481340,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '741176',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc777.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc777,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_5357175')}
                {...injectData}
              />
              <Button
                name={'查询'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                visible={true}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_2259782',
                  uid: 'Button_2259782',
                  type: 'Button',
                  ...componentItem,
                }}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc778: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166964705945529020,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '900581',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc778.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc778,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_2259782')}
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
                disabled={false}
                visible={true}
                type={'default'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_126807',
                  uid: 'Button_126807',
                  type: 'Button',
                  ...componentItem,
                }}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDataclearValue205: any = [
                    {
                      type: 'clearValue',
                      dataId: 166964671019617630,
                      options: {
                        compId: 'Input_5357175',
                        compLib: 'comm',
                        pageJsonId: '866861',
                        compName: 'Input',
                        id: '7058787',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue205.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue205, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc779: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166964710989393000,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '977021',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc779.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc779,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_126807')}
                {...injectData}
              />
            </View>
            <View
              className="View_View_2174641"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_2174641',
                uid: 'View_2174641',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                textAlign: 'right',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_2174641')}
              {...injectData}
            >
              <Button
                name={'我的草稿'}
                shape={null}
                visible={true}
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
                  id: 'Button_817728',
                  uid: 'Button_817728',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '10px 0px 0px 0px' }}
                onClick={(e: any) => {
                  const eventDatahistory17: any = [
                    {
                      type: 'history',
                      dataId: 166778917034172030,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '49999',
                        pageJsonId: '866861',
                        type: 'push',
                        pathname: '/approveOrderTodo',
                        selectedType: 'page',
                        paramsObj: { isDraft: '1' },
                        paramsObjKeyValueMap: { isDraft: '1' },
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatahistory17.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatahistory17, { e }, 'history', {
                    id: 'history',
                    name: 'history',
                    type: 'history',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_817728')}
                {...injectData}
              />
            </View>
          </View>
          <View
            className="View_View_190796"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_190796',
              uid: 'View_190796',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 16px 0px 16px',
              width: '100%',
              height: '95%',
              margin: '0px 0px 0px 0px',
              overflowY: 'auto',
              fontSize: '',
              flex: '11auto',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_190796')}
            {...injectData}
          >
            <View
              className="View_View_239728"
              name={'布局容器1'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728',
                uid: 'View_239728',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                margin: '0px 0px 0px 0px',
                height: '1A',
                overflowY: 'hidden',
                background: '#FFFFFF',
                'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                'border-radius': '2px',
                'margin-bottom': '2.5px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_239728')}
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                visible={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917',
                  uid: 'Collapse_228917',
                  type: 'Collapse',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  width: '100%',
                  margin: '0 0 16px 0',
                  padding: '20px 20px 20px 20px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Collapse_228917')}
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  visible={true}
                  header={'通用类'}
                  key={'1'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495',
                    uid: 'CollapsePanel_5495',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  style={{ minHeight: 40 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'CollapsePanel_5495')
                  }
                  {...injectData}
                  uid="CollapsePanel_5495"
                >
                  <GridView
                    name={'resultData'}
                    itemKey={'item'}
                    indexKey={'i'}
                    pieceData={[]}
                    defaultValue={[]}
                    isChecked={false}
                    isMultiple={true}
                    columnNum={1}
                    valueKey={'nodeKey'}
                    span={24}
                    vspace={16}
                    hspace={8}
                    isEditor={false}
                    fieldName={'data.selectAlltreeNodeCode.resultData'}
                    gridData={data?.selectAlltreeNodeCode?.resultData}
                    selectStyle={{ border: 'unset' }}
                    normalStyle={{ border: '0px solid' }}
                    $$componentItem={{
                      id: 'GridView_841399',
                      uid: 'GridView_841399',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    ref={(r: any) => refs.setComponentRef(r, 'GridView_841399')}
                    {...injectData}
                    getEngineApis={() => {
                      return {
                        ...injectData.getEngineApis(),
                        MemoRenderer: {
                          renderer: null,
                          MemoLoopItem: (props: any) => {
                            const item = props[props.itemKey] ?? props?.item;
                            const i = props[props.indexKey] ?? props?.i;
                            return (
                              <>
                                <HorizontalView
                                  name={'左右布局'}
                                  visible={true}
                                  $$componentItem={{
                                    id: 'HorizontalView_300975',
                                    uid: 'HorizontalView_300975',
                                    type: 'HorizontalView',
                                    ...componentItem,
                                  }}
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    padding: '0px 0px 0px 0px',
                                    width: '100%',
                                    height: '100%',
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'HorizontalView_300975',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    className="View_View_575815"
                                    name={'布局容器'}
                                    visible={true}
                                    $$componentItem={{
                                      id: 'View_575815',
                                      uid: 'View_575815',
                                      type: 'View',
                                      ...componentItem,
                                    }}
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      padding: '0px 0px 0px 0px',
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                      'font-weight': 'bold',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(r, 'View_575815')
                                    }
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      visible={true}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405',
                                        uid: 'Text_4120405',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(r, 'Text_4120405')
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    className="View_View_2657547"
                                    name={'布局容器'}
                                    visible={true}
                                    $$componentItem={{
                                      id: 'View_2657547',
                                      uid: 'View_2657547',
                                      type: 'View',
                                      ...componentItem,
                                    }}
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      padding: '0px 0px 0px 0px',
                                      width: '100%',
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(r, 'View_2657547')
                                    }
                                    {...injectData}
                                  >
                                    <GridView
                                      name={'children'}
                                      itemKey={'c'}
                                      indexKey={'l'}
                                      pieceData={[]}
                                      defaultValue={[]}
                                      isChecked={false}
                                      isMultiple={true}
                                      columnNum={1}
                                      valueKey={'nodeKey'}
                                      span={'6'}
                                      vspace={16}
                                      hspace={8}
                                      isEditor={true}
                                      fieldName={
                                        'data.selectAlltreeNodeCode.resultData.children'
                                      }
                                      gridData={item?.children}
                                      normalStyle={{
                                        'border-radius': '2px',
                                        padding: '6px 12px',
                                        'background-color': '#f6f6f7',
                                        color: '#575a66',
                                      }}
                                      selectStyle={{
                                        'background-color': '#f0f6ff',
                                        'background-image':
                                          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAC6klEQVRYCb1XTUgUURz/zay27brqboRE2CmWgiCQ7CLkobp6iYjKDlFgCRF9XEoDOxgUJX3iEhgodahLnYSE6JBESJ46FVmBGBFBypq22s5u83+7/9m3s2/cebr6Dvve/+P3MW9n5u0CS41dHb+zBjdQQGuR4ICL3nMJR8uOqlw3VWiU5SqikJVkpOkuHOyZEX7HH8ZESdO3TOdn7WmSwGzU2UyZkYuUK7oKSnCx/1yEwtzui5X9wcV4YwCfpyyRdhi4SNffe7KGMbrfn4PztyBV5VWWg7Nd6tMikIEs4otABay2781/6TIOVMD2/UEc3htEW1dSmFA6kIFjiSgmvls4cWMWbx/E7DmJD19z32HJHshAvkaaoxEDr/qiaD41LafFWjjwApZ0VzrRfHr6qnIP/AgROJvJ9iyLgMEkpE0gg7UJ3GAtAhXYN4EXmAicFwIFqqECh4KFziUJVOCAjRi9l3vrEo0ngQpMgLFEDK1nC7e0koDBTfH8eUJIe7y5G8XT1ynML+Ri+iwhYDAV168D6CW5bUsAQ5drRXzr2V8qOSPgrOyFDKb81K8MGmImuo/VoCFqouXMDDIZGQE4Ht1gbut9PI/d26sw/G5RvIE4z7O4lb3A3OQ9G1lj+WD7QTKNC9oPk7cbvQobX3MDLMx218yAW3jNDHgJr7qBcsKrZsCvcMUN6ApXzIBf4UjIwOClWnyctHDl0Rzr6x+qjPQrTP1d7WEcaA3ixegCrj2ZZwoxaz+GOsJ7dlajr7MGhq3SefsPxj/ZPwddw7cBlfDIzXrUhQ0MDKcw+DIFK39SbKyn7a7Dpg0mJn9aONqbRGrRpZwPyxpQCctUR/YFcfFQWKTSVhbffliIN+YOqaGRFO4/Lz7/ZCytPQ2UE5aJquxTNXE+gqZ4tUiTkePXZ8UNJ/ep1iUGdITdhFs3m+hoC6F7YA7pwk9wd1tR7BhYiXARo1ZgTKzoPNfScpoN+kP9xTDR/z4RvfMfZJBzTPeTIF8AAAAASUVORK5CYII=)',
                                        'background-size': '20px',
                                        'background-position': 'right bottom',
                                        'background-repeat': 'no-repeat',
                                        border: '1px solid rgba(51,102,238,1)',
                                        'border-radius': '2px',
                                      }}
                                      $$componentItem={{
                                        id: 'GridView_959384',
                                        uid: 'GridView_959384',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode823: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 166341200368161340,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '8421537',
                                                pageJsonId: '866861',
                                                code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
                                              },
                                              line_number: 1,
                                              callback1: [
                                                {
                                                  type: 'setDataSource',
                                                  dataId: 166341200368103420,
                                                  options: {
                                                    compId: 'setDataSource',
                                                    compName: 'page',
                                                    id: '8998934',
                                                    pageJsonId: '866861',
                                                    dataSourceId: 166341035337970140,
                                                    dataSourceName:
                                                      'selectedNodes',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceReloadFilter: [],
                                                    dataSourceSetValue: [
                                                      {
                                                        attrId: '142214',
                                                        code: 'nodes',
                                                        name: '属性',
                                                        type: 'object',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$data_8421537$',
                                                          ],
                                                          code: '',
                                                        },
                                                      },
                                                    ],
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                  },
                                                  line_number: 2,
                                                  callback1: [
                                                    {
                                                      type: 'console',
                                                      dataId: 166341200368168670,
                                                      options: {
                                                        compId: 'debug',
                                                        compName: 'system',
                                                        id: '9639415',
                                                        pageJsonId: '866861',
                                                        value: [
                                                          '$data.selectedNodes$',
                                                        ],
                                                      },
                                                      line_number: 3,
                                                    },
                                                  ],
                                                  callback2: [],
                                                },
                                              ],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode823.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode823,
                                          { vals, item, i },
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
                                        refs.setComponentRef(
                                          r,
                                          'GridView_959384',
                                        )
                                      }
                                      {...injectData}
                                      getEngineApis={() => {
                                        return {
                                          ...injectData.getEngineApis(),
                                          MemoRenderer: {
                                            renderer: null,
                                            MemoLoopItem: (props: any) => {
                                              const item =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const i =
                                                props[props.indexKey] ??
                                                props?.i;
                                              const c =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const l =
                                                props[props.indexKey] ??
                                                props?.i;
                                              return (
                                                <>
                                                  <View
                                                    className="View_View_9189376"
                                                    name={'布局容器'}
                                                    visible={true}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376',
                                                      uid: 'View_9189376',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    style={{
                                                      display: 'block',
                                                      flexDirection: 'column',
                                                      padding:
                                                        '0px 0px 0px 0px',
                                                      width: '100%',
                                                    }}
                                                    ref={(r: any) =>
                                                      refs.setComponentRef(
                                                        r,
                                                        'View_9189376',
                                                      )
                                                    }
                                                    {...injectData}
                                                  >
                                                    <Popover
                                                      options={{
                                                        tipType: '2',
                                                        trigger: 'click',
                                                        content:
                                                          'OA已实现该场景',
                                                      }}
                                                      id={'Icon_724045'}
                                                      {...injectData}
                                                      parentEngineId={
                                                        parentEngineId
                                                      }
                                                    >
                                                      <Icon
                                                        name={'图标'}
                                                        rotate={0}
                                                        icon={{
                                                          type: 'info-circle',
                                                          theme: 'outlined',
                                                          fontAddress: '',
                                                          isIconFont: false,
                                                          iconFileInfo: {},
                                                        }}
                                                        $$componentItem={{
                                                          id: 'Icon_724045',
                                                          uid: 'Icon_724045',
                                                          type: 'Icon',
                                                          ...componentItem,
                                                        }}
                                                        disabled={false}
                                                        visible={true}
                                                        readOnly={false}
                                                        style={{
                                                          'margin-right':
                                                            '10px',
                                                          color: 'unset',
                                                        }}
                                                        ref={(r: any) =>
                                                          refs.setComponentRef(
                                                            r,
                                                            'Icon_724045',
                                                          )
                                                        }
                                                        {...injectData}
                                                      />
                                                    </Popover>
                                                    <Text
                                                      name={'文本'}
                                                      content={item?.nodeValue}
                                                      textType={'span'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_968473',
                                                        uid: 'Text_968473',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      style={{
                                                        fontSize: '14px',
                                                        lineHeight: '24px',
                                                        color: 'unset',
                                                        letterSpacing: '',
                                                      }}
                                                      ref={(r: any) =>
                                                        refs.setComponentRef(
                                                          r,
                                                          'Text_968473',
                                                        )
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
                                </HorizontalView>
                              </>
                            );
                          },
                        },
                      };
                    }}
                  />
                </CollapsePanel>
              </Collapse>
            </View>
            <View
              className="View_View_239728_273135"
              name={'布局容器2'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_273135',
                uid: 'View_239728_273135',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                padding: '0px 0px 0px 0px',
                width: '100%',
                margin: '0px 0px 0px 0px',
                height: '0A',
                overflowY: 'hidden',
                background: '#FFFFFF',
                'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                'border-radius': '2px',
                'margin-bottom': '2.5px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_239728_273135')}
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                visible={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917_4750854',
                  uid: 'Collapse_228917_4750854',
                  type: 'Collapse',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  width: '100%',
                  margin: '0 0 16px 0',
                  padding: '20px 20px 20px 20px',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Collapse_228917_4750854')
                }
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  visible={true}
                  header={'基础类'}
                  key={'2462862'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495_629279',
                    uid: 'CollapsePanel_5495_629279',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  style={{ minHeight: 40 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'CollapsePanel_5495_629279')
                  }
                  {...injectData}
                  uid="CollapsePanel_5495_629279"
                >
                  <GridView
                    name={'resultData'}
                    itemKey={'item'}
                    indexKey={'i'}
                    pieceData={[]}
                    defaultValue={[]}
                    isChecked={false}
                    isMultiple={true}
                    columnNum={1}
                    valueKey={'nodeKey'}
                    span={24}
                    vspace={16}
                    hspace={8}
                    isEditor={false}
                    fieldName={'data.jichulei.resultData'}
                    gridData={data?.jichulei?.resultData}
                    selectStyle={{ border: 'unset' }}
                    normalStyle={{ border: '0px solid' }}
                    $$componentItem={{
                      id: 'GridView_841399_5745795',
                      uid: 'GridView_841399_5745795',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    onChange={(vals: any) => {
                      // console 166313571472478560
                      console.log('父级数据', vals);
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'GridView_841399_5745795')
                    }
                    {...injectData}
                    getEngineApis={() => {
                      return {
                        ...injectData.getEngineApis(),
                        MemoRenderer: {
                          renderer: null,
                          MemoLoopItem: (props: any) => {
                            const item = props[props.itemKey] ?? props?.item;
                            const i = props[props.indexKey] ?? props?.i;
                            return (
                              <>
                                <HorizontalView
                                  name={'左右布局'}
                                  visible={true}
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_2315523',
                                    uid: 'HorizontalView_300975_2315523',
                                    type: 'HorizontalView',
                                    ...componentItem,
                                  }}
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    padding: '0px 0px 0px 0px',
                                    width: '100%',
                                    height: '100%',
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'HorizontalView_300975_2315523',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    className="View_View_575815_624883"
                                    name={'布局容器'}
                                    visible={true}
                                    $$componentItem={{
                                      id: 'View_575815_624883',
                                      uid: 'View_575815_624883',
                                      type: 'View',
                                      ...componentItem,
                                    }}
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      padding: '0px 0px 0px 0px',
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_575815_624883',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      visible={true}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405_631164',
                                        uid: 'Text_4120405_631164',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(
                                          r,
                                          'Text_4120405_631164',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    className="View_View_2657547_5801104"
                                    name={'布局容器'}
                                    visible={true}
                                    $$componentItem={{
                                      id: 'View_2657547_5801104',
                                      uid: 'View_2657547_5801104',
                                      type: 'View',
                                      ...componentItem,
                                    }}
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      padding: '0px 0px 0px 0px',
                                      width: '100%',
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_2657547_5801104',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <GridView
                                      name={'children'}
                                      itemKey={'c'}
                                      indexKey={'l'}
                                      pieceData={[]}
                                      defaultValue={[]}
                                      isChecked={false}
                                      isMultiple={true}
                                      columnNum={1}
                                      valueKey={'nodeKey'}
                                      span={'6'}
                                      vspace={16}
                                      hspace={8}
                                      isEditor={true}
                                      fieldName={
                                        'data.selectAlltreeNodeCode.resultData.children'
                                      }
                                      gridData={item?.children}
                                      normalStyle={{
                                        'border-radius': '2px',
                                        padding: '6px 12px',
                                        'background-color': '#f6f6f7',
                                      }}
                                      selectStyle={{
                                        'background-color': '#f0f6ff',
                                        'background-image':
                                          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAC6klEQVRYCb1XTUgUURz/zay27brqboRE2CmWgiCQ7CLkobp6iYjKDlFgCRF9XEoDOxgUJX3iEhgodahLnYSE6JBESJ46FVmBGBFBypq22s5u83+7/9m3s2/cebr6Dvve/+P3MW9n5u0CS41dHb+zBjdQQGuR4ICL3nMJR8uOqlw3VWiU5SqikJVkpOkuHOyZEX7HH8ZESdO3TOdn7WmSwGzU2UyZkYuUK7oKSnCx/1yEwtzui5X9wcV4YwCfpyyRdhi4SNffe7KGMbrfn4PztyBV5VWWg7Nd6tMikIEs4otABay2781/6TIOVMD2/UEc3htEW1dSmFA6kIFjiSgmvls4cWMWbx/E7DmJD19z32HJHshAvkaaoxEDr/qiaD41LafFWjjwApZ0VzrRfHr6qnIP/AgROJvJ9iyLgMEkpE0gg7UJ3GAtAhXYN4EXmAicFwIFqqECh4KFziUJVOCAjRi9l3vrEo0ngQpMgLFEDK1nC7e0koDBTfH8eUJIe7y5G8XT1ynML+Ri+iwhYDAV168D6CW5bUsAQ5drRXzr2V8qOSPgrOyFDKb81K8MGmImuo/VoCFqouXMDDIZGQE4Ht1gbut9PI/d26sw/G5RvIE4z7O4lb3A3OQ9G1lj+WD7QTKNC9oPk7cbvQobX3MDLMx218yAW3jNDHgJr7qBcsKrZsCvcMUN6ApXzIBf4UjIwOClWnyctHDl0Rzr6x+qjPQrTP1d7WEcaA3ixegCrj2ZZwoxaz+GOsJ7dlajr7MGhq3SefsPxj/ZPwddw7cBlfDIzXrUhQ0MDKcw+DIFK39SbKyn7a7Dpg0mJn9aONqbRGrRpZwPyxpQCctUR/YFcfFQWKTSVhbffliIN+YOqaGRFO4/Lz7/ZCytPQ2UE5aJquxTNXE+gqZ4tUiTkePXZ8UNJ/ep1iUGdITdhFs3m+hoC6F7YA7pwk9wd1tR7BhYiXARo1ZgTKzoPNfScpoN+kP9xTDR/z4RvfMfZJBzTPeTIF8AAAAASUVORK5CYII=)',
                                        'background-size': '20px',
                                        'background-position': 'right bottom',
                                        'background-repeat': 'no-repeat',
                                        border: '1px solid rgba(51,102,238,1)',
                                        'border-radius': '2px',
                                      }}
                                      value={data?.emptyArray?.array}
                                      $$componentItem={{
                                        id: 'GridView_959384_121004',
                                        uid: 'GridView_959384_121004',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode825: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 166341201001430430,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '5583694',
                                                pageJsonId: '866861',
                                                code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
                                              },
                                              line_number: 1,
                                              callback1: [
                                                {
                                                  type: 'setDataSource',
                                                  dataId: 166341201001498300,
                                                  options: {
                                                    compId: 'setDataSource',
                                                    compName: 'page',
                                                    id: '181758',
                                                    pageJsonId: '866861',
                                                    dataSourceId: 166341035337970140,
                                                    dataSourceName:
                                                      'selectedNodes',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceReloadFilter: [],
                                                    dataSourceSetValue: [
                                                      {
                                                        attrId: '142214',
                                                        code: 'nodes',
                                                        name: '属性',
                                                        type: 'object',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$data_5583694$',
                                                          ],
                                                          code: '',
                                                        },
                                                      },
                                                    ],
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                  },
                                                  line_number: 2,
                                                  callback1: [
                                                    {
                                                      type: 'console',
                                                      dataId: 166341201001469630,
                                                      options: {
                                                        compId: 'debug',
                                                        compName: 'system',
                                                        id: '702158',
                                                        pageJsonId: '866861',
                                                        value: [
                                                          '$data.selectedNodes$',
                                                        ],
                                                      },
                                                      line_number: 3,
                                                    },
                                                  ],
                                                  callback2: [],
                                                },
                                              ],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode825.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode825,
                                          { vals, item, i },
                                          'customActionCode',
                                          {
                                            id: 'customActionCode',
                                            name: 'customActionCode',
                                            type: 'customActionCode',
                                            platform: 'pc',
                                          },
                                        ); // console 166998229562119040
                                        console.log(vals);
                                        // console 166998230063917800
                                        console.log(item);
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(
                                          r,
                                          'GridView_959384_121004',
                                        )
                                      }
                                      {...injectData}
                                      getEngineApis={() => {
                                        return {
                                          ...injectData.getEngineApis(),
                                          MemoRenderer: {
                                            renderer: null,
                                            MemoLoopItem: (props: any) => {
                                              const item =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const i =
                                                props[props.indexKey] ??
                                                props?.i;
                                              const c =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const l =
                                                props[props.indexKey] ??
                                                props?.i;
                                              return (
                                                <>
                                                  <View
                                                    className="View_View_9189376_858298"
                                                    name={'布局容器'}
                                                    visible={true}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376_858298',
                                                      uid: 'View_9189376_858298',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    style={{
                                                      display: 'block',
                                                      flexDirection: 'column',
                                                      padding:
                                                        '0px 0px 0px 0px',
                                                      width: '100%',
                                                    }}
                                                    ref={(r: any) =>
                                                      refs.setComponentRef(
                                                        r,
                                                        'View_9189376_858298',
                                                      )
                                                    }
                                                    {...injectData}
                                                  >
                                                    <Popover
                                                      options={{
                                                        tipType: '2',
                                                        trigger: 'click',
                                                        content:
                                                          'OA已实现该场景',
                                                      }}
                                                      id={'Icon_724045_443752'}
                                                      {...injectData}
                                                      parentEngineId={
                                                        parentEngineId
                                                      }
                                                    >
                                                      <Icon
                                                        name={'图标'}
                                                        rotate={0}
                                                        icon={{
                                                          type: 'info-circle',
                                                          theme: 'outlined',
                                                          fontAddress: '',
                                                          isIconFont: false,
                                                          iconFileInfo: {},
                                                        }}
                                                        $$componentItem={{
                                                          id: 'Icon_724045_443752',
                                                          uid: 'Icon_724045_443752',
                                                          type: 'Icon',
                                                          ...componentItem,
                                                        }}
                                                        disabled={false}
                                                        visible={true}
                                                        readOnly={false}
                                                        style={{
                                                          'margin-right':
                                                            '10px',
                                                          color: 'unset',
                                                        }}
                                                        ref={(r: any) =>
                                                          refs.setComponentRef(
                                                            r,
                                                            'Icon_724045_443752',
                                                          )
                                                        }
                                                        {...injectData}
                                                      />
                                                    </Popover>
                                                    <Text
                                                      name={'文本'}
                                                      visible={true}
                                                      content={item?.nodeValue}
                                                      textType={'span'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_968473_4695347',
                                                        uid: 'Text_968473_4695347',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      style={{
                                                        fontSize: '14px',
                                                        lineHeight: '24px',
                                                        color: 'unset',
                                                      }}
                                                      ref={(r: any) =>
                                                        refs.setComponentRef(
                                                          r,
                                                          'Text_968473_4695347',
                                                        )
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
                                </HorizontalView>
                              </>
                            );
                          },
                        },
                      };
                    }}
                  />
                </CollapsePanel>
              </Collapse>
            </View>
            <View
              className="View_View_239728_742059"
              name={'布局容器3'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_742059',
                uid: 'View_239728_742059',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                margin: '0px 0px 0px 0px',
                height: 'auto',
                overflowY: 'hidden',
                background: '#FFFFFF',
                'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                'border-radius': '2px',
                'margin-bottom': '2.5px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_239728_742059')}
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                visible={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917_779465',
                  uid: 'Collapse_228917_779465',
                  type: 'Collapse',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  width: '100%',
                  margin: '0 0 16px 0',
                  padding: '20px 20px 20px 20px',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Collapse_228917_779465')
                }
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  visible={true}
                  header={'产品类'}
                  key={'2423448'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495_290662',
                    uid: 'CollapsePanel_5495_290662',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  style={{ minHeight: 40 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'CollapsePanel_5495_290662')
                  }
                  {...injectData}
                  uid="CollapsePanel_5495_290662"
                >
                  <GridView
                    name={'resultData'}
                    itemKey={'item'}
                    indexKey={'i'}
                    pieceData={[]}
                    defaultValue={[]}
                    isChecked={false}
                    isMultiple={true}
                    columnNum={1}
                    valueKey={'nodeKey'}
                    span={24}
                    vspace={16}
                    hspace={8}
                    isEditor={false}
                    fieldName={'data.chanpinlei.resultData'}
                    gridData={data?.chanpinlei?.resultData}
                    selectStyle={{ border: 'unset' }}
                    normalStyle={{ border: '0px solid' }}
                    $$componentItem={{
                      id: 'GridView_841399_438343',
                      uid: 'GridView_841399_438343',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'GridView_841399_438343')
                    }
                    {...injectData}
                    getEngineApis={() => {
                      return {
                        ...injectData.getEngineApis(),
                        MemoRenderer: {
                          renderer: null,
                          MemoLoopItem: (props: any) => {
                            const item = props[props.itemKey] ?? props?.item;
                            const i = props[props.indexKey] ?? props?.i;
                            return (
                              <>
                                <HorizontalView
                                  name={'左右布局'}
                                  visible={true}
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_754921',
                                    uid: 'HorizontalView_300975_754921',
                                    type: 'HorizontalView',
                                    ...componentItem,
                                  }}
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    padding: '0px 0px 0px 0px',
                                    width: '100%',
                                    height: '100%',
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'HorizontalView_300975_754921',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    className="View_View_575815_869566"
                                    name={'布局容器'}
                                    visible={true}
                                    $$componentItem={{
                                      id: 'View_575815_869566',
                                      uid: 'View_575815_869566',
                                      type: 'View',
                                      ...componentItem,
                                    }}
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      padding: '0px 0px 0px 0px',
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_575815_869566',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      visible={true}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405_295623',
                                        uid: 'Text_4120405_295623',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(
                                          r,
                                          'Text_4120405_295623',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    className="View_View_2657547_1613493"
                                    name={'布局容器'}
                                    visible={true}
                                    $$componentItem={{
                                      id: 'View_2657547_1613493',
                                      uid: 'View_2657547_1613493',
                                      type: 'View',
                                      ...componentItem,
                                    }}
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      padding: '0px 0px 0px 0px',
                                      width: '100%',
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_2657547_1613493',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <GridView
                                      name={'children'}
                                      itemKey={'c'}
                                      indexKey={'l'}
                                      pieceData={[]}
                                      defaultValue={[]}
                                      isChecked={false}
                                      isMultiple={true}
                                      columnNum={1}
                                      valueKey={'nodeKey'}
                                      span={'6'}
                                      vspace={16}
                                      hspace={8}
                                      isEditor={true}
                                      fieldName={
                                        'data.selectAlltreeNodeCode.resultData.children'
                                      }
                                      gridData={item?.children}
                                      normalStyle={{
                                        'border-radius': '2px',
                                        padding: '6px 12px',
                                        'background-color': '#f6f6f7',
                                      }}
                                      selectStyle={{
                                        'background-color': '#f0f6ff',
                                        'background-image':
                                          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAC6klEQVRYCb1XTUgUURz/zay27brqboRE2CmWgiCQ7CLkobp6iYjKDlFgCRF9XEoDOxgUJX3iEhgodahLnYSE6JBESJ46FVmBGBFBypq22s5u83+7/9m3s2/cebr6Dvve/+P3MW9n5u0CS41dHb+zBjdQQGuR4ICL3nMJR8uOqlw3VWiU5SqikJVkpOkuHOyZEX7HH8ZESdO3TOdn7WmSwGzU2UyZkYuUK7oKSnCx/1yEwtzui5X9wcV4YwCfpyyRdhi4SNffe7KGMbrfn4PztyBV5VWWg7Nd6tMikIEs4otABay2781/6TIOVMD2/UEc3htEW1dSmFA6kIFjiSgmvls4cWMWbx/E7DmJD19z32HJHshAvkaaoxEDr/qiaD41LafFWjjwApZ0VzrRfHr6qnIP/AgROJvJ9iyLgMEkpE0gg7UJ3GAtAhXYN4EXmAicFwIFqqECh4KFziUJVOCAjRi9l3vrEo0ngQpMgLFEDK1nC7e0koDBTfH8eUJIe7y5G8XT1ynML+Ri+iwhYDAV168D6CW5bUsAQ5drRXzr2V8qOSPgrOyFDKb81K8MGmImuo/VoCFqouXMDDIZGQE4Ht1gbut9PI/d26sw/G5RvIE4z7O4lb3A3OQ9G1lj+WD7QTKNC9oPk7cbvQobX3MDLMx218yAW3jNDHgJr7qBcsKrZsCvcMUN6ApXzIBf4UjIwOClWnyctHDl0Rzr6x+qjPQrTP1d7WEcaA3ixegCrj2ZZwoxaz+GOsJ7dlajr7MGhq3SefsPxj/ZPwddw7cBlfDIzXrUhQ0MDKcw+DIFK39SbKyn7a7Dpg0mJn9aONqbRGrRpZwPyxpQCctUR/YFcfFQWKTSVhbffliIN+YOqaGRFO4/Lz7/ZCytPQ2UE5aJquxTNXE+gqZ4tUiTkePXZ8UNJ/ep1iUGdITdhFs3m+hoC6F7YA7pwk9wd1tR7BhYiXARo1ZgTKzoPNfScpoN+kP9xTDR/z4RvfMfZJBzTPeTIF8AAAAASUVORK5CYII=)',
                                        'background-size': '20px',
                                        'background-position': 'right bottom',
                                        'background-repeat': 'no-repeat',
                                        border: '1px solid rgba(51,102,238,1)',
                                        'border-radius': '2px',
                                      }}
                                      $$componentItem={{
                                        id: 'GridView_959384_5210218',
                                        uid: 'GridView_959384_5210218',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode827: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 166341201878355260,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '145555',
                                                pageJsonId: '866861',
                                                code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
                                              },
                                              line_number: 1,
                                              callback1: [
                                                {
                                                  type: 'setDataSource',
                                                  dataId: 166341201878350820,
                                                  options: {
                                                    compId: 'setDataSource',
                                                    compName: 'page',
                                                    id: '8870564',
                                                    pageJsonId: '866861',
                                                    dataSourceId: 166341035337970140,
                                                    dataSourceName:
                                                      'selectedNodes',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceReloadFilter: [],
                                                    dataSourceSetValue: [
                                                      {
                                                        attrId: '142214',
                                                        code: 'nodes',
                                                        name: '属性',
                                                        type: 'object',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$data_145555$',
                                                          ],
                                                          code: '',
                                                        },
                                                      },
                                                    ],
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                  },
                                                  line_number: 2,
                                                  callback1: [
                                                    {
                                                      type: 'console',
                                                      dataId: 166341201878396350,
                                                      options: {
                                                        compId: 'debug',
                                                        compName: 'system',
                                                        id: '662563',
                                                        pageJsonId: '866861',
                                                        value: [
                                                          '$data.selectedNodes$',
                                                        ],
                                                      },
                                                      line_number: 3,
                                                    },
                                                  ],
                                                  callback2: [],
                                                },
                                              ],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode827.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode827,
                                          { vals, item, i },
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
                                        refs.setComponentRef(
                                          r,
                                          'GridView_959384_5210218',
                                        )
                                      }
                                      {...injectData}
                                      getEngineApis={() => {
                                        return {
                                          ...injectData.getEngineApis(),
                                          MemoRenderer: {
                                            renderer: null,
                                            MemoLoopItem: (props: any) => {
                                              const item =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const i =
                                                props[props.indexKey] ??
                                                props?.i;
                                              const c =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const l =
                                                props[props.indexKey] ??
                                                props?.i;
                                              return (
                                                <>
                                                  <View
                                                    className="View_View_9189376_823331"
                                                    name={'布局容器'}
                                                    visible={true}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376_823331',
                                                      uid: 'View_9189376_823331',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    style={{
                                                      display: 'block',
                                                      flexDirection: 'column',
                                                      padding:
                                                        '0px 0px 0px 0px',
                                                      width: '100%',
                                                    }}
                                                    ref={(r: any) =>
                                                      refs.setComponentRef(
                                                        r,
                                                        'View_9189376_823331',
                                                      )
                                                    }
                                                    {...injectData}
                                                  >
                                                    <Popover
                                                      options={{
                                                        tipType: '2',
                                                        trigger: 'click',
                                                        content:
                                                          'OA已实现该场景',
                                                      }}
                                                      id={'Icon_724045_889597'}
                                                      {...injectData}
                                                      parentEngineId={
                                                        parentEngineId
                                                      }
                                                    >
                                                      <Icon
                                                        name={'图标'}
                                                        rotate={0}
                                                        icon={{
                                                          type: 'info-circle',
                                                          theme: 'outlined',
                                                          fontAddress: '',
                                                          isIconFont: false,
                                                          iconFileInfo: {},
                                                        }}
                                                        $$componentItem={{
                                                          id: 'Icon_724045_889597',
                                                          uid: 'Icon_724045_889597',
                                                          type: 'Icon',
                                                          ...componentItem,
                                                        }}
                                                        disabled={false}
                                                        visible={true}
                                                        readOnly={false}
                                                        style={{
                                                          'margin-right':
                                                            '10px',
                                                          color: 'unset',
                                                        }}
                                                        ref={(r: any) =>
                                                          refs.setComponentRef(
                                                            r,
                                                            'Icon_724045_889597',
                                                          )
                                                        }
                                                        {...injectData}
                                                      />
                                                    </Popover>
                                                    <Text
                                                      name={'文本'}
                                                      visible={true}
                                                      content={item?.nodeValue}
                                                      textType={'span'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_968473_0492097',
                                                        uid: 'Text_968473_0492097',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      style={{
                                                        fontSize: '14px',
                                                        lineHeight: '24px',
                                                        color: 'unset',
                                                      }}
                                                      ref={(r: any) =>
                                                        refs.setComponentRef(
                                                          r,
                                                          'Text_968473_0492097',
                                                        )
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
                                </HorizontalView>
                              </>
                            );
                          },
                        },
                      };
                    }}
                  />
                </CollapsePanel>
              </Collapse>
            </View>
            <View
              className="View_View_239728_9872634"
              name={'布局容器44'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_9872634',
                uid: 'View_239728_9872634',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                margin: '0px 0px 0px 0px',
                height: 'auto',
                overflowY: 'hidden',
                background: '#FFFFFF',
                'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                'border-radius': '2px',
                'margin-bottom': '2.5px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_239728_9872634')}
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                visible={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917_310864',
                  uid: 'Collapse_228917_310864',
                  type: 'Collapse',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  width: '100%',
                  margin: '0 0 16px 0',
                  padding: '20px 20px 20px 20px',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Collapse_228917_310864')
                }
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  visible={true}
                  header={'营销案类'}
                  key={'626254'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495_8462436',
                    uid: 'CollapsePanel_5495_8462436',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  style={{ minHeight: 40 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'CollapsePanel_5495_8462436')
                  }
                  {...injectData}
                  uid="CollapsePanel_5495_8462436"
                >
                  <GridView
                    name={'resultData'}
                    itemKey={'item'}
                    indexKey={'i'}
                    pieceData={[]}
                    defaultValue={[]}
                    isChecked={false}
                    isMultiple={false}
                    columnNum={1}
                    valueKey={'nodeKey'}
                    span={24}
                    vspace={16}
                    hspace={8}
                    isEditor={false}
                    fieldName={'data.yingxiaoanlei.resultData'}
                    gridData={data?.yingxiaoanlei?.resultData}
                    selectStyle={{ border: '0px solid' }}
                    normalStyle={{ border: '0px solid' }}
                    $$componentItem={{
                      id: 'GridView_841399_31317',
                      uid: 'GridView_841399_31317',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'GridView_841399_31317')
                    }
                    {...injectData}
                    getEngineApis={() => {
                      return {
                        ...injectData.getEngineApis(),
                        MemoRenderer: {
                          renderer: null,
                          MemoLoopItem: (props: any) => {
                            const item = props[props.itemKey] ?? props?.item;
                            const i = props[props.indexKey] ?? props?.i;
                            return (
                              <>
                                <HorizontalView
                                  name={'左右布局'}
                                  visible={true}
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_674423',
                                    uid: 'HorizontalView_300975_674423',
                                    type: 'HorizontalView',
                                    ...componentItem,
                                  }}
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    padding: '0px 0px 0px 0px',
                                    width: '100%',
                                    height: '100%',
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'HorizontalView_300975_674423',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    className="View_View_575815_656931"
                                    name={'布局容器'}
                                    visible={true}
                                    $$componentItem={{
                                      id: 'View_575815_656931',
                                      uid: 'View_575815_656931',
                                      type: 'View',
                                      ...componentItem,
                                    }}
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      padding: '0px 0px 0px 0px',
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_575815_656931',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      visible={true}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405_1898459',
                                        uid: 'Text_4120405_1898459',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(
                                          r,
                                          'Text_4120405_1898459',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    className="View_View_2657547_363083"
                                    name={'布局容器'}
                                    visible={true}
                                    $$componentItem={{
                                      id: 'View_2657547_363083',
                                      uid: 'View_2657547_363083',
                                      type: 'View',
                                      ...componentItem,
                                    }}
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      padding: '0px 0px 0px 0px',
                                      width: '100%',
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_2657547_363083',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <GridView
                                      name={'children'}
                                      itemKey={'c'}
                                      indexKey={'l'}
                                      pieceData={[]}
                                      defaultValue={[]}
                                      isChecked={false}
                                      isMultiple={true}
                                      columnNum={1}
                                      valueKey={'nodeKey'}
                                      span={'6'}
                                      vspace={16}
                                      hspace={8}
                                      isEditor={true}
                                      fieldName={
                                        'data.selectAlltreeNodeCode.resultData.children'
                                      }
                                      gridData={item?.children}
                                      normalStyle={{
                                        'border-radius': '2px',
                                        padding: '6px 12px',
                                        'background-color': '#f6f6f7',
                                      }}
                                      selectStyle={{
                                        'background-color': '#f0f6ff',
                                        'background-image':
                                          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAC6klEQVRYCb1XTUgUURz/zay27brqboRE2CmWgiCQ7CLkobp6iYjKDlFgCRF9XEoDOxgUJX3iEhgodahLnYSE6JBESJ46FVmBGBFBypq22s5u83+7/9m3s2/cebr6Dvve/+P3MW9n5u0CS41dHb+zBjdQQGuR4ICL3nMJR8uOqlw3VWiU5SqikJVkpOkuHOyZEX7HH8ZESdO3TOdn7WmSwGzU2UyZkYuUK7oKSnCx/1yEwtzui5X9wcV4YwCfpyyRdhi4SNffe7KGMbrfn4PztyBV5VWWg7Nd6tMikIEs4otABay2781/6TIOVMD2/UEc3htEW1dSmFA6kIFjiSgmvls4cWMWbx/E7DmJD19z32HJHshAvkaaoxEDr/qiaD41LafFWjjwApZ0VzrRfHr6qnIP/AgROJvJ9iyLgMEkpE0gg7UJ3GAtAhXYN4EXmAicFwIFqqECh4KFziUJVOCAjRi9l3vrEo0ngQpMgLFEDK1nC7e0koDBTfH8eUJIe7y5G8XT1ynML+Ri+iwhYDAV168D6CW5bUsAQ5drRXzr2V8qOSPgrOyFDKb81K8MGmImuo/VoCFqouXMDDIZGQE4Ht1gbut9PI/d26sw/G5RvIE4z7O4lb3A3OQ9G1lj+WD7QTKNC9oPk7cbvQobX3MDLMx218yAW3jNDHgJr7qBcsKrZsCvcMUN6ApXzIBf4UjIwOClWnyctHDl0Rzr6x+qjPQrTP1d7WEcaA3ixegCrj2ZZwoxaz+GOsJ7dlajr7MGhq3SefsPxj/ZPwddw7cBlfDIzXrUhQ0MDKcw+DIFK39SbKyn7a7Dpg0mJn9aONqbRGrRpZwPyxpQCctUR/YFcfFQWKTSVhbffliIN+YOqaGRFO4/Lz7/ZCytPQ2UE5aJquxTNXE+gqZ4tUiTkePXZ8UNJ/ep1iUGdITdhFs3m+hoC6F7YA7pwk9wd1tR7BhYiXARo1ZgTKzoPNfScpoN+kP9xTDR/z4RvfMfZJBzTPeTIF8AAAAASUVORK5CYII=)',
                                        'background-size': '20px',
                                        'background-position': 'right bottom',
                                        'background-repeat': 'no-repeat',
                                        border: '1px solid rgba(51,102,238,1)',
                                        'border-radius': '2px',
                                      }}
                                      $$componentItem={{
                                        id: 'GridView_959384_69925',
                                        uid: 'GridView_959384_69925',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode829: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 166341202560875000,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '6116046',
                                                pageJsonId: '866861',
                                                code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
                                              },
                                              line_number: 1,
                                              callback1: [
                                                {
                                                  type: 'setDataSource',
                                                  dataId: 166341202560819170,
                                                  options: {
                                                    compId: 'setDataSource',
                                                    compName: 'page',
                                                    id: '469779',
                                                    pageJsonId: '866861',
                                                    dataSourceId: 166341035337970140,
                                                    dataSourceName:
                                                      'selectedNodes',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceReloadFilter: [],
                                                    dataSourceSetValue: [
                                                      {
                                                        attrId: '142214',
                                                        code: 'nodes',
                                                        name: '属性',
                                                        type: 'object',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$data_6116046$',
                                                          ],
                                                          code: '',
                                                        },
                                                      },
                                                    ],
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                  },
                                                  line_number: 2,
                                                  callback1: [
                                                    {
                                                      type: 'console',
                                                      dataId: 166341202560841860,
                                                      options: {
                                                        compId: 'debug',
                                                        compName: 'system',
                                                        id: '4987314',
                                                        pageJsonId: '866861',
                                                        value: [
                                                          '$data.selectedNodes$',
                                                        ],
                                                      },
                                                      line_number: 3,
                                                    },
                                                  ],
                                                  callback2: [],
                                                },
                                              ],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode829.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode829,
                                          { vals, item, i },
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
                                        refs.setComponentRef(
                                          r,
                                          'GridView_959384_69925',
                                        )
                                      }
                                      {...injectData}
                                      getEngineApis={() => {
                                        return {
                                          ...injectData.getEngineApis(),
                                          MemoRenderer: {
                                            renderer: null,
                                            MemoLoopItem: (props: any) => {
                                              const item =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const i =
                                                props[props.indexKey] ??
                                                props?.i;
                                              const c =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const l =
                                                props[props.indexKey] ??
                                                props?.i;
                                              return (
                                                <>
                                                  <View
                                                    className="View_View_9189376_722286"
                                                    name={'布局容器'}
                                                    visible={true}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376_722286',
                                                      uid: 'View_9189376_722286',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    style={{
                                                      display: 'block',
                                                      flexDirection: 'column',
                                                      padding:
                                                        '0px 0px 0px 0px',
                                                      width: '100%',
                                                    }}
                                                    ref={(r: any) =>
                                                      refs.setComponentRef(
                                                        r,
                                                        'View_9189376_722286',
                                                      )
                                                    }
                                                    {...injectData}
                                                  >
                                                    <Popover
                                                      options={{
                                                        tipType: '2',
                                                        trigger: 'click',
                                                        content:
                                                          'OA已实现该场景',
                                                      }}
                                                      id={'Icon_724045_232884'}
                                                      {...injectData}
                                                      parentEngineId={
                                                        parentEngineId
                                                      }
                                                    >
                                                      <Icon
                                                        name={'图标'}
                                                        rotate={0}
                                                        icon={{
                                                          type: 'info-circle',
                                                          theme: 'outlined',
                                                          fontAddress: '',
                                                          isIconFont: false,
                                                          iconFileInfo: {},
                                                        }}
                                                        $$componentItem={{
                                                          id: 'Icon_724045_232884',
                                                          uid: 'Icon_724045_232884',
                                                          type: 'Icon',
                                                          ...componentItem,
                                                        }}
                                                        disabled={false}
                                                        visible={true}
                                                        readOnly={false}
                                                        style={{
                                                          'margin-right':
                                                            '10px',
                                                          color: 'unset',
                                                        }}
                                                        ref={(r: any) =>
                                                          refs.setComponentRef(
                                                            r,
                                                            'Icon_724045_232884',
                                                          )
                                                        }
                                                        {...injectData}
                                                      />
                                                    </Popover>
                                                    <Text
                                                      name={'文本'}
                                                      visible={true}
                                                      content={item?.nodeValue}
                                                      textType={'span'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_968473_797346',
                                                        uid: 'Text_968473_797346',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      style={{
                                                        fontSize: '14px',
                                                        lineHeight: '24px',
                                                        color: 'unset',
                                                      }}
                                                      ref={(r: any) =>
                                                        refs.setComponentRef(
                                                          r,
                                                          'Text_968473_797346',
                                                        )
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
                                </HorizontalView>
                              </>
                            );
                          },
                        },
                      };
                    }}
                  />
                </CollapsePanel>
              </Collapse>
            </View>
          </View>
          <View
            className="View_View_21611"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_21611',
              uid: 'View_21611',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 24px 0px 24px',
              width: '100%',
              height: '52px',
              justifyContent: 'center',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_21611')}
            {...injectData}
          >
            <VerticalView
              name={'上下布局'}
              visible={true}
              $$componentItem={{
                id: 'VerticalView_2049022',
                uid: 'VerticalView_2049022',
                type: 'VerticalView',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: 'auto',
                height: 'auto',
                overflowY: 'auto',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'VerticalView_2049022')}
              {...injectData}
            >
              <View
                className="View_View_971858"
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_971858',
                  uid: 'View_971858',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  height: 'auto',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_971858')}
                {...injectData}
              >
                <Text
                  name={'属性'}
                  visible={true}
                  content={
                    '已选择场景提示：' +
                    Object?.values((data?.selectedNodes || {})?.nodes || {})
                      ?.flat()
                      ?.map(function (e) {
                        return e?.nodeValue;
                      })
                      ?.join(' | ')
                  }
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  formItemIndex={0}
                  fieldName={'data.selectedNodes.nodes'}
                  $$componentItem={{
                    id: 'Text_8788706_543971',
                    uid: 'Text_8788706_543971',
                    type: 'Text',
                    ...componentItem,
                  }}
                  style={{
                    fontSize: 16,
                    lineHeight: '24px',
                    color: '#3a3d4b',
                    textAlign: 'left',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_8788706_543971')
                  }
                  {...injectData}
                />
                <View
                  className="View_View_772576"
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_772576',
                    uid: 'View_772576',
                    type: 'View',
                    ...componentItem,
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    height: '0A',
                    width: 'auto',
                    textAlign: 'right',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_772576')}
                  {...injectData}
                >
                  <Text
                    name={'内容'}
                    visible={true}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    formItemIndex={1}
                    $$componentItem={{
                      id: 'Text_8788706_2538147_5100973',
                      uid: 'Text_8788706_2538147_5100973',
                      type: 'Text',
                      ...componentItem,
                    }}
                    style={{
                      fontSize: 18,
                      lineHeight: '24px',
                      color: 'rgba(208, 2, 27, 1)',
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Text_8788706_2538147_5100973')
                    }
                    {...injectData}
                  />
                  <Button
                    name={'重选'}
                    shape={null}
                    visible={true}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    disabled={false}
                    type={'default'}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_355871',
                      uid: 'Button_355871',
                      type: 'Button',
                      ...componentItem,
                    }}
                    style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                    onClick={(e: any) => {
                      const eventDatacustomActionCode830: any = [
                        {
                          type: 'customActionCode',
                          dataId: 166418284911394300,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '424554',
                            pageJsonId: '866861',
                            actionTitle: '',
                            code: 'function main(data,state,success,fail){success({})};',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 166418286169146700,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '20136',
                                pageJsonId: '866861',
                                dataSourceId: 166341035337970140,
                                dataSourceName: 'selectedNodes',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '142214',
                                    code: 'nodes',
                                    name: '属性',
                                    type: 'object',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$data_424554$'],
                                      code: '',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: false,
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
                      eventDatacustomActionCode830.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode830,
                        { e },
                        'customActionCode',
                        {
                          id: 'customActionCode',
                          name: 'customActionCode',
                          type: 'customActionCode',
                          platform: 'pc',
                        },
                      );
                      const eventDatasetDataSource274: any = [
                        {
                          type: 'setDataSource',
                          dataId: 166998294016333730,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '7594643',
                            pageJsonId: '866861',
                            dataSourceId: 166998286643572320,
                            dataSourceName: 'emptyArray',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '5818224',
                                code: 'array',
                                name: '属性',
                                type: 'array',
                                initialData: { type: 'static', value: '$[]$' },
                                value: { type: ['customize'], code: '$[]$' },
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
                      eventDatasetDataSource274.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatasetDataSource274,
                        { e },
                        'setDataSource',
                        {
                          id: 'setDataSource',
                          name: 'setDataSource',
                          type: 'setDataSource',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_355871')}
                    {...injectData}
                  />
                  <Button
                    name={'下一步'}
                    shape={null}
                    visible={true}
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
                      id: 'Button_665529',
                      uid: 'Button_665529',
                      type: 'Button',
                      ...componentItem,
                    }}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatacustomActionCode831: any = [
                        {
                          type: 'customActionCode',
                          dataId: 166521463232806140,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '1468628',
                            pageJsonId: '866861',
                            code: 'function main(data,state,success,fail){var _data$selectedNodes$n,_data$selectedNodes;var nodeMap=(_data$selectedNodes$n=data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)!==null&&_data$selectedNodes$n!==void 0?_data$selectedNodes$n:{};var nodeKeys=Object.values(nodeMap).flat().map(function(e){return e.nodeKey});success(nodeKeys)};',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '785417',
                                  options: {
                                    context: '$data_1468628$',
                                    operate: 'empty',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166521463232841380,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166521466482461900,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166721809852489150,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 166721809852496350,
                                          children: [
                                            {
                                              dataName: 'condition',
                                              dataId: 166721809852474780,
                                              children: [
                                                {
                                                  dataName: 'condition',
                                                  dataId: 166970218852495970,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 166970228758071520,
                                                      children: [],
                                                      todoOptions: [
                                                        'downloadUrl',
                                                      ],
                                                      options: {
                                                        compId:
                                                          'setDownloadResponse',
                                                        compName: 'system',
                                                        id: '4939155',
                                                        pageJsonId: '866861',
                                                        paramsObj: {
                                                          downloadUrl:
                                                            '$reply_450202?.resultData.url$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          downloadUrl:
                                                            '$reply_450202?.resultData.url$',
                                                        },
                                                      },
                                                      actionObjId:
                                                        'setDownloadResponse',
                                                      actionObjName: 'system',
                                                      value:
                                                        'setDownloadResponse',
                                                      line_number: 7,
                                                    },
                                                  ],
                                                  elseIfs: [
                                                    {
                                                      dataName: 'elseIf',
                                                      dataId: 166970223193997980,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 166970223607644860,
                                                          children: [],
                                                          todoOptions: [
                                                            'historyType',
                                                            'pathname',
                                                            'searchParams',
                                                          ],
                                                          options: {
                                                            compId: 'history',
                                                            compName: 'system',
                                                            id: '902797',
                                                            pageJsonId:
                                                              '866861',
                                                            type: 'push',
                                                            pathname:
                                                              '/auditOrderPrepare',
                                                            selectedType:
                                                              'page',
                                                            paramsObj: {
                                                              pageUrl:
                                                                '$JSON.stringify(data_1468628)$',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                              },
                                                            pageId:
                                                              '884045146848604160',
                                                            modalPath:
                                                              '/auditOrderPrepare',
                                                          },
                                                          actionObjId:
                                                            'history',
                                                          actionObjName:
                                                            'system',
                                                          value: 'history',
                                                          elseIfs: [],
                                                          line_number: 8,
                                                        },
                                                      ],
                                                      condition: [],
                                                      elseIfs: [],
                                                      callback: [
                                                        {
                                                          type: 'history',
                                                          dataId: 166970223607644860,
                                                          options: {
                                                            compId: 'history',
                                                            compName: 'system',
                                                            id: '902797',
                                                            pageJsonId:
                                                              '866861',
                                                            type: 'push',
                                                            pathname:
                                                              '/auditOrderPrepare',
                                                            selectedType:
                                                              'page',
                                                            paramsObj: {
                                                              pageUrl:
                                                                '$JSON.stringify(data_1468628)$',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                              },
                                                            pageId:
                                                              '884045146848604160',
                                                            modalPath:
                                                              '/auditOrderPrepare',
                                                          },
                                                          line_number: 8,
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                  condition: [
                                                    {
                                                      condId: '670158',
                                                      options: {
                                                        context:
                                                          '$reply_450202?.resultData.url$',
                                                        operate: 'notEmpty',
                                                        manualValue: '',
                                                      },
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  line_number: 6,
                                                },
                                              ],
                                              elseIfs: [
                                                {
                                                  dataName: 'elseIf',
                                                  dataId: 166721809852442500,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 166721814799440160,
                                                      children: [],
                                                      todoOptions: [
                                                        'msgType',
                                                        'value',
                                                      ],
                                                      options: {
                                                        compId: 'showMessage',
                                                        compName: 'system',
                                                        id: '7552852',
                                                        pageJsonId: '866861',
                                                        type: 'error',
                                                        value:
                                                          '$reply_450202?.resultData.desc$',
                                                      },
                                                      actionObjId:
                                                        'showMessage',
                                                      actionObjName: 'system',
                                                      value: 'showMessage',
                                                      elseIfs: [],
                                                      line_number: 9,
                                                    },
                                                  ],
                                                  condition: [],
                                                  elseIfs: [],
                                                  callback: [
                                                    {
                                                      type: 'showMessage',
                                                      dataId: 166721814799440160,
                                                      options: {
                                                        compId: 'showMessage',
                                                        compName: 'system',
                                                        id: '7552852',
                                                        pageJsonId: '866861',
                                                        type: 'error',
                                                        value:
                                                          '$reply_450202?.resultData.desc$',
                                                      },
                                                      line_number: 9,
                                                    },
                                                  ],
                                                },
                                              ],
                                              condition: [
                                                {
                                                  condId: '872544',
                                                  options: {
                                                    useManual: true,
                                                    useObject: false,
                                                    context:
                                                      '$reply_450202?.resultData.isMutualExc$',
                                                    operate: '==',
                                                    manualValue: '1',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              line_number: 5,
                                            },
                                          ],
                                          value: 'callback1',
                                          params: [],
                                          elseIfs: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 166721809852487230,
                                          children: [],
                                          value: 'callback2',
                                          params: [],
                                          elseIfs: [],
                                        },
                                      ],
                                      todoOptions: [
                                        'actionTitle',
                                        'sync',
                                        'url',
                                        'params',
                                      ],
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '450202',
                                        pageJsonId: '866861',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'sceneMutualExclusion',
                                        _apiCode: 'sceneMutualExclusion',
                                        _source: 'rhin',
                                        _serviceId: '902944059799007232',
                                        _serviceTitle:
                                          '判断选中场景是否互斥-hdb: sceneMutualExclusion',
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
                                            dataKey: '951469_header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            _id: 'path',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'path',
                                            dataKey: '951469_path',
                                          },
                                          {
                                            code: 'query',
                                            name: 'URL 参数',
                                            attrType: 'object',
                                            _id: 'query',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'query',
                                            dataKey: '951469_query',
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
                                                dataKey:
                                                  '951469_body.catalogCode',
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_1468628.join(",")$',
                                                },
                                              },
                                            ],
                                            _id: 'body',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'body',
                                            dataKey: '951469_body',
                                          },
                                        ],
                                      },
                                      actionObjId: 'apiRequest',
                                      actionObjName: 'system',
                                      value: 'apiRequest',
                                      elseIfs: [],
                                      line_number: 4,
                                    },
                                  ],
                                  condition: [],
                                  elseIfs: [],
                                  callback: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 166721809852489150,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '450202',
                                        pageJsonId: '866861',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'sceneMutualExclusion',
                                        _apiCode: 'sceneMutualExclusion',
                                        _source: 'rhin',
                                        _serviceId: '902944059799007232',
                                        _serviceTitle:
                                          '判断选中场景是否互斥-hdb: sceneMutualExclusion',
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
                                            dataKey: '951469_header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            _id: 'path',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'path',
                                            dataKey: '951469_path',
                                          },
                                          {
                                            code: 'query',
                                            name: 'URL 参数',
                                            attrType: 'object',
                                            _id: 'query',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'query',
                                            dataKey: '951469_query',
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
                                                dataKey:
                                                  '951469_body.catalogCode',
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_1468628.join(",")$',
                                                },
                                              },
                                            ],
                                            _id: 'body',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'body',
                                            dataKey: '951469_body',
                                          },
                                        ],
                                      },
                                      line_number: 4,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '872544',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context:
                                                  '$reply_450202?.resultData.isMutualExc$',
                                                operate: '==',
                                                manualValue: '1',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 166721809852474780,
                                          elseIfs: [
                                            {
                                              dataName: 'elseIf',
                                              dataId: 166721809852442500,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 166721814799440160,
                                                  children: [],
                                                  todoOptions: [
                                                    'msgType',
                                                    'value',
                                                  ],
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '7552852',
                                                    pageJsonId: '866861',
                                                    type: 'error',
                                                    value:
                                                      '$reply_450202?.resultData.desc$',
                                                  },
                                                  actionObjId: 'showMessage',
                                                  actionObjName: 'system',
                                                  value: 'showMessage',
                                                  elseIfs: [],
                                                  line_number: 9,
                                                },
                                              ],
                                              condition: [],
                                              elseIfs: [],
                                              callback: [
                                                {
                                                  type: 'showMessage',
                                                  dataId: 166721814799440160,
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '7552852',
                                                    pageJsonId: '866861',
                                                    type: 'error',
                                                    value:
                                                      '$reply_450202?.resultData.desc$',
                                                  },
                                                  line_number: 9,
                                                },
                                              ],
                                            },
                                          ],
                                          line_number: 5,
                                          callback1: [
                                            {
                                              type: 'ifelse',
                                              condition: [
                                                {
                                                  condId: '670158',
                                                  options: {
                                                    context:
                                                      '$reply_450202?.resultData.url$',
                                                    operate: 'notEmpty',
                                                    manualValue: '',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              dataId: 166970218852495970,
                                              elseIfs: [
                                                {
                                                  dataName: 'elseIf',
                                                  dataId: 166970223193997980,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 166970223607644860,
                                                      children: [],
                                                      todoOptions: [
                                                        'historyType',
                                                        'pathname',
                                                        'searchParams',
                                                      ],
                                                      options: {
                                                        compId: 'history',
                                                        compName: 'system',
                                                        id: '902797',
                                                        pageJsonId: '866861',
                                                        type: 'push',
                                                        pathname:
                                                          '/auditOrderPrepare',
                                                        selectedType: 'page',
                                                        paramsObj: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                        },
                                                        pageId:
                                                          '884045146848604160',
                                                        modalPath:
                                                          '/auditOrderPrepare',
                                                      },
                                                      actionObjId: 'history',
                                                      actionObjName: 'system',
                                                      value: 'history',
                                                      elseIfs: [],
                                                      line_number: 8,
                                                    },
                                                  ],
                                                  condition: [],
                                                  elseIfs: [],
                                                  callback: [
                                                    {
                                                      type: 'history',
                                                      dataId: 166970223607644860,
                                                      options: {
                                                        compId: 'history',
                                                        compName: 'system',
                                                        id: '902797',
                                                        pageJsonId: '866861',
                                                        type: 'push',
                                                        pathname:
                                                          '/auditOrderPrepare',
                                                        selectedType: 'page',
                                                        paramsObj: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                        },
                                                        pageId:
                                                          '884045146848604160',
                                                        modalPath:
                                                          '/auditOrderPrepare',
                                                      },
                                                      line_number: 8,
                                                    },
                                                  ],
                                                },
                                              ],
                                              line_number: 6,
                                              callback1: [
                                                {
                                                  type: 'setDownloadResponse',
                                                  dataId: 166970228758071520,
                                                  options: {
                                                    compId:
                                                      'setDownloadResponse',
                                                    compName: 'system',
                                                    id: '4939155',
                                                    pageJsonId: '866861',
                                                    paramsObj: {
                                                      downloadUrl:
                                                        '$reply_450202?.resultData.url$',
                                                    },
                                                    paramsObjKeyValueMap: {
                                                      downloadUrl:
                                                        '$reply_450202?.resultData.url$',
                                                    },
                                                  },
                                                  line_number: 7,
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
                              ],
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'showMessage',
                                  dataId: 166521465288014620,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '617149',
                                    pageJsonId: '866861',
                                    type: 'warn',
                                    value: '未选中场景',
                                  },
                                  line_number: 3,
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDatacustomActionCode831.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode831,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_665529')}
                    {...injectData}
                  />
                </View>
              </View>
            </VerticalView>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(GridViewTest$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
