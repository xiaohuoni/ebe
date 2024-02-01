// 注意: 出码模块正在调试
import React from 'react';

import {
  Button,
  Icon,
  Layout,
  LoopList,
  Text,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_7879245__ .View_398743 .card1{background-color:#E7FCFF!important;color:#3491FA!important;}.__CustomClass_7879245__ .View_398743 .card2{background-color:#E5FAE9!important;color:#02B342!important;}.__CustomClass_7879245__ .View_398743 .card3{background-color:#FFF4F1!important;color:#F77234!important;}.__CustomClass_7879245__ .View_398743 .card4{background-color:#FFEDF4!important;color:#F5319D!important;}.__CustomClass_7879245__ .View_398743 .card5{background-color:#FFFBE6!important;color:#FAAF0C!important;}.__CustomClass_7879245__ .View_398743 .ued-loop-list-nobox{background-color:transparent!important;}.__CustomClass_7879245__ .View_398743 .ued-loop-list-nobox:hover{border-radius:8px;box-shadow:0px 8px 24px 0px rgba(100, 103, 122, 0.24);}.__CustomClass_7879245__ .View_981023 .myIcon{font-size:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;height:32px;min-width:32px;}.__CustomClass_7879245__ .View_891955 .short{background:#E7FCFF;border:1px solid #3491FA!important;color:#3491FA!important;}.__CustomClass_7879245__ .View_891955 .long{background:#F2F0FF;border:1px solid #7B61FF!important;color:#7B61FF!important;}',

  '7879245',
);

const Gerenkaoshi8972$$Page: React.FC<PageProps> = ({
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
    // console 170573550756654340
    console.log(data?._others_?.personInfo?.userId);
    const eventDatareloadDataSource: any = [
      {
        type: 'reloadDataSource',
        dataId: 170573557938165020,
        options: {
          compId: 'reloadDataSource',
          compName: 'system',
          id: '0112007',
          pageJsonId: '7879245',
          sync: false,
          dataSourceId: 170282451136065700,
          dataSourceName: 'queryExamByUserId',
          dataSourceRelType: 'service',
          dataSourceReloadFilter: [
            {
              attrId: '260488086',
              code: 'userId',
              name: 'userId',
              type: 'long',
              sort: { isSort: true },
              initialData: {
                type: 'static',
                value: '$data._others_.personInfo.userId$',
              },
              sourceAttrId: '1050654629276',
              key: 'userId',
              value: {
                type: ['context', '$data._others_.personInfo$', 'userId'],
                code: 'userId',
              },
            },
            {
              attrId: '431044',
              code: 'pageNum',
              name: '页数',
              type: 'long',
              sort: { isSort: true },
              initialData: { type: 'static', value: '1' },
              sourceAttrId: '909288296615',
              key: 'pageNum',
              value: { type: ['customize'], code: '1' },
            },
            {
              attrId: '085892',
              code: 'pageSize',
              name: '每页数量',
              type: 'long',
              sort: { isSort: true },
              initialData: { type: 'static', value: '6' },
              sourceAttrId: '1662352379252',
              key: 'pageSize',
              value: { type: ['customize'], code: '6' },
            },
          ],
          otherObjectArrayOptions: {},
          targetDataSourcePaths: [],
        },
        line_number: 2,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatareloadDataSource.params = [] || [];
    CMDGenerator(eventDatareloadDataSource, {}, 'reloadDataSource', {
      id: 'reloadDataSource',
      name: 'reloadDataSource',
      type: 'reloadDataSource',
      platform: 'pc',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style} className="__CustomClass_7879245__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(244, 249, 253, 1)' }}
        $$componentItem={{
          id: 'View_7879245_1',
          uid: 'View_7879245_1',
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
        ref={(r: any) => (refs['View_7879245_1'] = r)}
        {...injectData}
      >
        <Layout
          name={'布局容器'}
          layoutOptions={{
            grid: 12,
            colSpan: '12',
            colSpace: '16px',
            rowSpace: '16px',
          }}
          $$componentItem={{
            id: 'Layout_684072',
            uid: 'Layout_684072',
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
            backgroundColor: 'rgba(255, 255, 255, 0)',
          }}
          ref={(r: any) => (refs['Layout_684072'] = r)}
          {...injectData}
        >
          <View
            name={'普通容器'}
            className={'View_398743'}
            $$componentItem={{
              id: 'View_398743',
              uid: 'View_398743',
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
            ref={(r: any) => (refs['View_398743'] = r)}
            {...injectData}
          >
            <LoopList
              name={'循环列表'}
              mode={1}
              pieceData={[]}
              defaultValue={[]}
              columnNum={1}
              span={'6'}
              vspace={16}
              hspace={16}
              itemKey={'rowData'}
              indexKey={'rowIndex'}
              gridMode={true}
              gridData={
                [
                  {
                    duration: '120',
                    score: '100',
                    name: '灵犀低代码认证考试',
                    description: '<p>灵犀低代码认证考试</p>',
                    startTime: '2024-01-18 00:00:00',
                    id: '10000',
                    endTime: '2024-02-29 00:00:00',
                    type: '1000',
                  },
                  {
                    duration: '120',
                    score: '100',
                    name: '灵犀低代码认证考试',
                    description: '<p>灵犀低代码认证考试</p>',
                    startTime: '2024-01-18 00:00:00',
                    id: '10000',
                    endTime: '2024-02-29 00:00:00',
                    type: '1001',
                  },
                  {
                    duration: '60',
                    score: '100',
                    name: '1月21日知识点考试',
                    description: '<p>知识点考试</p>',
                    startTime: '2024-01-21 10:46:11',
                    id: '10002',
                    endTime: '2024-01-31 10:46:17',
                    type: '1002',
                  },
                  {
                    duration: '60',
                    score: '100',
                    name: '1月23日下午考试',
                    description: '<p>1月23日下午考试</p>',
                    startTime: '2024-01-23 16:26:28',
                    id: '10003',
                    endTime: '2024-01-31 16:26:35',
                    type: '1003',
                  },
                  {
                    duration: '60',
                    score: '100',
                    name: '1月23日晚上测试',
                    description: '<p>1月23日晚上测试</p>',
                    startTime: '2024-01-23 22:00:21',
                    id: '10004',
                    endTime: '2024-01-31 22:00:25',
                    type: '1004',
                  },
                ] || data?.queryExamByUserId?.list
              }
              valueKey={'id'}
              $$componentItem={{
                id: 'LoopList_098028',
                uid: 'LoopList_098028',
                type: 'LoopList',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['LoopList_098028'] = r)}
              {...injectData}
              getEngineApis={() => {
                return {
                  ...injectData.getEngineApis(),
                  MemoRenderer: {
                    renderer: null,
                    MemoLoopItem: (props: any) => {
                      const rowData = props[props.itemKey] ?? props?.item;
                      const rowIndex = props[props.indexKey] ?? props?.i;
                      const item = props[props.itemKey] ?? props?.item;
                      const i = props[props.indexKey] ?? props?.i;
                      return (
                        <>
                          <View
                            name={'卡片'}
                            backgroundType={{
                              type: 'cleanColor',
                              color: 'rgba(255, 255, 255, 1)',
                            }}
                            className={'View_981023'}
                            $$componentItem={{
                              id: 'View_981023',
                              uid: 'View_981023',
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
                              padding: '12px 12px 12px 12px',
                              width: '100%',
                              borderRadius: '8px 8px 8px 8px',
                              height: 'fit-content',
                              flex: '1',
                              position: 'relative',
                              overflow: 'hidden',
                            }}
                            ref={(r: any) => (refs['View_981023'] = r)}
                            {...injectData}
                          >
                            <View
                              name={'普通容器1'}
                              backgroundType={{
                                type: 'cleanColor',
                                color: 'rgba(255, 255, 255, 1)',
                              }}
                              $$componentItem={{
                                id: 'View_40367',
                                uid: 'View_40367',
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
                                margin: '0px 0px 12px 0px',
                              }}
                              ref={(r: any) => (refs['View_40367'] = r)}
                              {...injectData}
                            >
                              <Icon
                                name={'图标'}
                                mode={'custom'}
                                rotate={0}
                                icon={{
                                  type: 'home',
                                  theme: 'filled',
                                  fontAddress: '',
                                  isIconFont: false,
                                  iconFileInfo: {},
                                }}
                                className={'myIcon'}
                                iconItems={[
                                  {
                                    color: '#1C242E',
                                    isUsePrimary: false,
                                    icon: {
                                      iconFile: {
                                        fileSubType: 'ICON_IMAGE',
                                        fileCode: 'PIC_1342724',
                                      },
                                    },
                                    rule: rowData?.type == 1000,
                                    isUpload: true,
                                  },
                                  {
                                    color: '#1C242E',
                                    isUsePrimary: false,
                                    icon: {
                                      iconFile: {
                                        fileSubType: 'ICON_IMAGE',
                                        fileCode: 'PIC_109748',
                                      },
                                    },
                                    isUpload: true,
                                    rule: rowData?.type == 1001,
                                  },
                                  {
                                    color: '#1C242E',
                                    isUsePrimary: false,
                                    icon: {
                                      iconFile: {
                                        fileSubType: 'ICON_IMAGE',
                                        fileCode: 'PIC_720678',
                                      },
                                    },
                                    isUpload: true,
                                    rule: rowData?.type == 1002,
                                  },
                                  {
                                    color: '#1C242E',
                                    isUsePrimary: false,
                                    icon: {
                                      iconFile: {
                                        fileSubType: 'ICON_IMAGE',
                                        fileCode: 'PIC_7798627',
                                      },
                                    },
                                    isUpload: true,
                                    rule: rowData?.type == 1003,
                                  },
                                  {
                                    color: '#1C242E',
                                    isUsePrimary: false,
                                    icon: {
                                      iconFile: {
                                        fileSubType: 'ICON_IMAGE',
                                        fileCode: 'PIC_91724',
                                      },
                                    },
                                    isUpload: true,
                                    rule: rowData?.type == 1004,
                                  },
                                ]}
                                $$componentItem={{
                                  id: 'Icon_687694',
                                  uid: 'Icon_687694',
                                  type: 'Icon',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  color: 'rgba(255, 255, 255, 1)',
                                  marginRight: '8px',
                                }}
                                ref={(r: any) => (refs['Icon_687694'] = r)}
                                {...injectData}
                              />
                              <View
                                name={'普通容器2'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 1)',
                                }}
                                $$componentItem={{
                                  id: 'View_059848',
                                  uid: 'View_059848',
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
                                  width: '50%',
                                }}
                                ref={(r: any) => (refs['View_059848'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'标题'}
                                  content={rowData?.name}
                                  textType={'span'}
                                  version={'1.0'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_26274',
                                    uid: 'Text_26274',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 16,
                                    lineHeight: '24px',
                                    color: '#1c242e',
                                    backgroundColor: 'rgba(255, 255, 255, 0)',
                                    fontWeight: 600,
                                    margin: '0px 0px 4px 0px',
                                    flex: 1,
                                    width: '100%',
                                    minWidth: '0',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    wordBreak: 'break-all',
                                    whiteSpace: 'nowrap',
                                  }}
                                  ref={(r: any) => (refs['Text_26274'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'描述'}
                                  content={rowData?.description}
                                  textType={'span'}
                                  version={'1.0'}
                                  showHtml={true}
                                  $$componentItem={{
                                    id: 'Text_46785479',
                                    uid: 'Text_46785479',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '18px',
                                    color: 'rgba(144, 146, 163, 1)',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    margin: '0px 0px 0px 0px',
                                  }}
                                  ref={(r: any) => (refs['Text_46785479'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <Text
                                name={'标签'}
                                content={(function () {
                                  if (rowData?.type == '1000') {
                                    return '知识竞赛';
                                  } else if (rowData?.type == '1001') {
                                    return '安全合格';
                                  } else if (rowData?.type == '1002') {
                                    return '技能考试';
                                  } else if (rowData?.type == '1003') {
                                    return '职级认证';
                                  } else if (rowData?.type == '1004') {
                                    return '模拟测试';
                                  }
                                })()}
                                textType={'span'}
                                version={'1.0'}
                                showHtml={false}
                                className={(function () {
                                  if (rowData?.type == '1000') {
                                    return 'card1';
                                  } else if (rowData?.type == '1001') {
                                    return 'card2';
                                  } else if (rowData?.type == '1002') {
                                    return 'card3';
                                  } else if (rowData?.type == '1003') {
                                    return 'card4';
                                  } else if (rowData?.type == '1004') {
                                    return 'card5';
                                  }
                                })()}
                                $$componentItem={{
                                  id: 'Text_388792',
                                  uid: 'Text_388792',
                                  type: 'Text',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  textAlign: 'left',
                                  fontSize: 12,
                                  lineHeight: '14px',
                                  color: 'rgba(52, 145, 250, 1)',
                                  backgroundColor: 'rgba(231, 252, 255, 1)',
                                  padding: '0px 8px 0px 8px',
                                  whiteSpace: 'nowrap',
                                  display: 'flex',
                                  alignItems: 'center',
                                  height: 'fit-content',
                                  marginLeft: 'auto',
                                }}
                                ref={(r: any) => (refs['Text_388792'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'内容'}
                              backgroundType={{
                                type: 'cleanColor',
                                color: 'rgba(248, 250, 254, 1)',
                              }}
                              $$componentItem={{
                                id: 'View_532774',
                                uid: 'View_532774',
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
                                padding: '12px 12px 12px 12px',
                                width: '100%',
                                margin: '0px 0px 16px 0px',
                              }}
                              ref={(r: any) => (refs['View_532774'] = r)}
                              {...injectData}
                            >
                              <View
                                name={'普通容器3'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_41748573',
                                  uid: 'View_41748573',
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
                                  margin: '0px 0px 4px 0px',
                                }}
                                ref={(r: any) => (refs['View_41748573'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'开始时间：'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_632086',
                                    uid: 'Text_632086',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '24px',
                                    color: 'rgba(100, 103, 122, 1)',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    margin: '0px 12px 0px 0px',
                                  }}
                                  ref={(r: any) => (refs['Text_632086'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'开始'}
                                  content={rowData?.startTime}
                                  textType={'span'}
                                  version={'1.0'}
                                  showHtml={true}
                                  $$componentItem={{
                                    id: 'Text_066165',
                                    uid: 'Text_066165',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '18px',
                                    color: 'rgba(65, 67, 82, 1)',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    margin: '0px 0px 8px 0px',
                                  }}
                                  ref={(r: any) => (refs['Text_066165'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器4'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_1912143',
                                  uid: 'View_1912143',
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
                                  margin: '0px 0px 4px 0px',
                                }}
                                ref={(r: any) => (refs['View_1912143'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'结束时间：'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_2329184',
                                    uid: 'Text_2329184',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '24px',
                                    color: 'rgba(100, 103, 122, 1)',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    margin: '0px 12px 0px 0px',
                                  }}
                                  ref={(r: any) => (refs['Text_2329184'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'截止'}
                                  content={rowData?.endTime}
                                  textType={'span'}
                                  version={'1.0'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_054966',
                                    uid: 'Text_054966',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '18px',
                                    color: 'rgba(65, 67, 82, 1)',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    margin: '0px 0px 8px 0px',
                                  }}
                                  ref={(r: any) => (refs['Text_054966'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器5'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                className={'View_891955'}
                                $$componentItem={{
                                  id: 'View_891955',
                                  uid: 'View_891955',
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
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  margin: '0px 0px 4px 0px',
                                }}
                                ref={(r: any) => (refs['View_891955'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'考试时长：'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_893869',
                                    uid: 'Text_893869',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '24px',
                                    color: 'rgba(100, 103, 122, 1)',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    margin: '0px 12px 0px 0px',
                                  }}
                                  ref={(r: any) => (refs['Text_893869'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'标签'}
                                  content={rowData?.duration}
                                  textType={'span'}
                                  version={'1.0'}
                                  showHtml={false}
                                  className={
                                    +rowData?.duration > 60 ? 'long' : 'short'
                                  }
                                  $$componentItem={{
                                    id: 'Text_747495',
                                    uid: 'Text_747495',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '14px',
                                    color: 'rgba(52, 145, 250, 1)',
                                    padding: '0px 8px 0px 8px',
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 'fit-content',
                                    borderRadius: '4px',
                                  }}
                                  ref={(r: any) => (refs['Text_747495'] = r)}
                                  {...injectData}
                                />
                              </View>
                              <View
                                name={'普通容器6'}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(255, 255, 255, 0)',
                                }}
                                $$componentItem={{
                                  id: 'View_611798',
                                  uid: 'View_611798',
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
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                }}
                                ref={(r: any) => (refs['View_611798'] = r)}
                                {...injectData}
                              >
                                <Text
                                  name={'文本'}
                                  content={'考试总分：'}
                                  textType={'span'}
                                  showHtml={false}
                                  $$componentItem={{
                                    id: 'Text_473976',
                                    uid: 'Text_473976',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '24px',
                                    color: 'rgba(100, 103, 122, 1)',
                                    backgroundColor: 'rgba(255, 255, 255,0)',
                                    margin: '0px 12px 0px 0px',
                                  }}
                                  ref={(r: any) => (refs['Text_473976'] = r)}
                                  {...injectData}
                                />
                                <Text
                                  name={'标签'}
                                  content={rowData?.score}
                                  textType={'span'}
                                  version={'1.0'}
                                  showHtml={false}
                                  className={
                                    +rowData?.duration > 60 ? 'long' : 'short'
                                  }
                                  $$componentItem={{
                                    id: 'Text_008521',
                                    uid: 'Text_008521',
                                    type: 'Text',
                                    ...componentItem,
                                  }}
                                  disabled={false}
                                  visible={true}
                                  readOnly={false}
                                  style={{
                                    textAlign: 'left',
                                    fontSize: 12,
                                    lineHeight: '14px',
                                    color: 'rgba(0, 228, 177, 1)',
                                    padding: '0px 8px 0px 8px',
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 'fit-content',
                                    borderRadius: '4px',
                                    background: '#E8FFF5',
                                    opacity: '1',
                                    border: '1px solid #00E4B1',
                                  }}
                                  ref={(r: any) => (refs['Text_008521'] = r)}
                                  {...injectData}
                                />
                              </View>
                            </View>
                            <Button
                              name={'按钮'}
                              classification={'default'}
                              autoProcessFlow={false}
                              flowProcessResult={'common'}
                              iconPosition={'left'}
                              ghost={false}
                              block={false}
                              size={'small'}
                              type={'primary'}
                              btnIcon={'none'}
                              hasIcon={false}
                              shape={'default'}
                              loading={false}
                              btnText={'开始考试'}
                              $$componentItem={{
                                id: 'Button_085327',
                                uid: 'Button_085327',
                                type: 'Button',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              style={{
                                textAlign: 'center',
                                fontSize: 13,
                                fontWeight: 400,
                                color: 'rgba(255, 255, 255, 1)',
                                borderSetting: '',
                                backgroundColor: '',
                                border: '',
                                'border-left': '1px solid ',
                                'border-right': '1px solid ',
                                'border-top': '1px solid ',
                                'border-bottom': '1px solid ',
                                margin: '0px 0px 0px 0px',
                                marginLeft: 'auto',
                              }}
                              onClick={(e: any) => {
                                const eventDatagetLoopListValues8: any = [
                                  {
                                    type: 'getLoopListValues',
                                    dataId: 170286076984406460,
                                    options: {
                                      compId: 'LoopList_098028',
                                      compLib: 'comm',
                                      pageJsonId: '7879245',
                                      compName: 'LoopList',
                                      id: '538784',
                                    },
                                    line_number: 1,
                                    callback1: [
                                      {
                                        type: 'history',
                                        dataId: 170575887451164320,
                                        options: {
                                          compId: 'history',
                                          compName: 'system',
                                          id: '415227',
                                          pageJsonId: '7879245',
                                          type: 'push',
                                          pathname: '/kaoshitimu9180copy',
                                          selectedType: 'page',
                                          pageId: '1053839668338454528',
                                          modalPath: '/kaoshitimu9180copy',
                                          paramsObj: { bizId: '$item.id$' },
                                          paramsObjKeyValueMap: {
                                            bizId: '$item.id$',
                                          },
                                        },
                                        line_number: 2,
                                      },
                                    ],
                                  },
                                ];
                                eventDatagetLoopListValues8.params =
                                  [
                                    {
                                      title: '事件对象',
                                      value: '$e$',
                                      name: 'e',
                                      label: '事件对象',
                                    },
                                  ] || [];
                                CMDGenerator(
                                  eventDatagetLoopListValues8,
                                  { e, item, i, rowData, rowIndex },
                                  'getLoopListValues',
                                  {
                                    id: 'getLoopListValues',
                                    name: 'getLoopListValues',
                                    type: 'getLoopListValues',
                                    platform: 'pc',
                                  },
                                );
                              }}
                              ref={(r: any) => (refs['Button_085327'] = r)}
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
          </View>
        </Layout>
      </View>
    </div>
  );
};

export default withPageHOC(Gerenkaoshi8972$$Page, {
  pageId: '1053668469436280832',
  hasLogin: true,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
