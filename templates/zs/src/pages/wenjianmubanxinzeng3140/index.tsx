// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Radio, StdUpload, TreeSelect, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Wenjianmubanxinzeng3140$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {
    const eventDatavalidateCurrentForm50: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167290439611019650,
        options: {
          compId: 'Form_2998662',
          compLib: 'comm',
          pageJsonId: '8851423',
          compName: 'Form',
          id: '072096',
        },
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 167290440320840800,
            shielding: true,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '427664',
              pageJsonId: '5031917',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'addDcFileTemplate',
              _apiCode: 'addDcFileTemplate',
              _source: 'rhin',
              _serviceId: '928119321736335360',
              _serviceTitle: '新增文件模板-hyj: addDcFileTemplate',
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
                  dataKey: '427664_header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'path',
                  dataKey: '427664_path',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'query',
                  dataKey: '427664_query',
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
                      code: 'fileTemplateId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.fileTemplateId',
                      compType: 'Input',
                      name: 'fileTemplateId',
                      parents: ['root', 'body'],
                      id: 'body.fileTemplateId',
                      dataKey: '427664_body.fileTemplateId',
                      value: { type: [], code: '' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'fileTemplateName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.fileTemplateName',
                      compType: 'Input',
                      name: 'fileTemplateName',
                      parents: ['root', 'body'],
                      id: 'body.fileTemplateName',
                      dataKey: '427664_body.fileTemplateName',
                      value: {
                        type: ['datasource', 'pageInfo', 'data'],
                        code: 'fileTemplateName',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                    {
                      code: 'fileId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.fileId',
                      compType: 'Input',
                      name: 'fileId',
                      parents: ['root', 'body'],
                      id: 'body.fileId',
                      dataKey: '427664_body.fileId',
                      value: {
                        type: ['datasource', 'pageInfo', 'data'],
                        code: 'fileId',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                    },
                    {
                      code: 'filePath',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.filePath',
                      compType: 'Input',
                      name: 'filePath',
                      parents: ['root', 'body'],
                      id: 'body.filePath',
                      dataKey: '427664_body.filePath',
                      value: {
                        type: ['datasource', 'pageInfo', 'data'],
                        code: 'filePath',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-3',
                    },
                    {
                      code: 'sceneId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.sceneId',
                      compType: 'Input',
                      name: 'sceneId',
                      parents: ['root', 'body'],
                      id: 'body.sceneId',
                      dataKey: '427664_body.sceneId',
                      value: {
                        type: ['datasource', 'pageInfo', 'data'],
                        code: 'sceneId',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-4',
                    },
                    {
                      code: 'remark',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.remark',
                      compType: 'Input',
                      name: 'remark',
                      parents: ['root', 'body'],
                      id: 'body.remark',
                      dataKey: '427664_body.remark',
                      value: { type: [], code: '' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-5',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'body',
                  dataKey: '427664_body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _sourceName: '新增文件模板-hyj',
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '279237',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_427664.resultMsg$',
                      operate: '==',
                      manualValue: 'SUCCESS',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167290470336893150,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 167290474744304500,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 167290476660236640,
                        children: [],
                        todoOptions: ['msgType', 'value'],
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '568239',
                          pageJsonId: '8851423',
                          type: 'info',
                          value: '$reply_427664.resultMsg$',
                        },
                        actionObjId: 'showMessage',
                        actionObjName: 'system',
                        value: 'showMessage',
                        shielding: true,
                        line_number: 6,
                      },
                    ],
                    condition: [],
                    desc: '如果上传失败',
                    shielding: true,
                    callback: [
                      {
                        type: 'showMessage',
                        dataId: 167290476660236640,
                        shielding: true,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '568239',
                          pageJsonId: '8851423',
                          type: 'info',
                          value: '$reply_427664.resultMsg$',
                        },
                        line_number: 6,
                      },
                    ],
                  },
                ],
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 167290481634959500,
                    shielding: true,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '215979',
                      pageJsonId: '8851423',
                      params: '$data.pageInfo$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 167290482823174080,
                    shielding: true,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '743412',
                      pageJsonId: '8851423',
                    },
                    line_number: 5,
                  },
                ],
              },
            ],
            callback2: [],
          },
          {
            type: 'setLoading',
            dataId: 169871757459657280,
            options: {
              compId: 'View_8851423_1',
              compLib: 'custom',
              pageJsonId: '8851423',
              compName: 'View',
              id: '5995114',
              loading: true,
            },
            line_number: 7,
          },
          {
            type: 'apiRequest',
            dataId: 169871642509812400,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '631082',
              pageJsonId: '8851423',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'coverAddFileTemplate',
              _apiCode: 'coverAddFileTemplate',
              _source: 'rhin',
              _sourceName: '覆盖新增文件模板-hyj',
              _serviceId: '1036454252811489280',
              _serviceTitle: '覆盖新增文件模板-hyj: coverAddFileTemplate',
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
                      dataKey: '631082_root.header',
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
                      dataKey: '631082_root.path',
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
                      dataKey: '631082_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'sceneId',
                          name: 'sceneId',
                          attrType: 'object',
                          _id: 'root.body.sceneId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.sceneId',
                          dataKey: '631082_root.body.sceneId',
                          value: {
                            type: ['datasource', 'pageInfo', 'data'],
                            code: 'sceneId',
                          },
                        },
                        {
                          code: 'remark',
                          name: 'remark',
                          attrType: 'object',
                          _id: 'root.body.remark',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.remark',
                          dataKey: '631082_root.body.remark',
                          value: {
                            type: ['datasource', 'pageInfo', 'data'],
                            code: 'remark',
                          },
                        },
                        {
                          code: 'isCover',
                          name: '是否覆盖新增',
                          attrType: 'object',
                          _id: 'root.body.isCover',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-2',
                          id: 'root.body.isCover',
                          dataKey: '631082_root.body.isCover',
                          value: {
                            type: ['context', '$Form_2998662$'],
                            code: 'isCover',
                          },
                        },
                        {
                          code: 'fileTemplateId',
                          name: 'fileTemplateId',
                          attrType: 'object',
                          _id: 'root.body.fileTemplateId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-3',
                          id: 'root.body.fileTemplateId',
                          dataKey: '631082_root.body.fileTemplateId',
                          value: { type: [], code: '' },
                        },
                        {
                          code: 'fileTemplateName',
                          name: 'fileTemplateName',
                          attrType: 'object',
                          _id: 'root.body.fileTemplateName',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-4',
                          id: 'root.body.fileTemplateName',
                          dataKey: '631082_root.body.fileTemplateName',
                          value: {
                            type: ['datasource', 'pageInfo', 'data'],
                            code: 'fileTemplateName',
                          },
                        },
                        {
                          code: 'filePath',
                          name: 'filePath',
                          attrType: 'object',
                          _id: 'root.body.filePath',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-5',
                          id: 'root.body.filePath',
                          dataKey: '631082_root.body.filePath',
                          value: {
                            type: ['datasource', 'pageInfo', 'data'],
                            code: 'filePath',
                          },
                        },
                        {
                          code: 'fileId',
                          name: 'fileId',
                          attrType: 'object',
                          _id: 'root.body.fileId',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-6',
                          id: 'root.body.fileId',
                          dataKey: '631082_root.body.fileId',
                          value: {
                            type: ['datasource', 'pageInfo', 'data'],
                            code: 'fileId',
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
                      dataKey: '631082_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '631082_root',
                },
              ],
            },
            line_number: 8,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '279237',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_631082.resultMsg$',
                      operate: '==',
                      manualValue: 'SUCCESS',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 169871657305565120,
                elseIfs: [],
                line_number: 9,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 169871657305550460,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '9472356',
                      pageJsonId: '8851423',
                      params: '$data.pageInfo$',
                    },
                    line_number: 10,
                  },
                  {
                    type: 'closeModal',
                    dataId: 16987165730552164,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '891463',
                      pageJsonId: '8851423',
                    },
                    line_number: 11,
                  },
                ],
              },
              {
                type: 'setLoading',
                dataId: 169871758765888540,
                options: {
                  compId: 'View_8851423_1',
                  compLib: 'custom',
                  pageJsonId: '8851423',
                  compName: 'View',
                  id: '908909',
                  loading: false,
                },
                line_number: 12,
              },
            ],
            callback2: [
              {
                type: 'setLoading',
                dataId: 169871759587518800,
                options: {
                  compId: 'View_8851423_1',
                  compLib: 'custom',
                  pageJsonId: '8851423',
                  compName: 'View',
                  id: '02181008',
                  loading: false,
                },
                line_number: 13,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm50.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm50, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal56: any = [
      {
        type: 'closeModal',
        dataId: '625569_1',
        options: { compId: 'page', compName: 'page', id: '467708' },
        line_number: 1,
      },
    ];
    eventDatacloseModal56.params = [] || [];
    CMDGenerator(eventDatacloseModal56, {}, 'closeModal', {
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
    // console 169873706397673200
    console.log('组件状态 =>', state);
    const eventDataifelse213: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '854822',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.isCover$',
              operate: '!=',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169871807665275200,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 169873733802927140,
            children: [
              {
                dataName: 'action',
                dataId: 169873734054924640,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 169873734054900860,
                    children: [],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 169873734054972060,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: [
                  'selectAllDataSource',
                  'dataSourceSetValue',
                  'onlySetPatch',
                ],
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '300836',
                  pageJsonId: '8851423',
                  dataSourceId: 167288666822352260,
                  dataSourceName: 'pageInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '884219',
                      code: 'sceneId',
                      name: '场景ID',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: ['context', '$state.sceneId$'], code: '' },
                    },
                    {
                      attrId: '186104',
                      code: 'filePath',
                      name: '文件在低代码路径',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '509838',
                      code: 'fileId',
                      name: '文件ID',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '708125',
                      code: 'fileTemplateName',
                      name: '文件模板名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                actionObjId: 'setDataSource',
                actionObjName: 'page',
                value: 'setDataSource',
                line_number: 4,
              },
            ],
            condition: [],
            value: 'elseIf',
            callback: [
              {
                type: 'setDataSource',
                dataId: 169873734054924640,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '300836',
                  pageJsonId: '8851423',
                  dataSourceId: 167288666822352260,
                  dataSourceName: 'pageInfo',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '884219',
                      code: 'sceneId',
                      name: '场景ID',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: ['context', '$state.sceneId$'], code: '' },
                    },
                    {
                      attrId: '186104',
                      code: 'filePath',
                      name: '文件在低代码路径',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '509838',
                      code: 'fileId',
                      name: '文件ID',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '708125',
                      code: 'fileTemplateName',
                      name: '文件模板名称',
                      type: 'string',
                      initialData: { type: 'static' },
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
            ],
          },
        ],
        line_number: 2,
        callback1: [
          {
            type: 'setDisable',
            dataId: 169871812116474850,
            options: {
              compId: 'Radio_5240295',
              compLib: 'comm',
              pageJsonId: '8851423',
              compName: 'Radio',
              id: '994163',
              disabled: '',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDataifelse213.params = [] || [];
    CMDGenerator(eventDataifelse213, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataapiRequest401: any = [
      {
        type: 'apiRequest',
        dataId: 167290969823460130,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '153873',
          pageJsonId: '5031917',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogToTreeNodeListByParentCode',
          _apiCode: 'qryCatalogToTreeNodeListByParentCode',
          _source: 'rhin',
          _serviceId: '877545868169199616',
          _serviceTitle:
            '根据父类目编码查询类目数据-tsm: qryCatalogToTreeNodeListByParentCode',
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
              dataKey: '937848_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '937848_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '937848_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'isQryAll',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  defaultValue: 'false',
                  _id: 'body.isQryAll',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.isQryAll',
                  dataKey: '937848_body.isQryAll',
                  value: { type: ['customize'], code: 'true' },
                },
                {
                  code: 'parentCatalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentCatalogCode',
                  compType: 'Input',
                  name: 'parentCatalogCode',
                  parents: ['body'],
                  id: 'body.parentCatalogCode',
                  dataKey: '937848_body.parentCatalogCode',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '937848_body',
            },
          ],
          _sourceName: '根据父类目编码查询类目数据-tsm',
        },
        line_number: 5,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167885903705808320,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '9341714',
              pageJsonId: '90041',
              code: 'function main(data,state,success,fail){var _reply_,_reply_2;console.log("\\u8FD4\\u56DE\\u7684\\u6570\\u636E:",(_reply_=reply_153873)===null||_reply_===void 0?void 0:_reply_.resultData);var result=((_reply_2=reply_153873)===null||_reply_2===void 0?void 0:_reply_2.resultData)||[];var res=[];for(var i=0;i<result.length;i++){var subRes=result[i];var childrenOne=subRes["children"]||[];var subRes2=[];for(var j=0;j<childrenOne.length;j++){var finalRes=childrenOne[j];var childrenTwo=finalRes["children"]||[];var finalRes2=[];for(var k=0;k<childrenTwo.length;k++){var lastRes=childrenTwo[k]||[];var childrenThr=lastRes["children"]||[];for(var o=0;o<childrenThr.length;o++){lastRes["children"][o]["isCheck"]=true}finalRes2.push(lastRes)}subRes2.push(finalRes2)}res.push(subRes)}console.log("\\u7ED3\\u679C\\uFF1A",res);success(result)};',
              actionTitle: '将叶节点设置为可选中',
            },
            line_number: 6,
            callback1: [
              {
                type: 'reloadData',
                dataId: 167885906869141380,
                options: {
                  compId: 'TreeSelect_838942',
                  compLib: 'comm',
                  pageJsonId: '8851423',
                  compName: 'TreeSelect',
                  id: '645735',
                  data: '$data_9341714$',
                  labelKey: 'nodeValue',
                  nodeValueKey: 'nodeKey',
                  selectable: 'isCheck',
                  childrenKey: 'children',
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '041143',
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.isCover$',
                          operate: '!=',
                          manualValue: '1',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 169871814811975580,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 169871818073511000,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 169871819618958500,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 169871819618968500,
                                children: [],
                                value: 'callback1',
                                params: [],
                              },
                            ],
                            todoOptions: ['compId', 'valueList'],
                            options: {
                              compId: 'TreeSelect_838942',
                              compLib: 'comm',
                              pageJsonId: '8851423',
                              compName: 'TreeSelect',
                              id: '858019',
                              valueList: {
                                TreeSelect_838942: '$state.sceneCode$',
                              },
                            },
                            actionObjId: 'TreeSelect_838942',
                            actionObjName: 'TreeSelect',
                            value: 'setValue',
                            compLib: 'comm',
                            line_number: 10,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        callback: [
                          {
                            type: 'setValue',
                            dataId: 169871819618958500,
                            options: {
                              compId: 'TreeSelect_838942',
                              compLib: 'comm',
                              pageJsonId: '8851423',
                              compName: 'TreeSelect',
                              id: '858019',
                              valueList: {
                                TreeSelect_838942: '$state.sceneCode$',
                              },
                            },
                            line_number: 10,
                            callback1: [],
                          },
                        ],
                      },
                    ],
                    line_number: 8,
                    callback1: [
                      {
                        type: 'setDisable',
                        dataId: 169871817204058140,
                        options: {
                          compId: ['TreeSelect_838942'],
                          compLib: 'comm',
                          pageJsonId: '8851423',
                          compName: 'TreeSelect',
                          id: '863746',
                          disabled: '',
                          compid: ['TreeSelect_838942'],
                        },
                        line_number: 9,
                      },
                    ],
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
    eventDataapiRequest401.params = [] || [];
    CMDGenerator(eventDataapiRequest401, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_8851423__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_8851423_1',
          uid: 'View_8851423_1',
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
        ref={(r: any) => (refs['View_8851423_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_134',
            uid: 'View_134',
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
          }}
          ref={(r: any) => (refs['View_134'] = r)}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_2998662'}
            $$componentItem={{
              id: 'Form_2998662',
              uid: 'Form_2998662',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_2998662'] = r)}
            {...injectData}
          >
            <Radio
              name={'是否覆盖上传'}
              radioType={'Radio'}
              optionMarginRight={0}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              formItemIndex={0}
              fieldName={'isCover'}
              defaultValue={'1'}
              tipIcon={{
                theme: 'outlined',
                type: 'question-circle',
                isIconFont: false,
              }}
              tipContent={'当场景下已经挂载文件时，可以选择覆盖上传覆盖原文件'}
              dataSource={[
                { id: '782244', label: '是', value: '1' },
                { id: '826755', label: '否', value: '0' },
              ]}
              $$componentItem={{
                id: 'Radio_5240295',
                uid: 'Radio_5240295',
                type: 'Radio',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Radio_5240295'] = r)}
              {...injectData}
            />
            <TreeSelect
              name={'场景名称'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              treeDefaultExpandAll={false}
              size={'default'}
              showSearch={true}
              treeData={[
                {
                  title: '第一列',
                  key: 'column1',
                  selectable: true,
                  value: 'column1',
                  label: '第一列',
                  $$isParent: true,
                  children: [
                    {
                      title: '第二列',
                      key: 'column2',
                      value: 'column2',
                      selectable: true,
                      label: '第二列',
                    },
                  ],
                },
              ]}
              formItemIndex={1}
              fieldName={'sceneName'}
              required={true}
              placeholder={'请选择'}
              allowClear={true}
              filter={'local'}
              $$componentItem={{
                id: 'TreeSelect_838942',
                uid: 'TreeSelect_838942',
                type: 'TreeSelect',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(value: any, label: any, extra: any) => {
                const eventDatasetDataSource172: any = [
                  {
                    type: 'setDataSource',
                    dataId: 167290979681136030,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '0937075',
                      pageJsonId: '8851423',
                      dataSourceId: 167288666822352260,
                      dataSourceName: 'pageInfo',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '884219',
                          code: 'sceneId',
                          name: '场景ID',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: {
                            type: ['context', '$extra.triggerNode.props.data$'],
                            hideAttr: false,
                            code: 'nodeId',
                          },
                        },
                        {
                          attrId: '186104',
                          code: 'filePath',
                          name: '文件在低代码路径',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '509838',
                          code: 'fileId',
                          name: '文件ID',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '708125',
                          code: 'fileTemplateName',
                          name: '文件模板名称',
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
                eventDatasetDataSource172.params =
                  [
                    { title: '节点key', name: 'value', value: '$value$' },
                    { title: '节点名称', name: 'label', value: '$label$' },
                    {
                      title: '节点数据',
                      name: 'extra',
                      value: '$extra.triggerNode.props.data$',
                      attrType: 'object',
                    },
                  ] || [];
                CMDGenerator(
                  eventDatasetDataSource172,
                  { value, label, extra },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['TreeSelect_838942'] = r)}
              {...injectData}
            />
            <StdUpload
              name={'文件模板'}
              uploadStyle={'click'}
              listType={'text'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              fileNameEncode={false}
              isWatermark={false}
              optionalFile={false}
              fileName={'file'}
              selfSpan={24}
              labelCol={8}
              wrapperCol={16}
              acceptType={[]}
              withCredentials={true}
              numberLimit={1}
              singleFileMaxSize={50}
              uploadText={'点击上传'}
              uploadTimeout={30000}
              deleteIcon={{
                deleteIconTheme: 'outlined',
                deleteIconType: 'delete',
                deleteIconIsIconFont: false,
                showRemoveIcon: true,
              }}
              downloadIcon={{
                downloadIconTheme: 'outlined',
                downloadIconType: 'download',
                downloadIconIsIconFont: false,
                showDownloadIcon: true,
              }}
              previewIcon={{
                previewIconTheme: 'outlined',
                previewIconType: 'eye',
                previewIconIsIconFont: false,
                showPreviewIcon: true,
              }}
              formItemIndex={2}
              fieldName={'fileTemplate'}
              required={true}
              icon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              uploadAccepType={{ accept: '.xls,.xlsx', acceptExtension: '' }}
              $$componentItem={{
                id: 'StdUpload_0332275',
                uid: 'StdUpload_0332275',
                type: 'StdUpload',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onFinishUpload={(
                file: any,
                fileList: any,
                fileResponseList: any,
                fileId: any,
                fileSize: any,
                fileName: any,
                fileResponse: any,
              ) => {
                const eventDatacustomActionCode650: any = [
                  {
                    type: 'customActionCode',
                    dataId: 167288601963080000,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '076707',
                      pageJsonId: '8851423',
                      code: 'function main(data,state,success,fail){var _fileList$,_fileList$$response,_fileList$$response$r,_file,_file$response,_file$response$result;var filePath=(_fileList$=fileList[0])===null||_fileList$===void 0?void 0:(_fileList$$response=_fileList$.response)===null||_fileList$$response===void 0?void 0:(_fileList$$response$r=_fileList$$response.resultObject)===null||_fileList$$response$r===void 0?void 0:_fileList$$response$r.filePathInServer;success({filePath:filePath,fileId:(_file=file)===null||_file===void 0?void 0:(_file$response=_file.response)===null||_file$response===void 0?void 0:(_file$response$result=_file$response.resultObject)===null||_file$response$result===void 0?void 0:_file$response$result.fileId,fileTemplateName:fileList[0].name})};',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 168725215933355500,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '062314',
                          pageJsonId: '8851423',
                          value: ['$data_076707$', '成功回调值：'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'setDataSource',
                        dataId: 167288670666660900,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '1249347',
                          pageJsonId: '8851423',
                          dataSourceId: 167288666822352260,
                          dataSourceName: 'pageInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '884219',
                              code: 'sceneId',
                              name: '场景ID',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '186104',
                              code: 'filePath',
                              name: '文件在低代码路径',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$data_076707$'],
                                code: 'filePath',
                              },
                            },
                            {
                              attrId: '509838',
                              code: 'fileId',
                              name: '文件ID',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$data_076707$'],
                                code: 'fileId',
                              },
                            },
                            {
                              attrId: '708125',
                              code: 'fileTemplateName',
                              name: '文件模板名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['context', '$data_076707$'],
                                code: 'fileTemplateName',
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
                            dataId: 168725218438874430,
                            options: {
                              compId: 'debug',
                              compName: 'system',
                              id: '4075507',
                              pageJsonId: '8851423',
                              value: ['$data.pageInfo$', '数据源'],
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
                eventDatacustomActionCode650.params =
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
                  eventDatacustomActionCode650,
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
                ); // console 167288620849034370
                console.log(fileList);
              }}
              ref={(r: any) => (refs['StdUpload_0332275'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Wenjianmubanxinzeng3140$$Modal, {
  pageId: '928103651163254784',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', isCover: '', sceneId: '' },
});
