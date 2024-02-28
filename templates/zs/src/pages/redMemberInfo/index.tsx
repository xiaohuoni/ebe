// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select, Button } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '945510835929104384';
const RedMemberInfo$$Modal: React.FC<PageProps> = ({
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
    const eventDataapiRequest69: any = [
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
    eventDataapiRequest69.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest69, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest70: any = [
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
    eventDataapiRequest70.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest70, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest71: any = [
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
    eventDataapiRequest71.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest71, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest72: any = [
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
    eventDataapiRequest72.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest72, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest73: any = [
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
    eventDataapiRequest73.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest73, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest74: any = [
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
    eventDataapiRequest74.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest74, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest75: any = [
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
    eventDataapiRequest75.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest75, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest76: any = [
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
    eventDataapiRequest76.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest76, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest77: any = [
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
    eventDataapiRequest77.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest77, { options_140988 }, 'apiRequest', {
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
    const eventDatavalidateCurrentForm57: any = [
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
    eventDatavalidateCurrentForm57.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm57, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal73: any = [
      {
        type: 'closeModal',
        dataId: '545098_1',
        options: { compId: 'page', compName: 'page', id: '9354904' },
        line_number: 1,
      },
    ];
    eventDatacloseModal73.params = [] || [];
    CMDGenerator(eventDatacloseModal73, {}, 'closeModal', {
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
    const forms17 = getFormByCompId('Form_31_1121', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms17) ? forms17 : [forms17]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDataapiRequest479: any = [
      {
        type: 'apiRequest',
        dataId: 167703359970561600,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '507095',
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
              dataKey: '4682474_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '4682474_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '4682474_query',
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
                  dataKey: '4682474_body.includeParent',
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
                  dataKey: '4682474_body.parentRegionId',
                  value: { type: ['customize'], code: '350000' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4682474_body',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167703362080945860,
            options: {
              compId: 'Input_city_426793',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '214991',
              data: '$reply_507095?.resultData$',
              labelKey: 'regionName',
              valueKey: 'regionId',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest479.params = [] || [];
    CMDGenerator(eventDataapiRequest479, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse250: any = [
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
        line_number: 4,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167703679175386270,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '698763',
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
                  dataKey: '7881588_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '7881588_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '7881588_query',
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
                      dataKey: '7881588_body.includeParent',
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
                      dataKey: '7881588_body.parentRegionId',
                      value: {
                        type: ['customize'],
                        code: '$state.redObj.city$',
                      },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '7881588_body',
                },
              ],
            },
            line_number: 5,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 167703679175366660,
                options: {
                  compId: 'Input_area_603276',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Select',
                  id: '089709',
                  data: '$reply_698763?.resultData$',
                  labelKey: 'regionName',
                  valueKey: 'regionId',
                },
                line_number: 6,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 167703679175315260,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '89706',
                      pageJsonId: 31,
                      dataSourceId: 167696083818455680,
                      dataSourceName: 'redObj',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '279752',
                          code: 'msisdn',
                          name: '手机号码',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['customize'],
                            code: '$state.redObj.msisdn$',
                          },
                        },
                        {
                          attrId: '445853',
                          code: 'city',
                          name: '所属地市',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['customize'],
                            code: '$state.redObj.city$',
                          },
                        },
                        {
                          attrId: '262196',
                          code: 'area',
                          name: '所属区县',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['customize'],
                            code: '$state.redObj.area$',
                          },
                        },
                        {
                          attrId: '839745',
                          code: 'rowId',
                          name: '手机号码',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['customize'],
                            code: '$state.redObj.rowId$',
                          },
                        },
                        {
                          attrId: '8919558',
                          code: 'cityName',
                          name: '所属地市',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['customize'],
                            code: '$state.redObj.cityName$',
                          },
                        },
                        {
                          attrId: '85402',
                          code: 'areaName',
                          name: '所属区县',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['customize'],
                            code: '$state.redObj.areaName$',
                          },
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
                ],
              },
            ],
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
            line_number: 8,
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
                line_number: 9,
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
                line_number: 10,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse250.params = [] || [];
    CMDGenerator(eventDataifelse250, {}, 'ifelse', {
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
        className="View_View_31_1"
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
          className="View_VerticalView_31_11"
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
            className="View_View_31_112"
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
                const eventDatasetDataSource215: any = [
                  {
                    type: 'setDataSource',
                    dataId: 167696088324887900,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '800529',
                      pageJsonId: 31,
                      dataSourceId: 167696083818455680,
                      dataSourceName: 'redObj',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '279752',
                          code: 'msisdn',
                          name: '手机号码',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'msisdn',
                          },
                        },
                        {
                          attrId: '445853',
                          code: 'city',
                          name: '所属地市',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'city',
                          },
                        },
                        {
                          attrId: '262196',
                          code: 'area',
                          name: '所属区县',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'area',
                          },
                        },
                        {
                          attrId: '839745',
                          code: 'rowId',
                          name: '手机号码',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '8919558',
                          code: 'cityName',
                          name: '所属地市',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '85402',
                          code: 'areaName',
                          name: '所属区县',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource215.params =
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
                  eventDatasetDataSource215,
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
                name={'手机号码'}
                size={'default'}
                selfSpan={24}
                labelCol={'6'}
                wrapperCol={'14'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipContent={''}
                tipPlacement={'top'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={true}
                placeholder={'请输入'}
                fieldName={'msisdn'}
                value={data?.redObj?.msisdn}
                formItemIndex={0}
                regexp={[
                  {
                    id: '8078776',
                    title: '按钮1',
                    iconPos: 'left',
                    regexpType: 1,
                    message: '请输入正确的手机号码',
                    pattern: '/^1[3-9]\\d{9}$/',
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
                  id: 'Input_msisdn_800708',
                  uid: 'Input_msisdn_800708',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatasetDataSource217: any = [
                    {
                      type: 'setDataSource',
                      dataId: 167703428213882700,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '847418',
                        pageJsonId: 31,
                        dataSourceId: 167696083818455680,
                        dataSourceName: 'redObj',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '279752',
                            code: 'msisdn',
                            name: '手机号码',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: {
                              type: ['context', '$e.target.value$'],
                              code: '',
                            },
                          },
                          {
                            attrId: '445853',
                            code: 'city',
                            name: '所属地市',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '262196',
                            code: 'area',
                            name: '所属区县',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '839745',
                            code: 'rowId',
                            name: '手机号码',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '8919558',
                            code: 'cityName',
                            name: '所属地市',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '85402',
                            code: 'areaName',
                            name: '所属区县',
                            type: 'string',
                            initialData: { type: 'static' },
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
                  eventDatasetDataSource217.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatasetDataSource217,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_msisdn_800708')}
                {...injectData}
              />
              <Select
                name={'所属地市'}
                size={'default'}
                selfSpan={24}
                labelCol={'6'}
                wrapperCol={'14'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={true}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                fieldName={'city'}
                value={data?.redObj?.city}
                formItemIndex={1}
                $$componentItem={{
                  id: 'Input_city_426793',
                  uid: 'Input_city_426793',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue183: any = [
                    {
                      type: 'clearValue',
                      dataId: 167703388758533150,
                      options: {
                        compId: 'Input_area_603276',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '908322',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue183.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue183, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatagetSelectedData390: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 167703390148038050,
                      options: {
                        compId: 'Input_city_426793',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '927403',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 167703390845632450,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '0583',
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
                                dataKey: '0583_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '0583_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '0583_query',
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
                                    dataKey: '0583_body.includeParent',
                                    value: {
                                      type: ['customize'],
                                      code: 'false',
                                    },
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
                                    dataKey: '0583_body.parentRegionId',
                                    value: {
                                      type: ['customize'],
                                      code: '$selectedData_927403[0].value$',
                                    },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '0583_body',
                              },
                            ],
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 167703396456098270,
                              options: {
                                compId: 'Input_area_603276',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '7860496',
                                data: '$reply_0583?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 4,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                        {
                          type: 'setDataSource',
                          dataId: 167703393033742180,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '393476',
                            pageJsonId: 31,
                            dataSourceId: 167696083818455680,
                            dataSourceName: 'redObj',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '279752',
                                code: 'msisdn',
                                name: '手机号码',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '445853',
                                code: 'city',
                                name: '所属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_927403[0].value$',
                                },
                              },
                              {
                                attrId: '262196',
                                code: 'area',
                                name: '所属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '839745',
                                code: 'rowId',
                                name: '手机号码',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '8919558',
                                code: 'cityName',
                                name: '所属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_927403[0].label$',
                                },
                              },
                              {
                                attrId: '85402',
                                code: 'areaName',
                                name: '所属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            operateType: 1,
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
                  eventDatagetSelectedData390.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatagetSelectedData390,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_city_426793')}
                {...injectData}
              />
              <Select
                name={'所属区县'}
                size={'default'}
                selfSpan={24}
                labelCol={'6'}
                wrapperCol={'14'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={true}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                fieldName={'area'}
                value={data?.redObj?.area}
                formItemIndex={2}
                $$componentItem={{
                  id: 'Input_area_603276',
                  uid: 'Input_area_603276',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatagetSelectedData391: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 167703405301710900,
                      options: {
                        compId: 'Input_area_603276',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '086756',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167703406231339680,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '064775',
                            pageJsonId: 31,
                            dataSourceId: 167696083818455680,
                            dataSourceName: 'redObj',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '279752',
                                code: 'msisdn',
                                name: '手机号码',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '445853',
                                code: 'city',
                                name: '所属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '262196',
                                code: 'area',
                                name: '所属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_086756[0].value$',
                                },
                              },
                              {
                                attrId: '839745',
                                code: 'rowId',
                                name: '手机号码',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '8919558',
                                code: 'cityName',
                                name: '所属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '85402',
                                code: 'areaName',
                                name: '所属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_086756[0].label$',
                                },
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
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatagetSelectedData391.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatagetSelectedData391,
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
                ref={(r: any) => refs.setComponentRef(r, 'Input_area_603276')}
                {...injectData}
              />
            </Form>
          </View>
        </View>
        <View
          className="View_View_904128"
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
              const eventDatavalidateCurrentForm80: any = [
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
                        code: 'function main(data,state,success,fail){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;if(!data.redObj.rowId){data.redObj.rowId=rowId}success()};',
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
                            params: '$data.redObj$',
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
              eventDatavalidateCurrentForm80.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatavalidateCurrentForm80,
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
              const eventDatacloseModal134: any = [
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
              eventDatacloseModal134.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatacloseModal134, { e }, 'closeModal', {
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

export default withPageHOC(RedMemberInfo$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', catalogCode: '', redObj: '' },
});
