// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Form,
  Input,
  Radio,
  StdUpload,
  TextArea,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const BusiComp978237$$BusiComp: React.FC<PageProps> = ({
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
    const eventDataifelse11: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '87270248',
            options: { context: '$state.tacheCode$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166098463828799260,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'setValue',
            dataId: 166098467984734880,
            options: {
              compId: 'Input_355936',
              compLib: 'comm',
              pageJsonId: '978237',
              compName: 'Input',
              id: '5409834',
              value: '$state.tacheCode$',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166236246793955330,
            options: {
              compId: 'Input_6412724_049375',
              compLib: 'comm',
              pageJsonId: '978237',
              compName: 'Input',
              id: '408185',
              value: '$state.meetingType$',
            },
            line_number: 3,
            callback1: [],
          },
          {
            type: 'setValue',
            dataId: 166236246997999870,
            options: {
              compId: 'Input_233347_453721',
              compLib: 'comm',
              pageJsonId: '978237',
              compName: 'Input',
              id: '194429',
              value: '$state.meetingOrderType$',
            },
            line_number: 4,
            callback1: [],
          },
        ],
      },
    ];
    eventDataifelse11.params = [] || [];
    CMDGenerator(eventDataifelse11, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_978237__"
    >
      <Card
        name={'流程处理'}
        cardIconType={'middle'}
        title={'审批信息'}
        bordered={true}
        size={'default'}
        hasHeader={true}
        visible={true}
        hasIcon={true}
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
          id: 'Card_674854',
          uid: 'Card_674854',
          type: 'Card',
          ...componentItem,
        }}
        disabled={false}
        readOnly={false}
        style={{
          padding: '20px 20px 20px 20px',
          overflowY: 'visible',
          margin: '0 0 16px 0',
        }}
        ref={(r: any) => (refs['Card_674854'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6881883',
            uid: 'View_6881883',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_6881883'] = r)}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={'16'}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_0063102'}
            $$componentItem={{
              id: 'Form_0063102',
              uid: 'Form_0063102',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_0063102'] = r)}
            {...injectData}
          >
            <Radio
              name={'是否通过'}
              radioType={'Radio'}
              optionMarginRight={0}
              selfSpan={24}
              labelCol={8}
              wrapperCol={16}
              disabled={false}
              visible={true}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              formItemIndex={0}
              fieldName={'tachePass'}
              defaultValue={'pass'}
              dataSource={[
                { id: '862079', label: '同意', value: 'pass' },
                { id: '722802', label: '不同意', value: 'refuse' },
              ]}
              $$componentItem={{
                id: 'Radio_774135',
                uid: 'Radio_774135',
                type: 'Radio',
                ...componentItem,
              }}
              isFormRootChild={true}
              onChange={(e: any) => {
                const eventDatasetRequired1: any = [
                  {
                    type: 'setRequired',
                    dataId: 166026875296862750,
                    options: {
                      compId: 'TextArea_4776246',
                      compLib: 'comm',
                      pageJsonId: '978237',
                      compName: 'TextArea',
                      id: '479978',
                      required: 'toggle',
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetRequired1.params =
                  [
                    {
                      title: '单选组取值',
                      name: 'e',
                      value: '$e.target.value$',
                    },
                  ] || [];
                CMDGenerator(eventDatasetRequired1, { e }, 'setRequired', {
                  id: 'setRequired',
                  name: 'setRequired',
                  type: 'setRequired',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Radio_774135'] = r)}
              {...injectData}
            />
            <TextArea
              name={'审批意见'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              readOnly={false}
              disabled={false}
              visible={true}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'tacheRemark'}
              $$componentItem={{
                id: 'TextArea_4776246',
                uid: 'TextArea_4776246',
                type: 'TextArea',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['TextArea_4776246'] = r)}
              {...injectData}
            />
            <Input
              name={'当前环节编码'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'8'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={2}
              disabled={false}
              visible={false}
              readOnly={false}
              fieldName={'tacheCode'}
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
                id: 'Input_355936',
                uid: 'Input_355936',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_355936'] = r)}
              {...injectData}
            />
            <StdUpload
              name={'附件'}
              visible={true}
              uploadStyle={'click'}
              listType={'text'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              fileNameEncode={false}
              isWatermark={false}
              optionalFile={false}
              fileName={'file'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'16'}
              acceptType={[]}
              withCredentials={true}
              numberLimit={1}
              singleFileMaxSize={99}
              uploadText={'点击上传'}
              deleteIcon={{
                deleteIconTheme: 'outlined',
                deleteIconType: 'delete',
                deleteIconIsIconFont: false,
                showRemoveIcon: true,
              }}
              downloadIcon={{
                downloadIconTheme: 'outlined',
                downloadIconType: 'download',
                downloadIconIsIconFont: false,
                showDownloadIcon: true,
              }}
              previewIcon={{
                previewIconTheme: 'outlined',
                previewIconType: 'eye',
                previewIconIsIconFont: false,
                showPreviewIcon: true,
              }}
              formItemIndex={3}
              fieldName={'tacheAttachments'}
              icon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'StdUpload_3523188',
                uid: 'StdUpload_3523188',
                type: 'StdUpload',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['StdUpload_3523188'] = r)}
              {...injectData}
            />
            <Input
              name={'会签类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'8'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={4}
              fieldName={'meetingType'}
              disabled={false}
              visible={false}
              readOnly={false}
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
                id: 'Input_6412724_049375',
                uid: 'Input_6412724_049375',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_6412724_049375'] = r)}
              {...injectData}
            />
            <Input
              name={'会签订单类型'}
              size={'default'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'8'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipContent={''}
              tipPlacement={'top'}
              prefixIconPosition={'before'}
              postfix={''}
              postfixIconPosition={'before'}
              required={false}
              placeholder={'请输入'}
              formItemIndex={5}
              fieldName={'meetingOrderType'}
              disabled={false}
              visible={false}
              readOnly={false}
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
                id: 'Input_233347_453721',
                uid: 'Input_233347_453721',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_233347_453721'] = r)}
              {...injectData}
            />
          </Form>
        </View>
      </Card>
    </div>
  );
};

export default withPageHOC(BusiComp978237$$BusiComp, {
  pageId: 'pageId 未找到',
  hasLogin: true,
  defaultState: { tacheCode: '', meetingType: '', meetingOrderType: '' },
});
