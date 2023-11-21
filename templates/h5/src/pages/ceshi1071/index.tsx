// 注意: 出码模块正在调试
import React from 'react';

import { View, Loop, Button } from '@lingxiteam/factory/es/index.component';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { setPageNavBar } from 'alita';

const Ceshi1071$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
}) => {
  useEffect(() => {
    const eventDatashowModal: any = [
      {
        type: 'showModal',
        dataId: 169923501797812100,
        options: {
          compId: 'showModal',
          compName: 'system',
          id: '935758',
          pageJsonId: '181337953',
          type: 'success',
          title: '页面加载完成',
          content: '页面加载完成',
          okText: '生成成功🏅️',
        },
        path: ['7492592'],
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatashowModal.params = [] || [];
    CMDGenerator(eventDatashowModal, {}, 'showModal', {
      id: 'showModal',
      name: 'showModal',
      type: 'showModal',
      platform: 'h5',
    });
    const eventDatacustomActionCode: any = [
      {
        type: 'customActionCode',
        dataId: 169958239462146600,
        options: {
          compId: 'customActionCode',
          compName: 'system',
          id: '599664',
          pageJsonId: '181337953',
          originCode:
            '/** main函数为入口函数，代码仅支持写在该函数内部，请勿删除该函数\n * @param {data} 页面数据\n * @param {state} 组件状态\n * @param {success} 触发成功回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需成功后回调拿到xx值，只需要 success(xx)\n * @param {fail} 触发失败回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需失败后回调拿到xx值，只需要 fail(xx)\n * 注意：禁止在代码块中直接操作data，state，globalData\n * 否则会出现异常问题！如果需要在代码块中更改数据源，请将更改后数据success 到外部，走设置数据源事件\n */\nfunction main(data, state, success, fail) {\n\tsuccess([{title: 1},{title:2},{title:3}])\n};',
          code: 'function main(data,state,success,fail){success([{title:1},{title:2},{title:3}])};',
        },
        path: ['7492592'],
        line_number: 2,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169958244726922750,
            options: {
              compId: 'setDataSource',
              compName: 'system',
              id: '168011',
              pageJsonId: '181337953',
              dataSourceId: 169958147710874270,
              dataSourceName: 'list',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '007221',
                  code: 'param',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: false,
                },
              ],
              newData: '$data_599664$',
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            path: ['7492592', 169958239462146600, 169958239462118560],
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode.params = [] || [];
    CMDGenerator(eventDatacustomActionCode, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'h5',
    });

    setPageNavBar({
      pagePath: '/ceshi1071',
      navBar: {
        pageTitle: '页面标题自定义',
        hideNavBar: true,

        onLeftClick: () => {
          const eventDatahistory: any = [
            {
              type: 'history',
              dataId: 169923525996870180,
              options: {
                compId: 'history',
                compName: 'system',
                id: '699025',
                pageJsonId: '181337953',
                type: 'push',
                pathname: '/ssss3279',
                selectedType: 'page',
                pageId: '1024161040026025984',
                modalPath: '/ssss3279',
                paramsObj: {
                  bizId: '$urlParam.bizId$',
                  sceneCode: '$urlParam.sceneCode$',
                  bizData: '$urlParam.bizData$',
                },
                paramsObjKeyValueMap: {
                  bizId: '$urlParam.bizId$',
                  sceneCode: '$urlParam.sceneCode$',
                  bizData: '$urlParam.bizData$',
                },
              },
              path: [169923515761609300],
              line_number: 1,
            },
          ];
          eventDatahistory.params = [] || [];
          CMDGenerator(eventDatahistory, {}, 'history', {
            id: 'history',
            name: 'history',
            type: 'history',
            platform: 'h5',
          });
        },
      },
    });

    return () => {
      const eventDatashowModal: any = [
        {
          type: 'showModal',
          dataId: 169923511919269150,
          options: {
            compId: 'showModal',
            compName: 'system',
            id: '265821',
            pageJsonId: '181337953',
            type: 'info',
            title: '页面退出',
            content: '页面退出',
            okText: '再见',
          },
          path: [169923510649253800],
          line_number: 1,
          callback1: [],
          callback2: [],
        },
      ];
      eventDatashowModal.params = [] || [];
      CMDGenerator(eventDatashowModal, {}, 'showModal', {
        id: 'showModal',
        name: 'showModal',
        type: 'showModal',
        platform: 'h5',
      });
    };
  }, []);

  useEffect(() => {
    const eventDataconsole: any = [
      {
        type: 'console',
        dataId: 169923509192794560,
        options: {
          compId: 'console',
          compName: 'system',
          id: '4100115',
          pageJsonId: '181337953',
          value: ['组件状态变化后'],
        },
        path: [169923508075470400],
        line_number: 1,
      },
    ];
    eventDataconsole.params = [] || [];
    CMDGenerator(eventDataconsole, {}, 'console', {
      id: 'console',
      name: 'console',
      type: 'console',
      platform: 'h5',
    });
  });

  return (
    <div>
      <View
        name="布局容器1"
        visible={true}
        $$componentItem={{
          id: 'View_4060305',
          uid: 'View_4060305',
          pageId: '1024143466269171712',
          appId: '1024143353417228288',
          platform: 'h5',
          type: 'View',
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'static',
          padding: '12px 0px 12px 0px',
          width: '100%',
          borderStyle: 'solid',
          borderWidth: 0,
          borderRadius: '0px 0px 0px 0px',
          border: '0px',
        }}
        ref={(r: any) => (refs['View_4060305'] = r)}
        {...injectData}
      >
        <Loop
          name="循环容器"
          itemKey="item"
          indexKey="i"
          dataSource={data.list}
          uniqueField="param"
          $$componentItem={{
            id: 'Loop_087174',
            uid: 'Loop_087174',
            pageId: '1024143466269171712',
            appId: '1024143353417228288',
            platform: 'h5',
            type: 'Loop',
          }}
          visible={true}
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '0px 0px 0px 0px',
          }}
          ref={(r: any) => (refs['Loop_087174'] = r)}
          {...injectData}
          getEngineApis={() => {
            return {
              ...injectData.getEngineApis(),
              MemoRenderer: {
                renderer: null,
                MemoLoopItem: (props: any) => {
                  const item = props[props.itemKey];
                  return (
                    <Button
                      name="按钮"
                      btnIcon={false}
                      type="primary"
                      size="large"
                      loading={false}
                      mImagePostion="left"
                      shape="default"
                      status="1"
                      children={item.title}
                      $$componentItem={{
                        id: 'Button_197969',
                        uid: 'Button_197969',
                        pageId: '1024143466269171712',
                        appId: '1024143353417228288',
                        platform: 'h5',
                        type: 'Button',
                      }}
                      visible={true}
                      disabled={false}
                      readOnly={false}
                      style={{ textAlign: 'center' }}
                      ref={(r: any) => (refs['Button_197969'] = r)}
                      {...injectData}
                    />
                  );
                },
              },
            };
          }}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Ceshi1071$$Page, {
  // TODO: appId
  appId: '1024143353417228288',
  dataSource: [
    {
      id: 169891588296195260,
      name: 'nothing',
      description: 'nothing',
      source: 'custom',
      type: 'object',
      filterParams: [],
      outParams: [
        {
          attrId: '2606065',
          code: 'param',
          name: '属性',
          type: 'string',
          initialData: { type: 'static', value: '123' },
          showInput: true,
        },
      ],
      config: { hooks: [] },
      rootOutParams: { type: 'static', value: '' },
    },
    {
      id: 169958147710874270,
      name: 'list',
      description: 'list',
      source: 'custom',
      type: 'objectArray',
      filterParams: [],
      outParams: [
        {
          attrId: '007221',
          code: 'param',
          name: '属性',
          type: 'string',
          initialData: { type: 'static' },
          showInput: false,
        },
      ],
      config: { hooks: [] },
      rootOutParams: { type: 'static', value: '[{param:1},{param:}]2' },
    },
  ],
});
