// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  Form,
  Input,
  VerticalView,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const CommonCommentDetail$$Modal: React.FC<PageProps> = ({
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
}) => {
  useEffect(() => {
    const eventDatasetCurrentFormValues7: any = [
      {
        type: 'setCurrentFormValues',
        dataId: 166521046642269120,
        options: {
          compId: 'Form_984095',
          compLib: 'comm',
          pageJsonId: '2540494',
          compName: 'Form',
          id: '678463',
          params: '$state.itemData$',
        },
        line_number: 1,
      },
    ];
    eventDatasetCurrentFormValues7.params = [] || [];
    CMDGenerator(eventDatasetCurrentFormValues7, {}, 'setCurrentFormValues', {
      id: 'setCurrentFormValues',
      name: 'setCurrentFormValues',
      type: 'setCurrentFormValues',
      platform: 'undefined',
    });
    const eventDataifelse329: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '4782453',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166522984825902600,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 166522984825929900,
            children: [
              {
                dataName: 'action',
                dataId: 166528177122247870,
                children: [],
                todoOptions: ['disabled'],
                options: {
                  compId: 'Form_984095',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Form',
                  id: '588772',
                  disabled: '',
                },
                actionObjId: 'Form_984095',
                actionObjName: 'Form',
                value: 'setDisable',
                compLib: 'comm',
                elseIfs: [],
                line_number: 5,
              },
              {
                dataName: 'action',
                dataId: 166528177932656830,
                children: [],
                todoOptions: ['visible'],
                options: {
                  compId: 'Button_641249_834079',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Button',
                  id: '1939465',
                  visible: 'true',
                },
                actionObjId: 'Button_641249_834079',
                actionObjName: 'Button',
                value: 'setVisible',
                compLib: 'comm',
                line_number: 6,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.sceneCode$',
                  operate: '==',
                  manualValue: 'M',
                },
                condId: '884949',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '编辑时',
            elseIfs: [],
            callback: [
              {
                type: 'setDisable',
                dataId: 166528177122247870,
                options: {
                  compId: 'Form_984095',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Form',
                  id: '588772',
                  disabled: '',
                },
                line_number: 5,
              },
              {
                type: 'setVisible',
                dataId: 166528177932656830,
                options: {
                  compId: 'Button_641249_834079',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Button',
                  id: '1939465',
                  visible: 'true',
                },
                line_number: 6,
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 166522984825951500,
            children: [
              {
                dataName: 'action',
                dataId: 166528177375880260,
                children: [],
                todoOptions: ['disabled'],
                options: {
                  compId: 'Form_984095',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Form',
                  id: '921882',
                  disabled: '',
                },
                actionObjId: 'Form_984095',
                actionObjName: 'Form',
                value: 'setDisable',
                compLib: 'comm',
                elseIfs: [],
                line_number: 7,
              },
              {
                dataName: 'action',
                dataId: 166528178164775870,
                children: [],
                todoOptions: ['visible'],
                options: {
                  compId: 'Button_641249_834079',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Button',
                  id: '559817',
                  visible: 'true',
                },
                actionObjId: 'Button_641249_834079',
                actionObjName: 'Button',
                value: 'setVisible',
                compLib: 'comm',
                line_number: 8,
              },
            ],
            condition: [
              {
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.sceneCode$',
                  operate: '==',
                  manualValue: 'A',
                },
                condId: '1115236',
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            desc: '新增时',
            elseIfs: [],
            callback: [
              {
                type: 'setDisable',
                dataId: 166528177375880260,
                options: {
                  compId: 'Form_984095',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Form',
                  id: '921882',
                  disabled: '',
                },
                line_number: 7,
              },
              {
                type: 'setVisible',
                dataId: 166528178164775870,
                options: {
                  compId: 'Button_641249_834079',
                  compLib: 'comm',
                  pageJsonId: '2540494',
                  compName: 'Button',
                  id: '559817',
                  visible: 'true',
                },
                line_number: 8,
              },
            ],
          },
          {
            dataName: 'elseIf',
            dataId: 166522984825926720,
            children: [
              {
                dataName: 'action',
                dataId: 166522984825971070,
                children: [],
                todoOptions: ['msgType', 'value'],
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '007429',
                  pageJsonId: '2540494',
                  type: 'warn',
                  value: '不支持的操作类型',
                },
                actionObjId: 'showMessage',
                actionObjName: 'system',
                value: 'showMessage',
                elseIfs: [],
                line_number: 9,
              },
            ],
            condition: [],
            elseIfs: [],
            callback: [
              {
                type: 'showMessage',
                dataId: 166522984825971070,
                options: {
                  compId: 'showMessage',
                  compName: 'system',
                  id: '007429',
                  pageJsonId: '2540494',
                  type: 'warn',
                  value: '不支持的操作类型',
                },
                line_number: 9,
              },
            ],
          },
        ],
        line_number: 2,
        callback1: [
          {
            type: 'setDisable',
            dataId: 166522985582656130,
            options: {
              compId: 'Form_984095',
              compLib: 'comm',
              pageJsonId: '2540494',
              compName: 'Form',
              id: '385806',
              disabled: 'true',
            },
            line_number: 3,
          },
          {
            type: 'setVisible',
            dataId: 166528175817597200,
            options: {
              compId: 'Button_641249_834079',
              compLib: 'comm',
              pageJsonId: '2540494',
              compName: 'Button',
              id: '6158746',
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDataifelse329.params = [] || [];
    CMDGenerator(eventDataifelse329, {}, 'ifelse', {
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
      className="__CustomClass_2540494__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_2540494_1',
          uid: 'View_2540494_1',
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
        ref={(r: any) => (refs['View_2540494_1'] = r)}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          visible={true}
          $$componentItem={{
            id: 'VerticalView_7691962',
            uid: 'VerticalView_7691962',
            type: 'VerticalView',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => (refs['VerticalView_7691962'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_115754',
              uid: 'View_115754',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_115754'] = r)}
            {...injectData}
          >
            <Card
              name={'常用意见表单卡片'}
              cardIconType={'middle'}
              title={'常用意见表单'}
              bordered={true}
              size={'default'}
              hasHeader={false}
              visible={true}
              hasIcon={true}
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
                id: 'Card_685316',
                uid: 'Card_685316',
                type: 'Card',
                ...componentItem,
              }}
              disabled={false}
              readOnly={false}
              style={{
                padding: '20px 20px 20px 20px',
                overflowY: 'visible',
                margin: '0 0 16px 0',
              }}
              ref={(r: any) => (refs['Card_685316'] = r)}
              {...injectData}
            >
              <Form
                name={'常用意见表单'}
                colSpan={24}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                visible={true}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_984095'}
                $$componentItem={{
                  id: 'Form_984095',
                  uid: 'Form_984095',
                  type: 'Form',
                  ...componentItem,
                }}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => (refs['Form_984095'] = r)}
                {...injectData}
              >
                <Input
                  name={'处理意见编码'}
                  size={'default'}
                  selfSpan={24}
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
                  fieldName={'handleCommentCode'}
                  disabled={false}
                  visible={false}
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
                    id: 'Input_525853',
                    uid: 'Input_525853',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Input_525853'] = r)}
                  {...injectData}
                />
                <Input
                  name={'处理意见'}
                  size={'default'}
                  selfSpan={24}
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
                  formItemIndex={1}
                  fieldName={'handleComment'}
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
                    id: 'Input_856528',
                    uid: 'Input_856528',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Input_856528'] = r)}
                  {...injectData}
                />
                <Input
                  name={'使用次数'}
                  size={'default'}
                  selfSpan={24}
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
                  defaultValue={'0'}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  fieldName={'useCount'}
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
                    id: 'Input_9043253',
                    uid: 'Input_9043253',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Input_9043253'] = r)}
                  {...injectData}
                />
                <Input
                  name={'主键ID'}
                  size={'default'}
                  selfSpan={24}
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
                  fieldName={'commentId'}
                  disabled={false}
                  visible={false}
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
                    id: 'Input_585455',
                    uid: 'Input_585455',
                    type: 'Input',
                    ...componentItem,
                  }}
                  isFormRootChild={true}
                  ref={(r: any) => (refs['Input_585455'] = r)}
                  {...injectData}
                />
              </Form>
            </Card>
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_994054_940879',
                uid: 'View_994054_940879',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                margin: '20px 0px 0px 0px',
                textAlign: 'center',
              }}
              ref={(r: any) => (refs['View_994054_940879'] = r)}
              {...injectData}
            >
              <Button
                name={'确定'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_641249_834079',
                  uid: 'Button_641249_834079',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                onClick={(e: any) => {
                  const eventDataifelse568: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '546317',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$state.sceneCode$',
                            operate: '==',
                            manualValue: 'A',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166260815701021020,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166260818247226270,
                          children: [
                            {
                              dataName: 'action',
                              dataId: 166260839828240600,
                              children: [
                                {
                                  dataName: 'callback',
                                  dataId: 166260839828209440,
                                  children: [
                                    {
                                      dataName: 'condition',
                                      dataId: 166260842821180220,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 166260842821160770,
                                          children: [],
                                          todoOptions: ['msgType', 'value'],
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '323977',
                                            pageJsonId: '2540494',
                                            type: 'success',
                                            value: '常用意见修改成功！',
                                          },
                                          actionObjId: 'showMessage',
                                          actionObjName: 'system',
                                          value: 'showMessage',
                                          elseIfs: [],
                                          line_number: 10,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 166528166765465400,
                                          children: [],
                                          todoOptions: [],
                                          options: {
                                            compId: 'closeModal',
                                            compName: 'page',
                                            id: '186891',
                                            pageJsonId: '2540494',
                                          },
                                          actionObjId: 'closeModal',
                                          actionObjName: 'page',
                                          value: 'closeModal',
                                          line_number: 11,
                                        },
                                        {
                                          dataName: 'action',
                                          dataId: 166528165706237540,
                                          children: [],
                                          todoOptions: ['setParams'],
                                          options: {
                                            compId: 'okCallbackData',
                                            compName: 'page',
                                            id: '873781',
                                            pageJsonId: '2540494',
                                          },
                                          actionObjId: 'okCallbackData',
                                          actionObjName: 'page',
                                          value: 'okCallbackData',
                                          line_number: 12,
                                        },
                                      ],
                                      elseIfs: [
                                        {
                                          dataName: 'elseIf',
                                          dataId: 166260842821123870,
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 166260842821170530,
                                              children: [],
                                              todoOptions: ['msgType', 'value'],
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '593541',
                                                pageJsonId: '2540494',
                                                type: 'error',
                                                value: '常用意见修改失败！',
                                              },
                                              actionObjId: 'showMessage',
                                              actionObjName: 'system',
                                              value: 'showMessage',
                                              elseIfs: [],
                                              line_number: 13,
                                            },
                                          ],
                                          condition: [],
                                          desc: 'resultCode != 0 修改失败',
                                          elseIfs: [],
                                          callback: [
                                            {
                                              type: 'showMessage',
                                              dataId: 166260842821170530,
                                              options: {
                                                compId: 'showMessage',
                                                compName: 'system',
                                                id: '593541',
                                                pageJsonId: '2540494',
                                                type: 'error',
                                                value: '常用意见修改失败！',
                                              },
                                              line_number: 13,
                                            },
                                          ],
                                        },
                                      ],
                                      condition: [
                                        {
                                          options: {
                                            useManual: true,
                                            useObject: false,
                                            context:
                                              '$reply_205833?.resultCode$',
                                            operate: '==',
                                            manualValue: '0',
                                          },
                                          condId: '479063',
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      desc: 'resultCode = 0 修改成功',
                                      line_number: 9,
                                    },
                                  ],
                                  value: 'callback1',
                                  params: [],
                                  elseIfs: [],
                                },
                                {
                                  dataName: 'callback',
                                  dataId: 166260839828201300,
                                  children: [],
                                  value: 'callback2',
                                  params: [],
                                  elseIfs: [],
                                },
                              ],
                              todoOptions: [
                                'actionTitle',
                                'sync',
                                'url',
                                'params',
                              ],
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '205833',
                                pageJsonId: '2540494',
                                sync: false,
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'modDcStaffHandleComment',
                                _apiCode: 'modDcStaffHandleComment',
                                _source: 'rhin',
                                _serviceId: '884998024860446720',
                                _serviceTitle:
                                  '常用意见修改-tsm: modDcStaffHandleComment',
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
                                    dataKey: '205833_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '205833_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '205833_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'commentId',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'F',
                                        _id: 'body.commentId',
                                        compType: 'Input',
                                        name: 'commentId',
                                        parents: ['body'],
                                        id: 'body.commentId',
                                        dataKey: '205833_body.commentId',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_984095',
                                            'validateFields',
                                          ],
                                          code: 'commentId',
                                        },
                                      },
                                      {
                                        code: 'handleCommentCode',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.handleCommentCode',
                                        compType: 'Input',
                                        name: 'handleCommentCode',
                                        parents: ['body'],
                                        id: 'body.handleCommentCode',
                                        dataKey:
                                          '205833_body.handleCommentCode',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_984095',
                                            'getFieldsValue',
                                          ],
                                          code: 'handleCommentCode',
                                        },
                                      },
                                      {
                                        code: 'handleComment',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.handleComment',
                                        compType: 'Input',
                                        name: 'handleComment',
                                        parents: ['body'],
                                        id: 'body.handleComment',
                                        dataKey: '205833_body.handleComment',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_984095',
                                            'getFieldsValue',
                                          ],
                                          code: 'handleComment',
                                        },
                                      },
                                      {
                                        code: 'useCount',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'F',
                                        _id: 'body.useCount',
                                        compType: 'Input',
                                        name: 'useCount',
                                        parents: ['body'],
                                        id: 'body.useCount',
                                        dataKey: '205833_body.useCount',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_984095',
                                            'getFieldsValue',
                                          ],
                                          code: 'useCount',
                                        },
                                      },
                                    ],
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '205833_body',
                                  },
                                ],
                              },
                              actionObjId: 'apiRequest',
                              actionObjName: 'system',
                              value: 'apiRequest',
                              elseIfs: [],
                              line_number: 8,
                            },
                          ],
                          condition: [
                            {
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$state.sceneCode$',
                                operate: '==',
                                manualValue: 'M',
                              },
                              condId: '007968',
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          desc: '修改时',
                          elseIfs: [],
                          callback: [
                            {
                              type: 'apiRequest',
                              dataId: 166260839828240600,
                              options: {
                                compId: 'apiRequest',
                                compName: 'system',
                                id: '205833',
                                pageJsonId: '2540494',
                                sync: false,
                                method: 'post',
                                url: '/app/rhin/gateway/callRhinEngine',
                                _capabilityCode: 'modDcStaffHandleComment',
                                _apiCode: 'modDcStaffHandleComment',
                                _source: 'rhin',
                                _serviceId: '884998024860446720',
                                _serviceTitle:
                                  '常用意见修改-tsm: modDcStaffHandleComment',
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
                                    dataKey: '205833_header',
                                  },
                                  {
                                    code: 'path',
                                    name: '请求路径参数',
                                    attrType: 'object',
                                    _id: 'path',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'path',
                                    dataKey: '205833_path',
                                  },
                                  {
                                    code: 'query',
                                    name: 'URL 参数',
                                    attrType: 'object',
                                    _id: 'query',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'query',
                                    dataKey: '205833_query',
                                  },
                                  {
                                    code: 'body',
                                    name: '请求体',
                                    attrType: 'object',
                                    children: [
                                      {
                                        code: 'commentId',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'F',
                                        _id: 'body.commentId',
                                        compType: 'Input',
                                        name: 'commentId',
                                        parents: ['body'],
                                        id: 'body.commentId',
                                        dataKey: '205833_body.commentId',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_984095',
                                            'validateFields',
                                          ],
                                          code: 'commentId',
                                        },
                                      },
                                      {
                                        code: 'handleCommentCode',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.handleCommentCode',
                                        compType: 'Input',
                                        name: 'handleCommentCode',
                                        parents: ['body'],
                                        id: 'body.handleCommentCode',
                                        dataKey:
                                          '205833_body.handleCommentCode',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_984095',
                                            'getFieldsValue',
                                          ],
                                          code: 'handleCommentCode',
                                        },
                                      },
                                      {
                                        code: 'handleComment',
                                        attrType: 'field',
                                        type: 'string',
                                        mustFlag: 'F',
                                        _id: 'body.handleComment',
                                        compType: 'Input',
                                        name: 'handleComment',
                                        parents: ['body'],
                                        id: 'body.handleComment',
                                        dataKey: '205833_body.handleComment',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_984095',
                                            'getFieldsValue',
                                          ],
                                          code: 'handleComment',
                                        },
                                      },
                                      {
                                        code: 'useCount',
                                        attrType: 'field',
                                        type: 'long',
                                        mustFlag: 'F',
                                        _id: 'body.useCount',
                                        compType: 'Input',
                                        name: 'useCount',
                                        parents: ['body'],
                                        id: 'body.useCount',
                                        dataKey: '205833_body.useCount',
                                        value: {
                                          type: [
                                            'form',
                                            'Form_984095',
                                            'getFieldsValue',
                                          ],
                                          code: 'useCount',
                                        },
                                      },
                                    ],
                                    _id: 'body',
                                    compType: 'Input',
                                    parents: [],
                                    id: 'body',
                                    dataKey: '205833_body',
                                  },
                                ],
                              },
                              line_number: 8,
                              callback1: [
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      options: {
                                        useManual: true,
                                        useObject: false,
                                        context: '$reply_205833?.resultCode$',
                                        operate: '==',
                                        manualValue: '0',
                                      },
                                      condId: '479063',
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 166260842821180220,
                                  elseIfs: [
                                    {
                                      dataName: 'elseIf',
                                      dataId: 166260842821123870,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 166260842821170530,
                                          children: [],
                                          todoOptions: ['msgType', 'value'],
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '593541',
                                            pageJsonId: '2540494',
                                            type: 'error',
                                            value: '常用意见修改失败！',
                                          },
                                          actionObjId: 'showMessage',
                                          actionObjName: 'system',
                                          value: 'showMessage',
                                          elseIfs: [],
                                          line_number: 13,
                                        },
                                      ],
                                      condition: [],
                                      desc: 'resultCode != 0 修改失败',
                                      elseIfs: [],
                                      callback: [
                                        {
                                          type: 'showMessage',
                                          dataId: 166260842821170530,
                                          options: {
                                            compId: 'showMessage',
                                            compName: 'system',
                                            id: '593541',
                                            pageJsonId: '2540494',
                                            type: 'error',
                                            value: '常用意见修改失败！',
                                          },
                                          line_number: 13,
                                        },
                                      ],
                                    },
                                  ],
                                  line_number: 9,
                                  callback1: [
                                    {
                                      type: 'showMessage',
                                      dataId: 166260842821160770,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '323977',
                                        pageJsonId: '2540494',
                                        type: 'success',
                                        value: '常用意见修改成功！',
                                      },
                                      line_number: 10,
                                    },
                                    {
                                      type: 'closeModal',
                                      dataId: 166528166765465400,
                                      options: {
                                        compId: 'closeModal',
                                        compName: 'page',
                                        id: '186891',
                                        pageJsonId: '2540494',
                                      },
                                      line_number: 11,
                                    },
                                    {
                                      type: 'okCallbackData',
                                      dataId: 166528165706237540,
                                      options: {
                                        compId: 'okCallbackData',
                                        compName: 'page',
                                        id: '873781',
                                        pageJsonId: '2540494',
                                      },
                                      line_number: 12,
                                    },
                                  ],
                                },
                              ],
                              callback2: [],
                            },
                          ],
                        },
                        {
                          dataName: 'elseIf',
                          dataId: 166528150443213250,
                          children: [],
                          condition: [],
                          elseIfs: [],
                        },
                      ],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 166260818962648060,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '115279',
                            pageJsonId: '2540494',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'addDcStaffHandleComment',
                            _apiCode: 'addDcStaffHandleComment',
                            _source: 'rhin',
                            _serviceId: '884997745800904704',
                            _serviceTitle:
                              '常用意见新增-tsm: addDcStaffHandleComment',
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
                                dataKey: '115279_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '115279_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '115279_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'staffCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.staffCode',
                                    compType: 'Input',
                                    name: 'staffCode',
                                    parents: ['body'],
                                    id: 'body.staffCode',
                                    dataKey: '115279_body.staffCode',
                                  },
                                  {
                                    code: 'handleCommentCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.handleCommentCode',
                                    compType: 'Input',
                                    name: 'handleCommentCode',
                                    parents: ['body'],
                                    id: 'body.handleCommentCode',
                                    dataKey: '115279_body.handleCommentCode',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_984095',
                                        'validateFields',
                                      ],
                                      code: 'handleCommentCode',
                                    },
                                  },
                                  {
                                    code: 'handleComment',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.handleComment',
                                    compType: 'Input',
                                    name: 'handleComment',
                                    parents: ['body'],
                                    id: 'body.handleComment',
                                    dataKey: '115279_body.handleComment',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_984095',
                                        'validateFields',
                                      ],
                                      code: 'handleComment',
                                    },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '115279_body',
                              },
                            ],
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '6749365',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$reply_115279?.resultCode$',
                                    operate: '==',
                                    manualValue: '0',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166260823099568600,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166260825054998800,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166260826188723870,
                                      children: [],
                                      todoOptions: ['msgType', 'value'],
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '637479',
                                        pageJsonId: '2540494',
                                        type: 'error',
                                        value: '常用意见新增失败！',
                                      },
                                      actionObjId: 'showMessage',
                                      actionObjName: 'system',
                                      value: 'showMessage',
                                      elseIfs: [],
                                      line_number: 7,
                                    },
                                  ],
                                  condition: [],
                                  desc: 'resultCode != 0 新增失败',
                                  elseIfs: [],
                                  callback: [
                                    {
                                      type: 'showMessage',
                                      dataId: 166260826188723870,
                                      options: {
                                        compId: 'showMessage',
                                        compName: 'system',
                                        id: '637479',
                                        pageJsonId: '2540494',
                                        type: 'error',
                                        value: '常用意见新增失败！',
                                      },
                                      line_number: 7,
                                    },
                                  ],
                                },
                              ],
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'showMessage',
                                  dataId: 166260827481106020,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '2205077',
                                    pageJsonId: '2540494',
                                    type: 'success',
                                    value: '常用意见新增成功！',
                                  },
                                  line_number: 4,
                                },
                                {
                                  type: 'closeModal',
                                  dataId: 166528168986234080,
                                  options: {
                                    compId: 'closeModal',
                                    compName: 'page',
                                    id: '4768248',
                                    pageJsonId: '2540494',
                                  },
                                  line_number: 5,
                                },
                                {
                                  type: 'okCallbackData',
                                  dataId: 166528167910988260,
                                  options: {
                                    compId: 'okCallbackData',
                                    compName: 'page',
                                    id: '0653344',
                                    pageJsonId: '2540494',
                                  },
                                  line_number: 6,
                                },
                              ],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse568.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDataifelse568, { e }, 'ifelse', {
                    id: 'ifelse',
                    name: 'ifelse',
                    type: 'ifelse',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_641249_834079'] = r)}
                {...injectData}
              />
              <Button
                name={'取消'}
                shape={null}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'default'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_9864742_546572',
                  uid: 'Button_9864742_546572',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatacloseModal139: any = [
                    {
                      type: 'closeModal',
                      dataId: 166528143264534980,
                      options: {
                        compId: 'closeModal',
                        compName: 'page',
                        id: '262346',
                        pageJsonId: '2540494',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatacloseModal139.params =
                    [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
                  CMDGenerator(eventDatacloseModal139, { e }, 'closeModal', {
                    id: 'closeModal',
                    name: 'closeModal',
                    type: 'closeModal',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => (refs['Button_9864742_546572'] = r)}
                {...injectData}
              />
            </View>
          </View>
        </VerticalView>
      </View>
    </div>
  );
};

export default withPageHOC(CommonCommentDetail$$Modal, {
  pageId: '895869924060143616',
  hasLogin: false,
  defaultState: { sceneCode: '', itemData: '' },
});
