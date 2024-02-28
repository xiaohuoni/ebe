// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Form, Input, StdUpload } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '937251303701123072';
const FileUpload$$Page: React.FC<PageProps> = ({
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
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_361215__"
    >
      <View
        className="View_View_361215_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_361215_1',
          uid: 'View_361215_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_361215_1')}
        {...injectData}
      >
        <View
          className="View_View_120203"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_120203',
            uid: 'View_120203',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_120203')}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_9264'}
            $$componentItem={{
              id: 'Form_9264',
              uid: 'Form_9264',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_9264')}
            {...injectData}
          >
            <Input
              name={'场景编码'}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'catalogCode'}
              allowClear={false}
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
                id: 'Input_2897093',
                uid: 'Input_2897093',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_2897093')}
              {...injectData}
            />
            <Input
              name={'文件名称'}
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
              required={true}
              placeholder={'请输入'}
              formItemIndex={1}
              fieldName={'fileName'}
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
                id: 'Input_8581093',
                uid: 'Input_8581093',
                type: 'Input',
                ...componentItem,
              }}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_8581093')}
              {...injectData}
            />
            <View
              className="View_View_154979"
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_154979',
                uid: 'View_154979',
                type: 'View',
                ...componentItem,
              }}
              disabled={false}
              readOnly={false}
              isFormRootChild={true}
              schema={{
                compType: 0,
                props: {
                  formItemIndex: 2,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 10px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_154979')}
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
                numberLimit={5}
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
                fieldName={'upload'}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                $$componentItem={{
                  id: 'StdUpload_5451514',
                  uid: 'StdUpload_5451514',
                  type: 'StdUpload',
                  ...componentItem,
                }}
                disabled={false}
                readOnly={false}
                style={{ margin: '0px 0px 0px 12px' }}
                onCheckUpload={() => {
                  const eventDatavalidateCurrentForm93: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 167506477373709950,
                      options: {
                        compId: 'Form_9264',
                        compLib: 'comm',
                        pageJsonId: '361215',
                        compName: 'Form',
                        id: '49810017',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [
                        {
                          type: 'return',
                          dataId: 167506478044894460,
                          options: {
                            compId: 'return',
                            compName: 'system',
                            id: '41293',
                            pageJsonId: '361215',
                            returnType: 'failure',
                          },
                          line_number: 2,
                        },
                      ],
                    },
                  ];
                  eventDatavalidateCurrentForm93.params = [] || [];
                  CMDGenerator(
                    eventDatavalidateCurrentForm93,
                    {},
                    'validateCurrentForm',
                    {
                      id: 'validateCurrentForm',
                      name: 'validateCurrentForm',
                      type: 'validateCurrentForm',
                      platform: 'pc',
                    },
                  );
                }}
                onFinishUpload={(
                  file: any,
                  fileList: any,
                  fileResponseList: any,
                  fileId: any,
                  fileSize: any,
                  fileName: any,
                  fileResponse: any,
                ) => {
                  const eventDatavalidateCurrentForm94: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 167506480689844900,
                      options: {
                        compId: 'Form_9264',
                        compLib: 'comm',
                        pageJsonId: '361215',
                        compName: 'Form',
                        id: '7878836',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'apiRequest',
                          dataId: 167506514992168860,
                          options: {
                            compId: 'apiRequest',
                            compName: 'system',
                            id: '292629',
                            pageJsonId: '361215',
                            sync: false,
                            method: 'post',
                            url: '/app/rhin/gateway/callRhinEngine',
                            _capabilityCode: 'fileDownloadAndUploadServer',
                            _apiCode: 'fileDownloadAndUploadServer',
                            _source: 'rhin',
                            _serviceId: '923113550197182464',
                            _serviceTitle:
                              '下载文件并上传指定服务器-hdb: fileDownloadAndUploadServer',
                            params: 'object',
                            apiRequestSetParams: [
                              {
                                code: 'header',
                                name: '请求头参数',
                                attrType: 'object',
                                _id: 'header',
                                compType: 'Input',
                                parents: [],
                                id: 'header',
                                dataKey: '292629_header',
                              },
                              {
                                code: 'path',
                                name: '请求路径参数',
                                attrType: 'object',
                                _id: 'path',
                                compType: 'Input',
                                parents: [],
                                id: 'path',
                                dataKey: '292629_path',
                              },
                              {
                                code: 'query',
                                name: 'URL 参数',
                                attrType: 'object',
                                _id: 'query',
                                compType: 'Input',
                                parents: [],
                                id: 'query',
                                dataKey: '292629_query',
                              },
                              {
                                code: 'body',
                                name: '请求体',
                                attrType: 'object',
                                children: [
                                  {
                                    code: 'fileName',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.fileName',
                                    compType: 'Input',
                                    parents: ['body'],
                                    id: 'body.fileName',
                                    dataKey: '292629_body.fileName',
                                    value: {
                                      type: ['context', '$file?.name$'],
                                      code: '',
                                    },
                                  },
                                  {
                                    code: 'catalogCode',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.catalogCode',
                                    compType: 'Input',
                                    parents: ['body'],
                                    id: 'body.catalogCode',
                                    dataKey: '292629_body.catalogCode',
                                    value: {
                                      type: [
                                        'form',
                                        'Form_9264',
                                        'getFieldsValue',
                                      ],
                                      code: 'catalogCode',
                                    },
                                  },
                                  {
                                    code: 'fileCode',
                                    name: '新增节点',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    defaultValue: '',
                                    _id: 'body.fileCode',
                                    compType: 'Input',
                                    parents: ['body'],
                                    id: 'body.fileCode',
                                    dataKey: '292629_body.fileCode',
                                    value: {
                                      type: [
                                        'context',
                                        '$file?.response?.resultObject?.fileId$',
                                      ],
                                      code: '',
                                    },
                                  },
                                ],
                                _id: 'body',
                                compType: 'Input',
                                parents: [],
                                id: 'body',
                                dataKey: '292629_body',
                              },
                            ],
                          },
                          line_number: 2,
                          callback1: [],
                          callback2: [],
                        },
                      ],
                      callback2: [],
                    },
                  ];
                  eventDatavalidateCurrentForm94.params =
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
                    eventDatavalidateCurrentForm94,
                    {
                      file,
                      fileList,
                      fileResponseList,
                      fileId,
                      fileSize,
                      fileName,
                      fileResponse,
                    },
                    'validateCurrentForm',
                    {
                      id: 'validateCurrentForm',
                      name: 'validateCurrentForm',
                      type: 'validateCurrentForm',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'StdUpload_5451514')}
                {...injectData}
              />
            </View>
          </Form>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(FileUpload$$Page, {
  pageId,
  hasLogin: false,
  defaultState: {},
});
