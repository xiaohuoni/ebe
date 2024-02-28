// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Text,
  Form,
  Checkbox,
  Input,
  RemoteComponent,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '889446392714366976';
const ClsJc_0011_0002$$Page: React.FC<PageProps> = ({
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
  const fileUpload = (options_732068: any) => {
    const eventDatacustomActionCode182: any = [
      {
        type: 'customActionCode',
        dataId: 168655071902371070,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '9311626',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){data.sceneSubmit.fileInfo=options_732068;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'callParentCustomFunc',
            dataId: 168655071902372860,
            options: {
              compId: 'callParentCustomFunc',
              compName: 'system',
              id: '762909',
              pageJsonId: '537892',
              pathname: '/commonAuditOrder',
              pageId: '872682457815691264',
              customFuncName: 'getFactor',
              customFuncParams: '$data.sceneSubmit$',
              modalPath: '/commonAuditOrder',
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode182.params =
      [
        {
          title: '事件入参',
          name: 'options_732068',
          value: '$options_732068$',
        },
      ] || [];
    CMDGenerator(
      eventDatacustomActionCode182,
      { options_732068 },
      'customActionCode',
      {
        id: 'customActionCode',
        name: 'customActionCode',
        type: 'customActionCode',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fileUpload,
  }));

  useEffect(() => {
    const eventDatasetValue19: any = [
      {
        type: 'setValue',
        dataId: 166366701822212200,
        options: {
          compId: 'Input_361479_887285_2150708_0235518_772568_092526_5801397',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '1232726',
          value: '$state.itemList.approveGradeName$',
          valueList: {
            Input_361479_887285_2150708_0235518_772568_092526_5801397:
              '$state.itemList.approveGradeName$',
          },
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue19.params = [] || [];
    CMDGenerator(eventDatasetValue19, {}, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
    const eventDatacustomActionCode293: any = [
      {
        type: 'customActionCode',
        dataId: 166366677496009950,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '402862',
          pageJsonId: '537892',
          code: 'function main(data,state,success,fail){var _state$itemList;success({dataSource:(state===null||state===void 0?void 0:(_state$itemList=state.itemList)===null||_state$itemList===void 0?void 0:_state$itemList.instList)||[]})};',
          actionTitle: '设置界面初始化值',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setRemoteCompProps',
            dataId: 166366738271510400,
            options: {
              compId: 'RemoteComponent_455921',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'RemoteComponent',
              id: '996414',
              rProps: '$data_402862$',
            },
            line_number: 3,
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode293.params = [] || [];
    CMDGenerator(eventDatacustomActionCode293, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
    const eventDatasetDisable69: any = [
      {
        type: 'setDisable',
        dataId: 166366750405275040,
        options: {
          compId: 'Input_361479_887285_2150708_0235518_772568_092526_5801397',
          compLib: 'comm',
          pageJsonId: '537892',
          compName: 'Input',
          id: '192901',
          disabled: 'true',
        },
        line_number: 4,
      },
    ];
    eventDatasetDisable69.params = [] || [];
    CMDGenerator(eventDatasetDisable69, {}, 'setDisable', {
      id: 'setDisable',
      name: 'setDisable',
      type: 'setDisable',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_537892__"
    >
      <View
        className="View_View_537892_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_537892_1',
          uid: 'View_537892_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '0px 0px 0px 20px',
          overflowY: 'visible',
          width: '98%',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          type={'horizontal'}
          dashed={false}
          dashedWidth={4}
          dashedMargin={4}
          showTitle={true}
          dividerText={'催缴台账挂起'}
          orientation={'center'}
          titleColor={'rgba(28,36,46,0.75)'}
          titleFontSize={14}
          titleLineHeight={'22px'}
          titleFontWeight={500}
          height={'12px'}
          width={'1px'}
          $$componentItem={{
            id: 'Divider_2669989',
            uid: 'Divider_2669989',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_2669989')}
          {...injectData}
        />
        <View
          className="View_View_6806553"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6806553',
            uid: 'View_6806553',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6806553')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_004602',
              uid: 'HorizontalView_004602',
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
              margin: '0px 0px 12px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_004602')}
            {...injectData}
          >
            <View
              className="View_View_55502"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_55502',
                uid: 'View_55502',
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
                width: '0%',
                height: '32px',
                overflowY: 'auto',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_55502')}
              {...injectData}
            >
              <Text
                name={'文本'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_159172',
                  uid: 'Text_159172',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  fontSize: 16,
                  lineHeight: '16px',
                  color: '#1c242e',
                  position: 'absolute',
                  top: '24px',
                  left: '16px',
                  width: '4px',
                  height: '16px',
                  'margin-right': '8px',
                  background: '#1890ff',
                  'border-radius': '2px',
                  content: '',
                  'min-height': '16px',
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Text_159172')}
                {...injectData}
              />
            </View>
            <View
              className="View_View_339406"
              name={'布局容器'}
              $$componentItem={{
                id: 'View_339406',
                uid: 'View_339406',
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
                overflowY: 'auto',
                margin: '15px 0px 5px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_339406')}
              {...injectData}
            >
              <Form
                name={'表单'}
                colSpan={12}
                labelCol={8}
                wrapperCol={16}
                colon={true}
                layout={'horizontal'}
                labelAlign={'right'}
                header={'标题'}
                colSpace={0}
                rowSpace={16}
                formCode={'Form_4311097'}
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_4311097_9385662_1929847_738917_814178_838097',
                  uid: 'Form_4311097_9385662_1929847_738917_814178_838097',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) =>
                  refs.setComponentRef(
                    r,
                    'Form_4311097_9385662_1929847_738917_814178_838097',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'催缴台账挂起'}
                  selfSpan={12}
                  labelCol={'4'}
                  wrapperCol={20}
                  formItemIndex={0}
                  fieldName={'aduitClass'}
                  defaultChecked={true}
                  tipIcon={{
                    theme: 'outlined',
                    type: 'question-circle',
                    isIconFont: false,
                  }}
                  tipContent={data?.sceneSubmit?.childCatalogDesc}
                  $$componentItem={{
                    id: 'Checkbox_882584_5289015_934499_57326296_002468_057088_915227',
                    uid: 'Checkbox_882584_5289015_934499_57326296_002468_057088_915227',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Checkbox_882584_5289015_934499_57326296_002468_057088_915227',
                    )
                  }
                  {...injectData}
                />
                <Input
                  name={'场景最高审批等级'}
                  size={'default'}
                  selfSpan={12}
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
                  fieldName={'auditClass'}
                  formItemIndex={1}
                  className={'fixed-form-item-label-width-150'}
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
                    id: 'Input_361479_887285_2150708_0235518_772568_092526_5801397',
                    uid: 'Input_361479_887285_2150708_0235518_772568_092526_5801397',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_0235518_772568_092526_5801397',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
        </View>
        <View
          className="View_View_492859"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_492859',
            uid: 'View_492859',
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
            overflowY: 'hidden',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_492859')}
          {...injectData}
        >
          <RemoteComponent
            name={'远程组件'}
            formItemIndex={0}
            labelCol={8}
            wrapperCol={16}
            fileCode={'collectionAccountPending'}
            $$componentItem={{
              id: 'RemoteComponent_455921',
              uid: 'RemoteComponent_455921',
              type: 'RemoteComponent',
              ...componentItem,
            }}
            appId={undefined}
            lcdpParentRenderId={undefined}
            onMessage={(msg: any) => {}}
            ref={(r: any) => refs.setComponentRef(r, 'RemoteComponent_455921')}
            {...injectData}
          />
        </View>
        <View
          className="View_View_829802"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_829802',
            uid: 'View_829802',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_829802')}
          {...injectData}
        >
          <BusiComp0521965
            pageId={pageId}
            busiCompId={'922396081753948160'}
            name={'附件'}
            busiCompStates={{
              catalogCode: state?.catalogCode,
              scene: state?.scene,
              fileList: state?.itemList?.fileInfo,
            }}
            style={{ margin: '0 0 12px 0' }}
            ref={(r: any) => refs.setComponentRef(r, 'BOFramer_9931375')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0011_0002$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
