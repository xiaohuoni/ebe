// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import {
  Card,
  Collapse,
  CollapsePanel,
  Form,
  Input,
  StdUpload,
  View,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Zibiaodanyemian3314$$Page: React.FC<PageProps> = ({
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
  const validate = (options_913741: any) => {
    const eventDatavalidateCurrentForm7: any = [
      {
        type: 'validateCurrentForm',
        dataId: 166946247713032000,
        options: {
          compId: 'Form_0121155',
          compLib: 'comm',
          pageJsonId: '866916',
          compName: 'Form',
          id: '00966',
        },
        line_number: 1,
        callback1: [
          {
            type: 'return',
            dataId: 166946249139026660,
            options: {
              compId: 'return',
              compName: 'system',
              id: '350006',
              pageJsonId: '866916',
              returnType: 'success',
              returnValue: '$Form_0121155$',
            },
            line_number: 2,
          },
        ],
        callback2: [
          {
            type: 'return',
            dataId: 166946250207518850,
            options: {
              compId: 'return',
              compName: 'system',
              id: '713338',
              pageJsonId: '866916',
              returnType: 'failure',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDatavalidateCurrentForm7.params =
      [
        {
          title: '事件入参',
          name: 'options_913741',
          value: '$options_913741$',
        },
      ] || [];
    CMDGenerator(
      eventDatavalidateCurrentForm7,
      { options_913741 },
      'validateCurrentForm',
      {
        id: 'validateCurrentForm',
        name: 'validateCurrentForm',
        type: 'validateCurrentForm',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    validate,
  }));

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_866916__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_866916_1',
          uid: 'View_866916_1',
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
        ref={(r: any) => (refs['View_866916_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_542154',
            uid: 'View_542154',
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
          ref={(r: any) => (refs['View_542154'] = r)}
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
            formCode={'Form_0121155'}
            $$componentItem={{
              id: 'Form_0121155',
              uid: 'Form_0121155',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_0121155'] = r)}
            {...injectData}
          >
            <Input
              name={'输入框'}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'aField'}
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
                id: 'Input_0570272',
                uid: 'Input_0570272',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_0570272'] = r)}
              {...injectData}
            />
            <Input
              name={'输入框'}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'bField'}
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
                id: 'Input_22845',
                uid: 'Input_22845',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_22845'] = r)}
              {...injectData}
            />
            <Input
              name={'输入框'}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={2}
              fieldName={'cField'}
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
                id: 'Input_289382',
                uid: 'Input_289382',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_289382'] = r)}
              {...injectData}
            />
            <Input
              name={'输入框'}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={3}
              fieldName={'dField'}
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
                id: 'Input_071095',
                uid: 'Input_071095',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['Input_071095'] = r)}
              {...injectData}
            />
          </Form>
        </View>
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          extendNum={3}
          title={'标题'}
          bordered={true}
          size={'default'}
          hasHeader={true}
          hasIcon={true}
          titleColor={'#1c242e'}
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
            id: 'Card_490794',
            uid: 'Card_490794',
            type: 'Card',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            padding: '20px 20px 20px 20px',
            overflowY: 'visible',
            margin: '0 0 16px 0',
          }}
          ref={(r: any) => (refs['Card_490794'] = r)}
          {...injectData}
        />
        <Collapse
          name={'折叠面板'}
          defaultActiveKey={['1']}
          expandIconPosition={'right'}
          collapseType={''}
          size={'default'}
          bordered={true}
          hasIcon={true}
          cardIconType={'middle'}
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
            id: 'Collapse_346658',
            uid: 'Collapse_346658',
            type: 'Collapse',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            width: '100%',
            margin: '0 0 16px 0',
            padding: '20px 20px 20px 20px',
          }}
          ref={(r: any) => (refs['Collapse_346658'] = r)}
          {...injectData}
        >
          <CollapsePanel
            name={'折叠子面板'}
            header={'标题1'}
            key={'1'}
            $$componentItem={{
              id: 'CollapsePanel_761428',
              uid: 'CollapsePanel_761428',
              type: 'CollapsePanel',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['CollapsePanel_761428'] = r)}
            {...injectData}
            uid="CollapsePanel_761428"
          />
          <CollapsePanel
            name={'折叠子面板'}
            header={'标题2'}
            key={'2'}
            $$componentItem={{
              id: 'CollapsePanel_103824',
              uid: 'CollapsePanel_103824',
              type: 'CollapsePanel',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ minHeight: 40 }}
            ref={(r: any) => (refs['CollapsePanel_103824'] = r)}
            {...injectData}
            uid="CollapsePanel_103824"
          />
        </Collapse>
        <StdUpload
          name={'文件上传'}
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
          wrapperCol={16}
          acceptType={[]}
          withCredentials={true}
          numberLimit={50}
          singleFileMaxSize={50}
          uploadText={'点击上传'}
          uploadTimeout={30000}
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
          fieldName={'file'}
          icon={{
            type: undefined,
            theme: 'outlined',
            fontAddress: '',
            isIconFont: false,
            iconFileInfo: {},
          }}
          $$componentItem={{
            id: 'StdUpload_9609207',
            uid: 'StdUpload_9609207',
            type: 'StdUpload',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) => (refs['StdUpload_9609207'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Zibiaodanyemian3314$$Page, {
  pageId: '912940693587320832',
  hasLogin: false,
  defaultState: {},
});
