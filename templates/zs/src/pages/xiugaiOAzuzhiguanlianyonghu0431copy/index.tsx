// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, Select } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '953286108062449664';
const XiugaiOAzuzhiguanlianyonghu0431copy$$Modal: React.FC<PageProps> = ({
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
    const eventDatavalidateCurrentForm23: any = [
      {
        type: 'validateCurrentForm',
        dataId: 167888746623868160,
        options: {
          compId: 'Form_5258874_299714',
          compLib: 'comm',
          pageJsonId: '044253',
          compName: 'Form',
          id: '819684',
        },
        line_number: 1,
        callback1: [
          {
            type: 'getSelectedData',
            dataId: 168353914707910600,
            options: {
              compId: 'Select_892876_5343363',
              compLib: 'comm',
              pageJsonId: '044253',
              compName: 'Select',
              id: '7285081',
            },
            line_number: 2,
            callback1: [
              {
                type: 'customActionCode',
                dataId: 168353915611305730,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '544541',
                  pageJsonId: '044253',
                  code: 'function main(data,state,success,fail){console.log("\\u7EC4\\u5408\\u540E\\u7684\\u6570\\u636E\\uFF1A",{"jobLevel":Form_5258874_299714.jobLevel,"orgUserRelId":state.info["orgUserRelId"]});success({"jobLevel":Form_5258874_299714.jobLevel,"orgUserRelId":state.info["orgUserRelId"]})};',
                },
                line_number: 3,
                callback1: [
                  {
                    type: 'apiRequest',
                    dataId: 168353915611319400,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '723455',
                      pageJsonId: '044253',
                      sync: false,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'modDcOaOrgUserRel',
                      _apiCode: 'modDcOaOrgUserRel',
                      _source: 'rhin',
                      _serviceId: '952864390049382400',
                      _serviceTitle:
                        '修改OA组织和用户关系-hyj: modDcOaOrgUserRel',
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
                              dataKey: '723455_root.header',
                              key: '0-0',
                              parentType: 'object',
                              parentKey: '0',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'root.path',
                              compType: 'Input',
                              parents: ['root'],
                              id: 'root.path',
                              dataKey: '723455_root.path',
                              key: '0-1',
                              parentType: 'object',
                              parentKey: '0',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'root.query',
                              compType: 'Input',
                              parents: ['root'],
                              id: 'root.query',
                              dataKey: '723455_root.query',
                              key: '0-2',
                              parentType: 'object',
                              parentKey: '0',
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
                                  _id: 'root.body.orgUserRelId',
                                  compType: 'Input',
                                  name: 'orgUserRelId',
                                  parents: ['root', 'body'],
                                  id: 'root.body.orgUserRelId',
                                  dataKey: '723455_root.body.orgUserRelId',
                                  value: {
                                    type: ['context', '$data_544541$'],
                                    code: 'orgUserRelId',
                                  },
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-1',
                                },
                                {
                                  code: 'jobLevel',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  _id: 'root.body.jobLevel',
                                  compType: 'Input',
                                  name: 'jobLevel',
                                  parents: ['root', 'body'],
                                  id: 'root.body.jobLevel',
                                  dataKey: '723455_root.body.jobLevel',
                                  value: {
                                    type: ['context', '$data_544541$'],
                                    code: 'jobLevel',
                                  },
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-2',
                                },
                                {
                                  code: 'isDefault',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.isDefault',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-0',
                                  id: 'root.body.isDefault',
                                  dataKey: '723455_root.body.isDefault',
                                  value: {
                                    type: ['customize'],
                                    code: '$selectedData_7285081[0].value$',
                                  },
                                },
                                {
                                  code: 'orgOrder',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.orgOrder',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-3',
                                  id: 'root.body.orgOrder',
                                  dataKey: '723455_root.body.orgOrder',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'orgInfo.orgOrder',
                                  },
                                },
                                {
                                  code: 'orgCode',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.orgCode',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-4',
                                  id: 'root.body.orgCode',
                                  dataKey: '723455_root.body.orgCode',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'orgInfo.orgCode',
                                  },
                                },
                                {
                                  code: 'orgName',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.orgName',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-5',
                                  id: 'root.body.orgName',
                                  dataKey: '723455_root.body.orgName',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'orgInfo.orgName',
                                  },
                                },
                                {
                                  code: 'orgShortName',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'root.body.orgShortName',
                                  compType: 'Input',
                                  parents: ['root', 'body'],
                                  parentType: 'object',
                                  parentKey: '0-3',
                                  key: '0-3-6',
                                  id: 'root.body.orgShortName',
                                  dataKey: '723455_root.body.orgShortName',
                                  value: {
                                    type: ['datasource', 'pageData', 'data'],
                                    code: 'orgInfo.orgShortName',
                                  },
                                },
                              ],
                              _id: 'root.body',
                              compType: 'Input',
                              parents: ['root'],
                              id: 'root.body',
                              dataKey: '723455_root.body',
                              key: '0-3',
                              parentType: 'object',
                              parentKey: '0',
                            },
                          ],
                          _id: 'root',
                          compType: 'Input',
                          isRoot: true,
                          parents: [],
                          key: '0',
                          id: 'root',
                          dataKey: '723455_root',
                        },
                      ],
                      _sourceName: '修改OA组织和用户关系-hyj',
                    },
                    line_number: 4,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '826922',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_723455.resultCode$',
                              operate: '!=',
                              manualValue: '-1',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 168354632692811040,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 168354661989870080,
                            children: [],
                            condition: [],
                            value: 'elseIf',
                            desc: '',
                          },
                        ],
                        line_number: 5,
                        callback1: [
                          {
                            type: 'closeModal',
                            dataId: 168354659950518940,
                            options: {
                              compId: 'page',
                              compName: 'page',
                              id: '5665026',
                            },
                            line_number: 6,
                          },
                          {
                            type: 'callParentCustomFunc',
                            dataId: 168354661071220350,
                            options: {
                              compId: 'callParentCustomFunc',
                              compName: 'system',
                              id: '3833337',
                              pageJsonId: '044253',
                              pathname: '/oaUserManage',
                              pageId: '885366956034052096',
                              customFuncName: 'refreshOaUserRefTable',
                              customFuncParams: 'object',
                              modalPath: '/oaUserManage',
                            },
                            line_number: 7,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                      },
                      {
                        type: 'console',
                        dataId: 168354670423498100,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '842418',
                          pageJsonId: '044253',
                          value: [
                            '这里。。。',
                            '$reply_723455.resultObject$',
                            '$reply_723455.resultObject$',
                            '$reply_723455$',
                          ],
                        },
                        line_number: 8,
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
        ],
        callback2: [],
      },
    ];
    eventDatavalidateCurrentForm23.params = [] || [];
    CMDGenerator(eventDatavalidateCurrentForm23, {}, 'validateCurrentForm', {
      id: 'validateCurrentForm',
      name: 'validateCurrentForm',
      type: 'validateCurrentForm',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal8: any = [
      {
        type: 'closeModal',
        dataId: '5770058_1',
        options: { compId: 'page', compName: 'page', id: '703515' },
        line_number: 1,
      },
    ];
    eventDatacloseModal8.params = [] || [];
    CMDGenerator(eventDatacloseModal8, {}, 'closeModal', {
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
    const eventDatasetCurrentFormValues: any = [
      {
        type: 'setCurrentFormValues',
        dataId: 167888743185561100,
        options: {
          compId: 'Form_5258874_299714',
          compLib: 'comm',
          pageJsonId: '044253',
          compName: 'Form',
          id: '586628',
          params: '$state.info$',
        },
        line_number: 1,
      },
    ];
    eventDatasetCurrentFormValues.params = [] || [];
    CMDGenerator(eventDatasetCurrentFormValues, {}, 'setCurrentFormValues', {
      id: 'setCurrentFormValues',
      name: 'setCurrentFormValues',
      type: 'setCurrentFormValues',
      platform: 'undefined',
    });
    const eventDataapiRequest162: any = [
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
              key: '0',
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
                  parentType: 'object',
                  parentKey: '1',
                  key: '1-0',
                },
              ],
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '2546398_path',
              key: '1',
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
              key: '2',
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
              key: '3',
            },
          ],
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
        },
        line_number: 2,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167888744802695000,
            options: {
              compId: 'Select_7779775_401179',
              compLib: 'comm',
              pageJsonId: '044253',
              compName: 'Select',
              id: '7165798',
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
    eventDataapiRequest162.params = [] || [];
    CMDGenerator(eventDataapiRequest162, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    }); // console 170607916692211900
    console.log(state);

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
        $$componentItem={{
          id: 'View_044253_1_874381',
          uid: 'View_044253_1_874381',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_044253_1_874381')}
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
            id: 'Form_5258874_299714',
            uid: 'Form_5258874_299714',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_5258874_299714')}
          {...injectData}
        >
          <Input
            name={'组织编码'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'修改'}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={0}
            fieldName={'orgCode'}
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
              id: 'Input_3411417_748539',
              uid: 'Input_3411417_748539',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            onIconClick={() => {
              const eventDatashowCustomModal45: any = [
                {
                  type: 'showCustomModal',
                  dataId: 170605902854634700,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '617275',
                    pageJsonId: '044253',
                    modalname: '/xuanzerenyuanguanlianzu22223072copy',
                    pageId: '1067262045113536512',
                    modalPath: '/xuanzerenyuanguanlianzu22223072copy',
                    paramsObj: { isRadio: '1' },
                    paramsObjKeyValueMap: { isRadio: '1' },
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'apiRequest',
                      dataId: 170607762420365730,
                      shielding: true,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '594914',
                        pageJsonId: '044253',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'updateDcOaOrgUserRelSingleUser',
                        _apiCode: 'updateDcOaOrgUserRelSingleUser',
                        _source: 'rhin',
                        _sourceName: '单用户修改组织-cyx',
                        _serviceId: '1067328749122342912',
                        _serviceTitle:
                          '单用户修改组织-cyx: updateDcOaOrgUserRelSingleUser',
                        valueType: 'object',
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
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-0',
                                id: 'root.header',
                                dataKey: '594914_root.header',
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
                                dataKey: '594914_root.path',
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
                                dataKey: '594914_root.query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'orgCodes',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'root.body.orgCodes',
                                    compType: 'Input',
                                    parents: ['root', 'body'],
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-0',
                                    id: 'root.body.orgCodes',
                                    dataKey: '594914_root.body.orgCodes',
                                    value: {
                                      type: ['context', '$okData_617275$'],
                                      code: '',
                                    },
                                  },
                                  {
                                    code: 'usrKey',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'root.body.usrKey',
                                    compType: 'Input',
                                    parents: ['root', 'body'],
                                    parentType: 'object',
                                    parentKey: '0-3',
                                    key: '0-3-1',
                                    id: 'root.body.usrKey',
                                    dataKey: '594914_root.body.usrKey',
                                  },
                                ],
                                _id: 'root.body',
                                compType: 'Input',
                                parents: ['root'],
                                parentType: 'object',
                                parentKey: '0',
                                key: '0-3',
                                id: 'root.body',
                                dataKey: '594914_root.body',
                              },
                            ],
                            _id: 'root',
                            compType: 'Input',
                            isRoot: true,
                            parents: [],
                            key: '0',
                            id: 'root',
                            dataKey: '594914_root',
                          },
                        ],
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'okCallbackData',
                          dataId: 170608211463306700,
                          shielding: true,
                          options: {
                            compId: 'okCallbackData',
                            compName: 'page',
                            id: '0056468',
                            pageJsonId: '044253',
                            params: '$okData_617275$',
                          },
                          line_number: 3,
                        },
                      ],
                      callback2: [],
                    },
                    {
                      type: 'console',
                      dataId: 170607770282606400,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '0548027',
                        pageJsonId: '044253',
                        value: [''],
                      },
                      line_number: 4,
                    },
                    {
                      type: 'console',
                      dataId: 170608327957069700,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '086087',
                        pageJsonId: '044253',
                        value: ['$okData_617275.orgCode$'],
                      },
                      line_number: 5,
                    },
                    {
                      type: 'setValue',
                      dataId: 170608329376254000,
                      options: {
                        compId: [
                          'Input_3411417_748539',
                          'Input_6520955_200898',
                        ],
                        compLib: 'comm',
                        pageJsonId: '044253',
                        compName: 'Input',
                        id: '252001',
                        valueList: {
                          Input_3411417_748539: '$okData_617275.orgCode$',
                          Input_6520955_200898: '$okData_617275.orgName$',
                        },
                        compid: [
                          'Input_3411417_748539',
                          'Input_6520955_200898',
                        ],
                      },
                      line_number: 6,
                      callback1: [],
                    },
                    {
                      type: 'setDataSource',
                      dataId: 17060862355932156,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '45528',
                        pageJsonId: '044253',
                        dataSourceId: 170608622359485100,
                        dataSourceName: 'pageData',
                        dataSourceRelType: 'custom',
                        dataSourceSetValue: [
                          {
                            attrId: '325501',
                            code: 'orgInfo',
                            name: '属性',
                            type: 'object',
                            initialData: { type: 'static' },
                            showInput: true,
                            value: {
                              type: ['context', '$okData_617275$'],
                              code: '',
                            },
                          },
                        ],
                        operateType: 1,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 7,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatashowCustomModal45.params = [] || [];
              CMDGenerator(eventDatashowCustomModal45, {}, 'showCustomModal', {
                id: 'showCustomModal',
                name: 'showCustomModal',
                type: 'showCustomModal',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_3411417_748539')}
            {...injectData}
          />
          <Input
            name={'组织名称'}
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
            fieldName={'orgName'}
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
              id: 'Input_6520955_200898',
              uid: 'Input_6520955_200898',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            onMouseEnter={() => {
              // console 170608660560733200
              console.log(data?.pageData);
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Input_6520955_200898')}
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
            formItemIndex={2}
            fieldName={'jobLevel'}
            $$componentItem={{
              id: 'Select_7779775_401179',
              uid: 'Select_7779775_401179',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_7779775_401179')}
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
            formItemIndex={3}
            fieldName={'isDefault'}
            dataSource={attrDataMap['PUB_001']}
            $$componentItem={{
              id: 'Select_892876_5343363',
              uid: 'Select_892876_5343363',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Select_892876_5343363')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(XiugaiOAzuzhiguanlianyonghu0431copy$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', info: '', usrkey: '' },
});
