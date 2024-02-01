// 注意: 出码模块正在调试
import React from 'react';

import { Button, Layout, LoopList, Text, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

import dataSource from './dataSource.json';

styleInject(
  '.__CustomClass_56899225__ .View_677376 .ued-loop-list-nobox{width:100%!important;}.__CustomClass_56899225__ .View_677376 .ued-loop-list-showIcon{width:100%!important;background:#ecebed!important;}.__CustomClass_56899225__ .View_626395 .ued-loop-list-nobox{width:100%!important;}.__CustomClass_56899225__ .View_626395 .ued-loop-list-showIcon{width:100%!important;background:#ecebed!important;}.__CustomClass_56899225__ .View_7107975 .ued-loop-list-nobox{width:100%!important;}.__CustomClass_56899225__ .View_7107975 .ued-loop-list-showIcon{width:100%!important;background:#ecebed!important;}',

  '56899225',
);

const Kaoshitimu9180$$Page: React.FC<PageProps> = ({
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
    <div style={style} className="__CustomClass_56899225__">
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_56899225_1',
          uid: 'View_56899225_1',
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
        ref={(r: any) => (refs['View_56899225_1'] = r)}
        {...injectData}
      >
        <Layout
          name={'布局容器'}
          layoutOptions={{
            grid: 12,
            colSpan: '12:12:12:12',
            colSpace: '16px',
            rowSpace: '16px',
          }}
          $$componentItem={{
            id: 'Layout_609111',
            uid: 'Layout_609111',
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
          ref={(r: any) => (refs['Layout_609111'] = r)}
          {...injectData}
        >
          <View
            name={'考试标题'}
            $$componentItem={{
              id: 'View_825769',
              uid: 'View_825769',
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
            ref={(r: any) => (refs['View_825769'] = r)}
            {...injectData}
          >
            <Layout
              name={'布局容器'}
              layoutOptions={{
                grid: 12,
                colSpan: '3:6:3',
                colSpace: '16px',
                rowSpace: '16px',
              }}
              $$componentItem={{
                id: 'Layout_3003782',
                uid: 'Layout_3003782',
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
              ref={(r: any) => (refs['Layout_3003782'] = r)}
              {...injectData}
            >
              <View
                name={'普通容器'}
                $$componentItem={{
                  id: 'View_9770754',
                  uid: 'View_9770754',
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
                ref={(r: any) => (refs['View_9770754'] = r)}
                {...injectData}
              />
              <View
                name={'普通容器'}
                $$componentItem={{
                  id: 'View_9948453',
                  uid: 'View_9948453',
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
                ref={(r: any) => (refs['View_9948453'] = r)}
                {...injectData}
              >
                <Text
                  name={'文本'}
                  content={data?.LCDP_EXAMS?.name}
                  textType={'h1'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_8242678',
                    uid: 'Text_8242678',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    lineHeight: '24px',
                    color: '#1c242e',
                    backgroundColor: 'rgba(255, 255, 255,0)',
                    width: '100%',
                  }}
                  ref={(r: any) => (refs['Text_8242678'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'普通容器'}
                $$componentItem={{
                  id: 'View_705879',
                  uid: 'View_705879',
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
                ref={(r: any) => (refs['View_705879'] = r)}
                {...injectData}
              />
            </Layout>
          </View>
          <View
            name={'单选题'}
            $$componentItem={{
              id: 'View_761736',
              uid: 'View_761736',
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
            ref={(r: any) => (refs['View_761736'] = r)}
            {...injectData}
          >
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_191879',
                uid: 'View_191879',
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
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
              }}
              ref={(r: any) => (refs['View_191879'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                content={'一、单选题（'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_531393',
                  uid: 'Text_531393',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_531393'] = r)}
                {...injectData}
              />
              <Text
                name={'分值'}
                content={'2'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_512853',
                  uid: 'Text_512853',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_512853'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'分/题，共'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_8835095',
                  uid: 'Text_8835095',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_8835095'] = r)}
                {...injectData}
              />
              <Text
                name={'题目个数'}
                content={'20'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_266897',
                  uid: 'Text_266897',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_266897'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'题，'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_488512',
                  uid: 'Text_488512',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_488512'] = r)}
                {...injectData}
              />
              <Text
                name={'总分'}
                content={'40'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_2133506',
                  uid: 'Text_2133506',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_2133506'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'分）'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_442961',
                  uid: 'Text_442961',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_442961'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              className={'View_677376'}
              $$componentItem={{
                id: 'View_677376',
                uid: 'View_677376',
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
                margin: '0px 0px 0px 20px',
              }}
              ref={(r: any) => (refs['View_677376'] = r)}
              {...injectData}
            >
              <LoopList
                name={'循环列表'}
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
                gridData={data?.getExamQuestrions?.multiple?.list}
                fixedWidth={true}
                $$componentItem={{
                  id: 'LoopList_643879',
                  uid: 'LoopList_643879',
                  type: 'LoopList',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40, width: '100%' }}
                ref={(r: any) => (refs['LoopList_643879'] = r)}
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
                              name={'题目信息'}
                              backgroundType={{ type: 'cleanColor' }}
                              $$componentItem={{
                                id: 'View_932651',
                                uid: 'View_932651',
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
                                padding: '0px 0px 0px 0px',
                                width: '100%',
                              }}
                              ref={(r: any) => (refs['View_932651'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'题目索引'}
                                content={rowIndex + 1}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_19124',
                                  uid: 'Text_19124',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_19124'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'分割符'}
                                content={'、'}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_946736',
                                  uid: 'Text_946736',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_946736'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'题目内容'}
                                content={rowData?.question}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_531558',
                                  uid: 'Text_531558',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_531558'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'选项'}
                              backgroundType={{ type: 'cleanColor' }}
                              $$componentItem={{
                                id: 'View_795567',
                                uid: 'View_795567',
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
                                margin: '0px 0px 0px 10px',
                              }}
                              ref={(r: any) => (refs['View_795567'] = r)}
                              {...injectData}
                            >
                              <LoopList
                                name={'单选列表'}
                                mode={2}
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
                                gridData={rowData?.options}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(236, 235, 237, 1)',
                                }}
                                $$componentItem={{
                                  id: 'LoopList_194696',
                                  uid: 'LoopList_194696',
                                  type: 'LoopList',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  minHeight: 40,
                                  margin: '0px 0px 0px 0px',
                                }}
                                onChange={(valueKeys: any, values: any) => {
                                  // console 169978318502556130
                                  console.log(values);
                                  const eventDatacustomActionCode14: any = [
                                    {
                                      type: 'customActionCode',
                                      dataId: 169978691098767680,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'system',
                                        id: '458349',
                                        pageJsonId: '56899225',
                                        code: 'function main(data,state,success,fail){var answer=values[0];var optionId=answer.id;var questionId=answer.questionId;var flag=0;for(var i=0;i<data.oneAnswer.length;i++){if(data.oneAnswer[i].questionId==questionId){data.oneAnswer[i].optionId=optionId;flag=1;break}}if(flag==0){var _answer={};_answer.optionId=optionId;_answer.questionId=questionId;data.oneAnswer.push(_answer)}success()};',
                                      },
                                      line_number: 2,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ];
                                  eventDatacustomActionCode14.params =
                                    [
                                      {
                                        title: '选中数据key',
                                        name: 'valueKeys',
                                        value: '$valueKeys$',
                                      },
                                      {
                                        title: '选中数据',
                                        name: 'values',
                                        value: '$values$',
                                      },
                                    ] || [];
                                  CMDGenerator(
                                    eventDatacustomActionCode14,
                                    {
                                      valueKeys,
                                      values,
                                      item,
                                      i,
                                      rowData,
                                      rowIndex,
                                    },
                                    'customActionCode',
                                    {
                                      id: 'customActionCode',
                                      name: 'customActionCode',
                                      type: 'customActionCode',
                                      platform: 'pc',
                                    },
                                  );
                                }}
                                ref={(r: any) => (refs['LoopList_194696'] = r)}
                                {...injectData}
                                getEngineApis={() => {
                                  return {
                                    ...injectData.getEngineApis(),
                                    MemoRenderer: {
                                      renderer: null,
                                      MemoLoopItem: (props: any) => {
                                        const rowData =
                                          props[props.itemKey] ?? props?.item;
                                        const rowIndex =
                                          props[props.indexKey] ?? props?.i;
                                        const item =
                                          props[props.itemKey] ?? props?.item;
                                        const i =
                                          props[props.indexKey] ?? props?.i;
                                        return (
                                          <>
                                            <View
                                              name={'子选项'}
                                              backgroundType={{
                                                type: 'cleanColor',
                                                color: '#ecebed',
                                              }}
                                              $$componentItem={{
                                                id: 'View_2561958',
                                                uid: 'View_2561958',
                                                type: 'View',
                                                ...componentItem,
                                              }}
                                              disabled={false}
                                              visible={true}
                                              readOnly={false}
                                              style={{
                                                textAlign: 'left',
                                                display: 'flex',
                                                padding: '10px 0px 0px 0px',
                                                width: '100%',
                                                flexWrap: 'nowrap',
                                                margin: '0px 0px 0px 0px',
                                              }}
                                              ref={(r: any) =>
                                                (refs['View_2561958'] = r)
                                              }
                                              {...injectData}
                                            >
                                              <Text
                                                name={'子选项索引'}
                                                content={(function () {
                                                  if (rowIndex == 0) {
                                                    return 'A';
                                                  } else if (rowIndex == 1) {
                                                    return 'B';
                                                  } else if (rowIndex == 2) {
                                                    return 'C';
                                                  } else if (rowIndex == 3) {
                                                    return 'D';
                                                  } else if (rowIndex == 4) {
                                                    return 'E';
                                                  } else if (rowIndex == 5) {
                                                    return 'F';
                                                  }
                                                })()}
                                                textType={'h1'}
                                                version={'1.0'}
                                                showHtml={false}
                                                $$componentItem={{
                                                  id: 'Text_0161289',
                                                  uid: 'Text_0161289',
                                                  type: 'Text',
                                                  ...componentItem,
                                                }}
                                                disabled={false}
                                                visible={true}
                                                readOnly={false}
                                                style={{
                                                  textAlign: 'left',
                                                  fontSize: 15,
                                                  lineHeight: 'autopx',
                                                  color: '#1c242e',
                                                  backgroundColor:
                                                    'rgba(255, 255, 255,0)',
                                                }}
                                                ref={(r: any) =>
                                                  (refs['Text_0161289'] = r)
                                                }
                                                {...injectData}
                                              />
                                              <Text
                                                name={'分割符'}
                                                content={'、'}
                                                textType={'h1'}
                                                version={'1.0'}
                                                showHtml={false}
                                                $$componentItem={{
                                                  id: 'Text_796423',
                                                  uid: 'Text_796423',
                                                  type: 'Text',
                                                  ...componentItem,
                                                }}
                                                disabled={false}
                                                visible={true}
                                                readOnly={false}
                                                style={{
                                                  textAlign: 'left',
                                                  fontSize: 15,
                                                  lineHeight: 'autopx',
                                                  color: '#1c242e',
                                                  backgroundColor:
                                                    'rgba(255, 255, 255,0)',
                                                }}
                                                ref={(r: any) =>
                                                  (refs['Text_796423'] = r)
                                                }
                                                {...injectData}
                                              />
                                              <Text
                                                name={'子选项内容'}
                                                content={rowData?.option}
                                                textType={'h1'}
                                                version={'1.0'}
                                                showHtml={false}
                                                $$componentItem={{
                                                  id: 'Text_632573',
                                                  uid: 'Text_632573',
                                                  type: 'Text',
                                                  ...componentItem,
                                                }}
                                                disabled={false}
                                                visible={true}
                                                readOnly={false}
                                                style={{
                                                  textAlign: 'left',
                                                  fontSize: 15,
                                                  lineHeight: 'autopx',
                                                  color: '#1c242e',
                                                  backgroundColor:
                                                    'rgba(255, 255, 255,0)',
                                                }}
                                                ref={(r: any) =>
                                                  (refs['Text_632573'] = r)
                                                }
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
                          </>
                        );
                      },
                    },
                  };
                }}
              />
            </View>
          </View>
          <View
            name={'多选题'}
            $$componentItem={{
              id: 'View_1886949',
              uid: 'View_1886949',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ textAlign: 'left', display: 'block', width: '100%' }}
            ref={(r: any) => (refs['View_1886949'] = r)}
            {...injectData}
          >
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_110402',
                uid: 'View_110402',
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
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
              }}
              ref={(r: any) => (refs['View_110402'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                content={'二、多选题（'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_713306',
                  uid: 'Text_713306',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_713306'] = r)}
                {...injectData}
              />
              <Text
                name={'分值'}
                content={'4'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_9107776',
                  uid: 'Text_9107776',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_9107776'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'分/题，共'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_485303',
                  uid: 'Text_485303',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_485303'] = r)}
                {...injectData}
              />
              <Text
                name={'题目个数'}
                content={'10'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_297235',
                  uid: 'Text_297235',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_297235'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'题，'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_74649338',
                  uid: 'Text_74649338',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_74649338'] = r)}
                {...injectData}
              />
              <Text
                name={'总分'}
                content={'40'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_5213994',
                  uid: 'Text_5213994',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_5213994'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'分）'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_823952',
                  uid: 'Text_823952',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_823952'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              className={'View_626395'}
              $$componentItem={{
                id: 'View_626395',
                uid: 'View_626395',
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
                margin: '0px 0px 0px 20px',
              }}
              ref={(r: any) => (refs['View_626395'] = r)}
              {...injectData}
            >
              <LoopList
                name={'循环列表'}
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
                gridData={data?.getExamQuestrions?.multiples?.list}
                fixedWidth={true}
                $$componentItem={{
                  id: 'LoopList_179235',
                  uid: 'LoopList_179235',
                  type: 'LoopList',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40, width: '100%' }}
                ref={(r: any) => (refs['LoopList_179235'] = r)}
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
                              name={'题目信息'}
                              backgroundType={{ type: 'cleanColor' }}
                              $$componentItem={{
                                id: 'View_221673',
                                uid: 'View_221673',
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
                                padding: '0px 0px 0px 0px',
                                width: '100%',
                              }}
                              ref={(r: any) => (refs['View_221673'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'题目索引'}
                                content={rowIndex + 1}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_755662',
                                  uid: 'Text_755662',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_755662'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'分割符'}
                                content={'、'}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_509474',
                                  uid: 'Text_509474',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_509474'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'题目内容'}
                                content={rowData?.question}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_6456307',
                                  uid: 'Text_6456307',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_6456307'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'选项'}
                              backgroundType={{ type: 'cleanColor' }}
                              $$componentItem={{
                                id: 'View_621442',
                                uid: 'View_621442',
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
                                margin: '0px 0px 0px 10px',
                              }}
                              ref={(r: any) => (refs['View_621442'] = r)}
                              {...injectData}
                            >
                              <LoopList
                                name={'多选列表'}
                                mode={3}
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
                                gridData={rowData?.options}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(236, 235, 237, 1)',
                                }}
                                $$componentItem={{
                                  id: 'LoopList_159536',
                                  uid: 'LoopList_159536',
                                  type: 'LoopList',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  minHeight: 40,
                                  margin: '0px 0px 0px 0px',
                                }}
                                onChange={(valueKeys: any, values: any) => {
                                  // console 169978330053342880
                                  console.log(values);
                                  const eventDatacustomActionCode16: any = [
                                    {
                                      type: 'customActionCode',
                                      dataId: 169978788538728300,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'system',
                                        id: '614043',
                                        pageJsonId: '56899225',
                                        code: 'function main(data,state,success,fail){var answer=values[0];var optionId="";var questionId=answer.questionId;for(var i=0;i<data.twoAnswer.length;i++){if(data.twoAnswer[i].questionId==questionId){data.twoAnswer.splice(i,1);break}}for(var j=0;j<values.length;j++){if(j==0){optionId=values[j].id}else{optionId=optionId+","+values[j].id}}var _answer={};_answer.questionId=questionId;_answer.optionId=optionId;data.twoAnswer.push(_answer);success()};',
                                      },
                                      line_number: 2,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ];
                                  eventDatacustomActionCode16.params =
                                    [
                                      {
                                        title: '选中数据key',
                                        name: 'valueKeys',
                                        value: '$valueKeys$',
                                      },
                                      {
                                        title: '选中数据',
                                        name: 'values',
                                        value: '$values$',
                                      },
                                    ] || [];
                                  CMDGenerator(
                                    eventDatacustomActionCode16,
                                    {
                                      valueKeys,
                                      values,
                                      item,
                                      i,
                                      rowData,
                                      rowIndex,
                                    },
                                    'customActionCode',
                                    {
                                      id: 'customActionCode',
                                      name: 'customActionCode',
                                      type: 'customActionCode',
                                      platform: 'pc',
                                    },
                                  );
                                }}
                                ref={(r: any) => (refs['LoopList_159536'] = r)}
                                {...injectData}
                                getEngineApis={() => {
                                  return {
                                    ...injectData.getEngineApis(),
                                    MemoRenderer: {
                                      renderer: null,
                                      MemoLoopItem: (props: any) => {
                                        const rowData =
                                          props[props.itemKey] ?? props?.item;
                                        const rowIndex =
                                          props[props.indexKey] ?? props?.i;
                                        const item =
                                          props[props.itemKey] ?? props?.item;
                                        const i =
                                          props[props.indexKey] ?? props?.i;
                                        return (
                                          <>
                                            <View
                                              name={'子选项'}
                                              backgroundType={{
                                                type: 'cleanColor',
                                                color: '#ecebed',
                                              }}
                                              $$componentItem={{
                                                id: 'View_3891695',
                                                uid: 'View_3891695',
                                                type: 'View',
                                                ...componentItem,
                                              }}
                                              disabled={false}
                                              visible={true}
                                              readOnly={false}
                                              style={{
                                                textAlign: 'left',
                                                display: 'flex',
                                                padding: '10px 0px 0px 0px',
                                                width: '100%',
                                                flexWrap: 'nowrap',
                                                margin: '0px 0px 0px 0px',
                                              }}
                                              ref={(r: any) =>
                                                (refs['View_3891695'] = r)
                                              }
                                              {...injectData}
                                            >
                                              <Text
                                                name={'子选项索引'}
                                                content={(function () {
                                                  if (rowIndex == 0) {
                                                    return 'A';
                                                  } else if (rowIndex == 1) {
                                                    return 'B';
                                                  } else if (rowIndex == 2) {
                                                    return 'C';
                                                  } else if (rowIndex == 3) {
                                                    return 'D';
                                                  } else if (rowIndex == 4) {
                                                    return 'E';
                                                  } else if (rowIndex == 5) {
                                                    return 'F';
                                                  }
                                                })()}
                                                textType={'h1'}
                                                version={'1.0'}
                                                showHtml={false}
                                                $$componentItem={{
                                                  id: 'Text_796308',
                                                  uid: 'Text_796308',
                                                  type: 'Text',
                                                  ...componentItem,
                                                }}
                                                disabled={false}
                                                visible={true}
                                                readOnly={false}
                                                style={{
                                                  textAlign: 'left',
                                                  fontSize: 15,
                                                  lineHeight: 'autopx',
                                                  color: '#1c242e',
                                                  backgroundColor:
                                                    'rgba(255, 255, 255,0)',
                                                }}
                                                ref={(r: any) =>
                                                  (refs['Text_796308'] = r)
                                                }
                                                {...injectData}
                                              />
                                              <Text
                                                name={'分割符'}
                                                content={'、'}
                                                textType={'h1'}
                                                version={'1.0'}
                                                showHtml={false}
                                                $$componentItem={{
                                                  id: 'Text_487071',
                                                  uid: 'Text_487071',
                                                  type: 'Text',
                                                  ...componentItem,
                                                }}
                                                disabled={false}
                                                visible={true}
                                                readOnly={false}
                                                style={{
                                                  textAlign: 'left',
                                                  fontSize: 15,
                                                  lineHeight: 'autopx',
                                                  color: '#1c242e',
                                                  backgroundColor:
                                                    'rgba(255, 255, 255,0)',
                                                }}
                                                ref={(r: any) =>
                                                  (refs['Text_487071'] = r)
                                                }
                                                {...injectData}
                                              />
                                              <Text
                                                name={'子选项内容'}
                                                content={rowData?.option}
                                                textType={'h1'}
                                                version={'1.0'}
                                                showHtml={false}
                                                $$componentItem={{
                                                  id: 'Text_200865',
                                                  uid: 'Text_200865',
                                                  type: 'Text',
                                                  ...componentItem,
                                                }}
                                                disabled={false}
                                                visible={true}
                                                readOnly={false}
                                                style={{
                                                  textAlign: 'left',
                                                  fontSize: 15,
                                                  lineHeight: 'autopx',
                                                  color: '#1c242e',
                                                  backgroundColor:
                                                    'rgba(255, 255, 255,0)',
                                                }}
                                                ref={(r: any) =>
                                                  (refs['Text_200865'] = r)
                                                }
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
                          </>
                        );
                      },
                    },
                  };
                }}
              />
            </View>
          </View>
          <View
            name={'判断题'}
            $$componentItem={{
              id: 'View_822026',
              uid: 'View_822026',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ textAlign: 'left', display: 'block', width: '100%' }}
            ref={(r: any) => (refs['View_822026'] = r)}
            {...injectData}
          >
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              $$componentItem={{
                id: 'View_0338295',
                uid: 'View_0338295',
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
                padding: '0px 0px 0px 0px',
                width: '100%',
                justifyContent: 'flex-start',
              }}
              ref={(r: any) => (refs['View_0338295'] = r)}
              {...injectData}
            >
              <Text
                name={'文本'}
                content={'三、判断题（'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_94249',
                  uid: 'Text_94249',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_94249'] = r)}
                {...injectData}
              />
              <Text
                name={'分值'}
                content={'2'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_1111578',
                  uid: 'Text_1111578',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_1111578'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'分/题，共'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_6304954',
                  uid: 'Text_6304954',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_6304954'] = r)}
                {...injectData}
              />
              <Text
                name={'题目个数'}
                content={'10'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_117901',
                  uid: 'Text_117901',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_117901'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'题，'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_7737962',
                  uid: 'Text_7737962',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_7737962'] = r)}
                {...injectData}
              />
              <Text
                name={'总分'}
                content={'20'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_131555',
                  uid: 'Text_131555',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_131555'] = r)}
                {...injectData}
              />
              <Text
                name={'文本'}
                content={'分）'}
                textType={'h1'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_587217',
                  uid: 'Text_587217',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  lineHeight: '24px',
                  color: '#1c242e',
                  backgroundColor: 'rgba(255, 255, 255,0)',
                }}
                ref={(r: any) => (refs['Text_587217'] = r)}
                {...injectData}
              />
            </View>
            <View
              name={'普通容器'}
              backgroundType={{ type: 'cleanColor' }}
              className={'View_7107975'}
              $$componentItem={{
                id: 'View_7107975',
                uid: 'View_7107975',
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
                margin: '0px 0px 0px 20px',
              }}
              ref={(r: any) => (refs['View_7107975'] = r)}
              {...injectData}
            >
              <LoopList
                name={'循环列表'}
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
                gridData={data?.getExamQuestrions?.judge?.list}
                fixedWidth={true}
                $$componentItem={{
                  id: 'LoopList_762297',
                  uid: 'LoopList_762297',
                  type: 'LoopList',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ minHeight: 40, width: '100%' }}
                ref={(r: any) => (refs['LoopList_762297'] = r)}
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
                              name={'题目信息'}
                              backgroundType={{ type: 'cleanColor' }}
                              $$componentItem={{
                                id: 'View_497281',
                                uid: 'View_497281',
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
                                padding: '0px 0px 0px 0px',
                                width: '100%',
                              }}
                              ref={(r: any) => (refs['View_497281'] = r)}
                              {...injectData}
                            >
                              <Text
                                name={'题目索引'}
                                content={rowIndex + 1}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_3906843',
                                  uid: 'Text_3906843',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_3906843'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'分割符'}
                                content={'、'}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_172303',
                                  uid: 'Text_172303',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_172303'] = r)}
                                {...injectData}
                              />
                              <Text
                                name={'题目内容'}
                                content={rowData?.question}
                                textType={'h1'}
                                version={'1.0'}
                                showHtml={false}
                                $$componentItem={{
                                  id: 'Text_748395',
                                  uid: 'Text_748395',
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
                                  backgroundColor: 'rgba(255, 255, 255,0)',
                                }}
                                ref={(r: any) => (refs['Text_748395'] = r)}
                                {...injectData}
                              />
                            </View>
                            <View
                              name={'选项'}
                              backgroundType={{ type: 'cleanColor' }}
                              $$componentItem={{
                                id: 'View_349423',
                                uid: 'View_349423',
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
                                margin: '0px 0px 0px 10px',
                              }}
                              ref={(r: any) => (refs['View_349423'] = r)}
                              {...injectData}
                            >
                              <LoopList
                                name={'判断列表'}
                                mode={2}
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
                                gridData={rowData?.options}
                                backgroundType={{
                                  type: 'cleanColor',
                                  color: 'rgba(236, 235, 237, 1)',
                                }}
                                $$componentItem={{
                                  id: 'LoopList_51247',
                                  uid: 'LoopList_51247',
                                  type: 'LoopList',
                                  ...componentItem,
                                }}
                                disabled={false}
                                visible={true}
                                readOnly={false}
                                style={{
                                  minHeight: 40,
                                  margin: '0px 0px 0px 0px',
                                }}
                                onChange={(valueKeys: any, values: any) => {
                                  // console 169978335980233730
                                  console.log(values);
                                  const eventDatacustomActionCode18: any = [
                                    {
                                      type: 'customActionCode',
                                      dataId: 169978976314068860,
                                      options: {
                                        compId: 'customActionCode',
                                        compName: 'system',
                                        id: '203197',
                                        pageJsonId: '56899225',
                                        code: 'function main(data,state,success,fail){var answer=values[0];var optionId=answer.id;var questionId=answer.questionId;var flag=0;for(var i=0;i<data.threeAnswer.length;i++){if(data.threeAnswer[i].questionId==questionId){data.threeAnswer[i].optionId=optionId;flag=1;break}}if(flag==0){var _answer={};_answer.optionId=optionId;_answer.questionId=questionId;data.threeAnswer.push(_answer)}success()};',
                                      },
                                      line_number: 2,
                                      callback1: [],
                                      callback2: [],
                                    },
                                  ];
                                  eventDatacustomActionCode18.params =
                                    [
                                      {
                                        title: '选中数据key',
                                        name: 'valueKeys',
                                        value: '$valueKeys$',
                                      },
                                      {
                                        title: '选中数据',
                                        name: 'values',
                                        value: '$values$',
                                      },
                                    ] || [];
                                  CMDGenerator(
                                    eventDatacustomActionCode18,
                                    {
                                      valueKeys,
                                      values,
                                      item,
                                      i,
                                      rowData,
                                      rowIndex,
                                    },
                                    'customActionCode',
                                    {
                                      id: 'customActionCode',
                                      name: 'customActionCode',
                                      type: 'customActionCode',
                                      platform: 'pc',
                                    },
                                  );
                                }}
                                ref={(r: any) => (refs['LoopList_51247'] = r)}
                                {...injectData}
                                getEngineApis={() => {
                                  return {
                                    ...injectData.getEngineApis(),
                                    MemoRenderer: {
                                      renderer: null,
                                      MemoLoopItem: (props: any) => {
                                        const rowData =
                                          props[props.itemKey] ?? props?.item;
                                        const rowIndex =
                                          props[props.indexKey] ?? props?.i;
                                        const item =
                                          props[props.itemKey] ?? props?.item;
                                        const i =
                                          props[props.indexKey] ?? props?.i;
                                        return (
                                          <>
                                            <View
                                              name={'子选项'}
                                              backgroundType={{
                                                type: 'cleanColor',
                                                color: '#ecebed',
                                              }}
                                              $$componentItem={{
                                                id: 'View_071155',
                                                uid: 'View_071155',
                                                type: 'View',
                                                ...componentItem,
                                              }}
                                              disabled={false}
                                              visible={true}
                                              readOnly={false}
                                              style={{
                                                textAlign: 'left',
                                                display: 'flex',
                                                padding: '10px 0px 0px 0px',
                                                width: '100%',
                                                flexWrap: 'nowrap',
                                                margin: '0px 0px 0px 0px',
                                              }}
                                              ref={(r: any) =>
                                                (refs['View_071155'] = r)
                                              }
                                              {...injectData}
                                            >
                                              <Text
                                                name={'子选项索引'}
                                                content={(function () {
                                                  if (0 == rowIndex) {
                                                    return '❎';
                                                  } else {
                                                    return '✅';
                                                  }
                                                })()}
                                                textType={'h1'}
                                                version={'1.0'}
                                                showHtml={false}
                                                $$componentItem={{
                                                  id: 'Text_906983',
                                                  uid: 'Text_906983',
                                                  type: 'Text',
                                                  ...componentItem,
                                                }}
                                                disabled={false}
                                                visible={true}
                                                readOnly={false}
                                                style={{
                                                  textAlign: 'left',
                                                  fontSize: 15,
                                                  lineHeight: 'autopx',
                                                  color: '#1c242e',
                                                  backgroundColor:
                                                    'rgba(255, 255, 255,0)',
                                                }}
                                                ref={(r: any) =>
                                                  (refs['Text_906983'] = r)
                                                }
                                                {...injectData}
                                              />
                                              <Text
                                                name={'子选项内容'}
                                                content={rowData?.option}
                                                textType={'h1'}
                                                version={'1.0'}
                                                showHtml={false}
                                                $$componentItem={{
                                                  id: 'Text_241008',
                                                  uid: 'Text_241008',
                                                  type: 'Text',
                                                  ...componentItem,
                                                }}
                                                disabled={false}
                                                visible={true}
                                                readOnly={false}
                                                style={{
                                                  textAlign: 'left',
                                                  fontSize: 15,
                                                  lineHeight: 'autopx',
                                                  color: '#1c242e',
                                                  backgroundColor:
                                                    'rgba(255, 255, 255,0)',
                                                }}
                                                ref={(r: any) =>
                                                  (refs['Text_241008'] = r)
                                                }
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
                          </>
                        );
                      },
                    },
                  };
                }}
              />
            </View>
          </View>
        </Layout>
        <View
          name={'普通容器'}
          backgroundType={{ type: 'cleanColor' }}
          $$componentItem={{
            id: 'View_529106',
            uid: 'View_529106',
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
          ref={(r: any) => (refs['View_529106'] = r)}
          {...injectData}
        >
          <Button
            name={'按钮'}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            type={'primary'}
            btnIcon={'none'}
            hasIcon={false}
            shape={'default'}
            loading={false}
            btnText={'交卷'}
            $$componentItem={{
              id: 'Button_2566483',
              uid: 'Button_2566483',
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
              color: '#FFF',
              borderSetting: 'border 1px solid ',
              backgroundColor: '',
              border: '1px solid ',
            }}
            onClick={(e: any) => {
              // console 169978759368894850
              console.log(data?.threeAnswer);
              const eventDataapiRequest5: any = [
                {
                  type: 'apiRequest',
                  dataId: 169980478807011900,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '856345',
                    pageJsonId: '56899225',
                    sync: false,
                    method: 'post',
                    url: '/app/orchestration/run',
                    serviceVersionId: '1041006788204048384',
                    serviceCode: 'examScoring',
                    versionCode: '1.0',
                    _serviceType: 'orchestration',
                    _source: 'std',
                    _sourceName: '考生考试判分',
                    _serviceId: '1041006788204048384',
                    _serviceTitle: '考生考试判分: examScoring',
                    _requestType: 'object',
                    valueType: 'object',
                    params: 'object',
                    apiRequestSetParams: [
                      {
                        serviceAttrId: '233018691054',
                        key: '0',
                        code: 'root',
                        name: '根节点',
                        attrType: 'object',
                        mustFlag: 'F',
                        exampleValue: '',
                        defaultValue: '',
                        children: [
                          {
                            serviceAttrId: '460341032849',
                            key: '0-0',
                            parentKey: '0',
                            code: 'exam_id',
                            name: '考试id',
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
                            dataKey: '856345_root.exam_id',
                            value: {
                              type: ['context', '$urlParam.bizId$'],
                              code: '',
                            },
                          },
                          {
                            serviceAttrId: '85271900216748',
                            key: '0-1',
                            parentKey: '0',
                            code: 'record_id',
                            name: '考试记录id',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            _id: 'root.record_id',
                            compType: 'Input',
                            parents: ['root'],
                            parentType: 'object',
                            id: 'root.record_id',
                            dataKey: '856345_root.record_id',
                            value: { type: ['customize'], code: '1' },
                          },
                          {
                            serviceAttrId: '083212516143',
                            busiObjectId: '1040462270148915201',
                            key: '0-2',
                            parentKey: '0',
                            code: 'oneAnswer',
                            name: '考试单选答题',
                            attrType: 'objectArray',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            children: [
                              {
                                serviceAttrId: '4847200567766',
                                busiObjectAttrId: '1040463450807742466',
                                busiObjectId: '1040462270148915201',
                                key: '0-2-0',
                                parentKey: '0-2',
                                code: 'questionId',
                                name: '题目内容',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.oneAnswer.questionId',
                                compType: 'Input',
                                parents: ['root', 'oneAnswer'],
                                parentType: 'objectArray',
                                parentCode: 'oneAnswer',
                                id: 'root.oneAnswer.questionId',
                                dataKey: '856345_root.oneAnswer.questionId',
                              },
                              {
                                serviceAttrId: '157845148209',
                                busiObjectAttrId: '1040463450807742467',
                                busiObjectId: '1040462270148915201',
                                key: '0-2-1',
                                parentKey: '0-2',
                                code: 'optionId',
                                name: '考试选项',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.oneAnswer.optionId',
                                compType: 'Input',
                                parents: ['root', 'oneAnswer'],
                                parentType: 'objectArray',
                                parentCode: 'oneAnswer',
                                id: 'root.oneAnswer.optionId',
                                dataKey: '856345_root.oneAnswer.optionId',
                              },
                            ],
                            _id: 'root.oneAnswer',
                            compType: 'Input',
                            parents: ['root'],
                            parentType: 'object',
                            id: 'root.oneAnswer',
                            dataKey: '856345_root.oneAnswer',
                            value: {
                              type: ['customize'],
                              code: '$data.oneAnswer$',
                            },
                          },
                          {
                            serviceAttrId: '751012629215',
                            key: '0-3',
                            parentKey: '0',
                            code: 'twoAnswer',
                            name: '考试多选答题',
                            attrType: 'objectArray',
                            type: '',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            children: [
                              {
                                serviceAttrId: '471448053288',
                                key: '0-3-0',
                                parentKey: '0-3',
                                code: 'questionId',
                                name: '题目内容',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.twoAnswer.questionId',
                                compType: 'Input',
                                parents: ['root', 'twoAnswer'],
                                parentType: 'objectArray',
                                parentCode: 'twoAnswer',
                                id: 'root.twoAnswer.questionId',
                                dataKey: '856345_root.twoAnswer.questionId',
                              },
                              {
                                serviceAttrId: '413491338912',
                                key: '0-3-1',
                                parentKey: '0-3',
                                code: 'optionId',
                                name: '考试选项',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.twoAnswer.optionId',
                                compType: 'Input',
                                parents: ['root', 'twoAnswer'],
                                parentType: 'objectArray',
                                parentCode: 'twoAnswer',
                                id: 'root.twoAnswer.optionId',
                                dataKey: '856345_root.twoAnswer.optionId',
                              },
                            ],
                            _id: 'root.twoAnswer',
                            compType: 'Input',
                            parents: ['root'],
                            parentType: 'object',
                            id: 'root.twoAnswer',
                            dataKey: '856345_root.twoAnswer',
                            value: {
                              type: ['customize'],
                              code: '$data.twoAnswer$',
                            },
                          },
                          {
                            serviceAttrId: '418693510948',
                            key: '0-4',
                            parentKey: '0',
                            code: 'threeAnswer',
                            name: '考试判断答题',
                            attrType: 'objectArray',
                            type: '',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            children: [
                              {
                                serviceAttrId: '652320149305',
                                key: '0-4-0',
                                parentKey: '0-4',
                                code: 'questionId',
                                name: '题目内容',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.threeAnswer.questionId',
                                compType: 'Input',
                                parents: ['root', 'threeAnswer'],
                                parentType: 'objectArray',
                                parentCode: 'threeAnswer',
                                id: 'root.threeAnswer.questionId',
                                dataKey: '856345_root.threeAnswer.questionId',
                              },
                              {
                                serviceAttrId: '96174332761',
                                key: '0-4-1',
                                parentKey: '0-4',
                                code: 'optionId',
                                name: '考试选项',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.threeAnswer.optionId',
                                compType: 'Input',
                                parents: ['root', 'threeAnswer'],
                                parentType: 'objectArray',
                                parentCode: 'threeAnswer',
                                id: 'root.threeAnswer.optionId',
                                dataKey: '856345_root.threeAnswer.optionId',
                              },
                            ],
                            _id: 'root.threeAnswer',
                            compType: 'Input',
                            parents: ['root'],
                            parentType: 'object',
                            id: 'root.threeAnswer',
                            dataKey: '856345_root.threeAnswer',
                            value: {
                              type: ['customize'],
                              code: '$data.threeAnswer$',
                            },
                          },
                        ],
                        _id: 'root',
                        compType: 'Input',
                        isRoot: true,
                        parents: [],
                        id: 'root',
                        dataKey: '856345_root',
                      },
                    ],
                  },
                  line_number: 2,
                  callback1: [
                    {
                      type: 'showModal',
                      dataId: 169980483469399600,
                      options: {
                        compId: 'showModal',
                        compName: 'system',
                        id: '69397',
                        pageJsonId: '56899225',
                        type: 'success',
                        content: '$reply_856345?.score$',
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDataapiRequest5.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDataapiRequest5, { e }, 'apiRequest', {
                id: 'apiRequest',
                name: 'apiRequest',
                type: 'apiRequest',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Button_2566483'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Kaoshitimu9180$$Page, {
  pageId: '1040532731008397312',
  hasLogin: true,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
