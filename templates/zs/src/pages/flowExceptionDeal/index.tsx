// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Text,
  Form,
  Select,
  TextArea,
  Button,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '948135990866505728';
const FlowExceptionDeal$$Page: React.FC<PageProps> = ({
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
    <div style={{ height: '100%', ...style }} className="__CustomClass_30__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_30_1',
          uid: 'View_30_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_30_1')}
        {...injectData}
      >
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'VerticalView_30_11',
            uid: 'VerticalView_30_11',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ width: '100%', overflowY: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_30_11')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_30_111',
              uid: 'View_30_111',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 20px 16px 20px',
              width: '100%',
              margin: '0px 0px 20px 0px',
              borderRadius: '2px 2px 2px 2px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_30_111')}
            {...injectData}
          >
            <Text
              name={'标题'}
              content={'流程异常处理'}
              textType={'h2'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_30_1111',
                uid: 'Text_30_1111',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: 20,
                fontWeight: 600,
                lineHeight: '32px',
                color: '#1c242e',
                margin: '0px 0px 4px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_30_1111')}
              {...injectData}
            />
            <Text
              name={'副标题'}
              content={'选择异常类型，拼接异常报文后点击提交'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_30_1112',
                uid: 'Text_30_1112',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: 14,
                lineHeight: '20px',
                color: 'rgba(28,36,46,0.45)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_30_1112')}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_30_112',
              uid: 'View_30_112',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
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
            ref={(r: any) => refs.setComponentRef(r, 'View_30_112')}
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
                id: 'Form_30_1121',
                uid: 'Form_30_1121',
                type: 'Form',
                ...componentItem,
              }}
              style={{
                minHeight: 80,
                width: '90%',
                padding: '20px 20px 20px 20px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_30_1121')}
              {...injectData}
            >
              <Select
                name={'异常类型'}
                placeholder={'请选择'}
                classification={'default'}
                fieldName={'exceptionType'}
                required={true}
                formItemIndex={0}
                labelCol={'6'}
                wrapperCol={18}
                selfSpan={24}
                allowClear={true}
                dataSource={getStaticDataSourceService(
                  data?.exceptionTypeList?.resultData,
                  'attrValueName',
                  'attrValueCode',
                )}
                $$componentItem={{
                  id: 'Select_30_11213',
                  uid: 'Select_30_11213',
                  type: 'Select',
                  ...componentItem,
                }}
                isFormRootChild={true}
                onChange={(e: any) => {
                  const eventDatagetSelectedData383: any = [
                    {
                      type: 'getSelectedData',
                      dataId: 167772187512332320,
                      options: {
                        compId: 'Select_30_11213',
                        compLib: 'comm',
                        pageJsonId: 30,
                        compName: 'Select',
                        id: '3047704',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167772285599550660,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '9334537',
                            pageJsonId: 30,
                            code: 'function main(data,state,success,fail){var result={};if(data.exceptionTypeList.resultData.length){data.exceptionTypeList.resultData.forEach(function(exceptionType){if(exceptionType.attrValueCode===e){result=exceptionType}})}return success(result)};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'console',
                              dataId: 167772571014226620,
                              options: {
                                compId: 'debug',
                                compName: 'system',
                                id: '414175',
                                pageJsonId: 30,
                                value: ['$e$'],
                              },
                              line_number: 3,
                            },
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '820314',
                                  options: { context: '$e$', operate: 'empty' },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 167772523129928540,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 167772523129995550,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 167772523129907780,
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 167772523129912220,
                                          children: [],
                                          value: 'callback1',
                                          params: [],
                                          elseIfs: [],
                                        },
                                      ],
                                      todoOptions: ['compId', 'valueList'],
                                      options: {
                                        compId: [
                                          'TextArea_30_11219',
                                          'TextArea_30_11219_3222443',
                                        ],
                                        compLib: 'comm',
                                        pageJsonId: 30,
                                        compName: 'TextArea',
                                        id: '3661102',
                                        valueList: {
                                          TextArea_30_11219:
                                            '$data_9334537.attrValue$',
                                          TextArea_30_11219_3222443:
                                            '$data_9334537.attrValueDesc$',
                                        },
                                        compid: [
                                          'TextArea_30_11219',
                                          'TextArea_30_11219_3222443',
                                        ],
                                      },
                                      actionObjId: 'TextArea_30_11219',
                                      actionObjName: 'TextArea',
                                      value: 'setValue',
                                      compLib: 'comm',
                                      elseIfs: [],
                                      line_number: 7,
                                    },
                                  ],
                                  condition: [],
                                  elseIfs: [],
                                  callback: [
                                    {
                                      type: 'setValue',
                                      dataId: 167772523129907780,
                                      options: {
                                        compId: [
                                          'TextArea_30_11219',
                                          'TextArea_30_11219_3222443',
                                        ],
                                        compLib: 'comm',
                                        pageJsonId: 30,
                                        compName: 'TextArea',
                                        id: '3661102',
                                        valueList: {
                                          TextArea_30_11219:
                                            '$data_9334537.attrValue$',
                                          TextArea_30_11219_3222443:
                                            '$data_9334537.attrValueDesc$',
                                        },
                                        compid: [
                                          'TextArea_30_11219',
                                          'TextArea_30_11219_3222443',
                                        ],
                                      },
                                      line_number: 7,
                                      callback1: [],
                                    },
                                  ],
                                },
                              ],
                              line_number: 4,
                              callback1: [
                                {
                                  type: 'clearValue',
                                  dataId: 167772523129932600,
                                  options: {
                                    compId: 'TextArea_30_11219',
                                    compLib: 'comm',
                                    pageJsonId: 30,
                                    compName: 'TextArea',
                                    id: '165287',
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'clearValue',
                                  dataId: 167772523129983000,
                                  options: {
                                    compId: 'TextArea_30_11219_3222443',
                                    compLib: 'comm',
                                    pageJsonId: 30,
                                    compName: 'TextArea',
                                    id: '394873',
                                  },
                                  line_number: 6,
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                      callback2: [
                        {
                          type: 'clearValue',
                          dataId: 167772591200351200,
                          options: {
                            compId: 'TextArea_30_11219',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'TextArea',
                            id: '474403',
                          },
                          line_number: 8,
                        },
                        {
                          type: 'clearValue',
                          dataId: 167772591645930500,
                          options: {
                            compId: 'TextArea_30_11219_3222443',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'TextArea',
                            id: '4034744',
                          },
                          line_number: 9,
                        },
                      ],
                    },
                  ];
                  eventDatagetSelectedData383.params =
                    [{ title: '下拉框取值', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(
                    eventDatagetSelectedData383,
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
                ref={(r: any) => refs.setComponentRef(r, 'Select_30_11213')}
                {...injectData}
              />
              <TextArea
                name={'异常说明'}
                placeholder={'请输入'}
                fieldName={'exceptionDesc'}
                formItemIndex={1}
                labelCol={'6'}
                wrapperCol={18}
                required={false}
                selfSpan={24}
                $$componentItem={{
                  id: 'TextArea_30_11219',
                  uid: 'TextArea_30_11219',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'TextArea_30_11219')}
                {...injectData}
              />
              <TextArea
                name={'异常报文'}
                placeholder={'请输入'}
                fieldName={'exceptionData'}
                formItemIndex={2}
                required={true}
                labelCol={'6'}
                wrapperCol={18}
                selfSpan={24}
                $$componentItem={{
                  id: 'TextArea_30_11219_3222443',
                  uid: 'TextArea_30_11219_3222443',
                  type: 'TextArea',
                  ...componentItem,
                }}
                isFormRootChild={true}
                style={{ height: '300px' }}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'TextArea_30_11219_3222443')
                }
                {...injectData}
              />
            </Form>
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_30_1122',
                uid: 'View_30_1122',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
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
              ref={(r: any) => refs.setComponentRef(r, 'View_30_1122')}
              {...injectData}
            >
              <Button
                name={'提交'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                classification={'default'}
                type={'primary'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_30_121',
                  uid: 'Button_30_121',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '0px 0px 0px 8px' }}
                onClick={(e: any) => {
                  const eventDatavalidateCurrentForm79: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 167772684993246000,
                      options: {
                        compId: 'Form_30_1121',
                        compLib: 'comm',
                        pageJsonId: 30,
                        compName: 'Form',
                        id: '491313',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'customActionCode',
                          dataId: 167772769970825280,
                          options: {
                            compId: 'customActionCode',
                            compName: 'page',
                            id: '547743',
                            pageJsonId: 30,
                            code: 'function main(data,state,success,fail){var exceptionData=Form_30_1121.exceptionData;return success(JSON.parse(exceptionData))};',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'apiRequest',
                              dataId: 167772770687591260,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '795622',
                                pageJsonId: 30,
                                sync: false,
                                actionTitle: '',
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'dealException',
                                _apiCode: 'dealException',
                                _source: 'rhin',
                                _serviceId: '948417211974303744',
                                _serviceTitle: '异常处理--tzp: dealException',
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
                                    dataKey: '795622_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'exceptionType',
                                        name: '异常信息',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'path.exceptionType',
                                        compType: 'Input',
                                        parents: ['path'],
                                        id: 'path.exceptionType',
                                        dataKey: '795622_path.exceptionType',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_30_1121',
                                            'getFieldsValue',
                                          ],
                                          code: 'exceptionType',
                                        },
                                      },
                                    ],
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '795622_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '795622_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '795622_body',
                                    value: {
                                      type: ['context', '$data_547743$'],
                                      code: '',
                                    },
                                  },
                                ],
                                _sourceName: '异常处理--tzp',
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
                                        context: '$reply_795622?.resultCode$',
                                        operate: '==',
                                        manualValue: '0',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 167773907398603000,
                                  elseIfs: [],
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '1697708',
                                          options: {
                                            context:
                                              '$reply_795622?.resultData$',
                                            operate: 'notEmpty',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 168973366185027100,
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 168973370646364740,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 168973370885676700,
                                              children: [],
                                              todoOptions: ['msgType', 'value'],
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '123258',
                                                pageJsonId: 30,
                                                type: 'success',
                                                value: '处理成功',
                                              },
                                              actionObjId: 'showMessage',
                                              actionObjName: 'system',
                                              value: 'showMessage',
                                              line_number: 7,
                                            },
                                          ],
                                          condition: [],
                                          value: 'elseIf',
                                          callback: [
                                            {
                                              type: 'showMessage',
                                              dataId: 168973370885676700,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '123258',
                                                pageJsonId: 30,
                                                type: 'success',
                                                value: '处理成功',
                                              },
                                              line_number: 7,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'showMessage',
                                          dataId: 16897337031444928,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '5991',
                                            pageJsonId: 30,
                                            type: 'success',
                                            value: '$reply_795622?.resultData$',
                                          },
                                          line_number: 6,
                                        },
                                      ],
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
                  eventDatavalidateCurrentForm79.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatavalidateCurrentForm79,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_30_121')}
                {...injectData}
              />
            </View>
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(FlowExceptionDeal$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
