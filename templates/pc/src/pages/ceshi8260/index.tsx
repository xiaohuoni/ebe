// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  DatePicker,
  Form,
  RangePicker,
  TimePicker,
  Tree,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Ceshi8260$$Page: React.FC<PageProps> = ({
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
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_057343__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_057343_1',
          uid: 'View_057343_1',
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
        ref={(r: any) => (refs['View_057343_1'] = r)}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          layout={'vertical'}
          colon={true}
          labelAlign={'right'}
          colSpace={16}
          rowSpace={16}
          formCode={'Code_Form_369024'}
          $$componentItem={{
            id: 'Form_369024',
            uid: 'Form_369024',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => (refs['Form_369024'] = r)}
          {...injectData}
        >
          <DatePicker
            name={'日期选择'}
            timeMode={'date'}
            size={'default'}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            limitRange={'no'}
            startTime={''}
            endTime={''}
            format={'YYYY-MM-DD'}
            placeholder={'请选择日期'}
            pickerType={'DatePicker'}
            customTip={''}
            allowClear={true}
            formItemIndex={0}
            fieldName={'1221'}
            $$componentItem={{
              id: 'DatePicker_05751',
              uid: 'DatePicker_05751',
              type: 'DatePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['DatePicker_05751'] = r)}
            {...injectData}
          />
          <TimePicker
            name={'时间选择'}
            size={'default'}
            showNow={true}
            selfSpan={''}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            limitRange={'no'}
            startTime={''}
            endTime={''}
            format={'YYYY-MM-DD HH:mm:ss'}
            timeMode={'time'}
            pickerType={'TimePicker'}
            placeholder={'请选择时间'}
            customTip={''}
            allowClear={true}
            formItemIndex={1}
            fieldName={'asdsa'}
            $$componentItem={{
              id: 'TimePicker_563977',
              uid: 'TimePicker_563977',
              type: 'TimePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['TimePicker_563977'] = r)}
            {...injectData}
          />
          <RangePicker
            name={'时间段选择'}
            timeMode={'date'}
            separator={'~'}
            size={'default'}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipSize={'default'}
            tipWidth={'240px'}
            tipHeight={'auto'}
            required={false}
            format={'YYYY-MM-DD'}
            pickerType={'RangePicker'}
            allowClear={true}
            formItemIndex={2}
            fieldName={'adss'}
            $$componentItem={{
              id: 'RangePicker_616162',
              uid: 'RangePicker_616162',
              type: 'RangePicker',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => (refs['RangePicker_616162'] = r)}
            {...injectData}
          />
        </Form>
        <Tree
          name={'树形控件'}
          defaultExpandAll={true}
          showLine={true}
          selectable={true}
          isAsync={false}
          treeData={[
            {
              key: '浙江省',
              value: '浙江省',
              title: '浙江省',
              $$isParent: true,
              children: [
                {
                  key: '浙江省-杭州市',
                  value: '浙江省-杭州市',
                  title: '杭州市',
                  children: [
                    {
                      key: '浙江省-杭州市-西湖区',
                      value: '浙江省-杭州市-西湖区',
                      title: '西湖区',
                    },
                  ],
                },
              ],
            },
          ]}
          showLineIcon={false}
          $$componentItem={{
            id: 'Tree_609988',
            uid: 'Tree_609988',
            type: 'Tree',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          onSelect={(
            selectedKeys: any,
            { node }: any,
            parentKey: any,
            parentNodeData: any,
          ) => {
            const eventDataconsole: any = [
              {
                type: 'console',
                dataId: 170709690017586800,
                options: {
                  compId: 'console',
                  compName: 'system',
                  id: '926441',
                  pageJsonId: '057343',
                  value: ['$selectedKeys[0]$'],
                },
                path: [170709689594196770],
                line_number: 1,
              },
            ];
            eventDataconsole.params =
              [
                {
                  title: '节点key(单选)',
                  name: 'selectedKeys',
                  value: '$selectedKeys[0]$',
                },
                {
                  title: '节点keys(多选)',
                  name: 'selectedKeys',
                  value: '$selectedKeys$',
                },
                {
                  title: '节点数据',
                  name: '{ node }',
                  value: '$node.props.data$',
                  attrType: 'object',
                },
                { title: '父节点key', name: 'parentKey', value: '$parentKey$' },
                {
                  title: '父节点数据',
                  name: 'parentNodeData',
                  value: '$parentNodeData$',
                  attrType: 'object',
                },
              ] || [];
            CMDGenerator(
              eventDataconsole,
              { selectedKeys, node, parentKey, parentNodeData },
              'console',
              {
                id: 'console',
                name: 'console',
                type: 'console',
                platform: 'pc',
              },
            );
            const eventDataconsole2: any = [
              {
                type: 'console',
                dataId: 170709695327640300,
                options: {
                  compId: 'console',
                  compName: 'system',
                  id: '1223107',
                  pageJsonId: '057343',
                  value: ['$selectedKeys$'],
                },
                path: [170709689594196770],
                line_number: 2,
              },
            ];
            eventDataconsole2.params =
              [
                {
                  title: '节点key(单选)',
                  name: 'selectedKeys',
                  value: '$selectedKeys[0]$',
                },
                {
                  title: '节点keys(多选)',
                  name: 'selectedKeys',
                  value: '$selectedKeys$',
                },
                {
                  title: '节点数据',
                  name: '{ node }',
                  value: '$node.props.data$',
                  attrType: 'object',
                },
                { title: '父节点key', name: 'parentKey', value: '$parentKey$' },
                {
                  title: '父节点数据',
                  name: 'parentNodeData',
                  value: '$parentNodeData$',
                  attrType: 'object',
                },
              ] || [];
            CMDGenerator(
              eventDataconsole2,
              { selectedKeys, node, parentKey, parentNodeData },
              'console',
              {
                id: 'console',
                name: 'console',
                type: 'console',
                platform: 'pc',
              },
            );
            const eventDataconsole3: any = [
              {
                type: 'console',
                dataId: 170709696046394180,
                options: {
                  compId: 'console',
                  compName: 'system',
                  id: '9501477',
                  pageJsonId: '057343',
                  value: ['$node.props.data$'],
                },
                path: [170709689594196770],
                line_number: 3,
              },
            ];
            eventDataconsole3.params =
              [
                {
                  title: '节点key(单选)',
                  name: 'selectedKeys',
                  value: '$selectedKeys[0]$',
                },
                {
                  title: '节点keys(多选)',
                  name: 'selectedKeys',
                  value: '$selectedKeys$',
                },
                {
                  title: '节点数据',
                  name: '{ node }',
                  value: '$node.props.data$',
                  attrType: 'object',
                },
                { title: '父节点key', name: 'parentKey', value: '$parentKey$' },
                {
                  title: '父节点数据',
                  name: 'parentNodeData',
                  value: '$parentNodeData$',
                  attrType: 'object',
                },
              ] || [];
            CMDGenerator(
              eventDataconsole3,
              { selectedKeys, node, parentKey, parentNodeData },
              'console',
              {
                id: 'console',
                name: 'console',
                type: 'console',
                platform: 'pc',
              },
            );
          }}
          ref={(r: any) => (refs['Tree_609988'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Ceshi8260$$Page, {
  pageId: '1024261720265998336',
  hasLogin: true,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
