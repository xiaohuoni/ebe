// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select, TimePicker } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '884353864870141952';
const DetailOaOrganization$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {
    const eventDatacloseModal101: any = [
      {
        type: 'closeModal',
        dataId: 166245278722159040,
        options: {
          compId: 'closeModal',
          compName: 'page',
          id: '168315',
          pageJsonId: 31,
        },
        line_number: 1,
      },
    ];
    eventDatacloseModal101.params = [] || [];
    CMDGenerator(eventDatacloseModal101, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal102: any = [
      {
        type: 'closeModal',
        dataId: '3651512_1',
        options: { compId: 'page', compName: 'page', id: '9136558' },
        line_number: 1,
      },
    ];
    eventDatacloseModal102.params = [] || [];
    CMDGenerator(eventDatacloseModal102, {}, 'closeModal', {
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
    const eventDataapiRequest629: any = [
      {
        type: 'apiRequest',
        dataId: 166583857660937600,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '781709',
          pageJsonId: 31,
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
              dataKey: '781709_header',
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
                  dataKey: '781709_path.attrCode',
                  value: { type: ['customize'], code: 'ORG_LEVEL' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '781709_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '781709_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '781709_body',
            },
          ],
          actionTitle: '查询组织等级',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166583860153025900,
            options: {
              compId: 'Select_824307',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '733579',
              data: '$reply_781709?.resultData$',
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
    eventDataapiRequest629.params = [] || [];
    CMDGenerator(eventDataapiRequest629, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest630: any = [
      {
        type: 'apiRequest',
        dataId: 166607307428358080,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '8464425',
          pageJsonId: 31,
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
              dataKey: '8464425_header',
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
                  dataKey: '8464425_path.attrCode',
                  value: { type: ['customize'], code: 'ORG_TYPE' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '8464425_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '8464425_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '8464425_body',
            },
          ],
          actionTitle: '查询组织类型',
        },
        line_number: 3,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166607309570101800,
            options: {
              compId: 'Select_4187933',
              compLib: 'comm',
              pageJsonId: 31,
              compName: 'Select',
              id: '236513',
              data: '$reply_8464425?.resultData$',
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
    eventDataapiRequest630.params = [] || [];
    CMDGenerator(eventDataapiRequest630, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacustomActionCode304: any = [
      {
        type: 'customActionCode',
        dataId: 166244620862574620,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '150081',
          pageJsonId: 31,
          code: 'function main(data,state,success,fail){data.dcOaOrg=state.dcOaOrg;success(state.dcOaOrg)};',
          actionTitle: '',
        },
        line_number: 5,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166244625782259620,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '170053',
              pageJsonId: 31,
              dataSourceId: 166244580567644600,
              dataSourceName: 'dcOaOrg',
              dataSourceRelType: 'object',
              dataSourceReloadFilter: [
                {
                  attrId: '510364',
                  code: 'primaryValue',
                  name: '主键值',
                  type: 'string',
                  sort: { isSort: true, value: 'ascend' },
                  initialData: { type: 'static', value: '' },
                  key: 'primaryValue',
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '692376',
                  code: 'orgKey',
                  name: 'OIM生成的ERP组织主键',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgKey',
                  },
                },
                {
                  attrId: '986457',
                  code: 'orgCode',
                  name: 'OA组织编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgCode',
                  },
                },
                {
                  attrId: '312437',
                  code: 'parentOrgKey',
                  name: '上级OA组织主键',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'parentOrgKey',
                  },
                },
                {
                  attrId: '336532',
                  code: 'orgKeyPath',
                  name: 'OA组织路径',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgKeyPath',
                  },
                },
                {
                  attrId: '1279718',
                  code: 'orgName',
                  name: 'OA组织名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgName',
                  },
                },
                {
                  attrId: '8737',
                  code: 'orgDisabled',
                  name: '状态',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgDisabled',
                  },
                },
                {
                  attrId: '361558544',
                  code: 'orgCreate',
                  name: '记录创建时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgCreate',
                  },
                },
                {
                  attrId: '096509',
                  code: 'orgCreateby',
                  name: '记录创建人',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgCreateby',
                  },
                },
                {
                  attrId: '541241',
                  code: 'orgUpdate',
                  name: '记录最后修改时间',
                  type: 'datetime',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgUpdate',
                  },
                },
                {
                  attrId: '03742614',
                  code: 'orgUpdateby',
                  name: '记录最后修改人',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgUpdateby',
                  },
                },
                {
                  attrId: '3927592',
                  code: 'orgOrder',
                  name: 'OA组织排序',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgOrder',
                  },
                },
                {
                  attrId: '8597216',
                  code: 'actUdfNum',
                  name: 'ERP组织的20位编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'actUdfNum',
                  },
                },
                {
                  attrId: '580032',
                  code: 'isGe',
                  name: '是否政企',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'isGe',
                  },
                },
                {
                  attrId: '406498',
                  code: 'provinceId',
                  name: '省份ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                },
                {
                  attrId: '2172478',
                  code: 'lanId',
                  name: '地市ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                },
                {
                  attrId: '4056526',
                  code: 'areaId',
                  name: '区县ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                },
                {
                  attrId: '864434',
                  code: 'isImportant',
                  name: '是否重客',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                },
                {
                  attrId: '467982',
                  code: 'orgLevel',
                  name: '组织等级',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['datasource', 'dcOaOrg', 'data'],
                    code: 'orgLevel',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 6,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 166331958074791970,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '548424',
                  pageJsonId: 31,
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
                      dataKey: '548424_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '548424_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '548424_query',
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
                          dataKey: '548424_body.includeParent',
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
                          dataKey: '548424_body.parentRegionId',
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'lanId',
                          },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '548424_body',
                    },
                  ],
                },
                line_number: 7,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 166331965580908640,
                    options: {
                      compId: 'Input_698224',
                      compLib: 'comm',
                      pageJsonId: 31,
                      compName: 'Select',
                      id: '775313',
                      data: '$reply_548424?.resultData$',
                      labelKey: 'regionName',
                      valueKey: 'regionId',
                    },
                    line_number: 8,
                    callback1: [],
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
    eventDatacustomActionCode304.params = [] || [];
    CMDGenerator(eventDatacustomActionCode304, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_31__">
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_31_1',
          uid: 'View_31_1',
          type: 'View',
          ...componentItem,
        }}
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
          visible={true}
          $$componentItem={{
            id: 'VerticalView_31_11',
            uid: 'VerticalView_31_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_31_11')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_31_112',
              uid: 'View_31_112',
              type: 'View',
              ...componentItem,
            }}
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
              colSpan={12}
              colSpace={16}
              rowSpace={16}
              labelCol={8}
              wrapperCol={16}
              layout={'horizontal'}
              genRuleType={'object'}
              formType={'normal'}
              relationDataSource={data?.dcOaOrg}
              formItemIndex={9}
              busiObjectId={'884254102384115713'}
              $$componentItem={{
                id: 'Form_31_1121',
                uid: 'Form_31_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '20px 20px 20px 20px' }}
              onValuesChange={() => {
                const eventDatasetDataSource299: any = [
                  {
                    type: 'setDataSource',
                    dataId: 166244649697725800,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '0012727',
                      pageJsonId: 31,
                      dataSourceId: 166244580567644600,
                      dataSourceName: 'dcOaOrg',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '692376',
                          code: 'orgKey',
                          name: 'OIM生成的ERP组织主键',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgKey',
                          },
                        },
                        {
                          attrId: '986457',
                          code: 'orgCode',
                          name: 'OA组织编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgCode',
                          },
                        },
                        {
                          attrId: '312437',
                          code: 'parentOrgKey',
                          name: '上级OA组织主键',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'parentOrgKey',
                          },
                        },
                        {
                          attrId: '336532',
                          code: 'orgKeyPath',
                          name: 'OA组织路径',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgKeyPath',
                          },
                        },
                        {
                          attrId: '1279718',
                          code: 'orgName',
                          name: 'OA组织名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgName',
                          },
                        },
                        {
                          attrId: '8737',
                          code: 'orgDisabled',
                          name: '状态',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgDisabled',
                          },
                        },
                        {
                          attrId: '361558544',
                          code: 'orgCreate',
                          name: '记录创建时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgCreate',
                          },
                        },
                        {
                          attrId: '096509',
                          code: 'orgCreateby',
                          name: '记录创建人',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgCreateby',
                          },
                        },
                        {
                          attrId: '541241',
                          code: 'orgUpdate',
                          name: '记录最后修改时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgUpdate',
                          },
                        },
                        {
                          attrId: '03742614',
                          code: 'orgUpdateby',
                          name: '记录最后修改人',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgUpdateby',
                          },
                        },
                        {
                          attrId: '3927592',
                          code: 'orgOrder',
                          name: 'OA组织排序',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgOrder',
                          },
                        },
                        {
                          attrId: '8597216',
                          code: 'actUdfNum',
                          name: 'ERP组织的20位编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'actUdfNum',
                          },
                        },
                        {
                          attrId: '580032',
                          code: 'isGe',
                          name: '是否政企',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'isGe',
                          },
                        },
                        {
                          attrId: '406498',
                          code: 'provinceId',
                          name: '省份ID',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'provinceId',
                          },
                        },
                        {
                          attrId: '2172478',
                          code: 'lanId',
                          name: '地市ID',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'lanId',
                          },
                        },
                        {
                          attrId: '4056526',
                          code: 'areaId',
                          name: '区县ID',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'areaId',
                          },
                        },
                        {
                          attrId: '864434',
                          code: 'isImportant',
                          name: '是否重客',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'isImportant',
                          },
                        },
                        {
                          attrId: '467982',
                          code: 'orgLevel',
                          name: '组织等级',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: null },
                          value: {
                            type: ['form', 'Form_31_1121', 'getFieldsValue'],
                            code: 'orgLevel',
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
                eventDatasetDataSource299.params = [] || [];
                CMDGenerator(eventDatasetDataSource299, {}, 'setDataSource', {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_31_1121')}
              {...injectData}
            >
              <Input
                name={'组织主键'}
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
                fieldName={'orgKey'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgKey}
                formItemIndex={0}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgKey_8701255',
                  uid: 'Input_orgKey_8701255',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_orgKey_8701255')
                }
                {...injectData}
              />
              <Input
                name={'上级OA组织主键'}
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
                fieldName={'parentOrgKey'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.parentOrgKey}
                formItemIndex={1}
                disabled={true}
                visible={true}
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
                  id: 'Input_parentOrgKey_4237584',
                  uid: 'Input_parentOrgKey_4237584',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_parentOrgKey_4237584')
                }
                {...injectData}
              />
              <Input
                name={'OA组织编码'}
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
                fieldName={'orgCode'}
                hidden={false}
                readOnly={true}
                showMore={false}
                attr={{}}
                value={data?.dcOaOrg?.orgCode}
                formItemIndex={2}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgCode_026975',
                  uid: 'Input_orgCode_026975',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_orgCode_026975')
                }
                {...injectData}
              />
              <Input
                name={'OA组织名称'}
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
                fieldName={'orgName'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgName}
                formItemIndex={3}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgName_075202',
                  uid: 'Input_orgName_075202',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_orgName_075202')
                }
                {...injectData}
              />
              <Input
                name={'OA组织路径'}
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
                fieldName={'orgKeyPath'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgKeyPath}
                formItemIndex={4}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgKeyPath_446408',
                  uid: 'Input_orgKeyPath_446408',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_orgKeyPath_446408')
                }
                {...injectData}
              />
              <Select
                name={'状态'}
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
                fieldName={'orgDisabled'}
                disabled={true}
                value={data?.dcOaOrg?.orgDisabled}
                formItemIndex={5}
                hidden={false}
                dataSource={[
                  { id: '3832582', label: '可用', value: '0' },
                  { id: '678177', label: '不可用', value: '2' },
                ]}
                $$componentItem={{
                  id: 'Input_orgDisabled_642199',
                  uid: 'Input_orgDisabled_642199',
                  type: 'Select',
                  ...componentItem,
                }}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_orgDisabled_642199')
                }
                {...injectData}
              />
              <Input
                name={'ERP组织的20位编码'}
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
                fieldName={'actUdfNum'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.actUdfNum}
                formItemIndex={6}
                disabled={true}
                visible={true}
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
                  id: 'Input_actUdfNum_160727',
                  uid: 'Input_actUdfNum_160727',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_actUdfNum_160727')
                }
                {...injectData}
              />
              <Input
                name={'OA组织排序'}
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
                fieldName={'orgOrder'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgOrder}
                formItemIndex={7}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgOrder_031215',
                  uid: 'Input_orgOrder_031215',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_orgOrder_031215')
                }
                {...injectData}
              />
              <Select
                name={'是否政企'}
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
                fieldName={'isGe'}
                disabled={true}
                value={data?.dcOaOrg?.isGe}
                formItemIndex={8}
                visible={true}
                readOnly={true}
                hidden={false}
                dataSource={[
                  { id: '8286434', label: '是', value: '1' },
                  { id: '955189', label: '否', value: '0' },
                ]}
                $$componentItem={{
                  id: 'Input_isGe_6127975',
                  uid: 'Input_isGe_6127975',
                  type: 'Select',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_isGe_6127975')}
                {...injectData}
              />
              <Select
                name={'是否重客'}
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
                fieldName={'isImportant'}
                value={data?.dcOaOrg?.isImportant}
                formItemIndex={9}
                disabled={false}
                hidden={false}
                visible={true}
                readOnly={false}
                dataSource={attrDataMap['PUB_001']}
                $$componentItem={{
                  id: 'Input_291446',
                  uid: 'Input_291446',
                  type: 'Select',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_291446')}
                {...injectData}
              />
              <Select
                name={'组织等级'}
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
                formItemIndex={10}
                fieldName={'orgLevel'}
                value={data?.dcOaOrg?.orgLevel}
                disabled={false}
                visible={true}
                readOnly={false}
                hidden={false}
                $$componentItem={{
                  id: 'Select_824307',
                  uid: 'Select_824307',
                  type: 'Select',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_824307')}
                {...injectData}
              />
              <Select
                name={'组织类型'}
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
                formItemIndex={11}
                fieldName={'orgType'}
                value={data?.dcOaOrg?.orgType}
                $$componentItem={{
                  id: 'Select_4187933',
                  uid: 'Select_4187933',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Select_4187933')}
                {...injectData}
              />
              <Select
                name={'省份'}
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
                fieldName={'provinceId'}
                value={data?.dcOaOrg?.provinceId}
                formItemIndex={12}
                disabled={true}
                hidden={false}
                dataSource={attrDataMap['PROVINCE_CODE']}
                $$componentItem={{
                  id: 'Input_130433',
                  uid: 'Input_130433',
                  type: 'Select',
                  ...componentItem,
                }}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue233: any = [
                    {
                      type: 'clearValue',
                      dataId: 166331972588225730,
                      options: {
                        compId: 'Input_6604193',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '3950786',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue233.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue233, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataclearValue234: any = [
                    {
                      type: 'clearValue',
                      dataId: 166331972919094300,
                      options: {
                        compId: 'Input_698224',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '957988',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDataclearValue234.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue234, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse562: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '9839627',
                          options: { operate: 'notEmpty' },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Input_130433',
                        },
                      ],
                      dataId: 166331973429712220,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166331973568600220,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166331991899415650,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_6604193',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '1119476',
                              },
                              actionObjId: 'Input_6604193',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 6,
                            },
                            {
                              dataName: 'action',
                              dataId: 166331992257137440,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_698224',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '4082',
                              },
                              actionObjId: 'Input_698224',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 7,
                            },
                          ],
                          condition: [],
                          callback: [
                            {
                              type: 'clearOptions',
                              dataId: 166331991899415650,
                              options: {
                                compId: 'Input_6604193',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '1119476',
                              },
                              line_number: 6,
                            },
                            {
                              type: 'clearOptions',
                              dataId: 166331992257137440,
                              options: {
                                compId: 'Input_698224',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '4082',
                              },
                              line_number: 7,
                            },
                          ],
                        },
                      ],
                      line_number: 3,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166331975787149660,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '106656',
                            pageJsonId: 31,
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
                                dataKey: '106656_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '106656_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '106656_query',
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
                                    dataKey: '106656_body.includeParent',
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
                                    dataKey: '106656_body.parentRegionId',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_31_1121',
                                        'getFieldsValue',
                                      ],
                                      code: 'provinceId',
                                    },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '106656_body',
                              },
                            ],
                          },
                          line_number: 4,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166331979254512400,
                              options: {
                                compId: 'Input_6604193',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '873188',
                                data: '$reply_106656?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 5,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse562.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse562, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Input_130433')}
                {...injectData}
              />
              <Select
                name={'地市'}
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
                fieldName={'lanId'}
                value={data?.dcOaOrg?.lanId}
                formItemIndex={13}
                disabled={true}
                hidden={false}
                dataSource={attrDataMap['CITY_CODE']}
                $$componentItem={{
                  id: 'Input_6604193',
                  uid: 'Input_6604193',
                  type: 'Select',
                  ...componentItem,
                }}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDataclearValue235: any = [
                    {
                      type: 'clearValue',
                      dataId: 166331982031146300,
                      options: {
                        compId: 'Input_698224',
                        compLib: 'comm',
                        pageJsonId: 31,
                        compName: 'Select',
                        id: '1371814',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue235.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataclearValue235, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDataifelse563: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '877269',
                          options: { operate: 'notEmpty' },
                          conditionType: 'checkValue',
                          objType: 'Select',
                          objId: 'Input_6604193',
                        },
                      ],
                      dataId: 166331982495396480,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166331982590082660,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166331985630529120,
                              children: [],
                              todoOptions: [],
                              options: {
                                compId: 'Input_698224',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '393528',
                              },
                              actionObjId: 'Input_698224',
                              actionObjName: 'Select',
                              value: 'clearOptions',
                              compLib: 'comm',
                              line_number: 5,
                            },
                          ],
                          condition: [],
                          desc: '选中地市某个选项',
                          callback: [
                            {
                              type: 'clearOptions',
                              dataId: 166331985630529120,
                              options: {
                                compId: 'Input_698224',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '393528',
                              },
                              line_number: 5,
                            },
                          ],
                        },
                      ],
                      line_number: 2,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166331986758685000,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '169976',
                            pageJsonId: 31,
                            sync: false,
                            actionTitle: '加载区县下拉框',
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'SYS_qryRegionListByParentId',
                            _apiCode: 'qryRegionListByParentId',
                            _source: 'rhin',
                            _serviceId: '878100790201982976',
                            _serviceTitle:
                              '根据父区域ID查询所有子区域-tsm: qryRegionListByParentId',
                            params: 'object',
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'reloadSelectData',
                              dataId: 166331988891707900,
                              options: {
                                compId: 'Input_698224',
                                compLib: 'comm',
                                pageJsonId: 31,
                                compName: 'Select',
                                id: '265491',
                                data: '$reply_169976?.resultData$',
                                labelKey: 'regionName',
                                valueKey: 'regionId',
                              },
                              line_number: 4,
                              callback1: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse563.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDataifelse563, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Input_6604193')}
                {...injectData}
              />
              <Select
                name={'区县'}
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
                attr={{ selectedKeyTags: [], dataType: 'local' }}
                placeholder={'请选择'}
                fieldName={'areaId'}
                value={data?.dcOaOrg?.areaId}
                formItemIndex={14}
                disabled={true}
                hidden={false}
                $$componentItem={{
                  id: 'Input_698224',
                  uid: 'Input_698224',
                  type: 'Select',
                  ...componentItem,
                }}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_698224')}
                {...injectData}
              />
              <Input
                name={'创建人'}
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
                fieldName={'orgCreateby'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgCreateby}
                formItemIndex={15}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgCreateby_2921535',
                  uid: 'Input_orgCreateby_2921535',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_orgCreateby_2921535')
                }
                {...injectData}
              />
              <TimePicker
                name={'创建时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'orgCreate'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgCreate}
                formItemIndex={16}
                isCurrent={'now'}
                disabled={true}
                visible={true}
                $$componentItem={{
                  id: 'TimePicker_orgCreate_5214955',
                  uid: 'TimePicker_orgCreate_5214955',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_orgCreate_5214955')
                }
                {...injectData}
              />
              <Input
                name={'修改人'}
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
                fieldName={'orgUpdateby'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgUpdateby}
                formItemIndex={17}
                disabled={true}
                visible={true}
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
                  id: 'Input_orgUpdateby_499116',
                  uid: 'Input_orgUpdateby_499116',
                  type: 'Input',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'Input_orgUpdateby_499116')
                }
                {...injectData}
              />
              <TimePicker
                name={'修改时间'}
                customTime={''}
                format={'YYYY-MM-DD HH:mm:ss'}
                size={'default'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                limitRange={''}
                startTime={''}
                endTime={''}
                timeMode={'time'}
                pickerType={'TimePicker'}
                placeholder={'请选择时间'}
                fieldName={'orgUpdate'}
                hidden={false}
                readOnly={true}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.dcOaOrg?.orgUpdate}
                formItemIndex={18}
                isCurrent={'now'}
                disabled={true}
                visible={true}
                $$componentItem={{
                  id: 'TimePicker_orgUpdate_337173',
                  uid: 'TimePicker_orgUpdate_337173',
                  type: 'TimePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TimePicker_orgUpdate_337173')
                }
                {...injectData}
              />
            </Form>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(DetailOaOrganization$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', dcOaOrg: '' },
});
