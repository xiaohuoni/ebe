// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Form,
  Checkbox,
  Input,
  Select,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '967978554997317632';
const ClsCp_0002_0020$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_869797: any) => {
    const eventDatacustomActionCode160: any = [
      {
        type: 'customActionCode',
        dataId: 168595631777764640,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '798935',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_3216586;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168595631777769820,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '0050664',
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
    eventDatacustomActionCode160.params =
      [
        {
          title: '事件入参',
          name: 'options_869797',
          value: '$options_869797$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode160,
      { options_869797 },
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
    const eventDataapiRequest455: any = [
      {
        type: 'apiRequest',
        dataId: 168257998202563100,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '869493',
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
                  dataKey: '869493_root.header',
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
                  dataKey: '869493_root.path',
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
                  dataKey: '869493_root.query',
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
                      dataKey: '869493_root.body.catalogCode',
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
                      dataKey: '869493_root.body.attrCode',
                      value: { type: ['customize'], code: 'customerSource' },
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  id: 'root.body',
                  dataKey: '869493_root.body',
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
              dataKey: '869493_root',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168265130323909760,
            shielding: true,
            options: {
              compId: 'Input_161704',
              compLib: 'comm',
              pageJsonId: '721399',
              compName: 'Select',
              id: '007625',
              data: '$reply_869493?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'console',
            dataId: 168258067291975170,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '7357',
              pageJsonId: '721399',
              value: ['test-----------', '$reply_869493?.resultData$'],
            },
            line_number: 3,
          },
          {
            type: 'reloadSelectData',
            dataId: 169016783610339840,
            options: {
              compId: 'Select_7117554',
              compLib: 'comm',
              pageJsonId: '721399',
              compName: 'Select',
              id: '390236',
              data: '$reply_869493?.resultData$',
              valueKey: 'attrValue',
              labelKey: 'attrValueName',
            },
            line_number: 4,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest455.params = [] || [];
    CMDGenerator(eventDataapiRequest455, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatacustomActionCode274: any = [
      {
        type: 'customActionCode',
        dataId: 168258123496256480,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '547989',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var form={};if(itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){form[itemList.attrList[i].attrCode]=itemList.attrList[i].attrValue}}success(form)};',
        },
        line_number: 5,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168258123496249120,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '826933',
              pageJsonId: '7946678',
              dataSourceId: 168239043803725220,
              dataSourceName: '$dataform',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '801147',
                  code: 'ctGroupCode',
                  name: 'CT集团编码',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_547989$'],
                    code: 'ctGroupCode',
                  },
                  _codePath: ['ctGroupCode'],
                  _idpath: ['801147'],
                },
                {
                  attrId: '3620025',
                  code: 'ordSerialNum',
                  name: '订单流水',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_547989$'],
                    code: 'ordSerialNum',
                  },
                  _codePath: ['ordSerialNum'],
                  _idpath: ['3620025'],
                },
                {
                  attrId: '356452',
                  code: 'customerSource',
                  name: '客户来源',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  value: {
                    type: ['context', '$data_547989$'],
                    code: 'customerSource',
                  },
                  _codePath: ['customerSource'],
                  _idpath: ['356452'],
                },
                {
                  attrId: '1711324',
                  code: 'expTime',
                  name: '失效时间',
                  type: 'date',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['expTime'],
                  _idpath: ['1711324'],
                  value: {
                    type: ['context', '$data_547989$'],
                    code: 'effTime',
                  },
                },
                {
                  attrId: '2721423',
                  code: 'effTime',
                  name: '生效时间',
                  type: 'date',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['effTime'],
                  _idpath: ['2721423'],
                  value: {
                    type: ['context', '$data_547989$'],
                    code: 'expTime',
                  },
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 6,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168258123496240500,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '4333895',
              pageJsonId: '7946678',
              value: ['$data_547989$'],
            },
            line_number: 7,
          },
          {
            type: 'setValue',
            dataId: 168258123496229220,
            options: {
              compId: ['Input_516173'],
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Input',
              id: '107343',
              value: '$state.itemList.approveGradeName$',
              valueList: { Input_516173: '$state.itemList.approveGradeName$' },
              compid: ['Input_516173'],
            },
            line_number: 8,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode274.params = [] || [];
    CMDGenerator(eventDatacustomActionCode274, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatacustomActionCode275: any = [
      {
        type: 'customActionCode',
        dataId: 168482569364298750,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '616089',
          pageJsonId: '7946678',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;var fileInfo=itemList.fileInfo;success(fileInfo)};',
        },
        line_number: 9,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 168482569364285700,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '3642074',
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
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
                    type: ['context', '$data_616089$'],
                    code: 'fileTypeName',
                  },
                },
              ],
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
              newData: '$data_616089$',
            },
            line_number: 10,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 168482569364296060,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '545871',
              pageJsonId: '7946678',
              value: ['file', '$data_616089$'],
            },
            line_number: 11,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode275.params = [] || [];
    CMDGenerator(eventDatacustomActionCode275, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetTimer6: any = [
      {
        type: 'setTimer',
        dataId: 168551621209125760,
        options: {
          compId: 'setTimer',
          compName: 'system',
          id: '5291384',
          pageJsonId: '841291',
          interval: 100,
          type: 'timeout',
        },
        line_number: 12,
        callback1: [
          {
            type: 'callCustomPageFunc',
            dataId: 168551621209158940,
            shielding: true,
            options: {
              compId: 'callCustomPageFunc',
              compName: 'system',
              id: '749059',
              pageJsonId: '841291',
              pathname: '/flow/audit',
              pageId: '874567207627108352',
              modalPath: '/flow/audit',
              customFuncName: 'hidePreviousStep',
            },
            line_number: 13,
            callback1: [],
            callback2: [],
          },
          {
            type: 'customActionCode',
            dataId: 168835382598645100,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '399394',
              pageJsonId: '841291',
              code: 'function main(data,state,success,fail){var tacheCode=state.tacheCode;if(tacheCode=="APPLY_CREATE"){success(state)}};',
            },
            line_number: 14,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 168835382598660480,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '425676',
                  pageJsonId: '841291',
                  pathname: '/flow/audit',
                  pageId: '874567207627108352',
                  modalPath: '/flow/audit',
                  customFuncName: 'disableSubmit',
                },
                line_number: 15,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDatasetTimer6.params = [] || [];
    CMDGenerator(eventDatasetTimer6, {}, 'setTimer', {
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
      className="__CustomClass_721399__"
    >
      <View
        className="View_View_721399_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_721399_1',
          uid: 'View_721399_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_721399_1')}
        {...injectData}
      >
        <View
          className="View_View_412419"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_412419',
            uid: 'View_412419',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_412419')}
          {...injectData}
        >
          <Divider
            name={'分割线'}
            orientation={'center'}
            type={'horizontal'}
            dashed={false}
            dividerText={'高速精品套餐订购白名单'}
            showTitle={true}
            $$componentItem={{
              id: 'Divider_314592',
              uid: 'Divider_314592',
              type: 'Divider',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '12px 0 12px 0', height: 'auto' }}
            ref={(r: any) => refs.setComponentRef(r, 'Divider_314592')}
            {...injectData}
          />
          <View
            className="View_View_486262"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_486262',
              uid: 'View_486262',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_486262')}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              formItemIndex={0}
              $$componentItem={{
                id: 'HorizontalView_399328',
                uid: 'HorizontalView_399328',
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
              ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_399328')}
              {...injectData}
            >
              <View
                className="View_View_666337"
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_666337',
                  uid: 'View_666337',
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
                ref={(r: any) => refs.setComponentRef(r, 'View_666337')}
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
                    id: 'Form_605849',
                    uid: 'Form_605849',
                    type: 'Form',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ padding: '0px 0px 0px 0px' }}
                  ref={(r: any) => refs.setComponentRef(r, 'Form_605849')}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    text={'高速精品套餐订购白名单'}
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
                      id: 'Checkbox_450985',
                      uid: 'Checkbox_450985',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Checkbox_450985')}
                    {...injectData}
                  />
                  <View
                    className="View_View_7073246"
                    name={'布局容器'}
                    labelCol={8}
                    wrapperCol={16}
                    backgroundType={{ type: 'cleanColor', color: undefined }}
                    $$componentItem={{
                      id: 'View_7073246',
                      uid: 'View_7073246',
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
                    ref={(r: any) => refs.setComponentRef(r, 'View_7073246')}
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
                      id: 'Input_516173',
                      uid: 'Input_516173',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={true}
                    visible={true}
                    readOnly={false}
                    isFormRootChild={true}
                    ref={(r: any) => refs.setComponentRef(r, 'Input_516173')}
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
              id: 'Form_33944',
              uid: 'Form_33944',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_33944')}
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
                id: 'Input_793418',
                uid: 'Input_793418',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_793418')}
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
                id: 'Input_5671474',
                uid: 'Input_5671474',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_5671474')}
              {...injectData}
            />
            <Select
              name={'客户来源'}
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
              fieldName={'customerSource'}
              value={data?.$dataform?.customerSource}
              formItemIndex={2}
              $$componentItem={{
                id: 'Select_7117554',
                uid: 'Select_7117554',
                type: 'Select',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Select_7117554')}
              {...injectData}
            />
            <Input
              name={'生效时间'}
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
              formItemIndex={3}
              fieldName={'effTime'}
              value={data?.$dataform?.effTime}
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
                id: 'Input_9732016',
                uid: 'Input_9732016',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_9732016')}
              {...injectData}
            />
            <Input
              name={'失效时间'}
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
              formItemIndex={4}
              fieldName={'expTime'}
              value={data?.$dataform?.expTime}
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
                id: 'Input_552616',
                uid: 'Input_552616',
                type: 'Input',
                ...componentItem,
              }}
              disabled={true}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_552616')}
              {...injectData}
            />
          </Form>
          <BusiComp0521965
            pageId={pageId}
            busiCompId={'922396081753948160'}
            name={'附件'}
            formItemIndex={2}
            busiCompStates={{
              catalogCode: state?.catalogCode,
              scene: state?.scene,
              fileList: state?.itemList?.fileInfo,
            }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_285298')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsCp_0002_0020$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
