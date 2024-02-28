// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, LoopList, Row, Text, Divider } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '1037555797777207296';
const Cuowuxinxi0064$$Modal: React.FC<PageProps> = ({
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
  forwardedRef,
  parentEngineId = pageId,
}) => {
  const onOk = () => {
    const eventDatacloseModal53: any = [
      {
        type: 'closeModal',
        dataId: 169898114418070100,
        options: { compId: 'page', compName: 'page', id: '9712705' },
        line_number: 1,
      },
    ];
    eventDatacloseModal53.params = [] || [];
    CMDGenerator(eventDatacloseModal53, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
  };

  const onCancel = () => {
    const eventDatacloseModal54: any = [
      {
        type: 'closeModal',
        dataId: '7552237_1',
        options: { compId: 'page', compName: 'page', id: '1711956' },
        line_number: 1,
      },
    ];
    eventDatacloseModal54.params = [] || [];
    CMDGenerator(eventDatacloseModal54, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
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
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_76617386__"
    >
      <View
        className="View_View_76617386_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_76617386_1',
          uid: 'View_76617386_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_76617386_1')}
        {...injectData}
      >
        <View
          className="View_View_1215363"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_1215363',
            uid: 'View_1215363',
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
            overflowY: 'auto',
            flex: '',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_1215363')}
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
            itemKey={'item'}
            indexKey={'index'}
            formItemIndex={0}
            labelCol={8}
            wrapperCol={16}
            valueKey={'rowId'}
            gridData={state?.errorList}
            $$componentItem={{
              id: 'LoopList_7136955',
              uid: 'LoopList_7136955',
              type: 'LoopList',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ minHeight: 40, margin: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'LoopList_7136955')}
            {...injectData}
            getEngineApis={() => {
              return {
                ...injectData.getEngineApis(),
                MemoRenderer: {
                  renderer: null,
                  MemoLoopItem: (props: any) => {
                    const item = props[props.itemKey] ?? props?.item;
                    const i = props[props.indexKey] ?? props?.i;
                    const index = props[props.indexKey] ?? props?.i;
                    return (
                      <>
                        <Row
                          name={'行容器'}
                          colSpan={24}
                          gutterHorizontal={0}
                          gutterVertical={0}
                          backgroundType={{
                            type: 'cleanColor',
                            color: undefined,
                          }}
                          $$componentItem={{
                            id: 'Row_753137',
                            uid: 'Row_753137',
                            type: 'Row',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={true}
                          readOnly={false}
                          style={{ margin: '0px 0px 0px 0px' }}
                          ref={(r: any) =>
                            refs.setComponentRef(r, 'Row_753137')
                          }
                          {...injectData}
                        >
                          <View
                            className="View_View_834655"
                            name={'布局容器'}
                            backgroundType={{
                              type: 'cleanColor',
                              color: undefined,
                            }}
                            $$componentItem={{
                              id: 'View_834655',
                              uid: 'View_834655',
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
                              padding: '8px 0px 8px 0px',
                              width: '100%',
                              margin: '0px 0px 0px 0px',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                            }}
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'View_834655')
                            }
                            {...injectData}
                          >
                            <Text
                              name={'文本'}
                              content={'错误' + item?.rowId + '：'}
                              textType={'span'}
                              version={'1.0'}
                              showHtml={false}
                              $$componentItem={{
                                id: 'Text_6177576',
                                uid: 'Text_6177576',
                                type: 'Text',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              style={{
                                textAlign: 'left',
                                fontSize: '14px',
                                lineHeight: '24px',
                                color: '#44A4F5',
                                backgroundColor: 'rgba(255, 255, 255,0)',
                              }}
                              ref={(r: any) =>
                                refs.setComponentRef(r, 'Text_6177576')
                              }
                              {...injectData}
                            />
                            <Text
                              name={'错误信息'}
                              content={item?.errorMsg}
                              textType={'span'}
                              version={'1.0'}
                              showHtml={false}
                              $$componentItem={{
                                id: 'Text_604362',
                                uid: 'Text_604362',
                                type: 'Text',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              style={{
                                textAlign: 'left',
                                fontSize: '14px',
                                lineHeight: '24px',
                                color: '#1c242e',
                                backgroundColor: 'rgba(255, 255, 255,0)',
                                margin: '0px 0px 0px 0px',
                              }}
                              ref={(r: any) =>
                                refs.setComponentRef(r, 'Text_604362')
                              }
                              {...injectData}
                            />
                          </View>
                          <Divider
                            name={'分割线'}
                            type={'horizontal'}
                            dashed={false}
                            dashedWidth={4}
                            dashedMargin={4}
                            showTitle={false}
                            dividerText={'标题'}
                            orientation={'center'}
                            titleColor={'rgba(28,36,46,0.75)'}
                            titleFontSize={14}
                            titleLineHeight={'22px'}
                            titleFontWeight={500}
                            height={'12px'}
                            width={'1px'}
                            $$componentItem={{
                              id: 'Divider_427594',
                              uid: 'Divider_427594',
                              type: 'Divider',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{
                              margin: '0px 0px 0px 0px',
                              height: 'auto',
                            }}
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'Divider_427594')
                            }
                            {...injectData}
                          />
                        </Row>
                      </>
                    );
                  },
                },
              };
            }}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Cuowuxinxi0064$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', bizData: '', errorList: '' },
});
