// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1044814615281512448';
const ClsCp_0003_0005AddinfOcopy$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm42: any = [
      {
        type: 'validateCurrentForm',
        dataId: 169926622885245300,
        options: {
          compId: 'Form_775282',
          compLib: 'comm',
          pageJsonId: '558169',
          compName: 'Form',
          id: '562369',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 169994471678855600,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '122583',
              pageJsonId: '558169',
              value: ['$Form_775282$'],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 169932247763489660,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '6555517',
              pageJsonId: '558169',
              code: 'function main(data,state,success,fail){var formInfo=Object.assign(Form_775282,data.factorForm);var infoList=state.infoList||[];if(!!formInfo.busiAccessNumber){var list=infoList.filter(function(item){return item.busiAccessNumber==formInfo.busiAccessNumber});if(list.length>0){fail("\\u5F53\\u524D\\u4E1A\\u52A1\\u63A5\\u5165\\u53F7\\u5DF2\\u88AB\\u6DFB\\u52A0\\uFF01\\u65E0\\u6CD5\\u65B0\\u589E")}else{success()}}else{success()}};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 169932266444533800,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '8433844',
                  pageJsonId: '558169',
                  params: '$Form_775282$',
                },
                line_number: 4,
              },
              {
                type: 'closeModal',
                dataId: 169932266915595040,
                options: { compId: 'page', compName: 'page', id: '576596' },
                line_number: 5,
              },
            ],
            callback2: [
              {
                type: 'showMessage',
                dataId: 169932265282674180,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '675155',
                  pageJsonId: '558169',
                  type: 'warn',
                  value: '$fail_6555517$',
                },
                line_number: 6,
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm42.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm42, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal41: any = [
      {
        type: 'closeModal',
        dataId: '141986_1',
        options: { compId: 'page', compName: 'page', id: '552291' },
        line_number: 1,
      },
    ];
    eventDatacloseModal41.params = [] || [];
    CMDGenerator(eventDatacloseModal41, {}, 'closeModal', {
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
    const eventDataapiRequest347: any = [
      {
        type: 'apiRequest',
        dataId: 170071013058521540,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '34733',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
          params: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
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
                      _id: 'root.body.catalogCode',
                      compType: 'Input',
                      name: 'catalogCode',
                      parents: ['root', 'body'],
                      id: 'root.body.catalogCode',
                      dataKey: '34733_root.body.catalogCode',
                      value: {
                        type: ['customize'],
                        code: '$state.catalogCode$',
                      },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                    },
                    {
                      code: 'attrCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'root.body.attrCode',
                      compType: 'Input',
                      name: 'attrCode',
                      parents: ['root', 'body'],
                      id: 'root.body.attrCode',
                      dataKey: '34733_root.body.attrCode',
                      value: { type: ['customize'], code: 'devChannel' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '34733_root.body',
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                },
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
                  dataKey: '34733_root.header',
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
                  dataKey: '34733_root.path',
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
                  dataKey: '34733_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '34733_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170071013729950660,
            options: {
              compId: 'Select_785295',
              compLib: 'comm',
              pageJsonId: '558169',
              compName: 'Select',
              id: '03337063',
              data: '$reply_34733?.resultData$',
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
    eventDataapiRequest347.params = [] || [];
    CMDGenerator(eventDataapiRequest347, {}, 'apiRequest', {
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
      className="__CustomClass_558169__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_558169_1',
          uid: 'View_558169_1',
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
          textAlign: 'left',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_558169_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_480919',
            uid: 'View_480919',
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
            padding: '0px 20px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_480919')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={'6'}
            wrapperCol={18}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_775282'}
            $$componentItem={{
              id: 'Form_775282',
              uid: 'Form_775282',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_775282')}
            {...injectData}
          >
            <Input
              name={'集团编码'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'选择'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请点击右侧按钮选择集团'}
              formItemIndex={0}
              fieldName={'groupId'}
              icon={{
                type: 'search',
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
                id: 'Input_3342',
                uid: 'Input_3342',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              onIconClick={() => {
                const eventDatashowCustomModal176: any = [
                  {
                    type: 'showCustomModal',
                    dataId: 167755432297860260,
                    options: {
                      compId: 'showCustomModal',
                      compName: 'page',
                      id: '048343',
                      pageJsonId: 31,
                      modalname: '/groupInfoSel',
                      pageId: '899848269504155648',
                      paramsObj: {
                        groupCode: '1000',
                        userCode: '$state.staffCode$',
                      },
                      paramsObjKeyValueMap: {
                        groupCode: '1000',
                        userCode: '$state.staffCode$',
                      },
                      modalPath: '/groupInfoSel',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 167755432297814880,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '632962254',
                          pageJsonId: 31,
                          code: 'function main(data,state,success,fail){var _okData_;if(((_okData_=okData_048343)===null||_okData_===void 0?void 0:_okData_.length)>0){success(okData_048343[0])}else{fail()}};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 169994294486518460,
                            options: {
                              compId: ['Input_3342', 'Input_341384'],
                              compLib: 'comm',
                              pageJsonId: '558169',
                              compName: 'Input',
                              id: '6994904',
                              valueList: {
                                Input_3342: '$data_632962254.groupId$',
                                Input_341384: '$data_632962254.groupName$',
                              },
                              compid: ['Input_3342', 'Input_341384'],
                            },
                            line_number: 3,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatashowCustomModal176.params = [] || [];
                CMDGenerator(
                  eventDatashowCustomModal176,
                  {},
                  'showCustomModal',
                  {
                    id: 'showCustomModal',
                    name: 'showCustomModal',
                    type: 'showCustomModal',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_3342')}
              {...injectData}
            />
            <Input
              name={'集团名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'选择集团后自动带出'}
              formItemIndex={1}
              fieldName={'groupName'}
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
                id: 'Input_341384',
                uid: 'Input_341384',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={true}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_341384')}
              {...injectData}
            />
            <Input
              name={'业务接入号'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'busiAccessNumber'}
              allowClear={false}
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
                id: 'Input_543601',
                uid: 'Input_543601',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_543601')}
              {...injectData}
            />
            <Input
              name={'签名'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'sign'}
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
                id: 'Input_8230705',
                uid: 'Input_8230705',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_8230705')}
              {...injectData}
            />
            <Select
              name={'发展渠道'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              formItemIndex={4}
              fieldName={'devChannel'}
              $$componentItem={{
                id: 'Select_785295',
                uid: 'Select_785295',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetSelectedData298: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 170105054229963300,
                    options: {
                      compId: 'Select_785295',
                      compLib: 'comm',
                      pageJsonId: '558169',
                      compName: 'Select',
                      id: '0506455',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 170105054615438720,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '1734966',
                          pageJsonId: '558169',
                          dataSourceId: 170105044441599460,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '1613848',
                              code: 'devChannelName',
                              name: '发展渠道名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                              value: {
                                type: ['context', '$selectedData_0506455[0]$'],
                                code: 'label',
                              },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                          targetDataSourcePaths: [],
                        },
                        line_number: 2,
                        callback1: [],
                        callback2: [],
                      },
                      {
                        type: 'console',
                        dataId: 170105056587081920,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '72441',
                          pageJsonId: '558169',
                          value: ['$selectedData_0506455[0]$'],
                        },
                        line_number: 3,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDatagetSelectedData298.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(
                  eventDatagetSelectedData298,
                  { e },
                  'getSelectedData',
                  {
                    id: 'getSelectedData',
                    name: 'getSelectedData',
                    type: 'getSelectedData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_785295')}
              {...injectData}
            />
            <Input
              name={'渠道名称'}
              size={'default'}
              selfSpan={''}
              labelCol={'6'}
              wrapperCol={18}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={5}
              fieldName={'channelName'}
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
                id: 'Input_548785',
                uid: 'Input_548785',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_548785')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0003_0005AddinfOcopy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    groupInfoList: '',
    staffCode: '',
    catalogCode: '',
  },
});
