// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Input,
  RangePicker,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '940142497926754304';
const ExportDownLoad$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest555: any = [
      {
        type: 'apiRequest',
        dataId: 167575793752905540,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '4712742966',
          pageJsonId: '2739003',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryDcFileExportPage',
          _apiCode: 'qryDcFileExportPage',
          _source: 'rhin',
          _serviceId: '940157799904612352',
          _serviceTitle: '导出文件列表-hdb: qryDcFileExportPage',
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
              dataKey: '4712742966_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '4712742966_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '4712742966_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'pageSize',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.pageSize',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.pageSize',
                  dataKey: '4712742966_body.pageSize',
                  value: { type: ['customize'], code: '5' },
                },
                {
                  code: 'pageNum',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.pageNum',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.pageNum',
                  dataKey: '4712742966_body.pageNum',
                  value: { type: ['customize'], code: '1' },
                },
                {
                  code: 'endTime',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.endTime',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.endTime',
                  dataKey: '4712742966_body.endTime',
                },
                {
                  code: 'createStaff',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.createStaff',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.createStaff',
                  dataKey: '4712742966_body.createStaff',
                },
                {
                  code: 'startTime',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.startTime',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.startTime',
                  dataKey: '4712742966_body.startTime',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '4712742966_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadTableData',
            dataId: 167575885588218780,
            options: {
              compId: 'Table_25286373',
              compLib: 'comm',
              pageJsonId: '2739003',
              compName: 'Table',
              id: '615394',
              data: '$reply_4712742966?.resultData.records$',
              total: '$reply_4712742966?.resultData.total$',
              current: '$reply_4712742966?.resultData.current$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [
          {
            type: 'setLoading',
            dataId: 167575895206567600,
            options: {
              compId: 'Table_25286373',
              compLib: 'comm',
              pageJsonId: '2739003',
              compName: 'Table',
              id: '2936469',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDataapiRequest555.params = [] || [];
    CMDGenerator(eventDataapiRequest555, {}, 'apiRequest', {
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
      className="__CustomClass_2739003__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_2739003_1',
          uid: 'View_2739003_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_2739003_1')}
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
          formCode={'Form_5796458'}
          $$componentItem={{
            id: 'Form_5796458',
            uid: 'Form_5796458',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_5796458')}
          {...injectData}
        >
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
            formItemIndex={0}
            fieldName={'createStaff'}
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
              id: 'Input_274116',
              uid: 'Input_274116',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_274116')}
            {...injectData}
          />
          <RangePicker
            name={'导出时间'}
            timeMode={'date'}
            format={'YYYY-MM-DD'}
            separator={'~'}
            size={'default'}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            pickerType={'RangePicker'}
            formItemIndex={1}
            fieldName={'exportTime'}
            $$componentItem={{
              id: 'RangePicker_6598555',
              uid: 'RangePicker_6598555',
              type: 'RangePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'RangePicker_6598555')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            visible={true}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_2699974',
              uid: 'View_2699974',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
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
              flexDirection: 'column',
              padding: '0px 0px 0px 20px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_2699974')}
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
              disabled={false}
              visible={true}
              type={'primary'}
              formItemIndex={3}
              labelCol={8}
              wrapperCol={16}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_997357',
                uid: 'Button_997357',
                type: 'Button',
                ...componentItem,
              }}
              readOnly={false}
              style={{ width: 'fit-content' }}
              onClick={(e: any) => {
                const eventDatagetCurrentFormValues37: any = [
                  {
                    type: 'getCurrentFormValues',
                    dataId: 167575917384164480,
                    options: {
                      compId: 'Form_5796458',
                      compLib: 'comm',
                      pageJsonId: '2739003',
                      compName: 'Form',
                      id: '843471',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'console',
                        dataId: 167575921238642600,
                        options: {
                          compId: 'debug',
                          compName: 'system',
                          id: '224342',
                          pageJsonId: '2739003',
                          value: ['$Form_5796458.exportTime[0]$'],
                        },
                        line_number: 2,
                      },
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '665538',
                            options: {
                              context: '$Form_5796458.exportTime$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167575944092133860,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 167575974185609340,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 167575974490457060,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 167575974490435740,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 167576009588932700,
                                        children: [],
                                        todoOptions: [],
                                        options: {
                                          compId: 'Table_25286373',
                                          compLib: 'comm',
                                          pageJsonId: '2739003',
                                          compName: 'Table',
                                          id: '6557228',
                                        },
                                        actionObjId: 'Table_25286373',
                                        actionObjName: 'Table',
                                        value: 'clearData',
                                        compLib: 'comm',
                                        line_number: 8,
                                      },
                                      {
                                        dataName: 'action',
                                        dataId: 167575974490421600,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 167575974490468700,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: [
                                          'dataSource',
                                          'total',
                                          'curPage',
                                        ],
                                        options: {
                                          compId: 'Table_25286373',
                                          compLib: 'comm',
                                          pageJsonId: '2739003',
                                          compName: 'Table',
                                          id: '05106559',
                                          data: '$reply_070531?.resultData.records$',
                                          total:
                                            '$reply_070531?.resultData.total$',
                                          current:
                                            '$reply_070531?.resultData.current$',
                                        },
                                        actionObjId: 'Table_25286373',
                                        actionObjName: 'Table',
                                        value: 'reloadTableData',
                                        compLib: 'comm',
                                        elseIfs: [],
                                        line_number: 9,
                                      },
                                    ],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 167575974490480770,
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
                                  id: '070531',
                                  pageJsonId: '2739003',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'qryDcFileExportPage',
                                  _apiCode: 'qryDcFileExportPage',
                                  _source: 'rhin',
                                  _serviceId: '940157799904612352',
                                  _serviceTitle:
                                    '导出文件列表-hdb: qryDcFileExportPage',
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
                                      dataKey: '070531_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '070531_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '070531_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'pageSize',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.pageSize',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.pageSize',
                                          dataKey: '070531_body.pageSize',
                                          value: {
                                            type: ['customize'],
                                            code: '5',
                                          },
                                        },
                                        {
                                          code: 'pageNum',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.pageNum',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.pageNum',
                                          dataKey: '070531_body.pageNum',
                                          value: {
                                            type: ['customize'],
                                            code: '1',
                                          },
                                        },
                                        {
                                          code: 'endTime',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.endTime',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.endTime',
                                          dataKey: '070531_body.endTime',
                                          value: { type: [], code: '' },
                                        },
                                        {
                                          code: 'createStaff',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.createStaff',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.createStaff',
                                          dataKey: '070531_body.createStaff',
                                          value: {
                                            type: ['context', '$Form_5796458$'],
                                            code: 'createStaff',
                                          },
                                        },
                                        {
                                          code: 'startTime',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.startTime',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.startTime',
                                          dataKey: '070531_body.startTime',
                                          value: { type: [], code: '' },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '070531_body',
                                    },
                                  ],
                                },
                                actionObjId: 'apiRequest',
                                actionObjName: 'system',
                                value: 'apiRequest',
                                elseIfs: [],
                                line_number: 7,
                              },
                            ],
                            condition: [],
                            callback: [
                              {
                                type: 'apiRequest',
                                dataId: 167575974490457060,
                                options: {
                                  compId: 'apiRequest',
                                  compName: 'system',
                                  id: '070531',
                                  pageJsonId: '2739003',
                                  sync: false,
                                  method: 'post',
                                  url: '/app/rhin/gateway/callRhinEngine',
                                  _capabilityCode: 'qryDcFileExportPage',
                                  _apiCode: 'qryDcFileExportPage',
                                  _source: 'rhin',
                                  _serviceId: '940157799904612352',
                                  _serviceTitle:
                                    '导出文件列表-hdb: qryDcFileExportPage',
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
                                      dataKey: '070531_header',
                                    },
                                    {
                                      code: 'path',
                                      name: '请求路径参数',
                                      attrType: 'object',
                                      _id: 'path',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'path',
                                      dataKey: '070531_path',
                                    },
                                    {
                                      code: 'query',
                                      name: 'URL 参数',
                                      attrType: 'object',
                                      _id: 'query',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'query',
                                      dataKey: '070531_query',
                                    },
                                    {
                                      code: 'body',
                                      name: '请求体',
                                      attrType: 'object',
                                      children: [
                                        {
                                          code: 'pageSize',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.pageSize',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.pageSize',
                                          dataKey: '070531_body.pageSize',
                                          value: {
                                            type: ['customize'],
                                            code: '5',
                                          },
                                        },
                                        {
                                          code: 'pageNum',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.pageNum',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.pageNum',
                                          dataKey: '070531_body.pageNum',
                                          value: {
                                            type: ['customize'],
                                            code: '1',
                                          },
                                        },
                                        {
                                          code: 'endTime',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.endTime',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.endTime',
                                          dataKey: '070531_body.endTime',
                                          value: { type: [], code: '' },
                                        },
                                        {
                                          code: 'createStaff',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.createStaff',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.createStaff',
                                          dataKey: '070531_body.createStaff',
                                          value: {
                                            type: ['context', '$Form_5796458$'],
                                            code: 'createStaff',
                                          },
                                        },
                                        {
                                          code: 'startTime',
                                          name: '新增节点',
                                          attrType: 'field',
                                          type: 'string',
                                          mustFlag: 'F',
                                          defaultValue: '',
                                          _id: 'body.startTime',
                                          compType: 'Input',
                                          parents: ['body'],
                                          id: 'body.startTime',
                                          dataKey: '070531_body.startTime',
                                          value: { type: [], code: '' },
                                        },
                                      ],
                                      _id: 'body',
                                      compType: 'Input',
                                      parents: [],
                                      id: 'body',
                                      dataKey: '070531_body',
                                    },
                                  ],
                                },
                                line_number: 7,
                                callback1: [
                                  {
                                    type: 'clearData',
                                    dataId: 167576009588932700,
                                    options: {
                                      compId: 'Table_25286373',
                                      compLib: 'comm',
                                      pageJsonId: '2739003',
                                      compName: 'Table',
                                      id: '6557228',
                                    },
                                    line_number: 8,
                                  },
                                  {
                                    type: 'reloadTableData',
                                    dataId: 167575974490421600,
                                    options: {
                                      compId: 'Table_25286373',
                                      compLib: 'comm',
                                      pageJsonId: '2739003',
                                      compName: 'Table',
                                      id: '05106559',
                                      data: '$reply_070531?.resultData.records$',
                                      total: '$reply_070531?.resultData.total$',
                                      current:
                                        '$reply_070531?.resultData.current$',
                                    },
                                    line_number: 9,
                                    callback1: [],
                                  },
                                ],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 3,
                        callback1: [
                          {
                            type: 'apiRequest',
                            dataId: 167575944513091400,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '967969',
                              pageJsonId: '2739003',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'qryDcFileExportPage',
                              _apiCode: 'qryDcFileExportPage',
                              _source: 'rhin',
                              _serviceId: '940157799904612352',
                              _serviceTitle:
                                '导出文件列表-hdb: qryDcFileExportPage',
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
                                  dataKey: '967969_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '967969_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '967969_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'pageSize',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.pageSize',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.pageSize',
                                      dataKey: '967969_body.pageSize',
                                      value: { type: ['customize'], code: '5' },
                                    },
                                    {
                                      code: 'pageNum',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.pageNum',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.pageNum',
                                      dataKey: '967969_body.pageNum',
                                      value: { type: ['customize'], code: '1' },
                                    },
                                    {
                                      code: 'endTime',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.endTime',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.endTime',
                                      dataKey: '967969_body.endTime',
                                      value: {
                                        type: ['customize'],
                                        code: '$Form_5796458.exportTime[1]$',
                                      },
                                    },
                                    {
                                      code: 'createStaff',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.createStaff',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.createStaff',
                                      dataKey: '967969_body.createStaff',
                                      value: {
                                        type: ['context', '$Form_5796458$'],
                                        code: 'createStaff',
                                      },
                                    },
                                    {
                                      code: 'startTime',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.startTime',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.startTime',
                                      dataKey: '967969_body.startTime',
                                      value: {
                                        type: ['customize'],
                                        code: '$Form_5796458.exportTime[0]$',
                                      },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '967969_body',
                                },
                              ],
                            },
                            line_number: 4,
                            callback1: [
                              {
                                type: 'clearData',
                                dataId: 167576009031229540,
                                options: {
                                  compId: 'Table_25286373',
                                  compLib: 'comm',
                                  pageJsonId: '2739003',
                                  compName: 'Table',
                                  id: '9167493',
                                },
                                line_number: 5,
                              },
                              {
                                type: 'reloadTableData',
                                dataId: 167575965539355000,
                                options: {
                                  compId: 'Table_25286373',
                                  compLib: 'comm',
                                  pageJsonId: '2739003',
                                  compName: 'Table',
                                  id: '754981',
                                  data: '$reply_967969?.resultData.records$',
                                  total: '$reply_967969?.resultData.total$',
                                  current: '$reply_967969?.resultData.current$',
                                },
                                line_number: 6,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetCurrentFormValues37.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(
                  eventDatagetCurrentFormValues37,
                  { e },
                  'getCurrentFormValues',
                  {
                    id: 'getCurrentFormValues',
                    name: 'getCurrentFormValues',
                    type: 'getCurrentFormValues',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_997357')}
              {...injectData}
            />
          </View>
        </Form>
        <Table
          name={'表格'}
          isFlexColumn={false}
          extendNum={3}
          adjustModel={'auto'}
          pageSize={5}
          current={data?.qryDcFileExportPage?.resultData?.current}
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
              title: '导出来源',
              key: 'sourceFrom',
              dataIndex: 'sourceFrom',
              id: '6989017',
              className: '',
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
              title: '导出发起人',
              key: 'createStaff',
              dataIndex: 'createStaff',
              id: '212047',
              className: 'divider',
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
              title: '导出请求时间',
              key: 'exportTime',
              dataIndex: 'exportTime',
              id: '744971',
              className: 'divider',
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
              title: '导出结果生成时间',
              key: 'createDate',
              dataIndex: 'createDate',
              id: '3265589',
              className: 'divider',
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
              title: '状态',
              key: 'fileStatus',
              dataIndex: 'fileStatus',
              id: '111989',
              className: 'divider',
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
          visible={true}
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
          rowKey={'fileCode'}
          dataSource={data?.qryDcFileExportPage?.resultData?.records}
          rowActions={[]}
          extend={[
            {
              id: '5560404',
              title: '下载',
              iconPos: 'left',
              icon: {
                type: 'download',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              },
              rule: "row.fileStatus=== '导出中'",
              checked: true,
            },
          ]}
          total={data?.qryDcFileExportPage?.resultData?.total}
          dataSourceFromDataSourceConfig={
            'data.qryDcFileExportPage.resultData.records'
          }
          $$componentItem={{
            id: 'Table_25286373',
            uid: 'Table_25286373',
            type: 'Table',
            ...componentItem,
          }}
          style={{ margin: '10px 0px 0px 0px' }}
          onPageChange={(page: any, pageSize: any) => {
            const eventDatagetCurrentFormValues38: any = [
              {
                type: 'getCurrentFormValues',
                dataId: 167575980092992100,
                options: {
                  compId: 'Form_5796458',
                  compLib: 'comm',
                  pageJsonId: '2739003',
                  compName: 'Form',
                  id: '0008165',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'console',
                    dataId: 167575980092923460,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '1310562',
                      pageJsonId: '2739003',
                      value: ['$Form_5796458$'],
                    },
                    line_number: 2,
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '665538',
                        options: {
                          context: '$Form_5796458.exportTime$',
                          operate: 'notEmpty',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 167575980092926300,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 167575980092900220,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 167575980092931970,
                            children: [
                              {
                                dataName: 'callback',
                                dataId: 167575980092967600,
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 167576011247253600,
                                    children: [],
                                    todoOptions: [],
                                    options: {
                                      compId: 'Table_25286373',
                                      compLib: 'comm',
                                      pageJsonId: '2739003',
                                      compName: 'Table',
                                      id: '671197',
                                    },
                                    actionObjId: 'Table_25286373',
                                    actionObjName: 'Table',
                                    value: 'clearData',
                                    compLib: 'comm',
                                    line_number: 8,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 167575980092955330,
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 167575980092980160,
                                        children: [],
                                        value: 'callback1',
                                        params: [],
                                        elseIfs: [],
                                      },
                                    ],
                                    todoOptions: [
                                      'dataSource',
                                      'total',
                                      'curPage',
                                    ],
                                    options: {
                                      compId: 'Table_25286373',
                                      compLib: 'comm',
                                      pageJsonId: '2739003',
                                      compName: 'Table',
                                      id: '706446',
                                      data: '$reply_3626302?.resultData.records$',
                                      total:
                                        '$reply_3626302?.resultData.total$',
                                      current:
                                        '$reply_3626302?.resultData.current$',
                                    },
                                    actionObjId: 'Table_25286373',
                                    actionObjName: 'Table',
                                    value: 'reloadTableData',
                                    compLib: 'comm',
                                    elseIfs: [],
                                    line_number: 9,
                                  },
                                ],
                                value: 'callback1',
                                params: [],
                                elseIfs: [],
                              },
                              {
                                dataName: 'callback',
                                dataId: 167575980092933700,
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
                              id: '3626302',
                              pageJsonId: '2739003',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'qryDcFileExportPage',
                              _apiCode: 'qryDcFileExportPage',
                              _source: 'rhin',
                              _serviceId: '940157799904612352',
                              _serviceTitle:
                                '导出文件列表-hdb: qryDcFileExportPage',
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
                                  dataKey: '3626302_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '3626302_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '3626302_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'pageSize',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.pageSize',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.pageSize',
                                      dataKey: '3626302_body.pageSize',
                                      value: {
                                        type: ['context', '$pageSize$'],
                                        code: '',
                                        hideAttr: true,
                                      },
                                    },
                                    {
                                      code: 'pageNum',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.pageNum',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.pageNum',
                                      dataKey: '3626302_body.pageNum',
                                      value: {
                                        type: ['context', '$page$'],
                                        code: '',
                                        hideAttr: true,
                                      },
                                    },
                                    {
                                      code: 'endTime',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.endTime',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.endTime',
                                      dataKey: '3626302_body.endTime',
                                      value: { type: [], code: '' },
                                    },
                                    {
                                      code: 'createStaff',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.createStaff',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.createStaff',
                                      dataKey: '3626302_body.createStaff',
                                      value: {
                                        type: ['context', '$Form_5796458$'],
                                        code: 'createStaff',
                                      },
                                    },
                                    {
                                      code: 'startTime',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.startTime',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.startTime',
                                      dataKey: '3626302_body.startTime',
                                      value: { type: [], code: '' },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '3626302_body',
                                },
                              ],
                            },
                            actionObjId: 'apiRequest',
                            actionObjName: 'system',
                            value: 'apiRequest',
                            elseIfs: [],
                            line_number: 7,
                          },
                        ],
                        condition: [],
                        callback: [
                          {
                            type: 'apiRequest',
                            dataId: 167575980092931970,
                            options: {
                              compId: 'apiRequest',
                              compName: 'system',
                              id: '3626302',
                              pageJsonId: '2739003',
                              sync: false,
                              method: 'post',
                              url: '/app/rhin/gateway/callRhinEngine',
                              _capabilityCode: 'qryDcFileExportPage',
                              _apiCode: 'qryDcFileExportPage',
                              _source: 'rhin',
                              _serviceId: '940157799904612352',
                              _serviceTitle:
                                '导出文件列表-hdb: qryDcFileExportPage',
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
                                  dataKey: '3626302_header',
                                },
                                {
                                  code: 'path',
                                  name: '请求路径参数',
                                  attrType: 'object',
                                  _id: 'path',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'path',
                                  dataKey: '3626302_path',
                                },
                                {
                                  code: 'query',
                                  name: 'URL 参数',
                                  attrType: 'object',
                                  _id: 'query',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'query',
                                  dataKey: '3626302_query',
                                },
                                {
                                  code: 'body',
                                  name: '请求体',
                                  attrType: 'object',
                                  children: [
                                    {
                                      code: 'pageSize',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.pageSize',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.pageSize',
                                      dataKey: '3626302_body.pageSize',
                                      value: {
                                        type: ['context', '$pageSize$'],
                                        code: '',
                                        hideAttr: true,
                                      },
                                    },
                                    {
                                      code: 'pageNum',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.pageNum',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.pageNum',
                                      dataKey: '3626302_body.pageNum',
                                      value: {
                                        type: ['context', '$page$'],
                                        code: '',
                                        hideAttr: true,
                                      },
                                    },
                                    {
                                      code: 'endTime',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.endTime',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.endTime',
                                      dataKey: '3626302_body.endTime',
                                      value: { type: [], code: '' },
                                    },
                                    {
                                      code: 'createStaff',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.createStaff',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.createStaff',
                                      dataKey: '3626302_body.createStaff',
                                      value: {
                                        type: ['context', '$Form_5796458$'],
                                        code: 'createStaff',
                                      },
                                    },
                                    {
                                      code: 'startTime',
                                      name: '新增节点',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      defaultValue: '',
                                      _id: 'body.startTime',
                                      compType: 'Input',
                                      parents: ['body'],
                                      id: 'body.startTime',
                                      dataKey: '3626302_body.startTime',
                                      value: { type: [], code: '' },
                                    },
                                  ],
                                  _id: 'body',
                                  compType: 'Input',
                                  parents: [],
                                  id: 'body',
                                  dataKey: '3626302_body',
                                },
                              ],
                            },
                            line_number: 7,
                            callback1: [
                              {
                                type: 'clearData',
                                dataId: 167576011247253600,
                                options: {
                                  compId: 'Table_25286373',
                                  compLib: 'comm',
                                  pageJsonId: '2739003',
                                  compName: 'Table',
                                  id: '671197',
                                },
                                line_number: 8,
                              },
                              {
                                type: 'reloadTableData',
                                dataId: 167575980092955330,
                                options: {
                                  compId: 'Table_25286373',
                                  compLib: 'comm',
                                  pageJsonId: '2739003',
                                  compName: 'Table',
                                  id: '706446',
                                  data: '$reply_3626302?.resultData.records$',
                                  total: '$reply_3626302?.resultData.total$',
                                  current:
                                    '$reply_3626302?.resultData.current$',
                                },
                                line_number: 9,
                                callback1: [],
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                    line_number: 3,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 167575980092910600,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '3908377',
                          pageJsonId: '2739003',
                          sync: false,
                          method: 'post',
                          url: '/app/rhin/gateway/callRhinEngine',
                          _capabilityCode: 'qryDcFileExportPage',
                          _apiCode: 'qryDcFileExportPage',
                          _source: 'rhin',
                          _serviceId: '940157799904612352',
                          _serviceTitle:
                            '导出文件列表-hdb: qryDcFileExportPage',
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
                              dataKey: '3908377_header',
                            },
                            {
                              code: 'path',
                              name: '请求路径参数',
                              attrType: 'object',
                              _id: 'path',
                              compType: 'Input',
                              parents: [],
                              id: 'path',
                              dataKey: '3908377_path',
                            },
                            {
                              code: 'query',
                              name: 'URL 参数',
                              attrType: 'object',
                              _id: 'query',
                              compType: 'Input',
                              parents: [],
                              id: 'query',
                              dataKey: '3908377_query',
                            },
                            {
                              code: 'body',
                              name: '请求体',
                              attrType: 'object',
                              children: [
                                {
                                  code: 'pageSize',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.pageSize',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.pageSize',
                                  dataKey: '3908377_body.pageSize',
                                  value: {
                                    type: ['context', '$pageSize$'],
                                    code: '',
                                    hideAttr: true,
                                  },
                                },
                                {
                                  code: 'pageNum',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.pageNum',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.pageNum',
                                  dataKey: '3908377_body.pageNum',
                                  value: {
                                    type: ['context', '$page$'],
                                    code: '',
                                    hideAttr: true,
                                  },
                                },
                                {
                                  code: 'endTime',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.endTime',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.endTime',
                                  dataKey: '3908377_body.endTime',
                                  value: {
                                    type: ['customize'],
                                    code: '$Form_5796458.exportTime[1]$',
                                  },
                                },
                                {
                                  code: 'createStaff',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.createStaff',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.createStaff',
                                  dataKey: '3908377_body.createStaff',
                                  value: {
                                    type: ['context', '$Form_5796458$'],
                                    code: 'createStaff',
                                  },
                                },
                                {
                                  code: 'startTime',
                                  name: '新增节点',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  defaultValue: '',
                                  _id: 'body.startTime',
                                  compType: 'Input',
                                  parents: ['body'],
                                  id: 'body.startTime',
                                  dataKey: '3908377_body.startTime',
                                  value: {
                                    type: ['customize'],
                                    code: '$Form_5796458.exportTime[0]$',
                                  },
                                },
                              ],
                              _id: 'body',
                              compType: 'Input',
                              parents: [],
                              id: 'body',
                              dataKey: '3908377_body',
                            },
                          ],
                        },
                        line_number: 4,
                        callback1: [
                          {
                            type: 'clearData',
                            dataId: 167576010922525800,
                            options: {
                              compId: 'Table_25286373',
                              compLib: 'comm',
                              pageJsonId: '2739003',
                              compName: 'Table',
                              id: '647377',
                            },
                            line_number: 5,
                          },
                          {
                            type: 'reloadTableData',
                            dataId: 167575980092954530,
                            options: {
                              compId: 'Table_25286373',
                              compLib: 'comm',
                              pageJsonId: '2739003',
                              compName: 'Table',
                              id: '114826',
                              data: '$reply_3908377?.resultData.records$',
                              total: '$reply_3908377?.resultData.total$',
                              current: '$reply_3908377?.resultData.current$',
                            },
                            line_number: 6,
                            callback1: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                  },
                ],
              },
            ];
            eventDatagetCurrentFormValues38.params =
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
              eventDatagetCurrentFormValues38,
              { page, pageSize },
              'getCurrentFormValues',
              {
                id: 'getCurrentFormValues',
                name: 'getCurrentFormValues',
                type: 'getCurrentFormValues',
                platform: 'pc',
              },
            );
          }}
          onClickBtn1={(rowId: any, row: any, index: any) => {
            const eventDatadownloadByFileId104: any = [
              {
                type: 'downloadByFileId',
                dataId: 167576098470401660,
                options: {
                  compId: 'downloadByFileId',
                  compName: 'system',
                  id: '3303965',
                  pageJsonId: '2739003',
                  data: '$rowId$',
                },
                line_number: 1,
              },
            ];
            eventDatadownloadByFileId104.params =
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
              eventDatadownloadByFileId104,
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
          ref={(r: any) => refs.setComponentRef(r, 'Table_25286373')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ExportDownLoad$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
