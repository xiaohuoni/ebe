// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Tree, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Xuanzezhidingchulirenzuzhi4157$$Modal: React.FC<PageProps> = ({
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
    const eventDatagetSelectedData21: any = [
      {
        type: 'getSelectedData',
        dataId: 166944214590925980,
        options: {
          compId: 'Tree_0118687',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'Tree',
          id: '64317',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '4519756',
                options: {
                  context: '$selectedData_64317[0]$',
                  operate: 'notEmpty',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 166944218034486200,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 166944219471716130,
                children: [
                  {
                    dataName: 'action',
                    dataId: 166944220007268640,
                    children: [],
                    todoOptions: ['msgType', 'value'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '598921',
                      pageJsonId: 30,
                      type: 'warn',
                      value: '请选择组织后，点击确认按钮',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    elseIfs: [],
                    line_number: 5,
                  },
                ],
                condition: [],
                elseIfs: [],
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 166944220007268640,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '598921',
                      pageJsonId: 30,
                      type: 'warn',
                      value: '请选择组织后，点击确认按钮',
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
                dataId: 166944222713722780,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '2887433',
                  pageJsonId: 30,
                },
                line_number: 3,
              },
              {
                type: 'callParentCustomFunc',
                dataId: 166944445966883800,
                options: {
                  compId: 'callParentCustomFunc',
                  compName: 'system',
                  id: '557296',
                  pageJsonId: 30,
                  pathname: '/huanjiexiangqing9964',
                  pageId: '900035813064024064',
                  modalPath: '/huanjiexiangqing9964',
                  customFuncName: 'chooseHandlerOrg',
                  customFuncParams: 'object',
                  paramsObj: {
                    orgCode: '$selectedData_64317[0].orgCode$',
                    orgName: '$selectedData_64317[0].orgName$',
                  },
                  paramsObjKeyValueMap: {
                    orgCode: '$selectedData_64317[0].orgCode$',
                    orgName: '$selectedData_64317[0].orgName$',
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
    eventDatagetSelectedData21.params = [] || [];
    CMDGenerator(eventDatagetSelectedData21, {}, 'getSelectedData', {
      id: 'getSelectedData',
      name: 'getSelectedData',
      type: 'getSelectedData',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal88: any = [
      {
        type: 'closeModal',
        dataId: '5111134_1',
        options: { compId: 'page', compName: 'page', id: '106315' },
        line_number: 1,
      },
    ];
    eventDatacloseModal88.params = [] || [];
    CMDGenerator(eventDatacloseModal88, {}, 'closeModal', {
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
    const eventDataapiRequest557: any = [
      {
        type: 'apiRequest',
        dataId: 166944148503370980,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9907523',
          pageJsonId: 30,
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryDcOaOrgListByParentOrgKey',
          _apiCode: 'qryDcOaOrgListByParentOrgKey',
          _source: 'rhin',
          _serviceId: '913340523929903104',
          _serviceTitle:
            '根据父ID查询组织列表-tsm: qryDcOaOrgListByParentOrgKey',
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
              dataKey: '9907523_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9907523_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9907523_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'parentOrgKey',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentOrgKey',
                  compType: 'Input',
                  name: 'parentOrgKey',
                  parents: ['body'],
                  id: 'body.parentOrgKey',
                  dataKey: '9907523_body.parentOrgKey',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  code: 'orgCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.orgCode',
                  compType: 'Input',
                  name: 'orgCode',
                  parents: ['body'],
                  id: 'body.orgCode',
                  dataKey: '9907523_body.orgCode',
                },
                {
                  code: 'orgName',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.orgName',
                  compType: 'Input',
                  name: 'orgName',
                  parents: ['body'],
                  id: 'body.orgName',
                  dataKey: '9907523_body.orgName',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9907523_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166944160000917060,
            options: {
              compId: 'Tree_0118687',
              compLib: 'comm',
              pageJsonId: 30,
              compName: 'Tree',
              id: '1041676',
              data: '$reply_9907523?.resultData$',
              labelKey: 'orgName',
              nodeValueKey: 'orgKey',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest557.params = [] || [];
    CMDGenerator(eventDataapiRequest557, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_30__">
      <View
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: '#ffffff' }}
        $$componentItem={{
          id: 'View_30_1',
          uid: 'View_30_1',
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
        ref={(r: any) => (refs['View_30_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_30_11',
            uid: 'VerticalView_30_11',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => (refs['VerticalView_30_11'] = r)}
          {...injectData}
        >
          <Tree
            name={'树形控件'}
            defaultExpandAll={true}
            showLine={true}
            selectable={true}
            isAsync={false}
            treeData={[
              {
                title: '第一列',
                key: 'column1',
                selectable: true,
                value: 'column1',
                label: '第一列',
                $$isParent: true,
                children: [
                  {
                    title: '第二列',
                    key: 'column2',
                    value: 'column2',
                    selectable: true,
                    label: '第二列',
                  },
                ],
              },
            ]}
            visible={true}
            showLineIcon={false}
            showSearch={true}
            $$componentItem={{
              id: 'Tree_0118687',
              uid: 'Tree_0118687',
              type: 'Tree',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            onExpand={(key: any, childrenKeys: any) => {
              const eventDataapiRequest801: any = [
                {
                  type: 'apiRequest',
                  dataId: 166944152932440420,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '973488',
                    pageJsonId: 30,
                    sync: false,
                    method: 'post',
                    url: '/app/rhin/gateway/callRhinEngine',
                    _capabilityCode: 'qryDcOaOrgListByParentOrgKey',
                    _apiCode: 'qryDcOaOrgListByParentOrgKey',
                    _source: 'rhin',
                    _serviceId: '913340523929903104',
                    _serviceTitle:
                      '根据父ID查询组织列表-tsm: qryDcOaOrgListByParentOrgKey',
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
                        dataKey: '973488_header',
                      },
                      {
                        code: 'path',
                        name: '请求路径参数',
                        attrType: 'object',
                        _id: 'path',
                        compType: 'Input',
                        parents: [],
                        id: 'path',
                        dataKey: '973488_path',
                      },
                      {
                        code: 'query',
                        name: 'URL 参数',
                        attrType: 'object',
                        _id: 'query',
                        compType: 'Input',
                        parents: [],
                        id: 'query',
                        dataKey: '973488_query',
                      },
                      {
                        code: 'body',
                        name: '请求体',
                        attrType: 'object',
                        children: [
                          {
                            code: 'parentOrgKey',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.parentOrgKey',
                            compType: 'Input',
                            name: 'parentOrgKey',
                            parents: ['body'],
                            id: 'body.parentOrgKey',
                            dataKey: '973488_body.parentOrgKey',
                            value: { type: ['context', '$key$'], code: '' },
                          },
                          {
                            code: 'orgCode',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.orgCode',
                            compType: 'Input',
                            name: 'orgCode',
                            parents: ['body'],
                            id: 'body.orgCode',
                            dataKey: '973488_body.orgCode',
                          },
                          {
                            code: 'orgName',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            _id: 'body.orgName',
                            compType: 'Input',
                            name: 'orgName',
                            parents: ['body'],
                            id: 'body.orgName',
                            dataKey: '973488_body.orgName',
                          },
                        ],
                        _id: 'body',
                        compType: 'Input',
                        parents: [],
                        id: 'body',
                        dataKey: '973488_body',
                      },
                    ],
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'appendTreeNode',
                      dataId: 166944156873843780,
                      options: {
                        compId: 'Tree_0118687',
                        compLib: 'comm',
                        pageJsonId: 30,
                        compName: 'Tree',
                        id: '1169383',
                        data: '$reply_973488?.resultData$',
                        nodeKey: '$key$',
                        title: 'orgName',
                        key: 'orgKey',
                      },
                      line_number: 2,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDataapiRequest801.params =
                [
                  { title: '展开节点key', name: 'key', value: '$key$' },
                  {
                    title: '展开节点的下级keys',
                    name: 'childrenKeys',
                    value: '$childrenKeys$',
                  },
                ] || [];
              CMDGenerator(
                eventDataapiRequest801,
                { key, childrenKeys },
                'apiRequest',
                {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Tree_0118687'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Xuanzezhidingchulirenzuzhi4157$$Modal, {
  pageId: '913666163952467968',
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '' },
});
