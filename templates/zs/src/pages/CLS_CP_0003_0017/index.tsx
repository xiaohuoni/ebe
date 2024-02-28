// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Form,
  Checkbox,
  Input,
  Select,
  DatePicker,
  TextArea,
  Row,
  StdUpload,
  Table,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1010791891404554240';
const ClsCp_0003_0017$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_2689176: any) => {
    const eventDatacustomActionCode98: any = [
      {
        type: 'customActionCode',
        dataId: 169269453798232580,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '796429',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_2689176;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 169269453798384260,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '8504658',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
              modalPath: '/commonAuditOrder',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode98.params =
      [
        {
          title: '事件入参',
          name: 'options_2689176',
          value: '$options_2689176$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode98,
      { options_2689176 },
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
    fileUpload,
  }));

  useEffect(() => {
    const eventDataapiRequest286: any = [
      {
        type: 'apiRequest',
        dataId: 169260013077362600,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0461003',
          pageJsonId: '246894',
          sync: false,
          actionTitle: '紧急程度单选框初始化',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
                  dataKey: '0461003_root.header',
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
                      dataKey: '0461003_root.path.attrCode',
                      value: { type: ['customize'], code: 'urgencyGrade' },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '0461003_root.path',
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
                  dataKey: '0461003_root.query',
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
                  dataKey: '0461003_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '0461003_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169260033811694200,
            options: {
              compId: 'Input_7328205',
              compLib: 'comm',
              pageJsonId: '246894',
              compName: 'Select',
              id: '60722',
              data: '$reply_0461003?.resultData$',
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
    eventDataapiRequest286.params = [] || [];
    CMDGenerator(eventDataapiRequest286, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest287: any = [
      {
        type: 'apiRequest',
        dataId: 169277050856508960,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '743138',
          pageJsonId: '246894',
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
                  dataKey: '743138_root.header',
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
                      dataKey: '743138_root.path.attrCode',
                      value: { type: ['customize'], code: 'devChannel' },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '743138_root.path',
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
                  dataKey: '743138_root.query',
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
                  dataKey: '743138_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '743138_root',
            },
          ],
          params: 'object',
          actionTitle: '发展渠道单选框初始化',
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169277059155190530,
            options: {
              compId: 'Input_0925246',
              compLib: 'comm',
              pageJsonId: '246894',
              compName: 'Select',
              id: '4405558',
              data: '$reply_743138?.resultData$',
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
    eventDataapiRequest287.params = [] || [];
    CMDGenerator(eventDataapiRequest287, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest288: any = [
      {
        type: 'apiRequest',
        dataId: 169277063125363360,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '98417',
          pageJsonId: '246894',
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
                  dataKey: '98417_root.header',
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
                      dataKey: '98417_root.path.attrCode',
                      value: { type: ['customize'], code: 'portProdType' },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '98417_root.path',
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
                  dataKey: '98417_root.query',
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
                  dataKey: '98417_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '98417_root',
            },
          ],
          params: 'object',
          actionTitle: '产品类型',
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169277069841715400,
            options: {
              compId: 'Select_842825',
              compLib: 'comm',
              pageJsonId: '246894',
              compName: 'Select',
              id: '107937',
              data: '$reply_98417?.resultData$',
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
    eventDataapiRequest288.params = [] || [];
    CMDGenerator(eventDataapiRequest288, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest289: any = [
      {
        type: 'apiRequest',
        dataId: 169277072533893200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '123878',
          pageJsonId: '246894',
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
                  dataKey: '123878_root.header',
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
                      dataKey: '123878_root.path.attrCode',
                      value: { type: ['customize'], code: 'busiScale' },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '123878_root.path',
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
                  dataKey: '123878_root.query',
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
                  dataKey: '123878_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '123878_root',
            },
          ],
          params: 'object',
          actionTitle: '业务规模',
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169277076896418000,
            options: {
              compId: 'Select_687565',
              compLib: 'comm',
              pageJsonId: '246894',
              compName: 'Select',
              id: '15414284',
              data: '$reply_123878?.resultData$',
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
    eventDataapiRequest289.params = [] || [];
    CMDGenerator(eventDataapiRequest289, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest290: any = [
      {
        type: 'apiRequest',
        dataId: 169277081956981860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '039494',
          pageJsonId: '246894',
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
                  dataKey: '039494_root.header',
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
                      dataKey: '039494_root.path.attrCode',
                      value: { type: ['customize'], code: 'projectSituation' },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '039494_root.path',
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
                  dataKey: '039494_root.query',
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
                  dataKey: '039494_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '039494_root',
            },
          ],
          params: 'object',
        },
        line_number: 9,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169277084773546340,
            options: {
              compId: 'Select_297495',
              compLib: 'comm',
              pageJsonId: '246894',
              compName: 'Select',
              id: '856622',
              data: '$reply_039494?.resultData$',
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
    eventDataapiRequest290.params = [] || [];
    CMDGenerator(eventDataapiRequest290, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest291: any = [
      {
        type: 'apiRequest',
        dataId: 169277086528926660,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '477426',
          pageJsonId: '246894',
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
                  dataKey: '477426_root.header',
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
                      dataKey: '477426_root.path.attrCode',
                      value: { type: ['customize'], code: 'applyReason' },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '477426_root.path',
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
                  dataKey: '477426_root.query',
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
                  dataKey: '477426_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '477426_root',
            },
          ],
          params: 'object',
        },
        line_number: 11,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 169277089771067260,
            options: {
              compId: 'Select_903308',
              compLib: 'comm',
              pageJsonId: '246894',
              compName: 'Select',
              id: '683456',
              data: '$reply_477426?.resultData$',
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
    eventDataapiRequest291.params = [] || [];
    CMDGenerator(eventDataapiRequest291, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest292: any = [
      {
        type: 'apiRequest',
        dataId: 169277299773016030,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '907181',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'selectCataLogTierByCode',
          _apiCode: 'selectCataLogTierByCode',
          _source: 'rhin',
          _serviceId: '879306380283035648',
          _serviceTitle:
            '根据类目编码获取类目层级信息-hdb: selectCataLogTierByCode',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: ['root'],
              id: 'header',
              dataKey: '9817429_header',
              key: '0-0',
              parentType: 'object',
              parentKey: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: ['root'],
              id: 'path',
              dataKey: '9817429_path',
              key: '0-1',
              parentType: 'object',
              parentKey: '0',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: ['root'],
              id: 'query',
              dataKey: '9817429_query',
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
                  code: 'catalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['root', 'body'],
                  id: 'body.catalogCode',
                  dataKey: '9817429_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '0-3',
                  key: '0-3-0',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: ['root'],
              id: 'body',
              dataKey: '9817429_body',
              key: '0-3',
              parentType: 'object',
              parentKey: '0',
            },
          ],
          _sourceName: '根据类目编码获取类目层级信息-hdb',
        },
        line_number: 13,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169277299773050300,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '114429',
              pageJsonId: '537892',
              dataSourceId: 169268515623767400,
              dataSourceName: 'sceneSubmit',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'fileInfo',
                  name: '附件',
                  type: 'objectArray',
                  attrId: '097237',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['fileInfo'],
                  _idpath: ['097237'],
                },
                {
                  code: 'catalogCode',
                  name: '类目编码',
                  type: 'string',
                  attrId: '4333325',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['context', '$reply_907181?.resultData.catalogCode$'],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['catalogCode'],
                  _idpath: ['4333325'],
                },
                {
                  code: 'catalogItemSubType',
                  name: '类目项子类型',
                  type: 'string',
                  attrId: '235797',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_907181?.resultData.catalogItemSubType$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['catalogItemSubType'],
                  _idpath: ['235797'],
                },
                {
                  code: 'childCatalogCode',
                  name: '子类目编码',
                  type: 'string',
                  attrId: '323328',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_907181?.resultData.childCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['childCatalogCode'],
                  _idpath: ['323328'],
                },
                {
                  code: 'parentCatalogCode',
                  name: '上级类目编码',
                  type: 'string',
                  attrId: '258953',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_907181?.resultData.parentCatalogCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['parentCatalogCode'],
                  _idpath: ['258953'],
                },
                {
                  code: 'parentCatalogItemCode',
                  name: '上级类目项编码',
                  type: 'string',
                  attrId: '952547',
                  initialData: { type: 'static' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_907181?.resultData.parentCatalogItemCode$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['parentCatalogItemCode'],
                  _idpath: ['952547'],
                },
                {
                  code: 'childCatalogDesc',
                  name: '子类目描述',
                  type: 'string',
                  attrId: '5677865',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: [
                      'context',
                      '$reply_907181?.resultData.childCatalogDesc$',
                    ],
                    hideAttr: true,
                    code: '',
                  },
                  _codePath: ['childCatalogDesc'],
                  _idpath: ['5677865'],
                },
                {
                  code: 'approveGrade',
                  name: '审批等级',
                  type: 'string',
                  attrId: '5814546',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['approveGrade'],
                  _idpath: ['5814546'],
                },
                {
                  code: 'approveGradeName',
                  name: '审批等级名称',
                  type: 'string',
                  attrId: '912764',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  _codePath: ['approveGradeName'],
                  _idpath: ['912764'],
                },
                {
                  attrId: '203325',
                  code: 'attrList',
                  name: '要素',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['attrList'],
                  _idpath: ['203325'],
                },
                {
                  attrId: '610764',
                  code: 'catalogItemCode',
                  name: '类目项编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['catalogItemCode'],
                  _idpath: ['610764'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 14,
            callback1: [
              {
                type: 'callParentCustomFunc',
                dataId: 169277299773015420,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '406081',
                  pageJsonId: '537892',
                  pathname: '/auditOrderPrepare',
                  pageId: '884045146848604160',
                  customFuncName: 'getFactor',
                  customFuncParams: '$data.sceneSubmit$',
                  modalPath: '/auditOrderPrepare',
                },
                line_number: 15,
                callback1: [],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 169277380926202750,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '6473437',
                  pageJsonId: '246894',
                  value: ['$data.sceneSubmit$', '123456'],
                },
                line_number: 16,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest292.params = [] || [];
    CMDGenerator(eventDataapiRequest292, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse155: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '56263',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169277319560590430,
        elseIfs: [],
        line_number: 17,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 169277319560527500,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '4649857',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
              actionTitle: '设置界面初始化值',
            },
            line_number: 18,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 169277319560558750,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '150702',
                  pageJsonId: '537892',
                  dataSourceId: 169268406030167520,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '363382',
                      code: 'urgencyGrade',
                      name: '紧急程度',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['urgencyGrade'],
                      _idpath: ['363382'],
                    },
                    {
                      attrId: '120117',
                      code: 'applyReason',
                      name: '申请理由',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['applyReason'],
                      _idpath: ['120117'],
                    },
                    {
                      attrId: '591542',
                      code: 'smsAppDescription',
                      name: '短信应用说明（需举例）',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['smsAppDescription'],
                      _idpath: ['591542'],
                    },
                    {
                      attrId: '429876',
                      code: 'projectSituation',
                      name: '项目情况',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['projectSituation'],
                      _idpath: ['429876'],
                    },
                    {
                      attrId: '665034',
                      code: 'busiScale',
                      name: '业务规模',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiScale'],
                      _idpath: ['665034'],
                    },
                    {
                      attrId: '4988174',
                      code: 'busiAccessNumber',
                      name: '业务对接号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiAccessNumber'],
                      _idpath: ['4988174'],
                    },
                    {
                      attrId: '230076',
                      code: 'feeApply',
                      name: '资费申请',
                      type: 'number',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['feeApply'],
                      _idpath: ['230076'],
                    },
                    {
                      attrId: '060333',
                      code: 'portProdType',
                      name: '产品类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['portProdType'],
                      _idpath: ['060333'],
                    },
                    {
                      attrId: '674016',
                      code: 'devChannel',
                      name: '发展渠道',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['devChannel'],
                      _idpath: ['674016'],
                    },
                    {
                      attrId: '4325007',
                      code: 'suggestFinishDate',
                      name: '建议完成时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['suggestFinishDate'],
                      _idpath: ['4325007'],
                    },
                    {
                      attrId: '428412',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['428412'],
                    },
                    {
                      attrId: '286862',
                      code: 'groupDetail',
                      name: '集团简介',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['groupDetail'],
                      _idpath: ['286862'],
                    },
                    {
                      attrId: '289786',
                      code: 'localFeeApply',
                      name: '本网资费申请',
                      type: 'number',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['localFeeApply'],
                      _idpath: ['289786'],
                    },
                    {
                      attrId: '916749',
                      code: 'otherFeeApply',
                      name: '异网资费申请',
                      type: 'number',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['otherFeeApply'],
                      _idpath: ['916749'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 19,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '745253',
                        options: {
                          useManual: true,
                          useObject: false,
                          operate: '==',
                          manualValue: '1002',
                        },
                        conditionType: 'checkValue',
                        objType: 'Select',
                        objId: 'Select_842825',
                      },
                    ],
                    dataId: 170192814798451680,
                    elseIfs: [],
                    line_number: 20,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 170192822565806720,
                        options: {
                          compId: ['Input_915617'],
                          compName: 'page',
                          id: '25965',
                          pageJsonId: '246894',
                          visible: '',
                          compid: ['Input_915617'],
                        },
                        line_number: 21,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 170192824658587330,
                        options: {
                          compId: ['Input_723477', 'Input_639186'],
                          compName: 'page',
                          id: '015622',
                          pageJsonId: '246894',
                          visible: 'true',
                          compid: ['Input_723477', 'Input_639186'],
                        },
                        line_number: 22,
                      },
                    ],
                  },
                ],
                callback2: [],
              },
              {
                type: 'setValue',
                dataId: 169277319560575600,
                options: {
                  compId: ['Input_348995'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '0672344',
                  valueList: {
                    Input_348995: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_348995'],
                },
                line_number: 23,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 169277319560522800,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '0715498',
              pageJsonId: '537892',
              code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
            },
            line_number: 24,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 169277319560568400,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '600764',
                  pageJsonId: '537892',
                  dataSourceId: 169269171149128770,
                  dataSourceName: 'fileInfoList',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '6482729',
                      code: 'filePath',
                      name: '附件文件路径',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '88453',
                      code: 'fileServerType',
                      name: '附件文件服务器类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '441672',
                      code: 'fileSubType',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '9946562',
                      code: 'fileType',
                      name: '附件分类-大类',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '2592642',
                      code: 'fileUrl',
                      name: '附件地址',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '6700645',
                      code: 'teacheCode',
                      name: '环节编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '526892',
                      code: 'fileCode',
                      name: '文件编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '300792',
                      code: 'createTime',
                      name: '创建时间',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '56936444',
                      code: 'createStaff',
                      name: '创建人',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '148345',
                      code: 'fileTypeName',
                      name: '附件类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                    {
                      attrId: '834968',
                      code: 'fileName',
                      name: '附件名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                    },
                  ],
                  newData: '$data_0715498$',
                  operateType: 3,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 25,
                callback1: [],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '811202',
                    options: { context: '$data_0715498$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.scene$',
                      operate: '==',
                      manualValue: 'V',
                    },
                    condId: '882317',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169277319560512800,
                elseIfs: [],
                line_number: 26,
                callback1: [
                  {
                    type: 'sysSetVisible',
                    dataId: 169277319560504670,
                    options: {
                      compId: [
                        'Table_5369494_494011',
                        'Table_5369494_494011_506325',
                        'Table_703224',
                      ],
                      compName: 'page',
                      id: '353356',
                      pageJsonId: '537892',
                      visible: '',
                      compid: [
                        'Table_5369494_494011',
                        'Table_5369494_494011_506325',
                        'Table_703224',
                      ],
                    },
                    line_number: 27,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '626343',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.scene$',
                  operate: '==',
                  manualValue: 'V',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.scene$',
                  operate: '==',
                  manualValue: 'P',
                },
                condId: '7546792',
                connector: '||',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169277319560562600,
            elseIfs: [],
            line_number: 28,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 169277319560578980,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    'Input_348995',
                  ],
                  compName: 'page',
                  id: '1992523',
                  pageJsonId: '537892',
                  visible: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    'Input_348995',
                  ],
                },
                line_number: 29,
              },
              {
                type: 'sysSetVisible',
                dataId: 169277319560541250,
                options: {
                  compId: [
                    'Row_851124_14685846',
                    'Row_851124_14685846_4179477',
                    'Row_7013157',
                  ],
                  compName: 'page',
                  id: '075214',
                  pageJsonId: '537892',
                  visible: '',
                  compid: [
                    'Row_851124_14685846',
                    'Row_851124_14685846_4179477',
                    'Row_7013157',
                  ],
                },
                line_number: 30,
              },
              {
                type: 'setDisable',
                dataId: 169277319560554720,
                options: {
                  compId: [
                    'Input_361479_887285_2150708_7460276_97629287_177208',
                    'Form_449441_1900385_965292_804694',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Form_449441_1900385_965292_804694_950772',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    'Input_product_7830006',
                    'Input_handleExperiencePackage_539362',
                    'Select_7117656',
                    'Select_2570406',
                    'Select_0018499',
                    'Select_525225',
                    'Input_018097',
                    'Input_90081',
                    'Form_449441_1900385_965292_804694_950772_8396112',
                    'Form_22304545',
                    'Input_348995',
                  ],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '6748366',
                  disabled: 'true',
                  compid: [
                    'Input_361479_887285_2150708_7460276_97629287_177208',
                    'Form_449441_1900385_965292_804694',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564',
                    'Form_449441_1900385_965292_804694_950772',
                    'Input_361479_887285_2150708_7460276_97629287_177208_0881564_5522515',
                    'Input_product_7830006',
                    'Input_handleExperiencePackage_539362',
                    'Select_7117656',
                    'Select_2570406',
                    'Select_0018499',
                    'Select_525225',
                    'Input_018097',
                    'Input_90081',
                    'Form_449441_1900385_965292_804694_950772_8396112',
                    'Form_22304545',
                    'Input_348995',
                  ],
                },
                line_number: 31,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse155.params = [] || [];
    CMDGenerator(eventDataifelse155, {}, 'ifelse', {
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
      className="__CustomClass_246894__"
    >
      <View
        className="View_View_246894_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_246894_1',
          uid: 'View_246894_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_246894_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'行业端口资费'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_49416974',
            uid: 'Divider_49416974',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_49416974')}
          {...injectData}
        />
        <View
          className="View_View_222871"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_222871',
            uid: 'View_222871',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            overflowY: 'hidden',
            height: 'fit-content',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_222871')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_286179',
              uid: 'HorizontalView_286179',
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
              height: 'fit-content',
              overflowY: 'hidden',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_286179')}
            {...injectData}
          >
            <View
              className="View_View_539361"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_539361',
                uid: 'View_539361',
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
                height: 'fit-content',
                overflowY: 'hidden',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_539361')}
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
                formCode={'Form_4311097'}
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_114082',
                  uid: 'Form_114082',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_114082')}
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'行业端口资费'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  formItemIndex={0}
                  fieldName={'aduitClass'}
                  defaultChecked={true}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  tipContent={data?.sceneSubmit?.childCatalogDesc}
                  $$componentItem={{
                    id: 'Checkbox_273201',
                    uid: 'Checkbox_273201',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Checkbox_273201')}
                  {...injectData}
                />
                <View
                  className="View_View_9375787"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_9375787',
                    uid: 'View_9375787',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_9375787')}
                  {...injectData}
                />
                <Input
                  name={'审批级别'}
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
                  fieldName={'auditClass'}
                  formItemIndex={2}
                  className={'fixed-form-item-label-width-150'}
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
                    id: 'Input_348995',
                    uid: 'Input_348995',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_348995')}
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
          <Form
            name={'要素'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_22304545'}
            $$componentItem={{
              id: 'Form_22304545',
              uid: 'Form_22304545',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatagetCurrentFormValues24: any = [
                {
                  type: 'getCurrentFormValues',
                  dataId: 169269775081212600,
                  options: {
                    compId: 'Form_22304545',
                    compLib: 'comm',
                    pageJsonId: '246894',
                    compName: 'Form',
                    id: '4819733',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 169269775826538880,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '979823',
                        pageJsonId: '246894',
                        dataSourceId: 169268406030167520,
                        dataSourceName: 'factorForm',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '363382',
                            code: 'urgencyGrade',
                            name: '紧急程度',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'urgencyGrade',
                            },
                            _codePath: ['urgencyGrade'],
                            _idpath: ['363382'],
                          },
                          {
                            attrId: '120117',
                            code: 'applyReason',
                            name: '申请理由',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['applyReason'],
                            _idpath: ['120117'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'applyReason',
                            },
                          },
                          {
                            attrId: '230076',
                            code: 'feeApply',
                            name: '资费申请',
                            type: 'number',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['feeApply'],
                            _idpath: ['230076'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'feeApply',
                            },
                          },
                          {
                            attrId: '286862',
                            code: 'groupDetail',
                            name: '集团简介',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['groupDetail'],
                            _idpath: ['286862'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'groupDetail',
                            },
                          },
                          {
                            attrId: '428412',
                            code: 'reason',
                            name: '申请原因',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['reason'],
                            _idpath: ['428412'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'reason',
                            },
                          },
                          {
                            attrId: '429876',
                            code: 'projectSituation',
                            name: '项目情况',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['projectSituation'],
                            _idpath: ['429876'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'projectSituation',
                            },
                          },
                          {
                            attrId: '591542',
                            code: 'smsAppDescription',
                            name: '短信应用说明（需举例）',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['smsAppDescription'],
                            _idpath: ['591542'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'smsAppDescription',
                            },
                          },
                          {
                            attrId: '665034',
                            code: 'busiScale',
                            name: '业务规模',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiScale'],
                            _idpath: ['665034'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'busiScale',
                            },
                          },
                          {
                            attrId: '674016',
                            code: 'devChannel',
                            name: '发展渠道',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['devChannel'],
                            _idpath: ['674016'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'devChannel',
                            },
                          },
                          {
                            attrId: '4325007',
                            code: 'suggestFinishDate',
                            name: '建议完成时间',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['suggestFinishDate'],
                            _idpath: ['4325007'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'suggestFinishDate',
                            },
                          },
                          {
                            attrId: '4988174',
                            code: 'busiAccessNumber',
                            name: '业务对接号',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiAccessNumber'],
                            _idpath: ['4988174'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'busiAccessNumber',
                            },
                          },
                          {
                            attrId: '060333',
                            code: 'portProdType',
                            name: '产品类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['portProdType'],
                            _idpath: ['060333'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'portProdType',
                            },
                          },
                          {
                            attrId: '289786',
                            code: 'localFeeApply',
                            name: '本网资费申请',
                            type: 'number',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['localFeeApply'],
                            _idpath: ['289786'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'localFeeApply',
                            },
                          },
                          {
                            attrId: '916749',
                            code: 'otherFeeApply',
                            name: '异网资费申请',
                            type: 'number',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['otherFeeApply'],
                            _idpath: ['916749'],
                            value: {
                              type: ['form', 'Form_22304545', 'getFieldsValue'],
                              code: 'otherFeeApply',
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
                          type: 'customActionCode',
                          dataId: 169277112407922270,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '668176',
                            pageJsonId: '537892',
                            actionTitle: '',
                            code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;console.log("\\u884C\\u4E1Adata.sceneSubmit.attrList",data.sceneSubmit.attrList);success(attrList)};',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'callParentCustomFunc',
                              dataId: 169277112407962100,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '2177312',
                                pageJsonId: '537892',
                                pathname: '/commonAuditOrder',
                                pageId: '872682457815691264',
                                customFuncName: 'getFactor',
                                customFuncParams: '$data.sceneSubmit$',
                                modalPath: '/commonAuditOrder',
                              },
                              line_number: 4,
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
              eventDatagetCurrentFormValues24.params =
                [
                  {
                    title: '表单当前改变字段编码',
                    name: 'changedFieldName',
                    value: '$changedFieldName$',
                  },
                  {
                    title: '表单当前改变字段值',
                    name: 'changedValue',
                    value: '$changedValue$',
                  },
                ] || [];
              CMDGenerator(
                eventDatagetCurrentFormValues24,
                { changedFieldName, changedValue },
                'getCurrentFormValues',
                {
                  id: 'getCurrentFormValues',
                  name: 'getCurrentFormValues',
                  type: 'getCurrentFormValues',
                  platform: 'pc',
                },
              );
              const eventDatagetValue184: any = [
                {
                  type: 'getValue',
                  dataId: 169277781620493570,
                  shielding: true,
                  options: {
                    compId: 'Input_915617',
                    compLib: 'comm',
                    pageJsonId: '246894',
                    compName: 'Input',
                    id: '9109094',
                  },
                  line_number: 5,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 169277781620419360,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '572419',
                        pageJsonId: '246894',
                        actionTitle: '5G视信单价校验规则',
                        code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9109094);console.log(match);if(match&&value_9109094>=0.032){success()}else{fail()}};',
                      },
                      line_number: 6,
                      callback1: [],
                      callback2: [
                        {
                          type: 'validateMsg',
                          dataId: 169277781620475970,
                          shielding: true,
                          options: {
                            compId: 'Input_915617',
                            compLib: 'comm',
                            pageJsonId: '246894',
                            compName: 'Input',
                            id: '547864',
                            validateStatus: 'error',
                            help: '不得低于0.032元/条',
                          },
                          line_number: 7,
                        },
                      ],
                    },
                    {
                      type: 'customActionCode',
                      dataId: 169277781620470750,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '3999263',
                        pageJsonId: '246894',
                        actionTitle: '集团短信单价校验规则',
                        code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9109094);console.log(match);if(match&&value_9109094>=0.06){success()}else{fail()}};',
                      },
                      line_number: 8,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'ifelse',
                      shielding: true,
                      condition: [
                        {
                          condId: '349108',
                          options: {
                            useManual: true,
                            useObject: false,
                            operate: '==',
                            manualValue: '1002',
                          },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Select_842825',
                        },
                      ],
                      dataId: 169277781620487600,
                      elseIfs: [],
                      line_number: 9,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 16927778162043708,
                          shielding: true,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '457399',
                            pageJsonId: '246894',
                            actionTitle: '5G视信单价校验规则',
                            code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9109094);console.log(match);if(match&&value_9109094>=0.06){success()}else{fail()}};',
                          },
                          line_number: 10,
                          callback1: [],
                          callback2: [
                            {
                              type: 'validateMsg',
                              dataId: 169277781620480220,
                              shielding: true,
                              options: {
                                compId: 'Input_915617',
                                compLib: 'comm',
                                pageJsonId: '246894',
                                compName: 'Input',
                                id: '028379',
                                validateStatus: 'error',
                                help: '不得低于元/条',
                              },
                              line_number: 11,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'ifelse',
                      shielding: true,
                      condition: [
                        {
                          condId: '859242',
                          options: {
                            useManual: true,
                            useObject: false,
                            operate: '==',
                            manualValue: '1001',
                          },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Select_842825',
                        },
                      ],
                      dataId: 169277781620484400,
                      elseIfs: [],
                      line_number: 12,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 169277781620440740,
                          shielding: true,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '318064',
                            pageJsonId: '246894',
                            actionTitle: '集团短信单价校验规则',
                            code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9109094);console.log(match);if(match&&value_9109094>=0.034){success()}else{fail()}};',
                          },
                          line_number: 13,
                          callback1: [],
                          callback2: [
                            {
                              type: 'validateMsg',
                              dataId: 169277781620474270,
                              shielding: true,
                              options: {
                                compId: 'Input_915617',
                                compLib: 'comm',
                                pageJsonId: '246894',
                                compName: 'Input',
                                id: '7313557',
                                validateStatus: 'error',
                                help: '不得低于0.032元/条',
                              },
                              line_number: 14,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ];
              eventDatagetValue184.params =
                [
                  {
                    title: '表单当前改变字段编码',
                    name: 'changedFieldName',
                    value: '$changedFieldName$',
                  },
                  {
                    title: '表单当前改变字段值',
                    name: 'changedValue',
                    value: '$changedValue$',
                  },
                ] || [];
              CMDGenerator(
                eventDatagetValue184,
                { changedFieldName, changedValue },
                'getValue',
                {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_22304545')}
            {...injectData}
          >
            <Select
              name={'紧急程度'}
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
              placeholder={'请选择紧急程度'}
              fieldName={'urgencyGrade'}
              formItemIndex={0}
              value={data?.factorForm?.urgencyGrade}
              $$componentItem={{
                id: 'Input_7328205',
                uid: 'Input_7328205',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_7328205')}
              {...injectData}
            />
            <DatePicker
              name={'建议完成时间'}
              timeMode={'date'}
              format={'YYYY-MM-DD'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              limitRange={'no'}
              startTime={''}
              endTime={''}
              placeholder={'请选择完成日期'}
              pickerType={'DatePicker'}
              customTip={''}
              formItemIndex={1}
              fieldName={'suggestFinishDate'}
              value={data?.factorForm?.suggestFinishDate}
              $$componentItem={{
                id: 'DatePicker_199593',
                uid: 'DatePicker_199593',
                type: 'DatePicker',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              defaultValue={undefined}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'DatePicker_199593')}
              {...injectData}
            />
            <Select
              name={'发展渠道'}
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
              placeholder={'请选择发展渠道'}
              fieldName={'devChannel'}
              formItemIndex={2}
              value={data?.factorForm?.devChannel}
              $$componentItem={{
                id: 'Input_0925246',
                uid: 'Input_0925246',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_0925246')}
              {...injectData}
            />
            <Select
              name={'产品类型'}
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
              placeholder={'请选择产品类别'}
              formItemIndex={3}
              fieldName={'portProdType'}
              value={data?.factorForm?.portProdType}
              $$componentItem={{
                id: 'Select_842825',
                uid: 'Select_842825',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDataifelse460: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '290284',
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
                    dataId: 1701831606832986,
                    elseIfs: [],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 170183168359113000,
                        options: {
                          compId: ['Input_915617'],
                          compName: 'page',
                          id: '449768',
                          pageJsonId: '246894',
                          visible: 'true',
                          compid: ['Input_915617'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 170183170297189300,
                        options: {
                          compId: ['Input_723477', 'Input_639186'],
                          compName: 'page',
                          id: '820502',
                          pageJsonId: '246894',
                          visible: '',
                          compid: ['Input_723477', 'Input_639186'],
                        },
                        line_number: 3,
                      },
                      {
                        type: 'clearValue',
                        dataId: 170191452594332000,
                        options: {
                          compId: 'Input_723477',
                          compLib: 'comm',
                          pageJsonId: '246894',
                          compName: 'Input',
                          id: '27523604',
                        },
                        line_number: 4,
                      },
                      {
                        type: 'clearValue',
                        dataId: 170191453158497800,
                        options: {
                          compId: 'Input_639186',
                          compLib: 'comm',
                          pageJsonId: '246894',
                          compName: 'Input',
                          id: '491173',
                        },
                        line_number: 5,
                      },
                    ],
                  },
                ];
                eventDataifelse460.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse460, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
                const eventDataifelse461: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '4666967',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$e$',
                          operate: '==',
                          manualValue: '1002',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 170183163592028060,
                    elseIfs: [],
                    line_number: 6,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 170183168608458940,
                        options: {
                          compId: ['Input_723477', 'Input_639186'],
                          compName: 'page',
                          id: '311097',
                          pageJsonId: '246894',
                          visible: 'true',
                          compid: ['Input_723477', 'Input_639186'],
                        },
                        line_number: 7,
                      },
                      {
                        type: 'sysSetVisible',
                        dataId: 170183171720506000,
                        options: {
                          compId: ['Input_915617'],
                          compName: 'page',
                          id: '802286',
                          pageJsonId: '246894',
                          visible: '',
                          compid: ['Input_915617'],
                        },
                        line_number: 8,
                      },
                      {
                        type: 'clearValue',
                        dataId: 170191453544995000,
                        options: {
                          compId: 'Input_915617',
                          compLib: 'comm',
                          pageJsonId: '246894',
                          compName: 'Input',
                          id: '7608009',
                        },
                        line_number: 9,
                      },
                    ],
                  },
                ];
                eventDataifelse461.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDataifelse461, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_842825')}
              {...injectData}
            />
            <Input
              name={'资费申请'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/条'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入单价'}
              formItemIndex={4}
              fieldName={'feeApply'}
              regexp={[
                {
                  id: '7359657',
                  title: '按钮2',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入最多3位小数',
                  pattern: '/^\\d+(\\.\\d{1,3})?$/',
                },
                {
                  id: '515271',
                  title: '按钮2',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '必须大于0元/条',
                  pattern: '/^(?!0+\\.?0*$)(?!0+\\d)\\d*(\\.\\d*[1-9])?$/',
                },
              ]}
              value={data?.factorForm?.feeApply}
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
                id: 'Input_915617',
                uid: 'Input_915617',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onBlur={(e: any) => {
                const eventDataifelse462: any = [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '8359606',
                        options: { operate: 'notEmpty' },
                        conditionType: 'checkValue',
                        objType: 'Input',
                        objId: 'Input_915617',
                      },
                    ],
                    dataId: 169284606180348770,
                    elseIfs: [],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 169284607628041280,
                        shielding: true,
                        options: {
                          compId: 'Input_915617',
                          compLib: 'comm',
                          pageJsonId: '246894',
                          compName: 'Input',
                          id: '9969266',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '349108',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  operate: '==',
                                  manualValue: '1002',
                                },
                                conditionType: 'checkValue',
                                objType: 'Select',
                                objId: 'Select_842825',
                              },
                            ],
                            dataId: 169284607628075420,
                            elseIfs: [],
                            line_number: 3,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169284607628011800,
                                shielding: true,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '1988452',
                                  pageJsonId: '246894',
                                  actionTitle: '5G视信单价校验规则',
                                  code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9969266);console.log(match);if(!match){fail("1")}if(value_9969266<0.06){fail("2")}};',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '171811',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$fail_1988452$',
                                          operate: '==',
                                          manualValue: '1',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 169284607628032900,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 169284607628017540,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 169284607628088930,
                                            children: [],
                                            todoOptions: [
                                              'validateType',
                                              'validateMsg',
                                            ],
                                            options: {
                                              compId: 'Input_915617',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '059255',
                                              validateStatus: 'error',
                                              help: '不得低于0.06元/条',
                                            },
                                            actionObjId: 'Input_915617',
                                            actionObjName: 'Input',
                                            value: 'validateMsg',
                                            compLib: 'comm',
                                            shielding: true,
                                            line_number: 7,
                                          },
                                        ],
                                        condition: [],
                                        value: 'elseIf',
                                        shielding: true,
                                        callback: [
                                          {
                                            type: 'validateMsg',
                                            dataId: 169284607628088930,
                                            shielding: true,
                                            options: {
                                              compId: 'Input_915617',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '059255',
                                              validateStatus: 'error',
                                              help: '不得低于0.06元/条',
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
                                        dataId: 169284607628048420,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_915617',
                                          compLib: 'comm',
                                          pageJsonId: '246894',
                                          compName: 'Input',
                                          id: '02644246',
                                          validateStatus: 'error',
                                          help: '请输入最多三位小数',
                                        },
                                        line_number: 6,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '859242',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  operate: '==',
                                  manualValue: '1001',
                                },
                                conditionType: 'checkValue',
                                objType: 'Select',
                                objId: 'Select_842825',
                              },
                            ],
                            dataId: 169284607628061060,
                            elseIfs: [],
                            line_number: 8,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169284607628003800,
                                shielding: true,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '8586268',
                                  pageJsonId: '246894',
                                  actionTitle: '集团短信单价校验规则',
                                  code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9969266);console.log(match);if(!match){fail("1")}if(value_9969266<0.032){fail("2")}};',
                                },
                                line_number: 9,
                                callback1: [],
                                callback2: [
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '171811',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$fail_8586268$',
                                          operate: '==',
                                          manualValue: '1',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 169284607628072130,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 169284607628066460,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 169284607628085060,
                                            children: [],
                                            todoOptions: [
                                              'validateType',
                                              'validateMsg',
                                            ],
                                            options: {
                                              compId: 'Input_915617',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '628603',
                                              validateStatus: 'error',
                                              help: '不得低于0.032元/条',
                                            },
                                            actionObjId: 'Input_915617',
                                            actionObjName: 'Input',
                                            value: 'validateMsg',
                                            compLib: 'comm',
                                            shielding: true,
                                            line_number: 12,
                                          },
                                        ],
                                        condition: [],
                                        value: 'elseIf',
                                        shielding: true,
                                        callback: [
                                          {
                                            type: 'validateMsg',
                                            dataId: 169284607628085060,
                                            shielding: true,
                                            options: {
                                              compId: 'Input_915617',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '628603',
                                              validateStatus: 'error',
                                              help: '不得低于0.032元/条',
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
                                        dataId: 169284607628046560,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_915617',
                                          compLib: 'comm',
                                          pageJsonId: '246894',
                                          compName: 'Input',
                                          id: '598637',
                                          validateStatus: 'error',
                                          help: '请输入最多三位小数',
                                        },
                                        line_number: 11,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'console',
                            dataId: 169285866971570880,
                            shielding: true,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '2408203',
                              pageJsonId: '246894',
                              value: ['$value_9969266$'],
                            },
                            line_number: 13,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDataifelse462.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataifelse462, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_915617')}
              {...injectData}
            />
            <Input
              name={'本网资费申请'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/条'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入单价'}
              formItemIndex={5}
              fieldName={'localFeeApply'}
              regexp={[
                {
                  id: '807967',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入最多3位小数',
                  pattern: '/^\\d+(\\.\\d{1,3})?$/',
                },
                {
                  id: '711782',
                  title: '按钮2',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '必须大于0元/条',
                  pattern: '/^(?!0+\\.?0*$)(?!0+\\d)\\d*(\\.\\d*[1-9])?$/',
                },
              ]}
              value={data?.factorForm?.localFeeApply}
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
                id: 'Input_723477',
                uid: 'Input_723477',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onBlur={(e: any) => {
                const eventDataifelse463: any = [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '8359606',
                        options: { operate: 'notEmpty' },
                        conditionType: 'checkValue',
                        objType: 'Input',
                        objId: 'Input_723477',
                      },
                    ],
                    dataId: 169284606180348770,
                    elseIfs: [],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 169284607628041280,
                        shielding: true,
                        options: {
                          compId: 'Input_723477',
                          compLib: 'comm',
                          pageJsonId: '246894',
                          compName: 'Input',
                          id: '9969266',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '349108',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  operate: '==',
                                  manualValue: '1002',
                                },
                                conditionType: 'checkValue',
                                objType: 'Select',
                                objId: 'Select_842825',
                              },
                            ],
                            dataId: 169284607628075420,
                            elseIfs: [],
                            line_number: 3,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169284607628011800,
                                shielding: true,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '1988452',
                                  pageJsonId: '246894',
                                  actionTitle: '5G视信单价校验规则',
                                  code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9969266);console.log(match);if(!match){fail("1")}if(value_9969266<0.06){fail("2")}};',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '171811',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$fail_1988452$',
                                          operate: '==',
                                          manualValue: '1',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 169284607628032900,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 169284607628017540,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 169284607628088930,
                                            children: [],
                                            todoOptions: [
                                              'validateType',
                                              'validateMsg',
                                            ],
                                            options: {
                                              compId: 'Input_723477',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '059255',
                                              validateStatus: 'error',
                                              help: '不得低于0.06元/条',
                                            },
                                            actionObjId: 'Input_723477',
                                            actionObjName: 'Input',
                                            value: 'validateMsg',
                                            compLib: 'comm',
                                            shielding: true,
                                            line_number: 7,
                                          },
                                        ],
                                        condition: [],
                                        value: 'elseIf',
                                        shielding: true,
                                        callback: [
                                          {
                                            type: 'validateMsg',
                                            dataId: 169284607628088930,
                                            shielding: true,
                                            options: {
                                              compId: 'Input_723477',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '059255',
                                              validateStatus: 'error',
                                              help: '不得低于0.06元/条',
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
                                        dataId: 169284607628048420,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_723477',
                                          compLib: 'comm',
                                          pageJsonId: '246894',
                                          compName: 'Input',
                                          id: '02644246',
                                          validateStatus: 'error',
                                          help: '请输入最多三位小数',
                                        },
                                        line_number: 6,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '859242',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  operate: '==',
                                  manualValue: '1001',
                                },
                                conditionType: 'checkValue',
                                objType: 'Select',
                                objId: 'Select_842825',
                              },
                            ],
                            dataId: 169284607628061060,
                            elseIfs: [],
                            line_number: 8,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169284607628003800,
                                shielding: true,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '8586268',
                                  pageJsonId: '246894',
                                  actionTitle: '集团短信单价校验规则',
                                  code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9969266);console.log(match);if(!match){fail("1")}if(value_9969266<0.032){fail("2")}};',
                                },
                                line_number: 9,
                                callback1: [],
                                callback2: [
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '171811',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$fail_8586268$',
                                          operate: '==',
                                          manualValue: '1',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 169284607628072130,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 169284607628066460,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 169284607628085060,
                                            children: [],
                                            todoOptions: [
                                              'validateType',
                                              'validateMsg',
                                            ],
                                            options: {
                                              compId: 'Input_723477',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '628603',
                                              validateStatus: 'error',
                                              help: '不得低于0.032元/条',
                                            },
                                            actionObjId: 'Input_723477',
                                            actionObjName: 'Input',
                                            value: 'validateMsg',
                                            compLib: 'comm',
                                            shielding: true,
                                            line_number: 12,
                                          },
                                        ],
                                        condition: [],
                                        value: 'elseIf',
                                        shielding: true,
                                        callback: [
                                          {
                                            type: 'validateMsg',
                                            dataId: 169284607628085060,
                                            shielding: true,
                                            options: {
                                              compId: 'Input_723477',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '628603',
                                              validateStatus: 'error',
                                              help: '不得低于0.032元/条',
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
                                        dataId: 169284607628046560,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_723477',
                                          compLib: 'comm',
                                          pageJsonId: '246894',
                                          compName: 'Input',
                                          id: '598637',
                                          validateStatus: 'error',
                                          help: '请输入最多三位小数',
                                        },
                                        line_number: 11,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'console',
                            dataId: 169285866971570880,
                            shielding: true,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '2408203',
                              pageJsonId: '246894',
                              value: ['$value_9969266$'],
                            },
                            line_number: 13,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDataifelse463.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataifelse463, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_723477')}
              {...injectData}
            />
            <Input
              name={'异网资费申请'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'元/条'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入单价'}
              formItemIndex={6}
              fieldName={'otherFeeApply'}
              regexp={[
                {
                  id: '807967',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入最多3位小数',
                  pattern: '/^\\d+(\\.\\d{1,3})?$/',
                },
                {
                  id: '318226',
                  title: '按钮2',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '必须大于0元/条',
                  pattern: '/^(?!0+\\.?0*$)(?!0+\\d)\\d*(\\.\\d*[1-9])?$/',
                },
              ]}
              value={data?.factorForm?.otherFeeApply}
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
                id: 'Input_639186',
                uid: 'Input_639186',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onBlur={(e: any) => {
                const eventDataifelse464: any = [
                  {
                    type: 'ifelse',
                    shielding: true,
                    condition: [
                      {
                        condId: '8359606',
                        options: { operate: 'notEmpty' },
                        conditionType: 'checkValue',
                        objType: 'Input',
                        objId: 'Input_639186',
                      },
                    ],
                    dataId: 169284606180348770,
                    elseIfs: [],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'getValue',
                        dataId: 169284607628041280,
                        shielding: true,
                        options: {
                          compId: 'Input_639186',
                          compLib: 'comm',
                          pageJsonId: '246894',
                          compName: 'Input',
                          id: '9969266',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '349108',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  operate: '==',
                                  manualValue: '1002',
                                },
                                conditionType: 'checkValue',
                                objType: 'Select',
                                objId: 'Select_842825',
                              },
                            ],
                            dataId: 169284607628075420,
                            elseIfs: [],
                            line_number: 3,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169284607628011800,
                                shielding: true,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '1988452',
                                  pageJsonId: '246894',
                                  actionTitle: '5G视信单价校验规则',
                                  code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9969266);console.log(match);if(!match){fail("1")}if(value_9969266<0.06){fail("2")}};',
                                },
                                line_number: 4,
                                callback1: [],
                                callback2: [
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '171811',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$fail_1988452$',
                                          operate: '==',
                                          manualValue: '1',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 169284607628032900,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 169284607628017540,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 169284607628088930,
                                            children: [],
                                            todoOptions: [
                                              'validateType',
                                              'validateMsg',
                                            ],
                                            options: {
                                              compId: 'Input_639186',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '059255',
                                              validateStatus: 'error',
                                              help: '不得低于0.06元/条',
                                            },
                                            actionObjId: 'Input_639186',
                                            actionObjName: 'Input',
                                            value: 'validateMsg',
                                            compLib: 'comm',
                                            shielding: true,
                                            line_number: 7,
                                          },
                                        ],
                                        condition: [],
                                        value: 'elseIf',
                                        shielding: true,
                                        callback: [
                                          {
                                            type: 'validateMsg',
                                            dataId: 169284607628088930,
                                            shielding: true,
                                            options: {
                                              compId: 'Input_639186',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '059255',
                                              validateStatus: 'error',
                                              help: '不得低于0.06元/条',
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
                                        dataId: 169284607628048420,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_639186',
                                          compLib: 'comm',
                                          pageJsonId: '246894',
                                          compName: 'Input',
                                          id: '02644246',
                                          validateStatus: 'error',
                                          help: '请输入最多三位小数',
                                        },
                                        line_number: 6,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'ifelse',
                            shielding: true,
                            condition: [
                              {
                                condId: '859242',
                                options: {
                                  useManual: true,
                                  useObject: false,
                                  operate: '==',
                                  manualValue: '1001',
                                },
                                conditionType: 'checkValue',
                                objType: 'Select',
                                objId: 'Select_842825',
                              },
                            ],
                            dataId: 169284607628061060,
                            elseIfs: [],
                            line_number: 8,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169284607628003800,
                                shielding: true,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '8586268',
                                  pageJsonId: '246894',
                                  actionTitle: '集团短信单价校验规则',
                                  code: 'function main(data,state,success,fail){var regex=/^(?!0\\d)\\d+(\\.\\d{1,3})?$/;var match=regex.test(value_9969266);console.log(match);if(!match){fail("1")}if(value_9969266<0.032){fail("2")}};',
                                },
                                line_number: 9,
                                callback1: [],
                                callback2: [
                                  {
                                    type: 'ifelse',
                                    shielding: true,
                                    condition: [
                                      {
                                        condId: '171811',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$fail_8586268$',
                                          operate: '==',
                                          manualValue: '1',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 169284607628072130,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 169284607628066460,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 169284607628085060,
                                            children: [],
                                            todoOptions: [
                                              'validateType',
                                              'validateMsg',
                                            ],
                                            options: {
                                              compId: 'Input_639186',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '628603',
                                              validateStatus: 'error',
                                              help: '不得低于0.032元/条',
                                            },
                                            actionObjId: 'Input_639186',
                                            actionObjName: 'Input',
                                            value: 'validateMsg',
                                            compLib: 'comm',
                                            shielding: true,
                                            line_number: 12,
                                          },
                                        ],
                                        condition: [],
                                        value: 'elseIf',
                                        shielding: true,
                                        callback: [
                                          {
                                            type: 'validateMsg',
                                            dataId: 169284607628085060,
                                            shielding: true,
                                            options: {
                                              compId: 'Input_639186',
                                              compLib: 'comm',
                                              pageJsonId: '246894',
                                              compName: 'Input',
                                              id: '628603',
                                              validateStatus: 'error',
                                              help: '不得低于0.032元/条',
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
                                        dataId: 169284607628046560,
                                        shielding: true,
                                        options: {
                                          compId: 'Input_639186',
                                          compLib: 'comm',
                                          pageJsonId: '246894',
                                          compName: 'Input',
                                          id: '598637',
                                          validateStatus: 'error',
                                          help: '请输入最多三位小数',
                                        },
                                        line_number: 11,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'console',
                            dataId: 169285866971570880,
                            shielding: true,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '2408203',
                              pageJsonId: '246894',
                              value: ['$value_9969266$'],
                            },
                            line_number: 13,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDataifelse464.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDataifelse464, { e }, 'ifelse', {
                  id: 'ifelse',
                  name: 'ifelse',
                  type: 'ifelse',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_639186')}
              {...injectData}
            />
            <Input
              name={'业务接入号'}
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
              placeholder={'请输入业务接入号'}
              formItemIndex={7}
              fieldName={'busiAccessNumber'}
              value={data?.factorForm?.busiAccessNumber}
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
                id: 'Input_9414116',
                uid: 'Input_9414116',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_9414116')}
              {...injectData}
            />
            <Select
              name={'业务规模'}
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
              formItemIndex={8}
              fieldName={'busiScale'}
              value={data?.factorForm?.busiScale}
              $$componentItem={{
                id: 'Select_687565',
                uid: 'Select_687565',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_687565')}
              {...injectData}
            />
            <Select
              name={'项目情况'}
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
              formItemIndex={9}
              fieldName={'projectSituation'}
              value={data?.factorForm?.projectSituation}
              $$componentItem={{
                id: 'Select_297495',
                uid: 'Select_297495',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_297495')}
              {...injectData}
            />
            <Select
              name={'申请理由'}
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
              formItemIndex={10}
              fieldName={'applyReason'}
              value={data?.factorForm?.applyReason}
              $$componentItem={{
                id: 'Select_903308',
                uid: 'Select_903308',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_903308')}
              {...injectData}
            />
            <TextArea
              name={'短信应用说明(需举例)'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={11}
              fieldName={'smsAppDescription'}
              value={data?.factorForm?.smsAppDescription}
              $$componentItem={{
                id: 'TextArea_4578712',
                uid: 'TextArea_4578712',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_4578712')}
              {...injectData}
            />
            <TextArea
              name={'集团简介'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={12}
              fieldName={'groupDetail'}
              value={data?.factorForm?.groupDetail}
              $$componentItem={{
                id: 'TextArea_671589',
                uid: 'TextArea_671589',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_671589')}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={13}
              fieldName={'reason'}
              value={data?.factorForm?.reason}
              $$componentItem={{
                id: 'TextArea_906506',
                uid: 'TextArea_906506',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_906506')}
              {...injectData}
            />
          </Form>
          <Row
            name={'行容器'}
            colSpan={24}
            gutterHorizontal={0}
            gutterVertical={0}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'Row_7013157',
              uid: 'Row_7013157',
              type: 'Row',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            ref={(r: any) => refs.setComponentRef(r, 'Row_7013157')}
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
              colSpace={12}
              rowSpace={16}
              formCode={'Form_395851'}
              $$componentItem={{
                id: 'Form_8911675',
                uid: 'Form_8911675',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_8911675')}
              {...injectData}
            >
              <Select
                name={'附件'}
                size={'default'}
                selfSpan={8}
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
                fieldName={'accessory'}
                formItemIndex={0}
                $$componentItem={{
                  id: 'Select_9320345',
                  uid: 'Select_9320345',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_9320345')}
                {...injectData}
              />
              <View
                className="View_View_633263"
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_633263',
                  uid: 'View_633263',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_633263')}
                {...injectData}
              >
                <StdUpload
                  name={'附件上传'}
                  uploadStyle={'click'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  fileNameEncode={false}
                  isWatermark={false}
                  optionalFile={false}
                  fileName={'file'}
                  selfSpan={''}
                  labelCol={'8'}
                  wrapperCol={16}
                  acceptType={[]}
                  withCredentials={true}
                  numberLimit={5}
                  singleFileMaxSize={50}
                  uploadText={'点击上传'}
                  deleteIcon={{
                    deleteIconTheme: 'outlined',
                    deleteIconType: 'delete',
                    deleteIconIsIconFont: false,
                    showRemoveIcon: false,
                  }}
                  downloadIcon={{
                    downloadIconTheme: 'outlined',
                    downloadIconType: 'download',
                    downloadIconIsIconFont: false,
                    showDownloadIcon: false,
                  }}
                  previewIcon={{
                    previewIconTheme: 'outlined',
                    previewIconType: 'eye',
                    previewIconIsIconFont: false,
                    showPreviewIcon: false,
                  }}
                  fieldName={'uploading'}
                  icon={{
                    type: undefined,
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'StdUpload_587508',
                    uid: 'StdUpload_587508',
                    type: 'StdUpload',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ margin: '0px 0px 0px 0px' }}
                  onFinishUpload={(
                    file: any,
                    fileList: any,
                    fileId: any,
                    fileSize: any,
                    fileName: any,
                    fileResponse: any,
                  ) => {
                    const eventDatagetSelectedData234: any = [
                      {
                        type: 'getSelectedData',
                        dataId: 166372683775767040,
                        options: {
                          compId: 'Select_9320345',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Select',
                          id: '424238',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 166372684330134400,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '99325',
                              pageJsonId: '537892',
                              dataSourceId: 169269171149128770,
                              dataSourceName: 'fileInfoList',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  attrId: '6482729',
                                  code: 'filePath',
                                  name: '附件文件路径',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['filePath'],
                                  _idpath: ['6482729'],
                                },
                                {
                                  attrId: '88453',
                                  code: 'fileServerType',
                                  name: '附件文件服务器类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['fileServerType'],
                                  _idpath: ['88453'],
                                },
                                {
                                  attrId: '441672',
                                  code: 'fileSubType',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  _codePath: ['fileSubType'],
                                  _idpath: ['441672'],
                                },
                                {
                                  attrId: '9946562',
                                  code: 'fileType',
                                  name: '附件分类-大类',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_424238[0].value$',
                                  },
                                  _codePath: ['fileType'],
                                  _idpath: ['9946562'],
                                },
                                {
                                  attrId: '2592642',
                                  code: 'fileUrl',
                                  name: '附件地址',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  value: {
                                    type: ['customize'],
                                    code: '$file?.response?.resultObject?.filePathInServer$',
                                  },
                                  _codePath: ['fileUrl'],
                                  _idpath: ['2592642'],
                                },
                                {
                                  attrId: '6700645',
                                  code: 'teacheCode',
                                  name: '环节编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  value: {
                                    type: ['customize'],
                                    code: '$state.tacheCode$',
                                  },
                                  _codePath: ['teacheCode'],
                                  _idpath: ['6700645'],
                                },
                                {
                                  attrId: '526892',
                                  code: 'fileCode',
                                  name: '文件编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  value: {
                                    type: [
                                      'context',
                                      '$file?.response?.resultObject?.fileId$',
                                    ],
                                    code: '',
                                  },
                                  _codePath: ['fileCode'],
                                  _idpath: ['526892'],
                                },
                                {
                                  attrId: '300792',
                                  code: 'createTime',
                                  name: '创建时间',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  value: {
                                    type: ['customize'],
                                    code: '$file?.response?.resultObject?.statusDate$',
                                  },
                                  _codePath: ['createTime'],
                                  _idpath: ['300792'],
                                },
                                {
                                  attrId: '56936444',
                                  code: 'createStaff',
                                  name: '创建人',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  value: {
                                    type: ['customize'],
                                    code: '$state.createStaff$',
                                  },
                                  _codePath: ['createStaff'],
                                  _idpath: ['56936444'],
                                },
                                {
                                  attrId: '148345',
                                  code: 'fileTypeName',
                                  name: '附件类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_424238[0].label$',
                                  },
                                  _codePath: ['fileTypeName'],
                                  _idpath: ['148345'],
                                },
                                {
                                  attrId: '834968',
                                  code: 'fileName',
                                  name: '附件名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: false,
                                  value: {
                                    type: ['context', '$file?.name$'],
                                    code: '',
                                  },
                                  _codePath: ['fileName'],
                                  _idpath: ['834968'],
                                },
                              ],
                              operateType: 0,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 166372684330136800,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '2501218',
                                  pageJsonId: '537892',
                                  code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=data.fileInfoList;success(data.sceneSubmit)};',
                                },
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 166372684330169120,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '213682',
                                      pageJsonId: '537892',
                                      pathname: '/commonAuditOrder',
                                      pageId: '872682457815691264',
                                      customFuncName: 'getFactor',
                                      customFuncParams: '$data.sceneSubmit$',
                                      modalPath: '/commonAuditOrder',
                                    },
                                    line_number: 4,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                          {
                            type: 'console',
                            dataId: 169269181142618140,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '7455476',
                              pageJsonId: '246894',
                              value: ['$selectedData_424238[0]$', 'zrj'],
                            },
                            line_number: 5,
                          },
                        ],
                        callback2: [
                          {
                            type: 'showMessage',
                            dataId: 166372688410723070,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '306514',
                              pageJsonId: '537892',
                              type: 'error',
                              value: '请选择附件类型',
                            },
                            line_number: 6,
                          },
                        ],
                      },
                    ];
                    eventDatagetSelectedData234.params =
                      [
                        { title: '文件对象', name: 'file', value: '$file$' },
                        {
                          title: '文件列表',
                          name: 'fileList',
                          value: '$fileList$',
                        },
                        {
                          title: '文件ID',
                          name: 'fileId',
                          value: '$file?.response?.resultObject?.fileId$',
                        },
                        {
                          title: '文件大小',
                          name: 'fileSize',
                          value: '$file?.size$',
                        },
                        {
                          title: '文件名称',
                          name: 'fileName',
                          value: '$file?.name$',
                        },
                        {
                          title: '响应信息',
                          name: 'fileResponse',
                          value: '$file?.response$',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatagetSelectedData234,
                      {
                        file,
                        fileList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'getSelectedData',
                      {
                        id: 'getSelectedData',
                        name: 'getSelectedData',
                        type: 'getSelectedData',
                        platform: 'pc',
                      },
                    );
                  }}
                  onListenUploading={(
                    file: any,
                    fileList: any,
                    fileResponseList: any,
                    fileId: any,
                    fileSize: any,
                    fileName: any,
                    fileResponse: any,
                  ) => {
                    const eventDatacustomActionCode526: any = [
                      {
                        type: 'customActionCode',
                        dataId: 169269462997710340,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '89526604',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacustomActionCode526.params =
                      [
                        {
                          title: '文件对象',
                          name: 'file',
                          value: '$file$',
                          attrType: 'object',
                        },
                        {
                          title: '上传信息列表',
                          name: 'fileList',
                          value: '$fileList$',
                        },
                        {
                          title: '文件列表',
                          name: 'fileResponseList',
                          value: '$fileResponseList$',
                        },
                        {
                          title: '文件ID',
                          name: 'fileId',
                          value: '$file?.response?.resultObject?.fileId$',
                        },
                        {
                          title: '文件大小',
                          name: 'fileSize',
                          value: '$file?.size$',
                        },
                        {
                          title: '文件名称',
                          name: 'fileName',
                          value: '$file?.name$',
                        },
                        {
                          title: '响应信息',
                          name: 'fileResponse',
                          value: '$file?.response$',
                          attrType: 'object',
                        },
                      ] || [];
                    CMDGenerator(
                      eventDatacustomActionCode526,
                      {
                        file,
                        fileList,
                        fileResponseList,
                        fileId,
                        fileSize,
                        fileName,
                        fileResponse,
                      },
                      'customActionCode',
                      {
                        id: 'customActionCode',
                        name: 'customActionCode',
                        type: 'customActionCode',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'StdUpload_587508')}
                  {...injectData}
                />
              </View>
            </Form>
          </Row>
        </View>
        <View
          className="View_View_710019"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_710019',
            uid: 'View_710019',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_710019')}
          {...injectData}
        >
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
                title: '附件名称',
                key: 'fileName',
                dataIndex: 'fileName',
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
                title: '附件类型',
                key: 'fileTypeName',
                dataIndex: 'fileTypeName',
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
                title: '创建人',
                key: 'createStaff',
                dataIndex: 'createStaff',
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
                key: 'createTime',
                dataIndex: 'createTime',
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
            dataSource={data?.fileInfoList}
            rowActions={[
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '948989',
                rule: "state.scene === 'V'",
                checked: true,
              },
            ]}
            extend={[
              {
                id: '5476746',
                title: '下载',
                iconPos: 'left',
                icon: {
                  theme: 'outlined',
                  type: 'download',
                  isIconFont: false,
                },
                checked: true,
              },
            ]}
            rowKey={'fileCode'}
            dataSourceFromDataSourceConfig={'data.fileInfoList'}
            $$componentItem={{
              id: 'Table_703224',
              uid: 'Table_703224',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode527: any = [
                {
                  type: 'customActionCode',
                  dataId: 166192918606345900,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '8342055',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}data.sceneSubmit.fileInfo=newFileInfoList;success(newFileInfoList)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 166193290759619360,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '4133837',
                        pageJsonId: '537892',
                        dataSourceId: 169269171149128770,
                        dataSourceName: 'fileInfoList',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '6482729',
                            code: 'filePath',
                            name: '附件文件路径',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['filePath'],
                            _idpath: ['6482729'],
                          },
                          {
                            attrId: '88453',
                            code: 'fileServerType',
                            name: '附件文件服务器类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['fileServerType'],
                            _idpath: ['88453'],
                          },
                          {
                            attrId: '441672',
                            code: 'fileSubType',
                            name: '属性',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['fileSubType'],
                            _idpath: ['441672'],
                          },
                          {
                            attrId: '9946562',
                            code: 'fileType',
                            name: '附件分类-大类',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['fileType'],
                            _idpath: ['9946562'],
                          },
                          {
                            attrId: '2592642',
                            code: 'fileUrl',
                            name: '附件地址',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['fileUrl'],
                            _idpath: ['2592642'],
                          },
                          {
                            attrId: '6700645',
                            code: 'teacheCode',
                            name: '环节编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['teacheCode'],
                            _idpath: ['6700645'],
                          },
                          {
                            attrId: '526892',
                            code: 'fileCode',
                            name: '文件编码',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['fileCode'],
                            _idpath: ['526892'],
                          },
                          {
                            attrId: '300792',
                            code: 'createTime',
                            name: '创建时间',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['createTime'],
                            _idpath: ['300792'],
                          },
                          {
                            attrId: '56936444',
                            code: 'createStaff',
                            name: '创建人',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['createStaff'],
                            _idpath: ['56936444'],
                          },
                          {
                            attrId: '148345',
                            code: 'fileTypeName',
                            name: '附件类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['fileTypeName'],
                            _idpath: ['148345'],
                          },
                          {
                            attrId: '834968',
                            code: 'fileName',
                            name: '附件名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            _codePath: ['fileName'],
                            _idpath: ['834968'],
                          },
                        ],
                        newData: '$data_8342055$',
                        operateType: 3,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'callParentCustomFunc',
                          dataId: 166193296648446750,
                          options: {
                            compId: 'callParentCustomFunc',
                            compName: 'system',
                            id: '773871',
                            pageJsonId: '537892',
                            pathname: '/commonAuditOrder',
                            pageId: '872682457815691264',
                            customFuncName: 'getFactor',
                            customFuncParams: '$data.sceneSubmit$',
                            modalPath: '/commonAuditOrder',
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
              eventDatacustomActionCode527.params =
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
                eventDatacustomActionCode527,
                { rowId, row, index },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              const eventDatadownloadByFileId44: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 166193298494793600,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '698245',
                    pageJsonId: '537892',
                    data: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatadownloadByFileId44.params =
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
                eventDatadownloadByFileId44,
                { rowId, row, index },
                'downloadByFileId',
                {
                  id: 'downloadByFileId',
                  name: 'downloadByFileId',
                  type: 'downloadByFileId',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_703224')}
            {...injectData}
          />
        </View>
        <BusiComp0521965
          pageId={pageId}
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: state?.itemList?.fileInfo,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_8856644')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0003_0017$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
