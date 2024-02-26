// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  HorizontalView,
  Card,
  VerticalView,
  Form,
  Input,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1001785141604552704';
const AttrValueRel$$Modal: React.FC<PageProps> = ({
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
  const refreshAttrValue = (options_804669: any) => {
    const eventDatareloadDataSource24: any = [
      {
        type: 'reloadDataSource',
        dataId: 169050808164156700,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '80045324',
          pageJsonId: '69315',
          dataSourceId: 169050736559642600,
          dataSourceName: 'qryAttrValuePage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '332362',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'header',
            },
            {
              attrId: '697913',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'path',
            },
            {
              attrId: '290346',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'query',
            },
            {
              attrId: '905028',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              children: [
                {
                  attrId: '8545172',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '013527',
                  code: 'attrValue',
                  name: '属性值编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrValue',
                  value: {
                    type: ['form', 'Form_735357', 'getFieldsValue'],
                    code: 'attrValue',
                  },
                },
                {
                  attrId: '353409',
                  code: 'attrId',
                  name: 'attrId',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrId',
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'attrId',
                  },
                },
                {
                  attrId: '1503',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '6994205',
                  code: 'attrValueName',
                  name: '属性值名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrValueName',
                  value: {
                    type: ['form', 'Form_735357', 'getFieldsValue'],
                    code: 'attrValueName',
                  },
                },
              ],
              key: 'body',
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 1,
        callback1: [
          {
            type: 'setLoading',
            dataId: 169050825225718270,
            options: {
              compId: 'Table_061387',
              compLib: 'comm',
              pageJsonId: '69315',
              compName: 'Table',
              id: '625957',
              loading: true,
            },
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDatareloadDataSource24.params =
      [
        {
          title: '事件入参',
          name: 'options_804669',
          value: '$options_804669$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource24,
      { options_804669 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatasetLoading23: any = [
      {
        type: 'setLoading',
        dataId: 169050822658642240,
        options: {
          compId: 'Table_061387',
          compLib: 'comm',
          pageJsonId: '69315',
          compName: 'Table',
          id: '846808',
          loading: false,
        },
        line_number: 3,
      },
    ];
    eventDatasetLoading23.params =
      [
        {
          title: '事件入参',
          name: 'options_804669',
          value: '$options_804669$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading23, { options_804669 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
  };
  const refreshSecondAttrValue = (options_619713: any) => {
    const eventDatareloadDataSource25: any = [
      {
        type: 'reloadDataSource',
        dataId: 169077705748503040,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '76018086',
          pageJsonId: '69315',
          dataSourceId: 169076898494472740,
          dataSourceName: 'qryDcAttrValueListByPraAttrValueId',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '6560992',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '030594',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '394231',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
            },
            {
              attrId: '9965187',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '664957',
                  code: 'attrValue',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_602592', 'getFieldsValue'],
                    code: 'attrValue',
                  },
                },
                {
                  attrId: '665257',
                  code: 'attrValueName',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_602592', 'getFieldsValue'],
                    code: 'attrValueName',
                  },
                },
                {
                  attrId: '21475',
                  code: 'pageSize',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '562319',
                  code: 'pageNum',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '872194',
                  code: 'attrValueId',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['datasource', 'local_val', 'data'],
                    code: 'lowData.attrValueId',
                  },
                },
                {
                  attrId: '081168',
                  code: 'attrId',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  value: {
                    type: ['datasource', 'secondAttrData', 'data'],
                    code: 'attrId',
                  },
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource25.params =
      [
        {
          title: '事件入参',
          name: 'options_619713',
          value: '$options_619713$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource25,
      { options_619713 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const setSecondData = (options_388019: any) => {
    const eventDatasetDataSource11: any = [
      {
        type: 'setDataSource',
        dataId: 169079243570818460,
        shielding: true,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '9198935',
          pageJsonId: '69315',
          dataSourceId: 169079169668851500,
          dataSourceName: 'secondAttrData',
          dataSourceRelType: 'custom',
          dataSourceSetValue: [
            {
              attrId: '054569',
              code: 'attrName',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              value: {
                type: ['context', '$options_388019$'],
                code: 'attrName',
              },
            },
            {
              attrId: '213794',
              code: 'attrId',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              showInput: true,
              value: { type: ['context', '$options_388019$'], code: 'attrId' },
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 1,
        callback1: [
          {
            type: 'resetDataSource',
            dataId: 169087368753816770,
            shielding: true,
            options: {
              compId: 'resetDataSource',
              compName: 'page',
              id: '542284',
              pageJsonId: '69315',
              dataSourceId: 169051061994918000,
              dataSourceName: 'local_val',
              dataSourceRelType: 'custom',
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
          {
            type: 'clearData',
            dataId: 169095622591623100,
            shielding: true,
            options: {
              compId: 'Table_156404',
              compLib: 'comm',
              pageJsonId: '69315',
              compName: 'Table',
              id: '5020618',
            },
            line_number: 3,
          },
          {
            type: 'apiRequest',
            dataId: 169105624460658200,
            shielding: true,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '00208216',
              pageJsonId: '69315',
              sync: false,
              actionTitle: '',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'clearDcAttrValueRelByParAttrId',
              _apiCode: 'clearDcAttrValueRelByParAttrId',
              _source: 'rhin',
              _sourceName: '根据上级规格属性Id清空级联关系-zrj',
              _serviceId: '1004325020207259648',
              _serviceTitle:
                '根据上级规格属性Id清空级联关系-zrj: clearDcAttrValueRelByParAttrId',
              valueType: 'object',
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
                      dataKey: '00208216_root.header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      children: [
                        {
                          code: 'attrId',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'T',
                          defaultValue: '',
                          _id: 'root.path.attrId',
                          compType: 'Input',
                          parents: ['root', 'path'],
                          parentType: 'object',
                          parentKey: '0-1',
                          key: '0-1-0',
                          id: 'root.path.attrId',
                          dataKey: '00208216_root.path.attrId',
                          value: {
                            type: ['context', '$state.bizData$'],
                            code: 'attrId',
                          },
                        },
                      ],
                      _id: 'root.path',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-1',
                      id: 'root.path',
                      dataKey: '00208216_root.path',
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
                      dataKey: '00208216_root.query',
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
                      dataKey: '00208216_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '00208216_root',
                },
              ],
            },
            line_number: 4,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatasetDataSource11.params =
      [
        {
          title: '事件入参',
          name: 'options_388019',
          value: '$options_388019$',
        },
      ] || [];
    CMDGenerator(
      eventDatasetDataSource11,
      { options_388019 },
      'setDataSource',
      {
        id: 'setDataSource',
        name: 'setDataSource',
        type: 'setDataSource',
        platform: 'undefined',
      },
    ); // console 169079258590337150
    console.log(options_388019, '事件入参');
    const eventDataifelse52: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '801755',
            options: { context: '$options_388019$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169137152851351940,
        elseIfs: [],
        line_number: 6,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169137154950479140,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '157043',
              pageJsonId: '69315',
              dataSourceId: 169079169668851500,
              dataSourceName: 'secondAttrData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '054569',
                  code: 'attrName',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$options_388019$'],
                    code: 'attrName',
                  },
                },
                {
                  attrId: '213794',
                  code: 'attrId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$options_388019$'],
                    code: 'attrId',
                  },
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
                type: 'resetDataSource',
                dataId: 169137154950477400,
                shielding: true,
                options: {
                  compId: 'resetDataSource',
                  compName: 'page',
                  id: '470912',
                  pageJsonId: '69315',
                  dataSourceId: 169051061994918000,
                  dataSourceName: 'local_val',
                  dataSourceRelType: 'custom',
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'clearData',
                dataId: 169137154950480900,
                shielding: true,
                options: {
                  compId: 'Table_156404',
                  compLib: 'comm',
                  pageJsonId: '69315',
                  compName: 'Table',
                  id: '8763606',
                },
                line_number: 9,
              },
              {
                type: 'apiRequest',
                dataId: 169137154950444770,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '876308',
                  pageJsonId: '69315',
                  sync: false,
                  actionTitle: '',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'clearDcAttrValueRelByParAttrId',
                  _apiCode: 'clearDcAttrValueRelByParAttrId',
                  _source: 'rhin',
                  _sourceName: '根据上级规格属性Id清空级联关系-zrj',
                  _serviceId: '1004325020207259648',
                  _serviceTitle:
                    '根据上级规格属性Id清空级联关系-zrj: clearDcAttrValueRelByParAttrId',
                  valueType: 'object',
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
                          dataKey: '00208216_root.header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          children: [
                            {
                              code: 'attrId',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'T',
                              defaultValue: '',
                              _id: 'root.path.attrId',
                              compType: 'Input',
                              parents: ['root', 'path'],
                              parentType: 'object',
                              parentKey: '0-1',
                              key: '0-1-0',
                              id: 'root.path.attrId',
                              dataKey: '00208216_root.path.attrId',
                              value: {
                                type: ['context', '$state.bizData$'],
                                code: 'attrId',
                              },
                            },
                          ],
                          _id: 'root.path',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-1',
                          id: 'root.path',
                          dataKey: '00208216_root.path',
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
                          dataKey: '00208216_root.query',
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
                          dataKey: '00208216_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '00208216_root',
                    },
                  ],
                },
                line_number: 10,
                callback1: [
                  {
                    type: 'clearData',
                    dataId: 169275635873625280,
                    shielding: true,
                    options: {
                      compId: 'Table_156404',
                      compLib: 'comm',
                      pageJsonId: '69315',
                      compName: 'Table',
                      id: '862923',
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
      },
    ];
    eventDataifelse52.params =
      [
        {
          title: '事件入参',
          name: 'options_388019',
          value: '$options_388019$',
        },
      ] || [];
    CMDGenerator(eventDataifelse52, { options_388019 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };
  const addAttrValueRel = (options_387418: any) => {
    // console 169079626998550750
    console.log(options_387418);
    const eventDatacustomActionCode156: any = [
      {
        type: 'customActionCode',
        dataId: 169079649680230180,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '213526',
          pageJsonId: '69315',
          code: 'function main(data,state,success,fail){var oldData=options_387418;console.log(oldData);console.log(data.local_val.lowData.attrValueId);var newData=oldData.map(function(item){return{attrValueId:item.attrValueId,attrId:item.attrId,parAttrValueId:data.local_val.lowData.attrValueId}});console.log(newData);success(newData)};',
        },
        line_number: 2,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 169085329647428320,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '956064',
              pageJsonId: '69315',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'addDcAttrValueRelList',
              _apiCode: 'addDcAttrValueRelList',
              _source: 'rhin',
              _sourceName: '批量新增联级关系-zrj',
              _serviceId: '1003471445975273472',
              _serviceTitle: '批量新增联级关系-zrj: addDcAttrValueRelList',
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
                      dataKey: '956064_root.header',
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
                      dataKey: '956064_root.path',
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
                      dataKey: '956064_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'fieldArray',
                      children: [
                        {
                          code: 'attrId',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.attrId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'fieldArray',
                          parentKey: '0-3',
                          key: '0-3-2',
                          parentCode: 'body',
                          id: 'root.body.attrId',
                          dataKey: '956064_root.body.attrId',
                        },
                        {
                          code: 'attrValueId',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.attrValueId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'fieldArray',
                          parentKey: '0-3',
                          key: '0-3-1',
                          parentCode: 'body',
                          id: 'root.body.attrValueId',
                          dataKey: '956064_root.body.attrValueId',
                        },
                        {
                          code: 'parAttrValueId',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.parAttrValueId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'fieldArray',
                          parentKey: '0-3',
                          key: '0-3-0',
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                      id: 'root.body',
                      dataKey: '956064_root.body',
                      value: { type: ['context', '$data_213526$'], code: '' },
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '956064_root',
                },
              ],
              params: 'object',
            },
            line_number: 3,
            callback1: [
              {
                type: 'callSelfFunc',
                dataId: 169085579538340930,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '5325872',
                  pageJsonId: '69315',
                  customFuncName: 'refreshSecondAttrValue',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 169085580508039800,
                    shielding: true,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '374809',
                      pageJsonId: '69315',
                      type: 'success',
                      value: '新增联级成功',
                    },
                    line_number: 5,
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
    eventDatacustomActionCode156.params =
      [
        {
          title: '事件入参',
          name: 'options_387418',
          value: '$options_387418$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode156,
      { options_387418 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refreshAttrValue,
    refreshSecondAttrValue,
    setSecondData,
    addAttrValueRel,
  }));

  const onOk = () => {
    const eventDatacloseModal59: any = [
      {
        type: 'closeModal',
        dataId: 169087490917993000,
        options: {
          compId: 'closeModal',
          compName: 'page',
          id: '0592705',
          pageJsonId: '69315',
        },
        line_number: 1,
      },
    ];
    eventDatacloseModal59.params = [] || [];
    CMDGenerator(eventDatacloseModal59, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal60: any = [
      {
        type: 'closeModal',
        dataId: '525438_1',
        options: { compId: 'page', compName: 'page', id: '289468' },
        line_number: 1,
      },
    ];
    eventDatacloseModal60.params = [] || [];
    CMDGenerator(eventDatacloseModal60, {}, 'closeModal', {
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
    const eventDatasetValue18: any = [
      {
        type: 'setValue',
        dataId: 169050742262575420,
        options: {
          compId: 'Input_739776',
          compLib: 'comm',
          pageJsonId: '69315',
          compName: 'Input',
          id: '350573',
          valueList: { Input_739776: '$state.bizData.attrName$' },
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue18.params = [] || [];
    CMDGenerator(eventDatasetValue18, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    }); // console 169050743187821920
    console.log(state?.bizData);
    const eventDatareloadDataSource56: any = [
      {
        type: 'reloadDataSource',
        dataId: 169050761762111000,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '808874',
          pageJsonId: '69315',
          dataSourceId: 169050736559642600,
          dataSourceName: 'qryAttrValuePage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '332362',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'header',
            },
            {
              attrId: '697913',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'path',
            },
            {
              attrId: '290346',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'query',
            },
            {
              attrId: '905028',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              children: [
                {
                  attrId: '8545172',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '013527',
                  code: 'attrValue',
                  name: '属性值编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrValue',
                },
                {
                  attrId: '353409',
                  code: 'attrId',
                  name: 'attrId',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrId',
                  value: {
                    type: ['context', '$state.bizData$'],
                    code: 'attrId',
                  },
                },
                {
                  attrId: '1503',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '6994205',
                  code: 'attrValueName',
                  name: '属性值名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrValueName',
                },
              ],
              key: 'body',
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource56.params = [] || [];
    CMDGenerator(eventDatareloadDataSource56, {}, 'reloadDataSource', {
      id: 'reloadDataSource',
      name: 'reloadDataSource',
      type: 'reloadDataSource',
      platform: 'undefined',
    });
    const eventDataapiRequest434: any = [
      {
        type: 'apiRequest',
        dataId: 169094278323926940,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '745838',
          pageJsonId: '69315',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'getDcAttrSpecByParAttrId',
          _apiCode: 'getDcAttrSpecByParAttrId',
          _source: 'rhin',
          _sourceName: '根据上级属性Id获取下级属性-zrj',
          _serviceId: '1003848122360504320',
          _serviceTitle:
            '根据上级属性Id获取下级属性-zrj: getDcAttrSpecByParAttrId',
          valueType: 'object',
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
                  dataKey: '745838_root.header',
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
                  dataKey: '745838_root.path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  children: [
                    {
                      code: 'attrId',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.query.attrId',
                      compType: 'Input',
                      parents: ['root', 'query'],
                      parentType: 'object',
                      parentKey: '0-2',
                      key: '0-2-0',
                      id: 'root.query.attrId',
                      dataKey: '745838_root.query.attrId',
                      value: {
                        type: ['context', '$state.bizData$'],
                        code: 'attrId',
                      },
                    },
                  ],
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                  id: 'root.query',
                  dataKey: '745838_root.query',
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
                  dataKey: '745838_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '745838_root',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169094282043857380,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '521912',
              pageJsonId: '69315',
              dataSourceId: 169079169668851500,
              dataSourceName: 'secondAttrData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '054569',
                  code: 'attrName',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$reply_745838$'],
                    code: 'resultData.attrName',
                    hideAttr: false,
                  },
                },
                {
                  attrId: '213794',
                  code: 'attrId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$reply_745838$'],
                    hideAttr: false,
                    code: 'resultData.attrId',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 5,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 169094297721668500,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '247108',
              pageJsonId: '69315',
              value: ['$reply_745838$'],
            },
            line_number: 6,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest434.params = [] || [];
    CMDGenerator(eventDataapiRequest434, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_69315__">
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_69315_1',
          uid: 'View_69315_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
          borderSetting: 'border 0px solid ',
          'border-left': '0px solid ',
          'border-right': '0px solid ',
          'border-top': '0px solid ',
          'border-bottom': '0px solid ',
          textAlign: 'center',
          margin: '8px 8px 8px 8px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_69315_1')}
        {...injectData}
      >
        <HorizontalView
          name={'左右布局'}
          $$componentItem={{
            id: 'HorizontalView_098081',
            uid: 'HorizontalView_098081',
            type: 'HorizontalView',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: 'auto',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_098081')}
          {...injectData}
        >
          <View
            name={'左布局容器'}
            $$componentItem={{
              id: 'View_456427',
              uid: 'View_456427',
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
              width: 'auto',
              height: 'auto',
              overflowY: 'hidden',
              borderSetting: 'border 0px solid #4a4a4a',
              'border-left': '0px solid #4a4a4a',
              'border-right': '0px solid #4a4a4a',
              'border-top': '0px solid #4a4a4a',
              'border-bottom': '0px solid #4a4a4a',
              textAlign: 'left',
              flex: 1,
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_456427')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              extendNum={3}
              title={'上级规格'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
              extend={[
                {
                  id: '801422',
                  title: '选择下级规格属性',
                  iconPos: 'left',
                  btnType: 'primary',
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
                id: 'Card_73954',
                uid: 'Card_73954',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'hidden',
                margin: '0 0 16px 0',
                height: 'auto',
              }}
              onClickBtn1={(e: any) => {
                const eventDatashowCustomModal208: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 169104749483217500,
                    shielding: true,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '3321481',
                      pageJsonId: '69315',
                      modalname: '/slectSecondAttr',
                      pageId: '1003212115501813760',
                      modalPath: '/slectSecondAttr',
                      paramsObj: { bizData: '$state.bizData.attrId$' },
                      paramsObjKeyValueMap: {
                        bizData: '$state.bizData.attrId$',
                      },
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal208.params =
                  [
                    {
                      title: '选择下级规格属性点击回调',
                      value: '$e$',
                      name: 'e',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatashowCustomModal208,
                  { e },
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
                const eventDataifelse501: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '401834295',
                        options: {
                          context: '$data.secondAttrData.attrId$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169105353704337730,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169105363795466940,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169105364584140300,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 169105364584179170,
                                children: [],
                                value: 'callback1',
                                params: [
                                  {
                                    title: '弹窗确认回调参数',
                                    name: 'okData_218817',
                                    value: '$okData_408$',
                                  },
                                ],
                              },
                              {
                                dataName: 'callback',
                                dataId: 169105364584145280,
                                children: [],
                                value: 'callback2',
                                params: [],
                              },
                            ],
                            todoOptions: ['modalname', 'compState'],
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '408',
                              pageJsonId: '69315',
                              modalname: '/slectSecondAttr',
                              pageId: '1003212115501813760',
                              modalPath: '/slectSecondAttr',
                              paramsObj: { bizData: '$state.bizData.attrId$' },
                              paramsObjKeyValueMap: {
                                bizData: '$state.bizData.attrId$',
                              },
                            },
                            actionObjId: 'showCustomModal',
                            actionObjName: 'page',
                            value: 'showCustomModal',
                            tips: '点击确认执行：在弹窗页面编排选择触发父页面确认回掉事件，将会触发确认回掉事件;     \n 点击取消执行: 点击取消将会触发该回掉',
                            line_number: 6,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'showCustomModal',
                            dataId: 169105364584140300,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '408',
                              pageJsonId: '69315',
                              modalname: '/slectSecondAttr',
                              pageId: '1003212115501813760',
                              modalPath: '/slectSecondAttr',
                              paramsObj: { bizData: '$state.bizData.attrId$' },
                              paramsObjKeyValueMap: {
                                bizData: '$state.bizData.attrId$',
                              },
                            },
                            line_number: 6,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 2,
                    callback1: [
                      {
                        type: 'showModal',
                        dataId: 169105365990284000,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '47237661',
                          pageJsonId: '69315',
                          type: 'confirm',
                          okText: '确定',
                          cancelText: '取消',
                          content:
                            '已绑定下级规格属性，重新选择将会清空已配置的关系。',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'showCustomModal',
                            dataId: 169105366341449760,
                            options: {
                              compId: 'showCustomModal',
                              compName: 'page',
                              id: '075971',
                              pageJsonId: '69315',
                              modalname: '/slectSecondAttr',
                              pageId: '1003212115501813760',
                              modalPath: '/slectSecondAttr',
                              paramsObj: { bizData: '$state.bizData.attrId$' },
                              paramsObjKeyValueMap: {
                                bizData: '$state.bizData.attrId$',
                              },
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'showCustomModal',
                                dataId: 169105379394954500,
                                shielding: true,
                                options: {
                                  compId: 'showCustomModal',
                                  compName: 'page',
                                  id: '9880375',
                                  pageJsonId: '69315',
                                  modalname: '/slectSecondAttr',
                                  pageId: '1003212115501813760',
                                  modalPath: '/slectSecondAttr',
                                  paramsObj: {
                                    bizData: '$state.bizData.attrId$',
                                  },
                                  paramsObjKeyValueMap: {
                                    bizData: '$state.bizData.attrId$',
                                  },
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
                ];
                eventDataifelse501.params =
                  [
                    {
                      title: '选择下级规格属性点击回调',
                      value: '$e$',
                      name: 'e',
                    },
                  ] || [];
                CMDGenerator(eventDataifelse501, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_73954')}
              {...injectData}
            >
              <VerticalView
                name={'上下布局'}
                $$componentItem={{
                  id: 'VerticalView_8383574',
                  uid: 'VerticalView_8383574',
                  type: 'VerticalView',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'block',
                  padding: '0px 0px 0px 0px',
                  width: 'auto',
                  height: 'auto',
                  overflowY: 'hidden',
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'VerticalView_8383574')
                }
                {...injectData}
              >
                <View
                  name={'上布局容器'}
                  $$componentItem={{
                    id: 'View_512562',
                    uid: 'View_512562',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    display: 'block',
                    padding: '0px 0px 0px 0px',
                    height: 'auto',
                    width: 'auto',
                    overflowY: 'hidden',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_512562')}
                  {...injectData}
                >
                  <Form
                    name={'上级属性值表单'}
                    colSpan={12}
                    labelCol={8}
                    wrapperCol={16}
                    colon={true}
                    layout={'horizontal'}
                    labelAlign={'right'}
                    header={'标题'}
                    colSpace={24}
                    rowSpace={16}
                    formCode={'Form_826334'}
                    $$componentItem={{
                      id: 'Form_735357',
                      uid: 'Form_735357',
                      type: 'Form',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ padding: '0px 0px 0px 0px', overflow: 'hidden' }}
                    ref={(r: any) => refs.setComponentRef(r, 'Form_735357')}
                    {...injectData}
                  >
                    <Input
                      name={'规格属性'}
                      size={'default'}
                      selfSpan={12}
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
                      formItemIndex={0}
                      fieldName={'parAttr'}
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
                        id: 'Input_739776',
                        uid: 'Input_739776',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={true}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_739776')}
                      {...injectData}
                    />
                    <Input
                      name={'属性值名称'}
                      size={'default'}
                      selfSpan={12}
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
                      fieldName={'attrValueName'}
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
                        id: 'Input_611748',
                        uid: 'Input_611748',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacallSelfFunc543: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 169050989977949400,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '0166712',
                              pageJsonId: '69315',
                              customFuncName: 'refreshAttrValue',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc543.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc543,
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
                      ref={(r: any) => refs.setComponentRef(r, 'Input_611748')}
                      {...injectData}
                    />
                    <Input
                      name={'属性值'}
                      size={'default'}
                      selfSpan={12}
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
                      formItemIndex={2}
                      fieldName={'attrValue'}
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
                        id: 'Input_470784',
                        uid: 'Input_470784',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacallSelfFunc544: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 169050990953771420,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '067384',
                              pageJsonId: '69315',
                              customFuncName: 'refreshAttrValue',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc544.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc544,
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
                      ref={(r: any) => refs.setComponentRef(r, 'Input_470784')}
                      {...injectData}
                    />
                    <View
                      name={'布局容器'}
                      $$componentItem={{
                        id: 'View_533838',
                        uid: 'View_533838',
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
                          formItemIndex: 3,
                          style: undefined,
                          selfSpan: undefined,
                        },
                      }}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '0px 0px 0px 0px',
                        width: 'auto',
                        height: 'auto',
                        overflowY: 'hidden',
                        textAlign: 'center',
                        justifyContent: 'flex-end',
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'View_533838')}
                      {...injectData}
                    >
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
                          id: 'Button_042416',
                          uid: 'Button_042416',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{ width: 'fit-content' }}
                        onClick={(e: any) => {
                          const eventDatacallSelfFunc545: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 169050862818483620,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '589372',
                                pageJsonId: '69315',
                                customFuncName: 'refreshAttrValue',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc545.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallSelfFunc545,
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
                          refs.setComponentRef(r, 'Button_042416')
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
                          id: 'Button_7312534',
                          uid: 'Button_7312534',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          width: 'fit-content',
                          margin: '0px 0px 0px 8px',
                        }}
                        onClick={(e: any) => {
                          const eventDataclearValue170: any = [
                            {
                              type: 'clearValue',
                              dataId: 169050868246428900,
                              options: {
                                compId: 'Input_611748',
                                compLib: 'comm',
                                pageJsonId: '69315',
                                compName: 'Input',
                                id: '088124',
                              },
                              line_number: 1,
                            },
                          ];
                          eventDataclearValue170.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDataclearValue170,
                            { e },
                            'clearValue',
                            {
                              id: 'clearValue',
                              name: 'clearValue',
                              type: 'clearValue',
                              platform: 'pc',
                            },
                          );
                          const eventDataclearValue171: any = [
                            {
                              type: 'clearValue',
                              dataId: 169050868749773150,
                              options: {
                                compId: 'Input_470784',
                                compLib: 'comm',
                                pageJsonId: '69315',
                                compName: 'Input',
                                id: '308751',
                              },
                              line_number: 2,
                            },
                          ];
                          eventDataclearValue171.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDataclearValue171,
                            { e },
                            'clearValue',
                            {
                              id: 'clearValue',
                              name: 'clearValue',
                              type: 'clearValue',
                              platform: 'pc',
                            },
                          );
                        }}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Button_7312534')
                        }
                        {...injectData}
                      />
                    </View>
                  </Form>
                </View>
                <View
                  name={'下布局容器'}
                  $$componentItem={{
                    id: 'View_204431',
                    uid: 'View_204431',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    display: 'block',
                    padding: '0px 0px 0px 0px',
                    height: 'auto',
                    width: 'auto',
                    overflowY: 'hidden',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_204431')}
                  {...injectData}
                >
                  <Table
                    name={'表格'}
                    isFlexColumn={false}
                    extendNum={3}
                    adjustModel={'auto'}
                    pageSize={data?.qryAttrValuePage?.resultData?.size}
                    current={data?.qryAttrValuePage?.resultData?.current}
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
                        title: '属性值标识',
                        key: 'attrValueId',
                        dataIndex: 'attrValueId',
                        className: '',
                        id: '7337824',
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
                        title: '属性值名称',
                        key: 'attrValueName',
                        dataIndex: 'attrValueName',
                        className: 'divider',
                        id: '632205',
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
                        title: '属性值编码',
                        key: 'attrValueCode',
                        dataIndex: 'attrValueCode',
                        className: 'divider',
                        id: '0634885',
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
                        title: '属性值',
                        key: 'attrValue',
                        dataIndex: 'attrValue',
                        className: 'divider',
                        id: '96558',
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
                        title: '排序',
                        key: 'sort',
                        dataIndex: 'sort',
                        className: 'divider',
                        id: '88324',
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
                    bordered={'segmentation'}
                    size={'small'}
                    fixedAction={false}
                    rowSelection={undefined}
                    showHead={false}
                    showTotal={true}
                    showSizeChanger={true}
                    showQuickJumper={true}
                    pageSizeOptions={'[5,10,20]'}
                    customNum={3}
                    rowKey={'attrValueId'}
                    dataSource={data?.qryAttrValuePage?.resultData?.records}
                    fieldName={'size'}
                    total={data?.qryAttrValuePage?.resultData?.total}
                    dataSourceFromDataSourceConfig={
                      'data.qryAttrValuePage.resultData.records'
                    }
                    $$componentItem={{
                      id: 'Table_061387',
                      uid: 'Table_061387',
                      type: 'Table',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ margin: '20px 0px 0px 0px' }}
                    onPageChange={(page: any, pageSize: any) => {
                      const eventDatareloadDataSource91: any = [
                        {
                          type: 'reloadDataSource',
                          dataId: 169050844179655580,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '990364',
                            pageJsonId: '69315',
                            dataSourceId: 169050736559642600,
                            dataSourceName: 'qryAttrValuePage',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '332362',
                                code: 'header',
                                name: '请求头参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                key: 'header',
                              },
                              {
                                attrId: '697913',
                                code: 'path',
                                name: '请求路径参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                key: 'path',
                              },
                              {
                                attrId: '290346',
                                code: 'query',
                                name: 'URL 参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                key: 'query',
                              },
                              {
                                attrId: '905028',
                                code: 'body',
                                name: '请求体',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                children: [
                                  {
                                    attrId: '8545172',
                                    code: 'pageSize',
                                    name: 'pageSize',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.pageSize',
                                    value: {
                                      type: ['context', '$pageSize$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '013527',
                                    code: 'attrValue',
                                    name: '属性值编码',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.attrValue',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_735357',
                                        'getFieldsValue',
                                      ],
                                      code: 'attrValue',
                                    },
                                  },
                                  {
                                    attrId: '353409',
                                    code: 'attrId',
                                    name: 'attrId',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.attrId',
                                    value: {
                                      type: ['context', '$state.bizData$'],
                                      code: 'attrId',
                                    },
                                  },
                                  {
                                    attrId: '1503',
                                    code: 'pageNum',
                                    name: 'pageNum',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.pageNum',
                                    value: {
                                      type: ['context', '$page$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '6994205',
                                    code: 'attrValueName',
                                    name: '属性值名称',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'body.attrValueName',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_735357',
                                        'getFieldsValue',
                                      ],
                                      code: 'attrValueName',
                                    },
                                  },
                                ],
                                key: 'body',
                              },
                            ],
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatareloadDataSource91.params =
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
                        eventDatareloadDataSource91,
                        { page, pageSize },
                        'reloadDataSource',
                        {
                          id: 'reloadDataSource',
                          name: 'reloadDataSource',
                          type: 'reloadDataSource',
                          platform: 'pc',
                        },
                      );
                    }}
                    onRowClick={(rowId: any, row: any, index: any) => {
                      const eventDatasetDataSource188: any = [
                        {
                          type: 'setDataSource',
                          dataId: 169051064108755900,
                          shielding: true,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '3976477',
                            pageJsonId: '69315',
                            dataSourceId: 169051061994918000,
                            dataSourceName: 'local_val',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                attrId: '763992',
                                code: 'attrValueId',
                                name: '属性值标识',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                value: {
                                  type: ['context', '$index$'],
                                  code: '',
                                },
                              },
                              {
                                attrId: '191536',
                                code: 'lowData',
                                name: '选择行对象',
                                type: 'object',
                                initialData: { type: 'static' },
                                showInput: true,
                                value: {
                                  type: ['context', '$row$'],
                                  hideAttr: false,
                                  code: '',
                                },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 169051140939726000,
                              shielding: true,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '163547',
                                pageJsonId: '69315',
                                value: ['$data.local_val$'],
                              },
                              line_number: 2,
                            },
                            {
                              type: 'apiRequest',
                              dataId: 169051362153388220,
                              shielding: true,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '2316954',
                                pageJsonId: '69315',
                                sync: false,
                                actionTitle: '',
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode:
                                  'qryDcAttrValueListByPraAttrValueId',
                                _apiCode: 'qryDcAttrValueListByPraAttrValueId',
                                _source: 'rhin',
                                _sourceName:
                                  '根据上级属性值id查询下级属性值列表-zrj',
                                _serviceId: '1002049113331240960',
                                _serviceTitle:
                                  '根据上级属性值id查询下级属性值列表-zrj: qryDcAttrValueListByPraAttrValueId',
                                valueType: 'object',
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
                                        dataKey: '2316954_root.header',
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
                                        dataKey: '2316954_root.path',
                                      },
                                      {
                                        code: 'query',
                                        name: 'URL 参数',
                                        attrType: 'object',
                                        children: [
                                          {
                                            code: 'attrValueId',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'long',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.query.attrValueId',
                                            compType: 'Input',
                                            parents: ['root', 'query'],
                                            parentType: 'object',
                                            parentKey: '0-2',
                                            key: '0-2-0',
                                            id: 'root.query.attrValueId',
                                            dataKey:
                                              '2316954_root.query.attrValueId',
                                            value: {
                                              type: [
                                                'datasource',
                                                'local_val',
                                                'data',
                                              ],
                                              code: 'lowData.attrValueId',
                                            },
                                            _deletable: true,
                                          },
                                        ],
                                        _id: 'root.query',
                                        compType: 'Input',
                                        parents: ['root'],
                                        parentType: 'object',
                                        parentKey: '0',
                                        key: '0-2',
                                        id: 'root.query',
                                        dataKey: '2316954_root.query',
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
                                        dataKey: '2316954_root.body',
                                        children: [
                                          {
                                            code: 'attrValueId',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'long',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.attrValueId',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-4',
                                          },
                                          {
                                            code: 'attrValue',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.attrValue',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-0',
                                          },
                                          {
                                            code: 'attrValueName',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'string',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.attrValueName',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-1',
                                          },
                                          {
                                            code: 'pageSize',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'long',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.pageSize',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-2',
                                          },
                                          {
                                            code: 'pageNum',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'long',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.pageNum',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-3',
                                          },
                                          {
                                            code: 'attrId',
                                            name: '新增节点',
                                            attrType: 'field',
                                            type: 'long',
                                            mustFlag: 'F',
                                            defaultValue: '',
                                            _id: 'root.body.attrId',
                                            compType: 'Input',
                                            parents: ['root', 'body'],
                                            parentType: 'object',
                                            parentKey: '0-3',
                                            key: '0-3-5',
                                          },
                                        ],
                                      },
                                    ],
                                    _id: 'root',
                                    compType: 'Input',
                                    isRoot: true,
                                    parents: [],
                                    key: '0',
                                    id: 'root',
                                    dataKey: '2316954_root',
                                  },
                                ],
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'reloadDataSource',
                              dataId: 169076902643116740,
                              shielding: true,
                              options: {
                                compId: 'reloadDataSource',
                                compName: 'page',
                                id: '897415',
                                pageJsonId: '69315',
                                dataSourceId: 169076898494472740,
                                dataSourceName:
                                  'qryDcAttrValueListByPraAttrValueId',
                                dataSourceRelType: 'service',
                                dataSourceReloadFilter: [
                                  {
                                    attrId: '6560992',
                                    code: 'header',
                                    name: '请求头参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'header',
                                    _codePath: ['header'],
                                    _idpath: ['6560992'],
                                  },
                                  {
                                    attrId: '030594',
                                    code: 'path',
                                    name: '请求路径参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'path',
                                    _codePath: ['path'],
                                    _idpath: ['030594'],
                                  },
                                  {
                                    attrId: '394231',
                                    code: 'query',
                                    name: 'URL 参数',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    key: 'query',
                                    _codePath: ['query'],
                                    _idpath: ['394231'],
                                  },
                                  {
                                    attrId: '9965187',
                                    code: 'body',
                                    name: '请求体',
                                    type: 'object',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    children: [
                                      {
                                        attrId: '872194',
                                        code: 'attrValueId',
                                        name: '新增节点',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'body.attrValueId',
                                        value: {
                                          type: [
                                            'datasource',
                                            'local_val',
                                            'data',
                                          ],
                                          code: 'lowData.attrValueId',
                                        },
                                        _codePath: ['body', 'attrValueId'],
                                        _idpath: ['9965187', '872194'],
                                      },
                                      {
                                        attrId: '664957',
                                        code: 'attrValue',
                                        name: '新增节点',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        _codePath: ['body', 'attrValue'],
                                        _idpath: ['9965187', '664957'],
                                      },
                                      {
                                        attrId: '665257',
                                        code: 'attrValueName',
                                        name: '新增节点',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        _codePath: ['body', 'attrValueName'],
                                        _idpath: ['9965187', '665257'],
                                      },
                                      {
                                        attrId: '21475',
                                        code: 'pageSize',
                                        name: '新增节点',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        _codePath: ['body', 'pageSize'],
                                        _idpath: ['9965187', '21475'],
                                        value: {
                                          type: ['customize'],
                                          code: '5',
                                        },
                                      },
                                      {
                                        attrId: '562319',
                                        code: 'pageNum',
                                        name: '新增节点',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        _codePath: ['body', 'pageNum'],
                                        _idpath: ['9965187', '562319'],
                                        value: {
                                          type: ['customize'],
                                          code: '1',
                                        },
                                      },
                                      {
                                        attrId: '081168',
                                        code: 'attrId',
                                        name: '新增节点',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        _codePath: ['body', 'attrId'],
                                        _idpath: ['9965187', '081168'],
                                      },
                                    ],
                                    key: 'body',
                                    value: { type: [], code: '' },
                                    _codePath: ['body'],
                                    _idpath: ['9965187'],
                                  },
                                ],
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'ifelse',
                              shielding: true,
                              condition: [
                                {
                                  condId: '408087',
                                  options: {
                                    context: '$data.secondAttrData.attrId$',
                                    operate: 'notEmpty',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 169079390143978100,
                              elseIfs: [],
                              line_number: 5,
                              callback1: [
                                {
                                  type: 'reloadDataSource',
                                  dataId: 169079395227015170,
                                  shielding: true,
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '683367',
                                    pageJsonId: '69315',
                                    dataSourceId: 169076898494472740,
                                    dataSourceName:
                                      'qryDcAttrValueListByPraAttrValueId',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '6560992',
                                        code: 'header',
                                        name: '请求头参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'header',
                                        _codePath: ['header'],
                                        _idpath: ['6560992'],
                                      },
                                      {
                                        attrId: '030594',
                                        code: 'path',
                                        name: '请求路径参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'path',
                                        _codePath: ['path'],
                                        _idpath: ['030594'],
                                      },
                                      {
                                        attrId: '394231',
                                        code: 'query',
                                        name: 'URL 参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'query',
                                        _codePath: ['query'],
                                        _idpath: ['394231'],
                                      },
                                      {
                                        attrId: '9965187',
                                        code: 'body',
                                        name: '请求体',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '872194',
                                            code: 'attrValueId',
                                            name: '新增节点',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            key: 'body.attrValueId',
                                            value: {
                                              type: [
                                                'datasource',
                                                'local_val',
                                                'data',
                                              ],
                                              code: 'lowData.attrValueId',
                                            },
                                            _codePath: ['body', 'attrValueId'],
                                            _idpath: ['9965187', '872194'],
                                          },
                                          {
                                            attrId: '664957',
                                            code: 'attrValue',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: ['body', 'attrValue'],
                                            _idpath: ['9965187', '664957'],
                                          },
                                          {
                                            attrId: '665257',
                                            code: 'attrValueName',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: [
                                              'body',
                                              'attrValueName',
                                            ],
                                            _idpath: ['9965187', '665257'],
                                          },
                                          {
                                            attrId: '21475',
                                            code: 'pageSize',
                                            name: '新增节点',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: ['body', 'pageSize'],
                                            _idpath: ['9965187', '21475'],
                                            value: {
                                              type: ['customize'],
                                              code: '5',
                                            },
                                          },
                                          {
                                            attrId: '562319',
                                            code: 'pageNum',
                                            name: '新增节点',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: ['body', 'pageNum'],
                                            _idpath: ['9965187', '562319'],
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '081168',
                                            code: 'attrId',
                                            name: '新增节点',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: ['body', 'attrId'],
                                            _idpath: ['9965187', '081168'],
                                          },
                                        ],
                                        key: 'body',
                                        value: { type: [], code: '' },
                                        _codePath: ['body'],
                                        _idpath: ['9965187'],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
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
                      ];
                      eventDatasetDataSource188.params =
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
                        eventDatasetDataSource188,
                        { rowId, row, index },
                        'setDataSource',
                        {
                          id: 'setDataSource',
                          name: 'setDataSource',
                          type: 'setDataSource',
                          platform: 'pc',
                        },
                      );
                      const eventDataifelse502: any = [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '408087',
                              options: {
                                context: '$data.secondAttrData.attrId$',
                                operate: 'notEmpty',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 169079415448511600,
                          elseIfs: [],
                          line_number: 7,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 169079416768993150,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '746992',
                                pageJsonId: '69315',
                                dataSourceId: 169051061994918000,
                                dataSourceName: 'local_val',
                                dataSourceRelType: 'custom',
                                dataSourceSetValue: [
                                  {
                                    attrId: '763992',
                                    code: 'attrValueId',
                                    name: '属性值标识',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['context', '$index$'],
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '191536',
                                    code: 'lowData',
                                    name: '选择行对象',
                                    type: 'object',
                                    initialData: { type: 'static' },
                                    showInput: true,
                                    value: {
                                      type: ['context', '$row$'],
                                      hideAttr: false,
                                      code: '',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                                targetDataSourcePaths: [],
                              },
                              line_number: 8,
                              callback1: [
                                {
                                  type: 'reloadDataSource',
                                  dataId: 169079418487514270,
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'page',
                                    id: '16336096',
                                    pageJsonId: '69315',
                                    dataSourceId: 169076898494472740,
                                    dataSourceName:
                                      'qryDcAttrValueListByPraAttrValueId',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '6560992',
                                        code: 'header',
                                        name: '请求头参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'header',
                                        _codePath: ['header'],
                                        _idpath: ['6560992'],
                                      },
                                      {
                                        attrId: '030594',
                                        code: 'path',
                                        name: '请求路径参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'path',
                                        _codePath: ['path'],
                                        _idpath: ['030594'],
                                      },
                                      {
                                        attrId: '394231',
                                        code: 'query',
                                        name: 'URL 参数',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        key: 'query',
                                        _codePath: ['query'],
                                        _idpath: ['394231'],
                                      },
                                      {
                                        attrId: '9965187',
                                        code: 'body',
                                        name: '请求体',
                                        type: 'object',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        children: [
                                          {
                                            attrId: '872194',
                                            code: 'attrValueId',
                                            name: '新增节点',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            key: 'body.attrValueId',
                                            value: {
                                              type: [
                                                'datasource',
                                                'local_val',
                                                'data',
                                              ],
                                              code: 'lowData.attrValueId',
                                            },
                                            _codePath: ['body', 'attrValueId'],
                                            _idpath: ['9965187', '872194'],
                                          },
                                          {
                                            attrId: '664957',
                                            code: 'attrValue',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: ['body', 'attrValue'],
                                            _idpath: ['9965187', '664957'],
                                          },
                                          {
                                            attrId: '665257',
                                            code: 'attrValueName',
                                            name: '新增节点',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: [
                                              'body',
                                              'attrValueName',
                                            ],
                                            _idpath: ['9965187', '665257'],
                                          },
                                          {
                                            attrId: '21475',
                                            code: 'pageSize',
                                            name: '新增节点',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: ['body', 'pageSize'],
                                            _idpath: ['9965187', '21475'],
                                            value: {
                                              type: ['customize'],
                                              code: '5',
                                            },
                                          },
                                          {
                                            attrId: '562319',
                                            code: 'pageNum',
                                            name: '新增节点',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: ['body', 'pageNum'],
                                            _idpath: ['9965187', '562319'],
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '081168',
                                            code: 'attrId',
                                            name: '新增节点',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            _codePath: ['body', 'attrId'],
                                            _idpath: ['9965187', '081168'],
                                            value: { type: [], code: '' },
                                          },
                                        ],
                                        key: 'body',
                                        value: { type: [], code: '' },
                                        _codePath: ['body'],
                                        _idpath: ['9965187'],
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 9,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                              callback2: [],
                            },
                          ],
                        },
                      ];
                      eventDataifelse502.params =
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
                        eventDataifelse502,
                        { rowId, row, index },
                        'ifelse',
                        {
                          id: 'ifelse',
                          name: 'ifelse',
                          type: 'ifelse',
                          platform: 'pc',
                        },
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Table_061387')}
                    {...injectData}
                  />
                </View>
              </VerticalView>
            </Card>
          </View>
          <View
            name={'右布局容器'}
            $$componentItem={{
              id: 'View_739623',
              uid: 'View_739623',
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
              width: 'auto',
              height: 'auto',
              overflowY: 'hidden',
              borderSetting: 'border 0px solid #e1e0e0',
              'border-left': '0px solid #e1e0e0',
              'border-right': '0px solid #e1e0e0',
              'border-top': '0px solid #e1e0e0',
              'border-bottom': '0px solid #e1e0e0',
              borderRadius: '0px 0px 0px 0px',
              margin: '0px 0px 0px 8px',
              flex: 1,
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_739623')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              extendNum={3}
              title={'下级规格'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              titleColor={'#1c242e'}
              headerColor={'#ffffff'}
              formItemIndex={0}
              extend={[
                {
                  id: '220724',
                  title: '新增级联',
                  iconPos: 'left',
                  btnType: 'primary',
                },
                {
                  id: '929105',
                  title: '清空级联',
                  iconPos: 'left',
                  btnType: 'danger',
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
                id: 'Card_9188683',
                uid: 'Card_9188683',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'hidden',
                margin: '0 0 16px 0',
                width: 'auto',
                height: 'auto',
              }}
              onClickBtn1={(e: any) => {
                const eventDataifelse503: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '3219367',
                        options: {
                          context: '$data.secondAttrData.attrId$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$data.local_val.lowData$',
                          operate: 'notEmpty',
                        },
                        condId: '67157',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169104875387845860,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169104875387902200,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169104875387900670,
                            children: [],
                            todoOptions: ['msgType', 'value', 'duration'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '571311',
                              pageJsonId: '69315',
                              type: 'info',
                              value: '下级属性或者上级属性值未选择',
                              duration: null,
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                            line_number: 4,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 169104875387900670,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '571311',
                              pageJsonId: '69315',
                              type: 'info',
                              value: '下级属性或者上级属性值未选择',
                              duration: null,
                            },
                            line_number: 4,
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'showCustomModal',
                        dataId: 169104875387937660,
                        options: {
                          compId: 'showCustomModal',
                          compName: 'page',
                          id: '5700485',
                          pageJsonId: '69315',
                          modalname: '/addAttrValueRel',
                          pageId: '1003183883381542912',
                          modalPath: '/addAttrValueRel',
                          paramsObj: {
                            bizData: '$data.secondAttrData.attrId$',
                            sceneCode: '$data.local_val.lowData.attrValueId$',
                          },
                          paramsObjKeyValueMap: {
                            bizData: '$data.secondAttrData.attrId$',
                            sceneCode: '$data.local_val.lowData.attrValueId$',
                          },
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'customActionCode',
                        dataId: 169104875387936800,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '055494',
                          pageJsonId: '69315',
                          code: 'function main(data,state,success,fail){console.log(data.qryDcAttrValueListByPraAttrValueId.resultData.records)};',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDataifelse503.params =
                  [{ title: '新增级联点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(eventDataifelse503, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              onClickBtn2={(e: any) => {
                const eventDataifelse504: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '3219367',
                        options: {
                          context: '$data.secondAttrData.attrId$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          context: '$data.local_val.lowData$',
                          operate: 'notEmpty',
                        },
                        condId: '67157',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169104877499077220,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169104877499063600,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169104877499038340,
                            children: [],
                            todoOptions: ['msgType', 'value', 'duration'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '580083',
                              pageJsonId: '69315',
                              type: 'info',
                              value: '下级属性或者上级属性值未选择',
                              duration: null,
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                            line_number: 9,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 169104877499038340,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '580083',
                              pageJsonId: '69315',
                              type: 'info',
                              value: '下级属性或者上级属性值未选择',
                              duration: null,
                            },
                            line_number: 9,
                          },
                        ],
                      },
                    ],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169104877499055900,
                        shielding: true,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '116817',
                          pageJsonId: '69315',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'delDcAttrValueRelById',
                          _apiCode: 'delDcAttrValueRel',
                          _source: 'rhin',
                          _sourceName: '删除规格属性值联级关系-zrj',
                          _serviceId: '1003201853239496704',
                          _serviceTitle:
                            '删除规格属性值联级关系-zrj: delDcAttrValueRel',
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
                                  dataKey: '430134_root.header',
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
                                  dataKey: '430134_root.path',
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
                                  dataKey: '430134_root.query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'attrId',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.attrId',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-0',
                                      id: 'root.body.attrId',
                                      dataKey: '430134_root.body.attrId',
                                      value: {
                                        type: [
                                          'datasource',
                                          'secondAttrData',
                                          'data',
                                        ],
                                        code: 'attrId',
                                      },
                                    },
                                    {
                                      code: 'parAttrValueId',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.parAttrValueId',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-1',
                                      id: 'root.body.parAttrValueId',
                                      dataKey:
                                        '430134_root.body.parAttrValueId',
                                      value: {
                                        type: [
                                          'datasource',
                                          'local_val',
                                          'data',
                                        ],
                                        code: 'lowData.attrValueId',
                                      },
                                    },
                                    {
                                      code: 'attrValueId',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'root.body.attrValueId',
                                      compType: 'Input',
                                      parents: ['root', 'body'],
                                      parentType: 'object',
                                      parentKey: '0-3',
                                      key: '0-3-2',
                                      id: 'root.body.attrValueId',
                                      dataKey: '430134_root.body.attrValueId',
                                    },
                                  ],
                                  _id: 'root.body',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  parentKey: '0',
                                  key: '0-3',
                                  id: 'root.body',
                                  dataKey: '430134_root.body',
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              key: '0',
                              id: 'root',
                              dataKey: '430134_root',
                            },
                          ],
                          params: 'object',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 169104877499059680,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '0563662',
                              pageJsonId: '69315',
                              customFuncName: 'refreshSecondAttrValue',
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                          {
                            type: 'showMessage',
                            dataId: 169104877499013660,
                            shielding: true,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '156402',
                              pageJsonId: '69315',
                              type: 'success',
                              value: '清空成功',
                            },
                            line_number: 4,
                          },
                        ],
                        callback2: [],
                      },
                      {
                        type: 'showModal',
                        dataId: 169104877499074460,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '7033677',
                          pageJsonId: '69315',
                          type: 'confirm',
                          content: '是否清空级联关系',
                          okText: '确认',
                          cancelText: '取消',
                        },
                        line_number: 5,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 169104877499018000,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '907727',
                              pageJsonId: '69315',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'delDcAttrValueRelById',
                              _apiCode: 'delDcAttrValueRel',
                              _source: 'rhin',
                              _sourceName: '删除规格属性值联级关系-zrj',
                              _serviceId: '1003201853239496704',
                              _serviceTitle:
                                '删除规格属性值联级关系-zrj: delDcAttrValueRel',
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
                                      dataKey: '430134_root.header',
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
                                      dataKey: '430134_root.path',
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
                                      dataKey: '430134_root.query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'attrId',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'root.body.attrId',
                                          compType: 'Input',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                          id: 'root.body.attrId',
                                          dataKey: '430134_root.body.attrId',
                                          value: {
                                            type: [
                                              'datasource',
                                              'secondAttrData',
                                              'data',
                                            ],
                                            code: 'attrId',
                                          },
                                        },
                                        {
                                          code: 'parAttrValueId',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'root.body.parAttrValueId',
                                          compType: 'Input',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-1',
                                          id: 'root.body.parAttrValueId',
                                          dataKey:
                                            '430134_root.body.parAttrValueId',
                                          value: {
                                            type: [
                                              'datasource',
                                              'local_val',
                                              'data',
                                            ],
                                            code: 'lowData.attrValueId',
                                          },
                                        },
                                        {
                                          code: 'attrValueId',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'root.body.attrValueId',
                                          compType: 'Input',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-2',
                                          id: 'root.body.attrValueId',
                                          dataKey:
                                            '430134_root.body.attrValueId',
                                        },
                                      ],
                                      _id: 'root.body',
                                      compType: 'Input',
                                      parents: ['root'],
                                      parentType: 'object',
                                      parentKey: '0',
                                      key: '0-3',
                                      id: 'root.body',
                                      dataKey: '430134_root.body',
                                    },
                                  ],
                                  _id: 'root',
                                  compType: 'Input',
                                  isRoot: true,
                                  parents: [],
                                  key: '0',
                                  id: 'root',
                                  dataKey: '430134_root',
                                },
                              ],
                              params: 'object',
                            },
                            line_number: 6,
                            callback1: [
                              {
                                type: 'callSelfFunc',
                                dataId: 169104877499074880,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '953465',
                                  pageJsonId: '69315',
                                  customFuncName: 'refreshSecondAttrValue',
                                },
                                line_number: 7,
                                callback1: [],
                                callback2: [],
                              },
                              {
                                type: 'showMessage',
                                dataId: 169104877499091330,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '4866337',
                                  pageJsonId: '69315',
                                  type: 'success',
                                  value: '清空成功',
                                },
                                line_number: 8,
                              },
                            ],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDataifelse504.params =
                  [{ title: '清空级联点击回调', value: '$e$', name: 'e' }] ||
                  [];
                CMDGenerator(eventDataifelse504, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_9188683')}
              {...injectData}
            >
              <VerticalView
                name={'上下布局'}
                $$componentItem={{
                  id: 'VerticalView_696196',
                  uid: 'VerticalView_696196',
                  type: 'VerticalView',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  display: 'block',
                  padding: '0px 0px 0px 0px',
                  width: 'auto',
                  height: 'auto',
                  overflowY: 'hidden',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'VerticalView_696196')}
                {...injectData}
              >
                <View
                  name={'上布局容器'}
                  $$componentItem={{
                    id: 'View_841967',
                    uid: 'View_841967',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    display: 'block',
                    padding: '0px 0px 0px 0px',
                    height: 'auto',
                    width: 'auto',
                    overflowY: 'hidden',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_841967')}
                  {...injectData}
                >
                  <Form
                    name={'下级属性值表单'}
                    colSpan={12}
                    labelCol={8}
                    wrapperCol={16}
                    colon={true}
                    layout={'horizontal'}
                    labelAlign={'right'}
                    header={'标题'}
                    colSpace={24}
                    rowSpace={16}
                    formCode={'Form_990296'}
                    $$componentItem={{
                      id: 'Form_602592',
                      uid: 'Form_602592',
                      type: 'Form',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ padding: '0px 0px 0px 0px', overflow: 'hidden' }}
                    ref={(r: any) => refs.setComponentRef(r, 'Form_602592')}
                    {...injectData}
                  >
                    <Input
                      name={'规格属性'}
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
                      formItemIndex={0}
                      fieldName={'attrName'}
                      value={data?.secondAttrData?.attrName}
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
                        id: 'Input_4955187',
                        uid: 'Input_4955187',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={true}
                      isFormRootChild={true}
                      ref={(r: any) => refs.setComponentRef(r, 'Input_4955187')}
                      {...injectData}
                    />
                    <Input
                      name={'属性值名称'}
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
                      fieldName={'attrValueName'}
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
                        id: 'Input_873801',
                        uid: 'Input_873801',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacallSelfFunc549: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 169077715640191360,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '629799',
                              pageJsonId: '69315',
                              customFuncName: 'refreshSecondAttrValue',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc549.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc549,
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
                      ref={(r: any) => refs.setComponentRef(r, 'Input_873801')}
                      {...injectData}
                    />
                    <Input
                      name={'属性值'}
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
                      formItemIndex={2}
                      fieldName={'attrValue'}
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
                        id: 'Input_658476',
                        uid: 'Input_658476',
                        type: 'Input',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      isFormRootChild={true}
                      onPressEnter={(e: any) => {
                        const eventDatacallSelfFunc550: any = [
                          {
                            type: 'callSelfFunc',
                            dataId: 169077716584376420,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '930116',
                              pageJsonId: '69315',
                              customFuncName: 'refreshSecondAttrValue',
                            },
                            line_number: 1,
                            callback1: [],
                            callback2: [],
                          },
                        ];
                        eventDatacallSelfFunc550.params =
                          [
                            {
                              title: '输入框取值',
                              name: 'e',
                              value: '$e.target.value$',
                            },
                          ] || [];
                        CMDGenerator(
                          eventDatacallSelfFunc550,
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
                      ref={(r: any) => refs.setComponentRef(r, 'Input_658476')}
                      {...injectData}
                    />
                    <View
                      name={'布局容器'}
                      backgroundType={{ type: 'cleanColor', color: undefined }}
                      $$componentItem={{
                        id: 'View_5690884',
                        uid: 'View_5690884',
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
                          formItemIndex: 3,
                          style: undefined,
                          selfSpan: undefined,
                        },
                      }}
                      style={{
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '0px 0px 0px 0px',
                        width: 'auto',
                        justifyContent: 'flex-end',
                        height: 'auto',
                      }}
                      ref={(r: any) => refs.setComponentRef(r, 'View_5690884')}
                      {...injectData}
                    >
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
                          id: 'Button_549846',
                          uid: 'Button_549846',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{ width: 'fit-content' }}
                        onClick={(e: any) => {
                          const eventDatacallSelfFunc551: any = [
                            {
                              type: 'callSelfFunc',
                              dataId: 169077717581735000,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '8999748',
                                pageJsonId: '69315',
                                customFuncName: 'refreshSecondAttrValue',
                              },
                              line_number: 1,
                              callback1: [],
                              callback2: [],
                            },
                          ];
                          eventDatacallSelfFunc551.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDatacallSelfFunc551,
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
                          refs.setComponentRef(r, 'Button_549846')
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
                          id: 'Button_421424',
                          uid: 'Button_421424',
                          type: 'Button',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          width: 'fit-content',
                          margin: '0px 0px 0px 8px',
                        }}
                        onClick={(e: any) => {
                          const eventDataclearValue174: any = [
                            {
                              type: 'clearValue',
                              dataId: 169077721508219140,
                              options: {
                                compId: 'Input_873801',
                                compLib: 'comm',
                                pageJsonId: '69315',
                                compName: 'Input',
                                id: '182609',
                              },
                              line_number: 1,
                            },
                          ];
                          eventDataclearValue174.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDataclearValue174,
                            { e },
                            'clearValue',
                            {
                              id: 'clearValue',
                              name: 'clearValue',
                              type: 'clearValue',
                              platform: 'pc',
                            },
                          );
                          const eventDataclearValue175: any = [
                            {
                              type: 'clearValue',
                              dataId: 169077721854598270,
                              options: {
                                compId: 'Input_658476',
                                compLib: 'comm',
                                pageJsonId: '69315',
                                compName: 'Input',
                                id: '76506',
                              },
                              line_number: 2,
                            },
                          ];
                          eventDataclearValue175.params =
                            [{ title: '事件对象', value: '$e$', name: 'e' }] ||
                            [];
                          CMDGenerator(
                            eventDataclearValue175,
                            { e },
                            'clearValue',
                            {
                              id: 'clearValue',
                              name: 'clearValue',
                              type: 'clearValue',
                              platform: 'pc',
                            },
                          );
                        }}
                        ref={(r: any) =>
                          refs.setComponentRef(r, 'Button_421424')
                        }
                        {...injectData}
                      />
                    </View>
                  </Form>
                </View>
                <View
                  name={'下布局容器'}
                  $$componentItem={{
                    id: 'View_5014642',
                    uid: 'View_5014642',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    display: 'block',
                    padding: '0px 0px 0px 0px',
                    height: 'auto',
                    width: 'auto',
                    overflowY: 'hidden',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_5014642')}
                  {...injectData}
                >
                  <Table
                    name={'表格'}
                    isFlexColumn={false}
                    extendNum={3}
                    adjustModel={'auto'}
                    pageSize={
                      data?.qryDcAttrValueListByPraAttrValueId?.resultData?.size
                    }
                    current={
                      data?.qryDcAttrValueListByPraAttrValueId?.resultData
                        ?.current
                    }
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
                        title: '属性值标识',
                        key: 'attrValueId',
                        dataIndex: 'attrValueId',
                        className: '',
                        id: '833374',
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
                        title: '属性值名称',
                        key: 'attrValueName',
                        dataIndex: 'attrValueName',
                        className: 'divider',
                        id: '90797837',
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
                        title: '属性值编码',
                        key: 'attrValueCode',
                        dataIndex: 'attrValueCode',
                        className: 'divider',
                        id: '8826194',
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
                        title: '属性值',
                        key: 'attrValue',
                        dataIndex: 'attrValue',
                        className: 'divider',
                        id: '654643',
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
                        title: '排序',
                        key: 'sort',
                        dataIndex: 'sort',
                        className: 'divider',
                        id: '38606',
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
                    bordered={'segmentation'}
                    size={'small'}
                    fixedAction={false}
                    rowSelection={undefined}
                    showHead={false}
                    showTotal={true}
                    showSizeChanger={true}
                    showQuickJumper={true}
                    pageSizeOptions={'[5,10,20]'}
                    customNum={3}
                    rowKey={'attrValueId'}
                    dataSource={
                      data?.qryDcAttrValueListByPraAttrValueId?.resultData
                        ?.records
                    }
                    total={
                      data?.qryDcAttrValueListByPraAttrValueId?.resultData
                        ?.total
                    }
                    fieldName={'total'}
                    rowActions={[
                      {
                        title: '删除',
                        iconPos: 'left',
                        icon: { theme: 'outlined', type: 'delete' },
                        type: 'delete',
                        id: '955902',
                        checked: true,
                      },
                    ]}
                    extend={[]}
                    dataSourceFromDataSourceConfig={
                      'data.qryDcAttrValueListByPraAttrValueId.resultData.records'
                    }
                    $$componentItem={{
                      id: 'Table_156404',
                      uid: 'Table_156404',
                      type: 'Table',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ margin: '20px 0px 0px 0px' }}
                    onPageChange={(page: any, pageSize: any) => {
                      const eventDatareloadDataSource92: any = [
                        {
                          type: 'reloadDataSource',
                          dataId: 169078307365186500,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '70344',
                            pageJsonId: '69315',
                            dataSourceId: 169076898494472740,
                            dataSourceName:
                              'qryDcAttrValueListByPraAttrValueId',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '6560992',
                                code: 'header',
                                name: '请求头参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['header'],
                                _idpath: ['6560992'],
                              },
                              {
                                attrId: '030594',
                                code: 'path',
                                name: '请求路径参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['path'],
                                _idpath: ['030594'],
                              },
                              {
                                attrId: '394231',
                                code: 'query',
                                name: 'URL 参数',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                _codePath: ['query'],
                                _idpath: ['394231'],
                              },
                              {
                                attrId: '9965187',
                                code: 'body',
                                name: '请求体',
                                type: 'object',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                children: [
                                  {
                                    attrId: '664957',
                                    code: 'attrValue',
                                    name: '新增节点',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: {
                                      type: [
                                        'form',
                                        'Form_602592',
                                        'getFieldsValue',
                                      ],
                                      code: 'attrValue',
                                    },
                                    _codePath: ['body', 'attrValue'],
                                    _idpath: ['9965187', '664957'],
                                  },
                                  {
                                    attrId: '665257',
                                    code: 'attrValueName',
                                    name: '新增节点',
                                    type: 'string',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: {
                                      type: [
                                        'form',
                                        'Form_602592',
                                        'getFieldsValue',
                                      ],
                                      code: 'attrValueName',
                                    },
                                    _codePath: ['body', 'attrValueName'],
                                    _idpath: ['9965187', '665257'],
                                  },
                                  {
                                    attrId: '21475',
                                    code: 'pageSize',
                                    name: '新增节点',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$pageSize$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                    _codePath: ['body', 'pageSize'],
                                    _idpath: ['9965187', '21475'],
                                  },
                                  {
                                    attrId: '562319',
                                    code: 'pageNum',
                                    name: '新增节点',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$page$'],
                                      hideAttr: true,
                                      code: '',
                                    },
                                    _codePath: ['body', 'pageNum'],
                                    _idpath: ['9965187', '562319'],
                                  },
                                  {
                                    attrId: '872194',
                                    code: 'attrValueId',
                                    name: '新增节点',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['datasource', 'local_val', 'data'],
                                      code: 'lowData.attrValueId',
                                    },
                                    _codePath: ['body', 'attrValueId'],
                                    _idpath: ['9965187', '872194'],
                                  },
                                  {
                                    attrId: '081168',
                                    code: 'attrId',
                                    name: '新增节点',
                                    type: 'long',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    _codePath: ['body', 'attrId'],
                                    _idpath: ['9965187', '081168'],
                                    value: {
                                      type: [
                                        'datasource',
                                        'secondAttrData',
                                        'data',
                                      ],
                                      code: 'attrId',
                                    },
                                  },
                                ],
                                _codePath: ['body'],
                                _idpath: ['9965187'],
                              },
                            ],
                            otherObjectArrayOptions: {},
                            targetDataSourcePaths: [],
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatareloadDataSource92.params =
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
                        eventDatareloadDataSource92,
                        { page, pageSize },
                        'reloadDataSource',
                        {
                          id: 'reloadDataSource',
                          name: 'reloadDataSource',
                          type: 'reloadDataSource',
                          platform: 'pc',
                        },
                      );
                    }}
                    onRowDelete={(rowId: any, row: any, index: any) => {
                      // console 169080405901472100
                      console.log(row);
                      const eventDataapiRequest764: any = [
                        {
                          type: 'apiRequest',
                          dataId: 169080410020710800,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '589178',
                            pageJsonId: '69315',
                            sync: false,
                            actionTitle: '',
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'delDcAttrValueRelById',
                            _apiCode: 'delDcAttrValueRel',
                            _source: 'rhin',
                            _sourceName: '删除规格属性值联级关系-zrj',
                            _serviceId: '1003201853239496704',
                            _serviceTitle:
                              '删除规格属性值联级关系-zrj: delDcAttrValueRel',
                            valueType: 'object',
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
                                    dataKey: '589178_root.header',
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
                                    dataKey: '589178_root.path',
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
                                    dataKey: '589178_root.query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'attrId',
                                        name: '新增节点',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'root.body.attrId',
                                        compType: 'Input',
                                        parents: ['root', 'body'],
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-0',
                                        id: 'root.body.attrId',
                                        dataKey: '589178_root.body.attrId',
                                        value: {
                                          type: [
                                            'datasource',
                                            'secondAttrData',
                                            'data',
                                          ],
                                          code: 'attrId',
                                        },
                                      },
                                      {
                                        code: 'parAttrValueId',
                                        name: '新增节点',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'root.body.parAttrValueId',
                                        compType: 'Input',
                                        parents: ['root', 'body'],
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-1',
                                        id: 'root.body.parAttrValueId',
                                        dataKey:
                                          '589178_root.body.parAttrValueId',
                                        value: {
                                          type: [
                                            'datasource',
                                            'local_val',
                                            'data',
                                          ],
                                          code: 'lowData.attrValueId',
                                        },
                                      },
                                      {
                                        code: 'attrValueId',
                                        name: '新增节点',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'root.body.attrValueId',
                                        compType: 'Input',
                                        parents: ['root', 'body'],
                                        parentType: 'object',
                                        parentKey: '0-3',
                                        key: '0-3-2',
                                        id: 'root.body.attrValueId',
                                        dataKey: '589178_root.body.attrValueId',
                                        value: {
                                          type: ['context', '$row$'],
                                          hideAttr: false,
                                          code: 'attrValueId',
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
                                    dataKey: '589178_root.body',
                                  },
                                ],
                                _id: 'root',
                                compType: 'Input',
                                isRoot: true,
                                parents: [],
                                key: '0',
                                id: 'root',
                                dataKey: '589178_root',
                              },
                            ],
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 169085572411282620,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '860848',
                                pageJsonId: '69315',
                                customFuncName: 'refreshSecondAttrValue',
                              },
                              line_number: 3,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'showMessage',
                              dataId: 169085573356702940,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '995698',
                                pageJsonId: '69315',
                                type: 'success',
                                value: '删除成功',
                              },
                              line_number: 4,
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDataapiRequest764.params =
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
                        eventDataapiRequest764,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Table_156404')}
                    {...injectData}
                  />
                </View>
              </VerticalView>
            </Card>
          </View>
        </HorizontalView>
      </View>
    </div>
  );
};

export default withPageHOC(AttrValueRel$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
