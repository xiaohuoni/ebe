// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Select,
  StdUpload,
  Text,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '974149396524412928';
const BusiComp186748$$BusiComp: React.FC<PageProps> = ({
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
  useEffect(() => {
    // console 168240878934557380
    console.log('=====附件-业务组件-state====', state);
    const eventDataapiRequest6: any = [
      {
        type: 'apiRequest',
        dataId: 167152268689055970,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '17204',
          pageJsonId: '537892',
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
              dataKey: '088178_header',
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '088178_path',
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '088178_query',
              key: '2',
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
                  dataKey: '088178_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  dataKey: '088178_body.attrCode',
                  value: { type: ['customize'], code: 'attachmentType' },
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '088178_body',
              key: '3',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167152270454824200,
            shielding: true,
            options: {
              compId:
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              compLib: 'comm',
              pageJsonId: '0521965',
              compName: 'Select',
              id: '888989',
              data: '$reply_17204?.resultData$',
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
    eventDataapiRequest6.params = [] || [];
    CMDGenerator(eventDataapiRequest6, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest7: any = [
      {
        type: 'apiRequest',
        dataId: 168240757894171260,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '943764',
          pageJsonId: '537892',
          sync: false,
          actionTitle: '查询附件类型下拉列表',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'eccQrySceneAttrValueList',
          _apiCode: 'eccQrySceneAttrValueList',
          _source: 'rhin',
          _sourceName:
            '(ecc核心)根据场景编码和规格属性编码查询全部规格属性值列表',
          _serviceId: '966520199271391232',
          _serviceTitle:
            '(ecc核心)根据场景编码和规格属性编码查询全部规格属性值列表: eccQrySceneAttrValueList',
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
                  dataKey: '943764_root.header',
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
                  dataKey: '943764_root.path',
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
                  dataKey: '943764_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'sceneCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.sceneCode',
                      compType: 'Input',
                      name: 'sceneCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-6',
                      id: 'root.body.sceneCode',
                      dataKey: '943764_root.body.sceneCode',
                    },
                    {
                      code: 'sceneNbr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.sceneNbr',
                      compType: 'Input',
                      name: 'sceneNbr',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-7',
                      id: 'root.body.sceneNbr',
                      dataKey: '943764_root.body.sceneNbr',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
                    },
                    {
                      code: 'attrName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrName',
                      compType: 'Input',
                      name: 'attrName',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-8',
                      id: 'root.body.attrName',
                      dataKey: '943764_root.body.attrName',
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
                      key: '0-3-0',
                      id: 'root.body.attrCode',
                      dataKey: '943764_root.body.attrCode',
                      value: { type: ['customize'], code: 'attachmentType' },
                    },
                    {
                      code: 'attrNbr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrNbr',
                      compType: 'Input',
                      name: 'attrNbr',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.attrNbr',
                      dataKey: '943764_root.body.attrNbr',
                    },
                    {
                      code: 'isMatrixAttr',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.isMatrixAttr',
                      compType: 'Input',
                      name: 'isMatrixAttr',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                      id: 'root.body.isMatrixAttr',
                      dataKey: '943764_root.body.isMatrixAttr',
                    },
                    {
                      code: 'pageNum',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'root.body.pageNum',
                      compType: 'Input',
                      name: 'pageNum',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-3',
                      id: 'root.body.pageNum',
                      dataKey: '943764_root.body.pageNum',
                    },
                    {
                      code: 'pageSize',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'root.body.pageSize',
                      compType: 'Input',
                      name: 'pageSize',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-4',
                      id: 'root.body.pageSize',
                      dataKey: '943764_root.body.pageSize',
                    },
                    {
                      code: 'sceneNbrList',
                      attrType: 'fieldArray',
                      mustFlag: 'F',
                      children: [
                        {
                          code: 'listItem',
                          name: '列表元素',
                          attrType: 'field',
                          type: 'object',
                          _id: 'root.body.sceneNbrList.listItem',
                          compType: 'Input',
                          parents: ['root', 'body', 'sceneNbrList'],
                          parentType: 'fieldArray',
                          parentKey: '0-3-5',
                          key: '0-3-5-0',
                          parentCode: 'sceneNbrList',
                          id: 'root.body.sceneNbrList.listItem',
                          dataKey: '943764_root.body.sceneNbrList.listItem',
                        },
                      ],
                      _id: 'root.body.sceneNbrList',
                      compType: 'Input',
                      name: 'sceneNbrList',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-5',
                      id: 'root.body.sceneNbrList',
                      dataKey: '943764_root.body.sceneNbrList',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '943764_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '943764_root',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168240767314022850,
            options: {
              compId:
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              compLib: 'comm',
              pageJsonId: '0521965',
              compName: 'Select',
              id: '506831',
              data: '$reply_943764?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest7.params = [] || [];
    CMDGenerator(eventDataapiRequest7, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse7: any = [
      {
        type: 'ifelse',
        shielding: true,
        condition: [
          {
            condId: '5772046',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.orderStatus$',
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
              context: '$state.orderStatus$',
              operate: '==',
              manualValue: 'P',
            },
            condId: '7141',
            connector: '||',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
          {
            options: {
              useManual: true,
              useObject: false,
              context: '$state.orderStatus$',
              operate: '==',
              manualValue: 'U',
            },
            condId: '24629',
            connector: '||',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167236663560619300,
        elseIfs: [],
        line_number: 6,
        callback1: [
          {
            type: 'sysSetVisible',
            dataId: 167236666739016670,
            shielding: true,
            options: {
              compId: [
                'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
              ],
              compName: 'page',
              id: '983377',
              pageJsonId: '0521965',
              visible: '',
              compid: [
                'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
              ],
            },
            line_number: 7,
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '54618',
                options: { context: '$state.fileList$', operate: 'empty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167236728954065820,
            elseIfs: [],
            line_number: 8,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 167236732172441100,
                shielding: true,
                options: {
                  compId: ['Table_125878'],
                  compName: 'page',
                  id: '8718214',
                  pageJsonId: '0521965',
                  visible: '',
                  compid: ['Table_125878'],
                },
                line_number: 9,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse7.params = [] || [];
    CMDGenerator(eventDataifelse7, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatasetDataSource1: any = [
      {
        type: 'setDataSource',
        dataId: 167236740319941300,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '847438',
          pageJsonId: '0521965',
          dataSourceId: 167152610959573820,
          dataSourceName: 'fileInfoList',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '880491',
              code: 'fileName',
              name: '附件名称',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '860614',
              code: 'filePath',
              name: '附件文件路径',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '348429',
              code: 'fileServerType',
              name: '附件文件服务器类型',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '97801',
              code: 'fileSubType',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '2270309',
              code: 'fileUrl',
              name: '附件url地址',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '849423',
              code: 'tacheCode',
              name: '环节编码',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '454732',
              code: 'fileCode',
              name: '文件编码',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '871705',
              code: 'createTime',
              name: '创建时间',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '7430117',
              code: 'createStaff',
              name: '创建人',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '623253',
              code: 'fileTypeName',
              name: '附件类型',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '463037307',
              code: 'fileType',
              name: '附件分类-大类',
              type: 'string',
              initialData: { type: 'static' },
            },
          ],
          newData: '$state.fileList$',
          operateType: 3,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 10,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource1.params = [] || [];
    CMDGenerator(eventDatasetDataSource1, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    });
    const eventDataapiRequest8: any = [
      {
        type: 'apiRequest',
        dataId: 168240870638822850,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '875263',
          pageJsonId: '9704152',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'eccDraftMng',
          _apiCode: 'eccDraftMng',
          _source: 'rhin',
          _sourceName: '(ecc核心)获取起草人信息',
          _serviceId: '966523303257677824',
          _serviceTitle: '(ecc核心)获取起草人信息: eccDraftMng',
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
                  dataKey: '609745_root.header',
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
                  dataKey: '609745_root.path',
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
                  dataKey: '609745_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'applyTime',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.applyTime',
                      compType: 'Input',
                      name: 'applyTime',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-10',
                      id: 'root.body.applyTime',
                      dataKey: '609745_root.body.applyTime',
                    },
                    {
                      code: 'areaId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.areaId',
                      compType: 'Input',
                      name: 'areaId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-9',
                      id: 'root.body.areaId',
                      dataKey: '609745_root.body.areaId',
                    },
                    {
                      code: 'areaName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.areaName',
                      compType: 'Input',
                      name: 'areaName',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-13',
                      id: 'root.body.areaName',
                      dataKey: '609745_root.body.areaName',
                    },
                    {
                      code: 'coding',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.coding',
                      compType: 'Input',
                      name: 'coding',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-12',
                      id: 'root.body.coding',
                      dataKey: '609745_root.body.coding',
                    },
                    {
                      code: 'isNetStaff',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.isNetStaff',
                      compType: 'Input',
                      name: 'isNetStaff',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-15',
                      id: 'root.body.isNetStaff',
                      dataKey: '609745_root.body.isNetStaff',
                    },
                    {
                      code: 'lanId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.lanId',
                      compType: 'Input',
                      name: 'lanId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-14',
                      id: 'root.body.lanId',
                      dataKey: '609745_root.body.lanId',
                    },
                    {
                      code: 'lanName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.lanName',
                      compType: 'Input',
                      name: 'lanName',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.lanName',
                      dataKey: '609745_root.body.lanName',
                    },
                    {
                      code: 'orgShortName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.orgShortName',
                      compType: 'Input',
                      name: 'orgShortName',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-3',
                      id: 'root.body.orgShortName',
                      dataKey: '609745_root.body.orgShortName',
                    },
                    {
                      code: 'staffCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.staffCode',
                      compType: 'Input',
                      name: 'staffCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-2',
                      id: 'root.body.staffCode',
                      dataKey: '609745_root.body.staffCode',
                    },
                    {
                      code: 'staffId',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.staffId',
                      compType: 'Input',
                      name: 'staffId',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-8',
                      id: 'root.body.staffId',
                      dataKey: '609745_root.body.staffId',
                    },
                    {
                      code: 'staffName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.staffName',
                      compType: 'Input',
                      name: 'staffName',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-7',
                      id: 'root.body.staffName',
                      dataKey: '609745_root.body.staffName',
                    },
                    {
                      code: 'staffOrg',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.staffOrg',
                      compType: 'Input',
                      name: 'staffOrg',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-11',
                      id: 'root.body.staffOrg',
                      dataKey: '609745_root.body.staffOrg',
                    },
                    {
                      code: 'staffTel',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.staffTel',
                      compType: 'Input',
                      name: 'staffTel',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-5',
                      id: 'root.body.staffTel',
                      dataKey: '609745_root.body.staffTel',
                    },
                    {
                      code: 'userBelongType',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.userBelongType',
                      compType: 'Input',
                      name: 'userBelongType',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-4',
                      id: 'root.body.userBelongType',
                      dataKey: '609745_root.body.userBelongType',
                    },
                    {
                      code: 'zoneCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.zoneCode',
                      compType: 'Input',
                      name: 'zoneCode',
                      parents: ['root', 'body'],
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-6',
                      id: 'root.body.zoneCode',
                      dataKey: '609745_root.body.zoneCode',
                    },
                    {
                      code: 'roleCode',
                      name: 'roleCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      defaultValue: '',
                      _id: 'root.body.roleCode',
                      compType: 'Input',
                      parents: ['root', 'body'],
                      parentType: 'object',
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
                  dataKey: '609745_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '609745_root',
            },
          ],
          actionTitle: '起草人信息',
        },
        line_number: 11,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168240872008359170,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '5861571',
              pageJsonId: '0521965',
              dataSourceId: 167645195103769800,
              dataSourceName: 'pageParam',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '178022',
                  code: 'createStaff',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['context', '$reply_875263?.resultData.staffName$'],
                    code: '',
                    hideAttr: true,
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 12,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest8.params = [] || [];
    CMDGenerator(eventDataapiRequest8, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest9: any = [
      {
        type: 'apiRequest',
        dataId: 167703266248804220,
        shielding: true,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '82504',
          pageJsonId: '0521965',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'gainDraftMsg',
          _apiCode: 'gainDraftMsg',
          _source: 'rhin',
          _serviceId: '874490760619208704',
          _serviceTitle: '获取起草人信息-hdb: gainDraftMsg',
          params: 'object',
          _sourceName: '获取起草人信息-hdb',
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
                  dataKey: '82504_root.header',
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
                  dataKey: '82504_root.path',
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
                  dataKey: '82504_root.query',
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
                  dataKey: '82504_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '82504_root',
            },
          ],
        },
        line_number: 13,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167703271265702660,
            shielding: true,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '9917663',
              pageJsonId: '0521965',
              dataSourceId: 167645195103769800,
              dataSourceName: 'pageParam',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '178022',
                  code: 'createStaff',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_82504.resultData.staffName$',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 14,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 167703282086636640,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '7409377',
              pageJsonId: '0521965',
              value: ['$reply_82504$'],
            },
            line_number: 15,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest9.params = [] || [];
    CMDGenerator(eventDataapiRequest9, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse8: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '4660226',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.isShowTemplate$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167765572935815170,
        elseIfs: [],
        line_number: 16,
        callback1: [
          {
            type: 'setVisible',
            dataId: 167765576494286850,
            options: {
              compId: 'Button_8469743',
              compLib: 'comm',
              pageJsonId: '0521965',
              compName: 'Button',
              id: '897634',
              visible: 'true',
            },
            line_number: 17,
          },
        ],
      },
    ];
    eventDataifelse8.params = [] || [];
    CMDGenerator(eventDataifelse8, {}, 'ifelse', {
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
      className="__CustomClass_186748__"
    >
      <View
        className="View_View_834125"
        name={'布局容器'}
        backgroundType={{ type: 'cleanColor', color: '#f7f8fa' }}
        $$componentItem={{
          id: 'View_834125',
          uid: 'View_834125',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_834125')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={6}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={12}
          rowSpace={16}
          formCode={'Form_395851'}
          backgroundType={{
            type: 'cleanColor',
            color: 'rgba(247, 248, 250, 1)',
          }}
          $$componentItem={{
            id: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
            uid: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
          ref={(r: any) =>
            refs.setComponentRef(
              r,
              'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
            )
          }
          {...injectData}
        >
          <Select
            name={'附件'}
            size={'default'}
            selfSpan={6}
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
              id: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              uid: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              )
            }
            {...injectData}
          />
          <View
            className="View_View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_9310839"
            name={'布局容器'}
            labelCol={8}
            wrapperCol={16}
            backgroundType={{ type: 'cleanColor', color: '#f7f8fa' }}
            $$componentItem={{
              id: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_9310839',
              uid: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_9310839',
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
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_9310839',
              )
            }
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
              uploadText={'文件上传'}
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
              tipIcon={{
                type: 'question-circle',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              tipContent={'最大上次大小'}
              icon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_40249',
                uid: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_40249',
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
                const eventDataifelse19: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '81120545',
                        options: {
                          context: '$file?.response?.resultObject?.fileId$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167152681867968260,
                    elseIfs: [],
                    line_number: 1,
                    callback1: [
                      {
                        type: 'getSelectedData',
                        dataId: 167152683359227140,
                        options: {
                          compId:
                            'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
                          compLib: 'comm',
                          pageJsonId: '0521965',
                          compName: 'Select',
                          id: '640253',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setDataSource',
                            dataId: 167152683359200900,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '548571',
                              pageJsonId: '537892',
                              dataSourceId: 167152610959573820,
                              dataSourceName: 'fileInfoList',
                              dataSourceRelType: 'custom',
                              dataSourceReloadFilter: [],
                              dataSourceSetValue: [
                                {
                                  attrId: '880491',
                                  code: 'fileName',
                                  name: '附件名称',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['context', '$file?.name$'],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '860614',
                                  code: 'filePath',
                                  name: '附件文件路径',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '348429',
                                  code: 'fileServerType',
                                  name: '附件文件服务器类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '97801',
                                  code: 'fileSubType',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                },
                                {
                                  attrId: '2270309',
                                  code: 'fileUrl',
                                  name: '附件url地址',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$file?.response?.resultObject?.filePathInServer$',
                                  },
                                },
                                {
                                  attrId: '849423',
                                  code: 'tacheCode',
                                  name: '环节编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$state.tacheCode$',
                                  },
                                },
                                {
                                  attrId: '454732',
                                  code: 'fileCode',
                                  name: '文件编码',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: [
                                      'context',
                                      '$file?.response?.resultObject?.fileId$',
                                    ],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '871705',
                                  code: 'createTime',
                                  name: '创建时间',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$file?.response?.resultObject?.statusDate$',
                                  },
                                },
                                {
                                  attrId: '7430117',
                                  code: 'createStaff',
                                  name: '创建人',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$data.pageParam.createStaff$',
                                  },
                                },
                                {
                                  attrId: '623253',
                                  code: 'fileTypeName',
                                  name: '附件类型',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_640253[0].label$',
                                  },
                                },
                                {
                                  attrId: '463037307',
                                  code: 'fileType',
                                  name: '附件分类-大类',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_640253[0].value$',
                                  },
                                },
                              ],
                              operateType: 0,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'callParentCustomFunc',
                                dataId: 167153023821392130,
                                options: {
                                  compId: 'callParentCustomFunc',
                                  compName: 'system',
                                  id: '121603',
                                  pageJsonId: '0521965',
                                  pathname: '/yunnan_common_event_container',
                                  pageId: '973774364945940480',
                                  modalPath: '/yunnan_common_event_container',
                                  customFuncName: 'sceneFileUpload',
                                  customFuncParams: '$data.fileInfoList$',
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
                eventDataifelse19.params =
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
                  eventDataifelse19,
                  { file, fileList, fileId, fileSize, fileName, fileResponse },
                  'ifelse',
                  {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  },
                );
              }}
              onListenUploading={(
                file: any,
                fileList: any,
                fileId: any,
                fileSize: any,
                fileName: any,
                fileResponse: any,
              ) => {
                const eventDatacustomActionCode11: any = [
                  {
                    type: 'customActionCode',
                    dataId: 166192905624837500,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '5697634',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode11.params =
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
                  eventDatacustomActionCode11,
                  { file, fileList, fileId, fileSize, fileName, fileResponse },
                  'customActionCode',
                  {
                    id: 'customActionCode',
                    name: 'customActionCode',
                    type: 'customActionCode',
                    platform: 'pc',
                  },
                );
              }}
              onCheckUpload={() => {
                const eventDatagetSelectedData3: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 167282045114744320,
                    options: {
                      compId:
                        'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
                      compLib: 'comm',
                      pageJsonId: '0521965',
                      compName: 'Select',
                      id: '6790626',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 167349109195087360,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '88392',
                          pageJsonId: '0521965',
                          type: 'error',
                          value: '请选择附件类型！',
                        },
                        line_number: 2,
                      },
                      {
                        type: 'return',
                        dataId: 167282045906701950,
                        options: {
                          compId: 'return',
                          compName: 'system',
                          id: '344968',
                          pageJsonId: '0521965',
                          returnType: 'failure',
                        },
                        line_number: 3,
                      },
                    ],
                  },
                ];
                eventDatagetSelectedData3.params = [] || [];
                CMDGenerator(eventDatagetSelectedData3, {}, 'getSelectedData', {
                  id: 'getSelectedData',
                  name: 'getSelectedData',
                  type: 'getSelectedData',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_40249',
                )
              }
              {...injectData}
            />
            <Text
              name={'文本'}
              content={'最大上传50M'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_701669',
                uid: 'Text_701669',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: 12,
                lineHeight: '24px',
                color: 'rgba(251, 18, 5, 1)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_701669')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_952946"
            name={'布局容器'}
            labelCol={8}
            wrapperCol={16}
            backgroundType={{ type: 'cleanColor', color: '#f7f8fa' }}
            $$componentItem={{
              id: 'View_952946',
              uid: 'View_952946',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_952946')}
            {...injectData}
          />
          <View
            className="View_View_282318"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: '#f7f8fa' }}
            $$componentItem={{
              id: 'View_282318',
              uid: 'View_282318',
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
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
              textAlign: 'right',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_282318')}
            {...injectData}
          >
            <Button
              name={'模板下载'}
              shape={null}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              type={'primary'}
              formItemIndex={3}
              labelCol={8}
              wrapperCol={16}
              icon={{
                type: 'download',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              iconType={'download'}
              hasIcon={true}
              $$componentItem={{
                id: 'Button_8469743',
                uid: 'Button_8469743',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 30px 0px 0px' }}
              onClick={(e: any) => {
                const eventDataapiRequest17: any = [
                  {
                    type: 'apiRequest',
                    dataId: 167765557740671600,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '817175',
                      pageJsonId: '0521965',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'getDcFileTemplateByCatalogCode',
                      _apiCode: 'getDcFileTemplateByCatalogCode',
                      _source: 'rhin',
                      _serviceId: '948113497661403136',
                      _serviceTitle:
                        '根据场景编码获取模板信息: getDcFileTemplateByCatalogCode',
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
                          dataKey: '817175_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          children: [
                            {
                              code: 'catalogCode',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'T',
                              defaultValue: '',
                              _id: 'path.catalogCode',
                              compType: 'Input',
                              parents: ['path'],
                              id: 'path.catalogCode',
                              dataKey: '817175_path.catalogCode',
                              value: {
                                type: ['context', '$state.catalogCode$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '817175_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '817175_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '817175_body',
                        },
                      ],
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'downloadByFileId',
                        dataId: 167765565890283700,
                        options: {
                          compId: 'downloadByFileId',
                          compName: 'system',
                          id: '532905',
                          pageJsonId: '0521965',
                          data: '$reply_817175?.resultData.fileId$',
                        },
                        line_number: 2,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest17.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest17, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_8469743')}
              {...injectData}
            />
          </View>
        </Form>
        <Table
          name={'表格'}
          isFlexColumn={false}
          extendNum={3}
          adjustModel={'auto'}
          pageSize={10}
          current={1}
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
              title: '附件名称',
              key: 'fileName',
              dataIndex: 'fileName',
              className: '',
              id: '883964',
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
              id: '160235',
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
              id: '255388',
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
              id: '068395',
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
          customNum={3}
          formItemIndex={0}
          labelCol={8}
          wrapperCol={16}
          dataSource={data?.fileInfoList}
          rowKey={'fileCode'}
          rowActions={[
            {
              title: '删除',
              iconPos: 'left',
              icon: { theme: 'outlined', type: 'delete' },
              type: 'delete',
              id: '648461',
              rule: 'state.orderStatus !== "M"',
              checked: true,
            },
          ]}
          extend={[
            {
              id: '385847',
              title: '下载',
              iconPos: 'left',
              icon: {
                type: 'download',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              },
              checked: true,
            },
          ]}
          dataSourceFromDataSourceConfig={'data.fileInfoList'}
          $$componentItem={{
            id: 'Table_125878',
            uid: 'Table_125878',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          onRowDelete={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode12: any = [
              {
                type: 'customActionCode',
                dataId: 167153035178204580,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '368337',
                  pageJsonId: '0521965',
                  code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}success(newFileInfoList)};',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 167153038462980130,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '756846',
                      pageJsonId: '0521965',
                      dataSourceId: 167152610959573820,
                      dataSourceName: 'fileInfoList',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '880491',
                          code: 'fileName',
                          name: '附件名称',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '860614',
                          code: 'filePath',
                          name: '附件文件路径',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '348429',
                          code: 'fileServerType',
                          name: '附件文件服务器类型',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '97801',
                          code: 'fileSubType',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '2270309',
                          code: 'fileUrl',
                          name: '附件url地址',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '849423',
                          code: 'tacheCode',
                          name: '环节编码',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '454732',
                          code: 'fileCode',
                          name: '文件编码',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '871705',
                          code: 'createTime',
                          name: '创建时间',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '7430117',
                          code: 'createStaff',
                          name: '创建人',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '623253',
                          code: 'fileTypeName',
                          name: '附件类型',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '463037307',
                          code: 'fileType',
                          name: '附件分类-大类',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      newData: '$data_368337$',
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 167153039376645000,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '6094173',
                          pageJsonId: '0521965',
                          pathname: '/CLS_TY_0001_0001copy1',
                          pageId: '911894076591796224',
                          modalPath: '/CLS_TY_0001_0001copy1',
                          customFuncName: 'fileUpload',
                          customFuncParams: '$data.fileInfoList$',
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
            eventDatacustomActionCode12.params =
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
              eventDatacustomActionCode12,
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
            const eventDatadownloadByFileId3: any = [
              {
                type: 'downloadByFileId',
                dataId: 167153043640615460,
                options: {
                  compId: 'downloadByFileId',
                  compName: 'system',
                  id: '250574',
                  pageJsonId: '0521965',
                  data: '$rowId$',
                },
                line_number: 1,
              },
            ];
            eventDatadownloadByFileId3.params =
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
              eventDatadownloadByFileId3,
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
          ref={(r: any) => refs.setComponentRef(r, 'Table_125878')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(BusiComp186748$$BusiComp, {
  pageId,
  hasLogin: true,
  defaultState: {
    catalogCode: '',
    orderStatus: '',
    fileList: '',
    isShowTemplate: '',
  },
});
