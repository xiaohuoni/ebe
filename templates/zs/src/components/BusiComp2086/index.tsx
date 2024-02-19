// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Form, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const BusiComp2086$$BusiComp: React.FC<PageProps> = ({
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
  useEffect(() => {
    const eventDataapiRequest3: any = [
      {
        type: 'apiRequest',
        dataId: 166096475386081920,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '688767',
          pageJsonId: '2086',
          sync: false,
          actionTitle: '加载地市下拉框',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'SYS_qryRegionListByParentId',
          _apiCode: 'qryRegionListByParentId',
          _source: 'rhin',
          _serviceId: '878100790201982976',
          _serviceTitle: '根据父区域ID查询所有子区域: qryRegionListByParentId',
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
              dataKey: '688767_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '688767_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '688767_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
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
                  dataKey: '688767_body.parentRegionId',
                  value: { type: ['customize'], code: '350000' },
                },
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
                  dataKey: '688767_body.includeParent',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '688767_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 166096485501741730,
            options: {
              compId: 'Select_620033',
              compLib: 'comm',
              pageJsonId: '2086',
              compName: 'Select',
              id: '45356403',
              data: '$reply_688767?.resultData$',
              valueKey: 'regionId',
              labelKey: 'regionName',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest3.params = [] || [];
    CMDGenerator(eventDataapiRequest3, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_2086__">
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
        formCode={'Form_797705'}
        $$componentItem={{
          id: 'Form_797705',
          uid: 'Form_797705',
          type: 'Form',
          ...componentItem,
        }}
        style={{ padding: '0px 0px 0px 0px' }}
        ref={(r: any) => (refs['Form_797705'] = r)}
        {...injectData}
      >
        <Select
          name={'归属地市'}
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
          formItemIndex={0}
          fieldName={'lanId'}
          allowClear={true}
          $$componentItem={{
            id: 'Select_620033',
            uid: 'Select_620033',
            type: 'Select',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          isFormRootChild={true}
          onChange={(e: any) => {
            const eventDataclearValue1: any = [
              {
                type: 'clearValue',
                dataId: 166096490469892670,
                options: {
                  compId: 'Select_758857',
                  compLib: 'comm',
                  pageJsonId: '2086',
                  compName: 'Select',
                  id: '895125',
                },
                line_number: 1,
              },
            ];
            eventDataclearValue1.params =
              [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
            CMDGenerator(eventDataclearValue1, { e }, 'clearValue', {
              id: 'clearValue',
              name: 'clearValue',
              type: 'clearValue',
              platform: 'pc',
            });
            const eventDataifelse15: any = [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '626062',
                    options: { operate: 'notEmpty' },
                    conditionType: 'checkValue',
                    objType: 'Select',
                    objId: 'Select_620033',
                  },
                ],
                dataId: 166096495599975780,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166096507785914020,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166096509764739840,
                        children: [],
                        todoOptions: [],
                        options: {
                          compId: 'Select_758857',
                          compLib: 'comm',
                          pageJsonId: '2086',
                          compName: 'Select',
                          id: '964123',
                        },
                        actionObjId: 'Select_758857',
                        actionObjName: 'Select',
                        value: 'clearOptions',
                        compLib: 'comm',
                        elseIfs: [],
                        line_number: 5,
                      },
                    ],
                    condition: [],
                    desc: '清空下拉框选项',
                    elseIfs: [],
                    callback: [
                      {
                        type: 'clearOptions',
                        dataId: 166096509764739840,
                        options: {
                          compId: 'Select_758857',
                          compLib: 'comm',
                          pageJsonId: '2086',
                          compName: 'Select',
                          id: '964123',
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
                    dataId: 166096498878075330,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '05751',
                      pageJsonId: '2086',
                      sync: false,
                      actionTitle: '加载区县下拉框',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'SYS_qryRegionListByParentId',
                      _apiCode: 'qryRegionListByParentId',
                      _source: 'rhin',
                      _serviceId: '878100790201982976',
                      _serviceTitle:
                        '根据父区域ID查询所有子区域: qryRegionListByParentId',
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
                          dataKey: '05751_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '05751_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '05751_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
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
                              dataKey: '05751_body.parentRegionId',
                              value: {
                                type: ['form', 'Form_797705', 'getFieldsValue'],
                                code: 'lanId',
                              },
                            },
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
                              dataKey: '05751_body.includeParent',
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '05751_body',
                        },
                      ],
                    },
                    line_number: 3,
                    callback1: [
                      {
                        type: 'reloadSelectData',
                        dataId: 166096503229462660,
                        options: {
                          compId: 'Select_758857',
                          compLib: 'comm',
                          pageJsonId: '2086',
                          compName: 'Select',
                          id: '115468',
                          data: '$reply_05751?.resultData$',
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
            eventDataifelse15.params =
              [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
            CMDGenerator(eventDataifelse15, { e }, 'ifelse', {
              id: 'ifelse',
              name: 'ifelse',
              type: 'ifelse',
              platform: 'pc',
            });
          }}
          ref={(r: any) => (refs['Select_620033'] = r)}
          {...injectData}
        />
        <Select
          name={'归属区县'}
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
          formItemIndex={1}
          fieldName={'areaId'}
          allowClear={true}
          $$componentItem={{
            id: 'Select_758857',
            uid: 'Select_758857',
            type: 'Select',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          isFormRootChild={true}
          ref={(r: any) => (refs['Select_758857'] = r)}
          {...injectData}
        />
      </Form>
    </div>
  );
};

export default withPageHOC(BusiComp2086$$BusiComp, {
  pageId: 'pageId 未找到',
  hasLogin: true,
  defaultState: {},
});
