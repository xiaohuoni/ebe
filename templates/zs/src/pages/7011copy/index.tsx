// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  HorizontalView,
  Text,
  Form,
  TextArea,
} from '@/components/factory';

import BusiComp640428 from '@/components/BusiComp640428';

import BusiComp186748 from '@/components/BusiComp186748';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '977752295815442432';
const $7011copy$$Page: React.FC<PageProps> = ({
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
  const sceneValidate1 = (options_4882157: any) => {
    const eventDatavalidateCurrentForm9: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166961807961938560,
        options: {
          compId: 'Form_449441_9243547',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Form',
          id: '155137',
        },
        line_number: 1,
        callback1: [
          {
            type: 'return',
            dataId: 166980076639518340,
            options: {
              compId: 'return',
              compName: 'system',
              id: '163519',
              pageJsonId: '537892',
              returnType: 'success',
              returnValue: '$Form_449441_9243547$',
            },
            line_number: 2,
          },
          {
            type: 'console',
            dataId: 166980181692303100,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '805956',
              pageJsonId: '537892',
              value: ['押金校验成功'],
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'return',
            dataId: 166980077484361180,
            options: {
              compId: 'return',
              compName: 'system',
              id: '817098',
              pageJsonId: '537892',
              returnType: 'failure',
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatavalidateCurrentForm9.params =
      [
        {
          title: '事件入参',
          name: 'options_4882157',
          value: '$options_4882157$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm9,
      { options_4882157 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };
  const sceneFileUpload = (options_784849: any) => {
    const eventDatacustomActionCode195: any = [
      {
        type: 'customActionCode',
        dataId: 167236951336422530,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '149471',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){console.log("data.sceneSubmit.",data.sceneSubmit);data.sceneSubmit.fileInfo=options_784849;success(data.sceneSubmit)};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'ifelse',
            condition: [
              {
                condId: '626343',
                options: {
                  useManual: true,
                  useObject: false,
                  context: '$state.props.orderStatus$',
                  operate: '!=',
                  manualValue: 'M',
                },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 168387484384322020,
            elseIfs: [],
            line_number: 2,
            callback1: [
              {
                type: 'callCustomPageFunc',
                dataId: 168387485880320130,
                options: {
                  compId: 'callCustomPageFunc',
                  compName: 'system',
                  id: '9063794',
                  pageJsonId: '537892',
                  pathname: '/yunnan_auditOrderPrepare',
                  pageId: '973768806213877760',
                  modalPath: '/yunnan_auditOrderPrepare',
                  customFuncName: 'updateFactor',
                  customFuncParams: 'object',
                  paramsObj: {
                    itemList: '$data_149471$',
                    childCatalogCode: '$state.props.catalogCode$',
                  },
                  paramsObjKeyValueMap: {
                    itemList: '$data_149471$',
                    childCatalogCode: '$state.props.catalogCode$',
                  },
                },
                line_number: 3,
                callback1: [],
                callback2: [],
              },
            ],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode195.params =
      [
        {
          title: '事件入参',
          name: 'options_784849',
          value: '$options_784849$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode195,
      { options_784849 },
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
    sceneValidate1,
    sceneFileUpload,
  }));

  useEffect(() => {
    // console 168195799182723520
    console.log('押金减免-state', state);
    const eventDataifelse270: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '56263',
            options: {
              context: '$state.props.itemList$',
              operate: 'empty',
              manualValue: 'M',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166132402524071650,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 168232796368380600,
            children: [
              {
                dataName: 'action',
                dataId: 168232796951480400,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 168232796951458530,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168232796951437950,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168232796951419360,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 168232796951408640,
                            children: [],
                            value: 'callback2',
                            params: [],
                          },
                        ],
                        todoOptions: [
                          'selectAllDataSource',
                          'dataSourceSetValue',
                          'onlySetPatch',
                        ],
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '60175094',
                          pageJsonId: '537892',
                          dataSourceId: 166124254360037760,
                          dataSourceName: 'factorForm',
                          dataSourceRelType: 'custom',
                          dataSourceSetValue: [
                            {
                              attrId: '418247',
                              code: 'audiDesc',
                              name: '审批描述',
                              type: 'string',
                              initialData: { type: 'static' },
                              showInput: true,
                            },
                            {
                              attrId: '0241587',
                              code: 'applyReason',
                              name: '申请原因',
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
                        actionObjId: 'setDataSource',
                        actionObjName: 'page',
                        value: 'setDataSource',
                        line_number: 7,
                      },
                      {
                        dataName: 'action',
                        dataId: 168385928021204320,
                        children: [],
                        todoOptions: ['visible', 'selectComp'],
                        options: {
                          compId: ['View_464629'],
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Checkbox',
                          id: '53846',
                          visible: 'true',
                          compid: ['View_464629'],
                        },
                        actionObjId: 'Checkbox_882584_5289015_6659047',
                        actionObjName: 'Checkbox',
                        value: 'setVisible',
                        compLib: 'comm',
                        line_number: 8,
                      },
                      {
                        dataName: 'action',
                        dataId: 168385929800440670,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168385929800439900,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                        ],
                        todoOptions: ['value'],
                        options: {
                          compId: 'Text_7477844',
                          compLib: 'custom',
                          pageJsonId: '537892',
                          compName: 'Text',
                          id: '012035',
                          value: '$data_658614$',
                        },
                        actionObjId: 'Text_7477844',
                        actionObjName: 'Text',
                        value: 'setCompContentValue',
                        compLib: 'custom',
                        line_number: 9,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 168232796951485400,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'editorCode'],
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '658614',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _state$props;var item=state.props.itemList;var customeItem=(_state$props=state.props)===null||_state$props===void 0?void 0:_state$props.customerList[0];console.log("\\u83B7\\u53D6\\u5BA2\\u6237\\u4FE1\\u606F\\uFF08\\u96C6\\u56E2\\u4FE1\\u606F\\uFF09",customeItem);data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode=="auditDesc"&&customeItem){factorForm[attrList[i].attrCode]="\\u5BA2\\u6237\\u540D\\u79F0\\uFF1A"+customeItem.custName+"    \\u5BA2\\u6237\\u7F16\\u7801\\uFF1A"+customeItem.custCode+"\\n"+attrList[i].attrValue}else{factorForm[attrList[i].attrCode]=attrList[i].attrValue}}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;var approveGradeNameText="\\u573A\\u666F\\u6700\\u9AD8\\u5BA1\\u6279\\u7B49\\u7EA7\\uFF1A"+item.approveGradeName;success(approveGradeNameText)};',
                  actionTitle: 'itemLits数据转换赋值',
                },
                actionObjId: 'customActionCode',
                actionObjName: 'page',
                value: 'customActionCode',
                line_number: 6,
              },
              {
                dataName: 'action',
                dataId: 168232797726773250,
                children: [
                  {
                    dataName: 'callback',
                    dataId: 168232797726794880,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168232797726716000,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168232797726720350,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 168232797726722660,
                            children: [],
                            value: 'callback2',
                            params: [],
                          },
                        ],
                        todoOptions: [
                          'selectAllDataSource',
                          'dataSourceSetValue',
                          'onlySetPatch',
                        ],
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '241939',
                          pageJsonId: '537892',
                          dataSourceId: 166192841018643170,
                          dataSourceName: 'fileInfoList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              code: 'fileName',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '附件名称',
                              defaultValue: '',
                              name: '附件名称',
                              attrId: '458544',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                            },
                            {
                              code: 'filePath',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '附件文件路径',
                              defaultValue: '',
                              name: '附件文件路径',
                              attrId: '6354087',
                              initialData: {
                                type: 'static',
                                value: '附件文件路径',
                              },
                              parentKey: '1',
                              parentType: 'object',
                            },
                            {
                              code: 'fileServerType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '附件文件服务器类型',
                              defaultValue: '',
                              name: '附件文件服务器类型',
                              attrId: '184934',
                              initialData: {
                                type: 'static',
                                value: '附件文件服务器类型',
                              },
                              parentKey: '1',
                              parentType: 'object',
                            },
                            {
                              code: 'fileSubType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '附件分类-细类',
                              defaultValue: '',
                              name: '属性',
                              attrId: '551676',
                              initialData: {
                                type: 'static',
                                value: '附件分类-细类',
                              },
                              parentKey: '1',
                              parentType: 'object',
                            },
                            {
                              code: 'fileType',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '附件分类-大类',
                              defaultValue: '',
                              name: '附件分类-大类',
                              attrId: '383524',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                            },
                            {
                              code: 'fileUrl',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '附件url地址',
                              defaultValue: '',
                              name: '附件url地址',
                              attrId: '726875',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                            },
                            {
                              code: 'tacheCode',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '环节编码',
                              defaultValue: '',
                              name: '环节编码',
                              attrId: '865444',
                              initialData: { type: 'static', value: '' },
                              parentKey: '1',
                              parentType: 'object',
                            },
                            {
                              attrId: '7419638',
                              code: 'fileCode',
                              name: '文件编码',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '097484',
                              code: 'createTime',
                              name: '创建时间',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '604675',
                              code: 'createStaff',
                              name: '创建人',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                            {
                              attrId: '729925',
                              code: 'fileTypeName',
                              name: '附件类型',
                              type: 'string',
                              initialData: { type: 'static' },
                            },
                          ],
                          newData: '$data_006524$',
                          operateType: 3,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        actionObjId: 'setDataSource',
                        actionObjName: 'page',
                        value: 'setDataSource',
                        line_number: 11,
                      },
                      {
                        dataName: 'condition',
                        dataId: 168232797726726900,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168232797726794000,
                            children: [],
                            todoOptions: ['visible'],
                            options: {
                              compId: 'Table_5369494',
                              compLib: 'comm',
                              pageJsonId: '537892',
                              compName: 'Table',
                              id: '63754',
                              visible: '',
                            },
                            actionObjId: 'Table_5369494',
                            actionObjName: 'Table',
                            value: 'setVisible',
                            compLib: 'comm',
                            line_number: 13,
                          },
                        ],
                        elseIfs: [],
                        condition: [
                          {
                            condId: '2984965',
                            options: {
                              context: '$data_006524$',
                              operate: 'empty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                          {
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$state.props.orderStatus$',
                              operate: '==',
                              manualValue: 'V',
                            },
                            condId: '8205424',
                            connector: '&&',
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        desc: '没有附件数据，且为处理详情时',
                        line_number: 12,
                      },
                    ],
                    value: 'callback1',
                    params: [],
                  },
                  {
                    dataName: 'callback',
                    dataId: 168232797726720480,
                    children: [],
                    value: 'callback2',
                    params: [],
                  },
                ],
                todoOptions: ['actionTitle', 'editorCode'],
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '006524',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var item=state.props.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
                  actionTitle: '附件信息赋值',
                },
                actionObjId: 'customActionCode',
                actionObjName: 'page',
                value: 'customActionCode',
                line_number: 10,
              },
              {
                dataName: 'condition',
                dataId: 168232798325927520,
                children: [
                  {
                    dataName: 'action',
                    dataId: 168232798325910620,
                    children: [],
                    todoOptions: ['visible'],
                    options: {
                      compId: ['Input_361479_887285_3596799', 'View_464629'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '4724549',
                      visible: 'true',
                      compid: ['Input_361479_887285_3596799', 'View_464629'],
                    },
                    actionObjId: 'Input_361479_887285_3596799',
                    actionObjName: 'Input',
                    value: 'setVisible',
                    compLib: 'comm',
                    line_number: 15,
                  },
                  {
                    dataName: 'action',
                    dataId: 168232798325964930,
                    children: [],
                    todoOptions: ['disabled'],
                    options: {
                      compId: [
                        'Form_449441_9243547',
                        'Input_361479_887285_3596799',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Form',
                      id: '0561094',
                      disabled: 'true',
                      compid: [
                        'Form_449441_9243547',
                        'Input_361479_887285_3596799',
                      ],
                    },
                    actionObjId: 'Form_449441_9243547',
                    actionObjName: 'Form',
                    value: 'setDisable',
                    compLib: 'comm',
                    line_number: 16,
                  },
                ],
                elseIfs: [],
                condition: [
                  {
                    condId: '626343',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.props.orderStatus$',
                      operate: '!=',
                      manualValue: 'M',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                desc: '非预提交',
                line_number: 14,
              },
            ],
            condition: [],
            value: 'elseIf',
            desc: '不为空',
            callback: [
              {
                type: 'customActionCode',
                dataId: 168232796951480400,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '658614',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var _state$props;var item=state.props.itemList;var customeItem=(_state$props=state.props)===null||_state$props===void 0?void 0:_state$props.customerList[0];console.log("\\u83B7\\u53D6\\u5BA2\\u6237\\u4FE1\\u606F\\uFF08\\u96C6\\u56E2\\u4FE1\\u606F\\uFF09",customeItem);data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;if(attrList!=undefined&&attrList.length>0){for(var i=0;i<attrList.length;i++){if(attrList[i].attrCode=="auditDesc"&&customeItem){factorForm[attrList[i].attrCode]="\\u5BA2\\u6237\\u540D\\u79F0\\uFF1A"+customeItem.custName+"    \\u5BA2\\u6237\\u7F16\\u7801\\uFF1A"+customeItem.custCode+"\\n"+attrList[i].attrValue}else{factorForm[attrList[i].attrCode]=attrList[i].attrValue}}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;var approveGradeNameText="\\u573A\\u666F\\u6700\\u9AD8\\u5BA1\\u6279\\u7B49\\u7EA7\\uFF1A"+item.approveGradeName;success(approveGradeNameText)};',
                  actionTitle: 'itemLits数据转换赋值',
                },
                line_number: 6,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 168232796951437950,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '60175094',
                      pageJsonId: '537892',
                      dataSourceId: 166124254360037760,
                      dataSourceName: 'factorForm',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '418247',
                          code: 'audiDesc',
                          name: '审批描述',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: true,
                        },
                        {
                          attrId: '0241587',
                          code: 'applyReason',
                          name: '申请原因',
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
                    line_number: 7,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'setVisible',
                    dataId: 168385928021204320,
                    options: {
                      compId: ['View_464629'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Checkbox',
                      id: '53846',
                      visible: 'true',
                      compid: ['View_464629'],
                    },
                    line_number: 8,
                  },
                  {
                    type: 'setCompContentValue',
                    dataId: 168385929800440670,
                    options: {
                      compId: 'Text_7477844',
                      compLib: 'custom',
                      pageJsonId: '537892',
                      compName: 'Text',
                      id: '012035',
                      value: '$data_658614$',
                    },
                    line_number: 9,
                    callback1: [],
                  },
                ],
                callback2: [],
              },
              {
                type: 'customActionCode',
                dataId: 168232797726773250,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '006524',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var item=state.props.itemList;data.sceneSubmit=item;success(item.fileInfo)};',
                  actionTitle: '附件信息赋值',
                },
                line_number: 10,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 168232797726716000,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '241939',
                      pageJsonId: '537892',
                      dataSourceId: 166192841018643170,
                      dataSourceName: 'fileInfoList',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          code: 'fileName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件名称',
                          defaultValue: '',
                          name: '附件名称',
                          attrId: '458544',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'filePath',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件文件路径',
                          defaultValue: '',
                          name: '附件文件路径',
                          attrId: '6354087',
                          initialData: {
                            type: 'static',
                            value: '附件文件路径',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'fileServerType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件文件服务器类型',
                          defaultValue: '',
                          name: '附件文件服务器类型',
                          attrId: '184934',
                          initialData: {
                            type: 'static',
                            value: '附件文件服务器类型',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'fileSubType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件分类-细类',
                          defaultValue: '',
                          name: '属性',
                          attrId: '551676',
                          initialData: {
                            type: 'static',
                            value: '附件分类-细类',
                          },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'fileType',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件分类-大类',
                          defaultValue: '',
                          name: '附件分类-大类',
                          attrId: '383524',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'fileUrl',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '附件url地址',
                          defaultValue: '',
                          name: '附件url地址',
                          attrId: '726875',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          code: 'tacheCode',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          exampleValue: '环节编码',
                          defaultValue: '',
                          name: '环节编码',
                          attrId: '865444',
                          initialData: { type: 'static', value: '' },
                          parentKey: '1',
                          parentType: 'object',
                        },
                        {
                          attrId: '7419638',
                          code: 'fileCode',
                          name: '文件编码',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '097484',
                          code: 'createTime',
                          name: '创建时间',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '604675',
                          code: 'createStaff',
                          name: '创建人',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '729925',
                          code: 'fileTypeName',
                          name: '附件类型',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      newData: '$data_006524$',
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 11,
                    callback1: [],
                    callback2: [],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '2984965',
                        options: { context: '$data_006524$', operate: 'empty' },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.props.orderStatus$',
                          operate: '==',
                          manualValue: 'V',
                        },
                        condId: '8205424',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168232797726726900,
                    elseIfs: [],
                    line_number: 12,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 168232797726794000,
                        options: {
                          compId: 'Table_5369494',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '63754',
                          visible: '',
                        },
                        line_number: 13,
                      },
                    ],
                  },
                ],
                callback2: [],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '626343',
                    options: {
                      useManual: true,
                      useObject: false,
                      context: '$state.props.orderStatus$',
                      operate: '!=',
                      manualValue: 'M',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168232798325927520,
                elseIfs: [],
                line_number: 14,
                callback1: [
                  {
                    type: 'setVisible',
                    dataId: 168232798325910620,
                    options: {
                      compId: ['Input_361479_887285_3596799', 'View_464629'],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '4724549',
                      visible: 'true',
                      compid: ['Input_361479_887285_3596799', 'View_464629'],
                    },
                    line_number: 15,
                  },
                  {
                    type: 'setDisable',
                    dataId: 168232798325964930,
                    options: {
                      compId: [
                        'Form_449441_9243547',
                        'Input_361479_887285_3596799',
                      ],
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Form',
                      id: '0561094',
                      disabled: 'true',
                      compid: [
                        'Form_449441_9243547',
                        'Input_361479_887285_3596799',
                      ],
                    },
                    line_number: 16,
                  },
                ],
              },
            ],
          },
        ],
        line_number: 2,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 168232800336825760,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '922024',
              pageJsonId: '537892',
              sync: false,
              actionTitle: '查询场景要素信息',
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'eccSelectCataLogTierByCode',
              _apiCode: 'eccSelectCataLogTierByCode',
              _source: 'rhin',
              _sourceName: '(ecc核心)根据场景编码获取上两级信息',
              _serviceId: '966522299007082496',
              _serviceTitle:
                '(ecc核心)根据场景编码获取上两级信息: eccSelectCataLogTierByCode',
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
                      dataKey: '10616948_root.header',
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
                      dataKey: '10616948_root.path',
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
                      dataKey: '10616948_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'isQryAll',
                          attrType: 'field',
                          type: 'boolean',
                          mustFlag: 'F',
                          _id: 'root.body.isQryAll',
                          compType: 'Input',
                          name: 'isQryAll',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.isQryAll',
                          dataKey: '10616948_root.body.isQryAll',
                        },
                        {
                          code: 'pageNum',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'root.body.pageNum',
                          compType: 'Input',
                          name: 'pageNum',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.pageNum',
                          dataKey: '10616948_root.body.pageNum',
                        },
                        {
                          code: 'pageSize',
                          attrType: 'field',
                          type: 'long',
                          mustFlag: 'F',
                          _id: 'root.body.pageSize',
                          compType: 'Input',
                          name: 'pageSize',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-2',
                          id: 'root.body.pageSize',
                          dataKey: '10616948_root.body.pageSize',
                        },
                        {
                          code: 'sceneNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.sceneNbr',
                          compType: 'Input',
                          name: 'sceneNbr',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-3',
                          id: 'root.body.sceneNbr',
                          dataKey: '10616948_root.body.sceneNbr',
                          value: {
                            type: ['customize'],
                            code: '$state.props.catalogCode$',
                          },
                        },
                        {
                          code: 'sceneName',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.sceneName',
                          compType: 'Input',
                          name: 'sceneName',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-4',
                          id: 'root.body.sceneName',
                          dataKey: '10616948_root.body.sceneName',
                        },
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
                          key: '0-3-5',
                          id: 'root.body.catalogCode',
                          dataKey: '10616948_root.body.catalogCode',
                        },
                        {
                          code: 'sceneNbrs',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.sceneNbrs',
                          compType: 'Input',
                          name: 'sceneNbrs',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-6',
                          id: 'root.body.sceneNbrs',
                          dataKey: '10616948_root.body.sceneNbrs',
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                      id: 'root.body',
                      dataKey: '10616948_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '10616948_root',
                },
              ],
            },
            line_number: 3,
            callback1: [
              {
                type: 'setDataSource',
                dataId: 168232800336895040,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '182284',
                  pageJsonId: '537892',
                  dataSourceId: 166096152690913730,
                  dataSourceName: 'sceneSubmit',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '154379',
                      code: 'catalogCode',
                      name: '类目编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_922024?.resultData.catalogCode$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '4562264',
                      code: 'approveGrade',
                      name: '审批等级',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'approveGrade' },
                    },
                    {
                      attrId: '63768',
                      code: 'attrList',
                      name: '要素',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'attrList' },
                    },
                    {
                      attrId: '919265',
                      code: 'fileInfo',
                      name: '附件',
                      type: 'objectArray',
                      initialData: { type: 'static' },
                      children: [],
                      value: { type: [], code: 'fileInfo' },
                    },
                    {
                      attrId: '360171',
                      code: 'catalogItemCode',
                      name: '类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: { type: [], code: 'catalogItemCode' },
                    },
                    {
                      attrId: '420623',
                      code: 'catalogItemSubType',
                      name: '类目项子类型',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_922024?.resultData.catalogItemSubType$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '375466',
                      code: 'childCatalogCode',
                      name: '子类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_922024?.resultData.childCatalogCode$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '9257773',
                      code: 'parentCatalogCode',
                      name: '上级类目编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_922024?.resultData.parentCatalogCode$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '5733013',
                      code: 'parentCatalogItemCode',
                      name: '上级类目项编码',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_922024?.resultData.parentCatalogItemCode$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '440627',
                      code: 'childCatalogDesc',
                      name: '子类目项描述',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: [
                          'context',
                          '$reply_922024?.resultData.childCatalogDesc$',
                        ],
                        hideAttr: true,
                        code: '',
                      },
                    },
                    {
                      attrId: '204969',
                      code: 'approveGradeName',
                      name: '审批等级名称',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'callCustomPageFunc',
                    dataId: 168232800336897800,
                    options: {
                      compId: 'callCustomPageFunc',
                      compName: 'system',
                      id: '022592',
                      pageJsonId: '537892',
                      pathname: '/yunnan_auditOrderPrepare',
                      pageId: '973768806213877760',
                      modalPath: '/yunnan_auditOrderPrepare',
                      customFuncName: 'updateFactor',
                      customFuncParams: 'object',
                      paramsObj: {
                        childCatalogCode: '$state.props.catalogCode$',
                        itemList: '$data.sceneSubmit$',
                      },
                      paramsObjKeyValueMap: {
                        childCatalogCode: '$state.props.catalogCode$',
                        itemList: '$data.sceneSubmit$',
                      },
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
      },
    ];
    eventDataifelse270.params = [] || [];
    CMDGenerator(eventDataifelse270, {}, 'ifelse', {
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
      className="__CustomClass_537892__"
    >
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: '#f7f8fa' }}
        $$componentItem={{
          id: 'View_537892_1',
          uid: 'View_537892_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 0px',
          overflowY: 'visible',
          width: '100%',
          margin: '0px 0px 0px 0px',
          overflow: 'hidden',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1')}
        {...injectData}
      >
        <HorizontalView
          name={'左右布局'}
          $$componentItem={{
            id: 'HorizontalView_095145',
            uid: 'HorizontalView_095145',
            type: 'HorizontalView',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            margin: '0px 0px 12px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_095145')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: '#F7F8FA' }}
            $$componentItem={{
              id: 'View_01124',
              uid: 'View_01124',
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
              margin: '0px 0px 0px 0px',
              position: 'relative',
              height: '22px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_01124')}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={' '}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_312191',
                uid: 'Text_312191',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#1c242e',
                backgroundColor: 'rgba(255, 255, 255,0)',
                display: 'block',
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: '#388AFF',
                left: '0',
                top: '8px',
                borderRadius: '8px',
                minHeight: '6px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_312191')}
              {...injectData}
            />
            <Text
              name={'标题'}
              content={'互联网专线'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_041905',
                uid: 'Text_041905',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '22px',
                color: '#006CFF',
                backgroundColor: 'rgba(255, 255, 255,0)',
                fontWeight: '500',
                paddingLeft: '10px',
                display: 'block',
                height: '22px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_041905')}
              {...injectData}
            />
          </View>
          <View
            name={'场景最高审批等级容器'}
            $$componentItem={{
              id: 'View_464629',
              uid: 'View_464629',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={false}
            readOnly={false}
            style={{
              display: 'block',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              textAlign: 'right',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_464629')}
            {...injectData}
          >
            <Text
              name={'场景最高审批等级文本'}
              content={'场景最高审批等级：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_7477844',
                uid: 'Text_7477844',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#1c242e',
                backgroundColor: 'rgba(255, 255, 255,0)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_7477844')}
              {...injectData}
            />
          </View>
        </HorizontalView>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: '#f7f8fa' }}
          $$componentItem={{
            id: 'View_6806553',
            uid: 'View_6806553',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553')}
          {...injectData}
        >
          <Form
            name={'要素'}
            colSpan={6}
            labelCol={8}
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
            relationDataSource={data?.factorForm}
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
            backgroundType={{ type: 'cleanColor', color: '#f7f8fa' }}
            $$componentItem={{
              id: 'Form_449441_9243547',
              uid: 'Form_449441_9243547',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 12px 0px' }}
            onValuesChange={(changedFieldName: any, changedValue: any) => {
              const eventDatasetDataSource239: any = [
                {
                  type: 'setDataSource',
                  dataId: 166124391997578100,
                  options: {
                    compId: 'page',
                    compName: 'page',
                    id: '3788211',
                    pageJsonId: '537892',
                    dataSourceId: 166124254360037760,
                    dataSourceName: 'factorForm',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        attrId: '418247',
                        code: 'auditDesc',
                        name: '审批描述',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547',
                            'getFieldsValue',
                          ],
                          code: 'audiDesc',
                        },
                        _codePath: ['auditDesc'],
                        _idpath: ['418247'],
                      },
                      {
                        attrId: '0241587',
                        code: 'applyReason',
                        name: '申请原因',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: true,
                        value: {
                          type: [
                            'form',
                            'Form_449441_9243547',
                            'getFieldsValue',
                          ],
                          code: 'applyReason',
                        },
                        _codePath: ['applyReason'],
                        _idpath: ['0241587'],
                      },
                    ],
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'customActionCode',
                      dataId: 166320892101808900,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '981235',
                        pageJsonId: '537892',
                        actionTitle: '',
                        code: 'function main(data,state,success,fail){var attrList=[];var obj=data.factorForm;for(var key in obj){attrList.push({"attrCode":key,"attrName":"","attrValue":obj[key]})}data.sceneSubmit.attrList=attrList;success()};',
                      },
                      line_number: 2,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '197662',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$state.props.orderStatus$',
                                operate: '==',
                                manualValue: 'M',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 168380373612647170,
                          elseIfs: [],
                          line_number: 3,
                          callback1: [
                            {
                              type: 'callCustomPageFunc',
                              dataId: 168380377536739900,
                              options: {
                                compId: 'callCustomPageFunc',
                                compName: 'system',
                                id: '39238',
                                pageJsonId: '537892',
                                pathname: '/yunnan_auditOrderPrepare',
                                pageId: '973768806213877760',
                                modalPath: '/yunnan_auditOrderPrepare',
                                customFuncName: 'updateFactor',
                                customFuncParams: 'object',
                                paramsObj: {
                                  childCatalogCode: '$state.props.catalogCode$',
                                  itemList: '$data.sceneSubmit$',
                                },
                                paramsObjKeyValueMap: {
                                  childCatalogCode: '$state.props.catalogCode$',
                                  itemList: '$data.sceneSubmit$',
                                },
                              },
                              line_number: 4,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatasetDataSource239.params =
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
                eventDatasetDataSource239,
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
            ref={(r: any) => refs.setComponentRef(r, 'Form_449441_9243547')}
            {...injectData}
          >
            <TextArea
              name={'申请业务信息'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={22}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'audiDesc'}
              value={data?.factorForm?.auditDesc}
              $$componentItem={{
                id: 'TextArea_4140516',
                uid: 'TextArea_4140516',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'TextArea_4140516')}
              {...injectData}
            />
            <TextArea
              name={'申请原因'}
              selfSpan={24}
              labelCol={'2'}
              wrapperCol={'22'}
              titleTip={'text'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              fieldName={'applyReason'}
              value={data?.factorForm?.applyReason}
              formItemIndex={1}
              tipIcon={{
                type: '',
                theme: '',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              tipContent={'因XX原因（申请原因），现为该代理商申请押金减免'}
              allowClear={true}
              $$componentItem={{
                id: 'Input_derateReason_332471271_9259764',
                uid: 'Input_derateReason_332471271_9259764',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Input_derateReason_332471271_9259764')
              }
              {...injectData}
            />
          </Form>
          <BusiComp640428
            busiCompId={'974190141528584192'}
            name={'场景触发信息'}
            busiCompStates={{ instNbr: state?.props?.instNbr }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_6931614')}
            {...injectData}
          />
          <BusiComp186748
            busiCompId={'974149396524412928'}
            name={'场景附件(云南)'}
            busiCompStates={{
              catalogCode: state?.props?.catalogCode,
              orderStatus: state?.props?.orderStatus,
              fileList: state?.props?.itemList?.fileInfo,
            }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_061516')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC($7011copy$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { props: '' },
});
