// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Card,
  Form,
  Input,
  Button,
  RangePicker,
  Select,
  CheckboxGroup,
  Table,
} from '@/components/factory';

import BusiComp2086 from '@/components/BusiComp2086';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '877382707076423680';
const ApproveOrderQueryFeiQi$$Page: React.FC<PageProps> = ({
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
      className="__CustomClass_541575__"
    >
      <View
        className="View_View_541575_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_541575_1',
          uid: 'View_541575_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_541575_1')}
        {...injectData}
      >
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          title={'审批单查询'}
          bordered={true}
          size={'default'}
          hasHeader={true}
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
            id: 'Card_012576',
            uid: 'Card_012576',
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
          ref={(r: any) => refs.setComponentRef(r, 'Card_012576')}
          {...injectData}
        >
          <Form
            name={'普通查询条件以及按钮'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_126816'}
            $$componentItem={{
              id: 'Form_126816',
              uid: 'Form_126816',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_126816')}
            {...injectData}
          >
            <Input
              name={'审批单号'}
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
              fieldName={'aaa'}
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
                id: 'Input_8789281',
                uid: 'Input_8789281',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_8789281')}
              {...injectData}
            />
            <Input
              name={'外部工单号'}
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
              fieldName={'vvv'}
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
                id: 'Input_421306',
                uid: 'Input_421306',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_421306')}
              {...injectData}
            />
            <View
              className="View_View_445165"
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_445165',
                uid: 'View_445165',
                type: 'View',
                ...componentItem,
              }}
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
                display: 'flex',
                flexDirection: 'row',
                padding: 'px px px px',
                width: '100%',
                textAlign: 'right',
                fontSize: '',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_445165')}
              {...injectData}
            >
              <Button
                name={'查询'}
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
                  id: 'Button_616697',
                  uid: 'Button_616697',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatagetValue275: any = [
                    {
                      type: 'getValue',
                      dataId: 166115103726899620,
                      options: {
                        compId: 'CheckboxGroup_1187331',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'CheckboxGroup',
                        id: '775777',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 166115104680924600,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '9933879',
                            pageJsonId: '541575',
                            value: ['$value_775777$'],
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDatagetValue275.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatagetValue275, { e }, 'getValue', {
                    id: 'getValue',
                    name: 'getValue',
                    type: 'getValue',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_616697')}
                {...injectData}
              />
              <Button
                name={'重置'}
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
                  id: 'Button_505213',
                  uid: 'Button_505213',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 8px 0px 8px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_505213')}
                {...injectData}
              />
              <Button
                name={'高级查询'}
                visible={true}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'right'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'default'}
                icon={{ theme: 'outlined', type: 'down', isIconFont: false }}
                iconType={'down'}
                hasIcon={true}
                $$componentItem={{
                  id: 'Button_5899747',
                  uid: 'Button_5899747',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatasetVisible62: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079301235499620,
                      options: {
                        compId: 'View_158841',
                        compLib: 'custom',
                        pageJsonId: '541575',
                        compName: 'View',
                        id: '952157',
                        visible: 'true',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetVisible62.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible62, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetVisible63: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079286454884380,
                      options: {
                        compId: 'Button_5899747',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'Button',
                        id: '1268996',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetVisible63.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible63, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetVisible64: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079287064451780,
                      options: {
                        compId: 'Button_582318',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'Button',
                        id: '749752',
                        visible: 'true',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetVisible64.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible64, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_5899747')}
                {...injectData}
              />
              <Button
                name={'高级查询'}
                shape={null}
                visible={false}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'right'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                type={'default'}
                icon={{ theme: 'outlined', type: 'up', isIconFont: false }}
                iconType={'up'}
                hasIcon={true}
                $$componentItem={{
                  id: 'Button_582318',
                  uid: 'Button_582318',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatasetVisible65: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079292296954200,
                      options: {
                        compId: 'View_158841',
                        compLib: 'custom',
                        pageJsonId: '541575',
                        compName: 'View',
                        id: '053041',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatasetVisible65.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible65, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetVisible66: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079293085521380,
                      options: {
                        compId: 'Button_582318',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'Button',
                        id: '288935',
                      },
                      line_number: 2,
                    },
                  ];
                  eventDatasetVisible66.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible66, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                  const eventDatasetVisible67: any = [
                    {
                      type: 'setVisible',
                      dataId: 166079293398323970,
                      options: {
                        compId: 'Button_5899747',
                        compLib: 'comm',
                        pageJsonId: '541575',
                        compName: 'Button',
                        id: '495837',
                        visible: 'true',
                      },
                      line_number: 3,
                    },
                  ];
                  eventDatasetVisible67.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(eventDatasetVisible67, { e }, 'setVisible', {
                    id: 'setVisible',
                    name: 'setVisible',
                    type: 'setVisible',
                    platform: 'pc',
                  });
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_582318')}
                {...injectData}
              />
            </View>
          </Form>
          <View
            className="View_View_158841"
            name={'高级查询条件'}
            visible={false}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_158841',
              uid: 'View_158841',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_158841')}
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
              visible={true}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_9423813'}
              $$componentItem={{
                id: 'Form_9423813',
                uid: 'Form_9423813',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_9423813')}
              {...injectData}
            >
              <Input
                name={'工单主题'}
                size={'default'}
                selfSpan={16}
                labelCol={4}
                wrapperCol={'16'}
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
                fieldName={'bb'}
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
                  id: 'Input_85608',
                  uid: 'Input_85608',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_85608')}
                {...injectData}
              />
            </Form>
            <Form
              name={'表单'}
              colSpan={8}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              visible={true}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_071412'}
              $$componentItem={{
                id: 'Form_071412',
                uid: 'Form_071412',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_071412')}
              {...injectData}
            >
              <RangePicker
                name={'创建时间'}
                timeMode={'date'}
                format={'YYYY-MM-DD'}
                separator={'~'}
                size={'default'}
                selfSpan={16}
                labelCol={'4'}
                wrapperCol={'12'}
                disabled={false}
                visible={true}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                pickerType={'RangePicker'}
                formItemIndex={0}
                fieldName={'ccc'}
                $$componentItem={{
                  id: 'RangePicker_0811484',
                  uid: 'RangePicker_0811484',
                  type: 'RangePicker',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'RangePicker_0811484')}
                {...injectData}
              />
            </Form>
            <Form
              name={'表单'}
              colSpan={8}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              visible={true}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_433981'}
              $$componentItem={{
                id: 'Form_433981',
                uid: 'Form_433981',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_433981')}
              {...injectData}
            >
              <Select
                name={'发起人'}
                size={'default'}
                selfSpan={8}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                fieldName={'ddd'}
                formItemIndex={0}
                $$componentItem={{
                  id: 'Input_836023',
                  uid: 'Input_836023',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_836023')}
                {...injectData}
              />
              <Select
                name={'审批级别'}
                size={'default'}
                selfSpan={8}
                labelCol={8}
                wrapperCol={16}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                required={false}
                filter={'none'}
                classification={'default'}
                attr={{}}
                placeholder={'请选择'}
                fieldName={'eee'}
                formItemIndex={1}
                $$componentItem={{
                  id: 'Input_831005',
                  uid: 'Input_831005',
                  type: 'Select',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                isFormRootChild={true}
                ref={(r: any) => refs.setComponentRef(r, 'Input_831005')}
                {...injectData}
              />
            </Form>
            <BusiComp2086
              pageId={pageId}
              name={'地市/区县二级联动'}
              visible={true}
              busiCompId={'878114493837852672'}
              style={{ margin: '12px 0px 12px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'BOFramer_6134255')}
              {...injectData}
            />
            <Form
              name={'表单'}
              colSpan={8}
              labelCol={8}
              wrapperCol={16}
              colon={true}
              layout={'horizontal'}
              labelAlign={'right'}
              visible={true}
              header={'标题'}
              colSpace={0}
              rowSpace={16}
              formCode={'Form_513266'}
              $$componentItem={{
                id: 'Form_513266',
                uid: 'Form_513266',
                type: 'Form',
                ...componentItem,
              }}
              style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 0px 0px' }}
              ref={(r: any) => refs.setComponentRef(r, 'Form_513266')}
              {...injectData}
            >
              <CheckboxGroup
                name={'流程状态'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                visible={true}
                selfSpan={16}
                labelCol={'4'}
                wrapperCol={'20'}
                formItemIndex={0}
                tipIcon={{
                  theme: 'outlined',
                  type: 'question-circle',
                  isIconFont: false,
                }}
                required={false}
                fieldName={'fff'}
                disabled={false}
                dataSource={[
                  { id: '451493', label: '处理中', value: '1' },
                  { id: '452132', label: '已生效', value: '2' },
                  { id: '786379', label: '已归档', value: '3' },
                ]}
                $$componentItem={{
                  id: 'CheckboxGroup_1187331',
                  uid: 'CheckboxGroup_1187331',
                  type: 'CheckboxGroup',
                  ...componentItem,
                }}
                isFormRootChild={true}
                ref={(r: any) =>
                  refs.setComponentRef(r, 'CheckboxGroup_1187331')
                }
                {...injectData}
              />
            </Form>
          </View>
          <Table
            name={'total'}
            isFlexColumn={false}
            pageSize={10}
            current={1}
            tableTitle={'表格名称'}
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
                title: '审批单号',
                key: 'approveOrdNbr',
                dataIndex: 'approveOrdNbr',
                className: '',
                id: '766253',
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
                title: '工单主题',
                key: 'title',
                dataIndex: 'title',
                className: 'divider',
                id: '26125',
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
                title: '发起人姓名',
                key: 'createStaffName',
                dataIndex: 'createStaffName',
                className: 'divider',
                id: '062436',
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
                title: '当前环节处理人',
                key: 'handleStaffName',
                dataIndex: 'handleStaffName',
                className: 'divider',
                id: '244962',
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
                title: '当前环节',
                key: 'tacheName',
                dataIndex: 'tacheName',
                className: 'divider',
                id: '081148507',
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
                title: '最后处理时间',
                key: 'lastHandleTime',
                dataIndex: 'lastHandleTime',
                className: 'divider',
                id: '709987',
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
                key: 'createTime',
                dataIndex: 'createTime',
                className: 'divider',
                id: '678592',
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
            showSizeChanger={true}
            showQuickJumper={true}
            pageSizeOptions={'[5,10,20]'}
            rowKey={'approveOrdNbr'}
            total={data?.qryDcApproveOrdPage?.resultData?.total}
            fieldName={'data.qryDcApproveOrdPage.resultData.total'}
            dataSource={data?.qryDcApproveOrdPage?.resultData?.records}
            rowActions={[
              {
                title: '详情',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'file-search' },
                type: 'detail',
                id: '273226',
                checked: true,
              },
            ]}
            extend={[]}
            dataSourceFromDataSourceConfig={
              'data.qryDcApproveOrdPage.resultData.records'
            }
            $$componentItem={{
              id: 'Table_37209506',
              uid: 'Table_37209506',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '12px 0px 0px 0px' }}
            onRowDetail={(rowId: any, row: any, index: any) => {
              const eventDatahistory21: any = [
                {
                  type: 'history',
                  dataId: 166389623705844930,
                  options: {
                    compId: 'history',
                    compName: 'system',
                    id: '076741',
                    pageJsonId: '541575',
                    type: 'push',
                    pathname: '/auditDealWith',
                    selectedType: 'page',
                    paramsObj: {
                      scene: 'V',
                      instNbr: '$rowId$',
                      workId: '$row.workId$',
                    },
                    paramsObjKeyValueMap: {
                      scene: 'V',
                      instNbr: '$rowId$',
                      workId: '$row.workId$',
                    },
                  },
                  line_number: 1,
                },
              ];
              eventDatahistory21.params =
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
                eventDatahistory21,
                { rowId, row, index },
                'history',
                {
                  id: 'history',
                  name: 'history',
                  type: 'history',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_37209506')}
            {...injectData}
          />
        </Card>
      </View>
    </div>
  );
};

export default withPageHOC(ApproveOrderQueryFeiQi$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
