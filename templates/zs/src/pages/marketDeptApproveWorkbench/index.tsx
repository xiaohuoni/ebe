// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Card, TabPane, Tabs, View } from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const MarketDeptApproveWorkbench$$Page: React.FC<PageProps> = ({
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
}) => {
  const refreshTable = (options_335881: any) => {
    const eventDataifelse49: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '802441',
            options: {
              context: '$options_335881.originTab$',
              operate: 'notEmpty',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 169459783941215170,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '930794',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$options_335881.originTab$',
                  operate: '==',
                  manualValue: '1',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169459783941240000,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 169459783941203740,
                children: [
                  {
                    dataName: 'action',
                    dataId: 169459783941277100,
                    children: [
                      {
                        dataName: 'callback',
                        dataId: 169459783941245470,
                        children: [],
                        value: 'callback1',
                        params: [],
                      },
                      {
                        dataName: 'callback',
                        dataId: 169459783941292480,
                        children: [],
                        value: 'callback2',
                        params: [],
                      },
                    ],
                    todoOptions: [
                      'pathname',
                      'customFuncName',
                      'customFuncParams',
                    ],
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '896929',
                      pageJsonId: '212281',
                      pathname: '/myDraft_202212191639',
                      pageId: '922045372277719040',
                      modalPath: '/myDraft_202212191639',
                      customFuncName: 'refreshTable',
                      customFuncParams: 'object',
                    },
                    actionObjId: 'callCustomPageFunc',
                    actionObjName: 'system',
                    value: 'callCustomPageFunc',
                    tips: '注意：选择的页面需要开启缓存（如：A页面跳转到B页面，B页面需要调用A页面的自定义事件，那么需要A页面需开启缓存）；',
                    line_number: 4,
                  },
                ],
                condition: [
                  {
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$options_335881.originTab$',
                      operate: '==',
                      manualValue: '5',
                    },
                    condId: '780499',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                value: 'elseIf',
                desc: '如果是草稿箱页面',
                callback: [
                  {
                    type: 'callCustomPageFunc',
                    dataId: 169459783941277100,
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '896929',
                      pageJsonId: '212281',
                      pathname: '/myDraft_202212191639',
                      pageId: '922045372277719040',
                      modalPath: '/myDraft_202212191639',
                      customFuncName: 'refreshTable',
                      customFuncParams: 'object',
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
                type: 'callCustomPageFunc',
                dataId: 169459783941277440,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '745777',
                  pageJsonId: '212281',
                  pathname: '/myOrderTodo_202212191506',
                  pageId: '922008623740616704',
                  modalPath: '/myOrderTodo_202212191506',
                  customFuncName: 'query',
                  customFuncParams: 'object',
                  paramsObj: { pageNum: '1' },
                  paramsObjKeyValueMap: { pageNum: '1' },
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse49.params =
      [
        {
          title: '事件入参',
          name: 'options_335881',
          value: '$options_335881$',
        },
      ] || [];
    CMDGenerator(eventDataifelse49, { options_335881 }, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 169468100541808500
    console.log('进入市场部审批工作台：', options_335881);
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refreshTable,
  }));

  useEffect(() => {
    const eventDatasetLoading44: any = [
      {
        type: 'setLoading',
        dataId: 167955576068827780,
        options: {
          compId: 'View_212281_1_3280208',
          compLib: 'custom',
          pageJsonId: '212281',
          compName: 'View',
          id: '542548',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading44.params = [] || [];
    CMDGenerator(eventDatasetLoading44, {}, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDataapiRequest270: any = [
      {
        type: 'apiRequest',
        dataId: 167888137211308670,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9726759',
          pageJsonId: '212281',
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
              dataKey: '9726759_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9726759_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9726759_query',
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
                      dataKey: '9726759_body.privilegeCodes.listItem',
                    },
                  ],
                  _id: 'body.privilegeCodes',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.privilegeCodes',
                  dataKey: '9726759_body.privilegeCodes',
                  value: {
                    type: ['customize'],
                    code: '["M_SYNTHESIZE_QRY","M_EXPORT_RESULT_DOWNLOAD"]',
                  },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9726759_body',
            },
          ],
          actionTitle: '标签页权限查询',
        },
        line_number: 2,
        callback1: [
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '171933',
                options: {
                  context: '$reply_9726759?.resultData.M_SYNTHESIZE_QRY$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888142877197540,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888145717985760,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888147640028130,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: '250009',
                      compLib: 'comm',
                      pageJsonId: '212281',
                      compName: 'TabPane',
                      id: '16438',
                      visible: '',
                    },
                    actionObjId: '250009',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 5,
                  },
                ],
                condition: [],
                desc: '无综合查询权限',
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888147640028130,
                    shielding: true,
                    options: {
                      compId: '250009',
                      compLib: 'comm',
                      pageJsonId: '212281',
                      compName: 'TabPane',
                      id: '16438',
                      visible: '',
                    },
                    line_number: 5,
                  },
                ],
              },
            ],
            line_number: 3,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888147020384740,
                shielding: true,
                options: {
                  compId: '250009',
                  compLib: 'comm',
                  pageJsonId: '212281',
                  compName: 'TabPane',
                  id: '876765',
                  visible: 'true',
                },
                line_number: 4,
              },
            ],
          },
          {
            type: 'ifelse',
            shielding: true,
            condition: [
              {
                condId: '171933',
                options: {
                  context:
                    '$reply_9726759?.resultData.M_EXPORT_RESULT_DOWNLOAD$',
                  operate: '== true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167888148291231940,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 167888148291214800,
                children: [
                  {
                    dataName: 'action',
                    dataId: 167888148291276220,
                    children: [],
                    todoOptions: ['visible', 'selectComp'],
                    options: {
                      compId: ['5036094'],
                      compLib: 'comm',
                      pageJsonId: '212281',
                      compName: 'TabPane',
                      id: '755355',
                      visible: '',
                      compid: ['5036094'],
                    },
                    actionObjId: '250009',
                    actionObjName: 'TabPane',
                    value: 'setVisible',
                    compLib: 'comm',
                    shielding: true,
                    line_number: 8,
                  },
                ],
                condition: [],
                desc: '无导出结果下载权限',
                shielding: true,
                callback: [
                  {
                    type: 'setVisible',
                    dataId: 167888148291276220,
                    shielding: true,
                    options: {
                      compId: ['5036094'],
                      compLib: 'comm',
                      pageJsonId: '212281',
                      compName: 'TabPane',
                      id: '755355',
                      visible: '',
                      compid: ['5036094'],
                    },
                    line_number: 8,
                  },
                ],
              },
            ],
            line_number: 6,
            callback1: [
              {
                type: 'setVisible',
                dataId: 167888148291207600,
                shielding: true,
                options: {
                  compId: ['5036094'],
                  compLib: 'comm',
                  pageJsonId: '212281',
                  compName: 'TabPane',
                  id: '82276',
                  visible: 'true',
                  compid: ['5036094'],
                },
                line_number: 7,
              },
            ],
          },
          {
            type: 'setDataSource',
            dataId: 167955573416467680,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '8981496',
              pageJsonId: '212281',
              dataSourceId: 167955551142676640,
              dataSourceName: 'rolePrivilege',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '37457',
                  code: 'M_SYNTHESIZE_QRY',
                  name: '综合查询',
                  type: 'boolean',
                  initialData: { type: 'static', value: 'false' },
                  value: {
                    type: ['customize'],
                    code: '$reply_9726759?.resultData.M_SYNTHESIZE_QRY$',
                  },
                },
                {
                  attrId: '9946082',
                  code: 'M_EXPORT_RESULT_DOWNLOAD',
                  name: '导出结果',
                  type: 'boolean',
                  initialData: { type: 'static', value: 'false' },
                  value: {
                    type: ['customize'],
                    code: '$reply_9726759?.resultData.M_EXPORT_RESULT_DOWNLOAD$',
                  },
                },
                {
                  attrId: '647989',
                  code: 'OTHER',
                  name: '其他场景',
                  type: 'boolean',
                  initialData: { type: 'static', value: 'false' },
                  value: { type: ['customize'], code: 'true' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 9,
            callback1: [
              {
                type: 'setLoading',
                dataId: 167955576979081900,
                options: {
                  compId: 'View_212281_1_3280208',
                  compLib: 'custom',
                  pageJsonId: '212281',
                  compName: 'View',
                  id: '713964',
                  loading: false,
                },
                line_number: 10,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest270.params = [] || [];
    CMDGenerator(eventDataapiRequest270, {}, 'apiRequest', {
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
      className="__CustomClass_212281__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_212281_1_3280208',
          uid: 'View_212281_1_3280208',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '0px 0px 0px 0px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_212281_1_3280208'] = r)}
        {...injectData}
      >
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          extendNum={3}
          title={'标题'}
          bordered={true}
          size={'default'}
          hasHeader={false}
          hasIcon={true}
          titleColor={'#1c242e'}
          headerColor={'#ffffff'}
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
            id: 'Card_7670245_054865',
            uid: 'Card_7670245_054865',
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
          ref={(r: any) => (refs['Card_7670245_054865'] = r)}
          {...injectData}
        >
          <Tabs
            name={'标签页'}
            defaultActiveKey={'1'}
            type={'line'}
            animated={false}
            tabActiveKey={'1'}
            tabBarGutter={'4px'}
            tabPosition={'top'}
            size={'default'}
            $$componentItem={{
              id: 'Tabs_03082616_5713342',
              uid: 'Tabs_03082616_5713342',
              type: 'Tabs',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              width: '100%',
              margin: '0 0 16px 0',
              padding: '20px 20px 20px 20px',
            }}
            ref={(r: any) => (refs['Tabs_03082616_5713342'] = r)}
            {...injectData}
          >
            <TabPane
              name={'发起审批'}
              tab={'发起审批'}
              key={'6480655'}
              $$componentItem={{
                id: 'TabPane_9343164_5815044_900283',
                uid: 'TabPane_9343164_5815044_900283',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['TabPane_9343164_5815044_900283'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{ origin: '1', label: '2' }}
                pageSrc={'/marketDeptAuditStart'}
                pageId={'948760695173189632'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_993868_247639_56943'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'本人待办'}
              tab={'本人待办'}
              key={'1'}
              $$componentItem={{
                id: 'TabPane_9343164_5815044',
                uid: 'TabPane_9343164_5815044',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['TabPane_9343164_5815044'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{
                  origin: '1',
                  originTab: '1',
                  openFrom: urlParam?.openFrom,
                }}
                pageSrc={'/myOrderTodo_202212191506'}
                pageId={'922008623740616704'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_993868_247639'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'本人已办'}
              tab={'本人已办'}
              key={'2'}
              $$componentItem={{
                id: 'TabPane_07071_206211',
                uid: 'TabPane_07071_206211',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['TabPane_07071_206211'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{
                  origin: '1',
                  openFrom: urlParam?.openFrom,
                }}
                pageSrc={'/myOrderDone_202212191506copy'}
                pageId={'922038101271379968'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_208346_42296'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'本人发起'}
              tab={'本人发起'}
              key={'3'}
              $$componentItem={{
                id: '263706_89067',
                uid: '263706_89067',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['263706_89067'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{
                  origin: '1',
                  openFrom: urlParam?.openFrom,
                }}
                pageSrc={'/myOrderInitiatedApplication_202212191621'}
                pageId={'922040879843135488'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_081265_1134114'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'本人待阅'}
              tab={'本人待阅'}
              key={'4'}
              $$componentItem={{
                id: '671983_419819',
                uid: '671983_419819',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['671983_419819'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{ origin: '1' }}
                pageSrc={'/myOrderRead_202212191629'}
                pageId={'922042996011565056'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_7458638_3338165'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'草稿箱'}
              tab={'草稿箱'}
              key={'5'}
              $$componentItem={{
                id: '5910484_00153',
                uid: '5910484_00153',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '3'
              }
              visible={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(data?.rolePrivilege?.OTHER, 1, 2)}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['5910484_00153'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{ origin: '1', originTab: '5' }}
                pageSrc={'/myDraft_202212191639'}
                pageId={'922045372277719040'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_6965484_202397'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'综合查询'}
              tab={'综合查询'}
              key={'6'}
              $$componentItem={{
                id: '250009_297603',
                uid: '250009_297603',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_SYNTHESIZE_QRY,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_SYNTHESIZE_QRY,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_SYNTHESIZE_QRY,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['250009_297603'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{ origin: '1' }}
                pageSrc={'/approveOrderQuery'}
                pageId={'922050100039012352'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_801102_348115'] = r)}
                {...injectData}
              />
            </TabPane>
            <TabPane
              name={'导出结果下载'}
              tab={'导出结果下载'}
              key={'7'}
              $$componentItem={{
                id: '5036094_47228',
                uid: '5036094_47228',
                type: 'TabPane',
                ...componentItem,
              }}
              disabled={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_EXPORT_RESULT_DOWNLOAD,
                  1,
                  2,
                )}` === '3'
              }
              visible={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_EXPORT_RESULT_DOWNLOAD,
                  1,
                  2,
                )}` !== '2'
              }
              readOnly={
                `${functorsMap?.IF(
                  data?.rolePrivilege?.M_EXPORT_RESULT_DOWNLOAD,
                  1,
                  2,
                )}` === '4'
              }
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['5036094_47228'] = r)}
              {...injectData}
            >
              <Pageview
                name={'页面容器'}
                pageViewCompState={{}}
                pageSrc={'/exportDownLoad'}
                pageId={'940142497926754304'}
                style={{ height: 'auto', width: '100%' }}
                ref={(r: any) => (refs['Pageview_801102_4765882_910638'] = r)}
                {...injectData}
              />
            </TabPane>
          </Tabs>
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(MarketDeptApproveWorkbench$$Page, {
  pageId: '953465319297417216',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
