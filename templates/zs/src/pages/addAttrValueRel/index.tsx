// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Button, Table } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '1003183883381542912';
const AddAttrValueRel$$Modal: React.FC<PageProps> = ({
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
  const refeshAttrValue = (options_4358395: any) => {
    const eventDatareloadDataSource29: any = [
      {
        type: 'reloadDataSource',
        dataId: 169078465966170780,
        shielding: true,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '465302',
          pageJsonId: '9713623',
          dataSourceId: 169078407695462430,
          dataSourceName: 'qryAttrValuePage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '868384',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'header',
            },
            {
              attrId: '902436',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'path',
            },
            {
              attrId: '813991',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              key: 'query',
            },
            {
              attrId: '5793519',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              children: [
                {
                  attrId: '367734',
                  code: 'pageSize',
                  name: 'pageSize',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '5' },
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '24383',
                  code: 'attrValue',
                  name: '属性值编码',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrValue',
                  value: {
                    type: ['form', 'Form_0478987', 'getFieldsValue'],
                    code: 'attrValue',
                  },
                },
                {
                  attrId: '9413',
                  code: 'attrId',
                  name: 'attrId',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '$state.bizData$' },
                  key: 'body.attrId',
                  value: { type: ['context', '$state.bizData$'], code: '' },
                },
                {
                  attrId: '041078',
                  code: 'pageNum',
                  name: 'pageNum',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '1' },
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '542971',
                  code: 'attrValueName',
                  name: '属性值名称',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrValueName',
                  value: {
                    type: ['form', 'Form_0478987', 'getFieldsValue'],
                    code: 'attrValueName',
                  },
                },
              ],
              key: 'body',
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource29.params =
      [
        {
          title: '事件入参',
          name: 'options_4358395',
          value: '$options_4358395$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource29,
      { options_4358395 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
    const eventDatareloadDataSource30: any = [
      {
        type: 'reloadDataSource',
        dataId: 169087263539296200,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '243182',
          pageJsonId: '9713623',
          dataSourceId: 169087170676263500,
          dataSourceName: 'qrySecondAttrValuePage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '109506',
              code: 'header',
              name: '请求头参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'header',
            },
            {
              attrId: '993226',
              code: 'path',
              name: '请求路径参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'path',
            },
            {
              attrId: '82546',
              code: 'query',
              name: 'URL 参数',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              key: 'query',
            },
            {
              attrId: '85364',
              code: 'body',
              name: '请求体',
              type: 'object',
              sort: { isSort: true },
              initialData: { type: 'static' },
              children: [
                {
                  attrId: '681814',
                  code: 'attrId',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '$state.bizData$' },
                  key: 'body.attrId',
                  value: { type: ['context', '$state.bizData$'], code: '' },
                },
                {
                  attrId: '158683',
                  code: 'attrValue',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrValue',
                  value: {
                    type: ['form', 'Form_0478987', 'getFieldsValue'],
                    code: 'attrValue',
                  },
                },
                {
                  attrId: '4822626',
                  code: 'attrValueName',
                  name: '新增节点',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  key: 'body.attrValueName',
                  value: {
                    type: ['form', 'Form_0478987', 'getFieldsValue'],
                    code: 'attrValueName',
                  },
                },
                {
                  attrId: '456111',
                  code: 'pageSize',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '5' },
                  key: 'body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  attrId: '056587',
                  code: 'pageNum',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '1' },
                  key: 'body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  attrId: '740735',
                  code: 'attrValueId',
                  name: '新增节点',
                  type: 'long',
                  sort: { isSort: true },
                  initialData: { type: 'static', value: '$state.sceneCode$' },
                  key: 'body.attrValueId',
                  value: { type: ['context', '$state.sceneCode$'], code: '' },
                },
              ],
              key: 'body',
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource30.params =
      [
        {
          title: '事件入参',
          name: 'options_4358395',
          value: '$options_4358395$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource30,
      { options_4358395 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refeshAttrValue,
  }));

  const onOk = () => {
    const eventDatagetTableSelected6: any = [
      {
        type: 'getTableSelected',
        dataId: 169079541911550800,
        options: {
          compId: 'Table_86506425',
          compLib: 'comm',
          pageJsonId: '9713623',
          compName: 'Table',
          id: '739115',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 169079542094436830,
            shielding: true,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '413863',
              pageJsonId: '9713623',
              value: ['$selectedRows_739115$'],
            },
            line_number: 2,
          },
          {
            type: 'callCustomPageFunc',
            dataId: 169079606174137440,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '26472606',
              pageJsonId: '9713623',
              pathname: '/attrValueRel',
              pageId: '1001785141604552704',
              modalPath: '/attrValueRel',
              customFuncName: 'addAttrValueRel',
              customFuncParams: '$selectedRows_739115$',
            },
            line_number: 3,
            callback1: [
              {
                type: 'closeModal',
                dataId: 169087448126722400,
                options: {
                  compId: 'closeModal',
                  compName: 'page',
                  id: '04008',
                  pageJsonId: '9713623',
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
    eventDatagetTableSelected6.params = [] || [];
    CMDGenerator(eventDatagetTableSelected6, {}, 'getTableSelected', {
      id: 'getTableSelected',
      name: 'getTableSelected',
      type: 'getTableSelected',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal62: any = [
      {
        type: 'closeModal',
        dataId: '7166458_1',
        options: { compId: 'page', compName: 'page', id: '179444' },
        line_number: 1,
      },
    ];
    eventDatacloseModal62.params = [] || [];
    CMDGenerator(eventDatacloseModal62, {}, 'closeModal', {
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
    // console 169078509583846500
    console.log(state?.bizData);

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_9713623__"
    >
      <View
        name={'布局容器'}
        $$componentItem={{
          id: 'View_7443712',
          uid: 'View_7443712',
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
          height: 'auto',
          width: '0A',
          margin: '12px 12px 12px 12px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_7443712')}
        {...injectData}
      >
        <Form
          name={'属性值表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_148709'}
          $$componentItem={{
            id: 'Form_0478987',
            uid: 'Form_0478987',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 10px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_0478987')}
          {...injectData}
        >
          <Input
            name={'属性值名称'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={0}
            fieldName={'attrValueName'}
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
              id: 'Input_17281',
              uid: 'Input_17281',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onPressEnter={(e: any) => {
              const eventDatacallSelfFunc568: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 168958246776876740,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '8031668',
                    pageJsonId: '4868135',
                    customFuncName: 'refeshAttrValue',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc568.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatacallSelfFunc568, { e }, 'callSelfFunc', {
                id: 'callSelfFunc',
                name: 'callSelfFunc',
                type: 'callSelfFunc',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_17281')}
            {...injectData}
          />
          <Input
            name={'属性值'}
            size={'default'}
            selfSpan={''}
            labelCol={'6'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={1}
            fieldName={'attrValue'}
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
              id: 'Input_2629198',
              uid: 'Input_2629198',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            onPressEnter={(e: any) => {
              const eventDatacallSelfFunc569: any = [
                {
                  type: 'callSelfFunc',
                  dataId: 168958248066949340,
                  options: {
                    compId: 'callSelfFunc',
                    compName: 'system',
                    id: '4722051',
                    pageJsonId: '4868135',
                    customFuncName: 'refeshAttrValue',
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatacallSelfFunc569.params =
                [
                  { title: '输入框取值', name: 'e', value: '$e.target.value$' },
                ] || [];
              CMDGenerator(eventDatacallSelfFunc569, { e }, 'callSelfFunc', {
                id: 'callSelfFunc',
                name: 'callSelfFunc',
                type: 'callSelfFunc',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_2629198')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            labelCol={8}
            wrapperCol={16}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_594897',
              uid: 'View_594897',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            schema={{
              compType: 0,
              props: {
                formItemIndex: 2,
                style: undefined,
                selfSpan: undefined,
              },
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_594897')}
            {...injectData}
          >
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
              labelCol={8}
              wrapperCol={16}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_338022',
                uid: 'Button_338022',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatacallSelfFunc570: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 169078478181426180,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '2650774',
                      pageJsonId: '9713623',
                      customFuncName: 'refeshAttrValue',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc570.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacallSelfFunc570, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_338022')}
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
              labelCol={8}
              wrapperCol={16}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_69472',
                uid: 'Button_69472',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 12px' }}
              onClick={(e: any) => {
                const forms129 = getFormByCompId('Form_0478987', refs);
                // 支持循环容器中的表单重置
                (Array.isArray(forms129) ? forms129 : [forms129]).forEach(
                  (form) => form?.resetFields(),
                );
                const eventDatareloadDataSource95: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 168974673998759200,
                    options: {
                      compId: 'reloadDataSource',
                      compName: 'page',
                      id: '4804615',
                      pageJsonId: '4868135',
                      dataSourceId: 169078407695462430,
                      dataSourceName: 'qryAttrValuePage',
                      dataSourceRelType: 'service',
                      dataSourceReloadFilter: [
                        {
                          attrId: '868384',
                          code: 'header',
                          name: '请求头参数',
                          type: 'object',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          key: 'header',
                          _codePath: ['header'],
                          _idpath: ['868384'],
                        },
                        {
                          attrId: '902436',
                          code: 'path',
                          name: '请求路径参数',
                          type: 'object',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          key: 'path',
                          _codePath: ['path'],
                          _idpath: ['902436'],
                        },
                        {
                          attrId: '813991',
                          code: 'query',
                          name: 'URL 参数',
                          type: 'object',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          key: 'query',
                          _codePath: ['query'],
                          _idpath: ['813991'],
                        },
                        {
                          attrId: '5793519',
                          code: 'body',
                          name: '请求体',
                          type: 'object',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          children: [
                            {
                              attrId: '367734',
                              code: 'pageSize',
                              name: 'pageSize',
                              type: 'long',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '5' },
                              key: 'body.pageSize',
                              value: { type: ['customize'], code: '5' },
                              _codePath: ['body', 'pageSize'],
                              _idpath: ['5793519', '367734'],
                            },
                            {
                              attrId: '24383',
                              code: 'attrValue',
                              name: '属性值编码',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              key: 'body.attrValue',
                              _codePath: ['body', 'attrValue'],
                              _idpath: ['5793519', '24383'],
                            },
                            {
                              attrId: '9413',
                              code: 'attrId',
                              name: 'attrId',
                              type: 'long',
                              sort: { isSort: true },
                              initialData: {
                                type: 'static',
                                value: '$state.bizData$',
                              },
                              key: 'body.attrId',
                              value: {
                                type: ['context', '$state.bizData$'],
                                code: '',
                              },
                              _codePath: ['body', 'attrId'],
                              _idpath: ['5793519', '9413'],
                            },
                            {
                              attrId: '041078',
                              code: 'pageNum',
                              name: 'pageNum',
                              type: 'long',
                              sort: { isSort: true },
                              initialData: { type: 'static', value: '1' },
                              key: 'body.pageNum',
                              value: { type: ['customize'], code: '1' },
                              _codePath: ['body', 'pageNum'],
                              _idpath: ['5793519', '041078'],
                            },
                            {
                              attrId: '542971',
                              code: 'attrValueName',
                              name: '属性值名称',
                              type: 'string',
                              sort: { isSort: true },
                              initialData: { type: 'static' },
                              key: 'body.attrValueName',
                              _codePath: ['body', 'attrValueName'],
                              _idpath: ['5793519', '542971'],
                            },
                          ],
                          key: 'body',
                          _codePath: ['body'],
                          _idpath: ['5793519'],
                        },
                      ],
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatareloadDataSource95.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatareloadDataSource95,
                  { e },
                  'reloadDataSource',
                  {
                    id: 'reloadDataSource',
                    name: 'reloadDataSource',
                    type: 'reloadDataSource',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_69472')}
              {...injectData}
            />
          </View>
        </Form>
        <Table
          name={'属性值列表'}
          isFlexColumn={false}
          pageSize={data?.qrySecondAttrValuePage?.resultData?.size}
          current={data?.qrySecondAttrValuePage?.resultData?.current}
          tableTitle={'表格名称'}
          showCustom={{
            iconPosition: 'left',
            type: undefined,
            theme: undefined,
            fontAddress: undefined,
            isIconFont: undefined,
            customTitle: '自定义列',
            customStyle: 'default',
            iconFile: undefined,
            hasCustom: false,
          }}
          columns={[
            {
              title: '属性值标识',
              key: 'attrValueId',
              dataIndex: 'attrValueId',
              id: '514558',
              className: '',
              customRendering: undefined,
              editContent: {
                edittype: 'title',
                title: {
                  code: 'function main(text, row, index) { return text;}',
                  originCode: [
                    '/**',
                    ' * 计算绑定的内容',
                    ' * @param {String} text 行数据中数据字段翻译后的内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {Number} index 行索引',
                    ' * @returns {Boolean} 实际值',
                    ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                    ' */',
                    'function main(text, row, index) {',
                    '    return text;',
                    '}',
                  ],
                },
              },
            },
            {
              title: '属性值名称',
              key: 'attrValueName',
              dataIndex: 'attrValueName',
              id: '9448084',
              className: 'divider',
              customRendering: undefined,
              editContent: {
                edittype: 'title',
                title: {
                  code: 'function main(text, row, index) { return text;}',
                  originCode: [
                    '/**',
                    ' * 计算绑定的内容',
                    ' * @param {String} text 行数据中数据字段翻译后的内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {Number} index 行索引',
                    ' * @returns {Boolean} 实际值',
                    ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                    ' */',
                    'function main(text, row, index) {',
                    '    return text;',
                    '}',
                  ],
                },
              },
            },
            {
              title: '属性值编码',
              key: 'attrValueCode',
              dataIndex: 'attrValueCode',
              className: 'divider',
              id: '625893',
              customRendering: undefined,
              editContent: {
                edittype: 'title',
                title: {
                  code: 'function main(text, row, index) { return text;}',
                  originCode: [
                    '/**',
                    ' * 计算绑定的内容',
                    ' * @param {String} text 行数据中数据字段翻译后的内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {Number} index 行索引',
                    ' * @returns {Boolean} 实际值',
                    ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                    ' */',
                    'function main(text, row, index) {',
                    '    return text;',
                    '}',
                  ],
                },
              },
            },
            {
              title: '属性值',
              key: 'attrValue',
              dataIndex: 'attrValue',
              id: '596582',
              className: 'divider',
              customRendering: undefined,
              editContent: {
                edittype: 'title',
                title: {
                  code: 'function main(text, row, index) { return text;}',
                  originCode: [
                    '/**',
                    ' * 计算绑定的内容',
                    ' * @param {String} text 行数据中数据字段翻译后的内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {Number} index 行索引',
                    ' * @returns {Boolean} 实际值',
                    ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                    ' */',
                    'function main(text, row, index) {',
                    '    return text;',
                    '}',
                  ],
                },
              },
            },
            {
              title: '属性值描述',
              key: 'attrValueDesc',
              dataIndex: 'attrValueDesc',
              id: '145296',
              className: 'divider',
              customRendering: undefined,
              editContent: {
                edittype: 'title',
                title: {
                  code: 'function main(text, row, index) { return text;}',
                  originCode: [
                    '/**',
                    ' * 计算绑定的内容',
                    ' * @param {String} text 行数据中数据字段翻译后的内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {Number} index 行索引',
                    ' * @returns {Boolean} 实际值',
                    ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                    ' */',
                    'function main(text, row, index) {',
                    '    return text;',
                    '}',
                  ],
                },
              },
            },
            {
              title: '排序',
              key: 'sort',
              dataIndex: 'sort',
              id: '032085',
              className: 'divider',
              customRendering: undefined,
              editContent: {
                edittype: 'title',
                title: {
                  code: 'function main(text, row, index) { return text;}',
                  originCode: [
                    '/**',
                    ' * 计算绑定的内容',
                    ' * @param {String} text 行数据中数据字段翻译后的内容',
                    ' * @param {Object} row 行数据对象',
                    ' * @param {Number} index 行索引',
                    ' * @returns {Boolean} 实际值',
                    ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                    ' */',
                    'function main(text, row, index) {',
                    '    return text;',
                    '}',
                  ],
                },
              },
            },
          ]}
          page={true}
          rowKeyType={'specified'}
          editMode={'single'}
          selectType={'checkbox'}
          bordered={'segmentation'}
          size={'middle'}
          fixedAction={false}
          rowSelection={{ type: 'checkbox' }}
          showHead={false}
          showTotal={true}
          showSizeChanger={true}
          showQuickJumper={true}
          pageSizeOptions={'[5,10,20]'}
          rowKey={'attrValueId'}
          dataSource={data?.qrySecondAttrValuePage?.resultData?.records}
          total={data?.qrySecondAttrValuePage?.resultData?.total}
          fieldName={'data.qryAttrValuePage.resultData.total'}
          rowActions={[
            {
              title: '详情',
              iconPos: 'left',
              icon: { theme: 'outlined', type: 'file-search' },
              type: 'detail',
              id: '460721',
              checked: true,
            },
          ]}
          extend={[]}
          dataSourceFromDataSourceConfig={
            'data.qrySecondAttrValuePage.resultData.records'
          }
          $$componentItem={{
            id: 'Table_86506425',
            uid: 'Table_86506425',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          onPageChange={(page: any, pageSize: any) => {
            const eventDatareloadDataSource96: any = [
              {
                type: 'reloadDataSource',
                dataId: 166627943042821820,
                options: {
                  compId: 'reloadDataSource',
                  compName: 'page',
                  id: '707923',
                  pageJsonId: '4868135',
                  dataSourceId: 169078407695462430,
                  dataSourceName: 'qryAttrValuePage',
                  dataSourceRelType: 'service',
                  dataSourceReloadFilter: [
                    {
                      attrId: '868384',
                      code: 'header',
                      name: '请求头参数',
                      type: 'object',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      key: 'header',
                      _codePath: ['header'],
                      _idpath: ['868384'],
                    },
                    {
                      attrId: '902436',
                      code: 'path',
                      name: '请求路径参数',
                      type: 'object',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      key: 'path',
                      _codePath: ['path'],
                      _idpath: ['902436'],
                    },
                    {
                      attrId: '813991',
                      code: 'query',
                      name: 'URL 参数',
                      type: 'object',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      key: 'query',
                      _codePath: ['query'],
                      _idpath: ['813991'],
                    },
                    {
                      attrId: '5793519',
                      code: 'body',
                      name: '请求体',
                      type: 'object',
                      sort: { isSort: true },
                      initialData: { type: 'static', value: '' },
                      children: [
                        {
                          attrId: '367734',
                          code: 'pageSize',
                          name: 'pageSize',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '5' },
                          key: 'body.pageSize',
                          value: {
                            type: ['context', '$pageSize$'],
                            hideAttr: true,
                            code: '',
                          },
                          _codePath: ['body', 'pageSize'],
                          _idpath: ['5793519', '367734'],
                        },
                        {
                          attrId: '24383',
                          code: 'attrValue',
                          name: '属性值编码',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          key: 'body.attrValue',
                          value: {
                            type: ['form', 'Form_0478987', 'getFieldsValue'],
                            code: 'attrValue',
                          },
                          _codePath: ['body', 'attrValue'],
                          _idpath: ['5793519', '24383'],
                        },
                        {
                          attrId: '9413',
                          code: 'attrId',
                          name: 'attrId',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: {
                            type: 'static',
                            value: '$state.bizData$',
                          },
                          key: 'body.attrId',
                          value: {
                            type: ['context', '$state.bizData$'],
                            code: '',
                          },
                          _codePath: ['body', 'attrId'],
                          _idpath: ['5793519', '9413'],
                        },
                        {
                          attrId: '041078',
                          code: 'pageNum',
                          name: 'pageNum',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '1' },
                          key: 'body.pageNum',
                          value: {
                            type: ['context', '$page$'],
                            hideAttr: true,
                            code: '',
                          },
                          _codePath: ['body', 'pageNum'],
                          _idpath: ['5793519', '041078'],
                        },
                        {
                          attrId: '542971',
                          code: 'attrValueName',
                          name: '属性值名称',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          key: 'body.attrValueName',
                          value: {
                            type: ['form', 'Form_0478987', 'getFieldsValue'],
                            code: 'attrValueName',
                          },
                          _codePath: ['body', 'attrValueName'],
                          _idpath: ['5793519', '542971'],
                        },
                      ],
                      key: 'body',
                      _codePath: ['body'],
                      _idpath: ['5793519'],
                    },
                  ],
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatareloadDataSource96.params =
              [
                {
                  title: '当前页码取值',
                  name: 'page',
                  value: '$page$',
                  attrType: 'number',
                },
                {
                  title: '当前页尺寸',
                  name: 'pageSize',
                  value: '$pageSize$',
                  attrType: 'number',
                },
              ] || [];
            CMDGenerator(
              eventDatareloadDataSource96,
              { page, pageSize },
              'reloadDataSource',
              {
                id: 'reloadDataSource',
                name: 'reloadDataSource',
                type: 'reloadDataSource',
                platform: 'pc',
              },
            );
            const eventDatareloadDataSource97: any = [
              {
                type: 'reloadDataSource',
                dataId: 169087270355774750,
                options: {
                  compId: 'reloadDataSource',
                  compName: 'page',
                  id: '1380607',
                  pageJsonId: '9713623',
                  dataSourceId: 169087170676263500,
                  dataSourceName: 'qrySecondAttrValuePage',
                  dataSourceRelType: 'service',
                  dataSourceReloadFilter: [
                    {
                      attrId: '109506',
                      code: 'header',
                      name: '请求头参数',
                      type: 'object',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      key: 'header',
                    },
                    {
                      attrId: '993226',
                      code: 'path',
                      name: '请求路径参数',
                      type: 'object',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      key: 'path',
                    },
                    {
                      attrId: '82546',
                      code: 'query',
                      name: 'URL 参数',
                      type: 'object',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      key: 'query',
                    },
                    {
                      attrId: '85364',
                      code: 'body',
                      name: '请求体',
                      type: 'object',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      children: [
                        {
                          attrId: '681814',
                          code: 'attrId',
                          name: '新增节点',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: {
                            type: 'static',
                            value: '$state.bizData$',
                          },
                          key: 'body.attrId',
                          value: {
                            type: ['context', '$state.bizData$'],
                            code: '',
                          },
                        },
                        {
                          attrId: '158683',
                          code: 'attrValue',
                          name: '新增节点',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          key: 'body.attrValue',
                          value: {
                            type: ['form', 'Form_0478987', 'getFieldsValue'],
                            code: 'attrValue',
                          },
                        },
                        {
                          attrId: '4822626',
                          code: 'attrValueName',
                          name: '新增节点',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          key: 'body.attrValueName',
                          value: {
                            type: ['form', 'Form_0478987', 'getFieldsValue'],
                            code: 'attrValueName',
                          },
                        },
                        {
                          attrId: '456111',
                          code: 'pageSize',
                          name: '新增节点',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '5' },
                          key: 'body.pageSize',
                          value: {
                            type: ['context', '$pageSize$'],
                            hideAttr: true,
                            code: '',
                          },
                        },
                        {
                          attrId: '056587',
                          code: 'pageNum',
                          name: '新增节点',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '1' },
                          key: 'body.pageNum',
                          value: {
                            type: ['context', '$page$'],
                            hideAttr: true,
                            code: '',
                          },
                        },
                        {
                          attrId: '740735',
                          code: 'attrValueId',
                          name: '新增节点',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: {
                            type: 'static',
                            value: '$state.sceneCode$',
                          },
                          key: 'body.attrValueId',
                          value: {
                            type: ['context', '$state.sceneCode$'],
                            code: '',
                          },
                        },
                      ],
                      key: 'body',
                    },
                  ],
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 2,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatareloadDataSource97.params =
              [
                {
                  title: '当前页码取值',
                  name: 'page',
                  value: '$page$',
                  attrType: 'number',
                },
                {
                  title: '当前页尺寸',
                  name: 'pageSize',
                  value: '$pageSize$',
                  attrType: 'number',
                },
              ] || [];
            CMDGenerator(
              eventDatareloadDataSource97,
              { page, pageSize },
              'reloadDataSource',
              {
                id: 'reloadDataSource',
                name: 'reloadDataSource',
                type: 'reloadDataSource',
                platform: 'pc',
              },
            );
          }}
          onRowDetail={(rowId: any, row: any, index: any) => {
            const eventDatashowCustomModal211: any = [
              {
                type: 'showCustomModal',
                dataId: 166633054222662050,
                options: {
                  compId: 'showCustomModal',
                  compName: 'page',
                  id: '884018',
                  pageJsonId: '4868135',
                  modalname: '/guigeshuxingzhixiangqing3756',
                  pageId: '900586377250050048',
                  paramsObj: {
                    bizId: '$rowId$',
                    sceneCode: 'V',
                    attrValueObj: '$row$',
                  },
                  paramsObjKeyValueMap: {
                    bizId: '$rowId$',
                    sceneCode: 'V',
                    attrValueObj: '$row$',
                  },
                  modalPath: '/guigeshuxingzhixiangqing3756',
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatashowCustomModal211.params =
              [
                { title: '行id', name: 'rowId', value: '$rowId$' },
                {
                  title: '行对象',
                  name: 'row',
                  value: '$row$',
                  attrType: 'object',
                },
                { title: '行索引', name: 'index', value: '$index$' },
              ] || [];
            CMDGenerator(
              eventDatashowCustomModal211,
              { rowId, row, index },
              'showCustomModal',
              {
                id: 'showCustomModal',
                name: 'showCustomModal',
                type: 'showCustomModal',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Table_86506425')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(AddAttrValueRel$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
