// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '1001682144719441920';
const UserObj$$Modal: React.FC<PageProps> = ({
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
  const initInput = (options_140988: any) => {
    const eventDataapiRequest60: any = [
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
    eventDataapiRequest60.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest60, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest61: any = [
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
    eventDataapiRequest61.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest61, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest62: any = [
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
    eventDataapiRequest62.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest62, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest63: any = [
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
    eventDataapiRequest63.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest63, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest64: any = [
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
    eventDataapiRequest64.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest64, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest65: any = [
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
    eventDataapiRequest65.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest65, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest66: any = [
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
    eventDataapiRequest66.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest66, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest67: any = [
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
    eventDataapiRequest67.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest67, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest68: any = [
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
    eventDataapiRequest68.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest68, { options_140988 }, 'apiRequest', {
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
    const eventDatavalidateCurrentForm52: any = [
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
            type: 'okCallbackData',
            dataId: 167696170973799650,
            options: {
              compId: 'okCallbackData',
              compName: 'page',
              id: '895412',
              pageJsonId: 31,
            },
            line_number: 2,
          },
          {
            type: 'closeModal',
            dataId: 167696170239489100,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '7049215',
              pageJsonId: 31,
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm52.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm52, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal63: any = [
      {
        type: 'closeModal',
        dataId: '545098_1',
        options: { compId: 'page', compName: 'page', id: '9354904' },
        line_number: 1,
      },
    ];
    eventDatacloseModal63.params = [] || [];
    CMDGenerator(eventDatacloseModal63, {}, 'closeModal', {
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
    const forms16 = getFormByCompId('Form_31_1121', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms16) ? forms16 : [forms16]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDataifelse235: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '2068937',
            options: { context: '$state.redObj$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167703642369938900,
        elseIfs: [],
        line_number: 2,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169042668536112420,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '751302',
              pageJsonId: 31,
              dataSourceId: 169042593512499500,
              dataSourceName: 'userObj',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '294009',
                  code: 'userName',
                  name: '用户名',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['customize'],
                    code: '$state.redObj.userName$',
                  },
                },
                {
                  attrId: '663495',
                  code: 'phone',
                  name: '电话',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: { type: ['customize'], code: '$state.redObj.phone$' },
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
          {
            type: 'ifelse',
            condition: [
              {
                condId: '267432',
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
            dataId: 167703676784154980,
            elseIfs: [],
            line_number: 4,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 167703676784134370,
                options: {
                  compId: ['Button_450028'],
                  compName: 'page',
                  id: '698804',
                  pageJsonId: 31,
                  visible: '',
                  compid: ['Button_450028'],
                },
                line_number: 5,
              },
              {
                type: 'setDisable',
                dataId: 167703676784151230,
                options: {
                  compId: [
                    'Input_isDelay_156479',
                    'Input_creditApplyValid_6019926',
                    'Input_noDelayReason_049466',
                    'Form_31_1121',
                  ],
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Select',
                  id: '087695',
                  disabled: 'toggle',
                  compid: [
                    'Input_isDelay_156479',
                    'Input_creditApplyValid_6019926',
                    'Input_noDelayReason_049466',
                    'Form_31_1121',
                  ],
                },
                line_number: 6,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse235.params = [] || [];
    CMDGenerator(eventDataifelse235, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_31_1')}
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
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_31_11')}
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
            ref={(r: any) => refs.setComponentRef(r, 'View_31_112')}
            {...injectData}
          >
            <Form
              name={'表单'}
              header={'标题'}
              colSpan={24}
              colSpace={16}
              rowSpace={16}
              labelCol={'6'}
              wrapperCol={'14'}
              layout={'horizontal'}
              genRuleType={'key'}
              formType={'normal'}
              relationDataSource={data?.userObj}
              busiObjectId={''}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={(changedFieldName: any, changedValue: any) => {
                const eventDatasetDataSource194: any = [
                  {
                    type: 'setDataSource',
                    dataId: 169042594586545630,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '2321285',
                      pageJsonId: 31,
                      dataSourceId: 169042593512499500,
                      dataSourceName: 'userObj',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '294009',
                          code: 'userName',
                          name: '用户名',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'userName',
                          },
                        },
                        {
                          attrId: '663495',
                          code: 'phone',
                          name: '电话',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'phone',
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
                eventDatasetDataSource194.params =
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
                  eventDatasetDataSource194,
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
              ref={(r: any) => refs.setComponentRef(r, 'Form_31_1121')}
              {...injectData}
            >
              <Input
                name={'用户名'}
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
                fieldName={'userName'}
                value={data?.userObj?.userName}
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
                  id: 'Input_userName_075895',
                  uid: 'Input_userName_075895',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_userName_075895')
                }
                {...injectData}
              />
              <Input
                name={'电话'}
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
                fieldName={'phone'}
                value={data?.userObj?.phone}
                formItemIndex={1}
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
                  id: 'Input_phone_937483',
                  uid: 'Input_phone_937483',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_phone_937483')}
                {...injectData}
              />
            </Form>
          </View>
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_904128',
            uid: 'View_904128',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 16px 0px',
            width: '100%',
            textAlign: 'center',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_904128')}
          {...injectData}
        >
          <Button
            name={'确认'}
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
              id: 'Button_450028',
              uid: 'Button_450028',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatavalidateCurrentForm78: any = [
                {
                  type: 'validateCurrentForm',
                  dataId: 16770342229141064,
                  options: {
                    compId: 'Form_31_1121',
                    compLib: 'comm',
                    pageJsonId: 31,
                    compName: 'Form',
                    id: '311342',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 167703556575350430,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '997611',
                        pageJsonId: 31,
                        code: 'function main(data,state,success,fail){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;if(!data.userObj.rowId){data.userObj.rowId=rowId}success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'okCallbackData',
                          dataId: 167703561741660380,
                          options: {
                            compId: 'okCallbackData',
                            compName: 'page',
                            id: '424158',
                            pageJsonId: 31,
                            params: '$data.userObj$',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'closeModal',
                          dataId: 167703562037775460,
                          options: {
                            compId: 'closeModal',
                            compName: 'page',
                            id: '184798',
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
              eventDatavalidateCurrentForm78.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatavalidateCurrentForm78,
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
            ref={(r: any) => refs.setComponentRef(r, 'Button_450028')}
            {...injectData}
          />
          <Button
            name={'取消'}
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
              id: 'Button_833933',
              uid: 'Button_833933',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 10px' }}
            onClick={(e: any) => {
              const eventDatacloseModal133: any = [
                {
                  type: 'closeModal',
                  dataId: 167703420985105000,
                  options: {
                    compId: 'closeModal',
                    compName: 'page',
                    id: '2659463',
                    pageJsonId: 31,
                  },
                  line_number: 1,
                },
              ];
              eventDatacloseModal133.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatacloseModal133, { e }, 'closeModal', {
                id: 'closeModal',
                name: 'closeModal',
                type: 'closeModal',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_833933')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(UserObj$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', catalogCode: '', redObj: '' },
});
