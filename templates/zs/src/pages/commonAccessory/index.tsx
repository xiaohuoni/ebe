// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Row,
  Form,
  Input,
  Select,
  StdUpload,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '917361051253690368';
const CommonAccessory$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest615: any = [
      {
        type: 'apiRequest',
        dataId: 167032098425912000,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '611024',
          pageJsonId: '537892',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogAttrValueList',
          _apiCode: 'qryCatalogAttrValueList',
          _source: 'rhin',
          _serviceId: '889391610000404480',
          _serviceTitle: '查询场景规格属性值列表: qryCatalogAttrValueList',
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
              dataKey: '088178_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '088178_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '088178_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'catalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.catalogCode',
                  compType: 'Input',
                  name: 'catalogCode',
                  parents: ['body'],
                  id: 'body.catalogCode',
                  dataKey: '088178_body.catalogCode',
                  value: { type: ['customize'], code: '$state.catalogCode$' },
                },
                {
                  code: 'attrCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.attrCode',
                  compType: 'Input',
                  name: 'attrCode',
                  parents: ['body'],
                  id: 'body.attrCode',
                  dataKey: '088178_body.attrCode',
                  value: { type: ['customize'], code: 'attachmentType' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '088178_body',
            },
          ],
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167032099905981400,
            options: {
              compId: 'Input_690228_78512',
              compLib: 'comm',
              pageJsonId: '303862',
              compName: 'Select',
              id: '56881',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
              data: '$reply_611024?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest615.params = [] || [];
    CMDGenerator(eventDataapiRequest615, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    }); // console 167039891498490200
    console.log('数据源。。。。。。。aaa。。。。。');
    // console 167039885467319500
    console.log(state?.fileInfoList);
    const eventDataifelse306: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '3138866',
            options: { context: '$state.fileInfoList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167032105360293700,
        elseIfs: [],
        line_number: 5,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167032111402990200,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '848635',
              pageJsonId: '303862',
              dataSourceId: 167032079212110270,
              dataSourceName: 'fileInfoList',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '9356874',
                  code: 'fileName',
                  name: '附件名称',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '213536',
                  code: 'filePath',
                  name: '附件文件路径',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '123676',
                  code: 'fileServerType',
                  name: '附件文件服务器类型',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '690812',
                  code: 'fileSubType',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '216347',
                  code: 'fileType',
                  name: '附件分类-大类',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '6484167',
                  code: 'fileUrl',
                  name: '附件url地址',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '584269',
                  code: 'tacheCode',
                  name: '环节编码',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '5869896',
                  code: 'fileCode',
                  name: '文件编码',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '8367092',
                  code: 'createTime',
                  name: '创建时间',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '4592245',
                  code: 'createStaff',
                  name: '创建人',
                  type: 'string',
                  initialData: { type: 'static' },
                },
                {
                  attrId: '910033',
                  code: 'fileTypeName',
                  name: '附件类型',
                  type: 'string',
                  initialData: { type: 'static' },
                },
              ],
              newData: '$state.fileInfoList$',
              operateType: 3,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 6,
            callback1: [],
            callback2: [],
          },
          {
            type: 'sysSetVisible',
            dataId: 167040037309593440,
            options: {
              compId: ['Row_851124_1499437'],
              compName: 'page',
              id: '7093835',
              pageJsonId: '303862',
              visible: '',
              compid: ['Row_851124_1499437'],
            },
            line_number: 7,
          },
        ],
      },
    ];
    eventDataifelse306.params = [] || [];
    CMDGenerator(eventDataifelse306, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_303862__"
    >
      <View
        className="View_View_303862_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_303862_1',
          uid: 'View_303862_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_303862_1')}
        {...injectData}
      >
        <Row
          name={'行容器'}
          visible={true}
          colSpan={24}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_851124_1499437',
            uid: 'Row_851124_1499437',
            type: 'Row',
            ...componentItem,
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Row_851124_1499437')}
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
            formCode={'Form_810694'}
            $$componentItem={{
              id: 'Form_810694',
              uid: 'Form_810694',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_810694')}
            {...injectData}
          >
            <Input
              name={'输入框'}
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
              formItemIndex={0}
              fieldName={'inaaa'}
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
                id: 'Input_896718',
                uid: 'Input_896718',
                type: 'Input',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_896718')}
              {...injectData}
            />
          </Form>
          <Form
            name={'表单'}
            colSpan={8}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            visible={true}
            header={'标题'}
            colSpace={12}
            rowSpace={16}
            formCode={'Form_395851123121231'}
            $$componentItem={{
              id: 'Form_395851_1975566',
              uid: 'Form_395851_1975566',
              type: 'Form',
              ...componentItem,
            }}
            style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Form_395851_1975566')}
            {...injectData}
          >
            <Select
              name={'附件'}
              size={'default'}
              selfSpan={8}
              labelCol={8}
              wrapperCol={16}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              filter={'none'}
              classification={'default'}
              attr={{}}
              placeholder={'请选择'}
              fieldName={'accessory'}
              formItemIndex={0}
              $$componentItem={{
                id: 'Input_690228_78512',
                uid: 'Input_690228_78512',
                type: 'Select',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => refs.setComponentRef(r, 'Input_690228_78512')}
              {...injectData}
            />
            <View
              className="View_View_22346374_224745"
              name={'布局容器'}
              visible={true}
              labelCol={8}
              wrapperCol={16}
              backgroundType={{ type: 'cleanColor', color: undefined }}
              $$componentItem={{
                id: 'View_22346374_224745',
                uid: 'View_22346374_224745',
                type: 'View',
                ...componentItem,
              }}
              isFormRootChild={true}
              schema={{
                compType: 0,
                props: {
                  formItemIndex: 1,
                  style: undefined,
                  selfSpan: undefined,
                },
              }}
              style={{
                display: 'block',
                flexDirection: 'column',
                padding: '0px 0px 0px 0px',
                width: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_22346374_224745')}
              {...injectData}
            >
              <StdUpload
                name={'附件上传'}
                visible={true}
                uploadStyle={'click'}
                titleTip={'notext'}
                tipLocation={'after'}
                tipPlacement={'top'}
                fileNameEncode={false}
                isWatermark={false}
                optionalFile={false}
                fileName={'file'}
                selfSpan={''}
                labelCol={'8'}
                wrapperCol={16}
                acceptType={[]}
                withCredentials={true}
                numberLimit={5}
                singleFileMaxSize={50}
                uploadText={'点击上传'}
                deleteIcon={{
                  deleteIconTheme: 'outlined',
                  deleteIconType: 'delete',
                  deleteIconIsIconFont: false,
                  showRemoveIcon: false,
                }}
                downloadIcon={{
                  downloadIconTheme: 'outlined',
                  downloadIconType: 'download',
                  downloadIconIsIconFont: false,
                  showDownloadIcon: false,
                }}
                previewIcon={{
                  previewIconTheme: 'outlined',
                  previewIconType: 'eye',
                  previewIconIsIconFont: false,
                  showPreviewIcon: false,
                }}
                fieldName={'uploading'}
                icon={{
                  type: undefined,
                  theme: 'outlined',
                  fontAddress: '',
                  isIconFont: false,
                  iconFileInfo: {},
                }}
                uploadAccepType={{
                  accept:
                    '.jpg,.jpeg,.png,.pdf,.tiff,.swf,.txt,.doc,.xls,.ppt,.docx,.xlsx,.pptx',
                  acceptExtension: '',
                }}
                $$componentItem={{
                  id: 'StdUpload_6230546_626431',
                  uid: 'StdUpload_6230546_626431',
                  type: 'StdUpload',
                  ...componentItem,
                }}
                style={{ margin: '0px 0px 0px 0px' }}
                onFinishUpload={(
                  file: any,
                  fileList: any,
                  fileId: any,
                  fileSize: any,
                  fileName: any,
                  fileResponse: any,
                ) => {
                  const eventDataifelse549: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '795941',
                          options: {
                            context: '$file?.response?.resultObject?.fileId$',
                            operate: 'notEmpty',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 167032235422414370,
                      elseIfs: [],
                      line_number: 1,
                      callback1: [
                        {
                          type: 'getSelectedData',
                          dataId: 167032239268131070,
                          options: {
                            compId: 'Input_690228_78512',
                            compLib: 'comm',
                            pageJsonId: '303862',
                            compName: 'Select',
                            id: '7213675',
                          },
                          line_number: 2,
                          callback1: [
                            {
                              type: 'setDataSource',
                              dataId: 167032239890581820,
                              options: {
                                compId: 'setDataSource',
                                compName: 'page',
                                id: '06414678',
                                pageJsonId: '537892',
                                dataSourceId: 167032079212110270,
                                dataSourceName: 'fileInfoList',
                                dataSourceRelType: 'custom',
                                dataSourceReloadFilter: [],
                                dataSourceSetValue: [
                                  {
                                    attrId: '9356874',
                                    code: 'fileName',
                                    name: '附件名称',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$file?.name$'],
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '213536',
                                    code: 'filePath',
                                    name: '附件文件路径',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '123676',
                                    code: 'fileServerType',
                                    name: '附件文件服务器类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '690812',
                                    code: 'fileSubType',
                                    name: '属性',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '216347',
                                    code: 'fileType',
                                    name: '附件分类-大类',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['customize'],
                                      code: '$selectedData_7213675[0].value$',
                                    },
                                  },
                                  {
                                    attrId: '6484167',
                                    code: 'fileUrl',
                                    name: '附件url地址',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['customize'],
                                      code: '$file?.response?.resultObject?.filePathInServer$',
                                    },
                                  },
                                  {
                                    attrId: '584269',
                                    code: 'tacheCode',
                                    name: '环节编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                  },
                                  {
                                    attrId: '5869896',
                                    code: 'fileCode',
                                    name: '文件编码',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: [
                                        'context',
                                        '$file?.response?.resultObject?.fileId$',
                                      ],
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '8367092',
                                    code: 'createTime',
                                    name: '创建时间',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['customize'],
                                      code: '$file?.response?.resultObject?.statusDate$',
                                    },
                                  },
                                  {
                                    attrId: '4592245',
                                    code: 'createStaff',
                                    name: '创建人',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['context', '$state.createStaff$'],
                                      code: '',
                                    },
                                  },
                                  {
                                    attrId: '910033',
                                    code: 'fileTypeName',
                                    name: '附件类型',
                                    type: 'string',
                                    initialData: { type: 'static' },
                                    value: {
                                      type: ['customize'],
                                      code: '$selectedData_7213675[0].label$',
                                    },
                                  },
                                ],
                                operateType: 0,
                                onlySetPatch: true,
                                otherObjectArrayOptions: {},
                              },
                              line_number: 3,
                              callback1: [
                                {
                                  type: 'callParentCustomFunc',
                                  dataId: 167039741217790750,
                                  options: {
                                    compId: 'callParentCustomFunc',
                                    compName: 'system',
                                    id: '713076',
                                    pageJsonId: '303862',
                                    pathname: '/CLS_TY_0001_0004',
                                    pageId: '907192957799936000',
                                    customFuncName: 'fileUpload',
                                    customFuncParams: '$data.fileInfoList$',
                                  },
                                  line_number: 4,
                                  callback1: [],
                                  callback2: [],
                                },
                              ],
                              callback2: [],
                            },
                          ],
                          callback2: [],
                        },
                      ],
                    },
                  ];
                  eventDataifelse549.params =
                    [
                      { title: '文件对象', name: 'file', value: '$file$' },
                      {
                        title: '文件列表',
                        name: 'fileList',
                        value: '$fileList$',
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
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataifelse549,
                    {
                      file,
                      fileList,
                      fileId,
                      fileSize,
                      fileName,
                      fileResponse,
                    },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                }}
                onListenUploading={(
                  file: any,
                  fileList: any,
                  fileId: any,
                  fileSize: any,
                  fileName: any,
                  fileResponse: any,
                ) => {
                  const eventDatacustomActionCode870: any = [
                    {
                      type: 'customActionCode',
                      dataId: 166192905624837500,
                      options: {
                        compId: 'customActionCode',
                        compName: 'page',
                        id: '5697634',
                        pageJsonId: '537892',
                        code: 'function main(data,state,success,fail){document.querySelectorAll(".pcfactory-upload-list-text").forEach(function(v){v.style.display="none"})};',
                      },
                      line_number: 1,
                      callback1: [],
                      callback2: [],
                    },
                  ];
                  eventDatacustomActionCode870.params =
                    [
                      { title: '文件对象', name: 'file', value: '$file$' },
                      {
                        title: '文件列表',
                        name: 'fileList',
                        value: '$fileList$',
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
                      },
                    ] || [];
                  CMDGenerator(
                    eventDatacustomActionCode870,
                    {
                      file,
                      fileList,
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
                onCheckUpload={() => {
                  const eventDatavalidateCurrentForm97: any = [
                    {
                      type: 'validateCurrentForm',
                      dataId: 167030763661307940,
                      shielding: true,
                      options: {
                        compId: 'Form_395851_1975566',
                        compLib: 'comm',
                        pageJsonId: '537892',
                        compName: 'Form',
                        id: '629183',
                      },
                      line_number: 1,
                      callback1: [
                        {
                          type: 'console',
                          dataId: 167039290206740060,
                          shielding: true,
                          options: {
                            compId: 'debug',
                            compName: 'system',
                            id: '665157',
                            pageJsonId: '303862',
                            value: ['成功'],
                          },
                          line_number: 2,
                        },
                      ],
                      callback2: [
                        {
                          type: 'return',
                          dataId: 167031852948735420,
                          shielding: true,
                          options: {
                            compId: 'return',
                            compName: 'system',
                            id: '9605207',
                            pageJsonId: '537892',
                            returnType: 'failure',
                          },
                          line_number: 3,
                        },
                      ],
                    },
                  ];
                  eventDatavalidateCurrentForm97.params = [] || [];
                  CMDGenerator(
                    eventDatavalidateCurrentForm97,
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
                ref={(r: any) =>
                  refs.setComponentRef(r, 'StdUpload_6230546_626431')
                }
                {...injectData}
              />
            </View>
          </Form>
        </Row>
        <View
          className="View_View_4949093_4607945"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_4949093_4607945',
            uid: 'View_4949093_4607945',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            padding: '0px 0px 0px 0px',
            width: '0A',
            height: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_4949093_4607945')}
          {...injectData}
        >
          <Table
            name={'表格'}
            isFlexColumn={false}
            pageSize={10}
            current={1}
            tableTitle={'表格名称'}
            showCustom={{
              iconPosition: 'left',
              type: undefined,
              theme: undefined,
              fontAddress: undefined,
              isIconFont: undefined,
              customTitle: '自定义列',
              customStyle: 'default',
              iconFile: undefined,
              hasCustom: false,
            }}
            columns={[
              {
                title: '附件名称',
                key: 'fileName',
                dataIndex: 'fileName',
                className: '',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                title: '附件类型',
                key: 'fileTypeName',
                dataIndex: 'fileTypeName',
                className: 'divider',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                title: '创建人',
                key: 'createStaff',
                dataIndex: 'createStaff',
                className: 'divider',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
              {
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
                className: 'divider',
                customRendering: undefined,
                editContent: {
                  edittype: 'title',
                  title: {
                    code: 'function main(text, row, index) { return text;}',
                    originCode: [
                      '/**',
                      ' * 计算绑定的内容',
                      ' * @param {String} text 行数据中数据字段翻译后的内容',
                      ' * @param {Object} row 行数据对象',
                      ' * @param {Number} index 行索引',
                      ' * @returns {Boolean} 实际值',
                      ' * 例：return row.id，表示当行主键为id时，返回内容为row.id实际的值',
                      ' */',
                      'function main(text, row, index) {',
                      '    return text;',
                      '}',
                    ],
                  },
                },
              },
            ]}
            page={false}
            rowKeyType={'specified'}
            visible={true}
            editMode={'single'}
            selectType={'checkbox'}
            bordered={'segmentation'}
            size={'middle'}
            fixedAction={false}
            rowSelection={undefined}
            showHead={false}
            showTotal={false}
            showSizeChanger={false}
            showQuickJumper={false}
            pageSizeOptions={'[5,10,20]'}
            dataSource={data?.fileInfoList}
            rowActions={[
              {
                title: '删除',
                iconPos: 'left',
                icon: { theme: 'outlined', type: 'delete' },
                type: 'delete',
                id: '948989',
                rule: "state.scene === 'V'",
                checked: true,
              },
            ]}
            extend={[
              {
                id: '5476746',
                title: '下载',
                iconPos: 'left',
                icon: {
                  theme: 'outlined',
                  type: 'download',
                  isIconFont: false,
                },
                checked: true,
              },
            ]}
            rowKey={'fileCode'}
            dataSourceFromDataSourceConfig={'data.fileInfoList'}
            $$componentItem={{
              id: 'Table_5369494_0841236',
              uid: 'Table_5369494_0841236',
              type: 'Table',
              ...componentItem,
            }}
            style={{ margin: '10px 0px 0px 0px' }}
            onRowDelete={(rowId: any, row: any, index: any) => {
              const eventDatacustomActionCode871: any = [
                {
                  type: 'customActionCode',
                  dataId: 166192918606345900,
                  options: {
                    compId: 'customActionCode',
                    compName: 'page',
                    id: '8342055',
                    pageJsonId: '537892',
                    code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}success(newFileInfoList)};',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setDataSource',
                      dataId: 166193290759619360,
                      options: {
                        compId: 'setDataSource',
                        compName: 'page',
                        id: '4133837',
                        pageJsonId: '537892',
                        dataSourceId: 166192841018643170,
                        dataSourceName: 'fileInfoList',
                        dataSourceRelType: 'custom',
                        dataSourceReloadFilter: [],
                        dataSourceSetValue: [
                          {
                            code: 'fileName',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件名称',
                            defaultValue: '',
                            name: '附件名称',
                            attrId: '458544',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'filePath',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件文件路径',
                            defaultValue: '',
                            name: '附件文件路径',
                            attrId: '6354087',
                            initialData: {
                              type: 'static',
                              value: '附件文件路径',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileServerType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件文件服务器类型',
                            defaultValue: '',
                            name: '附件文件服务器类型',
                            attrId: '184934',
                            initialData: {
                              type: 'static',
                              value: '附件文件服务器类型',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileSubType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件分类-细类',
                            defaultValue: '',
                            name: '属性',
                            attrId: '551676',
                            initialData: {
                              type: 'static',
                              value: '附件分类-细类',
                            },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileType',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件分类-大类',
                            defaultValue: '',
                            name: '附件分类-大类',
                            attrId: '383524',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'fileUrl',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '附件url地址',
                            defaultValue: '',
                            name: '附件url地址',
                            attrId: '726875',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            code: 'tacheCode',
                            attrType: 'field',
                            type: 'string',
                            mustFlag: 'F',
                            exampleValue: '环节编码',
                            defaultValue: '',
                            name: '环节编码',
                            attrId: '865444',
                            initialData: { type: 'static', value: '' },
                            parentKey: '1',
                            parentType: 'object',
                          },
                          {
                            attrId: '7419638',
                            code: 'fileCode',
                            name: '文件编码',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '097484',
                            code: 'createTime',
                            name: '创建时间',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '604675',
                            code: 'createStaff',
                            name: '创建人',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                          {
                            attrId: '729925',
                            code: 'fileTypeName',
                            name: '附件类型',
                            type: 'string',
                            initialData: { type: 'static' },
                          },
                        ],
                        newData: '$data_8342055$',
                        operateType: 3,
                        onlySetPatch: true,
                        otherObjectArrayOptions: {},
                      },
                      line_number: 2,
                      callback1: [],
                      callback2: [],
                    },
                    {
                      type: 'callParentCustomFunc',
                      dataId: 167039746505827700,
                      options: {
                        compId: 'callParentCustomFunc',
                        compName: 'system',
                        id: '097562',
                        pageJsonId: '537892',
                        pathname: '/CLS_TY_0001_0004',
                        pageId: '907192957799936000',
                        customFuncName: 'fileUpload',
                        customFuncParams: '$data_8342055$',
                        modalPath: '/CLS_TY_0001_0004',
                      },
                      line_number: 3,
                      callback1: [],
                      callback2: [],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatacustomActionCode871.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatacustomActionCode871,
                { rowId, row, index },
                'customActionCode',
                {
                  id: 'customActionCode',
                  name: 'customActionCode',
                  type: 'customActionCode',
                  platform: 'pc',
                },
              );
            }}
            onClickBtn1={(rowId: any, row: any, index: any) => {
              const eventDatadownloadByFileId123: any = [
                {
                  type: 'downloadByFileId',
                  dataId: 166193298494793600,
                  options: {
                    compId: 'downloadByFileId',
                    compName: 'system',
                    id: '698245',
                    pageJsonId: '537892',
                    data: '$rowId$',
                  },
                  line_number: 1,
                },
              ];
              eventDatadownloadByFileId123.params =
                [
                  { title: '行id', name: 'rowId', value: '$rowId$' },
                  {
                    title: '行对象',
                    name: 'row',
                    value: '$row$',
                    attrType: 'object',
                  },
                  { title: '行索引', name: 'index', value: '$index$' },
                ] || [];
              CMDGenerator(
                eventDatadownloadByFileId123,
                { rowId, row, index },
                'downloadByFileId',
                {
                  id: 'downloadByFileId',
                  name: 'downloadByFileId',
                  type: 'downloadByFileId',
                  platform: 'pc',
                },
              );
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Table_5369494_0841236')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(CommonAccessory$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    catalogCode: '',
    fileInfoList: '',
    createStaff: '',
    scene: '',
  },
});
