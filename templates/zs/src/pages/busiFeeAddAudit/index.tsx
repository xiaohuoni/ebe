// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  MultipleSelect,
  Select,
  Input,
  Button,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '991967406355632128';
const BusiFeeAddAudit$$Modal: React.FC<PageProps> = ({
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
  const joinAddr = (options_12762: any) => {
    const eventDatacustomActionCode130: any = [
      {
        type: 'customActionCode',
        dataId: 168811907589965400,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '182525',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var info=options_12762.info;var installAddr="";if(info.cityName!=undefined&&info.cityName!=null){installAddr+=info.cityName}if(info.areaName!=undefined&&info.areaName!=null){installAddr+=info.areaName}if(info.countryName!=undefined&&info.countryName!=null){installAddr+=info.countryName}if(info.street!=undefined&&info.street!=null){installAddr+=info.street}if(info.houseNum!=undefined&&info.houseNum!=null){installAddr+=info.houseNum}if(info.doorplate!=undefined&&info.doorplate!=null){installAddr+=info.doorplate}if(info.floorName!=undefined&&info.floorName!=null){installAddr+=info.floorName}if(info.element!=undefined&&info.element!=null){installAddr+=info.element}if(info.roomName!=undefined&&info.roomName!=null){installAddr+=info.roomName}success(installAddr)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 168811913685123500,
            options: {
              compId: 'Input_627735',
              compLib: 'comm',
              pageJsonId: '0606944',
              compName: 'Input',
              id: '984649',
              valueList: { Input_627735: '$data_182525$' },
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode130.params =
      [
        { title: '事件入参', name: 'options_12762', value: '$options_12762$' },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode130,
      { options_12762 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const calTotalNum = (options_720581: any) => {
    const eventDatagetValue79: any = [
      {
        type: 'getValue',
        dataId: 168835204197786100,
        options: {
          compId: 'Input_015345',
          compLib: 'comm',
          pageJsonId: '0606944',
          compName: 'Input',
          id: '011742',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 168835204666598940,
            options: {
              compId: 'Input_821119',
              compLib: 'comm',
              pageJsonId: '0606944',
              compName: 'Input',
              id: '2292638',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 168835208976878620,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '480882',
                  pageJsonId: '0606944',
                  code: 'function main(data,state,success,fail){var stockNum=value_2292638||0;var handleNum=value_011742||0;var totalNum=parseInt(stockNum)+parseInt(handleNum);success(totalNum)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 168835219751647780,
                    options: {
                      compId: 'Input_5738056',
                      compLib: 'comm',
                      pageJsonId: '0606944',
                      compName: 'Input',
                      id: '6664237',
                      valueList: { Input_5738056: '$data_480882$' },
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
    eventDatagetValue79.params =
      [
        {
          title: '事件入参',
          name: 'options_720581',
          value: '$options_720581$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue79, { options_720581 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };
  const calTotalBandwidthUp = (options_297636: any) => {
    const eventDatagetValue80: any = [
      {
        type: 'getValue',
        dataId: 168835268150223840,
        options: {
          compId: 'Input_004656',
          compLib: 'comm',
          pageJsonId: '0606944',
          compName: 'Input',
          id: '9970025',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 168835268885873600,
            options: {
              compId: 'Input_935244',
              compLib: 'comm',
              pageJsonId: '0606944',
              compName: 'Input',
              id: '0678962',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 168835269296719700,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '0604635',
                  pageJsonId: '0606944',
                  code: 'function main(data,state,success,fail){var stockUp=value_0678962||0;var handleUp=value_9970025||0;var totalUp=parseInt(stockUp)+parseInt(handleUp);success(totalUp)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 168835276251128900,
                    options: {
                      compId: 'Input_951486',
                      compLib: 'comm',
                      pageJsonId: '0606944',
                      compName: 'Input',
                      id: '4173693',
                      valueList: { Input_951486: '$data_0604635$' },
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
    eventDatagetValue80.params =
      [
        {
          title: '事件入参',
          name: 'options_297636',
          value: '$options_297636$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue80, { options_297636 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    joinAddr,
    calTotalNum,
    calTotalBandwidthUp,
  }));

  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal46: any = [
      {
        type: 'closeModal',
        dataId: '8061646_1',
        options: { compId: 'page', compName: 'page', id: '711008' },
        line_number: 1,
      },
    ];
    eventDatacloseModal46.params = [] || [];
    CMDGenerator(eventDatacloseModal46, {}, 'closeModal', {
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
    // console 169986618605127000
    console.log('弹窗入参：', state);
    const eventDataapiRequest387: any = [
      {
        type: 'apiRequest',
        dataId: 168834786995550720,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '664303',
          pageJsonId: '0606944',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _sourceName: '查询场景规格属性值列表-tsm',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表-tsm: qryCatalogAttrValueList',
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
                  dataKey: '664303_root.header',
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
                  dataKey: '664303_root.path',
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
                  dataKey: '664303_root.query',
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
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.catalogCode',
                      dataKey: '664303_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
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
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.attrCode',
                      dataKey: '664303_root.body.attrCode',
                      value: { type: ['customize'], code: 'busiType' },
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '664303_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '664303_root',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168834856847249760,
            options: {
              compId: 'MultipleSelect_5560734',
              compLib: 'comm',
              pageJsonId: '0606944',
              compName: 'MultipleSelect',
              id: '314221165',
              data: '$reply_664303?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest387.params = [] || [];
    CMDGenerator(eventDataapiRequest387, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest388: any = [
      {
        type: 'apiRequest',
        dataId: 168835035967300380,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '11719352',
          pageJsonId: '0606944',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'SYS_qryRegionListByParentId',
          _apiCode: 'qryRegionListByParentId',
          _source: 'rhin',
          _sourceName: '根据父区域ID查询所有子区域-tsm',
          _serviceId: '878100790201982976',
          _serviceTitle:
            '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                  dataKey: '11719352_root.header',
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
                  dataKey: '11719352_root.path',
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
                  dataKey: '11719352_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'includeParent',
                      attrType: 'field',
                      type: 'boolean',
                      mustFlag: 'F',
                      _id: 'root.body.includeParent',
                      compType: 'Input',
                      name: 'includeParent',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.includeParent',
                      dataKey: '11719352_root.body.includeParent',
                      value: { type: ['customize'], code: 'false' },
                    },
                    {
                      code: 'parentRegionId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'root.body.parentRegionId',
                      compType: 'Input',
                      name: 'parentRegionId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.parentRegionId',
                      dataKey: '11719352_root.body.parentRegionId',
                      value: { type: ['customize'], code: '350000' },
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '11719352_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '11719352_root',
            },
          ],
          params: 'object',
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168835040871031800,
            options: {
              compId: 'Select_656868',
              compLib: 'comm',
              pageJsonId: '0606944',
              compName: 'Select',
              id: '5612094',
              data: '$reply_11719352?.resultData$',
              labelKey: 'regionName',
              valueKey: 'regionId',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest388.params = [] || [];
    CMDGenerator(eventDataapiRequest388, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse202: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '369024',
            options: { context: '$state.formData$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168835515815911870,
        elseIfs: [],
        line_number: 6,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168835517265224420,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '977419',
              pageJsonId: '0606944',
              code: 'function main(data,state,success,fail){var info=state.formData;console.log("\\u5F53\\u524D\\u4F20\\u5165\\u4FE1\\u606F\\uFF1A",info);info.busiType=info.busiType.split(",");data.factorForm.cityName=info.cityName;data.factorForm.city=info.city;data.factorForm.areaName=info.areaName;data.factorForm.area=info.area;data.factorForm.countryName=info.countryName;data.factorForm.country=info.country;data.factorForm.street=info.street;data.factorForm.houseNum=info.houseNum;data.factorForm.doorplate=info.doorplate;data.factorForm.floorName=info.floorName;data.factorForm.element=info.element;data.factorForm.roomName=info.roomName;data.factorForm.installAddr=info.installAddr;data.factorForm.busiType=info.busiType;data.factorForm.rowId=info.rowId;success(info)};',
            },
            line_number: 7,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 168836561259624220,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '14621',
                  pageJsonId: '537892',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'SYS_qryRegionListByParentId',
                  _apiCode: 'qryRegionListByParentId',
                  _source: 'rhin',
                  _serviceId: '878100790201982976',
                  _serviceTitle:
                    '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                          id: 'root.header',
                          dataKey: '14621_root.header',
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
                          dataKey: '14621_root.path',
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
                          dataKey: '14621_root.query',
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
                              code: 'includeParent',
                              attrType: 'field',
                              type: 'boolean',
                              mustFlag: 'F',
                              _id: 'root.body.includeParent',
                              compType: 'Input',
                              name: 'includeParent',
                              parents: ['root', 'body'],
                              id: 'root.body.includeParent',
                              dataKey: '14621_root.body.includeParent',
                              value: { type: ['customize'], code: 'false' },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                            },
                            {
                              code: 'parentRegionId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'root.body.parentRegionId',
                              compType: 'Input',
                              name: 'parentRegionId',
                              parents: ['root', 'body'],
                              id: 'root.body.parentRegionId',
                              dataKey: '14621_root.body.parentRegionId',
                              value: {
                                type: ['context', '$data_977419$'],
                                code: 'city',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'root.body',
                          dataKey: '14621_root.body',
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
                      dataKey: '14621_root',
                    },
                  ],
                  _sourceName: '根据父区域ID查询所有子区域-tsm',
                },
                line_number: 8,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 168836561259696100,
                    options: {
                      compId: 'Select_341537',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '069004',
                      labelKey: 'regionName',
                      valueKey: 'regionId',
                      data: '$reply_14621?.resultData$',
                    },
                    line_number: 9,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'apiRequest',
                dataId: 168836875903062800,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '712378',
                  pageJsonId: '537892',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'SYS_qryRegionListByParentId',
                  _apiCode: 'qryRegionListByParentId',
                  _source: 'rhin',
                  _serviceId: '878100790201982976',
                  _serviceTitle:
                    '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                              code: 'includeParent',
                              attrType: 'field',
                              type: 'boolean',
                              mustFlag: 'F',
                              _id: 'root.body.includeParent',
                              compType: 'Input',
                              name: 'includeParent',
                              parents: ['root', 'body'],
                              id: 'root.body.includeParent',
                              dataKey: '2197187_root.body.includeParent',
                              value: { type: ['customize'], code: 'false' },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                            },
                            {
                              code: 'parentRegionId',
                              attrType: 'field',
                              type: 'long',
                              mustFlag: 'F',
                              _id: 'root.body.parentRegionId',
                              compType: 'Input',
                              name: 'parentRegionId',
                              parents: ['root', 'body'],
                              id: 'root.body.parentRegionId',
                              dataKey: '2197187_root.body.parentRegionId',
                              value: {
                                type: ['context', '$data_977419$'],
                                code: 'area',
                              },
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          id: 'root.body',
                          dataKey: '2197187_root.body',
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
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
                          dataKey: '2197187_root.header',
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
                          dataKey: '2197187_root.path',
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
                          dataKey: '2197187_root.query',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '2197187_root',
                    },
                  ],
                  _sourceName: '根据父区域ID查询所有子区域-tsm',
                },
                line_number: 10,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 168836875903018900,
                    options: {
                      compId: 'Select_271296',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Select',
                      id: '8571067',
                      labelKey: 'regionName',
                      valueKey: 'regionId',
                      data: '$reply_712378?.resultData$',
                    },
                    line_number: 11,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'setCurrentFormValues',
                dataId: 168836907340588700,
                options: {
                  compId: 'Form_116141',
                  compLib: 'comm',
                  pageJsonId: '0606944',
                  compName: 'Form',
                  id: '1877716',
                  params: '$data_977419$',
                },
                line_number: 12,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse202.params = [] || [];
    CMDGenerator(eventDataifelse202, {}, 'ifelse', {
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
      className="__CustomClass_0606944__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_0606944_1',
          uid: 'View_0606944_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_0606944_1')}
        {...injectData}
      >
        <Form
          name={'要素'}
          colSpan={8}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_449441'}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.factorForm}
          busiObjectId={''}
          formColumns={[
            {
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '动作',
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
                fieldName: 'action',
                value: data?.factorForm?.action,
                formItemIndex: 8,
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
              busiObjectId: '',
              isLabelDropBoxChild: false,
              id: 'Input_action_124461',
            },
            {
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '代理商名称',
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
                fieldName: 'agentName',
                value: data?.factorForm?.agentName,
                formItemIndex: 9,
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
              busiObjectId: '',
              isLabelDropBoxChild: false,
              id: 'Input_agentName_3011749',
            },
            {
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '法人代表',
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
                fieldName: 'legalRep',
                value: data?.factorForm?.legalRep,
                formItemIndex: 10,
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
              busiObjectId: '',
              isLabelDropBoxChild: false,
              id: 'Input_legalRep_4905766',
            },
            {
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '续签合约日期',
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
                fieldName: 'contractTime',
                value: data?.factorForm?.contractTime,
                formItemIndex: 11,
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
              busiObjectId: '',
              isLabelDropBoxChild: false,
              id: 'Input_contractTime_637706',
            },
            {
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '电话',
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
                fieldName: 'phone',
                value: data?.factorForm?.phone,
                formItemIndex: 12,
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
              busiObjectId: '',
              isLabelDropBoxChild: false,
              id: 'Input_phone_089928',
            },
            {
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '代理业务范围',
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
                fieldName: 'busiScope',
                value: data?.factorForm?.busiScope,
                formItemIndex: 13,
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
              busiObjectId: '',
              isLabelDropBoxChild: false,
              id: 'Input_busiScope_198144',
            },
            {
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '业绩评估',
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
                fieldName: 'performance',
                value: data?.factorForm?.performance,
                formItemIndex: 14,
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
              busiObjectId: '',
              isLabelDropBoxChild: false,
              id: 'Input_performance_8186807',
            },
            {
              label: '输入框',
              compName: 'Input',
              type: 'Input',
              compType: 2,
              compLib: 'comm',
              props: {
                name: '申请原因',
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
                fieldName: 'reason',
                value: data?.factorForm?.reason,
                formItemIndex: 15,
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
              busiObjectId: '',
              isLabelDropBoxChild: false,
              id: 'Input_reason_4525674',
            },
          ]}
          formItemIndex={1}
          labelCol={'9'}
          wrapperCol={15}
          $$componentItem={{
            id: 'Form_116141',
            uid: 'Form_116141',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
          onValuesChange={(changedFieldName: any, changedValue: any) => {
            const eventDatasetDataSource164: any = [
              {
                type: 'setDataSource',
                dataId: 166124391997578100,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '3788211',
                  pageJsonId: '537892',
                  dataSourceId: 168811015518664670,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '337879',
                      code: 'city',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['city'],
                      _idpath: ['337879'],
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '38867',
                      code: 'installAddr',
                      name: '安装地址',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['installAddr'],
                      _idpath: ['38867'],
                      value: {
                        type: ['form', 'Form_116141', 'getFieldsValue'],
                        code: 'installAddr',
                      },
                    },
                    {
                      attrId: '176577',
                      code: 'houseNum',
                      name: '门牌号(含胡同)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['houseNum'],
                      _idpath: ['176577'],
                      value: {
                        type: ['form', 'Form_116141', 'getFieldsValue'],
                        code: 'houseNum',
                      },
                    },
                    {
                      attrId: '176999',
                      code: 'bandwidthUp',
                      name: '上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthUp'],
                      _idpath: ['176999'],
                    },
                    {
                      attrId: '276184',
                      code: 'area',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['area'],
                      _idpath: ['276184'],
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '400189',
                      code: 'country',
                      name: '街道/乡/镇',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['country'],
                      _idpath: ['400189'],
                      value: { type: [], code: '' },
                    },
                    {
                      attrId: '479896',
                      code: 'doorplate',
                      name: '写字楼、小区（组团）、单位大院、自然村等',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['doorplate'],
                      _idpath: ['479896'],
                      value: {
                        type: ['form', 'Form_116141', 'getFieldsValue'],
                        code: 'doorplate',
                      },
                    },
                    {
                      attrId: '668276',
                      code: 'roomName',
                      name: '房间号、户名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['roomName'],
                      _idpath: ['668276'],
                      value: {
                        type: ['form', 'Form_116141', 'getFieldsValue'],
                        code: 'roomName',
                      },
                    },
                    {
                      attrId: '771033',
                      code: 'street',
                      name: '街、路、行政村、居委会',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['street'],
                      _idpath: ['771033'],
                      value: {
                        type: ['form', 'Form_116141', 'getFieldsValue'],
                        code: 'street',
                      },
                    },
                    {
                      attrId: '792124',
                      code: 'floorName',
                      name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['floorName'],
                      _idpath: ['792124'],
                      value: {
                        type: ['form', 'Form_116141', 'getFieldsValue'],
                        code: 'floorName',
                      },
                    },
                    {
                      attrId: '840039',
                      code: 'district',
                      name: '片区',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['district'],
                      _idpath: ['840039'],
                    },
                    {
                      attrId: '4491627',
                      code: 'areaName',
                      name: '区域名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['areaName'],
                      _idpath: ['4491627'],
                    },
                    {
                      attrId: '4717463',
                      code: 'totalBandwidthUp',
                      name: '受理后总上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['totalBandwidthUp'],
                      _idpath: ['4717463'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'totalBandwidthUp',
                      },
                    },
                    {
                      attrId: '8544066',
                      code: 'total',
                      name: '受理后总条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['total'],
                      _idpath: ['8544066'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'total',
                      },
                    },
                    {
                      attrId: '070182',
                      code: 'element',
                      name: '楼号或单元号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['element'],
                      _idpath: ['070182'],
                      value: {
                        type: ['form', 'Form_116141', 'getFieldsValue'],
                        code: 'element',
                      },
                    },
                    {
                      attrId: '0782249',
                      code: 'cityName',
                      name: '地市名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['cityName'],
                      _idpath: ['0782249'],
                    },
                    {
                      attrId: '243537',
                      code: 'stockTotalBandwidthUp',
                      name: '存量总上行带宽(M)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['stockTotalBandwidthUp'],
                      _idpath: ['243537'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'stockTotalBandwidthUp',
                      },
                    },
                    {
                      attrId: '392995',
                      code: 'handleTotalNum',
                      name: '本次受理总条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['handleTotalNum'],
                      _idpath: ['392995'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'handleTotalNum',
                      },
                    },
                    {
                      attrId: '683065',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['683065'],
                    },
                    {
                      attrId: '762247',
                      code: 'countryName',
                      name: '乡镇名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['countryName'],
                      _idpath: ['762247'],
                    },
                    {
                      attrId: '995628',
                      code: 'handleTotalBandwidthUp',
                      name: '本次受理总上行带宽(M)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['handleTotalBandwidthUp'],
                      _idpath: ['995628'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'handleTotalBandwidthUp',
                      },
                    },
                    {
                      attrId: '8377972',
                      code: 'stockNum',
                      name: '存量条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['stockNum'],
                      _idpath: ['8377972'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'stockNum',
                      },
                    },
                    {
                      attrId: '0051165',
                      code: 'busiType',
                      name: '业务类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiType'],
                      _idpath: ['0051165'],
                      value: {
                        type: ['form', 'Form_116141', 'getFieldsValue'],
                        code: 'busiType',
                      },
                    },
                    {
                      attrId: '2171106',
                      code: 'busiTypeName',
                      name: '业务类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiTypeName'],
                      _idpath: ['2171106'],
                    },
                  ],
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 166366244013133920,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '395614',
                      pageJsonId: '537892',
                      actionTitle: '',
                      code: 'function main(data,state,success,fail){var attrList=[];success(attrList)};',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callSelfFunc',
                        dataId: 167031172053950300,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '5198397',
                          pageJsonId: '537892',
                          customFuncName: 'joinAddr',
                          customFuncParams: 'object',
                          paramsObj: { info: '$data.factorForm$' },
                          paramsObjKeyValueMap: { info: '$data.factorForm$' },
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
            eventDatasetDataSource164.params =
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
              eventDatasetDataSource164,
              { changedFieldName, changedValue },
              'setDataSource',
              {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_116141')}
          {...injectData}
        >
          <MultipleSelect
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
            attr={{}}
            placeholder={'请选择'}
            mode={'multiple'}
            formItemIndex={0}
            fieldName={'busiType'}
            $$componentItem={{
              id: 'MultipleSelect_5560734',
              uid: 'MultipleSelect_5560734',
              type: 'MultipleSelect',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDatacustomActionCode631: any = [
                {
                  type: 'customActionCode',
                  dataId: 168835071984538660,
                  shielding: true,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '437984',
                    pageJsonId: '0606944',
                    code: 'function main(data,state,success,fail){var val=e||[];success(val.join(","))};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 168835085009104500,
                      shielding: true,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '318546',
                        pageJsonId: '0606944',
                        dataSourceId: 168811015518664670,
                        dataSourceName: 'factorForm',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '337879',
                            code: 'city',
                            name: '地市',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['city'],
                            _idpath: ['337879'],
                          },
                          {
                            attrId: '276184',
                            code: 'area',
                            name: '区县',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['area'],
                            _idpath: ['276184'],
                          },
                          {
                            attrId: '400189',
                            code: 'country',
                            name: '街道/乡/镇',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['country'],
                            _idpath: ['400189'],
                          },
                          {
                            attrId: '840039',
                            code: 'district',
                            name: '片区',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['district'],
                            _idpath: ['840039'],
                          },
                          {
                            attrId: '771033',
                            code: 'street',
                            name: '街、路、行政村、居委会',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['street'],
                            _idpath: ['771033'],
                          },
                          {
                            attrId: '176577',
                            code: 'houseNum',
                            name: '门牌号(含胡同)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['houseNum'],
                            _idpath: ['176577'],
                          },
                          {
                            attrId: '479896',
                            code: 'doorplate',
                            name: '写字楼、小区（组团）、单位大院、自然村等',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['doorplate'],
                            _idpath: ['479896'],
                          },
                          {
                            attrId: '792124',
                            code: 'floorName',
                            name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['floorName'],
                            _idpath: ['792124'],
                          },
                          {
                            attrId: '070182',
                            code: 'element',
                            name: '楼号或单元号',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['element'],
                            _idpath: ['070182'],
                          },
                          {
                            attrId: '668276',
                            code: 'roomName',
                            name: '房间号、户名',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['roomName'],
                            _idpath: ['668276'],
                          },
                          {
                            attrId: '38867',
                            code: 'installAddr',
                            name: '安装地址',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['installAddr'],
                            _idpath: ['38867'],
                          },
                          {
                            attrId: '176999',
                            code: 'bandwidthUp',
                            name: '上行带宽',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['bandwidthUp'],
                            _idpath: ['176999'],
                          },
                          {
                            attrId: '8544066',
                            code: 'total',
                            name: '受理后总条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['total'],
                            _idpath: ['8544066'],
                          },
                          {
                            attrId: '4717463',
                            code: 'totalBandwidthUp',
                            name: '受理后总上行带宽',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['totalBandwidthUp'],
                            _idpath: ['4717463'],
                          },
                          {
                            attrId: '0782249',
                            code: 'cityName',
                            name: '地市名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['cityName'],
                            _idpath: ['0782249'],
                          },
                          {
                            attrId: '4491627',
                            code: 'areaName',
                            name: '区域名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['areaName'],
                            _idpath: ['4491627'],
                          },
                          {
                            attrId: '762247',
                            code: 'countryName',
                            name: '乡镇名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['countryName'],
                            _idpath: ['762247'],
                          },
                          {
                            attrId: '683065',
                            code: 'reason',
                            name: '申请原因',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['reason'],
                            _idpath: ['683065'],
                          },
                          {
                            attrId: '243537',
                            code: 'stockTotalBandwidthUp',
                            name: '存量总上行带宽(M)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['stockTotalBandwidthUp'],
                            _idpath: ['243537'],
                          },
                          {
                            attrId: '8377972',
                            code: 'stockNum',
                            name: '存量条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['stockNum'],
                            _idpath: ['8377972'],
                          },
                          {
                            attrId: '995628',
                            code: 'handleTotalBandwidthUp',
                            name: '本次受理总上行带宽(M)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['handleTotalBandwidthUp'],
                            _idpath: ['995628'],
                          },
                          {
                            attrId: '392995',
                            code: 'handleTotalNum',
                            name: '本次受理总条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['handleTotalNum'],
                            _idpath: ['392995'],
                          },
                          {
                            attrId: '0051165',
                            code: 'busiType',
                            name: '业务类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$data_437984$'],
                              code: '',
                            },
                            _codePath: ['busiType'],
                            _idpath: ['0051165'],
                          },
                          {
                            attrId: '2171106',
                            code: 'busiTypeName',
                            name: '业务类型名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiTypeName'],
                            _idpath: ['2171106'],
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
                          type: 'console',
                          dataId: 168837382642103260,
                          shielding: true,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '786613',
                            pageJsonId: '0606944',
                            value: ['当前数据源：', '$data_437984$'],
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
              eventDatacustomActionCode631.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(
                eventDatacustomActionCode631,
                { e },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
              const eventDatagetSelectedData333: any = [
                {
                  type: 'getSelectedData',
                  dataId: 169536139253676130,
                  shielding: true,
                  options: {
                    compId: 'MultipleSelect_5560734',
                    compLib: 'comm',
                    pageJsonId: '0606944',
                    compName: 'MultipleSelect',
                    id: '259414',
                  },
                  line_number: 4,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 169536139641624200,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '0153904',
                        pageJsonId: '0606944',
                        value: ['$selectedData_259414$'],
                      },
                      line_number: 5,
                    },
                    {
                      type: 'customActionCode',
                      dataId: 169536142620317300,
                      shielding: true,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '5031476',
                        pageJsonId: '0606944',
                        code: 'function main(data,state,success,fail){var sels=selectedData_259414||[];var labels=sels.map(function(item){return item.label});success(labels.join(","))};',
                      },
                      line_number: 6,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 169536155605443300,
                          shielding: true,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '652036',
                            pageJsonId: '0606944',
                            dataSourceId: 168811015518664670,
                            dataSourceName: 'factorForm',
                            dataSourceRelType: 'custom',
                            dataSourceSetValue: [
                              {
                                attrId: '337879',
                                code: 'city',
                                name: '地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['city'],
                                _idpath: ['337879'],
                              },
                              {
                                attrId: '276184',
                                code: 'area',
                                name: '区县',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['area'],
                                _idpath: ['276184'],
                              },
                              {
                                attrId: '400189',
                                code: 'country',
                                name: '街道/乡/镇',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['country'],
                                _idpath: ['400189'],
                              },
                              {
                                attrId: '840039',
                                code: 'district',
                                name: '片区',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['district'],
                                _idpath: ['840039'],
                              },
                              {
                                attrId: '771033',
                                code: 'street',
                                name: '街、路、行政村、居委会',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['street'],
                                _idpath: ['771033'],
                              },
                              {
                                attrId: '176577',
                                code: 'houseNum',
                                name: '门牌号(含胡同)',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['houseNum'],
                                _idpath: ['176577'],
                              },
                              {
                                attrId: '479896',
                                code: 'doorplate',
                                name: '写字楼、小区（组团）、单位大院、自然村等',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['doorplate'],
                                _idpath: ['479896'],
                              },
                              {
                                attrId: '792124',
                                code: 'floorName',
                                name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['floorName'],
                                _idpath: ['792124'],
                              },
                              {
                                attrId: '070182',
                                code: 'element',
                                name: '楼号或单元号',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['element'],
                                _idpath: ['070182'],
                              },
                              {
                                attrId: '668276',
                                code: 'roomName',
                                name: '房间号、户名',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['roomName'],
                                _idpath: ['668276'],
                              },
                              {
                                attrId: '38867',
                                code: 'installAddr',
                                name: '安装地址',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['installAddr'],
                                _idpath: ['38867'],
                              },
                              {
                                attrId: '176999',
                                code: 'bandwidthUp',
                                name: '上行带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['bandwidthUp'],
                                _idpath: ['176999'],
                              },
                              {
                                attrId: '8544066',
                                code: 'total',
                                name: '受理后总条数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['total'],
                                _idpath: ['8544066'],
                              },
                              {
                                attrId: '4717463',
                                code: 'totalBandwidthUp',
                                name: '受理后总上行带宽',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['totalBandwidthUp'],
                                _idpath: ['4717463'],
                              },
                              {
                                attrId: '0782249',
                                code: 'cityName',
                                name: '地市名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['cityName'],
                                _idpath: ['0782249'],
                              },
                              {
                                attrId: '4491627',
                                code: 'areaName',
                                name: '区域名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['areaName'],
                                _idpath: ['4491627'],
                              },
                              {
                                attrId: '762247',
                                code: 'countryName',
                                name: '乡镇名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['countryName'],
                                _idpath: ['762247'],
                              },
                              {
                                attrId: '683065',
                                code: 'reason',
                                name: '申请原因',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['reason'],
                                _idpath: ['683065'],
                              },
                              {
                                attrId: '243537',
                                code: 'stockTotalBandwidthUp',
                                name: '存量总上行带宽(M)',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['stockTotalBandwidthUp'],
                                _idpath: ['243537'],
                              },
                              {
                                attrId: '8377972',
                                code: 'stockNum',
                                name: '存量条数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['stockNum'],
                                _idpath: ['8377972'],
                              },
                              {
                                attrId: '995628',
                                code: 'handleTotalBandwidthUp',
                                name: '本次受理总上行带宽(M)',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['handleTotalBandwidthUp'],
                                _idpath: ['995628'],
                              },
                              {
                                attrId: '392995',
                                code: 'handleTotalNum',
                                name: '本次受理总条数',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['handleTotalNum'],
                                _idpath: ['392995'],
                              },
                              {
                                attrId: '0051165',
                                code: 'busiType',
                                name: '业务类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['busiType'],
                                _idpath: ['0051165'],
                              },
                              {
                                attrId: '2171106',
                                code: 'busiTypeName',
                                name: '业务类型名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                showInput: true,
                                _codePath: ['busiTypeName'],
                                _idpath: ['2171106'],
                                value: {
                                  type: ['context', '$data_5031476$'],
                                  code: '',
                                },
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
              ];
              eventDatagetSelectedData333.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(
                eventDatagetSelectedData333,
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
            ref={(r: any) => refs.setComponentRef(r, 'MultipleSelect_5560734')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_909994',
              uid: 'View_909994',
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
              textAlign: 'left',
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_909994')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_57235118',
              uid: 'View_57235118',
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
              textAlign: 'left',
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_57235118')}
            {...injectData}
          />
          <Select
            name={'地市'}
            size={'default'}
            selfSpan={8}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            fieldName={'city'}
            formItemIndex={3}
            labelCol={'9'}
            wrapperCol={15}
            value={data?.factorForm?.city}
            $$componentItem={{
              id: 'Select_656868',
              uid: 'Select_656868',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDataclearValue148: any = [
                {
                  type: 'clearValue',
                  dataId: 166600111973233150,
                  options: {
                    compId: 'Select_341537',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Select',
                    id: '315082',
                  },
                  line_number: 1,
                },
              ];
              eventDataclearValue148.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(eventDataclearValue148, { e }, 'clearValue', {
                id: 'clearValue',
                name: 'clearValue',
                type: 'clearValue',
                platform: 'pc',
              });
              const eventDataclearValue149: any = [
                {
                  type: 'clearValue',
                  dataId: 167052457072323170,
                  options: {
                    compId: 'Select_271296',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Select',
                    id: '97223',
                  },
                  line_number: 2,
                },
              ];
              eventDataclearValue149.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(eventDataclearValue149, { e }, 'clearValue', {
                id: 'clearValue',
                name: 'clearValue',
                type: 'clearValue',
                platform: 'pc',
              });
              const eventDatagetSelectedData334: any = [
                {
                  type: 'getSelectedData',
                  dataId: 166599846272350100,
                  options: {
                    compId: 'Select_656868',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Select',
                    id: '574924',
                  },
                  line_number: 3,
                  callback1: [
                    {
                      type: 'apiRequest',
                      dataId: 166599846995575300,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '8209674',
                        pageJsonId: '537892',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'SYS_qryRegionListByParentId',
                        _apiCode: 'qryRegionListByParentId',
                        _source: 'rhin',
                        _serviceId: '878100790201982976',
                        _serviceTitle:
                          '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                            dataKey: '8209674_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '8209674_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '8209674_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'includeParent',
                                attrType: 'field',
                                type: 'boolean',
                                mustFlag: 'F',
                                _id: 'body.includeParent',
                                compType: 'Input',
                                name: 'includeParent',
                                parents: ['body'],
                                id: 'body.includeParent',
                                dataKey: '8209674_body.includeParent',
                                value: { type: ['customize'], code: 'false' },
                              },
                              {
                                code: 'parentRegionId',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'F',
                                _id: 'body.parentRegionId',
                                compType: 'Input',
                                name: 'parentRegionId',
                                parents: ['body'],
                                id: 'body.parentRegionId',
                                dataKey: '8209674_body.parentRegionId',
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_574924[0].value$',
                                },
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '8209674_body',
                          },
                        ],
                        _sourceName: '根据父区域ID查询所有子区域-tsm',
                      },
                      line_number: 4,
                      callback1: [
                        {
                          type: 'reloadSelectData',
                          dataId: 167051590811786000,
                          options: {
                            compId: 'Select_341537',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Select',
                            id: '820833',
                            labelKey: 'regionName',
                            valueKey: 'regionId',
                            data: '$reply_8209674?.resultData$',
                          },
                          line_number: 5,
                          callback1: [],
                        },
                      ],
                      callback2: [],
                    },
                    {
                      type: 'setDataSource',
                      dataId: 167031132501953340,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '067155',
                        pageJsonId: '537892',
                        dataSourceId: 168811015518664670,
                        dataSourceName: 'factorForm',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '337879',
                            code: 'city',
                            name: '地市',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$selectedData_574924[0]$'],
                              code: 'value',
                            },
                            _codePath: ['city'],
                            _idpath: ['337879'],
                          },
                          {
                            attrId: '276184',
                            code: 'area',
                            name: '区县',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: { type: [], code: '' },
                            _codePath: ['area'],
                            _idpath: ['276184'],
                          },
                          {
                            attrId: '400189',
                            code: 'country',
                            name: '街道/乡/镇',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['country'],
                            _idpath: ['400189'],
                          },
                          {
                            attrId: '840039',
                            code: 'district',
                            name: '片区',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['district'],
                            _idpath: ['840039'],
                          },
                          {
                            attrId: '771033',
                            code: 'street',
                            name: '街、路、行政村、居委会',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['street'],
                            _idpath: ['771033'],
                          },
                          {
                            attrId: '176577',
                            code: 'houseNum',
                            name: '门牌号(含胡同)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['houseNum'],
                            _idpath: ['176577'],
                          },
                          {
                            attrId: '479896',
                            code: 'doorplate',
                            name: '写字楼、小区（组团）、单位大院、自然村等',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['doorplate'],
                            _idpath: ['479896'],
                          },
                          {
                            attrId: '792124',
                            code: 'floorName',
                            name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['floorName'],
                            _idpath: ['792124'],
                          },
                          {
                            attrId: '070182',
                            code: 'element',
                            name: '楼号或单元号',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['element'],
                            _idpath: ['070182'],
                          },
                          {
                            attrId: '668276',
                            code: 'roomName',
                            name: '房间号、户名',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['roomName'],
                            _idpath: ['668276'],
                          },
                          {
                            attrId: '38867',
                            code: 'installAddr',
                            name: '安装地址',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['installAddr'],
                            _idpath: ['38867'],
                          },
                          {
                            attrId: '176999',
                            code: 'bandwidthUp',
                            name: '上行带宽',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['bandwidthUp'],
                            _idpath: ['176999'],
                          },
                          {
                            attrId: '8544066',
                            code: 'total',
                            name: '受理后总条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['total'],
                            _idpath: ['8544066'],
                          },
                          {
                            attrId: '4717463',
                            code: 'totalBandwidthUp',
                            name: '受理后总上行带宽',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['totalBandwidthUp'],
                            _idpath: ['4717463'],
                          },
                          {
                            attrId: '0782249',
                            code: 'cityName',
                            name: '地市名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$selectedData_574924[0]$'],
                              code: 'label',
                            },
                            _codePath: ['cityName'],
                            _idpath: ['0782249'],
                          },
                          {
                            attrId: '4491627',
                            code: 'areaName',
                            name: '区域名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['areaName'],
                            _idpath: ['4491627'],
                          },
                          {
                            attrId: '762247',
                            code: 'countryName',
                            name: '乡镇名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['countryName'],
                            _idpath: ['762247'],
                          },
                          {
                            attrId: '683065',
                            code: 'reason',
                            name: '申请原因',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['reason'],
                            _idpath: ['683065'],
                          },
                          {
                            attrId: '243537',
                            code: 'stockTotalBandwidthUp',
                            name: '存量总上行带宽(M)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['stockTotalBandwidthUp'],
                            _idpath: ['243537'],
                          },
                          {
                            attrId: '8377972',
                            code: 'stockNum',
                            name: '存量条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['stockNum'],
                            _idpath: ['8377972'],
                          },
                          {
                            attrId: '995628',
                            code: 'handleTotalBandwidthUp',
                            name: '本次受理总上行带宽(M)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['handleTotalBandwidthUp'],
                            _idpath: ['995628'],
                          },
                          {
                            attrId: '392995',
                            code: 'handleTotalNum',
                            name: '本次受理总条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['handleTotalNum'],
                            _idpath: ['392995'],
                          },
                          {
                            attrId: '0051165',
                            code: 'busiType',
                            name: '业务类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiType'],
                            _idpath: ['0051165'],
                          },
                          {
                            attrId: '2171106',
                            code: 'busiTypeName',
                            name: '业务类型名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiTypeName'],
                            _idpath: ['2171106'],
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 6,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 168837018730922370,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '9405398',
                            pageJsonId: '0606944',
                            customFuncName: 'joinAddr',
                            customFuncParams: 'object',
                            paramsObj: { info: '$data.factorForm$' },
                            paramsObjKeyValueMap: { info: '$data.factorForm$' },
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
              ];
              eventDatagetSelectedData334.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(
                eventDatagetSelectedData334,
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
            ref={(r: any) => refs.setComponentRef(r, 'Select_656868')}
            {...injectData}
          />
          <Select
            name={'区县'}
            size={'default'}
            selfSpan={8}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            fieldName={'area'}
            formItemIndex={4}
            labelCol={'9'}
            wrapperCol={15}
            value={data?.factorForm?.area}
            $$componentItem={{
              id: 'Select_341537',
              uid: 'Select_341537',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDataclearValue150: any = [
                {
                  type: 'clearValue',
                  dataId: 167052451129312400,
                  options: {
                    compId: 'Select_271296',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Select',
                    id: '77687232',
                  },
                  line_number: 1,
                },
              ];
              eventDataclearValue150.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(eventDataclearValue150, { e }, 'clearValue', {
                id: 'clearValue',
                name: 'clearValue',
                type: 'clearValue',
                platform: 'pc',
              });
              const eventDatagetSelectedData335: any = [
                {
                  type: 'getSelectedData',
                  dataId: 167031141579304900,
                  options: {
                    compId: 'Select_341537',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Select',
                    id: '8810325',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 167280032273710430,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '006105',
                        pageJsonId: '537892',
                      },
                      line_number: 3,
                    },
                    {
                      type: 'setDataSource',
                      dataId: 167031142622790720,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '59823',
                        pageJsonId: '537892',
                        dataSourceId: 168811015518664670,
                        dataSourceName: 'factorForm',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '337879',
                            code: 'city',
                            name: '地市',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['city'],
                            _idpath: ['337879'],
                          },
                          {
                            attrId: '276184',
                            code: 'area',
                            name: '区县',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$selectedData_8810325[0]$'],
                              code: 'value',
                            },
                            _codePath: ['area'],
                            _idpath: ['276184'],
                          },
                          {
                            attrId: '400189',
                            code: 'country',
                            name: '街道/乡/镇',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['country'],
                            _idpath: ['400189'],
                          },
                          {
                            attrId: '840039',
                            code: 'district',
                            name: '片区',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['district'],
                            _idpath: ['840039'],
                          },
                          {
                            attrId: '771033',
                            code: 'street',
                            name: '街、路、行政村、居委会',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['street'],
                            _idpath: ['771033'],
                          },
                          {
                            attrId: '176577',
                            code: 'houseNum',
                            name: '门牌号(含胡同)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['houseNum'],
                            _idpath: ['176577'],
                          },
                          {
                            attrId: '479896',
                            code: 'doorplate',
                            name: '写字楼、小区（组团）、单位大院、自然村等',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['doorplate'],
                            _idpath: ['479896'],
                          },
                          {
                            attrId: '792124',
                            code: 'floorName',
                            name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['floorName'],
                            _idpath: ['792124'],
                          },
                          {
                            attrId: '070182',
                            code: 'element',
                            name: '楼号或单元号',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['element'],
                            _idpath: ['070182'],
                          },
                          {
                            attrId: '668276',
                            code: 'roomName',
                            name: '房间号、户名',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['roomName'],
                            _idpath: ['668276'],
                          },
                          {
                            attrId: '38867',
                            code: 'installAddr',
                            name: '安装地址',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['installAddr'],
                            _idpath: ['38867'],
                          },
                          {
                            attrId: '176999',
                            code: 'bandwidthUp',
                            name: '上行带宽',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['bandwidthUp'],
                            _idpath: ['176999'],
                          },
                          {
                            attrId: '8544066',
                            code: 'total',
                            name: '受理后总条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['total'],
                            _idpath: ['8544066'],
                          },
                          {
                            attrId: '4717463',
                            code: 'totalBandwidthUp',
                            name: '受理后总上行带宽',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['totalBandwidthUp'],
                            _idpath: ['4717463'],
                          },
                          {
                            attrId: '0782249',
                            code: 'cityName',
                            name: '地市名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['cityName'],
                            _idpath: ['0782249'],
                          },
                          {
                            attrId: '4491627',
                            code: 'areaName',
                            name: '区域名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$selectedData_8810325[0]$'],
                              code: 'label',
                            },
                            _codePath: ['areaName'],
                            _idpath: ['4491627'],
                          },
                          {
                            attrId: '762247',
                            code: 'countryName',
                            name: '乡镇名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['countryName'],
                            _idpath: ['762247'],
                          },
                          {
                            attrId: '683065',
                            code: 'reason',
                            name: '申请原因',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['reason'],
                            _idpath: ['683065'],
                          },
                          {
                            attrId: '243537',
                            code: 'stockTotalBandwidthUp',
                            name: '存量总上行带宽(M)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['stockTotalBandwidthUp'],
                            _idpath: ['243537'],
                          },
                          {
                            attrId: '8377972',
                            code: 'stockNum',
                            name: '存量条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['stockNum'],
                            _idpath: ['8377972'],
                          },
                          {
                            attrId: '995628',
                            code: 'handleTotalBandwidthUp',
                            name: '本次受理总上行带宽(M)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['handleTotalBandwidthUp'],
                            _idpath: ['995628'],
                          },
                          {
                            attrId: '392995',
                            code: 'handleTotalNum',
                            name: '本次受理总条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['handleTotalNum'],
                            _idpath: ['392995'],
                          },
                          {
                            attrId: '0051165',
                            code: 'busiType',
                            name: '业务类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiType'],
                            _idpath: ['0051165'],
                          },
                          {
                            attrId: '2171106',
                            code: 'busiTypeName',
                            name: '业务类型名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiTypeName'],
                            _idpath: ['2171106'],
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 4,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'apiRequest',
                      dataId: 167051566880931740,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '271975',
                        pageJsonId: '537892',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'SYS_qryRegionListByParentId',
                        _apiCode: 'qryRegionListByParentId',
                        _source: 'rhin',
                        _serviceId: '878100790201982976',
                        _serviceTitle:
                          '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
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
                            dataKey: '271975_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '271975_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '271975_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'includeParent',
                                attrType: 'field',
                                type: 'boolean',
                                mustFlag: 'F',
                                _id: 'body.includeParent',
                                compType: 'Input',
                                name: 'includeParent',
                                parents: ['body'],
                                id: 'body.includeParent',
                                dataKey: '271975_body.includeParent',
                                value: { type: ['customize'], code: 'false' },
                              },
                              {
                                code: 'parentRegionId',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'F',
                                _id: 'body.parentRegionId',
                                compType: 'Input',
                                name: 'parentRegionId',
                                parents: ['body'],
                                id: 'body.parentRegionId',
                                dataKey: '271975_body.parentRegionId',
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_8810325[0].value$',
                                },
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '271975_body',
                          },
                        ],
                        _sourceName: '根据父区域ID查询所有子区域-tsm',
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'reloadSelectData',
                          dataId: 167051582516099780,
                          options: {
                            compId: 'Select_271296',
                            compLib: 'comm',
                            pageJsonId: '537892',
                            compName: 'Select',
                            id: '07548',
                            labelKey: 'regionName',
                            valueKey: 'regionId',
                            data: '$reply_271975?.resultData$',
                          },
                          line_number: 6,
                          callback1: [
                            {
                              type: 'callSelfFunc',
                              dataId: 168837020962372000,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '526278',
                                pageJsonId: '0606944',
                                customFuncName: 'joinAddr',
                                customFuncParams: 'object',
                                paramsObj: { info: '$data.factorForm$' },
                                paramsObjKeyValueMap: {
                                  info: '$data.factorForm$',
                                },
                              },
                              line_number: 7,
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
              eventDatagetSelectedData335.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(
                eventDatagetSelectedData335,
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
            ref={(r: any) => refs.setComponentRef(r, 'Select_341537')}
            {...injectData}
          />
          <Select
            name={'街道/乡/镇'}
            size={'default'}
            selfSpan={8}
            labelCol={'9'}
            wrapperCol={15}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            fieldName={'country'}
            formItemIndex={5}
            value={data?.factorForm?.country}
            $$componentItem={{
              id: 'Select_271296',
              uid: 'Select_271296',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDatagetSelectedData336: any = [
                {
                  type: 'getSelectedData',
                  dataId: 167031148859395970,
                  options: {
                    compId: 'Select_271296',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Select',
                    id: '041008',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 167031149450181020,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '875389',
                        pageJsonId: '537892',
                        dataSourceId: 168811015518664670,
                        dataSourceName: 'factorForm',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '337879',
                            code: 'city',
                            name: '地市',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['city'],
                            _idpath: ['337879'],
                          },
                          {
                            attrId: '276184',
                            code: 'area',
                            name: '区县',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['area'],
                            _idpath: ['276184'],
                          },
                          {
                            attrId: '400189',
                            code: 'country',
                            name: '街道/乡/镇',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$selectedData_041008[0]$'],
                              code: 'value',
                            },
                            _codePath: ['country'],
                            _idpath: ['400189'],
                          },
                          {
                            attrId: '840039',
                            code: 'district',
                            name: '片区',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['district'],
                            _idpath: ['840039'],
                          },
                          {
                            attrId: '771033',
                            code: 'street',
                            name: '街、路、行政村、居委会',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['street'],
                            _idpath: ['771033'],
                          },
                          {
                            attrId: '176577',
                            code: 'houseNum',
                            name: '门牌号(含胡同)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['houseNum'],
                            _idpath: ['176577'],
                          },
                          {
                            attrId: '479896',
                            code: 'doorplate',
                            name: '写字楼、小区（组团）、单位大院、自然村等',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['doorplate'],
                            _idpath: ['479896'],
                          },
                          {
                            attrId: '792124',
                            code: 'floorName',
                            name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['floorName'],
                            _idpath: ['792124'],
                          },
                          {
                            attrId: '070182',
                            code: 'element',
                            name: '楼号或单元号',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['element'],
                            _idpath: ['070182'],
                          },
                          {
                            attrId: '668276',
                            code: 'roomName',
                            name: '房间号、户名',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['roomName'],
                            _idpath: ['668276'],
                          },
                          {
                            attrId: '38867',
                            code: 'installAddr',
                            name: '安装地址',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['installAddr'],
                            _idpath: ['38867'],
                          },
                          {
                            attrId: '176999',
                            code: 'bandwidthUp',
                            name: '上行带宽',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['bandwidthUp'],
                            _idpath: ['176999'],
                          },
                          {
                            attrId: '8544066',
                            code: 'total',
                            name: '受理后总条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['total'],
                            _idpath: ['8544066'],
                          },
                          {
                            attrId: '4717463',
                            code: 'totalBandwidthUp',
                            name: '受理后总上行带宽',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['totalBandwidthUp'],
                            _idpath: ['4717463'],
                          },
                          {
                            attrId: '0782249',
                            code: 'cityName',
                            name: '地市名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['cityName'],
                            _idpath: ['0782249'],
                          },
                          {
                            attrId: '4491627',
                            code: 'areaName',
                            name: '区域名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['areaName'],
                            _idpath: ['4491627'],
                          },
                          {
                            attrId: '762247',
                            code: 'countryName',
                            name: '乡镇名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$selectedData_041008[0]$'],
                              code: 'label',
                            },
                            _codePath: ['countryName'],
                            _idpath: ['762247'],
                          },
                          {
                            attrId: '683065',
                            code: 'reason',
                            name: '申请原因',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['reason'],
                            _idpath: ['683065'],
                          },
                          {
                            attrId: '243537',
                            code: 'stockTotalBandwidthUp',
                            name: '存量总上行带宽(M)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['stockTotalBandwidthUp'],
                            _idpath: ['243537'],
                          },
                          {
                            attrId: '8377972',
                            code: 'stockNum',
                            name: '存量条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['stockNum'],
                            _idpath: ['8377972'],
                          },
                          {
                            attrId: '995628',
                            code: 'handleTotalBandwidthUp',
                            name: '本次受理总上行带宽(M)',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['handleTotalBandwidthUp'],
                            _idpath: ['995628'],
                          },
                          {
                            attrId: '392995',
                            code: 'handleTotalNum',
                            name: '本次受理总条数',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['handleTotalNum'],
                            _idpath: ['392995'],
                          },
                          {
                            attrId: '0051165',
                            code: 'busiType',
                            name: '业务类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiType'],
                            _idpath: ['0051165'],
                          },
                          {
                            attrId: '2171106',
                            code: 'busiTypeName',
                            name: '业务类型名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: true,
                            _codePath: ['busiTypeName'],
                            _idpath: ['2171106'],
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
                          type: 'callSelfFunc',
                          dataId: 168837021604468300,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '0808214',
                            pageJsonId: '0606944',
                            customFuncName: 'joinAddr',
                            customFuncParams: 'object',
                            paramsObj: { info: '$data.factorForm$' },
                            paramsObjKeyValueMap: { info: '$data.factorForm$' },
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
              eventDatagetSelectedData336.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(
                eventDatagetSelectedData336,
                { e },
                'getSelectedData',
                {
                  id: 'getSelectedData',
                  name: 'getSelectedData',
                  type: 'getSelectedData',
                  platform: 'pc',
                },
              );
              const eventDatagetSelectedData337: any = [
                {
                  type: 'getSelectedData',
                  dataId: 167383820776184450,
                  shielding: true,
                  options: {
                    compId: 'Select_271296',
                    compLib: 'comm',
                    pageJsonId: '537892',
                    compName: 'Select',
                    id: '893525',
                  },
                  line_number: 4,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 167383821038076960,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '146784',
                        pageJsonId: '537892',
                        value: ['成功============='],
                      },
                      line_number: 5,
                    },
                  ],
                  callback2: [
                    {
                      type: 'console',
                      dataId: 167383822017113600,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '875552',
                        pageJsonId: '537892',
                        value: ['失败============='],
                      },
                      line_number: 6,
                    },
                  ],
                },
              ];
              eventDatagetSelectedData337.params =
                [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
              CMDGenerator(
                eventDatagetSelectedData337,
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
            ref={(r: any) => refs.setComponentRef(r, 'Select_271296')}
            {...injectData}
          />
          <Input
            name={'街/村'}
            size={'default'}
            selfSpan={8}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            fieldName={'street'}
            formItemIndex={6}
            labelCol={'9'}
            wrapperCol={15}
            value={data?.factorForm?.street}
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
              id: 'Input_296185',
              uid: 'Input_296185',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_296185')}
            {...injectData}
          />
          <Input
            name={'号/弄'}
            size={'default'}
            selfSpan={8}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            fieldName={'houseNum'}
            formItemIndex={7}
            labelCol={'9'}
            wrapperCol={15}
            value={data?.factorForm?.houseNum}
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
              id: 'Input_381051',
              uid: 'Input_381051',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_381051')}
            {...injectData}
          />
          <Input
            name={'楼宇/单位'}
            size={'default'}
            selfSpan={8}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'写字楼、小区（组团）、单位大院、自然村等'}
            fieldName={'doorplate'}
            formItemIndex={8}
            labelCol={'9'}
            wrapperCol={15}
            value={data?.factorForm?.doorplate}
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
              id: 'Input_380542',
              uid: 'Input_380542',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_380542')}
            {...injectData}
          />
          <Input
            name={'单元楼号'}
            size={'default'}
            selfSpan={8}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'楼名、楼号(门面房前加"门面"标志)、村民组'}
            fieldName={'floorName'}
            formItemIndex={9}
            labelCol={'9'}
            wrapperCol={15}
            value={data?.factorForm?.floorName}
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
              id: 'Input_1663225',
              uid: 'Input_1663225',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_1663225')}
            {...injectData}
          />
          <Input
            name={'层号'}
            size={'default'}
            selfSpan={8}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            fieldName={'element'}
            formItemIndex={10}
            labelCol={'9'}
            wrapperCol={15}
            value={data?.factorForm?.element}
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
              id: 'Input_2977107',
              uid: 'Input_2977107',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_2977107')}
            {...injectData}
          />
          <Input
            name={'房间号'}
            size={'default'}
            selfSpan={8}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            fieldName={'roomName'}
            formItemIndex={11}
            labelCol={'9'}
            wrapperCol={15}
            value={data?.factorForm?.roomName}
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
              id: 'Input_7436895',
              uid: 'Input_7436895',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_7436895')}
            {...injectData}
          />
          <Input
            name={'安装地址'}
            size={'default'}
            selfSpan={24}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            fieldName={'installAddr'}
            formItemIndex={12}
            labelCol={'3'}
            wrapperCol={21}
            value={data?.factorForm?.installAddr}
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
              id: 'Input_627735',
              uid: 'Input_627735',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_627735')}
            {...injectData}
          />
        </Form>
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
          formCode={'Form_767499'}
          $$componentItem={{
            id: 'Form_767499',
            uid: 'Form_767499',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '16px 0px 0px 0px' }}
          onValuesChange={(changedFieldName: any, changedValue: any) => {
            const eventDatasetDataSource165: any = [
              {
                type: 'setDataSource',
                dataId: 168837343408138050,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '0343827',
                  pageJsonId: '537892',
                  dataSourceId: 168811015518664670,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '337879',
                      code: 'city',
                      name: '地市',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['city'],
                      _idpath: ['337879'],
                    },
                    {
                      attrId: '38867',
                      code: 'installAddr',
                      name: '安装地址',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['installAddr'],
                      _idpath: ['38867'],
                    },
                    {
                      attrId: '176577',
                      code: 'houseNum',
                      name: '门牌号(含胡同)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['houseNum'],
                      _idpath: ['176577'],
                    },
                    {
                      attrId: '176999',
                      code: 'bandwidthUp',
                      name: '上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['bandwidthUp'],
                      _idpath: ['176999'],
                    },
                    {
                      attrId: '276184',
                      code: 'area',
                      name: '区县',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['area'],
                      _idpath: ['276184'],
                    },
                    {
                      attrId: '400189',
                      code: 'country',
                      name: '街道/乡/镇',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['country'],
                      _idpath: ['400189'],
                    },
                    {
                      attrId: '479896',
                      code: 'doorplate',
                      name: '写字楼、小区（组团）、单位大院、自然村等',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['doorplate'],
                      _idpath: ['479896'],
                    },
                    {
                      attrId: '668276',
                      code: 'roomName',
                      name: '房间号、户名',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['roomName'],
                      _idpath: ['668276'],
                    },
                    {
                      attrId: '771033',
                      code: 'street',
                      name: '街、路、行政村、居委会',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['street'],
                      _idpath: ['771033'],
                    },
                    {
                      attrId: '792124',
                      code: 'floorName',
                      name: '楼名、楼号(门面房前加"门面"标志)、村民组',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['floorName'],
                      _idpath: ['792124'],
                    },
                    {
                      attrId: '840039',
                      code: 'district',
                      name: '片区',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['district'],
                      _idpath: ['840039'],
                    },
                    {
                      attrId: '4491627',
                      code: 'areaName',
                      name: '区域名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['areaName'],
                      _idpath: ['4491627'],
                    },
                    {
                      attrId: '4717463',
                      code: 'totalBandwidthUp',
                      name: '受理后总上行带宽',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['totalBandwidthUp'],
                      _idpath: ['4717463'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'totalBandwidthUp',
                      },
                    },
                    {
                      attrId: '8544066',
                      code: 'total',
                      name: '受理后总条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['total'],
                      _idpath: ['8544066'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'total',
                      },
                    },
                    {
                      attrId: '070182',
                      code: 'element',
                      name: '楼号或单元号',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['element'],
                      _idpath: ['070182'],
                    },
                    {
                      attrId: '0782249',
                      code: 'cityName',
                      name: '地市名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['cityName'],
                      _idpath: ['0782249'],
                    },
                    {
                      attrId: '243537',
                      code: 'stockTotalBandwidthUp',
                      name: '存量总上行带宽(M)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['stockTotalBandwidthUp'],
                      _idpath: ['243537'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'stockTotalBandwidthUp',
                      },
                    },
                    {
                      attrId: '392995',
                      code: 'handleTotalNum',
                      name: '本次受理总条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['handleTotalNum'],
                      _idpath: ['392995'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'handleTotalNum',
                      },
                    },
                    {
                      attrId: '683065',
                      code: 'reason',
                      name: '申请原因',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['reason'],
                      _idpath: ['683065'],
                    },
                    {
                      attrId: '762247',
                      code: 'countryName',
                      name: '乡镇名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['countryName'],
                      _idpath: ['762247'],
                    },
                    {
                      attrId: '995628',
                      code: 'handleTotalBandwidthUp',
                      name: '本次受理总上行带宽(M)',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['handleTotalBandwidthUp'],
                      _idpath: ['995628'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'handleTotalBandwidthUp',
                      },
                    },
                    {
                      attrId: '8377972',
                      code: 'stockNum',
                      name: '存量条数',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['stockNum'],
                      _idpath: ['8377972'],
                      value: {
                        type: ['form', 'Form_767499', 'getFieldsValue'],
                        code: 'stockNum',
                      },
                    },
                    {
                      attrId: '0051165',
                      code: 'busiType',
                      name: '业务类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiType'],
                      _idpath: ['0051165'],
                    },
                    {
                      attrId: '2171106',
                      code: 'busiTypeName',
                      name: '业务类型名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['busiTypeName'],
                      _idpath: ['2171106'],
                    },
                  ],
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource165.params =
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
              eventDatasetDataSource165,
              { changedFieldName, changedValue },
              'setDataSource',
              {
                id: 'setDataSource',
                name: 'setDataSource',
                type: 'setDataSource',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_767499')}
          {...injectData}
        >
          <Input
            name={'本次受理条数'}
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
            required={true}
            placeholder={'请输入'}
            formItemIndex={0}
            allowClear={false}
            fieldName={'handleTotalNum'}
            value={data?.factorForm?.handleTotalNum}
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
              id: 'Input_015345',
              uid: 'Input_015345',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDatacallSelfFunc473: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 168835282795398880,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '841507',
                    pageJsonId: '0606944',
                    customFuncName: 'calTotalNum',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc473.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatacallSelfFunc473, { e }, 'callSelfFunc', {
                id: 'callSelfFunc',
                name: 'callSelfFunc',
                type: 'callSelfFunc',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_015345')}
            {...injectData}
          />
          <Input
            name={'本次受理总上行带宽'}
            size={'default'}
            selfSpan={8}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'M'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={1}
            fieldName={'handleTotalBandwidthUp'}
            value={data?.factorForm?.handleTotalBandwidthUp}
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
              id: 'Input_004656',
              uid: 'Input_004656',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onChange={(e: any) => {
              const eventDatacallSelfFunc474: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 168835283866602980,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '5350313',
                    pageJsonId: '0606944',
                    customFuncName: 'calTotalBandwidthUp',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc474.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatacallSelfFunc474, { e }, 'callSelfFunc', {
                id: 'callSelfFunc',
                name: 'callSelfFunc',
                type: 'callSelfFunc',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_004656')}
            {...injectData}
          />
          <Input
            name={'存量条数'}
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
            required={true}
            placeholder={'请输入'}
            formItemIndex={2}
            fieldName={'stockNum'}
            value={data?.factorForm?.stockNum}
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
              id: 'Input_821119',
              uid: 'Input_821119',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_821119')}
            {...injectData}
          />
          <Input
            name={'存量总上行带宽'}
            size={'default'}
            selfSpan={8}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'M'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={3}
            fieldName={'stockTotalBandwidthUp'}
            value={data?.factorForm?.stockTotalBandwidthUp}
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
              id: 'Input_935244',
              uid: 'Input_935244',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_935244')}
            {...injectData}
          />
          <Input
            name={'受理后总条数'}
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
            required={true}
            placeholder={'自动计算'}
            formItemIndex={4}
            fieldName={'total'}
            value={data?.factorForm?.total}
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
              id: 'Input_5738056',
              uid: 'Input_5738056',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_5738056')}
            {...injectData}
          />
          <Input
            name={'受理后总上行带宽'}
            size={'default'}
            selfSpan={8}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'M'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'自动计算'}
            formItemIndex={5}
            fieldName={'totalBandwidthUp'}
            value={data?.factorForm?.totalBandwidthUp}
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
              id: 'Input_951486',
              uid: 'Input_951486',
              type: 'Input',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_951486')}
            {...injectData}
          />
        </Form>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_17764',
            uid: 'View_17764',
            type: 'View',
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
            justifyContent: 'flex-end',
            margin: '24px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_17764')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_1245294',
              uid: 'View_1245294',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'right',
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_1245294')}
            {...injectData}
          >
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
                id: 'Button_31561',
                uid: 'Button_31561',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatacloseModal131: any = [
                  {
                    type: 'closeModal',
                    dataId: 168835154281754340,
                    options: { compId: 'page', compName: 'page', id: '626741' },
                    line_number: 1,
                  },
                ];
                eventDatacloseModal131.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacloseModal131, { e }, 'closeModal', {
                  id: 'closeModal',
                  name: 'closeModal',
                  type: 'closeModal',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_31561')}
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
                id: 'Button_080331',
                uid: 'Button_080331',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 16px' }}
              onClick={(e: any) => {
                const eventDatasetLoading189: any = [
                  {
                    type: 'setLoading',
                    dataId: 169986544332856930,
                    options: {
                      compId: 'Button_080331',
                      compLib: 'comm',
                      pageJsonId: '0606944',
                      compName: 'Button',
                      id: '515198',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading189.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetLoading189, { e }, 'setLoading', {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                });
                const eventDatavalidateCurrentForm75: any = [
                  {
                    type: 'validateCurrentForm',
                    dataId: 168811818686238940,
                    options: {
                      compId: 'Form_116141',
                      compLib: 'comm',
                      pageJsonId: '0606944',
                      compName: 'Form',
                      id: '973872',
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 169986585237061300,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '909963',
                          pageJsonId: '0606944',
                          code: 'function main(data,state,success,fail){var addressList=[];var form=Form_116141;addressList.push({"seqNumber":"1","address":form.installAddr});success(addressList)};',
                        },
                        line_number: 3,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 169986595269106940,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '4818419',
                              pageJsonId: '0606944',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'querySameAddressMultiLineData',
                              _apiCode: 'querySameAddressMultiLineData',
                              _source: 'rhin',
                              _sourceName: '专线同址多线场景数据统计查询-hyj',
                              _serviceId: '1041274594427719680',
                              _serviceTitle:
                                '专线同址多线场景数据统计查询-hyj: querySameAddressMultiLineData',
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
                                      dataKey: '4818419_root.header',
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
                                      dataKey: '4818419_root.path',
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
                                      dataKey: '4818419_root.query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'instNbr',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'root.body.instNbr',
                                          compType: 'Input',
                                          name: 'instNbr',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-0',
                                          id: 'root.body.instNbr',
                                          dataKey: '4818419_root.body.instNbr',
                                          value: {
                                            type: ['customize'],
                                            code: '$state.instNbr$',
                                          },
                                        },
                                        {
                                          code: 'productId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'root.body.productId',
                                          compType: 'Input',
                                          name: 'productId',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-1',
                                          id: 'root.body.productId',
                                          dataKey:
                                            '4818419_root.body.productId',
                                          value: {
                                            type: ['customize'],
                                            code: '3367',
                                          },
                                        },
                                        {
                                          code: 'groupId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'root.body.groupId',
                                          compType: 'Input',
                                          name: 'groupId',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-2',
                                          id: 'root.body.groupId',
                                          dataKey: '4818419_root.body.groupId',
                                          value: {
                                            type: ['customize'],
                                            code: '$state.groupId$',
                                          },
                                        },
                                        {
                                          code: 'sameAddressMultiLineInfoList',
                                          attrType: 'objectArray',
                                          children: [
                                            {
                                              code: 'seqNumber',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'root.body.sameAddressMultiLineInfoList.seqNumber',
                                              compType: 'Input',
                                              name: 'seqNumber',
                                              parents: [
                                                'root',
                                                'body',
                                                'sameAddressMultiLineInfoList',
                                              ],
                                              parentType: 'objectArray',
                                              parentKey: '0-3-3',
                                              key: '0-3-3-0',
                                              parentCode:
                                                'sameAddressMultiLineInfoList',
                                              id: 'root.body.sameAddressMultiLineInfoList.seqNumber',
                                              dataKey:
                                                '4818419_root.body.sameAddressMultiLineInfoList.seqNumber',
                                            },
                                            {
                                              code: 'address',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'root.body.sameAddressMultiLineInfoList.address',
                                              compType: 'Input',
                                              name: 'address',
                                              parents: [
                                                'root',
                                                'body',
                                                'sameAddressMultiLineInfoList',
                                              ],
                                              parentType: 'objectArray',
                                              parentKey: '0-3-3',
                                              key: '0-3-3-1',
                                              parentCode:
                                                'sameAddressMultiLineInfoList',
                                              id: 'root.body.sameAddressMultiLineInfoList.address',
                                              dataKey:
                                                '4818419_root.body.sameAddressMultiLineInfoList.address',
                                            },
                                          ],
                                          _id: 'root.body.sameAddressMultiLineInfoList',
                                          compType: 'Input',
                                          name: 'sameAddressMultiLineInfoList',
                                          parents: ['root', 'body'],
                                          parentType: 'object',
                                          parentKey: '0-3',
                                          key: '0-3-3',
                                          id: 'root.body.sameAddressMultiLineInfoList',
                                          dataKey:
                                            '4818419_root.body.sameAddressMultiLineInfoList',
                                          value: {
                                            type: ['context', '$data_909963$'],
                                            code: '',
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
                                      dataKey: '4818419_root.body',
                                    },
                                  ],
                                  _id: 'root',
                                  compType: 'Input',
                                  isRoot: true,
                                  parents: [],
                                  key: '0',
                                  id: 'root',
                                  dataKey: '4818419_root',
                                },
                              ],
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'customActionCode',
                                dataId: 169986630632565440,
                                options: {
                                  compId: 'customActionCode',
                                  compName: 'page',
                                  id: '03129',
                                  pageJsonId: '0606944',
                                  code: 'function main(data,state,success,fail){var _reply_;var findItem;var address=Form_116141.installAddr;var list=((_reply_=reply_4818419)===null||_reply_===void 0?void 0:_reply_.resultData.sameAddressMultiLineInfoList)||[];if(list.length>0){var findList=list.filter(function(item){return item.address==address});if(findList.length>0){findItem=findList[0]}}if(findItem){var totalBandWidth=findItem.totalBandWidth;if(totalBandWidth.indexOf("M")!=-1){totalBandWidth=parseFloat(totalBandWidth)}else if(totalBandWidth.indexOf("G")!=-1){totalBandWidth=parseFloat(totalBandWidth)*1024}findItem.totalBandWidth=totalBandWidth}success(findItem)};',
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '337253',
                                        options: {
                                          context: '$data_03129$',
                                          operate: 'notEmpty',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 169986663002407550,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 169986666853566400,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 169986667286999260,
                                            children: [],
                                            todoOptions: [
                                              'msgType',
                                              'value',
                                              'duration',
                                            ],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '2620914',
                                              pageJsonId: '0606944',
                                              type: 'error',
                                              value:
                                                '查询存量信息失败！请联系运维人员',
                                            },
                                            actionObjId: 'showMessage',
                                            actionObjName: 'system',
                                            value: 'showMessage',
                                            tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                                            line_number: 11,
                                          },
                                        ],
                                        condition: [],
                                        value: 'elseIf',
                                        callback: [
                                          {
                                            type: 'showMessage',
                                            dataId: 169986667286999260,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '2620914',
                                              pageJsonId: '0606944',
                                              type: 'error',
                                              value:
                                                '查询存量信息失败！请联系运维人员',
                                            },
                                            line_number: 11,
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'setValue',
                                        dataId: 169986665805719800,
                                        options: {
                                          compId: [
                                            'Input_821119',
                                            'Input_935244',
                                          ],
                                          compLib: 'comm',
                                          pageJsonId: '0606944',
                                          compName: 'Input',
                                          id: '003788',
                                          valueList: {
                                            Input_821119:
                                              '$data_03129.totalLineNum$',
                                            Input_935244:
                                              '$data_03129.totalBandWidth$',
                                          },
                                          compid: [
                                            'Input_821119',
                                            'Input_935244',
                                          ],
                                        },
                                        line_number: 7,
                                        callback1: [],
                                      },
                                      {
                                        type: 'sysSetVisible',
                                        dataId: 169986745073372030,
                                        options: {
                                          compId: ['View_1245294'],
                                          compName: 'page',
                                          id: '926702',
                                          pageJsonId: '0606944',
                                          visible: '',
                                          compid: ['View_1245294'],
                                        },
                                        line_number: 8,
                                      },
                                      {
                                        type: 'sysSetVisible',
                                        dataId: 169986745706736000,
                                        options: {
                                          compId: ['Form_767499', 'View_80102'],
                                          compName: 'page',
                                          id: '5935238',
                                          pageJsonId: '0606944',
                                          visible: 'true',
                                          compid: ['Form_767499', 'View_80102'],
                                        },
                                        line_number: 9,
                                      },
                                      {
                                        type: 'setDisable',
                                        dataId: 169986746853588800,
                                        options: {
                                          compId: 'Form_116141',
                                          compLib: 'comm',
                                          pageJsonId: '0606944',
                                          compName: 'Form',
                                          id: '4140214',
                                          disabled: 'true',
                                        },
                                        line_number: 10,
                                      },
                                    ],
                                  },
                                  {
                                    type: 'setLoading',
                                    dataId: 169986750460733100,
                                    options: {
                                      compId: 'Button_080331',
                                      compLib: 'comm',
                                      pageJsonId: '0606944',
                                      compName: 'Button',
                                      id: '3114284',
                                      loading: false,
                                    },
                                    line_number: 12,
                                  },
                                ],
                                callback2: [
                                  {
                                    type: 'setLoading',
                                    dataId: 169986750742603500,
                                    options: {
                                      compId: 'Button_080331',
                                      compLib: 'comm',
                                      pageJsonId: '0606944',
                                      compName: 'Button',
                                      id: '424818',
                                      loading: false,
                                    },
                                    line_number: 13,
                                  },
                                ],
                              },
                              {
                                type: 'setLoading',
                                dataId: 169986749512132030,
                                options: {
                                  compId: 'Button_080331',
                                  compLib: 'comm',
                                  pageJsonId: '0606944',
                                  compName: 'Button',
                                  id: '150089',
                                  loading: false,
                                },
                                line_number: 14,
                              },
                            ],
                            callback2: [
                              {
                                type: 'setLoading',
                                dataId: 169986749910829630,
                                options: {
                                  compId: 'Button_080331',
                                  compLib: 'comm',
                                  pageJsonId: '0606944',
                                  compName: 'Button',
                                  id: '177817',
                                  loading: false,
                                },
                                line_number: 15,
                              },
                            ],
                          },
                          {
                            type: 'setLoading',
                            dataId: 169986749261713120,
                            options: {
                              compId: 'Button_080331',
                              compLib: 'comm',
                              pageJsonId: '0606944',
                              compName: 'Button',
                              id: '711683',
                              loading: false,
                            },
                            line_number: 16,
                          },
                        ],
                        callback2: [
                          {
                            type: 'setLoading',
                            dataId: 169986749084587100,
                            options: {
                              compId: 'Button_080331',
                              compLib: 'comm',
                              pageJsonId: '0606944',
                              compName: 'Button',
                              id: '37263754',
                              loading: false,
                            },
                            line_number: 17,
                          },
                        ],
                      },
                    ],
                    callback2: [
                      {
                        type: 'setLoading',
                        dataId: 169986545272631170,
                        options: {
                          compId: 'Button_080331',
                          compLib: 'comm',
                          pageJsonId: '0606944',
                          compName: 'Button',
                          id: '84792934',
                          loading: false,
                        },
                        line_number: 18,
                      },
                    ],
                  },
                ];
                eventDatavalidateCurrentForm75.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatavalidateCurrentForm75,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_080331')}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_80102',
              uid: 'View_80102',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{
              textAlign: 'right',
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_80102')}
            {...injectData}
          >
            <Button
              name={'上一步'}
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
                id: 'Button_582854',
                uid: 'Button_582854',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const forms117 = getFormByCompId('Form_767499', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms117) ? forms117 : [forms117]).forEach(
                  (form) => form?.resetFields(),
                );
                const eventDatasysSetVisible4: any = [
                  {
                    type: 'sysSetVisible',
                    dataId: 168835150197408900,
                    options: {
                      compId: ['Form_767499', 'View_80102'],
                      compName: 'page',
                      id: '70281',
                      pageJsonId: '0606944',
                      visible: '',
                      compid: ['Form_767499', 'View_80102'],
                    },
                    line_number: 2,
                  },
                ];
                eventDatasysSetVisible4.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasysSetVisible4, { e }, 'sysSetVisible', {
                  id: 'sysSetVisible',
                  name: 'sysSetVisible',
                  type: 'sysSetVisible',
                  platform: 'pc',
                });
                const eventDatasysSetVisible5: any = [
                  {
                    type: 'sysSetVisible',
                    dataId: 168835151904360800,
                    options: {
                      compId: ['View_1245294'],
                      compName: 'page',
                      id: '632291',
                      pageJsonId: '0606944',
                      visible: 'true',
                      compid: ['View_1245294'],
                    },
                    line_number: 3,
                  },
                ];
                eventDatasysSetVisible5.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasysSetVisible5, { e }, 'sysSetVisible', {
                  id: 'sysSetVisible',
                  name: 'sysSetVisible',
                  type: 'sysSetVisible',
                  platform: 'pc',
                });
                const eventDatasetDisable111: any = [
                  {
                    type: 'setDisable',
                    dataId: 168835173862288420,
                    options: {
                      compId: 'Form_116141',
                      compLib: 'comm',
                      pageJsonId: '0606944',
                      compName: 'Form',
                      id: '908115',
                      disabled: '',
                    },
                    line_number: 4,
                  },
                ];
                eventDatasetDisable111.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable111, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable112: any = [
                  {
                    type: 'setDisable',
                    dataId: 168837423287556930,
                    options: {
                      compId: 'Input_627735',
                      compLib: 'comm',
                      pageJsonId: '0606944',
                      compName: 'Input',
                      id: '067193',
                      disabled: 'true',
                    },
                    line_number: 5,
                  },
                ];
                eventDatasetDisable112.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable112, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_582854')}
              {...injectData}
            />
            <Button
              name={'关闭'}
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
                id: 'Button_018793',
                uid: 'Button_018793',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 16px 0px 16px' }}
              onClick={(e: any) => {
                const eventDatacloseModal132: any = [
                  {
                    type: 'closeModal',
                    dataId: 168835166863625060,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '6067716',
                    },
                    line_number: 1,
                  },
                ];
                eventDatacloseModal132.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacloseModal132, { e }, 'closeModal', {
                  id: 'closeModal',
                  name: 'closeModal',
                  type: 'closeModal',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_018793')}
              {...injectData}
            />
            <Button
              name={'保存'}
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
                id: 'Button_660622',
                uid: 'Button_660622',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatavalidateCurrentForm76: any = [
                  {
                    type: 'validateCurrentForm',
                    dataId: 168835169396095500,
                    options: {
                      compId: 'Form_767499',
                      compLib: 'comm',
                      pageJsonId: '0606944',
                      compName: 'Form',
                      id: '363493',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'okCallbackData',
                        dataId: 168835179589443200,
                        options: {
                          compId: 'okCallbackData',
                          compName: 'page',
                          id: '443702',
                          pageJsonId: '0606944',
                          params: '$data.factorForm$',
                        },
                        line_number: 2,
                      },
                      {
                        type: 'closeModal',
                        dataId: 168835180583956800,
                        options: {
                          compId: 'page',
                          compName: 'page',
                          id: '845018895',
                        },
                        line_number: 3,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatavalidateCurrentForm76.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatavalidateCurrentForm76,
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
              ref={(r: any) => refs.setComponentRef(r, 'Button_660622')}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(BusiFeeAddAudit$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    formData: '',
    catalogCode: '',
    groupId: '',
    instNbr: '',
  },
});
