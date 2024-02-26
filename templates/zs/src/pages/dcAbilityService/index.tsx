// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Input,
  Button,
  Table,
  TextArea,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '892712309456867328';
const DcAbilityService$$Page: React.FC<PageProps> = ({
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
  const refresh_table = (options_763614: any) => {
    const eventDatasetLoading35: any = [
      {
        type: 'setLoading',
        dataId: 166450031887347520,
        options: {
          compId: 'Table_833694',
          compLib: 'comm',
          pageJsonId: '302536',
          compName: 'Table',
          id: '0058102',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading35.params =
      [
        {
          title: '事件入参',
          name: 'options_763614',
          value: '$options_763614$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading35, { options_763614 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource49: any = [
      {
        type: 'reloadDataSource',
        dataId: 166537097940409950,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '367424',
          pageJsonId: '302536',
          dataSourceId: 166450748718590460,
          dataSourceName: 'qryAbilityServiceInfoPage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '554428',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '5148239',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '4900574',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '444575',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '5513891',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '41681',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '293938',
                  code: 'serviceCode',
                  name: 'serviceCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_2804244', 'getFieldsValue'],
                    code: 'serviceCode',
                  },
                },
                {
                  attrId: '0990488',
                  code: 'serviceName',
                  name: 'serviceName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: ['form', 'Form_2804244', 'getFieldsValue'],
                    code: 'serviceName',
                  },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '6092837',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '6934539',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '2412096',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '0648221',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '567622',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8316996',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '345501',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '374964',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '095782',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '0317647',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '04047',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '31063',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '3349303',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5357546',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '875996',
                      code: 'contVersion',
                      name: 'contVersion',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '624165',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '769404',
                      code: 'abilityServiceId',
                      name: 'abilityServiceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '936409',
                      code: 'requestType',
                      name: 'requestType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '454549',
                      code: 'serviceCode',
                      name: 'serviceCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '647303',
                      code: 'sysfuncId',
                      name: 'sysfuncId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '56686',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '38128',
                      code: 'serviceName',
                      name: 'serviceName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '97360095',
                      code: 'abilityId',
                      name: 'abilityId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0302552',
                      code: 'targetSystem',
                      name: 'targetSystem',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '6189636',
                      code: 'msgVersion',
                      name: 'msgVersion',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '917425',
                      code: 'requestTarget',
                      name: 'requestTarget',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '996946',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '767805',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '350826',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '851513',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0033535',
                      code: 'updateDate',
                      name: 'updateDate',
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
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 166537103659258940,
            options: {
              compId: 'Table_833694',
              compLib: 'comm',
              pageJsonId: '302536',
              compName: 'Table',
              id: '868221',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166537105713669660,
            options: {
              compId: 'Table_833694',
              compLib: 'comm',
              pageJsonId: '302536',
              compName: 'Table',
              id: '8205145',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource49.params =
      [
        {
          title: '事件入参',
          name: 'options_763614',
          value: '$options_763614$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource49,
      { options_763614 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };
  const enable_edit = (options_988725: any) => {
    const eventDatasetDisable25: any = [
      {
        type: 'setDisable',
        dataId: 166450053057093900,
        options: {
          compId: 'Form_7532583',
          compLib: 'comm',
          pageJsonId: '302536',
          compName: 'Form',
          id: '972713',
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable25.params =
      [
        {
          title: '事件入参',
          name: 'options_988725',
          value: '$options_988725$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable25, { options_988725 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable26: any = [
      {
        type: 'setDisable',
        dataId: 166450053994098980,
        options: {
          compId: 'Button_260692',
          compLib: 'comm',
          pageJsonId: '302536',
          compName: 'Button',
          id: '9519424',
        },
        line_number: 2,
      },
    ];
    eventDatasetDisable26.params =
      [
        {
          title: '事件入参',
          name: 'options_988725',
          value: '$options_988725$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable26, { options_988725 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable27: any = [
      {
        type: 'setDisable',
        dataId: 166450055363887520,
        options: {
          compId: 'Button_4650005',
          compLib: 'comm',
          pageJsonId: '302536',
          compName: 'Button',
          id: '468817',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable27.params =
      [
        {
          title: '事件入参',
          name: 'options_988725',
          value: '$options_988725$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable27, { options_988725 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };
  const disable_edit = (options_4353808: any) => {
    const eventDatasetDisable28: any = [
      {
        type: 'setDisable',
        dataId: 166450057866691800,
        options: {
          compId: 'Form_7532583',
          compLib: 'comm',
          pageJsonId: '302536',
          compName: 'Form',
          id: '884334',
          disabled: 'true',
        },
        line_number: 1,
      },
    ];
    eventDatasetDisable28.params =
      [
        {
          title: '事件入参',
          name: 'options_4353808',
          value: '$options_4353808$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable28, { options_4353808 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const forms12 = getFormByCompId('Form_7532583', refs);
    // 支持循环容器中的表单重置
    (Array.isArray(forms12) ? forms12 : [forms12]).forEach((form) =>
      form?.resetFields(),
    );
    const eventDatasetDisable29: any = [
      {
        type: 'setDisable',
        dataId: 166450060170830980,
        options: {
          compId: 'Button_260692',
          compLib: 'comm',
          pageJsonId: '302536',
          compName: 'Button',
          id: '100363',
          disabled: 'true',
        },
        line_number: 3,
      },
    ];
    eventDatasetDisable29.params =
      [
        {
          title: '事件入参',
          name: 'options_4353808',
          value: '$options_4353808$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable29, { options_4353808 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
    const eventDatasetDisable30: any = [
      {
        type: 'setDisable',
        dataId: 166450060694988130,
        options: {
          compId: 'Button_4650005',
          compLib: 'comm',
          pageJsonId: '302536',
          compName: 'Button',
          id: '315408',
          disabled: 'true',
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable30.params =
      [
        {
          title: '事件入参',
          name: 'options_4353808',
          value: '$options_4353808$',
        },
      ] || [];
    CMDGenerator(eventDatasetDisable30, { options_4353808 }, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refresh_table,
    enable_edit,
    disable_edit,
  }));

  useEffect(() => {
    const eventDatacallSelfFunc48: any = [
      {
        type: 'callSelfFunc',
        dataId: 166444441010125120,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '277873',
          pageJsonId: '302536',
          customFuncName: 'disable_edit',
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc48.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc48, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_302536__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_302536_1',
          uid: 'View_302536_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_302536_1')}
        {...injectData}
      >
        <Card
          name={'能力列表'}
          cardIconType={'middle'}
          title={'能开列表'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          visible={true}
          hasIcon={true}
          extend={[
            {
              id: '90521387',
              title: '新增数据',
              iconPos: 'left',
              btnType: 'primary',
              icon: { theme: 'outlined', type: 'plus', isIconFont: false },
            },
            {
              id: '861589',
              title: '刷新缓存',
              iconPos: 'left',
              btnType: 'primary',
              icon: { theme: 'outlined', type: 'redo', isIconFont: false },
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
            id: 'Card_11411',
            uid: 'Card_11411',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          onClickBtn1={(e: any) => {
            const eventDatasetDataSource281: any = [
              {
                type: 'setDataSource',
                dataId: 166452020301422500,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '451888',
                  pageJsonId: '302536',
                  dataSourceId: 166444388219177800,
                  dataSourceName: 'local_vars',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '915267',
                      code: 'op',
                      name: '动作',
                      type: 'string',
                      initialData: { type: 'static', value: 'add' },
                      value: { type: ['customize'], code: 'add' },
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
            eventDatasetDataSource281.params =
              [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatasetDataSource281, { e }, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
            const eventDatacallSelfFunc784: any = [
              {
                type: 'callSelfFunc',
                dataId: 166452023612412160,
                options: {
                  compId: 'callSelfFunc',
                  compName: 'system',
                  id: '957662',
                  pageJsonId: '302536',
                  customFuncName: 'enable_edit',
                },
                line_number: 2,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatacallSelfFunc784.params =
              [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatacallSelfFunc784, { e }, 'callSelfFunc', {
              id: 'callSelfFunc',
              name: 'callSelfFunc',
              type: 'callSelfFunc',
              platform: 'pc',
            });
            const forms192 = getFormByCompId('Form_7532583', refs);
            // 支持循环容器中的表单重置
            (Array.isArray(forms192) ? forms192 : [forms192]).forEach((form) =>
              form?.resetFields(),
            );
          }}
          onClickBtn2={(e: any) => {
            const eventDatasetLoading230: any = [
              {
                type: 'setLoading',
                dataId: 166452031004169500,
                options: {
                  compId: 'Table_833694',
                  compLib: 'comm',
                  pageJsonId: '302536',
                  compName: 'Table',
                  id: '6962884',
                  loading: true,
                },
                line_number: 1,
              },
            ];
            eventDatasetLoading230.params =
              [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatasetLoading230, { e }, 'setLoading', {
              id: 'setLoading',
              name: 'setLoading',
              type: 'setLoading',
              platform: 'pc',
            });
            const eventDataapiRequest802: any = [
              {
                type: 'apiRequest',
                dataId: 166452098198843400,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '0527375',
                  pageJsonId: '302536',
                  sync: false,
                  actionTitle: '',
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'loadAllAbilityServiceInfoIntoCache',
                  _apiCode: 'loadAllAbilityServiceInfoIntoCache',
                  _source: 'rhin',
                  _serviceId: '893027787756769280',
                  _serviceTitle:
                    '刷新所有能开服务缓存: loadAllAbilityServiceInfoIntoCache',
                  params: 'object',
                },
                line_number: 2,
                callback1: [
                  {
                    type: 'setLoading',
                    dataId: 166452103317997440,
                    options: {
                      compId: 'Table_833694',
                      compLib: 'comm',
                      pageJsonId: '302536',
                      compName: 'Table',
                      id: '32928',
                      loading: false,
                    },
                    line_number: 3,
                  },
                  {
                    type: 'showMessage',
                    dataId: 166452109657593730,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '1433946',
                      pageJsonId: '302536',
                      type: 'success',
                      value: '刷新缓存成功',
                    },
                    line_number: 4,
                  },
                ],
                callback2: [
                  {
                    type: 'setLoading',
                    dataId: 166452114761321250,
                    options: {
                      compId: 'Table_833694',
                      compLib: 'comm',
                      pageJsonId: '302536',
                      compName: 'Table',
                      id: '2715334',
                      loading: false,
                    },
                    line_number: 5,
                  },
                ],
              },
            ];
            eventDataapiRequest802.params =
              [{ title: '按钮2点击回调', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDataapiRequest802, { e }, 'apiRequest', {
              id: 'apiRequest',
              name: 'apiRequest',
              type: 'apiRequest',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Card_11411')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_2804244'}
            $$componentItem={{
              id: 'Form_2804244',
              uid: 'Form_2804244',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_2804244')}
            {...injectData}
          >
            <Input
              name={'服务编码'}
              size={'default'}
              selfSpan={8}
              labelCol={'6'}
              wrapperCol={'16'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              formItemIndex={0}
              fieldName={'serviceCode'}
              placeholder={'请输入'}
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
                id: 'Input_881668',
                uid: 'Input_881668',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              style={{ flex: '' }}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc788: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166444471757032100,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '258255995',
                      pageJsonId: '302536',
                      customFuncName: 'refresh_table',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc788.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc788, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_881668')}
              {...injectData}
            />
            <Input
              name={'服务名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={'16'}
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
              fieldName={'serviceName'}
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
                id: 'Input_5254568',
                uid: 'Input_5254568',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc789: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166537135693676400,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '541285',
                      pageJsonId: '302536',
                      customFuncName: 'refresh_table',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc789.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc789, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_5254568')}
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_131191',
                uid: 'View_131191',
                type: 'View',
                ...componentItem,
              }}
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
              ref={(r: any) => refs.setComponentRef(r, 'View_131191')}
              {...injectData}
            >
              <Button
                name={'查询'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'primary'}
                formItemIndex={3}
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_7271396',
                  uid: 'Button_7271396',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc790: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166452136409338620,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '4488067',
                        pageJsonId: '302536',
                        customFuncName: 'refresh_table',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc790.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc790,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_7271396')}
                {...injectData}
              />
              <Button
                name={'重置'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'default'}
                formItemIndex={4}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_5706071',
                  uid: 'Button_5706071',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const forms194 = getFormByCompId('Form_2804244', refs);
                  // 支持循环容器中的表单重置
                  (Array.isArray(forms194) ? forms194 : [forms194]).forEach(
                    (form) => form?.resetFields(),
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_5706071')}
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'total'}
            isFlexColumn={false}
            pageSize={5}
            current={data?.qryAbilityServiceInfoPage?.resultData?.current}
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
                title: '主键',
                dataIndex: 'abilityServiceId',
                key: 'abilityServiceId',
                edittype: 'long',
                id: '783268',
                className: '',
                hiddenRule: '1',
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
                title: '目标系统',
                dataIndex: 'targetSystem',
                key: 'targetSystem',
                edittype: 'string',
                id: '2885136',
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
                title: '服务编码',
                dataIndex: 'serviceCode',
                key: 'serviceCode',
                edittype: 'string',
                id: '3828654',
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
                title: '请求版本',
                dataIndex: 'contVersion',
                key: 'contVersion',
                edittype: 'string',
                id: '08717',
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
                title: '消息版本',
                dataIndex: 'msgVersion',
                key: 'msgVersion',
                edittype: 'string',
                id: '541596',
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
                title: '服务名称',
                dataIndex: 'serviceName',
                key: 'serviceName',
                edittype: 'string',
                id: '890007',
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
                title: '请求服务ID',
                dataIndex: 'sysfuncId',
                key: 'sysfuncId',
                edittype: 'string',
                id: '7843087',
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
                title: '请求目标',
                dataIndex: 'requestTarget',
                key: 'requestTarget',
                edittype: 'string',
                id: '0027485',
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
                title: '请求类型',
                dataIndex: 'requestType',
                key: 'requestType',
                edittype: 'string',
                id: '6731907',
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
                title: '能开能力ID',
                dataIndex: 'abilityId',
                key: 'abilityId',
                edittype: 'string',
                id: '8771344',
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
                title: '创建人名称',
                dataIndex: 'createStaffName',
                key: 'createStaffName',
                edittype: 'string',
                id: '058634',
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
                title: '创建时间',
                key: 'createDate',
                dataIndex: 'createDate',
                className: 'divider',
                id: '8271817',
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
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={true}
            showSizeChanger={false}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            rowKey={'abilityServiceId'}
            rowActions={[
              {
                title: '编辑',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'edit' },
                type: 'edit',
                id: '8537933',
                isIcon: false,
                checked: true,
              },
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '92952',
                isIcon: false,
                checked: true,
              },
            ]}
            extend={[]}
            dataSource={data?.qryAbilityServiceInfoPage?.resultData?.records}
            fieldName={'data.qryAbilityServiceInfoPage.resultData.total'}
            total={data?.qryAbilityServiceInfoPage?.resultData?.total}
            dataSourceFromDataSourceConfig={
              'data.qryAbilityServiceInfoPage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_833694',
              uid: 'Table_833694',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '16px 16px 16px 16px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatareloadDataSource132: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166444499254809280,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '6621153',
                    pageJsonId: '302536',
                    dataSourceId: 166450748718590460,
                    dataSourceName: 'qryAbilityServiceInfoPage',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '554428',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                      },
                      {
                        attrId: '5148239',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                      },
                      {
                        attrId: '4900574',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                      },
                      {
                        attrId: '444575',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '293938',
                            code: 'serviceCode',
                            name: 'serviceCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            value: {
                              type: ['form', 'Form_2804244', 'getFieldsValue'],
                              code: 'serviceCode',
                            },
                          },
                          {
                            attrId: '5513891',
                            code: 'pageNum',
                            name: 'pageNum',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '41681',
                            code: 'pageSize',
                            name: 'pageSize',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                        ],
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '6092837',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '6934539',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '2412096',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '0648221',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '567622',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '8316996',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '345501',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '374964',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '095782',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '0317647',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '04047',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'fieldArray',
                            children: [
                              {
                                attrId: '592036',
                                code: 'listItem',
                                name: '列表元素',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                              },
                            ],
                          },
                          {
                            attrId: '31063',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '3349303',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '5357546',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '97360095',
                                code: 'abilityId',
                                name: 'abilityId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '454549',
                                code: 'serviceCode',
                                name: 'serviceCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '875996',
                                code: 'contVersion',
                                name: 'contVersion',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '38128',
                                code: 'serviceName',
                                name: 'serviceName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '0302552',
                                code: 'targetSystem',
                                name: 'targetSystem',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '6189636',
                                code: 'msgVersion',
                                name: 'msgVersion',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '647303',
                                code: 'sysfuncId',
                                name: 'sysfuncId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '936409',
                                code: 'requestType',
                                name: 'requestType',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '56686',
                                code: 'remark',
                                name: 'remark',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '917425',
                                code: 'requestTarget',
                                name: 'requestTarget',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '769404',
                                code: 'abilityServiceId',
                                name: 'abilityServiceId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
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
              eventDatareloadDataSource132.params =
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
                eventDatareloadDataSource132,
                { page, pageSize },
                'reloadDataSource',
                {
                  id: 'reloadDataSource',
                  name: 'reloadDataSource',
                  type: 'reloadDataSource',
                  platform: 'pc',
                },
              );
            }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatasetLoading231: any = [
                {
                  type: 'setLoading',
                  dataId: 166452225028072930,
                  options: {
                    compId: 'Table_833694',
                    compLib: 'comm',
                    pageJsonId: '302536',
                    compName: 'Table',
                    id: '839677',
                    loading: true,
                  },
                  line_number: 1,
                },
              ];
              eventDatasetLoading231.params =
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
                eventDatasetLoading231,
                { rowId, row, index },
                'setLoading',
                {
                  id: 'setLoading',
                  name: 'setLoading',
                  type: 'setLoading',
                  platform: 'pc',
                },
              );
              const eventDataapiRequest803: any = [
                {
                  type: 'apiRequest',
                  dataId: 166452227447730620,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '8798',
                    pageJsonId: '302536',
                    sync: false,
                    method: 'post',
                    url: '/app/rhin/gateway/callRhinEngine',
                    _capabilityCode: 'delAbilityServiceInfo',
                    _apiCode: 'delAbilityServiceInfo',
                    _source: 'rhin',
                    _serviceId: '893019671304572928',
                    _serviceTitle: '删除能开服务: delAbilityServiceInfo',
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
                        dataKey: '8798_header',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        children: [
                          {
                            code: 'dcAbilityServiceId',
                            attrType: 'field',
                            type: 'long',
                            mustFlag: 'F',
                            _id: 'path.dcAbilityServiceId',
                            compType: 'Input',
                            name: 'dcAbilityServiceId',
                            parents: ['path'],
                            id: 'path.dcAbilityServiceId',
                            dataKey: '8798_path.dcAbilityServiceId',
                            value: {
                              type: ['context', '$row$'],
                              hideAttr: false,
                              code: 'abilityServiceId',
                            },
                          },
                        ],
                        _id: 'path',
                        compType: 'Input',
                        parents: [],
                        id: 'path',
                        dataKey: '8798_path',
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        _id: 'query',
                        compType: 'Input',
                        parents: [],
                        id: 'query',
                        dataKey: '8798_query',
                      },
                      {
                        code: 'body',
                        name: '请求体',
                        attrType: 'object',
                        _id: 'body',
                        compType: 'Input',
                        parents: [],
                        id: 'body',
                        dataKey: '8798_body',
                      },
                    ],
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'callSelfFunc',
                      dataId: 166452280604148860,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '549598',
                        pageJsonId: '302536',
                        customFuncName: 'refresh_table',
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDataapiRequest803.params =
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
                eventDataapiRequest803,
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
            onRowEdit={(rowId: any, row: any, index: any) => {
              const eventDatasetDataSource282: any = [
                {
                  type: 'setDataSource',
                  dataId: 166452283929881700,
                  options: {
                    compId: 'setDataSource',
                    compName: 'page',
                    id: '443578',
                    pageJsonId: '302536',
                    dataSourceId: 166444388219177800,
                    dataSourceName: 'local_vars',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        attrId: '915267',
                        code: 'op',
                        name: '动作',
                        type: 'string',
                        initialData: { type: 'static', value: 'add' },
                        value: { type: ['customize'], code: 'edit' },
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
              eventDatasetDataSource282.params =
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
                eventDatasetDataSource282,
                { rowId, row, index },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
              const eventDatacallSelfFunc791: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 166452286934582050,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '20812513',
                    pageJsonId: '302536',
                    customFuncName: 'enable_edit',
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'setCurrentFormValues',
                      dataId: 166452289654968640,
                      options: {
                        compId: 'Form_7532583',
                        compLib: 'comm',
                        pageJsonId: '302536',
                        compName: 'Form',
                        id: '810054',
                        params: '$row$',
                      },
                      line_number: 3,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc791.params =
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
                eventDatacallSelfFunc791,
                { rowId, row, index },
                'callSelfFunc',
                {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                },
              );
            }}
            onRowClick={(rowId: any, row: any, index: any) => {
              const eventDatasetCurrentFormValues38: any = [
                {
                  type: 'setCurrentFormValues',
                  dataId: 166581803293940700,
                  options: {
                    compId: 'Form_7532583',
                    compLib: 'comm',
                    pageJsonId: '302536',
                    compName: 'Form',
                    id: '366387',
                    params: '$row$',
                  },
                  line_number: 1,
                },
              ];
              eventDatasetCurrentFormValues38.params =
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
                eventDatasetCurrentFormValues38,
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
            ref={(r: any) => refs.setComponentRef(r, 'Table_833694')}
            {...injectData}
          />
        </Card>
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6254694',
            uid: 'View_6254694',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_6254694')}
          {...injectData}
        >
          <Card
            name={'动作'}
            cardIconType={'middle'}
            title={'能开详情'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            visible={true}
            hasIcon={true}
            fieldName={'data.local_vars.op'}
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
              id: 'Card_465316',
              uid: 'Card_465316',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0px 0px 16px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_465316')}
            {...injectData}
          >
            <Form
              name={'表单'}
              colSpan={12}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              visible={true}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_7532583'}
              $$componentItem={{
                id: 'Form_7532583',
                uid: 'Form_7532583',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_7532583')}
              {...injectData}
            >
              <Input
                name={'目标系统'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={0}
                fieldName={'targetSystem'}
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
                  id: 'Input_918079',
                  uid: 'Input_918079',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_918079')}
                {...injectData}
              />
              <Input
                name={'服务编码'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={1}
                fieldName={'serviceCode'}
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
                  id: 'Input_416654',
                  uid: 'Input_416654',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_416654')}
                {...injectData}
              />
              <Input
                name={'请求版本'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={2}
                fieldName={'contVersion'}
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
                  id: 'Input_274184',
                  uid: 'Input_274184',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_274184')}
                {...injectData}
              />
              <Input
                name={'消息版本'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={3}
                fieldName={'msgVersion'}
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
                  id: 'Input_389712',
                  uid: 'Input_389712',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_389712')}
                {...injectData}
              />
              <Input
                name={'服务名称'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={4}
                fieldName={'serviceName'}
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
                  id: 'Input_4072777',
                  uid: 'Input_4072777',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_4072777')}
                {...injectData}
              />
              <Input
                name={'请求服务ID'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={5}
                fieldName={'sysfuncId'}
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
                  id: 'Input_951019',
                  uid: 'Input_951019',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_951019')}
                {...injectData}
              />
              <Input
                name={'请求目标'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={6}
                fieldName={'requestTarget'}
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
                  id: 'Input_891081',
                  uid: 'Input_891081',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_891081')}
                {...injectData}
              />
              <Input
                name={'请求类型'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={7}
                fieldName={'requestType'}
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
                  id: 'Input_891081_084949',
                  uid: 'Input_891081_084949',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_891081_084949')}
                {...injectData}
              />
              <Input
                name={'能开能力ID'}
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
                required={true}
                placeholder={'请输入'}
                formItemIndex={8}
                fieldName={'abilityId'}
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
                  id: 'Input_476962',
                  uid: 'Input_476962',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_476962')}
                {...injectData}
              />
              <TextArea
                name={'备注'}
                selfSpan={24}
                labelCol={'4'}
                wrapperCol={20}
                readOnly={false}
                visible={true}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                fieldName={'remark'}
                formItemIndex={9}
                $$componentItem={{
                  id: 'Input_887794',
                  uid: 'Input_887794',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_887794')}
                {...injectData}
              />
              <Input
                name={'主键'}
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
                formItemIndex={10}
                fieldName={'abilityServiceId'}
                disabled={false}
                visible={false}
                readOnly={false}
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
                  id: 'Input_1236207',
                  uid: 'Input_1236207',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_1236207')}
                {...injectData}
              />
            </Form>
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_567932',
                uid: 'View_567932',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0px 0px 0px 0px',
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                margin: '16px 0px 0px 0px',
                gap: '12px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_567932')}
              {...injectData}
            >
              <Button
                name={'确定'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_260692',
                  uid: 'Button_260692',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatavalidateCurrentForm95: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 166452312627332640,
                      options: {
                        compId: 'Form_7532583',
                        compLib: 'comm',
                        pageJsonId: '302536',
                        compName: 'Form',
                        id: '5180564',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setLoading',
                          dataId: 166452316951336220,
                          options: {
                            compId: 'Button_260692',
                            compLib: 'comm',
                            pageJsonId: '302536',
                            compName: 'Button',
                            id: '8374396',
                            loading: true,
                          },
                          line_number: 2,
                        },
                        {
                          type: 'apiRequest',
                          dataId: 166452317626904740,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '637462',
                            pageJsonId: '302536',
                            sync: false,
                            actionTitle: '',
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'addAbilityServiceInfo',
                            _apiCode: 'addAbilityServiceInfo',
                            _source: 'rhin',
                            _serviceId: '893020956292784128',
                            _serviceTitle:
                              '新增能开服务-hyj: addAbilityServiceInfo',
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
                                dataKey: '637462_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '637462_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '637462_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'abilityServiceId',
                                    attrType: 'field',
                                    type: 'long',
                                    mustFlag: 'F',
                                    _id: 'body.abilityServiceId',
                                    compType: 'Input',
                                    name: 'abilityServiceId',
                                    parents: ['body'],
                                    id: 'body.abilityServiceId',
                                    dataKey: '637462_body.abilityServiceId',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'abilityServiceId',
                                    },
                                  },
                                  {
                                    code: 'targetSystem',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.targetSystem',
                                    compType: 'Input',
                                    name: 'targetSystem',
                                    parents: ['body'],
                                    id: 'body.targetSystem',
                                    dataKey: '637462_body.targetSystem',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'targetSystem',
                                    },
                                  },
                                  {
                                    code: 'serviceCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.serviceCode',
                                    compType: 'Input',
                                    name: 'serviceCode',
                                    parents: ['body'],
                                    id: 'body.serviceCode',
                                    dataKey: '637462_body.serviceCode',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'serviceCode',
                                    },
                                  },
                                  {
                                    code: 'contVersion',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.contVersion',
                                    compType: 'Input',
                                    name: 'contVersion',
                                    parents: ['body'],
                                    id: 'body.contVersion',
                                    dataKey: '637462_body.contVersion',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'contVersion',
                                    },
                                  },
                                  {
                                    code: 'msgVersion',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.msgVersion',
                                    compType: 'Input',
                                    name: 'msgVersion',
                                    parents: ['body'],
                                    id: 'body.msgVersion',
                                    dataKey: '637462_body.msgVersion',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'msgVersion',
                                    },
                                  },
                                  {
                                    code: 'serviceName',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.serviceName',
                                    compType: 'Input',
                                    name: 'serviceName',
                                    parents: ['body'],
                                    id: 'body.serviceName',
                                    dataKey: '637462_body.serviceName',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'serviceName',
                                    },
                                  },
                                  {
                                    code: 'sysfuncId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sysfuncId',
                                    compType: 'Input',
                                    name: 'sysfuncId',
                                    parents: ['body'],
                                    id: 'body.sysfuncId',
                                    dataKey: '637462_body.sysfuncId',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'sysfuncId',
                                    },
                                  },
                                  {
                                    code: 'requestTarget',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.requestTarget',
                                    compType: 'Input',
                                    name: 'requestTarget',
                                    parents: ['body'],
                                    id: 'body.requestTarget',
                                    dataKey: '637462_body.requestTarget',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'requestTarget',
                                    },
                                  },
                                  {
                                    code: 'requestType',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.requestType',
                                    compType: 'Input',
                                    name: 'requestType',
                                    parents: ['body'],
                                    id: 'body.requestType',
                                    dataKey: '637462_body.requestType',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'requestType',
                                    },
                                  },
                                  {
                                    code: 'abilityId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.abilityId',
                                    compType: 'Input',
                                    name: 'abilityId',
                                    parents: ['body'],
                                    id: 'body.abilityId',
                                    dataKey: '637462_body.abilityId',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'abilityId',
                                    },
                                  },
                                  {
                                    code: 'createStaffName',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.createStaffName',
                                    compType: 'Input',
                                    name: 'createStaffName',
                                    parents: ['body'],
                                    id: 'body.createStaffName',
                                    dataKey: '637462_body.createStaffName',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'createStaffName',
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
                                    dataKey: '637462_body.remark',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_7532583',
                                        'validateFields',
                                      ],
                                      code: 'remark',
                                    },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '637462_body',
                              },
                            ],
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'setLoading',
                              dataId: 166452322141330900,
                              options: {
                                compId: 'Button_260692',
                                compLib: 'comm',
                                pageJsonId: '302536',
                                compName: 'Button',
                                id: '010716',
                                loading: false,
                              },
                              line_number: 4,
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 1664523846183974,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '78897086',
                                pageJsonId: '302536',
                                customFuncName: 'disable_edit',
                              },
                              line_number: 5,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'callSelfFunc',
                              dataId: 166452387369957200,
                              options: {
                                compId: 'callSelfFunc',
                                compName: 'system',
                                id: '8195506',
                                pageJsonId: '302536',
                                customFuncName: 'refresh_table',
                              },
                              line_number: 6,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                          callback2: [
                            {
                              type: 'setLoading',
                              dataId: 166452391271387070,
                              options: {
                                compId: 'Button_260692',
                                compLib: 'comm',
                                pageJsonId: '302536',
                                compName: 'Button',
                                id: '334569',
                                loading: false,
                              },
                              line_number: 7,
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatavalidateCurrentForm95.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatavalidateCurrentForm95,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_260692')}
                {...injectData}
              />
              <Button
                name={'取消'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'default'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_4650005',
                  uid: 'Button_4650005',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc792: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166452376922554750,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '83954',
                        pageJsonId: '302536',
                        customFuncName: 'disable_edit',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc792.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc792,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_4650005')}
                {...injectData}
              />
            </View>
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(DcAbilityService$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
