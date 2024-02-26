// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '952860583750815744';
const XiugaiOAzuzhiguanlianyonghu0431$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm62: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167878676506050370,
        options: {
          compId: 'Form_5258874',
          compLib: 'comm',
          pageJsonId: '044253',
          compName: 'Form',
          id: '703397',
        },
        line_number: 1,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167879552370936320,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '3912815',
              pageJsonId: '044253',
              code: 'function main(data,state,success,fail){console.log("\\u7EC4\\u5408\\u540E\\u7684\\u6570\\u636E\\uFF1A",{"jobLevel":Form_5258874.jobLevel,"orgUserRelId":state.info["orgUserRelId"]});success({"jobLevel":Form_5258874.jobLevel,"orgUserRelId":state.info["orgUserRelId"]})};',
            },
            line_number: 2,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 167879601147421980,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '893064',
                  pageJsonId: '044253',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'modDcOaOrgUserRel',
                  _apiCode: 'modDcOaOrgUserRel',
                  _source: 'rhin',
                  _serviceId: '952864390049382400',
                  _serviceTitle: '修改OA组织和用户关系-hyj: modDcOaOrgUserRel',
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
                      dataKey: '893064_header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: [],
                      id: 'path',
                      dataKey: '893064_path',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: [],
                      id: 'query',
                      dataKey: '893064_query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'orgUserRelId',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.orgUserRelId',
                          compType: 'Input',
                          name: 'orgUserRelId',
                          parents: ['body'],
                          id: 'body.orgUserRelId',
                          dataKey: '893064_body.orgUserRelId',
                          value: {
                            type: ['context', '$data_3912815$'],
                            code: 'orgUserRelId',
                          },
                        },
                        {
                          code: 'jobLevel',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.jobLevel',
                          compType: 'Input',
                          name: 'jobLevel',
                          parents: ['body'],
                          id: 'body.jobLevel',
                          dataKey: '893064_body.jobLevel',
                          value: {
                            type: ['context', '$data_3912815$'],
                            code: 'jobLevel',
                          },
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: [],
                      id: 'body',
                      dataKey: '893064_body',
                    },
                  ],
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'closeModal',
                    dataId: 167879699986427700,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '2034916',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'callParentCustomFunc',
                    dataId: 167879712655362560,
                    options: {
                      compId: 'callParentCustomFunc',
                      compName: 'system',
                      id: '124311',
                      pageJsonId: '044253',
                      pathname: '/oaOrganizationManagement',
                      pageId: '884248856254066688',
                      modalPath: '/oaOrganizationManagement',
                      customFuncName: 'refreshUserTable',
                      customFuncParams: 'object',
                    },
                    line_number: 5,
                    callback1: [],
                    callback2: [],
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
    eventDatavalidateCurrentForm62.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm62, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal87: any = [
      {
        type: 'closeModal',
        dataId: '5770058_1',
        options: { compId: 'page', compName: 'page', id: '703515' },
        line_number: 1,
      },
    ];
    eventDatacloseModal87.params = [] || [];
    CMDGenerator(eventDatacloseModal87, {}, 'closeModal', {
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
    const eventDatasetCurrentFormValues6: any = [
      {
        type: 'setCurrentFormValues',
        dataId: 167878674142317700,
        options: {
          compId: 'Form_5258874',
          compLib: 'comm',
          pageJsonId: '044253',
          compName: 'Form',
          id: '16997836',
          params: '$state.info$',
        },
        line_number: 1,
      },
    ];
    eventDatasetCurrentFormValues6.params = [] || [];
    CMDGenerator(eventDatasetCurrentFormValues6, {}, 'setCurrentFormValues', {
      id: 'setCurrentFormValues',
      name: 'setCurrentFormValues',
      type: 'setCurrentFormValues',
      platform: 'undefined',
    });
    const eventDataapiRequest556: any = [
      {
        type: 'apiRequest',
        dataId: 167879659403224450,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '2546398',
          pageJsonId: '044253',
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
              dataKey: '2546398_header',
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
                  dataKey: '2546398_path.attrCode',
                  value: { type: ['customize'], code: 'JOB_LEVEL' },
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '2546398_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '2546398_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '2546398_body',
            },
          ],
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167879662848299900,
            options: {
              compId: 'Select_7779775',
              compLib: 'comm',
              pageJsonId: '044253',
              compName: 'Select',
              id: '996365',
              data: '$reply_2546398?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 3,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest556.params = [] || [];
    CMDGenerator(eventDataapiRequest556, {}, 'apiRequest', {
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
      className="__CustomClass_044253__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_044253_1',
          uid: 'View_044253_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_044253_1')}
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
          formCode={'Form_5258874'}
          $$componentItem={{
            id: 'Form_5258874',
            uid: 'Form_5258874',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_5258874')}
          {...injectData}
        >
          <Input
            name={'用户名称'}
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
            fieldName={'usrLastName'}
            disabled={true}
            visible={true}
            readOnly={false}
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
              id: 'Input_3411417',
              uid: 'Input_3411417',
              type: 'Input',
              ...componentItem,
            }}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_3411417')}
            {...injectData}
          />
          <Input
            name={'用户账号'}
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
            fieldName={'usrLogin'}
            disabled={true}
            visible={true}
            readOnly={false}
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
              id: 'Input_6520955',
              uid: 'Input_6520955',
              type: 'Input',
              ...componentItem,
            }}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_6520955')}
            {...injectData}
          />
          <Input
            name={'手机号码'}
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
            fieldName={'usrUdfMobile'}
            disabled={true}
            visible={true}
            readOnly={false}
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
              id: 'Input_6731392',
              uid: 'Input_6731392',
              type: 'Input',
              ...componentItem,
            }}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_6731392')}
            {...injectData}
          />
          <Select
            name={'人员等级'}
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
            formItemIndex={3}
            fieldName={'jobLevel'}
            $$componentItem={{
              id: 'Select_7779775',
              uid: 'Select_7779775',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_7779775')}
            {...injectData}
          />
          <Select
            name={'是否默认组织'}
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
            placeholder={'请选择'}
            formItemIndex={4}
            fieldName={'isDefault'}
            disabled={true}
            visible={true}
            readOnly={false}
            dataSource={attrDataMap['PUB_001']}
            $$componentItem={{
              id: 'Select_892876',
              uid: 'Select_892876',
              type: 'Select',
              ...componentItem,
            }}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_892876')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(XiugaiOAzuzhiguanlianyonghu0431$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', info: '' },
});
