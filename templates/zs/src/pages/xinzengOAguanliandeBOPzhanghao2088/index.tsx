// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '990908752946978816';
const XinzengOAguanliandeBoPzhanghao2088$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm27: any = [
      {
        type: 'validateCurrentForm',
        dataId: 168785809185052480,
        options: {
          compId: 'Form_6302602',
          compLib: 'comm',
          pageJsonId: '177712',
          compName: 'Form',
          id: '7364512',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '728487',
                options: { context: '$state.oaUserId$', operate: 'notEmpty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168791543203090880,
            elseIfs: [
              {
                dataName: 'elseIf',
                dataId: 168791545642678880,
                children: [
                  {
                    dataName: 'action',
                    dataId: 168791546015136320,
                    children: [],
                    todoOptions: ['msgType', 'value', 'duration'],
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '491777',
                      pageJsonId: '177712',
                      type: 'info',
                      value: '请先选择OA账号',
                    },
                    actionObjId: 'showMessage',
                    actionObjName: 'system',
                    value: 'showMessage',
                    tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                    line_number: 6,
                  },
                ],
                condition: [],
                value: 'elseIf',
                callback: [
                  {
                    type: 'showMessage',
                    dataId: 168791546015136320,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '491777',
                      pageJsonId: '177712',
                      type: 'info',
                      value: '请先选择OA账号',
                    },
                    line_number: 6,
                  },
                ],
              },
            ],
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 168791545040056320,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '908992',
                  pageJsonId: '177712',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'addDcOaUserRel',
                  _apiCode: 'addDcOaUserRel',
                  _source: 'rhin',
                  _sourceName: '新增OA与BOP工号关联关系-hyj',
                  _serviceId: '991151635549577216',
                  _serviceTitle: '新增OA与BOP工号关联关系-hyj: addDcOaUserRel',
                  valueType: 'object',
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
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-0',
                          id: 'root.header',
                          dataKey: '596427_root.header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'root.path',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-1',
                          id: 'root.path',
                          dataKey: '596427_root.path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'root.query',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-2',
                          id: 'root.query',
                          dataKey: '596427_root.query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'userId',
                              name: 'BOP工号',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.userId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-0',
                              id: 'root.body.userId',
                              dataKey: '596427_root.body.userId',
                              value: {
                                type: ['context', '$Form_6302602$'],
                                code: 'userId',
                              },
                            },
                            {
                              code: 'oaUserId',
                              name: 'OA工号',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              defaultValue: '',
                              _id: 'root.body.oaUserId',
                              compType: 'Input',
                              parents: ['root', 'body'],
                              parentType: 'object',
                              parentKey: '0-3',
                              key: '0-3-1',
                              id: 'root.body.oaUserId',
                              dataKey: '596427_root.body.oaUserId',
                              value: {
                                type: ['context', '$state.oaUserId$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'root.body',
                          compType: 'Input',
                          parents: ['root'],
                          parentType: 'object',
                          parentKey: '0',
                          key: '0-3',
                          id: 'root.body',
                          dataKey: '596427_root.body',
                        },
                      ],
                      _id: 'root',
                      compType: 'Input',
                      isRoot: true,
                      parents: [],
                      key: '0',
                      id: 'root',
                      dataKey: '596427_root',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'callCustomPageFunc',
                    dataId: 170599034663138300,
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '6633146',
                      pageJsonId: '177712',
                      pathname: '/oaUserManage',
                      pageId: '885366956034052096',
                      modalPath: '/oaUserManage',
                      customFuncName: 'refreshBOPTable',
                      customFuncParams: 'object',
                    },
                    line_number: 4,
                    callback1: [],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'closeModal',
                dataId: 168791704884792420,
                options: { compId: 'page', compName: 'page', id: '763504' },
                line_number: 5,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm27.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm27, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal16: any = [
      {
        type: 'closeModal',
        dataId: '283617_1',
        options: { compId: 'page', compName: 'page', id: '119111' },
        line_number: 1,
      },
    ];
    eventDatacloseModal16.params = [] || [];
    CMDGenerator(eventDatacloseModal16, {}, 'closeModal', {
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
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_177712__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_177712_1',
          uid: 'View_177712_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_177712_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_195147',
            uid: 'View_195147',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_195147')}
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
            formCode={'Form_6302602'}
            $$componentItem={{
              id: 'Form_6302602',
              uid: 'Form_6302602',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_6302602')}
            {...injectData}
          >
            <Input
              name={'BOP工号'}
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
              fieldName={'userId'}
              regexp={[
                {
                  id: '418569',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正确的工号',
                  pattern: '/^[1-9]\\d*$/',
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
                id: 'Input_836881',
                uid: 'Input_836881',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_836881')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(XinzengOAguanliandeBoPzhanghao2088$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', bizData: '', oaUserId: '' },
});
