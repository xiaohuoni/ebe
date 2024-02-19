// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Checkbox,
  Divider,
  Form,
  HorizontalView,
  Input,
  Select,
  Table,
  View,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const ClsCp_0002_0012$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_018995: any) => {
    const eventDatacustomActionCode78: any = [
      {
        type: 'customActionCode',
        dataId: 168595607759639230,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '575562',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168595607759619620,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '8304',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode78.params =
      [
        {
          title: '事件入参',
          name: 'options_018995',
          value: '$options_018995$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode78,
      { options_018995 },
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
    fileUpload,
  }));

  useEffect(() => {
    const eventDataifelse132: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '989006',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168241106210790620,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 168265049313904770,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '7902557',
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
                      code: 'header',
                      name: '请求头参数',
                      attrType: 'object',
                      _id: 'root.header',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.header',
                      dataKey: '7902557_root.header',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-0',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'root.path',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.path',
                      dataKey: '7902557_root.path',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-1',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'root.query',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.query',
                      dataKey: '7902557_root.query',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-2',
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
                          _id: 'root.body.catalogCode',
                          compType: 'Input',
                          name: 'catalogCode',
                          parents: ['root', 'body'],
                          id: 'root.body.catalogCode',
                          dataKey: '7902557_root.body.catalogCode',
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
                          dataKey: '7902557_root.body.attrCode',
                          value: { type: ['customize'], code: 'approveType' },
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'root.body',
                      dataKey: '7902557_root.body',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '7902557_root',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'reloadSelectData',
                dataId: 168265147399439740,
                shielding: true,
                options: {
                  compId: 'Input_496874',
                  compLib: 'comm',
                  pageJsonId: '3525173',
                  compName: 'Select',
                  id: '834513',
                  labelKey: 'attrValueName',
                  valueKey: 'attrValue',
                  data: '$reply_7902557?.resultData$',
                },
                line_number: 3,
                callback1: [],
              },
              {
                type: 'console',
                dataId: 168265049313971840,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '129388',
                  pageJsonId: '721399',
                  value: ['TEST', '$reply_7902557?.resultData$'],
                },
                line_number: 4,
              },
              {
                type: 'reloadSelectData',
                dataId: 169016887291778780,
                options: {
                  compId: 'Select_9125551',
                  compLib: 'comm',
                  pageJsonId: '3525173',
                  compName: 'Select',
                  id: '929794',
                  data: '$reply_7902557?.resultData$',
                  valueKey: 'attrValue',
                  labelKey: 'attrValueName',
                },
                line_number: 5,
                callback1: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 168241118821180220,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '264502',
              pageJsonId: '7946678',
              code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}data.$dataform=form;var $productList=[];itemList.instList.forEach(function(v){var feeObj={};var instList=v.instAttrList;if(instList!=undefined&&instList.length>0){for(var i=0;i<instList.length;i++){feeObj[instList[i].attrCode]=instList[i].attrValue;var attrCode=instList[i].attrCode;var attrValue=instList[i].attrValue;if(attrCode=="realRevenuePrice"||attrCode=="provinceDiscountBottom"||attrCode=="groupDiscountBottom"){feeObj[instList[i].attrCode]=(parseFloat(attrValue)/100).toFixed(2)}}feeObj.rowId=v.instCode;$productList.push(feeObj)}});data.$productList=$productList;success($productList)};',
            },
            line_number: 6,
            callback1: [
              {
                type: 'setValue',
                dataId: 168241393432914050,
                options: {
                  compId: ['Input_843538'],
                  compLib: 'comm',
                  pageJsonId: '537892',
                  compName: 'Input',
                  id: '08358215',
                  value: '$state.itemList.approveGradeName$',
                  valueList: {
                    Input_843538: '$state.itemList.approveGradeName$',
                  },
                  compid: ['Input_843538'],
                },
                line_number: 7,
                callback1: [],
              },
              {
                type: 'setDataSource',
                dataId: 168241118821106430,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '443413',
                  pageJsonId: '7946678',
                  dataSourceId: 168223503055572900,
                  dataSourceName: '$dataform',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '816499',
                      code: 'ctGroupCode',
                      name: 'CT集团编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_264502$'],
                        code: 'ctGroupCode',
                      },
                    },
                    {
                      attrId: '489274',
                      code: 'ordSerialNum',
                      name: '订单流水',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_264502$'],
                        code: 'ordSerialNum',
                      },
                    },
                    {
                      attrId: '542031',
                      code: 'benefitRatio',
                      name: '效益比',
                      type: 'number',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_264502$'],
                        code: 'benefitRatio',
                      },
                    },
                    {
                      attrId: '8995205',
                      code: 'projectName',
                      name: '项目名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_264502$'],
                        code: 'projectName',
                      },
                    },
                    {
                      attrId: '139548',
                      code: 'projectSignDate',
                      name: '项目签订日期',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_264502$'],
                        code: 'projectSignDate',
                      },
                    },
                    {
                      attrId: '6420015',
                      code: 'approveType',
                      name: '审批类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_264502$'],
                        code: 'approveType',
                      },
                    },
                    {
                      attrId: '59828',
                      code: 'openCardAllowMaxNum',
                      name: '开卡允许最大数量',
                      type: 'number',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: {
                        type: ['context', '$data_264502$'],
                        code: 'openCardAllowMaxNum',
                      },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 8,
                callback1: [],
                callback2: [],
              },
              {
                type: 'console',
                dataId: 168241118821127900,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '195948',
                  pageJsonId: '7946678',
                  value: ['$data_264502$'],
                },
                line_number: 9,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse132.params = [] || [];
    CMDGenerator(eventDataifelse132, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatacustomActionCode245: any = [
      {
        type: 'customActionCode',
        dataId: 168482558123460450,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '0661987',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var fileInfo=itemList.fileInfo;success(fileInfo)};',
        },
        line_number: 10,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168482558123457250,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '888317',
              pageJsonId: '7946678',
              dataSourceId: 168239016010182340,
              dataSourceName: 'fileInfoList',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'fileName',
                  name: '属性',
                  type: 'string',
                  attrId: '211202',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'fileName',
                  },
                },
                {
                  code: 'filePath',
                  name: '属性',
                  type: 'string',
                  attrId: '799282',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'filePath',
                  },
                },
                {
                  code: 'fileServerType',
                  name: '属性',
                  type: 'string',
                  attrId: '0985954',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'fileServerType',
                  },
                },
                {
                  code: 'fileSubType',
                  name: '属性',
                  type: 'string',
                  attrId: '15741',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'fileSubType',
                  },
                },
                {
                  code: 'fileType',
                  name: '属性',
                  type: 'string',
                  attrId: '191375',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'fileType',
                  },
                },
                {
                  code: 'fileUrl',
                  name: '属性',
                  type: 'string',
                  attrId: '414466',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'fileUrl',
                  },
                },
                {
                  code: 'tacheCode',
                  name: '属性',
                  type: 'string',
                  attrId: '97181',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'tacheCode',
                  },
                },
                {
                  code: 'fileCode',
                  name: '属性',
                  type: 'string',
                  attrId: '5021635',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'fileCode',
                  },
                },
                {
                  code: 'createTime',
                  name: '属性',
                  type: 'string',
                  attrId: '908357',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'createTime',
                  },
                },
                {
                  code: 'createStaff',
                  name: '属性',
                  type: 'string',
                  attrId: '867941',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'createStaff',
                  },
                },
                {
                  code: 'fileTypeName',
                  name: '属性',
                  type: 'string',
                  attrId: '529226',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: false,
                  value: {
                    type: ['context', '$data_0661987$'],
                    code: 'fileTypeName',
                  },
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
              newData: '$data_0661987$',
            },
            line_number: 11,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168482558123451230,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '195017',
              pageJsonId: '7946678',
              value: ['file', '$data_0661987$'],
            },
            line_number: 12,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode245.params = [] || [];
    CMDGenerator(eventDatacustomActionCode245, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetTimer1: any = [
      {
        type: 'setTimer',
        dataId: 168551566587184700,
        options: {
          compId: 'setTimer',
          compName: 'system',
          id: '048875',
          pageJsonId: '841291',
          interval: 100,
          type: 'timeout',
        },
        line_number: 13,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168551566587197380,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '30529',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'hidePreviousStep',
            },
            line_number: 14,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 168835378344176800,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '978599',
              pageJsonId: '841291',
              code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
            },
            line_number: 15,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 168835378344124220,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '633571',
                  pageJsonId: '841291',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'disableSubmit',
                },
                line_number: 16,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatasetTimer1.params = [] || [];
    CMDGenerator(eventDatasetTimer1, {}, 'setTimer', {
      id: 'setTimer',
      name: 'setTimer',
      type: 'setTimer',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_3525173__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_3525173_1',
          uid: 'View_3525173_1',
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
        ref={(r: any) => (refs['View_3525173_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_101684',
            uid: 'View_101684',
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
          ref={(r: any) => (refs['View_101684'] = r)}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'CMIOT系统项目折扣'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_3483624',
              uid: 'Divider_3483624',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => (refs['Divider_3483624'] = r)}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_660688',
              uid: 'View_660688',
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
              overflowY: 'hidden',
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => (refs['View_660688'] = r)}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_035625',
                uid: 'HorizontalView_035625',
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
                height: 'auto',
                overflowY: 'hidden',
                margin: '0px 0px 0px 0px',
              }}
              ref={(r: any) => (refs['HorizontalView_035625'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_422244',
                  uid: 'View_422244',
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
                  height: 'auto',
                  overflowY: 'hidden',
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => (refs['View_422244'] = r)}
                {...injectData}
              >
                <Form
                  name={'表单'}
                  colSpan={8}
                  labelCol={8}
                  wrapperCol={16}
                  colon={true}
                  layout={'horizontal'}
                  labelAlign={'right'}
                  header={'标题'}
                  colSpace={0}
                  rowSpace={16}
                  formCode={'Form_4311097'}
                  $$componentItem={{
                    id: 'Form_5434704',
                    uid: 'Form_5434704',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => (refs['Form_5434704'] = r)}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'CMIOT系统项目折扣'}
                    selfSpan={8}
                    labelCol={8}
                    wrapperCol={16}
                    formItemIndex={0}
                    fieldName={'aduitClass'}
                    defaultChecked={true}
                    tipIcon={{
                      theme: 'outlined',
                      type: 'question-circle',
                      isIconFont: false,
                    }}
                    tipContent={data?.sceneSubmit?.childCatalogDesc}
                    $$componentItem={{
                      id: 'Checkbox_628717',
                      uid: 'Checkbox_628717',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Checkbox_628717'] = r)}
                    {...injectData}
                  />
                  <View
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_28035',
                      uid: 'View_28035',
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
                        formItemIndex: 1,
                        style: undefined,
                        selfSpan: undefined,
                      },
                    }}
                    style={{
                      textAlign: 'left',
                      display: 'block',
                      flexDirection: 'column',
                      padding: '0px 0px 0px 0px',
                      width: '100%',
                    }}
                    ref={(r: any) => (refs['View_28035'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'场景最高审批等级'}
                    size={'default'}
                    selfSpan={8}
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
                    fieldName={'auditClass'}
                    formItemIndex={2}
                    className={'fixed-form-item-label-width-150'}
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
                      id: 'Input_843538',
                      uid: 'Input_843538',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => (refs['Input_843538'] = r)}
                    {...injectData}
                  />
                </Form>
              </View>
            </HorizontalView>
          </View>
          <Form
            name={'表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_1354964'}
            fieldName={'$dataform'}
            relationDataSource={data?.$dataform}
            busiObjectId={''}
            $$componentItem={{
              id: 'Form_952215',
              uid: 'Form_952215',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_952215'] = r)}
            {...injectData}
          >
            <Input
              name={'CT集团编码'}
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
              formItemIndex={0}
              fieldName={'ctGroupCode'}
              value={data?.$dataform?.ctGroupCode}
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
                id: 'Input_3941104',
                uid: 'Input_3941104',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_3941104'] = r)}
              {...injectData}
            />
            <Input
              name={'订单流水'}
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
              formItemIndex={1}
              fieldName={'ordSerialNum'}
              value={data?.$dataform?.ordSerialNum}
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
                id: 'Input_907797',
                uid: 'Input_907797',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_907797'] = r)}
              {...injectData}
            />
            <Input
              name={'效益比'}
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
              formItemIndex={2}
              fieldName={'benefitRatio'}
              value={data?.$dataform?.benefitRatio}
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
                id: 'Input_1238246',
                uid: 'Input_1238246',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_1238246'] = r)}
              {...injectData}
            />
            <Input
              name={'项目名称'}
              size={'default'}
              selfSpan={16}
              labelCol={'8'}
              wrapperCol={'20'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'projectName'}
              value={data?.$dataform?.projectName}
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
                id: 'Input_844167',
                uid: 'Input_844167',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_844167'] = r)}
              {...injectData}
            />
            <Input
              name={'项目签订日期'}
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
              formItemIndex={4}
              fieldName={'projectSignDate'}
              value={data?.$dataform?.projectSignDate}
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
                id: 'Input_748742',
                uid: 'Input_748742',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_748742'] = r)}
              {...injectData}
            />
            <Select
              name={'审批类型'}
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
              fieldName={'approveType'}
              value={data?.$dataform?.approveType}
              formItemIndex={5}
              $$componentItem={{
                id: 'Select_9125551',
                uid: 'Select_9125551',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Select_9125551'] = r)}
              {...injectData}
            />
            <Input
              name={'开卡允许最大数量'}
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
              formItemIndex={6}
              fieldName={'openCardAllowMaxNum'}
              value={data?.$dataform?.openCardAllowMaxNum}
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
                id: 'Input_97914',
                uid: 'Input_97914',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_97914'] = r)}
              {...injectData}
            />
          </Form>
          <Table
            name={'表格'}
            isFlexColumn={false}
            pageSize={10}
            current={1}
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
                title: '产品名称',
                dataIndex: 'prodName',
                key: 'column1',
                className: '',
                id: '495838',
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
                title: '套餐',
                dataIndex: 'offerName',
                key: 'column2',
                className: 'divider',
                id: '40589',
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
                title: '标准资费(元)',
                dataIndex: 'standardTariff',
                key: 'column3',
                className: 'divider',
                id: '918226',
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
                title: '集团折扣底线(%)',
                dataIndex: 'groupDiscountBottom',
                key: 'column4',
                className: 'divider',
                id: '005591',
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
                title: '省公司折扣底线(%)',
                dataIndex: 'provinceDiscountBottom',
                key: 'column5',
                className: 'divider',
                id: '999555',
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
                title: '实收价(元)',
                dataIndex: 'realRevenuePrice',
                key: 'column6',
                className: 'divider',
                id: '470994',
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
            rowKeyType={'auto'}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={true}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.$productList}
            fieldName={'data.MemberInfo.length'}
            total={data?.MemberInfo?.length}
            hiddenAction={true}
            rowKey={'rowId'}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '621807',
                checked: true,
              },
            ]}
            extend={[]}
            formItemIndex={7}
            labels={[]}
            dataSourceFromDataSourceConfig={'data.$productList;'}
            $$componentItem={{
              id: 'Table_311303',
              uid: 'Table_311303',
              type: 'Table',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '10px 0px 10px 0px' }}
            onRowDetail={(rowId: any, row: any, index: any) => {}}
            onRowEdit={(rowId: any, row: any, index: any) => {}}
            ref={(r: any) => (refs['Table_311303'] = r)}
            {...injectData}
          />
          <BusiComp0521965
            busiCompId={'922396081753948160'}
            name={'附件'}
            formItemIndex={2}
            busiCompStates={{
              catalogCode: state?.catalogCode,
              scene: state?.scene,
              fileList: state?.itemList?.fileInfo,
            }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => (refs['BOFramer_341445'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0012$$Page, {
  pageId: '967325069918314496',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
