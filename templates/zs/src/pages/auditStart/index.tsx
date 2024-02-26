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

const pageId = '887537833022541824';
const AuditStart$$Page: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode123: any = [
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
    eventDatacustomActionCode123.params =
      [
        {
          title: '事件入参',
          name: 'options_485879',
          value: '$options_485879$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode123,
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
    const eventDatagetValue77: any = [
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
    eventDatagetValue77.params =
      [
        {
          title: '事件入参',
          name: 'options_485601',
          value: '$options_485601$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue77, { options_485601 }, 'getValue', {
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
    const eventDataifelse191: any = [
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
    eventDataifelse191.params = [] || [];
    CMDGenerator(eventDataifelse191, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc34: any = [
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
    eventDatacallSelfFunc34.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc34, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
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
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_866861_1',
          uid: 'View_866861_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_866861_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_129586',
            uid: 'View_129586',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_129586')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_510588',
              uid: 'View_510588',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_510588')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_782558',
                uid: 'View_782558',
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
                  const eventDatacallSelfFunc451: any = [
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
                  eventDatacallSelfFunc451.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc451,
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
                onIconClick={() => {
                  const eventDatacallSelfFunc452: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 168636585201918820,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '824556',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc452.params = [] || [];
                  CMDGenerator(eventDatacallSelfFunc452, {}, 'callSelfFunc', {
                    id: 'callSelfFunc',
                    name: 'callSelfFunc',
                    type: 'callSelfFunc',
                    platform: 'pc',
                  });
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
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_2259782',
                  uid: 'Button_2259782',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc453: any = [
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
                  eventDatacallSelfFunc453.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc453,
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
                type={'default'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_126807',
                  uid: 'Button_126807',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDataclearValue142: any = [
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
                  eventDataclearValue142.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue142, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc454: any = [
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
                  eventDatacallSelfFunc454.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc454,
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
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_2174641',
                uid: 'View_2174641',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_2174641')}
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
                  id: 'Button_817728',
                  uid: 'Button_817728',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                style={{ width: 'fit-content', margin: '10px 0px 0px 0px' }}
                onClick={(e: any) => {
                  const eventDatahistory5: any = [
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
                  eventDatahistory5.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatahistory5, { e }, 'history', {
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
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_190796',
              uid: 'View_190796',
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
              name={'布局容器1'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728',
                uid: 'View_239728',
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
                  id: 'Collapse_228917',
                  uid: 'Collapse_228917',
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
                  const eventDatacustomActionCode594: any = [
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
                  eventDatacustomActionCode594.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode594,
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
                ref={(r: any) => refs.setComponentRef(r, 'Collapse_228917')}
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
                    id: 'CollapsePanel_5495',
                    uid: 'CollapsePanel_5495',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
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
                                  $$componentItem={{
                                    id: 'HorizontalView_300975',
                                    uid: 'HorizontalView_300975',
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
                                      'HorizontalView_300975',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815',
                                      uid: 'View_575815',
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
                                      refs.setComponentRef(r, 'View_575815')
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
                                        id: 'Text_4120405',
                                        uid: 'Text_4120405',
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
                                        refs.setComponentRef(r, 'Text_4120405')
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547',
                                      uid: 'View_2657547',
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
                                      value={data?.emptyArray?.array}
                                      $$componentItem={{
                                        id: 'GridView_959384',
                                        uid: 'GridView_959384',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode596: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 166341200368161340,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '8421537',
                                                pageJsonId: '866861',
                                                code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;console.log("====\\u9009\\u4E2D\\u503C",nodeMap);success(nodeMap)};',
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
                                                {
                                                  type: 'console',
                                                  dataId: 168975548366755550,
                                                  options: {
                                                    compId: 'debug',
                                                    compName: 'system',
                                                    id: '7467836',
                                                    pageJsonId: '866861',
                                                    value: ['$data_8421537$'],
                                                  },
                                                  line_number: 4,
                                                },
                                              ],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode596.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode596,
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
                                                    name={'布局容器'}
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
              name={'布局容器2'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_273135',
                uid: 'View_239728_273135',
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
                  id: 'Collapse_228917_4750854',
                  uid: 'Collapse_228917_4750854',
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
                  const eventDatacustomActionCode597: any = [
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
                  eventDatacustomActionCode597.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode597,
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
                  refs.setComponentRef(r, 'Collapse_228917_4750854')
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
                    id: 'CollapsePanel_5495_629279',
                    uid: 'CollapsePanel_5495_629279',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
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
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_2315523',
                                    uid: 'HorizontalView_300975_2315523',
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
                                      'HorizontalView_300975_2315523',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815_624883',
                                      uid: 'View_575815_624883',
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
                                        'View_575815_624883',
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
                                        id: 'Text_4120405_631164',
                                        uid: 'Text_4120405_631164',
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
                                          'Text_4120405_631164',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547_5801104',
                                      uid: 'View_2657547_5801104',
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
                                        const eventDatacustomActionCode599: any =
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
                                        eventDatacustomActionCode599.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode599,
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
                                                    name={'布局容器'}
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
              name={'布局容器3'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_742059',
                uid: 'View_239728_742059',
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
                  id: 'Collapse_228917_779465',
                  uid: 'Collapse_228917_779465',
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
                  const eventDatacustomActionCode600: any = [
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
                  eventDatacustomActionCode600.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode600,
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
                  refs.setComponentRef(r, 'Collapse_228917_779465')
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
                    id: 'CollapsePanel_5495_290662',
                    uid: 'CollapsePanel_5495_290662',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
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
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_754921',
                                    uid: 'HorizontalView_300975_754921',
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
                                      'HorizontalView_300975_754921',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815_869566',
                                      uid: 'View_575815_869566',
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
                                        'View_575815_869566',
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
                                        id: 'Text_4120405_295623',
                                        uid: 'Text_4120405_295623',
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
                                          'Text_4120405_295623',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547_1613493',
                                      uid: 'View_2657547_1613493',
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
                                      value={data?.emptyArray?.array}
                                      $$componentItem={{
                                        id: 'GridView_959384_5210218',
                                        uid: 'GridView_959384_5210218',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode602: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 166341201878355260,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '145555',
                                                pageJsonId: '866861',
                                                code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=JSON.parse(JSON.stringify(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes))||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
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
                                        eventDatacustomActionCode602.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode602,
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
                                                    name={'布局容器'}
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
              name={'布局容器4'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728_9872634',
                uid: 'View_239728_9872634',
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
                  id: 'Collapse_228917_310864',
                  uid: 'Collapse_228917_310864',
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
                  const eventDatacustomActionCode603: any = [
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
                  eventDatacustomActionCode603.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode603,
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
                  refs.setComponentRef(r, 'Collapse_228917_310864')
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
                    id: 'CollapsePanel_5495_8462436',
                    uid: 'CollapsePanel_5495_8462436',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
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
                                  $$componentItem={{
                                    id: 'HorizontalView_300975_674423',
                                    uid: 'HorizontalView_300975_674423',
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
                                      'HorizontalView_300975_674423',
                                    )
                                  }
                                  {...injectData}
                                >
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815_656931',
                                      uid: 'View_575815_656931',
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
                                        'View_575815_656931',
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
                                        id: 'Text_4120405_1898459',
                                        uid: 'Text_4120405_1898459',
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
                                          'Text_4120405_1898459',
                                        )
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547_363083',
                                      uid: 'View_2657547_363083',
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
                                      value={data?.emptyArray?.array}
                                      $$componentItem={{
                                        id: 'GridView_959384_69925',
                                        uid: 'GridView_959384_69925',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode605: any =
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
                                                  type: 'console',
                                                  dataId: 168976180229368830,
                                                  options: {
                                                    compId: 'debug',
                                                    compName: 'system',
                                                    id: '766806',
                                                    pageJsonId: '866861',
                                                    value: ['$data_6116046$'],
                                                  },
                                                  line_number: 2,
                                                },
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
                                                  line_number: 3,
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
                                                      line_number: 4,
                                                    },
                                                  ],
                                                  callback2: [],
                                                },
                                              ],
                                              callback2: [],
                                            },
                                          ];
                                        eventDatacustomActionCode605.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode605,
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
                                                    name={'布局容器'}
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
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_21611',
              uid: 'View_21611',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_21611')}
            {...injectData}
          >
            <VerticalView
              name={'上下布局'}
              $$componentItem={{
                id: 'VerticalView_2049022',
                uid: 'VerticalView_2049022',
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
              ref={(r: any) => refs.setComponentRef(r, 'VerticalView_2049022')}
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_971858',
                  uid: 'View_971858',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_971858')}
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
                    id: 'Text_8788706_543971',
                    uid: 'Text_8788706_543971',
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
                    refs.setComponentRef(r, 'Text_8788706_543971')
                  }
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_772576',
                    uid: 'View_772576',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_772576')}
                  {...injectData}
                >
                  <Text
                    name={'内容'}
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
                    disabled={false}
                    visible={true}
                    readOnly={false}
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
                      id: 'Button_355871',
                      uid: 'Button_355871',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                    onClick={(e: any) => {
                      const eventDatacustomActionCode606: any = [
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
                      eventDatacustomActionCode606.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode606,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_355871')}
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
                      id: 'Button_665529',
                      uid: 'Button_665529',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatacustomActionCode607: any = [
                        {
                          type: 'customActionCode',
                          dataId: 166521463232806140,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '1468628',
                            pageJsonId: '866861',
                            code: 'function main(data,state,success,fail){var _data$selectedNodes$n,_data$selectedNodes;console.log(data);var nodeMap=(_data$selectedNodes$n=data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)!==null&&_data$selectedNodes$n!==void 0?_data$selectedNodes$n:{};var nodeKeys=Object.values(nodeMap).flat().map(function(e){return e.nodeKey});success(nodeKeys)};',
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
                                                      dataId: 168612147752754660,
                                                      children: [],
                                                      todoOptions: [
                                                        'valueArray',
                                                      ],
                                                      options: {
                                                        compId: 'debug',
                                                        compName: 'system',
                                                        id: '79978',
                                                        pageJsonId: '866861',
                                                        value: [
                                                          'OA自带场景的url地址',
                                                          '$reply_450202?.resultData.url$',
                                                        ],
                                                      },
                                                      actionObjId: 'debug',
                                                      actionObjName: 'system',
                                                      value: 'console',
                                                      line_number: 7,
                                                    },
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
                                                      line_number: 8,
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
                                                              label:
                                                                '$state.label$',
                                                              originTab: 'none',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                                origin: '0',
                                                                label:
                                                                  '$state.label$',
                                                                originTab:
                                                                  'none',
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
                                                          line_number: 9,
                                                        },
                                                      ],
                                                      condition: [],
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
                                                              label:
                                                                '$state.label$',
                                                              originTab: 'none',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                                origin: '0',
                                                                label:
                                                                  '$state.label$',
                                                                originTab:
                                                                  'none',
                                                              },
                                                            pageId:
                                                              '884045146848604160',
                                                            modalPath:
                                                              '/auditOrderPrepare',
                                                          },
                                                          line_number: 9,
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
                                                      line_number: 10,
                                                    },
                                                  ],
                                                  condition: [],
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
                                                      line_number: 10,
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
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 166721809852487230,
                                          children: [],
                                          value: 'callback2',
                                          params: [],
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
                                        _sourceName: '判断选中场景是否互斥-hdb',
                                      },
                                      actionObjId: 'apiRequest',
                                      actionObjName: 'system',
                                      value: 'apiRequest',
                                      line_number: 4,
                                    },
                                  ],
                                  condition: [],
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
                                        _sourceName: '判断选中场景是否互斥-hdb',
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
                                                  line_number: 10,
                                                },
                                              ],
                                              condition: [],
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
                                                  line_number: 10,
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
                                                          label:
                                                            '$state.label$',
                                                          originTab: 'none',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '0',
                                                          label:
                                                            '$state.label$',
                                                          originTab: 'none',
                                                        },
                                                        pageId:
                                                          '884045146848604160',
                                                        modalPath:
                                                          '/auditOrderPrepare',
                                                      },
                                                      actionObjId: 'history',
                                                      actionObjName: 'system',
                                                      value: 'history',
                                                      line_number: 9,
                                                    },
                                                  ],
                                                  condition: [],
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
                                                          label:
                                                            '$state.label$',
                                                          originTab: 'none',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '0',
                                                          label:
                                                            '$state.label$',
                                                          originTab: 'none',
                                                        },
                                                        pageId:
                                                          '884045146848604160',
                                                        modalPath:
                                                          '/auditOrderPrepare',
                                                      },
                                                      line_number: 9,
                                                    },
                                                  ],
                                                },
                                              ],
                                              line_number: 6,
                                              callback1: [
                                                {
                                                  type: 'console',
                                                  dataId: 168612147752754660,
                                                  options: {
                                                    compId: 'debug',
                                                    compName: 'system',
                                                    id: '79978',
                                                    pageJsonId: '866861',
                                                    value: [
                                                      'OA自带场景的url地址',
                                                      '$reply_450202?.resultData.url$',
                                                    ],
                                                  },
                                                  line_number: 7,
                                                },
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
                                                  line_number: 8,
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
                      eventDatacustomActionCode607.params =
                        [
                          {
                            title: '事件对象',
                            value: '$e$',
                            name: 'e',
                            label: '事件对象',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode607,
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
                      id: 'Button_3119094',
                      uid: 'Button_3119094',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                    onClick={(e: any) => {
                      const eventDatahistory6: any = [
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
                      eventDatahistory6.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDatahistory6, { e }, 'history', {
                        id: 'history',
                        name: 'history',
                        type: 'history',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_3119094')}
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

export default withPageHOC(AuditStart$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
