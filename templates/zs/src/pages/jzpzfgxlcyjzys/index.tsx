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

const pageId = '882205278798561280';
const Jzpzfgxlcyjzys$$Page: React.FC<PageProps> = ({
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
    const eventDatareloadDataSource14: any = [
      {
        type: 'reloadDataSource',
        dataId: 166660567253143100,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '55268',
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
                  attrId: '0859977',
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
                      attrId: '132155',
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
                      attrId: '0209636',
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
                      attrId: '507823',
                      code: 'sceneId',
                      name: 'sceneId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'long',
                    },
                    {
                      attrId: '086842',
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
                      attrId: '7569246',
                      code: 'importantApproveGrade',
                      name: 'importantApproveGrade',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '269565',
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
    eventDatareloadDataSource14.params =
      [
        {
          title: '事件入参',
          name: 'options_0806668',
          value: '$options_0806668$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource14,
      { options_0806668 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const forms2 = getFormByCompId('Form_035658', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms2) ? forms2 : [forms2]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetDisable7: any = [
      {
        type: 'setDisable',
        dataId: 166677824873528480,
        options: {
          compId: 'Form_035658',
          compLib: 'comm',
          pageJsonId: '2695813',
          compName: 'Form',
          id: '171155',
          disabled: 'true',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable7.params =
      [
        {
          title: '事件入参',
          name: 'options_0806668',
          value: '$options_0806668$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable7, { options_0806668 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable8: any = [
      {
        type: 'setDisable',
        dataId: 166677825401320580,
        options: {
          compId: 'Button_8340845',
          compLib: 'comm',
          pageJsonId: '2695813',
          compName: 'Button',
          id: '0947644',
          disabled: 'true',
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable8.params =
      [
        {
          title: '事件入参',
          name: 'options_0806668',
          value: '$options_0806668$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable8, { options_0806668 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable9: any = [
      {
        type: 'setDisable',
        dataId: 166677825804986940,
        options: {
          compId: 'Button_873123',
          compLib: 'comm',
          pageJsonId: '2695813',
          compName: 'Button',
          id: '128074',
          disabled: 'true',
        },
        line_number: 5,
      },
    ];
    eventDatasetDisable9.params =
      [
        {
          title: '事件入参',
          name: 'options_0806668',
          value: '$options_0806668$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable9, { options_0806668 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };
  const matrixPassTypeChange = (options_81031: any) => {
    const eventDatagetValue45: any = [
      {
        type: 'getValue',
        dataId: 167152598889796130,
        options: {
          compId: 'Select_304001',
          compLib: 'comm',
          pageJsonId: '2695813',
          compName: 'Select',
          id: '9206019',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '3649964',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$value_9206019$',
                  operate: '==',
                  manualValue: '1001',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167152608953230600,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167152873051142980,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167152873458311970,
                    children: [],
                    todoOptions: ['required', 'selectComp'],
                    options: {
                      compId: ['Select_163295', 'Select_5550348'],
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '111816',
                      required: '',
                      compid: ['Select_163295', 'Select_5550348'],
                    },
                    actionObjId: 'Select_163295',
                    actionObjName: 'Select',
                    value: 'setRequired',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 5,
                  },
                  {
                    dataName: 'action',
                    dataId: 167152873876730100,
                    children: [],
                    todoOptions: ['disabled', 'selectComp'],
                    options: {
                      compId: [
                        'Select_163295',
                        'Select_0218257',
                        'Select_606786',
                        'Select_5550348',
                        'Select_974786',
                        'Select_401873',
                        'Input_033825',
                        'Input_896358',
                        'Input_919808',
                        'Input_918023',
                      ],
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '366224',
                      disabled: 'true',
                      compid: [
                        'Select_163295',
                        'Select_0218257',
                        'Select_606786',
                        'Select_5550348',
                        'Select_974786',
                        'Select_401873',
                        'Input_033825',
                        'Input_896358',
                        'Input_919808',
                        'Input_918023',
                      ],
                    },
                    actionObjId: 'Select_163295',
                    actionObjName: 'Select',
                    value: 'setDisable',
                    compLib: 'comm',
                    line_number: 6,
                  },
                  {
                    dataName: 'action',
                    dataId: 167152875353529920,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Select_163295',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '710196',
                    },
                    actionObjId: 'Select_163295',
                    actionObjName: 'Select',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 7,
                  },
                  {
                    dataName: 'action',
                    dataId: 167152875752439870,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Select_0218257',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '359722',
                    },
                    actionObjId: 'Select_0218257',
                    actionObjName: 'Select',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 8,
                  },
                  {
                    dataName: 'action',
                    dataId: 167152878501536540,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Select_606786',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '348624',
                    },
                    actionObjId: 'Select_606786',
                    actionObjName: 'Select',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 9,
                  },
                  {
                    dataName: 'action',
                    dataId: 167152878845320640,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Select_5550348',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '581366',
                    },
                    actionObjId: 'Select_5550348',
                    actionObjName: 'Select',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 10,
                  },
                  {
                    dataName: 'action',
                    dataId: 167152879089824900,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Select_974786',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '057858',
                    },
                    actionObjId: 'Select_974786',
                    actionObjName: 'Select',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 11,
                  },
                  {
                    dataName: 'action',
                    dataId: 167152879431863970,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Select_401873',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '335029',
                    },
                    actionObjId: 'Select_401873',
                    actionObjName: 'Select',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 12,
                  },
                  {
                    dataName: 'action',
                    dataId: 168854809807499620,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Input_033825',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Input',
                      id: '651223',
                    },
                    actionObjId: 'Input_033825',
                    actionObjName: 'Input',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 13,
                  },
                  {
                    dataName: 'action',
                    dataId: 168854810304127070,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Input_896358',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Input',
                      id: '186611',
                    },
                    actionObjId: 'Input_896358',
                    actionObjName: 'Input',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 14,
                  },
                  {
                    dataName: 'action',
                    dataId: 168854810515727940,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Input_919808',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Input',
                      id: '0306475',
                    },
                    actionObjId: 'Input_919808',
                    actionObjName: 'Input',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 15,
                  },
                  {
                    dataName: 'action',
                    dataId: 168854811064716450,
                    children: [],
                    todoOptions: [],
                    options: {
                      compId: 'Input_918023',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '106359',
                    },
                    actionObjId: 'Input_918023',
                    actionObjName: 'Select',
                    value: 'clearValue',
                    compLib: 'comm',
                    line_number: 16,
                  },
                ],
                condition: [],
                desc: '无需审批、不可审批',
                callback: [
                  {
                    type: 'setRequired',
                    dataId: 167152873458311970,
                    shielding: true,
                    options: {
                      compId: ['Select_163295', 'Select_5550348'],
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '111816',
                      required: '',
                      compid: ['Select_163295', 'Select_5550348'],
                    },
                    line_number: 5,
                  },
                  {
                    type: 'setDisable',
                    dataId: 167152873876730100,
                    options: {
                      compId: [
                        'Select_163295',
                        'Select_0218257',
                        'Select_606786',
                        'Select_5550348',
                        'Select_974786',
                        'Select_401873',
                        'Input_033825',
                        'Input_896358',
                        'Input_919808',
                        'Input_918023',
                      ],
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '366224',
                      disabled: 'true',
                      compid: [
                        'Select_163295',
                        'Select_0218257',
                        'Select_606786',
                        'Select_5550348',
                        'Select_974786',
                        'Select_401873',
                        'Input_033825',
                        'Input_896358',
                        'Input_919808',
                        'Input_918023',
                      ],
                    },
                    line_number: 6,
                  },
                  {
                    type: 'clearValue',
                    dataId: 167152875353529920,
                    options: {
                      compId: 'Select_163295',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '710196',
                    },
                    line_number: 7,
                  },
                  {
                    type: 'clearValue',
                    dataId: 167152875752439870,
                    options: {
                      compId: 'Select_0218257',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '359722',
                    },
                    line_number: 8,
                  },
                  {
                    type: 'clearValue',
                    dataId: 167152878501536540,
                    options: {
                      compId: 'Select_606786',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '348624',
                    },
                    line_number: 9,
                  },
                  {
                    type: 'clearValue',
                    dataId: 167152878845320640,
                    options: {
                      compId: 'Select_5550348',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '581366',
                    },
                    line_number: 10,
                  },
                  {
                    type: 'clearValue',
                    dataId: 167152879089824900,
                    options: {
                      compId: 'Select_974786',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '057858',
                    },
                    line_number: 11,
                  },
                  {
                    type: 'clearValue',
                    dataId: 167152879431863970,
                    options: {
                      compId: 'Select_401873',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '335029',
                    },
                    line_number: 12,
                  },
                  {
                    type: 'clearValue',
                    dataId: 168854809807499620,
                    options: {
                      compId: 'Input_033825',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Input',
                      id: '651223',
                    },
                    line_number: 13,
                  },
                  {
                    type: 'clearValue',
                    dataId: 168854810304127070,
                    options: {
                      compId: 'Input_896358',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Input',
                      id: '186611',
                    },
                    line_number: 14,
                  },
                  {
                    type: 'clearValue',
                    dataId: 168854810515727940,
                    options: {
                      compId: 'Input_919808',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Input',
                      id: '0306475',
                    },
                    line_number: 15,
                  },
                  {
                    type: 'clearValue',
                    dataId: 168854811064716450,
                    options: {
                      compId: 'Input_918023',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Select',
                      id: '106359',
                    },
                    line_number: 16,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'setRequired',
                dataId: 167152870883656000,
                shielding: true,
                options: {
                  compId: ['Select_163295', 'Select_5550348'],
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '5025533',
                  required: 'true',
                  compid: ['Select_163295', 'Select_5550348'],
                },
                line_number: 3,
              },
              {
                type: 'setDisable',
                dataId: 167152871159618460,
                options: {
                  compId: [
                    'Select_163295',
                    'Select_0218257',
                    'Select_606786',
                    'Select_5550348',
                    'Select_974786',
                    'Select_401873',
                    'Input_918023',
                    'Input_919808',
                    'Input_896358',
                    'Input_033825',
                  ],
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '961306',
                  disabled: '',
                  compid: [
                    'Select_163295',
                    'Select_0218257',
                    'Select_606786',
                    'Select_5550348',
                    'Select_974786',
                    'Select_401873',
                    'Input_918023',
                    'Input_919808',
                    'Input_896358',
                    'Input_033825',
                  ],
                },
                line_number: 4,
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue45.params =
      [
        { title: '事件入参', name: 'options_81031', value: '$options_81031$' },
      ] || [];
    CMDGenerator(eventDatagetValue45, { options_81031 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    onLoadTable,
    matrixPassTypeChange,
  }));

  useEffect(() => {
    const eventDataapiRequest197: any = [
      {
        type: 'apiRequest',
        dataId: 167887756500193500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '372866',
          pageJsonId: '2695813',
          sync: false,
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
              dataKey: '372866_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '372866_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '372866_query',
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
                      dataKey: '372866_body.privilegeCodes.listItem',
                    },
                  ],
                  _id: 'body.privilegeCodes',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.privilegeCodes',
                  dataKey: '372866_body.privilegeCodes',
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
              dataKey: '372866_body',
            },
          ],
          actionTitle: '查询是否有动作功能权限',
          _sourceName: '查询是否有权限-tsm',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167887859513959460,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '922355',
              pageJsonId: '2695813',
              dataSourceId: 167887856617475330,
              dataSourceName: 'privilege_vars',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '538653',
                  code: 'add',
                  name: '新增权限',
                  type: 'boolean',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_372866?.resultData.F_MATRIX_CONFIG_MANAGE_ADD$',
                  },
                },
                {
                  attrId: '443082',
                  code: 'modify',
                  name: '修改权限',
                  type: 'boolean',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_372866?.resultData.F_MATRIX_CONFIG_MANAGE_MODIFY$',
                  },
                },
                {
                  attrId: '3521731',
                  code: 'delete',
                  name: '删除权限',
                  type: 'boolean',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_372866?.resultData.F_MATRIX_CONFIG_MANAGE_DELETE$',
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
    eventDataapiRequest197.params = [] || [];
    CMDGenerator(eventDataapiRequest197, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse117: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '060347',
            options: { context: '$state.sceneCode$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166677807034039680,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167273863237080160,
            children: [
              {
                dataName: 'action',
                dataId: 167273863507540450,
                children: [],
                todoOptions: ['valueArray'],
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '6945752',
                  pageJsonId: '2695813',
                  value: ['场景编码为空'],
                },
                actionObjId: 'debug',
                actionObjName: 'system',
                value: 'console',
                line_number: 16,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'console',
                dataId: 167273863507540450,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '6945752',
                  pageJsonId: '2695813',
                  value: ['场景编码为空'],
                },
                line_number: 16,
              },
            ],
          },
        ],
        line_number: 3,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166677810858851170,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '204029',
              pageJsonId: '2695813',
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
                  parents: ['root'],
                  id: 'header',
                  dataKey: '679742_header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
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
                      parents: ['root', 'path'],
                      id: 'path.catalogCode',
                      dataKey: '679742_path.catalogCode',
                      value: {
                        type: ['context', '$state.sceneCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-1',
                      key: '0-1-0',
                    },
                  ],
                  _id: 'path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'path',
                  dataKey: '679742_path',
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
                  dataKey: '679742_query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'body',
                  dataKey: '679742_body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _sourceName: '根据场景编码查询指定流程编码带有等级的环节信息-tsm',
            },
            line_number: 4,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 166677810858822080,
                options: {
                  compId: 'Select_163295',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '77473106',
                  data: '$reply_204029?.resultData.importantTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 5,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167151765127111840,
                options: {
                  compId: 'Select_5550348',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '446603',
                  data: '$reply_204029?.resultData.importantTacheList$',
                  valueKey: 'approveGrade',
                  labelKey: 'tacheName',
                },
                line_number: 6,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 166677810858821120,
                options: {
                  compId: 'Select_0218257',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '523439',
                  data: '$reply_204029?.resultData.cityTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 7,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167151768017922140,
                options: {
                  compId: 'Select_974786',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '9652834',
                  data: '$reply_204029?.resultData.cityTacheList$',
                  valueKey: 'approveGrade',
                  labelKey: 'tacheName',
                },
                line_number: 8,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 166677810858877630,
                options: {
                  compId: 'Select_606786',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '844851',
                  data: '$reply_204029?.resultData.countyTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 9,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 167151770966834850,
                options: {
                  compId: 'Select_401873',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '319809',
                  data: '$reply_204029?.resultData.countyTacheList$',
                  valueKey: 'approveGrade',
                  labelKey: 'tacheName',
                },
                line_number: 10,
                callback1: [],
              },
              {
                type: 'reloadColServiceData',
                dataId: 166677810858816160,
                options: {
                  compId: 'Table_317067',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Table',
                  id: '587787',
                  colName: 'importantApproveGrade',
                  data: '$reply_204029?.resultData.importantTacheList$',
                },
                line_number: 11,
              },
              {
                type: 'reloadColServiceData',
                dataId: 166677810858844380,
                options: {
                  compId: 'Table_317067',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Table',
                  id: '04496877',
                  colName: 'lanApproveGrade',
                  data: '$reply_204029?.resultData.cityTacheList$',
                },
                line_number: 12,
              },
              {
                type: 'reloadColServiceData',
                dataId: 166677810858826340,
                options: {
                  compId: 'Table_317067',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Table',
                  id: '763776',
                  colName: 'areaApproveGrade',
                  data: '$reply_204029?.resultData.countyTacheList$',
                },
                line_number: 13,
              },
            ],
            callback2: [],
          },
          {
            type: 'apiRequest',
            dataId: 1671517756982745,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '880038',
              pageJsonId: '2695813',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'qryAttrValueList',
              _apiCode: 'qryAttrValueList',
              _source: 'rhin',
              _serviceId: '878820809863368704',
              _serviceTitle:
                '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
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
                  dataKey: '880038_header',
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
                      _id: 'path.attrCode',
                      compType: 'Input',
                      parents: ['path'],
                      id: 'path.attrCode',
                      dataKey: '880038_path.attrCode',
                      value: { type: ['customize'], code: 'matrixPassType' },
                    },
                  ],
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '880038_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '880038_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '880038_body',
                },
              ],
              actionTitle: '加载矩阵通过类型',
              _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
            },
            line_number: 14,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 167151780566649300,
                options: {
                  compId: 'Select_304001',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '0969372',
                  data: '$reply_880038?.resultData$',
                  labelKey: 'attrValueName',
                  valueKey: 'attrValue',
                },
                line_number: 15,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse117.params = [] || [];
    CMDGenerator(eventDataifelse117, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse118: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0478035',
            options: { context: '$state.sceneId$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166677814228357300,
        elseIfs: [],
        line_number: 17,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166677817133302370,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '789611',
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
                  dataKey: '764996_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '764996_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '764996_query',
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
                      dataKey: '764996_body.sceneId',
                      value: { type: ['context', '$state.sceneId$'], code: '' },
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '764996_body',
                },
              ],
              actionTitle: '根据场景ID查询所有矩阵要素',
              _sourceName: '根据场景ID获得所有矩阵要素-tsm',
            },
            line_number: 18,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 166677817133460060,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '363576',
                  pageJsonId: '2695813',
                  code: 'function main(data,state,success,fail){var _reply_;success({value:{op:"&&",children:[{},{}]},attrSpecList:(_reply_=reply_789611)===null||_reply_===void 0?void 0:_reply_.resultData.attrSpecList})};',
                },
                line_number: 19,
                callback1: [
                  {
                    type: 'setRemoteCompProps',
                    dataId: 166677817133496420,
                    options: {
                      compId: 'RemoteComponent_6577708',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'RemoteComponent',
                      id: '448327',
                      rProps: '$data_363576$',
                    },
                    line_number: 20,
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
    eventDataifelse118.params = [] || [];
    CMDGenerator(eventDataifelse118, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {
    const eventDatacallSelfFunc23: any = [
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
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc23.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc23, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDataapiRequest196: any = [
      {
        type: 'apiRequest',
        dataId: 166254031357076800,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '76218',
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
              dataKey: '76218_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '76218_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '76218_query',
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
                  dataKey: '76218_body.sceneId',
                  value: { type: ['context', '$state.sceneId$'], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '76218_body',
            },
          ],
          actionTitle: '根据场景ID查询所有矩阵要素',
          _sourceName: '根据场景ID获得所有矩阵要素-tsm',
        },
        line_number: 2,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166255741842738850,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '596924',
              pageJsonId: '2695813',
              code: 'function main(data,state,success,fail){var _reply_;success({value:{op:"&&",children:[{},{}]},attrSpecList:(_reply_=reply_76218)===null||_reply_===void 0?void 0:_reply_.resultData.attrSpecList})};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'setRemoteCompProps',
                dataId: 166255741842790180,
                options: {
                  compId: 'RemoteComponent_6577708',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'RemoteComponent',
                  id: '9976182',
                  rProps: '$data_596924$',
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
    eventDataapiRequest196.params = [] || [];
    CMDGenerator(eventDataapiRequest196, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse116: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '618451',
            options: { context: '$state.sceneCode$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169390515800589470,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'setLoading',
            dataId: 169390526886735650,
            options: {
              compId: 'Table_317067',
              compLib: 'comm',
              pageJsonId: '2695813',
              compName: 'Table',
              id: '261361',
              loading: true,
            },
            line_number: 6,
          },
          {
            type: 'apiRequest',
            dataId: 169390517819872030,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '123262',
              pageJsonId: '2695813',
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
                  parents: ['root'],
                  id: 'header',
                  dataKey: '679742_header',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
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
                      parents: ['root', 'path'],
                      id: 'path.catalogCode',
                      dataKey: '679742_path.catalogCode',
                      value: {
                        type: ['context', '$state.sceneCode$'],
                        code: '',
                      },
                      parentType: 'object',
                      parentKey: '0-1',
                      key: '0-1-0',
                    },
                  ],
                  _id: 'path',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'path',
                  dataKey: '679742_path',
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
                  dataKey: '679742_query',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'body',
                  dataKey: '679742_body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
              ],
              _sourceName: '根据场景编码查询指定流程编码带有等级的环节信息-tsm',
            },
            line_number: 7,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 169390517819845470,
                options: {
                  compId: 'Select_163295',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '379503',
                  data: '$reply_123262?.resultData.importantTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 8,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 169390517819830850,
                options: {
                  compId: 'Select_5550348',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '065619',
                  data: '$reply_123262?.resultData.importantTacheList$',
                  valueKey: 'approveGrade',
                  labelKey: 'tacheName',
                },
                line_number: 9,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 169390517819836500,
                options: {
                  compId: 'Select_0218257',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '272576',
                  data: '$reply_123262?.resultData.cityTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 10,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 169390517819819070,
                options: {
                  compId: 'Select_974786',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '931817',
                  data: '$reply_123262?.resultData.cityTacheList$',
                  valueKey: 'approveGrade',
                  labelKey: 'tacheName',
                },
                line_number: 11,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 169390517819841400,
                options: {
                  compId: 'Select_606786',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '303156',
                  data: '$reply_123262?.resultData.countyTacheList$',
                  labelKey: 'tacheName',
                  valueKey: 'approveGrade',
                },
                line_number: 12,
                callback1: [],
              },
              {
                type: 'reloadSelectData',
                dataId: 169390517819876260,
                options: {
                  compId: 'Select_401873',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Select',
                  id: '7736882',
                  data: '$reply_123262?.resultData.countyTacheList$',
                  valueKey: 'approveGrade',
                  labelKey: 'tacheName',
                },
                line_number: 13,
                callback1: [],
              },
              {
                type: 'reloadColServiceData',
                dataId: 169390517819803740,
                options: {
                  compId: 'Table_317067',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Table',
                  id: '254867',
                  colName: 'importantApproveGrade',
                  data: '$reply_123262?.resultData.importantTacheList$',
                },
                line_number: 14,
              },
              {
                type: 'reloadColServiceData',
                dataId: 169390517819871100,
                options: {
                  compId: 'Table_317067',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Table',
                  id: '3615074',
                  colName: 'lanApproveGrade',
                  data: '$reply_123262?.resultData.cityTacheList$',
                },
                line_number: 15,
              },
              {
                type: 'reloadColServiceData',
                dataId: 169390517819845820,
                options: {
                  compId: 'Table_317067',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Table',
                  id: '666123',
                  colName: 'areaApproveGrade',
                  data: '$reply_123262?.resultData.countyTacheList$',
                },
                line_number: 16,
              },
              {
                type: 'setLoading',
                dataId: 169390528149611420,
                options: {
                  compId: 'Table_317067',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Table',
                  id: '34020836',
                  loading: false,
                },
                line_number: 17,
              },
            ],
            callback2: [
              {
                type: 'setLoading',
                dataId: 169390528879167420,
                options: {
                  compId: 'Table_317067',
                  compLib: 'comm',
                  pageJsonId: '2695813',
                  compName: 'Table',
                  id: '88953',
                  loading: false,
                },
                line_number: 18,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse116.params = [] || [];
    CMDGenerator(eventDataifelse116, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_2695813__"
    >
      <View
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
                  id: '477293',
                  title: '新增矩阵',
                  iconPos: 'left',
                  btnType: 'primary',
                  rule: !data?.privilege_vars?.add,
                },
                {
                  id: '3139542',
                  title: '批量删除',
                  iconPos: 'left',
                  btnType: 'danger',
                  rule: !data?.privilege_vars?.delete,
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
              onClickBtn1={(e: any) => {
                const forms44 = getFormByCompId('Form_035658', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms44) ? forms44 : [forms44]).forEach((form) =>
                  form?.resetFields(),
                );
                const eventDatasetDisable82: any = [
                  {
                    type: 'setDisable',
                    dataId: 166660521913200320,
                    options: {
                      compId: 'Form_035658',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Form',
                      id: '318173',
                      disabled: '',
                    },
                    line_number: 2,
                  },
                ];
                eventDatasetDisable82.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable82, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable83: any = [
                  {
                    type: 'setDisable',
                    dataId: 166660523602970300,
                    options: {
                      compId: 'Button_8340845',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Button',
                      id: '852623',
                    },
                    line_number: 3,
                  },
                ];
                eventDatasetDisable83.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable83, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDisable84: any = [
                  {
                    type: 'setDisable',
                    dataId: 166660523792320260,
                    options: {
                      compId: 'Button_873123',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Button',
                      id: '273862',
                    },
                    line_number: 4,
                  },
                ];
                eventDatasetDisable84.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDisable84, { e }, 'setDisable', {
                  id: 'setDisable',
                  name: 'setDisable',
                  type: 'setDisable',
                  platform: 'pc',
                });
                const eventDatasetDataSource98: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166660517536961300,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '899092',
                      pageJsonId: '2695813',
                      dataSourceId: 166235911927130460,
                      dataSourceName: 'local_vars',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '620657',
                          code: 'operType',
                          name: '操作类型，add=添加 mod=修改',
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
                eventDatasetDataSource98.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatasetDataSource98, { e }, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
                const eventDatacustomActionCode460: any = [
                  {
                    type: 'customActionCode',
                    dataId: 166660518972157440,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '8888057',
                      pageJsonId: '2695813',
                      code: 'function main(data,state,success,fail){success({value:{op:"&&",children:[{},{}]}})};',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'setRemoteCompProps',
                        dataId: 166660518972183230,
                        options: {
                          compId: 'RemoteComponent_6577708',
                          compLib: 'comm',
                          pageJsonId: '2695813',
                          compName: 'RemoteComponent',
                          id: '260186',
                          rProps: '$data_8888057$',
                        },
                        line_number: 7,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode460.params =
                  [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatacustomActionCode460,
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
              onClickBtn2={(e: any) => {
                const eventDatagetTableSelectedKey38: any = [
                  {
                    type: 'getTableSelectedKey',
                    dataId: 166660528299765500,
                    options: {
                      compId: 'Table_317067',
                      compLib: 'comm',
                      pageJsonId: '2695813',
                      compName: 'Table',
                      id: '718824',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 166660528299758600,
                        shielding: true,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '377418',
                          pageJsonId: '2695813',
                          value: ['$selectedRowKeys_718824$'],
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
                              context: '$selectedRowKeys_718824.length$',
                              operate: '>=',
                              manualValue: '1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166660528299703580,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166660528299888670,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166660528299863330,
                                children: [],
                                todoOptions: ['msgType', 'value'],
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '267331',
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
                                dataId: 166660528299863330,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '267331',
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
                            dataId: 166660528299776450,
                            options: {
                              compId: 'showModal',
                              compName: 'page',
                              id: '35783279',
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
                                dataId: 166660528299751200,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '183186',
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
                                      dataKey: '2014137_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '2014137_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '2014137_query',
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
                                            '2014137_body.approveMatrixIds',
                                          value: {
                                            type: ['customize'],
                                            code: '$JSON.stringify(selectedRowKeys_718824)$',
                                          },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '2014137_body',
                                    },
                                  ],
                                },
                                line_number: 5,
                                callback1: [
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '258297',
                                        options: {
                                          useManual: true,
                                          useObject: false,
                                          context: '$reply_183186?.resultCode$',
                                          operate: '==',
                                          manualValue: '0',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 166660528299798900,
                                    elseIfs: [
                                      {
                                        dataName: 'elseIf',
                                        dataId: 166660528299765860,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166660528299815500,
                                            children: [],
                                            todoOptions: ['msgType', 'value'],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '678038',
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
                                        desc: 'resultCode != 0',
                                        callback: [
                                          {
                                            type: 'showMessage',
                                            dataId: 166660528299815500,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '678038',
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
                                        dataId: 16666052829975920,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '3367085',
                                          pageJsonId: '2695813',
                                          type: 'success',
                                          value: '所选审批矩阵删除成功！',
                                        },
                                        line_number: 7,
                                      },
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 166660528299730020,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '0755716',
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
                eventDatagetTableSelectedKey38.params =
                  [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetTableSelectedKey38,
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
                  allowClear={true}
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
                      const eventDatacallSelfFunc322: any = [
                        {
                          type: 'callSelfFunc',
                          dataId: 166255255927916640,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '589272',
                            pageJsonId: '2695813',
                            customFuncName: 'onLoadTable',
                            customFuncParams: 'object',
                          },
                          line_number: 1,
                          callback1: [],
                          callback2: [],
                        },
                      ];
                      eventDatacallSelfFunc322.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacallSelfFunc322,
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
                      const forms46 = getFormByCompId('Form_030076', refs);
                      // 支持循环容器中的表单重置
                      (Array.isArray(forms46) ? forms46 : [forms46]).forEach(
                        (form) => form?.resetFields(),
                      );
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_0011149')}
                    {...injectData}
                  />
                </View>
              </Form>
              <Table
                name={'矩阵列表'}
                isFlexColumn={false}
                pageSize={data?.qryPageApproveMatrixByReq?.resultData?.size}
                current={data?.qryPageApproveMatrixByReq?.resultData?.current}
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
                    id: '364656',
                    className: '',
                    width: 80,
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
                    title: '归属地市',
                    key: 'lanId',
                    dataIndex: 'lanId',
                    className: 'divider',
                    id: '548499',
                    hiddenRule: true,
                    align: 'left',
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
                    title: '省重客流程终点',
                    key: 'importantApproveGrade',
                    dataIndex: 'importantApproveGrade',
                    id: '6701248',
                    staticService: {
                      labelKey: 'tacheName',
                      valueKey: 'approveGrade',
                    },
                    className: 'divider',
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
                    title: '地市流程终点',
                    key: 'lanApproveGrade',
                    dataIndex: 'lanApproveGrade',
                    className: 'divider',
                    id: '741105',
                    staticService: {
                      labelKey: 'tacheName',
                      valueKey: 'approveGrade',
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
                    title: '区县流程终点',
                    key: 'areaApproveGrade',
                    dataIndex: 'areaApproveGrade',
                    className: 'divider',
                    id: '480019',
                    staticService: {
                      labelKey: 'tacheName',
                      valueKey: 'approveGrade',
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
                    rule: '!data.privilege_vars.modify',
                    checked: true,
                  },
                  {
                    title: '删除',
                    iconPos: 'left',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '310662',
                    rule: '!data.privilege_vars.delete',
                    checked: true,
                  },
                ]}
                extend={[]}
                fieldName={'data.qryPageApproveMatrixByReq.resultData.total'}
                total={data?.qryPageApproveMatrixByReq?.resultData?.total}
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
                  const eventDataapiRequest704: any = [
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
                        _sourceName: '审批矩阵删除-tsm',
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
                              children: [],
                              condition: [],
                              desc: 'reslutCode != 0',
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
                  eventDataapiRequest704.params =
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
                    eventDataapiRequest704,
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
                  const eventDatasetCurrentFormValues15: any = [
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
                  eventDatasetCurrentFormValues15.params =
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
                    eventDatasetCurrentFormValues15,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode461: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166254638487875040,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '861868',
                        pageJsonId: '2695813',
                        code: 'function main(data,state,success,fail){success({value:JSON.parse(row.calcView)})};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setRemoteCompProps',
                          dataId: 166254658489645570,
                          options: {
                            compId: 'RemoteComponent_6577708',
                            compLib: 'comm',
                            pageJsonId: '2695813',
                            compName: 'RemoteComponent',
                            id: '534982',
                            rProps: '$data_861868$',
                          },
                          line_number: 3,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode461.params =
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
                    eventDatacustomActionCode461,
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
                  const eventDatasetCurrentFormValues16: any = [
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
                  eventDatasetCurrentFormValues16.params =
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
                    eventDatasetCurrentFormValues16,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDisable85: any = [
                    {
                      type: 'setDisable',
                      dataId: 166236310591155040,
                      options: {
                        compId: [
                          'Form_035658',
                          'Button_8340845',
                          'Button_873123',
                        ],
                        compLib: 'comm',
                        pageJsonId: '2695813',
                        compName: 'Form',
                        id: '614556',
                        disabled: 'toggle',
                        compid: [
                          'Form_035658',
                          'Button_8340845',
                          'Button_873123',
                        ],
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetDisable85.params =
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
                    eventDatasetDisable85,
                    { rowId, row, index },
                    'setDisable',
                    {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    },
                  );
                  const eventDatasetDataSource99: any = [
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
                            name: '操作类型，add=添加 mod=修改',
                            type: 'string',
                            initialData: { type: 'static' },
                            value: { type: ['customize'], code: 'mod' },
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
                  ];
                  eventDatasetDataSource99.params =
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
                    eventDatasetDataSource99,
                    { rowId, row, index },
                    'setDataSource',
                    {
                      id: 'setDataSource',
                      name: 'setDataSource',
                      type: 'setDataSource',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode462: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166254664087756100,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '4490684',
                        pageJsonId: '2695813',
                        code: 'function main(data,state,success,fail){success({value:JSON.parse(row.calcView)})};',
                      },
                      line_number: 4,
                      callback1: [
                        {
                          type: 'setRemoteCompProps',
                          dataId: 166254664087802850,
                          options: {
                            compId: 'RemoteComponent_6577708',
                            compLib: 'comm',
                            pageJsonId: '2695813',
                            compName: 'RemoteComponent',
                            id: '834489',
                            rProps: '$data_4490684$',
                          },
                          line_number: 5,
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 167159072014537900,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '318755',
                            pageJsonId: '2695813',
                            customFuncName: 'matrixPassTypeChange',
                          },
                          line_number: 6,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode462.params =
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
                    eventDatacustomActionCode462,
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
                  const eventDatasetCurrentFormValues17: any = [
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
                  eventDatasetCurrentFormValues17.params =
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
                    eventDatasetCurrentFormValues17,
                    { rowId, row, index },
                    'setCurrentFormValues',
                    {
                      id: 'setCurrentFormValues',
                      name: 'setCurrentFormValues',
                      type: 'setCurrentFormValues',
                      platform: 'pc',
                    },
                  );
                  const eventDatacustomActionCode463: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166254664416779230,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '4250515',
                        pageJsonId: '2695813',
                        code: 'function main(data,state,success,fail){success({value:JSON.parse(row.calcView)})};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'setRemoteCompProps',
                          dataId: 166254664416754400,
                          options: {
                            compId: 'RemoteComponent_6577708',
                            compLib: 'comm',
                            pageJsonId: '2695813',
                            compName: 'RemoteComponent',
                            id: '8386303',
                            rProps: '$data_4250515$',
                          },
                          line_number: 3,
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode463.params =
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
                    eventDatacustomActionCode463,
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
                  // console 166660542137490400
                  console.log(page);
                  const eventDatacallSelfFunc323: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166660490539407680,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '1736476',
                        pageJsonId: '2695813',
                        customFuncName: 'onLoadTable',
                        customFuncParams: '$page$',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc323.params =
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
                    eventDatacallSelfFunc323,
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
                  const eventDatacustomActionCode464: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166254449522291600,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '206956',
                        pageJsonId: '2695813',
                        code: 'function main(data,state,success,fail){data.remote_data={expression:msg.expression,displayExpression:msg.displayExpression,ast:JSON.stringify(msg.ast),error:msg.error};console.log("msg = ",msg)};',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode464.params =
                    [{ title: '消息入参', name: 'msg', value: '$msg$' }] || [];
                  CMDGenerator(
                    eventDatacustomActionCode464,
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
                formItemIndex={16}
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
                  margin: '16px 0px 0px 0px',
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
                  formItemIndex={1}
                  fieldName={'matrixPassType'}
                  defaultValue={'1001'}
                  dataSource={[
                    { id: '341377983', label: '可配置', value: '1001' },
                    { id: '516395', label: '无需审批', value: '1002' },
                    { id: '031041', label: '不可审批', value: '1003' },
                  ]}
                  $$componentItem={{
                    id: 'Select_304001',
                    uid: 'Select_304001',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  style={{ flex: '' }}
                  onChange={(e: any) => {
                    const eventDatacallSelfFunc325: any = [
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
                    eventDatacallSelfFunc325.params =
                      [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc325,
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
                  ref={(r: any) => refs.setComponentRef(r, 'Select_304001')}
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
                  formItemIndex={2}
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
                  attr={{ selectedKeyTags: [], dataType: 'local' }}
                  placeholder={'请选择'}
                  formItemIndex={3}
                  fieldName={'importantApproveGrade'}
                  allowClear={false}
                  $$componentItem={{
                    id: 'Select_163295',
                    uid: 'Select_163295',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_163295')}
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
                  attr={{ selectedKeyTags: [], dataType: 'local' }}
                  placeholder={'请选择'}
                  formItemIndex={4}
                  fieldName={'lanApproveGrade'}
                  allowClear={false}
                  $$componentItem={{
                    id: 'Select_0218257',
                    uid: 'Select_0218257',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_0218257')}
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
                  attr={{ selectedKeyTags: [], dataType: 'local' }}
                  placeholder={'请选择'}
                  formItemIndex={5}
                  fieldName={'areaApproveGrade'}
                  allowClear={false}
                  $$componentItem={{
                    id: 'Select_606786',
                    uid: 'Select_606786',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_606786')}
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
                  allowClear={false}
                  $$componentItem={{
                    id: 'Select_5550348',
                    uid: 'Select_5550348',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_5550348')}
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
                  allowClear={false}
                  $$componentItem={{
                    id: 'Select_974786',
                    uid: 'Select_974786',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_974786')}
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
                  allowClear={false}
                  $$componentItem={{
                    id: 'Select_401873',
                    uid: 'Select_401873',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Select_401873')}
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
                <Select
                  name={'是否送总部'}
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
                  fieldName={'isSendHead'}
                  formItemIndex={12}
                  dataSource={[
                    { id: '161531', label: '是', value: '1' },
                    { id: '969462', label: '否', value: '0' },
                  ]}
                  $$componentItem={{
                    id: 'Input_918023',
                    uid: 'Input_918023',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_918023')}
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
                  formItemIndex={13}
                  fieldName={'lanId'}
                  allowClear={true}
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
                  formItemIndex={14}
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
                    id: 'Input_94589524',
                    uid: 'Input_94589524',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_94589524')}
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
                  formItemIndex={15}
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
                  visible={false}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'StdUpload_382647')}
                  {...injectData}
                />
              </Form>
              <View
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
                    const eventDataifelse411: any = [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '980864',
                            options: {
                              context: '$data.remote_data.error$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166254209218797920,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166254216248566820,
                            children: [
                              {
                                dataName: 'condition',
                                dataId: 166254221523667460,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 166254221523625730,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 166254221523667300,
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 166254221523647200,
                                            children: [],
                                            todoOptions: ['msgType', 'value'],
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '9574064',
                                              pageJsonId: '2695813',
                                              type: 'success',
                                              value: '审批矩阵新增成功！',
                                            },
                                            actionObjId: 'showMessage',
                                            actionObjName: 'system',
                                            value: 'showMessage',
                                            line_number: 5,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166254221523685470,
                                            children: [],
                                            todoOptions: ['disabled'],
                                            options: {
                                              compId: 'Form_035658',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Form',
                                              id: '352499',
                                              disabled: 'true',
                                            },
                                            actionObjId: 'Form_035658',
                                            actionObjName: 'Form',
                                            value: 'setDisable',
                                            compLib: 'comm',
                                            line_number: 6,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166254221523641440,
                                            children: [],
                                            todoOptions: ['disabled'],
                                            options: {
                                              compId: 'Button_8340845',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Button',
                                              id: '9975025',
                                              disabled: 'true',
                                            },
                                            actionObjId: 'Button_8340845',
                                            actionObjName: 'Button',
                                            value: 'setDisable',
                                            compLib: 'comm',
                                            line_number: 7,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166254221523607600,
                                            children: [],
                                            todoOptions: ['disabled'],
                                            options: {
                                              compId: 'Button_873123',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Button',
                                              id: '394892',
                                              disabled: 'true',
                                            },
                                            actionObjId: 'Button_873123',
                                            actionObjName: 'Button',
                                            value: 'setDisable',
                                            compLib: 'comm',
                                            line_number: 8,
                                          },
                                          {
                                            dataName: 'action',
                                            dataId: 166254221523681700,
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 166254221523658340,
                                                children: [],
                                                value: 'callback1',
                                                params: [],
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 166254221523690850,
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
                                              id: '2244006',
                                              pageJsonId: '2695813',
                                              customFuncName: 'onLoadTable',
                                              customFuncParams: 'object',
                                            },
                                            actionObjId: 'callSelfFunc',
                                            actionObjName: 'system',
                                            value: 'callSelfFunc',
                                            line_number: 9,
                                          },
                                        ],
                                        value: 'callback1',
                                        params: [],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 166254221523653470,
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
                                      id: '155555',
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
                                              dataKey: '155555_root.header',
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
                                              dataKey: '155555_root.path',
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
                                              dataKey: '155555_root.query',
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
                                                  code: 'matrixPassType',
                                                  name: '矩阵通过类型',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.matrixPassType',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.matrixPassType',
                                                  dataKey:
                                                    '155555_root.body.matrixPassType',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'matrixPassType',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-3',
                                                },
                                                {
                                                  code: 'importantApproveViewGrade',
                                                  name: '重客审批显示等级',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.importantApproveViewGrade',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.importantApproveViewGrade',
                                                  dataKey:
                                                    '155555_root.body.importantApproveViewGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'importantApproveViewGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-6',
                                                },
                                                {
                                                  code: 'lanApproveViewGrade',
                                                  name: '地市审批显示等级',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.lanApproveViewGrade',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.lanApproveViewGrade',
                                                  dataKey:
                                                    '155555_root.body.lanApproveViewGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveViewGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-10',
                                                },
                                                {
                                                  code: 'areaApproveViewGrade',
                                                  name: '区县审批显示等级',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.areaApproveViewGrade',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.areaApproveViewGrade',
                                                  dataKey:
                                                    '155555_root.body.areaApproveViewGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveViewGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-12',
                                                },
                                                {
                                                  code: 'remark',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.remark',
                                                  compType: 'Input',
                                                  name: 'remark',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.remark',
                                                  dataKey:
                                                    '155555_root.body.remark',
                                                  value: { type: [], code: '' },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-0',
                                                },
                                                {
                                                  code: 'lanApproveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.lanApproveGrade',
                                                  compType: 'Input',
                                                  name: 'lanApproveGrade',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.lanApproveGrade',
                                                  dataKey:
                                                    '155555_root.body.lanApproveGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-1',
                                                },
                                                {
                                                  code: 'importantApproveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.importantApproveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'importantApproveGradeDesc',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.importantApproveGradeDesc',
                                                  dataKey:
                                                    '155555_root.body.importantApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'importantApproveGradeDesc',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-4',
                                                },
                                                {
                                                  code: 'areaApproveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.areaApproveGrade',
                                                  compType: 'Input',
                                                  name: 'areaApproveGrade',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.areaApproveGrade',
                                                  dataKey:
                                                    '155555_root.body.areaApproveGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-5',
                                                },
                                                {
                                                  code: 'lanApproveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.lanApproveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'lanApproveGradeDesc',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.lanApproveGradeDesc',
                                                  dataKey:
                                                    '155555_root.body.lanApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveGradeDesc',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-7',
                                                },
                                                {
                                                  code: 'sceneId',
                                                  attrType: 'field',
                                                  type: 'long',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.sceneId',
                                                  compType: 'Input',
                                                  name: 'sceneId',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.sceneId',
                                                  dataKey:
                                                    '155555_root.body.sceneId',
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$state.sceneId$',
                                                    ],
                                                    code: '',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-8',
                                                },
                                                {
                                                  code: 'specialImportantFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.specialImportantFlowCode',
                                                  compType: 'Input',
                                                  name: 'specialImportantFlowCode',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.specialImportantFlowCode',
                                                  dataKey:
                                                    '155555_root.body.specialImportantFlowCode',
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-9',
                                                },
                                                {
                                                  code: 'areaApproveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.areaApproveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'areaApproveGradeDesc',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.areaApproveGradeDesc',
                                                  dataKey:
                                                    '155555_root.body.areaApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveGradeDesc',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-11',
                                                },
                                                {
                                                  code: 'calcExpress',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.calcExpress',
                                                  compType: 'Input',
                                                  name: 'calcExpress',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.calcExpress',
                                                  dataKey:
                                                    '155555_root.body.calcExpress',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'expression',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-13',
                                                },
                                                {
                                                  code: 'specialAreaFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.specialAreaFlowCode',
                                                  compType: 'Input',
                                                  name: 'specialAreaFlowCode',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.specialAreaFlowCode',
                                                  dataKey:
                                                    '155555_root.body.specialAreaFlowCode',
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-14',
                                                },
                                                {
                                                  code: 'matrixTitle',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.matrixTitle',
                                                  compType: 'Input',
                                                  name: 'matrixTitle',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.matrixTitle',
                                                  dataKey:
                                                    '155555_root.body.matrixTitle',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'matrixTitle',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-15',
                                                },
                                                {
                                                  code: 'specialLanFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.specialLanFlowCode',
                                                  compType: 'Input',
                                                  name: 'specialLanFlowCode',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.specialLanFlowCode',
                                                  dataKey:
                                                    '155555_root.body.specialLanFlowCode',
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-16',
                                                },
                                                {
                                                  code: 'calcView',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.calcView',
                                                  compType: 'Input',
                                                  name: 'calcView',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.calcView',
                                                  dataKey:
                                                    '155555_root.body.calcView',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'ast',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-17',
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
                                                  id: 'root.body.lanId',
                                                  dataKey:
                                                    '155555_root.body.lanId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanId',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-18',
                                                },
                                                {
                                                  code: 'calcTranslate',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.calcTranslate',
                                                  compType: 'Input',
                                                  name: 'calcTranslate',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.calcTranslate',
                                                  dataKey:
                                                    '155555_root.body.calcTranslate',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'displayExpression',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-19',
                                                },
                                                {
                                                  code: 'provinceId',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.provinceId',
                                                  compType: 'Input',
                                                  name: 'provinceId',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.provinceId',
                                                  dataKey:
                                                    '155555_root.body.provinceId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'provinceId',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-20',
                                                },
                                                {
                                                  code: 'importantApproveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.importantApproveGrade',
                                                  compType: 'Input',
                                                  name: 'importantApproveGrade',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.importantApproveGrade',
                                                  dataKey:
                                                    '155555_root.body.importantApproveGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'importantApproveGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-21',
                                                },
                                                {
                                                  code: 'isSendHead',
                                                  name: '新增节点',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.isSendHead',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-2',
                                                  id: 'root.body.isSendHead',
                                                  dataKey:
                                                    '155555_root.body.isSendHead',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'getFieldsValue',
                                                    ],
                                                    code: 'isSendHead',
                                                  },
                                                },
                                              ],
                                              _id: 'root.body',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.body',
                                              dataKey: '155555_root.body',
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
                                          dataKey: '155555_root',
                                        },
                                      ],
                                      _sourceName: '审批矩阵新增-tsm',
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
                                    dataId: 166254221523603780,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166254221523696220,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166254221523614900,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523676130,
                                                children: [],
                                                todoOptions: [
                                                  'msgType',
                                                  'value',
                                                ],
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '279095',
                                                  pageJsonId: '2695813',
                                                  type: 'success',
                                                  value: '审批矩阵修改成功！',
                                                },
                                                actionObjId: 'showMessage',
                                                actionObjName: 'system',
                                                value: 'showMessage',
                                                line_number: 11,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523627940,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Form_035658',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Form',
                                                  id: '690735',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Form_035658',
                                                actionObjName: 'Form',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 12,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523602400,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Button_8340845',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '9102646',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Button_8340845',
                                                actionObjName: 'Button',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 13,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523675200,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Button_873123',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '1037775',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Button_873123',
                                                actionObjName: 'Button',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 14,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523659650,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166254221523658000,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166254221523648400,
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
                                                  id: '7902677',
                                                  pageJsonId: '2695813',
                                                  customFuncName: 'onLoadTable',
                                                  customFuncParams: 'object',
                                                },
                                                actionObjId: 'callSelfFunc',
                                                actionObjName: 'system',
                                                value: 'callSelfFunc',
                                                line_number: 15,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166254221523604060,
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
                                          id: '659896',
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
                                                  dataKey: '659896_root.header',
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
                                                  dataKey: '659896_root.path',
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
                                                  dataKey: '659896_root.query',
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
                                                      code: 'provinceId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.provinceId',
                                                      compType: 'Input',
                                                      name: 'provinceId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.provinceId',
                                                      dataKey:
                                                        '659896_root.body.provinceId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'provinceId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-0',
                                                    },
                                                    {
                                                      code: 'specialAreaFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialAreaFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialAreaFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialAreaFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialAreaFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-9',
                                                    },
                                                    {
                                                      code: 'specialLanFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialLanFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialLanFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialLanFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialLanFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-10',
                                                    },
                                                    {
                                                      code: 'specialImportantFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialImportantFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialImportantFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialImportantFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialImportantFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-11',
                                                    },
                                                    {
                                                      code: 'lanApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.lanApproveGrade',
                                                      compType: 'Input',
                                                      name: 'lanApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.lanApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-13',
                                                    },
                                                    {
                                                      code: 'areaApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.areaApproveGrade',
                                                      compType: 'Input',
                                                      name: 'areaApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.areaApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-14',
                                                    },
                                                    {
                                                      code: 'lanApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.lanApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'lanApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.lanApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-15',
                                                    },
                                                    {
                                                      code: 'calcView',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcView',
                                                      compType: 'Input',
                                                      name: 'calcView',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcView',
                                                      dataKey:
                                                        '659896_root.body.calcView',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'ast',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-16',
                                                    },
                                                    {
                                                      code: 'calcTranslate',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcTranslate',
                                                      compType: 'Input',
                                                      name: 'calcTranslate',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcTranslate',
                                                      dataKey:
                                                        '659896_root.body.calcTranslate',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'displayExpression',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-17',
                                                    },
                                                    {
                                                      code: 'importantApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.importantApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'importantApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.importantApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-18',
                                                    },
                                                    {
                                                      code: 'importantApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.importantApproveGrade',
                                                      compType: 'Input',
                                                      name: 'importantApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.importantApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-19',
                                                    },
                                                    {
                                                      code: 'sceneId',
                                                      attrType: 'field',
                                                      type: 'long',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.sceneId',
                                                      compType: 'Input',
                                                      name: 'sceneId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.sceneId',
                                                      dataKey:
                                                        '659896_root.body.sceneId',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$state.sceneId$',
                                                        ],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-20',
                                                    },
                                                    {
                                                      code: 'approveMatrixId',
                                                      attrType: 'field',
                                                      type: 'long',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.approveMatrixId',
                                                      compType: 'Input',
                                                      name: 'approveMatrixId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.approveMatrixId',
                                                      dataKey:
                                                        '659896_root.body.approveMatrixId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'approveMatrixId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-21',
                                                    },
                                                    {
                                                      code: 'areaApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.areaApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'areaApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.areaApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-22',
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
                                                      id: 'root.body.lanId',
                                                      dataKey:
                                                        '659896_root.body.lanId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-1',
                                                    },
                                                    {
                                                      code: 'remark',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.remark',
                                                      compType: 'Input',
                                                      name: 'remark',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.remark',
                                                      dataKey:
                                                        '659896_root.body.remark',
                                                      value: {
                                                        type: [],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-12',
                                                    },
                                                    {
                                                      code: 'matrixPassType',
                                                      name: '矩阵通过类型',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.matrixPassType',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.matrixPassType',
                                                      dataKey:
                                                        '659896_root.body.matrixPassType',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'matrixPassType',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-2',
                                                    },
                                                    {
                                                      code: 'importantApproveViewGrade',
                                                      name: '重客审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.importantApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.importantApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-3',
                                                    },
                                                    {
                                                      code: 'lanApproveViewGrade',
                                                      name: '地市审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.lanApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.lanApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-4',
                                                    },
                                                    {
                                                      code: 'areaApproveViewGrade',
                                                      name: '区县审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.areaApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.areaApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-5',
                                                    },
                                                    {
                                                      code: 'calcExpress',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcExpress',
                                                      compType: 'Input',
                                                      name: 'calcExpress',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcExpress',
                                                      dataKey:
                                                        '659896_root.body.calcExpress',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'expression',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-6',
                                                    },
                                                    {
                                                      code: 'matrixTitle',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.matrixTitle',
                                                      compType: 'Input',
                                                      name: 'matrixTitle',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.matrixTitle',
                                                      dataKey:
                                                        '659896_root.body.matrixTitle',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'matrixTitle',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-7',
                                                    },
                                                    {
                                                      code: 'isSendHead',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.isSendHead',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-8',
                                                      id: 'root.body.isSendHead',
                                                      dataKey:
                                                        '659896_root.body.isSendHead',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'getFieldsValue',
                                                        ],
                                                        code: 'isSendHead',
                                                      },
                                                    },
                                                  ],
                                                  _id: 'root.body',
                                                  compType: 'Input',
                                                  parents: ['root'],
                                                  id: 'root.body',
                                                  dataKey: '659896_root.body',
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
                                              dataKey: '659896_root',
                                            },
                                          ],
                                          _sourceName: '审批矩阵修改-tsm',
                                        },
                                        actionObjId: 'apiRequest',
                                        actionObjName: 'system',
                                        value: 'apiRequest',
                                        line_number: 10,
                                      },
                                    ],
                                    condition: [],
                                    desc: 'operType = mod',
                                    callback: [
                                      {
                                        type: 'apiRequest',
                                        dataId: 166254221523696220,
                                        options: {
                                          compId: 'apiRequest',
                                          compName: 'system',
                                          id: '659896',
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
                                                  dataKey: '659896_root.header',
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
                                                  dataKey: '659896_root.path',
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
                                                  dataKey: '659896_root.query',
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
                                                      code: 'provinceId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.provinceId',
                                                      compType: 'Input',
                                                      name: 'provinceId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.provinceId',
                                                      dataKey:
                                                        '659896_root.body.provinceId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'provinceId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-0',
                                                    },
                                                    {
                                                      code: 'specialAreaFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialAreaFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialAreaFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialAreaFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialAreaFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-9',
                                                    },
                                                    {
                                                      code: 'specialLanFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialLanFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialLanFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialLanFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialLanFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-10',
                                                    },
                                                    {
                                                      code: 'specialImportantFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialImportantFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialImportantFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialImportantFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialImportantFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-11',
                                                    },
                                                    {
                                                      code: 'lanApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.lanApproveGrade',
                                                      compType: 'Input',
                                                      name: 'lanApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.lanApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-13',
                                                    },
                                                    {
                                                      code: 'areaApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.areaApproveGrade',
                                                      compType: 'Input',
                                                      name: 'areaApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.areaApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-14',
                                                    },
                                                    {
                                                      code: 'lanApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.lanApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'lanApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.lanApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-15',
                                                    },
                                                    {
                                                      code: 'calcView',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcView',
                                                      compType: 'Input',
                                                      name: 'calcView',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcView',
                                                      dataKey:
                                                        '659896_root.body.calcView',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'ast',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-16',
                                                    },
                                                    {
                                                      code: 'calcTranslate',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcTranslate',
                                                      compType: 'Input',
                                                      name: 'calcTranslate',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcTranslate',
                                                      dataKey:
                                                        '659896_root.body.calcTranslate',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'displayExpression',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-17',
                                                    },
                                                    {
                                                      code: 'importantApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.importantApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'importantApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.importantApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-18',
                                                    },
                                                    {
                                                      code: 'importantApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.importantApproveGrade',
                                                      compType: 'Input',
                                                      name: 'importantApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.importantApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-19',
                                                    },
                                                    {
                                                      code: 'sceneId',
                                                      attrType: 'field',
                                                      type: 'long',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.sceneId',
                                                      compType: 'Input',
                                                      name: 'sceneId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.sceneId',
                                                      dataKey:
                                                        '659896_root.body.sceneId',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$state.sceneId$',
                                                        ],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-20',
                                                    },
                                                    {
                                                      code: 'approveMatrixId',
                                                      attrType: 'field',
                                                      type: 'long',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.approveMatrixId',
                                                      compType: 'Input',
                                                      name: 'approveMatrixId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.approveMatrixId',
                                                      dataKey:
                                                        '659896_root.body.approveMatrixId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'approveMatrixId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-21',
                                                    },
                                                    {
                                                      code: 'areaApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.areaApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'areaApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.areaApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-22',
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
                                                      id: 'root.body.lanId',
                                                      dataKey:
                                                        '659896_root.body.lanId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-1',
                                                    },
                                                    {
                                                      code: 'remark',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.remark',
                                                      compType: 'Input',
                                                      name: 'remark',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.remark',
                                                      dataKey:
                                                        '659896_root.body.remark',
                                                      value: {
                                                        type: [],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-12',
                                                    },
                                                    {
                                                      code: 'matrixPassType',
                                                      name: '矩阵通过类型',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.matrixPassType',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.matrixPassType',
                                                      dataKey:
                                                        '659896_root.body.matrixPassType',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'matrixPassType',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-2',
                                                    },
                                                    {
                                                      code: 'importantApproveViewGrade',
                                                      name: '重客审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.importantApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.importantApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-3',
                                                    },
                                                    {
                                                      code: 'lanApproveViewGrade',
                                                      name: '地市审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.lanApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.lanApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-4',
                                                    },
                                                    {
                                                      code: 'areaApproveViewGrade',
                                                      name: '区县审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.areaApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.areaApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-5',
                                                    },
                                                    {
                                                      code: 'calcExpress',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcExpress',
                                                      compType: 'Input',
                                                      name: 'calcExpress',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcExpress',
                                                      dataKey:
                                                        '659896_root.body.calcExpress',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'expression',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-6',
                                                    },
                                                    {
                                                      code: 'matrixTitle',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.matrixTitle',
                                                      compType: 'Input',
                                                      name: 'matrixTitle',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.matrixTitle',
                                                      dataKey:
                                                        '659896_root.body.matrixTitle',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'matrixTitle',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-7',
                                                    },
                                                    {
                                                      code: 'isSendHead',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.isSendHead',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-8',
                                                      id: 'root.body.isSendHead',
                                                      dataKey:
                                                        '659896_root.body.isSendHead',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'getFieldsValue',
                                                        ],
                                                        code: 'isSendHead',
                                                      },
                                                    },
                                                  ],
                                                  _id: 'root.body',
                                                  compType: 'Input',
                                                  parents: ['root'],
                                                  id: 'root.body',
                                                  dataKey: '659896_root.body',
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
                                              dataKey: '659896_root',
                                            },
                                          ],
                                          _sourceName: '审批矩阵修改-tsm',
                                        },
                                        line_number: 10,
                                        callback1: [
                                          {
                                            type: 'showMessage',
                                            dataId: 166254221523676130,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '279095',
                                              pageJsonId: '2695813',
                                              type: 'success',
                                              value: '审批矩阵修改成功！',
                                            },
                                            line_number: 11,
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166254221523627940,
                                            options: {
                                              compId: 'Form_035658',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Form',
                                              id: '690735',
                                              disabled: 'true',
                                            },
                                            line_number: 12,
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166254221523602400,
                                            options: {
                                              compId: 'Button_8340845',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Button',
                                              id: '9102646',
                                              disabled: 'true',
                                            },
                                            line_number: 13,
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166254221523675200,
                                            options: {
                                              compId: 'Button_873123',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Button',
                                              id: '1037775',
                                              disabled: 'true',
                                            },
                                            line_number: 14,
                                          },
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 166254221523659650,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '7902677',
                                              pageJsonId: '2695813',
                                              customFuncName: 'onLoadTable',
                                              customFuncParams: 'object',
                                            },
                                            line_number: 15,
                                            callback1: [],
                                            callback2: [],
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
                                dataId: 166254221523667460,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166254221523603780,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166254221523696220,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166254221523614900,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523676130,
                                                children: [],
                                                todoOptions: [
                                                  'msgType',
                                                  'value',
                                                ],
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '279095',
                                                  pageJsonId: '2695813',
                                                  type: 'success',
                                                  value: '审批矩阵修改成功！',
                                                },
                                                actionObjId: 'showMessage',
                                                actionObjName: 'system',
                                                value: 'showMessage',
                                                line_number: 11,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523627940,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Form_035658',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Form',
                                                  id: '690735',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Form_035658',
                                                actionObjName: 'Form',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 12,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523602400,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Button_8340845',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '9102646',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Button_8340845',
                                                actionObjName: 'Button',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 13,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523675200,
                                                children: [],
                                                todoOptions: ['disabled'],
                                                options: {
                                                  compId: 'Button_873123',
                                                  compLib: 'comm',
                                                  pageJsonId: '2695813',
                                                  compName: 'Button',
                                                  id: '1037775',
                                                  disabled: 'true',
                                                },
                                                actionObjId: 'Button_873123',
                                                actionObjName: 'Button',
                                                value: 'setDisable',
                                                compLib: 'comm',
                                                line_number: 14,
                                              },
                                              {
                                                dataName: 'action',
                                                dataId: 166254221523659650,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166254221523658000,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166254221523648400,
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
                                                  id: '7902677',
                                                  pageJsonId: '2695813',
                                                  customFuncName: 'onLoadTable',
                                                  customFuncParams: 'object',
                                                },
                                                actionObjId: 'callSelfFunc',
                                                actionObjName: 'system',
                                                value: 'callSelfFunc',
                                                line_number: 15,
                                              },
                                            ],
                                            value: 'callback1',
                                            params: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166254221523604060,
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
                                          id: '659896',
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
                                                  dataKey: '659896_root.header',
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
                                                  dataKey: '659896_root.path',
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
                                                  dataKey: '659896_root.query',
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
                                                      code: 'provinceId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.provinceId',
                                                      compType: 'Input',
                                                      name: 'provinceId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.provinceId',
                                                      dataKey:
                                                        '659896_root.body.provinceId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'provinceId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-0',
                                                    },
                                                    {
                                                      code: 'specialAreaFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialAreaFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialAreaFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialAreaFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialAreaFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-9',
                                                    },
                                                    {
                                                      code: 'specialLanFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialLanFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialLanFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialLanFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialLanFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-10',
                                                    },
                                                    {
                                                      code: 'specialImportantFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialImportantFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialImportantFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialImportantFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialImportantFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-11',
                                                    },
                                                    {
                                                      code: 'lanApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.lanApproveGrade',
                                                      compType: 'Input',
                                                      name: 'lanApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.lanApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-13',
                                                    },
                                                    {
                                                      code: 'areaApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.areaApproveGrade',
                                                      compType: 'Input',
                                                      name: 'areaApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.areaApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-14',
                                                    },
                                                    {
                                                      code: 'lanApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.lanApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'lanApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.lanApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-15',
                                                    },
                                                    {
                                                      code: 'calcView',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcView',
                                                      compType: 'Input',
                                                      name: 'calcView',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcView',
                                                      dataKey:
                                                        '659896_root.body.calcView',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'ast',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-16',
                                                    },
                                                    {
                                                      code: 'calcTranslate',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcTranslate',
                                                      compType: 'Input',
                                                      name: 'calcTranslate',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcTranslate',
                                                      dataKey:
                                                        '659896_root.body.calcTranslate',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'displayExpression',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-17',
                                                    },
                                                    {
                                                      code: 'importantApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.importantApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'importantApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.importantApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-18',
                                                    },
                                                    {
                                                      code: 'importantApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.importantApproveGrade',
                                                      compType: 'Input',
                                                      name: 'importantApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.importantApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-19',
                                                    },
                                                    {
                                                      code: 'sceneId',
                                                      attrType: 'field',
                                                      type: 'long',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.sceneId',
                                                      compType: 'Input',
                                                      name: 'sceneId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.sceneId',
                                                      dataKey:
                                                        '659896_root.body.sceneId',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$state.sceneId$',
                                                        ],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-20',
                                                    },
                                                    {
                                                      code: 'approveMatrixId',
                                                      attrType: 'field',
                                                      type: 'long',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.approveMatrixId',
                                                      compType: 'Input',
                                                      name: 'approveMatrixId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.approveMatrixId',
                                                      dataKey:
                                                        '659896_root.body.approveMatrixId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'approveMatrixId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-21',
                                                    },
                                                    {
                                                      code: 'areaApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.areaApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'areaApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.areaApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-22',
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
                                                      id: 'root.body.lanId',
                                                      dataKey:
                                                        '659896_root.body.lanId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-1',
                                                    },
                                                    {
                                                      code: 'remark',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.remark',
                                                      compType: 'Input',
                                                      name: 'remark',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.remark',
                                                      dataKey:
                                                        '659896_root.body.remark',
                                                      value: {
                                                        type: [],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-12',
                                                    },
                                                    {
                                                      code: 'matrixPassType',
                                                      name: '矩阵通过类型',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.matrixPassType',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.matrixPassType',
                                                      dataKey:
                                                        '659896_root.body.matrixPassType',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'matrixPassType',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-2',
                                                    },
                                                    {
                                                      code: 'importantApproveViewGrade',
                                                      name: '重客审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.importantApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.importantApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-3',
                                                    },
                                                    {
                                                      code: 'lanApproveViewGrade',
                                                      name: '地市审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.lanApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.lanApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-4',
                                                    },
                                                    {
                                                      code: 'areaApproveViewGrade',
                                                      name: '区县审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.areaApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.areaApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-5',
                                                    },
                                                    {
                                                      code: 'calcExpress',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcExpress',
                                                      compType: 'Input',
                                                      name: 'calcExpress',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcExpress',
                                                      dataKey:
                                                        '659896_root.body.calcExpress',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'expression',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-6',
                                                    },
                                                    {
                                                      code: 'matrixTitle',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.matrixTitle',
                                                      compType: 'Input',
                                                      name: 'matrixTitle',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.matrixTitle',
                                                      dataKey:
                                                        '659896_root.body.matrixTitle',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'matrixTitle',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-7',
                                                    },
                                                    {
                                                      code: 'isSendHead',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.isSendHead',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-8',
                                                      id: 'root.body.isSendHead',
                                                      dataKey:
                                                        '659896_root.body.isSendHead',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'getFieldsValue',
                                                        ],
                                                        code: 'isSendHead',
                                                      },
                                                    },
                                                  ],
                                                  _id: 'root.body',
                                                  compType: 'Input',
                                                  parents: ['root'],
                                                  id: 'root.body',
                                                  dataKey: '659896_root.body',
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
                                              dataKey: '659896_root',
                                            },
                                          ],
                                          _sourceName: '审批矩阵修改-tsm',
                                        },
                                        actionObjId: 'apiRequest',
                                        actionObjName: 'system',
                                        value: 'apiRequest',
                                        line_number: 10,
                                      },
                                    ],
                                    condition: [],
                                    desc: 'operType = mod',
                                    callback: [
                                      {
                                        type: 'apiRequest',
                                        dataId: 166254221523696220,
                                        options: {
                                          compId: 'apiRequest',
                                          compName: 'system',
                                          id: '659896',
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
                                                  dataKey: '659896_root.header',
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
                                                  dataKey: '659896_root.path',
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
                                                  dataKey: '659896_root.query',
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
                                                      code: 'provinceId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.provinceId',
                                                      compType: 'Input',
                                                      name: 'provinceId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.provinceId',
                                                      dataKey:
                                                        '659896_root.body.provinceId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'provinceId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-0',
                                                    },
                                                    {
                                                      code: 'specialAreaFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialAreaFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialAreaFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialAreaFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialAreaFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-9',
                                                    },
                                                    {
                                                      code: 'specialLanFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialLanFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialLanFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialLanFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialLanFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-10',
                                                    },
                                                    {
                                                      code: 'specialImportantFlowCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.specialImportantFlowCode',
                                                      compType: 'Input',
                                                      name: 'specialImportantFlowCode',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.specialImportantFlowCode',
                                                      dataKey:
                                                        '659896_root.body.specialImportantFlowCode',
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-11',
                                                    },
                                                    {
                                                      code: 'lanApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.lanApproveGrade',
                                                      compType: 'Input',
                                                      name: 'lanApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.lanApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-13',
                                                    },
                                                    {
                                                      code: 'areaApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.areaApproveGrade',
                                                      compType: 'Input',
                                                      name: 'areaApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.areaApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-14',
                                                    },
                                                    {
                                                      code: 'lanApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.lanApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'lanApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.lanApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-15',
                                                    },
                                                    {
                                                      code: 'calcView',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcView',
                                                      compType: 'Input',
                                                      name: 'calcView',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcView',
                                                      dataKey:
                                                        '659896_root.body.calcView',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'ast',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-16',
                                                    },
                                                    {
                                                      code: 'calcTranslate',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcTranslate',
                                                      compType: 'Input',
                                                      name: 'calcTranslate',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcTranslate',
                                                      dataKey:
                                                        '659896_root.body.calcTranslate',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'displayExpression',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-17',
                                                    },
                                                    {
                                                      code: 'importantApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.importantApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'importantApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.importantApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-18',
                                                    },
                                                    {
                                                      code: 'importantApproveGrade',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.importantApproveGrade',
                                                      compType: 'Input',
                                                      name: 'importantApproveGrade',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveGrade',
                                                      dataKey:
                                                        '659896_root.body.importantApproveGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-19',
                                                    },
                                                    {
                                                      code: 'sceneId',
                                                      attrType: 'field',
                                                      type: 'long',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.sceneId',
                                                      compType: 'Input',
                                                      name: 'sceneId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.sceneId',
                                                      dataKey:
                                                        '659896_root.body.sceneId',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$state.sceneId$',
                                                        ],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-20',
                                                    },
                                                    {
                                                      code: 'approveMatrixId',
                                                      attrType: 'field',
                                                      type: 'long',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.approveMatrixId',
                                                      compType: 'Input',
                                                      name: 'approveMatrixId',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.approveMatrixId',
                                                      dataKey:
                                                        '659896_root.body.approveMatrixId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'approveMatrixId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-21',
                                                    },
                                                    {
                                                      code: 'areaApproveGradeDesc',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.areaApproveGradeDesc',
                                                      compType: 'Input',
                                                      name: 'areaApproveGradeDesc',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveGradeDesc',
                                                      dataKey:
                                                        '659896_root.body.areaApproveGradeDesc',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveGradeDesc',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-22',
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
                                                      id: 'root.body.lanId',
                                                      dataKey:
                                                        '659896_root.body.lanId',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanId',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-1',
                                                    },
                                                    {
                                                      code: 'remark',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.remark',
                                                      compType: 'Input',
                                                      name: 'remark',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.remark',
                                                      dataKey:
                                                        '659896_root.body.remark',
                                                      value: {
                                                        type: [],
                                                        code: '',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-12',
                                                    },
                                                    {
                                                      code: 'matrixPassType',
                                                      name: '矩阵通过类型',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.matrixPassType',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.matrixPassType',
                                                      dataKey:
                                                        '659896_root.body.matrixPassType',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'matrixPassType',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-2',
                                                    },
                                                    {
                                                      code: 'importantApproveViewGrade',
                                                      name: '重客审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.importantApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.importantApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.importantApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'importantApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-3',
                                                    },
                                                    {
                                                      code: 'lanApproveViewGrade',
                                                      name: '地市审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.lanApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.lanApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.lanApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'lanApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-4',
                                                    },
                                                    {
                                                      code: 'areaApproveViewGrade',
                                                      name: '区县审批显示等级',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.areaApproveViewGrade',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.areaApproveViewGrade',
                                                      dataKey:
                                                        '659896_root.body.areaApproveViewGrade',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'areaApproveViewGrade',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-5',
                                                    },
                                                    {
                                                      code: 'calcExpress',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.calcExpress',
                                                      compType: 'Input',
                                                      name: 'calcExpress',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.calcExpress',
                                                      dataKey:
                                                        '659896_root.body.calcExpress',
                                                      value: {
                                                        type: [
                                                          'datasource',
                                                          'remote_data',
                                                          'data',
                                                        ],
                                                        code: 'expression',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-6',
                                                    },
                                                    {
                                                      code: 'matrixTitle',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'root.body.matrixTitle',
                                                      compType: 'Input',
                                                      name: 'matrixTitle',
                                                      parents: ['root', 'body'],
                                                      id: 'root.body.matrixTitle',
                                                      dataKey:
                                                        '659896_root.body.matrixTitle',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'validateFields',
                                                        ],
                                                        code: 'matrixTitle',
                                                      },
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-7',
                                                    },
                                                    {
                                                      code: 'isSendHead',
                                                      name: '新增节点',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      _id: 'root.body.isSendHead',
                                                      compType: 'Input',
                                                      parents: ['root', 'body'],
                                                      parentType: 'object',
                                                      parentKey: '0-3',
                                                      key: '0-3-8',
                                                      id: 'root.body.isSendHead',
                                                      dataKey:
                                                        '659896_root.body.isSendHead',
                                                      value: {
                                                        type: [
                                                          'form',
                                                          'Form_035658',
                                                          'getFieldsValue',
                                                        ],
                                                        code: 'isSendHead',
                                                      },
                                                    },
                                                  ],
                                                  _id: 'root.body',
                                                  compType: 'Input',
                                                  parents: ['root'],
                                                  id: 'root.body',
                                                  dataKey: '659896_root.body',
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
                                              dataKey: '659896_root',
                                            },
                                          ],
                                          _sourceName: '审批矩阵修改-tsm',
                                        },
                                        line_number: 10,
                                        callback1: [
                                          {
                                            type: 'showMessage',
                                            dataId: 166254221523676130,
                                            options: {
                                              compId: 'showMessage',
                                              compName: 'system',
                                              id: '279095',
                                              pageJsonId: '2695813',
                                              type: 'success',
                                              value: '审批矩阵修改成功！',
                                            },
                                            line_number: 11,
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166254221523627940,
                                            options: {
                                              compId: 'Form_035658',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Form',
                                              id: '690735',
                                              disabled: 'true',
                                            },
                                            line_number: 12,
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166254221523602400,
                                            options: {
                                              compId: 'Button_8340845',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Button',
                                              id: '9102646',
                                              disabled: 'true',
                                            },
                                            line_number: 13,
                                          },
                                          {
                                            type: 'setDisable',
                                            dataId: 166254221523675200,
                                            options: {
                                              compId: 'Button_873123',
                                              compLib: 'comm',
                                              pageJsonId: '2695813',
                                              compName: 'Button',
                                              id: '1037775',
                                              disabled: 'true',
                                            },
                                            line_number: 14,
                                          },
                                          {
                                            type: 'callSelfFunc',
                                            dataId: 166254221523659650,
                                            options: {
                                              compId: 'callSelfFunc',
                                              compName: 'system',
                                              id: '7902677',
                                              pageJsonId: '2695813',
                                              customFuncName: 'onLoadTable',
                                              customFuncParams: 'object',
                                            },
                                            line_number: 15,
                                            callback1: [],
                                            callback2: [],
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
                                    dataId: 166254221523625730,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '155555',
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
                                              dataKey: '155555_root.header',
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
                                              dataKey: '155555_root.path',
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
                                              dataKey: '155555_root.query',
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
                                                  code: 'matrixPassType',
                                                  name: '矩阵通过类型',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.matrixPassType',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.matrixPassType',
                                                  dataKey:
                                                    '155555_root.body.matrixPassType',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'matrixPassType',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-3',
                                                },
                                                {
                                                  code: 'importantApproveViewGrade',
                                                  name: '重客审批显示等级',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.importantApproveViewGrade',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.importantApproveViewGrade',
                                                  dataKey:
                                                    '155555_root.body.importantApproveViewGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'importantApproveViewGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-6',
                                                },
                                                {
                                                  code: 'lanApproveViewGrade',
                                                  name: '地市审批显示等级',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.lanApproveViewGrade',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.lanApproveViewGrade',
                                                  dataKey:
                                                    '155555_root.body.lanApproveViewGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveViewGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-10',
                                                },
                                                {
                                                  code: 'areaApproveViewGrade',
                                                  name: '区县审批显示等级',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.areaApproveViewGrade',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.areaApproveViewGrade',
                                                  dataKey:
                                                    '155555_root.body.areaApproveViewGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveViewGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-12',
                                                },
                                                {
                                                  code: 'remark',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.remark',
                                                  compType: 'Input',
                                                  name: 'remark',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.remark',
                                                  dataKey:
                                                    '155555_root.body.remark',
                                                  value: { type: [], code: '' },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-0',
                                                },
                                                {
                                                  code: 'lanApproveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.lanApproveGrade',
                                                  compType: 'Input',
                                                  name: 'lanApproveGrade',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.lanApproveGrade',
                                                  dataKey:
                                                    '155555_root.body.lanApproveGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-1',
                                                },
                                                {
                                                  code: 'importantApproveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.importantApproveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'importantApproveGradeDesc',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.importantApproveGradeDesc',
                                                  dataKey:
                                                    '155555_root.body.importantApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'importantApproveGradeDesc',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-4',
                                                },
                                                {
                                                  code: 'areaApproveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.areaApproveGrade',
                                                  compType: 'Input',
                                                  name: 'areaApproveGrade',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.areaApproveGrade',
                                                  dataKey:
                                                    '155555_root.body.areaApproveGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-5',
                                                },
                                                {
                                                  code: 'lanApproveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.lanApproveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'lanApproveGradeDesc',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.lanApproveGradeDesc',
                                                  dataKey:
                                                    '155555_root.body.lanApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanApproveGradeDesc',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-7',
                                                },
                                                {
                                                  code: 'sceneId',
                                                  attrType: 'field',
                                                  type: 'long',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.sceneId',
                                                  compType: 'Input',
                                                  name: 'sceneId',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.sceneId',
                                                  dataKey:
                                                    '155555_root.body.sceneId',
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$state.sceneId$',
                                                    ],
                                                    code: '',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-8',
                                                },
                                                {
                                                  code: 'specialImportantFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.specialImportantFlowCode',
                                                  compType: 'Input',
                                                  name: 'specialImportantFlowCode',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.specialImportantFlowCode',
                                                  dataKey:
                                                    '155555_root.body.specialImportantFlowCode',
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-9',
                                                },
                                                {
                                                  code: 'areaApproveGradeDesc',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.areaApproveGradeDesc',
                                                  compType: 'Input',
                                                  name: 'areaApproveGradeDesc',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.areaApproveGradeDesc',
                                                  dataKey:
                                                    '155555_root.body.areaApproveGradeDesc',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'areaApproveGradeDesc',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-11',
                                                },
                                                {
                                                  code: 'calcExpress',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.calcExpress',
                                                  compType: 'Input',
                                                  name: 'calcExpress',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.calcExpress',
                                                  dataKey:
                                                    '155555_root.body.calcExpress',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'expression',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-13',
                                                },
                                                {
                                                  code: 'specialAreaFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.specialAreaFlowCode',
                                                  compType: 'Input',
                                                  name: 'specialAreaFlowCode',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.specialAreaFlowCode',
                                                  dataKey:
                                                    '155555_root.body.specialAreaFlowCode',
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-14',
                                                },
                                                {
                                                  code: 'matrixTitle',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.matrixTitle',
                                                  compType: 'Input',
                                                  name: 'matrixTitle',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.matrixTitle',
                                                  dataKey:
                                                    '155555_root.body.matrixTitle',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'matrixTitle',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-15',
                                                },
                                                {
                                                  code: 'specialLanFlowCode',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.specialLanFlowCode',
                                                  compType: 'Input',
                                                  name: 'specialLanFlowCode',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.specialLanFlowCode',
                                                  dataKey:
                                                    '155555_root.body.specialLanFlowCode',
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-16',
                                                },
                                                {
                                                  code: 'calcView',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.calcView',
                                                  compType: 'Input',
                                                  name: 'calcView',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.calcView',
                                                  dataKey:
                                                    '155555_root.body.calcView',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'ast',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-17',
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
                                                  id: 'root.body.lanId',
                                                  dataKey:
                                                    '155555_root.body.lanId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'lanId',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-18',
                                                },
                                                {
                                                  code: 'calcTranslate',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.calcTranslate',
                                                  compType: 'Input',
                                                  name: 'calcTranslate',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.calcTranslate',
                                                  dataKey:
                                                    '155555_root.body.calcTranslate',
                                                  value: {
                                                    type: [
                                                      'datasource',
                                                      'remote_data',
                                                      'data',
                                                    ],
                                                    code: 'displayExpression',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-19',
                                                },
                                                {
                                                  code: 'provinceId',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.provinceId',
                                                  compType: 'Input',
                                                  name: 'provinceId',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.provinceId',
                                                  dataKey:
                                                    '155555_root.body.provinceId',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'provinceId',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-20',
                                                },
                                                {
                                                  code: 'importantApproveGrade',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  _id: 'root.body.importantApproveGrade',
                                                  compType: 'Input',
                                                  name: 'importantApproveGrade',
                                                  parents: ['root', 'body'],
                                                  id: 'root.body.importantApproveGrade',
                                                  dataKey:
                                                    '155555_root.body.importantApproveGrade',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'validateFields',
                                                    ],
                                                    code: 'importantApproveGrade',
                                                  },
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-21',
                                                },
                                                {
                                                  code: 'isSendHead',
                                                  name: '新增节点',
                                                  attrType: 'field',
                                                  type: 'string',
                                                  mustFlag: 'F',
                                                  defaultValue: '',
                                                  _id: 'root.body.isSendHead',
                                                  compType: 'Input',
                                                  parents: ['root', 'body'],
                                                  parentType: 'object',
                                                  parentKey: '0-3',
                                                  key: '0-3-2',
                                                  id: 'root.body.isSendHead',
                                                  dataKey:
                                                    '155555_root.body.isSendHead',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_035658',
                                                      'getFieldsValue',
                                                    ],
                                                    code: 'isSendHead',
                                                  },
                                                },
                                              ],
                                              _id: 'root.body',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.body',
                                              dataKey: '155555_root.body',
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
                                          dataKey: '155555_root',
                                        },
                                      ],
                                      _sourceName: '审批矩阵新增-tsm',
                                    },
                                    line_number: 4,
                                    callback1: [
                                      {
                                        type: 'showMessage',
                                        dataId: 166254221523647200,
                                        options: {
                                          compId: 'showMessage',
                                          compName: 'system',
                                          id: '9574064',
                                          pageJsonId: '2695813',
                                          type: 'success',
                                          value: '审批矩阵新增成功！',
                                        },
                                        line_number: 5,
                                      },
                                      {
                                        type: 'setDisable',
                                        dataId: 166254221523685470,
                                        options: {
                                          compId: 'Form_035658',
                                          compLib: 'comm',
                                          pageJsonId: '2695813',
                                          compName: 'Form',
                                          id: '352499',
                                          disabled: 'true',
                                        },
                                        line_number: 6,
                                      },
                                      {
                                        type: 'setDisable',
                                        dataId: 166254221523641440,
                                        options: {
                                          compId: 'Button_8340845',
                                          compLib: 'comm',
                                          pageJsonId: '2695813',
                                          compName: 'Button',
                                          id: '9975025',
                                          disabled: 'true',
                                        },
                                        line_number: 7,
                                      },
                                      {
                                        type: 'setDisable',
                                        dataId: 166254221523607600,
                                        options: {
                                          compId: 'Button_873123',
                                          compLib: 'comm',
                                          pageJsonId: '2695813',
                                          compName: 'Button',
                                          id: '394892',
                                          disabled: 'true',
                                        },
                                        line_number: 8,
                                      },
                                      {
                                        type: 'callSelfFunc',
                                        dataId: 166254221523681700,
                                        options: {
                                          compId: 'callSelfFunc',
                                          compName: 'system',
                                          id: '2244006',
                                          pageJsonId: '2695813',
                                          customFuncName: 'onLoadTable',
                                          customFuncParams: 'object',
                                        },
                                        line_number: 9,
                                        callback1: [],
                                        callback2: [],
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
                            dataId: 166254217428663140,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '314361',
                              pageJsonId: '2695813',
                              type: 'error',
                              value: '$data.remote_data.error$',
                            },
                            line_number: 2,
                          },
                        ],
                      },
                    ];
                    eventDataifelse411.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataifelse411, { e }, 'ifelse', {
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
                    const forms47 = getFormByCompId('Form_035658', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms47) ? forms47 : [forms47]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDatasetDisable86: any = [
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
                    eventDatasetDisable86.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable86, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable87: any = [
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
                    eventDatasetDisable87.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable87, { e }, 'setDisable', {
                      id: 'setDisable',
                      name: 'setDisable',
                      type: 'setDisable',
                      platform: 'pc',
                    });
                    const eventDatasetDisable88: any = [
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
                    eventDatasetDisable88.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDatasetDisable88, { e }, 'setDisable', {
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

export default withPageHOC(Jzpzfgxlcyjzys$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { sceneCode: '', sceneId: '', nodeObj: '' },
});
