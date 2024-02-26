// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '913309000971296768';
const ChooseTacheWithPost$$Modal: React.FC<PageProps> = ({
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
  const refreshPostInfo = (options_966448: any) => {
    const eventDatasetLoading41: any = [
      {
        type: 'setLoading',
        dataId: 166262535063177400,
        options: {
          compId: 'Table_7975706_122',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Table',
          id: '628555',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading41.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading41, { options_966448 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource54: any = [
      {
        type: 'reloadDataSource',
        dataId: 166936162323820000,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '828984',
          pageJsonId: '7975706',
          dataSourceId: 166303552386861820,
          dataSourceName: 'qryDcPostInfoExcludeUsrKey',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '685305',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '686452',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '305031',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '7275226',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '8663463',
                  code: 'postName',
                  name: 'postName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644_7004214',
                      'getFieldsValue',
                    ],
                    code: 'postName',
                  },
                },
                {
                  attrId: '53317',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageNum' },
                  type: 'long',
                },
                {
                  attrId: '481052',
                  code: 'postCode',
                  name: 'postCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: {
                    type: [
                      'form',
                      'Form_148709_997679_5118644_7004214',
                      'getFieldsValue',
                    ],
                    code: 'postCode',
                  },
                },
                {
                  attrId: '2520695',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: 'pageSize' },
                  type: 'long',
                },
                {
                  attrId: '847548',
                  code: 'usrKey',
                  name: 'usrKey',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '$state.usrKey$' },
                  type: 'string',
                },
                {
                  attrId: '200784',
                  code: 'postId',
                  name: '岗位ID',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  value: { type: ['context', '$state.postId$'], code: '' },
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '001073',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '1459065',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '543533',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '198547',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '7531564',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '9343373',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '393336',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'fieldArray',
                  children: [
                    {
                      attrId: '091621',
                      code: 'listItem',
                      name: '列表元素',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'object',
                    },
                  ],
                },
                {
                  attrId: '376144',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '701246',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '342397',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '4753113',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '5778973',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'boolean',
                },
                {
                  attrId: '4407858',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                },
                {
                  attrId: '521035',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '535715',
                      code: 'lanId',
                      name: 'lanId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '560033',
                      code: 'postName',
                      name: 'postName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '820463',
                      code: 'postDesc',
                      name: 'postDesc',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '967608',
                      code: 'statusCd',
                      name: 'statusCd',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '251472',
                      code: 'statusDate',
                      name: 'statusDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '0711838',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '417179',
                      code: 'postFilterType',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7844924',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '733575',
                      code: 'areaId',
                      name: 'areaId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '058661',
                      code: 'provinceId',
                      name: 'provinceId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '987324',
                      code: 'createStaff',
                      name: 'createStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '95012',
                      code: 'remark',
                      name: 'remark',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3284687',
                      code: 'postId',
                      name: 'postId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7215763',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '856806',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '08968',
                      code: 'postCode',
                      name: 'postCode',
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
            dataId: 166936166857069820,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '468342',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 166936167376586850,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '5884538',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource54.params =
      [
        {
          title: '事件入参',
          name: 'options_966448',
          value: '$options_966448$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource54,
      { options_966448 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refreshPostInfo,
  }));

  const onOk = () => {
    const eventDatagetTableSelected12: any = [
      {
        type: 'getTableSelected',
        dataId: 166936100159999840,
        options: {
          compId: 'Table_7975706_122_2419171',
          compLib: 'comm',
          pageJsonId: '7975706',
          compName: 'Table',
          id: '46552464',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '165097',
                options: {
                  context: '$selectedRows_46552464[0]$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166936310445109020,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166936313006009440,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166936313778742900,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '083572',
                      pageJsonId: '7975706',
                      type: 'warn',
                      value: '请选择数据后，点击确认按钮',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    line_number: 5,
                  },
                ],
                condition: [],
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 166936313778742900,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '083572',
                      pageJsonId: '7975706',
                      type: 'warn',
                      value: '请选择数据后，点击确认按钮',
                    },
                    line_number: 5,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'closeModal',
                dataId: 166936311992423600,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '0009324',
                  pageJsonId: '7975706',
                },
                line_number: 3,
              },
              {
                type: 'callParentCustomFunc',
                dataId: 166936312657263940,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '31222',
                  pageJsonId: '7975706',
                  pathname: '/huanjiexiangqing9964',
                  pageId: '900035813064024064',
                  customFuncName: 'setPost',
                  customFuncParams: 'object',
                  modalPath: '/huanjiexiangqing9964',
                  paramsObj: {
                    postId: '$selectedRows_46552464[0].postId$',
                    postName: '$selectedRows_46552464[0].postName$',
                  },
                  paramsObjKeyValueMap: {
                    postId: '$selectedRows_46552464[0].postId$',
                    postName: '$selectedRows_46552464[0].postName$',
                  },
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
    eventDatagetTableSelected12.params = [] || [];
    CMDGenerator(eventDatagetTableSelected12, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal113: any = [
      {
        type: 'closeModal',
        dataId: '0475626_1',
        options: { compId: 'page', compName: 'page', id: '759522' },
        line_number: 1,
      },
    ];
    eventDatacloseModal113.params = [] || [];
    CMDGenerator(eventDatacloseModal113, {}, 'closeModal', {
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
    const eventDataapiRequest637: any = [
      {
        type: 'apiRequest',
        dataId: 166315364574315500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '247681',
          pageJsonId: '7975706',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCountyRegionListByProvinceId',
          _apiCode: 'qryCountyRegionListByProvinceId',
          _source: 'rhin',
          _serviceId: '887289928231636992',
          _serviceTitle:
            '根据省份ID查询所有该省份下的区县列表-tsm: qryCountyRegionListByProvinceId',
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
              dataKey: '247681_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              children: [
                {
                  code: 'provinceId',
                  name: '省份ID',
                  attrType: 'field',
                  type: 'long',
                  mustFlag: 'T',
                  defaultValue: '',
                  _id: 'path.provinceId',
                  compType: 'Input',
                  parents: ['path'],
                  id: 'path.provinceId',
                  dataKey: '247681_path.provinceId',
                  value: { type: ['customize'], code: '350000' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '247681_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '247681_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '247681_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166315369039834080,
            options: {
              compId: 'Table_7975706_122',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '781334',
              colName: 'areaId',
              data: '$reply_247681?.resultData$',
            },
            line_number: 2,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest637.params = [] || [];
    CMDGenerator(eventDataapiRequest637, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest638: any = [
      {
        type: 'apiRequest',
        dataId: 166935661356865500,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '466617',
          pageJsonId: '7975706',
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
              dataKey: '466617_header',
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
                  dataKey: '466617_path.attrCode',
                  value: { type: ['customize'], code: 'POST_FILTER_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '466617_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '466617_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '466617_body',
            },
          ],
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadColServiceData',
            dataId: 166935665242536600,
            options: {
              compId: 'Table_7975706_122_2419171',
              compLib: 'comm',
              pageJsonId: '7975706',
              compName: 'Table',
              id: '619739',
              colName: 'postFilterType',
              data: '$reply_466617?.resultData$',
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest638.params = [] || [];
    CMDGenerator(eventDataapiRequest638, {}, 'apiRequest', {
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
      className="__CustomClass_7975706__"
    >
      <View
        name={'布局容器'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_7975706_1_471796',
          uid: 'View_7975706_1_471796',
          type: 'View',
          ...componentItem,
        }}
        style={{ minHeight: '100%' }}
        ref={(r: any) => refs.setComponentRef(r, 'View_7975706_1_471796')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'View_7975706_12_015174',
            uid: 'View_7975706_12_015174',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            padding: '20px 20px 16px 20px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_7975706_12_015174')}
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
            formCode={'Form_148709'}
            $$componentItem={{
              id: 'Form_148709_997679_5118644_7004214',
              uid: 'Form_148709_997679_5118644_7004214',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '12px 0px 0px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_148709_997679_5118644_7004214')
            }
            {...injectData}
          >
            <Input
              name={'岗位编码'}
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
              formItemIndex={0}
              fieldName={'postCode'}
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
                id: 'Input_3889064_769378_089515_00669',
                uid: 'Input_3889064_769378_089515_00669',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc836: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158470687467620,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2038827',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshPostInfo',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc836.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc836, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_3889064_769378_089515_00669')
              }
              {...injectData}
            />
            <Input
              name={'岗位名称'}
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
              formItemIndex={1}
              fieldName={'postName'}
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
                id: 'Input_33684855_8070024_3641753_533031',
                uid: 'Input_33684855_8070024_3641753_533031',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onPressEnter={(e: any) => {
                const eventDatacallSelfFunc837: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 166158471466083070,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '64209',
                      pageJsonId: '4868135',
                      customFuncName: 'refreshPostInfo',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc837.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc837, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_33684855_8070024_3641753_533031')
              }
              {...injectData}
            />
            <View
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_841498_323645_360219_62442',
                uid: 'View_841498_323645_360219_62442',
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
                textAlign: 'center',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'View_841498_323645_360219_62442')
              }
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
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_224226_335492_451924_7664347',
                  uid: 'Button_224226_335492_451924_7664347',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc838: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166158469460298370,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '6966413',
                        pageJsonId: '4868135',
                        customFuncName: 'refreshPostInfo',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc838.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc838,
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
                  refs.setComponentRef(r, 'Button_224226_335492_451924_7664347')
                }
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
                labelCol={8}
                wrapperCol={16}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_499055_286527_9962765_9619479',
                  uid: 'Button_499055_286527_9962765_9619479',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDataclearValue249: any = [
                    {
                      type: 'clearValue',
                      dataId: 166303871439003940,
                      options: {
                        compId: 'Input_3889064_769378_089515_00669',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Input',
                        id: '8311747',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue249.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue249, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue250: any = [
                    {
                      type: 'clearValue',
                      dataId: 166303871761443740,
                      options: {
                        compId: 'Input_33684855_8070024_3641753_533031',
                        compLib: 'comm',
                        pageJsonId: '7975706',
                        compName: 'Input',
                        id: '882298',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue250.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue250, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Button_499055_286527_9962765_9619479',
                  )
                }
                {...injectData}
              />
            </View>
          </Form>
          <Table
            name={'size'}
            columns={[
              {
                title: '岗位编码',
                key: 'postCode',
                dataIndex: 'postCode',
                className: '',
                id: '6822216',
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
                title: '岗位名称',
                key: 'postName',
                dataIndex: 'postName',
                className: 'divider',
                id: '279607',
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
                type: 'staticCol',
                id: '256496',
                title: '岗位过滤类型',
                dataIndex: 'postFilterType',
                key: '256496',
                className: 'divider',
                staticService: {
                  labelKey: 'attrValueName',
                  valueKey: 'attrName',
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
                title: '省份',
                key: 'provinceId',
                dataIndex: 'provinceId',
                className: 'divider',
                id: '92845',
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
                id: '859713',
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
                title: '区县',
                key: 'areaId',
                dataIndex: 'areaId',
                className: 'divider',
                id: '222299',
                staticService: { labelKey: 'regionName', valueKey: 'regionId' },
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
                id: '050084',
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
            ]}
            page={true}
            rowKeyType={'specified'}
            visible={true}
            editMode={'single'}
            selectType={'radio'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={{ type: 'radio' }}
            showHead={false}
            showTotal={true}
            showSizeChanger={true}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
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
            rowKey={'postId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '0527531',
                checked: true,
              },
            ]}
            pageSize={5}
            current={data?.qryDcPostInfoExcludeUsrKey?.resultData?.current}
            total={data?.qryDcPostInfoExcludeUsrKey?.resultData?.total}
            dataSource={data?.qryDcPostInfoExcludeUsrKey?.resultData?.records}
            fieldName={'data.qryDcOaUserPage.resultData.size'}
            extend={[]}
            dataSourceFromDataSourceConfig={
              'data.qryDcPostInfoExcludeUsrKey.resultData.records'
            }
            $$componentItem={{
              id: 'Table_7975706_122_2419171',
              uid: 'Table_7975706_122_2419171',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '20px 0px 0px 0px' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatareloadDataSource137: any = [
                {
                  type: 'reloadDataSource',
                  dataId: 166262602492121020,
                  options: {
                    compId: 'reloadDataSource',
                    compName: 'page',
                    id: '301184',
                    pageJsonId: '7975706',
                    dataSourceId: 166303552386861820,
                    dataSourceName: 'qryDcPostInfoExcludeUsrKey',
                    dataSourceRelType: 'service',
                    dataSourceReloadFilter: [
                      {
                        attrId: '685305',
                        code: 'header',
                        name: '请求头参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'header',
                      },
                      {
                        attrId: '686452',
                        code: 'path',
                        name: '请求路径参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'path',
                      },
                      {
                        attrId: '305031',
                        code: 'query',
                        name: 'URL 参数',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        key: 'query',
                      },
                      {
                        attrId: '7275226',
                        code: 'body',
                        name: '请求体',
                        sort: { isSort: true },
                        initialData: { type: 'static', value: '' },
                        type: 'object',
                        children: [
                          {
                            attrId: '2520695',
                            code: 'pageSize',
                            name: 'pageSize',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: 'pageSize' },
                            type: 'long',
                            key: 'body.pageSize',
                            value: {
                              type: ['context', '$pageSize$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '53317',
                            code: 'pageNum',
                            name: 'pageNum',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: 'pageNum' },
                            type: 'long',
                            key: 'body.pageNum',
                            value: {
                              type: ['context', '$page$'],
                              hideAttr: true,
                              code: '',
                            },
                          },
                          {
                            attrId: '481052',
                            code: 'postCode',
                            name: 'postCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.postCode',
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644_7004214',
                                'getFieldsValue',
                              ],
                              code: 'postCode',
                            },
                          },
                          {
                            attrId: '8663463',
                            code: 'postName',
                            name: 'postName',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                            key: 'body.postName',
                            value: {
                              type: [
                                'form',
                                'Form_148709_997679_5118644_7004214',
                                'getFieldsValue',
                              ],
                              code: 'postName',
                            },
                          },
                          {
                            attrId: '847548',
                            code: 'usrKey',
                            name: 'usrKey',
                            sort: { isSort: true },
                            initialData: {
                              type: 'static',
                              value: '$state.usrKey$',
                            },
                            type: 'string',
                            key: 'body.usrKey',
                            value: {
                              type: ['customize'],
                              code: '$state.usrKey$',
                            },
                          },
                          {
                            attrId: '200784',
                            code: 'postId',
                            name: '岗位ID',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                        ],
                        key: 'body',
                      },
                    ],
                    dataSourceSetValue: [
                      {
                        attrId: '494867',
                        code: 'resultCode',
                        name: 'resultCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '990389',
                        code: 'resultMsgCode',
                        name: 'resultMsgCode',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '63559',
                        code: 'resultMsg',
                        name: 'resultMsg',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'string',
                      },
                      {
                        attrId: '6804042',
                        code: 'resultData',
                        name: 'resultData',
                        sort: { isSort: true },
                        initialData: { type: 'static' },
                        type: 'object',
                        children: [
                          {
                            attrId: '12647',
                            code: 'orders',
                            name: 'orders',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'fieldArray',
                            children: [
                              {
                                attrId: '893626',
                                code: 'listItem',
                                name: '列表元素',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'object',
                              },
                            ],
                          },
                          {
                            attrId: '6240647',
                            code: 'countId',
                            name: 'countId',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '923058',
                            code: 'isSearchCount',
                            name: 'isSearchCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '0412956',
                            code: 'total',
                            name: 'total',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '913814',
                            code: 'current',
                            name: 'current',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '946874',
                            code: 'hitCount',
                            name: 'hitCount',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '246891',
                            code: 'size',
                            name: 'size',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'long',
                          },
                          {
                            attrId: '4360788',
                            code: 'optimizeCountSql',
                            name: 'optimizeCountSql',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'boolean',
                          },
                          {
                            attrId: '778007',
                            code: 'maxLimit',
                            name: 'maxLimit',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '850031',
                            code: 'records',
                            name: 'records',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'objectArray',
                            children: [
                              {
                                attrId: '906214',
                                code: 'statusDate',
                                name: 'statusDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '2215748',
                                code: 'updateDate',
                                name: 'updateDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '131004',
                                code: 'postDesc',
                                name: 'postDesc',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '7511926',
                                code: 'statusCd',
                                name: 'statusCd',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '0121528',
                                code: 'remark',
                                name: 'remark',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '931862',
                                code: 'postId',
                                name: 'postId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '958453',
                                code: 'lanId',
                                name: 'lanId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '649555',
                                code: 'provinceId',
                                name: 'provinceId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '335817',
                                code: 'createStaff',
                                name: 'createStaff',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '965915',
                                code: 'createStaffName',
                                name: 'createStaffName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '9607727',
                                code: 'areaId',
                                name: 'areaId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '706486',
                                code: 'postName',
                                name: 'postName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '8426129',
                                code: 'postCode',
                                name: 'postCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '485053',
                                code: 'createDate',
                                name: 'createDate',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '1284766',
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
              eventDatareloadDataSource137.params =
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
                eventDatareloadDataSource137,
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
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatashowCustomModal303: any = [
                {
                  type: 'showCustomModal',
                  dataId: 166262912519746340,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '60546',
                    pageJsonId: '7975706',
                    modalname: '/detailPostInfo',
                    pageId: '886805014632988672',
                    paramsObj: {
                      sceneCode: 'V',
                      bizId: '$rowId$',
                      dcOaOrg: '$row$',
                      dcOaUser: '$row$',
                      dcPostInfo: '$row$',
                    },
                    paramsObjKeyValueMap: {
                      sceneCode: 'V',
                      bizId: '$rowId$',
                      dcOaOrg: '$row$',
                      dcOaUser: '$row$',
                      dcPostInfo: '$row$',
                    },
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal303.params =
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
                eventDatashowCustomModal303,
                { rowId, row, index },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Table_7975706_122_2419171')
            }
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ChooseTacheWithPost$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    usrKey: '',
    usrLogin: '',
    usrLastName: '',
    postId: '',
  },
});
