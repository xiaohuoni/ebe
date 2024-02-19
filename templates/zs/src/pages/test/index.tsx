// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Checkbox, Divider, HorizontalView, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Test$$Page: React.FC<PageProps> = ({
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
    // console 167393811627362180
    console.log(state?.catalogName);

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_537892__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_537892_1_2061057_500084',
          uid: 'View_537892_1_2061057_500084',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 20px',
          overflowY: 'visible',
          width: '98%',
        }}
        ref={(r: any) => (refs['View_537892_1_2061057_500084'] = r)}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          visible={true}
          dashed={false}
          dividerText={state?.catalogTitle}
          $$componentItem={{
            id: 'Divider_52558_0392997_302136',
            uid: 'Divider_52558_0392997_302136',
            type: 'Divider',
            ...componentItem,
          }}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => (refs['Divider_52558_0392997_302136'] = r)}
          {...injectData}
        />
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553_449831_263933',
            uid: 'View_6806553_449831_263933',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_6806553_449831_263933'] = r)}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            visible={true}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602_63707_414276',
              uid: 'HorizontalView_004602_63707_414276',
              type: 'HorizontalView',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => (refs['HorizontalView_004602_63707_414276'] = r)}
            {...injectData}
          >
            <View
              name={'布局容器'}
              visible={true}
              $$componentItem={{
                id: 'View_339406_281032_85457',
                uid: 'View_339406_281032_85457',
                type: 'View',
                ...componentItem,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => (refs['View_339406_281032_85457'] = r)}
              {...injectData}
            >
              <HorizontalView
                name={'左右布局'}
                $$componentItem={{
                  id: 'HorizontalView_806975_0096748',
                  uid: 'HorizontalView_806975_0096748',
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
                  margin: '0px 0px 0px 0px',
                }}
                ref={(r: any) => (refs['HorizontalView_806975_0096748'] = r)}
                {...injectData}
              >
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_9690203_08144',
                    uid: 'View_9690203_08144',
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
                  }}
                  ref={(r: any) => (refs['View_9690203_08144'] = r)}
                  {...injectData}
                >
                  <Checkbox
                    name={'审批场景'}
                    titleTip={'text'}
                    tipLocation={'after'}
                    tipPlacement={'top'}
                    visible={true}
                    text={state?.catalogName}
                    selfSpan={8}
                    labelCol={8}
                    wrapperCol={16}
                    formItemIndex={0}
                    fieldName={'aduitClass'}
                    defaultChecked={false}
                    disabled={false}
                    tipIcon={{
                      theme: 'outlined',
                      type: 'question-circle',
                      isIconFont: false,
                    }}
                    tipContent={data?.sceneSubmit?.childCatalogDesc}
                    readOnly={false}
                    $$componentItem={{
                      id: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_6012577',
                      uid: 'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_6012577',
                      type: 'Checkbox',
                      ...componentItem,
                    }}
                    onChange={(e: any) => {
                      const eventDataifelse543: any = [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '712658',
                              options: {
                                context: '$e.target.checked$',
                                operate: '== true',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 167393845560802620,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 167393845560892900,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 167393845560808540,
                                  children: [
                                    {
                                      dataName: 'callback',
                                      dataId: 167393845560831140,
                                      children: [],
                                      value: 'callback1',
                                      params: [],
                                      elseIfs: [],
                                    },
                                    {
                                      dataName: 'callback',
                                      dataId: 167393845560830700,
                                      children: [],
                                      value: 'callback2',
                                      params: [],
                                      elseIfs: [],
                                    },
                                  ],
                                  todoOptions: [
                                    'pathname',
                                    'customFuncName',
                                    'customFuncParams',
                                  ],
                                  options: {
                                    compId: 'callParentCustomFunc',
                                    compName: 'system',
                                    id: '1441594',
                                    pageJsonId: '537892',
                                    pathname: '/faqishuaidantanchuang7958',
                                    pageId: '908274270111293440',
                                    customFuncName: 'delScenceCodeList',
                                    customFuncParams: '$state.sceneCode$',
                                  },
                                  actionObjId: 'callParentCustomFunc',
                                  actionObjName: 'system',
                                  value: 'callParentCustomFunc',
                                  elseIfs: [],
                                  line_number: 3,
                                },
                              ],
                              condition: [],
                              elseIfs: [],
                              callback: [
                                {
                                  type: 'callParentCustomFunc',
                                  dataId: 167393845560808540,
                                  options: {
                                    compId: 'callParentCustomFunc',
                                    compName: 'system',
                                    id: '1441594',
                                    pageJsonId: '537892',
                                    pathname: '/faqishuaidantanchuang7958',
                                    pageId: '908274270111293440',
                                    customFuncName: 'delScenceCodeList',
                                    customFuncParams: '$state.sceneCode$',
                                  },
                                  line_number: 3,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                            },
                          ],
                          line_number: 1,
                          callback1: [
                            {
                              type: 'callParentCustomFunc',
                              dataId: 167393845560806200,
                              options: {
                                compId: 'callParentCustomFunc',
                                compName: 'system',
                                id: '051216',
                                pageJsonId: '537892',
                                pathname: '/faqishuaidantanchuang7958',
                                pageId: '908274270111293440',
                                customFuncName: 'pushSceneCodeList',
                                customFuncParams: '$state.sceneCode$',
                                modalPath: '/faqishuaidantanchuang7958',
                              },
                              line_number: 2,
                              callback1: [],
                              callback2: [],
                            },
                          ],
                        },
                      ];
                      eventDataifelse543.params =
                        [
                          {
                            title: '复选框取值',
                            name: 'e',
                            value: '$e.target.checked$',
                          },
                        ] || [];
                      CMDGenerator(eventDataifelse543, { e }, 'ifelse', {
                        id: 'ifelse',
                        name: 'ifelse',
                        type: 'ifelse',
                        platform: 'pc',
                      });
                    }}
                    ref={(r: any) =>
                      (refs[
                        'Checkbox_882584_5289015_934499_355644_646764_5265724_8221694_7217427_269901_5135105_6012577'
                      ] = r)
                    }
                    {...injectData}
                  />
                </View>
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_200544_113112',
                    uid: 'View_200544_113112',
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
                    textAlign: 'right',
                  }}
                  ref={(r: any) => (refs['View_200544_113112'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  visible={true}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_200544_764009_37918',
                    uid: 'View_200544_764009_37918',
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
                  ref={(r: any) => (refs['View_200544_764009_37918'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_741146_4429651_115949',
                    uid: 'View_741146_4429651_115949',
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
                    textAlign: 'right',
                  }}
                  ref={(r: any) => (refs['View_741146_4429651_115949'] = r)}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  visible={true}
                  $$componentItem={{
                    id: 'View_741146_4429651_673978_643572',
                    uid: 'View_741146_4429651_673978_643572',
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
                  }}
                  ref={(r: any) =>
                    (refs['View_741146_4429651_673978_643572'] = r)
                  }
                  {...injectData}
                />
              </HorizontalView>
            </View>
          </HorizontalView>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Test$$Page, {
  pageId: '932525247900168192',
  hasLogin: false,
  defaultState: {
    sceneCode: '',
    itemList: '',
    busiObjNbr: '',
    catalogName: '',
    catalogTitle: '',
  },
});
