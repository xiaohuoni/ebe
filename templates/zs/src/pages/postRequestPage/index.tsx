// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Text,
  Form,
  Input,
  TextArea,
  Button,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '954925669228429312';
const PostRequestPage$$Page: React.FC<PageProps> = ({
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
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_889267__"
    >
      <View
        className="View_View_889267_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_889267_1',
          uid: 'View_889267_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_889267_1')}
        {...injectData}
      >
        <View
          className="View_VerticalView_30_11_068364"
          name={'布局容器'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_30_11_068364',
            uid: 'VerticalView_30_11_068364',
            type: 'View',
            ...componentItem,
          }}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_30_11_068364')}
          {...injectData}
        >
          <View
            className="View_View_30_111_163518"
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_30_111_163518',
              uid: 'View_30_111_163518',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 20px 16px 20px',
              width: '100%',
              margin: '0px 0px 20px 0px',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_111_163518')}
            {...injectData}
          >
            <Text
              name={'标题'}
              content={'发起post请求'}
              textType={'h2'}
              version={'1.0'}
              visible={true}
              showHtml={false}
              $$componentItem={{
                id: 'Text_30_1111_509002',
                uid: 'Text_30_1111_509002',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: 20,
                fontWeight: 600,
                lineHeight: '32px',
                color: '#1c242e',
                margin: '0px 0px 4px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_30_1111_509002')}
              {...injectData}
            />
            <Text
              name={'副标题'}
              content={'输入post地址，拼接post报文后点击提交'}
              textType={'span'}
              version={'1.0'}
              visible={true}
              showHtml={false}
              $$componentItem={{
                id: 'Text_30_1112_137778',
                uid: 'Text_30_1112_137778',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: 14,
                lineHeight: '20px',
                color: 'rgba(28,36,46,0.45)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_30_1112_137778')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_30_112_907789"
            name={'布局容器'}
            visible={true}
            disabled={false}
            readOnly={false}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_30_112_907789',
              uid: 'View_30_112_907789',
              type: 'View',
              ...componentItem,
            }}
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              margin: '0px 0px 0px 0px',
              padding: '0px 0px 0px 0px',
              width: '100%',
              overflowY: 'visible',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_112_907789')}
            {...injectData}
          >
            <Form
              name={'表单'}
              header={'标题'}
              colSpan={24}
              colSpace={16}
              rowSpace={16}
              labelCol={'6'}
              wrapperCol={18}
              layout={'horizontal'}
              colon={true}
              labelAlign={'right'}
              genRuleType={'key'}
              formType={'normal'}
              relationDataSource={''}
              formColumns={[
                {
                  id: 'Select_30_11213',
                  label: '下拉框',
                  compName: 'Select',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '异常类型',
                    attr: {},
                    placeholder: '请选择',
                    classification: 'default',
                    fieldName: 'exceptionType',
                    required: true,
                    options: [
                      { id: '801994', label: '男', value: 'male' },
                      { id: '071887', label: '女', value: 'female' },
                    ],
                    formItemIndex: 0,
                    labelCol: 6,
                    wrapperCol: 18,
                    selfSpan: 24,
                  },
                  style: {},
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'Select',
                  description: '',
                  image: '',
                  groupsName: '数据录入',
                  setEvents: [],
                  type: 'Select',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'TextArea_30_11219',
                  label: '文本框',
                  compName: 'TextArea',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '异常说明',
                    placeholder: '请输入',
                    fieldName: 'exceptionDesc',
                    formItemIndex: 1,
                    labelCol: 6,
                    wrapperCol: 18,
                    required: false,
                    selfSpan: 24,
                  },
                  style: {},
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'TextArea',
                  description: '',
                  image: '',
                  groupsName: '数据录入',
                  setEvents: [],
                  type: 'TextArea',
                  isLabelDropBoxChild: false,
                  components: [],
                },
                {
                  id: 'TextArea_30_11219_3222443',
                  label: '文本框',
                  compName: 'TextArea',
                  compType: 2,
                  compLib: 'comm',
                  props: {
                    name: '异常报文',
                    placeholder: '请输入',
                    fieldName: 'exceptionData',
                    formItemIndex: 2,
                    required: true,
                    labelCol: 6,
                    wrapperCol: 18,
                    selfSpan: 24,
                  },
                  style: {},
                  isContainer: false,
                  isBusiObjContainer: false,
                  cmdgroup: ['basic'],
                  platform: 'pc',
                  icon: 'TextArea',
                  description: '',
                  image: '',
                  groupsName: '数据录入',
                  setEvents: [],
                  type: 'TextArea',
                  isLabelDropBoxChild: false,
                  components: [],
                },
              ]}
              $$componentItem={{
                id: 'Form_30_1121_209901',
                uid: 'Form_30_1121_209901',
                type: 'Form',
                ...componentItem,
              }}
              style={{
                minHeight: 80,
                width: '90%',
                padding: '20px 20px 20px 20px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_30_1121_209901')}
              {...injectData}
            >
              <Input
                name={'请求地址'}
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
                formItemIndex={0}
                fieldName={'postUrl'}
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
                  id: 'Input_782097',
                  uid: 'Input_782097',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_782097')}
                {...injectData}
              />
              <TextArea
                name={'post报文'}
                placeholder={'请输入'}
                fieldName={'postData'}
                formItemIndex={1}
                required={true}
                labelCol={'6'}
                wrapperCol={18}
                selfSpan={24}
                $$componentItem={{
                  id: 'TextArea_30_11219_3222443_341507',
                  uid: 'TextArea_30_11219_3222443_341507',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                style={{ height: '300px' }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TextArea_30_11219_3222443_341507')
                }
                {...injectData}
              />
            </Form>
            <View
              className="View_View_30_1122_8942146"
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_30_1122_8942146',
                uid: 'View_30_1122_8942146',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '12px 0px 12px 0px',
                width: '100%',
                borderRadius: '0px 0px 2px 2px',
                backgroundColor: '#ffffff',
                boxShadow: '0px 1px 0px 0px #e7e8ea inset',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_30_1122_8942146')}
              {...injectData}
            >
              <Button
                name={'提交'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                visible={true}
                classification={'default'}
                type={'primary'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_30_121_12703',
                  uid: 'Button_30_121_12703',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDatavalidateCurrentForm90: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 167772684993246000,
                      options: {
                        compId: 'Form_30_1121_209901',
                        compLib: 'comm',
                        pageJsonId: 30,
                        compName: 'Form',
                        id: '491313',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167928282937891620,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '015555',
                            pageJsonId: 30,
                            code: 'function main(data,state,success,fail){var postData=Form_30_1121_209901.postData;return success(JSON.parse(postData))};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 167928282937872260,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '142814',
                                pageJsonId: 30,
                                sync: false,
                                actionTitle: '',
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'redirectPost',
                                _apiCode: 'redirectPost',
                                _source: 'rhin',
                                _serviceId: '954943345960976384',
                                _serviceTitle:
                                  '发送post请求--tzp: redirectPost',
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
                                    dataKey: '142814_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '142814_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'postUrl',
                                        name: 'postUrl',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        defaultValue: '',
                                        _id: 'query.postUrl',
                                        compType: 'Input',
                                        parents: ['query'],
                                        id: 'query.postUrl',
                                        dataKey: '142814_query.postUrl',
                                        value: {
                                          type: [
                                            'context',
                                            '$Form_30_1121_209901$',
                                          ],
                                          code: 'postUrl',
                                        },
                                      },
                                    ],
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '142814_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '142814_body',
                                    value: {
                                      type: ['context', '$data_015555$'],
                                      code: '',
                                    },
                                  },
                                ],
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '7554486',
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$reply_142814?.resultCode$',
                                        operate: '==',
                                        manualValue: '0',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 167928282937843870,
                                  elseIfs: [],
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'showMessage',
                                      dataId: 167928282937840260,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '905135',
                                        pageJsonId: 30,
                                        type: 'success',
                                        value: '处理成功',
                                      },
                                      line_number: 5,
                                    },
                                  ],
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
                  eventDatavalidateCurrentForm90.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatavalidateCurrentForm90,
                    { e },
                    'validateCurrentForm',
                    {
                      id: 'validateCurrentForm',
                      name: 'validateCurrentForm',
                      type: 'validateCurrentForm',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_30_121_12703')}
                {...injectData}
              />
            </View>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(PostRequestPage$$Page, {
  pageId,
  hasLogin: false,
  defaultState: {},
});
