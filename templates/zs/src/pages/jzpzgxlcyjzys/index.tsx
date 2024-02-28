// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  VerticalView,
  Card,
  Form,
  Select,
  Input,
  Button,
  Table,
  RemoteComponent,
  StdUpload,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '884348245488148480';
const Jzpzgxlcyjzys$$Page: React.FC<PageProps> = ({
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
  const onLoadTable = (options_0806668: any) => {
    const eventDatareloadDataSource39: any = [
      {
        type: 'reloadDataSource',
        dataId: 166660578355719360,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '175527',
          pageJsonId: '2695813',
          dataSourceId: 166235817284204450,
          dataSourceName: 'qryPageApproveMatrixByReq',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '0795814',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '4877562',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '695899',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '4481656',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '030435',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '5' },
                  type: 'long',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '538449',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '1' },
                  type: 'long',
                  value: { type: ['context', '$options_0806668$'], code: '' },
                },
                {
                  attrId: '9940634',
                  code: 'lanId',
                  name: 'lanId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_030076', 'getFieldsValue'],
                    code: 'lanId',
                  },
                },
                {
                  attrId: '447572',
                  code: 'matrixTitle',
                  name: 'matrixTitle',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_030076', 'getFieldsValue'],
                    code: 'matrixTitle',
                  },
                },
                {
                  attrId: '757726',
                  code: 'sceneId',
                  name: 'sceneId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  value: { type: ['context', '$state.sceneId$'], code: '' },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '697153',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '97157',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '629326',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '3953335',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '95211',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '2955385',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '458287',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '71250176',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '848328',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '546843',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '698671',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '172931',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '380531',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '180458',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '080462',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '777365',
                      code: 'calcTranslate',
                      name: 'calcTranslate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '959615',
                      code: 'areaApproveGrade',
                      name: 'areaApproveGrade',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '024782',
                      code: 'areaApproveGradeDesc',
                      name: 'areaApproveGradeDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '015146',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '09483',
                      code: 'calcView',
                      name: 'calcView',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '437651',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '897354',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '094844',
                      code: 'calcExpress',
                      name: 'calcExpress',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8737427',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '321241',
                      code: 'importantApproveGrade',
                      name: 'importantApproveGrade',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '855484',
                      code: 'specialAreaFlowCode',
                      name: 'specialAreaFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '109878',
                      code: 'lanApproveGradeDesc',
                      name: 'lanApproveGradeDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '809937',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '687862',
                      code: 'specialLanFlowCode',
                      name: 'specialLanFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '219219',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '049485',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '303918',
                      code: 'importantApproveGradeDesc',
                      name: 'importantApproveGradeDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6554103',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '44422',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '293014',
                      code: 'matrixTitle',
                      name: 'matrixTitle',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '8904657',
                      code: 'approveMatrixId',
                      name: 'approveMatrixId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '512466',
                      code: 'sceneId',
                      name: 'sceneId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '9889387',
                      code: 'specialImportantFlowCode',
                      name: 'specialImportantFlowCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '766458',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '895189',
                      code: 'cfgVersion',
                      name: 'cfgVersion',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '870261',
                      code: 'lanApproveGrade',
                      name: 'lanApproveGrade',
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
    eventDatareloadDataSource39.params =
      [
        {
          title: '事件入参',
          name: 'options_0806668',
          value: '$options_0806668$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource39,
      { options_0806668 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const forms6 = getFormByCompId('Form_035658', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms6) ? forms6 : [forms6]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetDisable12: any = [
      {
        type: 'setDisable',
        dataId: 166677843059481540,
        options: {
          compId: 'Form_035658',
          compLib: 'comm',
          pageJsonId: '2695813',
          compName: 'Form',
          id: '2452299',
          disabled: 'true',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable12.params =
      [
        {
          title: '事件入参',
          name: 'options_0806668',
          value: '$options_0806668$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable12, { options_0806668 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable13: any = [
      {
        type: 'setDisable',
        dataId: 166677843622585470,
        options: {
          compId: 'Button_8340845',
          compLib: 'comm',
          pageJsonId: '2695813',
          compName: 'Button',
          id: '915241',
          disabled: 'true',
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable13.params =
      [
        {
          title: '事件入参',
          name: 'options_0806668',
          value: '$options_0806668$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable13, { options_0806668 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable14: any = [
      {
        type: 'setDisable',
        dataId: 166677844269985000,
        options: {
          compId: 'Button_873123',
          compLib: 'comm',
          pageJsonId: '2695813',
          compName: 'Button',
          id: '783974',
          disabled: 'true',
        },
        line_number: 5,
      },
    ];
    eventDatasetDisable14.params =
      [
        {
          title: '事件入参',
          name: 'options_0806668',
          value: '$options_0806668$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable14, { options_0806668 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    onLoadTable,
  }));

  useEffect(() => {
    const eventDataapiRequest500: any = [
      {
        type: 'apiRequest',
        dataId: 166316578260314080,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '902431',
          pageJsonId: '2695813',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryFlowListByFlowType',
          _apiCode: 'qryFlowListByFlowType',
          _source: 'rhin',
          _serviceId: '887340076843663360',
          _serviceTitle: '根据流程类型查询流程列表-tsm: qryFlowListByFlowType',
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
              dataKey: '902431_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'flowType',
                  name: '流程类型',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.flowType',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.flowType',
                  dataKey: '902431_path.flowType',
                  value: { type: ['customize'], code: '1001' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '902431_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '902431_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '902431_body',
            },
          ],
          actionTitle: '查询重客流程',
          _sourceName: '根据流程类型查询流程列表-tsm',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166316584554486800,
            options: {
              compId: 'Select_1664499',
              compLib: 'comm',
              pageJsonId: '2695813',
              compName: 'Select',
              id: '466999',
              data: '$reply_902431?.resultData$',
              labelKey: 'flowName',
              valueKey: 'flowCode',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'reloadColServiceData',
            dataId: 166660622040399260,
            options: {
              compId: 'Table_317067',
              compLib: 'comm',
              pageJsonId: '2695813',
              compName: 'Table',
              id: '9338885',
              colName: 'specialImportantFlowCode',
              data: '$reply_902431?.resultData$',
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest500.params = [] || [];
    CMDGenerator(eventDataapiRequest500, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest501: any = [
      {
        type: 'apiRequest',
        dataId: 166316581655250530,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '3249686',
          pageJsonId: '2695813',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryFlowListByFlowType',
          _apiCode: 'qryFlowListByFlowType',
          _source: 'rhin',
          _serviceId: '887340076843663360',
          _serviceTitle: '根据流程类型查询流程列表-tsm: qryFlowListByFlowType',
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
              dataKey: '3249686_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'flowType',
                  name: '流程类型',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.flowType',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.flowType',
                  dataKey: '3249686_path.flowType',
                  value: { type: ['customize'], code: '1002' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '3249686_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '3249686_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '3249686_body',
            },
          ],
          actionTitle: '查询地市流程',
          _sourceName: '根据流程类型查询流程列表-tsm',
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166316586401668400,
            options: {
              compId: 'Select_017238',
              compLib: 'comm',
              pageJsonId: '2695813',
              compName: 'Select',
              id: '91748',
              data: '$reply_3249686?.resultData$',
              labelKey: 'flowName',
              valueKey: 'flowCode',
            },
            line_number: 5,
            callback1: [],
          },
          {
            type: 'reloadColServiceData',
            dataId: 166660620729087700,
            options: {
              compId: 'Table_317067',
              compLib: 'comm',
              pageJsonId: '2695813',
              compName: 'Table',
              id: '1491303',
              colName: 'specialLanFlowCode',
              data: '$reply_3249686?.resultData$',
            },
            line_number: 6,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest501.params = [] || [];
    CMDGenerator(eventDataapiRequest501, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest502: any = [
      {
        type: 'apiRequest',
        dataId: 166316581850621570,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '793898',
          pageJsonId: '2695813',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryFlowListByFlowType',
          _apiCode: 'qryFlowListByFlowType',
          _source: 'rhin',
          _serviceId: '887340076843663360',
          _serviceTitle: '根据流程类型查询流程列表-tsm: qryFlowListByFlowType',
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
              dataKey: '793898_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'flowType',
                  name: '流程类型',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.flowType',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.flowType',
                  dataKey: '793898_path.flowType',
                  value: { type: ['customize'], code: '1003' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '793898_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '793898_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '793898_body',
            },
          ],
          actionTitle: '查询区县流程',
          _sourceName: '根据流程类型查询流程列表-tsm',
        },
        line_number: 7,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166316588084947070,
            options: {
              compId: 'Select_300805',
              compLib: 'comm',
              pageJsonId: '2695813',
              compName: 'Select',
              id: '7015297',
              data: '$reply_793898?.resultData$',
              labelKey: 'flowName',
              valueKey: 'flowCode',
            },
            line_number: 8,
            callback1: [],
          },
          {
            type: 'reloadColServiceData',
            dataId: 166660618156416420,
            options: {
              compId: 'Table_317067',
              compLib: 'comm',
              pageJsonId: '2695813',
              compName: 'Table',
              id: '9684828',
              colName: 'specialAreaFlowCode',
              data: '$reply_793898?.resultData$',
            },
            line_number: 9,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest502.params = [] || [];
    CMDGenerator(eventDataapiRequest502, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {
    const eventDataapiRequest499: any = [
      {
        type: 'apiRequest',
        dataId: 166255711658372600,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '1667963',
          pageJsonId: '2695813',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryMatrixAttrBySceneId',
          _apiCode: 'qryMatrixAttrBySceneId',
          _source: 'rhin',
          _serviceId: '884719481119223808',
          _serviceTitle:
            '根据场景ID获得所有矩阵要素-tsm: qryMatrixAttrBySceneId',
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
              dataKey: '1667963_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '1667963_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '1667963_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'sceneId',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'T',
                  _id: 'body.sceneId',
                  compType: 'Input',
                  name: 'sceneId',
                  parents: ['body'],
                  id: 'body.sceneId',
                  dataKey: '1667963_body.sceneId',
                  value: { type: ['context', '$state.sceneId$'], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '1667963_body',
            },
          ],
          _sourceName: '根据场景ID获得所有矩阵要素-tsm',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166255713647500450,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '526414',
              pageJsonId: '2695813',
              code: 'function main(data,state,success,fail){var _reply_;success({value:{op:"&&",children:[{},{}]},attrSpecList:(_reply_=reply_1667963)===null||_reply_===void 0?void 0:_reply_.resultData.attrSpecList})};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setRemoteCompProps',
                dataId: 166255865103455460,
                options: {
                  compId: 'RemoteComponent_6577708',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'RemoteComponent',
                  id: '0500624',
                  rProps: '$data_526414$',
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
    eventDataapiRequest499.params = [] || [];
    CMDGenerator(eventDataapiRequest499, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc42: any = [
      {
        type: 'callSelfFunc',
        dataId: 166236239774297800,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '879884',
          pageJsonId: '2695813',
          customFuncName: 'onLoadTable',
          customFuncParams: 'object',
        },
        line_number: 4,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc42.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc42, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_2695813__"
    >
      <View
        className="View_View_2695813_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_2695813_1',
          uid: 'View_2695813_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_2695813_1')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_286985',
            uid: 'VerticalView_286985',
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
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_286985')}
          {...injectData}
        >
          <View
            className="View_View_490162"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_490162',
              uid: 'View_490162',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_490162')}
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
                  id: '589966',
                  title: '新增矩阵',
                  iconPos: 'left',
                  btnType: 'primary',
                },
                {
                  id: '8141036',
                  title: '批量删除',
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
                id: 'Card_502669',
                uid: 'Card_502669',
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
              onClickBtn2={(e: any) => {
                const eventDatagetTableSelectedKey75: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166660603264324800,
                    options: {
                      compId: 'Table_317067',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Table',
                      id: '0406066',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166660603264390800,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '777107',
                          pageJsonId: '2695813',
                          value: ['$selectedRowKeys_0406066$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '602921',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$selectedRowKeys_0406066.length$',
                              operate: '>=',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166660603264342530,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166660603264397120,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166660603264340930,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '645779',
                                  pageJsonId: '2695813',
                                  type: 'info',
                                  value: '请先选择审批矩阵！',
                                },
                                actionObjId: 'showMessage',
                                actionObjName: 'system',
                                value: 'showMessage',
                                elseIfs: [],
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            desc: '未选中',
                            elseIfs: [],
                            callback: [
                              {
                                type: 'showMessage',
                                dataId: 166660603264340930,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '645779',
                                  pageJsonId: '2695813',
                                  type: 'info',
                                  value: '请先选择审批矩阵！',
                                },
                                line_number: 10,
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'showModal',
                            dataId: 166660603264335300,
                            options: {
                              compId: 'showModal',
                              compName: 'page',
                              id: '743623',
                              pageJsonId: '2695813',
                              type: 'confirm',
                              title: '系统提示',
                              content: '确定要删除所选记录？',
                              okText: '确定',
                              cancelText: '取消',
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'apiRequest',
                                dataId: 166660603264358560,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '989197',
                                  pageJsonId: '2695813',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'delBatchDcApproveMatrix',
                                  _apiCode: 'delBatchDcApproveMatrix',
                                  _source: 'rhin',
                                  _serviceId: '883966732049428480',
                                  _serviceTitle:
                                    '审批矩阵批量删除-tsm: delBatchDcApproveMatrix',
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
                                      dataKey: '930935_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '930935_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '930935_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'approveMatrixIds',
                                          name: '审批矩阵标识列表 1,2,3',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'T',
                                          defaultValue: '',
                                          _id: 'body.approveMatrixIds',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.approveMatrixIds',
                                          dataKey:
                                            '930935_body.approveMatrixIds',
                                          value: {
                                            type: ['customize'],
                                            code: '$JSON.stringify(selectedRowKeys_0406066)$',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '930935_body',
                                    },
                                  ],
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '0417198',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$reply_989197?.resultCode$',
                                          operate: '==',
                                          manualValue: '0',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 166660603264301250,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 166660603264360860,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166660603264311580,
                                            children: [],
                                            todoOptions: ['msgType', 'value'],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '737026',
                                              pageJsonId: '2695813',
                                              type: 'error',
                                              value: '所选审批矩阵删除失败！',
                                            },
                                            actionObjId: 'showMessage',
                                            actionObjName: 'system',
                                            value: 'showMessage',
                                            line_number: 9,
                                          },
                                        ],
                                        condition: [],
                                        desc: 'resultCode != 0 删除失败',
                                        callback: [
                                          {
                                            type: 'showMessage',
                                            dataId: 166660603264311580,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '737026',
                                              pageJsonId: '2695813',
                                              type: 'error',
                                              value: '所选审批矩阵删除失败！',
                                            },
                                            line_number: 9,
                                          },
                                        ],
                                      },
                                    ],
                                    line_number: 6,
                                    callback1: [
                                      {
                                        type: 'showMessage',
                                        dataId: 166660603264304060,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '5063015',
                                          pageJsonId: '2695813',
                                          type: 'success',
                                          value: '所选审批矩阵删除成功！',
                                        },
                                        line_number: 7,
                                      },
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 166660603264370530,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '2194378',
                                          pageJsonId: '2695813',
                                          customFuncName: 'onLoadTable',
                                          customFuncParams: 'object',
                                        },
                                        line_number: 8,
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
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetTableSelectedKey75.params =
                  [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey75,
                  { e },
                  'getTableSelectedKey',
                  {
                    id: 'getTableSelectedKey',
                    name: 'getTableSelectedKey',
                    type: 'getTableSelectedKey',
                    platform: 'pc',
                  },
                );
              }}
              onClickBtn1={(e: any) => {
                const forms149 = getFormByCompId('Form_035658', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms149) ? forms149 : [forms149]).forEach(
                  (form) => form?.resetFields(),
                );
                const eventDatasetDisable150: any = [
                  {
                    type: 'setDisable',
                    dataId: 166660609504022800,
                    options: {
                      compId: 'Form_035658',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Form',
                      id: '5581233',
                    },
                    line_number: 2,
                  },
                ];
                eventDatasetDisable150.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable150, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable151: any = [
                  {
                    type: 'setDisable',
                    dataId: 166660610055481500,
                    options: {
                      compId: 'Button_8340845',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Button',
                      id: '364108',
                    },
                    line_number: 3,
                  },
                ];
                eventDatasetDisable151.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable151, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable152: any = [
                  {
                    type: 'setDisable',
                    dataId: 166660610380951230,
                    options: {
                      compId: 'Button_873123',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Button',
                      id: '1622923',
                    },
                    line_number: 4,
                  },
                ];
                eventDatasetDisable152.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable152, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDataSource224: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166660606309971520,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '16487',
                      pageJsonId: '2695813',
                      dataSourceId: 166235911927130460,
                      dataSourceName: 'local_vars',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '620657',
                          code: 'operType',
                          name: '操作类型',
                          type: 'string',
                          initialData: { type: 'static' },
                          value: { type: ['customize'], code: 'add' },
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
                ];
                eventDatasetDataSource224.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatasetDataSource224,
                  { e },
                  'setDataSource',
                  {
                    id: 'setDataSource',
                    name: 'setDataSource',
                    type: 'setDataSource',
                    platform: 'pc',
                  },
                );
                const eventDatacustomActionCode730: any = [
                  {
                    type: 'customActionCode',
                    dataId: 166660605045334850,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '2048582',
                      pageJsonId: '2695813',
                      code: 'function main(data,state,success,fail){success({value:{op:"&&",children:[{},{}]}})};',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'setRemoteCompProps',
                        dataId: 166660605045389470,
                        options: {
                          compId: 'RemoteComponent_6577708',
                          compLib: 'comm',
                          pageJsonId: '2695813',
                          compName: 'RemoteComponent',
                          id: '956999',
                          rProps: '$data_2048582$',
                        },
                        line_number: 7,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode730.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatacustomActionCode730,
                  { e },
                  'customActionCode',
                  {
                    id: 'customActionCode',
                    name: 'customActionCode',
                    type: 'customActionCode',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_502669')}
              {...injectData}
            >
              <Form
                name={'查询表单'}
                colSpan={8}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_030076'}
                $$componentItem={{
                  id: 'Form_030076',
                  uid: 'Form_030076',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_030076')}
                {...injectData}
              >
                <Select
                  name={'归属地市'}
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
                  placeholder={'请选择'}
                  formItemIndex={0}
                  fieldName={'lanId'}
                  dataSource={attrDataMap['CITY_CODE']}
                  $$componentItem={{
                    id: 'Select_7701837',
                    uid: 'Select_7701837',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_7701837')}
                  {...injectData}
                />
                <Input
                  name={'矩阵标题'}
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
                  fieldName={'matrixTitle'}
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
                    id: 'Input_874365',
                    uid: 'Input_874365',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_874365')}
                  {...injectData}
                />
                <View
                  className="View_View_7612077"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_7612077',
                    uid: 'View_7612077',
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
                    textAlign: 'center',
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'View_7612077')}
                  {...injectData}
                >
                  <Button
                    name={'查询'}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    type={'primary'}
                    labelCol={8}
                    wrapperCol={16}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_287918',
                      uid: 'Button_287918',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                    onClick={(e: any) => {
                      const eventDatacallSelfFunc642: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166255436695965920,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '833678',
                            pageJsonId: '2695813',
                            customFuncName: 'onLoadTable',
                            customFuncParams: 'object',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc642.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc642,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_287918')}
                    {...injectData}
                  />
                  <Button
                    name={'重置'}
                    classification={'default'}
                    autoProcessFlow={false}
                    flowProcessResult={'common'}
                    iconPosition={'left'}
                    ghost={false}
                    block={false}
                    size={'default'}
                    type={'default'}
                    labelCol={8}
                    wrapperCol={16}
                    hasIcon={false}
                    $$componentItem={{
                      id: 'Button_0011149',
                      uid: 'Button_0011149',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const forms151 = getFormByCompId('Form_030076', refs);
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms151) ? forms151 : [forms151]).forEach(
                        (form) => form?.resetFields(),
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_0011149')}
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'矩阵网格'}
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
                    title: '归属地市',
                    key: 'lanId',
                    dataIndex: 'lanId',
                    className: '',
                    id: '548499',
                    hiddenRule: true,
                    width: 80,
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
                    title: '矩阵标题',
                    key: 'matrixTitle',
                    dataIndex: 'matrixTitle',
                    className: 'divider',
                    id: '5282849',
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
                    title: '公式解释',
                    key: 'calcTranslate',
                    dataIndex: 'calcTranslate',
                    className: 'divider',
                    id: '9883107',
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
                    title: '省重客个性流程',
                    key: 'specialImportantFlowCode',
                    dataIndex: 'specialImportantFlowCode',
                    id: '737231',
                    className: 'divider',
                    staticService: {
                      labelKey: 'flowName',
                      valueKey: 'flowCode',
                    },
                    width: 150,
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
                    title: '地市个性流程',
                    key: 'specialLanFlowCode',
                    dataIndex: 'specialLanFlowCode',
                    id: '054658',
                    className: 'divider',
                    staticService: {
                      labelKey: 'flowName',
                      valueKey: 'flowCode',
                    },
                    width: 150,
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
                    title: '区县个性流程',
                    key: 'specialAreaFlowCode',
                    dataIndex: 'specialAreaFlowCode',
                    id: '314095',
                    className: 'divider',
                    staticService: {
                      labelKey: 'flowName',
                      valueKey: 'flowCode',
                    },
                    width: 150,
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
                size={'middle'}
                fixedAction={false}
                rowSelection={{ type: 'checkbox' }}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
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
                    id: '008388',
                    checked: true,
                  },
                  {
                    title: '编辑',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'edit' },
                    type: 'edit',
                    id: '5172314',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '310662',
                    checked: true,
                  },
                ]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.qryPageApproveMatrixByReq.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_317067',
                  uid: 'Table_317067',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '20px 0px 0px 0px' }}
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDataapiRequest787: any = [
                    {
                      type: 'apiRequest',
                      dataId: 166236296792105250,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '624803',
                        pageJsonId: '2695813',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'delDcApproveMatrixById',
                        _apiCode: 'delDcApproveMatrixById',
                        _source: 'rhin',
                        _serviceId: '883964357951193088',
                        _serviceTitle:
                          '审批矩阵删除-tsm: delDcApproveMatrixById',
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
                            dataKey: '624803_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            children: [
                              {
                                code: 'dcApproveMatrixId',
                                name: '新增节点',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'T',
                                defaultValue: '',
                                _id: 'path.dcApproveMatrixId',
                                compType: 'Input',
                                parents: ['path'],
                                id: 'path.dcApproveMatrixId',
                                dataKey: '624803_path.dcApproveMatrixId',
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                              },
                            ],
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '624803_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '624803_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '624803_body',
                          },
                        ],
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '1037203',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_624803?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166236298797529600,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166236301123562600,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166236304489382600,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '6922736',
                                    pageJsonId: '2695813',
                                    type: 'error',
                                    value: '审批矩阵删除失败！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  elseIfs: [],
                                  line_number: 5,
                                },
                              ],
                              condition: [],
                              desc: 'reslutCode != 0',
                              elseIfs: [],
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166236304489382600,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '6922736',
                                    pageJsonId: '2695813',
                                    type: 'error',
                                    value: '审批矩阵删除失败！',
                                  },
                                  line_number: 5,
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166236302255436350,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '816511',
                                pageJsonId: '2695813',
                                type: 'success',
                                value: '审批矩阵删除成功！',
                              },
                              line_number: 3,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166236306129731840,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '557061',
                                pageJsonId: '2695813',
                                customFuncName: 'onLoadTable',
                                customFuncParams: 'object',
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest787.params =
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
                    eventDataapiRequest787,
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
                onRowDetail={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues33: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166236308969409000,
                      options: {
                        compId: 'Form_035658',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Form',
                        id: '23857',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues33.params =
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
                    eventDatasetCurrentFormValues33,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable153: any = [
                    {
                      type: 'setDisable',
                      dataId: 166255444638656030,
                      options: {
                        compId: 'Form_035658',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Form',
                        id: '002625',
                        disabled: 'true',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable153.params =
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
                    eventDatasetDisable153,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable154: any = [
                    {
                      type: 'setDisable',
                      dataId: 166255445130823420,
                      options: {
                        compId: 'Button_8340845',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Button',
                        id: '739662',
                        disabled: 'true',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetDisable154.params =
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
                    eventDatasetDisable154,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable155: any = [
                    {
                      type: 'setDisable',
                      dataId: 166255445816616960,
                      options: {
                        compId: 'Button_873123',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Button',
                        id: '32920876',
                        disabled: 'true',
                      },
                      line_number: 4,
                    },
                  ];
                  eventDatasetDisable155.params =
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
                    eventDatasetDisable155,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode731: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166255882871940580,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '567628',
                        pageJsonId: '2695813',
                        code: 'function main(data,state,success,fail){success({value:JSON.parse(row.calcView)})};',
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'setRemoteCompProps',
                          dataId: 166255884409813660,
                          options: {
                            compId: 'RemoteComponent_6577708',
                            compLib: 'comm',
                            pageJsonId: '2695813',
                            compName: 'RemoteComponent',
                            id: '228232',
                            rProps: '$data_567628$',
                          },
                          line_number: 6,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode731.params =
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
                    eventDatacustomActionCode731,
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
                onRowEdit={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues34: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166236310079232960,
                      options: {
                        compId: 'Form_035658',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Form',
                        id: '963204',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues34.params =
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
                    eventDatasetCurrentFormValues34,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable156: any = [
                    {
                      type: 'setDisable',
                      dataId: 166236310591155040,
                      options: {
                        compId: 'Form_035658',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Form',
                        id: '614556',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable156.params =
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
                    eventDatasetDisable156,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable157: any = [
                    {
                      type: 'setDisable',
                      dataId: 166236311101149020,
                      options: {
                        compId: 'Button_8340845',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Button',
                        id: '280893',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetDisable157.params =
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
                    eventDatasetDisable157,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable158: any = [
                    {
                      type: 'setDisable',
                      dataId: 166236311281500770,
                      options: {
                        compId: 'Button_873123',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Button',
                        id: '884104',
                      },
                      line_number: 4,
                    },
                  ];
                  eventDatasetDisable158.params =
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
                    eventDatasetDisable158,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource225: any = [
                    {
                      type: 'setDataSource',
                      dataId: 166236311694407260,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '609698',
                        pageJsonId: '2695813',
                        dataSourceId: 166235911927130460,
                        dataSourceName: 'local_vars',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            attrId: '620657',
                            code: 'operType',
                            name: '操作类型',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'mod' },
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
                  ];
                  eventDatasetDataSource225.params =
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
                    eventDatasetDataSource225,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode732: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166255886682312130,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '001877',
                        pageJsonId: '2695813',
                        code: 'function main(data,state,success,fail){success({value:JSON.parse(row.calcView)})};',
                      },
                      line_number: 6,
                      callback1: [
                        {
                          type: 'setRemoteCompProps',
                          dataId: 166255886682378430,
                          options: {
                            compId: 'RemoteComponent_6577708',
                            compLib: 'comm',
                            pageJsonId: '2695813',
                            compName: 'RemoteComponent',
                            id: '78299',
                            rProps: '$data_001877$',
                          },
                          line_number: 7,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode732.params =
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
                    eventDatacustomActionCode732,
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
                onRowClick={(rowId: any, row: any, index: any) => {
                  const eventDatasetCurrentFormValues35: any = [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166236324828561200,
                      options: {
                        compId: 'Form_035658',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Form',
                        id: '465468',
                        params: '$row$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetCurrentFormValues35.params =
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
                    eventDatasetCurrentFormValues35,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable159: any = [
                    {
                      type: 'setDisable',
                      dataId: 166255446398754500,
                      options: {
                        compId: 'Form_035658',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Form',
                        id: '604826',
                        disabled: 'true',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable159.params =
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
                    eventDatasetDisable159,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable160: any = [
                    {
                      type: 'setDisable',
                      dataId: 166255446997690400,
                      options: {
                        compId: 'Button_8340845',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Button',
                        id: '665392',
                        disabled: 'true',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetDisable160.params =
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
                    eventDatasetDisable160,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable161: any = [
                    {
                      type: 'setDisable',
                      dataId: 166255447425259900,
                      options: {
                        compId: 'Button_873123',
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Button',
                        id: '709837',
                        disabled: 'true',
                      },
                      line_number: 4,
                    },
                  ];
                  eventDatasetDisable161.params =
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
                    eventDatasetDisable161,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode733: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166255887753410880,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '4649777',
                        pageJsonId: '2695813',
                        code: 'function main(data,state,success,fail){success({value:JSON.parse(row.calcView)})};',
                      },
                      line_number: 5,
                      callback1: [
                        {
                          type: 'setRemoteCompProps',
                          dataId: 166255887753493800,
                          options: {
                            compId: 'RemoteComponent_6577708',
                            compLib: 'comm',
                            pageJsonId: '2695813',
                            compName: 'RemoteComponent',
                            id: '634748',
                            rProps: '$data_4649777$',
                          },
                          line_number: 6,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode733.params =
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
                    eventDatacustomActionCode733,
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
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatacallSelfFunc643: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166660596635604860,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '4453343',
                        pageJsonId: '2695813',
                        customFuncName: 'onLoadTable',
                        customFuncParams: '$page$',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc643.params =
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
                    eventDatacallSelfFunc643,
                    { page, pageSize },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Table_317067')}
                {...injectData}
              />
            </Card>
          </View>
          <View
            className="View_View_529397"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_529397',
              uid: 'View_529397',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_529397')}
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
                id: 'Card_454008',
                uid: 'Card_454008',
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
              ref={(r: any) => refs.setComponentRef(r, 'Card_454008')}
              {...injectData}
            >
              <RemoteComponent
                name={'data'}
                fileCode={'approvalMatrix'}
                fieldName={'data.remote_input.data'}
                $$componentItem={{
                  id: 'RemoteComponent_6577708',
                  uid: 'RemoteComponent_6577708',
                  type: 'RemoteComponent',
                  ...componentItem,
                }}
                appId={undefined}
                lcdpParentRenderId={undefined}
                onMessage={(msg: any) => {
                  const eventDatacustomActionCode734: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166255687647097300,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '479495',
                        pageJsonId: '2695813',
                        code: 'function main(data,state,success,fail){data.remote_data={expression:msg.expression,displayExpression:msg.displayExpression,ast:JSON.stringify(msg.ast),error:msg.error}};',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode734.params =
                    [{ title: '消息入参', name: 'msg', value: '$msg$' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode734,
                    { msg },
                    'customActionCode',
                    {
                      id: 'customActionCode',
                      name: 'customActionCode',
                      type: 'customActionCode',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'RemoteComponent_6577708')
                }
                {...injectData}
              />
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
                formCode={'Form_035658'}
                $$componentItem={{
                  id: 'Form_035658',
                  uid: 'Form_035658',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  padding: '0px 0px 0px 0px',
                  margin: '24px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_035658')}
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
                    id: 'Select_563245',
                    uid: 'Select_563245',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_563245')}
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
                  formItemIndex={1}
                  fieldName={'lanId'}
                  dataSource={attrDataMap['CITY_CODE']}
                  $$componentItem={{
                    id: 'Select_824103',
                    uid: 'Select_824103',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_824103')}
                  {...injectData}
                />
                <View
                  className="View_View_226211"
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_226211',
                    uid: 'View_226211',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_226211')}
                  {...injectData}
                />
                <Input
                  name={'矩阵标题'}
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
                  formItemIndex={3}
                  fieldName={'matrixTitle'}
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
                    id: 'Input_280595',
                    uid: 'Input_280595',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_280595')}
                  {...injectData}
                />
                <Select
                  name={'省重客个性流程'}
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
                  attr={{ selectedKeyTags: [], dataType: 'local' }}
                  placeholder={'请选择'}
                  formItemIndex={4}
                  allowClear={true}
                  fieldName={'specialImportantFlowCode'}
                  $$componentItem={{
                    id: 'Select_1664499',
                    uid: 'Select_1664499',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_1664499')}
                  {...injectData}
                />
                <Select
                  name={'地市个性流程'}
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
                  attr={{ selectedKeyTags: [], dataType: 'local' }}
                  placeholder={'请选择'}
                  formItemIndex={5}
                  fieldName={'specialLanFlowCode'}
                  $$componentItem={{
                    id: 'Select_017238',
                    uid: 'Select_017238',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_017238')}
                  {...injectData}
                />
                <Select
                  name={'区县个性流程'}
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
                  attr={{ selectedKeyTags: [], dataType: 'local' }}
                  placeholder={'请选择'}
                  formItemIndex={6}
                  fieldName={'specialAreaFlowCode'}
                  $$componentItem={{
                    id: 'Select_300805',
                    uid: 'Select_300805',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_300805')}
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
                  formItemIndex={7}
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
                    id: 'Input_033825',
                    uid: 'Input_033825',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_033825')}
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
                  formItemIndex={8}
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
                    id: 'Input_896358',
                    uid: 'Input_896358',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_896358')}
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
                  formItemIndex={9}
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
                    id: 'Input_919808',
                    uid: 'Input_919808',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_919808')}
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
                  acceptType={[]}
                  withCredentials={true}
                  numberLimit={5}
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
                  formItemIndex={10}
                  fieldName={'file'}
                  icon={{
                    type: undefined,
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'StdUpload_382647',
                    uid: 'StdUpload_382647',
                    type: 'StdUpload',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'StdUpload_382647')}
                  {...injectData}
                />
                <Input
                  name={'矩阵ID'}
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
                  formItemIndex={11}
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
                    id: 'Input_2573307',
                    uid: 'Input_2573307',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_2573307')}
                  {...injectData}
                />
              </Form>
              <View
                className="View_View_1383526"
                name={'布局容器'}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_1383526',
                  uid: 'View_1383526',
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
                  textAlign: 'center',
                  margin: '20px 0px 0px 0px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_1383526')}
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
                    id: 'Button_8340845',
                    uid: 'Button_8340845',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                  onClick={(e: any) => {
                    const eventDataifelse524: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '3026',
                            options: {
                              context: '$data.remote_data.error$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166255870187503330,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166255874936275600,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 166255876461743260,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166255876461709950,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166255876461792260,
                                        children: [
                                          {
                                            dataName: 'condition',
                                            dataId: 166255876461714900,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166255876461752580,
                                                children: [],
                                                todoOptions: [
                                                  'msgType',
                                                  'value',
                                                ],
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '31063',
                                                  pageJsonId: '2695813',
                                                  type: 'success',
                                                  value: '审批矩阵新增成功！',
                                                },
                                                actionObjId: 'showMessage',
                                                actionObjName: 'system',
                                                value: 'showMessage',
                                                line_number: 6,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166255876461718720,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166255876461711200,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166255876461711260,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                  },
                                                ],
                                                todoOptions: [
                                                  'customFuncName',
                                                  'customFuncParams',
                                                ],
                                                options: {
                                                  compId: 'callSelfFunc',
                                                  compName: 'system',
                                                  id: '288321',
                                                  pageJsonId: '2695813',
                                                  customFuncName: 'onLoadTable',
                                                },
                                                actionObjId: 'callSelfFunc',
                                                actionObjName: 'system',
                                                value: 'callSelfFunc',
                                                line_number: 7,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166255876461742720,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Form_035658',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Form',
                                                  id: '7298857',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Form_035658',
                                                actionObjName: 'Form',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 8,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166255876461705950,
                                                children: [],
                                                todoOptions: [],
                                                options: {
                                                  compId: 'Form_035658',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Form',
                                                  id: '2839357',
                                                },
                                                actionObjId: 'Form_035658',
                                                actionObjName: 'Form',
                                                value: 'resetCurrentForm',
                                                compLib: 'comm',
                                                line_number: 9,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166255876461766000,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Button_8340845',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '486079',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Button_8340845',
                                                actionObjName: 'Button',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 10,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166255876461767170,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Button_873123',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '8601946',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Button_873123',
                                                actionObjName: 'Button',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 11,
                                              },
                                            ],
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 166255876461705730,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461711780,
                                                    children: [],
                                                    todoOptions: [
                                                      'msgType',
                                                      'value',
                                                    ],
                                                    options: {
                                                      compId: 'showMessage',
                                                      compName: 'system',
                                                      id: '28277',
                                                      pageJsonId: '2695813',
                                                      type: 'error',
                                                      value:
                                                        '审批矩阵新增失败！',
                                                    },
                                                    actionObjId: 'showMessage',
                                                    actionObjName: 'system',
                                                    value: 'showMessage',
                                                    line_number: 12,
                                                  },
                                                ],
                                                condition: [],
                                                desc: 'resultCode != 0 新增失败',
                                                callback: [
                                                  {
                                                    type: 'showMessage',
                                                    dataId: 166255876461711780,
                                                    options: {
                                                      compId: 'showMessage',
                                                      compName: 'system',
                                                      id: '28277',
                                                      pageJsonId: '2695813',
                                                      type: 'error',
                                                      value:
                                                        '审批矩阵新增失败！',
                                                    },
                                                    line_number: 12,
                                                  },
                                                ],
                                              },
                                            ],
                                            condition: [
                                              {
                                                condId: '472881',
                                                options: {
                                                  useManual: true,
                                                  useObject: false,
                                                  context:
                                                    '$reply_895615?.resultCode$',
                                                  operate: '==',
                                                  manualValue: '0',
                                                },
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            desc: 'resultCode = 0 新增成功',
                                            line_number: 5,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166255876461794500,
                                        children: [],
                                        value: 'callback2',
                                        params: [],
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
                                      id: '895615',
                                      pageJsonId: '2695813',
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
                                          dataKey: '895615_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          _id: 'path',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'path',
                                          dataKey: '895615_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '895615_query',
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
                                              dataKey:
                                                '895615_body.catalogCode',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.catalogCode$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              code: 'catalogItemCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.catalogItemCode',
                                              compType: 'Input',
                                              name: 'catalogItemCode',
                                              parents: ['body'],
                                              id: 'body.catalogItemCode',
                                              dataKey:
                                                '895615_body.catalogItemCode',
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
                                              dataKey:
                                                '895615_body.matrixTitle',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'matrixTitle',
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
                                              dataKey:
                                                '895615_body.calcExpress',
                                              value: {
                                                type: [
                                                  'datasource',
                                                  'remote_data',
                                                  'data',
                                                ],
                                                code: 'expression',
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
                                              dataKey:
                                                '895615_body.calcTranslate',
                                              value: {
                                                type: [
                                                  'datasource',
                                                  'remote_data',
                                                  'data',
                                                ],
                                                code: 'displayExpression',
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
                                              dataKey: '895615_body.calcView',
                                              value: {
                                                type: [
                                                  'datasource',
                                                  'remote_data',
                                                  'data',
                                                ],
                                                code: 'ast',
                                              },
                                            },
                                            {
                                              code: 'approveGrade',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.approveGrade',
                                              compType: 'Input',
                                              name: 'approveGrade',
                                              parents: ['body'],
                                              id: 'body.approveGrade',
                                              dataKey:
                                                '895615_body.approveGrade',
                                            },
                                            {
                                              code: 'approveGradeDesc',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.approveGradeDesc',
                                              compType: 'Input',
                                              name: 'approveGradeDesc',
                                              parents: ['body'],
                                              id: 'body.approveGradeDesc',
                                              dataKey:
                                                '895615_body.approveGradeDesc',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'approveGradeDesc',
                                              },
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
                                                '895615_body.lanApproveGrade',
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
                                                '895615_body.lanApproveGradeDesc',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'lanApproveGradeDesc',
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
                                                '895615_body.areaApproveGrade',
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
                                                '895615_body.areaApproveGradeDesc',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'areaApproveGradeDesc',
                                              },
                                            },
                                            {
                                              code: 'flowCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.flowCode',
                                              compType: 'Input',
                                              name: 'flowCode',
                                              parents: ['body'],
                                              id: 'body.flowCode',
                                              dataKey: '895615_body.flowCode',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'flowCode',
                                              },
                                            },
                                            {
                                              code: 'flowDesc',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.flowDesc',
                                              compType: 'Input',
                                              name: 'flowDesc',
                                              parents: ['body'],
                                              id: 'body.flowDesc',
                                              dataKey: '895615_body.flowDesc',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'flowDesc',
                                              },
                                            },
                                            {
                                              code: 'lanFlowCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.lanFlowCode',
                                              compType: 'Input',
                                              name: 'lanFlowCode',
                                              parents: ['body'],
                                              id: 'body.lanFlowCode',
                                              dataKey:
                                                '895615_body.lanFlowCode',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'lanFlowCode',
                                              },
                                            },
                                            {
                                              code: 'areaFlowCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.areaFlowCode',
                                              compType: 'Input',
                                              name: 'areaFlowCode',
                                              parents: ['body'],
                                              id: 'body.areaFlowCode',
                                              dataKey:
                                                '895615_body.areaFlowCode',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'areaFlowCode',
                                              },
                                            },
                                            {
                                              code: 'extInfo',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.extInfo',
                                              compType: 'Input',
                                              name: 'extInfo',
                                              parents: ['body'],
                                              id: 'body.extInfo',
                                              dataKey: '895615_body.extInfo',
                                            },
                                            {
                                              code: 'areaId',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.areaId',
                                              compType: 'Input',
                                              name: 'areaId',
                                              parents: ['body'],
                                              id: 'body.areaId',
                                              dataKey: '895615_body.areaId',
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
                                              dataKey: '895615_body.lanId',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'lanId',
                                              },
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
                                              dataKey: '895615_body.provinceId',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'provinceId',
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
                                              dataKey: '895615_body.remark',
                                            },
                                          ],
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '895615_body',
                                        },
                                      ],
                                    },
                                    actionObjId: 'apiRequest',
                                    actionObjName: 'system',
                                    value: 'apiRequest',
                                    line_number: 4,
                                  },
                                ],
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166255876461769400,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166255876461777500,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166255876461703520,
                                            children: [
                                              {
                                                dataName: 'condition',
                                                dataId: 166255876461782180,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461798340,
                                                    children: [],
                                                    todoOptions: [
                                                      'msgType',
                                                      'value',
                                                    ],
                                                    options: {
                                                      compId: 'showMessage',
                                                      compName: 'system',
                                                      id: '688924',
                                                      pageJsonId: '2695813',
                                                      type: 'success',
                                                      value:
                                                        '审批矩阵修改成功！',
                                                    },
                                                    actionObjId: 'showMessage',
                                                    actionObjName: 'system',
                                                    value: 'showMessage',
                                                    line_number: 15,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461779100,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166255876461702600,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166255876461716030,
                                                        children: [],
                                                        value: 'callback2',
                                                        params: [],
                                                      },
                                                    ],
                                                    todoOptions: [
                                                      'customFuncName',
                                                      'customFuncParams',
                                                    ],
                                                    options: {
                                                      compId: 'callSelfFunc',
                                                      compName: 'system',
                                                      id: '46784',
                                                      pageJsonId: '2695813',
                                                      customFuncName:
                                                        'onLoadTable',
                                                    },
                                                    actionObjId: 'callSelfFunc',
                                                    actionObjName: 'system',
                                                    value: 'callSelfFunc',
                                                    line_number: 16,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461738660,
                                                    children: [],
                                                    todoOptions: ['disabled'],
                                                    options: {
                                                      compId: 'Form_035658',
                                                      compLib: 'comm',
                                                      pageJsonId: '2695813',
                                                      compName: 'Form',
                                                      id: '52453416',
                                                      disabled: 'true',
                                                    },
                                                    actionObjId: 'Form_035658',
                                                    actionObjName: 'Form',
                                                    value: 'setDisable',
                                                    compLib: 'comm',
                                                    line_number: 17,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461751550,
                                                    children: [],
                                                    todoOptions: [],
                                                    options: {
                                                      compId: 'Form_035658',
                                                      compLib: 'comm',
                                                      pageJsonId: '2695813',
                                                      compName: 'Form',
                                                      id: '8865614',
                                                    },
                                                    actionObjId: 'Form_035658',
                                                    actionObjName: 'Form',
                                                    value: 'resetCurrentForm',
                                                    compLib: 'comm',
                                                    line_number: 18,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461748960,
                                                    children: [],
                                                    todoOptions: ['disabled'],
                                                    options: {
                                                      compId: 'Button_8340845',
                                                      compLib: 'comm',
                                                      pageJsonId: '2695813',
                                                      compName: 'Button',
                                                      id: '093697',
                                                      disabled: 'true',
                                                    },
                                                    actionObjId:
                                                      'Button_8340845',
                                                    actionObjName: 'Button',
                                                    value: 'setDisable',
                                                    compLib: 'comm',
                                                    line_number: 19,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461797400,
                                                    children: [],
                                                    todoOptions: ['disabled'],
                                                    options: {
                                                      compId: 'Button_873123',
                                                      compLib: 'comm',
                                                      pageJsonId: '2695813',
                                                      compName: 'Button',
                                                      id: '20312',
                                                      disabled: 'true',
                                                    },
                                                    actionObjId:
                                                      'Button_873123',
                                                    actionObjName: 'Button',
                                                    value: 'setDisable',
                                                    compLib: 'comm',
                                                    line_number: 20,
                                                  },
                                                ],
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 166255876461791100,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 166255876461747700,
                                                        children: [],
                                                        todoOptions: [
                                                          'msgType',
                                                          'value',
                                                        ],
                                                        options: {
                                                          compId: 'showMessage',
                                                          compName: 'system',
                                                          id: '3714196',
                                                          pageJsonId: '2695813',
                                                          type: 'error',
                                                          value:
                                                            '审批矩阵修改失败！',
                                                        },
                                                        actionObjId:
                                                          'showMessage',
                                                        actionObjName: 'system',
                                                        value: 'showMessage',
                                                        line_number: 21,
                                                      },
                                                    ],
                                                    condition: [],
                                                    desc: 'resultCode != 0 修改失败',
                                                    callback: [
                                                      {
                                                        type: 'showMessage',
                                                        dataId: 166255876461747700,
                                                        options: {
                                                          compId: 'showMessage',
                                                          compName: 'system',
                                                          id: '3714196',
                                                          pageJsonId: '2695813',
                                                          type: 'error',
                                                          value:
                                                            '审批矩阵修改失败！',
                                                        },
                                                        line_number: 21,
                                                      },
                                                    ],
                                                  },
                                                ],
                                                condition: [
                                                  {
                                                    options: {
                                                      useManual: true,
                                                      useObject: false,
                                                      context:
                                                        '$reply_455911129?.resultCode$',
                                                      operate: '==',
                                                      manualValue: '0',
                                                    },
                                                    condId: '966722',
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                desc: 'resultCode = 0 修改成功',
                                                line_number: 14,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166255876461737630,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
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
                                          id: '455911129',
                                          pageJsonId: '2695813',
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
                                              dataKey: '455911129_header',
                                            },
                                            {
                                              code: 'path',
                                              name: '请求路径参数',
                                              attrType: 'object',
                                              _id: 'path',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'path',
                                              dataKey: '455911129_path',
                                            },
                                            {
                                              code: 'query',
                                              name: 'URL 参数',
                                              attrType: 'object',
                                              _id: 'query',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'query',
                                              dataKey: '455911129_query',
                                            },
                                            {
                                              code: 'body',
                                              name: '请求体',
                                              attrType: 'object',
                                              children: [
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
                                                    '455911129_body.approveMatrixId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'approveMatrixId',
                                                  },
                                                },
                                                {
                                                  code: 'catalogItemCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.catalogItemCode',
                                                  compType: 'Input',
                                                  name: 'catalogItemCode',
                                                  parents: ['body'],
                                                  id: 'body.catalogItemCode',
                                                  dataKey:
                                                    '455911129_body.catalogItemCode',
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
                                                  dataKey:
                                                    '455911129_body.matrixTitle',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'matrixTitle',
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
                                                  dataKey:
                                                    '455911129_body.calcExpress',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'expression',
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
                                                  dataKey:
                                                    '455911129_body.calcTranslate',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'displayExpression',
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
                                                  dataKey:
                                                    '455911129_body.calcView',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'ast',
                                                  },
                                                },
                                                {
                                                  code: 'approveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.approveGrade',
                                                  compType: 'Input',
                                                  name: 'approveGrade',
                                                  parents: ['body'],
                                                  id: 'body.approveGrade',
                                                  dataKey:
                                                    '455911129_body.approveGrade',
                                                },
                                                {
                                                  code: 'approveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.approveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'approveGradeDesc',
                                                  parents: ['body'],
                                                  id: 'body.approveGradeDesc',
                                                  dataKey:
                                                    '455911129_body.approveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'approveGradeDesc',
                                                  },
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
                                                    '455911129_body.lanApproveGrade',
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
                                                    '455911129_body.lanApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveGradeDesc',
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
                                                    '455911129_body.areaApproveGrade',
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
                                                    '455911129_body.areaApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveGradeDesc',
                                                  },
                                                },
                                                {
                                                  code: 'flowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.flowCode',
                                                  compType: 'Input',
                                                  name: 'flowCode',
                                                  parents: ['body'],
                                                  id: 'body.flowCode',
                                                  dataKey:
                                                    '455911129_body.flowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'flowCode',
                                                  },
                                                },
                                                {
                                                  code: 'flowDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.flowDesc',
                                                  compType: 'Input',
                                                  name: 'flowDesc',
                                                  parents: ['body'],
                                                  id: 'body.flowDesc',
                                                  dataKey:
                                                    '455911129_body.flowDesc',
                                                },
                                                {
                                                  code: 'lanFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.lanFlowCode',
                                                  compType: 'Input',
                                                  name: 'lanFlowCode',
                                                  parents: ['body'],
                                                  id: 'body.lanFlowCode',
                                                  dataKey:
                                                    '455911129_body.lanFlowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanFlowCode',
                                                  },
                                                },
                                                {
                                                  code: 'areaFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.areaFlowCode',
                                                  compType: 'Input',
                                                  name: 'areaFlowCode',
                                                  parents: ['body'],
                                                  id: 'body.areaFlowCode',
                                                  dataKey:
                                                    '455911129_body.areaFlowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaFlowCode',
                                                  },
                                                },
                                                {
                                                  code: 'extInfo',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.extInfo',
                                                  compType: 'Input',
                                                  name: 'extInfo',
                                                  parents: ['body'],
                                                  id: 'body.extInfo',
                                                  dataKey:
                                                    '455911129_body.extInfo',
                                                },
                                                {
                                                  code: 'areaId',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.areaId',
                                                  compType: 'Input',
                                                  name: 'areaId',
                                                  parents: ['body'],
                                                  id: 'body.areaId',
                                                  dataKey:
                                                    '455911129_body.areaId',
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
                                                  dataKey:
                                                    '455911129_body.lanId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanId',
                                                  },
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
                                                  dataKey:
                                                    '455911129_body.provinceId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'provinceId',
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
                                                  dataKey:
                                                    '455911129_body.remark',
                                                },
                                              ],
                                              _id: 'body',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'body',
                                              dataKey: '455911129_body',
                                            },
                                          ],
                                        },
                                        actionObjId: 'apiRequest',
                                        actionObjName: 'system',
                                        value: 'apiRequest',
                                        line_number: 13,
                                      },
                                    ],
                                    condition: [],
                                    desc: 'operType = mod',
                                    elseIfs: [],
                                    callback: [
                                      {
                                        type: 'apiRequest',
                                        dataId: 166255876461777500,
                                        options: {
                                          compId: 'apiRequest',
                                          compName: 'system',
                                          id: '455911129',
                                          pageJsonId: '2695813',
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
                                              dataKey: '455911129_header',
                                            },
                                            {
                                              code: 'path',
                                              name: '请求路径参数',
                                              attrType: 'object',
                                              _id: 'path',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'path',
                                              dataKey: '455911129_path',
                                            },
                                            {
                                              code: 'query',
                                              name: 'URL 参数',
                                              attrType: 'object',
                                              _id: 'query',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'query',
                                              dataKey: '455911129_query',
                                            },
                                            {
                                              code: 'body',
                                              name: '请求体',
                                              attrType: 'object',
                                              children: [
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
                                                    '455911129_body.approveMatrixId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'approveMatrixId',
                                                  },
                                                },
                                                {
                                                  code: 'catalogItemCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.catalogItemCode',
                                                  compType: 'Input',
                                                  name: 'catalogItemCode',
                                                  parents: ['body'],
                                                  id: 'body.catalogItemCode',
                                                  dataKey:
                                                    '455911129_body.catalogItemCode',
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
                                                  dataKey:
                                                    '455911129_body.matrixTitle',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'matrixTitle',
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
                                                  dataKey:
                                                    '455911129_body.calcExpress',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'expression',
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
                                                  dataKey:
                                                    '455911129_body.calcTranslate',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'displayExpression',
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
                                                  dataKey:
                                                    '455911129_body.calcView',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'ast',
                                                  },
                                                },
                                                {
                                                  code: 'approveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.approveGrade',
                                                  compType: 'Input',
                                                  name: 'approveGrade',
                                                  parents: ['body'],
                                                  id: 'body.approveGrade',
                                                  dataKey:
                                                    '455911129_body.approveGrade',
                                                },
                                                {
                                                  code: 'approveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.approveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'approveGradeDesc',
                                                  parents: ['body'],
                                                  id: 'body.approveGradeDesc',
                                                  dataKey:
                                                    '455911129_body.approveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'approveGradeDesc',
                                                  },
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
                                                    '455911129_body.lanApproveGrade',
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
                                                    '455911129_body.lanApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveGradeDesc',
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
                                                    '455911129_body.areaApproveGrade',
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
                                                    '455911129_body.areaApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveGradeDesc',
                                                  },
                                                },
                                                {
                                                  code: 'flowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.flowCode',
                                                  compType: 'Input',
                                                  name: 'flowCode',
                                                  parents: ['body'],
                                                  id: 'body.flowCode',
                                                  dataKey:
                                                    '455911129_body.flowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'flowCode',
                                                  },
                                                },
                                                {
                                                  code: 'flowDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.flowDesc',
                                                  compType: 'Input',
                                                  name: 'flowDesc',
                                                  parents: ['body'],
                                                  id: 'body.flowDesc',
                                                  dataKey:
                                                    '455911129_body.flowDesc',
                                                },
                                                {
                                                  code: 'lanFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.lanFlowCode',
                                                  compType: 'Input',
                                                  name: 'lanFlowCode',
                                                  parents: ['body'],
                                                  id: 'body.lanFlowCode',
                                                  dataKey:
                                                    '455911129_body.lanFlowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanFlowCode',
                                                  },
                                                },
                                                {
                                                  code: 'areaFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.areaFlowCode',
                                                  compType: 'Input',
                                                  name: 'areaFlowCode',
                                                  parents: ['body'],
                                                  id: 'body.areaFlowCode',
                                                  dataKey:
                                                    '455911129_body.areaFlowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaFlowCode',
                                                  },
                                                },
                                                {
                                                  code: 'extInfo',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.extInfo',
                                                  compType: 'Input',
                                                  name: 'extInfo',
                                                  parents: ['body'],
                                                  id: 'body.extInfo',
                                                  dataKey:
                                                    '455911129_body.extInfo',
                                                },
                                                {
                                                  code: 'areaId',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.areaId',
                                                  compType: 'Input',
                                                  name: 'areaId',
                                                  parents: ['body'],
                                                  id: 'body.areaId',
                                                  dataKey:
                                                    '455911129_body.areaId',
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
                                                  dataKey:
                                                    '455911129_body.lanId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanId',
                                                  },
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
                                                  dataKey:
                                                    '455911129_body.provinceId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'provinceId',
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
                                                  dataKey:
                                                    '455911129_body.remark',
                                                },
                                              ],
                                              _id: 'body',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'body',
                                              dataKey: '455911129_body',
                                            },
                                          ],
                                        },
                                        line_number: 13,
                                        callback1: [
                                          {
                                            type: 'ifelse',
                                            condition: [
                                              {
                                                options: {
                                                  useManual: true,
                                                  useObject: false,
                                                  context:
                                                    '$reply_455911129?.resultCode$',
                                                  operate: '==',
                                                  manualValue: '0',
                                                },
                                                condId: '966722',
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            dataId: 166255876461782180,
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 166255876461791100,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461747700,
                                                    children: [],
                                                    todoOptions: [
                                                      'msgType',
                                                      'value',
                                                    ],
                                                    options: {
                                                      compId: 'showMessage',
                                                      compName: 'system',
                                                      id: '3714196',
                                                      pageJsonId: '2695813',
                                                      type: 'error',
                                                      value:
                                                        '审批矩阵修改失败！',
                                                    },
                                                    actionObjId: 'showMessage',
                                                    actionObjName: 'system',
                                                    value: 'showMessage',
                                                    line_number: 21,
                                                  },
                                                ],
                                                condition: [],
                                                desc: 'resultCode != 0 修改失败',
                                                callback: [
                                                  {
                                                    type: 'showMessage',
                                                    dataId: 166255876461747700,
                                                    options: {
                                                      compId: 'showMessage',
                                                      compName: 'system',
                                                      id: '3714196',
                                                      pageJsonId: '2695813',
                                                      type: 'error',
                                                      value:
                                                        '审批矩阵修改失败！',
                                                    },
                                                    line_number: 21,
                                                  },
                                                ],
                                              },
                                            ],
                                            line_number: 14,
                                            callback1: [
                                              {
                                                type: 'showMessage',
                                                dataId: 166255876461798340,
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '688924',
                                                  pageJsonId: '2695813',
                                                  type: 'success',
                                                  value: '审批矩阵修改成功！',
                                                },
                                                line_number: 15,
                                              },
                                              {
                                                type: 'callSelfFunc',
                                                dataId: 166255876461779100,
                                                options: {
                                                  compId: 'callSelfFunc',
                                                  compName: 'system',
                                                  id: '46784',
                                                  pageJsonId: '2695813',
                                                  customFuncName: 'onLoadTable',
                                                },
                                                line_number: 16,
                                                callback1: [],
                                                callback2: [],
                                              },
                                              {
                                                type: 'setDisable',
                                                dataId: 166255876461738660,
                                                options: {
                                                  compId: 'Form_035658',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Form',
                                                  id: '52453416',
                                                  disabled: 'true',
                                                },
                                                line_number: 17,
                                              },
                                              {
                                                type: 'resetCurrentForm',
                                                dataId: 166255876461751550,
                                                options: {
                                                  compId: 'Form_035658',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Form',
                                                  id: '8865614',
                                                },
                                                line_number: 18,
                                              },
                                              {
                                                type: 'setDisable',
                                                dataId: 166255876461748960,
                                                options: {
                                                  compId: 'Button_8340845',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '093697',
                                                  disabled: 'true',
                                                },
                                                line_number: 19,
                                              },
                                              {
                                                type: 'setDisable',
                                                dataId: 166255876461797400,
                                                options: {
                                                  compId: 'Button_873123',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '20312',
                                                  disabled: 'true',
                                                },
                                                line_number: 20,
                                              },
                                            ],
                                          },
                                        ],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ],
                                condition: [
                                  {
                                    condId: '671845',
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
                                desc: 'operType = add',
                                line_number: 3,
                              },
                            ],
                            condition: [],
                            desc: '矩阵配置正确',
                            elseIfs: [],
                            callback: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '671845',
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
                                dataId: 166255876461743260,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166255876461769400,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166255876461777500,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166255876461703520,
                                            children: [
                                              {
                                                dataName: 'condition',
                                                dataId: 166255876461782180,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461798340,
                                                    children: [],
                                                    todoOptions: [
                                                      'msgType',
                                                      'value',
                                                    ],
                                                    options: {
                                                      compId: 'showMessage',
                                                      compName: 'system',
                                                      id: '688924',
                                                      pageJsonId: '2695813',
                                                      type: 'success',
                                                      value:
                                                        '审批矩阵修改成功！',
                                                    },
                                                    actionObjId: 'showMessage',
                                                    actionObjName: 'system',
                                                    value: 'showMessage',
                                                    line_number: 15,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461779100,
                                                    children: [
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166255876461702600,
                                                        children: [],
                                                        value: 'callback1',
                                                        params: [],
                                                      },
                                                      {
                                                        dataName: 'callback',
                                                        dataId: 166255876461716030,
                                                        children: [],
                                                        value: 'callback2',
                                                        params: [],
                                                      },
                                                    ],
                                                    todoOptions: [
                                                      'customFuncName',
                                                      'customFuncParams',
                                                    ],
                                                    options: {
                                                      compId: 'callSelfFunc',
                                                      compName: 'system',
                                                      id: '46784',
                                                      pageJsonId: '2695813',
                                                      customFuncName:
                                                        'onLoadTable',
                                                    },
                                                    actionObjId: 'callSelfFunc',
                                                    actionObjName: 'system',
                                                    value: 'callSelfFunc',
                                                    line_number: 16,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461738660,
                                                    children: [],
                                                    todoOptions: ['disabled'],
                                                    options: {
                                                      compId: 'Form_035658',
                                                      compLib: 'comm',
                                                      pageJsonId: '2695813',
                                                      compName: 'Form',
                                                      id: '52453416',
                                                      disabled: 'true',
                                                    },
                                                    actionObjId: 'Form_035658',
                                                    actionObjName: 'Form',
                                                    value: 'setDisable',
                                                    compLib: 'comm',
                                                    line_number: 17,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461751550,
                                                    children: [],
                                                    todoOptions: [],
                                                    options: {
                                                      compId: 'Form_035658',
                                                      compLib: 'comm',
                                                      pageJsonId: '2695813',
                                                      compName: 'Form',
                                                      id: '8865614',
                                                    },
                                                    actionObjId: 'Form_035658',
                                                    actionObjName: 'Form',
                                                    value: 'resetCurrentForm',
                                                    compLib: 'comm',
                                                    line_number: 18,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461748960,
                                                    children: [],
                                                    todoOptions: ['disabled'],
                                                    options: {
                                                      compId: 'Button_8340845',
                                                      compLib: 'comm',
                                                      pageJsonId: '2695813',
                                                      compName: 'Button',
                                                      id: '093697',
                                                      disabled: 'true',
                                                    },
                                                    actionObjId:
                                                      'Button_8340845',
                                                    actionObjName: 'Button',
                                                    value: 'setDisable',
                                                    compLib: 'comm',
                                                    line_number: 19,
                                                  },
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461797400,
                                                    children: [],
                                                    todoOptions: ['disabled'],
                                                    options: {
                                                      compId: 'Button_873123',
                                                      compLib: 'comm',
                                                      pageJsonId: '2695813',
                                                      compName: 'Button',
                                                      id: '20312',
                                                      disabled: 'true',
                                                    },
                                                    actionObjId:
                                                      'Button_873123',
                                                    actionObjName: 'Button',
                                                    value: 'setDisable',
                                                    compLib: 'comm',
                                                    line_number: 20,
                                                  },
                                                ],
                                                elseIfs: [
                                                  {
                                                    dataName: 'elseIf',
                                                    dataId: 166255876461791100,
                                                    children: [
                                                      {
                                                        dataName: 'action',
                                                        dataId: 166255876461747700,
                                                        children: [],
                                                        todoOptions: [
                                                          'msgType',
                                                          'value',
                                                        ],
                                                        options: {
                                                          compId: 'showMessage',
                                                          compName: 'system',
                                                          id: '3714196',
                                                          pageJsonId: '2695813',
                                                          type: 'error',
                                                          value:
                                                            '审批矩阵修改失败！',
                                                        },
                                                        actionObjId:
                                                          'showMessage',
                                                        actionObjName: 'system',
                                                        value: 'showMessage',
                                                        line_number: 21,
                                                      },
                                                    ],
                                                    condition: [],
                                                    desc: 'resultCode != 0 修改失败',
                                                    callback: [
                                                      {
                                                        type: 'showMessage',
                                                        dataId: 166255876461747700,
                                                        options: {
                                                          compId: 'showMessage',
                                                          compName: 'system',
                                                          id: '3714196',
                                                          pageJsonId: '2695813',
                                                          type: 'error',
                                                          value:
                                                            '审批矩阵修改失败！',
                                                        },
                                                        line_number: 21,
                                                      },
                                                    ],
                                                  },
                                                ],
                                                condition: [
                                                  {
                                                    options: {
                                                      useManual: true,
                                                      useObject: false,
                                                      context:
                                                        '$reply_455911129?.resultCode$',
                                                      operate: '==',
                                                      manualValue: '0',
                                                    },
                                                    condId: '966722',
                                                    conditionType:
                                                      'checkContextValue',
                                                    objType: 'system',
                                                    objId: 'sys',
                                                  },
                                                ],
                                                desc: 'resultCode = 0 修改成功',
                                                line_number: 14,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166255876461737630,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
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
                                          id: '455911129',
                                          pageJsonId: '2695813',
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
                                              dataKey: '455911129_header',
                                            },
                                            {
                                              code: 'path',
                                              name: '请求路径参数',
                                              attrType: 'object',
                                              _id: 'path',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'path',
                                              dataKey: '455911129_path',
                                            },
                                            {
                                              code: 'query',
                                              name: 'URL 参数',
                                              attrType: 'object',
                                              _id: 'query',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'query',
                                              dataKey: '455911129_query',
                                            },
                                            {
                                              code: 'body',
                                              name: '请求体',
                                              attrType: 'object',
                                              children: [
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
                                                    '455911129_body.approveMatrixId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'approveMatrixId',
                                                  },
                                                },
                                                {
                                                  code: 'catalogItemCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.catalogItemCode',
                                                  compType: 'Input',
                                                  name: 'catalogItemCode',
                                                  parents: ['body'],
                                                  id: 'body.catalogItemCode',
                                                  dataKey:
                                                    '455911129_body.catalogItemCode',
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
                                                  dataKey:
                                                    '455911129_body.matrixTitle',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'matrixTitle',
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
                                                  dataKey:
                                                    '455911129_body.calcExpress',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'expression',
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
                                                  dataKey:
                                                    '455911129_body.calcTranslate',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'displayExpression',
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
                                                  dataKey:
                                                    '455911129_body.calcView',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'ast',
                                                  },
                                                },
                                                {
                                                  code: 'approveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.approveGrade',
                                                  compType: 'Input',
                                                  name: 'approveGrade',
                                                  parents: ['body'],
                                                  id: 'body.approveGrade',
                                                  dataKey:
                                                    '455911129_body.approveGrade',
                                                },
                                                {
                                                  code: 'approveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.approveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'approveGradeDesc',
                                                  parents: ['body'],
                                                  id: 'body.approveGradeDesc',
                                                  dataKey:
                                                    '455911129_body.approveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'approveGradeDesc',
                                                  },
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
                                                    '455911129_body.lanApproveGrade',
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
                                                    '455911129_body.lanApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveGradeDesc',
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
                                                    '455911129_body.areaApproveGrade',
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
                                                    '455911129_body.areaApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveGradeDesc',
                                                  },
                                                },
                                                {
                                                  code: 'flowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.flowCode',
                                                  compType: 'Input',
                                                  name: 'flowCode',
                                                  parents: ['body'],
                                                  id: 'body.flowCode',
                                                  dataKey:
                                                    '455911129_body.flowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'flowCode',
                                                  },
                                                },
                                                {
                                                  code: 'flowDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.flowDesc',
                                                  compType: 'Input',
                                                  name: 'flowDesc',
                                                  parents: ['body'],
                                                  id: 'body.flowDesc',
                                                  dataKey:
                                                    '455911129_body.flowDesc',
                                                },
                                                {
                                                  code: 'lanFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.lanFlowCode',
                                                  compType: 'Input',
                                                  name: 'lanFlowCode',
                                                  parents: ['body'],
                                                  id: 'body.lanFlowCode',
                                                  dataKey:
                                                    '455911129_body.lanFlowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanFlowCode',
                                                  },
                                                },
                                                {
                                                  code: 'areaFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.areaFlowCode',
                                                  compType: 'Input',
                                                  name: 'areaFlowCode',
                                                  parents: ['body'],
                                                  id: 'body.areaFlowCode',
                                                  dataKey:
                                                    '455911129_body.areaFlowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaFlowCode',
                                                  },
                                                },
                                                {
                                                  code: 'extInfo',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.extInfo',
                                                  compType: 'Input',
                                                  name: 'extInfo',
                                                  parents: ['body'],
                                                  id: 'body.extInfo',
                                                  dataKey:
                                                    '455911129_body.extInfo',
                                                },
                                                {
                                                  code: 'areaId',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.areaId',
                                                  compType: 'Input',
                                                  name: 'areaId',
                                                  parents: ['body'],
                                                  id: 'body.areaId',
                                                  dataKey:
                                                    '455911129_body.areaId',
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
                                                  dataKey:
                                                    '455911129_body.lanId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanId',
                                                  },
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
                                                  dataKey:
                                                    '455911129_body.provinceId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'provinceId',
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
                                                  dataKey:
                                                    '455911129_body.remark',
                                                },
                                              ],
                                              _id: 'body',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'body',
                                              dataKey: '455911129_body',
                                            },
                                          ],
                                        },
                                        actionObjId: 'apiRequest',
                                        actionObjName: 'system',
                                        value: 'apiRequest',
                                        line_number: 13,
                                      },
                                    ],
                                    condition: [],
                                    desc: 'operType = mod',
                                    elseIfs: [],
                                    callback: [
                                      {
                                        type: 'apiRequest',
                                        dataId: 166255876461777500,
                                        options: {
                                          compId: 'apiRequest',
                                          compName: 'system',
                                          id: '455911129',
                                          pageJsonId: '2695813',
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
                                              dataKey: '455911129_header',
                                            },
                                            {
                                              code: 'path',
                                              name: '请求路径参数',
                                              attrType: 'object',
                                              _id: 'path',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'path',
                                              dataKey: '455911129_path',
                                            },
                                            {
                                              code: 'query',
                                              name: 'URL 参数',
                                              attrType: 'object',
                                              _id: 'query',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'query',
                                              dataKey: '455911129_query',
                                            },
                                            {
                                              code: 'body',
                                              name: '请求体',
                                              attrType: 'object',
                                              children: [
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
                                                    '455911129_body.approveMatrixId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'approveMatrixId',
                                                  },
                                                },
                                                {
                                                  code: 'catalogItemCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.catalogItemCode',
                                                  compType: 'Input',
                                                  name: 'catalogItemCode',
                                                  parents: ['body'],
                                                  id: 'body.catalogItemCode',
                                                  dataKey:
                                                    '455911129_body.catalogItemCode',
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
                                                  dataKey:
                                                    '455911129_body.matrixTitle',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'matrixTitle',
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
                                                  dataKey:
                                                    '455911129_body.calcExpress',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'expression',
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
                                                  dataKey:
                                                    '455911129_body.calcTranslate',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'displayExpression',
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
                                                  dataKey:
                                                    '455911129_body.calcView',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'ast',
                                                  },
                                                },
                                                {
                                                  code: 'approveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.approveGrade',
                                                  compType: 'Input',
                                                  name: 'approveGrade',
                                                  parents: ['body'],
                                                  id: 'body.approveGrade',
                                                  dataKey:
                                                    '455911129_body.approveGrade',
                                                },
                                                {
                                                  code: 'approveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.approveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'approveGradeDesc',
                                                  parents: ['body'],
                                                  id: 'body.approveGradeDesc',
                                                  dataKey:
                                                    '455911129_body.approveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'approveGradeDesc',
                                                  },
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
                                                    '455911129_body.lanApproveGrade',
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
                                                    '455911129_body.lanApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveGradeDesc',
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
                                                    '455911129_body.areaApproveGrade',
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
                                                    '455911129_body.areaApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveGradeDesc',
                                                  },
                                                },
                                                {
                                                  code: 'flowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.flowCode',
                                                  compType: 'Input',
                                                  name: 'flowCode',
                                                  parents: ['body'],
                                                  id: 'body.flowCode',
                                                  dataKey:
                                                    '455911129_body.flowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'flowCode',
                                                  },
                                                },
                                                {
                                                  code: 'flowDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.flowDesc',
                                                  compType: 'Input',
                                                  name: 'flowDesc',
                                                  parents: ['body'],
                                                  id: 'body.flowDesc',
                                                  dataKey:
                                                    '455911129_body.flowDesc',
                                                },
                                                {
                                                  code: 'lanFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.lanFlowCode',
                                                  compType: 'Input',
                                                  name: 'lanFlowCode',
                                                  parents: ['body'],
                                                  id: 'body.lanFlowCode',
                                                  dataKey:
                                                    '455911129_body.lanFlowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanFlowCode',
                                                  },
                                                },
                                                {
                                                  code: 'areaFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.areaFlowCode',
                                                  compType: 'Input',
                                                  name: 'areaFlowCode',
                                                  parents: ['body'],
                                                  id: 'body.areaFlowCode',
                                                  dataKey:
                                                    '455911129_body.areaFlowCode',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaFlowCode',
                                                  },
                                                },
                                                {
                                                  code: 'extInfo',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.extInfo',
                                                  compType: 'Input',
                                                  name: 'extInfo',
                                                  parents: ['body'],
                                                  id: 'body.extInfo',
                                                  dataKey:
                                                    '455911129_body.extInfo',
                                                },
                                                {
                                                  code: 'areaId',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'body.areaId',
                                                  compType: 'Input',
                                                  name: 'areaId',
                                                  parents: ['body'],
                                                  id: 'body.areaId',
                                                  dataKey:
                                                    '455911129_body.areaId',
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
                                                  dataKey:
                                                    '455911129_body.lanId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanId',
                                                  },
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
                                                  dataKey:
                                                    '455911129_body.provinceId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'provinceId',
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
                                                  dataKey:
                                                    '455911129_body.remark',
                                                },
                                              ],
                                              _id: 'body',
                                              compType: 'Input',
                                              parents: [],
                                              id: 'body',
                                              dataKey: '455911129_body',
                                            },
                                          ],
                                        },
                                        line_number: 13,
                                        callback1: [
                                          {
                                            type: 'ifelse',
                                            condition: [
                                              {
                                                options: {
                                                  useManual: true,
                                                  useObject: false,
                                                  context:
                                                    '$reply_455911129?.resultCode$',
                                                  operate: '==',
                                                  manualValue: '0',
                                                },
                                                condId: '966722',
                                                conditionType:
                                                  'checkContextValue',
                                                objType: 'system',
                                                objId: 'sys',
                                              },
                                            ],
                                            dataId: 166255876461782180,
                                            elseIfs: [
                                              {
                                                dataName: 'elseIf',
                                                dataId: 166255876461791100,
                                                children: [
                                                  {
                                                    dataName: 'action',
                                                    dataId: 166255876461747700,
                                                    children: [],
                                                    todoOptions: [
                                                      'msgType',
                                                      'value',
                                                    ],
                                                    options: {
                                                      compId: 'showMessage',
                                                      compName: 'system',
                                                      id: '3714196',
                                                      pageJsonId: '2695813',
                                                      type: 'error',
                                                      value:
                                                        '审批矩阵修改失败！',
                                                    },
                                                    actionObjId: 'showMessage',
                                                    actionObjName: 'system',
                                                    value: 'showMessage',
                                                    line_number: 21,
                                                  },
                                                ],
                                                condition: [],
                                                desc: 'resultCode != 0 修改失败',
                                                callback: [
                                                  {
                                                    type: 'showMessage',
                                                    dataId: 166255876461747700,
                                                    options: {
                                                      compId: 'showMessage',
                                                      compName: 'system',
                                                      id: '3714196',
                                                      pageJsonId: '2695813',
                                                      type: 'error',
                                                      value:
                                                        '审批矩阵修改失败！',
                                                    },
                                                    line_number: 21,
                                                  },
                                                ],
                                              },
                                            ],
                                            line_number: 14,
                                            callback1: [
                                              {
                                                type: 'showMessage',
                                                dataId: 166255876461798340,
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '688924',
                                                  pageJsonId: '2695813',
                                                  type: 'success',
                                                  value: '审批矩阵修改成功！',
                                                },
                                                line_number: 15,
                                              },
                                              {
                                                type: 'callSelfFunc',
                                                dataId: 166255876461779100,
                                                options: {
                                                  compId: 'callSelfFunc',
                                                  compName: 'system',
                                                  id: '46784',
                                                  pageJsonId: '2695813',
                                                  customFuncName: 'onLoadTable',
                                                },
                                                line_number: 16,
                                                callback1: [],
                                                callback2: [],
                                              },
                                              {
                                                type: 'setDisable',
                                                dataId: 166255876461738660,
                                                options: {
                                                  compId: 'Form_035658',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Form',
                                                  id: '52453416',
                                                  disabled: 'true',
                                                },
                                                line_number: 17,
                                              },
                                              {
                                                type: 'resetCurrentForm',
                                                dataId: 166255876461751550,
                                                options: {
                                                  compId: 'Form_035658',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Form',
                                                  id: '8865614',
                                                },
                                                line_number: 18,
                                              },
                                              {
                                                type: 'setDisable',
                                                dataId: 166255876461748960,
                                                options: {
                                                  compId: 'Button_8340845',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '093697',
                                                  disabled: 'true',
                                                },
                                                line_number: 19,
                                              },
                                              {
                                                type: 'setDisable',
                                                dataId: 166255876461797400,
                                                options: {
                                                  compId: 'Button_873123',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '20312',
                                                  disabled: 'true',
                                                },
                                                line_number: 20,
                                              },
                                            ],
                                          },
                                        ],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ],
                                line_number: 3,
                                callback1: [
                                  {
                                    type: 'apiRequest',
                                    dataId: 166255876461709950,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '895615',
                                      pageJsonId: '2695813',
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
                                          dataKey: '895615_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          _id: 'path',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'path',
                                          dataKey: '895615_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '895615_query',
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
                                              dataKey:
                                                '895615_body.catalogCode',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.catalogCode$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              code: 'catalogItemCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.catalogItemCode',
                                              compType: 'Input',
                                              name: 'catalogItemCode',
                                              parents: ['body'],
                                              id: 'body.catalogItemCode',
                                              dataKey:
                                                '895615_body.catalogItemCode',
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
                                              dataKey:
                                                '895615_body.matrixTitle',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'matrixTitle',
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
                                              dataKey:
                                                '895615_body.calcExpress',
                                              value: {
                                                type: [
                                                  'datasource',
                                                  'remote_data',
                                                  'data',
                                                ],
                                                code: 'expression',
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
                                              dataKey:
                                                '895615_body.calcTranslate',
                                              value: {
                                                type: [
                                                  'datasource',
                                                  'remote_data',
                                                  'data',
                                                ],
                                                code: 'displayExpression',
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
                                              dataKey: '895615_body.calcView',
                                              value: {
                                                type: [
                                                  'datasource',
                                                  'remote_data',
                                                  'data',
                                                ],
                                                code: 'ast',
                                              },
                                            },
                                            {
                                              code: 'approveGrade',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.approveGrade',
                                              compType: 'Input',
                                              name: 'approveGrade',
                                              parents: ['body'],
                                              id: 'body.approveGrade',
                                              dataKey:
                                                '895615_body.approveGrade',
                                            },
                                            {
                                              code: 'approveGradeDesc',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.approveGradeDesc',
                                              compType: 'Input',
                                              name: 'approveGradeDesc',
                                              parents: ['body'],
                                              id: 'body.approveGradeDesc',
                                              dataKey:
                                                '895615_body.approveGradeDesc',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'approveGradeDesc',
                                              },
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
                                                '895615_body.lanApproveGrade',
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
                                                '895615_body.lanApproveGradeDesc',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'lanApproveGradeDesc',
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
                                                '895615_body.areaApproveGrade',
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
                                                '895615_body.areaApproveGradeDesc',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'areaApproveGradeDesc',
                                              },
                                            },
                                            {
                                              code: 'flowCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.flowCode',
                                              compType: 'Input',
                                              name: 'flowCode',
                                              parents: ['body'],
                                              id: 'body.flowCode',
                                              dataKey: '895615_body.flowCode',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'flowCode',
                                              },
                                            },
                                            {
                                              code: 'flowDesc',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.flowDesc',
                                              compType: 'Input',
                                              name: 'flowDesc',
                                              parents: ['body'],
                                              id: 'body.flowDesc',
                                              dataKey: '895615_body.flowDesc',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'flowDesc',
                                              },
                                            },
                                            {
                                              code: 'lanFlowCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.lanFlowCode',
                                              compType: 'Input',
                                              name: 'lanFlowCode',
                                              parents: ['body'],
                                              id: 'body.lanFlowCode',
                                              dataKey:
                                                '895615_body.lanFlowCode',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'lanFlowCode',
                                              },
                                            },
                                            {
                                              code: 'areaFlowCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.areaFlowCode',
                                              compType: 'Input',
                                              name: 'areaFlowCode',
                                              parents: ['body'],
                                              id: 'body.areaFlowCode',
                                              dataKey:
                                                '895615_body.areaFlowCode',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'areaFlowCode',
                                              },
                                            },
                                            {
                                              code: 'extInfo',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.extInfo',
                                              compType: 'Input',
                                              name: 'extInfo',
                                              parents: ['body'],
                                              id: 'body.extInfo',
                                              dataKey: '895615_body.extInfo',
                                            },
                                            {
                                              code: 'areaId',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.areaId',
                                              compType: 'Input',
                                              name: 'areaId',
                                              parents: ['body'],
                                              id: 'body.areaId',
                                              dataKey: '895615_body.areaId',
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
                                              dataKey: '895615_body.lanId',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'lanId',
                                              },
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
                                              dataKey: '895615_body.provinceId',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_035658',
                                                  'validateFields',
                                                ],
                                                code: 'provinceId',
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
                                              dataKey: '895615_body.remark',
                                            },
                                          ],
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '895615_body',
                                        },
                                      ],
                                    },
                                    line_number: 4,
                                    callback1: [
                                      {
                                        type: 'ifelse',
                                        condition: [
                                          {
                                            condId: '472881',
                                            options: {
                                              useManual: true,
                                              useObject: false,
                                              context:
                                                '$reply_895615?.resultCode$',
                                              operate: '==',
                                              manualValue: '0',
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 166255876461714900,
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 166255876461705730,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166255876461711780,
                                                children: [],
                                                todoOptions: [
                                                  'msgType',
                                                  'value',
                                                ],
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '28277',
                                                  pageJsonId: '2695813',
                                                  type: 'error',
                                                  value: '审批矩阵新增失败！',
                                                },
                                                actionObjId: 'showMessage',
                                                actionObjName: 'system',
                                                value: 'showMessage',
                                                line_number: 12,
                                              },
                                            ],
                                            condition: [],
                                            desc: 'resultCode != 0 新增失败',
                                            callback: [
                                              {
                                                type: 'showMessage',
                                                dataId: 166255876461711780,
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '28277',
                                                  pageJsonId: '2695813',
                                                  type: 'error',
                                                  value: '审批矩阵新增失败！',
                                                },
                                                line_number: 12,
                                              },
                                            ],
                                          },
                                        ],
                                        line_number: 5,
                                        callback1: [
                                          {
                                            type: 'showMessage',
                                            dataId: 166255876461752580,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '31063',
                                              pageJsonId: '2695813',
                                              type: 'success',
                                              value: '审批矩阵新增成功！',
                                            },
                                            line_number: 6,
                                          },
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 166255876461718720,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '288321',
                                              pageJsonId: '2695813',
                                              customFuncName: 'onLoadTable',
                                            },
                                            line_number: 7,
                                            callback1: [],
                                            callback2: [],
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166255876461742720,
                                            options: {
                                              compId: 'Form_035658',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Form',
                                              id: '7298857',
                                              disabled: 'true',
                                            },
                                            line_number: 8,
                                          },
                                          {
                                            type: 'resetCurrentForm',
                                            dataId: 166255876461705950,
                                            options: {
                                              compId: 'Form_035658',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Form',
                                              id: '2839357',
                                            },
                                            line_number: 9,
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166255876461766000,
                                            options: {
                                              compId: 'Button_8340845',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Button',
                                              id: '486079',
                                              disabled: 'true',
                                            },
                                            line_number: 10,
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166255876461767170,
                                            options: {
                                              compId: 'Button_873123',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Button',
                                              id: '8601946',
                                              disabled: 'true',
                                            },
                                            line_number: 11,
                                          },
                                        ],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        line_number: 1,
                        callback1: [
                          {
                            type: 'showMessage',
                            dataId: 166255872920097020,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '32145',
                              pageJsonId: '2695813',
                              type: 'error',
                              value: '$data.remote_data.error$',
                            },
                            line_number: 2,
                          },
                        ],
                      },
                    ];
                    eventDataifelse524.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataifelse524, { e }, 'ifelse', {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_8340845')}
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
                    id: 'Button_873123',
                    uid: 'Button_873123',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const forms152 = getFormByCompId('Form_035658', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms152) ? forms152 : [forms152]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatasetDisable162: any = [
                      {
                        type: 'setDisable',
                        dataId: 166236351490648700,
                        options: {
                          compId: 'Form_035658',
                          compLib: 'comm',
                          pageJsonId: '2695813',
                          compName: 'Form',
                          id: '1995927',
                          disabled: 'true',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDatasetDisable162.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable162, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable163: any = [
                      {
                        type: 'setDisable',
                        dataId: 166236351964250300,
                        options: {
                          compId: 'Button_8340845',
                          compLib: 'comm',
                          pageJsonId: '2695813',
                          compName: 'Button',
                          id: '387915',
                          disabled: 'true',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDatasetDisable163.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable163, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable164: any = [
                      {
                        type: 'setDisable',
                        dataId: 166236352250182460,
                        options: {
                          compId: 'Button_873123',
                          compLib: 'comm',
                          pageJsonId: '2695813',
                          compName: 'Button',
                          id: '64165',
                          disabled: 'true',
                        },
                        line_number: 4,
                      },
                    ];
                    eventDatasetDisable164.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable164, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_873123')}
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

export default withPageHOC(Jzpzgxlcyjzys$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { sceneCode: '', sceneId: '', nodeObj: '' },
});
