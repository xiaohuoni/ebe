// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Select, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1061460327693115392';
const NetworkAcrossProvincecopy2copycopy$$Modal: React.FC<PageProps> = ({
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
  const caluZ = (options_066371: any) => {
    const eventDatagetValue47: any = [
      {
        type: 'getValue',
        dataId: 170467857673429950,
        options: {
          compId: 'Input_522238',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Input',
          id: '2164677',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getValue',
            dataId: 170467858028079300,
            options: {
              compId: 'Input_447768',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Input',
              id: '605153',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170467859418643680,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '700673',
                  pageJsonId: '8430824',
                  code: 'function main(data,state,success,fail){var z=parseFloat(value_2164677);var s=parseFloat(value_605153);if(z!=null&&z!=undefined&&s!=null&&s!=undefined){var r=(z*s).toFixed(2);if(r!=NaN&&r!="NaN"){success(r)}}};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 170467865773341860,
                    options: {
                      compId: 'Input_310029',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Input',
                      id: '865297',
                      valueList: { Input_310029: '$data_700673$' },
                    },
                    line_number: 4,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
            ],
          },
        ],
      },
    ];
    eventDatagetValue47.params =
      [
        {
          title: '事件入参',
          name: 'options_066371',
          value: '$options_066371$',
        },
      ] || [];
    CMDGenerator(eventDatagetValue47, { options_066371 }, 'getValue', {
      id: 'getValue',
      name: 'getValue',
      type: 'getValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    caluZ,
  }));

  const onOk = () => {
    const eventDatavalidateCurrentForm29: any = [
      {
        type: 'validateCurrentForm',
        dataId: 170468210909291070,
        options: {
          compId: 'Form_7980266',
          compLib: 'comm',
          pageJsonId: '8430824',
          compName: 'Form',
          id: '92501039',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170468211344241150,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '1684311',
              pageJsonId: '8430824',
              dataSourceId: 166452624216490180,
              dataSourceName: 'feeInfo',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'packageContent',
                  name: '属性',
                  type: 'string',
                  attrId: '484571',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'packageContent',
                  },
                  _codePath: ['packageContent'],
                  _idpath: ['484571'],
                },
                {
                  code: 'packageName',
                  name: '属性',
                  type: 'string',
                  attrId: '223243',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'packageName',
                  },
                  _codePath: ['packageName'],
                  _idpath: ['223243'],
                },
                {
                  code: 'orderType',
                  name: '属性',
                  type: 'string',
                  attrId: '491812',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'orderType',
                  },
                  _codePath: ['orderType'],
                  _idpath: ['491812'],
                },
                {
                  code: 'orderVersion',
                  name: '属性',
                  type: 'string',
                  attrId: '5670471',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'orderVersion',
                  },
                  _codePath: ['orderVersion'],
                  _idpath: ['5670471'],
                },
                {
                  code: 'tariff',
                  name: '属性',
                  type: 'string',
                  attrId: '6904047',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'tariff',
                  },
                  _codePath: ['tariff'],
                  _idpath: ['6904047'],
                },
                {
                  code: 'discount',
                  name: '属性',
                  type: 'string',
                  attrId: '616817',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'discount',
                  },
                  _codePath: ['discount'],
                  _idpath: ['616817'],
                },
                {
                  code: 'nums',
                  name: '属性',
                  type: 'string',
                  attrId: '390821',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'nums',
                  },
                  _codePath: ['nums'],
                  _idpath: ['390821'],
                },
                {
                  code: 'totalFee',
                  name: '属性',
                  type: 'string',
                  attrId: '053742',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                  value: {
                    type: ['form', 'Form_7980266', 'getFieldsValue'],
                    code: 'totalFee',
                  },
                  _codePath: ['totalFee'],
                  _idpath: ['053742'],
                },
                {
                  attrId: '85307',
                  code: 'unit',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['unit'],
                  _idpath: ['85307'],
                  value: { type: [], code: '' },
                },
                {
                  attrId: '4798206',
                  code: 'rowId',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['rowId'],
                  _idpath: ['4798206'],
                  value: { type: [], code: '' },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 170468211344298500,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '133075',
                  pageJsonId: '8430824',
                  actionTitle: '',
                  code: 'function main(data,state,success,fail){var oldRowId=data.feeInfo.rowId;if(state.feeInfo==undefined||state.feeInfo==null){var min=0;var max=10000;var rowId=Math.round(Math.random()*(max-min))+min;data.feeInfo.rowId=rowId}else{data.feeInfo.rowId=oldRowId}console.log("form:",Form_7980266);var form=Form_7980266;data.feeInfo.tariffAndUnit=form.tariff+" "+form.unit;success(data.feeInfo)};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'okCallbackData',
                    dataId: 170468211344283260,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '1009504',
                      pageJsonId: '8430824',
                      params: '$data_133075$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'closeModal',
                    dataId: 170468211344286460,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '953922',
                      pageJsonId: '8430824',
                    },
                    line_number: 5,
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm29.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm29, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal24: any = [
      {
        type: 'closeModal',
        dataId: '3594441_1',
        options: { compId: 'page', compName: 'page', id: '7285676' },
        line_number: 1,
      },
    ];
    eventDatacloseModal24.params = [] || [];
    CMDGenerator(eventDatacloseModal24, {}, 'closeModal', {
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
    const eventDataapiRequest232: any = [
      {
        type: 'apiRequest',
        dataId: 170324353578554240,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '83058011',
          pageJsonId: '8430824',
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
                      dataKey: '83058011_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
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
                      dataKey: '83058011_root.body.attrCode',
                      value: { type: ['customize'], code: 'packageContent' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '83058011_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
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
                  dataKey: '83058011_root.header',
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
                  dataKey: '83058011_root.path',
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
                  dataKey: '83058011_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '83058011_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170467990004291870,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '049179',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){var _reply_;var r=(_reply_=reply_83058011)===null||_reply_===void 0?void 0:_reply_.resultData;data.pageData.packageInfo=r;success()};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 170467991275764260,
                options: {
                  compId: 'Select_884095',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Select',
                  id: '467558',
                  data: '$reply_83058011?.resultData$',
                  labelKey: 'attrValueName',
                  valueKey: 'attrValue',
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
    eventDataapiRequest232.params = [] || [];
    CMDGenerator(eventDataapiRequest232, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest233: any = [
      {
        type: 'apiRequest',
        dataId: 170468436882303360,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '1280284',
          pageJsonId: '8430824',
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
                      dataKey: '1280284_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.catalogCode$'],
                        code: '',
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
                      dataKey: '1280284_root.body.attrCode',
                      value: { type: ['customize'], code: 'orderVersion' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '1280284_root.body',
                  key: '0-3',
                  parentType: 'object',
                  parentKey: '0',
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
                  dataKey: '1280284_root.header',
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
                  dataKey: '1280284_root.path',
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
                  dataKey: '1280284_root.query',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '1280284_root',
            },
          ],
        },
        line_number: 4,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 170468438216779870,
            options: {
              compId: 'Input_8904927',
              compLib: 'comm',
              pageJsonId: '8430824',
              compName: 'Select',
              id: '698621',
              data: '$reply_1280284?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 5,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest233.params = [] || [];
    CMDGenerator(eventDataapiRequest233, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse131: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '452131',
            options: { context: '$state.feeInfo$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167386144145118720,
        elseIfs: [],
        line_number: 6,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 170468282764722370,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '945211',
              pageJsonId: '8430824',
              code: 'function main(data,state,success,fail){data.feeInfo=state.feeInfo;success()};',
              actionTitle: '设置数据源值',
            },
            line_number: 7,
            callback1: [
              {
                type: 'setCurrentFormValues',
                dataId: 170468283248904350,
                options: {
                  compId: 'Form_7980266',
                  compLib: 'comm',
                  pageJsonId: '8430824',
                  compName: 'Form',
                  id: '2916685',
                  params: '$state.feeInfo$',
                },
                line_number: 8,
              },
            ],
            callback2: [],
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '074357',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.isDetails$',
                  operate: '==',
                  manualValue: 'true',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 169934962822190980,
            elseIfs: [],
            line_number: 9,
            callback1: [
              {
                type: 'sysSetDisable',
                dataId: 169934962822120320,
                options: {
                  compId: ['Form_981467', 'Form_7980266'],
                  compName: 'page',
                  id: '854506',
                  pageJsonId: '8430824',
                  disabled: 'true',
                  compid: ['Form_981467', 'Form_7980266'],
                },
                line_number: 10,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse131.params = [] || [];
    CMDGenerator(eventDataifelse131, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 170326943571530720
    console.log(state?.feeInfo);

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_8430824__"
    >
      <View
        className="View_View_8430824_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_8430824_1',
          uid: 'View_8430824_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_8430824_1')}
        {...injectData}
      >
        <View
          className="View_View_917911"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_917911',
            uid: 'View_917911',
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
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_917911')}
          {...injectData}
        >
          <Form
            name={'要素'}
            colSpan={12}
            labelCol={'8'}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_449441'}
            genRuleType={'key'}
            formType={'normal'}
            relationDataSource={data?.feeInfo}
            busiObjectId={''}
            formColumns={[
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '动作',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'action',
                  value: data?.factorForm?.action,
                  formItemIndex: 8,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_action_124461',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '代理商名称',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'agentName',
                  value: data?.factorForm?.agentName,
                  formItemIndex: 9,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_agentName_3011749',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '法人代表',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'legalRep',
                  value: data?.factorForm?.legalRep,
                  formItemIndex: 10,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_legalRep_4905766',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '续签合约日期',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'contractTime',
                  value: data?.factorForm?.contractTime,
                  formItemIndex: 11,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_contractTime_637706',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '电话',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'phone',
                  value: data?.factorForm?.phone,
                  formItemIndex: 12,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_phone_089928',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '代理业务范围',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'busiScope',
                  value: data?.factorForm?.busiScope,
                  formItemIndex: 13,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_busiScope_198144',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '业绩评估',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'performance',
                  value: data?.factorForm?.performance,
                  formItemIndex: 14,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_performance_8186807',
              },
              {
                label: '输入框',
                compName: 'Input',
                type: 'Input',
                compType: 2,
                compLib: 'comm',
                props: {
                  name: '申请原因',
                  basicStatus: 1,
                  size: 'default',
                  selfSpan: '',
                  labelCol: 8,
                  wrapperCol: 16,
                  titleTip: 'notext',
                  tipLocation: 'after',
                  tipContent: '',
                  tipPlacement: 'top',
                  prefixIconPosition: 'before',
                  postfix: '',
                  postfixIconPosition: 'before',
                  required: false,
                  placeholder: '请输入',
                  fieldName: 'reason',
                  value: data?.factorForm?.reason,
                  formItemIndex: 15,
                },
                style: {},
                isContainer: false,
                isBusiObjContainer: false,
                cmdgroup: ['basic'],
                platform: 'pc',
                icon: 'Input',
                description: '',
                image: '',
                groupsName: '数据录入',
                setEvents: [],
                busiObjectId: '',
                isLabelDropBoxChild: false,
                id: 'Input_reason_4525674',
              },
            ]}
            formItemIndex={1}
            $$componentItem={{
              id: 'Form_7980266',
              uid: 'Form_7980266',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource114: any = [
                {
                  type: 'setDataSource',
                  dataId: 170467931079868400,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '435672',
                    pageJsonId: '8430824',
                    dataSourceId: 166452624216490180,
                    dataSourceName: 'feeInfo',
                    dataSourceRelType: 'custom',
                    dataSourceReloadFilter: [],
                    dataSourceSetValue: [
                      {
                        code: 'packageContent',
                        name: '属性',
                        type: 'string',
                        attrId: '484571',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['packageContent'],
                        _idpath: ['484571'],
                      },
                      {
                        code: 'packageName',
                        name: '属性',
                        type: 'string',
                        attrId: '223243',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['packageName'],
                        _idpath: ['223243'],
                      },
                      {
                        code: 'orderType',
                        name: '属性',
                        type: 'string',
                        attrId: '491812',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['orderType'],
                        _idpath: ['491812'],
                      },
                      {
                        code: 'orderVersion',
                        name: '属性',
                        type: 'string',
                        attrId: '5670471',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['orderVersion'],
                        _idpath: ['5670471'],
                      },
                      {
                        code: 'tariff',
                        name: '属性',
                        type: 'string',
                        attrId: '6904047',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['tariff'],
                        _idpath: ['6904047'],
                      },
                      {
                        code: 'discount',
                        name: '属性',
                        type: 'string',
                        attrId: '616817',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['discount'],
                        _idpath: ['616817'],
                      },
                      {
                        code: 'nums',
                        name: '属性',
                        type: 'string',
                        attrId: '390821',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['nums'],
                        _idpath: ['390821'],
                      },
                      {
                        code: 'totalFee',
                        name: '属性',
                        type: 'string',
                        attrId: '053742',
                        initialData: { type: 'static', value: '' },
                        parentKey: '1',
                        parentType: 'object',
                        showInput: true,
                        _codePath: ['totalFee'],
                        _idpath: ['053742'],
                      },
                      {
                        attrId: '85307',
                        code: 'unit',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['unit'],
                        _idpath: ['85307'],
                      },
                      {
                        attrId: '4798206',
                        code: 'rowId',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        _codePath: ['rowId'],
                        _idpath: ['4798206'],
                      },
                    ],
                    onlySetPatch: true,
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource114.params =
                [
                  {
                    title: '表单当前改变字段编码',
                    name: 'changedFieldName',
                    value: '$changedFieldName$',
                  },
                  {
                    title: '表单当前改变字段值',
                    name: 'changedValue',
                    value: '$changedValue$',
                  },
                ] || [];
              CMDGenerator(
                eventDatasetDataSource114,
                { changedFieldName, changedValue },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_7980266')}
            {...injectData}
          >
            <Select
              name={'套餐内容'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'packageContent'}
              formItemIndex={0}
              allowClear={false}
              $$componentItem={{
                id: 'Select_884095',
                uid: 'Select_884095',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatagetValue173: any = [
                  {
                    type: 'getValue',
                    dataId: 170468011821077500,
                    options: {
                      compId: 'Select_884095',
                      compLib: 'comm',
                      pageJsonId: '8430824',
                      compName: 'Select',
                      id: '6771689',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 170468012569165600,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '771925',
                          pageJsonId: '8430824',
                          code: 'function main(data,state,success,fail){var sel=value_6771689;var packageInfo=data.pageData.packageInfo;var selectedPackage=packageInfo.find(function(info){return info.attrValue===String(sel)});var unit=selectedPackage?selectedPackage.attrValueDesc:"";success(unit)};',
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 170468268077741150,
                            options: {
                              compId: 'Input_384667',
                              compLib: 'comm',
                              pageJsonId: '8430824',
                              compName: 'Input',
                              id: '0651792',
                              valueList: { Input_384667: '$data_771925$' },
                            },
                            line_number: 3,
                            callback1: [],
                          },
                          {
                            type: 'setDataSource',
                            dataId: 170468291047496640,
                            options: {
                              compId: 'setDataSource',
                              compName: 'page',
                              id: '217363',
                              pageJsonId: '8430824',
                              dataSourceId: 166452624216490180,
                              dataSourceName: 'feeInfo',
                              dataSourceRelType: 'custom',
                              dataSourceSetValue: [
                                {
                                  code: 'packageContent',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '484571',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'packageName',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '223243',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'orderType',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '491812',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'orderVersion',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '5670471',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'tariff',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '6904047',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'discount',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '616817',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'nums',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '390821',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  code: 'totalFee',
                                  name: '属性',
                                  type: 'string',
                                  attrId: '053742',
                                  initialData: { type: 'static', value: '' },
                                  parentKey: '1',
                                  parentType: 'object',
                                  showInput: true,
                                },
                                {
                                  attrId: '85307',
                                  code: 'unit',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                  value: {
                                    type: ['context', '$data_771925$'],
                                    code: '',
                                  },
                                },
                                {
                                  attrId: '4798206',
                                  code: 'rowId',
                                  name: '属性',
                                  type: 'string',
                                  initialData: { type: 'static' },
                                  showInput: true,
                                },
                              ],
                              operateType: 1,
                              onlySetPatch: true,
                              otherObjectArrayOptions: {},
                              targetDataSourcePaths: [],
                            },
                            line_number: 4,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ];
                eventDatagetValue173.params =
                  [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                CMDGenerator(eventDatagetValue173, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Select_884095')}
              {...injectData}
            />
            <Input
              name={'产品包名称'}
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
              fieldName={'packageName'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={1}
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
                id: 'Input_5642353',
                uid: 'Input_5642353',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_5642353')}
              {...injectData}
            />
            <Input
              name={'订购类型'}
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
              fieldName={'orderType'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={2}
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
                id: 'Input_899682',
                uid: 'Input_899682',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_899682')}
              {...injectData}
            />
            <Select
              name={'订购版本'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'orderVersion'}
              formItemIndex={3}
              $$componentItem={{
                id: 'Input_8904927',
                uid: 'Input_8904927',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_8904927')}
              {...injectData}
            />
            <Input
              name={'资费'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={data?.feeInfo?.unit}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'tariff'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={4}
              regexp={[
                {
                  id: '13987',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_522238',
                uid: 'Input_522238',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc373: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 17046786735145824,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '4107779',
                      pageJsonId: '8430824',
                      customFuncName: 'caluZ',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc373.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc373, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_522238')}
              {...injectData}
            />
            <Input
              name={'折扣'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'折'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'discount'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={5}
              regexp={[
                {
                  id: '735214',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
                  pattern: '/^[1-9]\\d*$/',
                },
                {
                  id: '3521505',
                  title: '按钮2',
                  iconPos: 'left',
                  regexpType: 2,
                  message: '请输入大于0且最多2位小数的数',
                  pattern:
                    '/^([1-9]\\d*(\\.\\d{0,2})?|([0](\\.([0][1-9]|[1-9]\\d{0,1}))))$/',
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
                id: 'Input_69556',
                uid: 'Input_69556',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_69556')}
              {...injectData}
            />
            <Input
              name={'数量'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={'个'}
              postfixIconPosition={'before'}
              required={true}
              placeholder={'请输入'}
              fieldName={'nums'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={6}
              regexp={[
                {
                  id: '832074',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入正整数',
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
                id: 'Input_447768',
                uid: 'Input_447768',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc374: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 170467867995629300,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '298558',
                      pageJsonId: '8430824',
                      customFuncName: 'caluZ',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc374.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc374, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_447768')}
              {...injectData}
            />
            <Input
              name={'总费用'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              fieldName={'totalFee'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={7}
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
                id: 'Input_310029',
                uid: 'Input_310029',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_310029')}
              {...injectData}
            />
            <Input
              name={'单位'}
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
              placeholder={'请输入'}
              fieldName={'unit'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={8}
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
                id: 'Input_384667',
                uid: 'Input_384667',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc375: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 170467867995629300,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '298558',
                      pageJsonId: '8430824',
                      customFuncName: 'caluZ',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc375.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc375, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_384667')}
              {...injectData}
            />
            <Input
              name={'行ID'}
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
              placeholder={'请输入'}
              fieldName={'rowId'}
              hidden={false}
              showMore={false}
              defaultValue={null}
              attr={{}}
              formItemIndex={9}
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
                id: 'Input_8125177',
                uid: 'Input_8125177',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatacallSelfFunc376: any = [
                  {
                    type: 'callSelfFunc',
                    dataId: 170467867995629300,
                    options: {
                      compId: 'callSelfFunc',
                      compName: 'system',
                      id: '298558',
                      pageJsonId: '8430824',
                      customFuncName: 'caluZ',
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacallSelfFunc376.params =
                  [
                    {
                      title: '输入框取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatacallSelfFunc376, { e }, 'callSelfFunc', {
                  id: 'callSelfFunc',
                  name: 'callSelfFunc',
                  type: 'callSelfFunc',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Input_8125177')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(NetworkAcrossProvincecopy2copycopy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    popType: '',
    feeInfo: '',
    catalogCode: '',
    isDetails: '',
  },
});
