// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Input,
  Button,
  GridView,
  Collapse,
  CollapsePanel,
  HorizontalView,
  Text,
  Icon,
  VerticalView,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '960471989514170368';
const CommonAuditStart$$Page: React.FC<PageProps> = ({
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
  const select_node = (options_485879: any) => {
    const eventDatacustomActionCode183: any = [
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
    eventDatacustomActionCode183.params =
      [
        {
          title: '事件入参',
          name: 'options_485879',
          value: '$options_485879$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode183,
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

  React.useImperativeHandle(customActionMapRef, () => ({
    select_node,
  }));

  useEffect(() => {
    const eventDataifelse258: any = [
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
              manualValue: '0',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167145167099027330,
        elseIfs: [],
        line_number: 1,
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
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse258.params = [] || [];
    CMDGenerator(eventDataifelse258, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacallSelfFunc43: any = [
      {
        type: 'callSelfFunc',
        dataId: 166964719015826940,
        shielding: true,
        options: {
          compId: 'callSelfFunc',
          compName: 'system',
          id: '604968',
          pageJsonId: '866861',
          customFuncName: 'onLoadSceneNode',
        },
        line_number: 3,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacallSelfFunc43.params = [] || [];
    CMDGenerator(eventDatacallSelfFunc43, {}, 'callSelfFunc', {
      id: 'callSelfFunc',
      name: 'callSelfFunc',
      type: 'callSelfFunc',
      platform: 'undefined',
    });
    const eventDatareloadDataSource58: any = [
      {
        type: 'reloadDataSource',
        dataId: 168109281053350900,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '4062445',
          pageJsonId: '866861',
          dataSourceId: 168109245443432260,
          dataSourceName: 'selectAlltreeJurisdict',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '696013',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '202096',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '368214',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
            },
            {
              attrId: '5674027',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '938502',
                  code: 'releaseChannel',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '33914',
                  code: 'nodeValue',
                  name: '新增节点',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
              ],
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '319236',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '768747',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '830518',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '747967',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'objectArray',
              children: [
                {
                  attrId: '253722',
                  code: 'catalogType',
                  name: 'catalogType',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '553863',
                  code: 'isExtSystemSupport',
                  name: 'isExtSystemSupport',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8769275',
                  code: 'isExclusiveFlow',
                  name: 'isExclusiveFlow',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '131684',
                  code: 'filterId',
                  name: 'filterId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '8357346',
                  code: 'isCheck',
                  name: 'isCheck',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '2215755',
                  code: 'releaseChannel',
                  name: 'releaseChannel',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '27962589',
                  code: 'nodeValue',
                  name: 'nodeValue',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '293327',
                  code: 'parentCode',
                  name: 'parentCode',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '069267',
                  code: 'isContainsMatrixAttr',
                  name: 'isContainsMatrixAttr',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '399533',
                  code: 'filterIdList',
                  name: 'filterIdList',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '90341',
                  code: 'nodeKey',
                  name: 'nodeKey',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '991036',
                  code: 'nodeId',
                  name: 'nodeId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '436602',
                  code: 'children',
                  name: 'children',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '174404',
                      code: 'catalogType',
                      name: 'catalogType',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3695022',
                      code: 'isExtSystemSupport',
                      name: 'isExtSystemSupport',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '888531',
                      code: 'isExclusiveFlow',
                      name: 'isExclusiveFlow',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '106497',
                      code: 'filterId',
                      name: 'filterId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '74467',
                      code: 'isCheck',
                      name: 'isCheck',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '523134',
                      code: 'releaseChannel',
                      name: 'releaseChannel',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '054033',
                      code: 'nodeValue',
                      name: 'nodeValue',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '66469',
                      code: 'parentCode',
                      name: 'parentCode',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '1522426',
                      code: 'isContainsMatrixAttr',
                      name: 'isContainsMatrixAttr',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '76608686',
                      code: 'filterIdList',
                      name: 'filterIdList',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '7532083',
                      code: 'nodeKey',
                      name: 'nodeKey',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '386933',
                      code: 'nodeId',
                      name: 'nodeId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '4285323',
                      code: 'children',
                      name: 'children',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'objectArray',
                      children: [
                        {
                          attrId: '360641',
                          code: 'catalogType',
                          name: 'catalogType',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '833691',
                          code: 'isExtSystemSupport',
                          name: 'isExtSystemSupport',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '2491658',
                          code: 'isExclusiveFlow',
                          name: 'isExclusiveFlow',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '186322',
                          code: 'filterId',
                          name: 'filterId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '4852518',
                          code: 'isCheck',
                          name: 'isCheck',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '831297',
                          code: 'releaseChannel',
                          name: 'releaseChannel',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '6857655',
                          code: 'nodeValue',
                          name: 'nodeValue',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '465152',
                          code: 'parentCode',
                          name: 'parentCode',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '049181',
                          code: 'children',
                          name: 'children',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '500502',
                          code: 'isContainsMatrixAttr',
                          name: 'isContainsMatrixAttr',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '002783',
                          code: 'filterIdList',
                          name: 'filterIdList',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '604285',
                          code: 'nodeKey',
                          name: 'nodeKey',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                        {
                          attrId: '407192',
                          code: 'nodeId',
                          name: 'nodeId',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
        },
        line_number: 4,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource58.params = [] || [];
    CMDGenerator(eventDatareloadDataSource58, {}, 'reloadDataSource', {
      id: 'reloadDataSource',
      name: 'reloadDataSource',
      type: 'reloadDataSource',
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
        className="View_View_866861_1"
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
        ref={(r: any) => refs.setComponentRef(r, 'View_866861_1')}
        {...injectData}
      >
        <View
          className="View_View_129586"
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
          ref={(r: any) => refs.setComponentRef(r, 'View_129586')}
          {...injectData}
        >
          <View
            className="View_View_510588"
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
            ref={(r: any) => refs.setComponentRef(r, 'View_510588')}
            {...injectData}
          >
            <View
              className="View_View_782558"
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
              ref={(r: any) => refs.setComponentRef(r, 'View_782558')}
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
                  const eventDatacallSelfFunc644: any = [
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
                  eventDatacallSelfFunc644.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc644,
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
                  const eventDatacallSelfFunc645: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 168636591336969600,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '171463',
                        pageJsonId: '866861',
                        customFuncName: 'onLoadSceneNode',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc645.params = [] || [];
                  CMDGenerator(eventDatacallSelfFunc645, {}, 'callSelfFunc', {
                    id: 'callSelfFunc',
                    name: 'callSelfFunc',
                    type: 'callSelfFunc',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Input_5357175')}
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
                  const eventDatacallSelfFunc646: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 166964705945529020,
                      shielding: true,
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
                  eventDatacallSelfFunc646.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc646,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                  const eventDatagetValue239: any = [
                    {
                      type: 'getValue',
                      dataId: 168111128853568220,
                      options: {
                        compId: 'Input_5357175',
                        compLib: 'comm',
                        pageJsonId: '866861',
                        compName: 'Input',
                        id: '3967228',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'reloadDataSource',
                          dataId: 168111129199287700,
                          options: {
                            compId: 'reloadDataSource',
                            compName: 'page',
                            id: '092815',
                            pageJsonId: '866861',
                            dataSourceId: 168109245443432260,
                            dataSourceName: 'selectAlltreeJurisdict',
                            dataSourceRelType: 'service',
                            dataSourceReloadFilter: [
                              {
                                attrId: '696013',
                                code: 'header',
                                name: '请求头参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '202096',
                                code: 'path',
                                name: '请求路径参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '368214',
                                code: 'query',
                                name: 'URL 参数',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                              },
                              {
                                attrId: '5674027',
                                code: 'body',
                                name: '请求体',
                                sort: { isSort: true },
                                initialData: { type: 'static', value: '' },
                                type: 'object',
                                children: [
                                  {
                                    attrId: '938502',
                                    code: 'releaseChannel',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '33914',
                                    code: 'nodeValue',
                                    name: '新增节点',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                    value: {
                                      type: ['context', '$value_3967228$'],
                                      code: '',
                                    },
                                  },
                                ],
                              },
                            ],
                            dataSourceSetValue: [
                              {
                                attrId: '319236',
                                code: 'resultCode',
                                name: 'resultCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '768747',
                                code: 'resultMsgCode',
                                name: 'resultMsgCode',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '830518',
                                code: 'resultMsg',
                                name: 'resultMsg',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '747967',
                                code: 'resultData',
                                name: 'resultData',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '253722',
                                    code: 'catalogType',
                                    name: 'catalogType',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '553863',
                                    code: 'isExtSystemSupport',
                                    name: 'isExtSystemSupport',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '8769275',
                                    code: 'isExclusiveFlow',
                                    name: 'isExclusiveFlow',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '131684',
                                    code: 'filterId',
                                    name: 'filterId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '8357346',
                                    code: 'isCheck',
                                    name: 'isCheck',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '2215755',
                                    code: 'releaseChannel',
                                    name: 'releaseChannel',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '27962589',
                                    code: 'nodeValue',
                                    name: 'nodeValue',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '293327',
                                    code: 'parentCode',
                                    name: 'parentCode',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '069267',
                                    code: 'isContainsMatrixAttr',
                                    name: 'isContainsMatrixAttr',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '399533',
                                    code: 'filterIdList',
                                    name: 'filterIdList',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '90341',
                                    code: 'nodeKey',
                                    name: 'nodeKey',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '991036',
                                    code: 'nodeId',
                                    name: 'nodeId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '436602',
                                    code: 'children',
                                    name: 'children',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'objectArray',
                                    children: [
                                      {
                                        attrId: '174404',
                                        code: 'catalogType',
                                        name: 'catalogType',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '3695022',
                                        code: 'isExtSystemSupport',
                                        name: 'isExtSystemSupport',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '888531',
                                        code: 'isExclusiveFlow',
                                        name: 'isExclusiveFlow',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '106497',
                                        code: 'filterId',
                                        name: 'filterId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '74467',
                                        code: 'isCheck',
                                        name: 'isCheck',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '523134',
                                        code: 'releaseChannel',
                                        name: 'releaseChannel',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '054033',
                                        code: 'nodeValue',
                                        name: 'nodeValue',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '66469',
                                        code: 'parentCode',
                                        name: 'parentCode',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '1522426',
                                        code: 'isContainsMatrixAttr',
                                        name: 'isContainsMatrixAttr',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '76608686',
                                        code: 'filterIdList',
                                        name: 'filterIdList',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '7532083',
                                        code: 'nodeKey',
                                        name: 'nodeKey',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '386933',
                                        code: 'nodeId',
                                        name: 'nodeId',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'string',
                                      },
                                      {
                                        attrId: '4285323',
                                        code: 'children',
                                        name: 'children',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        type: 'objectArray',
                                        children: [
                                          {
                                            attrId: '360641',
                                            code: 'catalogType',
                                            name: 'catalogType',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '833691',
                                            code: 'isExtSystemSupport',
                                            name: 'isExtSystemSupport',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '2491658',
                                            code: 'isExclusiveFlow',
                                            name: 'isExclusiveFlow',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '186322',
                                            code: 'filterId',
                                            name: 'filterId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '4852518',
                                            code: 'isCheck',
                                            name: 'isCheck',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '831297',
                                            code: 'releaseChannel',
                                            name: 'releaseChannel',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '6857655',
                                            code: 'nodeValue',
                                            name: 'nodeValue',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '465152',
                                            code: 'parentCode',
                                            name: 'parentCode',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '049181',
                                            code: 'children',
                                            name: 'children',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '500502',
                                            code: 'isContainsMatrixAttr',
                                            name: 'isContainsMatrixAttr',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '002783',
                                            code: 'filterIdList',
                                            name: 'filterIdList',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '604285',
                                            code: 'nodeKey',
                                            name: 'nodeKey',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                          {
                                            attrId: '407192',
                                            code: 'nodeId',
                                            name: 'nodeId',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            type: 'string',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                            otherObjectArrayOptions: {},
                          },
                          line_number: 3,
                          callback1: [
                            {
                              type: 'customActionCode',
                              dataId: 168111129199228480,
                              options: {
                                compId: 'customActionCode',
                                compName: 'page',
                                id: '4386306',
                                pageJsonId: '866861',
                                code: 'function main(data,state,success,fail){var activeKeyList=[];if(data.selectAlltreeJurisdict.resultData!=undefined){data.selectAlltreeJurisdict.resultData.forEach(function(v){if(v.children!=undefined&&v.children.length>0){activeKeyList.push(v.nodeKey)}})}success(activeKeyList)};',
                              },
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'setDataSource',
                                  dataId: 168111129199210430,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'page',
                                    id: '191188',
                                    pageJsonId: '866861',
                                    dataSourceId: 167945326037287900,
                                    dataSourceName: 'activeKeyList',
                                    dataSourceRelType: 'custom',
                                    dataSourceReloadFilter: [],
                                    dataSourceSetValue: [
                                      {
                                        attrId: '5011336',
                                        code: 'param',
                                        name: '属性',
                                        type: 'string',
                                        initialData: { type: 'static' },
                                      },
                                    ],
                                    newData: '$data_4386306$',
                                    operateType: 3,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                  },
                                  line_number: 5,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                              callback2: [],
                            },
                          ],
                          callback2: [],
                        },
                        {
                          type: 'customActionCode',
                          dataId: 168111177060848060,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '6872',
                            pageJsonId: '866861',
                            actionTitle: '',
                            code: 'function main(data,state,success,fail){success({})};',
                          },
                          line_number: 6,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 168111177060804770,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '622311',
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
                                      type: ['context', '$data_6872$'],
                                      code: '',
                                    },
                                  },
                                ],
                                operateType: 1,
                                onlySetPatch: false,
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
                  ];
                  eventDatagetValue239.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatagetValue239, { e }, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_2259782')}
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
                  const eventDataclearValue184: any = [
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
                  eventDataclearValue184.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataclearValue184, { e }, 'clearValue', {
                    id: 'clearValue',
                    name: 'clearValue',
                    type: 'clearValue',
                    platform: 'pc',
                  });
                  const eventDatacallSelfFunc647: any = [
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
                  eventDatacallSelfFunc647.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc647,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_126807')}
                {...injectData}
              />
            </View>
            <View
              className="View_View_2174641"
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
              ref={(r: any) => refs.setComponentRef(r, 'View_2174641')}
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
                  const eventDatahistory13: any = [
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
                  eventDatahistory13.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatahistory13, { e }, 'history', {
                    id: 'history',
                    name: 'history',
                    type: 'history',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_817728')}
                {...injectData}
              />
            </View>
          </View>
          <View
            className="View_View_190796"
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
            ref={(r: any) => refs.setComponentRef(r, 'View_190796')}
            {...injectData}
          >
            <GridView
              name={'循环块'}
              itemKey={'item'}
              indexKey={'i'}
              pieceData={[]}
              defaultValue={[]}
              isChecked={false}
              isMultiple={false}
              columnNum={1}
              valueKey={'value'}
              span={24}
              vspace={16}
              hspace={16}
              isEditor={true}
              value={data?.selectAlltreeJurisdict?.resultData}
              gridData={data?.selectAlltreeJurisdict?.resultData}
              $$componentItem={{
                id: 'GridView_556301',
                uid: 'GridView_556301',
                type: 'GridView',
                ...componentItem,
              }}
              style={{ minHeight: 40 }}
              ref={(r: any) => refs.setComponentRef(r, 'GridView_556301')}
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
                          <View
                            className="View_View_239728"
                            name={'布局容器1'}
                            backgroundType={{
                              type: 'cleanColor',
                              color: undefined,
                            }}
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
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'View_239728')
                            }
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
                              activeKey={data?.activeKeyList}
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
                                const eventDatacustomActionCode738: any = [
                                  {
                                    type: 'customActionCode',
                                    dataId: 167946747304968830,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '024746',
                                      pageJsonId: '866861',
                                      code: 'function main(data,state,success,fail){data.activeKeyList=key;success()};',
                                    },
                                    line_number: 1,
                                    callback1: [
                                      {
                                        type: 'setDataSource',
                                        dataId: 167946760842313250,
                                        options: {
                                          compId: 'setDataSource',
                                          compName: 'page',
                                          id: '733104',
                                          pageJsonId: '866861',
                                          dataSourceId: 167945326037287900,
                                          dataSourceName: 'activeKeyTyList',
                                          dataSourceRelType: 'custom',
                                          dataSourceReloadFilter: [],
                                          dataSourceSetValue: [
                                            {
                                              attrId: '5011336',
                                              code: 'param',
                                              name: '属性',
                                              type: 'string',
                                              initialData: { type: 'static' },
                                            },
                                          ],
                                          newData: '$data_024746$',
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
                                eventDatacustomActionCode738.params =
                                  [
                                    {
                                      title: '切换面板key',
                                      value: '$key$',
                                      name: 'key',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatacustomActionCode738,
                                  { key, item, i },
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
                                refs.setComponentRef(r, 'Collapse_228917')
                              }
                              {...injectData}
                            >
                              <CollapsePanel
                                name={'折叠子面板'}
                                header={item?.nodeValue}
                                key={item?.nodeKey}
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
                                ref={(r: any) =>
                                  refs.setComponentRef(r, 'CollapsePanel_5495')
                                }
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
                                  fieldName={
                                    'data.selectAlltreeNodeCode.resultData'
                                  }
                                  gridData={item?.children}
                                  selectStyle={{ border: 'unset' }}
                                  normalStyle={{ border: '0px solid' }}
                                  $$componentItem={{
                                    id: 'GridView_841399',
                                    uid: 'GridView_841399',
                                    type: 'GridView',
                                    ...componentItem,
                                  }}
                                  style={{ minHeight: 40 }}
                                  ref={(r: any) =>
                                    refs.setComponentRef(r, 'GridView_841399')
                                  }
                                  {...injectData}
                                  getEngineApis={() => {
                                    return {
                                      ...injectData.getEngineApis(),
                                      MemoRenderer: {
                                        renderer: null,
                                        MemoLoopItem: (props: any) => {
                                          const item =
                                            props[props.itemKey] ?? props?.item;
                                          const i =
                                            props[props.indexKey] ?? props?.i;
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
                                                  refs.setComponentRef(
                                                    r,
                                                    'HorizontalView_300975',
                                                  )
                                                }
                                                {...injectData}
                                              >
                                                <View
                                                  className="View_View_575815"
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
                                                  ref={(r: any) =>
                                                    refs.setComponentRef(
                                                      r,
                                                      'View_575815',
                                                    )
                                                  }
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
                                                      refs.setComponentRef(
                                                        r,
                                                        'Text_4120405',
                                                      )
                                                    }
                                                    {...injectData}
                                                  />
                                                </View>
                                                <View
                                                  className="View_View_2657547"
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
                                                  ref={(r: any) =>
                                                    refs.setComponentRef(
                                                      r,
                                                      'View_2657547',
                                                    )
                                                  }
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
                                                      'background-color':
                                                        '#f6f6f7',
                                                      color: '#575a66',
                                                    }}
                                                    selectStyle={{
                                                      'background-color':
                                                        '#f0f6ff',
                                                      'background-image':
                                                        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAC6klEQVRYCb1XTUgUURz/zay27brqboRE2CmWgiCQ7CLkobp6iYjKDlFgCRF9XEoDOxgUJX3iEhgodahLnYSE6JBESJ46FVmBGBFBypq22s5u83+7/9m3s2/cebr6Dvve/+P3MW9n5u0CS41dHb+zBjdQQGuR4ICL3nMJR8uOqlw3VWiU5SqikJVkpOkuHOyZEX7HH8ZESdO3TOdn7WmSwGzU2UyZkYuUK7oKSnCx/1yEwtzui5X9wcV4YwCfpyyRdhi4SNffe7KGMbrfn4PztyBV5VWWg7Nd6tMikIEs4otABay2781/6TIOVMD2/UEc3htEW1dSmFA6kIFjiSgmvls4cWMWbx/E7DmJD19z32HJHshAvkaaoxEDr/qiaD41LafFWjjwApZ0VzrRfHr6qnIP/AgROJvJ9iyLgMEkpE0gg7UJ3GAtAhXYN4EXmAicFwIFqqECh4KFziUJVOCAjRi9l3vrEo0ngQpMgLFEDK1nC7e0koDBTfH8eUJIe7y5G8XT1ynML+Ri+iwhYDAV168D6CW5bUsAQ5drRXzr2V8qOSPgrOyFDKb81K8MGmImuo/VoCFqouXMDDIZGQE4Ht1gbut9PI/d26sw/G5RvIE4z7O4lb3A3OQ9G1lj+WD7QTKNC9oPk7cbvQobX3MDLMx218yAW3jNDHgJr7qBcsKrZsCvcMUN6ApXzIBf4UjIwOClWnyctHDl0Rzr6x+qjPQrTP1d7WEcaA3ixegCrj2ZZwoxaz+GOsJ7dlajr7MGhq3SefsPxj/ZPwddw7cBlfDIzXrUhQ0MDKcw+DIFK39SbKyn7a7Dpg0mJn9aONqbRGrRpZwPyxpQCctUR/YFcfFQWKTSVhbffliIN+YOqaGRFO4/Lz7/ZCytPQ2UE5aJquxTNXE+gqZ4tUiTkePXZ8UNJ/ep1iUGdITdhFs3m+hoC6F7YA7pwk9wd1tR7BhYiXARo1ZgTKzoPNfScpoN+kP9xTDR/z4RvfMfZJBzTPeTIF8AAAAASUVORK5CYII=)',
                                                      'background-size': '20px',
                                                      'background-position':
                                                        'right bottom',
                                                      'background-repeat':
                                                        'no-repeat',
                                                      border:
                                                        '1px solid rgba(51,102,238,1)',
                                                      'border-radius': '2px',
                                                    }}
                                                    value={
                                                      data?.emptyArray?.array
                                                    }
                                                    $$componentItem={{
                                                      id: 'GridView_959384',
                                                      uid: 'GridView_959384',
                                                      type: 'GridView',
                                                      ...componentItem,
                                                    }}
                                                    style={{ minHeight: 40 }}
                                                    onChange={(vals: any) => {
                                                      const eventDatacustomActionCode740: any =
                                                        [
                                                          {
                                                            type: 'customActionCode',
                                                            dataId: 166341200368161340,
                                                            options: {
                                                              compId:
                                                                'customActionCode',
                                                              compName: 'page',
                                                              id: '8421537',
                                                              pageJsonId:
                                                                '866861',
                                                              code: 'function main(data,state,success,fail){var _data$selectedNodes;var nodeMap=(data===null||data===void 0?void 0:(_data$selectedNodes=data.selectedNodes)===null||_data$selectedNodes===void 0?void 0:_data$selectedNodes.nodes)||{};var nodeKey=item.nodeKey;var selectedChildren=item.children.filter(function(e){return vals.includes(e.nodeKey)});nodeMap[nodeKey]=selectedChildren;success(nodeMap)};',
                                                            },
                                                            line_number: 1,
                                                            callback1: [
                                                              {
                                                                type: 'setDataSource',
                                                                dataId: 166341200368103420,
                                                                options: {
                                                                  compId:
                                                                    'setDataSource',
                                                                  compName:
                                                                    'page',
                                                                  id: '8998934',
                                                                  pageJsonId:
                                                                    '866861',
                                                                  dataSourceId: 166341035337970140,
                                                                  dataSourceName:
                                                                    'selectedNodes',
                                                                  dataSourceRelType:
                                                                    'custom',
                                                                  dataSourceReloadFilter:
                                                                    [],
                                                                  dataSourceSetValue:
                                                                    [
                                                                      {
                                                                        attrId:
                                                                          '142214',
                                                                        code: 'nodes',
                                                                        name: '属性',
                                                                        type: 'object',
                                                                        initialData:
                                                                          {
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
                                                                  otherObjectArrayOptions:
                                                                    {},
                                                                },
                                                                line_number: 2,
                                                                callback1: [
                                                                  {
                                                                    type: 'console',
                                                                    dataId: 166341200368168670,
                                                                    options: {
                                                                      compId:
                                                                        'debug',
                                                                      compName:
                                                                        'system',
                                                                      id: '9639415',
                                                                      pageJsonId:
                                                                        '866861',
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
                                                      eventDatacustomActionCode740.params =
                                                        [
                                                          {
                                                            title: '变化值',
                                                            value: '$vals$',
                                                            name: 'vals',
                                                          },
                                                        ] || [];
                                                      CMDGenerator(
                                                        eventDatacustomActionCode740,
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
                                                      refs.setComponentRef(
                                                        r,
                                                        'GridView_959384',
                                                      )
                                                    }
                                                    {...injectData}
                                                    getEngineApis={() => {
                                                      return {
                                                        ...injectData.getEngineApis(),
                                                        MemoRenderer: {
                                                          renderer: null,
                                                          MemoLoopItem: (
                                                            props: any,
                                                          ) => {
                                                            const item =
                                                              props[
                                                                props.itemKey
                                                              ] ?? props?.item;
                                                            const i =
                                                              props[
                                                                props.indexKey
                                                              ] ?? props?.i;
                                                            const c =
                                                              props[
                                                                props.itemKey
                                                              ] ?? props?.item;
                                                            const l =
                                                              props[
                                                                props.indexKey
                                                              ] ?? props?.i;
                                                            return (
                                                              <>
                                                                <View
                                                                  className="View_View_9189376"
                                                                  name={
                                                                    '布局容器'
                                                                  }
                                                                  backgroundType={{
                                                                    type: 'cleanColor',
                                                                    color:
                                                                      undefined,
                                                                  }}
                                                                  $$componentItem={{
                                                                    id: 'View_9189376',
                                                                    uid: 'View_9189376',
                                                                    type: 'View',
                                                                    ...componentItem,
                                                                  }}
                                                                  disabled={
                                                                    false
                                                                  }
                                                                  visible={true}
                                                                  readOnly={
                                                                    false
                                                                  }
                                                                  style={{
                                                                    display:
                                                                      'block',
                                                                    flexDirection:
                                                                      'column',
                                                                    padding:
                                                                      '0px 0px 0px 0px',
                                                                    width:
                                                                      '100%',
                                                                  }}
                                                                  ref={(
                                                                    r: any,
                                                                  ) =>
                                                                    refs.setComponentRef(
                                                                      r,
                                                                      'View_9189376',
                                                                    )
                                                                  }
                                                                  {...injectData}
                                                                >
                                                                  <Popover
                                                                    options={{
                                                                      tipType:
                                                                        '2',
                                                                      trigger:
                                                                        'click',
                                                                      content:
                                                                        'OA已实现该场景',
                                                                    }}
                                                                    id={
                                                                      'Icon_724045'
                                                                    }
                                                                    {...injectData}
                                                                    parentEngineId={
                                                                      parentEngineId
                                                                    }
                                                                  >
                                                                    <Icon
                                                                      name={
                                                                        '图标'
                                                                      }
                                                                      rotate={0}
                                                                      icon={{
                                                                        type: 'info-circle',
                                                                        theme:
                                                                          'outlined',
                                                                        fontAddress:
                                                                          '',
                                                                        isIconFont: false,
                                                                        iconFileInfo:
                                                                          {},
                                                                      }}
                                                                      $$componentItem={{
                                                                        id: 'Icon_724045',
                                                                        uid: 'Icon_724045',
                                                                        type: 'Icon',
                                                                        ...componentItem,
                                                                      }}
                                                                      disabled={
                                                                        false
                                                                      }
                                                                      visible={
                                                                        true
                                                                      }
                                                                      readOnly={
                                                                        false
                                                                      }
                                                                      style={{
                                                                        'margin-right':
                                                                          '10px',
                                                                        color:
                                                                          'unset',
                                                                      }}
                                                                      ref={(
                                                                        r: any,
                                                                      ) =>
                                                                        refs.setComponentRef(
                                                                          r,
                                                                          'Icon_724045',
                                                                        )
                                                                      }
                                                                      {...injectData}
                                                                    />
                                                                  </Popover>
                                                                  <Text
                                                                    name={
                                                                      '文本'
                                                                    }
                                                                    content={
                                                                      item?.nodeValue
                                                                    }
                                                                    textType={
                                                                      'span'
                                                                    }
                                                                    version={
                                                                      '1.0'
                                                                    }
                                                                    showHtml={
                                                                      false
                                                                    }
                                                                    $$componentItem={{
                                                                      id: 'Text_968473',
                                                                      uid: 'Text_968473',
                                                                      type: 'Text',
                                                                      ...componentItem,
                                                                    }}
                                                                    style={{
                                                                      fontSize:
                                                                        '14px',
                                                                      lineHeight:
                                                                        '24px',
                                                                      color:
                                                                        'unset',
                                                                      letterSpacing:
                                                                        '',
                                                                    }}
                                                                    ref={(
                                                                      r: any,
                                                                    ) =>
                                                                      refs.setComponentRef(
                                                                        r,
                                                                        'Text_968473',
                                                                      )
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
                        </>
                      );
                    },
                  },
                };
              }}
            />
          </View>
          <View
            className="View_View_21611"
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
            ref={(r: any) => refs.setComponentRef(r, 'View_21611')}
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
              ref={(r: any) => refs.setComponentRef(r, 'VerticalView_2049022')}
              {...injectData}
            >
              <View
                className="View_View_971858"
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
                ref={(r: any) => refs.setComponentRef(r, 'View_971858')}
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
                  ref={(r: any) =>
                    refs.setComponentRef(r, 'Text_8788706_543971')
                  }
                  {...injectData}
                />
                <View
                  className="View_View_772576"
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_772576')}
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
                    ref={(r: any) =>
                      refs.setComponentRef(r, 'Text_8788706_2538147_5100973')
                    }
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
                      const eventDatacustomActionCode741: any = [
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
                      eventDatacustomActionCode741.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(
                        eventDatacustomActionCode741,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_355871')}
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
                      const eventDatacustomActionCode742: any = [
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
                                                              origin: '0',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                                origin: '0',
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
                                                              origin: '0',
                                                            },
                                                            paramsObjKeyValueMap:
                                                              {
                                                                pageUrl:
                                                                  '$JSON.stringify(data_1468628)$',
                                                                origin: '0',
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
                                            {
                                              dataName: 'action',
                                              dataId: 168221600795700130,
                                              children: [],
                                              todoOptions: ['valueArray'],
                                              options: {
                                                compId: 'debug',
                                                compName: 'system',
                                                id: '203449',
                                                pageJsonId: '866861',
                                                value: [
                                                  '请求场景是否互斥返回的json',
                                                  '$data_1468628$',
                                                  '页面跳转入参',
                                                  '$JSON.stringify(data_1468628)$',
                                                ],
                                              },
                                              actionObjId: 'debug',
                                              actionObjName: 'system',
                                              value: 'console',
                                              line_number: 10,
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
                                                          origin: '0',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '0',
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
                                                          origin: '0',
                                                        },
                                                        paramsObjKeyValueMap: {
                                                          pageUrl:
                                                            '$JSON.stringify(data_1468628)$',
                                                          origin: '0',
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
                                        {
                                          type: 'console',
                                          dataId: 168221600795700130,
                                          options: {
                                            compId: 'debug',
                                            compName: 'system',
                                            id: '203449',
                                            pageJsonId: '866861',
                                            value: [
                                              '请求场景是否互斥返回的json',
                                              '$data_1468628$',
                                              '页面跳转入参',
                                              '$JSON.stringify(data_1468628)$',
                                            ],
                                          },
                                          line_number: 10,
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
                      eventDatacustomActionCode742.params =
                        [
                          {
                            title: '事件对象',
                            value: '$e$',
                            name: 'e',
                            label: '事件对象',
                          },
                        ] || [];
                      CMDGenerator(
                        eventDatacustomActionCode742,
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
                    ref={(r: any) => refs.setComponentRef(r, 'Button_665529')}
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
                      const eventDatahistory14: any = [
                        {
                          type: 'history',
                          dataId: 167145189371188450,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '578628',
                            pageJsonId: '866861',
                            type: 'push',
                            pathname: '/approveWorkbench',
                            selectedType: 'page',
                          },
                          line_number: 1,
                        },
                      ];
                      eventDatahistory14.params =
                        [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                      CMDGenerator(eventDatahistory14, { e }, 'history', {
                        id: 'history',
                        name: 'history',
                        type: 'history',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => refs.setComponentRef(r, 'Button_3119094')}
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

export default withPageHOC(CommonAuditStart$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
