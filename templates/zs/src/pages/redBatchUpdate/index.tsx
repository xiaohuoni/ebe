// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Input, Select, TimePicker, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const RedBatchUpdate$$Modal: React.FC<PageProps> = ({
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
  const initInput = (options_140988: any) => {
    const eventDataapiRequest40: any = [
      {
        type: 'apiRequest',
        dataId: 166355325609160480,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '840735',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '840735_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '840735_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '840735_query',
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
                  dataKey: '840735_body.catalogCode',
                  value: {
                    type: ['context', '$options_140988$'],
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '840735_body.attrCode',
                  value: { type: ['customize'], code: 'actionType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '840735_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355332230815100,
            options: {
              compId: 'Select_actionType_2765516',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '9603172',
              data: '$reply_840735?.resultData$',
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
    eventDataapiRequest40.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest40, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest41: any = [
      {
        type: 'apiRequest',
        dataId: 166355341704333920,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '737998',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '737998_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '737998_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '737998_query',
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
                  dataKey: '737998_body.catalogCode',
                  value: {
                    type: ['context', '$options_140988$'],
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '737998_body.attrCode',
                  value: { type: ['customize'], code: 'sceneType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '737998_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355345852965300,
            options: {
              compId: 'Select_sceneType_065939',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '7825398',
              data: '$reply_737998?.resultData$',
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
    eventDataapiRequest41.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest41, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest42: any = [
      {
        type: 'apiRequest',
        dataId: 166355341789025760,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '2707735',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '2707735_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '2707735_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '2707735_query',
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
                  dataKey: '2707735_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '2707735_body.attrCode',
                  value: { type: ['customize'], code: 'coreFlag' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '2707735_body',
              value: { type: [], code: '' },
            },
          ],
        },
        line_number: 5,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355350389037120,
            shielding: true,
            options: {
              compId: 'Select_coreFlag_2497997',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '85802546',
              labelKey: 'attrValueName',
              data: '$reply_2707735?.resultData$',
              valueKey: 'attrValue',
            },
            line_number: 6,
            callback1: [
              {
                type: 'setValue',
                dataId: 166393291626297300,
                shielding: true,
                options: {
                  compId: 'Select_coreFlag_2497997',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Select',
                  id: '263121',
                  value: '$state.isCoreFlag$',
                  valueList: { Select_coreFlag_2497997: '$state.isCoreFlag$' },
                },
                line_number: 7,
                callback1: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest42.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest42, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest43: any = [
      {
        type: 'apiRequest',
        dataId: 166355341984370000,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '121385',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '121385_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '121385_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '121385_query',
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
                  dataKey: '121385_body.catalogCode',
                  value: {
                    type: ['context', '$options_140988$'],
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '121385_body.attrCode',
                  value: { type: ['customize'], code: 'msisdnomeCity' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '121385_body',
            },
          ],
        },
        line_number: 8,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355358840240540,
            options: {
              compId: 'Select_msisdnomeCity_2412424',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '819248',
              data: '$reply_121385?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 9,
            callback1: [],
          },
          {
            type: 'reloadSelectData',
            dataId: 166355359115568260,
            options: {
              compId: 'Select_homeCity_814541',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '7772813',
              data: '$reply_121385?.resultData$',
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
    eventDataapiRequest43.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest43, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest44: any = [
      {
        type: 'apiRequest',
        dataId: 166355342190754560,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '42517',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '42517_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '42517_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '42517_query',
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
                  dataKey: '42517_body.catalogCode',
                  value: {
                    type: ['context', '$options_140988$'],
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '42517_body.attrCode',
                  value: { type: ['customize'], code: 'objType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '42517_body',
              value: { type: [], code: '' },
            },
          ],
        },
        line_number: 11,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355365329703840,
            options: {
              compId: 'Select_objType_6992002',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '443155',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_42517?.resultData$',
            },
            line_number: 12,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest44.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest44, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest45: any = [
      {
        type: 'apiRequest',
        dataId: 166355342417865100,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '733938',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '733938_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '733938_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '733938_query',
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
                  dataKey: '733938_body.catalogCode',
                  value: {
                    type: ['context', '$options_140988$'],
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '733938_body.attrCode',
                  value: { type: ['customize'], code: 'officialLevel' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '733938_body',
            },
          ],
        },
        line_number: 13,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355385292539900,
            options: {
              compId: 'Input_officialLevel_559986',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '9602945',
              valueKey: 'attrValue',
              labelKey: 'attrValueName',
              data: '$reply_733938?.resultData$',
            },
            line_number: 14,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest45.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest45, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest46: any = [
      {
        type: 'apiRequest',
        dataId: 166355342569109380,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '5002813',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '5002813_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '5002813_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '5002813_query',
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
                  dataKey: '5002813_body.catalogCode',
                  value: {
                    type: ['context', '$options_140988$'],
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '5002813_body.attrCode',
                  value: { type: ['customize'], code: 'memberType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '5002813_body',
            },
          ],
        },
        line_number: 15,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355388351517920,
            options: {
              compId: 'Input_memberType_8293423',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '0343738',
              data: '$reply_5002813?.resultData$',
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
    eventDataapiRequest46.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest46, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest47: any = [
      {
        type: 'apiRequest',
        dataId: 166355342716322050,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '043696',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '043696_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '043696_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '043696_query',
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
                  dataKey: '043696_body.catalogCode',
                  value: {
                    type: ['context', '$options_140988$'],
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '043696_body.attrCode',
                  value: { type: ['customize'], code: 'keyType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '043696_body',
            },
          ],
        },
        line_number: 17,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355397435597900,
            options: {
              compId: 'Input_keyType_654238',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '5644365',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_043696?.resultData$',
            },
            line_number: 18,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest47.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest47, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest48: any = [
      {
        type: 'apiRequest',
        dataId: 166355342868217920,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '684473',
          pageJsonId: 31,
          sync: false,
          actionTitle: '',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '684473_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '684473_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '684473_query',
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
                  dataKey: '684473_body.catalogCode',
                  value: {
                    type: ['context', '$options_140988$'],
                    code: 'catalogCode',
                  },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '684473_body.attrCode',
                  value: { type: ['customize'], code: 'gender' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '684473_body',
            },
          ],
        },
        line_number: 19,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166355402577990560,
            options: {
              compId: 'Input_gender_005851',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '169538',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_684473?.resultData$',
            },
            line_number: 20,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest48.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest48, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    initInput,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm34: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166350019406580450,
        options: {
          compId: 'Form_31_1121',
          compLib: 'comm',
          pageJsonId: 31,
          compName: 'Form',
          id: '1028315',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167713647484097800,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '073748',
              pageJsonId: 31,
              dataSourceId: 167695896364423680,
              dataSourceName: 'redObj',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '608373',
                  code: 'isDelay',
                  name: '是否延期',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_31_1121', 'getFieldsValue'],
                    code: 'isDelay',
                  },
                },
                {
                  attrId: '5428216',
                  code: 'creditApplyValid',
                  name: '本次信用度申请有效期',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_31_1121', 'getFieldsValue'],
                    code: 'creditApplyValid',
                  },
                },
                {
                  attrId: '375551',
                  code: 'noDelayReason',
                  name: '不延期原因',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['form', 'Form_31_1121', 'getFieldsValue'],
                    code: 'noDelayReason',
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
                type: 'okCallbackData',
                dataId: 167713649102831940,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '118603',
                  pageJsonId: 31,
                  params: '$data.redObj$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 167713649377758660,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '2445393',
                  pageJsonId: 31,
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
    eventDatavalidateCurrentForm34.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm34, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal29: any = [
      {
        type: 'closeModal',
        dataId: '545098_1',
        options: { compId: 'page', compName: 'page', id: '9354904' },
        line_number: 1,
      },
    ];
    eventDatacloseModal29.params = [] || [];
    CMDGenerator(eventDatacloseModal29, {}, 'closeModal', {
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
    const forms15 = getFormByCompId('Form_31_1121', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms15) ? forms15 : [forms15]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDataapiRequest269: any = [
      {
        type: 'apiRequest',
        dataId: 167695935757991260,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '0748175',
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
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              id: 'header',
              dataKey: '0748175_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '0748175_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '0748175_query',
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
                  dataKey: '0748175_body.catalogCode',
                  value: { type: ['context', '$state.catalogCode$'], code: '' },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '0748175_body.attrCode',
                  value: { type: ['customize'], code: 'isDelay' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '0748175_body',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167695938780233570,
            options: {
              compId: 'Input_isDelay_474815',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '039172',
              data: '$reply_0748175?.resultData$',
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
    eventDataapiRequest269.params = [] || [];
    CMDGenerator(eventDataapiRequest269, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => (refs['View_31_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => (refs['VerticalView_31_11'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
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
              margin: '0px 0px 0px 0px',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => (refs['View_31_112'] = r)}
            {...injectData}
          >
            <Form
              name={'表单'}
              header={'标题'}
              colSpan={12}
              colSpace={16}
              rowSpace={16}
              labelCol={8}
              wrapperCol={16}
              layout={'horizontal'}
              genRuleType={'key'}
              formType={'normal'}
              relationDataSource={data?.redObj}
              busiObjectId={''}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={(changedFieldName: any, changedValue: any) => {
                const eventDatasetDataSource127: any = [
                  {
                    type: 'setDataSource',
                    dataId: 167695899383282240,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '39121372',
                      pageJsonId: 31,
                      dataSourceId: 167695896364423680,
                      dataSourceName: 'redObj',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '608373',
                          code: 'isDelay',
                          name: '是否延期',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'isDelay',
                          },
                        },
                        {
                          attrId: '5428216',
                          code: 'creditApplyValid',
                          name: '本次信用度申请有效期',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'creditApplyValid',
                          },
                        },
                        {
                          attrId: '375551',
                          code: 'noDelayReason',
                          name: '不延期原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'noDelayReason',
                          },
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource127.params =
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
                  eventDatasetDataSource127,
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
              ref={(r: any) => (refs['Form_31_1121'] = r)}
              {...injectData}
            >
              <Select
                name={'是否延期'}
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
                fieldName={'isDelay'}
                value={data?.redObj?.isDelay}
                formItemIndex={0}
                $$componentItem={{
                  id: 'Input_isDelay_474815',
                  uid: 'Input_isDelay_474815',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  // console 167695911839493020
                  console.log(e);
                  const eventDataifelse450: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '496068',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$e$',
                            operate: '==',
                            manualValue: '1',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167695912440095140,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167695917794856030,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167695922357083260,
                              children: [],
                              todoOptions: ['required', 'selectComp'],
                              options: {
                                compId: ['Input_noDelayReason_755391'],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '358819',
                                required: 'true',
                                compid: ['Input_noDelayReason_755391'],
                              },
                              actionObjId: 'Input_noDelayReason_755391',
                              actionObjName: 'Input',
                              value: 'setRequired',
                              compLib: 'comm',
                              line_number: 11,
                            },
                            {
                              dataName: 'action',
                              dataId: 167713637484018750,
                              children: [],
                              todoOptions: ['required', 'selectComp'],
                              options: {
                                compId: [
                                  'Input_creditApplyValid_38563',
                                  'TimePicker_5412395',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '6605373',
                                required: '',
                                compid: [
                                  'Input_creditApplyValid_38563',
                                  'TimePicker_5412395',
                                ],
                              },
                              actionObjId: 'Input_noDelayReason_755391',
                              actionObjName: 'Input',
                              value: 'setRequired',
                              compLib: 'comm',
                              line_number: 12,
                            },
                            {
                              dataName: 'action',
                              dataId: 167695923184178240,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: [
                                  'Input_creditApplyValid_38563',
                                  'TimePicker_5412395',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'DatePicker',
                                id: '633955',
                                disabled: 'true',
                                compid: [
                                  'Input_creditApplyValid_38563',
                                  'TimePicker_5412395',
                                ],
                              },
                              actionObjId: 'Input_creditApplyValid_38563',
                              actionObjName: 'DatePicker',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 13,
                            },
                            {
                              dataName: 'action',
                              dataId: 167695923888962600,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: 'Input_noDelayReason_755391',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '658021',
                                disabled: '',
                              },
                              actionObjId: 'Input_noDelayReason_755391',
                              actionObjName: 'Input',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 14,
                            },
                            {
                              dataName: 'action',
                              dataId: 170314704746034140,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'TimePicker_5412395',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'TimePicker',
                                id: '6356006',
                              },
                              actionObjId: 'TimePicker_5412395',
                              actionObjName: 'TimePicker',
                              value: 'clearValue',
                              compLib: 'comm',
                              line_number: 15,
                            },
                          ],
                          condition: [],
                          callback: [
                            {
                              type: 'setRequired',
                              dataId: 167695922357083260,
                              options: {
                                compId: ['Input_noDelayReason_755391'],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '358819',
                                required: 'true',
                                compid: ['Input_noDelayReason_755391'],
                              },
                              line_number: 11,
                            },
                            {
                              type: 'setRequired',
                              dataId: 167713637484018750,
                              options: {
                                compId: [
                                  'Input_creditApplyValid_38563',
                                  'TimePicker_5412395',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '6605373',
                                required: '',
                                compid: [
                                  'Input_creditApplyValid_38563',
                                  'TimePicker_5412395',
                                ],
                              },
                              line_number: 12,
                            },
                            {
                              type: 'setDisable',
                              dataId: 167695923184178240,
                              options: {
                                compId: [
                                  'Input_creditApplyValid_38563',
                                  'TimePicker_5412395',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'DatePicker',
                                id: '633955',
                                disabled: 'true',
                                compid: [
                                  'Input_creditApplyValid_38563',
                                  'TimePicker_5412395',
                                ],
                              },
                              line_number: 13,
                            },
                            {
                              type: 'setDisable',
                              dataId: 167695923888962600,
                              options: {
                                compId: 'Input_noDelayReason_755391',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '658021',
                                disabled: '',
                              },
                              line_number: 14,
                            },
                            {
                              type: 'clearValue',
                              dataId: 170314704746034140,
                              options: {
                                compId: 'TimePicker_5412395',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'TimePicker',
                                id: '6356006',
                              },
                              line_number: 15,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setRequired',
                          dataId: 167695915548125820,
                          options: {
                            compId: [
                              'Input_creditApplyValid_38563',
                              'TimePicker_5412395',
                            ],
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'DatePicker',
                            id: '88733',
                            required: 'true',
                            compid: [
                              'Input_creditApplyValid_38563',
                              'TimePicker_5412395',
                            ],
                          },
                          line_number: 3,
                        },
                        {
                          type: 'setRequired',
                          dataId: 167713636161888450,
                          options: {
                            compId: ['Input_noDelayReason_755391'],
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'DatePicker',
                            id: '8562574',
                            required: '',
                            compid: ['Input_noDelayReason_755391'],
                          },
                          line_number: 4,
                        },
                        {
                          type: 'setDisable',
                          dataId: 167695917160289150,
                          options: {
                            compId: 'Input_noDelayReason_755391',
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'Input',
                            id: '783657',
                            disabled: 'true',
                          },
                          line_number: 5,
                        },
                        {
                          type: 'setDisable',
                          dataId: 167695924616959000,
                          options: {
                            compId: [
                              'Input_creditApplyValid_38563',
                              'TimePicker_5412395',
                            ],
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'DatePicker',
                            id: '4156967',
                            disabled: '',
                            compid: [
                              'Input_creditApplyValid_38563',
                              'TimePicker_5412395',
                            ],
                          },
                          line_number: 6,
                        },
                        {
                          type: 'clearValue',
                          dataId: 167695928185623740,
                          options: {
                            compId: 'Input_noDelayReason_755391',
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'Input',
                            id: '6719095',
                          },
                          line_number: 7,
                        },
                        {
                          type: 'customActionCode',
                          dataId: 167714496470543100,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '3878318',
                            pageJsonId: 31,
                            code: 'function main(data,state,success,fail){var date=new Date;var year=date.getFullYear()+1;var month=date.getMonth()+1;var date=date.getDate();var nowMonth=month<10?"0"+month:month;success(year+"-"+nowMonth+"-"+date)};',
                          },
                          line_number: 8,
                          callback1: [
                            {
                              type: 'setValue',
                              dataId: 167714497575431870,
                              options: {
                                compId: 'Input_creditApplyValid_38563',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'DatePicker',
                                id: '3982648',
                                valueList: {
                                  Input_creditApplyValid_38563:
                                    '$data_3878318$',
                                },
                              },
                              line_number: 9,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                        {
                          type: 'validateMsg',
                          dataId: 169094599512582140,
                          options: {
                            compId: 'Input_noDelayReason_755391',
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'Input',
                            id: '346456',
                            validateStatus: '',
                          },
                          line_number: 10,
                        },
                      ],
                    },
                  ];
                  eventDataifelse450.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse450, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Input_isDelay_474815'] = r)}
                {...injectData}
              />
              <TimePicker
                name={'时间选择'}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={'no'}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                customTip={''}
                formItemIndex={1}
                fieldName={'creditApplyValid'}
                value={data?.redObj?.creditApplyValid}
                $$componentItem={{
                  id: 'TimePicker_5412395',
                  uid: 'TimePicker_5412395',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                defaultValue={undefined}
                isFormRootChild={true}
                ref={(r: any) => (refs['TimePicker_5412395'] = r)}
                {...injectData}
              />
              <Input
                name={'不延期原因'}
                size={'default'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                fieldName={'noDelayReason'}
                value={data?.redObj?.noDelayReason}
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
                  id: 'Input_noDelayReason_755391',
                  uid: 'Input_noDelayReason_755391',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_noDelayReason_755391'] = r)}
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(RedBatchUpdate$$Modal, {
  pageId: '945196540808511488',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', catalogCode: '' },
});
