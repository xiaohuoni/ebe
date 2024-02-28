// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  VerticalView,
  Card,
  Table,
  Form,
  Select,
  Input,
  StdUpload,
  Button,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '881842702843727872';
const Jzpzfgxlcwjzys$$Page: React.FC<PageProps> = ({
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
  const onTable = (options_7601354: any) => {
    const eventDatareloadDataSource22: any = [
      {
        type: 'reloadDataSource',
        dataId: 166660674933674700,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '345488',
          pageJsonId: '8962853',
          dataSourceId: 166657021836131230,
          dataSourceName: 'qryPageApproveMatrixByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '1837883',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '3705077',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '9802671',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '6808088',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '424503',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '176956',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: ['context', '$options_7601354$'], code: '' },
                },
                {
                  attrId: '0613168',
                  code: 'lanId',
                  name: 'lanId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.lanId',
                },
                {
                  attrId: '325559',
                  code: 'matrixTitle',
                  name: 'matrixTitle',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.matrixTitle',
                },
                {
                  attrId: '125356',
                  code: 'sceneId',
                  name: 'sceneId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.sceneId',
                  value: { type: ['context', '$state.sceneId$'], code: '' },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '126528',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '2792394',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '318142',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '290629',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '99609',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '050477',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '366282',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '401349',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '4787188',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '059292',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '4746306',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '3647863',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '455956',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '218053',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '537915',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '3464396',
                      code: 'specialLanFlowCode',
                      name: 'specialLanFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9060815',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '082086',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '25702',
                      code: 'importantApproveGradeDesc',
                      name: 'importantApproveGradeDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '466429',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '159058',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5280372',
                      code: 'matrixTitle',
                      name: 'matrixTitle',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '216058',
                      code: 'approveMatrixId',
                      name: 'approveMatrixId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '448918',
                      code: 'sceneId',
                      name: 'sceneId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '395631',
                      code: 'specialImportantFlowCode',
                      name: 'specialImportantFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '570532',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '27371',
                      code: 'cfgVersion',
                      name: 'cfgVersion',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '574722',
                      code: 'lanApproveGrade',
                      name: 'lanApproveGrade',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '596533',
                      code: 'calcTranslate',
                      name: 'calcTranslate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '289655',
                      code: 'areaApproveGrade',
                      name: 'areaApproveGrade',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '2443072',
                      code: 'areaApproveGradeDesc',
                      name: 'areaApproveGradeDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '400373',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '615069',
                      code: 'calcView',
                      name: 'calcView',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '808502',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '80336',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '5043396',
                      code: 'calcExpress',
                      name: 'calcExpress',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '043748',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '840671',
                      code: 'importantApproveGrade',
                      name: 'importantApproveGrade',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0445125',
                      code: 'specialAreaFlowCode',
                      name: 'specialAreaFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '672303',
                      code: 'lanApproveGradeDesc',
                      name: 'lanApproveGradeDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '85776',
                      code: 'updateStaff',
                      name: 'updateStaff',
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
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource22.params =
      [
        {
          title: '事件入参',
          name: 'options_7601354',
          value: '$options_7601354$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource22,
      { options_7601354 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const forms5 = getFormByCompId('Form_525664', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms5) ? forms5 : [forms5]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetDisable10: any = [
      {
        type: 'setDisable',
        dataId: 166677606814020060,
        options: {
          compId: 'Form_525664',
          compLib: 'comm',
          pageJsonId: '8962853',
          compName: 'Form',
          id: '5546406',
          disabled: 'true',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable10.params =
      [
        {
          title: '事件入参',
          name: 'options_7601354',
          value: '$options_7601354$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable10, { options_7601354 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable11: any = [
      {
        type: 'setDisable',
        dataId: 166677607283241020,
        options: {
          compId: ['Button_228244', 'Button_774397'],
          compLib: 'comm',
          pageJsonId: '8962853',
          compName: 'Button',
          id: '213865',
          disabled: 'true',
          compid: ['Button_228244', 'Button_774397'],
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable11.params =
      [
        {
          title: '事件入参',
          name: 'options_7601354',
          value: '$options_7601354$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable11, { options_7601354 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    onTable,
  }));

  useEffect(() => {
    // console 167599604718265060
    console.log('数据检查', state?.sceneCode);
    const eventDataapiRequest394: any = [
      {
        type: 'apiRequest',
        dataId: 167887997376780860,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '48949',
          pageJsonId: '8962853',
          sync: false,
          actionTitle: '查询是否有动作功能权限',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryHasPrivilege',
          _apiCode: 'qryHasPrivilege',
          _source: 'rhin',
          _serviceId: '952926171550470144',
          _serviceTitle: '查询是否有权限-tsm: qryHasPrivilege',
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
              dataKey: '48949_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '48949_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '48949_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'privilegeCodes',
                  name: '权限编码数组，格式：["A","B"]',
                  attrType: 'fieldArray',
                  mustFlag: 'F',
                  children: [
                    {
                      code: 'listItem',
                      name: '列表元素',
                      attrType: 'field',
                      type: 'object',
                      _id: 'body.privilegeCodes.listItem',
                      compType: 'Input',
                      parents: ['body', 'privilegeCodes'],
                      id: 'body.privilegeCodes.listItem',
                      dataKey: '48949_body.privilegeCodes.listItem',
                    },
                  ],
                  _id: 'body.privilegeCodes',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.privilegeCodes',
                  dataKey: '48949_body.privilegeCodes',
                  value: {
                    type: ['customize'],
                    code: '["F_MATRIX_CONFIG_MANAGE_ADD","F_MATRIX_CONFIG_MANAGE_MODIFY","F_MATRIX_CONFIG_MANAGE_DELETE"]',
                  },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '48949_body',
            },
          ],
          _sourceName: '查询是否有权限-tsm',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167888001542024930,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '870758',
              pageJsonId: '2695813',
              dataSourceId: 167888007916568740,
              dataSourceName: 'privilege_vars',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '851689',
                  code: 'add',
                  name: '属性',
                  type: 'boolean',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_48949?.resultData.F_MATRIX_CONFIG_MANAGE_ADD$',
                  },
                },
                {
                  attrId: '864831',
                  code: 'modify',
                  name: '属性',
                  type: 'boolean',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_48949?.resultData.F_MATRIX_CONFIG_MANAGE_MODIFY$',
                  },
                },
                {
                  attrId: '690707',
                  code: 'delete',
                  name: '属性',
                  type: 'boolean',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_48949?.resultData.F_MATRIX_CONFIG_MANAGE_DELETE$',
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
    eventDataapiRequest394.params = [] || [];
    CMDGenerator(eventDataapiRequest394, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse209: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '869951',
            options: { context: '$state.sceneCode$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166677739092543300,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167273851756201760,
            children: [
              {
                dataName: 'action',
                dataId: 167273852887248060,
                children: [],
                todoOptions: ['valueArray'],
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '990951',
                  pageJsonId: '8962853',
                  value: ['场景编码为空'],
                },
                actionObjId: 'debug',
                actionObjName: 'system',
                value: 'console',
                line_number: 17,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'console',
                dataId: 167273852887248060,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '990951',
                  pageJsonId: '8962853',
                  value: ['场景编码为空'],
                },
                line_number: 17,
              },
            ],
          },
        ],
        line_number: 4,
        callback1: [
          {
            type: 'console',
            dataId: 167599597593555140,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '3077876',
              pageJsonId: '8962853',
              value: ['场景编码不为空'],
            },
            line_number: 5,
          },
          {
            type: 'apiRequest',
            dataId: 166677742351749300,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '0512316',
              pageJsonId: '8962853',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'qryApproveLevelByCatalogCode',
              _apiCode: 'qryApproveLevelByCatalogCode',
              _source: 'rhin',
              _serviceId: '882250373078822912',
              _serviceTitle:
                '根据场景编码查询指定流程编码带有等级的环节信息-tsm: qryApproveLevelByCatalogCode',
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
                  dataKey: '5954463_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  children: [
                    {
                      code: 'catalogCode',
                      name: '场景编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'T',
                      defaultValue: '',
                      _id: 'path.catalogCode',
                      compType: 'Input',
                      parents: ['path'],
                      id: 'path.catalogCode',
                      dataKey: '5954463_path.catalogCode',
                      value: {
                        type: ['context', '$state.sceneCode$'],
                        code: '',
                      },
                    },
                  ],
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '5954463_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '5954463_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '5954463_body',
                },
              ],
              actionTitle: '根据场景编码获得对应的流程下的环节数据',
              _sourceName: '根据场景编码查询指定流程编码带有等级的环节信息-tsm',
            },
            line_number: 6,
            callback1: [
              {
                type: 'console',
                dataId: 166677742351888450,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '9509856',
                  pageJsonId: '8962853',
                  value: ['$reply_0512316?.resultData$'],
                },
                line_number: 7,
              },
              {
                type: 'reloadSelectData',
                dataId: 166677742351894880,
                options: {
                  compId: 'Select_7001807',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '8049012',
                  data: '$reply_0512316?.resultData.importantTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 8,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167161594658166460,
                options: {
                  compId: 'Select_5550348_105134',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '7154',
                  data: '$reply_0512316?.resultData.importantTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 9,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 166677742351832450,
                options: {
                  compId: 'Select_054638_545555',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '83405685',
                  data: '$reply_0512316?.resultData.cityTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 10,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167161598813727870,
                options: {
                  compId: 'Select_974786_126187',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '1201265',
                  data: '$reply_0512316?.resultData.cityTacheList$',
                  valueKey: 'approveGrade',
                  labelKey: 'tacheName',
                },
                line_number: 11,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 166677742351808770,
                options: {
                  compId: 'Select_054638_888308',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '719075',
                  data: '$reply_0512316?.resultData.countyTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 12,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167161604529520930,
                options: {
                  compId: 'Select_401873_394985',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '968324',
                  data: '$reply_0512316?.resultData.countyTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 13,
                callback1: [],
              },
              {
                type: 'reloadColServiceData',
                dataId: 166677742351835140,
                options: {
                  compId: 'Table_474002',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Table',
                  id: '176993',
                  colName: 'importantApproveGrade',
                  data: '$reply_0512316?.resultData.importantTacheList$',
                },
                line_number: 14,
              },
              {
                type: 'reloadColServiceData',
                dataId: 166677742351868320,
                options: {
                  compId: 'Table_474002',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Table',
                  id: '622264',
                  colName: 'lanApproveGrade',
                  data: '$reply_0512316?.resultData.cityTacheList$',
                },
                line_number: 15,
              },
              {
                type: 'reloadColServiceData',
                dataId: 166677742351886100,
                options: {
                  compId: 'Table_474002',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Table',
                  id: '485999',
                  colName: 'areaApproveGrade',
                  data: '$reply_0512316?.resultData.countyTacheList$',
                },
                line_number: 16,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse209.params = [] || [];
    CMDGenerator(eventDataifelse209, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {
    const eventDataifelse207: any = [
      {
        type: 'ifelse',
        shielding: true,
        condition: [
          {
            condId: '076063',
            options: { context: '$data.local_vars$', operate: 'empty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166677525295464400,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166677570260133630,
            children: [
              {
                dataName: 'condition',
                dataId: 166677618323015840,
                children: [],
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166677625618661500,
                    children: [
                      {
                        dataName: 'condition',
                        dataId: 166677626334906340,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166677626334927520,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166677626334946140,
                                children: [],
                                value: 'callback1',
                                params: [],
                                shielding: true,
                              },
                              {
                                dataName: 'callback',
                                dataId: 166677626334906530,
                                children: [],
                                value: 'callback2',
                                params: [],
                                shielding: true,
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '1239998',
                              pageJsonId: '8962853',
                              customFuncName: 'onTable',
                              customFuncParams: 'object',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                            shielding: true,
                            line_number: 5,
                          },
                        ],
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166677626334993900,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166677626334981500,
                                children: [],
                                todoOptions: ['valueArray'],
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '236344',
                                  pageJsonId: '8962853',
                                  value: ['不相等哦'],
                                },
                                actionObjId: 'debug',
                                actionObjName: 'system',
                                value: 'console',
                                shielding: true,
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            desc: '不相等',
                            shielding: true,
                            callback: [
                              {
                                type: 'console',
                                dataId: 166677626334981500,
                                shielding: true,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '236344',
                                  pageJsonId: '8962853',
                                  value: ['不相等哦'],
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                        condition: [
                          {
                            condId: '593531',
                            options: {
                              useManual: false,
                              useObject: true,
                              objType: 'system',
                              objId: 'sys',
                              objOperate: 'setSysState',
                              stateVal: '$state.nodeObj.data.isExclusiveFlow$',
                              context: '$data.local_vars.isExclusiveFlow$',
                              operate: '==',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: false,
                              useObject: true,
                              objType: 'system',
                              objId: 'sys',
                              objOperate: 'setSysState',
                              stateVal:
                                '$state.nodeObj.data.isContainsMatrixAttr$',
                              context: '$data.local_vars.isContainsMatrixAttr$',
                              operate: '==',
                            },
                            condId: '880243',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '是否个性流程+是否包含矩阵要素【相等】',
                        shielding: true,
                        line_number: 4,
                      },
                    ],
                    condition: [],
                    desc: '负责是确定同子页面切换',
                    shielding: true,
                    callback: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '593531',
                            options: {
                              useManual: false,
                              useObject: true,
                              objType: 'system',
                              objId: 'sys',
                              objOperate: 'setSysState',
                              stateVal: '$state.nodeObj.data.isExclusiveFlow$',
                              context: '$data.local_vars.isExclusiveFlow$',
                              operate: '==',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: false,
                              useObject: true,
                              objType: 'system',
                              objId: 'sys',
                              objOperate: 'setSysState',
                              stateVal:
                                '$state.nodeObj.data.isContainsMatrixAttr$',
                              context: '$data.local_vars.isContainsMatrixAttr$',
                              operate: '==',
                            },
                            condId: '880243',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166677626334906340,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166677626334993900,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166677626334981500,
                                children: [],
                                todoOptions: ['valueArray'],
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '236344',
                                  pageJsonId: '8962853',
                                  value: ['不相等哦'],
                                },
                                actionObjId: 'debug',
                                actionObjName: 'system',
                                value: 'console',
                                shielding: true,
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            desc: '不相等',
                            shielding: true,
                            callback: [
                              {
                                type: 'console',
                                dataId: 166677626334981500,
                                shielding: true,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '236344',
                                  pageJsonId: '8962853',
                                  value: ['不相等哦'],
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166677626334927520,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '1239998',
                              pageJsonId: '8962853',
                              customFuncName: 'onTable',
                              customFuncParams: 'object',
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
                condition: [
                  {
                    condId: '227619',
                    options: { context: '$state.nodeObj$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '组件nodeObje为空，说明即将调到其他子页面',
                shielding: true,
                line_number: 3,
              },
            ],
            condition: [],
            desc: '可能同子页面的数据切换需要进一步判断',
            shielding: true,
            callback: [
              {
                type: 'ifelse',
                shielding: true,
                condition: [
                  {
                    condId: '227619',
                    options: { context: '$state.nodeObj$', operate: 'empty' },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166677618323015840,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166677625618661500,
                    children: [
                      {
                        dataName: 'condition',
                        dataId: 166677626334906340,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 166677626334927520,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 166677626334946140,
                                children: [],
                                value: 'callback1',
                                params: [],
                                shielding: true,
                              },
                              {
                                dataName: 'callback',
                                dataId: 166677626334906530,
                                children: [],
                                value: 'callback2',
                                params: [],
                                shielding: true,
                              },
                            ],
                            todoOptions: ['customFuncName', 'customFuncParams'],
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '1239998',
                              pageJsonId: '8962853',
                              customFuncName: 'onTable',
                              customFuncParams: 'object',
                            },
                            actionObjId: 'callSelfFunc',
                            actionObjName: 'system',
                            value: 'callSelfFunc',
                            shielding: true,
                            line_number: 5,
                          },
                        ],
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166677626334993900,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166677626334981500,
                                children: [],
                                todoOptions: ['valueArray'],
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '236344',
                                  pageJsonId: '8962853',
                                  value: ['不相等哦'],
                                },
                                actionObjId: 'debug',
                                actionObjName: 'system',
                                value: 'console',
                                shielding: true,
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            desc: '不相等',
                            shielding: true,
                            callback: [
                              {
                                type: 'console',
                                dataId: 166677626334981500,
                                shielding: true,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '236344',
                                  pageJsonId: '8962853',
                                  value: ['不相等哦'],
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                        condition: [
                          {
                            condId: '593531',
                            options: {
                              useManual: false,
                              useObject: true,
                              objType: 'system',
                              objId: 'sys',
                              objOperate: 'setSysState',
                              stateVal: '$state.nodeObj.data.isExclusiveFlow$',
                              context: '$data.local_vars.isExclusiveFlow$',
                              operate: '==',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: false,
                              useObject: true,
                              objType: 'system',
                              objId: 'sys',
                              objOperate: 'setSysState',
                              stateVal:
                                '$state.nodeObj.data.isContainsMatrixAttr$',
                              context: '$data.local_vars.isContainsMatrixAttr$',
                              operate: '==',
                            },
                            condId: '880243',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '是否个性流程+是否包含矩阵要素【相等】',
                        shielding: true,
                        line_number: 4,
                      },
                    ],
                    condition: [],
                    desc: '负责是确定同子页面切换',
                    shielding: true,
                    callback: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '593531',
                            options: {
                              useManual: false,
                              useObject: true,
                              objType: 'system',
                              objId: 'sys',
                              objOperate: 'setSysState',
                              stateVal: '$state.nodeObj.data.isExclusiveFlow$',
                              context: '$data.local_vars.isExclusiveFlow$',
                              operate: '==',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: false,
                              useObject: true,
                              objType: 'system',
                              objId: 'sys',
                              objOperate: 'setSysState',
                              stateVal:
                                '$state.nodeObj.data.isContainsMatrixAttr$',
                              context: '$data.local_vars.isContainsMatrixAttr$',
                              operate: '==',
                            },
                            condId: '880243',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166677626334906340,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166677626334993900,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166677626334981500,
                                children: [],
                                todoOptions: ['valueArray'],
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '236344',
                                  pageJsonId: '8962853',
                                  value: ['不相等哦'],
                                },
                                actionObjId: 'debug',
                                actionObjName: 'system',
                                value: 'console',
                                shielding: true,
                                line_number: 6,
                              },
                            ],
                            condition: [],
                            desc: '不相等',
                            shielding: true,
                            callback: [
                              {
                                type: 'console',
                                dataId: 166677626334981500,
                                shielding: true,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '236344',
                                  pageJsonId: '8962853',
                                  value: ['不相等哦'],
                                },
                                line_number: 6,
                              },
                            ],
                          },
                        ],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 166677626334927520,
                            shielding: true,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '1239998',
                              pageJsonId: '8962853',
                              customFuncName: 'onTable',
                              customFuncParams: 'object',
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
                line_number: 3,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'callSelfFunc',
            dataId: 166677574421231070,
            shielding: true,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '638676',
              pageJsonId: '8962853',
              customFuncName: 'onTable',
              customFuncParams: 'object',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse207.params = [] || [];
    CMDGenerator(eventDataifelse207, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc36: any = [
      {
        type: 'callSelfFunc',
        dataId: 166677797949721800,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '1957',
          pageJsonId: '8962853',
          customFuncName: 'onTable',
          customFuncParams: 'object',
        },
        line_number: 7,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc36.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc36, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataifelse208: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '869951',
            options: { context: '$state.sceneCode$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167936665539894940,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167936665539878240,
            children: [
              {
                dataName: 'action',
                dataId: 167936665539859070,
                children: [],
                todoOptions: ['valueArray'],
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '809835',
                  pageJsonId: '8962853',
                  value: ['场景编码为空'],
                },
                actionObjId: 'debug',
                actionObjName: 'system',
                value: 'console',
                line_number: 21,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'console',
                dataId: 167936665539859070,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '809835',
                  pageJsonId: '8962853',
                  value: ['场景编码为空'],
                },
                line_number: 21,
              },
            ],
          },
        ],
        line_number: 8,
        callback1: [
          {
            type: 'console',
            dataId: 167936665539860960,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '760082',
              pageJsonId: '8962853',
              value: ['场景编码不为空'],
            },
            line_number: 9,
          },
          {
            type: 'apiRequest',
            dataId: 167936665539849760,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '9506995',
              pageJsonId: '8962853',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'qryApproveLevelByCatalogCode',
              _apiCode: 'qryApproveLevelByCatalogCode',
              _source: 'rhin',
              _serviceId: '882250373078822912',
              _serviceTitle:
                '根据场景编码查询指定流程编码带有等级的环节信息-tsm: qryApproveLevelByCatalogCode',
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
                  dataKey: '5954463_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  children: [
                    {
                      code: 'catalogCode',
                      name: '场景编码',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'T',
                      defaultValue: '',
                      _id: 'path.catalogCode',
                      compType: 'Input',
                      parents: ['path'],
                      id: 'path.catalogCode',
                      dataKey: '5954463_path.catalogCode',
                      value: {
                        type: ['context', '$state.sceneCode$'],
                        code: '',
                      },
                    },
                  ],
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '5954463_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '5954463_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '5954463_body',
                },
              ],
              actionTitle: '根据场景编码获得对应的流程下的环节数据',
              _sourceName: '根据场景编码查询指定流程编码带有等级的环节信息-tsm',
            },
            line_number: 10,
            callback1: [
              {
                type: 'console',
                dataId: 167936665539810050,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '444412',
                  pageJsonId: '8962853',
                  value: ['$reply_9506995?.resultData$'],
                },
                line_number: 11,
              },
              {
                type: 'reloadSelectData',
                dataId: 167936665539817920,
                options: {
                  compId: 'Select_7001807',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '3505486',
                  data: '$reply_9506995?.resultData.importantTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 12,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167936665539886530,
                options: {
                  compId: 'Select_5550348_105134',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '922902',
                  data: '$reply_9506995?.resultData.importantTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 13,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167936665539837950,
                options: {
                  compId: 'Select_054638_545555',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '643707',
                  data: '$reply_9506995?.resultData.cityTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 14,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167936665539859680,
                options: {
                  compId: 'Select_974786_126187',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '5264733',
                  data: '$reply_9506995?.resultData.cityTacheList$',
                  valueKey: 'approveGrade',
                  labelKey: 'tacheName',
                },
                line_number: 15,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167936665539815580,
                options: {
                  compId: 'Select_054638_888308',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '6752409',
                  data: '$reply_9506995?.resultData.countyTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 16,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167936665539875970,
                options: {
                  compId: 'Select_401873_394985',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Select',
                  id: '0455217',
                  data: '$reply_9506995?.resultData.countyTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 17,
                callback1: [],
              },
              {
                type: 'reloadColServiceData',
                dataId: 167936665539812700,
                options: {
                  compId: 'Table_474002',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Table',
                  id: '75982',
                  colName: 'importantApproveGrade',
                  data: '$reply_9506995?.resultData.importantTacheList$',
                },
                line_number: 18,
              },
              {
                type: 'reloadColServiceData',
                dataId: 167936665539820640,
                options: {
                  compId: 'Table_474002',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Table',
                  id: '627421',
                  colName: 'lanApproveGrade',
                  data: '$reply_9506995?.resultData.cityTacheList$',
                },
                line_number: 19,
              },
              {
                type: 'reloadColServiceData',
                dataId: 167936665539823260,
                options: {
                  compId: 'Table_474002',
                  compLib: 'comm',
                  pageJsonId: '8962853',
                  compName: 'Table',
                  id: '134487',
                  colName: 'areaApproveGrade',
                  data: '$reply_9506995?.resultData.countyTacheList$',
                },
                line_number: 20,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse208.params = [] || [];
    CMDGenerator(eventDataifelse208, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_8962853__"
    >
      <View
        className="View_View_8962853_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_8962853_1',
          uid: 'View_8962853_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '20px 20px 20px 20px',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_8962853_1')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_3750722',
            uid: 'VerticalView_3750722',
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
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_3750722')}
          {...injectData}
        >
          <View
            className="View_View_5799455"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_5799455',
              uid: 'View_5799455',
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
              height: '30%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_5799455')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'审批矩阵列表'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
              extend={[
                {
                  id: '299948',
                  title: '新增矩阵',
                  iconPos: 'left',
                  btnType: 'primary',
                  rule: !data?.privilege_vars?.add,
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
                id: 'Card_069175',
                uid: 'Card_069175',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              onClickBtn1={(e: any) => {
                const eventDatagetTableData6: any = [
                  {
                    type: 'getTableData',
                    dataId: 166671089390385000,
                    options: {
                      compId: 'Table_474002',
                      compLib: 'comm',
                      pageJsonId: '8962853',
                      compName: 'Table',
                      id: '6905395',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '140917',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$tableData_6905395.length$',
                              operate: '>=',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166671089390323300,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166671089390365250,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166671089390380600,
                                children: [],
                                todoOptions: ['disabled'],
                                options: {
                                  compId: 'Form_525664',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Form',
                                  id: '0367456',
                                },
                                actionObjId: 'Form_525664',
                                actionObjName: 'Form',
                                value: 'setDisable',
                                compLib: 'comm',
                                line_number: 4,
                              },
                              {
                                dataName: 'action',
                                dataId: 166671089390346940,
                                children: [],
                                todoOptions: ['disabled'],
                                options: {
                                  compId: 'Button_228244',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Button',
                                  id: '283916',
                                },
                                actionObjId: 'Button_228244',
                                actionObjName: 'Button',
                                value: 'setDisable',
                                compLib: 'comm',
                                line_number: 5,
                              },
                              {
                                dataName: 'action',
                                dataId: 166671089390369630,
                                children: [],
                                todoOptions: ['disabled'],
                                options: {
                                  compId: 'Button_774397',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Button',
                                  id: '25537',
                                },
                                actionObjId: 'Button_774397',
                                actionObjName: 'Button',
                                value: 'setDisable',
                                compLib: 'comm',
                                line_number: 6,
                              },
                              {
                                dataName: 'action',
                                dataId: 166671089390302900,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166671089390300200,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166671089390363040,
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
                                  id: '788099',
                                  pageJsonId: '8962853',
                                  dataSourceId: 166204132724319460,
                                  dataSourceName: 'local_vars',
                                  dataSourceRelType: 'custom',
                                  dataSourceReloadFilter: [],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '577955',
                                      code: 'operType',
                                      name: '操作类型',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['customize'],
                                        code: 'add',
                                      },
                                    },
                                  ],
                                  operateType: 1,
                                  onlySetPatch: true,
                                  otherObjectArrayOptions: {},
                                },
                                actionObjId: 'setDataSource',
                                actionObjName: 'page',
                                value: 'setDataSource',
                                line_number: 7,
                              },
                            ],
                            condition: [],
                            desc: '表格没数据',
                            callback: [
                              {
                                type: 'setDisable',
                                dataId: 166671089390380600,
                                options: {
                                  compId: 'Form_525664',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Form',
                                  id: '0367456',
                                },
                                line_number: 4,
                              },
                              {
                                type: 'setDisable',
                                dataId: 166671089390346940,
                                options: {
                                  compId: 'Button_228244',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Button',
                                  id: '283916',
                                },
                                line_number: 5,
                              },
                              {
                                type: 'setDisable',
                                dataId: 166671089390369630,
                                options: {
                                  compId: 'Button_774397',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Button',
                                  id: '25537',
                                },
                                line_number: 6,
                              },
                              {
                                type: 'setDataSource',
                                dataId: 166671089390302900,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '788099',
                                  pageJsonId: '8962853',
                                  dataSourceId: 166204132724319460,
                                  dataSourceName: 'local_vars',
                                  dataSourceRelType: 'custom',
                                  dataSourceReloadFilter: [],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '577955',
                                      code: 'operType',
                                      name: '操作类型',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['customize'],
                                        code: 'add',
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
                        line_number: 2,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166671089390363650,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '858889',
                              pageJsonId: '8962853',
                              type: 'info',
                              value: '该类审批只需配置一次审批等级！',
                            },
                            line_number: 3,
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetTableData6.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatagetTableData6, { e }, 'getTableData', {
                  id: 'getTableData',
                  name: 'getTableData',
                  type: 'getTableData',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_069175')}
              {...injectData}
            >
              <Table
                name={'矩阵表格'}
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
                    title: '矩阵标识',
                    key: 'approveMatrixId',
                    dataIndex: 'approveMatrixId',
                    className: '',
                    id: '2608817',
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
                    title: '省份',
                    key: 'provinceId',
                    dataIndex: 'provinceId',
                    className: 'divider',
                    id: '650341',
                    staticDataSource: attrDataMap['PROVINCE_CODE'],
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
                    title: '地市',
                    key: 'lanId',
                    dataIndex: 'lanId',
                    className: 'divider',
                    id: '19791',
                    hiddenRule: true,
                    staticDataSource: attrDataMap['CITY_CODE'],
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
                    title: '省重客审批等级',
                    key: 'importantApproveGrade',
                    dataIndex: 'importantApproveGrade',
                    id: '682641',
                    staticService: {
                      labelKey: 'tacheName',
                      valueKey: 'approveGrade',
                    },
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
                    title: '地市审批等级',
                    key: 'lanApproveGrade',
                    dataIndex: 'lanApproveGrade',
                    className: 'divider',
                    id: '6275207',
                    sorter: false,
                    align: 'left',
                    staticService: {
                      labelKey: 'tacheName',
                      valueKey: 'approveGrade',
                    },
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
                    title: '区县审批等级',
                    key: 'areaApproveGrade',
                    dataIndex: 'areaApproveGrade',
                    className: 'divider',
                    id: '277584',
                    staticService: {
                      labelKey: 'tacheName',
                      valueKey: 'approveGrade',
                    },
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
                    title: '状态',
                    key: 'statusCd',
                    dataIndex: 'statusCd',
                    className: 'divider',
                    id: '377686',
                    staticDataSource: attrDataMap['STATUS_CD'],
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
                    key: 'createStaffName',
                    dataIndex: 'createStaffName',
                    className: 'divider',
                    id: '2121983',
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
                    key: 'createDate',
                    dataIndex: 'createDate',
                    className: 'divider',
                    id: '4013075',
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
                rowKey={'approveMatrixId'}
                dataSource={
                  data?.qryPageApproveMatrixByReq?.resultData?.records
                }
                rowActions={[
                  {
                    title: '详情',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'file-search' },
                    type: 'detail',
                    id: '805003',
                    checked: true,
                  },
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '861633',
                    rule: '!data.privilege_vars.modify',
                    checked: true,
                  },
                ]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.qryPageApproveMatrixByReq.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_474002',
                  uid: 'Table_474002',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues24: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166204303117645540,
                      options: {
                        compId: 'Form_525664',
                        compLib: 'comm',
                        pageJsonId: '8962853',
                        compName: 'Form',
                        id: '6537173',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues24.params =
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
                    eventDatasetCurrentFormValues24,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                }}
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatasetDataSource168: any = [
                    {
                      type: 'setDataSource',
                      dataId: 166204311675653860,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '093938',
                        pageJsonId: '8962853',
                        dataSourceId: 166204132724319460,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '577955',
                            code: 'operType',
                            name: '操作类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'mod' },
                          },
                          {
                            attrId: '180308',
                            code: 'isExclusiveFlow',
                            name: '是否个性化流程',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '641477',
                            code: 'isContainsMatrixAttr',
                            name: '是否包含矩阵要素',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setCurrentFormValues',
                          dataId: 166204314764268030,
                          options: {
                            compId: 'Form_525664',
                            compLib: 'comm',
                            pageJsonId: '8962853',
                            compName: 'Form',
                            id: '312098',
                            params: '$row$',
                          },
                          line_number: 2,
                        },
                        {
                          type: 'setDisable',
                          dataId: 166204316426880130,
                          options: {
                            compId: 'Form_525664',
                            compLib: 'comm',
                            pageJsonId: '8962853',
                            compName: 'Form',
                            id: '579695',
                          },
                          line_number: 3,
                        },
                        {
                          type: 'setDisable',
                          dataId: 166204316862500480,
                          options: {
                            compId: 'Button_228244',
                            compLib: 'comm',
                            pageJsonId: '8962853',
                            compName: 'Button',
                            id: '436828',
                          },
                          line_number: 4,
                        },
                        {
                          type: 'setDisable',
                          dataId: 166204317053073800,
                          options: {
                            compId: 'Button_774397',
                            compLib: 'comm',
                            pageJsonId: '8962853',
                            compName: 'Button',
                            id: '057368',
                          },
                          line_number: 5,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatasetDataSource168.params =
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
                    eventDatasetDataSource168,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                }}
                onRowClick={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues25: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166253296058915300,
                      options: {
                        compId: 'Form_525664',
                        compLib: 'comm',
                        pageJsonId: '8962853',
                        compName: 'Form',
                        id: '4102585',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues25.params =
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
                    eventDatasetCurrentFormValues25,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Table_474002')}
                {...injectData}
              />
            </Card>
          </View>
          <View
            className="View_View_5325441"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_5325441',
              uid: 'View_5325441',
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
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_5325441')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'审批矩阵详情'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
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
                id: 'Card_0097989',
                uid: 'Card_0097989',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_0097989')}
              {...injectData}
            >
              <Form
                name={'矩阵表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_525664'}
                $$componentItem={{
                  id: 'Form_525664',
                  uid: 'Form_525664',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_525664')}
                {...injectData}
              >
                <Select
                  name={'归属省份'}
                  size={'default'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={true}
                  filter={'none'}
                  classification={'default'}
                  placeholder={'请选择'}
                  formItemIndex={0}
                  fieldName={'provinceId'}
                  defaultValue={'350000'}
                  dataSource={attrDataMap['PROVINCE_CODE']}
                  $$componentItem={{
                    id: 'Select_054638',
                    uid: 'Select_054638',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_054638')}
                  {...injectData}
                />
                <View
                  className="View_View_6931347"
                  name={'布局容器'}
                  labelCol={8}
                  wrapperCol={16}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_6931347',
                    uid: 'View_6931347',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_6931347')}
                  {...injectData}
                />
                <View
                  className="View_View_7104536"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_7104536',
                    uid: 'View_7104536',
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
                    display: 'block',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_7104536')}
                  {...injectData}
                />
                <Select
                  name={'省重客流程终点'}
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
                  formItemIndex={3}
                  fieldName={'importantApproveGrade'}
                  $$componentItem={{
                    id: 'Select_7001807',
                    uid: 'Select_7001807',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_7001807')}
                  {...injectData}
                />
                <Select
                  name={'地市流程终点'}
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
                  formItemIndex={4}
                  fieldName={'lanApproveGrade'}
                  $$componentItem={{
                    id: 'Select_054638_545555',
                    uid: 'Select_054638_545555',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Select_054638_545555')
                  }
                  {...injectData}
                />
                <Select
                  name={'区县流程终点'}
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
                  formItemIndex={5}
                  fieldName={'areaApproveGrade'}
                  $$componentItem={{
                    id: 'Select_054638_888308',
                    uid: 'Select_054638_888308',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Select_054638_888308')
                  }
                  {...injectData}
                />
                <Select
                  name={'省重客审批级别'}
                  size={'default'}
                  selfSpan={''}
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
                  formItemIndex={6}
                  fieldName={'importantApproveViewGrade'}
                  $$componentItem={{
                    id: 'Select_5550348_105134',
                    uid: 'Select_5550348_105134',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Select_5550348_105134')
                  }
                  {...injectData}
                />
                <Select
                  name={'地市审批级别'}
                  size={'default'}
                  selfSpan={''}
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
                  formItemIndex={7}
                  fieldName={'lanApproveViewGrade'}
                  $$componentItem={{
                    id: 'Select_974786_126187',
                    uid: 'Select_974786_126187',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Select_974786_126187')
                  }
                  {...injectData}
                />
                <Select
                  name={'区县审批级别'}
                  size={'default'}
                  selfSpan={''}
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
                  formItemIndex={8}
                  fieldName={'areaApproveViewGrade'}
                  $$componentItem={{
                    id: 'Select_401873_394985',
                    uid: 'Select_401873_394985',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Select_401873_394985')
                  }
                  {...injectData}
                />
                <Input
                  name={'省重客审批级别描述'}
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
                  formItemIndex={9}
                  fieldName={'importantApproveGradeDesc'}
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
                    id: 'Input_65351',
                    uid: 'Input_65351',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_65351')}
                  {...injectData}
                />
                <Input
                  name={'地市审批级别描述'}
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
                  formItemIndex={10}
                  fieldName={'lanApproveGradeDesc'}
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
                    id: 'Input_3732907',
                    uid: 'Input_3732907',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_3732907')}
                  {...injectData}
                />
                <Input
                  name={'区县审批级别描述'}
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
                  formItemIndex={11}
                  fieldName={'areaApproveGradeDesc'}
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
                    id: 'Input_62901966',
                    uid: 'Input_62901966',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_62901966')}
                  {...injectData}
                />
                <Select
                  name={'矩阵通过类型'}
                  size={'default'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  required={true}
                  filter={'none'}
                  classification={'default'}
                  placeholder={'请选择'}
                  formItemIndex={12}
                  fieldName={'matrixPassType'}
                  defaultValue={'1001'}
                  dataSource={[
                    { id: '341377983', label: '可配置', value: '1001' },
                  ]}
                  $$componentItem={{
                    id: 'Select_304001_788286',
                    uid: 'Select_304001_788286',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  style={{ flex: '' }}
                  onChange={(e: any) => {
                    const eventDatacallSelfFunc476: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167152893261828320,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '715838',
                          pageJsonId: '2695813',
                          customFuncName: 'matrixPassTypeChange',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc476.params =
                      [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc476,
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
                    refs.setComponentRef(r, 'Select_304001_788286')
                  }
                  {...injectData}
                />
                <StdUpload
                  name={'附件'}
                  uploadStyle={'click'}
                  listType={'text'}
                  titleTip={'notext'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  fileNameEncode={false}
                  isWatermark={false}
                  optionalFile={false}
                  fileName={'file'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  acceptType={[
                    '.jpg,.jpeg,.png,.pdf,.tiff,.swf',
                    '.txt,.doc,.xls,.ppt,.docx,.xlsx,.pptx',
                  ]}
                  withCredentials={true}
                  numberLimit={1}
                  singleFileMaxSize={50}
                  uploadText={'点击上传'}
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
                  formItemIndex={13}
                  fieldName={'file'}
                  icon={{
                    type: undefined,
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  uploadAccepType={{
                    accept:
                      '.jpg,.jpeg,.png,.pdf,.tiff,.swf,.txt,.doc,.xls,.ppt,.docx,.xlsx,.pptx',
                  }}
                  $$componentItem={{
                    id: 'StdUpload_841197',
                    uid: 'StdUpload_841197',
                    type: 'StdUpload',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'StdUpload_841197')}
                  {...injectData}
                />
                <Select
                  name={'归属地市'}
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
                  placeholder={'请选择'}
                  formItemIndex={14}
                  fieldName={'lanId'}
                  allowClear={true}
                  dataSource={attrDataMap['CITY_CODE']}
                  $$componentItem={{
                    id: 'Select_371905',
                    uid: 'Select_371905',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_371905')}
                  {...injectData}
                />
                <Input
                  name={'矩阵ID'}
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
                  formItemIndex={15}
                  fieldName={'approveMatrixId'}
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
                    id: 'Input_130373',
                    uid: 'Input_130373',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_130373')}
                  {...injectData}
                />
              </Form>
              <View
                className="View_View_08951614"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_08951614',
                  uid: 'View_08951614',
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
                  margin: '20px 0px 0px 0px',
                  textAlign: 'center',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_08951614')}
                {...injectData}
              >
                <Button
                  name={'确定'}
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
                    id: 'Button_228244',
                    uid: 'Button_228244',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                  onClick={(e: any) => {
                    const eventDataifelse486: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '500012',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$data.local_vars.operType$',
                              operate: '==',
                              manualValue: 'add',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166204137285217100,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166204143470891500,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166204362014079500,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166204362014015040,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166204384269587040,
                                        children: [],
                                        todoOptions: ['msgType', 'value'],
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '956603',
                                          pageJsonId: '8962853',
                                          type: 'success',
                                          value: '审批矩阵修改成功！',
                                        },
                                        actionObjId: 'showMessage',
                                        actionObjName: 'system',
                                        value: 'showMessage',
                                        elseIfs: [],
                                        line_number: 9,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166204388928002750,
                                        children: [],
                                        todoOptions: [],
                                        options: {
                                          compId: 'Form_525664',
                                          compLib: 'comm',
                                          pageJsonId: '8962853',
                                          compName: 'Form',
                                          id: '59458',
                                        },
                                        actionObjId: 'Form_525664',
                                        actionObjName: 'Form',
                                        value: 'resetCurrentForm',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 10,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166204389281133980,
                                        children: [],
                                        todoOptions: ['disabled'],
                                        options: {
                                          compId: 'Form_525664',
                                          compLib: 'comm',
                                          pageJsonId: '8962853',
                                          compName: 'Form',
                                          id: '2291672',
                                          disabled: 'true',
                                        },
                                        actionObjId: 'Form_525664',
                                        actionObjName: 'Form',
                                        value: 'setDisable',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 11,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166204389904447700,
                                        children: [],
                                        todoOptions: ['disabled'],
                                        options: {
                                          compId: 'Button_228244',
                                          compLib: 'comm',
                                          pageJsonId: '8962853',
                                          compName: 'Button',
                                          id: '54003',
                                          disabled: 'true',
                                        },
                                        actionObjId: 'Button_228244',
                                        actionObjName: 'Button',
                                        value: 'setDisable',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 12,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166204390419813540,
                                        children: [],
                                        todoOptions: ['disabled'],
                                        options: {
                                          compId: 'Button_774397',
                                          compLib: 'comm',
                                          pageJsonId: '8962853',
                                          compName: 'Button',
                                          id: '5238403',
                                          disabled: 'true',
                                        },
                                        actionObjId: 'Button_774397',
                                        actionObjName: 'Button',
                                        value: 'setDisable',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 13,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 166211417830719260,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166211417830781000,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166211417830713440,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: [
                                          'customFuncName',
                                          'customFuncParams',
                                        ],
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '94409924',
                                          pageJsonId: '8962853',
                                          customFuncName: 'onTable',
                                          customFuncParams: 'object',
                                        },
                                        actionObjId: 'callSelfFunc',
                                        actionObjName: 'system',
                                        value: 'callSelfFunc',
                                        elseIfs: [],
                                        line_number: 14,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166204362014077150,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
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
                                  id: '1394051',
                                  pageJsonId: '8962853',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'modDcApproveMatrix',
                                  _apiCode: 'modDcApproveMatrix',
                                  _source: 'rhin',
                                  _serviceId: '882623077877710848',
                                  _serviceTitle:
                                    '审批矩阵修改-tsm: modDcApproveMatrix',
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
                                      dataKey: '1394051_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '1394051_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '1394051_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'provinceId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.provinceId',
                                          compType: 'Input',
                                          name: 'provinceId',
                                          parents: ['body'],
                                          id: 'body.provinceId',
                                          dataKey: '1394051_body.provinceId',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'provinceId',
                                          },
                                        },
                                        {
                                          code: 'specialAreaFlowCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.specialAreaFlowCode',
                                          compType: 'Input',
                                          name: 'specialAreaFlowCode',
                                          parents: ['body'],
                                          id: 'body.specialAreaFlowCode',
                                          dataKey:
                                            '1394051_body.specialAreaFlowCode',
                                        },
                                        {
                                          code: 'specialLanFlowCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.specialLanFlowCode',
                                          compType: 'Input',
                                          name: 'specialLanFlowCode',
                                          parents: ['body'],
                                          id: 'body.specialLanFlowCode',
                                          dataKey:
                                            '1394051_body.specialLanFlowCode',
                                        },
                                        {
                                          code: 'specialImportantFlowCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.specialImportantFlowCode',
                                          compType: 'Input',
                                          name: 'specialImportantFlowCode',
                                          parents: ['body'],
                                          id: 'body.specialImportantFlowCode',
                                          dataKey:
                                            '1394051_body.specialImportantFlowCode',
                                        },
                                        {
                                          code: 'lanApproveGrade',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.lanApproveGrade',
                                          compType: 'Input',
                                          name: 'lanApproveGrade',
                                          parents: ['body'],
                                          id: 'body.lanApproveGrade',
                                          dataKey:
                                            '1394051_body.lanApproveGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'lanApproveGrade',
                                          },
                                        },
                                        {
                                          code: 'areaApproveGrade',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.areaApproveGrade',
                                          compType: 'Input',
                                          name: 'areaApproveGrade',
                                          parents: ['body'],
                                          id: 'body.areaApproveGrade',
                                          dataKey:
                                            '1394051_body.areaApproveGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'areaApproveGrade',
                                          },
                                        },
                                        {
                                          code: 'lanApproveGradeDesc',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.lanApproveGradeDesc',
                                          compType: 'Input',
                                          name: 'lanApproveGradeDesc',
                                          parents: ['body'],
                                          id: 'body.lanApproveGradeDesc',
                                          dataKey:
                                            '1394051_body.lanApproveGradeDesc',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'lanApproveGradeDesc',
                                          },
                                        },
                                        {
                                          code: 'calcView',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.calcView',
                                          compType: 'Input',
                                          name: 'calcView',
                                          parents: ['body'],
                                          id: 'body.calcView',
                                          dataKey: '1394051_body.calcView',
                                        },
                                        {
                                          code: 'calcTranslate',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.calcTranslate',
                                          compType: 'Input',
                                          name: 'calcTranslate',
                                          parents: ['body'],
                                          id: 'body.calcTranslate',
                                          dataKey: '1394051_body.calcTranslate',
                                        },
                                        {
                                          code: 'importantApproveGradeDesc',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.importantApproveGradeDesc',
                                          compType: 'Input',
                                          name: 'importantApproveGradeDesc',
                                          parents: ['body'],
                                          id: 'body.importantApproveGradeDesc',
                                          dataKey:
                                            '1394051_body.importantApproveGradeDesc',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'importantApproveGradeDesc',
                                          },
                                        },
                                        {
                                          code: 'importantApproveGrade',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.importantApproveGrade',
                                          compType: 'Input',
                                          name: 'importantApproveGrade',
                                          parents: ['body'],
                                          id: 'body.importantApproveGrade',
                                          dataKey:
                                            '1394051_body.importantApproveGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'importantApproveGrade',
                                          },
                                        },
                                        {
                                          code: 'sceneId',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.sceneId',
                                          compType: 'Input',
                                          name: 'sceneId',
                                          parents: ['body'],
                                          id: 'body.sceneId',
                                          dataKey: '1394051_body.sceneId',
                                          value: {
                                            type: [
                                              'context',
                                              '$state.sceneId$',
                                            ],
                                            code: '',
                                          },
                                        },
                                        {
                                          code: 'approveMatrixId',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.approveMatrixId',
                                          compType: 'Input',
                                          name: 'approveMatrixId',
                                          parents: ['body'],
                                          id: 'body.approveMatrixId',
                                          dataKey:
                                            '1394051_body.approveMatrixId',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'approveMatrixId',
                                          },
                                        },
                                        {
                                          code: 'areaApproveGradeDesc',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.areaApproveGradeDesc',
                                          compType: 'Input',
                                          name: 'areaApproveGradeDesc',
                                          parents: ['body'],
                                          id: 'body.areaApproveGradeDesc',
                                          dataKey:
                                            '1394051_body.areaApproveGradeDesc',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'areaApproveGradeDesc',
                                          },
                                        },
                                        {
                                          code: 'lanId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.lanId',
                                          compType: 'Input',
                                          name: 'lanId',
                                          parents: ['body'],
                                          id: 'body.lanId',
                                          dataKey: '1394051_body.lanId',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'lanId',
                                          },
                                        },
                                        {
                                          code: 'remark',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.remark',
                                          compType: 'Input',
                                          name: 'remark',
                                          parents: ['body'],
                                          id: 'body.remark',
                                          dataKey: '1394051_body.remark',
                                        },
                                        {
                                          code: 'matrixPassType',
                                          name: '矩阵通过类型',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.matrixPassType',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.matrixPassType',
                                          dataKey:
                                            '1394051_body.matrixPassType',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'matrixPassType',
                                          },
                                        },
                                        {
                                          code: 'importantApproveViewGrade',
                                          name: '重客审批显示等级',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.importantApproveViewGrade',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.importantApproveViewGrade',
                                          dataKey:
                                            '1394051_body.importantApproveViewGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'importantApproveViewGrade',
                                          },
                                        },
                                        {
                                          code: 'lanApproveViewGrade',
                                          name: '地市审批显示等级',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.lanApproveViewGrade',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.lanApproveViewGrade',
                                          dataKey:
                                            '1394051_body.lanApproveViewGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'lanApproveViewGrade',
                                          },
                                        },
                                        {
                                          code: 'areaApproveViewGrade',
                                          name: '区县审批显示等级',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.areaApproveViewGrade',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.areaApproveViewGrade',
                                          dataKey:
                                            '1394051_body.areaApproveViewGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'areaApproveViewGrade',
                                          },
                                        },
                                        {
                                          code: 'calcExpress',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.calcExpress',
                                          compType: 'Input',
                                          name: 'calcExpress',
                                          parents: ['body'],
                                          id: 'body.calcExpress',
                                          dataKey: '1394051_body.calcExpress',
                                        },
                                        {
                                          code: 'matrixTitle',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.matrixTitle',
                                          compType: 'Input',
                                          name: 'matrixTitle',
                                          parents: ['body'],
                                          id: 'body.matrixTitle',
                                          dataKey: '1394051_body.matrixTitle',
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '1394051_body',
                                    },
                                  ],
                                },
                                actionObjId: 'apiRequest',
                                actionObjName: 'system',
                                value: 'apiRequest',
                                elseIfs: [],
                                line_number: 8,
                              },
                            ],
                            condition: [],
                            desc: 'operType = mod',
                            elseIfs: [],
                            callback: [
                              {
                                type: 'apiRequest',
                                dataId: 166204362014079500,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '1394051',
                                  pageJsonId: '8962853',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'modDcApproveMatrix',
                                  _apiCode: 'modDcApproveMatrix',
                                  _source: 'rhin',
                                  _serviceId: '882623077877710848',
                                  _serviceTitle:
                                    '审批矩阵修改-tsm: modDcApproveMatrix',
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
                                      dataKey: '1394051_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '1394051_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '1394051_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'provinceId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.provinceId',
                                          compType: 'Input',
                                          name: 'provinceId',
                                          parents: ['body'],
                                          id: 'body.provinceId',
                                          dataKey: '1394051_body.provinceId',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'provinceId',
                                          },
                                        },
                                        {
                                          code: 'specialAreaFlowCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.specialAreaFlowCode',
                                          compType: 'Input',
                                          name: 'specialAreaFlowCode',
                                          parents: ['body'],
                                          id: 'body.specialAreaFlowCode',
                                          dataKey:
                                            '1394051_body.specialAreaFlowCode',
                                        },
                                        {
                                          code: 'specialLanFlowCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.specialLanFlowCode',
                                          compType: 'Input',
                                          name: 'specialLanFlowCode',
                                          parents: ['body'],
                                          id: 'body.specialLanFlowCode',
                                          dataKey:
                                            '1394051_body.specialLanFlowCode',
                                        },
                                        {
                                          code: 'specialImportantFlowCode',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.specialImportantFlowCode',
                                          compType: 'Input',
                                          name: 'specialImportantFlowCode',
                                          parents: ['body'],
                                          id: 'body.specialImportantFlowCode',
                                          dataKey:
                                            '1394051_body.specialImportantFlowCode',
                                        },
                                        {
                                          code: 'lanApproveGrade',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.lanApproveGrade',
                                          compType: 'Input',
                                          name: 'lanApproveGrade',
                                          parents: ['body'],
                                          id: 'body.lanApproveGrade',
                                          dataKey:
                                            '1394051_body.lanApproveGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'lanApproveGrade',
                                          },
                                        },
                                        {
                                          code: 'areaApproveGrade',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.areaApproveGrade',
                                          compType: 'Input',
                                          name: 'areaApproveGrade',
                                          parents: ['body'],
                                          id: 'body.areaApproveGrade',
                                          dataKey:
                                            '1394051_body.areaApproveGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'areaApproveGrade',
                                          },
                                        },
                                        {
                                          code: 'lanApproveGradeDesc',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.lanApproveGradeDesc',
                                          compType: 'Input',
                                          name: 'lanApproveGradeDesc',
                                          parents: ['body'],
                                          id: 'body.lanApproveGradeDesc',
                                          dataKey:
                                            '1394051_body.lanApproveGradeDesc',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'lanApproveGradeDesc',
                                          },
                                        },
                                        {
                                          code: 'calcView',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.calcView',
                                          compType: 'Input',
                                          name: 'calcView',
                                          parents: ['body'],
                                          id: 'body.calcView',
                                          dataKey: '1394051_body.calcView',
                                        },
                                        {
                                          code: 'calcTranslate',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.calcTranslate',
                                          compType: 'Input',
                                          name: 'calcTranslate',
                                          parents: ['body'],
                                          id: 'body.calcTranslate',
                                          dataKey: '1394051_body.calcTranslate',
                                        },
                                        {
                                          code: 'importantApproveGradeDesc',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.importantApproveGradeDesc',
                                          compType: 'Input',
                                          name: 'importantApproveGradeDesc',
                                          parents: ['body'],
                                          id: 'body.importantApproveGradeDesc',
                                          dataKey:
                                            '1394051_body.importantApproveGradeDesc',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'importantApproveGradeDesc',
                                          },
                                        },
                                        {
                                          code: 'importantApproveGrade',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.importantApproveGrade',
                                          compType: 'Input',
                                          name: 'importantApproveGrade',
                                          parents: ['body'],
                                          id: 'body.importantApproveGrade',
                                          dataKey:
                                            '1394051_body.importantApproveGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'importantApproveGrade',
                                          },
                                        },
                                        {
                                          code: 'sceneId',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.sceneId',
                                          compType: 'Input',
                                          name: 'sceneId',
                                          parents: ['body'],
                                          id: 'body.sceneId',
                                          dataKey: '1394051_body.sceneId',
                                          value: {
                                            type: [
                                              'context',
                                              '$state.sceneId$',
                                            ],
                                            code: '',
                                          },
                                        },
                                        {
                                          code: 'approveMatrixId',
                                          attrType: 'field',
                                          type: 'long',
                                          mustFlag: 'F',
                                          _id: 'body.approveMatrixId',
                                          compType: 'Input',
                                          name: 'approveMatrixId',
                                          parents: ['body'],
                                          id: 'body.approveMatrixId',
                                          dataKey:
                                            '1394051_body.approveMatrixId',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'approveMatrixId',
                                          },
                                        },
                                        {
                                          code: 'areaApproveGradeDesc',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.areaApproveGradeDesc',
                                          compType: 'Input',
                                          name: 'areaApproveGradeDesc',
                                          parents: ['body'],
                                          id: 'body.areaApproveGradeDesc',
                                          dataKey:
                                            '1394051_body.areaApproveGradeDesc',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'areaApproveGradeDesc',
                                          },
                                        },
                                        {
                                          code: 'lanId',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.lanId',
                                          compType: 'Input',
                                          name: 'lanId',
                                          parents: ['body'],
                                          id: 'body.lanId',
                                          dataKey: '1394051_body.lanId',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'lanId',
                                          },
                                        },
                                        {
                                          code: 'remark',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.remark',
                                          compType: 'Input',
                                          name: 'remark',
                                          parents: ['body'],
                                          id: 'body.remark',
                                          dataKey: '1394051_body.remark',
                                        },
                                        {
                                          code: 'matrixPassType',
                                          name: '矩阵通过类型',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.matrixPassType',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.matrixPassType',
                                          dataKey:
                                            '1394051_body.matrixPassType',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'matrixPassType',
                                          },
                                        },
                                        {
                                          code: 'importantApproveViewGrade',
                                          name: '重客审批显示等级',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.importantApproveViewGrade',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.importantApproveViewGrade',
                                          dataKey:
                                            '1394051_body.importantApproveViewGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'importantApproveViewGrade',
                                          },
                                        },
                                        {
                                          code: 'lanApproveViewGrade',
                                          name: '地市审批显示等级',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.lanApproveViewGrade',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.lanApproveViewGrade',
                                          dataKey:
                                            '1394051_body.lanApproveViewGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'lanApproveViewGrade',
                                          },
                                        },
                                        {
                                          code: 'areaApproveViewGrade',
                                          name: '区县审批显示等级',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.areaApproveViewGrade',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.areaApproveViewGrade',
                                          dataKey:
                                            '1394051_body.areaApproveViewGrade',
                                          value: {
                                            type: [
                                              'form',
                                              'Form_525664',
                                              'validateFields',
                                            ],
                                            code: 'areaApproveViewGrade',
                                          },
                                        },
                                        {
                                          code: 'calcExpress',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.calcExpress',
                                          compType: 'Input',
                                          name: 'calcExpress',
                                          parents: ['body'],
                                          id: 'body.calcExpress',
                                          dataKey: '1394051_body.calcExpress',
                                        },
                                        {
                                          code: 'matrixTitle',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          _id: 'body.matrixTitle',
                                          compType: 'Input',
                                          name: 'matrixTitle',
                                          parents: ['body'],
                                          id: 'body.matrixTitle',
                                          dataKey: '1394051_body.matrixTitle',
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '1394051_body',
                                    },
                                  ],
                                },
                                line_number: 8,
                                callback1: [
                                  {
                                    type: 'showMessage',
                                    dataId: 166204384269587040,
                                    options: {
                                      compId: 'showMessage',
                                      compName: 'system',
                                      id: '956603',
                                      pageJsonId: '8962853',
                                      type: 'success',
                                      value: '审批矩阵修改成功！',
                                    },
                                    line_number: 9,
                                  },
                                  {
                                    type: 'resetCurrentForm',
                                    dataId: 166204388928002750,
                                    options: {
                                      compId: 'Form_525664',
                                      compLib: 'comm',
                                      pageJsonId: '8962853',
                                      compName: 'Form',
                                      id: '59458',
                                    },
                                    line_number: 10,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166204389281133980,
                                    options: {
                                      compId: 'Form_525664',
                                      compLib: 'comm',
                                      pageJsonId: '8962853',
                                      compName: 'Form',
                                      id: '2291672',
                                      disabled: 'true',
                                    },
                                    line_number: 11,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166204389904447700,
                                    options: {
                                      compId: 'Button_228244',
                                      compLib: 'comm',
                                      pageJsonId: '8962853',
                                      compName: 'Button',
                                      id: '54003',
                                      disabled: 'true',
                                    },
                                    line_number: 12,
                                  },
                                  {
                                    type: 'setDisable',
                                    dataId: 166204390419813540,
                                    options: {
                                      compId: 'Button_774397',
                                      compLib: 'comm',
                                      pageJsonId: '8962853',
                                      compName: 'Button',
                                      id: '5238403',
                                      disabled: 'true',
                                    },
                                    line_number: 13,
                                  },
                                  {
                                    type: 'callSelfFunc',
                                    dataId: 166211417830719260,
                                    options: {
                                      compId: 'callSelfFunc',
                                      compName: 'system',
                                      id: '94409924',
                                      pageJsonId: '8962853',
                                      customFuncName: 'onTable',
                                      customFuncParams: 'object',
                                    },
                                    line_number: 14,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 1,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 166204146901685100,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '74753',
                              pageJsonId: '8962853',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'addDcApproveMatrix',
                              _apiCode: 'addDcApproveMatrix',
                              _source: 'rhin',
                              _serviceId: '882592739237441536',
                              _serviceTitle:
                                '审批矩阵新增-tsm: addDcApproveMatrix',
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
                                  dataKey: '74753_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '74753_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '74753_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'matrixPassType',
                                      name: '矩阵通过类型',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.matrixPassType',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.matrixPassType',
                                      dataKey: '74753_body.matrixPassType',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'matrixPassType',
                                      },
                                    },
                                    {
                                      code: 'importantApproveViewGrade',
                                      name: '重客审批显示等级',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.importantApproveViewGrade',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.importantApproveViewGrade',
                                      dataKey:
                                        '74753_body.importantApproveViewGrade',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'importantApproveViewGrade',
                                      },
                                    },
                                    {
                                      code: 'lanApproveViewGrade',
                                      name: '地市审批显示等级',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.lanApproveViewGrade',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.lanApproveViewGrade',
                                      dataKey: '74753_body.lanApproveViewGrade',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'lanApproveViewGrade',
                                      },
                                    },
                                    {
                                      code: 'areaApproveViewGrade',
                                      name: '区县审批显示等级',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.areaApproveViewGrade',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.areaApproveViewGrade',
                                      dataKey:
                                        '74753_body.areaApproveViewGrade',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'areaApproveViewGrade',
                                      },
                                    },
                                    {
                                      code: 'remark',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.remark',
                                      compType: 'Input',
                                      name: 'remark',
                                      parents: ['body'],
                                      id: 'body.remark',
                                      dataKey: '74753_body.remark',
                                    },
                                    {
                                      code: 'lanApproveGrade',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.lanApproveGrade',
                                      compType: 'Input',
                                      name: 'lanApproveGrade',
                                      parents: ['body'],
                                      id: 'body.lanApproveGrade',
                                      dataKey: '74753_body.lanApproveGrade',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'lanApproveGrade',
                                      },
                                    },
                                    {
                                      code: 'importantApproveGradeDesc',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.importantApproveGradeDesc',
                                      compType: 'Input',
                                      name: 'importantApproveGradeDesc',
                                      parents: ['body'],
                                      id: 'body.importantApproveGradeDesc',
                                      dataKey:
                                        '74753_body.importantApproveGradeDesc',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'importantApproveGradeDesc',
                                      },
                                    },
                                    {
                                      code: 'areaApproveGrade',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.areaApproveGrade',
                                      compType: 'Input',
                                      name: 'areaApproveGrade',
                                      parents: ['body'],
                                      id: 'body.areaApproveGrade',
                                      dataKey: '74753_body.areaApproveGrade',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'areaApproveGrade',
                                      },
                                    },
                                    {
                                      code: 'lanApproveGradeDesc',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.lanApproveGradeDesc',
                                      compType: 'Input',
                                      name: 'lanApproveGradeDesc',
                                      parents: ['body'],
                                      id: 'body.lanApproveGradeDesc',
                                      dataKey: '74753_body.lanApproveGradeDesc',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'lanApproveGradeDesc',
                                      },
                                    },
                                    {
                                      code: 'sceneId',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      _id: 'body.sceneId',
                                      compType: 'Input',
                                      name: 'sceneId',
                                      parents: ['body'],
                                      id: 'body.sceneId',
                                      dataKey: '74753_body.sceneId',
                                      value: {
                                        type: ['context', '$state.sceneId$'],
                                        code: '',
                                      },
                                    },
                                    {
                                      code: 'specialImportantFlowCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.specialImportantFlowCode',
                                      compType: 'Input',
                                      name: 'specialImportantFlowCode',
                                      parents: ['body'],
                                      id: 'body.specialImportantFlowCode',
                                      dataKey:
                                        '74753_body.specialImportantFlowCode',
                                    },
                                    {
                                      code: 'areaApproveGradeDesc',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.areaApproveGradeDesc',
                                      compType: 'Input',
                                      name: 'areaApproveGradeDesc',
                                      parents: ['body'],
                                      id: 'body.areaApproveGradeDesc',
                                      dataKey:
                                        '74753_body.areaApproveGradeDesc',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'areaApproveGradeDesc',
                                      },
                                    },
                                    {
                                      code: 'calcExpress',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.calcExpress',
                                      compType: 'Input',
                                      name: 'calcExpress',
                                      parents: ['body'],
                                      id: 'body.calcExpress',
                                      dataKey: '74753_body.calcExpress',
                                    },
                                    {
                                      code: 'specialAreaFlowCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.specialAreaFlowCode',
                                      compType: 'Input',
                                      name: 'specialAreaFlowCode',
                                      parents: ['body'],
                                      id: 'body.specialAreaFlowCode',
                                      dataKey: '74753_body.specialAreaFlowCode',
                                    },
                                    {
                                      code: 'matrixTitle',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.matrixTitle',
                                      compType: 'Input',
                                      name: 'matrixTitle',
                                      parents: ['body'],
                                      id: 'body.matrixTitle',
                                      dataKey: '74753_body.matrixTitle',
                                    },
                                    {
                                      code: 'specialLanFlowCode',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.specialLanFlowCode',
                                      compType: 'Input',
                                      name: 'specialLanFlowCode',
                                      parents: ['body'],
                                      id: 'body.specialLanFlowCode',
                                      dataKey: '74753_body.specialLanFlowCode',
                                    },
                                    {
                                      code: 'calcView',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.calcView',
                                      compType: 'Input',
                                      name: 'calcView',
                                      parents: ['body'],
                                      id: 'body.calcView',
                                      dataKey: '74753_body.calcView',
                                    },
                                    {
                                      code: 'lanId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.lanId',
                                      compType: 'Input',
                                      name: 'lanId',
                                      parents: ['body'],
                                      id: 'body.lanId',
                                      dataKey: '74753_body.lanId',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'lanId',
                                      },
                                    },
                                    {
                                      code: 'calcTranslate',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.calcTranslate',
                                      compType: 'Input',
                                      name: 'calcTranslate',
                                      parents: ['body'],
                                      id: 'body.calcTranslate',
                                      dataKey: '74753_body.calcTranslate',
                                    },
                                    {
                                      code: 'provinceId',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.provinceId',
                                      compType: 'Input',
                                      name: 'provinceId',
                                      parents: ['body'],
                                      id: 'body.provinceId',
                                      dataKey: '74753_body.provinceId',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'provinceId',
                                      },
                                    },
                                    {
                                      code: 'importantApproveGrade',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      _id: 'body.importantApproveGrade',
                                      compType: 'Input',
                                      name: 'importantApproveGrade',
                                      parents: ['body'],
                                      id: 'body.importantApproveGrade',
                                      dataKey:
                                        '74753_body.importantApproveGrade',
                                      value: {
                                        type: [
                                          'form',
                                          'Form_525664',
                                          'validateFields',
                                        ],
                                        code: 'importantApproveGrade',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '74753_body',
                                },
                              ],
                              actionTitle: '发起矩阵新增',
                            },
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 166204176472815700,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '600956',
                                  pageJsonId: '8962853',
                                  type: 'success',
                                  value: '审批矩阵新增成功！',
                                },
                                line_number: 3,
                              },
                              {
                                type: 'setDisable',
                                dataId: 166204178830917660,
                                options: {
                                  compId: 'Form_525664',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Form',
                                  id: '816393',
                                  disabled: 'true',
                                },
                                line_number: 4,
                              },
                              {
                                type: 'setDisable',
                                dataId: 166204179436859520,
                                options: {
                                  compId: 'Button_228244',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Button',
                                  id: '681414',
                                  disabled: 'true',
                                },
                                line_number: 5,
                              },
                              {
                                type: 'setDisable',
                                dataId: 166204180003938620,
                                options: {
                                  compId: 'Button_774397',
                                  compLib: 'comm',
                                  pageJsonId: '8962853',
                                  compName: 'Button',
                                  id: '367196',
                                  disabled: 'true',
                                },
                                line_number: 6,
                              },
                              {
                                type: 'callSelfFunc',
                                dataId: 166253677967517500,
                                options: {
                                  compId: 'callSelfFunc',
                                  compName: 'system',
                                  id: '442361',
                                  pageJsonId: '8962853',
                                  customFuncName: 'onTable',
                                  customFuncParams: 'object',
                                },
                                line_number: 7,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ];
                    eventDataifelse486.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataifelse486, { e }, 'ifelse', {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_228244')}
                  {...injectData}
                />
                <Button
                  name={'取消'}
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
                    id: 'Button_774397',
                    uid: 'Button_774397',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const forms118 = getFormByCompId('Form_525664', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms118) ? forms118 : [forms118]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatasetDisable113: any = [
                      {
                        type: 'setDisable',
                        dataId: 166204199862185800,
                        options: {
                          compId: 'Form_525664',
                          compLib: 'comm',
                          pageJsonId: '8962853',
                          compName: 'Form',
                          id: '61837',
                          disabled: 'true',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetDisable113.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable113, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable114: any = [
                      {
                        type: 'setDisable',
                        dataId: 166204200418748160,
                        options: {
                          compId: 'Button_228244',
                          compLib: 'comm',
                          pageJsonId: '8962853',
                          compName: 'Button',
                          id: '78697',
                          disabled: 'true',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDatasetDisable114.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable114, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable115: any = [
                      {
                        type: 'setDisable',
                        dataId: 166204201317479970,
                        options: {
                          compId: 'Button_774397',
                          compLib: 'comm',
                          pageJsonId: '8962853',
                          compName: 'Button',
                          id: '8532055',
                          disabled: 'true',
                        },
                        line_number: 4,
                      },
                    ];
                    eventDatasetDisable115.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable115, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_774397')}
                  {...injectData}
                />
              </View>
            </Card>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(Jzpzfgxlcwjzys$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { sceneId: '', sceneCode: '', nodeObj: '' },
});
