// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, TextArea } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '900586377250050048';
const Guigeshuxingzhixiangqing3756$$Modal: React.FC<PageProps> = ({
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
    const eventDataifelse314: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0014226',
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
        dataId: 166632273406850600,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'closeModal',
            dataId: 166632276480670370,
            options: {
              compId: 'closeModal',
              compName: 'page',
              id: '823478',
              pageJsonId: '112282',
            },
            line_number: 2,
          },
        ],
      },
    ];
    eventDataifelse314.params = [] || [];
    CMDGenerator(eventDataifelse314, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse315: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0014226',
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
        dataId: 166632274327999740,
        elseIfs: [],
        line_number: 3,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166632277434443260,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '985239',
              pageJsonId: '112282',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'addAttrValue',
              _apiCode: 'addAttrValue',
              _source: 'rhin',
              _serviceId: '880724576442220544',
              _serviceTitle: '新增规格属性值-tsm: addAttrValue',
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
                  dataKey: '985239_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '985239_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '985239_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'attrId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.attrId',
                      compType: 'Input',
                      name: 'attrId',
                      parents: ['body'],
                      id: 'body.attrId',
                      dataKey: '985239_body.attrId',
                      value: { type: ['context', '$state.attrId$'], code: '' },
                    },
                    {
                      code: 'attrValueCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueCode',
                      compType: 'Input',
                      name: 'attrValueCode',
                      parents: ['body'],
                      id: 'body.attrValueCode',
                      dataKey: '985239_body.attrValueCode',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'attrValueCode',
                      },
                    },
                    {
                      code: 'attrValueName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueName',
                      compType: 'Input',
                      name: 'attrValueName',
                      parents: ['body'],
                      id: 'body.attrValueName',
                      dataKey: '985239_body.attrValueName',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'attrValueName',
                      },
                    },
                    {
                      code: 'attrValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValue',
                      compType: 'Input',
                      name: 'attrValue',
                      parents: ['body'],
                      id: 'body.attrValue',
                      dataKey: '985239_body.attrValue',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'attrValue',
                      },
                    },
                    {
                      code: 'sort',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.sort',
                      compType: 'Input',
                      name: 'sort',
                      parents: ['body'],
                      id: 'body.sort',
                      dataKey: '985239_body.sort',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'sort',
                      },
                    },
                    {
                      code: 'attrValueDesc',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueDesc',
                      compType: 'Input',
                      name: 'attrValueDesc',
                      parents: ['body'],
                      id: 'body.attrValueDesc',
                      dataKey: '985239_body.attrValueDesc',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'attrValueDesc',
                      },
                    },
                    {
                      code: 'remark',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.remark',
                      compType: 'Input',
                      name: 'remark',
                      parents: ['body'],
                      id: 'body.remark',
                      dataKey: '985239_body.remark',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '985239_body',
                },
              ],
            },
            line_number: 4,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '005549',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_985239?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166632281192846050,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166632283236617060,
                    children: [],
                    condition: [],
                    desc: '失败',
                    elseIfs: [],
                  },
                ],
                line_number: 5,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166632284135865000,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '619348',
                      pageJsonId: '112282',
                      type: 'success',
                      value: '规格属性值新增成功！',
                    },
                    line_number: 6,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166632286410383460,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '667239',
                      pageJsonId: '112282',
                    },
                    line_number: 7,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166632286688992320,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '1472624',
                      pageJsonId: '112282',
                    },
                    line_number: 8,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse315.params = [] || [];
    CMDGenerator(eventDataifelse315, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse316: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0014226',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166632274398100350,
        elseIfs: [],
        line_number: 9,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 166632287274770660,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '126243',
              pageJsonId: '112282',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'modAttrValue',
              _apiCode: 'modAttrValue',
              _source: 'rhin',
              _serviceId: '900398509785321472',
              _serviceTitle: '修改规格属性值-tsm: modAttrValue',
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
                  dataKey: '126243_header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  _id: 'path',
                  compType: 'Input',
                  parents: [],
                  id: 'path',
                  dataKey: '126243_path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'query',
                  compType: 'Input',
                  parents: [],
                  id: 'query',
                  dataKey: '126243_query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  children: [
                    {
                      code: 'attrValueId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.attrValueId',
                      compType: 'Input',
                      name: 'attrValueId',
                      parents: ['body'],
                      id: 'body.attrValueId',
                      dataKey: '126243_body.attrValueId',
                      value: { type: ['context', '$state.bizId$'], code: '' },
                    },
                    {
                      code: 'attrId',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.attrId',
                      compType: 'Input',
                      name: 'attrId',
                      parents: ['body'],
                      id: 'body.attrId',
                      dataKey: '126243_body.attrId',
                      value: { type: ['context', '$state.attrId$'], code: '' },
                    },
                    {
                      code: 'attrValueCode',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueCode',
                      compType: 'Input',
                      name: 'attrValueCode',
                      parents: ['body'],
                      id: 'body.attrValueCode',
                      dataKey: '126243_body.attrValueCode',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'attrValueCode',
                      },
                    },
                    {
                      code: 'attrValueName',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueName',
                      compType: 'Input',
                      name: 'attrValueName',
                      parents: ['body'],
                      id: 'body.attrValueName',
                      dataKey: '126243_body.attrValueName',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'attrValueName',
                      },
                    },
                    {
                      code: 'attrValue',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValue',
                      compType: 'Input',
                      name: 'attrValue',
                      parents: ['body'],
                      id: 'body.attrValue',
                      dataKey: '126243_body.attrValue',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'attrValue',
                      },
                    },
                    {
                      code: 'sort',
                      attrType: 'field',
                      type: 'long',
                      mustFlag: 'F',
                      _id: 'body.sort',
                      compType: 'Input',
                      name: 'sort',
                      parents: ['body'],
                      id: 'body.sort',
                      dataKey: '126243_body.sort',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'sort',
                      },
                    },
                    {
                      code: 'attrValueDesc',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.attrValueDesc',
                      compType: 'Input',
                      name: 'attrValueDesc',
                      parents: ['body'],
                      id: 'body.attrValueDesc',
                      dataKey: '126243_body.attrValueDesc',
                      value: {
                        type: ['form', 'Form_88569657', 'validateFields'],
                        code: 'attrValueDesc',
                      },
                    },
                    {
                      code: 'remark',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      _id: 'body.remark',
                      compType: 'Input',
                      name: 'remark',
                      parents: ['body'],
                      id: 'body.remark',
                      dataKey: '126243_body.remark',
                    },
                  ],
                  _id: 'body',
                  compType: 'Input',
                  parents: [],
                  id: 'body',
                  dataKey: '126243_body',
                },
              ],
            },
            line_number: 10,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '005549',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$reply_126243?.resultCode$',
                      operate: '==',
                      manualValue: '0',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166632287275959170,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166632287275952220,
                    children: [],
                    condition: [],
                    desc: '失败',
                    elseIfs: [],
                  },
                ],
                line_number: 11,
                callback1: [
                  {
                    type: 'showMessage',
                    dataId: 166632287275900830,
                    options: {
                      compId: 'showMessage',
                      compName: 'system',
                      id: '364211',
                      pageJsonId: '112282',
                      type: 'success',
                      value: '规格属性值修改成功！',
                    },
                    line_number: 12,
                  },
                  {
                    type: 'closeModal',
                    dataId: 166632287275964100,
                    options: {
                      compId: 'closeModal',
                      compName: 'page',
                      id: '1531594',
                      pageJsonId: '112282',
                    },
                    line_number: 13,
                  },
                  {
                    type: 'okCallbackData',
                    dataId: 166632287275928030,
                    options: {
                      compId: 'okCallbackData',
                      compName: 'page',
                      id: '58999',
                      pageJsonId: '112282',
                    },
                    line_number: 14,
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse316.params = [] || [];
    CMDGenerator(eventDataifelse316, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal97: any = [
      {
        type: 'closeModal',
        dataId: '944395_1',
        options: { compId: 'page', compName: 'page', id: '771933' },
        line_number: 1,
      },
    ];
    eventDatacloseModal97.params = [] || [];
    CMDGenerator(eventDatacloseModal97, {}, 'closeModal', {
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
    // console 166799287206582700
    console.log(state, 'state');
    // console 166797884751893900
    console.log(state?.bizId);
    // console 166797886328394430
    console.log(state?.sceneCode);
    // console 166797886238302900
    console.log(state?.attrValueObj);
    const eventDataifelse317: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0014226',
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
        dataId: 166632264926092100,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 166632269786555840,
            options: {
              compId: 'Form_88569657',
              compLib: 'comm',
              pageJsonId: '112282',
              compName: 'Form',
              id: '0883544',
              params: '$state.attrValueObj$',
            },
            line_number: 6,
          },
          {
            type: 'setDisable',
            dataId: 166632270579771740,
            options: {
              compId: 'Form_88569657',
              compLib: 'comm',
              pageJsonId: '112282',
              compName: 'Form',
              id: '053664',
              disabled: 'true',
            },
            line_number: 7,
          },
        ],
      },
    ];
    eventDataifelse317.params = [] || [];
    CMDGenerator(eventDataifelse317, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse318: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0014226',
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
        dataId: 166632266820421500,
        elseIfs: [],
        line_number: 8,
      },
    ];
    eventDataifelse318.params = [] || [];
    CMDGenerator(eventDataifelse318, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDataifelse319: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '0014226',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.sceneCode$',
              operate: '==',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166632266898925250,
        elseIfs: [],
        line_number: 9,
        callback1: [
          {
            type: 'setCurrentFormValues',
            dataId: 166632271704541060,
            options: {
              compId: 'Form_88569657',
              compLib: 'comm',
              pageJsonId: '112282',
              compName: 'Form',
              id: '4436515',
              params: '$state.attrValueObj$',
            },
            line_number: 10,
          },
        ],
      },
    ];
    eventDataifelse319.params = [] || [];
    CMDGenerator(eventDataifelse319, {}, 'ifelse', {
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
      className="__CustomClass_112282__"
    >
      <View
        className="View_View_112282_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_112282_1',
          uid: 'View_112282_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_112282_1')}
        {...injectData}
      >
        <View
          className="View_View_6073787"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6073787',
            uid: 'View_6073787',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_6073787')}
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
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_88569657'}
            $$componentItem={{
              id: 'Form_88569657',
              uid: 'Form_88569657',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_88569657')}
            {...injectData}
          >
            <Input
              name={'属性值名称'}
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
                id: 'Input_622746',
                uid: 'Input_622746',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_622746')}
              {...injectData}
            />
            <Input
              name={'属性值编码'}
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
              fieldName={'attrValueCode'}
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
                id: 'Input_445076',
                uid: 'Input_445076',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_445076')}
              {...injectData}
            />
            <Input
              name={'属性取值'}
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
              formItemIndex={2}
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
                id: 'Input_294761',
                uid: 'Input_294761',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_294761')}
              {...injectData}
            />
            <Input
              name={'排序'}
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
              formItemIndex={3}
              fieldName={'sort'}
              regexp={[
                {
                  id: '348086',
                  title: '按钮1',
                  iconPos: 'left',
                  regexpType: 1,
                  message: '请输入整数格式',
                  pattern: '/^[-+]?\\d*$/',
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
                id: 'Input_9469074',
                uid: 'Input_9469074',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_9469074')}
              {...injectData}
            />
            <Input
              name={'创建人'}
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
              disabled={false}
              visible={true}
              readOnly={true}
              fieldName={'createStaffName'}
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
                id: 'Input_839969',
                uid: 'Input_839969',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_839969')}
              {...injectData}
            />
            <Input
              name={'创建时间'}
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
              formItemIndex={5}
              disabled={false}
              visible={true}
              readOnly={true}
              fieldName={'createDate'}
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
                id: 'Input_9602988',
                uid: 'Input_9602988',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_9602988')}
              {...injectData}
            />
            <Input
              name={'修改人'}
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
              fieldName={'updateStaff'}
              disabled={false}
              visible={true}
              readOnly={true}
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
                id: 'Input_0199095',
                uid: 'Input_0199095',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_0199095')}
              {...injectData}
            />
            <Input
              name={'修改时间'}
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
              formItemIndex={7}
              disabled={false}
              visible={true}
              readOnly={true}
              fieldName={'updateDate'}
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
                id: 'Input_097585',
                uid: 'Input_097585',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_097585')}
              {...injectData}
            />
            <TextArea
              name={'属性值描述'}
              selfSpan={24}
              labelCol={'4'}
              wrapperCol={20}
              readOnly={false}
              disabled={false}
              visible={true}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={8}
              fieldName={'attrValueDesc'}
              $$componentItem={{
                id: 'TextArea_5518127',
                uid: 'TextArea_5518127',
                type: 'TextArea',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_5518127')}
              {...injectData}
            />
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Guigeshuxingzhixiangqing3756$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', attrId: '', attrValueObj: '' },
});
