// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Description, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const GroupInfo$$Modal: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode312: any = [
      {
        type: 'customActionCode',
        dataId: 166417161875513280,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '613602',
          pageJsonId: 33,
          code: 'function main(data,state,success,fail){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.group_info.id=rowId;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'closeModal',
            dataId: 166417165401311260,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '410387',
              pageJsonId: 33,
            },
            line_number: 2,
          },
          {
            type: 'okCallbackData',
            dataId: 166417165669206270,
            options: {
              compId: 'okCallbackData',
              compName: 'page',
              id: '9748623',
              pageJsonId: 33,
              params: '$data.group_info$',
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode312.params = [] || [];
    CMDGenerator(eventDatacustomActionCode312, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal122: any = [
      {
        type: 'closeModal',
        dataId: '782499_1',
        options: { compId: 'page', compName: 'page', id: '3509412' },
        line_number: 1,
      },
    ];
    eventDatacloseModal122.params = [] || [];
    CMDGenerator(eventDatacloseModal122, {}, 'closeModal', {
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
    const eventDataapiRequest646: any = [
      {
        type: 'apiRequest',
        dataId: 166065466506662700,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '81705',
          pageJsonId: 33,
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'queryGroupCustomerList',
          _apiCode: 'queryGroupCustomerList',
          _source: 'rhin',
          _serviceId: '876387158751866880',
          _serviceTitle: '查询集团信息: queryGroupCustomerList',
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
              dataKey: '81705_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '81705_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '81705_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'groupId',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.groupId',
                  compType: 'Input',
                  name: 'groupId',
                  parents: ['body'],
                  id: 'body.groupId',
                  dataKey: '81705_body.groupId',
                  value: { type: ['context', '$state.groupId$'], code: '' },
                },
                {
                  code: 'groupName',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.groupName',
                  compType: 'Input',
                  name: 'groupName',
                  parents: ['body'],
                  id: 'body.groupName',
                  dataKey: '81705_body.groupName',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '81705_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadDescData',
            dataId: 166071950552190700,
            options: {
              compId: 'Description_12412697',
              compLib: 'comm',
              pageJsonId: 33,
              compName: 'Description',
              id: '812172',
              data: '$reply_81705?.resultData[0]$',
            },
            line_number: 2,
          },
          {
            type: 'setDataSource',
            dataId: 166072039636276830,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '001338',
              pageJsonId: 33,
              dataSourceId: 166065435384577470,
              dataSourceName: 'group_info',
              dataSourceRelType: 'object',
              dataSourceReloadFilter: [
                {
                  attrId: '2529235',
                  code: 'primaryValue',
                  name: '主键值',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '133772',
                  code: 'group_id',
                  name: '集团编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].groupId$',
                  },
                },
                {
                  attrId: '977387',
                  code: 'group_name',
                  name: '集团名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].groupName$',
                  },
                },
                {
                  attrId: '1849315',
                  code: 'group_level_name',
                  name: '集团价值等级',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].groupLevelName$',
                  },
                },
                {
                  attrId: '381408',
                  code: 'Status_name',
                  name: '集团状态',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].statusName$',
                  },
                },
                {
                  attrId: '409672',
                  code: 'org_type',
                  name: '机构类型',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].orgType$',
                  },
                },
                {
                  attrId: '554917',
                  code: 'org_type_name',
                  name: '机构类型名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].orgTypeName$',
                  },
                },
                {
                  attrId: '9788156',
                  code: 'manager_name',
                  name: '客户经理',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].managerName$',
                  },
                },
                {
                  attrId: '391011',
                  code: 'manager_id',
                  name: '客户经理工号',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].managerId$',
                  },
                },
                {
                  attrId: '52021',
                  code: 'manage_contact_tel',
                  name: '客户经理电话',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].managerContactTel$',
                  },
                },
                {
                  attrId: '4389163',
                  code: 'Home_city_name',
                  name: '地市',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].homeCityName$',
                  },
                },
                {
                  attrId: '7454334',
                  code: 'home_city',
                  name: '地市ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].homeCity$',
                  },
                },
                {
                  attrId: '266812',
                  code: 'home_county',
                  name: '区县ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].homeCounty$',
                  },
                },
                {
                  attrId: '330176',
                  code: 'home_county_name',
                  name: '区县',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].homeCountyName$',
                  },
                },
                {
                  attrId: '4623223',
                  code: 'tradeclass_top',
                  name: '行业类型ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].tradeclassTop$',
                  },
                },
                {
                  attrId: '1107336',
                  code: 'tradeclass_top_name',
                  name: '行业类型',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: {
                    type: ['customize'],
                    code: '$reply_81705?.resultData[0].tradeclassTopName$',
                  },
                },
                {
                  attrId: '218548',
                  code: 'orderId',
                  name: '表单ID',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
                  value: { type: ['context', '$state.coding$'], code: '' },
                },
                {
                  attrId: '9464825',
                  code: 'id',
                  name: '主键',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: null },
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
                dataId: 166072504026736420,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '768833',
                  pageJsonId: 33,
                  value: ['$data.group_info$'],
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
    eventDataapiRequest646.params = [] || [];
    CMDGenerator(eventDataapiRequest646, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_33__">
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_33_1',
          uid: 'View_33_1',
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
        ref={(r: any) => (refs['View_33_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_422725',
            uid: 'View_422725',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_422725'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'VerticalView_33_11',
              uid: 'VerticalView_33_11',
              type: 'View',
              ...componentItem,
            }}
            style={{ width: '100%', overflowY: 'auto' }}
            ref={(r: any) => (refs['VerticalView_33_11'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_33_112',
                uid: 'View_33_112',
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
              ref={(r: any) => (refs['View_33_112'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_536562',
                  uid: 'View_536562',
                  type: 'View',
                  ...componentItem,
                }}
                style={{
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) => (refs['View_536562'] = r)}
                {...injectData}
              >
                <Description
                  name={'描述列表'}
                  visible={true}
                  columns={[
                    {
                      title: '集团编码',
                      key: 'group_id',
                      dataIndex: 'groupId',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '集团编码',
                            attrId: '876808930453331968',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '集团编码',
                      id: '636026',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '集团名称',
                      key: 'group_name',
                      dataIndex: 'groupName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '集团名称',
                            attrId: '876808930453331969',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '集团名称',
                      id: '037852',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '集团状态',
                      key: 'Status_name',
                      dataIndex: 'statusName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '集团状态',
                            attrId: '876808930453331971',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '集团状态',
                      id: '372031',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '机构类型名称',
                      key: 'org_type_name',
                      dataIndex: 'orgTypeName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '机构类型名称',
                            attrId: '876808930453331973',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '机构类型名称',
                      id: '845406',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '客户经理',
                      key: 'manager_name',
                      dataIndex: 'managerName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '客户经理',
                            attrId: '876808930453331974',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '客户经理',
                      id: '75373643',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '客户经理工号',
                      key: 'manager_id',
                      dataIndex: 'managerId',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '客户经理工号',
                            attrId: '876808930453331975',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '客户经理工号',
                      id: '473705',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '客户经理电话',
                      key: 'manage_contact_tel',
                      dataIndex: 'managerContactTel',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '客户经理电话',
                            attrId: '876808930453331976',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '客户经理电话',
                      id: '532747',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '地市',
                      key: 'Home_city_name',
                      dataIndex: 'homeCityName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '地市',
                            attrId: '876808930453331977',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '地市',
                      id: '447044',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '区县',
                      key: 'home_county_name',
                      dataIndex: 'homeCountyName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '区县',
                            attrId: '876808930453331980',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '区县',
                      id: '094173',
                      span: 18,
                      customRendering: undefined,
                    },
                    {
                      title: '行业类型',
                      key: 'tradeclass_top_name',
                      dataIndex: 'tradeclassName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '行业类型',
                            attrId: '876808930453331982',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '行业类型',
                      id: '467103',
                      span: 18,
                      customRendering: undefined,
                    },
                  ]}
                  bordered={false}
                  labelWidth={undefined}
                  colSpan={12}
                  colon={true}
                  labelAlign={'left'}
                  dataSource={data?.group_info}
                  descColumns={[
                    {
                      title: '集团编码',
                      key: 'group_id',
                      dataIndex: 'groupId',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '集团编码',
                            attrId: '876808930453331968',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '集团编码',
                      id: '636026',
                      span: 18,
                    },
                    {
                      title: '集团名称',
                      key: 'group_name',
                      dataIndex: 'groupName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '集团名称',
                            attrId: '876808930453331969',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '集团名称',
                      id: '037852',
                      span: 18,
                    },
                    {
                      title: '集团状态',
                      key: 'Status_name',
                      dataIndex: 'statusName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '集团状态',
                            attrId: '876808930453331971',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '集团状态',
                      id: '372031',
                      span: 18,
                    },
                    {
                      title: '机构类型名称',
                      key: 'org_type_name',
                      dataIndex: 'orgTypeName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '机构类型名称',
                            attrId: '876808930453331973',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '机构类型名称',
                      id: '845406',
                      span: 18,
                    },
                    {
                      title: '客户经理',
                      key: 'manager_name',
                      dataIndex: 'managerName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '客户经理',
                            attrId: '876808930453331974',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '客户经理',
                      id: '75373643',
                      span: 18,
                    },
                    {
                      title: '客户经理工号',
                      key: 'manager_id',
                      dataIndex: 'managerId',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '客户经理工号',
                            attrId: '876808930453331975',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '客户经理工号',
                      id: '473705',
                      span: 18,
                    },
                    {
                      title: '客户经理电话',
                      key: 'manage_contact_tel',
                      dataIndex: 'managerContactTel',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '客户经理电话',
                            attrId: '876808930453331976',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '客户经理电话',
                      id: '532747',
                      span: 18,
                    },
                    {
                      title: '地市',
                      key: 'Home_city_name',
                      dataIndex: 'homeCityName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '地市',
                            attrId: '876808930453331977',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '地市',
                      id: '447044',
                      span: 18,
                    },
                    {
                      title: '区县',
                      key: 'home_county_name',
                      dataIndex: 'homeCountyName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '区县',
                            attrId: '876808930453331980',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '区县',
                      id: '094173',
                      span: 18,
                    },
                    {
                      title: '行业类型',
                      key: 'tradeclass_top_name',
                      dataIndex: 'tradeclassName',
                      editoption: {
                        edittype: 'Input',
                        selectoption: {
                          attr: {
                            attrName: '行业类型',
                            attrId: '876808930453331982',
                            attrNbr: null,
                          },
                        },
                      },
                      edittype: 'string',
                      label: '行业类型',
                      id: '467103',
                      span: 18,
                    },
                  ]}
                  labelSize={'120px'}
                  $$componentItem={{
                    id: 'Description_12412697',
                    uid: 'Description_12412697',
                    type: 'Description',
                    ...componentItem,
                  }}
                  ref={(r: any) => (refs['Description_12412697'] = r)}
                  {...injectData}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(GroupInfo$$Modal, {
  pageId: '876805547747155968',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', groupId: '', coding: '' },
});
