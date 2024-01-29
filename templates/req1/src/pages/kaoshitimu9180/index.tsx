// 注意: 出码模块正在调试
import React from 'react';

import { View, Layout, Text, LoopList, Button } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { styleInject } from '@/utils/styleInject';

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
                                      rowData,
                                      rowIndex,
                                      item,
                                      i,
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
                                      rowData,
                                      rowIndex,
                                      item,
                                      i,
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
                                      rowData,
                                      rowIndex,
                                      item,
                                      i,
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
  dataSource: [
    {
      name: 'LCDP_EXAMS',
      source: 'object',
      type: 'object',
      requestType: 'object',
      filterParams: [
        {
          attrId: '133633',
          code: 'primaryValue',
          name: '主键值',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static', value: '$urlParam.bizId$' },
          key: 'primaryValue',
        },
      ],
      outParams: [
        {
          attrId: '731589',
          code: 'id',
          name: '主键',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016640',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '693585',
          code: 'name',
          name: '考试标题',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016641',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '5360604',
          code: 'creator_id',
          name: '创建人',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016642',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '5968668',
          code: 'creator_id_introduce',
          name: '创建人翻译',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          _virtualAttrId: '1040454540508016642-introduce-virtual',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '633392',
          code: 'create_time',
          name: '创建时间',
          type: 'datetime',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016643',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '236332',
          code: 'updator_id',
          name: '修改人',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016644',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '368162',
          code: 'updator_id_introduce',
          name: '修改人翻译',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          _virtualAttrId: '1040454540508016644-introduce-virtual',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '3193775',
          code: 'update_time',
          name: '修改时间',
          type: 'datetime',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016645',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '501837',
          code: 'description',
          name: '考试描述',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016646',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '7009924',
          code: 'start_time',
          name: '考试开始时间',
          type: 'datetime',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016647',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '2559376',
          code: 'end_time',
          name: '考试截止时间',
          type: 'datetime',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016648',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '3826634',
          code: 'state',
          name: '考试状态',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016649',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '508086',
          code: 'duration',
          name: '考试时长(分钟)',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016650',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '440277',
          code: 'score',
          name: '总分数',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040454540508016651',
          sourceId: '1040454540625457153',
        },
        {
          attrId: '737027',
          code: 'type',
          name: '考试类型',
          type: 'long',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '1040467867271442444',
          sourceId: '1040454540625457153',
        },
      ],
      config: {
        hooks: [],
        isInit: true,
        excludeSceneCodes: [],
        options: {
          object: {
            busiObjectCode: 'LCDP_EXAMS',
            busiObjectCat: 'entity',
            busiObjectId: '1040454540625457153',
            appId: '1040452624180850688',
            busiObjectName: '考试实例',
            busiObjectService: [
              {
                appServiceId: '10404545406254571531',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'object',
                serviceCode: 'insert',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: null,
                serviceName: '新增',
                requestObj: null,
                serviceMethod: 'post',
              },
              {
                appServiceId: '10404545406254571532',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'array',
                serviceCode: 'batchInsert',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: null,
                serviceName: '批量新增',
                requestObj: null,
                serviceMethod: 'post',
              },
              {
                appServiceId: '10404545406254571533',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'field',
                serviceCode: 'deleteByKey',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: [],
                serviceName: '根据主键删除数据',
                requestObj: [
                  {
                    name: '业务对象标识',
                    code: 'busiObjectId',
                    attrType: 'field',
                    type: '1400',
                    children: null,
                    primaryKey: null,
                    spec: null,
                  },
                  {
                    name: '业务对象属性值集合',
                    code: 'attrs',
                    attrType: 'object',
                    type: null,
                    children: [
                      {
                        name: '主键值',
                        code: 'primaryValue',
                        attrType: 'field',
                        type: 'long',
                        children: null,
                        primaryKey: true,
                        spec: null,
                      },
                    ],
                    primaryKey: null,
                    spec: null,
                  },
                  {
                    name: '动作标识',
                    code: 'actionId',
                    attrType: 'field',
                    type: '1200',
                    children: null,
                    primaryKey: null,
                    spec: null,
                  },
                  {
                    name: '业务场景编码',
                    code: 'sceneCode',
                    attrType: 'field',
                    type: '1200',
                    children: null,
                    primaryKey: null,
                    spec: null,
                  },
                ],
                serviceMethod: 'post',
                api: '/app/object/deleteByKey',
                _source: 'object',
                _serviceId: '10404545406254571533',
                _serviceTitle:
                  '考试实例根据主键删除数据: /app/object/deleteByKey',
                _sourceName: '考试实例',
                isServiceParam: true,
                originRequestObj: [
                  {
                    name: '根节点',
                    code: 'root',
                    attrType: 'object',
                    type: null,
                    children: [
                      {
                        name: '业务对象标识',
                        code: 'busiObjectId',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: null,
                        spec: null,
                      },
                      {
                        name: '业务对象属性值集合',
                        code: 'attrs',
                        attrType: 'object',
                        type: null,
                        children: [
                          {
                            name: '主键值',
                            code: 'primaryValue',
                            attrType: 'field',
                            type: '1400',
                            children: null,
                            primaryKey: true,
                            spec: null,
                          },
                        ],
                        primaryKey: null,
                        spec: null,
                      },
                      {
                        name: '动作标识',
                        code: 'actionId',
                        attrType: 'field',
                        type: '1200',
                        children: null,
                        primaryKey: null,
                        spec: null,
                      },
                      {
                        name: '业务场景编码',
                        code: 'sceneCode',
                        attrType: 'field',
                        type: '1200',
                        children: null,
                        primaryKey: null,
                        spec: null,
                      },
                    ],
                    primaryKey: null,
                    spec: null,
                  },
                ],
                requestType: 'object',
                originResponseObj: [
                  {
                    name: '根节点',
                    code: 'root',
                    attrType: 'field',
                    type: '1400',
                    children: null,
                    primaryKey: null,
                    spec: null,
                  },
                ],
              },
              {
                appServiceId: '10404545406254571534',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'long',
                serviceCode: 'batchDelete',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: null,
                serviceName: '批量删除',
                requestObj: null,
                serviceMethod: 'post',
              },
              {
                appServiceId: '10404545406254571535',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'object',
                serviceCode: 'updateByKey',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: null,
                serviceName: '根据主键更新数据',
                requestObj: null,
                serviceMethod: 'post',
              },
              {
                busiObjectId: '1040454540625457153',
                appServiceId: '10404545406254571536',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'object',
                serviceCode: 'selectByKey',
                servicePath: '/app/object',
                responseObj: [
                  {
                    name: '主键',
                    code: 'id',
                    attrType: 'field',
                    type: 'long',
                    children: null,
                    primaryKey: true,
                    spec: {
                      busiObjectAttrId: '1040454540508016640',
                      busiObjectId: '1040454540625457153',
                      compType: 'InputNumber',
                      attrDataType: 'integer',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: null,
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '主键',
                      attrCode: 'id',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '考试标题',
                    code: 'name',
                    attrType: 'field',
                    type: 'string',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016641',
                      busiObjectId: '1040454540625457153',
                      compType: 'Input',
                      attrDataType: 'text',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: null,
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '考试标题',
                      attrCode: 'name',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '创建人',
                    code: 'creator_id',
                    attrType: 'field',
                    type: 'long',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016642',
                      busiObjectId: '1040454540625457153',
                      compType: 'SuperSelect',
                      attrDataType: 'associated_field',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule:
                        '[{"attrId":"1001","objectId":"1001","relAttr":{"appId":"-1","appTableId":"1001","assignRuleCode":"seq","assignRuleObj":"seq_lcdp_domain_user","attrCode":"user_id","attrDataType":"integer","attrName":"用户ID","busiObjectAttrId":"1001","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"InputNumber","createdTime":1660716957081,"creatorId":"10037","dataLength":"18","dataType":"2000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"F","primaryKey":"T","sort":"0","statusCd":"00A","statusTime":1660716957081,"systemFieldType":"primary_key","tableColumnDataType":"2000","tableColumnId":"1001","uniqueKey":"T"},"showAttr":{"appId":"-1","appTableId":"1001","attrCode":"user_name","attrDataType":"text","attrName":"用户名称","busiObjectAttrId":"1002","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"Input","createdTime":1660716957126,"creatorId":"10037","dataLength":"40","dataType":"1000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"T","primaryKey":"F","sort":"1","statusCd":"00A","statusTime":1660716957126,"systemFieldType":"title","tableColumnDataType":"1000","tableColumnId":"1002","uniqueKey":"F"},"showAttrId":"1002","transCode":"creator_id_introduce"}]',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '创建人',
                      attrCode: 'creator_id',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '创建人翻译',
                    code: 'creator_id_introduce',
                    attrType: 'field',
                    type: 'string',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016642',
                      busiObjectId: '1040454540625457153',
                      compType: 'SuperSelect',
                      attrDataType: 'text',
                      defaultValue: null,
                      isVirtual: 'T',
                      otherFieldRule: null,
                      staticCode: null,
                      isPersistence: 'F',
                      attrName: '创建人',
                      attrCode: 'creator_id',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '创建时间',
                    code: 'create_time',
                    attrType: 'field',
                    type: 'datetime',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016643',
                      busiObjectId: '1040454540625457153',
                      compType: 'TimePicker',
                      attrDataType: 'datetime',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: null,
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '创建时间',
                      attrCode: 'create_time',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '修改人',
                    code: 'updator_id',
                    attrType: 'field',
                    type: 'long',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016644',
                      busiObjectId: '1040454540625457153',
                      compType: 'SuperSelect',
                      attrDataType: 'associated_field',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule:
                        '[{"attrId":"1001","objectId":"1001","relAttr":{"appId":"-1","appTableId":"1001","assignRuleCode":"seq","assignRuleObj":"seq_lcdp_domain_user","attrCode":"user_id","attrDataType":"integer","attrName":"用户ID","busiObjectAttrId":"1001","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"InputNumber","createdTime":1660716957081,"creatorId":"10037","dataLength":"18","dataType":"2000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"F","primaryKey":"T","sort":"0","statusCd":"00A","statusTime":1660716957081,"systemFieldType":"primary_key","tableColumnDataType":"2000","tableColumnId":"1001","uniqueKey":"T"},"showAttr":{"appId":"-1","appTableId":"1001","attrCode":"user_name","attrDataType":"text","attrName":"用户名称","busiObjectAttrId":"1002","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"Input","createdTime":1660716957126,"creatorId":"10037","dataLength":"40","dataType":"1000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"T","primaryKey":"F","sort":"1","statusCd":"00A","statusTime":1660716957126,"systemFieldType":"title","tableColumnDataType":"1000","tableColumnId":"1002","uniqueKey":"F"},"showAttrId":"1002","transCode":"updator_id_introduce"}]',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '修改人',
                      attrCode: 'updator_id',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '修改人翻译',
                    code: 'updator_id_introduce',
                    attrType: 'field',
                    type: 'string',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016644',
                      busiObjectId: '1040454540625457153',
                      compType: 'SuperSelect',
                      attrDataType: 'text',
                      defaultValue: null,
                      isVirtual: 'T',
                      otherFieldRule: null,
                      staticCode: null,
                      isPersistence: 'F',
                      attrName: '修改人',
                      attrCode: 'updator_id',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '修改时间',
                    code: 'update_time',
                    attrType: 'field',
                    type: 'datetime',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016645',
                      busiObjectId: '1040454540625457153',
                      compType: 'TimePicker',
                      attrDataType: 'datetime',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: null,
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '修改时间',
                      attrCode: 'update_time',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '考试描述',
                    code: 'description',
                    attrType: 'field',
                    type: 'string',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016646',
                      busiObjectId: '1040454540625457153',
                      compType: 'Input',
                      attrDataType: 'text',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: '',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '考试描述',
                      attrCode: 'description',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '考试开始时间',
                    code: 'start_time',
                    attrType: 'field',
                    type: 'datetime',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016647',
                      busiObjectId: '1040454540625457153',
                      compType: 'TimePicker',
                      attrDataType: 'datetime',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: '',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '考试开始时间',
                      attrCode: 'start_time',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '考试截止时间',
                    code: 'end_time',
                    attrType: 'field',
                    type: 'datetime',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016648',
                      busiObjectId: '1040454540625457153',
                      compType: 'TimePicker',
                      attrDataType: 'datetime',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: '',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '考试截止时间',
                      attrCode: 'end_time',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '考试状态',
                    code: 'state',
                    attrType: 'field',
                    type: 'long',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016649',
                      busiObjectId: '1040454540625457153',
                      compType: 'InputNumber',
                      attrDataType: 'short',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: '',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '考试状态',
                      attrCode: 'state',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '考试时长(分钟)',
                    code: 'duration',
                    attrType: 'field',
                    type: 'long',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016650',
                      busiObjectId: '1040454540625457153',
                      compType: 'InputNumber',
                      attrDataType: 'integer',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: '',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '考试时长(分钟)',
                      attrCode: 'duration',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '总分数',
                    code: 'score',
                    attrType: 'field',
                    type: 'long',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040454540508016651',
                      busiObjectId: '1040454540625457153',
                      compType: 'InputNumber',
                      attrDataType: 'integer',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: '',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '总分数',
                      attrCode: 'score',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                  {
                    name: '考试类型',
                    code: 'type',
                    attrType: 'field',
                    type: 'long',
                    children: null,
                    primaryKey: false,
                    spec: {
                      busiObjectAttrId: '1040467867271442444',
                      busiObjectId: '1040454540625457153',
                      compType: 'InputNumber',
                      attrDataType: 'short',
                      defaultValue: null,
                      isVirtual: null,
                      otherFieldRule: '',
                      staticCode: null,
                      isPersistence: 'T',
                      attrName: '考试类型',
                      attrCode: 'type',
                      isMoreShow: null,
                      introduceBusiObjId: null,
                      introduceRelAttrCode: null,
                    },
                    sourceId: '1040454540625457153',
                  },
                ],
                serviceName: '根据主键获取数据',
                requestObj: [
                  {
                    name: '业务对象标识',
                    code: 'busiObjectId',
                    attrType: 'field',
                    type: '1400',
                    children: null,
                    primaryKey: null,
                    spec: null,
                  },
                  {
                    name: '业务对象属性值集合',
                    code: 'attrs',
                    attrType: 'object',
                    type: null,
                    children: [
                      {
                        name: '主键值',
                        code: 'primaryValue',
                        attrType: 'field',
                        type: 'string',
                        children: null,
                        primaryKey: true,
                        spec: null,
                      },
                    ],
                    primaryKey: null,
                    spec: null,
                  },
                  {
                    name: '动作标识',
                    code: 'actionId',
                    attrType: 'field',
                    type: '1200',
                    children: null,
                    primaryKey: null,
                    spec: null,
                  },
                  {
                    name: '业务场景编码',
                    code: 'sceneCode',
                    attrType: 'field',
                    type: '1400',
                    children: null,
                    primaryKey: null,
                    spec: null,
                  },
                ],
                serviceMethod: 'post',
                isServiceParam: true,
                originRequestObj: [
                  {
                    name: '根节点',
                    code: 'root',
                    attrType: 'object',
                    type: null,
                    children: [
                      {
                        name: '业务对象标识',
                        code: 'busiObjectId',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: null,
                        spec: null,
                      },
                      {
                        name: '业务对象属性值集合',
                        code: 'attrs',
                        attrType: 'object',
                        type: null,
                        children: [
                          {
                            name: '主键值',
                            code: 'primaryValue',
                            attrType: 'field',
                            type: '1200',
                            children: null,
                            primaryKey: true,
                            spec: null,
                          },
                        ],
                        primaryKey: null,
                        spec: null,
                      },
                      {
                        name: '动作标识',
                        code: 'actionId',
                        attrType: 'field',
                        type: '1200',
                        children: null,
                        primaryKey: null,
                        spec: null,
                      },
                      {
                        name: '业务场景编码',
                        code: 'sceneCode',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: null,
                        spec: null,
                      },
                    ],
                    primaryKey: null,
                    spec: null,
                  },
                ],
                requestType: 'object',
                originResponseObj: [
                  {
                    name: '根节点',
                    code: 'root',
                    attrType: 'object',
                    type: null,
                    children: [
                      {
                        name: '主键',
                        code: 'id',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: true,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016640',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '主键',
                          attrCode: 'id',
                          compType: 'InputNumber',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542592',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 0,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: null,
                          attrDataType: 'integer',
                          dataType: '2000',
                          dataLength: '16',
                          dataScale: null,
                          primaryKey: 'T',
                          uniqueKey: 'T',
                          uniqueIndexCode: null,
                          nullable: 'F',
                          fuzzyQuery: 'F',
                          systemFieldType: 'primary_key',
                          assignRuleCode: 'seq',
                          assignRuleObj: 'seq_lcdp_exams_id',
                          otherFieldRule: null,
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '考试标题',
                        code: 'name',
                        attrType: 'field',
                        type: '1200',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016641',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '考试标题',
                          attrCode: 'name',
                          compType: 'Input',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542593',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 1,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: null,
                          attrDataType: 'text',
                          dataType: '1000',
                          dataLength: '256',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'T',
                          systemFieldType: 'title',
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: null,
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '创建人',
                        code: 'creator_id',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016642',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '创建人',
                          attrCode: 'creator_id',
                          compType: 'SuperSelect',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542594',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 2,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: null,
                          attrDataType: 'associated_field',
                          dataType: '2000',
                          dataLength: '16',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: 'creator_id',
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule:
                            '[{"attrId":"1001","objectId":"1001","relAttr":{"appId":"-1","appTableId":"1001","assignRuleCode":"seq","assignRuleObj":"seq_lcdp_domain_user","attrCode":"user_id","attrDataType":"integer","attrName":"用户ID","busiObjectAttrId":"1001","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"InputNumber","createdTime":1660716957081,"creatorId":"10037","dataLength":"18","dataType":"2000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"F","primaryKey":"T","sort":"0","statusCd":"00A","statusTime":1660716957081,"systemFieldType":"primary_key","tableColumnDataType":"2000","tableColumnId":"1001","uniqueKey":"T"},"showAttr":{"appId":"-1","appTableId":"1001","attrCode":"user_name","attrDataType":"text","attrName":"用户名称","busiObjectAttrId":"1002","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"Input","createdTime":1660716957126,"creatorId":"10037","dataLength":"40","dataType":"1000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"T","primaryKey":"F","sort":"1","statusCd":"00A","statusTime":1660716957126,"systemFieldType":"title","tableColumnDataType":"1000","tableColumnId":"1002","uniqueKey":"F"},"showAttrId":"1002","transCode":"creator_id_introduce"}]',
                          relObjectAttrId: '1001',
                          isVirtual: null,
                        },
                      },
                      {
                        name: '创建人翻译',
                        code: 'creator_id_introduce',
                        attrType: 'field',
                        type: '1200',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016642',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '创建人',
                          attrCode: 'creator_id',
                          compType: 'SuperSelect',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'F',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542594',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 2,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: null,
                          attrDataType: 'text',
                          dataType: '2000',
                          dataLength: '16',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: null,
                          relObjectAttrId: null,
                          isVirtual: 'T',
                        },
                      },
                      {
                        name: '创建时间',
                        code: 'create_time',
                        attrType: 'field',
                        type: '1100',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016643',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '创建时间',
                          attrCode: 'create_time',
                          compType: 'TimePicker',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542595',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 3,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: null,
                          attrDataType: 'datetime',
                          dataType: '3000',
                          dataLength: null,
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: 'create_time',
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: null,
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '修改人',
                        code: 'updator_id',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016644',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '修改人',
                          attrCode: 'updator_id',
                          compType: 'SuperSelect',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542596',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 4,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: null,
                          attrDataType: 'associated_field',
                          dataType: '2000',
                          dataLength: '16',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: 'updator_id',
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule:
                            '[{"attrId":"1001","objectId":"1001","relAttr":{"appId":"-1","appTableId":"1001","assignRuleCode":"seq","assignRuleObj":"seq_lcdp_domain_user","attrCode":"user_id","attrDataType":"integer","attrName":"用户ID","busiObjectAttrId":"1001","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"InputNumber","createdTime":1660716957081,"creatorId":"10037","dataLength":"18","dataType":"2000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"F","primaryKey":"T","sort":"0","statusCd":"00A","statusTime":1660716957081,"systemFieldType":"primary_key","tableColumnDataType":"2000","tableColumnId":"1001","uniqueKey":"T"},"showAttr":{"appId":"-1","appTableId":"1001","attrCode":"user_name","attrDataType":"text","attrName":"用户名称","busiObjectAttrId":"1002","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"Input","createdTime":1660716957126,"creatorId":"10037","dataLength":"40","dataType":"1000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"T","primaryKey":"F","sort":"1","statusCd":"00A","statusTime":1660716957126,"systemFieldType":"title","tableColumnDataType":"1000","tableColumnId":"1002","uniqueKey":"F"},"showAttrId":"1002","transCode":"updator_id_introduce"}]',
                          relObjectAttrId: '1001',
                          isVirtual: null,
                        },
                      },
                      {
                        name: '修改人翻译',
                        code: 'updator_id_introduce',
                        attrType: 'field',
                        type: '1200',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016644',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '修改人',
                          attrCode: 'updator_id',
                          compType: 'SuperSelect',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'F',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542596',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 4,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: null,
                          attrDataType: 'text',
                          dataType: '2000',
                          dataLength: '16',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: null,
                          relObjectAttrId: null,
                          isVirtual: 'T',
                        },
                      },
                      {
                        name: '修改时间',
                        code: 'update_time',
                        attrType: 'field',
                        type: '1100',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016645',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '修改时间',
                          attrCode: 'update_time',
                          compType: 'TimePicker',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542597',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 5,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: null,
                          attrDataType: 'datetime',
                          dataType: '3000',
                          dataLength: null,
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: 'update_time',
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: null,
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '考试描述',
                        code: 'description',
                        attrType: 'field',
                        type: '1200',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016646',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '考试描述',
                          attrCode: 'description',
                          compType: 'Input',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540562542598',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 6,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: '',
                          attrDataType: 'text',
                          dataType: '1000',
                          dataLength: '500',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: '',
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '考试开始时间',
                        code: 'start_time',
                        attrType: 'field',
                        type: '1100',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016647',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '考试开始时间',
                          attrCode: 'start_time',
                          compType: 'TimePicker',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540566736896',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 7,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: '',
                          attrDataType: 'datetime',
                          dataType: '3000',
                          dataLength: null,
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: '',
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '考试截止时间',
                        code: 'end_time',
                        attrType: 'field',
                        type: '1100',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016648',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '考试截止时间',
                          attrCode: 'end_time',
                          compType: 'TimePicker',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: null,
                          checkCode: null,
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540566736897',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 8,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: '',
                          attrDataType: 'datetime',
                          dataType: '3000',
                          dataLength: null,
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: '',
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '考试状态',
                        code: 'state',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: '752954877751296',
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: '2023-11-11 13:12:46',
                          statusTime: '2023-11-11 13:12:46',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016649',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '考试状态',
                          attrCode: 'state',
                          compType: 'InputNumber',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: '1000',
                          checkCode: '^(\\-|\\+)?\\d+$',
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540566736898',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 9,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: '',
                          attrDataType: 'short',
                          dataType: '2000',
                          dataLength: '4',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: '',
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '考试时长(分钟)',
                        code: 'duration',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: null,
                          statusTime: '2023-11-11 10:35:17',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016650',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '考试时长(分钟)',
                          attrCode: 'duration',
                          compType: 'InputNumber',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: '1000',
                          checkCode: '^(\\-|\\+)?\\d+$',
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540566736899',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 10,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: '',
                          attrDataType: 'integer',
                          dataType: '2000',
                          dataLength: '8',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: '',
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '总分数',
                        code: 'score',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: '752954877751296',
                          createdTime: '2023-11-11 10:35:17',
                          updatedTime: '2023-11-11 11:13:35',
                          statusTime: '2023-11-11 11:13:35',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040454540508016651',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '总分数',
                          attrCode: 'score',
                          compType: 'InputNumber',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: '1000',
                          checkCode: '^(\\-|\\+)?\\d+$',
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040454540566736900',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 11,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: '',
                          attrDataType: 'integer',
                          dataType: '2000',
                          dataLength: '8',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: '',
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                      {
                        name: '考试类型',
                        code: 'type',
                        attrType: 'field',
                        type: '1400',
                        children: null,
                        primaryKey: false,
                        spec: {
                          statusCd: '00A',
                          creatorId: '752954877751296',
                          updatorId: null,
                          createdTime: '2023-11-11 11:28:14',
                          updatedTime: null,
                          statusTime: '2023-11-11 11:28:14',
                          remark: null,
                          tenantCode: null,
                          busiObjectAttrId: '1040467867271442444',
                          appId: '1040452624180850688',
                          busiObjectId: '1040454540625457153',
                          attrName: '考试类型',
                          attrCode: 'type',
                          compType: 'InputNumber',
                          staticCode: null,
                          attrGroupName: null,
                          desensitizationRuleCode: null,
                          isNeedAuthControl: null,
                          authCode: null,
                          isPersistence: 'T',
                          isCheck: null,
                          checkType: '1000',
                          checkCode: '^(\\-|\\+)?\\d+$',
                          checkValue: null,
                          checkMessage: null,
                          appTableId: '1040454540549959680',
                          tableColumnId: '1040467867355328512',
                          isVerticalTableColumn: 'F',
                          verticalColumnId: null,
                          verticalColumnCode: null,
                          sort: 12,
                          colspanProportion: null,
                          busiGroup: '1000',
                          defaultValue: null,
                          relPageUrl: null,
                          handlerClass: null,
                          isMoreShow: null,
                          introduceBusiObjId: null,
                          introduceRelAttrCode: null,
                          introduceShowAttrCode: null,
                          parentAttrCode: null,
                          customizedAttribute: '',
                          attrDataType: 'short',
                          dataType: '2000',
                          dataLength: '4',
                          dataScale: null,
                          primaryKey: 'F',
                          uniqueKey: 'F',
                          uniqueIndexCode: null,
                          nullable: 'T',
                          fuzzyQuery: 'F',
                          systemFieldType: null,
                          assignRuleCode: null,
                          assignRuleObj: null,
                          otherFieldRule: '',
                          relObjectAttrId: null,
                          isVirtual: null,
                        },
                      },
                    ],
                    primaryKey: null,
                    spec: null,
                  },
                ],
              },
              {
                appServiceId: '10404545406254571537',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'array',
                serviceCode: 'selectByKeys',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: null,
                serviceName: '根据主键集合获取数据',
                requestObj: null,
                serviceMethod: 'post',
              },
              {
                appServiceId: '10404545406254571538',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'array',
                serviceCode: 'selectAllList',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: null,
                serviceName: '查询列表数据',
                requestObj: null,
                serviceMethod: 'post',
              },
              {
                appServiceId: '10404545406254571539',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'object',
                serviceCode: 'selectTree',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: null,
                serviceName: '根据父节点查询树结构数据',
                requestObj: null,
                serviceMethod: 'post',
              },
              {
                appServiceId: '104045454062545715310',
                busiObjectCode: 'LCDP_EXAMS',
                responseType: 'object',
                serviceCode: 'selectAllPage',
                busiObjectId: '1040454540625457153',
                servicePath: '/app/object',
                responseObj: null,
                serviceName: '查询分页数据',
                requestObj: null,
                serviceMethod: 'post',
              },
            ],
          },
          service: {
            busiObjectId: '1040454540625457153',
            appServiceId: '10404545406254571536',
            busiObjectCode: 'LCDP_EXAMS',
            responseType: 'object',
            serviceCode: 'selectByKey',
            servicePath: '/app/object',
            responseObj: [
              {
                name: '主键',
                code: 'id',
                attrType: 'field',
                type: 'long',
                children: null,
                primaryKey: true,
                spec: {
                  busiObjectAttrId: '1040454540508016640',
                  busiObjectId: '1040454540625457153',
                  compType: 'InputNumber',
                  attrDataType: 'integer',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: null,
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '主键',
                  attrCode: 'id',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '考试标题',
                code: 'name',
                attrType: 'field',
                type: 'string',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016641',
                  busiObjectId: '1040454540625457153',
                  compType: 'Input',
                  attrDataType: 'text',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: null,
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '考试标题',
                  attrCode: 'name',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '创建人',
                code: 'creator_id',
                attrType: 'field',
                type: 'long',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016642',
                  busiObjectId: '1040454540625457153',
                  compType: 'SuperSelect',
                  attrDataType: 'associated_field',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule:
                    '[{"attrId":"1001","objectId":"1001","relAttr":{"appId":"-1","appTableId":"1001","assignRuleCode":"seq","assignRuleObj":"seq_lcdp_domain_user","attrCode":"user_id","attrDataType":"integer","attrName":"用户ID","busiObjectAttrId":"1001","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"InputNumber","createdTime":1660716957081,"creatorId":"10037","dataLength":"18","dataType":"2000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"F","primaryKey":"T","sort":"0","statusCd":"00A","statusTime":1660716957081,"systemFieldType":"primary_key","tableColumnDataType":"2000","tableColumnId":"1001","uniqueKey":"T"},"showAttr":{"appId":"-1","appTableId":"1001","attrCode":"user_name","attrDataType":"text","attrName":"用户名称","busiObjectAttrId":"1002","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"Input","createdTime":1660716957126,"creatorId":"10037","dataLength":"40","dataType":"1000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"T","primaryKey":"F","sort":"1","statusCd":"00A","statusTime":1660716957126,"systemFieldType":"title","tableColumnDataType":"1000","tableColumnId":"1002","uniqueKey":"F"},"showAttrId":"1002","transCode":"creator_id_introduce"}]',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '创建人',
                  attrCode: 'creator_id',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '创建人翻译',
                code: 'creator_id_introduce',
                attrType: 'field',
                type: 'string',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016642',
                  busiObjectId: '1040454540625457153',
                  compType: 'SuperSelect',
                  attrDataType: 'text',
                  defaultValue: null,
                  isVirtual: 'T',
                  otherFieldRule: null,
                  staticCode: null,
                  isPersistence: 'F',
                  attrName: '创建人',
                  attrCode: 'creator_id',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '创建时间',
                code: 'create_time',
                attrType: 'field',
                type: 'datetime',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016643',
                  busiObjectId: '1040454540625457153',
                  compType: 'TimePicker',
                  attrDataType: 'datetime',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: null,
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '创建时间',
                  attrCode: 'create_time',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '修改人',
                code: 'updator_id',
                attrType: 'field',
                type: 'long',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016644',
                  busiObjectId: '1040454540625457153',
                  compType: 'SuperSelect',
                  attrDataType: 'associated_field',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule:
                    '[{"attrId":"1001","objectId":"1001","relAttr":{"appId":"-1","appTableId":"1001","assignRuleCode":"seq","assignRuleObj":"seq_lcdp_domain_user","attrCode":"user_id","attrDataType":"integer","attrName":"用户ID","busiObjectAttrId":"1001","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"InputNumber","createdTime":1660716957081,"creatorId":"10037","dataLength":"18","dataType":"2000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"F","primaryKey":"T","sort":"0","statusCd":"00A","statusTime":1660716957081,"systemFieldType":"primary_key","tableColumnDataType":"2000","tableColumnId":"1001","uniqueKey":"T"},"showAttr":{"appId":"-1","appTableId":"1001","attrCode":"user_name","attrDataType":"text","attrName":"用户名称","busiObjectAttrId":"1002","busiObjectCat":"entity","busiObjectCode":"lcdp_domain_user","busiObjectId":"1001","busiObjectName":"用户","compType":"Input","createdTime":1660716957126,"creatorId":"10037","dataLength":"40","dataType":"1000","fuzzyQuery":"F","isCheck":"F","isMoreShow":"F","isPersistence":"T","isVerticalTableColumn":"F","nullable":"T","primaryKey":"F","sort":"1","statusCd":"00A","statusTime":1660716957126,"systemFieldType":"title","tableColumnDataType":"1000","tableColumnId":"1002","uniqueKey":"F"},"showAttrId":"1002","transCode":"updator_id_introduce"}]',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '修改人',
                  attrCode: 'updator_id',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '修改人翻译',
                code: 'updator_id_introduce',
                attrType: 'field',
                type: 'string',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016644',
                  busiObjectId: '1040454540625457153',
                  compType: 'SuperSelect',
                  attrDataType: 'text',
                  defaultValue: null,
                  isVirtual: 'T',
                  otherFieldRule: null,
                  staticCode: null,
                  isPersistence: 'F',
                  attrName: '修改人',
                  attrCode: 'updator_id',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '修改时间',
                code: 'update_time',
                attrType: 'field',
                type: 'datetime',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016645',
                  busiObjectId: '1040454540625457153',
                  compType: 'TimePicker',
                  attrDataType: 'datetime',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: null,
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '修改时间',
                  attrCode: 'update_time',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '考试描述',
                code: 'description',
                attrType: 'field',
                type: 'string',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016646',
                  busiObjectId: '1040454540625457153',
                  compType: 'Input',
                  attrDataType: 'text',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: '',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '考试描述',
                  attrCode: 'description',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '考试开始时间',
                code: 'start_time',
                attrType: 'field',
                type: 'datetime',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016647',
                  busiObjectId: '1040454540625457153',
                  compType: 'TimePicker',
                  attrDataType: 'datetime',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: '',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '考试开始时间',
                  attrCode: 'start_time',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '考试截止时间',
                code: 'end_time',
                attrType: 'field',
                type: 'datetime',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016648',
                  busiObjectId: '1040454540625457153',
                  compType: 'TimePicker',
                  attrDataType: 'datetime',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: '',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '考试截止时间',
                  attrCode: 'end_time',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '考试状态',
                code: 'state',
                attrType: 'field',
                type: 'long',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016649',
                  busiObjectId: '1040454540625457153',
                  compType: 'InputNumber',
                  attrDataType: 'short',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: '',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '考试状态',
                  attrCode: 'state',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '考试时长(分钟)',
                code: 'duration',
                attrType: 'field',
                type: 'long',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016650',
                  busiObjectId: '1040454540625457153',
                  compType: 'InputNumber',
                  attrDataType: 'integer',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: '',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '考试时长(分钟)',
                  attrCode: 'duration',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '总分数',
                code: 'score',
                attrType: 'field',
                type: 'long',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040454540508016651',
                  busiObjectId: '1040454540625457153',
                  compType: 'InputNumber',
                  attrDataType: 'integer',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: '',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '总分数',
                  attrCode: 'score',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
              {
                name: '考试类型',
                code: 'type',
                attrType: 'field',
                type: 'long',
                children: null,
                primaryKey: false,
                spec: {
                  busiObjectAttrId: '1040467867271442444',
                  busiObjectId: '1040454540625457153',
                  compType: 'InputNumber',
                  attrDataType: 'short',
                  defaultValue: null,
                  isVirtual: null,
                  otherFieldRule: '',
                  staticCode: null,
                  isPersistence: 'T',
                  attrName: '考试类型',
                  attrCode: 'type',
                  isMoreShow: null,
                  introduceBusiObjId: null,
                  introduceRelAttrCode: null,
                },
                sourceId: '1040454540625457153',
              },
            ],
            serviceName: '根据主键获取数据',
            requestObj: [
              {
                name: '业务对象标识',
                code: 'busiObjectId',
                attrType: 'field',
                type: '1400',
                children: null,
                primaryKey: null,
                spec: null,
              },
              {
                name: '业务对象属性值集合',
                code: 'attrs',
                attrType: 'object',
                type: null,
                children: [
                  {
                    name: '主键值',
                    code: 'primaryValue',
                    attrType: 'field',
                    type: 'string',
                    children: null,
                    primaryKey: true,
                    spec: null,
                  },
                ],
                primaryKey: null,
                spec: null,
              },
              {
                name: '动作标识',
                code: 'actionId',
                attrType: 'field',
                type: '1200',
                children: null,
                primaryKey: null,
                spec: null,
              },
              {
                name: '业务场景编码',
                code: 'sceneCode',
                attrType: 'field',
                type: '1400',
                children: null,
                primaryKey: null,
                spec: null,
              },
            ],
            serviceMethod: 'post',
            isServiceParam: true,
            requestType: 'object',
          },
          url: '/app/object/selectByKey',
          method: 'post',
          headers: [],
        },
      },
      sourceId: '1040454540625457153',
    },
    {
      name: 'getExamQuestrions',
      source: 'service',
      type: 'object',
      requestType: 'object',
      filterParams: [
        {
          attrId: '313437',
          code: 'exam_id',
          name: '新增节点',
          type: 'string',
          sort: { isSort: true },
          initialData: { type: 'static', value: '$urlParam.bizId$' },
          sourceAttrId: '398655867459',
        },
      ],
      outParams: [
        {
          attrId: '508547',
          code: 'multiple',
          name: 'multiple',
          type: 'object',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '916191528821',
          children: [
            {
              attrId: '224568',
              code: 'list',
              name: 'list',
              type: 'objectArray',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '4618937159274',
              children: [
                {
                  attrId: '676525',
                  code: 'question',
                  name: 'question',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '6992338653922',
                  _oldType: 'string',
                },
                {
                  attrId: '5087113',
                  code: 'examId',
                  name: 'examId',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '7081566295795',
                  _oldType: 'string',
                },
                {
                  attrId: '2861465',
                  code: 'options',
                  name: 'options',
                  type: 'objectArray',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '716299209778',
                  children: [
                    {
                      attrId: '0905305',
                      code: 'questionId',
                      name: 'questionId',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '740278962445',
                      _oldType: 'string',
                    },
                    {
                      attrId: '7286636',
                      code: 'id',
                      name: 'id',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '693163046633',
                      _oldType: 'string',
                    },
                    {
                      attrId: '116276',
                      code: 'state',
                      name: 'state',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '618613437395',
                      _oldType: 'string',
                    },
                    {
                      attrId: '7533875',
                      code: 'option',
                      name: 'option',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '4085618892994',
                      _oldType: 'string',
                    },
                  ],
                },
                {
                  attrId: '157819',
                  code: 'id',
                  name: 'id',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '491283297225479',
                  _oldType: 'string',
                },
                {
                  attrId: '45317462',
                  code: 'marks',
                  name: 'marks',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '387746531006',
                  _oldType: 'string',
                },
                {
                  attrId: '7840324',
                  code: 'type',
                  name: 'type',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '744441021707',
                  _oldType: 'string',
                },
              ],
            },
          ],
        },
        {
          attrId: '602545',
          code: 'multiples',
          name: 'multiples',
          type: 'object',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '375311427121',
          children: [
            {
              attrId: '010823',
              code: 'list',
              name: 'list',
              type: 'objectArray',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '190904230567',
              children: [
                {
                  attrId: '5694587',
                  code: 'question',
                  name: 'question',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '128608723368',
                  _oldType: 'string',
                },
                {
                  attrId: '8408715',
                  code: 'examId',
                  name: 'examId',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '035748556476',
                  _oldType: 'string',
                },
                {
                  attrId: '692047',
                  code: 'options',
                  name: 'options',
                  type: 'objectArray',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '020250244142',
                  children: [
                    {
                      attrId: '0668846',
                      code: 'questionId',
                      name: 'questionId',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '997387877041',
                      _oldType: 'string',
                    },
                    {
                      attrId: '43518566',
                      code: 'id',
                      name: 'id',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '9910866390845',
                      _oldType: 'string',
                    },
                    {
                      attrId: '800884',
                      code: 'state',
                      name: 'state',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '303836822418',
                      _oldType: 'string',
                    },
                    {
                      attrId: '542722',
                      code: 'option',
                      name: 'option',
                      type: 'string',
                      sort: { isSort: true },
                      initialData: { type: 'static' },
                      sourceAttrId: '890882595967',
                      _oldType: 'string',
                    },
                  ],
                },
                {
                  attrId: '265725',
                  code: 'id',
                  name: 'id',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '383647739714',
                  _oldType: 'string',
                },
                {
                  attrId: '1775734',
                  code: 'marks',
                  name: 'marks',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '325004103292',
                  _oldType: 'string',
                },
                {
                  attrId: '28967',
                  code: 'type',
                  name: 'type',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '7805417735656',
                  _oldType: 'string',
                },
              ],
            },
          ],
        },
        {
          attrId: '7034565',
          code: 'judge',
          name: 'judge',
          type: 'object',
          sort: { isSort: true },
          initialData: { type: 'static' },
          sourceAttrId: '0309035455981',
          children: [
            {
              attrId: '1920432',
              code: 'list',
              name: 'list',
              type: 'objectArray',
              sort: { isSort: true },
              initialData: { type: 'static' },
              sourceAttrId: '11171624883',
              children: [
                {
                  attrId: '168521',
                  code: 'question',
                  name: 'question',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '3853530105521',
                },
                {
                  attrId: '888557',
                  code: 'examId',
                  name: 'examId',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '0314165798013',
                },
                {
                  attrId: '433668',
                  code: 'id',
                  name: 'id',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '2754257095224',
                },
                {
                  attrId: '9522024',
                  code: 'marks',
                  name: 'marks',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '545946825637',
                },
                {
                  attrId: '520086',
                  code: 'type',
                  name: 'type',
                  type: 'string',
                  sort: { isSort: true },
                  initialData: { type: 'static' },
                  sourceAttrId: '752837508293',
                },
              ],
            },
          ],
        },
      ],
      config: {
        hooks: [],
        isInit: true,
        options: {
          service: {
            statusCd: '00A',
            serviceVersionId: '1040526313496784896',
            serviceParamId: '1040526313505173505',
            serviceId: '1040526313505173504',
            versionCode: '1.0',
            serviceLogicJson:
              '{"id":1040526313505173504,"code":"getExamQuestrions","name":"查询考试题目详情","versionId":1040526313496784896,"version":"1.0","appId":1040452624180850688,"steps":[{"type":"input","next":"callInternalService-sql-1419","name":"入参","code":"input","parameters":[{"name":"exam_id","description":"新增节点","dataType":"1200","required":false,"defaultValue":""}]},{"type":"callInternalService","next":"loop5090","name":"查询单选题","code":"callInternalService-sql-1419","serviceName":"查询题目","serviceCode":"queryQuestrions","serviceType":"2","parameters":[{"name":"type","description":"type","type":"property","dataType":"1400","required":false,"value":"1000"},{"name":"exam_id","description":"exam_id","type":"property","dataType":"1400","required":false,"value":"$.input.exam_id"}]},{"type":"loop","next":"callInternalService2622","name":"添加单选项","code":"loop5090","collection":"$.step.callInternalService-sql-1419.list","childStep":"callInternalService-sql-3813"},{"type":"callInternalService","next":"script2737","name":"查询单选项","code":"callInternalService-sql-3813","serviceName":"查询题目选项","serviceCode":"queryOptions","serviceType":"2","parameters":[{"name":"question_id","description":"题目内容","type":"property","dataType":"1200","required":false,"value":"$.loop.loop5090.id"}]},{"type":"script","name":"组装单选项","code":"script2737","scriptContent":"class GroovyExample {\\n  def invoke(Map map, List options) {\\n    map.put(\\"options\\",options)\\n  }\\n}","parameters":[{"name":"map","dataType":"1600","required":false,"defaultValue":"","value":"$.loop.loop5090"},{"name":"options","dataType":"1700","required":false,"defaultValue":"","value":"$.step.callInternalService-sql-3813.list"}]},{"type":"callInternalService","next":"loop4326","name":"查询多选题","code":"callInternalService2622","serviceName":"查询题目","serviceCode":"queryQuestrions","serviceType":"2","parameters":[{"name":"type","description":"type","type":"property","dataType":"1400","required":false,"value":"1001"},{"name":"exam_id","description":"exam_id","type":"property","dataType":"1400","required":false,"value":"$.input.exam_id"}]},{"type":"loop","next":"callInternalService9503","name":"添加多选项","code":"loop4326","collection":"$.step.callInternalService2622.list","childStep":"callInternalService9967"},{"type":"callInternalService","next":"script9728","name":"查询多选项","code":"callInternalService9967","serviceName":"查询题目选项","serviceCode":"queryOptions","serviceType":"2","parameters":[{"name":"question_id","description":"题目内容","type":"property","dataType":"1200","required":false,"value":"$.loop.loop4326.id"}]},{"type":"script","name":"组装多选项","code":"script9728","scriptContent":"class GroovyExample {\\n  def invoke(Map map, List options) {\\n    map.put(\\"options\\",options)\\n  }\\n}","parameters":[{"name":"map","dataType":"1600","required":false,"defaultValue":"","value":"$.loop.loop4326"},{"name":"options","dataType":"1700","required":false,"defaultValue":"","value":"$.step.callInternalService9967.list"}]},{"type":"callInternalService","next":"output","name":"查询判断题","code":"callInternalService9503","serviceName":"查询题目","serviceCode":"queryQuestrions","serviceType":"2","parameters":[{"name":"type","description":"type","type":"property","dataType":"1400","required":false,"value":"1002"},{"name":"exam_id","description":"exam_id","type":"property","dataType":"1400","required":false,"value":"$.input.exam_id"}]},{"type":"output","name":"出参","code":"output","parameters":[{"name":"multiple","type":"object","value":"","children":[{"name":"list","type":"list","value":"$.step.callInternalService-sql-1419.list","children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"question","type":"property","dataType":"1200","required":false,"value":""},{"name":"examId","type":"property","dataType":"1200","required":false,"value":""},{"name":"options","type":"list","required":false,"children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"questionId","type":"property","dataType":"1200","required":false,"value":""},{"name":"id","type":"property","dataType":"1200","required":false,"value":""},{"name":"state","type":"property","dataType":"1200","required":false,"value":""},{"name":"option","type":"property","dataType":"1200","required":false,"value":""}]}]},{"name":"id","type":"property","dataType":"1200","required":false,"value":""},{"name":"marks","type":"property","dataType":"1200","required":false,"value":""},{"name":"type","type":"property","dataType":"1200","required":false,"value":""}]}]}]},{"name":"multiples","type":"object","children":[{"name":"list","type":"list","value":"$.step.callInternalService2622.list","children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"question","type":"property","dataType":"1200","required":false},{"name":"examId","type":"property","dataType":"1200","required":false},{"name":"options","type":"list","required":false,"children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"questionId","type":"property","dataType":"1200","required":false},{"name":"id","type":"property","dataType":"1200","required":false},{"name":"state","type":"property","dataType":"1200","required":false},{"name":"option","type":"property","dataType":"1200","required":false}]}]},{"name":"id","type":"property","dataType":"1200","required":false},{"name":"marks","type":"property","dataType":"1200","required":false},{"name":"type","type":"property","dataType":"1200","required":false}]}]}]},{"name":"judge","type":"object","children":[{"name":"list","type":"list","value":"$.step.callInternalService9503.list","children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"question","type":"property","dataType":"1200","required":false},{"name":"examId","type":"property","dataType":"1200","required":false},{"name":"id","type":"property","dataType":"1200","required":false},{"name":"marks","type":"property","dataType":"1200","required":false},{"name":"type","type":"property","dataType":"1200","required":false}]}]}]}]}],"isLogged":"F","mockState":"F","fileInputEnabled":false,"fileOutputEnabled":false}',
            appId: '1040452624180850688',
            mockState: 'F',
            catalogItemId: '1040526044402823168',
            serviceName: '查询考试题目详情',
            serviceCode: 'getExamQuestrions',
            serviceType: 'orchestration',
            serviceLayer: 'request',
            api: '/app/orchestration/run',
            _source: 'std',
            _serviceId: '1040526313496784896',
            _serviceTitle: '查询考试题目详情: getExamQuestrions',
            _serviceType: 'orchestration',
            _sourceName: '查询考试题目详情',
            creatorId: '752954877751296',
            updatorId: '752954877751296',
            createdTime: '2023-11-11 15:20:29',
            updatedTime: '2023-11-12 13:02:24',
            statusTime: '2023-11-12 13:02:24',
            serviceState: 'I',
            serviceParam: {
              statusCd: '00A',
              creatorId: '752954877751296',
              updatorId: '752954877751296',
              createdTime: '2023-11-11 15:20:29',
              updatedTime: '2023-11-12 13:02:24',
              statusTime: '2023-11-12 13:02:24',
              remark: null,
              tenantCode: null,
              serviceParamId: '1040526313505173505',
              headerObj: null,
              requestObj: null,
              responseObj: null,
              headerJson:
                '[{"serviceAttrId":"8078151765762","key":"1","code":"root","attrType":"object","name":"根节点","mustFlag":"F","exampleValue":"","defaultValue":"","children":[],"path":[]}]',
              requestJson:
                '[{"serviceAttrId":"231507284625","key":"1","code":"root","name":"根节点","attrType":"object","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"serviceAttrId":"398655867459","key":"1-0","parentKey":"1","code":"exam_id","name":"新增节点","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""}]}]',
              responseJson:
                '[{"serviceAttrId":"261410424695","key":"1","code":"root","name":"根节点","attrType":"object","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"serviceAttrId":"916191528821","key":"1-0","parentKey":"1","code":"multiple","attrType":"object","mustFlag":"F","defaultValue":"","children":[{"serviceAttrId":"4618937159274","key":"1-0-0","parentKey":"1-0","code":"list","attrType":"objectArray","defaultValue":"$.step.callInternalService-sql-1419.list","children":[{"serviceAttrId":"6992338653922","key":"1-0-0-0-0","parentKey":"1-0-0-0","code":"question","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""},{"serviceAttrId":"7081566295795","key":"1-0-0-0-1","parentKey":"1-0-0-0","code":"examId","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""},{"serviceAttrId":"716299209778","key":"1-0-0-0-2","parentKey":"1-0-0-0","code":"options","attrType":"objectArray","children":[{"serviceAttrId":"740278962445","key":"1-0-0-0-2-0-0","parentKey":"1-0-0-0-2-0","code":"questionId","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""},{"serviceAttrId":"693163046633","key":"1-0-0-0-2-0-1","parentKey":"1-0-0-0-2-0","code":"id","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""},{"serviceAttrId":"618613437395","key":"1-0-0-0-2-0-2","parentKey":"1-0-0-0-2-0","code":"state","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""},{"serviceAttrId":"4085618892994","key":"1-0-0-0-2-0-3","parentKey":"1-0-0-0-2-0","code":"option","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""}]},{"serviceAttrId":"491283297225479","key":"1-0-0-0-3","parentKey":"1-0-0-0","code":"id","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""},{"serviceAttrId":"387746531006","key":"1-0-0-0-4","parentKey":"1-0-0-0","code":"marks","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""},{"serviceAttrId":"744441021707","key":"1-0-0-0-5","parentKey":"1-0-0-0","code":"type","attrType":"field","type":"1200","mustFlag":"F","exampleValue":"","defaultValue":""}]}]},{"serviceAttrId":"375311427121","key":"1-1","parentKey":"1","code":"multiples","attrType":"object","mustFlag":"F","children":[{"serviceAttrId":"190904230567","key":"1-1-0","parentKey":"1-1","code":"list","attrType":"objectArray","defaultValue":"$.step.callInternalService2622.list","children":[{"serviceAttrId":"128608723368","key":"1-1-0-0-0","parentKey":"1-1-0-0","code":"question","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"035748556476","key":"1-1-0-0-1","parentKey":"1-1-0-0","code":"examId","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"020250244142","key":"1-1-0-0-2","parentKey":"1-1-0-0","code":"options","attrType":"objectArray","children":[{"serviceAttrId":"997387877041","key":"1-1-0-0-2-0-0","parentKey":"1-1-0-0-2-0","code":"questionId","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"9910866390845","key":"1-1-0-0-2-0-1","parentKey":"1-1-0-0-2-0","code":"id","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"303836822418","key":"1-1-0-0-2-0-2","parentKey":"1-1-0-0-2-0","code":"state","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"890882595967","key":"1-1-0-0-2-0-3","parentKey":"1-1-0-0-2-0","code":"option","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""}]},{"serviceAttrId":"383647739714","key":"1-1-0-0-3","parentKey":"1-1-0-0","code":"id","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"325004103292","key":"1-1-0-0-4","parentKey":"1-1-0-0","code":"marks","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"7805417735656","key":"1-1-0-0-5","parentKey":"1-1-0-0","code":"type","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""}]}]},{"serviceAttrId":"0309035455981","key":"1-2","parentKey":"1","code":"judge","attrType":"object","mustFlag":"F","children":[{"serviceAttrId":"11171624883","key":"1-2-0","parentKey":"1-2","code":"list","attrType":"objectArray","defaultValue":"$.step.callInternalService9503.list","children":[{"serviceAttrId":"3853530105521","key":"1-2-0-0-0","parentKey":"1-2-0-0","code":"question","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"0314165798013","key":"1-2-0-0-1","parentKey":"1-2-0-0","code":"examId","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"2754257095224","key":"1-2-0-0-2","parentKey":"1-2-0-0","code":"id","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"545946825637","key":"1-2-0-0-3","parentKey":"1-2-0-0","code":"marks","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""},{"serviceAttrId":"752837508293","key":"1-2-0-0-4","parentKey":"1-2-0-0","code":"type","attrType":"field","type":"1200","mustFlag":"F","exampleValue":""}]}]}]}]',
              reqScript: null,
              respScript: null,
              appId: '1040452624180850688',
              request: {
                serviceAttrId: '231507284625',
                key: '1',
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                exampleValue: '',
                defaultValue: '',
                children: [
                  {
                    serviceAttrId: '398655867459',
                    key: '1-0',
                    parentKey: '1',
                    code: 'exam_id',
                    name: '新增节点',
                    attrType: 'field',
                    type: '1200',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '',
                  },
                ],
              },
              response: {
                serviceAttrId: '261410424695',
                key: '1',
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                exampleValue: '',
                defaultValue: '',
                children: [
                  {
                    serviceAttrId: '916191528821',
                    key: '1-0',
                    parentKey: '1',
                    code: 'multiple',
                    attrType: 'object',
                    mustFlag: 'F',
                    defaultValue: '',
                    children: [
                      {
                        serviceAttrId: '4618937159274',
                        key: '1-0-0',
                        parentKey: '1-0',
                        code: 'list',
                        attrType: 'array',
                        defaultValue:
                          '$.step.callInternalService-sql-1419.list',
                        children: [
                          {
                            serviceAttrId: '875131633645',
                            key: '1-0-0-0',
                            parentKey: '1-0-0',
                            code: 'listItem',
                            attrType: 'object',
                            children: [
                              {
                                serviceAttrId: '6992338653922',
                                key: '1-0-0-0-0',
                                parentKey: '1-0-0-0',
                                code: 'question',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                              },
                              {
                                serviceAttrId: '7081566295795',
                                key: '1-0-0-0-1',
                                parentKey: '1-0-0-0',
                                code: 'examId',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                              },
                              {
                                serviceAttrId: '716299209778',
                                key: '1-0-0-0-2',
                                parentKey: '1-0-0-0',
                                code: 'options',
                                attrType: 'array',
                                children: [
                                  {
                                    serviceAttrId: '156003961405',
                                    key: '1-0-0-0-2-0',
                                    parentKey: '1-0-0-0-2',
                                    code: 'listItem',
                                    attrType: 'object',
                                    children: [
                                      {
                                        serviceAttrId: '740278962445',
                                        key: '1-0-0-0-2-0-0',
                                        parentKey: '1-0-0-0-2-0',
                                        code: 'questionId',
                                        attrType: 'field',
                                        type: '1200',
                                        mustFlag: 'F',
                                        exampleValue: '',
                                        defaultValue: '',
                                      },
                                      {
                                        serviceAttrId: '693163046633',
                                        key: '1-0-0-0-2-0-1',
                                        parentKey: '1-0-0-0-2-0',
                                        code: 'id',
                                        attrType: 'field',
                                        type: '1200',
                                        mustFlag: 'F',
                                        exampleValue: '',
                                        defaultValue: '',
                                      },
                                      {
                                        serviceAttrId: '618613437395',
                                        key: '1-0-0-0-2-0-2',
                                        parentKey: '1-0-0-0-2-0',
                                        code: 'state',
                                        attrType: 'field',
                                        type: '1200',
                                        mustFlag: 'F',
                                        exampleValue: '',
                                        defaultValue: '',
                                      },
                                      {
                                        serviceAttrId: '4085618892994',
                                        key: '1-0-0-0-2-0-3',
                                        parentKey: '1-0-0-0-2-0',
                                        code: 'option',
                                        attrType: 'field',
                                        type: '1200',
                                        mustFlag: 'F',
                                        exampleValue: '',
                                        defaultValue: '',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                serviceAttrId: '491283297225479',
                                key: '1-0-0-0-3',
                                parentKey: '1-0-0-0',
                                code: 'id',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                              },
                              {
                                serviceAttrId: '387746531006',
                                key: '1-0-0-0-4',
                                parentKey: '1-0-0-0',
                                code: 'marks',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                              },
                              {
                                serviceAttrId: '744441021707',
                                key: '1-0-0-0-5',
                                parentKey: '1-0-0-0',
                                code: 'type',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    serviceAttrId: '375311427121',
                    key: '1-1',
                    parentKey: '1',
                    code: 'multiples',
                    attrType: 'object',
                    mustFlag: 'F',
                    children: [
                      {
                        serviceAttrId: '190904230567',
                        key: '1-1-0',
                        parentKey: '1-1',
                        code: 'list',
                        attrType: 'array',
                        defaultValue: '$.step.callInternalService2622.list',
                        children: [
                          {
                            serviceAttrId: '640673775433',
                            key: '1-1-0-0',
                            parentKey: '1-1-0',
                            code: 'listItem',
                            attrType: 'object',
                            children: [
                              {
                                serviceAttrId: '128608723368',
                                key: '1-1-0-0-0',
                                parentKey: '1-1-0-0',
                                code: 'question',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                              {
                                serviceAttrId: '035748556476',
                                key: '1-1-0-0-1',
                                parentKey: '1-1-0-0',
                                code: 'examId',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                              {
                                serviceAttrId: '020250244142',
                                key: '1-1-0-0-2',
                                parentKey: '1-1-0-0',
                                code: 'options',
                                attrType: 'array',
                                children: [
                                  {
                                    serviceAttrId: '377000765162',
                                    key: '1-1-0-0-2-0',
                                    parentKey: '1-1-0-0-2',
                                    code: 'listItem',
                                    attrType: 'object',
                                    children: [
                                      {
                                        serviceAttrId: '997387877041',
                                        key: '1-1-0-0-2-0-0',
                                        parentKey: '1-1-0-0-2-0',
                                        code: 'questionId',
                                        attrType: 'field',
                                        type: '1200',
                                        mustFlag: 'F',
                                        exampleValue: '',
                                      },
                                      {
                                        serviceAttrId: '9910866390845',
                                        key: '1-1-0-0-2-0-1',
                                        parentKey: '1-1-0-0-2-0',
                                        code: 'id',
                                        attrType: 'field',
                                        type: '1200',
                                        mustFlag: 'F',
                                        exampleValue: '',
                                      },
                                      {
                                        serviceAttrId: '303836822418',
                                        key: '1-1-0-0-2-0-2',
                                        parentKey: '1-1-0-0-2-0',
                                        code: 'state',
                                        attrType: 'field',
                                        type: '1200',
                                        mustFlag: 'F',
                                        exampleValue: '',
                                      },
                                      {
                                        serviceAttrId: '890882595967',
                                        key: '1-1-0-0-2-0-3',
                                        parentKey: '1-1-0-0-2-0',
                                        code: 'option',
                                        attrType: 'field',
                                        type: '1200',
                                        mustFlag: 'F',
                                        exampleValue: '',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                serviceAttrId: '383647739714',
                                key: '1-1-0-0-3',
                                parentKey: '1-1-0-0',
                                code: 'id',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                              {
                                serviceAttrId: '325004103292',
                                key: '1-1-0-0-4',
                                parentKey: '1-1-0-0',
                                code: 'marks',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                              {
                                serviceAttrId: '7805417735656',
                                key: '1-1-0-0-5',
                                parentKey: '1-1-0-0',
                                code: 'type',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    serviceAttrId: '0309035455981',
                    key: '1-2',
                    parentKey: '1',
                    code: 'judge',
                    attrType: 'object',
                    mustFlag: 'F',
                    children: [
                      {
                        serviceAttrId: '11171624883',
                        key: '1-2-0',
                        parentKey: '1-2',
                        code: 'list',
                        attrType: 'array',
                        defaultValue: '$.step.callInternalService9503.list',
                        children: [
                          {
                            serviceAttrId: '343375029031',
                            key: '1-2-0-0',
                            parentKey: '1-2-0',
                            code: 'listItem',
                            attrType: 'object',
                            children: [
                              {
                                serviceAttrId: '3853530105521',
                                key: '1-2-0-0-0',
                                parentKey: '1-2-0-0',
                                code: 'question',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                              {
                                serviceAttrId: '0314165798013',
                                key: '1-2-0-0-1',
                                parentKey: '1-2-0-0',
                                code: 'examId',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                              {
                                serviceAttrId: '2754257095224',
                                key: '1-2-0-0-2',
                                parentKey: '1-2-0-0',
                                code: 'id',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                              {
                                serviceAttrId: '545946825637',
                                key: '1-2-0-0-3',
                                parentKey: '1-2-0-0',
                                code: 'marks',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                              {
                                serviceAttrId: '752837508293',
                                key: '1-2-0-0-4',
                                parentKey: '1-2-0-0',
                                code: 'type',
                                attrType: 'field',
                                type: '1200',
                                mustFlag: 'F',
                                exampleValue: '',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              originRequestObj: [
                {
                  serviceAttrId: '231507284625',
                  key: '1',
                  code: 'root',
                  name: '根节点',
                  attrType: 'object',
                  mustFlag: 'F',
                  exampleValue: '',
                  defaultValue: '',
                  children: [
                    {
                      serviceAttrId: '398655867459',
                      key: '1-0',
                      parentKey: '1',
                      code: 'exam_id',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'F',
                      exampleValue: '',
                      defaultValue: '',
                      _id: 'root.exam_id',
                      compType: 'Input',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                },
              ],
              originResponseObj: [
                {
                  serviceAttrId: '261410424695',
                  key: '1',
                  code: 'root',
                  name: '根节点',
                  attrType: 'object',
                  mustFlag: 'F',
                  exampleValue: '',
                  defaultValue: '',
                  children: [
                    {
                      serviceAttrId: '916191528821',
                      key: '1-0',
                      parentKey: '1',
                      code: 'multiple',
                      attrType: 'object',
                      mustFlag: 'F',
                      defaultValue: '',
                      children: [
                        {
                          serviceAttrId: '4618937159274',
                          key: '1-0-0',
                          parentKey: '1-0',
                          code: 'list',
                          attrType: 'objectArray',
                          defaultValue:
                            '$.step.callInternalService-sql-1419.list',
                          children: [
                            {
                              serviceAttrId: '6992338653922',
                              key: '1-0-0-0-0',
                              parentKey: '1-0-0-0',
                              code: 'question',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              defaultValue: '',
                              _id: 'root.multiple.list.question',
                              name: 'question',
                            },
                            {
                              serviceAttrId: '7081566295795',
                              key: '1-0-0-0-1',
                              parentKey: '1-0-0-0',
                              code: 'examId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              defaultValue: '',
                              _id: 'root.multiple.list.examId',
                              name: 'examId',
                            },
                            {
                              serviceAttrId: '716299209778',
                              key: '1-0-0-0-2',
                              parentKey: '1-0-0-0',
                              code: 'options',
                              attrType: 'objectArray',
                              children: [
                                {
                                  serviceAttrId: '740278962445',
                                  key: '1-0-0-0-2-0-0',
                                  parentKey: '1-0-0-0-2-0',
                                  code: 'questionId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  _id: 'root.multiple.list.options.questionId',
                                  name: 'questionId',
                                },
                                {
                                  serviceAttrId: '693163046633',
                                  key: '1-0-0-0-2-0-1',
                                  parentKey: '1-0-0-0-2-0',
                                  code: 'id',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  _id: 'root.multiple.list.options.id',
                                  name: 'id',
                                },
                                {
                                  serviceAttrId: '618613437395',
                                  key: '1-0-0-0-2-0-2',
                                  parentKey: '1-0-0-0-2-0',
                                  code: 'state',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  _id: 'root.multiple.list.options.state',
                                  name: 'state',
                                },
                                {
                                  serviceAttrId: '4085618892994',
                                  key: '1-0-0-0-2-0-3',
                                  parentKey: '1-0-0-0-2-0',
                                  code: 'option',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  defaultValue: '',
                                  _id: 'root.multiple.list.options.option',
                                  name: 'option',
                                },
                              ],
                              _id: 'root.multiple.list.options',
                              name: 'options',
                            },
                            {
                              serviceAttrId: '491283297225479',
                              key: '1-0-0-0-3',
                              parentKey: '1-0-0-0',
                              code: 'id',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              defaultValue: '',
                              _id: 'root.multiple.list.id',
                              name: 'id',
                            },
                            {
                              serviceAttrId: '387746531006',
                              key: '1-0-0-0-4',
                              parentKey: '1-0-0-0',
                              code: 'marks',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              defaultValue: '',
                              _id: 'root.multiple.list.marks',
                              name: 'marks',
                            },
                            {
                              serviceAttrId: '744441021707',
                              key: '1-0-0-0-5',
                              parentKey: '1-0-0-0',
                              code: 'type',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              defaultValue: '',
                              _id: 'root.multiple.list.type',
                              name: 'type',
                            },
                          ],
                          _id: 'root.multiple.list',
                          name: 'list',
                        },
                      ],
                      _id: 'root.multiple',
                      name: 'multiple',
                    },
                    {
                      serviceAttrId: '375311427121',
                      key: '1-1',
                      parentKey: '1',
                      code: 'multiples',
                      attrType: 'object',
                      mustFlag: 'F',
                      children: [
                        {
                          serviceAttrId: '190904230567',
                          key: '1-1-0',
                          parentKey: '1-1',
                          code: 'list',
                          attrType: 'objectArray',
                          defaultValue: '$.step.callInternalService2622.list',
                          children: [
                            {
                              serviceAttrId: '128608723368',
                              key: '1-1-0-0-0',
                              parentKey: '1-1-0-0',
                              code: 'question',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.multiples.list.question',
                              name: 'question',
                            },
                            {
                              serviceAttrId: '035748556476',
                              key: '1-1-0-0-1',
                              parentKey: '1-1-0-0',
                              code: 'examId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.multiples.list.examId',
                              name: 'examId',
                            },
                            {
                              serviceAttrId: '020250244142',
                              key: '1-1-0-0-2',
                              parentKey: '1-1-0-0',
                              code: 'options',
                              attrType: 'objectArray',
                              children: [
                                {
                                  serviceAttrId: '997387877041',
                                  key: '1-1-0-0-2-0-0',
                                  parentKey: '1-1-0-0-2-0',
                                  code: 'questionId',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  _id: 'root.multiples.list.options.questionId',
                                  name: 'questionId',
                                },
                                {
                                  serviceAttrId: '9910866390845',
                                  key: '1-1-0-0-2-0-1',
                                  parentKey: '1-1-0-0-2-0',
                                  code: 'id',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  _id: 'root.multiples.list.options.id',
                                  name: 'id',
                                },
                                {
                                  serviceAttrId: '303836822418',
                                  key: '1-1-0-0-2-0-2',
                                  parentKey: '1-1-0-0-2-0',
                                  code: 'state',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  _id: 'root.multiples.list.options.state',
                                  name: 'state',
                                },
                                {
                                  serviceAttrId: '890882595967',
                                  key: '1-1-0-0-2-0-3',
                                  parentKey: '1-1-0-0-2-0',
                                  code: 'option',
                                  attrType: 'field',
                                  type: 'string',
                                  mustFlag: 'F',
                                  exampleValue: '',
                                  _id: 'root.multiples.list.options.option',
                                  name: 'option',
                                },
                              ],
                              _id: 'root.multiples.list.options',
                              name: 'options',
                            },
                            {
                              serviceAttrId: '383647739714',
                              key: '1-1-0-0-3',
                              parentKey: '1-1-0-0',
                              code: 'id',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.multiples.list.id',
                              name: 'id',
                            },
                            {
                              serviceAttrId: '325004103292',
                              key: '1-1-0-0-4',
                              parentKey: '1-1-0-0',
                              code: 'marks',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.multiples.list.marks',
                              name: 'marks',
                            },
                            {
                              serviceAttrId: '7805417735656',
                              key: '1-1-0-0-5',
                              parentKey: '1-1-0-0',
                              code: 'type',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.multiples.list.type',
                              name: 'type',
                            },
                          ],
                          _id: 'root.multiples.list',
                          name: 'list',
                        },
                      ],
                      _id: 'root.multiples',
                      name: 'multiples',
                    },
                    {
                      serviceAttrId: '0309035455981',
                      key: '1-2',
                      parentKey: '1',
                      code: 'judge',
                      attrType: 'object',
                      mustFlag: 'F',
                      children: [
                        {
                          serviceAttrId: '11171624883',
                          key: '1-2-0',
                          parentKey: '1-2',
                          code: 'list',
                          attrType: 'objectArray',
                          defaultValue: '$.step.callInternalService9503.list',
                          children: [
                            {
                              serviceAttrId: '3853530105521',
                              key: '1-2-0-0-0',
                              parentKey: '1-2-0-0',
                              code: 'question',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.judge.list.question',
                              name: 'question',
                            },
                            {
                              serviceAttrId: '0314165798013',
                              key: '1-2-0-0-1',
                              parentKey: '1-2-0-0',
                              code: 'examId',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.judge.list.examId',
                              name: 'examId',
                            },
                            {
                              serviceAttrId: '2754257095224',
                              key: '1-2-0-0-2',
                              parentKey: '1-2-0-0',
                              code: 'id',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.judge.list.id',
                              name: 'id',
                            },
                            {
                              serviceAttrId: '545946825637',
                              key: '1-2-0-0-3',
                              parentKey: '1-2-0-0',
                              code: 'marks',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.judge.list.marks',
                              name: 'marks',
                            },
                            {
                              serviceAttrId: '752837508293',
                              key: '1-2-0-0-4',
                              parentKey: '1-2-0-0',
                              code: 'type',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'F',
                              exampleValue: '',
                              _id: 'root.judge.list.type',
                              name: 'type',
                            },
                          ],
                          _id: 'root.judge.list',
                          name: 'list',
                        },
                      ],
                      _id: 'root.judge',
                      name: 'judge',
                    },
                  ],
                  _id: 'root',
                },
              ],
            },
            isLogged: 'F',
            serviceNodeList: [
              {
                statusCd: '00A',
                creatorId: '752954877751296',
                updatorId: '752954877751296',
                createdTime: '2023-11-11 15:20:29',
                updatedTime: '2023-11-11 15:20:29',
                statusTime: '2023-11-11 15:20:29',
                remark: null,
                tenantCode: null,
                nodeId: '1040526313496784897',
                parNodeId: '-1',
                nodeCode: 'input',
                nodeName: '入参',
                objType: null,
                objId: '1040526313496784896',
                nodeType: 'input',
                nodeJson: null,
                nodeLevelSort: 1,
                appId: '1040452624180850688',
                relObjId: null,
                children: [],
              },
              {
                statusCd: '00A',
                creatorId: '752954877751296',
                updatorId: '752954877751296',
                createdTime: '2023-11-11 15:26:16',
                updatedTime: '2023-11-11 15:27:53',
                statusTime: '2023-11-11 15:27:53',
                remark: null,
                tenantCode: null,
                nodeId: '1040527771042590720',
                parNodeId: '-1',
                nodeCode: 'callInternalService-sql-1419',
                nodeName: '查询单选题',
                objType: null,
                objId: '1040526313496784896',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"serviceVersionId":"queryQuestrions","serviceCode":"queryQuestrions","serviceName":"查询题目","version":null,"serviceType":"2","parameters":[{"name":"type","value":"1000","type":"property","dataType":"1400","required":false,"children":null,"description":"type","key":"1-0","serviceAttrId":"253258095099"},{"name":"exam_id","value":"$.input.exam_id","type":"property","dataType":"1400","required":false,"children":null,"description":"exam_id","key":"1-1","serviceAttrId":"846491004569"}],"outData":[{"key":"1","code":"root","attrType":"object","name":"根节点","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"list","name":"列表","nickCode":"list","attrType":"array","type":"1700","children":[{"serviceAttrId":"316360685635","code":"id","nickCode":"id","name":"主键","attrType":"field","type":"1400","dbLeftCode":"id","dbRightCode":"id","path":["1","1-0"],"key":"1-0-0","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"2928097023307","code":"examId","nickCode":"exam_id","name":"exam_id","attrType":"field","type":"1400","dbLeftCode":"exam_id","dbRightCode":"exam_id","path":["1","1-0"],"key":"1-0-1","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"518424468561","code":"type","nickCode":"type","name":"type","attrType":"field","type":"1400","dbLeftCode":"type","dbRightCode":"type","path":["1","1-0"],"key":"1-0-2","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"8908092342643","code":"question","nickCode":"question","name":"question","attrType":"field","type":"1200","dbLeftCode":"question","dbRightCode":"question","path":["1","1-0"],"key":"1-0-3","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"267039276213","code":"marks","nickCode":"marks","name":"marks","attrType":"field","type":"1300","dbLeftCode":"marks","dbRightCode":"marks","path":["1","1-0"],"key":"1-0-4","parentKey":"1-0","parentType":"array"}],"path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"path":[]}],"subType":"sql"}',
                nodeLevelSort: 2,
                appId: '1040452624180850688',
                relObjId: null,
                children: [],
              },
              {
                statusCd: '00A',
                creatorId: '752954877751296',
                updatorId: '752954877751296',
                createdTime: '2023-11-11 15:31:41',
                updatedTime: '2023-11-12 12:24:13',
                statusTime: '2023-11-12 12:24:13',
                remark: null,
                tenantCode: null,
                nodeId: '1040529131951632384',
                parNodeId: '-1',
                nodeCode: 'loop5090',
                nodeName: '添加单选项',
                objType: null,
                objId: '1040526313496784896',
                nodeType: 'loop',
                nodeJson:
                  '{"collection":"$.step.callInternalService-sql-1419.list","outData":[{"serviceAttrId":"316360685635","code":"id","nickCode":"id","name":"主键","attrType":"field","type":"1400","dbLeftCode":"id","dbRightCode":"id","path":["1","1-0"],"key":"1-0-0","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService-sql-1419.list.id","isEmpty":true},{"serviceAttrId":"2928097023307","code":"examId","nickCode":"exam_id","name":"exam_id","attrType":"field","type":"1400","dbLeftCode":"exam_id","dbRightCode":"exam_id","path":["1","1-0"],"key":"1-0-1","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService-sql-1419.list.examId","isEmpty":true},{"serviceAttrId":"518424468561","code":"type","nickCode":"type","name":"type","attrType":"field","type":"1400","dbLeftCode":"type","dbRightCode":"type","path":["1","1-0"],"key":"1-0-2","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService-sql-1419.list.type","isEmpty":true},{"serviceAttrId":"8908092342643","code":"question","nickCode":"question","name":"question","attrType":"field","type":"1200","dbLeftCode":"question","dbRightCode":"question","path":["1","1-0"],"key":"1-0-3","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService-sql-1419.list.question","isEmpty":true},{"serviceAttrId":"267039276213","code":"marks","nickCode":"marks","name":"marks","attrType":"field","type":"1300","dbLeftCode":"marks","dbRightCode":"marks","path":["1","1-0"],"key":"1-0-4","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService-sql-1419.list.marks","isEmpty":true}]}',
                nodeLevelSort: 3,
                appId: '1040452624180850688',
                relObjId: null,
                children: [
                  {
                    statusCd: '00A',
                    creatorId: '752954877751296',
                    updatorId: '752954877751296',
                    createdTime: '2023-11-11 15:32:07',
                    updatedTime: '2023-11-12 12:24:47',
                    statusTime: '2023-11-12 12:24:47',
                    remark: null,
                    tenantCode: null,
                    nodeId: '1040529241993392128',
                    parNodeId: '1040529131951632384',
                    nodeCode: 'callInternalService-sql-3813',
                    nodeName: '查询单选项',
                    objType: null,
                    objId: '1040526313496784896',
                    nodeType: 'callInternalService',
                    nodeJson:
                      '{"serviceVersionId":"queryOptions","serviceCode":"queryOptions","serviceName":"查询题目选项","version":null,"serviceType":"2","parameters":[{"name":"question_id","value":"$.loop.loop5090.id","type":"property","dataType":"1200","required":false,"children":null,"description":"题目内容","key":"1-0","serviceAttrId":"78772000129"}],"outData":[{"key":"1","code":"root","attrType":"object","name":"根节点","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"list","name":"列表","nickCode":"list","attrType":"array","type":"1700","children":[{"serviceAttrId":"896654619029","code":"id","nickCode":"id","name":"主键","attrType":"field","type":"1400","dbLeftCode":"id","dbRightCode":"id","path":["1","1-0"],"key":"1-0-0","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"940233628237","code":"questionId","nickCode":"question_id","name":"题目内容","attrType":"field","type":"1200","dbLeftCode":"question_id","dbRightCode":"question_id","path":["1","1-0"],"key":"1-0-1","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"640413889604","code":"option","nickCode":"option","name":"选项内容","attrType":"field","type":"1200","dbLeftCode":"option","dbRightCode":"option","path":["1","1-0"],"key":"1-0-2","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"184297140324","code":"state","nickCode":"state","name":"state","attrType":"field","type":"1400","dbLeftCode":"state","dbRightCode":"state","path":["1","1-0"],"key":"1-0-3","parentKey":"1-0","parentType":"array"}],"path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"path":[]}],"subType":"sql"}',
                    nodeLevelSort: 1,
                    appId: '1040452624180850688',
                    relObjId: null,
                    children: [],
                  },
                  {
                    statusCd: '00A',
                    creatorId: '752954877751296',
                    updatorId: '752954877751296',
                    createdTime: '2023-11-11 15:34:34',
                    updatedTime: '2023-11-12 12:24:47',
                    statusTime: '2023-11-12 12:24:47',
                    remark: null,
                    tenantCode: null,
                    nodeId: '1040529858732240896',
                    parNodeId: '1040529131951632384',
                    nodeCode: 'script2737',
                    nodeName: '组装单选项',
                    objType: null,
                    objId: '1040526313496784896',
                    nodeType: 'script',
                    nodeJson:
                      '{"type":"script","next":"output","name":"","code":"script","scriptContent":"class GroovyExample {\\n  def invoke(Map map, List options) {\\n    map.put(\\"options\\",options)\\n  }\\n}","parameters":[{"name":"map","dataType":"1600","value":"$.loop.loop5090","key":"key_1289557266","description":null,"required":false,"defaultValue":"","properties":null,"child":null},{"name":"options","dataType":"1700","value":"$.step.callInternalService-sql-3813.list","key":"key_2401210265","description":null,"required":false,"defaultValue":"","properties":null,"child":null}],"outData":[{"key":"script1","name":"root","type":"object","mustFlag":"F","example":"","default":"","remark":"根节点","children":[]}]}',
                    nodeLevelSort: 2,
                    appId: '1040452624180850688',
                    relObjId: null,
                    children: [],
                  },
                ],
              },
              {
                statusCd: '00A',
                creatorId: '752954877751296',
                updatorId: '752954877751296',
                createdTime: '2023-11-11 15:27:06',
                updatedTime: '2023-11-11 15:31:41',
                statusTime: '2023-11-11 15:31:41',
                remark: null,
                tenantCode: null,
                nodeId: '1040527979541442560',
                parNodeId: '-1',
                nodeCode: 'callInternalService2622',
                nodeName: '查询多选题',
                objType: null,
                objId: '1040526313496784896',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"serviceVersionId":"queryQuestrions","serviceCode":"queryQuestrions","serviceName":"查询题目","version":null,"serviceType":"2","parameters":[{"name":"type","value":"1001","type":"property","dataType":"1400","required":false,"children":null,"description":"type","key":"1-0","serviceAttrId":"253258095099"},{"name":"exam_id","value":"$.input.exam_id","type":"property","dataType":"1400","required":false,"children":null,"description":"exam_id","key":"1-1","serviceAttrId":"846491004569"}],"outData":[{"key":"1","code":"root","attrType":"object","name":"根节点","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"list","name":"列表","nickCode":"list","attrType":"array","type":"1700","children":[{"serviceAttrId":"316360685635","code":"id","nickCode":"id","name":"主键","attrType":"field","type":"1400","dbLeftCode":"id","dbRightCode":"id","path":["1","1-0"],"key":"1-0-0","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"2928097023307","code":"examId","nickCode":"exam_id","name":"exam_id","attrType":"field","type":"1400","dbLeftCode":"exam_id","dbRightCode":"exam_id","path":["1","1-0"],"key":"1-0-1","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"518424468561","code":"type","nickCode":"type","name":"type","attrType":"field","type":"1400","dbLeftCode":"type","dbRightCode":"type","path":["1","1-0"],"key":"1-0-2","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"8908092342643","code":"question","nickCode":"question","name":"question","attrType":"field","type":"1200","dbLeftCode":"question","dbRightCode":"question","path":["1","1-0"],"key":"1-0-3","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"267039276213","code":"marks","nickCode":"marks","name":"marks","attrType":"field","type":"1300","dbLeftCode":"marks","dbRightCode":"marks","path":["1","1-0"],"key":"1-0-4","parentKey":"1-0","parentType":"array"}],"path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"path":[]}],"subType":"sql"}',
                nodeLevelSort: 4,
                appId: '1040452624180850688',
                relObjId: null,
                children: [],
              },
              {
                statusCd: '00A',
                creatorId: '752954877751296',
                updatorId: '752954877751296',
                createdTime: '2023-11-12 12:24:13',
                updatedTime: '2023-11-12 12:24:13',
                statusTime: '2023-11-12 12:24:13',
                remark: null,
                tenantCode: null,
                nodeId: '1040844339660206082',
                parNodeId: '-1',
                nodeCode: 'loop4326',
                nodeName: '添加多选项',
                objType: null,
                objId: '1040526313496784896',
                nodeType: 'loop',
                nodeJson:
                  '{"collection":"$.step.callInternalService2622.list","outData":[{"code":"list","name":"列表","nickCode":"list","attrType":"array","type":"1700","children":[{"serviceAttrId":"316360685635","code":"id","nickCode":"id","name":"主键","attrType":"field","type":"1400","dbLeftCode":"id","dbRightCode":"id","path":["1","1-0"],"key":"1-0-0","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService2622.list.id","isEmpty":true},{"serviceAttrId":"2928097023307","code":"examId","nickCode":"exam_id","name":"exam_id","attrType":"field","type":"1400","dbLeftCode":"exam_id","dbRightCode":"exam_id","path":["1","1-0"],"key":"1-0-1","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService2622.list.examId","isEmpty":true},{"serviceAttrId":"518424468561","code":"type","nickCode":"type","name":"type","attrType":"field","type":"1400","dbLeftCode":"type","dbRightCode":"type","path":["1","1-0"],"key":"1-0-2","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService2622.list.type","isEmpty":true},{"serviceAttrId":"8908092342643","code":"question","nickCode":"question","name":"question","attrType":"field","type":"1200","dbLeftCode":"question","dbRightCode":"question","path":["1","1-0"],"key":"1-0-3","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService2622.list.question","isEmpty":true},{"serviceAttrId":"267039276213","code":"marks","nickCode":"marks","name":"marks","attrType":"field","type":"1300","dbLeftCode":"marks","dbRightCode":"marks","path":["1","1-0"],"key":"1-0-4","parentKey":"1-0","parentType":"array","children":[],"pathValue":"$.step.callInternalService2622.list.marks","isEmpty":true}],"path":["1"],"key":"1-0","parentKey":"1","parentType":"object","pathValue":"$.step.callInternalService2622.list","isEmpty":false}]}',
                nodeLevelSort: 5,
                appId: '1040452624180850688',
                relObjId: null,
                children: [
                  {
                    statusCd: '00A',
                    creatorId: '752954877751296',
                    updatorId: '752954877751296',
                    createdTime: '2023-11-12 12:24:13',
                    updatedTime: '2023-11-12 12:24:13',
                    statusTime: '2023-11-12 12:24:13',
                    remark: null,
                    tenantCode: null,
                    nodeId: '1040844339660206080',
                    parNodeId: '1040844339660206082',
                    nodeCode: 'callInternalService9967',
                    nodeName: '查询多选项',
                    objType: null,
                    objId: '1040526313496784896',
                    nodeType: 'callInternalService',
                    nodeJson:
                      '{"serviceVersionId":"queryOptions","serviceCode":"queryOptions","serviceName":"查询题目选项","version":null,"serviceType":"2","parameters":[{"name":"question_id","value":"$.loop.loop4326.id","type":"property","dataType":"1200","required":false,"children":null,"description":"题目内容","key":"1-0","serviceAttrId":"78772000129"}],"outData":[{"key":"1","code":"root","attrType":"object","name":"根节点","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"list","name":"列表","nickCode":"list","attrType":"array","type":"1700","children":[{"serviceAttrId":"896654619029","code":"id","nickCode":"id","name":"主键","attrType":"field","type":"1400","dbLeftCode":"id","dbRightCode":"id","path":["1","1-0"],"key":"1-0-0","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"940233628237","code":"questionId","nickCode":"question_id","name":"题目内容","attrType":"field","type":"1200","dbLeftCode":"question_id","dbRightCode":"question_id","path":["1","1-0"],"key":"1-0-1","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"640413889604","code":"option","nickCode":"option","name":"选项内容","attrType":"field","type":"1200","dbLeftCode":"option","dbRightCode":"option","path":["1","1-0"],"key":"1-0-2","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"184297140324","code":"state","nickCode":"state","name":"state","attrType":"field","type":"1400","dbLeftCode":"state","dbRightCode":"state","path":["1","1-0"],"key":"1-0-3","parentKey":"1-0","parentType":"array"}],"path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"path":[]}],"subType":"sql"}',
                    nodeLevelSort: 1,
                    appId: '1040452624180850688',
                    relObjId: null,
                    children: [],
                  },
                  {
                    statusCd: '00A',
                    creatorId: '752954877751296',
                    updatorId: '752954877751296',
                    createdTime: '2023-11-12 12:24:13',
                    updatedTime: '2023-11-12 12:24:13',
                    statusTime: '2023-11-12 12:24:13',
                    remark: null,
                    tenantCode: null,
                    nodeId: '1040844339660206081',
                    parNodeId: '1040844339660206082',
                    nodeCode: 'script9728',
                    nodeName: '组装多选项',
                    objType: null,
                    objId: '1040526313496784896',
                    nodeType: 'script',
                    nodeJson:
                      '{"type":"script","next":"output","name":"","code":"script","scriptContent":"class GroovyExample {\\n  def invoke(Map map, List options) {\\n    map.put(\\"options\\",options)\\n  }\\n}","parameters":[{"name":"map","dataType":"1600","value":"$.loop.loop4326","key":"key_1289557266","description":null,"required":false,"defaultValue":"","properties":null,"child":null},{"name":"options","dataType":"1700","value":"$.step.callInternalService9967.list","key":"key_2401210265","description":null,"required":false,"defaultValue":"","properties":null,"child":null}],"outData":[{"key":"script1","name":"root","type":"object","mustFlag":"F","example":"","default":"","remark":"根节点","children":[]}]}',
                    nodeLevelSort: 2,
                    appId: '1040452624180850688',
                    relObjId: null,
                    children: [],
                  },
                ],
              },
              {
                statusCd: '00A',
                creatorId: '752954877751296',
                updatorId: '752954877751296',
                createdTime: '2023-11-11 15:27:06',
                updatedTime: '2023-11-12 12:24:13',
                statusTime: '2023-11-12 12:24:13',
                remark: null,
                tenantCode: null,
                nodeId: '1040527979541442561',
                parNodeId: '-1',
                nodeCode: 'callInternalService9503',
                nodeName: '查询判断题',
                objType: null,
                objId: '1040526313496784896',
                nodeType: 'callInternalService',
                nodeJson:
                  '{"serviceVersionId":"queryQuestrions","serviceCode":"queryQuestrions","serviceName":"查询题目","version":null,"serviceType":"2","parameters":[{"name":"type","value":"1002","type":"property","dataType":"1400","required":false,"children":null,"description":"type","key":"1-0","serviceAttrId":"253258095099"},{"name":"exam_id","value":"$.input.exam_id","type":"property","dataType":"1400","required":false,"children":null,"description":"exam_id","key":"1-1","serviceAttrId":"846491004569"}],"outData":[{"key":"1","code":"root","attrType":"object","name":"根节点","mustFlag":"F","exampleValue":"","defaultValue":"","children":[{"code":"list","name":"列表","nickCode":"list","attrType":"array","type":"1700","children":[{"serviceAttrId":"316360685635","code":"id","nickCode":"id","name":"主键","attrType":"field","type":"1400","dbLeftCode":"id","dbRightCode":"id","path":["1","1-0"],"key":"1-0-0","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"2928097023307","code":"examId","nickCode":"exam_id","name":"exam_id","attrType":"field","type":"1400","dbLeftCode":"exam_id","dbRightCode":"exam_id","path":["1","1-0"],"key":"1-0-1","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"518424468561","code":"type","nickCode":"type","name":"type","attrType":"field","type":"1400","dbLeftCode":"type","dbRightCode":"type","path":["1","1-0"],"key":"1-0-2","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"8908092342643","code":"question","nickCode":"question","name":"question","attrType":"field","type":"1200","dbLeftCode":"question","dbRightCode":"question","path":["1","1-0"],"key":"1-0-3","parentKey":"1-0","parentType":"array"},{"serviceAttrId":"267039276213","code":"marks","nickCode":"marks","name":"marks","attrType":"field","type":"1300","dbLeftCode":"marks","dbRightCode":"marks","path":["1","1-0"],"key":"1-0-4","parentKey":"1-0","parentType":"array"}],"path":["1"],"key":"1-0","parentKey":"1","parentType":"object"}],"path":[]}],"subType":"sql"}',
                nodeLevelSort: 6,
                appId: '1040452624180850688',
                relObjId: null,
                children: [],
              },
              {
                statusCd: '00A',
                creatorId: '752954877751296',
                updatorId: '752954877751296',
                createdTime: '2023-11-11 15:20:29',
                updatedTime: '2023-11-12 13:02:24',
                statusTime: '2023-11-12 13:02:24',
                remark: null,
                tenantCode: null,
                nodeId: '1040526313496784898',
                parNodeId: '-1',
                nodeCode: 'output',
                nodeName: '出参',
                objType: null,
                objId: '1040526313496784896',
                nodeType: 'output',
                nodeJson:
                  '{"parameters":[{"name":"multiple","value":"","type":"object","required":false,"children":[{"name":"list","value":"$.step.callInternalService-sql-1419.list","type":"list","required":false,"children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"question","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-0","serviceAttrId":"6992338653922"},{"name":"examId","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-1","serviceAttrId":"7081566295795"},{"name":"options","type":"list","required":false,"children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"questionId","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-2-0-0","serviceAttrId":"740278962445"},{"name":"id","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-2-0-1","serviceAttrId":"693163046633"},{"name":"state","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-2-0-2","serviceAttrId":"618613437395"},{"name":"option","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-2-0-3","serviceAttrId":"4085618892994"}],"key":"1-0-0-0-2-0","serviceAttrId":"156003961405"}],"key":"1-0-0-0-2","serviceAttrId":"716299209778"},{"name":"id","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-3","serviceAttrId":"491283297225479"},{"name":"marks","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-4","serviceAttrId":"387746531006"},{"name":"type","value":"","type":"property","dataType":"1200","required":false,"children":null,"key":"1-0-0-0-5","serviceAttrId":"744441021707"}],"key":"1-0-0-0","serviceAttrId":"875131633645"}],"key":"1-0-0","serviceAttrId":"4618937159274"}],"key":"1-0","serviceAttrId":"916191528821"},{"name":"multiples","type":"object","required":false,"children":[{"name":"list","value":"$.step.callInternalService2622.list","type":"list","required":false,"children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"question","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-0","serviceAttrId":"128608723368"},{"name":"examId","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-1","serviceAttrId":"035748556476"},{"name":"options","type":"list","required":false,"children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"questionId","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-2-0-0","serviceAttrId":"997387877041"},{"name":"id","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-2-0-1","serviceAttrId":"9910866390845"},{"name":"state","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-2-0-2","serviceAttrId":"303836822418"},{"name":"option","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-2-0-3","serviceAttrId":"890882595967"}],"key":"1-1-0-0-2-0","serviceAttrId":"377000765162"}],"key":"1-1-0-0-2","serviceAttrId":"020250244142"},{"name":"id","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-3","serviceAttrId":"383647739714"},{"name":"marks","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-4","serviceAttrId":"325004103292"},{"name":"type","type":"property","dataType":"1200","required":false,"children":null,"key":"1-1-0-0-5","serviceAttrId":"7805417735656"}],"key":"1-1-0-0","serviceAttrId":"640673775433"}],"key":"1-1-0","serviceAttrId":"190904230567"}],"key":"1-1","serviceAttrId":"375311427121"},{"name":"judge","type":"object","required":false,"children":[{"name":"list","value":"$.step.callInternalService9503.list","type":"list","required":false,"children":[{"name":"listItem","type":"object","required":false,"children":[{"name":"question","type":"property","dataType":"1200","required":false,"children":null,"key":"1-2-0-0-0","serviceAttrId":"3853530105521"},{"name":"examId","type":"property","dataType":"1200","required":false,"children":null,"key":"1-2-0-0-1","serviceAttrId":"0314165798013"},{"name":"id","type":"property","dataType":"1200","required":false,"children":null,"key":"1-2-0-0-2","serviceAttrId":"2754257095224"},{"name":"marks","type":"property","dataType":"1200","required":false,"children":null,"key":"1-2-0-0-3","serviceAttrId":"545946825637"},{"name":"type","type":"property","dataType":"1200","required":false,"children":null,"key":"1-2-0-0-4","serviceAttrId":"752837508293"}],"key":"1-2-0-0","serviceAttrId":"343375029031"}],"key":"1-2-0","serviceAttrId":"11171624883"}],"key":"1-2","serviceAttrId":"0309035455981"}]}',
                nodeLevelSort: 7,
                appId: '1040452624180850688',
                relObjId: null,
                children: [],
              },
            ],
            originRequestObj: [
              {
                serviceAttrId: '231507284625',
                key: '1',
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                exampleValue: '',
                defaultValue: '',
                children: [
                  {
                    serviceAttrId: '398655867459',
                    key: '1-0',
                    parentKey: '1',
                    code: 'exam_id',
                    name: '新增节点',
                    attrType: 'field',
                    type: 'string',
                    mustFlag: 'F',
                    exampleValue: '',
                    defaultValue: '',
                    _id: 'root.exam_id',
                    compType: 'Input',
                  },
                ],
                _id: 'root',
                compType: 'Input',
              },
            ],
            requestType: 'object',
            originResponseObj: [
              {
                serviceAttrId: '261410424695',
                key: '1',
                code: 'root',
                name: '根节点',
                attrType: 'object',
                mustFlag: 'F',
                exampleValue: '',
                defaultValue: '',
                children: [
                  {
                    serviceAttrId: '916191528821',
                    key: '1-0',
                    parentKey: '1',
                    code: 'multiple',
                    attrType: 'object',
                    mustFlag: 'F',
                    defaultValue: '',
                    children: [
                      {
                        serviceAttrId: '4618937159274',
                        key: '1-0-0',
                        parentKey: '1-0',
                        code: 'list',
                        attrType: 'objectArray',
                        defaultValue:
                          '$.step.callInternalService-sql-1419.list',
                        children: [
                          {
                            serviceAttrId: '6992338653922',
                            key: '1-0-0-0-0',
                            parentKey: '1-0-0-0',
                            code: 'question',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            _id: 'root.multiple.list.question',
                            name: 'question',
                          },
                          {
                            serviceAttrId: '7081566295795',
                            key: '1-0-0-0-1',
                            parentKey: '1-0-0-0',
                            code: 'examId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            _id: 'root.multiple.list.examId',
                            name: 'examId',
                          },
                          {
                            serviceAttrId: '716299209778',
                            key: '1-0-0-0-2',
                            parentKey: '1-0-0-0',
                            code: 'options',
                            attrType: 'objectArray',
                            children: [
                              {
                                serviceAttrId: '740278962445',
                                key: '1-0-0-0-2-0-0',
                                parentKey: '1-0-0-0-2-0',
                                code: 'questionId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.multiple.list.options.questionId',
                                name: 'questionId',
                              },
                              {
                                serviceAttrId: '693163046633',
                                key: '1-0-0-0-2-0-1',
                                parentKey: '1-0-0-0-2-0',
                                code: 'id',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.multiple.list.options.id',
                                name: 'id',
                              },
                              {
                                serviceAttrId: '618613437395',
                                key: '1-0-0-0-2-0-2',
                                parentKey: '1-0-0-0-2-0',
                                code: 'state',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.multiple.list.options.state',
                                name: 'state',
                              },
                              {
                                serviceAttrId: '4085618892994',
                                key: '1-0-0-0-2-0-3',
                                parentKey: '1-0-0-0-2-0',
                                code: 'option',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                defaultValue: '',
                                _id: 'root.multiple.list.options.option',
                                name: 'option',
                              },
                            ],
                            _id: 'root.multiple.list.options',
                            name: 'options',
                          },
                          {
                            serviceAttrId: '491283297225479',
                            key: '1-0-0-0-3',
                            parentKey: '1-0-0-0',
                            code: 'id',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            _id: 'root.multiple.list.id',
                            name: 'id',
                          },
                          {
                            serviceAttrId: '387746531006',
                            key: '1-0-0-0-4',
                            parentKey: '1-0-0-0',
                            code: 'marks',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            _id: 'root.multiple.list.marks',
                            name: 'marks',
                          },
                          {
                            serviceAttrId: '744441021707',
                            key: '1-0-0-0-5',
                            parentKey: '1-0-0-0',
                            code: 'type',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            defaultValue: '',
                            _id: 'root.multiple.list.type',
                            name: 'type',
                          },
                        ],
                        _id: 'root.multiple.list',
                        name: 'list',
                      },
                    ],
                    _id: 'root.multiple',
                    name: 'multiple',
                  },
                  {
                    serviceAttrId: '375311427121',
                    key: '1-1',
                    parentKey: '1',
                    code: 'multiples',
                    attrType: 'object',
                    mustFlag: 'F',
                    children: [
                      {
                        serviceAttrId: '190904230567',
                        key: '1-1-0',
                        parentKey: '1-1',
                        code: 'list',
                        attrType: 'objectArray',
                        defaultValue: '$.step.callInternalService2622.list',
                        children: [
                          {
                            serviceAttrId: '128608723368',
                            key: '1-1-0-0-0',
                            parentKey: '1-1-0-0',
                            code: 'question',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.multiples.list.question',
                            name: 'question',
                          },
                          {
                            serviceAttrId: '035748556476',
                            key: '1-1-0-0-1',
                            parentKey: '1-1-0-0',
                            code: 'examId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.multiples.list.examId',
                            name: 'examId',
                          },
                          {
                            serviceAttrId: '020250244142',
                            key: '1-1-0-0-2',
                            parentKey: '1-1-0-0',
                            code: 'options',
                            attrType: 'objectArray',
                            children: [
                              {
                                serviceAttrId: '997387877041',
                                key: '1-1-0-0-2-0-0',
                                parentKey: '1-1-0-0-2-0',
                                code: 'questionId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                _id: 'root.multiples.list.options.questionId',
                                name: 'questionId',
                              },
                              {
                                serviceAttrId: '9910866390845',
                                key: '1-1-0-0-2-0-1',
                                parentKey: '1-1-0-0-2-0',
                                code: 'id',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                _id: 'root.multiples.list.options.id',
                                name: 'id',
                              },
                              {
                                serviceAttrId: '303836822418',
                                key: '1-1-0-0-2-0-2',
                                parentKey: '1-1-0-0-2-0',
                                code: 'state',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                _id: 'root.multiples.list.options.state',
                                name: 'state',
                              },
                              {
                                serviceAttrId: '890882595967',
                                key: '1-1-0-0-2-0-3',
                                parentKey: '1-1-0-0-2-0',
                                code: 'option',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                exampleValue: '',
                                _id: 'root.multiples.list.options.option',
                                name: 'option',
                              },
                            ],
                            _id: 'root.multiples.list.options',
                            name: 'options',
                          },
                          {
                            serviceAttrId: '383647739714',
                            key: '1-1-0-0-3',
                            parentKey: '1-1-0-0',
                            code: 'id',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.multiples.list.id',
                            name: 'id',
                          },
                          {
                            serviceAttrId: '325004103292',
                            key: '1-1-0-0-4',
                            parentKey: '1-1-0-0',
                            code: 'marks',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.multiples.list.marks',
                            name: 'marks',
                          },
                          {
                            serviceAttrId: '7805417735656',
                            key: '1-1-0-0-5',
                            parentKey: '1-1-0-0',
                            code: 'type',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.multiples.list.type',
                            name: 'type',
                          },
                        ],
                        _id: 'root.multiples.list',
                        name: 'list',
                      },
                    ],
                    _id: 'root.multiples',
                    name: 'multiples',
                  },
                  {
                    serviceAttrId: '0309035455981',
                    key: '1-2',
                    parentKey: '1',
                    code: 'judge',
                    attrType: 'object',
                    mustFlag: 'F',
                    children: [
                      {
                        serviceAttrId: '11171624883',
                        key: '1-2-0',
                        parentKey: '1-2',
                        code: 'list',
                        attrType: 'objectArray',
                        defaultValue: '$.step.callInternalService9503.list',
                        children: [
                          {
                            serviceAttrId: '3853530105521',
                            key: '1-2-0-0-0',
                            parentKey: '1-2-0-0',
                            code: 'question',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.judge.list.question',
                            name: 'question',
                          },
                          {
                            serviceAttrId: '0314165798013',
                            key: '1-2-0-0-1',
                            parentKey: '1-2-0-0',
                            code: 'examId',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.judge.list.examId',
                            name: 'examId',
                          },
                          {
                            serviceAttrId: '2754257095224',
                            key: '1-2-0-0-2',
                            parentKey: '1-2-0-0',
                            code: 'id',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.judge.list.id',
                            name: 'id',
                          },
                          {
                            serviceAttrId: '545946825637',
                            key: '1-2-0-0-3',
                            parentKey: '1-2-0-0',
                            code: 'marks',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.judge.list.marks',
                            name: 'marks',
                          },
                          {
                            serviceAttrId: '752837508293',
                            key: '1-2-0-0-4',
                            parentKey: '1-2-0-0',
                            code: 'type',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '',
                            _id: 'root.judge.list.type',
                            name: 'type',
                          },
                        ],
                        _id: 'root.judge.list',
                        name: 'list',
                      },
                    ],
                    _id: 'root.judge',
                    name: 'judge',
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
      sourceId: '1040526313496784896',
      serviceType: 'orchestration',
    },
    {
      name: 'oneAnswer',
      source: 'custom',
      type: 'objectArray',
      outParams: [
        {
          attrId: '202225',
          code: 'param',
          name: '属性',
          type: 'object',
          initialData: { type: 'static' },
          showInput: false,
          children: [
            {
              attrId: '986546',
              code: 'questionId',
              name: '题目标识',
              type: 'string',
              initialData: { type: 'static' },
              showInput: false,
            },
            {
              attrId: '032951',
              code: 'optionId',
              name: '选项标识',
              type: 'string',
              initialData: { type: 'static' },
              showInput: false,
            },
          ],
        },
      ],
    },
    {
      name: 'twoAnswer',
      source: 'custom',
      type: 'objectArray',
      outParams: [
        {
          attrId: '202225',
          code: 'param',
          name: '属性',
          type: 'object',
          initialData: { type: 'static' },
          showInput: false,
          children: [
            {
              attrId: '986546',
              code: 'questionId',
              name: '题目标识',
              type: 'string',
              initialData: { type: 'static' },
              showInput: false,
            },
            {
              attrId: '032951',
              code: 'optionId',
              name: '选项标识',
              type: 'string',
              initialData: { type: 'static' },
              showInput: false,
            },
          ],
        },
      ],
    },
    {
      name: 'threeAnswer',
      source: 'custom',
      type: 'objectArray',
      outParams: [
        {
          attrId: '202225',
          code: 'param',
          name: '属性',
          type: 'object',
          initialData: { type: 'static' },
          showInput: false,
          children: [
            {
              attrId: '986546',
              code: 'questionId',
              name: '题目标识',
              type: 'string',
              initialData: { type: 'static' },
              showInput: false,
            },
            {
              attrId: '032951',
              code: 'optionId',
              name: '选项标识',
              type: 'string',
              initialData: { type: 'static' },
              showInput: false,
            },
          ],
        },
      ],
    },
  ],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
