// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Form,
  Input,
  Select,
  TimePicker,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const RedVerticalUpdate$$Modal: React.FC<PageProps> = ({
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
    const eventDataapiRequest31: any = [
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
    eventDataapiRequest31.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest31, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest32: any = [
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
    eventDataapiRequest32.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest32, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest33: any = [
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
    eventDataapiRequest33.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest33, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest34: any = [
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
    eventDataapiRequest34.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest34, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest35: any = [
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
    eventDataapiRequest35.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest35, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest36: any = [
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
    eventDataapiRequest36.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest36, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest37: any = [
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
    eventDataapiRequest37.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest37, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest38: any = [
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
    eventDataapiRequest38.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest38, { options_140988 }, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest39: any = [
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
    eventDataapiRequest39.params =
      [
        {
          title: '事件入参',
          name: 'options_140988',
          value: '$options_140988$',
        },
      ] || [];
    CMDGenerator(eventDataapiRequest39, { options_140988 }, 'apiRequest', {
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
    const eventDatavalidateCurrentForm33: any = [
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
    eventDatavalidateCurrentForm33.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm33, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal28: any = [
      {
        type: 'closeModal',
        dataId: '545098_1',
        options: { compId: 'page', compName: 'page', id: '9354904' },
        line_number: 1,
      },
    ];
    eventDatacloseModal28.params = [] || [];
    CMDGenerator(eventDatacloseModal28, {}, 'closeModal', {
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
    const forms14 = getFormByCompId('Form_31_1121', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms14) ? forms14 : [forms14]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDataapiRequest268: any = [
      {
        type: 'apiRequest',
        dataId: 167696101889816420,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '649258',
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
            dataId: 167696102564917150,
            options: {
              compId: 'Input_isDelay_156479',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '2039063',
              data: '$reply_649258?.resultData$',
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
    eventDataapiRequest268.params = [] || [];
    CMDGenerator(eventDataapiRequest268, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetDataSource17: any = [
      {
        type: 'setDataSource',
        dataId: 167696142285972160,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '881412',
          pageJsonId: 31,
          dataSourceId: 167696083818455680,
          dataSourceName: 'redObj',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '279752',
              code: 'redListTel',
              name: '红名单手机号码',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['customize'], code: '$state.redObj.redListTel$' },
            },
            {
              attrId: '445853',
              code: 'ensureType',
              name: '保障类型',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['customize'], code: '$state.redObj.ensureType$' },
            },
            {
              attrId: '262196',
              code: 'isDelay',
              name: '是否延期',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['customize'], code: '$state.redObj.isDelay$' },
            },
            {
              attrId: '027744',
              code: 'creditApplyValid',
              name: '本次信用度申请有效期',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['customize'],
                code: '$state.redObj.creditApplyValid$',
              },
            },
            {
              attrId: '966017',
              code: 'noDelayReason',
              name: '不延期原因',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['customize'],
                code: '$state.redObj.noDelayReason$',
              },
            },
            {
              attrId: '463939',
              code: 'belongCityText',
              name: '归属地市',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['customize'],
                code: '$state.redObj.belongCityText$',
              },
            },
            {
              attrId: '1748446',
              code: 'belongAreaText',
              name: '归属区县',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['customize'],
                code: '$state.redObj.belongAreaText$',
              },
            },
            {
              attrId: '693541864',
              code: 'userCurrentStatus',
              name: '用户当前状态',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['customize'],
                code: '$state.redObj.userCurrentStatus$',
              },
            },
            {
              attrId: '0080787',
              code: 'currentCreditLevel',
              name: '当前信用等级',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['customize'],
                code: '$state.redObj.currentCreditLevel$',
              },
            },
            {
              attrId: '822392',
              code: 'creditEffDate',
              name: '信用度生效时间',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['customize'],
                code: '$state.redObj.creditEffDate$',
              },
            },
            {
              attrId: '1199409',
              code: 'creditExpDate',
              name: '信用度失效时间',
              type: 'string',
              initialData: { type: 'static' },
              value: {
                type: ['customize'],
                code: '$state.redObj.creditExpDate$',
              },
            },
            {
              attrId: '8552664',
              code: 'rowId',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '061085',
              code: 'ensureTypeName',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '3804685',
              code: 'isDelayName',
              name: '属性',
              type: 'string',
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
    ];
    eventDatasetDataSource17.params = [] || [];
    CMDGenerator(eventDatasetDataSource17, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    });
    const eventDataifelse149: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '7348076',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.redObj.isDelay$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167713934573858400,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167713939113268160,
            children: [
              {
                dataName: 'action',
                dataId: 167713941463525340,
                children: [],
                todoOptions: ['required', 'selectComp'],
                options: {
                  compId: 'Input_noDelayReason_049466',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Input',
                  id: '711753',
                  required: 'true',
                },
                actionObjId: 'Input_noDelayReason_049466',
                actionObjName: 'Input',
                value: 'setRequired',
                compLib: 'comm',
                line_number: 9,
              },
              {
                dataName: 'action',
                dataId: 167713941980737060,
                children: [],
                todoOptions: ['required', 'selectComp'],
                options: {
                  compId: [
                    'Input_creditApplyValid_6019926',
                    'TimePicker_2045607',
                  ],
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'DatePicker',
                  id: '8104583',
                  required: '',
                  compid: [
                    'Input_creditApplyValid_6019926',
                    'TimePicker_2045607',
                  ],
                },
                actionObjId: 'Input_creditApplyValid_6019926',
                actionObjName: 'DatePicker',
                value: 'setRequired',
                compLib: 'comm',
                line_number: 10,
              },
              {
                dataName: 'action',
                dataId: 167713943261830560,
                children: [],
                todoOptions: ['disabled', 'selectComp'],
                options: {
                  compId: [
                    'Input_creditApplyValid_6019926',
                    'TimePicker_2045607',
                  ],
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'DatePicker',
                  id: '188582202',
                  disabled: 'toggle',
                  compid: [
                    'Input_creditApplyValid_6019926',
                    'TimePicker_2045607',
                  ],
                },
                actionObjId: 'Input_creditApplyValid_6019926',
                actionObjName: 'DatePicker',
                value: 'setDisable',
                compLib: 'comm',
                line_number: 11,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'setRequired',
                dataId: 167713941463525340,
                options: {
                  compId: 'Input_noDelayReason_049466',
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'Input',
                  id: '711753',
                  required: 'true',
                },
                line_number: 9,
              },
              {
                type: 'setRequired',
                dataId: 167713941980737060,
                options: {
                  compId: [
                    'Input_creditApplyValid_6019926',
                    'TimePicker_2045607',
                  ],
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'DatePicker',
                  id: '8104583',
                  required: '',
                  compid: [
                    'Input_creditApplyValid_6019926',
                    'TimePicker_2045607',
                  ],
                },
                line_number: 10,
              },
              {
                type: 'setDisable',
                dataId: 167713943261830560,
                options: {
                  compId: [
                    'Input_creditApplyValid_6019926',
                    'TimePicker_2045607',
                  ],
                  compLib: 'comm',
                  pageJsonId: 31,
                  compName: 'DatePicker',
                  id: '188582202',
                  disabled: 'toggle',
                  compid: [
                    'Input_creditApplyValid_6019926',
                    'TimePicker_2045607',
                  ],
                },
                line_number: 11,
              },
            ],
          },
        ],
        line_number: 5,
        callback1: [
          {
            type: 'setRequired',
            dataId: 167713937767349860,
            options: {
              compId: ['Input_creditApplyValid_6019926', 'TimePicker_2045607'],
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'DatePicker',
              id: '514393',
              required: 'true',
              compid: ['Input_creditApplyValid_6019926', 'TimePicker_2045607'],
            },
            line_number: 6,
          },
          {
            type: 'setRequired',
            dataId: 167713938620156320,
            options: {
              compId: 'Input_noDelayReason_049466',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Input',
              id: '989157',
              required: '',
            },
            line_number: 7,
          },
          {
            type: 'setDisable',
            dataId: 167713940257319170,
            options: {
              compId: 'Input_noDelayReason_049466',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Input',
              id: '67807',
              disabled: 'true',
            },
            line_number: 8,
          },
        ],
      },
    ];
    eventDataifelse149.params = [] || [];
    CMDGenerator(eventDataifelse149, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse150: any = [
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
        dataId: 167696174399469250,
        elseIfs: [],
        line_number: 12,
        callback1: [
          {
            type: 'setDisable',
            dataId: 167696177455659780,
            options: {
              compId: [
                'Input_isDelay_156479',
                'Input_creditApplyValid_6019926',
                'Input_noDelayReason_049466',
                'TimePicker_2045607',
              ],
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '6647564',
              disabled: 'true',
              compid: [
                'Input_isDelay_156479',
                'Input_creditApplyValid_6019926',
                'Input_noDelayReason_049466',
                'TimePicker_2045607',
              ],
            },
            line_number: 13,
          },
          {
            type: 'sysSetVisible',
            dataId: 167713870180278300,
            options: {
              compId: ['Button_2339'],
              compName: 'page',
              id: '654869',
              pageJsonId: 31,
              visible: '',
              compid: ['Button_2339'],
            },
            line_number: 14,
          },
          {
            type: 'console',
            dataId: 168550305224461820,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '637989',
              pageJsonId: 31,
              value: ['测试是否到达该区域'],
            },
            line_number: 15,
          },
        ],
      },
    ];
    eventDataifelse150.params = [] || [];
    CMDGenerator(eventDataifelse150, {}, 'ifelse', {
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
              labelCol={'8'}
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
                const eventDatasetDataSource126: any = [
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
                          code: 'redListTel',
                          name: '红名单手机号码',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'redListTel',
                          },
                        },
                        {
                          attrId: '445853',
                          code: 'ensureType',
                          name: '保障类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'ensureType',
                          },
                        },
                        {
                          attrId: '262196',
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
                          attrId: '027744',
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
                          attrId: '966017',
                          code: 'noDelayReason',
                          name: '不延期原因',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'noDelayReason',
                          },
                        },
                        {
                          attrId: '463939',
                          code: 'belongCityText',
                          name: '归属地市',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'belongCityText',
                          },
                        },
                        {
                          attrId: '1748446',
                          code: 'belongAreaText',
                          name: '归属区县',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'belongAreaText',
                          },
                        },
                        {
                          attrId: '693541864',
                          code: 'userCurrentStatus',
                          name: '用户当前状态',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'userCurrentStatus',
                          },
                        },
                        {
                          attrId: '0080787',
                          code: 'currentCreditLevel',
                          name: '当前信用等级',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'currentCreditLevel',
                          },
                        },
                        {
                          attrId: '822392',
                          code: 'creditEffDate',
                          name: '信用度生效时间',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'creditEffDate',
                          },
                        },
                        {
                          attrId: '1199409',
                          code: 'creditExpDate',
                          name: '信用度失效时间',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'creditExpDate',
                          },
                        },
                        {
                          attrId: '8552664',
                          code: 'rowId',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '061085',
                          code: 'ensureTypeName',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '3804685',
                          code: 'isDelayName',
                          name: '属性',
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
                eventDatasetDataSource126.params =
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
                  eventDatasetDataSource126,
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
              <Input
                name={'红名单手机号码'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                fieldName={'redListTel'}
                value={data?.redObj?.redListTel}
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
                  id: 'Input_redListTel_0403494',
                  uid: 'Input_redListTel_0403494',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_redListTel_0403494'] = r)}
                {...injectData}
              />
              <Input
                name={'保障类型'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                fieldName={'ensureType'}
                value={data?.redObj?.ensureType}
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
                  id: 'Input_ensureType_177166',
                  uid: 'Input_ensureType_177166',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_ensureType_177166'] = r)}
                {...injectData}
              />
              <Input
                name={'归属地市'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                fieldName={'belongCityText'}
                value={data?.redObj?.belongCityText}
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
                  id: 'Input_belongCityText_50772483',
                  uid: 'Input_belongCityText_50772483',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_belongCityText_50772483'] = r)}
                {...injectData}
              />
              <Input
                name={'归属区县'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                fieldName={'belongAreaText'}
                value={data?.redObj?.belongAreaText}
                formItemIndex={3}
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
                  id: 'Input_belongAreaText_284013',
                  uid: 'Input_belongAreaText_284013',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_belongAreaText_284013'] = r)}
                {...injectData}
              />
              <Input
                name={'用户当前状态'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                fieldName={'userCurrentStatus'}
                value={data?.redObj?.userCurrentStatus}
                formItemIndex={4}
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
                  id: 'Input_userCurrentStatus_701219',
                  uid: 'Input_userCurrentStatus_701219',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_userCurrentStatus_701219'] = r)}
                {...injectData}
              />
              <Input
                name={'当前信用等级'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                fieldName={'currentCreditLevel'}
                value={data?.redObj?.currentCreditLevel}
                formItemIndex={5}
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
                  id: 'Input_currentCreditLevel_70948',
                  uid: 'Input_currentCreditLevel_70948',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_currentCreditLevel_70948'] = r)}
                {...injectData}
              />
              <Input
                name={'信用度生效时间'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                fieldName={'creditEffDate'}
                value={data?.redObj?.creditEffDate}
                formItemIndex={6}
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
                  id: 'Input_creditEffDate_921116',
                  uid: 'Input_creditEffDate_921116',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_creditEffDate_921116'] = r)}
                {...injectData}
              />
              <Input
                name={'信用度失效时间'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                fieldName={'creditExpDate'}
                value={data?.redObj?.creditExpDate}
                formItemIndex={7}
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
                  id: 'Input_creditExpDate_024315',
                  uid: 'Input_creditExpDate_024315',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={true}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_creditExpDate_024315'] = r)}
                {...injectData}
              />
              <Select
                name={'是否延期'}
                size={'default'}
                selfSpan={''}
                labelCol={'8'}
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
                formItemIndex={8}
                $$componentItem={{
                  id: 'Input_isDelay_156479',
                  uid: 'Input_isDelay_156479',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataifelse448: any = [
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
                      dataId: 167696124298555260,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 167696124298559140,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 167696124298558980,
                              children: [],
                              todoOptions: ['required', 'selectComp'],
                              options: {
                                compId: [
                                  'Input_noDelayReason_755391',
                                  'Input_noDelayReason_049466',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '9913282',
                                required: 'true',
                                compid: [
                                  'Input_noDelayReason_755391',
                                  'Input_noDelayReason_049466',
                                ],
                              },
                              actionObjId: 'Input_noDelayReason_755391',
                              actionObjName: 'Input',
                              value: 'setRequired',
                              compLib: 'comm',
                              line_number: 10,
                            },
                            {
                              dataName: 'action',
                              dataId: 167713856206516640,
                              children: [],
                              todoOptions: ['required', 'selectComp'],
                              options: {
                                compId: [
                                  'Input_noDelayReason_755391',
                                  'Input_creditApplyValid_6019926',
                                  'TimePicker_2045607',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '7036575',
                                required: '',
                                compid: [
                                  'Input_noDelayReason_755391',
                                  'Input_creditApplyValid_6019926',
                                  'TimePicker_2045607',
                                ],
                              },
                              actionObjId: 'Input_noDelayReason_755391',
                              actionObjName: 'Input',
                              value: 'setRequired',
                              compLib: 'comm',
                              line_number: 11,
                            },
                            {
                              dataName: 'action',
                              dataId: 167696124298537800,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: [
                                  'Input_creditApplyValid_38563',
                                  'Input_creditApplyValid_6019926',
                                  'TimePicker_2045607',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'DatePicker',
                                id: '5728506',
                                disabled: 'true',
                                compid: [
                                  'Input_creditApplyValid_38563',
                                  'Input_creditApplyValid_6019926',
                                  'TimePicker_2045607',
                                ],
                              },
                              actionObjId: 'Input_creditApplyValid_38563',
                              actionObjName: 'DatePicker',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 12,
                            },
                            {
                              dataName: 'action',
                              dataId: 167696124298597630,
                              children: [],
                              todoOptions: ['disabled', 'selectComp'],
                              options: {
                                compId: [
                                  'Input_noDelayReason_755391',
                                  'Input_noDelayReason_049466',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '902931',
                                disabled: '',
                                compid: [
                                  'Input_noDelayReason_755391',
                                  'Input_noDelayReason_049466',
                                ],
                              },
                              actionObjId: 'Input_noDelayReason_755391',
                              actionObjName: 'Input',
                              value: 'setDisable',
                              compLib: 'comm',
                              line_number: 13,
                            },
                            {
                              dataName: 'action',
                              dataId: 170314702548815140,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'TimePicker_2045607',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'TimePicker',
                                id: '594746',
                              },
                              actionObjId: 'TimePicker_2045607',
                              actionObjName: 'TimePicker',
                              value: 'clearValue',
                              compLib: 'comm',
                              line_number: 14,
                            },
                          ],
                          condition: [],
                          callback: [
                            {
                              type: 'setRequired',
                              dataId: 167696124298558980,
                              options: {
                                compId: [
                                  'Input_noDelayReason_755391',
                                  'Input_noDelayReason_049466',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '9913282',
                                required: 'true',
                                compid: [
                                  'Input_noDelayReason_755391',
                                  'Input_noDelayReason_049466',
                                ],
                              },
                              line_number: 10,
                            },
                            {
                              type: 'setRequired',
                              dataId: 167713856206516640,
                              options: {
                                compId: [
                                  'Input_noDelayReason_755391',
                                  'Input_creditApplyValid_6019926',
                                  'TimePicker_2045607',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '7036575',
                                required: '',
                                compid: [
                                  'Input_noDelayReason_755391',
                                  'Input_creditApplyValid_6019926',
                                  'TimePicker_2045607',
                                ],
                              },
                              line_number: 11,
                            },
                            {
                              type: 'setDisable',
                              dataId: 167696124298537800,
                              options: {
                                compId: [
                                  'Input_creditApplyValid_38563',
                                  'Input_creditApplyValid_6019926',
                                  'TimePicker_2045607',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'DatePicker',
                                id: '5728506',
                                disabled: 'true',
                                compid: [
                                  'Input_creditApplyValid_38563',
                                  'Input_creditApplyValid_6019926',
                                  'TimePicker_2045607',
                                ],
                              },
                              line_number: 12,
                            },
                            {
                              type: 'setDisable',
                              dataId: 167696124298597630,
                              options: {
                                compId: [
                                  'Input_noDelayReason_755391',
                                  'Input_noDelayReason_049466',
                                ],
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Input',
                                id: '902931',
                                disabled: '',
                                compid: [
                                  'Input_noDelayReason_755391',
                                  'Input_noDelayReason_049466',
                                ],
                              },
                              line_number: 13,
                            },
                            {
                              type: 'clearValue',
                              dataId: 170314702548815140,
                              options: {
                                compId: 'TimePicker_2045607',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'TimePicker',
                                id: '594746',
                              },
                              line_number: 14,
                            },
                          ],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setRequired',
                          dataId: 167696124298521700,
                          options: {
                            compId: [
                              'Input_creditApplyValid_38563',
                              'Input_creditApplyValid_6019926',
                              'TimePicker_2045607',
                            ],
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'DatePicker',
                            id: '527929',
                            required: 'true',
                            compid: [
                              'Input_creditApplyValid_38563',
                              'Input_creditApplyValid_6019926',
                              'TimePicker_2045607',
                            ],
                          },
                          line_number: 2,
                        },
                        {
                          type: 'setRequired',
                          dataId: 167713854271496770,
                          options: {
                            compId: [
                              'Input_creditApplyValid_38563',
                              'Input_noDelayReason_049466',
                            ],
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'DatePicker',
                            id: '905875',
                            required: '',
                            compid: [
                              'Input_creditApplyValid_38563',
                              'Input_noDelayReason_049466',
                            ],
                          },
                          line_number: 3,
                        },
                        {
                          type: 'setDisable',
                          dataId: 167696124298511230,
                          options: {
                            compId: [
                              'Input_noDelayReason_755391',
                              'Input_noDelayReason_049466',
                            ],
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'Input',
                            id: '755049',
                            disabled: 'true',
                            compid: [
                              'Input_noDelayReason_755391',
                              'Input_noDelayReason_049466',
                            ],
                          },
                          line_number: 4,
                        },
                        {
                          type: 'setDisable',
                          dataId: 167696124298566620,
                          options: {
                            compId: [
                              'Input_creditApplyValid_38563',
                              'Input_creditApplyValid_6019926',
                              'TimePicker_2045607',
                            ],
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'DatePicker',
                            id: '1200305',
                            disabled: '',
                            compid: [
                              'Input_creditApplyValid_38563',
                              'Input_creditApplyValid_6019926',
                              'TimePicker_2045607',
                            ],
                          },
                          line_number: 5,
                        },
                        {
                          type: 'clearValue',
                          dataId: 167696128038544420,
                          options: {
                            compId: 'Input_noDelayReason_049466',
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'Input',
                            id: '824365',
                          },
                          line_number: 6,
                        },
                        {
                          type: 'customActionCode',
                          dataId: 167714388401989470,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '154383',
                            pageJsonId: 31,
                            code: 'function main(data,state,success,fail){var date=new Date;var year=date.getFullYear()+1;var month=date.getMonth()+1;var date=date.getDate();var nowMonth=month<10?"0"+month:month;success(year+"-"+nowMonth+"-"+date)};',
                          },
                          line_number: 7,
                          callback1: [
                            {
                              type: 'setValue',
                              dataId: 167714493192570340,
                              options: {
                                compId: 'Input_creditApplyValid_6019926',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'DatePicker',
                                id: '376953',
                                valueList: {
                                  Input_creditApplyValid_6019926:
                                    '$data_154383$',
                                },
                              },
                              line_number: 8,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                        {
                          type: 'validateMsg',
                          dataId: 169094579741145500,
                          options: {
                            compId: 'Input_noDelayReason_049466',
                            compLib: 'comm',
                            pageJsonId: 31,
                            compName: 'Input',
                            id: '637521',
                            validateStatus: '',
                          },
                          line_number: 9,
                        },
                      ],
                    },
                  ];
                  eventDataifelse448.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse448, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Input_isDelay_156479'] = r)}
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
                formItemIndex={9}
                fieldName={'creditApplyValid'}
                value={data?.redObj?.creditApplyValid}
                $$componentItem={{
                  id: 'TimePicker_2045607',
                  uid: 'TimePicker_2045607',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                defaultValue={undefined}
                isFormRootChild={true}
                ref={(r: any) => (refs['TimePicker_2045607'] = r)}
                {...injectData}
              />
              <Input
                name={'不延期原因'}
                size={'default'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={'20'}
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
                formItemIndex={10}
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
                  id: 'Input_noDelayReason_049466',
                  uid: 'Input_noDelayReason_049466',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_noDelayReason_049466'] = r)}
                {...injectData}
              />
            </Form>
          </View>
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_279348',
            uid: 'View_279348',
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
            fontSize: '',
          }}
          ref={(r: any) => (refs['View_279348'] = r)}
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
              id: 'Button_2339',
              uid: 'Button_2339',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatavalidateCurrentForm72: any = [
                {
                  type: 'validateCurrentForm',
                  dataId: 16771387170337704,
                  options: {
                    compId: 'Form_31_1121',
                    compLib: 'comm',
                    pageJsonId: 31,
                    compName: 'Form',
                    id: '0552',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'getSelectedData',
                      dataId: 167713911769801250,
                      options: {
                        compId: 'Input_isDelay_156479',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '689422',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167713912745108930,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '0341235',
                            pageJsonId: 31,
                            dataSourceId: 167696083818455680,
                            dataSourceName: 'redObj',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '279752',
                                code: 'redListTel',
                                name: '红名单手机号码',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'redListTel',
                                },
                              },
                              {
                                attrId: '445853',
                                code: 'ensureType',
                                name: '保障类型',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'ensureType',
                                },
                              },
                              {
                                attrId: '262196',
                                code: 'isDelay',
                                name: '是否延期',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_689422[0].value$',
                                },
                              },
                              {
                                attrId: '027744',
                                code: 'creditApplyValid',
                                name: '本次信用度申请有效期',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'creditApplyValid',
                                },
                              },
                              {
                                attrId: '966017',
                                code: 'noDelayReason',
                                name: '不延期原因',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'noDelayReason',
                                },
                              },
                              {
                                attrId: '463939',
                                code: 'belongCityText',
                                name: '归属地市',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'belongCityText',
                                },
                              },
                              {
                                attrId: '1748446',
                                code: 'belongAreaText',
                                name: '归属区县',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'belongAreaText',
                                },
                              },
                              {
                                attrId: '693541864',
                                code: 'userCurrentStatus',
                                name: '用户当前状态',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'userCurrentStatus',
                                },
                              },
                              {
                                attrId: '0080787',
                                code: 'currentCreditLevel',
                                name: '当前信用等级',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'currentCreditLevel',
                                },
                              },
                              {
                                attrId: '822392',
                                code: 'creditEffDate',
                                name: '信用度生效时间',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'creditEffDate',
                                },
                              },
                              {
                                attrId: '1199409',
                                code: 'creditExpDate',
                                name: '信用度失效时间',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'form',
                                    'Form_31_1121',
                                    'getFieldsValue',
                                  ],
                                  code: 'creditExpDate',
                                },
                              },
                              {
                                attrId: '8552664',
                                code: 'rowId',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$state.redObj.rowId$',
                                },
                              },
                              {
                                attrId: '061085',
                                code: 'ensureTypeName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$state.redObj.ensureTypeName$',
                                },
                              },
                              {
                                attrId: '3804685',
                                code: 'isDelayName',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['customize'],
                                  code: '$selectedData_689422[0].label$',
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
                              type: 'okCallbackData',
                              dataId: 167713912745109540,
                              options: {
                                compId: 'okCallbackData',
                                compName: 'page',
                                id: '6865374',
                                pageJsonId: 31,
                                params: '$data.redObj$',
                              },
                              line_number: 4,
                            },
                            {
                              type: 'closeModal',
                              dataId: 167713912745184320,
                              options: {
                                compId: 'closeModal',
                                compName: 'page',
                                id: '79914',
                                pageJsonId: 31,
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
              eventDatavalidateCurrentForm72.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatavalidateCurrentForm72,
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
            ref={(r: any) => (refs['Button_2339'] = r)}
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
              id: 'Button_853853',
              uid: 'Button_853853',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 10px' }}
            onClick={(e: any) => {
              const eventDatacloseModal129: any = [
                {
                  type: 'closeModal',
                  dataId: 167713873320000220,
                  options: { compId: 'page', compName: 'page', id: '87714359' },
                  line_number: 1,
                },
              ];
              eventDatacloseModal129.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatacloseModal129, { e }, 'closeModal', {
                id: 'closeModal',
                name: 'closeModal',
                type: 'closeModal',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Button_853853'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(RedVerticalUpdate$$Modal, {
  pageId: '945202588504145920',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', catalogCode: '', redObj: '' },
});
