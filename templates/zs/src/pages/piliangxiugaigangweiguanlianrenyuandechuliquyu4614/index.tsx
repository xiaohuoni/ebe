// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, MultipleSelect } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '913086065513832448';
const Piliangxiugaigangweiguanlianrenyuandechuliquyu4614$$Modal: React.FC<
  PageProps
> = ({
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
    const eventDataapiRequest632: any = [
      {
        type: 'apiRequest',
        dataId: 166930302667847230,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '7697474',
          pageJsonId: '557436',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'modBatchDcPostUserRelHandleReginId',
          _apiCode: 'modBatchDcPostUserRelHandleReginId',
          _source: 'rhin',
          _serviceId: '913083407786721280',
          _serviceTitle:
            '批量修改用户的处理区域-tsm: modBatchDcPostUserRelHandleReginId',
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
              dataKey: '7697474_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '7697474_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '7697474_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'postUserRelIds',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.postUserRelIds',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.postUserRelIds',
                  dataKey: '7697474_body.postUserRelIds',
                  value: {
                    type: ['context', '$state.postUserRelIds$'],
                    code: '',
                  },
                },
                {
                  code: 'handleRegionIds',
                  name: '新增节点',
                  attrType: 'fieldArray',
                  mustFlag: 'F',
                  children: [
                    {
                      code: 'listItem',
                      name: '列表元素',
                      attrType: 'field',
                      type: 'object',
                      _id: 'body.handleRegionIds.listItem',
                      compType: 'Input',
                      parents: ['body', 'handleRegionIds'],
                      id: 'body.handleRegionIds.listItem',
                      dataKey: '7697474_body.handleRegionIds.listItem',
                    },
                  ],
                  _id: 'body.handleRegionIds',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.handleRegionIds',
                  dataKey: '7697474_body.handleRegionIds',
                  value: {
                    type: ['form', 'Form_3301032', 'validateFields'],
                    code: 'handleRegionIds',
                  },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '7697474_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'showMessage',
            dataId: 166930312893380100,
            options: {
              compId: 'showMessage',
              compName: 'system',
              id: '249014',
              pageJsonId: '557436',
              type: 'info',
              value: '处理区域修改成功！',
            },
            line_number: 2,
          },
          {
            type: 'closeModal',
            dataId: 166930315038998530,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '560442',
              pageJsonId: '557436',
            },
            line_number: 3,
          },
          {
            type: 'okCallbackData',
            dataId: 166930315741653570,
            options: {
              compId: 'okCallbackData',
              compName: 'page',
              id: '335794',
              pageJsonId: '557436',
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest632.params = [] || [];
    CMDGenerator(eventDataapiRequest632, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal108: any = [
      {
        type: 'closeModal',
        dataId: '088177_1',
        options: { compId: 'page', compName: 'page', id: '592219' },
        line_number: 1,
      },
    ];
    eventDatacloseModal108.params = [] || [];
    CMDGenerator(eventDatacloseModal108, {}, 'closeModal', {
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
    const eventDataapiRequest633: any = [
      {
        type: 'apiRequest',
        dataId: 166930296330784900,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '8499133',
          pageJsonId: '557436',
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
              dataKey: '8499133_header',
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
                  dataKey: '8499133_path.attrCode',
                  value: { type: ['customize'], code: 'HANDLE_REGION_ID' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '8499133_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '8499133_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '8499133_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166930300141398270,
            options: {
              compId: 'MultipleSelect_080606',
              compLib: 'comm',
              pageJsonId: '557436',
              compName: 'MultipleSelect',
              id: '710449',
              data: '$reply_8499133?.resultData$',
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
    eventDataapiRequest633.params = [] || [];
    CMDGenerator(eventDataapiRequest633, {}, 'apiRequest', {
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
      className="__CustomClass_557436__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_557436_1',
          uid: 'View_557436_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_557436_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_798911',
            uid: 'View_798911',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_798911')}
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
            formCode={'Form_3301032'}
            $$componentItem={{
              id: 'Form_3301032',
              uid: 'Form_3301032',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_3301032')}
            {...injectData}
          >
            <MultipleSelect
              name={'处理区域'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              attr={{}}
              placeholder={'请选择'}
              mode={'multiple'}
              formItemIndex={0}
              fieldName={'handleRegionIds'}
              $$componentItem={{
                id: 'MultipleSelect_080606',
                uid: 'MultipleSelect_080606',
                type: 'MultipleSelect',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'MultipleSelect_080606')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(
  Piliangxiugaigangweiguanlianrenyuandechuliquyu4614$$Modal,
  {
    pageId,
    hasLogin: false,
    defaultState: { bizId: '', sceneCode: '', postUserRelIds: '' },
  },
);
