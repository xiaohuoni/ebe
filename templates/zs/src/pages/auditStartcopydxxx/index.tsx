// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Input,
  Button,
  GridView,
  Collapse,
  CollapsePanel,
  HorizontalView,
  Text,
  Icon,
  VerticalView,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '958264556868681728';
const AuditStartcopydxxx$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode27: any = [
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
    eventDatacustomActionCode27.params =
      [
        {
          title: '事件入参',
          name: 'options_485879',
          value: '$options_485879$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode27,
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
    const eventDatagetValue14: any = [
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
            line_number: 2,
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
                line_number: 3,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
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
                      attrId: '951212',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
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
                      attrId: '053',
                      code: 'releaseChannel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: '1001' },
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
                        {
                          attrId: '349837',
                          code: 'nodeValue',
                          name: 'nodeValue',
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
            callback1: [
              {
                type: 'console',
                dataId: 167946903856097860,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '11798239',
                  pageJsonId: '866861',
                  value: ['$refData.current.selectAlltreeNodeCode$', '这个'],
                },
                line_number: 5,
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '704605',
                    options: {
                      context:
                        '$refData.current.selectAlltreeNodeCode.resultData.length$',
                      operate: '>',
                      useManual: true,
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_2211283$',
                      operate: 'notEmpty',
                    },
                    condId: '283289',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167947020562368130,
                elseIfs: [],
                line_number: 6,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167947020562376450,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '608698',
                      pageJsonId: '866861',
                      code: 'function main(data,state,success,fail){var activeKeyList=[];activeKeyList.push(1);success(activeKeyList)};',
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167947020562371000,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '6596858',
                          pageJsonId: '866861',
                          dataSourceId: 167945326037287900,
                          dataSourceName: 'activeKeyTyList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '5011336',
                              code: 'param',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          newData: '$data_608698$',
                          operateType: 3,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 8,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'console',
                    dataId: 167947020562305630,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '8884926',
                      pageJsonId: '866861',
                      value: ['进来1'],
                    },
                    line_number: 9,
                  },
                ],
              },
            ],
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
                      attrId: '536329',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
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
                      attrId: '017035',
                      code: 'releaseChannel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: '1001' },
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
                        {
                          attrId: '3696457',
                          code: 'nodeValue',
                          name: 'nodeValue',
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
            line_number: 10,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '704605',
                    options: {
                      context: '$refData.current.jichulei.resultData.length$',
                      operate: '>',
                      useManual: true,
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_2211283$',
                      operate: 'notEmpty',
                    },
                    condId: '555457',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167946817472884220,
                elseIfs: [],
                line_number: 11,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167946817472850400,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '8254127',
                      pageJsonId: '866861',
                      code: 'function main(data,state,success,fail){var activeKeyList=[];activeKeyList.push(2462862);success(activeKeyList)};',
                    },
                    line_number: 12,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167946817472848580,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '753975',
                          pageJsonId: '866861',
                          dataSourceId: 167946809637676670,
                          dataSourceName: 'activeKeyJcList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '200399',
                              code: 'param',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          newData: '$data_8254127$',
                          operateType: 3,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 13,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'console',
                    dataId: 167946930567288000,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '7205906',
                      pageJsonId: '866861',
                      value: ['进来2'],
                    },
                    line_number: 14,
                  },
                ],
              },
              {
                type: 'console',
                dataId: 167946905485731550,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '9764163',
                  pageJsonId: '866861',
                  value: ['$refData.current.jichulei$', '这个'],
                },
                line_number: 15,
              },
            ],
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
                      attrId: '124619',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
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
                      attrId: '999588',
                      code: 'releaseChannel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: '1001' },
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
                        {
                          attrId: '1126966',
                          code: 'nodeValue',
                          name: 'nodeValue',
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
            line_number: 16,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '704605',
                    options: {
                      context: '$refData.current.chanpinlei.resultData.length$',
                      operate: '>',
                      useManual: true,
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_2211283$',
                      operate: 'notEmpty',
                    },
                    condId: '971562',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167946817755054980,
                elseIfs: [],
                line_number: 17,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167946817755191520,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '5848713',
                      pageJsonId: '866861',
                      code: 'function main(data,state,success,fail){var activeKeyList=[];activeKeyList.push(2423448);success(activeKeyList)};',
                    },
                    line_number: 18,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167946817755140130,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '2937607',
                          pageJsonId: '866861',
                          dataSourceId: 167946812174602900,
                          dataSourceName: 'activeKeyCpList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '399925',
                              code: 'param',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          newData: '$data_5848713$',
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
                ],
              },
            ],
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
                      attrId: '3671',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
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
                      attrId: '394223',
                      code: 'releaseChannel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: '1001' },
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
                        {
                          attrId: '202486',
                          code: 'nodeValue',
                          name: 'nodeValue',
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
            line_number: 20,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '704605',
                    options: {
                      context:
                        '$refData.current.yingxiaoanlei.resultData.length$',
                      operate: '>',
                      useManual: true,
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_2211283$',
                      operate: 'notEmpty',
                    },
                    condId: '397169',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167946818032779460,
                elseIfs: [],
                line_number: 21,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167946818032714050,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '717722',
                      pageJsonId: '866861',
                      code: 'function main(data,state,success,fail){var activeKeyList=[];activeKeyList.push(626254);success(activeKeyList)};',
                    },
                    line_number: 22,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167946818032739360,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '699411',
                          pageJsonId: '866861',
                          dataSourceId: 167946815142258800,
                          dataSourceName: 'activeKeyYxaList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '223114',
                              code: 'param',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          newData: '$data_717722$',
                          operateType: 3,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 23,
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
    ];
    eventDatagetValue14.params =
      [
        {
          title: '事件入参',
          name: 'options_485601',
          value: '$options_485601$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue14, { options_485601 }, 'getValue', {
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
    const eventDataifelse75: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '4921483',
            options: {
              useManual: true,
              useObject: false,
              context: '$urlParam.origin$',
              operate: '==',
              manualValue: '0',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167145167099027330,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'setVisible',
            dataId: 167145169088039000,
            options: {
              compId: 'Button_3119094',
              compLib: 'comm',
              pageJsonId: '866861',
              compName: 'Button',
              id: '924952',
              visible: 'true',
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse75.params = [] || [];
    CMDGenerator(eventDataifelse75, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc15: any = [
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
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc15.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc15, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDatacustomActionCode224: any = [
      {
        type: 'customActionCode',
        dataId: 168007459466754660,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '677917',
          pageJsonId: '866861',
          code: 'function main(data,state,success,fail){var list=[];list.push({"id":"1"});list.push({"id":"12"});list.push({"id":"13"});success(list)};',
        },
        line_number: 4,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168007463429635870,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '336784',
              pageJsonId: '866861',
              dataSourceId: 168007457605479040,
              dataSourceName: 'list',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '663449',
                  code: 'id',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '211605',
                  code: 'param0',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              newData: '$data_677917$',
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
    ];
    eventDatacustomActionCode224.params = [] || [];
    CMDGenerator(eventDatacustomActionCode224, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
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
        className="View_View_866861_1_499427"
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_866861_1_499427',
          uid: 'View_866861_1_499427',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
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
        ref={(r: any) => refs.setComponentRef(r, 'View_866861_1_499427')}
        {...injectData}
      >
        <View
          className="View_View_129586_716682"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_129586_716682',
            uid: 'View_129586_716682',
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
            height: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_129586_716682')}
          {...injectData}
        >
          <View
            className="View_View_510588_174718"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_510588_174718',
              uid: 'View_510588_174718',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
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
            ref={(r: any) => refs.setComponentRef(r, 'View_510588_174718')}
            {...injectData}
          >
            <View
              className="View_View_782558_761403"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_782558_761403',
                uid: 'View_782558_761403',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '8px 50px 0px 0px',
                width: '50%',
                justifyContent: 'flex-start',
                height: '100%',
                textAlign: 'left',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_782558_761403')}
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
                  id: 'Input_5357175_016995',
                  uid: 'Input_5357175_016995',
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
                  const eventDatacallSelfFunc118: any = [
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
                  eventDatacallSelfFunc118.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc118,
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_5357175_016995')
                }
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
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_2259782_372491',
                  uid: 'Button_2259782_372491',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc119: any = [
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
                  eventDatacallSelfFunc119.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc119,
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_2259782_372491')
                }
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
                  id: 'Button_126807_042095',
                  uid: 'Button_126807_042095',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDataclearValue60: any = [
                    {
                      type: 'clearValue',
                      dataId: 166964671019617630,
                      options: {
                        compId: 'Input_5357175_016995',
                        compLib: 'comm',
                        pageJsonId: '866861',
                        compName: 'Input',
                        id: '7058787',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue60.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue60, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc120: any = [
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
                  eventDatacallSelfFunc120.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc120,
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_126807_042095')
                }
                {...injectData}
              />
            </View>
            <View
              className="View_View_2174641_570011"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_2174641_570011',
                uid: 'View_2174641_570011',
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
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_2174641_570011')}
              {...injectData}
            >
              <Button
                name={'我的草稿'}
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
                  id: 'Button_817728_949843',
                  uid: 'Button_817728_949843',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                style={{ width: 'fit-content', margin: '10px 0px 0px 0px' }}
                onClick={(e: any) => {
                  const eventDatahistory1: any = [
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
                  eventDatahistory1.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatahistory1, { e }, 'history', {
                    id: 'history',
                    name: 'history',
                    type: 'history',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Button_817728_949843')
                }
                {...injectData}
              />
            </View>
          </View>
          <View
            className="View_View_190796_154592"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_190796_154592',
              uid: 'View_190796_154592',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
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
            ref={(r: any) => refs.setComponentRef(r, 'View_190796_154592')}
            {...injectData}
          >
            <GridView
              name={'循环块'}
              itemKey={'item'}
              indexKey={'i'}
              pieceData={[]}
              defaultValue={[]}
              isChecked={false}
              isMultiple={false}
              columnNum={1}
              valueKey={'value'}
              span={24}
              vspace={16}
              hspace={16}
              isEditor={true}
              fieldName={'list'}
              gridData={data?.list}
              $$componentItem={{
                id: 'GridView_537727',
                uid: 'GridView_537727',
                type: 'GridView',
                ...componentItem,
              }}
              style={{ minHeight: 40 }}
              ref={(r: any) => refs.setComponentRef(r, 'GridView_537727')}
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
                          <View
                            className="View_View_239728_318504_11187854"
                            name={'布局容器1'}
                            backgroundType={{
                              type: 'cleanColor',
                              color: undefined,
                            }}
                            $$componentItem={{
                              id: 'View_239728_318504_11187854',
                              uid: 'View_239728_318504_11187854',
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
                              margin: '0px 0px 0px 0px',
                              height: '1A',
                              overflowY: 'hidden',
                              background: '#FFFFFF',
                              'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                              'border-radius': '2px',
                              'margin-bottom': '2.5px',
                            }}
                            ref={(r: any) =>
                              refs.setComponentRef(
                                r,
                                'View_239728_318504_11187854',
                              )
                            }
                            {...injectData}
                          >
                            <Collapse
                              name={'折叠面板'}
                              defaultActiveKey={[]}
                              expandIconPosition={'right'}
                              collapseType={''}
                              size={'default'}
                              bordered={true}
                              hasIcon={true}
                              cardIconType={'auto'}
                              prefixIcon={{
                                prefixIconTheme: 'outlined',
                                prefixIconType: 'folder-open',
                                prefixIconIsIconFont: false,
                              }}
                              extendProps={{}}
                              activeKey={data?.activeKeyTyList}
                              icon={{
                                type: undefined,
                                theme: 'outlined',
                                fontAddress: '',
                                isIconFont: false,
                                iconFileInfo: {},
                              }}
                              $$componentItem={{
                                id: 'Collapse_228917_630092_78374862',
                                uid: 'Collapse_228917_630092_78374862',
                                type: 'Collapse',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              style={{
                                width: '100%',
                                margin: '0 0 16px 0',
                                padding: '20px 20px 20px 20px',
                              }}
                              onChange={(key: any) => {
                                const eventDatacustomActionCode350: any = [
                                  {
                                    type: 'customActionCode',
                                    dataId: 167946747304968830,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '024746',
                                      pageJsonId: '866861',
                                      code: 'function main(data,state,success,fail){var ty=[];if(data.activeKeyTyList!=undefined&&data.activeKeyTyList>0){success(ty)}else{ty.push("1");success(ty)}};',
                                    },
                                    line_number: 1,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 167946760842313250,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '733104',
                                          pageJsonId: '866861',
                                          dataSourceId: 167945326037287900,
                                          dataSourceName: 'activeKeyTyList',
                                          dataSourceRelType: 'custom',
                                          dataSourceReloadFilter: [],
                                          dataSourceSetValue: [
                                            {
                                              attrId: '5011336',
                                              code: 'param',
                                              name: '属性',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                          ],
                                          newData: '$data_024746$',
                                          operateType: 3,
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
                                eventDatacustomActionCode350.params =
                                  [
                                    {
                                      title: '切换面板key',
                                      value: '$key$',
                                      name: 'key',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatacustomActionCode350,
                                  { key, item, i },
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
                                  'Collapse_228917_630092_78374862',
                                )
                              }
                              {...injectData}
                            >
                              <CollapsePanel
                                name={'折叠子面板'}
                                header={'通用类'}
                                key={'30813'}
                                cardIconType={'auto'}
                                prefixIconTheme={'outlined'}
                                prefixIconType={'folder-open'}
                                prefixIconIsIconFont={false}
                                $$componentItem={{
                                  id: 'CollapsePanel_5495_822432_193681',
                                  uid: 'CollapsePanel_5495_822432_193681',
                                  type: 'CollapsePanel',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{ minHeight: 40 }}
                                ref={(r: any) =>
                                  refs.setComponentRef(
                                    r,
                                    'CollapsePanel_5495_822432_193681',
                                  )
                                }
                                {...injectData}
                                uid="CollapsePanel_5495_822432_193681"
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
                                  fieldName={
                                    'data.selectAlltreeNodeCode.resultData'
                                  }
                                  gridData={
                                    data?.selectAlltreeNodeCode?.resultData
                                  }
                                  selectStyle={{ border: 'unset' }}
                                  normalStyle={{ border: '0px solid' }}
                                  $$componentItem={{
                                    id: 'GridView_841399_783335_4311996',
                                    uid: 'GridView_841399_783335_4311996',
                                    type: 'GridView',
                                    ...componentItem,
                                  }}
                                  style={{ minHeight: 40 }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'GridView_841399_783335_4311996',
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
                                            props[props.itemKey] ?? props?.item;
                                          const i =
                                            props[props.indexKey] ?? props?.i;
                                          return (
                                            <>
                                              <HorizontalView
                                                name={'左右布局'}
                                                $$componentItem={{
                                                  id: 'HorizontalView_300975_666132_026239',
                                                  uid: 'HorizontalView_300975_666132_026239',
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
                                                  overflowY: 'visible',
                                                }}
                                                ref={(r: any) =>
                                                  refs.setComponentRef(
                                                    r,
                                                    'HorizontalView_300975_666132_026239',
                                                  )
                                                }
                                                {...injectData}
                                              >
                                                <View
                                                  className="View_View_575815_83448_6103674"
                                                  name={'布局容器'}
                                                  $$componentItem={{
                                                    id: 'View_575815_83448_6103674',
                                                    uid: 'View_575815_83448_6103674',
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
                                                    width: '180px',
                                                    height: '100%',
                                                    overflowY: 'auto',
                                                    margin: '0px 16px 0px 0px',
                                                    'font-weight': 'bold',
                                                  }}
                                                  ref={(r: any) =>
                                                    refs.setComponentRef(
                                                      r,
                                                      'View_575815_83448_6103674',
                                                    )
                                                  }
                                                  {...injectData}
                                                >
                                                  <Text
                                                    name={'文本'}
                                                    content={item?.nodeValue}
                                                    textType={'span'}
                                                    version={'1.0'}
                                                    showHtml={false}
                                                    $$componentItem={{
                                                      id: 'Text_4120405_742913_9018896',
                                                      uid: 'Text_4120405_742913_9018896',
                                                      type: 'Text',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
                                                    style={{
                                                      fontSize: '14px',
                                                      lineHeight: '24px',
                                                      color: '#1c242e',
                                                      'font-weight': 'bold',
                                                    }}
                                                    ref={(r: any) =>
                                                      refs.setComponentRef(
                                                        r,
                                                        'Text_4120405_742913_9018896',
                                                      )
                                                    }
                                                    {...injectData}
                                                  />
                                                </View>
                                                <View
                                                  className="View_View_2657547_432902_594449"
                                                  name={'布局容器'}
                                                  $$componentItem={{
                                                    id: 'View_2657547_432902_594449',
                                                    uid: 'View_2657547_432902_594449',
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
                                                    height: '100%',
                                                    overflowY: 'visible',
                                                  }}
                                                  ref={(r: any) =>
                                                    refs.setComponentRef(
                                                      r,
                                                      'View_2657547_432902_594449',
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
                                                      'background-color':
                                                        '#f6f6f7',
                                                      color: '#575a66',
                                                    }}
                                                    selectStyle={{
                                                      'background-color':
                                                        '#f0f6ff',
                                                      'background-image':
                                                        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAC6klEQVRYCb1XTUgUURz/zay27brqboRE2CmWgiCQ7CLkobp6iYjKDlFgCRF9XEoDOxgUJX3iEhgodahLnYSE6JBESJ46FVmBGBFBypq22s5u83+7/9m3s2/cebr6Dvve/+P3MW9n5u0CS41dHb+zBjdQQGuR4ICL3nMJR8uOqlw3VWiU5SqikJVkpOkuHOyZEX7HH8ZESdO3TOdn7WmSwGzU2UyZkYuUK7oKSnCx/1yEwtzui5X9wcV4YwCfpyyRdhi4SNffe7KGMbrfn4PztyBV5VWWg7Nd6tMikIEs4otABay2781/6TIOVMD2/UEc3htEW1dSmFA6kIFjiSgmvls4cWMWbx/E7DmJD19z32HJHshAvkaaoxEDr/qiaD41LafFWjjwApZ0VzrRfHr6qnIP/AgROJvJ9iyLgMEkpE0gg7UJ3GAtAhXYN4EXmAicFwIFqqECh4KFziUJVOCAjRi9l3vrEo0ngQpMgLFEDK1nC7e0koDBTfH8eUJIe7y5G8XT1ynML+Ri+iwhYDAV168D6CW5bUsAQ5drRXzr2V8qOSPgrOyFDKb81K8MGmImuo/VoCFqouXMDDIZGQE4Ht1gbut9PI/d26sw/G5RvIE4z7O4lb3A3OQ9G1lj+WD7QTKNC9oPk7cbvQobX3MDLMx218yAW3jNDHgJr7qBcsKrZsCvcMUN6ApXzIBf4UjIwOClWnyctHDl0Rzr6x+qjPQrTP1d7WEcaA3ixegCrj2ZZwoxaz+GOsJ7dlajr7MGhq3SefsPxj/ZPwddw7cBlfDIzXrUhQ0MDKcw+DIFK39SbKyn7a7Dpg0mJn9aONqbRGrRpZwPyxpQCctUR/YFcfFQWKTSVhbffliIN+YOqaGRFO4/Lz7/ZCytPQ2UE5aJquxTNXE+gqZ4tUiTkePXZ8UNJ/ep1iUGdITdhFs3m+hoC6F7YA7pwk9wd1tR7BhYiXARo1ZgTKzoPNfScpoN+kP9xTDR/z4RvfMfZJBzTPeTIF8AAAAASUVORK5CYII=)',
                                                      'background-size': '20px',
                                                      'background-position':
                                                        'right bottom',
                                                      'background-repeat':
                                                        'no-repeat',
                                                      border:
                                                        '1px solid rgba(51,102,238,1)',
                                                      'border-radius': '2px',
                                                    }}
                                                    value={
                                                      data?.emptyArray?.array
                                                    }
                                                    $$componentItem={{
                                                      id: 'GridView_959384_123956_5913966',
                                                      uid: 'GridView_959384_123956_5913966',
                                                      type: 'GridView',
                                                      ...componentItem,
                                                    }}
                                                    style={{ minHeight: 40 }}
                                                    onChange={(vals: any) => {
                                                      const eventDatacustomActionCode352: any =
                                                        [
                                                          {
                                                            type: 'customActionCode',
                                                            dataId: 166341200368161340,
                                                            options: {
                                                              compId:
                                                                'customActionCode',
                                                              compName: 'page',
                                                              id: '8421537',
                                                              pageJsonId:
                                                                '866861',
                                                              code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
                                                            },
                                                            line_number: 1,
                                                            callback1: [
                                                              {
                                                                type: 'setDataSource',
                                                                dataId: 166341200368103420,
                                                                options: {
                                                                  compId:
                                                                    'setDataSource',
                                                                  compName:
                                                                    'page',
                                                                  id: '8998934',
                                                                  pageJsonId:
                                                                    '866861',
                                                                  dataSourceId: 166341035337970140,
                                                                  dataSourceName:
                                                                    'selectedNodes',
                                                                  dataSourceRelType:
                                                                    'custom',
                                                                  dataSourceReloadFilter:
                                                                    [],
                                                                  dataSourceSetValue:
                                                                    [
                                                                      {
                                                                        attrId:
                                                                          '142214',
                                                                        code: 'nodes',
                                                                        name: '属性',
                                                                        type: 'object',
                                                                        initialData:
                                                                          {
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
                                                                  otherObjectArrayOptions:
                                                                    {},
                                                                },
                                                                line_number: 2,
                                                                callback1: [
                                                                  {
                                                                    type: 'console',
                                                                    dataId: 166341200368168670,
                                                                    options: {
                                                                      compId:
                                                                        'debug',
                                                                      compName:
                                                                        'system',
                                                                      id: '9639415',
                                                                      pageJsonId:
                                                                        '866861',
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
                                                      eventDatacustomActionCode352.params =
                                                        [
                                                          {
                                                            title: '变化值',
                                                            value: '$vals$',
                                                            name: 'vals',
                                                          },
                                                        ] || [];
                                                      CMDGenerator(
                                                        eventDatacustomActionCode352,
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
                                                        'GridView_959384_123956_5913966',
                                                      )
                                                    }
                                                    {...injectData}
                                                    getEngineApis={() => {
                                                      return {
                                                        ...injectData.getEngineApis(),
                                                        MemoRenderer: {
                                                          renderer: null,
                                                          MemoLoopItem: (
                                                            props: any,
                                                          ) => {
                                                            const item =
                                                              props[
                                                                props.itemKey
                                                              ] ?? props?.item;
                                                            const i =
                                                              props[
                                                                props.indexKey
                                                              ] ?? props?.i;
                                                            const c =
                                                              props[
                                                                props.itemKey
                                                              ] ?? props?.item;
                                                            const l =
                                                              props[
                                                                props.indexKey
                                                              ] ?? props?.i;
                                                            return (
                                                              <>
                                                                <View
                                                                  className="View_View_9189376_873597_364986"
                                                                  name={
                                                                    '布局容器'
                                                                  }
                                                                  backgroundType={{
                                                                    type: 'cleanColor',
                                                                    color:
                                                                      undefined,
                                                                  }}
                                                                  $$componentItem={{
                                                                    id: 'View_9189376_873597_364986',
                                                                    uid: 'View_9189376_873597_364986',
                                                                    type: 'View',
                                                                    ...componentItem,
                                                                  }}
                                                                  disabled={
                                                                    false
                                                                  }
                                                                  visible={true}
                                                                  readOnly={
                                                                    false
                                                                  }
                                                                  style={{
                                                                    display:
                                                                      'block',
                                                                    flexDirection:
                                                                      'column',
                                                                    padding:
                                                                      '0px 0px 0px 0px',
                                                                    width:
                                                                      '100%',
                                                                  }}
                                                                  ref={(
                                                                    r: any,
                                                                  ) =>
                                                                    refs.setComponentRef(
                                                                      r,
                                                                      'View_9189376_873597_364986',
                                                                    )
                                                                  }
                                                                  {...injectData}
                                                                >
                                                                  <Popover
                                                                    options={{
                                                                      tipType:
                                                                        '2',
                                                                      trigger:
                                                                        'click',
                                                                      content:
                                                                        'OA已实现该场景',
                                                                    }}
                                                                    id={
                                                                      'Icon_724045_989345_4819206'
                                                                    }
                                                                    {...injectData}
                                                                    parentEngineId={
                                                                      parentEngineId
                                                                    }
                                                                  >
                                                                    <Icon
                                                                      name={
                                                                        '图标'
                                                                      }
                                                                      rotate={0}
                                                                      icon={{
                                                                        type: 'info-circle',
                                                                        theme:
                                                                          'outlined',
                                                                        fontAddress:
                                                                          '',
                                                                        isIconFont: false,
                                                                        iconFileInfo:
                                                                          {},
                                                                      }}
                                                                      $$componentItem={{
                                                                        id: 'Icon_724045_989345_4819206',
                                                                        uid: 'Icon_724045_989345_4819206',
                                                                        type: 'Icon',
                                                                        ...componentItem,
                                                                      }}
                                                                      disabled={
                                                                        false
                                                                      }
                                                                      visible={
                                                                        true
                                                                      }
                                                                      readOnly={
                                                                        false
                                                                      }
                                                                      style={{
                                                                        'margin-right':
                                                                          '10px',
                                                                        color:
                                                                          'unset',
                                                                      }}
                                                                      ref={(
                                                                        r: any,
                                                                      ) =>
                                                                        refs.setComponentRef(
                                                                          r,
                                                                          'Icon_724045_989345_4819206',
                                                                        )
                                                                      }
                                                                      {...injectData}
                                                                    />
                                                                  </Popover>
                                                                  <Text
                                                                    name={
                                                                      '文本'
                                                                    }
                                                                    content={
                                                                      item?.nodeValue
                                                                    }
                                                                    textType={
                                                                      'span'
                                                                    }
                                                                    version={
                                                                      '1.0'
                                                                    }
                                                                    showHtml={
                                                                      false
                                                                    }
                                                                    $$componentItem={{
                                                                      id: 'Text_968473_9399427_065682',
                                                                      uid: 'Text_968473_9399427_065682',
                                                                      type: 'Text',
                                                                      ...componentItem,
                                                                    }}
                                                                    style={{
                                                                      fontSize:
                                                                        '14px',
                                                                      lineHeight:
                                                                        '24px',
                                                                      color:
                                                                        'unset',
                                                                      letterSpacing:
                                                                        '',
                                                                    }}
                                                                    ref={(
                                                                      r: any,
                                                                    ) =>
                                                                      refs.setComponentRef(
                                                                        r,
                                                                        'Text_968473_9399427_065682',
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
                        </>
                      );
                    },
                  },
                };
              }}
            />
            <View
              className="View_View_239728_318504"
              name={'布局容器1'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_318504',
                uid: 'View_239728_318504',
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
                margin: '0px 0px 0px 0px',
                height: '1A',
                overflowY: 'hidden',
                background: '#FFFFFF',
                'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                'border-radius': '2px',
                'margin-bottom': '2.5px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_239728_318504')}
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                extendProps={{}}
                activeKey={data?.activeKeyTyList}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917_630092',
                  uid: 'Collapse_228917_630092',
                  type: 'Collapse',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  width: '100%',
                  margin: '0 0 16px 0',
                  padding: '20px 20px 20px 20px',
                }}
                onChange={(key: any) => {
                  const eventDatacustomActionCode353: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167946747304968830,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '024746',
                        pageJsonId: '866861',
                        code: 'function main(data,state,success,fail){var ty=[];if(data.activeKeyTyList!=undefined&&data.activeKeyTyList>0){success(ty)}else{ty.push("1");success(ty)}};',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167946760842313250,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '733104',
                            pageJsonId: '866861',
                            dataSourceId: 167945326037287900,
                            dataSourceName: 'activeKeyTyList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '5011336',
                                code: 'param',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            newData: '$data_024746$',
                            operateType: 3,
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
                  eventDatacustomActionCode353.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode353,
                    { key },
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
                  refs.setComponentRef(r, 'Collapse_228917_630092')
                }
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  header={'通用类'}
                  key={'1'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495_822432',
                    uid: 'CollapsePanel_5495_822432',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'CollapsePanel_5495_822432')
                  }
                  {...injectData}
                  uid="CollapsePanel_5495_822432"
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
                      id: 'GridView_841399_783335',
                      uid: 'GridView_841399_783335',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'GridView_841399_783335')
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
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_666132',
                                    uid: 'HorizontalView_300975_666132',
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
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'HorizontalView_300975_666132',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    className="View_View_575815_83448"
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815_83448',
                                      uid: 'View_575815_83448',
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
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                      'font-weight': 'bold',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_575815_83448',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405_742913',
                                        uid: 'Text_4120405_742913',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(
                                          r,
                                          'Text_4120405_742913',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    className="View_View_2657547_432902"
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547_432902',
                                      uid: 'View_2657547_432902',
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
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_2657547_432902',
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
                                      value={data?.emptyArray?.array}
                                      $$componentItem={{
                                        id: 'GridView_959384_123956',
                                        uid: 'GridView_959384_123956',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode355: any =
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
                                        eventDatacustomActionCode355.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode355,
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
                                          'GridView_959384_123956',
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
                                                    className="View_View_9189376_873597"
                                                    name={'布局容器'}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376_873597',
                                                      uid: 'View_9189376_873597',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
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
                                                        'View_9189376_873597',
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
                                                      id={'Icon_724045_989345'}
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
                                                          id: 'Icon_724045_989345',
                                                          uid: 'Icon_724045_989345',
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
                                                            'Icon_724045_989345',
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
                                                        id: 'Text_968473_9399427',
                                                        uid: 'Text_968473_9399427',
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
                                                          'Text_968473_9399427',
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
              className="View_View_239728_273135_979571"
              name={'布局容器2'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_273135_979571',
                uid: 'View_239728_273135_979571',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_239728_273135_979571')
              }
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                extendProps={{}}
                activeKey={data?.activeKeyJcList}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917_4750854_261815',
                  uid: 'Collapse_228917_4750854_261815',
                  type: 'Collapse',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  width: '100%',
                  margin: '0 0 16px 0',
                  padding: '20px 20px 20px 20px',
                }}
                onChange={(key: any) => {
                  const eventDatacustomActionCode356: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167946833343801900,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '85599506',
                        pageJsonId: '866861',
                        code: 'function main(data,state,success,fail){var jc=[];if(data.activeKeyJcList!=undefined&&data.activeKeyJcList>0){success(jc)}else{jc.push(2462862);success(jc)}};',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167946833343860200,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '443949',
                            pageJsonId: '866861',
                            dataSourceId: 167946809637676670,
                            dataSourceName: 'activeKeyJcList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '200399',
                                code: 'param',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            newData: '$data_85599506$',
                            operateType: 3,
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
                  eventDatacustomActionCode356.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode356,
                    { key },
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
                  refs.setComponentRef(r, 'Collapse_228917_4750854_261815')
                }
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  header={'基础类'}
                  key={'2462862'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495_629279_427171',
                    uid: 'CollapsePanel_5495_629279_427171',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'CollapsePanel_5495_629279_427171')
                  }
                  {...injectData}
                  uid="CollapsePanel_5495_629279_427171"
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
                      id: 'GridView_841399_5745795_485286',
                      uid: 'GridView_841399_5745795_485286',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    onChange={(vals: any) => {
                      // console 166313571472478560
                      console.log('父级数据', vals);
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'GridView_841399_5745795_485286')
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
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_2315523_007297',
                                    uid: 'HorizontalView_300975_2315523_007297',
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
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'HorizontalView_300975_2315523_007297',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    className="View_View_575815_624883_8128544"
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815_624883_8128544',
                                      uid: 'View_575815_624883_8128544',
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
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_575815_624883_8128544',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405_631164_223622',
                                        uid: 'Text_4120405_631164_223622',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(
                                          r,
                                          'Text_4120405_631164_223622',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    className="View_View_2657547_5801104_78533"
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547_5801104_78533',
                                      uid: 'View_2657547_5801104_78533',
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
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_2657547_5801104_78533',
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
                                        id: 'GridView_959384_121004_035285',
                                        uid: 'GridView_959384_121004_035285',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode358: any =
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
                                        eventDatacustomActionCode358.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode358,
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
                                          'GridView_959384_121004_035285',
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
                                                    className="View_View_9189376_858298_271293"
                                                    name={'布局容器'}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376_858298_271293',
                                                      uid: 'View_9189376_858298_271293',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
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
                                                        'View_9189376_858298_271293',
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
                                                      id={
                                                        'Icon_724045_443752_921304'
                                                      }
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
                                                          id: 'Icon_724045_443752_921304',
                                                          uid: 'Icon_724045_443752_921304',
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
                                                            'Icon_724045_443752_921304',
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
                                                        id: 'Text_968473_4695347_789088',
                                                        uid: 'Text_968473_4695347_789088',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        fontSize: '14px',
                                                        lineHeight: '24px',
                                                        color: 'unset',
                                                      }}
                                                      ref={(r: any) =>
                                                        refs.setComponentRef(
                                                          r,
                                                          'Text_968473_4695347_789088',
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
              className="View_View_239728_742059_908574"
              name={'布局容器3'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_742059_908574',
                uid: 'View_239728_742059_908574',
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
                margin: '0px 0px 0px 0px',
                height: 'auto',
                overflowY: 'hidden',
                background: '#FFFFFF',
                'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                'border-radius': '2px',
                'margin-bottom': '2.5px',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_239728_742059_908574')
              }
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                extendProps={{}}
                activeKey={data?.activeKeyCpList}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917_779465_218275',
                  uid: 'Collapse_228917_779465_218275',
                  type: 'Collapse',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  width: '100%',
                  margin: '0 0 16px 0',
                  padding: '20px 20px 20px 20px',
                }}
                onChange={(key: any) => {
                  const eventDatacustomActionCode359: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167946833880781800,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '187553',
                        pageJsonId: '866861',
                        code: 'function main(data,state,success,fail){var cp=[];if(data.activeKeyCpList!=undefined&&data.activeKeyCpList>0){success(cp)}else{cp.push(2423448);success(cp)}};',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167946833880732060,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '658145',
                            pageJsonId: '866861',
                            dataSourceId: 167946812174602900,
                            dataSourceName: 'activeKeyCpList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '399925',
                                code: 'param',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            newData: '$data_187553$',
                            operateType: 3,
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
                  eventDatacustomActionCode359.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode359,
                    { key },
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
                  refs.setComponentRef(r, 'Collapse_228917_779465_218275')
                }
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  header={'产品类'}
                  key={'2423448'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495_290662_803286',
                    uid: 'CollapsePanel_5495_290662_803286',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'CollapsePanel_5495_290662_803286')
                  }
                  {...injectData}
                  uid="CollapsePanel_5495_290662_803286"
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
                      id: 'GridView_841399_438343_5488',
                      uid: 'GridView_841399_438343_5488',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'GridView_841399_438343_5488')
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
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_754921_615198',
                                    uid: 'HorizontalView_300975_754921_615198',
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
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'HorizontalView_300975_754921_615198',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    className="View_View_575815_869566_336478"
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815_869566_336478',
                                      uid: 'View_575815_869566_336478',
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
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_575815_869566_336478',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405_295623_673117',
                                        uid: 'Text_4120405_295623_673117',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(
                                          r,
                                          'Text_4120405_295623_673117',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    className="View_View_2657547_1613493_219269"
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547_1613493_219269',
                                      uid: 'View_2657547_1613493_219269',
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
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_2657547_1613493_219269',
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
                                        id: 'GridView_959384_5210218_50628178',
                                        uid: 'GridView_959384_5210218_50628178',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode361: any =
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
                                        eventDatacustomActionCode361.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode361,
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
                                          'GridView_959384_5210218_50628178',
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
                                                    className="View_View_9189376_823331_237747"
                                                    name={'布局容器'}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376_823331_237747',
                                                      uid: 'View_9189376_823331_237747',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
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
                                                        'View_9189376_823331_237747',
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
                                                      id={
                                                        'Icon_724045_889597_626702'
                                                      }
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
                                                          id: 'Icon_724045_889597_626702',
                                                          uid: 'Icon_724045_889597_626702',
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
                                                            'Icon_724045_889597_626702',
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
                                                        id: 'Text_968473_0492097_608111',
                                                        uid: 'Text_968473_0492097_608111',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        fontSize: '14px',
                                                        lineHeight: '24px',
                                                        color: 'unset',
                                                      }}
                                                      ref={(r: any) =>
                                                        refs.setComponentRef(
                                                          r,
                                                          'Text_968473_0492097_608111',
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
              className="View_View_239728_9872634_84657"
              name={'布局容器4'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_9872634_84657',
                uid: 'View_239728_9872634_84657',
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
                margin: '0px 0px 0px 0px',
                height: 'auto',
                overflowY: 'hidden',
                background: '#FFFFFF',
                'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                'border-radius': '2px',
                'margin-bottom': '2.5px',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_239728_9872634_84657')
              }
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                extendProps={{}}
                activeKey={data?.activeKeyYxaList}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917_310864_255018',
                  uid: 'Collapse_228917_310864_255018',
                  type: 'Collapse',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  width: '100%',
                  margin: '0 0 16px 0',
                  padding: '20px 20px 20px 20px',
                }}
                onChange={(key: any) => {
                  const eventDatacustomActionCode362: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167946834292093760,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '046543',
                        pageJsonId: '866861',
                        code: 'function main(data,state,success,fail){var yxa=[];if(data.activeKeyYxaList!=undefined&&data.activeKeyYxaList>0){success(yxa)}else{yxa.push(626254);success(yxa)}};',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167946834292071970,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '453388',
                            pageJsonId: '866861',
                            dataSourceId: 167946815142258800,
                            dataSourceName: 'activeKeyYxaList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '223114',
                                code: 'param',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            newData: '$data_046543$',
                            operateType: 3,
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
                  eventDatacustomActionCode362.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode362,
                    { key },
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
                  refs.setComponentRef(r, 'Collapse_228917_310864_255018')
                }
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  header={'营销案类'}
                  key={'626254'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495_8462436_0759457',
                    uid: 'CollapsePanel_5495_8462436_0759457',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'CollapsePanel_5495_8462436_0759457',
                    )
                  }
                  {...injectData}
                  uid="CollapsePanel_5495_8462436_0759457"
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
                      id: 'GridView_841399_31317_765537',
                      uid: 'GridView_841399_31317_765537',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'GridView_841399_31317_765537')
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
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_674423_468611',
                                    uid: 'HorizontalView_300975_674423_468611',
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
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(
                                      r,
                                      'HorizontalView_300975_674423_468611',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    className="View_View_575815_656931_7176215"
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815_656931_7176215',
                                      uid: 'View_575815_656931_7176215',
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
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_575815_656931_7176215',
                                      )
                                    }
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405_1898459_760702',
                                        uid: 'Text_4120405_1898459_760702',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        refs.setComponentRef(
                                          r,
                                          'Text_4120405_1898459_760702',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    className="View_View_2657547_363083_267165"
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547_363083_267165',
                                      uid: 'View_2657547_363083_267165',
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
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) =>
                                      refs.setComponentRef(
                                        r,
                                        'View_2657547_363083_267165',
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
                                        id: 'GridView_959384_69925_548227',
                                        uid: 'GridView_959384_69925_548227',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode364: any =
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
                                        eventDatacustomActionCode364.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode364,
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
                                          'GridView_959384_69925_548227',
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
                                                    className="View_View_9189376_722286_1884202"
                                                    name={'布局容器'}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376_722286_1884202',
                                                      uid: 'View_9189376_722286_1884202',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
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
                                                        'View_9189376_722286_1884202',
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
                                                      id={
                                                        'Icon_724045_232884_033236'
                                                      }
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
                                                          id: 'Icon_724045_232884_033236',
                                                          uid: 'Icon_724045_232884_033236',
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
                                                            'Icon_724045_232884_033236',
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
                                                        id: 'Text_968473_797346_748646',
                                                        uid: 'Text_968473_797346_748646',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      disabled={false}
                                                      visible={true}
                                                      readOnly={false}
                                                      style={{
                                                        fontSize: '14px',
                                                        lineHeight: '24px',
                                                        color: 'unset',
                                                      }}
                                                      ref={(r: any) =>
                                                        refs.setComponentRef(
                                                          r,
                                                          'Text_968473_797346_748646',
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
            className="View_View_21611_0306224"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_21611_0306224',
              uid: 'View_21611_0306224',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 24px 0px 24px',
              width: '100%',
              height: '52px',
              justifyContent: 'center',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_21611_0306224')}
            {...injectData}
          >
            <VerticalView
              name={'上下布局'}
              $$componentItem={{
                id: 'VerticalView_2049022_156257',
                uid: 'VerticalView_2049022_156257',
                type: 'VerticalView',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: 'auto',
                height: 'auto',
                overflowY: 'auto',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'VerticalView_2049022_156257')
              }
              {...injectData}
            >
              <View
                className="View_View_971858_925512"
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_971858_925512',
                  uid: 'View_971858_925512',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  height: 'auto',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_971858_925512')}
                {...injectData}
              >
                <Text
                  name={'属性'}
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
                    id: 'Text_8788706_543971_7239151',
                    uid: 'Text_8788706_543971_7239151',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: 16,
                    lineHeight: '24px',
                    color: '#3a3d4b',
                    textAlign: 'left',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_8788706_543971_7239151')
                  }
                  {...injectData}
                />
                <View
                  className="View_View_772576_732094"
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_772576_732094',
                    uid: 'View_772576_732094',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    height: '0A',
                    width: 'auto',
                    textAlign: 'right',
                  }}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'View_772576_732094')
                  }
                  {...injectData}
                >
                  <Text
                    name={'内容'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    formItemIndex={1}
                    $$componentItem={{
                      id: 'Text_8788706_2538147_5100973_550189',
                      uid: 'Text_8788706_2538147_5100973_550189',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      fontSize: 18,
                      lineHeight: '24px',
                      color: 'rgba(208, 2, 27, 1)',
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(
                        r,
                        'Text_8788706_2538147_5100973_550189',
                      )
                    }
                    {...injectData}
                  />
                  <Button
                    name={'重选'}
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
                      id: 'Button_355871_403936',
                      uid: 'Button_355871_403936',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                    onClick={(e: any) => {
                      const eventDatacustomActionCode365: any = [
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
                            {
                              type: 'setDataSource',
                              dataId: 166998314323995740,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '516162',
                                pageJsonId: '866861',
                                dataSourceId: 166998306289677900,
                                dataSourceName: 'emptyArray',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '21708',
                                    code: 'array',
                                    name: '属性',
                                    type: 'array',
                                    initialData: {
                                      type: 'static',
                                      value: '$[]$',
                                    },
                                    value: {
                                      type: ['customize'],
                                      code: '$[]$',
                                    },
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
                      eventDatacustomActionCode365.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode365,
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Button_355871_403936')
                    }
                    {...injectData}
                  />
                  <Button
                    name={'下一步'}
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
                      id: 'Button_665529_269842',
                      uid: 'Button_665529_269842',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatacustomActionCode366: any = [
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
                                                              origin: '0',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                                origin: '0',
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
                                                              origin: '0',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                                origin: '0',
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
                                                          origin: '0',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '0',
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
                                                          origin: '0',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '0',
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
                      eventDatacustomActionCode366.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode366,
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Button_665529_269842')
                    }
                    {...injectData}
                  />
                  <Button
                    name={'返回'}
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
                      id: 'Button_3119094_913616',
                      uid: 'Button_3119094_913616',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                    onClick={(e: any) => {
                      const eventDatahistory2: any = [
                        {
                          type: 'history',
                          dataId: 167145189371188450,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '578628',
                            pageJsonId: '866861',
                            type: 'push',
                            pathname: '/approveWorkbench',
                            selectedType: 'page',
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatahistory2.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDatahistory2, { e }, 'history', {
                        id: 'history',
                        name: 'history',
                        type: 'history',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Button_3119094_913616')
                    }
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

export default withPageHOC(AuditStartcopydxxx$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
