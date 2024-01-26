// 注意: 出码模块正在调试
import React from 'react';

import {
  Button,
  Divider,
  Img,
  Input,
  LoopList,
  LXPieChart,
  Pagination,
  Progress,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

styleInject(
  '.__CustomClass_16482__ .View_3015756 .ued-progress-wrapper{width:100%;}.__CustomClass_16482__ .View_3015756 .pcfactory-progress{width:100%;margin-bottom:-30%;}.__CustomClass_16482__ .View_3015756 .pcfactory-progress-circle .pcfactory-progress-inner{width:100%!important;height:100%!important;}.__CustomClass_16482__ .View_657089 .ued-loop-list-nobox{background-color:transparent!important;}.__CustomClass_16482__ .View_657089 .select{background:#417FFB!important;color:#FFFFFF!important;}.__CustomClass_16482__ .View_657089 .ued-input-wrap.whiteStyle .pcfactory-input-group-addon:first-child{border-top-left-radius:8px;border-bottom-left-radius:8px;background-color:#fff;border:none;}.__CustomClass_16482__ .View_657089 .ued-input-wrap.greyStyle .pcfactory-input-group-addon:first-child{border-top-left-radius:8px;border-bottom-left-radius:8px;background-color:#fff;border:none;}.__CustomClass_16482__ .View_657089 .pcfactory-input-group .pcfactory-input-affix-wrapper:not(:first-child){border:none;}.__CustomClass_16482__ .View_657089 .pcfactory-input-affix-wrapper:not(.pcfactory-input-affix-wrapper-disabled):hover{border:none;}.__CustomClass_16482__ .View_657089 .pcfactory-input-affix-wrapper-focused{border:none;box-shadow:none;}.__CustomClass_16482__ .LoopList_795129 .ued-loop-list-nobox{background-color:transparent;}.__CustomClass_16482__ .View_900735 .pcfactory-row{flex-wrap:nowrap;}.__CustomClass_16482__ .View_900735 .ued-loop-list-nobox{background-color:transparent!important;}.__CustomClass_16482__ .LoopList_824234 .pcfactory-row{flex-wrap:nowrap;}',
  '16482',
);

const Guanliyuanshouye0496$$Page: React.FC<PageProps> = ({
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
}) => {
  useEffect(() => {
    const eventDatacustomActionCode: any = [
      {
        type: 'customActionCode',
        dataId: 170374502472658700,
        options: {
          compId: 'customActionCode',
          compName: 'system',
          id: '0214486',
          pageJsonId: '16482',
          originCode:
            "/** main函数为入口函数，代码仅支持写在该函数内部，请勿删除该函数\n * @param {data} 页面数据\n * @param {state} 组件状态\n * @param {success} 触发成功回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需成功后回调拿到xx值，只需要 success(xx)\n * @param {fail} 触发失败回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需失败后回调拿到xx值，只需要 fail(xx)\n * 注意：禁止在代码块中直接操作data，state，globalData\n * 否则会出现异常问题！如果需要在代码块中更改数据源，请将更改后数据success 到外部，走设置数据源事件\n */\nfunction main(data, state, success, fail) {\n\tsuccess([{\n        value:+data.queryManagerStagingData.intern_finished_num,\n        name:'已完成'+(+data.queryManagerStagingData.intern_finished_rate)+'%'\n    },\n    {\n        value:+data.queryManagerStagingData.intern_unfinish_num,\n        name:'未完成'+(+data.queryManagerStagingData.intern_unfinish_rate)+'%'\n    }])\n};",
          code: 'function main(data,state,success,fail){success([{value:+data.queryManagerStagingData.intern_finished_num,name:"\\u5DF2\\u5B8C\\u6210"+ +data.queryManagerStagingData.intern_finished_rate+"%"},{value:+data.queryManagerStagingData.intern_unfinish_num,name:"\\u672A\\u5B8C\\u6210"+ +data.queryManagerStagingData.intern_unfinish_rate+"%"}])};',
        },
        path: ['7249154'],
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170374513806392960,
            options: {
              compId: 'setDataSource',
              compName: 'system',
              id: '18207',
              pageJsonId: '16482',
              dataSourceId: 170374494013371400,
              dataSourceName: 'pageData',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '819572',
                  code: 'chartData',
                  name: '图表',
                  type: 'objectArray',
                  initialData: { type: 'static' },
                  showInput: true,
                  children: [
                    {
                      attrId: '599432',
                      code: 'value',
                      name: '值',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: '819572',
                      parentKey: '819572',
                      _codePath: ['chartData', 'value'],
                      _idpath: ['819572', '599432'],
                    },
                    {
                      attrId: '71938',
                      code: 'name',
                      name: '名称',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: false,
                      parentCode: '819572',
                      parentKey: '819572',
                      _codePath: ['chartData', 'name'],
                      _idpath: ['819572', '71938'],
                    },
                  ],
                  value: { type: ['context', '$data_0214486$'], code: '' },
                  _codePath: ['chartData'],
                  _idpath: ['819572'],
                },
                {
                  attrId: '42414',
                  code: 'selectKey',
                  name: '选中项',
                  type: 'string',
                  initialData: { type: 'static', value: "$''$" },
                  showInput: true,
                  _codePath: ['selectKey'],
                  _idpath: ['42414'],
                },
                {
                  attrId: '640048',
                  code: 'pageData',
                  name: '分页数据',
                  type: 'object',
                  initialData: { type: 'static' },
                  showInput: true,
                  children: [
                    {
                      attrId: '865921',
                      code: 'pageSize',
                      name: '页数',
                      type: 'string',
                      initialData: { type: 'static', value: '10' },
                      showInput: true,
                      _codePath: ['pageData', 'pageSize'],
                      _idpath: ['640048', '865921'],
                      parentKey: '640048',
                    },
                    {
                      attrId: '516722',
                      code: 'pageNum',
                      name: '页码',
                      type: 'string',
                      initialData: { type: 'static', value: '1' },
                      showInput: true,
                      _codePath: ['pageData', 'pageNum'],
                      _idpath: ['640048', '516722'],
                      parentKey: '640048',
                    },
                  ],
                  _codePath: ['pageData'],
                  _idpath: ['640048'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            path: ['7249154', 170374502472658700, 170374502472666780],
            line_number: 2,
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
      platform: 'pc',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style} className="__CustomClass_16482__">
      <View
        name={'页面'}
        basicStatus={1}
        backgroundType={{ type: 'cleanColor', color: 'rgba(244, 249, 253, 1)' }}
        $$componentItem={{
          id: 'View_695027_1',
          uid: 'View_695027_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '15px 8.33%',
          flexDirection: 'column',
          overflowY: 'auto',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
        ref={(r: any) => (refs['View_695027_1'] = r)}
        {...injectData}
      >
        <Img
          name={'图片'}
          srcType={'fileCode'}
          basicStatus={1}
          alt={'图片'}
          fileCode={'PIC_748727'}
          $$componentItem={{
            id: 'Img_206009',
            uid: 'Img_206009',
            type: 'Img',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            width: '100%',
            height: '13.5%',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '0',
          }}
          ref={(r: any) => (refs['Img_206009'] = r)}
          {...injectData}
        />
        <View
          name={'普通容器2'}
          basicStatus={1}
          backgroundType={{
            type: 'cleanColor',
            color: 'rgba(255, 255, 255, 0)',
          }}
          $$componentItem={{
            id: 'View_202597',
            uid: 'View_202597',
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
            width: '100%',
            flex: 1,
            height: '100%',
            zIndex: '1',
          }}
          ref={(r: any) => (refs['View_202597'] = r)}
          {...injectData}
        >
          <View
            name={'头部容器'}
            basicStatus={1}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 0)',
            }}
            $$componentItem={{
              id: 'View_553049',
              uid: 'View_553049',
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
              marginBottom: '1%',
            }}
            ref={(r: any) => (refs['View_553049'] = r)}
            {...injectData}
          >
            <Img
              name={'图片'}
              srcType={'fileCode'}
              basicStatus={1}
              alt={'图片'}
              fileCode={'PIC_850033'}
              $$componentItem={{
                id: 'Img_685444',
                uid: 'Img_685444',
                type: 'Img',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: '4.3%', height: '0F', marginRight: '0.833%' }}
              ref={(r: any) => (refs['Img_685444'] = r)}
              {...injectData}
            />
            <View
              name={'普通容器3'}
              basicStatus={1}
              backgroundType={{
                type: 'cleanColor',
                color: 'rgba(255, 255, 255, 0)',
              }}
              $$componentItem={{
                id: 'View_9543965',
                uid: 'View_9543965',
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
                width: '100%',
              }}
              ref={(r: any) => (refs['View_9543965'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                basicStatus={1}
                content={'早上好，' + data?._others_?.personInfo?.userName}
                textType={'span'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_19081',
                  uid: 'Text_19081',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: '1.067vw',
                  lineHeight: 'normal',
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  fontStyle: 'italic',
                  fontWeight: '400',
                }}
                ref={(r: any) => (refs['Text_19081'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                basicStatus={1}
                content={'上次登陆：2023-10-23 09:20:22 福州'}
                textType={'span'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_9003625',
                  uid: 'Text_9003625',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: '0.633vw',
                  lineHeight: 'normal',
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  fontWeight: '400',
                  marginTop: '0.5%',
                }}
                ref={(r: any) => (refs['Text_9003625'] = r)}
                {...injectData}
              />
            </View>
          </View>
          <View
            name={'普通容器28'}
            basicStatus={1}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 0)',
            }}
            $$componentItem={{
              id: 'View_811995',
              uid: 'View_811995',
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
            }}
            ref={(r: any) => (refs['View_811995'] = r)}
            {...injectData}
          >
            <View
              name={'实力容器'}
              basicStatus={1}
              backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
              $$componentItem={{
                id: 'View_482699',
                uid: 'View_482699',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '.5% 2%',
                width: '64%',
                borderRadius: '8px 8px 8px 8px',
                margin: '0px 16px 0px 0px',
                marginBottom: '1%',
              }}
              ref={(r: any) => (refs['View_482699'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                basicStatus={1}
                content={'任务概况'}
                textType={'span'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_43815',
                  uid: 'Text_43815',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: '0.633vw',
                  lineHeight: 'normal',
                  color: 'rgba(100, 103, 122, 1)',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                  whiteSpace: 'nowrap',
                  minHeight: 'auto',
                }}
                ref={(r: any) => (refs['Text_43815'] = r)}
                {...injectData}
              />
              <View
                name={'实力容器'}
                basicStatus={1}
                backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                $$componentItem={{
                  id: 'View_305858',
                  uid: 'View_305858',
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
                  borderRadius: '8px 8px 8px 8px',
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => (refs['View_305858'] = r)}
                {...injectData}
              >
                <View
                  name={'普通容器5'}
                  basicStatus={1}
                  backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                  $$componentItem={{
                    id: 'View_320412',
                    uid: 'View_320412',
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
                    width: '48%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  ref={(r: any) => (refs['View_320412'] = r)}
                  {...injectData}
                >
                  <View
                    name={'普通容器35'}
                    basicStatus={1}
                    backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                    $$componentItem={{
                      id: 'View_773804',
                      uid: 'View_773804',
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
                      width: 'fit-content',
                      alignItems: 'center',
                    }}
                    ref={(r: any) => (refs['View_773804'] = r)}
                    {...injectData}
                  >
                    <Img
                      name={'图片'}
                      srcType={'fileCode'}
                      basicStatus={1}
                      alt={'图片'}
                      fileCode={'PIC_819184'}
                      $$componentItem={{
                        id: 'Img_4898146',
                        uid: 'Img_4898146',
                        type: 'Img',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: '30%',
                        height: 'fit-content',
                        margin: '0px 16px 0px 0px',
                      }}
                      ref={(r: any) => (refs['Img_4898146'] = r)}
                      {...injectData}
                    />
                    <View
                      name={'普通容器36'}
                      basicStatus={1}
                      backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                      $$componentItem={{
                        id: 'View_1027517',
                        uid: 'View_1027517',
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
                        width: '100%',
                      }}
                      ref={(r: any) => (refs['View_1027517'] = r)}
                      {...injectData}
                    >
                      <Text
                        name={'文本'}
                        basicStatus={1}
                        content={
                          data?.queryManagerStagingData?.intern_total_num
                        }
                        textType={'span'}
                        showHtml={false}
                        $$componentItem={{
                          id: 'Text_1229975',
                          uid: 'Text_1229975',
                          type: 'Text',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          textAlign: 'left',
                          fontSize: '1.067vw',
                          lineHeight: '24px',
                          color: '#1c242e',
                          backgroundColor: 'rgba(255, 255, 255,0)',
                          fontWeight: 700,
                        }}
                        ref={(r: any) => (refs['Text_1229975'] = r)}
                        {...injectData}
                      />
                      <Text
                        name={'文本'}
                        basicStatus={1}
                        content={'实习生总数'}
                        textType={'span'}
                        showHtml={false}
                        $$componentItem={{
                          id: 'Text_9944829',
                          uid: 'Text_9944829',
                          type: 'Text',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          textAlign: 'left',
                          fontSize: '0.633vw',
                          lineHeight: '24px',
                          color: '#64677A',
                          backgroundColor: 'rgba(255, 255, 255,0)',
                        }}
                        ref={(r: any) => (refs['Text_9944829'] = r)}
                        {...injectData}
                      />
                    </View>
                  </View>
                  <View
                    name={'普通容器8'}
                    basicStatus={1}
                    backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                    $$componentItem={{
                      id: 'View_179601',
                      uid: 'View_179601',
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
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      position: 'relative',
                    }}
                    ref={(r: any) => (refs['View_179601'] = r)}
                    {...injectData}
                  >
                    <LXPieChart
                      name={'饼图/环形图'}
                      exampleData={[
                        { name: '示例1', value: 1048 },
                        { name: '示例2', value: 735 },
                        { name: '示例3', value: 580 },
                        { name: '示例4', value: 484 },
                        { name: '示例5', value: 300 },
                      ]}
                      basicStatus={1}
                      pieType={'circlePie'}
                      layout={'horizontal'}
                      centreIndicatorSum={'autoSum'}
                      titlePosition={'left'}
                      color={[
                        '#6799FC',
                        '#84EAB7',
                        '#FFD381',
                        '#918DEC',
                        '#FF8EC3',
                        '#33E3F5',
                        '#FFAA9A',
                        '#B583F4',
                        '#DF8EEA',
                        '#33C3FF',
                      ]}
                      backgroundColor={'light'}
                      progressMaxValue={100}
                      radiusSize={'75%'}
                      progressRadiusSize={'["40%","70%"]'}
                      nightingaleRadiusSize={'["0%","70%"]'}
                      nightingaleStyle={'radius'}
                      showLegend={false}
                      legendOrient={'roundRect'}
                      showLabel={true}
                      labelContent={'{b}: {c}'}
                      labelPosition={'outside'}
                      hoverTips={true}
                      hoverHighlight={true}
                      clickDisunite={false}
                      borderWidth={0}
                      borderColor={'#ffffff'}
                      borderRadius={10}
                      centreIndicatorStyle={'countBottom'}
                      dataName={'name'}
                      dataSource={data?.pageData?.chartData}
                      dataValue={'value'}
                      centreIndicator={false}
                      $$componentItem={{
                        id: 'LXPieChart_30725018',
                        uid: 'LXPieChart_30725018',
                        type: 'LXPieChart',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: '100%',
                        height: '61px',
                        padding: '0px 0px 0px 0px',
                        margin: '0px 0px 0px 0px',
                      }}
                      ref={(r: any) => (refs['LXPieChart_30725018'] = r)}
                      {...injectData}
                    />
                  </View>
                </View>
                <View
                  name={'普通容器34'}
                  basicStatus={1}
                  backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                  $$componentItem={{
                    id: 'View_688442',
                    uid: 'View_688442',
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
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  ref={(r: any) => (refs['View_688442'] = r)}
                  {...injectData}
                >
                  <Divider
                    name={'分割线'}
                    basicStatus={1}
                    type={'vertical'}
                    dashed={false}
                    dividerColor={'rgba(0,0,0,0.15)'}
                    dashedWidth={4}
                    dashedMargin={4}
                    showTitle={false}
                    dividerText={'标题'}
                    orientation={'center'}
                    titleColor={'rgba(28,36,46,0.75)'}
                    titleFontSize={14}
                    titleFontWeight={400}
                    $$componentItem={{
                      id: 'Divider_0582618',
                      uid: 'Divider_0582618',
                      type: 'Divider',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      margin: '0px 0px 0px 0px',
                      height: '49px',
                      width: '2px',
                    }}
                    ref={(r: any) => (refs['Divider_0582618'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'普通容器29'}
                  basicStatus={1}
                  backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                  $$componentItem={{
                    id: 'View_516183',
                    uid: 'View_516183',
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
                    width: '37%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  ref={(r: any) => (refs['View_516183'] = r)}
                  {...injectData}
                >
                  <View
                    name={'普通容器30'}
                    basicStatus={1}
                    backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                    $$componentItem={{
                      id: 'View_319357',
                      uid: 'View_319357',
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
                      width: 'fit-content',
                      alignItems: 'center',
                    }}
                    ref={(r: any) => (refs['View_319357'] = r)}
                    {...injectData}
                  >
                    <Img
                      name={'图片'}
                      srcType={'fileCode'}
                      basicStatus={1}
                      alt={'图片'}
                      fileCode={'PIC_441268'}
                      $$componentItem={{
                        id: 'Img_383447',
                        uid: 'Img_383447',
                        type: 'Img',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      style={{
                        width: '30%',
                        height: 'fit-content',
                        margin: '0px 16px 0px 0px',
                      }}
                      ref={(r: any) => (refs['Img_383447'] = r)}
                      {...injectData}
                    />
                    <View
                      name={'普通容器31'}
                      basicStatus={1}
                      backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                      $$componentItem={{
                        id: 'View_376481',
                        uid: 'View_376481',
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
                        width: '100%',
                      }}
                      ref={(r: any) => (refs['View_376481'] = r)}
                      {...injectData}
                    >
                      <Text
                        name={'文本'}
                        basicStatus={1}
                        content={data?.queryManagerStagingData?.total_task_num}
                        textType={'span'}
                        showHtml={false}
                        $$componentItem={{
                          id: 'Text_845057',
                          uid: 'Text_845057',
                          type: 'Text',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          textAlign: 'left',
                          fontSize: '1.067vw',
                          lineHeight: '24px',
                          color: '#1c242e',
                          backgroundColor: 'rgba(255, 255, 255,0)',
                          fontWeight: 700,
                        }}
                        ref={(r: any) => (refs['Text_845057'] = r)}
                        {...injectData}
                      />
                      <Text
                        name={'文本'}
                        basicStatus={1}
                        content={'总任务数'}
                        textType={'span'}
                        showHtml={false}
                        $$componentItem={{
                          id: 'Text_099631',
                          uid: 'Text_099631',
                          type: 'Text',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          textAlign: 'left',
                          fontSize: '0.633vw',
                          lineHeight: '24px',
                          color: '#64677A',
                          backgroundColor: 'rgba(255, 255, 255,0)',
                        }}
                        ref={(r: any) => (refs['Text_099631'] = r)}
                        {...injectData}
                      />
                    </View>
                  </View>
                  <View
                    name={'普通容器32'}
                    basicStatus={1}
                    backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                    className={'View_3015756'}
                    $$componentItem={{
                      id: 'View_3015756',
                      uid: 'View_3015756',
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
                      width: '30%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                    ref={(r: any) => (refs['View_3015756'] = r)}
                    {...injectData}
                  >
                    <Progress
                      name={'进度条'}
                      basicStatus={1}
                      type={'dashboard'}
                      placement={'horizontal'}
                      width={100}
                      percent={100}
                      strokeWidth={15}
                      strokeColor={{
                        '25%': '#5869f6',
                        '50%': '#5a85f5',
                        '75%': '#6eabf8',
                        '100%': '#7cd2f9',
                      }}
                      trailColor={'rgba(28,36,46,0.04)'}
                      showTitle={true}
                      title={'进度条'}
                      color={'#1C242E'}
                      fontSize={'14px'}
                      lineHeight={'22px'}
                      fontWeight={'400'}
                      showInfo={false}
                      valueColor={'rgba(28,36,46,0.65)'}
                      valueFontSize={'14px'}
                      valueLineHeight={'22px'}
                      valueFontWeight={'400'}
                      extendProps={{}}
                      strokeLinecap={'butt'}
                      gapDegree={'100'}
                      $$componentItem={{
                        id: 'Progress_3233787',
                        uid: 'Progress_3233787',
                        type: 'Progress',
                        ...componentItem,
                      }}
                      disabled={false}
                      visible={true}
                      readOnly={false}
                      ref={(r: any) => (refs['Progress_3233787'] = r)}
                      {...injectData}
                    />
                    <View
                      name={'普通容器33'}
                      basicStatus={1}
                      backgroundType={{
                        type: 'cleanColor',
                        color: 'rgba(255, 255, 255, 0)',
                      }}
                      $$componentItem={{
                        id: 'View_747603',
                        uid: 'View_747603',
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
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '25%',
                        left: '0',
                        zIndex: '1',
                        gap: '5px',
                      }}
                      ref={(r: any) => (refs['View_747603'] = r)}
                      {...injectData}
                    >
                      <Text
                        name={'文本'}
                        basicStatus={1}
                        content={
                          data?.queryManagerStagingData?.task_finished_rate +
                          '%'
                        }
                        textType={'span'}
                        showHtml={false}
                        $$componentItem={{
                          id: 'Text_910995',
                          uid: 'Text_910995',
                          type: 'Text',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          textAlign: 'left',
                          fontSize: '0.763vw',
                          lineHeight: 'normal',
                          color: 'rgba(65, 127, 251, 1)',
                          backgroundColor: 'rgba(255, 255, 255,0)',
                          whiteSpace: 'nowrap',
                          minHeight: 'auto',
                        }}
                        ref={(r: any) => (refs['Text_910995'] = r)}
                        {...injectData}
                      />
                      <Text
                        name={'文本'}
                        basicStatus={1}
                        content={'已执行'}
                        textType={'span'}
                        showHtml={false}
                        $$componentItem={{
                          id: 'Text_3761784',
                          uid: 'Text_3761784',
                          type: 'Text',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        style={{
                          textAlign: 'left',
                          fontSize: '0.633vw',
                          lineHeight: 'normal',
                          color: 'rgba(65, 127, 251, 1)',
                          backgroundColor: 'rgba(255, 255, 255,0)',
                          whiteSpace: 'nowrap',
                          minHeight: 'auto',
                        }}
                        ref={(r: any) => (refs['Text_3761784'] = r)}
                        {...injectData}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              name={'实力容器'}
              basicStatus={1}
              backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
              $$componentItem={{
                id: 'View_8535085',
                uid: 'View_8535085',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '.5% 1%',
                width: '100%',
                alignItems: 'center',
                borderRadius: '8px 8px 8px 8px',
                flex: 1,
                margin: '0px 16px 0px 0px',
                marginBottom: '1%',
              }}
              ref={(r: any) => (refs['View_8535085'] = r)}
              {...injectData}
            >
              <View
                name={'普通容器37'}
                basicStatus={1}
                backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                $$componentItem={{
                  id: 'View_5464584',
                  uid: 'View_5464584',
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
                  justifyContent: 'center',
                  flex: 1,
                }}
                ref={(r: any) => (refs['View_5464584'] = r)}
                {...injectData}
              >
                <Img
                  name={'图片'}
                  srcType={'fileCode'}
                  basicStatus={1}
                  alt={'图片'}
                  fileCode={'PIC_435787'}
                  $$componentItem={{
                    id: 'Img_413351',
                    uid: 'Img_413351',
                    type: 'Img',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    width: '28%',
                    height: 'fit-content',
                    margin: '0px 8px 0px 0px',
                  }}
                  ref={(r: any) => (refs['Img_413351'] = r)}
                  {...injectData}
                />
                <View
                  name={'普通容器38'}
                  basicStatus={1}
                  backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                  $$componentItem={{
                    id: 'View_623999',
                    uid: 'View_623999',
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
                    width: '100%',
                    justifyContent: 'center',
                  }}
                  ref={(r: any) => (refs['View_623999'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    basicStatus={1}
                    content={'实习生信息管理>'}
                    textType={'span'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_562948',
                      uid: 'Text_562948',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: '0.633vw',
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                    onClick={() => {
                      const eventDatahistory: any = [
                        {
                          type: 'history',
                          dataId: 170375391680737100,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '379982',
                            pageJsonId: '16482',
                            pathname: '/shixishengxinxiguanli_2754312',
                            selectedType: 'page',
                            pageId: '1056462279824314368',
                            modalPath: '/shixishengxinxiguanli_2754312',
                          },
                          path: [170375391096243520],
                          line_number: 1,
                        },
                      ];
                      eventDatahistory.params = [] || [];
                      CMDGenerator(eventDatahistory, {}, 'history', {
                        id: 'history',
                        name: 'history',
                        type: 'history',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['Text_562948'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    basicStatus={1}
                    content={
                      '共' +
                      data?.queryManagerStagingData?.intern_total_num +
                      '位实习生'
                    }
                    textType={'span'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_289512',
                      uid: 'Text_289512',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: '0.533vw',
                      lineHeight: '24px',
                      color: '#64677A',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_289512'] = r)}
                    {...injectData}
                  />
                </View>
              </View>
            </View>
            <View
              name={'实力容器'}
              basicStatus={1}
              backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
              $$componentItem={{
                id: 'View_21539',
                uid: 'View_21539',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '.5% 1%',
                width: '100%',
                alignItems: 'center',
                borderRadius: '8px 8px 8px 8px',
                flex: 1,
                marginBottom: '1%',
              }}
              ref={(r: any) => (refs['View_21539'] = r)}
              {...injectData}
            >
              <View
                name={'普通容器39'}
                basicStatus={1}
                backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                $$componentItem={{
                  id: 'View_8932359',
                  uid: 'View_8932359',
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
                  width: 'fit-content',
                  alignItems: 'center',
                }}
                ref={(r: any) => (refs['View_8932359'] = r)}
                {...injectData}
              >
                <Img
                  name={'图片'}
                  srcType={'fileCode'}
                  basicStatus={1}
                  alt={'图片'}
                  fileCode={'PIC_2060863'}
                  $$componentItem={{
                    id: 'Img_166089',
                    uid: 'Img_166089',
                    type: 'Img',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    width: '30%',
                    height: 'fit-content',
                    margin: '0px 8px 0px 0px',
                  }}
                  ref={(r: any) => (refs['Img_166089'] = r)}
                  {...injectData}
                />
                <View
                  name={'普通容器41'}
                  basicStatus={1}
                  backgroundType={{ type: 'cleanColor', color: '#FFFFFF' }}
                  $$componentItem={{
                    id: 'View_6965244',
                    uid: 'View_6965244',
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
                    width: '100%',
                    justifyContent: 'center',
                  }}
                  ref={(r: any) => (refs['View_6965244'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'文本'}
                    basicStatus={1}
                    content={'制定执行动作>'}
                    textType={'span'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_76693239',
                      uid: 'Text_76693239',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: '0.633vw',
                      lineHeight: '24px',
                      color: '#1c242e',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                    onClick={() => {
                      const eventDatahistory2: any = [
                        {
                          type: 'history',
                          dataId: 170375393211515000,
                          options: {
                            compId: 'history',
                            compName: 'system',
                            id: '697796',
                            pageJsonId: '16482',
                            pathname: '/zhidingzhixingdongzuo_706698',
                            selectedType: 'page',
                            pageId: '1056493196680826880',
                            modalPath: '/zhidingzhixingdongzuo_706698',
                          },
                          path: [170375392823416900],
                          line_number: 1,
                        },
                      ];
                      eventDatahistory2.params = [] || [];
                      CMDGenerator(eventDatahistory2, {}, 'history', {
                        id: 'history',
                        name: 'history',
                        type: 'history',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) => (refs['Text_76693239'] = r)}
                    {...injectData}
                  />
                  <Text
                    name={'文本'}
                    basicStatus={1}
                    content={
                      '共' +
                      data?.queryManagerStagingData?.action_number +
                      '个动作'
                    }
                    textType={'span'}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_6960988',
                      uid: 'Text_6960988',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    visible={true}
                    readOnly={false}
                    style={{
                      textAlign: 'left',
                      fontSize: '0.533vw',
                      lineHeight: '24px',
                      color: '#64677A',
                      backgroundColor: 'rgba(255, 255, 255,0)',
                    }}
                    ref={(r: any) => (refs['Text_6960988'] = r)}
                    {...injectData}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            name={'任务容器'}
            basicStatus={1}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 0)',
            }}
            $$componentItem={{
              id: 'View_7287572',
              uid: 'View_7287572',
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
            ref={(r: any) => (refs['View_7287572'] = r)}
            {...injectData}
          >
            <Text
              name={'文本'}
              basicStatus={1}
              content={
                '所有实习生（' +
                data?.queryManagerStagingData?.intern_total_num +
                '）'
              }
              textType={'span'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2352421',
                uid: 'Text_2352421',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                fontSize: '0.766vw',
                lineHeight: '24px',
                color: '#1c242e',
                backgroundColor: 'rgba(255, 255, 255,0)',
                fontWeight: 700,
                marginBottom: '1%',
              }}
              ref={(r: any) => (refs['Text_2352421'] = r)}
              {...injectData}
            />
          </View>
          <View
            name={'普通容器23'}
            basicStatus={1}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 0)',
            }}
            className={'View_657089'}
            $$componentItem={{
              id: 'View_657089',
              uid: 'View_657089',
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
              justifyContent: 'space-between',
            }}
            ref={(r: any) => (refs['View_657089'] = r)}
            {...injectData}
          >
            <LoopList
              name={'循环列表'}
              basicStatus={1}
              mode={1}
              pieceData={[]}
              defaultValue={[]}
              columnNum={1}
              span={24}
              vspace={16}
              hspace={16}
              itemKey={'rowData'}
              indexKey={'rowIndex'}
              gridMode={false}
              valueKey={'id'}
              gridData={[
                {
                  label:
                    '全部(' +
                    data?.queryManagerStagingData?.intern_total_num +
                    ')',
                  value: '',
                },
                {
                  label:
                    '任务已完成(' +
                    data?.queryManagerStagingData?.intern_finished_num +
                    ')',
                  value: 'T',
                },
                {
                  label:
                    '任务未完成(' +
                    data?.queryManagerStagingData?.intern_unfinish_num +
                    ')',
                  value: 'F',
                },
              ]}
              className={'LoopList_795129'}
              $$componentItem={{
                id: 'LoopList_795129',
                uid: 'LoopList_795129',
                type: 'LoopList',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                minHeight: 40,
                backgroundColor: 'transparent',
                marginLeft: '0',
                marginRight: '0',
              }}
              ref={(r: any) => (refs['LoopList_795129'] = r)}
              {...injectData}
              getEngineApis={() => {
                return {
                  ...injectData.getEngineApis(),
                  MemoRenderer: {
                    renderer: null,
                    MemoLoopItem: (props: any) => {
                      const item = props[props.itemKey] ?? props?.item;
                      const i = props[props.indexKey] ?? props?.i;
                      return (
                        <>
                          <View
                            name={'普通容器18'}
                            basicStatus={1}
                            backgroundType={{
                              type: 'cleanColor',
                              color: 'rgba(242, 243, 245, 1)',
                            }}
                            className={
                              item?.value === data?.pageData?.selectKey
                                ? 'select'
                                : ''
                            }
                            $$componentItem={{
                              id: 'View_004173',
                              uid: 'View_004173',
                              type: 'View',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{
                              display: 'block',
                              flexDirection: 'column',
                              padding: '0px 10px 0px 10px',
                              width: 'fit-content',
                              margin: '0px 16px 0px 0px',
                              borderRadius: '4px 4px 4px 4px',
                            }}
                            onClick={(e: any) => {
                              const eventDatasetDataSource2: any = [
                                {
                                  type: 'setDataSource',
                                  dataId: 170374614876822800,
                                  options: {
                                    compId: 'setDataSource',
                                    compName: 'system',
                                    id: '5509626',
                                    pageJsonId: '16482',
                                    dataSourceId: 170374494013371400,
                                    dataSourceName: 'pageData',
                                    dataSourceRelType: 'custom',
                                    dataSourceSetValue: [
                                      {
                                        attrId: '819572',
                                        code: 'chartData',
                                        name: '图表',
                                        type: 'objectArray',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        children: [
                                          {
                                            attrId: '599432',
                                            code: 'value',
                                            name: '值',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: false,
                                            parentCode: '819572',
                                            parentKey: '819572',
                                            _codePath: ['chartData', 'value'],
                                            _idpath: ['819572', '599432'],
                                          },
                                          {
                                            attrId: '71938',
                                            code: 'name',
                                            name: '名称',
                                            type: 'string',
                                            initialData: { type: 'static' },
                                            showInput: false,
                                            parentCode: '819572',
                                            parentKey: '819572',
                                            _codePath: ['chartData', 'name'],
                                            _idpath: ['819572', '71938'],
                                          },
                                        ],
                                        _codePath: ['chartData'],
                                        _idpath: ['819572'],
                                      },
                                      {
                                        attrId: '42414',
                                        code: 'selectKey',
                                        name: '选中项',
                                        type: 'string',
                                        initialData: {
                                          type: 'static',
                                          value: "$''$",
                                        },
                                        showInput: true,
                                        value: {
                                          type: ['customize'],
                                          code: '$item.value$',
                                        },
                                        _codePath: ['selectKey'],
                                        _idpath: ['42414'],
                                      },
                                      {
                                        attrId: '640048',
                                        code: 'pageData',
                                        name: '分页数据',
                                        type: 'object',
                                        initialData: { type: 'static' },
                                        showInput: true,
                                        children: [
                                          {
                                            attrId: '865921',
                                            code: 'pageSize',
                                            name: '页数',
                                            type: 'string',
                                            initialData: {
                                              type: 'static',
                                              value: '10',
                                            },
                                            showInput: true,
                                            _codePath: ['pageData', 'pageSize'],
                                            _idpath: ['640048', '865921'],
                                            parentKey: '640048',
                                          },
                                          {
                                            attrId: '516722',
                                            code: 'pageNum',
                                            name: '页码',
                                            type: 'string',
                                            initialData: {
                                              type: 'static',
                                              value: '1',
                                            },
                                            showInput: true,
                                            _codePath: ['pageData', 'pageNum'],
                                            _idpath: ['640048', '516722'],
                                            parentKey: '640048',
                                          },
                                        ],
                                        _codePath: ['pageData'],
                                        _idpath: ['640048'],
                                      },
                                    ],
                                    operateType: 1,
                                    onlySetPatch: true,
                                    otherObjectArrayOptions: {},
                                    targetDataSourcePaths: [],
                                  },
                                  path: [170374614664180670],
                                  line_number: 1,
                                  callback1: [],
                                  callback2: [],
                                },
                              ];
                              eventDatasetDataSource2.params =
                                [
                                  {
                                    title: '事件对象',
                                    value: '$e$',
                                    name: 'e',
                                  },
                                ] || [];
                              CMDGenerator(
                                eventDatasetDataSource2,
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
                            ref={(r: any) => (refs['View_004173'] = r)}
                            {...injectData}
                          >
                            <Text
                              name={'文本'}
                              basicStatus={1}
                              content={item?.label}
                              textType={'span'}
                              showHtml={false}
                              className={
                                item?.value === data?.pageData?.selectKey
                                  ? 'select'
                                  : ''
                              }
                              $$componentItem={{
                                id: 'Text_214628',
                                uid: 'Text_214628',
                                type: 'Text',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              style={{
                                textAlign: 'left',
                                fontSize: '0.633vw',
                                lineHeight: '24px',
                                color: '#1c242e',
                                backgroundColor: 'rgba(255, 255, 255,0)',
                              }}
                              ref={(r: any) => (refs['Text_214628'] = r)}
                              {...injectData}
                            />
                          </View>
                        </>
                      );
                    },
                  },
                };
              }}
            />
            <View
              name={'普通容器42'}
              basicStatus={1}
              $$componentItem={{
                id: 'View_870541',
                uid: 'View_870541',
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
                width: '25%',
              }}
              ref={(r: any) => (refs['View_870541'] = r)}
              {...injectData}
            >
              <Input
                name={'输入框'}
                basicStatus={1}
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
                placeholder={'请输入姓名或工号搜索'}
                allowClear={true}
                dataMask={''}
                icon={{
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                prefixIcon={{
                  prefixIconTheme: 'outlined',
                  prefixIconType: 'search',
                }}
                prefixStyle={'1'}
                fieldName={'a'}
                tipIcon={{ theme: 'outlined', type: 'question-circle' }}
                tipLocation={'after'}
                tipPlacement={'top'}
                $$componentItem={{
                  id: 'Input_228236',
                  uid: 'Input_228236',
                  type: 'Input',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onPressEnter={(e: any) => {
                  const eventDatareloadDataSource: any = [
                    {
                      type: 'reloadDataSource',
                      dataId: 170375178434229380,
                      options: {
                        compId: 'reloadDataSource',
                        compName: 'system',
                        id: '094655',
                        pageJsonId: '16482',
                        sync: false,
                        dataSourceId: 170374850993985000,
                        dataSourceName: 'queryAllInternDataList',
                        dataSourceRelType: 'service',
                        dataSourceReloadFilter: [
                          {
                            attrId: '14655007',
                            code: 'keyword',
                            name: 'keyword',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '5398551727798',
                            value: {
                              type: ['context', '$e.target.value$'],
                              code: '',
                            },
                          },
                          {
                            attrId: '1677',
                            code: 'taskType',
                            name: '是否完成任务',
                            type: 'string',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '97717401474',
                            value: {
                              type: ['datasource', 'pageData', 'data'],
                              code: 'selectKey',
                            },
                          },
                          {
                            attrId: '990731',
                            code: 'pageNum',
                            name: '页数',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '745623021667',
                            value: {
                              type: ['datasource', 'pageData', 'data'],
                              code: 'pageData.pageNum',
                            },
                          },
                          {
                            attrId: '706881',
                            code: 'pageSize',
                            name: '每页数量',
                            type: 'long',
                            sort: { isSort: true },
                            initialData: { type: 'static' },
                            sourceAttrId: '51862248894334',
                            value: {
                              type: ['datasource', 'pageData', 'data'],
                              code: 'pageData.pageSize',
                            },
                          },
                        ],
                        otherObjectArrayOptions: {},
                        targetDataSourcePaths: [],
                      },
                      path: [170375178177383650],
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatareloadDataSource.params =
                    [
                      {
                        title: '输入框取值',
                        name: 'e',
                        value: '$e.target.value$',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatareloadDataSource,
                    { e },
                    'reloadDataSource',
                    {
                      id: 'reloadDataSource',
                      name: 'reloadDataSource',
                      type: 'reloadDataSource',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => (refs['Input_228236'] = r)}
                {...injectData}
              />
            </View>
          </View>
          <View
            name={'普通容器24'}
            basicStatus={1}
            backgroundType={{
              type: 'cleanColor',
              color: 'rgba(255, 255, 255, 0)',
            }}
            className={'View_900735'}
            $$componentItem={{
              id: 'View_900735',
              uid: 'View_900735',
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
              flex: 1,
              overflowY: 'auto',
              backgroundColor: 'transparent',
            }}
            ref={(r: any) => (refs['View_900735'] = r)}
            {...injectData}
          >
            <LoopList
              name={'循环列表'}
              basicStatus={1}
              mode={1}
              pieceData={[]}
              defaultValue={[]}
              columnNum={1}
              span={24}
              vspace={16}
              hspace={16}
              itemKey={'rowData'}
              indexKey={'rowIndex'}
              gridMode={false}
              gridData={data?.queryAllInternDataList?.list}
              valueKey={'id'}
              className={'LoopList_824234'}
              $$componentItem={{
                id: 'LoopList_824234',
                uid: 'LoopList_824234',
                type: 'LoopList',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                minHeight: 40,
                flexDirection: 'column',
                marginLeft: '0',
                marginRight: '0',
                rowGap: '8px',
              }}
              ref={(r: any) => (refs['LoopList_824234'] = r)}
              {...injectData}
              getEngineApis={() => {
                return {
                  ...injectData.getEngineApis(),
                  MemoRenderer: {
                    renderer: null,
                    MemoLoopItem: (props: any) => {
                      const item = props[props.itemKey] ?? props?.item;
                      const i = props[props.indexKey] ?? props?.i;
                      return (
                        <>
                          <View
                            name={'内容容器'}
                            basicStatus={1}
                            backgroundType={{
                              type: 'cleanColor',
                              color: '#FFFFFF',
                            }}
                            $$componentItem={{
                              id: 'View_679303',
                              uid: 'View_679303',
                              type: 'View',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              padding: '1%',
                              width: '100%',
                              borderRadius: '8px 8px 8px 8px',
                            }}
                            ref={(r: any) => (refs['View_679303'] = r)}
                            {...injectData}
                          >
                            <View
                              name={'普通容器43'}
                              basicStatus={1}
                              backgroundType={{
                                type: 'cleanColor',
                                color: '#FFFFFF',
                              }}
                              $$componentItem={{
                                id: 'View_4920784',
                                uid: 'View_4920784',
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
                                flex: 18,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                              }}
                              ref={(r: any) => (refs['View_4920784'] = r)}
                              {...injectData}
                            >
                              <Img
                                name={'图片'}
                                srcType={'fileCode'}
                                basicStatus={item?.gender === '女' ? 1 : 2}
                                alt={'图片'}
                                fileCode={'PIC_781237'}
                                $$componentItem={{
                                  id: 'Img_716987',
                                  uid: 'Img_716987',
                                  type: 'Img',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  width: '19%',
                                  height: 'fit-content',
                                  marginRight: '7.7%',
                                }}
                                ref={(r: any) => (refs['Img_716987'] = r)}
                                {...injectData}
                              />
                              <Img
                                name={'图片'}
                                srcType={'fileCode'}
                                basicStatus={item?.gender === '男' ? 1 : 2}
                                alt={'图片'}
                                fileCode={'PIC_845431'}
                                $$componentItem={{
                                  id: 'Img_151257',
                                  uid: 'Img_151257',
                                  type: 'Img',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  width: '19%',
                                  height: 'fit-content',
                                  marginRight: '7.7%',
                                }}
                                ref={(r: any) => (refs['Img_151257'] = r)}
                                {...injectData}
                              />
                              <View
                                name={'普通容器50'}
                                basicStatus={1}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: '#FFFFFF',
                                }}
                                $$componentItem={{
                                  id: 'View_767456',
                                  uid: 'View_767456',
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
                                  width: '100%',
                                }}
                                ref={(r: any) => (refs['View_767456'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  basicStatus={1}
                                  content={item?.name}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_671542',
                                    uid: 'Text_671542',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: '0.766vw',
                                    lineHeight: '24px',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    fontWeight: 500,
                                    whiteSpace: 'nowrap',
                                  }}
                                  ref={(r: any) => (refs['Text_671542'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'文本'}
                                  basicStatus={1}
                                  content={item?.jobNumber}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_35846375',
                                    uid: 'Text_35846375',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: '0.666vw',
                                    lineHeight: '24px',
                                    color: '#64677A',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                  }}
                                  ref={(r: any) => (refs['Text_35846375'] = r)}
                                  {...injectData}
                                />
                              </View>
                            </View>
                            <View
                              name={'普通容器44'}
                              basicStatus={1}
                              backgroundType={{
                                type: 'cleanColor',
                                color: '#FFFFFF',
                              }}
                              $$componentItem={{
                                id: 'View_693963',
                                uid: 'View_693963',
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
                                width: '100%',
                                flex: 11,
                                justifyContent: 'center',
                              }}
                              ref={(r: any) => (refs['View_693963'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={'性别'}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_255857',
                                  uid: 'Text_255857',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.766vw',
                                  lineHeight: '24px',
                                  color: '#64677A',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_255857'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={item?.gender}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_305166',
                                  uid: 'Text_305166',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.666vw',
                                  lineHeight: '24px',
                                  color: '#1c242e',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_305166'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'普通容器45'}
                              basicStatus={1}
                              backgroundType={{
                                type: 'cleanColor',
                                color: '#FFFFFF',
                              }}
                              $$componentItem={{
                                id: 'View_6223945',
                                uid: 'View_6223945',
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
                                width: '100%',
                                flex: 15,
                                justifyContent: 'center',
                              }}
                              ref={(r: any) => (refs['View_6223945'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={'入职时间'}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_580928',
                                  uid: 'Text_580928',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.766vw',
                                  lineHeight: '24px',
                                  color: '#64677A',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_580928'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={item?.createDate}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_974628',
                                  uid: 'Text_974628',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.666vw',
                                  lineHeight: '24px',
                                  color: '#1c242e',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_974628'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'普通容器46'}
                              basicStatus={1}
                              backgroundType={{
                                type: 'cleanColor',
                                color: '#FFFFFF',
                              }}
                              $$componentItem={{
                                id: 'View_668404',
                                uid: 'View_668404',
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
                                width: '100%',
                                flex: 13,
                                justifyContent: 'center',
                              }}
                              ref={(r: any) => (refs['View_668404'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={'岗位'}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_10221768',
                                  uid: 'Text_10221768',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.766vw',
                                  lineHeight: '24px',
                                  color: '#64677A',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_10221768'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={item?.title}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_7933993',
                                  uid: 'Text_7933993',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.666vw',
                                  lineHeight: '24px',
                                  color: '#1c242e',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_7933993'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'普通容器47'}
                              basicStatus={1}
                              backgroundType={{
                                type: 'cleanColor',
                                color: '#FFFFFF',
                              }}
                              $$componentItem={{
                                id: 'View_327997',
                                uid: 'View_327997',
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
                                width: '100%',
                                flex: 17,
                                justifyContent: 'center',
                              }}
                              ref={(r: any) => (refs['View_327997'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={'毕业院校'}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_994110033',
                                  uid: 'Text_994110033',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.766vw',
                                  lineHeight: '24px',
                                  color: '#64677A',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_994110033'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={item?.graSchool}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_441243',
                                  uid: 'Text_441243',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.666vw',
                                  lineHeight: '24px',
                                  color: '#1c242e',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_441243'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'普通容器48'}
                              basicStatus={1}
                              backgroundType={{
                                type: 'cleanColor',
                                color: '#FFFFFF',
                              }}
                              $$componentItem={{
                                id: 'View_248742',
                                uid: 'View_248742',
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
                                width: '100%',
                                flex: 13,
                                justifyContent: 'center',
                              }}
                              ref={(r: any) => (refs['View_248742'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'文本'}
                                basicStatus={1}
                                content={'任务进度'}
                                textType={'span'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_557697',
                                  uid: 'Text_557697',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: '0.766vw',
                                  lineHeight: '24px',
                                  color: '#64677A',
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_557697'] = r)}
                                {...injectData}
                              />
                              <Progress
                                name={'进度条'}
                                basicStatus={1}
                                type={'line'}
                                placement={'horizontal'}
                                width={132}
                                percent={+item?.taskProgress}
                                strokeWidth={10}
                                strokeColor={
                                  "   $  { '0%': '#7BF0CD', '100%': '#4DD3AB'   }$"
                                }
                                trailColor={'rgba(28,36,46,0.04)'}
                                showTitle={false}
                                title={'进度条'}
                                color={'#1C242E'}
                                fontSize={'14px'}
                                lineHeight={'22px'}
                                fontWeight={'400'}
                                showInfo={true}
                                valueColor={'rgba(28,36,46,0.65)'}
                                valueFontSize={'14px'}
                                valueLineHeight={'22px'}
                                valueFontWeight={'400'}
                                extendProps={{}}
                                $$componentItem={{
                                  id: 'Progress_728775',
                                  uid: 'Progress_728775',
                                  type: 'Progress',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                ref={(r: any) => (refs['Progress_728775'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'普通容器49'}
                              basicStatus={1}
                              backgroundType={{
                                type: 'cleanColor',
                                color: '#FFFFFF',
                              }}
                              $$componentItem={{
                                id: 'View_09648',
                                uid: 'View_09648',
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
                                width: '100%',
                                flex: 12,
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                              }}
                              ref={(r: any) => (refs['View_09648'] = r)}
                              {...injectData}
                            >
                              <Button
                                name={'按钮'}
                                basicStatus={1}
                                classification={'default'}
                                autoProcessFlow={false}
                                flowProcessResult={'common'}
                                iconPosition={'left'}
                                ghost={false}
                                block={false}
                                size={'default'}
                                type={'default'}
                                btnIcon={'none'}
                                hasIcon={false}
                                shape={'default'}
                                loading={false}
                                btnText={'详 情'}
                                $$componentItem={{
                                  id: 'Button_572132',
                                  uid: 'Button_572132',
                                  type: 'Button',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'center',
                                  width: '45%',
                                  fontSize: '0.683vw',
                                  padding: '9%0',
                                  height: 'fit-content',
                                }}
                                onClick={(e: any) => {
                                  const eventDatahistory4: any = [
                                    {
                                      type: 'history',
                                      dataId: 170375040685026900,
                                      options: {
                                        compId: 'history',
                                        compName: 'system',
                                        id: '370716',
                                        pageJsonId: '16482',
                                        type: 'replace',
                                        pathname: '/msceshi7959',
                                        selectedType: 'page',
                                        pageId: '1056845381692231680',
                                        modalPath: '/msceshi7959',
                                        paramsObj: {
                                          jobNumber: '$item.jobNumber$',
                                        },
                                        paramsObjKeyValueMap: {
                                          jobNumber: '$item.jobNumber$',
                                        },
                                      },
                                      path: [170375035170652640],
                                      line_number: 1,
                                    },
                                  ];
                                  eventDatahistory4.params =
                                    [
                                      {
                                        title: '事件对象',
                                        value: '$e$',
                                        name: 'e',
                                      },
                                    ] || [];
                                  CMDGenerator(
                                    eventDatahistory4,
                                    { e },
                                    'history',
                                    {
                                      id: 'history',
                                      name: 'history',
                                      type: 'history',
                                      platform: 'pc',
                                    },
                                  );
                                }}
                                ref={(r: any) => (refs['Button_572132'] = r)}
                                {...injectData}
                              />
                            </View>
                          </View>
                        </>
                      );
                    },
                  },
                };
              }}
            />
          </View>
          <Pagination
            name={'分页'}
            basicStatus={1}
            size={'small'}
            pageSize={data?.pageData?.pageData?.pageSize}
            current={data?.pageData?.pageData?.pageNum}
            showTotal={true}
            simple={false}
            showSizeChanger={true}
            showQuickJumper={true}
            total={data?.queryAllInternDataList?.total}
            pageSizeOptions={'[5,10,20]'}
            $$componentItem={{
              id: 'Pagination_752968',
              uid: 'Pagination_752968',
              type: 'Pagination',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '5px 5px 5px 5px', marginLeft: 'auto' }}
            onPageChange={(page: any, pageSize: any) => {
              const eventDatasetDataSource3: any = [
                {
                  type: 'setDataSource',
                  dataId: 170374971601394850,
                  options: {
                    compId: 'setDataSource',
                    compName: 'system',
                    id: '241419',
                    pageJsonId: '16482',
                    dataSourceId: 170374494013371400,
                    dataSourceName: 'pageData',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        attrId: '819572',
                        code: 'chartData',
                        name: '图表',
                        type: 'objectArray',
                        initialData: { type: 'static' },
                        showInput: true,
                        children: [
                          {
                            attrId: '599432',
                            code: 'value',
                            name: '值',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            parentCode: '819572',
                            parentKey: '819572',
                            _codePath: ['chartData', 'value'],
                            _idpath: ['819572', '599432'],
                          },
                          {
                            attrId: '71938',
                            code: 'name',
                            name: '名称',
                            type: 'string',
                            initialData: { type: 'static' },
                            showInput: false,
                            parentCode: '819572',
                            parentKey: '819572',
                            _codePath: ['chartData', 'name'],
                            _idpath: ['819572', '71938'],
                          },
                        ],
                        _codePath: ['chartData'],
                        _idpath: ['819572'],
                      },
                      {
                        attrId: '42414',
                        code: 'selectKey',
                        name: '选中项',
                        type: 'string',
                        initialData: { type: 'static', value: "$''$" },
                        showInput: true,
                        _codePath: ['selectKey'],
                        _idpath: ['42414'],
                      },
                      {
                        attrId: '640048',
                        code: 'pageData',
                        name: '分页数据',
                        type: 'object',
                        initialData: { type: 'static' },
                        showInput: true,
                        children: [
                          {
                            attrId: '865921',
                            code: 'pageSize',
                            name: '页数',
                            type: 'string',
                            initialData: { type: 'static', value: '10' },
                            showInput: true,
                            parentKey: '640048',
                            value: {
                              type: ['context', '$pageSize$'],
                              code: '',
                            },
                            _codePath: ['pageData', 'pageSize'],
                            _idpath: ['640048', '865921'],
                          },
                          {
                            attrId: '516722',
                            code: 'pageNum',
                            name: '页码',
                            type: 'string',
                            initialData: { type: 'static', value: '1' },
                            showInput: true,
                            parentKey: '640048',
                            value: { type: ['context', '$page$'], code: '' },
                            _codePath: ['pageData', 'pageNum'],
                            _idpath: ['640048', '516722'],
                          },
                        ],
                        _codePath: ['pageData'],
                        _idpath: ['640048'],
                      },
                    ],
                    operateType: 1,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  path: [170374942712656960],
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDatasetDataSource3.params =
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
                eventDatasetDataSource3,
                { page, pageSize },
                'setDataSource',
                {
                  id: 'setDataSource',
                  name: 'setDataSource',
                  type: 'setDataSource',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => (refs['Pagination_752968'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Guanliyuanshouye0496$$Page, {
  pageId: '1056843976424230912',
  hasLogin: true,
  dataSource: [
    {
      name: 'queryManagerStagingData',
      source: 'service',
      type: 'object',
      requestType: 'object',
      filterParams: [],
      outParams: [
        {
          attrId: '460891',
          code: 'intern_total_num',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '523445348528',
        },
        {
          attrId: '471313',
          code: 'total_task_num',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '953436069006',
        },
        {
          attrId: '729654',
          code: 'task_finished_rate',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '377450468734',
        },
        {
          attrId: '408982',
          code: 'intern_finished_num',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '049920565197',
        },
        {
          attrId: '626607',
          code: 'intern_finished_rate',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '8154851177934',
        },
        {
          attrId: '9148515',
          code: 'intern_unfinish_num',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '4165560428',
        },
        {
          attrId: '086085',
          code: 'intern_unfinish_rate',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '087987662987',
        },
        {
          attrId: '782064',
          code: 'action_number',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '9411841352624',
        },
      ],
      config: {
        hooks: [],
        isInit: true,
        options: {
          service: {
            creatorId: '20223',
            updatorId: '20223',
            createdTime: '2023-12-27 14:28:24',
            updatedTime: '2023-12-27 15:32:59',
            statusTime: '2023-12-27 15:32:59',
            serviceVersionId: '1057183365414842368',
            appId: '1056454276662820864',
            serviceParamId: '1057183365419036676',
            serviceId: '1057183365419036675',
            versionCode: '1.0',
            mockState: 'F',
            catalogItemId: '-1',
            serviceName: '管理员工作台标题数据',
            serviceCode: 'queryManagerStagingData',
            serviceType: 'orchestration',
            fileInputEnabled: 'F',
            api: '/app/orchestration/run',
            _source: 'std',
            _serviceId: '1057183365414842368',
            _serviceTitle: '管理员工作台标题数据: queryManagerStagingData',
            _serviceType: 'orchestration',
            _sourceName: '管理员工作台标题数据',
            statusCd: '00A',
            serviceState: 'I',
            serviceLogicJson:
              '{"id":1057183365419036675,"code":"queryManagerStagingData","name":"管理员工作台标题数据","versionId":1057183365414842368,"version":"1.0","appId":1056454276662820864,"steps":[{"type":"input","next":"callInternalService-sql-4906","name":"服务入参","code":"input","parameters":[]},{"type":"callInternalService","next":"callInternalService-sql-973","name":"SQL查询服务","code":"callInternalService-sql-4906","serviceName":"查询实习生总数","serviceCode":"queryInternNum","serviceType":"2","parameters":[]},{"type":"callInternalService","next":"callInternalService-sql-9438","name":"所有任务数量","code":"callInternalService-sql-973","serviceName":"查询任务数","serviceCode":"queryTaskData","serviceType":"2","parameters":[{"name":"intern_id","description":"intern_id","type":"property","dataType":"1400","required":false},{"name":"state","description":"state","type":"property","dataType":"1200","required":false}]},{"type":"callInternalService","next":"script4248","name":"已打卡数量","code":"callInternalService-sql-9438","serviceName":"查询任务数","serviceCode":"queryTaskData","serviceType":"2","parameters":[{"name":"intern_id","description":"intern_id","type":"property","dataType":"1400","required":false},{"name":"state","description":"state","type":"property","dataType":"1200","required":false,"defaultValue":"已打卡","value":"已打卡"}]},{"type":"script","next":"callInternalService-sql-7639","name":"代码块","code":"script4248","scriptType":"groovy","scriptContent":"class GroovyExample {\\n  def invoke(Long completedCount, Long allCount) {\\n\\tdef completionRate = (completedCount as float) / allCount * 100\\n    def formattedRate = String.format(\\"%.2f\\", completionRate)\\n  \\treturn [\'completionRate\': formattedRate]\\n  }\\n}","parameters":[{"name":"completedCount","dataType":"1400","value":"$.step.callInternalService-sql-9438.totalNum"},{"name":"allCount","dataType":"1400","value":"$.step.callInternalService-sql-973.totalNum"}]},{"type":"callInternalService","next":"callInternalService-sql-3336","name":"已完成的实习生数量","code":"callInternalService-sql-7639","serviceName":"查询已完成全量任务的实习生数量","serviceCode":"getFinishedInternNumbers","serviceType":"2","parameters":[]},{"type":"callInternalService","next":"script1582","name":"未完成的实习生数量","code":"callInternalService-sql-3336","serviceName":"查询未全量完成任务的实习生数量","serviceCode":"getUnFinishedInternNumbers","serviceType":"2","parameters":[]},{"type":"script","next":"callInternalService-sql-1895","name":"计算完成率","code":"script1582","scriptType":"groovy","scriptContent":"class GroovyExample {\\n  def invoke(Long finishedCount, Long unfinishedCount, Long allCount) {\\n    def finishRate = (finishedCount as float) / allCount * 100\\n    def unfinishRate = (unfinishedCount as float) / allCount * 100\\n    return [\'finishRate\':finishRate,\'unfinishRate\':unfinishRate]\\n    //return [\'rate\': {finishRate:finishRate,unfinishRate:unfinishRate}]\\n  }\\n}","parameters":[{"name":"finishedCount","dataType":"1400","value":"$.step.callInternalService-sql-7639.completedInterns"},{"name":"unfinishedCount","dataType":"1400","value":"$.step.callInternalService-sql-3336.internsWithIncompleteTasks"},{"name":"allCount","dataType":"1400","value":"$.step.callInternalService-sql-4906.internNum"}]},{"type":"callInternalService","next":"output","name":"查询任务数量","code":"callInternalService-sql-1895","serviceName":"查询执行动作数量","serviceCode":"queryActionTotalNum","serviceType":"2","parameters":[]},{"type":"output","name":"服务出参","code":"output","parameters":[{"name":"intern_total_num","description":"新增节点","dataType":"1200","required":false,"value":"$.step.callInternalService-sql-4906.internNum"},{"name":"total_task_num","description":"新增节点","dataType":"1200","required":false,"value":"$.step.callInternalService-sql-973.totalNum"},{"name":"task_finished_rate","description":"新增节点","dataType":"1200","required":false,"value":"$.step.script4248.completionRate"},{"name":"intern_finished_num","description":"新增节点","dataType":"1200","required":false,"value":"$.step.callInternalService-sql-7639.completedInterns"},{"name":"intern_finished_rate","description":"新增节点","dataType":"1200","required":false,"value":"$.step.script1582.finishRate"},{"name":"intern_unfinish_num","description":"新增节点","dataType":"1200","required":false,"value":"$.step.callInternalService-sql-3336.internsWithIncompleteTasks"},{"name":"intern_unfinish_rate","description":"新增节点","dataType":"1200","required":false,"value":"$.step.script1582.unfinishRate"},{"name":"action_number","description":"新增节点","dataType":"1200","required":false,"value":"$.step.callInternalService-sql-1895.actionNumber"}]}],"isLogged":"F","mockState":"F","fileInputEnabled":false,"fileOutputEnabled":false}',
            configState: 1,
            serviceLayer: 'request',
            isLogged: 'F',
            serviceParam: {
              statusCd: '00A',
              creatorId: '20223',
              updatorId: '20223',
              createdTime: '2023-12-27 14:28:24',
              updatedTime: '2023-12-27 15:32:59',
              statusTime: '2023-12-27 15:32:59',
              remark: null,
              tenantCode: null,
              serviceParamId: '1057183365419036676',
              requestJson:
                '[{"serviceAttrId":"263412665357","key":"1","code":"root","name":"根节点","attrType":"object","mustFlag":"F","exampleValue":"","defaultValue":"","children":[]}]',
              responseJson:
                '[{"serviceAttrId":"233665744502","key":"1","code":"root","name":"根节点","attrType":"object","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"serviceAttrId":"523445348528","key":"1-0","parentKey":"1","code":"intern_total_num","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":"$.step.callInternalService-sql-4906.internNum","value":"$.step.callInternalService-sql-4906.internNum"},{"serviceAttrId":"953436069006","key":"1-1","parentKey":"1","code":"total_task_num","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":"$.step.callInternalService-sql-973.totalNum","value":"$.step.callInternalService-sql-973.totalNum"},{"serviceAttrId":"377450468734","key":"1-2","parentKey":"1","code":"task_finished_rate","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":"$.step.script4248.completionRate","value":"$.step.script4248.completionRate"},{"serviceAttrId":"049920565197","key":"1-3","parentKey":"1","code":"intern_finished_num","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":"$.step.callInternalService-sql-7639.completedInterns","value":"$.step.callInternalService-sql-7639.completedInterns"},{"serviceAttrId":"8154851177934","key":"1-4","parentKey":"1","code":"intern_finished_rate","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":"$.step.script1582.finishRate","value":"$.step.script1582.finishRate"},{"serviceAttrId":"4165560428","key":"1-5","parentKey":"1","code":"intern_unfinish_num","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":"$.step.callInternalService-sql-3336.internsWithIncompleteTasks","value":"$.step.callInternalService-sql-3336.internsWithIncompleteTasks"},{"serviceAttrId":"087987662987","key":"1-6","parentKey":"1","code":"intern_unfinish_rate","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":"$.step.script1582.unfinishRate","value":"$.step.script1582.unfinishRate"},{"serviceAttrId":"9411841352624","key":"1-7","parentKey":"1","code":"action_number","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":"$.step.callInternalService-sql-1895.actionNumber","value":"$.step.callInternalService-sql-1895.actionNumber"}]}]',
              appId: '1056454276662820864',
              request: {
                serviceAttrId: '263412665357',
                key: '1',
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                exampleValue: '',
                defaultValue: '',
                children: [],
              },
              response: {
                serviceAttrId: '233665744502',
                key: '1',
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                exampleValue: '',
                defaultValue: '',
                children: [
                  {
                    serviceAttrId: '523445348528',
                    key: '1-0',
                    parentKey: '1',
                    code: 'intern_total_num',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue:
                      '$.step.callInternalService-sql-4906.internNum',
                    value: '$.step.callInternalService-sql-4906.internNum',
                  },
                  {
                    serviceAttrId: '953436069006',
                    key: '1-1',
                    parentKey: '1',
                    code: 'total_task_num',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '$.step.callInternalService-sql-973.totalNum',
                    value: '$.step.callInternalService-sql-973.totalNum',
                  },
                  {
                    serviceAttrId: '377450468734',
                    key: '1-2',
                    parentKey: '1',
                    code: 'task_finished_rate',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '$.step.script4248.completionRate',
                    value: '$.step.script4248.completionRate',
                  },
                  {
                    serviceAttrId: '049920565197',
                    key: '1-3',
                    parentKey: '1',
                    code: 'intern_finished_num',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue:
                      '$.step.callInternalService-sql-7639.completedInterns',
                    value:
                      '$.step.callInternalService-sql-7639.completedInterns',
                  },
                  {
                    serviceAttrId: '8154851177934',
                    key: '1-4',
                    parentKey: '1',
                    code: 'intern_finished_rate',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '$.step.script1582.finishRate',
                    value: '$.step.script1582.finishRate',
                  },
                  {
                    serviceAttrId: '4165560428',
                    key: '1-5',
                    parentKey: '1',
                    code: 'intern_unfinish_num',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue:
                      '$.step.callInternalService-sql-3336.internsWithIncompleteTasks',
                    value:
                      '$.step.callInternalService-sql-3336.internsWithIncompleteTasks',
                  },
                  {
                    serviceAttrId: '087987662987',
                    key: '1-6',
                    parentKey: '1',
                    code: 'intern_unfinish_rate',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '$.step.script1582.unfinishRate',
                    value: '$.step.script1582.unfinishRate',
                  },
                  {
                    serviceAttrId: '9411841352624',
                    key: '1-7',
                    parentKey: '1',
                    code: 'action_number',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue:
                      '$.step.callInternalService-sql-1895.actionNumber',
                    value: '$.step.callInternalService-sql-1895.actionNumber',
                  },
                ],
              },
              variables: [],
              originRequestObj: [
                {
                  serviceAttrId: '263412665357',
                  key: '1',
                  code: 'root',
                  name: '根节点',
                  attrType: 'object',
                  mustFlag: 'F',
                  exampleValue: '',
                  defaultValue: '',
                  children: [],
                  _id: 'root',
                  compType: 'Input',
                },
              ],
              originResponseObj: [
                {
                  serviceAttrId: '233665744502',
                  key: '1',
                  code: 'root',
                  name: '根节点',
                  attrType: 'object',
                  mustFlag: 'F',
                  exampleValue: '',
                  defaultValue: '',
                  children: [
                    {
                      serviceAttrId: '523445348528',
                      key: '1-0',
                      parentKey: '1',
                      code: 'intern_total_num',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue:
                        '$.step.callInternalService-sql-4906.internNum',
                      value: '$.step.callInternalService-sql-4906.internNum',
                      _type: '1200',
                      _id: 'root.intern_total_num',
                    },
                    {
                      serviceAttrId: '953436069006',
                      key: '1-1',
                      parentKey: '1',
                      code: 'total_task_num',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue:
                        '$.step.callInternalService-sql-973.totalNum',
                      value: '$.step.callInternalService-sql-973.totalNum',
                      _type: '1200',
                      _id: 'root.total_task_num',
                    },
                    {
                      serviceAttrId: '377450468734',
                      key: '1-2',
                      parentKey: '1',
                      code: 'task_finished_rate',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '$.step.script4248.completionRate',
                      value: '$.step.script4248.completionRate',
                      _type: '1200',
                      _id: 'root.task_finished_rate',
                    },
                    {
                      serviceAttrId: '049920565197',
                      key: '1-3',
                      parentKey: '1',
                      code: 'intern_finished_num',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue:
                        '$.step.callInternalService-sql-7639.completedInterns',
                      value:
                        '$.step.callInternalService-sql-7639.completedInterns',
                      _type: '1200',
                      _id: 'root.intern_finished_num',
                    },
                    {
                      serviceAttrId: '8154851177934',
                      key: '1-4',
                      parentKey: '1',
                      code: 'intern_finished_rate',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '$.step.script1582.finishRate',
                      value: '$.step.script1582.finishRate',
                      _type: '1200',
                      _id: 'root.intern_finished_rate',
                    },
                    {
                      serviceAttrId: '4165560428',
                      key: '1-5',
                      parentKey: '1',
                      code: 'intern_unfinish_num',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue:
                        '$.step.callInternalService-sql-3336.internsWithIncompleteTasks',
                      value:
                        '$.step.callInternalService-sql-3336.internsWithIncompleteTasks',
                      _type: '1200',
                      _id: 'root.intern_unfinish_num',
                    },
                    {
                      serviceAttrId: '087987662987',
                      key: '1-6',
                      parentKey: '1',
                      code: 'intern_unfinish_rate',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '$.step.script1582.unfinishRate',
                      value: '$.step.script1582.unfinishRate',
                      _type: '1200',
                      _id: 'root.intern_unfinish_rate',
                    },
                    {
                      serviceAttrId: '9411841352624',
                      key: '1-7',
                      parentKey: '1',
                      code: 'action_number',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue:
                        '$.step.callInternalService-sql-1895.actionNumber',
                      value: '$.step.callInternalService-sql-1895.actionNumber',
                      _type: '1200',
                      _id: 'root.action_number',
                    },
                  ],
                  _id: 'root',
                },
              ],
            },
            serviceNodeList: [
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 14:28:24',
                updatedTime: '2023-12-27 14:28:24',
                statusTime: '2023-12-27 14:28:24',
                remark: null,
                tenantCode: null,
                nodeId: '1057183365414842369',
                parNodeId: '-1',
                nodeCode: 'input',
                nodeName: '服务入参',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'input',
                nodeJson: null,
                nodeLevelSort: 1,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 14:28:24',
                updatedTime: '2023-12-27 14:28:24',
                statusTime: '2023-12-27 14:28:24',
                remark: null,
                tenantCode: null,
                nodeId: '1057183365419036672',
                parNodeId: '-1',
                nodeCode: 'callInternalService-sql-4906',
                nodeName: 'SQL查询服务',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"subType":"sql","serviceCode":"queryInternNum","serviceName":"查询实习生总数","serviceType":"2","parameters":[],"outData":[{"key":"1","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"internNum","nickCode":"intern_num","name":"intern_num","attrType":"field","type":"1200","dbLeftCode":"internNum","dbRightCode":"intern_num","serviceAttrId":"527288777116","path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"serviceAttrId":"175431760696","attrType":"object","name":"根节点","code":"root","path":[]}]}',
                nodeLevelSort: 2,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 14:28:24',
                updatedTime: '2023-12-27 14:34:25',
                statusTime: '2023-12-27 14:34:25',
                remark: null,
                tenantCode: null,
                nodeId: '1057183365419036673',
                parNodeId: '-1',
                nodeCode: 'callInternalService-sql-973',
                nodeName: '所有任务数量',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"subType":"sql","serviceCode":"queryTaskData","serviceName":"查询任务数","serviceType":"2","parameters":[{"name":"intern_id","type":"property","dataType":"1400","required":false,"children":null,"description":"intern_id","key":"1-0","serviceAttrId":"671712687608"},{"name":"state","type":"property","dataType":"1200","required":false,"children":null,"description":"state","key":"1-1","serviceAttrId":"758164804993"}],"outData":[{"key":"1","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"totalNum","nickCode":"total_num","name":"total_num","attrType":"field","type":"1200","dbLeftCode":"totalNum","dbRightCode":"total_num","serviceAttrId":"100722499243","path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"serviceAttrId":"252385900393","attrType":"object","name":"根节点","code":"root","path":[]}]}',
                nodeLevelSort: 3,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 14:34:25',
                updatedTime: '2023-12-27 14:34:25',
                statusTime: '2023-12-27 14:34:25',
                remark: null,
                tenantCode: null,
                nodeId: '1057184878551953408',
                parNodeId: '-1',
                nodeCode: 'callInternalService-sql-9438',
                nodeName: '已打卡数量',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"subType":"sql","serviceCode":"queryTaskData","serviceName":"查询任务数","serviceType":"2","parameters":[{"name":"intern_id","type":"property","dataType":"1400","required":false,"children":null,"description":"intern_id","key":"1-0","serviceAttrId":"671712687608"},{"name":"state","type":"property","dataType":"1200","required":false,"children":null,"description":"state","key":"1-1","serviceAttrId":"758164804993","defaultValue":"已打卡","value":"已打卡"}],"outData":[{"key":"1","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"totalNum","nickCode":"total_num","name":"total_num","attrType":"field","type":"1200","dbLeftCode":"totalNum","dbRightCode":"total_num","serviceAttrId":"100722499243","path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"serviceAttrId":"252385900393","attrType":"object","name":"根节点","code":"root","path":[]}]}',
                nodeLevelSort: 4,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 14:34:25',
                updatedTime: '2023-12-27 15:29:22',
                statusTime: '2023-12-27 15:29:22',
                remark: null,
                tenantCode: null,
                nodeId: '1057184878551953409',
                parNodeId: '-1',
                nodeCode: 'script4248',
                nodeName: '代码块',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'script',
                nodeJson:
                  '{"outData":[{"key":"script1","name":"root","type":"object","mustFlag":"F","example":"","default":"","remark":"根节点","children":[{"key":"script1-0","mustFlag":"F","exampleValue":"","defaultValue":"","serviceAttrId":"709950038862","parentKey":"script1","parentType":"object","path":["script1"],"type":"field","attrValueDataType":"1200","remark":"任务完成率","name":"completionRate"}]}],"scriptType":"groovy","scriptContent":"class GroovyExample {\\n  def invoke(Long completedCount, Long allCount) {\\n\\tdef completionRate = (completedCount as float) / allCount * 100\\n    def formattedRate = String.format(\\"%.2f\\", completionRate)\\n  \\treturn [\'completionRate\': formattedRate]\\n  }\\n}","parameters":[{"desc":"completedCount","name":"completedCount","dataType":"1400","value":"$.step.callInternalService-sql-9438.totalNum","key":"key_0302531345"},{"desc":"allCount","name":"allCount","dataType":"1400","value":"$.step.callInternalService-sql-973.totalNum","key":"key_8137538007"}]}',
                nodeLevelSort: 5,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 15:26:44',
                updatedTime: '2023-12-27 15:26:44',
                statusTime: '2023-12-27 15:26:44',
                remark: null,
                tenantCode: null,
                nodeId: '1057198045019652096',
                parNodeId: '-1',
                nodeCode: 'callInternalService-sql-7639',
                nodeName: '已完成的实习生数量',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"subType":"sql","serviceCode":"getFinishedInternNumbers","serviceName":"查询已完成全量任务的实习生数量","serviceType":"2","parameters":[],"outData":[{"key":"1","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"completedInterns","nickCode":"completed_interns","name":"completed_interns","attrType":"field","type":"1200","dbLeftCode":"completedInterns","dbRightCode":"completed_interns","serviceAttrId":"517358369115","path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"serviceAttrId":"9910803036966","attrType":"object","name":"根节点","code":"root","path":[]}]}',
                nodeLevelSort: 6,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 15:26:44',
                updatedTime: '2023-12-27 15:26:44',
                statusTime: '2023-12-27 15:26:44',
                remark: null,
                tenantCode: null,
                nodeId: '1057198045019652097',
                parNodeId: '-1',
                nodeCode: 'callInternalService-sql-3336',
                nodeName: '未完成的实习生数量',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"subType":"sql","serviceCode":"getUnFinishedInternNumbers","serviceName":"查询未全量完成任务的实习生数量","serviceType":"2","parameters":[],"outData":[{"key":"1","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"internsWithIncompleteTasks","nickCode":"interns_with_incomplete_tasks","name":"interns_with_incomplete_tasks","attrType":"field","type":"1200","dbLeftCode":"internsWithIncompleteTasks","dbRightCode":"interns_with_incomplete_tasks","serviceAttrId":"122213121486","path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"serviceAttrId":"9492927086688","attrType":"object","name":"根节点","code":"root","path":[]}]}',
                nodeLevelSort: 7,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 15:26:44',
                updatedTime: '2023-12-27 15:27:57',
                statusTime: '2023-12-27 15:27:57',
                remark: null,
                tenantCode: null,
                nodeId: '1057198045019652098',
                parNodeId: '-1',
                nodeCode: 'script1582',
                nodeName: '计算完成率',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'script',
                nodeJson:
                  '{"outData":[{"key":"script1","name":"root","type":"object","mustFlag":"F","example":"","default":"","remark":"根节点","children":[{"key":"script1-0","mustFlag":"F","exampleValue":"","defaultValue":"","serviceAttrId":"0874889347691","parentKey":"script1","parentType":"object","path":["script1"],"type":"field","attrValueDataType":"1200","remark":"新增节点","name":"finishRate"},{"key":"script1-1","mustFlag":"F","exampleValue":"","defaultValue":"","serviceAttrId":"783763222859","parentKey":"script1","parentType":"object","path":["script1"],"type":"field","attrValueDataType":"1200","remark":"新增节点","name":"unfinishRate"}]}],"scriptType":"groovy","scriptContent":"class GroovyExample {\\n  def invoke(Long finishedCount, Long unfinishedCount, Long allCount) {\\n    def finishRate = (finishedCount as float) / allCount * 100\\n    def unfinishRate = (unfinishedCount as float) / allCount * 100\\n    return [\'finishRate\':finishRate,\'unfinishRate\':unfinishRate]\\n    //return [\'rate\': {finishRate:finishRate,unfinishRate:unfinishRate}]\\n  }\\n}","parameters":[{"desc":"finishedCount","name":"finishedCount","dataType":"1400","value":"$.step.callInternalService-sql-7639.completedInterns","key":"key_84254692535"},{"desc":"unfinishedCount","name":"unfinishedCount","dataType":"1400","value":"$.step.callInternalService-sql-3336.internsWithIncompleteTasks","key":"key_0860653327"},{"desc":"allCount","name":"allCount","dataType":"1400","value":"$.step.callInternalService-sql-4906.internNum","key":"key_0234420198"}]}',
                nodeLevelSort: 8,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 15:32:59',
                updatedTime: '2023-12-27 15:32:59',
                statusTime: '2023-12-27 15:32:59',
                remark: null,
                tenantCode: null,
                nodeId: '1057199621201346560',
                parNodeId: '-1',
                nodeCode: 'callInternalService-sql-1895',
                nodeName: '查询任务数量',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"subType":"sql","serviceCode":"queryActionTotalNum","serviceName":"查询执行动作数量","serviceType":"2","parameters":[],"outData":[{"key":"1","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"actionNumber","nickCode":"action_number","name":"action_number","attrType":"field","type":"1200","dbLeftCode":"actionNumber","dbRightCode":"action_number","serviceAttrId":"073895534041","path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"serviceAttrId":"3047193423338","attrType":"object","name":"根节点","code":"root","path":[]}]}',
                nodeLevelSort: 9,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
              {
                statusCd: '00A',
                creatorId: '20223',
                updatorId: '20223',
                createdTime: '2023-12-27 14:28:24',
                updatedTime: '2023-12-27 15:32:59',
                statusTime: '2023-12-27 15:32:59',
                remark: null,
                tenantCode: null,
                nodeId: '1057183365419036674',
                parNodeId: '-1',
                nodeCode: 'output',
                nodeName: '服务出参',
                objType: null,
                objId: '1057183365414842368',
                nodeType: 'output',
                nodeJson:
                  '{"parameters":[{"name":"intern_total_num","value":"$.step.callInternalService-sql-4906.internNum","type":"property","dataType":"1200","required":false,"children":null,"description":"新增节点","key":"1-0","serviceAttrId":"523445348528"},{"name":"total_task_num","value":"$.step.callInternalService-sql-973.totalNum","type":"property","dataType":"1200","required":false,"children":null,"description":"新增节点","key":"1-1","serviceAttrId":"953436069006"},{"name":"task_finished_rate","value":"$.step.script4248.completionRate","type":"property","dataType":"1200","required":false,"children":null,"description":"新增节点","key":"1-2","serviceAttrId":"377450468734"},{"name":"intern_finished_num","value":"$.step.callInternalService-sql-7639.completedInterns","type":"property","dataType":"1200","required":false,"children":null,"description":"新增节点","key":"1-3","serviceAttrId":"049920565197"},{"name":"intern_finished_rate","value":"$.step.script1582.finishRate","type":"property","dataType":"1200","required":false,"children":null,"description":"新增节点","key":"1-4","serviceAttrId":"8154851177934"},{"name":"intern_unfinish_num","value":"$.step.callInternalService-sql-3336.internsWithIncompleteTasks","type":"property","dataType":"1200","required":false,"children":null,"description":"新增节点","key":"1-5","serviceAttrId":"4165560428"},{"name":"intern_unfinish_rate","value":"$.step.script1582.unfinishRate","type":"property","dataType":"1200","required":false,"children":null,"description":"新增节点","key":"1-6","serviceAttrId":"087987662987"},{"name":"action_number","value":"$.step.callInternalService-sql-1895.actionNumber","type":"property","dataType":"1200","required":false,"children":null,"description":"新增节点","key":"1-7","serviceAttrId":"9411841352624"}]}',
                nodeLevelSort: 10,
                appId: '1056454276662820864',
                relObjId: null,
                configState: 1,
                children: [],
                updateCount: null,
              },
            ],
            originRequestObj: [
              {
                serviceAttrId: '263412665357',
                key: '1',
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                exampleValue: '',
                defaultValue: '',
                children: [],
                _id: 'root',
                compType: 'Input',
              },
            ],
            requestType: 'object',
            originResponseObj: [
              {
                serviceAttrId: '233665744502',
                key: '1',
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                exampleValue: '',
                defaultValue: '',
                children: [
                  {
                    serviceAttrId: '523445348528',
                    key: '1-0',
                    parentKey: '1',
                    code: 'intern_total_num',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue:
                      '$.step.callInternalService-sql-4906.internNum',
                    value: '$.step.callInternalService-sql-4906.internNum',
                    _type: '1200',
                    _id: 'root.intern_total_num',
                  },
                  {
                    serviceAttrId: '953436069006',
                    key: '1-1',
                    parentKey: '1',
                    code: 'total_task_num',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '$.step.callInternalService-sql-973.totalNum',
                    value: '$.step.callInternalService-sql-973.totalNum',
                    _type: '1200',
                    _id: 'root.total_task_num',
                  },
                  {
                    serviceAttrId: '377450468734',
                    key: '1-2',
                    parentKey: '1',
                    code: 'task_finished_rate',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '$.step.script4248.completionRate',
                    value: '$.step.script4248.completionRate',
                    _type: '1200',
                    _id: 'root.task_finished_rate',
                  },
                  {
                    serviceAttrId: '049920565197',
                    key: '1-3',
                    parentKey: '1',
                    code: 'intern_finished_num',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue:
                      '$.step.callInternalService-sql-7639.completedInterns',
                    value:
                      '$.step.callInternalService-sql-7639.completedInterns',
                    _type: '1200',
                    _id: 'root.intern_finished_num',
                  },
                  {
                    serviceAttrId: '8154851177934',
                    key: '1-4',
                    parentKey: '1',
                    code: 'intern_finished_rate',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '$.step.script1582.finishRate',
                    value: '$.step.script1582.finishRate',
                    _type: '1200',
                    _id: 'root.intern_finished_rate',
                  },
                  {
                    serviceAttrId: '4165560428',
                    key: '1-5',
                    parentKey: '1',
                    code: 'intern_unfinish_num',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue:
                      '$.step.callInternalService-sql-3336.internsWithIncompleteTasks',
                    value:
                      '$.step.callInternalService-sql-3336.internsWithIncompleteTasks',
                    _type: '1200',
                    _id: 'root.intern_unfinish_num',
                  },
                  {
                    serviceAttrId: '087987662987',
                    key: '1-6',
                    parentKey: '1',
                    code: 'intern_unfinish_rate',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '$.step.script1582.unfinishRate',
                    value: '$.step.script1582.unfinishRate',
                    _type: '1200',
                    _id: 'root.intern_unfinish_rate',
                  },
                  {
                    serviceAttrId: '9411841352624',
                    key: '1-7',
                    parentKey: '1',
                    code: 'action_number',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue:
                      '$.step.callInternalService-sql-1895.actionNumber',
                    value: '$.step.callInternalService-sql-1895.actionNumber',
                    _type: '1200',
                    _id: 'root.action_number',
                  },
                ],
                _id: 'root',
              },
            ],
            responseType: 'object',
          },
          headers: [],
        },
      },
      sourceId: '1057183365414842368',
      serviceType: 'orchestration',
    },
    {
      name: 'pageData',
      source: 'custom',
      type: 'object',
      outParams: [
        {
          attrId: '819572',
          code: 'chartData',
          name: '图表',
          type: 'objectArray',
          initialData: { type: 'static' },
          showInput: true,
          children: [
            {
              attrId: '599432',
              code: 'value',
              name: '值',
              type: 'string',
              initialData: { type: 'static' },
              showInput: false,
              parentCode: '819572',
              parentKey: '819572',
            },
            {
              attrId: '71938',
              code: 'name',
              name: '名称',
              type: 'string',
              initialData: { type: 'static' },
              showInput: false,
              parentCode: '819572',
              parentKey: '819572',
            },
          ],
        },
        {
          attrId: '42414',
          code: 'selectKey',
          name: '选中项',
          type: 'string',
          initialData: { type: 'static', value: "$''$" },
          showInput: true,
        },
        {
          attrId: '640048',
          code: 'pageData',
          name: '分页数据',
          type: 'object',
          initialData: { type: 'static' },
          showInput: true,
          children: [
            {
              attrId: '865921',
              code: 'pageSize',
              name: '页数',
              type: 'string',
              initialData: { type: 'static', value: '10' },
              showInput: true,
              parentKey: '640048',
            },
            {
              attrId: '516722',
              code: 'pageNum',
              name: '页码',
              type: 'string',
              initialData: { type: 'static', value: '1' },
              showInput: true,
              parentKey: '640048',
            },
          ],
        },
      ],
    },
    {
      name: 'queryAllInternDataList',
      source: 'service',
      type: 'object',
      requestType: 'object',
      filterParams: [
        {
          attrId: '14655007',
          code: 'keyword',
          name: 'keyword',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '5398551727798',
        },
        {
          attrId: '1677',
          code: 'taskType',
          name: '是否完成任务',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '97717401474',
        },
        {
          attrId: '990731',
          code: 'pageNum',
          name: '页数',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '745623021667',
        },
        {
          attrId: '706881',
          code: 'pageSize',
          name: '每页数量',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '51862248894334',
        },
      ],
      outParams: [
        {
          attrId: '468298',
          code: 'total',
          name: '总数',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '111912847673',
        },
        {
          attrId: '587101869',
          code: 'list',
          name: '列表',
          type: 'objectArray',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '9692438742775',
          children: [
            {
              attrId: '948407',
              code: 'name',
              name: '实习生姓名',
              type: 'string',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '69703867595545',
            },
            {
              attrId: '1485037',
              code: 'jobNumber',
              name: ' 实习生工号',
              type: 'string',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '267906421043',
            },
            {
              attrId: '7289308',
              code: 'gender',
              name: '性别',
              type: 'string',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '7967875885893',
            },
            {
              attrId: '2446237',
              code: 'createDate',
              name: 'create_date',
              type: 'string',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '3769172959436',
            },
            {
              attrId: '91273',
              code: 'title',
              name: '职位',
              type: 'string',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '873684650516',
            },
            {
              attrId: '95417',
              code: 'graSchool',
              name: '毕业学校',
              type: 'string',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '096923611298',
            },
            {
              attrId: '180968',
              code: 'taskProgress',
              name: '任务进度',
              type: 'string',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '863759681309',
            },
          ],
        },
        {
          attrId: '4696469',
          code: 'pageNum',
          name: '页数',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '37744158374',
        },
        {
          attrId: '405821',
          code: 'pageSize',
          name: '每页数量',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '170280233881',
        },
        {
          attrId: '975994',
          code: 'size',
          name: '数量',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '8157485488907',
        },
        {
          attrId: '2479405',
          code: 'startRow',
          name: '起始页',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '7068418449557',
        },
        {
          attrId: '34787',
          code: 'endRow',
          name: '结束页',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '3915156429124',
        },
        {
          attrId: '6206456',
          code: 'pages',
          name: '当前页数',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '400369473281',
        },
        {
          attrId: '8342464',
          code: 'prePage',
          name: '上一页',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '4583934892568',
        },
        {
          attrId: '246633',
          code: 'nextPage',
          name: '下一页',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '667510915531',
        },
        {
          attrId: '0435334',
          code: 'hasPreviousPage',
          name: '是否前一页',
          type: 'boolean',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '029213966213',
        },
        {
          attrId: '7005433',
          code: 'hasNextPage',
          name: '是否下一页',
          type: 'boolean',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '391085880974',
        },
        {
          attrId: '140663',
          code: 'navigatePages',
          name: '导航当前页',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '842781405935',
        },
        {
          attrId: '0027366',
          code: 'navigateFirstPage',
          name: '导航首页',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '562596968714',
        },
        {
          attrId: '98371',
          code: 'navigateLastPage',
          name: '导航尾页',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '934236048513',
        },
      ],
      config: {
        hooks: [],
        isInit: true,
        options: {
          service: {
            statusCd: '00M',
            appServiceId: '1057202677051617280',
            appId: '1056454276662820864',
            serviceName: '根据条件查询所有实习生信息列表',
            serviceCode: 'queryAllInternDataList',
            servicePath: '/app/sql/execute',
            serviceMethod: 'post',
            requestObj:
              '[{"serviceAttrId":"5398551727798","code":"keyword","nickCode":"keyword","name":"keyword","attrType":"field","type":"1200","exampleValue":"001","dbLeftCode":"keyword","dbRightCode":"keyword","rootAttrType":"object"},{"serviceAttrId":"97717401474","code":"taskType","nickCode":"taskType","name":"是否完成任务","attrType":"field","type":"1200","exampleValue":"F","dbLeftCode":"taskType","dbRightCode":"taskType","rootAttrType":"object"},{"serviceAttrId":"745623021667","code":"pageNum","nickCode":"pageNum","name":"页数","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"51862248894334","code":"pageSize","nickCode":"pageSize","name":"每页数量","attrType":"field","type":"1400","rootAttrType":"object"}]',
            responseObj:
              '[{"serviceAttrId":"111912847673","code":"total","nickCode":"total","name":"总数","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"9692438742775","code":"list","nickCode":"list","name":"列表","attrType":"objectArray","type":"1700","children":[{"serviceAttrId":"69703867595545","code":"name","nickCode":"name","name":"实习生姓名","attrType":"field","type":"1200","dbLeftCode":"name","dbRightCode":"name"},{"serviceAttrId":"267906421043","code":"jobNumber","nickCode":"job_number","name":" 实习生工号","attrType":"field","type":"1200","dbLeftCode":"job_number","dbRightCode":"job_number"},{"serviceAttrId":"7967875885893","code":"gender","nickCode":"gender","name":"性别","attrType":"field","type":"1200","dbLeftCode":"gender","dbRightCode":"gender"},{"serviceAttrId":"3769172959436","code":"createDate","nickCode":"create_date","name":"create_date","attrType":"field","type":"1200","dbLeftCode":"createDate","dbRightCode":"create_date"},{"serviceAttrId":"873684650516","code":"title","nickCode":"title","name":"职位","attrType":"field","type":"1200","dbLeftCode":"title","dbRightCode":"title"},{"serviceAttrId":"096923611298","code":"graSchool","nickCode":"gra_school","name":"毕业学校","attrType":"field","type":"1200","dbLeftCode":"gra_school","dbRightCode":"gra_school"},{"serviceAttrId":"863759681309","code":"taskProgress","nickCode":"task_progress","name":"任务进度","attrType":"field","type":"1200","dbLeftCode":"taskProgress","dbRightCode":"task_progress"}],"rootAttrType":"object"},{"serviceAttrId":"37744158374","code":"pageNum","nickCode":"pageNum","name":"页数","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"170280233881","code":"pageSize","nickCode":"pageSize","name":"每页数量","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"8157485488907","code":"size","nickCode":"size","name":"数量","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"7068418449557","code":"startRow","nickCode":"startRow","name":"起始页","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"3915156429124","code":"endRow","nickCode":"endRow","name":"结束页","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"400369473281","code":"pages","nickCode":"pages","name":"当前页数","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"4583934892568","code":"prePage","nickCode":"prePage","name":"上一页","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"667510915531","code":"nextPage","nickCode":"nextPage","name":"下一页","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"029213966213","code":"hasPreviousPage","nickCode":"hasPreviousPage","name":"是否前一页","attrType":"field","type":"1500","rootAttrType":"object"},{"serviceAttrId":"391085880974","code":"hasNextPage","nickCode":"hasNextPage","name":"是否下一页","attrType":"field","type":"1500","rootAttrType":"object"},{"serviceAttrId":"842781405935","code":"navigatePages","nickCode":"navigatePages","name":"导航当前页","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"562596968714","code":"navigateFirstPage","nickCode":"navigateFirstPage","name":"导航首页","attrType":"field","type":"1400","rootAttrType":"object"},{"serviceAttrId":"934236048513","code":"navigateLastPage","nickCode":"navigateLastPage","name":"导航尾页","attrType":"field","type":"1400","rootAttrType":"object"}]',
            serviceType: '2',
            catalogItemId: '-1',
            api: '/app/sql/execute',
            _source: 'query',
            _serviceId: '1057202677051617280',
            _serviceTitle:
              '根据条件查询所有实习生信息列表: /app/sql/execute/queryAllInternDataList',
            _sourceName: '根据条件查询所有实习生信息列表',
            isServiceParam: true,
            responseType: 'object',
            requestType: 'object',
            originRequestObj: [
              {
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                children: [
                  {
                    serviceAttrId: '5398551727798',
                    code: 'keyword',
                    nickCode: 'keyword',
                    name: 'keyword',
                    attrType: 'field',
                    type: 'string',
                    exampleValue: '001',
                    dbLeftCode: 'keyword',
                    dbRightCode: 'keyword',
                    _type: '1200',
                    _id: 'root.keyword',
                    compType: 'Input',
                  },
                  {
                    serviceAttrId: '97717401474',
                    code: 'taskType',
                    nickCode: 'taskType',
                    name: '是否完成任务',
                    attrType: 'field',
                    type: 'string',
                    exampleValue: 'F',
                    dbLeftCode: 'taskType',
                    dbRightCode: 'taskType',
                    _type: '1200',
                    _id: 'root.taskType',
                    compType: 'Input',
                  },
                  {
                    serviceAttrId: '745623021667',
                    code: 'pageNum',
                    nickCode: 'pageNum',
                    name: '页数',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.pageNum',
                    compType: 'Input',
                  },
                  {
                    serviceAttrId: '51862248894334',
                    code: 'pageSize',
                    nickCode: 'pageSize',
                    name: '每页数量',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.pageSize',
                    compType: 'Input',
                  },
                ],
                _id: 'root',
                compType: 'Input',
              },
            ],
            originResponseObj: [
              {
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                children: [
                  {
                    serviceAttrId: '111912847673',
                    code: 'total',
                    nickCode: 'total',
                    name: '总数',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.total',
                  },
                  {
                    serviceAttrId: '9692438742775',
                    code: 'list',
                    nickCode: 'list',
                    name: '列表',
                    attrType: 'objectArray',
                    type: 'array',
                    children: [
                      {
                        serviceAttrId: '69703867595545',
                        code: 'name',
                        nickCode: 'name',
                        name: '实习生姓名',
                        attrType: 'field',
                        type: 'string',
                        dbLeftCode: 'name',
                        dbRightCode: 'name',
                        _type: '1200',
                        _id: 'root.list.name',
                      },
                      {
                        serviceAttrId: '267906421043',
                        code: 'jobNumber',
                        nickCode: 'job_number',
                        name: ' 实习生工号',
                        attrType: 'field',
                        type: 'string',
                        dbLeftCode: 'job_number',
                        dbRightCode: 'job_number',
                        _type: '1200',
                        _id: 'root.list.jobNumber',
                      },
                      {
                        serviceAttrId: '7967875885893',
                        code: 'gender',
                        nickCode: 'gender',
                        name: '性别',
                        attrType: 'field',
                        type: 'string',
                        dbLeftCode: 'gender',
                        dbRightCode: 'gender',
                        _type: '1200',
                        _id: 'root.list.gender',
                      },
                      {
                        serviceAttrId: '3769172959436',
                        code: 'createDate',
                        nickCode: 'create_date',
                        name: 'create_date',
                        attrType: 'field',
                        type: 'string',
                        dbLeftCode: 'createDate',
                        dbRightCode: 'create_date',
                        _type: '1200',
                        _id: 'root.list.createDate',
                      },
                      {
                        serviceAttrId: '873684650516',
                        code: 'title',
                        nickCode: 'title',
                        name: '职位',
                        attrType: 'field',
                        type: 'string',
                        dbLeftCode: 'title',
                        dbRightCode: 'title',
                        _type: '1200',
                        _id: 'root.list.title',
                      },
                      {
                        serviceAttrId: '096923611298',
                        code: 'graSchool',
                        nickCode: 'gra_school',
                        name: '毕业学校',
                        attrType: 'field',
                        type: 'string',
                        dbLeftCode: 'gra_school',
                        dbRightCode: 'gra_school',
                        _type: '1200',
                        _id: 'root.list.graSchool',
                      },
                      {
                        serviceAttrId: '863759681309',
                        code: 'taskProgress',
                        nickCode: 'task_progress',
                        name: '任务进度',
                        attrType: 'field',
                        type: 'string',
                        dbLeftCode: 'taskProgress',
                        dbRightCode: 'task_progress',
                        _type: '1200',
                        _id: 'root.list.taskProgress',
                      },
                    ],
                    _type: '1700',
                    _id: 'root.list',
                  },
                  {
                    serviceAttrId: '37744158374',
                    code: 'pageNum',
                    nickCode: 'pageNum',
                    name: '页数',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.pageNum',
                  },
                  {
                    serviceAttrId: '170280233881',
                    code: 'pageSize',
                    nickCode: 'pageSize',
                    name: '每页数量',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.pageSize',
                  },
                  {
                    serviceAttrId: '8157485488907',
                    code: 'size',
                    nickCode: 'size',
                    name: '数量',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.size',
                  },
                  {
                    serviceAttrId: '7068418449557',
                    code: 'startRow',
                    nickCode: 'startRow',
                    name: '起始页',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.startRow',
                  },
                  {
                    serviceAttrId: '3915156429124',
                    code: 'endRow',
                    nickCode: 'endRow',
                    name: '结束页',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.endRow',
                  },
                  {
                    serviceAttrId: '400369473281',
                    code: 'pages',
                    nickCode: 'pages',
                    name: '当前页数',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.pages',
                  },
                  {
                    serviceAttrId: '4583934892568',
                    code: 'prePage',
                    nickCode: 'prePage',
                    name: '上一页',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.prePage',
                  },
                  {
                    serviceAttrId: '667510915531',
                    code: 'nextPage',
                    nickCode: 'nextPage',
                    name: '下一页',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.nextPage',
                  },
                  {
                    serviceAttrId: '029213966213',
                    code: 'hasPreviousPage',
                    nickCode: 'hasPreviousPage',
                    name: '是否前一页',
                    attrType: 'field',
                    type: 'boolean',
                    _type: '1500',
                    _id: 'root.hasPreviousPage',
                  },
                  {
                    serviceAttrId: '391085880974',
                    code: 'hasNextPage',
                    nickCode: 'hasNextPage',
                    name: '是否下一页',
                    attrType: 'field',
                    type: 'boolean',
                    _type: '1500',
                    _id: 'root.hasNextPage',
                  },
                  {
                    serviceAttrId: '842781405935',
                    code: 'navigatePages',
                    nickCode: 'navigatePages',
                    name: '导航当前页',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.navigatePages',
                  },
                  {
                    serviceAttrId: '562596968714',
                    code: 'navigateFirstPage',
                    nickCode: 'navigateFirstPage',
                    name: '导航首页',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.navigateFirstPage',
                  },
                  {
                    serviceAttrId: '934236048513',
                    code: 'navigateLastPage',
                    nickCode: 'navigateLastPage',
                    name: '导航尾页',
                    attrType: 'field',
                    type: 'long',
                    _type: '1400',
                    _id: 'root.navigateLastPage',
                  },
                ],
                _id: 'root',
              },
            ],
          },
          url: '/app/sql/execute',
          method: 'post',
          headers: [],
        },
      },
      sourceId: '1057202677051617280',
      serviceType: '2',
    },
  ],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
