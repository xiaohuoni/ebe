// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Input,
  TreeSelect,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

import { getFormByCompId } from '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper';

const pageId = '927804270010707968';
const FileTemplateManagement$$Page: React.FC<PageProps> = ({
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
  const refresh_table = (options_011688: any) => {
    const eventDatasetLoading21: any = [
      {
        type: 'setLoading',
        dataId: 167288429404068030,
        options: {
          compId: 'Table_2130203',
          compLib: 'comm',
          pageJsonId: '5031917',
          compName: 'Table',
          id: '861659',
          loading: true,
        },
        line_number: 1,
      },
    ];
    eventDatasetLoading21.params =
      [
        {
          title: '事件入参',
          name: 'options_011688',
          value: '$options_011688$',
        },
      ] || [];
    CMDGenerator(eventDatasetLoading21, { options_011688 }, 'setLoading', {
      id: 'setLoading',
      name: 'setLoading',
      type: 'setLoading',
      platform: 'undefined',
    });
    const eventDatareloadDataSource23: any = [
      {
        type: 'reloadDataSource',
        dataId: 167290245012058600,
        options: {
          compId: 'reloadDataSource',
          compName: 'page',
          id: '111509',
          pageJsonId: '5031917',
          dataSourceId: 167282470742928260,
          dataSourceName: 'qryDcFileTemplatePage',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '298791',
              code: 'header',
              name: '请求头参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'header',
            },
            {
              attrId: '760957',
              code: 'path',
              name: '请求路径参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'path',
            },
            {
              attrId: '726558',
              code: 'query',
              name: 'URL 参数',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              key: 'query',
            },
            {
              attrId: '283661',
              code: 'body',
              name: '请求体',
              sort: { isSort: true },
              initialData: { type: 'static', value: '' },
              type: 'object',
              children: [
                {
                  attrId: '436594',
                  code: 'pageSize',
                  name: 'pageSize',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageSize',
                  value: { type: [], code: '' },
                },
                {
                  attrId: '716148',
                  code: 'pageNum',
                  name: 'pageNum',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'long',
                  key: 'body.pageNum',
                  value: { type: [], code: '' },
                },
                {
                  attrId: '381943',
                  code: 'fileTemplateName',
                  name: 'fileTemplateName',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.fileTemplateName',
                  value: {
                    type: ['datasource', 'pageInfo', 'data'],
                    code: 'fileTemplateName',
                  },
                },
                {
                  attrId: '62496',
                  code: 'sceneId',
                  name: 'sceneId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                  key: 'body.sceneId',
                  value: {
                    type: ['datasource', 'pageInfo', 'data'],
                    code: 'sceneId',
                  },
                },
              ],
              key: 'body',
            },
          ],
          dataSourceSetValue: [
            {
              attrId: '488919',
              code: 'resultMsg',
              name: 'resultMsg',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '008621',
              code: 'resultCode',
              name: 'resultCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '74887',
              code: 'resultMsgCode',
              name: 'resultMsgCode',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'string',
            },
            {
              attrId: '04756',
              code: 'resultData',
              name: 'resultData',
              sort: { isSort: true },
              initialData: { type: 'static' },
              type: 'object',
              children: [
                {
                  attrId: '4548043',
                  code: 'countId',
                  name: 'countId',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '946277',
                  code: 'orders',
                  name: 'orders',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '1817686',
                  code: 'maxLimit',
                  name: 'maxLimit',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '640092',
                  code: 'optimizeCountSql',
                  name: 'optimizeCountSql',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '325363',
                  code: 'isSearchCount',
                  name: 'isSearchCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '885289',
                  code: 'size',
                  name: 'size',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '6341032',
                  code: 'hitCount',
                  name: 'hitCount',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '783484',
                  code: 'current',
                  name: 'current',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '385712',
                  code: 'total',
                  name: 'total',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'string',
                },
                {
                  attrId: '030851',
                  code: 'records',
                  name: 'records',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  type: 'objectArray',
                  children: [
                    {
                      attrId: '394206',
                      code: 'fileTemplateId',
                      name: 'fileTemplateId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '355295',
                      code: 'fileTemplateName',
                      name: 'fileTemplateName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '629118',
                      code: 'sceneName',
                      name: 'sceneName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '612328',
                      code: 'fileId',
                      name: 'fileId',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '956901',
                      code: 'createStaffName',
                      name: 'createStaffName',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '3295041',
                      code: 'createDate',
                      name: 'createDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '9911215',
                      code: 'updateStaff',
                      name: 'updateStaff',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                    {
                      attrId: '739875',
                      code: 'updateDate',
                      name: 'updateDate',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
          otherObjectArrayOptions: {},
        },
        line_number: 2,
        callback1: [
          {
            type: 'setLoading',
            dataId: 167290245012009440,
            options: {
              compId: 'Table_2130203',
              compLib: 'comm',
              pageJsonId: '5031917',
              compName: 'Table',
              id: '3895768',
              loading: false,
            },
            line_number: 3,
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 167290245012052320,
            options: {
              compId: 'Table_2130203',
              compLib: 'comm',
              pageJsonId: '5031917',
              compName: 'Table',
              id: '924955',
              loading: false,
            },
            line_number: 4,
          },
        ],
      },
    ];
    eventDatareloadDataSource23.params =
      [
        {
          title: '事件入参',
          name: 'options_011688',
          value: '$options_011688$',
        },
      ] || [];
    CMDGenerator(
      eventDatareloadDataSource23,
      { options_011688 },
      'reloadDataSource',
      {
        id: 'reloadDataSource',
        name: 'reloadDataSource',
        type: 'reloadDataSource',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refresh_table,
  }));

  useEffect(() => {
    const eventDataapiRequest402: any = [
      {
        type: 'apiRequest',
        dataId: 167281485591924540,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '937848',
          pageJsonId: '5031917',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogToTreeNodeListByParentCode',
          _apiCode: 'qryCatalogToTreeNodeListByParentCode',
          _source: 'rhin',
          _serviceId: '877545868169199616',
          _serviceTitle:
            '根据父类目编码查询类目数据-tsm: qryCatalogToTreeNodeListByParentCode',
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
              dataKey: '937848_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '937848_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '937848_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'isQryAll',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  defaultValue: 'false',
                  _id: 'body.isQryAll',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.isQryAll',
                  dataKey: '937848_body.isQryAll',
                  value: { type: ['customize'], code: 'true' },
                },
                {
                  code: 'parentCatalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentCatalogCode',
                  compType: 'Input',
                  name: 'parentCatalogCode',
                  parents: ['body'],
                  id: 'body.parentCatalogCode',
                  dataKey: '937848_body.parentCatalogCode',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '937848_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadData',
            dataId: 167290925508111700,
            options: {
              compId: 'TreeSelect_7069203',
              compLib: 'comm',
              pageJsonId: '5031917',
              compName: 'TreeSelect',
              id: '982772',
              data: '$reply_937848?.resultData$',
              labelKey: 'nodeValue',
              nodeValueKey: 'nodeKey',
              selectable: '',
              childrenKey: 'children',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest402.params = [] || [];
    CMDGenerator(eventDataapiRequest402, {}, 'apiRequest', {
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
      className="__CustomClass_5031917__"
    >
      <View
        className="View_View_5031917_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_5031917_1',
          uid: 'View_5031917_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_5031917_1')}
        {...injectData}
      >
        <View
          className="View_View_318342"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_318342',
            uid: 'View_318342',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_318342')}
          {...injectData}
        >
          <Card
            name={'文件模板列表'}
            cardIconType={'middle'}
            extendNum={3}
            title={'文件模板列表'}
            bordered={true}
            size={'default'}
            hasHeader={true}
            hasIcon={true}
            titleColor={'#1c242e'}
            headerColor={'#ffffff'}
            extend={[
              {
                id: '7196673',
                title: '新增模板',
                iconPos: 'left',
                btnType: 'primary',
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
              id: 'Card_406032',
              uid: 'Card_406032',
              type: 'Card',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              padding: '20px 20px 20px 20px',
              overflowY: 'visible',
              margin: '0 0 16px 0',
            }}
            onClickBtn1={(e: any) => {
              const eventDatashowCustomModal192: any = [
                {
                  type: 'showCustomModal',
                  dataId: 167290315612024450,
                  options: {
                    compId: 'showCustomModal',
                    compName: 'page',
                    id: '0490035',
                    pageJsonId: '5031917',
                    modalname: '/wenjianmubanxinzeng3140',
                    pageId: '928103651163254784',
                    modalPath: '/wenjianmubanxinzeng3140',
                    paramsObj: {},
                    paramsObjKeyValueMap: {},
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'callSelfFunc',
                      dataId: 167290515330215580,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '9296365',
                        pageJsonId: '5031917',
                        customFuncName: 'refresh_table',
                        customFuncParams: 'object',
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [
                    {
                      type: 'console',
                      dataId: 167290315612003040,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '910457',
                        pageJsonId: '5031917',
                        value: ['点击取消'],
                      },
                      line_number: 3,
                    },
                  ],
                },
              ];
              eventDatashowCustomModal192.params =
                [{ title: '按钮1点击回调', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatashowCustomModal192,
                { e },
                'showCustomModal',
                {
                  id: 'showCustomModal',
                  name: 'showCustomModal',
                  type: 'showCustomModal',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Card_406032')}
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
              formCode={'Form_4818053'}
              $$componentItem={{
                id: 'Form_4818053',
                uid: 'Form_4818053',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_4818053')}
              {...injectData}
            >
              <Input
                name={'文件模板名称'}
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
                formItemIndex={0}
                fieldName={'fileTemplateName'}
                allowClear={false}
                tipIcon={{
                  theme: 'outlined',
                  type: 'question-circle',
                  isIconFont: false,
                }}
                minLength={0}
                maxLength={0}
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
                  id: 'Input_055331',
                  uid: 'Input_055331',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                style={{ flex: '' }}
                onChange={(e: any) => {
                  const eventDatagetValue223: any = [
                    {
                      type: 'getValue',
                      dataId: 167290239475907360,
                      options: {
                        compId: 'Input_055331',
                        compLib: 'comm',
                        pageJsonId: '5031917',
                        compName: 'Input',
                        id: '0515052',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167290240026573540,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '806115',
                            pageJsonId: '5031917',
                            dataSourceId: 167290236216624960,
                            dataSourceName: 'pageInfo',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '627353',
                                code: 'fileTemplateName',
                                name: '文件模板名称',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: ['context', '$value_0515052$'],
                                  code: '',
                                },
                              },
                              {
                                attrId: '00970029',
                                code: 'sceneId',
                                name: '场景编码',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDatagetValue223.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(eventDatagetValue223, { e }, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                }}
                onPressEnter={(e: any) => {
                  const eventDatacallSelfFunc479: any = [
                    {
                      type: 'callSelfFunc',
                      dataId: 167290332170314900,
                      options: {
                        compId: 'callSelfFunc',
                        compName: 'system',
                        id: '550614',
                        pageJsonId: '5031917',
                        customFuncName: 'refresh_table',
                        customFuncParams: 'object',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacallSelfFunc479.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacallSelfFunc479,
                    { e },
                    'callSelfFunc',
                    {
                      id: 'callSelfFunc',
                      name: 'callSelfFunc',
                      type: 'callSelfFunc',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Input_055331')}
                {...injectData}
              />
              <TreeSelect
                name={'场景名称'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                selfSpan={''}
                labelCol={8}
                wrapperCol={16}
                treeDefaultExpandAll={false}
                size={'default'}
                showSearch={true}
                treeData={[
                  {
                    title: '第一列',
                    key: 'column1',
                    selectable: true,
                    value: 'column1',
                    label: '第一列',
                    $$isParent: true,
                    children: [
                      {
                        title: '第二列',
                        key: 'column2',
                        value: 'column2',
                        selectable: true,
                        label: '第二列',
                      },
                    ],
                  },
                ]}
                formItemIndex={1}
                fieldName={'sceneName'}
                required={false}
                placeholder={'请选择'}
                allowClear={true}
                filter={'local'}
                $$componentItem={{
                  id: 'TreeSelect_7069203',
                  uid: 'TreeSelect_7069203',
                  type: 'TreeSelect',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                onChange={(value: any, label: any, extra: any) => {
                  const eventDatagetValue224: any = [
                    {
                      type: 'getValue',
                      dataId: 167290938299085000,
                      options: {
                        compId: 'TreeSelect_7069203',
                        compLib: 'comm',
                        pageJsonId: '5031917',
                        compName: 'TreeSelect',
                        id: '94131836',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'setDataSource',
                          dataId: 167290939003871420,
                          options: {
                            compId: 'setDataSource',
                            compName: 'page',
                            id: '985903',
                            pageJsonId: '5031917',
                            dataSourceId: 167290236216624960,
                            dataSourceName: 'pageInfo',
                            dataSourceRelType: 'custom',
                            dataSourceReloadFilter: [],
                            dataSourceSetValue: [
                              {
                                attrId: '627353',
                                code: 'fileTemplateName',
                                name: '文件模板名称',
                                type: 'string',
                                initialData: { type: 'static' },
                              },
                              {
                                attrId: '00970029',
                                code: 'sceneId',
                                name: '场景编码',
                                type: 'string',
                                initialData: { type: 'static' },
                                value: {
                                  type: [
                                    'context',
                                    '$extra.triggerNode.props.data$',
                                  ],
                                  hideAttr: false,
                                  code: 'nodeId',
                                },
                              },
                            ],
                            operateType: 1,
                            onlySetPatch: true,
                            otherObjectArrayOptions: {},
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDatagetValue224.params =
                    [
                      { title: '节点key', name: 'value', value: '$value$' },
                      { title: '节点名称', name: 'label', value: '$label$' },
                      {
                        title: '节点数据',
                        name: 'extra',
                        value: '$extra.triggerNode.props.data$',
                        attrType: 'object',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatagetValue224,
                    { value, label, extra },
                    'getValue',
                    {
                      id: 'getValue',
                      name: 'getValue',
                      type: 'getValue',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'TreeSelect_7069203')}
                {...injectData}
              />
              <View
                className="View_View_150732"
                name={'布局容器'}
                labelCol={8}
                wrapperCol={16}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_150732',
                  uid: 'View_150732',
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
                    formItemIndex: 2,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                style={{
                  display: 'block',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  textAlign: 'center',
                  height: '100%',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'View_150732')}
                {...injectData}
              >
                <Button
                  name={'查询'}
                  shape={null}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'primary'}
                  labelCol={8}
                  wrapperCol={16}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_0254483',
                    uid: 'Button_0254483',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content', margin: '0px 20px 0px 0px' }}
                  onClick={(e: any) => {
                    const eventDatacallSelfFunc480: any = [
                      {
                        type: 'callSelfFunc',
                        dataId: 167289926267411650,
                        options: {
                          compId: 'callSelfFunc',
                          compName: 'system',
                          id: '574038',
                          pageJsonId: '5031917',
                          customFuncName: 'refresh_table',
                          customFuncParams: 'object',
                        },
                        line_number: 1,
                        callback1: [],
                        callback2: [],
                      },
                    ];
                    eventDatacallSelfFunc480.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatacallSelfFunc480,
                      { e },
                      'callSelfFunc',
                      {
                        id: 'callSelfFunc',
                        name: 'callSelfFunc',
                        type: 'callSelfFunc',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_0254483')}
                  {...injectData}
                />
                <Button
                  name={'重置'}
                  shape={null}
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'default'}
                  hasIcon={false}
                  $$componentItem={{
                    id: 'Button_6393469',
                    uid: 'Button_6393469',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const forms120 = getFormByCompId('Form_4818053', refs);
                    // 支持循环容器中的表单重置
                    (Array.isArray(forms120) ? forms120 : [forms120]).forEach(
                      (form) => form?.resetFields(),
                    );
                    const eventDataclearValue159: any = [
                      {
                        type: 'clearValue',
                        dataId: 167291092144734430,
                        options: {
                          compId: 'TreeSelect_7069203',
                          compLib: 'comm',
                          pageJsonId: '5031917',
                          compName: 'TreeSelect',
                          id: '1003417',
                        },
                        line_number: 2,
                      },
                    ];
                    eventDataclearValue159.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataclearValue159, { e }, 'clearValue', {
                      id: 'clearValue',
                      name: 'clearValue',
                      type: 'clearValue',
                      platform: 'pc',
                    });
                    const eventDataclearValue160: any = [
                      {
                        type: 'clearValue',
                        dataId: 167291098071484640,
                        options: {
                          compId: 'TreeSelect_7069203',
                          compLib: 'comm',
                          pageJsonId: '5031917',
                          compName: 'TreeSelect',
                          id: '300033',
                        },
                        line_number: 3,
                      },
                    ];
                    eventDataclearValue160.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(eventDataclearValue160, { e }, 'clearValue', {
                      id: 'clearValue',
                      name: 'clearValue',
                      type: 'clearValue',
                      platform: 'pc',
                    });
                    const eventDatasetDataSource174: any = [
                      {
                        type: 'setDataSource',
                        dataId: 167291088310585470,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '230709',
                          pageJsonId: '5031917',
                          dataSourceId: 167290236216624960,
                          dataSourceName: 'pageInfo',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [
                            {
                              attrId: '627353',
                              code: 'fileTemplateName',
                              name: '文件模板名称',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                            {
                              attrId: '00970029',
                              code: 'sceneId',
                              name: '场景编码',
                              type: 'string',
                              initialData: { type: 'static' },
                              value: {
                                type: ['EMPTY_DATA', 'string'],
                                hideAttr: true,
                                code: '$EMPTY_DATA.string$',
                              },
                            },
                          ],
                          operateType: 1,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'callSelfFunc',
                            dataId: 167291108387724320,
                            options: {
                              compId: 'callSelfFunc',
                              compName: 'system',
                              id: '505923',
                              pageJsonId: '5031917',
                              customFuncName: 'refresh_table',
                              customFuncParams: 'object',
                            },
                            line_number: 5,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatasetDataSource174.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatasetDataSource174,
                      { e },
                      'setDataSource',
                      {
                        id: 'setDataSource',
                        name: 'setDataSource',
                        type: 'setDataSource',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_6393469')}
                  {...injectData}
                />
              </View>
            </Form>
            <View
              className="View_View_46096"
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_46096',
                uid: 'View_46096',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_46096')}
              {...injectData}
            >
              <Table
                name={'表格'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={5}
                current={data?.qryDcFileTemplatePage?.resultData?.current}
                tableTitle={'表格名称'}
                headBtnNum={3}
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
                    title: '文件模板ID',
                    key: 'fileTemplateId',
                    dataIndex: 'fileTemplateId',
                    className: '',
                    id: '3366444',
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
                    title: '文件模板名称',
                    key: 'fileTemplateName',
                    dataIndex: 'fileTemplateName',
                    className: 'divider',
                    id: '336292',
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
                    title: '场景名称',
                    key: 'sceneName',
                    dataIndex: 'sceneName',
                    className: 'divider',
                    id: '292611',
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
                    title: '文件ID',
                    key: 'fileId',
                    dataIndex: 'fileId',
                    className: 'divider',
                    id: '582679',
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
                    title: '创建人',
                    key: 'createStaffName',
                    dataIndex: 'createStaff',
                    className: 'divider',
                    id: '9118573',
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
                    title: '创建时间',
                    key: 'createDate',
                    dataIndex: 'createDate',
                    className: 'divider',
                    id: '889588',
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
                    title: '更新人',
                    key: 'updateStaff',
                    dataIndex: 'updateStaff',
                    className: 'divider',
                    id: '097352',
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
                    title: '更新时间',
                    key: 'updateDate',
                    dataIndex: 'updateDate',
                    className: 'divider',
                    id: '084182',
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
                rowKeyType={'specified'}
                editMode={'single'}
                selectType={'checkbox'}
                bordered={'segmentation'}
                size={'middle'}
                fixedAction={false}
                rowSelection={undefined}
                showHead={false}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={true}
                pageSizeOptions={'[5,10,20]'}
                customNum={3}
                rowKey={'fileTemplateId'}
                dataSource={data?.qryDcFileTemplatePage?.resultData?.records}
                fieldName={'current'}
                total={data?.qryDcFileTemplatePage?.resultData?.total}
                rowActions={[
                  {
                    title: '删除',
                    iconPos: 'right',
                    icon: { theme: 'outlined', type: 'delete' },
                    type: 'delete',
                    id: '786298',
                    checked: true,
                  },
                ]}
                extend={[
                  {
                    id: '133403',
                    title: '下载',
                    iconPos: 'right',
                    icon: {
                      type: 'download',
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    },
                    checked: true,
                  },
                  {
                    id: '370336',
                    title: '覆盖上传',
                    iconPos: 'left',
                    icon: {
                      type: 'upload',
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    },
                    checked: true,
                  },
                ]}
                dataSourceFromDataSourceConfig={
                  'data.qryDcFileTemplatePage.resultData.records'
                }
                $$componentItem={{
                  id: 'Table_2130203',
                  uid: 'Table_2130203',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ margin: '24px 0px 0px 0px' }}
                onPageChange={(page: any, pageSize: any) => {
                  const eventDatareloadDataSource88: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 167290218451170180,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'page',
                        id: '2988936',
                        pageJsonId: '5031917',
                        dataSourceId: 167282470742928260,
                        dataSourceName: 'qryDcFileTemplatePage',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '298791',
                            code: 'header',
                            name: '请求头参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'header',
                          },
                          {
                            attrId: '760957',
                            code: 'path',
                            name: '请求路径参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'path',
                          },
                          {
                            attrId: '726558',
                            code: 'query',
                            name: 'URL 参数',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            key: 'query',
                          },
                          {
                            attrId: '283661',
                            code: 'body',
                            name: '请求体',
                            sort: { isSort: true },
                            initialData: { type: 'static', value: '' },
                            type: 'object',
                            children: [
                              {
                                attrId: '436594',
                                code: 'pageSize',
                                name: 'pageSize',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                key: 'body.pageSize',
                                value: {
                                  type: ['context', '$pageSize$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                              {
                                attrId: '716148',
                                code: 'pageNum',
                                name: 'pageNum',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'long',
                                key: 'body.pageNum',
                                value: {
                                  type: ['context', '$page$'],
                                  hideAttr: true,
                                  code: '',
                                },
                              },
                              {
                                attrId: '381943',
                                code: 'fileTemplateName',
                                name: 'fileTemplateName',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.fileTemplateName',
                                value: {
                                  type: ['datasource', 'pageInfo', 'data'],
                                  code: 'fileTemplateName',
                                },
                              },
                              {
                                attrId: '62496',
                                code: 'sceneId',
                                name: 'sceneId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                                key: 'body.sceneId',
                                value: {
                                  type: ['datasource', 'pageInfo', 'data'],
                                  code: 'sceneId',
                                },
                              },
                            ],
                            key: 'body',
                          },
                        ],
                        dataSourceSetValue: [
                          {
                            attrId: '488919',
                            code: 'resultMsg',
                            name: 'resultMsg',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '008621',
                            code: 'resultCode',
                            name: 'resultCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '74887',
                            code: 'resultMsgCode',
                            name: 'resultMsgCode',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'string',
                          },
                          {
                            attrId: '04756',
                            code: 'resultData',
                            name: 'resultData',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            type: 'object',
                            children: [
                              {
                                attrId: '4548043',
                                code: 'countId',
                                name: 'countId',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '946277',
                                code: 'orders',
                                name: 'orders',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '1817686',
                                code: 'maxLimit',
                                name: 'maxLimit',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '640092',
                                code: 'optimizeCountSql',
                                name: 'optimizeCountSql',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '325363',
                                code: 'isSearchCount',
                                name: 'isSearchCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '885289',
                                code: 'size',
                                name: 'size',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '6341032',
                                code: 'hitCount',
                                name: 'hitCount',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '783484',
                                code: 'current',
                                name: 'current',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '385712',
                                code: 'total',
                                name: 'total',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'string',
                              },
                              {
                                attrId: '030851',
                                code: 'records',
                                name: 'records',
                                sort: { isSort: true },
                                initialData: { type: 'static' },
                                type: 'objectArray',
                                children: [
                                  {
                                    attrId: '394206',
                                    code: 'fileTemplateId',
                                    name: 'fileTemplateId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '355295',
                                    code: 'fileTemplateName',
                                    name: 'fileTemplateName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '629118',
                                    code: 'sceneName',
                                    name: 'sceneName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '612328',
                                    code: 'fileId',
                                    name: 'fileId',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '956901',
                                    code: 'createStaffName',
                                    name: 'createStaffName',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '3295041',
                                    code: 'createDate',
                                    name: 'createDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '9911215',
                                    code: 'updateStaff',
                                    name: 'updateStaff',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                  {
                                    attrId: '739875',
                                    code: 'updateDate',
                                    name: 'updateDate',
                                    sort: { isSort: true },
                                    initialData: { type: 'static' },
                                    type: 'string',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                        otherObjectArrayOptions: {},
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatareloadDataSource88.params =
                    [
                      {
                        title: '当前页码取值',
                        name: 'page',
                        value: '$page$',
                        attrType: 'number',
                      },
                      {
                        title: '当前页尺寸',
                        name: 'pageSize',
                        value: '$pageSize$',
                        attrType: 'number',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatareloadDataSource88,
                    { page, pageSize },
                    'reloadDataSource',
                    {
                      id: 'reloadDataSource',
                      name: 'reloadDataSource',
                      type: 'reloadDataSource',
                      platform: 'pc',
                    },
                  );
                }}
                onRowDelete={(rowId: any, row: any, index: any) => {
                  const eventDataapiRequest754: any = [
                    {
                      type: 'apiRequest',
                      dataId: 167290655057745300,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '2020655',
                        pageJsonId: '5031917',
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        _capabilityCode: 'delDcFileTemplateById',
                        _apiCode: 'delDcFileTemplateById',
                        _source: 'rhin',
                        _serviceId: '928198984827490304',
                        _serviceTitle:
                          '删除文件模板-hyj: delDcFileTemplateById',
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
                            dataKey: '2020655_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            children: [
                              {
                                code: 'dcFileTemplateId',
                                attrType: 'field',
                                type: 'long',
                                mustFlag: 'F',
                                _id: 'path.dcFileTemplateId',
                                compType: 'Input',
                                name: 'dcFileTemplateId',
                                parents: ['path'],
                                id: 'path.dcFileTemplateId',
                                dataKey: '2020655_path.dcFileTemplateId',
                                value: {
                                  type: ['context', '$rowId$'],
                                  code: '',
                                },
                              },
                            ],
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '2020655_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '2020655_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '2020655_body',
                          },
                        ],
                        _sourceName: '删除文件模板-hyj',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'showMessage',
                          dataId: 167290658162765250,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '8259086',
                            pageJsonId: '5031917',
                            type: 'success',
                            value: '删除成功！',
                          },
                          line_number: 2,
                        },
                        {
                          type: 'callSelfFunc',
                          dataId: 167290696170139680,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '199782',
                            pageJsonId: '5031917',
                            customFuncName: 'refresh_table',
                            customFuncParams: 'object',
                          },
                          line_number: 3,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDataapiRequest754.params =
                    [
                      { title: '行id', name: 'rowId', value: '$rowId$' },
                      {
                        title: '行对象',
                        name: 'row',
                        value: '$row$',
                        attrType: 'object',
                      },
                      { title: '行索引', name: 'index', value: '$index$' },
                    ] || [];
                  CMDGenerator(
                    eventDataapiRequest754,
                    { rowId, row, index },
                    'apiRequest',
                    {
                      id: 'apiRequest',
                      name: 'apiRequest',
                      type: 'apiRequest',
                      platform: 'pc',
                    },
                  );
                }}
                onClickBtn1={(rowId: any, row: any, index: any) => {
                  const eventDatadownloadByFileId68: any = [
                    {
                      type: 'downloadByFileId',
                      dataId: 167290716517975100,
                      options: {
                        compId: 'downloadByFileId',
                        compName: 'system',
                        id: '651857',
                        pageJsonId: '5031917',
                        data: '$row.fileId$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatadownloadByFileId68.params =
                    [
                      { title: '行id', name: 'rowId', value: '$rowId$' },
                      {
                        title: '行对象',
                        name: 'row',
                        value: '$row$',
                        attrType: 'object',
                      },
                      { title: '行索引', name: 'index', value: '$index$' },
                    ] || [];
                  CMDGenerator(
                    eventDatadownloadByFileId68,
                    { rowId, row, index },
                    'downloadByFileId',
                    {
                      id: 'downloadByFileId',
                      name: 'downloadByFileId',
                      type: 'downloadByFileId',
                      platform: 'pc',
                    },
                  );
                }}
                onClickBtn2={(rowId: any, row: any, index: any) => {
                  const eventDatashowCustomModal193: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 169871792691230600,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '967732',
                        pageJsonId: '5031917',
                        modalname: '/wenjianmubanxinzeng3140',
                        pageId: '928103651163254784',
                        modalPath: '/wenjianmubanxinzeng3140',
                        paramsObj: {
                          isCover: '1',
                          sceneCode: '$row.sceneCode$',
                          sceneId: '$row.sceneId$',
                        },
                        paramsObjKeyValueMap: {
                          isCover: '1',
                          sceneCode: '$row.sceneCode$',
                          sceneId: '$row.sceneId$',
                        },
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'callSelfFunc',
                          dataId: 169871792691286700,
                          options: {
                            compId: 'callSelfFunc',
                            compName: 'system',
                            id: '398211',
                            pageJsonId: '5031917',
                            customFuncName: 'refresh_table',
                            customFuncParams: 'object',
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [
                        {
                          type: 'console',
                          dataId: 169871792691290100,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '8059477',
                            pageJsonId: '5031917',
                            value: ['点击取消'],
                          },
                          line_number: 3,
                        },
                      ],
                    },
                  ];
                  eventDatashowCustomModal193.params =
                    [
                      { title: '行id', name: 'rowId', value: '$rowId$' },
                      {
                        title: '行对象',
                        name: 'row',
                        value: '$row$',
                        attrType: 'object',
                      },
                      { title: '行索引', name: 'index', value: '$index$' },
                    ] || [];
                  CMDGenerator(
                    eventDatashowCustomModal193,
                    { rowId, row, index },
                    'showCustomModal',
                    {
                      id: 'showCustomModal',
                      name: 'showCustomModal',
                      type: 'showCustomModal',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Table_2130203')}
                {...injectData}
              />
            </View>
          </Card>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(FileTemplateManagement$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { scene: '' },
});
