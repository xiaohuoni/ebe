// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Select, Input } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '981367920350507008';
const Chanpinxinxi2777$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm38: any = [
      {
        type: 'validateCurrentForm',
        dataId: 168568671342241150,
        options: {
          compId: 'Form_3914687',
          compLib: 'comm',
          pageJsonId: '155171',
          compName: 'Form',
          id: '832527',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 168568854934580830,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '427385',
              pageJsonId: '155171',
              code: 'function main(data,state,success,fail){var prodInfo=state.prodInfo;var finalData=Form_3914687;if(!!prodInfo){finalData.rowId=prodInfo.rowId}success(finalData)};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'okCallbackData',
                dataId: 168568875611155550,
                options: {
                  compId: 'okCallbackData',
                  compName: 'page',
                  id: '679537',
                  pageJsonId: '155171',
                  params: '$data_427385$',
                },
                line_number: 3,
              },
              {
                type: 'closeModal',
                dataId: 168569121220741900,
                options: { compId: 'page', compName: 'page', id: '3116213' },
                line_number: 4,
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm38.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm38, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal34: any = [
      {
        type: 'closeModal',
        dataId: '935423_1',
        options: { compId: 'page', compName: 'page', id: '0690313' },
        line_number: 1,
      },
    ];
    eventDatacloseModal34.params = [] || [];
    CMDGenerator(eventDatacloseModal34, {}, 'closeModal', {
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
    const eventDataapiRequest297: any = [
      {
        type: 'apiRequest',
        dataId: 168567644644986750,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '3055598',
          pageJsonId: '155171',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _sourceName: '查询场景规格属性值列表-tsm',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表-tsm: qryCatalogAttrValueList',
          valueType: 'object',
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
                  dataKey: '3055598_root.header',
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
                  dataKey: '3055598_root.path',
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
                  dataKey: '3055598_root.query',
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
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-0',
                      id: 'root.body.catalogCode',
                      dataKey: '3055598_root.body.catalogCode',
                      value: {
                        type: ['context', '$state.sceneCode$'],
                        code: '',
                      },
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
                      parentType: 'object',
                      parentKey: '0-3',
                      key: '0-3-1',
                      id: 'root.body.attrCode',
                      dataKey: '3055598_root.body.attrCode',
                      value: { type: ['customize'], code: 'productName' },
                    },
                  ],
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '3055598_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '3055598_root',
            },
          ],
          params: 'object',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 168567652171117500,
            options: {
              compId: 'Select_0358282',
              compLib: 'comm',
              pageJsonId: '155171',
              compName: 'Select',
              id: '28993775',
              data: '$reply_3055598?.resultData$',
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
    eventDataapiRequest297.params = [] || [];
    CMDGenerator(eventDataapiRequest297, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse158: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '950817',
            options: { context: '$state.prodInfo$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168568664058115620,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 168568668892200930,
            options: {
              compId: 'Form_3914687',
              compLib: 'comm',
              pageJsonId: '155171',
              compName: 'Form',
              id: '749005',
              params: '$state.prodInfo$',
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDataifelse158.params = [] || [];
    CMDGenerator(eventDataifelse158, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse159: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '468417',
            options: {
              useManual: true,
              context: '$state.belongingCity$',
              operate: '==',
              manualValue: '598',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168595864470094370,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'setRequired',
            dataId: 168595867026922180,
            options: {
              compId: 'Input_5806962',
              compLib: 'comm',
              pageJsonId: '155171',
              compName: 'Input',
              id: '992287',
              required: 'true',
            },
            line_number: 6,
          },
        ],
      },
    ];
    eventDataifelse159.params = [] || [];
    CMDGenerator(eventDataifelse159, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_155171__"
    >
      <View
        className="View_View_155171_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_155171_1',
          uid: 'View_155171_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_155171_1')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={12}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_3914687'}
          $$componentItem={{
            id: 'Form_3914687',
            uid: 'Form_3914687',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_3914687')}
          {...injectData}
        >
          <Select
            name={'产品'}
            size={'default'}
            selfSpan={12}
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
            formItemIndex={0}
            fieldName={'productName'}
            $$componentItem={{
              id: 'Select_0358282',
              uid: 'Select_0358282',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_0358282')}
            {...injectData}
          />
          <Input
            name={'条数'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'条'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={1}
            fieldName={'count'}
            regexp={[
              {
                id: '470197',
                title: '按钮1',
                iconPos: 'left',
                regexpType: 2,
                message: '请输入大于等于0的整数',
                pattern: '/^(([1-9]{1}\\d*)|(0{1}))$/',
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
              id: 'Input_771387',
              uid: 'Input_771387',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_771387')}
            {...injectData}
          />
          <Input
            name={'安装费实收'}
            size={'default'}
            selfSpan={12}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'元/条'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={2}
            fieldName={'actualPaymentOfInstallationFee'}
            regexp={[
              {
                id: '0605978',
                title: '按钮1',
                iconPos: 'left',
                regexpType: 2,
                message: '请输入大于等于0且最多2位小数的数',
                pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{1,2})?$/',
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
              id: 'Input_909161',
              uid: 'Input_909161',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_909161')}
            {...injectData}
          />
          <Input
            name={'保证金实收'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'元/条'}
            postfixIconPosition={'before'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={3}
            fieldName={'depositReceived'}
            regexp={[
              {
                id: '678304',
                title: '按钮1',
                iconPos: 'left',
                regexpType: 2,
                message: '请输入大于等于0且最多2位小数的数',
                pattern: '/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{1,2})?$/',
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
              id: 'Input_113386',
              uid: 'Input_113386',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_113386')}
            {...injectData}
          />
          <Input
            name={'合约期'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'月'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={4}
            fieldName={'contractPeriod'}
            regexp={[
              {
                id: '117051',
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
              id: 'Input_5806962',
              uid: 'Input_5806962',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_5806962')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(Chanpinxinxi2777$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    bizId: '',
    sceneCode: '',
    bizData: '',
    prodInfo: '',
    belongingCity: '',
  },
});
