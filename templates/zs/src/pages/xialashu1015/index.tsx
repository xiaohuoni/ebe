// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, TreeSelect, Button } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '913631557305999360';
const Xialashu1015$$Page: React.FC<PageProps> = ({
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
  useEffect(() => {
    const eventDataapiRequest631: any = [
      {
        type: 'apiRequest',
        dataId: 166943304640291680,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '033124',
          pageJsonId: '6358386',
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
              dataKey: '033124_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '033124_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '033124_query',
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
                  dataKey: '033124_body.parentOrgKey',
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
                  dataKey: '033124_body.orgCode',
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
                  dataKey: '033124_body.orgName',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '033124_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166943307296356030,
            options: {
              compId: 'TreeSelect_991359',
              compLib: 'comm',
              pageJsonId: '6358386',
              compName: 'TreeSelect',
              id: '501518',
              data: '$reply_033124?.resultData$',
              nodeValueKey: 'orgKey',
              labelKey: 'orgName',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest631.params = [] || [];
    CMDGenerator(eventDataapiRequest631, {}, 'apiRequest', {
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
      className="__CustomClass_6358386__"
    >
      <View
        className="View_View_6358386_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_6358386_1',
          uid: 'View_6358386_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_6358386_1')}
        {...injectData}
      >
        <View
          className="View_View_025491"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_025491',
            uid: 'View_025491',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_025491')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_436149'}
            $$componentItem={{
              id: 'Form_436149',
              uid: 'Form_436149',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_436149')}
            {...injectData}
          >
            <TreeSelect
              name={'树选择'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              treeDefaultExpandAll={false}
              size={'default'}
              showSearch={false}
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
              formItemIndex={0}
              fieldName={'orgCode'}
              treeCheckable={false}
              filter={'local'}
              $$componentItem={{
                id: 'TreeSelect_991359',
                uid: 'TreeSelect_991359',
                type: 'TreeSelect',
                ...componentItem,
              }}
              disabled={false}
              readOnly={false}
              isFormRootChild={true}
              onTreeExpand={(key: any, childrenKeys: any) => {
                const eventDataapiRequest811: any = [
                  {
                    type: 'apiRequest',
                    dataId: 166943382374046270,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '213152',
                      pageJsonId: '6358386',
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
                          dataKey: '683304_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '683304_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '683304_query',
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
                              dataKey: '683304_body.parentOrgKey',
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
                              dataKey: '683304_body.orgCode',
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
                              dataKey: '683304_body.orgName',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '683304_body',
                        },
                      ],
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'appendTreeNode',
                        dataId: 166944623965873000,
                        shielding: true,
                        options: {
                          compId: 'TreeSelect_991359',
                          compLib: 'comm',
                          pageJsonId: '6358386',
                          compName: 'TreeSelect',
                          id: '74711',
                          data: '$reply_213152?.resultData$',
                          nodeKey: 'orgCode',
                          title: 'orgName',
                          key: 'orgKey',
                        },
                        line_number: 2,
                      },
                      {
                        type: 'appendTreeNode',
                        dataId: 166944932547193200,
                        options: {
                          compId: 'TreeSelect_991359',
                          compLib: 'comm',
                          pageJsonId: '6358386',
                          compName: 'TreeSelect',
                          id: '834741',
                          data: '$reply_213152?.resultData$',
                          title: 'orgName',
                          key: 'orgKey',
                          nodeKey: '$key$',
                        },
                        line_number: 3,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest811.params =
                  [
                    { title: '展开节点key', name: 'key', value: '$key$' },
                    {
                      title: '展开节点的下级keys',
                      name: 'childrenKeys',
                      value: '$childrenKeys$',
                    },
                  ] || [];
                CMDGenerator(
                  eventDataapiRequest811,
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
              ref={(r: any) => refs.setComponentRef(r, 'TreeSelect_991359')}
              {...injectData}
            />
          </Form>
        </View>
        <View
          className="View_View_901974"
          name={'布局容器'}
          visible={true}
          formItemIndex={1}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_901974',
            uid: 'View_901974',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            textAlign: 'center',
            margin: '100px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_901974')}
          {...injectData}
        >
          <Button
            name={'清空树数据'}
            shape={null}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            disabled={false}
            visible={true}
            type={'default'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_148649',
              uid: 'Button_148649',
              type: 'Button',
              ...componentItem,
            }}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDataclearValue236: any = [
                {
                  type: 'clearValue',
                  dataId: 166944215564041800,
                  options: {
                    compId: 'TreeSelect_991359',
                    compLib: 'comm',
                    pageJsonId: '6358386',
                    compName: 'TreeSelect',
                    id: '834078',
                  },
                  line_number: 1,
                },
              ];
              eventDataclearValue236.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDataclearValue236, { e }, 'clearValue', {
                id: 'clearValue',
                name: 'clearValue',
                type: 'clearValue',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_148649')}
            {...injectData}
          />
          <Button
            name={'提交'}
            shape={null}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            disabled={false}
            visible={true}
            type={'primary'}
            labelCol={8}
            wrapperCol={16}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_708968',
              uid: 'Button_708968',
              type: 'Button',
              ...componentItem,
            }}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatagetValue260: any = [
                {
                  type: 'getValue',
                  dataId: 166943319170165100,
                  shielding: true,
                  options: {
                    compId: 'TreeSelect_991359',
                    compLib: 'comm',
                    pageJsonId: '6358386',
                    compName: 'TreeSelect',
                    id: '0179543',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 166943319432779900,
                      shielding: true,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '6744623',
                        pageJsonId: '6358386',
                        value: ['$value_0179543$'],
                      },
                      line_number: 2,
                    },
                  ],
                },
              ];
              eventDatagetValue260.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatagetValue260, { e }, 'getValue', {
                id: 'getValue',
                name: 'getValue',
                type: 'getValue',
                platform: 'pc',
              });
              const eventDatagetCurrentFormValues40: any = [
                {
                  type: 'getCurrentFormValues',
                  dataId: 166943933450274900,
                  options: {
                    compId: 'Form_436149',
                    compLib: 'comm',
                    pageJsonId: '6358386',
                    compName: 'Form',
                    id: '4949',
                  },
                  line_number: 3,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 166943933997188300,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '193515',
                        pageJsonId: '6358386',
                        value: ['$Form_436149$'],
                      },
                      line_number: 4,
                    },
                  ],
                },
              ];
              eventDatagetCurrentFormValues40.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatagetCurrentFormValues40,
                { e },
                'getCurrentFormValues',
                {
                  id: 'getCurrentFormValues',
                  name: 'getCurrentFormValues',
                  type: 'getCurrentFormValues',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_708968')}
            {...injectData}
          />
        </View>
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'vertical'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={16}
          rowSpace={16}
          formCode={'Form_706081'}
          $$componentItem={{
            id: 'Form_706081',
            uid: 'Form_706081',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_706081')}
          {...injectData}
        />
        <Button
          name={'按钮'}
          shape={null}
          classification={'default'}
          autoProcessFlow={false}
          flowProcessResult={'common'}
          iconPosition={'left'}
          ghost={false}
          block={false}
          size={'default'}
          disabled={false}
          visible={true}
          type={'default'}
          hasIcon={false}
          $$componentItem={{
            id: 'Button_590878',
            uid: 'Button_590878',
            type: 'Button',
            ...componentItem,
          }}
          readOnly={false}
          style={{ width: 'fit-content' }}
          onClick={(e: any) => {
            const eventDatasetValue42: any = [
              {
                type: 'setValue',
                dataId: 166944396476996770,
                shielding: true,
                options: {
                  compId: 'TreeSelect_991359',
                  compLib: 'comm',
                  pageJsonId: '6358386',
                  compName: 'TreeSelect',
                  id: '0866443',
                  valueList: { TreeSelect_991359: '' },
                },
                line_number: 1,
                callback1: [],
              },
            ];
            eventDatasetValue42.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatasetValue42, { e }, 'setValue', {
              id: 'setValue',
              name: 'setValue',
              type: 'setValue',
              platform: 'pc',
            });
            const eventDatagetValue261: any = [
              {
                type: 'getValue',
                dataId: 166944397146342980,
                options: {
                  compId: 'TreeSelect_991359',
                  compLib: 'comm',
                  pageJsonId: '6358386',
                  compName: 'TreeSelect',
                  id: '499385',
                },
                line_number: 2,
                callback1: [
                  {
                    type: 'console',
                    dataId: 166944397691932200,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '791854',
                      pageJsonId: '6358386',
                      value: ['$value_499385$'],
                    },
                    line_number: 3,
                  },
                ],
              },
            ];
            eventDatagetValue261.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventDatagetValue261, { e }, 'getValue', {
              id: 'getValue',
              name: 'getValue',
              type: 'getValue',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Button_590878')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Xialashu1015$$Page, {
  pageId,
  hasLogin: false,
  defaultState: {},
});
