// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  VerticalView,
  View,
  Button,
  Table,
  Tabs,
  TabPane,
} from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '963715818821746688';
const DiyigePCyemian5870$$Page: React.FC<PageProps> = ({
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
  const refresh = (options_616527: any) => {
    const eventDatareload: any = [
      {
        type: 'reload',
        dataId: 169458343109729280,
        options: {
          compId: 'reload',
          compName: 'system',
          id: '24152',
          pageJsonId: '5829004',
        },
        line_number: 1,
      },
    ];
    eventDatareload.params =
      [
        {
          title: '事件入参',
          name: 'options_616527',
          value: '$options_616527$',
        },
      ] || [];
    CMDGenerator(eventDatareload, { options_616527 }, 'reload', {
      id: 'reload',
      name: 'reload',
      type: 'reload',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    refresh,
  }));

  useEffect(() => {
    // console 169456930348111650
    console.log('url参数：', urlParam);
    const eventDatacustomActionCode267: any = [
      {
        type: 'customActionCode',
        dataId: 169456953747091800,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '593015',
          pageJsonId: '5829004',
          code: 'function main(data,state,success,fail){console.log("\\u8FD4\\u56DE\\u53C2\\u6570:",pageBackData)};',
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatacustomActionCode267.params = [] || [];
    CMDGenerator(eventDatacustomActionCode267, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_5829004__"
    >
      <VerticalView
        name={'上下布局'}
        $$componentItem={{
          id: 'VerticalView_3218365',
          uid: 'VerticalView_3218365',
          type: 'VerticalView',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          padding: '0px 0px 0px 0px',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'VerticalView_3218365')}
        {...injectData}
      >
        <VerticalView
          name={'上下布局'}
          $$componentItem={{
            id: 'VerticalView_102927',
            uid: 'VerticalView_102927',
            type: 'VerticalView',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'VerticalView_102927')}
          {...injectData}
        >
          <View
            name={'布局容器'}
            $$componentItem={{
              id: 'View_780133',
              uid: 'View_780133',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_780133')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_184115',
                uid: 'View_184115',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'right',
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_184115')}
              {...injectData}
            >
              <Button
                name={'添加'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_308972',
                  uid: 'Button_308972',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                onClick={(e: any) => {
                  const eventDatashowCustomModal207: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 168171047769390900,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '1260806',
                        pageJsonId: '5829004',
                        modalname: '/member',
                        pageId: '888741696593555456',
                        modalPath: '/member',
                        paramsObj: {
                          selectOptionsData:
                            '$data.selectOptionData.selectOptionsData$',
                        },
                        paramsObjKeyValueMap: {
                          selectOptionsData:
                            '$data.selectOptionData.selectOptionsData$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal207.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal207,
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
                ref={(r: any) => refs.setComponentRef(r, 'Button_308972')}
                {...injectData}
              />
              <Button
                name={'删除'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                type={'primary'}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_629668',
                  uid: 'Button_629668',
                  type: 'Button',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ width: 'fit-content' }}
                ref={(r: any) => refs.setComponentRef(r, 'Button_629668')}
                {...injectData}
              />
            </View>
            <Table
              name={'表格'}
              isFlexColumn={false}
              extendNum={3}
              adjustModel={'auto'}
              pageSize={10}
              current={1}
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
                  title: '第一列',
                  dataIndex: 'column1',
                  key: 'column1',
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
                  title: '第二列',
                  dataIndex: 'column2',
                  key: 'column2',
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
                  title: '第三列',
                  dataIndex: 'column3',
                  key: 'column3',
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
                  title: '第四列',
                  dataIndex: 'column4',
                  key: 'column4',
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
                  title: '第五列',
                  dataIndex: 'column5',
                  key: 'column5',
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
              page={false}
              rowKeyType={'auto'}
              editMode={'single'}
              selectType={'checkbox'}
              bordered={'segmentation'}
              size={'middle'}
              fixedAction={false}
              rowSelection={undefined}
              showHead={false}
              showTotal={false}
              showSizeChanger={false}
              showQuickJumper={false}
              pageSizeOptions={'[5,10,20]'}
              customNum={3}
              rowKey={undefined}
              $$componentItem={{
                id: 'Table_046849',
                uid: 'Table_046849',
                type: 'Table',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              ref={(r: any) => refs.setComponentRef(r, 'Table_046849')}
              {...injectData}
            />
            <Tabs
              name={'标签页'}
              defaultActiveKey={'1'}
              type={'line'}
              animated={false}
              tabActiveKey={'1'}
              tabBarGutter={'4px'}
              tabPosition={'top'}
              size={'default'}
              $$componentItem={{
                id: 'Tabs_208715',
                uid: 'Tabs_208715',
                type: 'Tabs',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                width: '100%',
                margin: '0 0 16px 0',
                padding: '20px 20px 20px 20px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Tabs_208715')}
              {...injectData}
            >
              <TabPane
                name={'标签子面板'}
                tab={'标题1'}
                key={'1'}
                $$componentItem={{
                  id: 'TabPane_3305025',
                  uid: 'TabPane_3305025',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, 'TabPane_3305025')}
                {...injectData}
              />
              <TabPane
                name={'标签子面板'}
                tab={'标题2'}
                key={'2'}
                $$componentItem={{
                  id: 'TabPane_182843',
                  uid: 'TabPane_182843',
                  type: 'TabPane',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40 }}
                ref={(r: any) => refs.setComponentRef(r, 'TabPane_182843')}
                {...injectData}
              >
                <Button
                  name={'按钮'}
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
                    id: 'Button_70251',
                    uid: 'Button_70251',
                    type: 'Button',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{ width: 'fit-content' }}
                  onClick={(e: any) => {
                    const eventDatahistory11: any = [
                      {
                        type: 'history',
                        dataId: 169456880016412670,
                        options: {
                          compId: 'history',
                          compName: 'system',
                          id: '0602166',
                          pageJsonId: '5829004',
                          type: 'push',
                          pathname: '/ceshiyemian9746',
                          selectedType: 'page',
                          pageId: '1019059166163206144',
                          modalPath: '/ceshiyemian9746',
                        },
                        line_number: 1,
                      },
                    ];
                    eventDatahistory11.params =
                      [
                        {
                          title: '事件对象',
                          value: '$e$',
                          name: 'e',
                          label: '事件对象',
                        },
                      ] || [];
                    CMDGenerator(eventDatahistory11, { e }, 'history', {
                      id: 'history',
                      name: 'history',
                      type: 'history',
                      platform: 'pc',
                    });
                  }}
                  ref={(r: any) => refs.setComponentRef(r, 'Button_70251')}
                  {...injectData}
                />
              </TabPane>
            </Tabs>
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_475158',
              uid: 'View_475158',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_475158')}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/myDraft'}
              pageId={'879998060900732928'}
              style={{ height: 'auto', width: '100%' }}
              ref={(r: any) => refs.setComponentRef(r, 'Pageview_735567')}
              {...injectData}
              parentEngineId={parentEngineId}
            />
          </View>
        </VerticalView>
      </VerticalView>
    </div>
  );
};

export default withPageHOC(DiyigePCyemian5870$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
