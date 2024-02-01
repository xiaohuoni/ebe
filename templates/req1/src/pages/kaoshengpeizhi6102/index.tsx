// 注意: 出码模块正在调试
import React from 'react';

import {
  Description,
  Img,
  Input,
  Layout,
  Select,
  Table,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Kaoshengpeizhi6102$$Modal: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  attrDataMap = {},
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
  const onOk = () => {
    // console 170282034639865800
    console.log(data?._others_?.personInfo?.userId);
    const eventDatacloseModal: any = [
      {
        type: 'closeModal',
        dataId: 170282028601458940,
        options: {
          compId: 'closeModal',
          compName: 'system',
          id: '026497',
          pageJsonId: '3912274',
        },
        line_number: 2,
      },
    ];
    eventDatacloseModal.params = [] || [];
    CMDGenerator(eventDatacloseModal, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'pc',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal2: any = [
      {
        type: 'closeModal',
        dataId: '6270071_1',
        options: { compId: 'page', compName: 'page', id: '8037847' },
        line_number: 1,
      },
    ];
    eventDatacloseModal2.params = [] || [];
    CMDGenerator(eventDatacloseModal2, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'pc',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onOk,
    onCancel,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style} className="__CustomClass_3912274__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_3912274_1',
          uid: 'View_3912274_1',
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
          backgroundColor: '#fff',
        }}
        ref={(r: any) => (refs['View_3912274_1'] = r)}
        {...injectData}
      >
        <Layout
          name={'布局容器'}
          layoutOptions={{
            grid: 12,
            colSpan: '12:12',
            colSpace: '16px',
            rowSpace: '16px',
          }}
          $$componentItem={{
            id: 'Layout_178067',
            uid: 'Layout_178067',
            type: 'Layout',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
            width: '100%',
            height: 'auto',
            backgroundColor: '#fff',
          }}
          ref={(r: any) => (refs['Layout_178067'] = r)}
          {...injectData}
        >
          <View
            name={'普通容器'}
            $$componentItem={{
              id: 'View_793314',
              uid: 'View_793314',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_793314'] = r)}
            {...injectData}
          >
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_858024',
                uid: 'View_858024',
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
              }}
              ref={(r: any) => (refs['View_858024'] = r)}
              {...injectData}
            >
              <Description
                name={'描述列表'}
                columns={[
                  {
                    title: '考试标题',
                    key: 'name',
                    dataIndex: 'name',
                    editoption: {
                      edittype: 'Input',
                      selectoption: {
                        attr: {
                          attrName: '考试标题',
                          attrId: '1040454540508016641',
                          attrNbr: null,
                        },
                      },
                    },
                    label: '考试标题',
                    id: '230476',
                    span: 24,
                    customRendering: undefined,
                  },
                  {
                    title: '考试描述',
                    key: 'description',
                    dataIndex: 'description',
                    editoption: {
                      edittype: 'Input',
                      selectoption: {
                        attr: {
                          attrName: '考试描述',
                          attrId: '1040454540508016646',
                          attrNbr: null,
                        },
                      },
                    },
                    label: '考试描述',
                    id: '053235',
                    customRendering:
                      "function renderFunc(renderParams) {  var title = renderParams.text.replace(/<[^>]+>/g, '');  return title;}",
                    originCustomRendering: [
                      '  /**',
                      ' * 自定义渲染函数 注意！！不允许修改内置的函数方法名和形参，否则将出现异常！！！',
                      ' * @param {Object} renderParams 自定义函数入参数',
                      ' * @param {String} renderParams.text 单元格显示的文字内容',
                      ' * @param {Object} renderParams.item 单项数据对象',
                      ' * @returns 渲染的内容：可以是 html 模板字符串',
                      ' */',
                      'function renderFunc(renderParams) {',
                      "    let title = renderParams.text.replace(/<[^>]+>/g,'');",
                      '    return title;',
                      '}',
                    ],
                    span: 24,
                  },
                  {
                    title: '考试时长(分钟)',
                    key: 'duration',
                    dataIndex: 'duration',
                    editoption: {
                      edittype: 'InputNumber',
                      selectoption: {
                        attr: {
                          attrName: '考试时长(分钟)',
                          attrId: '1040454540508016650',
                          attrNbr: null,
                        },
                      },
                    },
                    label: '考试时长',
                    id: '44173',
                    customRendering: undefined,
                  },
                  {
                    title: '总分数',
                    key: 'score',
                    dataIndex: 'score',
                    editoption: {
                      edittype: 'InputNumber',
                      selectoption: {
                        attr: {
                          attrName: '总分数',
                          attrId: '1040454540508016651',
                          attrNbr: null,
                        },
                      },
                    },
                    label: '总分数',
                    id: '4028184',
                    customRendering: undefined,
                  },
                  {
                    title: '考试开始时间',
                    key: 'start_time',
                    dataIndex: 'start_time',
                    editoption: {
                      edittype: 'TimePicker',
                      selectoption: {
                        attr: {
                          attrName: '考试开始时间',
                          attrId: '1040454540508016647',
                          attrNbr: null,
                        },
                      },
                    },
                    label: '开始时间',
                    id: '6139624',
                    customRendering: undefined,
                  },
                  {
                    title: '考试截止时间',
                    key: 'end_time',
                    dataIndex: 'end_time',
                    editoption: {
                      edittype: 'TimePicker',
                      selectoption: {
                        attr: {
                          attrName: '考试截止时间',
                          attrId: '1040454540508016648',
                          attrNbr: null,
                        },
                      },
                    },
                    label: '截止时间',
                    id: '253835',
                    customRendering: undefined,
                  },
                ]}
                bordered={false}
                colSpan={12}
                colon={true}
                labelAlign={'left'}
                dataSource={data?.LCDP_EXAMS}
                labelSize={'120px'}
                $$componentItem={{
                  id: 'Description_625961',
                  uid: 'Description_625961',
                  type: 'Description',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => (refs['Description_625961'] = r)}
                {...injectData}
              />
            </View>
          </View>
          <View
            name={'普通容器1'}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 1)',
            }}
            $$componentItem={{
              id: 'View_4785212',
              uid: 'View_4785212',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 0px',
              width: '100%',
              alignItems: 'center',
            }}
            ref={(r: any) => (refs['View_4785212'] = r)}
            {...injectData}
          >
            <View
              name={'普通容器2'}
              $$componentItem={{
                id: 'View_3489084',
                uid: 'View_3489084',
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
                width: '100%',
                borderSetting: 'border 0px solid #d9d7d7',
                'border-left': '0px solid #d9d7d7',
                'border-right': '0px solid #d9d7d7',
                'border-top': '0px solid #d9d7d7',
                'border-bottom': '0px solid #d9d7d7',
                position: 'relative',
                alignSelf: 'flex-start',
              }}
              ref={(r: any) => (refs['View_3489084'] = r)}
              {...injectData}
            >
              <View
                name={'搜索'}
                className={'View_411477_1'}
                $$componentItem={{
                  id: 'View_411477_1',
                  uid: 'View_411477_1',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  minHeight: '100%',
                  display: 'flex',
                  padding: '0px 0px 0px 0px',
                  flexDirection: 'column',
                  overflowY: 'auto',
                  width: '50%',
                  height: 'fit-content',
                  position: 'absolute',
                  top: '0%',
                  right: '0',
                  zIndex: '99',
                }}
                ref={(r: any) => (refs['View_411477_1'] = r)}
                {...injectData}
              >
                <View
                  name={'普通容器'}
                  className={'View_08794'}
                  $$componentItem={{
                    id: 'View_08794',
                    uid: 'View_08794',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                  }}
                  ref={(r: any) => (refs['View_08794'] = r)}
                  {...injectData}
                >
                  <Select
                    name={'下拉框'}
                    size={'default'}
                    labelCol={'8'}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipSize={'default'}
                    tipWidth={'240px'}
                    tipHeight={'auto'}
                    required={false}
                    filter={'none'}
                    classification={'default'}
                    placeholder={'请选择'}
                    allowClear={false}
                    fieldName={'a'}
                    extendProps={{}}
                    defaultValue={'1'}
                    dataSource={[
                      { id: '715121', label: '考生姓名', value: '1' },
                      { id: '9742481', label: '考生学号', value: '2' },
                    ]}
                    $$componentItem={{
                      id: 'Select_037069',
                      uid: 'Select_037069',
                      type: 'Select',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    ref={(r: any) => (refs['Select_037069'] = r)}
                    {...injectData}
                  />
                  <Input
                    name={'输入框'}
                    size={'default'}
                    labelCol={8}
                    wrapperCol={16}
                    titleTip={'notext'}
                    tipContent={''}
                    tipSize={'default'}
                    tipWidth={'240px'}
                    tipHeight={'auto'}
                    prefixIconPosition={'after'}
                    postfix={''}
                    postfixIconPosition={'before'}
                    required={false}
                    placeholder={'请输入'}
                    allowClear={true}
                    dataMask={''}
                    prefixStyle={'2'}
                    fieldName={'aaa'}
                    icon={{
                      type: 'search',
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    }}
                    tipIcon={{ theme: 'outlined', type: 'question-circle' }}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    prefixIcon={{
                      theme: 'outlined',
                      fontAddress: '',
                      isIconFont: false,
                      iconFileInfo: {},
                    }}
                    postfixStyle={'4'}
                    $$componentItem={{
                      id: 'Input_906132',
                      uid: 'Input_906132',
                      type: 'Input',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    onIconClick={() => {
                      // console 170115096249223700
                      console.log('图标');
                      const eventDatagetValue: any = [
                        {
                          type: 'getValue',
                          dataId: 170601368613428100,
                          options: {
                            compId: 'Select_037069',
                            compLib: 'comm',
                            pageJsonId: '3912274',
                            compName: 'Select',
                            id: '50113',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '032289',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$value_50113$',
                                    operate: '==',
                                    manualValue: '1',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 170601368798372480,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 170601369651741630,
                                  condition: [],
                                  value: 'elseIf',
                                  elseIfs: [],
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170601377483517120,
                                      todoOptions: [],
                                      options: {
                                        compId: 'Input_906132',
                                        compLib: 'comm',
                                        pageJsonId: '3912274',
                                        compName: 'Input',
                                        id: '540838',
                                      },
                                      actionObjId: 'Input_906132',
                                      actionObjName: 'Input',
                                      value: 'getValue',
                                      elseIfs: [],
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 170601377483594530,
                                          value: 'callback1',
                                          params: [],
                                          elseIfs: [],
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 170601377483500300,
                                              todoOptions: [
                                                'selectServerDataSource',
                                                'sync',
                                                'dataSourceReloadFilter',
                                              ],
                                              options: {
                                                compId: 'reloadDataSource',
                                                compName: 'system',
                                                id: '097739',
                                                pageJsonId: '3912274',
                                                sync: false,
                                                dataSourceId: 170279873310963140,
                                                dataSourceName:
                                                  'getUsersForExam',
                                                dataSourceRelType: 'service',
                                                dataSourceReloadFilter: [
                                                  {
                                                    attrId: '3487287',
                                                    code: 'examId',
                                                    name: '考试实例ID',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                      value: '$state.exam_id$',
                                                    },
                                                    sourceAttrId:
                                                      '120168544785',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$state.exam_id$',
                                                      ],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    attrId: '866447',
                                                    code: 'pageSize',
                                                    name: '每页大小',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '344157638484287',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '10',
                                                    },
                                                  },
                                                  {
                                                    attrId: '3239474',
                                                    code: 'pageNum',
                                                    name: '页数',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '128950474722',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '1',
                                                    },
                                                  },
                                                  {
                                                    attrId: '043765',
                                                    code: 'userName',
                                                    name: '用户姓名',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '2424318327622',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    attrId: '9695664',
                                                    code: 'userCode',
                                                    name: '用户编码',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '225553162551',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$value_540838$',
                                                      ],
                                                      code: '',
                                                    },
                                                  },
                                                ],
                                                otherObjectArrayOptions: {},
                                                targetDataSourcePaths: [],
                                              },
                                              actionObjId: 'reloadDataSource',
                                              actionObjName: 'system',
                                              value: 'reloadDataSource',
                                              elseIfs: [],
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 170601377483565980,
                                                  value: 'callback1',
                                                  params: [],
                                                  elseIfs: [],
                                                  children: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 170601377483583780,
                                                  value: 'callback2',
                                                  params: [],
                                                  elseIfs: [],
                                                  children: [],
                                                },
                                              ],
                                              line_number: 7,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 6,
                                    },
                                  ],
                                  callback: [
                                    {
                                      type: 'getValue',
                                      dataId: 170601377483517120,
                                      options: {
                                        compId: 'Input_906132',
                                        compLib: 'comm',
                                        pageJsonId: '3912274',
                                        compName: 'Input',
                                        id: '540838',
                                      },
                                      line_number: 6,
                                      callback1: [
                                        {
                                          type: 'reloadDataSource',
                                          dataId: 170601377483500300,
                                          options: {
                                            compId: 'reloadDataSource',
                                            compName: 'system',
                                            id: '097739',
                                            pageJsonId: '3912274',
                                            sync: false,
                                            dataSourceId: 170279873310963140,
                                            dataSourceName: 'getUsersForExam',
                                            dataSourceRelType: 'service',
                                            dataSourceReloadFilter: [
                                              {
                                                attrId: '3487287',
                                                code: 'examId',
                                                name: '考试实例ID',
                                                type: 'long',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '$state.exam_id$',
                                                },
                                                sourceAttrId: '120168544785',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$state.exam_id$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                              {
                                                attrId: '866447',
                                                code: 'pageSize',
                                                name: '每页大小',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '344157638484287',
                                                value: {
                                                  type: ['customize'],
                                                  code: '10',
                                                },
                                              },
                                              {
                                                attrId: '3239474',
                                                code: 'pageNum',
                                                name: '页数',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '128950474722',
                                                value: {
                                                  type: ['customize'],
                                                  code: '1',
                                                },
                                              },
                                              {
                                                attrId: '043765',
                                                code: 'userName',
                                                name: '用户姓名',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '2424318327622',
                                                value: { type: [], code: '' },
                                              },
                                              {
                                                attrId: '9695664',
                                                code: 'userCode',
                                                name: '用户编码',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '225553162551',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$value_540838$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                            ],
                                            otherObjectArrayOptions: {},
                                            targetDataSourcePaths: [],
                                          },
                                          line_number: 7,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'getValue',
                                  dataId: 170601374558510880,
                                  options: {
                                    compId: 'Input_906132',
                                    compLib: 'comm',
                                    pageJsonId: '3912274',
                                    compName: 'Input',
                                    id: '462931',
                                  },
                                  line_number: 4,
                                  callback1: [
                                    {
                                      type: 'reloadDataSource',
                                      dataId: 170601375095501760,
                                      options: {
                                        compId: 'reloadDataSource',
                                        compName: 'system',
                                        id: '0564846',
                                        pageJsonId: '3912274',
                                        sync: false,
                                        dataSourceId: 170279873310963140,
                                        dataSourceName: 'getUsersForExam',
                                        dataSourceRelType: 'service',
                                        dataSourceReloadFilter: [
                                          {
                                            attrId: '3487287',
                                            code: 'examId',
                                            name: '考试实例ID',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '$state.exam_id$',
                                            },
                                            sourceAttrId: '120168544785',
                                            value: {
                                              type: [
                                                'context',
                                                '$state.exam_id$',
                                              ],
                                              code: '',
                                            },
                                          },
                                          {
                                            attrId: '866447',
                                            code: 'pageSize',
                                            name: '每页大小',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '344157638484287',
                                            value: {
                                              type: ['customize'],
                                              code: '10',
                                            },
                                          },
                                          {
                                            attrId: '3239474',
                                            code: 'pageNum',
                                            name: '页数',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '128950474722',
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '043765',
                                            code: 'userName',
                                            name: '用户姓名',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '2424318327622',
                                            value: {
                                              type: [
                                                'context',
                                                '$value_462931$',
                                              ],
                                              code: '',
                                            },
                                          },
                                          {
                                            attrId: '9695664',
                                            code: 'userCode',
                                            name: '用户编码',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '225553162551',
                                            value: { type: [], code: '' },
                                          },
                                        ],
                                        otherObjectArrayOptions: {},
                                        targetDataSourcePaths: [],
                                      },
                                      line_number: 5,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ];
                      eventDatagetValue.params = [] || [];
                      CMDGenerator(eventDatagetValue, {}, 'getValue', {
                        id: 'getValue',
                        name: 'getValue',
                        type: 'getValue',
                        platform: 'pc',
                      });
                    }}
                    onPressEnter={(e: any) => {
                      const eventDatagetValue2: any = [
                        {
                          type: 'getValue',
                          dataId: 170601378890575500,
                          options: {
                            compId: 'Select_037069',
                            compLib: 'comm',
                            pageJsonId: '3912274',
                            compName: 'Select',
                            id: '418864',
                          },
                          line_number: 1,
                          callback1: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '032289',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context: '$value_418864$',
                                    operate: '==',
                                    manualValue: '1',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 170601378890525400,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 170601378890531970,
                                  condition: [],
                                  value: 'elseIf',
                                  elseIfs: [],
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 170601378890546270,
                                      todoOptions: [],
                                      options: {
                                        compId: 'Input_906132',
                                        compLib: 'comm',
                                        pageJsonId: '3912274',
                                        compName: 'Input',
                                        id: '94340236',
                                      },
                                      actionObjId: 'Input_906132',
                                      actionObjName: 'Input',
                                      value: 'getValue',
                                      elseIfs: [],
                                      children: [
                                        {
                                          dataName: 'callback',
                                          dataId: 170601378890585800,
                                          value: 'callback1',
                                          params: [],
                                          elseIfs: [],
                                          children: [
                                            {
                                              dataName: 'action',
                                              dataId: 170601378890565380,
                                              todoOptions: [
                                                'selectServerDataSource',
                                                'sync',
                                                'dataSourceReloadFilter',
                                              ],
                                              options: {
                                                compId: 'reloadDataSource',
                                                compName: 'system',
                                                id: '4319656',
                                                pageJsonId: '3912274',
                                                sync: false,
                                                dataSourceId: 170279873310963140,
                                                dataSourceName:
                                                  'getUsersForExam',
                                                dataSourceRelType: 'service',
                                                dataSourceReloadFilter: [
                                                  {
                                                    attrId: '3487287',
                                                    code: 'examId',
                                                    name: '考试实例ID',
                                                    type: 'long',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                      value: '$state.exam_id$',
                                                    },
                                                    sourceAttrId:
                                                      '120168544785',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$state.exam_id$',
                                                      ],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    attrId: '866447',
                                                    code: 'pageSize',
                                                    name: '每页大小',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '344157638484287',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '10',
                                                    },
                                                  },
                                                  {
                                                    attrId: '3239474',
                                                    code: 'pageNum',
                                                    name: '页数',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '128950474722',
                                                    value: {
                                                      type: ['customize'],
                                                      code: '1',
                                                    },
                                                  },
                                                  {
                                                    attrId: '043765',
                                                    code: 'userName',
                                                    name: '用户姓名',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '2424318327622',
                                                    value: {
                                                      type: [],
                                                      code: '',
                                                    },
                                                  },
                                                  {
                                                    attrId: '9695664',
                                                    code: 'userCode',
                                                    name: '用户编码',
                                                    type: 'string',
                                                    sort: { isSort: true },
                                                    initialData: {
                                                      type: 'static',
                                                    },
                                                    sourceAttrId:
                                                      '225553162551',
                                                    value: {
                                                      type: [
                                                        'context',
                                                        '$value_94340236$',
                                                      ],
                                                      code: '',
                                                    },
                                                  },
                                                ],
                                                otherObjectArrayOptions: {},
                                                targetDataSourcePaths: [],
                                              },
                                              actionObjId: 'reloadDataSource',
                                              actionObjName: 'system',
                                              value: 'reloadDataSource',
                                              elseIfs: [],
                                              children: [
                                                {
                                                  dataName: 'callback',
                                                  dataId: 170601378890530020,
                                                  value: 'callback1',
                                                  params: [],
                                                  elseIfs: [],
                                                  children: [],
                                                },
                                                {
                                                  dataName: 'callback',
                                                  dataId: 170601378890545470,
                                                  value: 'callback2',
                                                  params: [],
                                                  elseIfs: [],
                                                  children: [],
                                                },
                                              ],
                                              line_number: 6,
                                            },
                                          ],
                                        },
                                      ],
                                      line_number: 5,
                                    },
                                  ],
                                  callback: [
                                    {
                                      type: 'getValue',
                                      dataId: 170601378890546270,
                                      options: {
                                        compId: 'Input_906132',
                                        compLib: 'comm',
                                        pageJsonId: '3912274',
                                        compName: 'Input',
                                        id: '94340236',
                                      },
                                      line_number: 5,
                                      callback1: [
                                        {
                                          type: 'reloadDataSource',
                                          dataId: 170601378890565380,
                                          options: {
                                            compId: 'reloadDataSource',
                                            compName: 'system',
                                            id: '4319656',
                                            pageJsonId: '3912274',
                                            sync: false,
                                            dataSourceId: 170279873310963140,
                                            dataSourceName: 'getUsersForExam',
                                            dataSourceRelType: 'service',
                                            dataSourceReloadFilter: [
                                              {
                                                attrId: '3487287',
                                                code: 'examId',
                                                name: '考试实例ID',
                                                type: 'long',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '$state.exam_id$',
                                                },
                                                sourceAttrId: '120168544785',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$state.exam_id$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                              {
                                                attrId: '866447',
                                                code: 'pageSize',
                                                name: '每页大小',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '344157638484287',
                                                value: {
                                                  type: ['customize'],
                                                  code: '10',
                                                },
                                              },
                                              {
                                                attrId: '3239474',
                                                code: 'pageNum',
                                                name: '页数',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '128950474722',
                                                value: {
                                                  type: ['customize'],
                                                  code: '1',
                                                },
                                              },
                                              {
                                                attrId: '043765',
                                                code: 'userName',
                                                name: '用户姓名',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '2424318327622',
                                                value: { type: [], code: '' },
                                              },
                                              {
                                                attrId: '9695664',
                                                code: 'userCode',
                                                name: '用户编码',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '225553162551',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$value_94340236$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                            ],
                                            otherObjectArrayOptions: {},
                                            targetDataSourcePaths: [],
                                          },
                                          line_number: 6,
                                          callback1: [],
                                          callback2: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              line_number: 2,
                              callback1: [
                                {
                                  type: 'getValue',
                                  dataId: 170601378890582000,
                                  options: {
                                    compId: 'Input_906132',
                                    compLib: 'comm',
                                    pageJsonId: '3912274',
                                    compName: 'Input',
                                    id: '2883773',
                                  },
                                  line_number: 3,
                                  callback1: [
                                    {
                                      type: 'reloadDataSource',
                                      dataId: 170601381006035840,
                                      options: {
                                        compId: 'reloadDataSource',
                                        compName: 'system',
                                        id: '1065046',
                                        pageJsonId: '3912274',
                                        sync: false,
                                        dataSourceId: 170279873310963140,
                                        dataSourceName: 'getUsersForExam',
                                        dataSourceRelType: 'service',
                                        dataSourceReloadFilter: [
                                          {
                                            attrId: '3487287',
                                            code: 'examId',
                                            name: '考试实例ID',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '$state.exam_id$',
                                            },
                                            sourceAttrId: '120168544785',
                                            value: {
                                              type: [
                                                'context',
                                                '$state.exam_id$',
                                              ],
                                              code: '',
                                            },
                                          },
                                          {
                                            attrId: '866447',
                                            code: 'pageSize',
                                            name: '每页大小',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '344157638484287',
                                            value: {
                                              type: ['customize'],
                                              code: '10',
                                            },
                                          },
                                          {
                                            attrId: '3239474',
                                            code: 'pageNum',
                                            name: '页数',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '128950474722',
                                            value: {
                                              type: ['customize'],
                                              code: '1',
                                            },
                                          },
                                          {
                                            attrId: '043765',
                                            code: 'userName',
                                            name: '用户姓名',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '2424318327622',
                                            value: {
                                              type: [
                                                'context',
                                                '$value_2883773$',
                                              ],
                                              code: '',
                                            },
                                          },
                                          {
                                            attrId: '9695664',
                                            code: 'userCode',
                                            name: '用户编码',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '225553162551',
                                            value: { type: [], code: '' },
                                          },
                                        ],
                                        otherObjectArrayOptions: {},
                                        targetDataSourcePaths: [],
                                      },
                                      line_number: 4,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ];
                      eventDatagetValue2.params =
                        [
                          {
                            title: '输入框取值',
                            name: 'e',
                            value: '$e.target.value$',
                          },
                        ] || [];
                      CMDGenerator(eventDatagetValue2, { e }, 'getValue', {
                        id: 'getValue',
                        name: 'getValue',
                        type: 'getValue',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['Input_906132'] = r)}
                    {...injectData}
                  />
                </View>
              </View>
              <Table
                name={'待选表格'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={data?.getUsersForExam?.pageSize}
                current={data?.getUsersForExam?.pageNum}
                headBtnNum={3}
                tableTitle={'待选考生'}
                columns={[
                  {
                    title: '用户id',
                    dataIndex: 'userId',
                    key: 'column1',
                    id: '006222',
                    hiddenRule: true,
                    align: 'center',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    customRendering: undefined,
                  },
                  {
                    title: '姓名',
                    dataIndex: 'userName',
                    key: 'column2',
                    id: '8348446',
                    align: 'center',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    customRendering: undefined,
                  },
                  {
                    title: '工号',
                    dataIndex: 'userCode',
                    key: 'column3',
                    id: '3291792',
                    align: 'center',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    customRendering: undefined,
                  },
                  {
                    title: '联系方式',
                    dataIndex: 'phone',
                    key: 'column4',
                    id: '9658395',
                    align: 'center',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    customRendering: undefined,
                  },
                  {
                    title: '组织Id',
                    dataIndex: 'orgId',
                    key: 'column5',
                    id: '5435004',
                    hiddenRule: true,
                    align: 'center',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    customRendering: undefined,
                  },
                  {
                    title: '所在部门',
                    dataIndex: 'orgName',
                    key: 'column6',
                    id: '503531',
                    align: 'center',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    customRendering: undefined,
                  },
                ]}
                page={true}
                rowKeyType={'specified'}
                editMode={'single'}
                bordered={'segmentation'}
                size={'middle'}
                fixedAction={false}
                rowSelection={{ type: 'checkbox' }}
                showHead={true}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                showCustom={{
                  hasCustom: false,
                  customTitle: '自定义列',
                  iconPosition: 'left',
                  customStyle: 'default',
                }}
                customNum={3}
                dataSource={data?.getUsersForExam?.list}
                total={data?.getUsersForExam?.total}
                rowKey={'userId'}
                headExtends={[]}
                extend={[]}
                dataSourceFromDataSourceConfig={'data.getUsersForExam.list;'}
                style={{}}
                $$componentItem={{
                  id: 'Table_173829',
                  uid: 'Table_173829',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onPageChange={(
                  page: any,
                  pageSize: any,
                  ascendCol: any,
                  descendCol: any,
                ) => {
                  const eventDatagetValue3: any = [
                    {
                      type: 'getValue',
                      dataId: 170601402677865200,
                      options: {
                        compId: 'Select_037069',
                        compLib: 'comm',
                        pageJsonId: '3912274',
                        compName: 'Select',
                        id: '232748',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '032289',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$value_232748$',
                                operate: '==',
                                manualValue: '1',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 170601402677879140,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 170601402677829730,
                              condition: [],
                              value: 'elseIf',
                              elseIfs: [],
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 170601402677852380,
                                  todoOptions: [],
                                  options: {
                                    compId: 'Input_906132',
                                    compLib: 'comm',
                                    pageJsonId: '3912274',
                                    compName: 'Input',
                                    id: '156508',
                                  },
                                  actionObjId: 'Input_906132',
                                  actionObjName: 'Input',
                                  value: 'getValue',
                                  elseIfs: [],
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 170601402677867170,
                                      value: 'callback1',
                                      params: [],
                                      elseIfs: [],
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 170601402677835620,
                                          todoOptions: [
                                            'selectServerDataSource',
                                            'sync',
                                            'dataSourceReloadFilter',
                                          ],
                                          options: {
                                            compId: 'reloadDataSource',
                                            compName: 'system',
                                            id: '3689636',
                                            pageJsonId: '3912274',
                                            sync: false,
                                            dataSourceId: 170279873310963140,
                                            dataSourceName: 'getUsersForExam',
                                            dataSourceRelType: 'service',
                                            dataSourceReloadFilter: [
                                              {
                                                attrId: '3487287',
                                                code: 'examId',
                                                name: '考试实例ID',
                                                type: 'long',
                                                sort: { isSort: true },
                                                initialData: {
                                                  type: 'static',
                                                  value: '$state.exam_id$',
                                                },
                                                sourceAttrId: '120168544785',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$state.exam_id$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                              {
                                                attrId: '866447',
                                                code: 'pageSize',
                                                name: '每页大小',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '344157638484287',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$pageSize$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                              {
                                                attrId: '3239474',
                                                code: 'pageNum',
                                                name: '页数',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '128950474722',
                                                value: {
                                                  type: ['context', '$page$'],
                                                  code: '',
                                                },
                                              },
                                              {
                                                attrId: '043765',
                                                code: 'userName',
                                                name: '用户姓名',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '2424318327622',
                                                value: { type: [], code: '' },
                                              },
                                              {
                                                attrId: '9695664',
                                                code: 'userCode',
                                                name: '用户编码',
                                                type: 'string',
                                                sort: { isSort: true },
                                                initialData: { type: 'static' },
                                                sourceAttrId: '225553162551',
                                                value: {
                                                  type: [
                                                    'context',
                                                    '$value_156508$',
                                                  ],
                                                  code: '',
                                                },
                                              },
                                            ],
                                            otherObjectArrayOptions: {},
                                            targetDataSourcePaths: [],
                                          },
                                          actionObjId: 'reloadDataSource',
                                          actionObjName: 'system',
                                          value: 'reloadDataSource',
                                          elseIfs: [],
                                          children: [
                                            {
                                              dataName: 'callback',
                                              dataId: 170601402677805900,
                                              value: 'callback1',
                                              params: [],
                                              elseIfs: [],
                                              children: [],
                                            },
                                            {
                                              dataName: 'callback',
                                              dataId: 170601402677878600,
                                              value: 'callback2',
                                              params: [],
                                              elseIfs: [],
                                              children: [],
                                            },
                                          ],
                                          line_number: 6,
                                        },
                                      ],
                                    },
                                  ],
                                  line_number: 5,
                                },
                              ],
                              callback: [
                                {
                                  type: 'getValue',
                                  dataId: 170601402677852380,
                                  options: {
                                    compId: 'Input_906132',
                                    compLib: 'comm',
                                    pageJsonId: '3912274',
                                    compName: 'Input',
                                    id: '156508',
                                  },
                                  line_number: 5,
                                  callback1: [
                                    {
                                      type: 'reloadDataSource',
                                      dataId: 170601402677835620,
                                      options: {
                                        compId: 'reloadDataSource',
                                        compName: 'system',
                                        id: '3689636',
                                        pageJsonId: '3912274',
                                        sync: false,
                                        dataSourceId: 170279873310963140,
                                        dataSourceName: 'getUsersForExam',
                                        dataSourceRelType: 'service',
                                        dataSourceReloadFilter: [
                                          {
                                            attrId: '3487287',
                                            code: 'examId',
                                            name: '考试实例ID',
                                            type: 'long',
                                            sort: { isSort: true },
                                            initialData: {
                                              type: 'static',
                                              value: '$state.exam_id$',
                                            },
                                            sourceAttrId: '120168544785',
                                            value: {
                                              type: [
                                                'context',
                                                '$state.exam_id$',
                                              ],
                                              code: '',
                                            },
                                          },
                                          {
                                            attrId: '866447',
                                            code: 'pageSize',
                                            name: '每页大小',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '344157638484287',
                                            value: {
                                              type: ['context', '$pageSize$'],
                                              code: '',
                                            },
                                          },
                                          {
                                            attrId: '3239474',
                                            code: 'pageNum',
                                            name: '页数',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '128950474722',
                                            value: {
                                              type: ['context', '$page$'],
                                              code: '',
                                            },
                                          },
                                          {
                                            attrId: '043765',
                                            code: 'userName',
                                            name: '用户姓名',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '2424318327622',
                                            value: { type: [], code: '' },
                                          },
                                          {
                                            attrId: '9695664',
                                            code: 'userCode',
                                            name: '用户编码',
                                            type: 'string',
                                            sort: { isSort: true },
                                            initialData: { type: 'static' },
                                            sourceAttrId: '225553162551',
                                            value: {
                                              type: [
                                                'context',
                                                '$value_156508$',
                                              ],
                                              code: '',
                                            },
                                          },
                                        ],
                                        otherObjectArrayOptions: {},
                                        targetDataSourcePaths: [],
                                      },
                                      line_number: 6,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          line_number: 2,
                          callback1: [
                            {
                              type: 'getValue',
                              dataId: 170601402677887520,
                              options: {
                                compId: 'Input_906132',
                                compLib: 'comm',
                                pageJsonId: '3912274',
                                compName: 'Input',
                                id: '323452',
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'reloadDataSource',
                                  dataId: 170601402677823360,
                                  options: {
                                    compId: 'reloadDataSource',
                                    compName: 'system',
                                    id: '080183',
                                    pageJsonId: '3912274',
                                    sync: false,
                                    dataSourceId: 170279873310963140,
                                    dataSourceName: 'getUsersForExam',
                                    dataSourceRelType: 'service',
                                    dataSourceReloadFilter: [
                                      {
                                        attrId: '3487287',
                                        code: 'examId',
                                        name: '考试实例ID',
                                        type: 'long',
                                        sort: { isSort: true },
                                        initialData: {
                                          type: 'static',
                                          value: '$state.exam_id$',
                                        },
                                        sourceAttrId: '120168544785',
                                        value: {
                                          type: ['context', '$state.exam_id$'],
                                          code: '',
                                        },
                                      },
                                      {
                                        attrId: '866447',
                                        code: 'pageSize',
                                        name: '每页大小',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        sourceAttrId: '344157638484287',
                                        value: {
                                          type: ['customize'],
                                          code: '$pageSize$',
                                        },
                                      },
                                      {
                                        attrId: '3239474',
                                        code: 'pageNum',
                                        name: '页数',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        sourceAttrId: '128950474722',
                                        value: {
                                          type: ['customize'],
                                          code: '$page$',
                                        },
                                      },
                                      {
                                        attrId: '043765',
                                        code: 'userName',
                                        name: '用户姓名',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        sourceAttrId: '2424318327622',
                                        value: {
                                          type: ['context', '$value_323452$'],
                                          code: '',
                                        },
                                      },
                                      {
                                        attrId: '9695664',
                                        code: 'userCode',
                                        name: '用户编码',
                                        type: 'string',
                                        sort: { isSort: true },
                                        initialData: { type: 'static' },
                                        sourceAttrId: '225553162551',
                                        value: { type: [], code: '' },
                                      },
                                    ],
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ];
                  eventDatagetValue3.params =
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
                      {
                        title: '正序字段',
                        name: 'ascendCol',
                        value: '$ascendCol$',
                      },
                      {
                        title: '倒序字段',
                        name: 'descendCol',
                        value: '$descendCol$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatagetValue3,
                    { page, pageSize, ascendCol, descendCol },
                    'getValue',
                    {
                      id: 'getValue',
                      name: 'getValue',
                      type: 'getValue',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Table_173829'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'普通容器'}
              $$componentItem={{
                id: 'View_125303',
                uid: 'View_125303',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'center',
                display: 'flex',
                width: 'fit-content',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderSetting: 'border 0px solid #d9d7d7',
                'border-left': '0px solid #d9d7d7',
                'border-right': '0px solid #d9d7d7',
                'border-top': '0px solid #d9d7d7',
                'border-bottom': '0px solid #d9d7d7',
                height: '100%',
                padding: '0px 24px 0px 24px',
              }}
              ref={(r: any) => (refs['View_125303'] = r)}
              {...injectData}
            >
              <View
                name={'普通容器'}
                backgroundType={{ type: 'cleanColor' }}
                $$componentItem={{
                  id: 'View_122089',
                  uid: 'View_122089',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'center',
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => (refs['View_122089'] = r)}
                {...injectData}
              >
                <Img
                  name={'图片'}
                  srcType={'fileCode'}
                  alt={'图片'}
                  fileCode={'PIC_959426'}
                  $$componentItem={{
                    id: 'Img_482324',
                    uid: 'Img_482324',
                    type: 'Img',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: '32px', height: '32px', cursor: 'pointer' }}
                  onClick={(e: any) => {
                    const eventDatagetTableCurrentPageSelected: any = [
                      {
                        type: 'getTableCurrentPageSelected',
                        dataId: 170280213213383100,
                        options: {
                          compId: 'Table_719291',
                          compLib: 'comm',
                          pageJsonId: '3912274',
                          compName: 'Table',
                          id: '5017404',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '665411',
                                options: {
                                  context: '$currentPageSelectedRows_5017404$',
                                  operate: 'empty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 170280214316702620,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170280220144595550,
                                condition: [],
                                value: 'elseIf',
                                elseIfs: [],
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170280221559996930,
                                    todoOptions: ['valueArray'],
                                    options: {
                                      compId: 'console',
                                      compName: 'system',
                                      id: '063009',
                                      pageJsonId: '3912274',
                                      value: [
                                        '$currentPageSelectedRows_5017404$',
                                      ],
                                    },
                                    actionObjId: 'console',
                                    actionObjName: 'system',
                                    value: 'console',
                                    elseIfs: [],
                                    children: [],
                                    line_number: 4,
                                  },
                                  {
                                    dataName: 'action',
                                    dataId: 170280632258631650,
                                    todoOptions: [
                                      'actionTitle',
                                      'sync',
                                      'url',
                                      'params',
                                    ],
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '4784933',
                                      pageJsonId: '3912274',
                                      sync: false,
                                      method: 'post',
                                      url: '/app/orchestration/run',
                                      serviceVersionId: '1053606050886283264',
                                      serviceCode: 'saveExaminee',
                                      versionCode: '1.0',
                                      _serviceType: 'orchestration',
                                      _source: 'std',
                                      _sourceName: '保存考生',
                                      _serviceId: '1053606050886283264',
                                      _serviceTitle: '保存考生: saveExaminee',
                                      valueType: 'object',
                                      params: 'object',
                                      apiRequestSetParams: [
                                        {
                                          serviceAttrId: '2270745106605',
                                          key: '0',
                                          code: 'root',
                                          name: '根节点',
                                          attrType: 'object',
                                          mustFlag: 'F',
                                          exampleValue: '',
                                          defaultValue: '',
                                          children: [
                                            {
                                              serviceAttrId: '340610249402',
                                              code: 'examinees',
                                              attrType: 'array',
                                              children: [
                                                {
                                                  serviceAttrId:
                                                    '38309632270655',
                                                  code: 'listItem',
                                                  attrType: 'object',
                                                  children: [
                                                    {
                                                      serviceAttrId:
                                                        '01838428538',
                                                      code: 'orgName',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue:
                                                        '云网运营部',
                                                      defaultValue: '',
                                                      key: '0-0-0-0',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.orgName',
                                                      compType: 'Input',
                                                      name: 'orgName',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.orgName',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.orgName',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '462728372312',
                                                      code: 'userName',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: '李会强',
                                                      defaultValue: '',
                                                      key: '0-0-0-1',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userName',
                                                      compType: 'Input',
                                                      name: 'userName',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userName',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.userName',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '756660642942',
                                                      code: 'userId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue:
                                                        '185506189291520',
                                                      defaultValue: '',
                                                      key: '0-0-0-2',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userId',
                                                      compType: 'Input',
                                                      name: 'userId',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userId',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.userId',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '489950357567',
                                                      code: 'phone',
                                                      attrType: 'field',
                                                      type: 'object',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      key: '0-0-0-3',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.phone',
                                                      compType: 'Input',
                                                      name: 'phone',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.phone',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.phone',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '230564269708',
                                                      code: 'userCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: 'TIC104',
                                                      defaultValue: '',
                                                      key: '0-0-0-4',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userCode',
                                                      compType: 'Input',
                                                      name: 'userCode',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userCode',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.userCode',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '510190717392',
                                                      code: 'orgId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: '869',
                                                      defaultValue: '',
                                                      key: '0-0-0-5',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.orgId',
                                                      compType: 'Input',
                                                      name: 'orgId',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.orgId',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.orgId',
                                                    },
                                                  ],
                                                  key: '0-0-0',
                                                  parentKey: '0-0',
                                                  parentType: 'array',
                                                  _id: 'root.examinees.listItem',
                                                  compType: 'Input',
                                                  name: 'listItem',
                                                  parents: [
                                                    'root',
                                                    'examinees',
                                                  ],
                                                  parentCode: 'examinees',
                                                  id: 'root.examinees.listItem',
                                                  dataKey:
                                                    '4784933_root.examinees.listItem',
                                                },
                                              ],
                                              key: '0-0',
                                              parentKey: '0',
                                              parentType: 'object',
                                              _id: 'root.examinees',
                                              compType: 'Input',
                                              name: 'examinees',
                                              parents: ['root'],
                                              id: 'root.examinees',
                                              dataKey: '4784933_root.examinees',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$currentPageSelectedRows_5017404$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              serviceAttrId: '262812757535',
                                              key: '0-1',
                                              code: 'operType',
                                              attrType: 'field',
                                              name: '操作类型:add,remove',
                                              mustFlag: 'F',
                                              exampleValue: '',
                                              defaultValue: '',
                                              parentKey: '0',
                                              parentType: 'object',
                                              type: 'string',
                                              preAttrType: 'object',
                                              preType: '1200',
                                              preCodes: ['param', 'ope'],
                                              _id: 'root.operType',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.operType',
                                              dataKey: '4784933_root.operType',
                                              value: {
                                                type: ['customize'],
                                                code: 'add',
                                              },
                                            },
                                            {
                                              serviceAttrId: '447527211246',
                                              key: '0-2',
                                              code: 'examId',
                                              attrType: 'field',
                                              name: '新增节点',
                                              mustFlag: 'F',
                                              exampleValue: '',
                                              defaultValue: '',
                                              parentKey: '0',
                                              parentType: 'object',
                                              type: 'long',
                                              preAttrType: 'field',
                                              preType: '1200',
                                              preCodes: ['param'],
                                              _id: 'root.examId',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.examId',
                                              dataKey: '4784933_root.examId',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.exam_id$',
                                                ],
                                                code: '',
                                              },
                                            },
                                          ],
                                          _id: 'root',
                                          compType: 'Input',
                                          isRoot: true,
                                          parents: [],
                                          id: 'root',
                                          dataKey: '4784933_root',
                                        },
                                      ],
                                    },
                                    actionObjId: 'apiRequest',
                                    actionObjName: 'system',
                                    value: 'apiRequest',
                                    elseIfs: [],
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 170280632260141980,
                                        value: 'callback1',
                                        params: [],
                                        elseIfs: [],
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 170280652086116830,
                                            todoOptions: [
                                              'selectServerDataSource',
                                              'sync',
                                              'dataSourceReloadFilter',
                                            ],
                                            options: {
                                              compId: 'reloadDataSource',
                                              compName: 'system',
                                              id: '483165',
                                              pageJsonId: '3912274',
                                              sync: false,
                                              dataSourceId: 170279873310963140,
                                              dataSourceName: 'getUsersForExam',
                                              dataSourceRelType: 'service',
                                              dataSourceReloadFilter: [
                                                {
                                                  attrId: '3487287',
                                                  code: 'examId',
                                                  name: '考试实例ID',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '$state.exam_id$',
                                                  },
                                                  sourceAttrId: '120168544785',
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$state.exam_id$',
                                                    ],
                                                    code: '',
                                                  },
                                                },
                                                {
                                                  attrId: '866447',
                                                  code: 'pageSize',
                                                  name: '每页大小',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '344157638484287',
                                                  value: {
                                                    type: ['customize'],
                                                    code: '10',
                                                  },
                                                },
                                                {
                                                  attrId: '3239474',
                                                  code: 'pageNum',
                                                  name: '页数',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId: '128950474722',
                                                  value: {
                                                    type: ['customize'],
                                                    code: '1',
                                                  },
                                                },
                                                {
                                                  attrId: '043765',
                                                  code: 'userName',
                                                  name: '用户姓名',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId: '2424318327622',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_4295592',
                                                      'getFieldsValue',
                                                    ],
                                                    code: 'userName',
                                                  },
                                                },
                                                {
                                                  attrId: '9695664',
                                                  code: 'userCode',
                                                  name: '用户编码',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId: '225553162551',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_4295592',
                                                      'getFieldsValue',
                                                    ],
                                                    code: 'userCode',
                                                  },
                                                },
                                              ],
                                              otherObjectArrayOptions: {},
                                              targetDataSourcePaths: [],
                                            },
                                            actionObjId: 'reloadDataSource',
                                            actionObjName: 'system',
                                            value: 'reloadDataSource',
                                            elseIfs: [],
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 170280652086192060,
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                                children: [],
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 170280652086154370,
                                                value: 'callback2',
                                                params: [],
                                                elseIfs: [],
                                                children: [],
                                              },
                                            ],
                                            line_number: 6,
                                          },
                                        ],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 170280632260123000,
                                        value: 'callback2',
                                        params: [],
                                        elseIfs: [],
                                        children: [],
                                      },
                                    ],
                                    line_number: 5,
                                  },
                                ],
                                callback: [
                                  {
                                    type: 'console',
                                    dataId: 170280221559996930,
                                    options: {
                                      compId: 'console',
                                      compName: 'system',
                                      id: '063009',
                                      pageJsonId: '3912274',
                                      value: [
                                        '$currentPageSelectedRows_5017404$',
                                      ],
                                    },
                                    line_number: 4,
                                  },
                                  {
                                    type: 'apiRequest',
                                    dataId: 170280632258631650,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '4784933',
                                      pageJsonId: '3912274',
                                      sync: false,
                                      method: 'post',
                                      url: '/app/orchestration/run',
                                      serviceVersionId: '1053606050886283264',
                                      serviceCode: 'saveExaminee',
                                      versionCode: '1.0',
                                      _serviceType: 'orchestration',
                                      _source: 'std',
                                      _sourceName: '保存考生',
                                      _serviceId: '1053606050886283264',
                                      _serviceTitle: '保存考生: saveExaminee',
                                      valueType: 'object',
                                      params: 'object',
                                      apiRequestSetParams: [
                                        {
                                          serviceAttrId: '2270745106605',
                                          key: '0',
                                          code: 'root',
                                          name: '根节点',
                                          attrType: 'object',
                                          mustFlag: 'F',
                                          exampleValue: '',
                                          defaultValue: '',
                                          children: [
                                            {
                                              serviceAttrId: '340610249402',
                                              code: 'examinees',
                                              attrType: 'array',
                                              children: [
                                                {
                                                  serviceAttrId:
                                                    '38309632270655',
                                                  code: 'listItem',
                                                  attrType: 'object',
                                                  children: [
                                                    {
                                                      serviceAttrId:
                                                        '01838428538',
                                                      code: 'orgName',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue:
                                                        '云网运营部',
                                                      defaultValue: '',
                                                      key: '0-0-0-0',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.orgName',
                                                      compType: 'Input',
                                                      name: 'orgName',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.orgName',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.orgName',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '462728372312',
                                                      code: 'userName',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: '李会强',
                                                      defaultValue: '',
                                                      key: '0-0-0-1',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userName',
                                                      compType: 'Input',
                                                      name: 'userName',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userName',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.userName',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '756660642942',
                                                      code: 'userId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue:
                                                        '185506189291520',
                                                      defaultValue: '',
                                                      key: '0-0-0-2',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userId',
                                                      compType: 'Input',
                                                      name: 'userId',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userId',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.userId',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '489950357567',
                                                      code: 'phone',
                                                      attrType: 'field',
                                                      type: 'object',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      key: '0-0-0-3',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.phone',
                                                      compType: 'Input',
                                                      name: 'phone',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.phone',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.phone',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '230564269708',
                                                      code: 'userCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: 'TIC104',
                                                      defaultValue: '',
                                                      key: '0-0-0-4',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userCode',
                                                      compType: 'Input',
                                                      name: 'userCode',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userCode',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.userCode',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '510190717392',
                                                      code: 'orgId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: '869',
                                                      defaultValue: '',
                                                      key: '0-0-0-5',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.orgId',
                                                      compType: 'Input',
                                                      name: 'orgId',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.orgId',
                                                      dataKey:
                                                        '4784933_root.examinees.listItem.orgId',
                                                    },
                                                  ],
                                                  key: '0-0-0',
                                                  parentKey: '0-0',
                                                  parentType: 'array',
                                                  _id: 'root.examinees.listItem',
                                                  compType: 'Input',
                                                  name: 'listItem',
                                                  parents: [
                                                    'root',
                                                    'examinees',
                                                  ],
                                                  parentCode: 'examinees',
                                                  id: 'root.examinees.listItem',
                                                  dataKey:
                                                    '4784933_root.examinees.listItem',
                                                },
                                              ],
                                              key: '0-0',
                                              parentKey: '0',
                                              parentType: 'object',
                                              _id: 'root.examinees',
                                              compType: 'Input',
                                              name: 'examinees',
                                              parents: ['root'],
                                              id: 'root.examinees',
                                              dataKey: '4784933_root.examinees',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$currentPageSelectedRows_5017404$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              serviceAttrId: '262812757535',
                                              key: '0-1',
                                              code: 'operType',
                                              attrType: 'field',
                                              name: '操作类型:add,remove',
                                              mustFlag: 'F',
                                              exampleValue: '',
                                              defaultValue: '',
                                              parentKey: '0',
                                              parentType: 'object',
                                              type: 'string',
                                              preAttrType: 'object',
                                              preType: '1200',
                                              preCodes: ['param', 'ope'],
                                              _id: 'root.operType',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.operType',
                                              dataKey: '4784933_root.operType',
                                              value: {
                                                type: ['customize'],
                                                code: 'add',
                                              },
                                            },
                                            {
                                              serviceAttrId: '447527211246',
                                              key: '0-2',
                                              code: 'examId',
                                              attrType: 'field',
                                              name: '新增节点',
                                              mustFlag: 'F',
                                              exampleValue: '',
                                              defaultValue: '',
                                              parentKey: '0',
                                              parentType: 'object',
                                              type: 'long',
                                              preAttrType: 'field',
                                              preType: '1200',
                                              preCodes: ['param'],
                                              _id: 'root.examId',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.examId',
                                              dataKey: '4784933_root.examId',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.exam_id$',
                                                ],
                                                code: '',
                                              },
                                            },
                                          ],
                                          _id: 'root',
                                          compType: 'Input',
                                          isRoot: true,
                                          parents: [],
                                          id: 'root',
                                          dataKey: '4784933_root',
                                        },
                                      ],
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'reloadDataSource',
                                        dataId: 170280652086116830,
                                        options: {
                                          compId: 'reloadDataSource',
                                          compName: 'system',
                                          id: '483165',
                                          pageJsonId: '3912274',
                                          sync: false,
                                          dataSourceId: 170279873310963140,
                                          dataSourceName: 'getUsersForExam',
                                          dataSourceRelType: 'service',
                                          dataSourceReloadFilter: [
                                            {
                                              attrId: '3487287',
                                              code: 'examId',
                                              name: '考试实例ID',
                                              type: 'long',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '$state.exam_id$',
                                              },
                                              sourceAttrId: '120168544785',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.exam_id$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              attrId: '866447',
                                              code: 'pageSize',
                                              name: '每页大小',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              sourceAttrId: '344157638484287',
                                              value: {
                                                type: ['customize'],
                                                code: '10',
                                              },
                                            },
                                            {
                                              attrId: '3239474',
                                              code: 'pageNum',
                                              name: '页数',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              sourceAttrId: '128950474722',
                                              value: {
                                                type: ['customize'],
                                                code: '1',
                                              },
                                            },
                                            {
                                              attrId: '043765',
                                              code: 'userName',
                                              name: '用户姓名',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              sourceAttrId: '2424318327622',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_4295592',
                                                  'getFieldsValue',
                                                ],
                                                code: 'userName',
                                              },
                                            },
                                            {
                                              attrId: '9695664',
                                              code: 'userCode',
                                              name: '用户编码',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              sourceAttrId: '225553162551',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_4295592',
                                                  'getFieldsValue',
                                                ],
                                                code: 'userCode',
                                              },
                                            },
                                          ],
                                          otherObjectArrayOptions: {},
                                          targetDataSourcePaths: [],
                                        },
                                        line_number: 6,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 170280216697220400,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '302373',
                                  pageJsonId: '3912274',
                                  type: 'info',
                                  value: '请先选择考生',
                                },
                                line_number: 3,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatagetTableCurrentPageSelected.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatagetTableCurrentPageSelected,
                      { e },
                      'getTableCurrentPageSelected',
                      {
                        id: 'getTableCurrentPageSelected',
                        name: 'getTableCurrentPageSelected',
                        type: 'getTableCurrentPageSelected',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['Img_482324'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'普通容器'}
                backgroundType={{ type: 'cleanColor' }}
                $$componentItem={{
                  id: 'View_2859723',
                  uid: 'View_2859723',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'center',
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) => (refs['View_2859723'] = r)}
                {...injectData}
              >
                <Img
                  name={'图片'}
                  srcType={'fileCode'}
                  alt={'图片'}
                  fileCode={'PIC_959426'}
                  $$componentItem={{
                    id: 'Img_260358',
                    uid: 'Img_260358',
                    type: 'Img',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    transform: 'rotate(180deg)',
                  }}
                  onClick={(e: any) => {
                    const eventDatagetTableCurrentPageSelected2: any = [
                      {
                        type: 'getTableCurrentPageSelected',
                        dataId: 170280638760621250,
                        options: {
                          compId: 'Table_525849',
                          compLib: 'comm',
                          pageJsonId: '3912274',
                          compName: 'Table',
                          id: '324332',
                        },
                        line_number: 1,
                        callback1: [
                          {
                            type: 'ifelse',
                            condition: [
                              {
                                condId: '101248',
                                options: {
                                  context: '$currentPageSelectedRows_324332$',
                                  operate: 'empty',
                                },
                                conditionType: 'checkContextValue',
                                objType: 'system',
                                objId: 'sys',
                              },
                            ],
                            dataId: 170280639188281380,
                            elseIfs: [
                              {
                                dataName: 'elseIf',
                                dataId: 170280646952687460,
                                condition: [],
                                value: 'elseIf',
                                desc: '',
                                elseIfs: [],
                                children: [
                                  {
                                    dataName: 'action',
                                    dataId: 170280647642005150,
                                    todoOptions: [
                                      'actionTitle',
                                      'sync',
                                      'url',
                                      'params',
                                    ],
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '673352',
                                      pageJsonId: '3912274',
                                      sync: false,
                                      method: 'post',
                                      url: '/app/orchestration/run',
                                      serviceVersionId: '1053606050886283264',
                                      serviceCode: 'saveExaminee',
                                      versionCode: '1.0',
                                      _serviceType: 'orchestration',
                                      _source: 'std',
                                      _sourceName: '保存考生',
                                      _serviceId: '1053606050886283264',
                                      _serviceTitle: '保存考生: saveExaminee',
                                      valueType: 'object',
                                      apiRequestSetParams: [
                                        {
                                          serviceAttrId: '2270745106605',
                                          key: '0',
                                          code: 'root',
                                          name: '根节点',
                                          attrType: 'object',
                                          mustFlag: 'F',
                                          exampleValue: '',
                                          defaultValue: '',
                                          children: [
                                            {
                                              serviceAttrId: '340610249402',
                                              code: 'examinees',
                                              attrType: 'array',
                                              children: [
                                                {
                                                  serviceAttrId:
                                                    '38309632270655',
                                                  code: 'listItem',
                                                  attrType: 'object',
                                                  children: [
                                                    {
                                                      serviceAttrId:
                                                        '01838428538',
                                                      code: 'orgName',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue:
                                                        '云网运营部',
                                                      defaultValue: '',
                                                      key: '0-0-0-0',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.orgName',
                                                      compType: 'Input',
                                                      name: 'orgName',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.orgName',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.orgName',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '462728372312',
                                                      code: 'userName',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: '李会强',
                                                      defaultValue: '',
                                                      key: '0-0-0-1',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userName',
                                                      compType: 'Input',
                                                      name: 'userName',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userName',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.userName',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '756660642942',
                                                      code: 'userId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue:
                                                        '185506189291520',
                                                      defaultValue: '',
                                                      key: '0-0-0-2',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userId',
                                                      compType: 'Input',
                                                      name: 'userId',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userId',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.userId',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '489950357567',
                                                      code: 'phone',
                                                      attrType: 'field',
                                                      type: 'object',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      key: '0-0-0-3',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.phone',
                                                      compType: 'Input',
                                                      name: 'phone',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.phone',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.phone',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '230564269708',
                                                      code: 'userCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: 'TIC104',
                                                      defaultValue: '',
                                                      key: '0-0-0-4',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userCode',
                                                      compType: 'Input',
                                                      name: 'userCode',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userCode',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.userCode',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '510190717392',
                                                      code: 'orgId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: '869',
                                                      defaultValue: '',
                                                      key: '0-0-0-5',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.orgId',
                                                      compType: 'Input',
                                                      name: 'orgId',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.orgId',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.orgId',
                                                    },
                                                  ],
                                                  key: '0-0-0',
                                                  parentKey: '0-0',
                                                  parentType: 'array',
                                                  _id: 'root.examinees.listItem',
                                                  compType: 'Input',
                                                  name: 'listItem',
                                                  parents: [
                                                    'root',
                                                    'examinees',
                                                  ],
                                                  parentCode: 'examinees',
                                                  id: 'root.examinees.listItem',
                                                  dataKey:
                                                    '673352_root.examinees.listItem',
                                                },
                                              ],
                                              key: '0-0',
                                              parentKey: '0',
                                              parentType: 'object',
                                              _id: 'root.examinees',
                                              compType: 'Input',
                                              name: 'examinees',
                                              parents: ['root'],
                                              id: 'root.examinees',
                                              dataKey: '673352_root.examinees',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$currentPageSelectedRows_324332$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              serviceAttrId: '262812757535',
                                              key: '0-1',
                                              code: 'operType',
                                              attrType: 'field',
                                              name: '操作类型:add,remove',
                                              mustFlag: 'F',
                                              exampleValue: '',
                                              defaultValue: '',
                                              parentKey: '0',
                                              parentType: 'object',
                                              type: 'string',
                                              preAttrType: 'object',
                                              preType: '1200',
                                              preCodes: ['param', 'ope'],
                                              _id: 'root.operType',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.operType',
                                              dataKey: '673352_root.operType',
                                              value: {
                                                type: ['customize'],
                                                code: 'remove',
                                              },
                                            },
                                            {
                                              serviceAttrId: '447527211246',
                                              key: '0-2',
                                              code: 'examId',
                                              attrType: 'field',
                                              name: '新增节点',
                                              mustFlag: 'F',
                                              exampleValue: '',
                                              defaultValue: '',
                                              parentKey: '0',
                                              parentType: 'object',
                                              type: 'long',
                                              preAttrType: 'field',
                                              preType: '1200',
                                              preCodes: ['param'],
                                              _id: 'root.examId',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.examId',
                                              dataKey: '673352_root.examId',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.exam_id$',
                                                ],
                                                code: '',
                                              },
                                            },
                                          ],
                                          _id: 'root',
                                          compType: 'Input',
                                          isRoot: true,
                                          parents: [],
                                          id: 'root',
                                          dataKey: '673352_root',
                                        },
                                      ],
                                      params: 'object',
                                    },
                                    actionObjId: 'apiRequest',
                                    actionObjName: 'system',
                                    value: 'apiRequest',
                                    elseIfs: [],
                                    children: [
                                      {
                                        dataName: 'callback',
                                        dataId: 170280647642083800,
                                        value: 'callback1',
                                        params: [],
                                        elseIfs: [],
                                        children: [
                                          {
                                            dataName: 'action',
                                            dataId: 170280656401056450,
                                            todoOptions: [
                                              'selectServerDataSource',
                                              'sync',
                                              'dataSourceReloadFilter',
                                            ],
                                            options: {
                                              compId: 'reloadDataSource',
                                              compName: 'system',
                                              id: '198091',
                                              pageJsonId: '3912274',
                                              sync: false,
                                              dataSourceId: 170279873310963140,
                                              dataSourceName: 'getUsersForExam',
                                              dataSourceRelType: 'service',
                                              dataSourceReloadFilter: [
                                                {
                                                  attrId: '3487287',
                                                  code: 'examId',
                                                  name: '考试实例ID',
                                                  type: 'long',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                    value: '$state.exam_id$',
                                                  },
                                                  sourceAttrId: '120168544785',
                                                  value: {
                                                    type: [
                                                      'context',
                                                      '$state.exam_id$',
                                                    ],
                                                    code: '',
                                                  },
                                                },
                                                {
                                                  attrId: '866447',
                                                  code: 'pageSize',
                                                  name: '每页大小',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId:
                                                    '344157638484287',
                                                  value: {
                                                    type: ['customize'],
                                                    code: '10',
                                                  },
                                                },
                                                {
                                                  attrId: '3239474',
                                                  code: 'pageNum',
                                                  name: '页数',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId: '128950474722',
                                                  value: {
                                                    type: ['customize'],
                                                    code: '1',
                                                  },
                                                },
                                                {
                                                  attrId: '043765',
                                                  code: 'userName',
                                                  name: '用户姓名',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId: '2424318327622',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_4295592',
                                                      'getFieldsValue',
                                                    ],
                                                    code: 'userName',
                                                  },
                                                },
                                                {
                                                  attrId: '9695664',
                                                  code: 'userCode',
                                                  name: '用户编码',
                                                  type: 'string',
                                                  sort: { isSort: true },
                                                  initialData: {
                                                    type: 'static',
                                                  },
                                                  sourceAttrId: '225553162551',
                                                  value: {
                                                    type: [
                                                      'form',
                                                      'Form_4295592',
                                                      'getFieldsValue',
                                                    ],
                                                    code: 'userCode',
                                                  },
                                                },
                                              ],
                                              otherObjectArrayOptions: {},
                                              targetDataSourcePaths: [],
                                            },
                                            actionObjId: 'reloadDataSource',
                                            actionObjName: 'system',
                                            value: 'reloadDataSource',
                                            elseIfs: [],
                                            children: [
                                              {
                                                dataName: 'callback',
                                                dataId: 170280656401067740,
                                                value: 'callback1',
                                                params: [],
                                                elseIfs: [],
                                                children: [],
                                              },
                                              {
                                                dataName: 'callback',
                                                dataId: 170280656401013300,
                                                value: 'callback2',
                                                params: [],
                                                elseIfs: [],
                                                children: [],
                                              },
                                            ],
                                            line_number: 5,
                                          },
                                        ],
                                      },
                                      {
                                        dataName: 'callback',
                                        dataId: 170280647642059330,
                                        value: 'callback2',
                                        params: [],
                                        elseIfs: [],
                                        children: [],
                                      },
                                    ],
                                    line_number: 4,
                                  },
                                ],
                                callback: [
                                  {
                                    type: 'apiRequest',
                                    dataId: 170280647642005150,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '673352',
                                      pageJsonId: '3912274',
                                      sync: false,
                                      method: 'post',
                                      url: '/app/orchestration/run',
                                      serviceVersionId: '1053606050886283264',
                                      serviceCode: 'saveExaminee',
                                      versionCode: '1.0',
                                      _serviceType: 'orchestration',
                                      _source: 'std',
                                      _sourceName: '保存考生',
                                      _serviceId: '1053606050886283264',
                                      _serviceTitle: '保存考生: saveExaminee',
                                      valueType: 'object',
                                      apiRequestSetParams: [
                                        {
                                          serviceAttrId: '2270745106605',
                                          key: '0',
                                          code: 'root',
                                          name: '根节点',
                                          attrType: 'object',
                                          mustFlag: 'F',
                                          exampleValue: '',
                                          defaultValue: '',
                                          children: [
                                            {
                                              serviceAttrId: '340610249402',
                                              code: 'examinees',
                                              attrType: 'array',
                                              children: [
                                                {
                                                  serviceAttrId:
                                                    '38309632270655',
                                                  code: 'listItem',
                                                  attrType: 'object',
                                                  children: [
                                                    {
                                                      serviceAttrId:
                                                        '01838428538',
                                                      code: 'orgName',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue:
                                                        '云网运营部',
                                                      defaultValue: '',
                                                      key: '0-0-0-0',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.orgName',
                                                      compType: 'Input',
                                                      name: 'orgName',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.orgName',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.orgName',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '462728372312',
                                                      code: 'userName',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: '李会强',
                                                      defaultValue: '',
                                                      key: '0-0-0-1',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userName',
                                                      compType: 'Input',
                                                      name: 'userName',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userName',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.userName',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '756660642942',
                                                      code: 'userId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue:
                                                        '185506189291520',
                                                      defaultValue: '',
                                                      key: '0-0-0-2',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userId',
                                                      compType: 'Input',
                                                      name: 'userId',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userId',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.userId',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '489950357567',
                                                      code: 'phone',
                                                      attrType: 'field',
                                                      type: 'object',
                                                      mustFlag: 'F',
                                                      defaultValue: '',
                                                      key: '0-0-0-3',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.phone',
                                                      compType: 'Input',
                                                      name: 'phone',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.phone',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.phone',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '230564269708',
                                                      code: 'userCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: 'TIC104',
                                                      defaultValue: '',
                                                      key: '0-0-0-4',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.userCode',
                                                      compType: 'Input',
                                                      name: 'userCode',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.userCode',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.userCode',
                                                    },
                                                    {
                                                      serviceAttrId:
                                                        '510190717392',
                                                      code: 'orgId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      exampleValue: '869',
                                                      defaultValue: '',
                                                      key: '0-0-0-5',
                                                      parentKey: '0-0-0',
                                                      parentType: 'object',
                                                      _id: 'root.examinees.listItem.orgId',
                                                      compType: 'Input',
                                                      name: 'orgId',
                                                      parents: [
                                                        'root',
                                                        'examinees',
                                                        'listItem',
                                                      ],
                                                      parentCode: 'listItem',
                                                      id: 'root.examinees.listItem.orgId',
                                                      dataKey:
                                                        '673352_root.examinees.listItem.orgId',
                                                    },
                                                  ],
                                                  key: '0-0-0',
                                                  parentKey: '0-0',
                                                  parentType: 'array',
                                                  _id: 'root.examinees.listItem',
                                                  compType: 'Input',
                                                  name: 'listItem',
                                                  parents: [
                                                    'root',
                                                    'examinees',
                                                  ],
                                                  parentCode: 'examinees',
                                                  id: 'root.examinees.listItem',
                                                  dataKey:
                                                    '673352_root.examinees.listItem',
                                                },
                                              ],
                                              key: '0-0',
                                              parentKey: '0',
                                              parentType: 'object',
                                              _id: 'root.examinees',
                                              compType: 'Input',
                                              name: 'examinees',
                                              parents: ['root'],
                                              id: 'root.examinees',
                                              dataKey: '673352_root.examinees',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$currentPageSelectedRows_324332$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              serviceAttrId: '262812757535',
                                              key: '0-1',
                                              code: 'operType',
                                              attrType: 'field',
                                              name: '操作类型:add,remove',
                                              mustFlag: 'F',
                                              exampleValue: '',
                                              defaultValue: '',
                                              parentKey: '0',
                                              parentType: 'object',
                                              type: 'string',
                                              preAttrType: 'object',
                                              preType: '1200',
                                              preCodes: ['param', 'ope'],
                                              _id: 'root.operType',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.operType',
                                              dataKey: '673352_root.operType',
                                              value: {
                                                type: ['customize'],
                                                code: 'remove',
                                              },
                                            },
                                            {
                                              serviceAttrId: '447527211246',
                                              key: '0-2',
                                              code: 'examId',
                                              attrType: 'field',
                                              name: '新增节点',
                                              mustFlag: 'F',
                                              exampleValue: '',
                                              defaultValue: '',
                                              parentKey: '0',
                                              parentType: 'object',
                                              type: 'long',
                                              preAttrType: 'field',
                                              preType: '1200',
                                              preCodes: ['param'],
                                              _id: 'root.examId',
                                              compType: 'Input',
                                              parents: ['root'],
                                              id: 'root.examId',
                                              dataKey: '673352_root.examId',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.exam_id$',
                                                ],
                                                code: '',
                                              },
                                            },
                                          ],
                                          _id: 'root',
                                          compType: 'Input',
                                          isRoot: true,
                                          parents: [],
                                          id: 'root',
                                          dataKey: '673352_root',
                                        },
                                      ],
                                      params: 'object',
                                    },
                                    line_number: 4,
                                    callback1: [
                                      {
                                        type: 'reloadDataSource',
                                        dataId: 170280656401056450,
                                        options: {
                                          compId: 'reloadDataSource',
                                          compName: 'system',
                                          id: '198091',
                                          pageJsonId: '3912274',
                                          sync: false,
                                          dataSourceId: 170279873310963140,
                                          dataSourceName: 'getUsersForExam',
                                          dataSourceRelType: 'service',
                                          dataSourceReloadFilter: [
                                            {
                                              attrId: '3487287',
                                              code: 'examId',
                                              name: '考试实例ID',
                                              type: 'long',
                                              sort: { isSort: true },
                                              initialData: {
                                                type: 'static',
                                                value: '$state.exam_id$',
                                              },
                                              sourceAttrId: '120168544785',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.exam_id$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              attrId: '866447',
                                              code: 'pageSize',
                                              name: '每页大小',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              sourceAttrId: '344157638484287',
                                              value: {
                                                type: ['customize'],
                                                code: '10',
                                              },
                                            },
                                            {
                                              attrId: '3239474',
                                              code: 'pageNum',
                                              name: '页数',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              sourceAttrId: '128950474722',
                                              value: {
                                                type: ['customize'],
                                                code: '1',
                                              },
                                            },
                                            {
                                              attrId: '043765',
                                              code: 'userName',
                                              name: '用户姓名',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              sourceAttrId: '2424318327622',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_4295592',
                                                  'getFieldsValue',
                                                ],
                                                code: 'userName',
                                              },
                                            },
                                            {
                                              attrId: '9695664',
                                              code: 'userCode',
                                              name: '用户编码',
                                              type: 'string',
                                              sort: { isSort: true },
                                              initialData: { type: 'static' },
                                              sourceAttrId: '225553162551',
                                              value: {
                                                type: [
                                                  'form',
                                                  'Form_4295592',
                                                  'getFieldsValue',
                                                ],
                                                code: 'userCode',
                                              },
                                            },
                                          ],
                                          otherObjectArrayOptions: {},
                                          targetDataSourcePaths: [],
                                        },
                                        line_number: 5,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                            line_number: 2,
                            callback1: [
                              {
                                type: 'showMessage',
                                dataId: 170280641830199680,
                                options: {
                                  compId: 'showMessage',
                                  compName: 'system',
                                  id: '026019',
                                  pageJsonId: '3912274',
                                  type: 'info',
                                  value: '请先选择移除考生',
                                },
                                line_number: 3,
                              },
                            ],
                          },
                        ],
                        callback2: [],
                      },
                    ];
                    eventDatagetTableCurrentPageSelected2.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatagetTableCurrentPageSelected2,
                      { e },
                      'getTableCurrentPageSelected',
                      {
                        id: 'getTableCurrentPageSelected',
                        name: 'getTableCurrentPageSelected',
                        type: 'getTableCurrentPageSelected',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['Img_260358'] = r)}
                  {...injectData}
                />
              </View>
            </View>
            <View
              name={'普通容器'}
              $$componentItem={{
                id: 'View_079048',
                uid: 'View_079048',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                display: 'block',
                width: '100%',
                borderSetting: 'border 0px solid #d9d7d7',
                'border-left': '0px solid #d9d7d7',
                'border-right': '0px solid #d9d7d7',
                'border-top': '0px solid #d9d7d7',
                'border-bottom': '0px solid #d9d7d7',
                alignSelf: 'flex-start',
              }}
              ref={(r: any) => (refs['View_079048'] = r)}
              {...injectData}
            >
              <Table
                name={'已选表格'}
                isFlexColumn={false}
                extendNum={3}
                adjustModel={'auto'}
                pageSize={data?.queryUser?.pageSize}
                current={data?.queryUser?.pageNum}
                headBtnNum={3}
                tableTitle={'已选考生'}
                columns={[
                  {
                    title: '用户id',
                    dataIndex: 'userId',
                    key: 'column1',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    id: '669426',
                    hiddenRule: true,
                    align: 'center',
                    customRendering: undefined,
                  },
                  {
                    title: '姓名',
                    dataIndex: 'userName',
                    key: 'column2',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    id: '1591258',
                    align: 'center',
                    customRendering: undefined,
                  },
                  {
                    title: '工号',
                    dataIndex: 'userCode',
                    key: 'column3',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    id: '778697',
                    align: 'center',
                    customRendering: undefined,
                  },
                  {
                    title: '联系方式',
                    dataIndex: 'phone',
                    key: 'column4',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    id: '3576624',
                    align: 'center',
                    customRendering: undefined,
                  },
                  {
                    title: '组织id',
                    dataIndex: 'orgId',
                    key: 'column5',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    id: '635917',
                    align: 'center',
                    hiddenRule: true,
                    customRendering: undefined,
                  },
                  {
                    title: '所在部门',
                    dataIndex: 'orgName',
                    key: 'column6',
                    editContent: {
                      edittype: 'title',
                      title: {
                        code: 'function main(text, row, index) { return text;}',
                      },
                    },
                    id: '49436',
                    align: 'center',
                    customRendering: undefined,
                  },
                ]}
                page={true}
                rowKeyType={'specified'}
                editMode={'single'}
                bordered={'segmentation'}
                size={'middle'}
                fixedAction={false}
                rowSelection={{ type: 'checkbox' }}
                showHead={true}
                showTotal={true}
                showSizeChanger={false}
                showQuickJumper={false}
                pageSizeOptions={'[5,10,20]'}
                showCustom={{
                  hasCustom: false,
                  customTitle: '自定义列',
                  iconPosition: 'left',
                  customStyle: 'default',
                }}
                customNum={3}
                dataSource={data?.getUsersForExam?.examinees}
                total={data?.queryUser?.total}
                rowKey={'userId'}
                headExtends={[]}
                extend={[]}
                dataSourceFromDataSourceConfig={
                  'data.getUsersForExam.examinees;'
                }
                style={{}}
                $$componentItem={{
                  id: 'Table_525849',
                  uid: 'Table_525849',
                  type: 'Table',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onPageChange={(
                  page: any,
                  pageSize: any,
                  ascendCol: any,
                  descendCol: any,
                ) => {
                  const eventDatareloadDataSource2: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 170606001702507170,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'system',
                        id: '064074',
                        pageJsonId: '3912274',
                        sync: false,
                        dataSourceId: 170279873310963140,
                        dataSourceName: 'getUsersForExam',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '3487287',
                            code: 'examId',
                            name: '考试实例ID',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: {
                              type: 'static',
                              value: '$state.exam_id$',
                            },
                            sourceAttrId: '120168544785',
                            value: {
                              type: ['context', '$state.exam_id$'],
                              code: '',
                            },
                          },
                          {
                            attrId: '866447',
                            code: 'pageSize',
                            name: '每页大小',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '344157638484287',
                            value: { type: ['customize'], code: '10' },
                          },
                          {
                            attrId: '3239474',
                            code: 'pageNum',
                            name: '页数',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '128950474722',
                            value: { type: ['customize'], code: '$page$' },
                          },
                          {
                            attrId: '043765',
                            code: 'userName',
                            name: '用户姓名',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '2424318327622',
                            value: {
                              type: ['form', 'Form_4295592', 'getFieldsValue'],
                              code: 'userName',
                            },
                          },
                          {
                            attrId: '9695664',
                            code: 'userCode',
                            name: '用户编码',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '225553162551',
                            value: {
                              type: ['form', 'Form_4295592', 'getFieldsValue'],
                              code: 'userCode',
                            },
                          },
                        ],
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatareloadDataSource2.params =
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
                      {
                        title: '正序字段',
                        name: 'ascendCol',
                        value: '$ascendCol$',
                      },
                      {
                        title: '倒序字段',
                        name: 'descendCol',
                        value: '$descendCol$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatareloadDataSource2,
                    { page, pageSize, ascendCol, descendCol },
                    'reloadDataSource',
                    {
                      id: 'reloadDataSource',
                      name: 'reloadDataSource',
                      type: 'reloadDataSource',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Table_525849'] = r)}
                {...injectData}
              />
            </View>
          </View>
        </Layout>
      </View>
    </div>
  );
};

export default withPageHOC(Kaoshengpeizhi6102$$Modal, {
  pageId: '1052411612038131712',
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', exam_id: '' },
});
