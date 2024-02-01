// 注意: 出码模块正在调试
import React from 'react';

import {
  Button,
  Form,
  Input,
  InputNumber,
  Layout,
  Table,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Kaotipeizhi6839$$Page: React.FC<PageProps> = ({
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
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style} className="__CustomClass_243035__">
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_243035_1',
          uid: 'View_243035_1',
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
        onClick={(e: any) => {
          const eventDatasysSetDisable2: any = [
            {
              type: 'sysSetDisable',
              dataId: 169968374076797950,
              options: {
                compId: ['Form_410609'],
                compLib: 'comm',
                pageJsonId: '243035',
                compName: 'Form',
                id: '118509',
                compValueList: { Form_410609: 'true' },
                compid: ['Form_410609'],
              },
              line_number: 1,
            },
          ];
          eventDatasysSetDisable2.params =
            [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
          CMDGenerator(eventDatasysSetDisable2, { e }, 'sysSetDisable', {
            id: 'sysSetDisable',
            name: 'sysSetDisable',
            type: 'sysSetDisable',
            platform: 'pc',
          });
        }}
        ref={(r: any) => (refs['View_243035_1'] = r)}
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
            id: 'Layout_189238',
            uid: 'Layout_189238',
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
          ref={(r: any) => (refs['Layout_189238'] = r)}
          {...injectData}
        >
          <View
            name={'普通容器'}
            $$componentItem={{
              id: 'View_068126',
              uid: 'View_068126',
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
            }}
            ref={(r: any) => (refs['View_068126'] = r)}
            {...injectData}
          >
            <Form
              name={'表单'}
              colSpan={6}
              labelCol={8}
              wrapperCol={16}
              layout={'horizontal'}
              colon={true}
              labelAlign={'right'}
              colSpace={0}
              rowSpace={16}
              formCode={'Code_Form_410609'}
              genRuleType={'key'}
              formType={'normal'}
              busiObjectId={''}
              relationDataSource={data?.LCDP_EXAMS}
              $$componentItem={{
                id: 'Form_410609',
                uid: 'Form_410609',
                type: 'Form',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ padding: '0px 0px 0px 0px' }}
              onValuesChange={(changedFieldName: any, changedValue: any) => {
                const eventDatasetDataSource3: any = [
                  {
                    type: 'setDataSource',
                    dataId: 169968371400317280,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '76643',
                      pageJsonId: '243035',
                      dataSourceId: 169968362237548030,
                      dataSourceName: 'LCDP_EXAMS',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '32181594',
                          code: 'id',
                          name: '主键',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016640',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '798954',
                          code: 'name',
                          name: '考试标题',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016641',
                          sourceId: '1040454540625457153',
                          value: {
                            type: ['form', 'Form_410609', 'getFieldsValue'],
                            code: 'name',
                          },
                        },
                        {
                          attrId: '319978',
                          code: 'creator_id',
                          name: '创建人',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016642',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '037985',
                          code: 'creator_id_introduce',
                          name: '创建人翻译',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _virtualAttrId:
                            '1040454540508016642-introduce-virtual',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '79423',
                          code: 'create_time',
                          name: '创建时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016643',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '0702',
                          code: 'updator_id',
                          name: '修改人',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016644',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '6364865',
                          code: 'updator_id_introduce',
                          name: '修改人翻译',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          _virtualAttrId:
                            '1040454540508016644-introduce-virtual',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '390332',
                          code: 'update_time',
                          name: '修改时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016645',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '2395507',
                          code: 'description',
                          name: '考试描述',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016646',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '857624',
                          code: 'start_time',
                          name: '考试开始时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016647',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '815269',
                          code: 'end_time',
                          name: '考试截止时间',
                          type: 'datetime',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016648',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '479084',
                          code: 'state',
                          name: '考试状态',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016649',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '8186016',
                          code: 'duration',
                          name: '考试时长(分钟)',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016650',
                          sourceId: '1040454540625457153',
                        },
                        {
                          attrId: '326084',
                          code: 'score',
                          name: '总分数',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040454540508016651',
                          sourceId: '1040454540625457153',
                          value: {
                            type: ['form', 'Form_410609', 'getFieldsValue'],
                            code: 'score',
                          },
                        },
                        {
                          attrId: '737288',
                          code: 'type',
                          name: '考试类型',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static' },
                          sourceAttrId: '1040467867271442444',
                          sourceId: '1040454540625457153',
                          value: {
                            type: ['form', 'Form_410609', 'getFieldsValue'],
                            code: 'type',
                          },
                        },
                      ],
                      onlySetPatch: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatasetDataSource3.params =
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
                  eventDatasetDataSource3,
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
              ref={(r: any) => (refs['Form_410609'] = r)}
              {...injectData}
            >
              <Input
                name={'考试标题'}
                size={'default'}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipContent={''}
                tipSize={'default'}
                tipWidth={'240px'}
                tipHeight={'auto'}
                prefixIconPosition={'before'}
                postfix={''}
                postfixIconPosition={'before'}
                required={false}
                placeholder={'请输入'}
                allowClear={true}
                dataMask={''}
                fieldName={'name'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.LCDP_EXAMS?.name}
                formItemIndex={0}
                icon={{
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                prefixIcon={{
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                selfSpan={6}
                $$componentItem={{
                  id: 'Input_name_453279',
                  uid: 'Input_name_453279',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['Input_name_453279'] = r)}
                {...injectData}
              />
              <InputNumber
                name={'考试类型'}
                size={'default'}
                labelCol={8}
                wrapperCol={16}
                step={1}
                titleTip={'notext'}
                tipSize={'default'}
                tipWidth={'240px'}
                tipHeight={'auto'}
                required={false}
                min={0}
                formatting={''}
                fieldName={'type'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.LCDP_EXAMS?.type}
                formItemIndex={1}
                selfSpan={6}
                $$componentItem={{
                  id: 'InputNumber_type_768975',
                  uid: 'InputNumber_type_768975',
                  type: 'InputNumber',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['InputNumber_type_768975'] = r)}
                {...injectData}
              />
              <InputNumber
                name={'总分数'}
                size={'default'}
                labelCol={8}
                wrapperCol={16}
                step={1}
                titleTip={'notext'}
                tipSize={'default'}
                tipWidth={'240px'}
                tipHeight={'auto'}
                required={false}
                min={0}
                formatting={''}
                fieldName={'score'}
                hidden={false}
                showMore={false}
                defaultValue={null}
                attr={{}}
                value={data?.LCDP_EXAMS?.score}
                formItemIndex={2}
                selfSpan={6}
                $$componentItem={{
                  id: 'InputNumber_score_728195',
                  uid: 'InputNumber_score_728195',
                  type: 'InputNumber',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => (refs['InputNumber_score_728195'] = r)}
                {...injectData}
              />
              <View
                name={'普通容器'}
                backgroundType={{ type: 'cleanColor' }}
                $$componentItem={{
                  id: 'View_174708',
                  uid: 'View_174708',
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
                    formItemIndex: 3,
                    style: undefined,
                    selfSpan: undefined,
                  },
                }}
                style={{
                  textAlign: 'center',
                  display: 'block',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '100%',
                }}
                ref={(r: any) => (refs['View_174708'] = r)}
                {...injectData}
              >
                <Button
                  classification={'default'}
                  autoProcessFlow={false}
                  flowProcessResult={'common'}
                  iconPosition={'left'}
                  ghost={false}
                  block={false}
                  size={'default'}
                  type={'default'}
                  btnIcon={'none'}
                  hasIcon={true}
                  shape={'default'}
                  loading={false}
                  formItemIndex={5}
                  labelCol={8}
                  wrapperCol={16}
                  icon={{
                    type: 'arrow-left',
                    theme: 'outlined',
                    fontAddress: '',
                    isIconFont: false,
                    iconFileInfo: {},
                  }}
                  $$componentItem={{
                    id: 'Button_379776',
                    uid: 'Button_379776',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 400,
                    height: '32px',
                    color: '#1C242E',
                  }}
                  onClick={(e: any) => {
                    const eventDatahistoryGoBack2: any = [
                      {
                        type: 'historyGoBack',
                        dataId: 169968409805045920,
                        options: {
                          compId: 'historyGoBack',
                          compName: 'system',
                          id: '15138435',
                          pageJsonId: '243035',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatahistoryGoBack2.params =
                      [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                    CMDGenerator(
                      eventDatahistoryGoBack2,
                      { e },
                      'historyGoBack',
                      {
                        id: 'historyGoBack',
                        name: 'historyGoBack',
                        type: 'historyGoBack',
                        platform: 'pc',
                      },
                    );
                  }}
                  ref={(r: any) => (refs['Button_379776'] = r)}
                  {...injectData}
                />
              </View>
            </Form>
          </View>
          <View
            name={'普通容器'}
            $$componentItem={{
              id: 'View_765303',
              uid: 'View_765303',
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
            }}
            ref={(r: any) => (refs['View_765303'] = r)}
            {...injectData}
          >
            <Table
              name={'表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={data?.LCDP_QUESTRIONS?.pageSize}
              current={data?.LCDP_QUESTRIONS?.pageNum}
              headBtnNum={3}
              tableTitle={'题目列表'}
              columns={[
                {
                  title: '主键',
                  key: 'id',
                  dataIndex: 'id',
                  titleLineNum: 1,
                  lineNum: 1,
                  editoption: {
                    edittype: 'InputNumber',
                    selectoption: {
                      attr: {
                        attrName: '主键',
                        attrId: '1040455654171226112',
                        attrNbr: null,
                      },
                    },
                  },
                  editContent: {
                    edittype: 'title',
                    title: {
                      code: 'function main(text, row, index) { return text;}',
                    },
                  },
                  id: '349457',
                  hiddenRule: true,
                  align: 'center',
                  customRendering: undefined,
                },
                {
                  title: '考试实例',
                  key: 'exam_id',
                  dataIndex: 'exam_id',
                  titleLineNum: 1,
                  lineNum: 1,
                  editoption: {
                    edittype: 'InputNumber',
                    selectoption: {
                      attr: {
                        attrName: '考试实例',
                        attrId: '1040457462025302017',
                        attrNbr: null,
                      },
                    },
                  },
                  editContent: {
                    edittype: 'title',
                    title: {
                      code: 'function main(text, row, index) { return text;}',
                    },
                  },
                  id: '146178',
                  hiddenRule: true,
                  align: 'center',
                  customRendering: undefined,
                },
                {
                  title: '题目类型',
                  key: 'type',
                  dataIndex: 'type',
                  titleLineNum: 1,
                  lineNum: 1,
                  editoption: {
                    edittype: 'InputNumber',
                    selectoption: {
                      attr: {
                        attrName: '题目类型',
                        attrId: '1040457462025302018',
                        attrNbr: null,
                      },
                    },
                  },
                  editContent: {
                    edittype: 'title',
                    title: {
                      code: 'function main(text, row, index) { return text;}',
                    },
                  },
                  id: '360658',
                  align: 'center',
                  staticDataSource: attrDataMap['question_type'],
                  customRendering: undefined,
                },
                {
                  title: '题目内容',
                  key: 'question',
                  dataIndex: 'question',
                  titleLineNum: 1,
                  lineNum: 1,
                  editoption: {
                    edittype: 'Input',
                    selectoption: {
                      attr: {
                        attrName: '题目内容',
                        attrId: '1040457462025302019',
                        attrNbr: null,
                      },
                    },
                  },
                  editContent: {
                    edittype: 'title',
                    title: {
                      code: 'function main(text, row, index) { return text;}',
                    },
                  },
                  id: '755989',
                  align: 'center',
                  customRendering: undefined,
                },
                {
                  title: '题目分值',
                  key: 'marks',
                  dataIndex: 'marks',
                  titleLineNum: 1,
                  lineNum: 1,
                  editoption: {
                    edittype: 'InputNumber',
                    selectoption: {
                      attr: {
                        attrName: '题目分值',
                        attrId: '1040457462025302020',
                        attrNbr: null,
                      },
                    },
                  },
                  editContent: {
                    edittype: 'title',
                    title: {
                      code: 'function main(text, row, index) { return text;}',
                    },
                  },
                  id: '2577708',
                  align: 'center',
                  customRendering: undefined,
                },
                {
                  title: '题目序号',
                  key: 'no',
                  dataIndex: 'no',
                  titleLineNum: 1,
                  lineNum: 1,
                  editoption: {
                    edittype: 'InputNumber',
                    selectoption: {
                      attr: {
                        attrName: '题目序号',
                        attrId: '1040457462025302021',
                        attrNbr: null,
                      },
                    },
                  },
                  editContent: {
                    edittype: 'title',
                    title: {
                      code: 'function main(text, row, index) { return text;}',
                    },
                  },
                  id: '897484',
                  hiddenRule: true,
                  align: 'center',
                  customRendering: undefined,
                },
                {
                  title: '状态',
                  key: 'state',
                  dataIndex: 'state',
                  titleLineNum: 1,
                  lineNum: 1,
                  editoption: {
                    edittype: 'InputNumber',
                    selectoption: {
                      attr: {
                        attrName: '状态',
                        attrId: '1040457462025302022',
                        attrNbr: null,
                      },
                    },
                  },
                  editContent: {
                    edittype: 'title',
                    title: {
                      code: 'function main(text, row, index) { return text;}',
                    },
                  },
                  id: '885213',
                  hiddenRule: true,
                  align: 'center',
                  customRendering: undefined,
                },
                {
                  title: '正确选项',
                  key: 'option_ids',
                  dataIndex: 'option_ids',
                  titleLineNum: 1,
                  lineNum: 1,
                  editoption: {
                    edittype: 'Input',
                    selectoption: {
                      attr: {
                        attrName: '正确选项',
                        attrId: '1040459167706132487',
                        attrNbr: null,
                      },
                    },
                  },
                  editContent: {
                    edittype: 'title',
                    title: {
                      code: 'function main(text, row, index) { return text;}',
                    },
                  },
                  id: '247037',
                  hiddenRule: true,
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
              rowSelection={undefined}
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
              dataSource={data?.LCDP_QUESTRIONS?.list}
              total={data?.LCDP_QUESTRIONS?.total}
              rowKey={'id'}
              headExtends={[
                {
                  id: '342367',
                  title: '单选题导入',
                  iconPos: 'left',
                  icon: '',
                  value: 'onHeadClickBtn1',
                },
                {
                  id: '357081',
                  title: '多选题导入',
                  iconPos: 'left',
                  value: 'onHeadClickBtn_357081',
                },
                {
                  id: '749259',
                  title: '判断题导入',
                  iconPos: 'left',
                  value: 'onHeadClickBtn_749259',
                },
              ]}
              extend={[]}
              dataSourceFromDataSourceConfig={'data.LCDP_QUESTRIONS.list'}
              style={{}}
              $$componentItem={{
                id: 'Table_560629',
                uid: 'Table_560629',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              onPageChange={(page: any, pageSize: any) => {
                const eventDatareloadDataSource8: any = [
                  {
                    type: 'reloadDataSource',
                    dataId: 169968431683898050,
                    options: {
                      pageJsonId: '243035',
                      compName: 'Page',
                      id: '561131',
                      dataSourceId: 169968427362101300,
                      dataSourceName: 'LCDP_QUESTRIONS',
                      dataSourceRelType: 'object',
                      dataSourceReloadFilter: [
                        {
                          attrId: '1125116',
                          code: 'marks',
                          name: '题目分值',
                          type: 'double',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          sourceAttrId: '1040457462025302020',
                          sourceId: '1040455654263500801',
                          key: 'marks',
                          value: {
                            code: 'marks',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '591109',
                          code: 'no',
                          name: '题目序号',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          sourceAttrId: '1040457462025302021',
                          sourceId: '1040455654263500801',
                          key: 'no',
                          value: {
                            code: 'no',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '570808',
                          code: 'question',
                          name: '题目内容',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          sourceAttrId: '1040457462025302019',
                          sourceId: '1040455654263500801',
                          key: 'question',
                          value: {
                            code: 'question',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '414935',
                          code: 'state',
                          name: '状态',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          sourceAttrId: '1040457462025302022',
                          sourceId: '1040455654263500801',
                          key: 'state',
                          value: {
                            code: 'state',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '9919096',
                          code: 'exam_id',
                          name: '考试实例',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: {
                            type: 'static',
                            value: '$urlParam.bizId$',
                          },
                          sourceAttrId: '1040457462025302017',
                          sourceId: '1040455654263500801',
                          key: 'exam_id',
                          value: {
                            code: 'exam_id',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '9192407',
                          code: 'option_ids',
                          name: '正确选项',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          sourceAttrId: '1040459167706132487',
                          sourceId: '1040455654263500801',
                          key: 'option_ids',
                          value: {
                            code: 'option_ids',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '40266',
                          code: 'id',
                          name: '主键',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          sourceAttrId: '1040455654171226112',
                          sourceId: '1040455654263500801',
                          key: 'id',
                          value: {
                            code: 'id',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '88302633',
                          code: 'type',
                          name: '题目类型',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          sourceAttrId: '1040457462025302018',
                          sourceId: '1040455654263500801',
                          key: 'type',
                          value: {
                            code: 'type',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '2211882',
                          code: 'pageNum',
                          name: '页数',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          key: 'pageNum',
                          value: { code: '', type: ['context', '$page$'] },
                        },
                        {
                          attrId: '397212',
                          code: 'pageSize',
                          name: '每页数量',
                          type: 'long',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          key: 'pageSize',
                          value: {
                            code: 'pageSize',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                        {
                          attrId: '918855',
                          code: 'childNode',
                          name: '从表子节点',
                          type: 'string',
                          sort: { isSort: true },
                          initialData: { type: 'static', value: '' },
                          key: 'childNode',
                          value: {
                            code: 'childNode',
                            type: [
                              'datasource',
                              'LCDP_QUESTRIONS',
                              'filterData',
                            ],
                          },
                        },
                      ],
                      _dataSourceReloadFilter: {
                        code: '',
                        type: ['customize'],
                      },
                      sync: true,
                    },
                    line_number: 1,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatareloadDataSource8.params =
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
                  eventDatareloadDataSource8,
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
              onHeadClickBtn1={(e: any) => {
                const eventDataimportCustomBusiObjectData3: any = [
                  {
                    type: 'importCustomBusiObjectData',
                    dataId: 169968431685532480,
                    options: {
                      compId: 'importCustomBusiObjectData',
                      compName: 'system',
                      id: '6549216',
                      pageJsonId: '243035',
                      busiObjectId: '1040483863755501569',
                      name: '考试题目',
                      _sourceName: '考试题目',
                      showOnly: 'T',
                      busiObjectFields: [
                        {
                          code: 'question',
                          checkCode: null,
                          checkMessage: null,
                          sort: 0,
                        },
                        {
                          code: 'a_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 1,
                        },
                        {
                          code: 'b_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 2,
                        },
                        {
                          code: 'c_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 3,
                        },
                        {
                          code: 'd_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 4,
                        },
                        {
                          code: 'e_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 5,
                        },
                        {
                          code: 'f_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 6,
                        },
                        {
                          code: 'option_ids',
                          checkCode: null,
                          checkMessage: null,
                          sort: 7,
                        },
                        {
                          code: 'marks',
                          checkCode: '^(\\-|\\+)?\\d+(\\.\\d+)?$',
                          checkMessage: null,
                          sort: 8,
                        },
                      ],
                      customGroup: {},
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169968632919942460,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '994273',
                          pageJsonId: '243035',
                          sync: false,
                          method: 'post',
                          url: '/app/orchestration/run',
                          serviceVersionId: '1040482629417971712',
                          serviceCode: 'importMultipleQuestrion',
                          versionCode: '1.0',
                          _serviceType: 'orchestration',
                          _source: 'std',
                          _sourceName: '导入考试题目-单选择',
                          _serviceId: '1040482629417971712',
                          _serviceTitle:
                            '导入考试题目-单选择: importMultipleQuestrion',
                          valueType: 'object',
                          params: 'object',
                          apiRequestSetParams: [
                            {
                              serviceAttrId: '8656506058',
                              key: '0',
                              code: 'root',
                              name: '根节点',
                              attrType: 'object',
                              mustFlag: 'F',
                              exampleValue: '',
                              defaultValue: '',
                              children: [
                                {
                                  serviceAttrId: '87164213737313',
                                  key: '0-0',
                                  parentKey: '0',
                                  code: 'exam_id',
                                  name: '考试ID',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  _id: 'root.exam_id',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  id: 'root.exam_id',
                                  dataKey: '994273_root.exam_id',
                                  value: {
                                    type: ['context', '$urlParam.bizId$'],
                                    code: '',
                                  },
                                },
                                {
                                  serviceAttrId: '84739760645',
                                  busiObjectId: '1040483863755501569',
                                  key: '0-1',
                                  parentKey: '0',
                                  code: 'LCDP_TEMP_MULTIPLEs',
                                  name: '单选题目模板',
                                  attrType: 'objectArray',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  children: [
                                    {
                                      serviceAttrId: '8526680308293',
                                      busiObjectAttrId: '1040483863663226880',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-0',
                                      parentKey: '0-1',
                                      code: 'id',
                                      name: '主键',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.id',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.id',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.id',
                                    },
                                    {
                                      serviceAttrId: '213423851861',
                                      busiObjectAttrId: '1040483863663226881',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-1',
                                      parentKey: '0-1',
                                      code: 'question',
                                      name: '题目内容',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.question',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.question',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.question',
                                    },
                                    {
                                      serviceAttrId: '426366984821',
                                      busiObjectAttrId: '1040485292566130690',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-2',
                                      parentKey: '0-1',
                                      code: 'a_option',
                                      name: 'A选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.a_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.a_option',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.a_option',
                                    },
                                    {
                                      serviceAttrId: '3293520018017',
                                      busiObjectAttrId: '1040485292566130691',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-3',
                                      parentKey: '0-1',
                                      code: 'b_option',
                                      name: 'B选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.b_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.b_option',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.b_option',
                                    },
                                    {
                                      serviceAttrId: '179055568275',
                                      busiObjectAttrId: '1040485292566130692',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-4',
                                      parentKey: '0-1',
                                      code: 'c_option',
                                      name: 'C选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.c_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.c_option',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.c_option',
                                    },
                                    {
                                      serviceAttrId: '317293502994',
                                      busiObjectAttrId: '1040485292566130693',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-5',
                                      parentKey: '0-1',
                                      code: 'd_option',
                                      name: 'D选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.d_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.d_option',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.d_option',
                                    },
                                    {
                                      serviceAttrId: '0758158627853',
                                      busiObjectAttrId: '1040485292566130694',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-6',
                                      parentKey: '0-1',
                                      code: 'e_option',
                                      name: 'E选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.e_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.e_option',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.e_option',
                                    },
                                    {
                                      serviceAttrId: '624352131342',
                                      busiObjectAttrId: '1040485292566130695',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-7',
                                      parentKey: '0-1',
                                      code: 'f_option',
                                      name: 'F选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.f_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.f_option',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.f_option',
                                    },
                                    {
                                      serviceAttrId: '092503922453',
                                      busiObjectAttrId: '1040485292566130696',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-8',
                                      parentKey: '0-1',
                                      code: 'option_ids',
                                      name: '正确选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.option_ids',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.option_ids',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.option_ids',
                                    },
                                    {
                                      serviceAttrId: '500012645309',
                                      busiObjectAttrId: '1040485292566130697',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-9',
                                      parentKey: '0-1',
                                      code: 'marks',
                                      name: '题目分值',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.marks',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.marks',
                                      dataKey:
                                        '994273_root.LCDP_TEMP_MULTIPLEs.marks',
                                    },
                                  ],
                                  _id: 'root.LCDP_TEMP_MULTIPLEs',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  id: 'root.LCDP_TEMP_MULTIPLEs',
                                  dataKey: '994273_root.LCDP_TEMP_MULTIPLEs',
                                  value: {
                                    type: ['context', '$resultObject_6549216$'],
                                    code: '',
                                  },
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              id: 'root',
                              dataKey: '994273_root',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 169968636031910430,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'system',
                              id: '150573',
                              pageJsonId: '243035',
                              dataSourceId: 169968427362101300,
                              dataSourceName: 'LCDP_QUESTRIONS',
                              dataSourceRelType: 'object',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '1125116',
                                  code: 'marks',
                                  name: '题目分值',
                                  type: 'double',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302020',
                                  sourceId: '1040455654263500801',
                                  key: 'marks',
                                },
                                {
                                  attrId: '591109',
                                  code: 'no',
                                  name: '题目序号',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302021',
                                  sourceId: '1040455654263500801',
                                  key: 'no',
                                },
                                {
                                  attrId: '570808',
                                  code: 'question',
                                  name: '题目内容',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302019',
                                  sourceId: '1040455654263500801',
                                  key: 'question',
                                },
                                {
                                  attrId: '414935',
                                  code: 'state',
                                  name: '状态',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302022',
                                  sourceId: '1040455654263500801',
                                  key: 'state',
                                },
                                {
                                  attrId: '9919096',
                                  code: 'exam_id',
                                  name: '考试实例',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: '$urlParam.bizId$',
                                  },
                                  sourceAttrId: '1040457462025302017',
                                  sourceId: '1040455654263500801',
                                  key: 'exam_id',
                                },
                                {
                                  attrId: '9192407',
                                  code: 'option_ids',
                                  name: '正确选项',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040459167706132487',
                                  sourceId: '1040455654263500801',
                                  key: 'option_ids',
                                },
                                {
                                  attrId: '40266',
                                  code: 'id',
                                  name: '主键',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040455654171226112',
                                  sourceId: '1040455654263500801',
                                  key: 'id',
                                },
                                {
                                  attrId: '88302633',
                                  code: 'type',
                                  name: '题目类型',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302018',
                                  sourceId: '1040455654263500801',
                                  key: 'type',
                                },
                                {
                                  attrId: '2211882',
                                  code: 'pageNum',
                                  name: '页数',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'pageNum',
                                },
                                {
                                  attrId: '397212',
                                  code: 'pageSize',
                                  name: '每页数量',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'pageSize',
                                },
                                {
                                  attrId: '918855',
                                  code: 'childNode',
                                  name: '从表子节点',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'childNode',
                                  value: '',
                                },
                                {
                                  type: 'string',
                                  code: 'orderByAsc',
                                  name: '正序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                                {
                                  type: 'string',
                                  code: 'orderByDesc',
                                  name: '倒序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                              ],
                              sync: true,
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataimportCustomBusiObjectData3.params =
                  [
                    {
                      title: '单选题导入点击回调',
                      value: '$e$',
                      name: 'e',
                      attrType: 'object',
                    },
                  ] || [];
                CMDGenerator(
                  eventDataimportCustomBusiObjectData3,
                  { e },
                  'importCustomBusiObjectData',
                  {
                    id: 'importCustomBusiObjectData',
                    name: 'importCustomBusiObjectData',
                    type: 'importCustomBusiObjectData',
                    platform: 'pc',
                  },
                );
              }}
              onHeadClickBtn_357081={(e: any) => {
                const eventDataimportCustomBusiObjectData4: any = [
                  {
                    type: 'importCustomBusiObjectData',
                    dataId: 169976280244809250,
                    options: {
                      compId: 'importCustomBusiObjectData',
                      compName: 'system',
                      id: '069024',
                      pageJsonId: '243035',
                      busiObjectId: '1040483863755501569',
                      name: '考试题目',
                      _sourceName: '考试题目',
                      showOnly: 'T',
                      busiObjectFields: [
                        {
                          code: 'question',
                          checkCode: null,
                          checkMessage: null,
                          sort: 0,
                        },
                        {
                          code: 'a_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 1,
                        },
                        {
                          code: 'b_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 2,
                        },
                        {
                          code: 'c_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 3,
                        },
                        {
                          code: 'd_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 4,
                        },
                        {
                          code: 'e_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 5,
                        },
                        {
                          code: 'f_option',
                          checkCode: null,
                          checkMessage: null,
                          sort: 6,
                        },
                        {
                          code: 'option_ids',
                          checkCode: null,
                          checkMessage: null,
                          sort: 7,
                        },
                        {
                          code: 'marks',
                          checkCode: '^(\\-|\\+)?\\d+(\\.\\d+)?$',
                          checkMessage: null,
                          sort: 8,
                        },
                      ],
                      customGroup: {},
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169976280244819260,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '324603',
                          pageJsonId: '243035',
                          sync: false,
                          method: 'post',
                          url: '/app/orchestration/run',
                          serviceVersionId: '1040556314246000640',
                          serviceCode: 'importMultiplesQuestrion',
                          versionCode: '1.0',
                          _serviceType: 'orchestration',
                          _source: 'std',
                          _sourceName: '导入考试题目-多选择',
                          _serviceId: '1040556314246000640',
                          _serviceTitle:
                            '导入考试题目-多选择: importMultiplesQuestrion',
                          valueType: 'object',
                          params: 'object',
                          apiRequestSetParams: [
                            {
                              serviceAttrId: '8656506058',
                              key: '0',
                              code: 'root',
                              name: '根节点',
                              attrType: 'object',
                              mustFlag: 'F',
                              exampleValue: '',
                              defaultValue: '',
                              children: [
                                {
                                  serviceAttrId: '87164213737313',
                                  key: '0-0',
                                  parentKey: '0',
                                  code: 'exam_id',
                                  name: '考试ID',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  _id: 'root.exam_id',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  id: 'root.exam_id',
                                  dataKey: '324603_root.exam_id',
                                  value: {
                                    type: ['context', '$urlParam.bizId$'],
                                    code: '',
                                  },
                                },
                                {
                                  serviceAttrId: '84739760645',
                                  busiObjectId: '1040483863755501569',
                                  key: '0-1',
                                  parentKey: '0',
                                  code: 'LCDP_TEMP_MULTIPLEs',
                                  name: '单选题目模板',
                                  attrType: 'objectArray',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  children: [
                                    {
                                      serviceAttrId: '8526680308293',
                                      busiObjectAttrId: '1040483863663226880',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-0',
                                      parentKey: '0-1',
                                      code: 'id',
                                      name: '主键',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.id',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.id',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.id',
                                    },
                                    {
                                      serviceAttrId: '213423851861',
                                      busiObjectAttrId: '1040483863663226881',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-1',
                                      parentKey: '0-1',
                                      code: 'question',
                                      name: '题目内容',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.question',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.question',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.question',
                                    },
                                    {
                                      serviceAttrId: '426366984821',
                                      busiObjectAttrId: '1040485292566130690',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-2',
                                      parentKey: '0-1',
                                      code: 'a_option',
                                      name: 'A选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.a_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.a_option',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.a_option',
                                    },
                                    {
                                      serviceAttrId: '3293520018017',
                                      busiObjectAttrId: '1040485292566130691',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-3',
                                      parentKey: '0-1',
                                      code: 'b_option',
                                      name: 'B选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.b_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.b_option',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.b_option',
                                    },
                                    {
                                      serviceAttrId: '179055568275',
                                      busiObjectAttrId: '1040485292566130692',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-4',
                                      parentKey: '0-1',
                                      code: 'c_option',
                                      name: 'C选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.c_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.c_option',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.c_option',
                                    },
                                    {
                                      serviceAttrId: '317293502994',
                                      busiObjectAttrId: '1040485292566130693',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-5',
                                      parentKey: '0-1',
                                      code: 'd_option',
                                      name: 'D选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.d_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.d_option',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.d_option',
                                    },
                                    {
                                      serviceAttrId: '0758158627853',
                                      busiObjectAttrId: '1040485292566130694',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-6',
                                      parentKey: '0-1',
                                      code: 'e_option',
                                      name: 'E选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.e_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.e_option',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.e_option',
                                    },
                                    {
                                      serviceAttrId: '624352131342',
                                      busiObjectAttrId: '1040485292566130695',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-7',
                                      parentKey: '0-1',
                                      code: 'f_option',
                                      name: 'F选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.f_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.f_option',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.f_option',
                                    },
                                    {
                                      serviceAttrId: '092503922453',
                                      busiObjectAttrId: '1040485292566130696',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-8',
                                      parentKey: '0-1',
                                      code: 'option_ids',
                                      name: '正确选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.option_ids',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.option_ids',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.option_ids',
                                    },
                                    {
                                      serviceAttrId: '500012645309',
                                      busiObjectAttrId: '1040485292566130697',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-9',
                                      parentKey: '0-1',
                                      code: 'marks',
                                      name: '题目分值',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.marks',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.marks',
                                      dataKey:
                                        '324603_root.LCDP_TEMP_MULTIPLEs.marks',
                                    },
                                  ],
                                  _id: 'root.LCDP_TEMP_MULTIPLEs',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  id: 'root.LCDP_TEMP_MULTIPLEs',
                                  dataKey: '324603_root.LCDP_TEMP_MULTIPLEs',
                                  value: {
                                    type: ['context', '$resultObject_069024$'],
                                    code: '',
                                  },
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              id: 'root',
                              dataKey: '324603_root',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 169976280244858560,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'system',
                              id: '673278',
                              pageJsonId: '243035',
                              dataSourceId: 169968427362101300,
                              dataSourceName: 'LCDP_QUESTRIONS',
                              dataSourceRelType: 'object',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '1125116',
                                  code: 'marks',
                                  name: '题目分值',
                                  type: 'double',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302020',
                                  sourceId: '1040455654263500801',
                                  key: 'marks',
                                },
                                {
                                  attrId: '591109',
                                  code: 'no',
                                  name: '题目序号',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302021',
                                  sourceId: '1040455654263500801',
                                  key: 'no',
                                },
                                {
                                  attrId: '570808',
                                  code: 'question',
                                  name: '题目内容',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302019',
                                  sourceId: '1040455654263500801',
                                  key: 'question',
                                },
                                {
                                  attrId: '414935',
                                  code: 'state',
                                  name: '状态',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302022',
                                  sourceId: '1040455654263500801',
                                  key: 'state',
                                },
                                {
                                  attrId: '9919096',
                                  code: 'exam_id',
                                  name: '考试实例',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: '$urlParam.bizId$',
                                  },
                                  sourceAttrId: '1040457462025302017',
                                  sourceId: '1040455654263500801',
                                  key: 'exam_id',
                                },
                                {
                                  attrId: '9192407',
                                  code: 'option_ids',
                                  name: '正确选项',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040459167706132487',
                                  sourceId: '1040455654263500801',
                                  key: 'option_ids',
                                },
                                {
                                  attrId: '40266',
                                  code: 'id',
                                  name: '主键',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040455654171226112',
                                  sourceId: '1040455654263500801',
                                  key: 'id',
                                },
                                {
                                  attrId: '88302633',
                                  code: 'type',
                                  name: '题目类型',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302018',
                                  sourceId: '1040455654263500801',
                                  key: 'type',
                                },
                                {
                                  attrId: '2211882',
                                  code: 'pageNum',
                                  name: '页数',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'pageNum',
                                },
                                {
                                  attrId: '397212',
                                  code: 'pageSize',
                                  name: '每页数量',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'pageSize',
                                },
                                {
                                  attrId: '918855',
                                  code: 'childNode',
                                  name: '从表子节点',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'childNode',
                                  value: '',
                                },
                                {
                                  type: 'string',
                                  code: 'orderByAsc',
                                  name: '正序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                                {
                                  type: 'string',
                                  code: 'orderByDesc',
                                  name: '倒序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                              ],
                              sync: true,
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataimportCustomBusiObjectData4.params =
                  [
                    {
                      title: '多选题导入点击回调',
                      value: '$e$',
                      name: 'e',
                      attrType: 'object',
                    },
                  ] || [];
                CMDGenerator(
                  eventDataimportCustomBusiObjectData4,
                  { e },
                  'importCustomBusiObjectData',
                  {
                    id: 'importCustomBusiObjectData',
                    name: 'importCustomBusiObjectData',
                    type: 'importCustomBusiObjectData',
                    platform: 'pc',
                  },
                );
              }}
              onHeadClickBtn_749259={(e: any) => {
                const eventDataimportCustomBusiObjectData5: any = [
                  {
                    type: 'importCustomBusiObjectData',
                    dataId: 169976534442951230,
                    options: {
                      compId: 'importCustomBusiObjectData',
                      compName: 'system',
                      id: '199783',
                      pageJsonId: '243035',
                      busiObjectId: '1040483863755501569',
                      name: '考试题目',
                      _sourceName: '考试题目',
                      showOnly: 'T',
                      busiObjectFields: [
                        {
                          code: 'question',
                          checkCode: null,
                          checkMessage: null,
                          sort: 0,
                        },
                        {
                          code: 'option_ids',
                          checkCode: null,
                          checkMessage: null,
                          sort: 1,
                        },
                        {
                          code: 'marks',
                          checkCode: '^(\\-|\\+)?\\d+(\\.\\d+)?$',
                          checkMessage: null,
                          sort: 2,
                        },
                      ],
                      customGroup: {},
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'apiRequest',
                        dataId: 169976534442959040,
                        options: {
                          compId: 'apiRequest',
                          compName: 'system',
                          id: '212298',
                          pageJsonId: '243035',
                          sync: false,
                          method: 'post',
                          url: '/app/orchestration/run',
                          serviceVersionId: '1040852623326720000',
                          serviceCode: 'importJudgeQuestrion',
                          versionCode: '1.0',
                          _serviceType: 'orchestration',
                          _source: 'std',
                          _sourceName: '导入考试题目-判断',
                          _serviceId: '1040852623326720000',
                          _serviceTitle:
                            '导入考试题目-判断: importJudgeQuestrion',
                          valueType: 'object',
                          params: 'object',
                          apiRequestSetParams: [
                            {
                              serviceAttrId: '8656506058',
                              key: '0',
                              code: 'root',
                              name: '根节点',
                              attrType: 'object',
                              mustFlag: 'F',
                              exampleValue: '',
                              defaultValue: '',
                              children: [
                                {
                                  serviceAttrId: '87164213737313',
                                  key: '0-0',
                                  parentKey: '0',
                                  code: 'exam_id',
                                  name: '考试ID',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  _id: 'root.exam_id',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  id: 'root.exam_id',
                                  dataKey: '212298_root.exam_id',
                                  value: {
                                    type: ['context', '$urlParam.bizId$'],
                                    code: '',
                                  },
                                },
                                {
                                  serviceAttrId: '84739760645',
                                  busiObjectId: '1040483863755501569',
                                  key: '0-1',
                                  parentKey: '0',
                                  code: 'LCDP_TEMP_MULTIPLEs',
                                  name: '单选题目模板',
                                  attrType: 'objectArray',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  children: [
                                    {
                                      serviceAttrId: '8526680308293',
                                      busiObjectAttrId: '1040483863663226880',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-0',
                                      parentKey: '0-1',
                                      code: 'id',
                                      name: '主键',
                                      attrType: 'field',
                                      type: 'long',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.id',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.id',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.id',
                                    },
                                    {
                                      serviceAttrId: '213423851861',
                                      busiObjectAttrId: '1040483863663226881',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-1',
                                      parentKey: '0-1',
                                      code: 'question',
                                      name: '题目内容',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.question',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.question',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.question',
                                    },
                                    {
                                      serviceAttrId: '426366984821',
                                      busiObjectAttrId: '1040485292566130690',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-2',
                                      parentKey: '0-1',
                                      code: 'a_option',
                                      name: 'A选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.a_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.a_option',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.a_option',
                                    },
                                    {
                                      serviceAttrId: '3293520018017',
                                      busiObjectAttrId: '1040485292566130691',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-3',
                                      parentKey: '0-1',
                                      code: 'b_option',
                                      name: 'B选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.b_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.b_option',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.b_option',
                                    },
                                    {
                                      serviceAttrId: '179055568275',
                                      busiObjectAttrId: '1040485292566130692',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-4',
                                      parentKey: '0-1',
                                      code: 'c_option',
                                      name: 'C选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.c_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.c_option',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.c_option',
                                    },
                                    {
                                      serviceAttrId: '317293502994',
                                      busiObjectAttrId: '1040485292566130693',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-5',
                                      parentKey: '0-1',
                                      code: 'd_option',
                                      name: 'D选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.d_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.d_option',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.d_option',
                                    },
                                    {
                                      serviceAttrId: '0758158627853',
                                      busiObjectAttrId: '1040485292566130694',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-6',
                                      parentKey: '0-1',
                                      code: 'e_option',
                                      name: 'E选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.e_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.e_option',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.e_option',
                                    },
                                    {
                                      serviceAttrId: '624352131342',
                                      busiObjectAttrId: '1040485292566130695',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-7',
                                      parentKey: '0-1',
                                      code: 'f_option',
                                      name: 'F选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.f_option',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.f_option',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.f_option',
                                    },
                                    {
                                      serviceAttrId: '092503922453',
                                      busiObjectAttrId: '1040485292566130696',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-8',
                                      parentKey: '0-1',
                                      code: 'option_ids',
                                      name: '正确选项',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.option_ids',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.option_ids',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.option_ids',
                                    },
                                    {
                                      serviceAttrId: '500012645309',
                                      busiObjectAttrId: '1040485292566130697',
                                      busiObjectId: '1040483863755501569',
                                      key: '0-1-9',
                                      parentKey: '0-1',
                                      code: 'marks',
                                      name: '题目分值',
                                      attrType: 'field',
                                      type: 'string',
                                      mustFlag: 'F',
                                      exampleValue: '',
                                      defaultValue: '',
                                      _id: 'root.LCDP_TEMP_MULTIPLEs.marks',
                                      compType: 'Input',
                                      parents: ['root', 'LCDP_TEMP_MULTIPLEs'],
                                      parentType: 'objectArray',
                                      parentCode: 'LCDP_TEMP_MULTIPLEs',
                                      id: 'root.LCDP_TEMP_MULTIPLEs.marks',
                                      dataKey:
                                        '212298_root.LCDP_TEMP_MULTIPLEs.marks',
                                    },
                                  ],
                                  _id: 'root.LCDP_TEMP_MULTIPLEs',
                                  compType: 'Input',
                                  parents: ['root'],
                                  parentType: 'object',
                                  id: 'root.LCDP_TEMP_MULTIPLEs',
                                  dataKey: '212298_root.LCDP_TEMP_MULTIPLEs',
                                  value: {
                                    type: ['context', '$resultObject_199783$'],
                                    code: '',
                                  },
                                },
                              ],
                              _id: 'root',
                              compType: 'Input',
                              isRoot: true,
                              parents: [],
                              id: 'root',
                              dataKey: '212298_root',
                            },
                          ],
                        },
                        line_number: 2,
                        callback1: [
                          {
                            type: 'reloadDataSource',
                            dataId: 169976534442977920,
                            options: {
                              compId: 'reloadDataSource',
                              compName: 'system',
                              id: '5671444',
                              pageJsonId: '243035',
                              dataSourceId: 169968427362101300,
                              dataSourceName: 'LCDP_QUESTRIONS',
                              dataSourceRelType: 'object',
                              dataSourceReloadFilter: [
                                {
                                  attrId: '1125116',
                                  code: 'marks',
                                  name: '题目分值',
                                  type: 'double',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302020',
                                  sourceId: '1040455654263500801',
                                  key: 'marks',
                                },
                                {
                                  attrId: '591109',
                                  code: 'no',
                                  name: '题目序号',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302021',
                                  sourceId: '1040455654263500801',
                                  key: 'no',
                                },
                                {
                                  attrId: '570808',
                                  code: 'question',
                                  name: '题目内容',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302019',
                                  sourceId: '1040455654263500801',
                                  key: 'question',
                                },
                                {
                                  attrId: '414935',
                                  code: 'state',
                                  name: '状态',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302022',
                                  sourceId: '1040455654263500801',
                                  key: 'state',
                                },
                                {
                                  attrId: '9919096',
                                  code: 'exam_id',
                                  name: '考试实例',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: {
                                    type: 'static',
                                    value: '$urlParam.bizId$',
                                  },
                                  sourceAttrId: '1040457462025302017',
                                  sourceId: '1040455654263500801',
                                  key: 'exam_id',
                                },
                                {
                                  attrId: '9192407',
                                  code: 'option_ids',
                                  name: '正确选项',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040459167706132487',
                                  sourceId: '1040455654263500801',
                                  key: 'option_ids',
                                },
                                {
                                  attrId: '40266',
                                  code: 'id',
                                  name: '主键',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040455654171226112',
                                  sourceId: '1040455654263500801',
                                  key: 'id',
                                },
                                {
                                  attrId: '88302633',
                                  code: 'type',
                                  name: '题目类型',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  sourceAttrId: '1040457462025302018',
                                  sourceId: '1040455654263500801',
                                  key: 'type',
                                },
                                {
                                  attrId: '2211882',
                                  code: 'pageNum',
                                  name: '页数',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'pageNum',
                                },
                                {
                                  attrId: '397212',
                                  code: 'pageSize',
                                  name: '每页数量',
                                  type: 'long',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'pageSize',
                                },
                                {
                                  attrId: '918855',
                                  code: 'childNode',
                                  name: '从表子节点',
                                  type: 'string',
                                  sort: { isSort: true },
                                  initialData: { type: 'static', value: '' },
                                  key: 'childNode',
                                  value: '',
                                },
                                {
                                  type: 'string',
                                  code: 'orderByAsc',
                                  name: '正序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                                {
                                  type: 'string',
                                  code: 'orderByDesc',
                                  name: '倒序列',
                                  value: {
                                    hideAttr: false,
                                    code: '',
                                    type: ['customize'],
                                  },
                                },
                              ],
                              sync: true,
                            },
                            line_number: 3,
                            callback1: [],
                            callback2: [],
                          },
                        ],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataimportCustomBusiObjectData5.params =
                  [
                    {
                      title: '判断题导入点击回调',
                      value: '$e$',
                      name: 'e',
                      attrType: 'object',
                    },
                  ] || [];
                CMDGenerator(
                  eventDataimportCustomBusiObjectData5,
                  { e },
                  'importCustomBusiObjectData',
                  {
                    id: 'importCustomBusiObjectData',
                    name: 'importCustomBusiObjectData',
                    type: 'importCustomBusiObjectData',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => (refs['Table_560629'] = r)}
              {...injectData}
            />
          </View>
        </Layout>
      </View>
    </div>
  );
};

export default withPageHOC(Kaotipeizhi6839$$Page, {
  pageId: '1040511037455740928',
  hasLogin: true,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
