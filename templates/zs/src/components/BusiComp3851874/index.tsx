// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Button,
  Card,
  HorizontalView,
  Input,
  Text,
  VerticalView,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const BusiComp3851874$$BusiComp: React.FC<PageProps> = ({
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

  useEffect(() => {
    const eventDatasetValue: any = [
      {
        type: 'setValue',
        dataId: 166861253421806820,
        options: {
          compId: 'Input_04191',
          compLib: 'comm',
          pageJsonId: '3851874',
          compName: 'Input',
          id: '683894',
          valueList: { Input_04191: '$state.effectDate$' },
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue.params = [] || [];
    CMDGenerator(eventDatasetValue, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDataifelse4: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '744543',
            options: {
              context: '$state.createRejectBtnDisable$',
              operate: '== true',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167106971106556960,
        elseIfs: [],
        line_number: 2,
        callback1: [
          {
            type: 'callSelfFunc',
            dataId: 167106973161016600,
            options: {
              compId: 'callSelfFunc',
              compName: 'system',
              id: '757866',
              pageJsonId: '3851874',
              customFuncName: 'setCreateRejectBtnDisable',
            },
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse4.params = [] || [];
    CMDGenerator(eventDataifelse4, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 167392801431806720
    console.log('处理信息场景编码');
    // console 167392802548959330
    console.log(urlParam?.sceneCode);
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_3851874__"
    >
      <VerticalView
        name={'上下布局'}
        $$componentItem={{
          id: 'VerticalView_7181585',
          uid: 'VerticalView_7181585',
          type: 'VerticalView',
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
          overflowY: 'auto',
          backgroundColor: 'rgba(242, 243, 245, 100)',
        }}
        ref={(r: any) => (refs['VerticalView_7181585'] = r)}
        {...injectData}
      >
        <Card
          name={'处理信息'}
          cardIconType={'middle'}
          extendNum={3}
          title={'处理信息'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          visible={true}
          hasIcon={true}
          titleColor={'rgba(0, 0, 0, 1)'}
          headerColor={'#ffffff'}
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
            id: 'Card_149926',
            uid: 'Card_149926',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) => (refs['Card_149926'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_170403',
              uid: 'View_170403',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              height: '100%',
              width: '100%',
            }}
            ref={(r: any) => (refs['View_170403'] = r)}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              $$componentItem={{
                id: 'HorizontalView_001239',
                uid: 'HorizontalView_001239',
                type: 'HorizontalView',
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
                height: '100%',
                overflowY: 'auto',
              }}
              ref={(r: any) => (refs['HorizontalView_001239'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                visible={true}
                backgroundType={{ type: 'cleanColor', color: undefined }}
                $$componentItem={{
                  id: 'View_7700925',
                  uid: 'View_7700925',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  width: '150%',
                  justifyContent: 'center',
                }}
                ref={(r: any) => (refs['View_7700925'] = r)}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_766293_021352',
                    uid: 'View_766293_021352',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '30%',
                    height: '100%',
                    overflowY: 'auto',
                    margin: '0px 0px 0px 0px',
                  }}
                  ref={(r: any) => (refs['View_766293_021352'] = r)}
                  {...injectData}
                >
                  <Text
                    name={'审批单有效期'}
                    content={'审批单有效期:   '}
                    textType={'span'}
                    version={'1.0'}
                    visible={true}
                    showHtml={false}
                    $$componentItem={{
                      id: 'Text_769599',
                      uid: 'Text_769599',
                      type: 'Text',
                      ...componentItem,
                    }}
                    disabled={false}
                    readOnly={false}
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#1c242e',
                      textAlign: 'right',
                    }}
                    ref={(r: any) => (refs['Text_769599'] = r)}
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_766293_1966767',
                    uid: 'View_766293_1966767',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto',
                    margin: '0px 0px 0px 0px',
                  }}
                  ref={(r: any) => (refs['View_766293_1966767'] = r)}
                  {...injectData}
                >
                  <Input
                    name={'审批单有效期'}
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
                    fieldName={'effDate'}
                    disabled={false}
                    visible={true}
                    readOnly={true}
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
                      id: 'Input_04191',
                      uid: 'Input_04191',
                      type: 'Input',
                      ...componentItem,
                    }}
                    ref={(r: any) => (refs['Input_04191'] = r)}
                    {...injectData}
                  />
                </View>
              </View>
              <View
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_073911',
                  uid: 'View_073911',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '30%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => (refs['View_073911'] = r)}
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_073911_1711518',
                  uid: 'View_073911_1711518',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0px 0px 0px 0px',
                  width: '30%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => (refs['View_073911_1711518'] = r)}
                {...injectData}
              />
              <View
                name={'布局容器'}
                visible={true}
                $$componentItem={{
                  id: 'View_6771183_6459074',
                  uid: 'View_6771183_6459074',
                  type: 'View',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 0px',
                  height: '100%',
                  width: '100%',
                }}
                ref={(r: any) => (refs['View_6771183_6459074'] = r)}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_073911_0947543',
                    uid: 'View_073911_0947543',
                    type: 'View',
                    ...componentItem,
                  }}
                  disabled={false}
                  readOnly={false}
                  style={{
                    display: 'block',
                    padding: '0px 0px 0px 0px',
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto',
                  }}
                  ref={(r: any) => (refs['View_073911_0947543'] = r)}
                  {...injectData}
                />
              </View>
            </HorizontalView>
          </View>
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_6771183',
              uid: 'View_6771183',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              height: '100%',
              width: '100%',
              textAlign: 'center',
              margin: '20px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['View_6771183'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_908265',
                uid: 'View_908265',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              readOnly={false}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => (refs['View_908265'] = r)}
              {...injectData}
            >
              <Button
                name={'业务甩单'}
                shape={null}
                classification={'default'}
                autoProcessFlow={false}
                flowProcessResult={'common'}
                iconPosition={'left'}
                ghost={false}
                block={false}
                size={'default'}
                disabled={false}
                visible={true}
                type={'primary'}
                readOnly={false}
                hasIcon={false}
                $$componentItem={{
                  id: 'Button_760054_872469',
                  uid: 'Button_760054_872469',
                  type: 'Button',
                  ...componentItem,
                }}
                style={{ width: 'fit-content', margin: '0px 0px 0px 0px' }}
                onClick={(e: any) => {
                  const eventDatashowCustomModal: any = [
                    {
                      type: 'showCustomModal',
                      dataId: 166815390770142820,
                      options: {
                        compId: 'showCustomModal',
                        compName: 'page',
                        id: '4240803',
                        pageJsonId: '3851874',
                        modalname: '/faqishuaidantanchuang7958',
                        pageId: '908274270111293440',
                        paramsObj: {
                          rejectOrderInfo:
                            '$data.rejectOrderInfo.rejectOrderInfo$',
                          orderNbr: '$state.orderNbr$',
                          instId: '$state.instId$',
                          custName: '$state.custName$',
                          sceneCode: '$state.sceneCode$',
                        },
                        paramsObjKeyValueMap: {
                          rejectOrderInfo:
                            '$data.rejectOrderInfo.rejectOrderInfo$',
                          orderNbr: '$state.orderNbr$',
                          instId: '$state.instId$',
                          custName: '$state.custName$',
                          sceneCode: '$state.sceneCode$',
                        },
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatashowCustomModal.params =
                    [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                  CMDGenerator(
                    eventDatashowCustomModal,
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
                ref={(r: any) => (refs['Button_760054_872469'] = r)}
                {...injectData}
              />
            </View>
          </View>
        </Card>
      </VerticalView>
    </div>
  );
};

export default withPageHOC(BusiComp3851874$$BusiComp, {
  pageId: 'pageId 未找到',
  hasLogin: true,
  defaultState: {
    orderNbr: '',
    instId: '',
    custName: '',
    effectDate: '',
    createRejectBtnDisable: '',
    sceneCode: '',
  },
});
