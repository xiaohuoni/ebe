// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  Button,
  Collapse,
  CollapsePanel,
  GridView,
  HorizontalView,
  Icon,
  Input,
  Text,
  VerticalView,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const MarketDeptAuditStart$$Page: React.FC<PageProps> = ({
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
  const select_node = (options_485879: any) => {
    const eventDatacustomActionCode153: any = [
      {
        type: 'customActionCode',
        dataId: 166341180903246180,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '437422',
          pageJsonId: '866861',
          code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166341180903389900,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '886778',
              pageJsonId: '866861',
              dataSourceId: 166341035337970140,
              dataSourceName: 'selectedNodes',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '142214',
                  code: 'nodes',
                  name: '属性',
                  type: 'object',
                  initialData: { type: 'static' },
                  value: { type: ['context', '$data_437422$'], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [
              {
                type: 'console',
                dataId: 166341188639034050,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '2731613',
                  pageJsonId: '866861',
                  value: ['$data.selectedNodes$'],
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
    eventDatacustomActionCode153.params =
      [
        {
          title: '事件入参',
          name: 'options_485879',
          value: '$options_485879$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode153,
      { options_485879 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };
  const onLoadSceneNode = (options_485601: any) => {
    const eventDatagetValue92: any = [
      {
        type: 'getValue',
        dataId: 166964690601845380,
        options: {
          compId: 'Input_5357175',
          compLib: 'comm',
          pageJsonId: '866861',
          compName: 'Input',
          id: '2211283',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166971285997154140,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '847923',
              pageJsonId: '866861',
              actionTitle: '',
              code: 'function main(data,state,success,fail){success({})};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 166971285997174300,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '765493',
                  pageJsonId: '866861',
                  dataSourceId: 166341035337970140,
                  dataSourceName: 'selectedNodes',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '142214',
                      code: 'nodes',
                      name: '属性',
                      type: 'object',
                      initialData: { type: 'static' },
                      value: { type: ['context', '$data_847923$'], code: '' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: false,
                  otherObjectArrayOptions: {},
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'reloadDataSource',
            dataId: 166964693509999100,
            options: {
              compId: 'reloadDataSource',
              compName: 'page',
              id: '495284',
              pageJsonId: '866861',
              dataSourceId: 166305304245640540,
              dataSourceName: 'selectAlltreeNodeCode',
              dataSourceRelType: 'service',
              dataSourceReloadFilter: [
                {
                  attrId: '222926',
                  code: 'header',
                  name: '请求头参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '7399277',
                  code: 'path',
                  name: '请求路径参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '858874',
                  code: 'query',
                  name: 'URL 参数',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                },
                {
                  attrId: '831632',
                  code: 'body',
                  name: '请求体',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '' },
                  type: 'object',
                  children: [
                    {
                      attrId: '951212',
                      code: 'nodeValue',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['context', '$value_2211283$'], code: '' },
                    },
                    {
                      attrId: '3285892',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: 'CLS_DZ' },
                    },
                    {
                      attrId: '053',
                      code: 'releaseChannel',
                      name: '新增节点',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                      value: { type: ['customize'], code: '1001' },
                    },
                  ],
                },
              ],
              dataSourceSetValue: [
                {
                  attrId: '937773463',
                  code: 'resultMsgCode',
                  name: 'resultMsgCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '5201218',
                  code: 'resultMsg',
                  name: 'resultMsg',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '37018',
                  code: 'resultCode',
                  name: 'resultCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '17578',
                  code: 'resultData',
                  name: 'resultData',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '059641',
                      code: 'nodeValue',
                      name: 'nodeValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '486331',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '594082',
                      code: 'parentCode',
                      name: 'parentCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '43752',
                      code: 'children',
                      name: 'children',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '741171',
                          code: 'nodeKey',
                          name: 'nodeKey',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '774947',
                          code: 'children',
                          name: 'children',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'fieldArray',
                          children: [
                            {
                              attrId: '03089',
                              code: 'listItem',
                              name: '列表元素',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              type: 'object',
                            },
                          ],
                        },
                        {
                          attrId: '4665593',
                          code: 'parentCode',
                          name: 'parentCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '349837',
                          code: 'nodeValue',
                          name: 'nodeValue',
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
            line_number: 4,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '522728',
                    options: {
                      useManual: true,
                      useObject: false,
                      context:
                        '$refData.current.selectAlltreeNodeCode.resultData.length$',
                      operate: '>',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                  {
                    options: {
                      context: '$value_2211283$',
                      operate: 'notEmpty',
                    },
                    condId: '184573',
                    connector: '&&',
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 167947668703546430,
                elseIfs: [],
                line_number: 5,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167947678537640960,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '5098534',
                      pageJsonId: '866861',
                      code: 'function main(data,state,success,fail){var activeKeyList=[];activeKeyList.push(1);success(activeKeyList)};',
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167947679628913800,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '371812',
                          pageJsonId: '866861',
                          dataSourceId: 167947664519538850,
                          dataSourceName: 'activeKeyDzList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '6666761',
                              code: 'param',
                              name: '属性',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          itemIndex: '$data_5098534$',
                          newData: '$data_5098534$',
                          operateType: 3,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
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
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatagetValue92.params =
      [
        {
          title: '事件入参',
          name: 'options_485601',
          value: '$options_485601$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue92, { options_485601 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    select_node,
    onLoadSceneNode,
  }));

  useEffect(() => {
    // console 167893594744590530
    console.log('=====市场部发起审批======');
    // console 167893584223089700
    console.log('urlParam', urlParam);
    const eventDataifelse231: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '4921483',
            options: {
              useManual: true,
              useObject: false,
              context: '$urlParam.origin$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167145167099027330,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'setVisible',
            dataId: 167145169088039000,
            options: {
              compId: 'Button_3119094',
              compLib: 'comm',
              pageJsonId: '866861',
              compName: 'Button',
              id: '924952',
              visible: 'true',
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDataifelse231.params = [] || [];
    CMDGenerator(eventDataifelse231, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc37: any = [
      {
        type: 'callSelfFunc',
        dataId: 166964719015826940,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '604968',
          pageJsonId: '866861',
          customFuncName: 'onLoadSceneNode',
        },
        line_number: 5,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc37.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc37, {}, 'callSelfFunc', {
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
      className="__CustomClass_866861__"
    >
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_866861_1',
          uid: 'View_866861_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 0px',
          overflowY: 'auto',
          width: 'auto',
          height: '100%',
          fontSize: '',
          flex: '',
        }}
        ref={(r: any) => (refs['View_866861_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_129586',
            uid: 'View_129586',
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
            width: '100%',
            height: '100%',
          }}
          ref={(r: any) => (refs['View_129586'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_510588',
              uid: 'View_510588',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 24px 12px 24px',
              width: '100%',
              height: '52px',
              margin: '0px 0px 0px 0px',
              background: '#FFFFFF',
              'box-shadow': '0px2px8px0pxrgba(0,0,0,0.08)',
            }}
            ref={(r: any) => (refs['View_510588'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_782558',
                uid: 'View_782558',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '8px 50px 0px 0px',
                width: '50%',
                justifyContent: 'flex-start',
                height: '100%',
                textAlign: 'left',
              }}
              ref={(r: any) => (refs['View_782558'] = r)}
              {...injectData}
            >
              <Input
                name={'输入框'}
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
                placeholder={'请输入审批场景名称'}
                fieldName={'name'}
                icon={{ theme: 'outlined', type: 'search', isIconFont: false }}
                prefixIcon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Input_5357175',
                  uid: 'Input_5357175',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  background: '#FFFFFF',
                  'box-shadow': '0px2px8px0pxrgba(0,    0,    0,    0.08)',
                  width: '200px',
                }}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc536: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166964702265481340,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '741176',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc536.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc536,
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
                onIconClick={() => {
                  const eventDatacallSelfFunc537: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 168636588863939550,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '64195144',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc537.params = [] || [];
                  CMDGenerator(eventDatacallSelfFunc537, {}, 'callSelfFunc', {
                    id: 'callSelfFunc',
                    name: 'callSelfFunc',
                    type: 'callSelfFunc',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Input_5357175'] = r)}
                {...injectData}
              />
              <Button
                name={'查询'}
                shape={null}
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
                  id: 'Button_2259782',
                  uid: 'Button_2259782',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDatacallSelfFunc538: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166964705945529020,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '900581',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc538.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc538,
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
                ref={(r: any) => (refs['Button_2259782'] = r)}
                {...injectData}
              />
              <Button
                name={'重置'}
                shape={null}
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
                  id: 'Button_126807',
                  uid: 'Button_126807',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
                onClick={(e: any) => {
                  const eventDataclearValue167: any = [
                    {
                      type: 'clearValue',
                      dataId: 166964671019617630,
                      options: {
                        compId: 'Input_5357175',
                        compLib: 'comm',
                        pageJsonId: '866861',
                        compName: 'Input',
                        id: '7058787',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDataclearValue167.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue167, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc539: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166964710989393000,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '977021',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc539.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc539,
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
                ref={(r: any) => (refs['Button_126807'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_2174641',
                uid: 'View_2174641',
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
                textAlign: 'right',
              }}
              ref={(r: any) => (refs['View_2174641'] = r)}
              {...injectData}
            >
              <Button
                name={'我的草稿'}
                shape={null}
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
                  id: 'Button_817728',
                  uid: 'Button_817728',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={false}
                readOnly={false}
                style={{ width: 'fit-content', margin: '10px 0px 0px 0px' }}
                onClick={(e: any) => {
                  const eventDatahistory9: any = [
                    {
                      type: 'history',
                      dataId: 166778917034172030,
                      options: {
                        compId: 'history',
                        compName: 'system',
                        id: '49999',
                        pageJsonId: '866861',
                        type: 'push',
                        pathname: '/approveOrderTodo',
                        selectedType: 'page',
                        paramsObj: { isDraft: '1' },
                        paramsObjKeyValueMap: { isDraft: '1' },
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatahistory9.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatahistory9, { e }, 'history', {
                    id: 'history',
                    name: 'history',
                    type: 'history',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_817728'] = r)}
                {...injectData}
              />
            </View>
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_190796',
              uid: 'View_190796',
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
              height: '95%',
              margin: '0px 0px 0px 0px',
              overflowY: 'auto',
              fontSize: '',
              flex: '11auto',
            }}
            ref={(r: any) => (refs['View_190796'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器1'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_239728',
                uid: 'View_239728',
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
                margin: '0px 0px 0px 0px',
                height: '1A',
                overflowY: 'hidden',
                background: '#FFFFFF',
                'box-shadow': '0px1px2px0pxrgba(0,0,0,0.04)',
                'border-radius': '2px',
                'margin-bottom': '2.5px',
              }}
              ref={(r: any) => (refs['View_239728'] = r)}
              {...injectData}
            >
              <Collapse
                name={'折叠面板'}
                defaultActiveKey={[]}
                expandIconPosition={'right'}
                collapseType={''}
                size={'default'}
                bordered={true}
                hasIcon={true}
                cardIconType={'auto'}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'folder-open',
                  prefixIconIsIconFont: false,
                }}
                extendProps={{}}
                activeKey={data?.activeKeyDzList}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'Collapse_228917',
                  uid: 'Collapse_228917',
                  type: 'Collapse',
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
                onChange={(key: any) => {
                  const eventDatacustomActionCode703: any = [
                    {
                      type: 'customActionCode',
                      dataId: 167947685365867520,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '184927',
                        pageJsonId: '866861',
                        code: 'function main(data,state,success,fail){var dz=[];if(data.activeKeyDzList!=undefined&&data.activeKeyDzList>0){success(dz)}else{dz.push(1);success(dz)}};',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167947689845938780,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '892593',
                            pageJsonId: '866861',
                            dataSourceId: 167947664519538850,
                            dataSourceName: 'activeKeyDzList',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '6666761',
                                code: 'param',
                                name: '属性',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            newData: '$data_184927$',
                            operateType: 3,
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
                  eventDatacustomActionCode703.params =
                    [{ title: '切换面板key', value: '$key$', name: 'key' }] ||
                    [];
                  CMDGenerator(
                    eventDatacustomActionCode703,
                    { key },
                    'customActionCode',
                    {
                      id: 'customActionCode',
                      name: 'customActionCode',
                      type: 'customActionCode',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Collapse_228917'] = r)}
                {...injectData}
              >
                <CollapsePanel
                  name={'折叠子面板'}
                  header={'大众类'}
                  key={'1'}
                  cardIconType={'auto'}
                  prefixIconTheme={'outlined'}
                  prefixIconType={'folder-open'}
                  prefixIconIsIconFont={false}
                  $$componentItem={{
                    id: 'CollapsePanel_5495',
                    uid: 'CollapsePanel_5495',
                    type: 'CollapsePanel',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ minHeight: 40 }}
                  ref={(r: any) => (refs['CollapsePanel_5495'] = r)}
                  {...injectData}
                  uid="CollapsePanel_5495"
                >
                  <GridView
                    name={'resultData'}
                    itemKey={'item'}
                    indexKey={'i'}
                    pieceData={[]}
                    defaultValue={[]}
                    isChecked={false}
                    isMultiple={true}
                    columnNum={1}
                    valueKey={'nodeKey'}
                    span={24}
                    vspace={16}
                    hspace={8}
                    isEditor={false}
                    fieldName={'data.selectAlltreeNodeCode.resultData'}
                    gridData={data?.selectAlltreeNodeCode?.resultData}
                    selectStyle={{ border: 'unset' }}
                    normalStyle={{ border: '0px solid' }}
                    $$componentItem={{
                      id: 'GridView_841399',
                      uid: 'GridView_841399',
                      type: 'GridView',
                      ...componentItem,
                    }}
                    style={{ minHeight: 40 }}
                    ref={(r: any) => (refs['GridView_841399'] = r)}
                    {...injectData}
                    getEngineApis={() => {
                      return {
                        ...injectData.getEngineApis(),
                        MemoRenderer: {
                          renderer: null,
                          MemoLoopItem: (props: any) => {
                            const item = props[props.itemKey] ?? props?.item;
                            const i = props[props.indexKey] ?? props?.i;
                            return (
                              <>
                                <HorizontalView
                                  name={'左右布局'}
                                  $$componentItem={{
                                    id: 'HorizontalView_300975',
                                    uid: 'HorizontalView_300975',
                                    type: 'HorizontalView',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    padding: '0px 0px 0px 0px',
                                    width: '100%',
                                    height: '100%',
                                    overflowY: 'visible',
                                  }}
                                  ref={(r: any) =>
                                    (refs['HorizontalView_300975'] = r)
                                  }
                                  {...injectData}
                                >
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_575815',
                                      uid: 'View_575815',
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
                                      width: '180px',
                                      height: '100%',
                                      overflowY: 'auto',
                                      margin: '0px 16px 0px 0px',
                                      'font-weight': 'bold',
                                    }}
                                    ref={(r: any) => (refs['View_575815'] = r)}
                                    {...injectData}
                                  >
                                    <Text
                                      name={'文本'}
                                      content={item?.nodeValue}
                                      textType={'span'}
                                      version={'1.0'}
                                      showHtml={false}
                                      $$componentItem={{
                                        id: 'Text_4120405',
                                        uid: 'Text_4120405',
                                        type: 'Text',
                                        ...componentItem,
                                      }}
                                      disabled={false}
                                      visible={true}
                                      readOnly={false}
                                      style={{
                                        fontSize: '14px',
                                        lineHeight: '24px',
                                        color: '#1c242e',
                                        'font-weight': 'bold',
                                      }}
                                      ref={(r: any) =>
                                        (refs['Text_4120405'] = r)
                                      }
                                      {...injectData}
                                    />
                                  </View>
                                  <View
                                    name={'布局容器'}
                                    $$componentItem={{
                                      id: 'View_2657547',
                                      uid: 'View_2657547',
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
                                      width: '100%',
                                      height: '100%',
                                      overflowY: 'visible',
                                    }}
                                    ref={(r: any) => (refs['View_2657547'] = r)}
                                    {...injectData}
                                  >
                                    <GridView
                                      name={'children'}
                                      itemKey={'c'}
                                      indexKey={'l'}
                                      pieceData={[]}
                                      defaultValue={[]}
                                      isChecked={false}
                                      isMultiple={true}
                                      columnNum={1}
                                      valueKey={'nodeKey'}
                                      span={'6'}
                                      vspace={16}
                                      hspace={8}
                                      isEditor={true}
                                      fieldName={
                                        'data.selectAlltreeNodeCode.resultData.children'
                                      }
                                      gridData={item?.children}
                                      normalStyle={{
                                        'border-radius': '2px',
                                        padding: '6px 12px',
                                        'background-color': '#f6f6f7',
                                        color: '#575a66',
                                      }}
                                      selectStyle={{
                                        'background-color': '#f0f6ff',
                                        'background-image':
                                          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAC6klEQVRYCb1XTUgUURz/zay27brqboRE2CmWgiCQ7CLkobp6iYjKDlFgCRF9XEoDOxgUJX3iEhgodahLnYSE6JBESJ46FVmBGBFBypq22s5u83+7/9m3s2/cebr6Dvve/+P3MW9n5u0CS41dHb+zBjdQQGuR4ICL3nMJR8uOqlw3VWiU5SqikJVkpOkuHOyZEX7HH8ZESdO3TOdn7WmSwGzU2UyZkYuUK7oKSnCx/1yEwtzui5X9wcV4YwCfpyyRdhi4SNffe7KGMbrfn4PztyBV5VWWg7Nd6tMikIEs4otABay2781/6TIOVMD2/UEc3htEW1dSmFA6kIFjiSgmvls4cWMWbx/E7DmJD19z32HJHshAvkaaoxEDr/qiaD41LafFWjjwApZ0VzrRfHr6qnIP/AgROJvJ9iyLgMEkpE0gg7UJ3GAtAhXYN4EXmAicFwIFqqECh4KFziUJVOCAjRi9l3vrEo0ngQpMgLFEDK1nC7e0koDBTfH8eUJIe7y5G8XT1ynML+Ri+iwhYDAV168D6CW5bUsAQ5drRXzr2V8qOSPgrOyFDKb81K8MGmImuo/VoCFqouXMDDIZGQE4Ht1gbut9PI/d26sw/G5RvIE4z7O4lb3A3OQ9G1lj+WD7QTKNC9oPk7cbvQobX3MDLMx218yAW3jNDHgJr7qBcsKrZsCvcMUN6ApXzIBf4UjIwOClWnyctHDl0Rzr6x+qjPQrTP1d7WEcaA3ixegCrj2ZZwoxaz+GOsJ7dlajr7MGhq3SefsPxj/ZPwddw7cBlfDIzXrUhQ0MDKcw+DIFK39SbKyn7a7Dpg0mJn9aONqbRGrRpZwPyxpQCctUR/YFcfFQWKTSVhbffliIN+YOqaGRFO4/Lz7/ZCytPQ2UE5aJquxTNXE+gqZ4tUiTkePXZ8UNJ/ep1iUGdITdhFs3m+hoC6F7YA7pwk9wd1tR7BhYiXARo1ZgTKzoPNfScpoN+kP9xTDR/z4RvfMfZJBzTPeTIF8AAAAASUVORK5CYII=)',
                                        'background-size': '20px',
                                        'background-position': 'right bottom',
                                        'background-repeat': 'no-repeat',
                                        border: '1px solid rgba(51,102,238,1)',
                                        'border-radius': '2px',
                                      }}
                                      value={data?.emptyArray?.array}
                                      $$componentItem={{
                                        id: 'GridView_959384',
                                        uid: 'GridView_959384',
                                        type: 'GridView',
                                        ...componentItem,
                                      }}
                                      style={{ minHeight: 40 }}
                                      onChange={(vals: any) => {
                                        const eventDatacustomActionCode705: any =
                                          [
                                            {
                                              type: 'customActionCode',
                                              dataId: 166341200368161340,
                                              options: {
                                                compId: 'customActionCode',
                                                compName: 'page',
                                                id: '8421537',
                                                pageJsonId: '866861',
                                                code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
                                              },
                                              line_number: 1,
                                              callback1: [
                                                {
                                                  type: 'setDataSource',
                                                  dataId: 166341200368103420,
                                                  options: {
                                                    compId: 'setDataSource',
                                                    compName: 'page',
                                                    id: '8998934',
                                                    pageJsonId: '866861',
                                                    dataSourceId: 166341035337970140,
                                                    dataSourceName:
                                                      'selectedNodes',
                                                    dataSourceRelType: 'custom',
                                                    dataSourceReloadFilter: [],
                                                    dataSourceSetValue: [
                                                      {
                                                        attrId: '142214',
                                                        code: 'nodes',
                                                        name: '属性',
                                                        type: 'object',
                                                        initialData: {
                                                          type: 'static',
                                                        },
                                                        value: {
                                                          type: [
                                                            'context',
                                                            '$data_8421537$',
                                                          ],
                                                          code: '',
                                                        },
                                                      },
                                                    ],
                                                    operateType: 1,
                                                    onlySetPatch: true,
                                                    otherObjectArrayOptions: {},
                                                  },
                                                  line_number: 2,
                                                  callback1: [
                                                    {
                                                      type: 'console',
                                                      dataId: 166341200368168670,
                                                      options: {
                                                        compId: 'debug',
                                                        compName: 'system',
                                                        id: '9639415',
                                                        pageJsonId: '866861',
                                                        value: [
                                                          '$data.selectedNodes$',
                                                        ],
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
                                        eventDatacustomActionCode705.params =
                                          [
                                            {
                                              title: '变化值',
                                              value: '$vals$',
                                              name: 'vals',
                                            },
                                          ] || [];
                                        CMDGenerator(
                                          eventDatacustomActionCode705,
                                          { vals, item, i },
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
                                        (refs['GridView_959384'] = r)
                                      }
                                      {...injectData}
                                      getEngineApis={() => {
                                        return {
                                          ...injectData.getEngineApis(),
                                          MemoRenderer: {
                                            renderer: null,
                                            MemoLoopItem: (props: any) => {
                                              const item =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const i =
                                                props[props.indexKey] ??
                                                props?.i;
                                              const c =
                                                props[props.itemKey] ??
                                                props?.item;
                                              const l =
                                                props[props.indexKey] ??
                                                props?.i;
                                              return (
                                                <>
                                                  <View
                                                    name={'布局容器'}
                                                    backgroundType={{
                                                      type: 'cleanColor',
                                                      color: undefined,
                                                    }}
                                                    $$componentItem={{
                                                      id: 'View_9189376',
                                                      uid: 'View_9189376',
                                                      type: 'View',
                                                      ...componentItem,
                                                    }}
                                                    disabled={false}
                                                    visible={true}
                                                    readOnly={false}
                                                    style={{
                                                      display: 'block',
                                                      flexDirection: 'column',
                                                      padding:
                                                        '0px 0px 0px 0px',
                                                      width: '100%',
                                                    }}
                                                    ref={(r: any) =>
                                                      (refs['View_9189376'] = r)
                                                    }
                                                    {...injectData}
                                                  >
                                                    <Popover
                                                      options={{
                                                        tipType: '2',
                                                        trigger: 'click',
                                                        content:
                                                          'OA已实现该场景',
                                                      }}
                                                      id={'Icon_724045'}
                                                      {...injectData}
                                                    >
                                                      <Icon
                                                        name={'图标'}
                                                        rotate={0}
                                                        icon={{
                                                          type: 'info-circle',
                                                          theme: 'outlined',
                                                          fontAddress: '',
                                                          isIconFont: false,
                                                          iconFileInfo: {},
                                                        }}
                                                        $$componentItem={{
                                                          id: 'Icon_724045',
                                                          uid: 'Icon_724045',
                                                          type: 'Icon',
                                                          ...componentItem,
                                                        }}
                                                        disabled={false}
                                                        visible={true}
                                                        readOnly={false}
                                                        style={{
                                                          'margin-right':
                                                            '10px',
                                                          color: 'unset',
                                                        }}
                                                        ref={(r: any) =>
                                                          (refs['Icon_724045'] =
                                                            r)
                                                        }
                                                        {...injectData}
                                                      />
                                                    </Popover>
                                                    <Text
                                                      name={'文本'}
                                                      content={item?.nodeValue}
                                                      textType={'span'}
                                                      version={'1.0'}
                                                      showHtml={false}
                                                      $$componentItem={{
                                                        id: 'Text_968473',
                                                        uid: 'Text_968473',
                                                        type: 'Text',
                                                        ...componentItem,
                                                      }}
                                                      style={{
                                                        fontSize: '14px',
                                                        lineHeight: '24px',
                                                        color: 'unset',
                                                        letterSpacing: '',
                                                      }}
                                                      ref={(r: any) =>
                                                        (refs['Text_968473'] =
                                                          r)
                                                      }
                                                      {...injectData}
                                                    />
                                                  </View>
                                                </>
                                              );
                                            },
                                          },
                                        };
                                      }}
                                    />
                                  </View>
                                </HorizontalView>
                              </>
                            );
                          },
                        },
                      };
                    }}
                  />
                </CollapsePanel>
              </Collapse>
            </View>
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_21611',
              uid: 'View_21611',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 24px 0px 24px',
              width: '100%',
              height: '52px',
              justifyContent: 'center',
            }}
            ref={(r: any) => (refs['View_21611'] = r)}
            {...injectData}
          >
            <VerticalView
              name={'上下布局'}
              $$componentItem={{
                id: 'VerticalView_2049022',
                uid: 'VerticalView_2049022',
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
                width: 'auto',
                height: 'auto',
                overflowY: 'auto',
              }}
              ref={(r: any) => (refs['VerticalView_2049022'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_971858',
                  uid: 'View_971858',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  height: 'auto',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                ref={(r: any) => (refs['View_971858'] = r)}
                {...injectData}
              >
                <Text
                  name={'属性'}
                  content={
                    '已选择场景提示：' +
                    Object?.values((data?.selectedNodes || {})?.nodes || {})
                      ?.flat()
                      ?.map(function (e) {
                        return e?.nodeValue;
                      })
                      ?.join(' | ')
                  }
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  formItemIndex={0}
                  fieldName={'data.selectedNodes.nodes'}
                  $$componentItem={{
                    id: 'Text_8788706_543971',
                    uid: 'Text_8788706_543971',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: 16,
                    lineHeight: '24px',
                    color: '#3a3d4b',
                    textAlign: 'left',
                  }}
                  ref={(r: any) => (refs['Text_8788706_543971'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  $$componentItem={{
                    id: 'View_772576',
                    uid: 'View_772576',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0px 0px 0px 0px',
                    height: '0A',
                    width: 'auto',
                    textAlign: 'right',
                  }}
                  ref={(r: any) => (refs['View_772576'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'内容'}
                    textType={'span'}
                    version={'1.0'}
                    showHtml={false}
                    formItemIndex={1}
                    $$componentItem={{
                      id: 'Text_8788706_2538147_5100973',
                      uid: 'Text_8788706_2538147_5100973',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      fontSize: 18,
                      lineHeight: '24px',
                      color: 'rgba(208, 2, 27, 1)',
                    }}
                    ref={(r: any) => (refs['Text_8788706_2538147_5100973'] = r)}
                    {...injectData}
                  />
                  <Button
                    name={'重选'}
                    shape={null}
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
                      id: 'Button_355871',
                      uid: 'Button_355871',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                    onClick={(e: any) => {
                      const eventDatacustomActionCode706: any = [
                        {
                          type: 'customActionCode',
                          dataId: 166418284911394300,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '424554',
                            pageJsonId: '866861',
                            actionTitle: '',
                            code: 'function main(data,state,success,fail){success({})};',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 166418286169146700,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '20136',
                                pageJsonId: '866861',
                                dataSourceId: 166341035337970140,
                                dataSourceName: 'selectedNodes',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '142214',
                                    code: 'nodes',
                                    name: '属性',
                                    type: 'object',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$data_424554$'],
                                      code: '',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: false,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 2,
                              callback1: [],
                              callback2: [],
                            },
                            {
                              type: 'setDataSource',
                              dataId: 166998314323995740,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '516162',
                                pageJsonId: '866861',
                                dataSourceId: 166998306289677900,
                                dataSourceName: 'emptyArray',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '21708',
                                    code: 'array',
                                    name: '属性',
                                    type: 'array',
                                    initialData: {
                                      type: 'static',
                                      value: '$[]$',
                                    },
                                    value: {
                                      type: ['customize'],
                                      code: '$[]$',
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
                      eventDatacustomActionCode706.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode706,
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
                    ref={(r: any) => (refs['Button_355871'] = r)}
                    {...injectData}
                  />
                  <Button
                    name={'下一步'}
                    shape={null}
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
                      id: 'Button_665529',
                      uid: 'Button_665529',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{ width: 'fit-content' }}
                    onClick={(e: any) => {
                      const eventDatacustomActionCode707: any = [
                        {
                          type: 'customActionCode',
                          dataId: 166521463232806140,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '1468628',
                            pageJsonId: '866861',
                            code: 'function main(data,state,success,fail){var _data$selectedNodes$n,_data$selectedNodes;var nodeMap=(_data$selectedNodes$n=data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)!==null&&_data$selectedNodes$n!==void 0?_data$selectedNodes$n:{};var nodeKeys=Object.values(nodeMap).flat().map(function(e){return e.nodeKey});success(nodeKeys)};',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '785417',
                                  options: {
                                    context: '$data_1468628$',
                                    operate: 'empty',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166521463232841380,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166521466482461900,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166721809852489150,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 166721809852496350,
                                          children: [
                                            {
                                              dataName: 'condition',
                                              dataId: 166721809852474780,
                                              children: [
                                                {
                                                  dataName: 'condition',
                                                  dataId: 166970218852495970,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 166970228758071520,
                                                      children: [],
                                                      todoOptions: [
                                                        'downloadUrl',
                                                      ],
                                                      options: {
                                                        compId:
                                                          'setDownloadResponse',
                                                        compName: 'system',
                                                        id: '4939155',
                                                        pageJsonId: '866861',
                                                        paramsObj: {
                                                          downloadUrl:
                                                            '$reply_450202?.resultData.url$',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          downloadUrl:
                                                            '$reply_450202?.resultData.url$',
                                                        },
                                                      },
                                                      actionObjId:
                                                        'setDownloadResponse',
                                                      actionObjName: 'system',
                                                      value:
                                                        'setDownloadResponse',
                                                      line_number: 7,
                                                    },
                                                  ],
                                                  elseIfs: [
                                                    {
                                                      dataName: 'elseIf',
                                                      dataId: 166970223193997980,
                                                      children: [
                                                        {
                                                          dataName: 'action',
                                                          dataId: 166970223607644860,
                                                          children: [],
                                                          todoOptions: [
                                                            'historyType',
                                                            'pathname',
                                                            'searchParams',
                                                          ],
                                                          options: {
                                                            compId: 'history',
                                                            compName: 'system',
                                                            id: '902797',
                                                            pageJsonId:
                                                              '866861',
                                                            type: 'push',
                                                            pathname:
                                                              '/auditOrderPrepare',
                                                            selectedType:
                                                              'page',
                                                            paramsObj: {
                                                              pageUrl:
                                                                '$JSON.stringify(data_1468628)$',
                                                              origin: '1',
                                                              originTab: 'none',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                                origin: '1',
                                                                originTab:
                                                                  'none',
                                                              },
                                                            pageId:
                                                              '884045146848604160',
                                                            modalPath:
                                                              '/auditOrderPrepare',
                                                          },
                                                          actionObjId:
                                                            'history',
                                                          actionObjName:
                                                            'system',
                                                          value: 'history',
                                                          line_number: 8,
                                                        },
                                                      ],
                                                      condition: [],
                                                      callback: [
                                                        {
                                                          type: 'history',
                                                          dataId: 166970223607644860,
                                                          options: {
                                                            compId: 'history',
                                                            compName: 'system',
                                                            id: '902797',
                                                            pageJsonId:
                                                              '866861',
                                                            type: 'push',
                                                            pathname:
                                                              '/auditOrderPrepare',
                                                            selectedType:
                                                              'page',
                                                            paramsObj: {
                                                              pageUrl:
                                                                '$JSON.stringify(data_1468628)$',
                                                              origin: '1',
                                                              originTab: 'none',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                                origin: '1',
                                                                originTab:
                                                                  'none',
                                                              },
                                                            pageId:
                                                              '884045146848604160',
                                                            modalPath:
                                                              '/auditOrderPrepare',
                                                          },
                                                          line_number: 8,
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                  condition: [
                                                    {
                                                      condId: '670158',
                                                      options: {
                                                        context:
                                                          '$reply_450202?.resultData.url$',
                                                        operate: 'notEmpty',
                                                        manualValue: '',
                                                      },
                                                      conditionType:
                                                        'checkContextValue',
                                                      objType: 'system',
                                                      objId: 'sys',
                                                    },
                                                  ],
                                                  line_number: 6,
                                                },
                                              ],
                                              elseIfs: [
                                                {
                                                  dataName: 'elseIf',
                                                  dataId: 166721809852442500,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 166721814799440160,
                                                      children: [],
                                                      todoOptions: [
                                                        'msgType',
                                                        'value',
                                                      ],
                                                      options: {
                                                        compId: 'showMessage',
                                                        compName: 'system',
                                                        id: '7552852',
                                                        pageJsonId: '866861',
                                                        type: 'error',
                                                        value:
                                                          '$reply_450202?.resultData.desc$',
                                                      },
                                                      actionObjId:
                                                        'showMessage',
                                                      actionObjName: 'system',
                                                      value: 'showMessage',
                                                      line_number: 9,
                                                    },
                                                  ],
                                                  condition: [],
                                                  callback: [
                                                    {
                                                      type: 'showMessage',
                                                      dataId: 166721814799440160,
                                                      options: {
                                                        compId: 'showMessage',
                                                        compName: 'system',
                                                        id: '7552852',
                                                        pageJsonId: '866861',
                                                        type: 'error',
                                                        value:
                                                          '$reply_450202?.resultData.desc$',
                                                      },
                                                      line_number: 9,
                                                    },
                                                  ],
                                                },
                                              ],
                                              condition: [
                                                {
                                                  condId: '872544',
                                                  options: {
                                                    useManual: true,
                                                    useObject: false,
                                                    context:
                                                      '$reply_450202?.resultData.isMutualExc$',
                                                    operate: '==',
                                                    manualValue: '1',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              line_number: 5,
                                            },
                                          ],
                                          value: 'callback1',
                                          params: [],
                                        },
                                        {
                                          dataName: 'callback',
                                          dataId: 166721809852487230,
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
                                        id: '450202',
                                        pageJsonId: '866861',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'sceneMutualExclusion',
                                        _apiCode: 'sceneMutualExclusion',
                                        _source: 'rhin',
                                        _serviceId: '902944059799007232',
                                        _serviceTitle:
                                          '判断选中场景是否互斥-hdb: sceneMutualExclusion',
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
                                            dataKey: '951469_header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            _id: 'path',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'path',
                                            dataKey: '951469_path',
                                          },
                                          {
                                            code: 'query',
                                            name: 'URL 参数',
                                            attrType: 'object',
                                            _id: 'query',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'query',
                                            dataKey: '951469_query',
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
                                                  '951469_body.catalogCode',
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_1468628.join(",")$',
                                                },
                                              },
                                            ],
                                            _id: 'body',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'body',
                                            dataKey: '951469_body',
                                          },
                                        ],
                                        _sourceName: '判断选中场景是否互斥-hdb',
                                      },
                                      actionObjId: 'apiRequest',
                                      actionObjName: 'system',
                                      value: 'apiRequest',
                                      line_number: 4,
                                    },
                                  ],
                                  condition: [],
                                  callback: [
                                    {
                                      type: 'apiRequest',
                                      dataId: 166721809852489150,
                                      options: {
                                        compId: 'apiRequest',
                                        compName: 'system',
                                        id: '450202',
                                        pageJsonId: '866861',
                                        sync: false,
                                        method: 'post',
                                        url: '/app/rhin/gateway/callRhinEngine',
                                        _capabilityCode: 'sceneMutualExclusion',
                                        _apiCode: 'sceneMutualExclusion',
                                        _source: 'rhin',
                                        _serviceId: '902944059799007232',
                                        _serviceTitle:
                                          '判断选中场景是否互斥-hdb: sceneMutualExclusion',
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
                                            dataKey: '951469_header',
                                          },
                                          {
                                            code: 'path',
                                            name: '请求路径参数',
                                            attrType: 'object',
                                            _id: 'path',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'path',
                                            dataKey: '951469_path',
                                          },
                                          {
                                            code: 'query',
                                            name: 'URL 参数',
                                            attrType: 'object',
                                            _id: 'query',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'query',
                                            dataKey: '951469_query',
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
                                                  '951469_body.catalogCode',
                                                value: {
                                                  type: ['customize'],
                                                  code: '$data_1468628.join(",")$',
                                                },
                                              },
                                            ],
                                            _id: 'body',
                                            compType: 'Input',
                                            parents: [],
                                            id: 'body',
                                            dataKey: '951469_body',
                                          },
                                        ],
                                        _sourceName: '判断选中场景是否互斥-hdb',
                                      },
                                      line_number: 4,
                                      callback1: [
                                        {
                                          type: 'ifelse',
                                          condition: [
                                            {
                                              condId: '872544',
                                              options: {
                                                useManual: true,
                                                useObject: false,
                                                context:
                                                  '$reply_450202?.resultData.isMutualExc$',
                                                operate: '==',
                                                manualValue: '1',
                                              },
                                              conditionType:
                                                'checkContextValue',
                                              objType: 'system',
                                              objId: 'sys',
                                            },
                                          ],
                                          dataId: 166721809852474780,
                                          elseIfs: [
                                            {
                                              dataName: 'elseIf',
                                              dataId: 166721809852442500,
                                              children: [
                                                {
                                                  dataName: 'action',
                                                  dataId: 166721814799440160,
                                                  children: [],
                                                  todoOptions: [
                                                    'msgType',
                                                    'value',
                                                  ],
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '7552852',
                                                    pageJsonId: '866861',
                                                    type: 'error',
                                                    value:
                                                      '$reply_450202?.resultData.desc$',
                                                  },
                                                  actionObjId: 'showMessage',
                                                  actionObjName: 'system',
                                                  value: 'showMessage',
                                                  line_number: 9,
                                                },
                                              ],
                                              condition: [],
                                              callback: [
                                                {
                                                  type: 'showMessage',
                                                  dataId: 166721814799440160,
                                                  options: {
                                                    compId: 'showMessage',
                                                    compName: 'system',
                                                    id: '7552852',
                                                    pageJsonId: '866861',
                                                    type: 'error',
                                                    value:
                                                      '$reply_450202?.resultData.desc$',
                                                  },
                                                  line_number: 9,
                                                },
                                              ],
                                            },
                                          ],
                                          line_number: 5,
                                          callback1: [
                                            {
                                              type: 'ifelse',
                                              condition: [
                                                {
                                                  condId: '670158',
                                                  options: {
                                                    context:
                                                      '$reply_450202?.resultData.url$',
                                                    operate: 'notEmpty',
                                                    manualValue: '',
                                                  },
                                                  conditionType:
                                                    'checkContextValue',
                                                  objType: 'system',
                                                  objId: 'sys',
                                                },
                                              ],
                                              dataId: 166970218852495970,
                                              elseIfs: [
                                                {
                                                  dataName: 'elseIf',
                                                  dataId: 166970223193997980,
                                                  children: [
                                                    {
                                                      dataName: 'action',
                                                      dataId: 166970223607644860,
                                                      children: [],
                                                      todoOptions: [
                                                        'historyType',
                                                        'pathname',
                                                        'searchParams',
                                                      ],
                                                      options: {
                                                        compId: 'history',
                                                        compName: 'system',
                                                        id: '902797',
                                                        pageJsonId: '866861',
                                                        type: 'push',
                                                        pathname:
                                                          '/auditOrderPrepare',
                                                        selectedType: 'page',
                                                        paramsObj: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '1',
                                                          originTab: 'none',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '1',
                                                          originTab: 'none',
                                                        },
                                                        pageId:
                                                          '884045146848604160',
                                                        modalPath:
                                                          '/auditOrderPrepare',
                                                      },
                                                      actionObjId: 'history',
                                                      actionObjName: 'system',
                                                      value: 'history',
                                                      line_number: 8,
                                                    },
                                                  ],
                                                  condition: [],
                                                  callback: [
                                                    {
                                                      type: 'history',
                                                      dataId: 166970223607644860,
                                                      options: {
                                                        compId: 'history',
                                                        compName: 'system',
                                                        id: '902797',
                                                        pageJsonId: '866861',
                                                        type: 'push',
                                                        pathname:
                                                          '/auditOrderPrepare',
                                                        selectedType: 'page',
                                                        paramsObj: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '1',
                                                          originTab: 'none',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '1',
                                                          originTab: 'none',
                                                        },
                                                        pageId:
                                                          '884045146848604160',
                                                        modalPath:
                                                          '/auditOrderPrepare',
                                                      },
                                                      line_number: 8,
                                                    },
                                                  ],
                                                },
                                              ],
                                              line_number: 6,
                                              callback1: [
                                                {
                                                  type: 'setDownloadResponse',
                                                  dataId: 166970228758071520,
                                                  options: {
                                                    compId:
                                                      'setDownloadResponse',
                                                    compName: 'system',
                                                    id: '4939155',
                                                    pageJsonId: '866861',
                                                    paramsObj: {
                                                      downloadUrl:
                                                        '$reply_450202?.resultData.url$',
                                                    },
                                                    paramsObjKeyValueMap: {
                                                      downloadUrl:
                                                        '$reply_450202?.resultData.url$',
                                                    },
                                                  },
                                                  line_number: 7,
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                      callback2: [],
                                    },
                                  ],
                                },
                              ],
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'showMessage',
                                  dataId: 166521465288014620,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '617149',
                                    pageJsonId: '866861',
                                    type: 'warn',
                                    value: '未选中场景',
                                  },
                                  line_number: 3,
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ];
                      eventDatacustomActionCode707.params =
                        [
                          {
                            title: '事件对象',
                            value: '$e$',
                            name: 'e',
                            label: '事件对象',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode707,
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
                    ref={(r: any) => (refs['Button_665529'] = r)}
                    {...injectData}
                  />
                  <Button
                    name={'返回'}
                    shape={null}
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
                      id: 'Button_3119094',
                      uid: 'Button_3119094',
                      type: 'Button',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={false}
                    readOnly={false}
                    style={{ width: 'fit-content', margin: '0px 0px 0px 8px' }}
                    onClick={(e: any) => {
                      const eventDatahistory10: any = [
                        {
                          type: 'history',
                          dataId: 167894560468134980,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '5150926',
                            pageJsonId: '866861',
                            type: 'push',
                            pathname: '/marketDeptApproveWorkbench',
                            selectedType: 'page',
                            pageId: '953465319297417216',
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatahistory10.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDatahistory10, { e }, 'history', {
                        id: 'history',
                        name: 'history',
                        type: 'history',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['Button_3119094'] = r)}
                    {...injectData}
                  />
                </View>
              </View>
            </VerticalView>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(MarketDeptAuditStart$$Page, {
  pageId: '948760695173189632',
  hasLogin: false,
  dataSource,
  defaultState: {},
});
