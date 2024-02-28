// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, StdUpload } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '923100355260731392';
const Chengpinpiliangdaoru7257$$Modal: React.FC<PageProps> = ({
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
  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal95: any = [
      {
        type: 'closeModal',
        dataId: '2541_1',
        options: { compId: 'page', compName: 'page', id: '709709' },
        line_number: 1,
      },
    ];
    eventDatacloseModal95.params = [] || [];
    CMDGenerator(eventDatacloseModal95, {}, 'closeModal', {
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
      className="__CustomClass_609171__"
    >
      <View
        className="View_View_609171_1"
        name={'页面'}
        visible={true}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_609171_1',
          uid: 'View_609171_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_609171_1')}
        {...injectData}
      >
        <Form
          name={'表单'}
          colSpan={24}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_0855528'}
          $$componentItem={{
            id: 'Form_0855528',
            uid: 'Form_0855528',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_0855528')}
          {...injectData}
        >
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
            visible={true}
            withCredentials={true}
            numberLimit={1}
            singleFileMaxSize={99}
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
            formItemIndex={0}
            fieldName={'a'}
            icon={{
              type: undefined,
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            }}
            uploadAccepType={{ accept: '.xls,.xlsx', acceptExtension: '' }}
            $$componentItem={{
              id: 'StdUpload_7119871',
              uid: 'StdUpload_7119871',
              type: 'StdUpload',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            isFormRootChild={true}
            onFinishUpload={(
              file: any,
              fileList: any,
              fileResponseList: any,
              fileId: any,
              fileSize: any,
              fileName: any,
              fileResponse: any,
            ) => {
              const eventDatacustomActionCode859: any = [
                {
                  type: 'customActionCode',
                  dataId: 167169093710895460,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '2830138',
                    pageJsonId: '609171',
                    code: 'function main(data,state,success,fail){console.log("file",file)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'closeModal',
                      dataId: 167169098076397020,
                      options: {
                        compId: 'closeModal',
                        compName: 'page',
                        id: '210781',
                        pageJsonId: '609171',
                      },
                      line_number: 2,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode859.params =
                [
                  {
                    title: '文件对象',
                    name: 'file',
                    value: '$file$',
                    attrType: 'object',
                  },
                  {
                    title: '上传信息列表',
                    name: 'fileList',
                    value: '$fileList$',
                  },
                  {
                    title: '文件列表',
                    name: 'fileResponseList',
                    value: '$fileResponseList$',
                  },
                  {
                    title: '文件ID',
                    name: 'fileId',
                    value: '$file?.response?.resultObject?.fileId$',
                  },
                  {
                    title: '文件大小',
                    name: 'fileSize',
                    value: '$file?.size$',
                  },
                  {
                    title: '文件名称',
                    name: 'fileName',
                    value: '$file?.name$',
                  },
                  {
                    title: '响应信息',
                    name: 'fileResponse',
                    value: '$file?.response$',
                    attrType: 'object',
                  },
                ] || [];
              CMDGenerator(
                eventDatacustomActionCode859,
                {
                  file,
                  fileList,
                  fileResponseList,
                  fileId,
                  fileSize,
                  fileName,
                  fileResponse,
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
            ref={(r: any) => refs.setComponentRef(r, 'StdUpload_7119871')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(Chengpinpiliangdaoru7257$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '' },
});
