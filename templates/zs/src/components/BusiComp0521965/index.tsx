// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  Select,
  StdUpload,
  Text,
  Button,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = 'pageId 未找到';
const BusiComp0521965$$BusiComp: React.FC<PageProps> = ({
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
    const eventDataapiRequest: any = [
      {
        type: 'apiRequest',
        dataId: 170010194542429630,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '717262',
          pageJsonId: '0521965',
          sync: true,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryAttrValueList',
          _apiCode: 'qryAttrValueList',
          _source: 'rhin',
          _sourceName: '根据规格属性编码查询全部规格属性值列表-tsm',
          _serviceId: '878820809863368704',
          _serviceTitle:
            '根据规格属性编码查询全部规格属性值列表-tsm: qryAttrValueList',
          valueType: 'object',
          apiRequestSetParams: [
            {
              code: 'root',
              name: '根节点',
              attrType: 'object',
              children: [
                {
                  code: 'header',
                  name: '请求头参数',
                  attrType: 'object',
                  _id: 'root.header',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-0',
                  id: 'root.header',
                  dataKey: '717262_root.header',
                },
                {
                  code: 'path',
                  name: '请求路径参数',
                  attrType: 'object',
                  children: [
                    {
                      code: 'attrCode',
                      name: '新增节点',
                      attrType: 'field',
                      type: 'string',
                      mustFlag: 'T',
                      defaultValue: '',
                      _id: 'root.path.attrCode',
                      compType: 'Input',
                      parents: ['root', 'path'],
                      parentType: 'object',
                      parentKey: '0-1',
                      key: '0-1-0',
                      id: 'root.path.attrCode',
                      dataKey: '717262_root.path.attrCode',
                      value: {
                        type: ['customize'],
                        code: 'SUPPORTED_PREVIEW_ATTACHMENT',
                      },
                    },
                  ],
                  _id: 'root.path',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-1',
                  id: 'root.path',
                  dataKey: '717262_root.path',
                },
                {
                  code: 'query',
                  name: 'URL 参数',
                  attrType: 'object',
                  _id: 'root.query',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-2',
                  id: 'root.query',
                  dataKey: '717262_root.query',
                },
                {
                  code: 'body',
                  name: '请求体',
                  attrType: 'object',
                  _id: 'root.body',
                  compType: 'Input',
                  parents: ['root'],
                  parentType: 'object',
                  parentKey: '0',
                  key: '0-3',
                  id: 'root.body',
                  dataKey: '717262_root.body',
                },
              ],
              _id: 'root',
              compType: 'Input',
              isRoot: true,
              parents: [],
              key: '0',
              id: 'root',
              dataKey: '717262_root',
            },
          ],
          params: 'object',
        },
        line_number: 1,
        callback1: [
          {
            type: 'console',
            dataId: 170010202835332740,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '170995',
              pageJsonId: '0521965',
              value: [
                '查询SUPPORTED_PREVIEW_ATTACHMENT结果：',
                '$reply_717262?.resultData$',
              ],
            },
            line_number: 2,
          },
          {
            type: 'customActionCode',
            dataId: 170010253730486000,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '567168',
              pageJsonId: '0521965',
              code: 'function main(data,state,success,fail){var _reply_;var list=((_reply_=reply_717262)===null||_reply_===void 0?void 0:_reply_.resultData)||[];var str="\\\\.(allSupported)$";if(list&&list.length>0){str=list.map(function(item){return item.attrValue}).join("|");console.log("str = ",str);str="\\\\.("+str+")$"}var reg=new RegExp(str,"i");success(reg)};',
            },
            line_number: 3,
            callback1: [
              {
                type: 'console',
                dataId: 170010313912016480,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '968671',
                  pageJsonId: '0521965',
                  value: ['支持的文件预览格式：', '$data_567168$'],
                },
                line_number: 4,
              },
              {
                type: 'setDataSource',
                dataId: 170010288614065800,
                options: {
                  compId: 'setDataSource',
                  compName: 'page',
                  id: '512168',
                  pageJsonId: '0521965',
                  dataSourceId: 167645195103769800,
                  dataSourceName: 'pageParam',
                  dataSourceRelType: 'custom',
                  dataSourceSetValue: [
                    {
                      attrId: '178022',
                      code: 'createStaff',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      _codePath: ['createStaff'],
                      _idpath: ['178022'],
                    },
                    {
                      attrId: '96527313',
                      code: 'supportedSuffix',
                      name: '支持的文件预览后缀',
                      type: 'string',
                      initialData: { type: 'static' },
                      showInput: true,
                      value: { type: ['context', '$data_567168$'], code: '' },
                      _codePath: ['supportedSuffix'],
                      _idpath: ['96527313'],
                    },
                  ],
                  operateType: 1,
                  onlySetPatch: true,
                  otherObjectArrayOptions: {},
                  targetDataSourcePaths: [],
                },
                line_number: 5,
                callback1: [],
                callback2: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest.params = [] || [];
    CMDGenerator(eventDataapiRequest, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest1: any = [
      {
        type: 'apiRequest',
        dataId: 167152268689055970,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '17204',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-0',
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
                  parentType: 'object',
                  parentKey: '3',
                  key: '3-1',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '088178_body',
              key: '3',
            },
            {
              code: 'header',
              name: '请求头参数',
              attrType: 'object',
              _id: 'header',
              compType: 'Input',
              parents: [],
              key: '0',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              key: '1',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              key: '2',
            },
          ],
        },
        line_number: 6,
        callback1: [
          {
            type: 'reloadSelectData',
            dataId: 167152270454824200,
            options: {
              compId:
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              compLib: 'comm',
              pageJsonId: '0521965',
              compName: 'Select',
              id: '888989',
              data: '$reply_17204?.resultData$',
              labelKey: 'attrValueName',
              valueKey: 'attrValue',
            },
            line_number: 7,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest1.params = [] || [];
    CMDGenerator(eventDataapiRequest1, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '5772046',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.scene$',
              operate: '==',
              manualValue: 'V',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167236663560619300,
        elseIfs: [],
        line_number: 8,
        callback1: [
          {
            type: 'sysSetVisible',
            dataId: 167236666739016670,
            options: {
              compId: [
                'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
              ],
              compName: 'page',
              id: '983377',
              pageJsonId: '0521965',
              visible: '',
              compid: [
                'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
              ],
            },
            line_number: 9,
          },
          {
            type: 'ifelse',
            condition: [
              {
                condId: '54618',
                options: { context: '$state.fileList$', operate: 'empty' },
                conditionType: 'checkContextValue',
                objType: 'system',
                objId: 'sys',
              },
            ],
            dataId: 167236728954065820,
            elseIfs: [],
            line_number: 10,
            callback1: [
              {
                type: 'sysSetVisible',
                dataId: 167236732172441100,
                options: {
                  compId: ['Table_125878'],
                  compName: 'page',
                  id: '8718214',
                  pageJsonId: '0521965',
                  visible: '',
                  compid: ['Table_125878'],
                },
                line_number: 11,
              },
            ],
          },
        ],
      },
    ];
    eventDataifelse.params = [] || [];
    CMDGenerator(eventDataifelse, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
    const eventDatasetDataSource: any = [
      {
        type: 'setDataSource',
        dataId: 167236740319941300,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '847438',
          pageJsonId: '0521965',
          dataSourceId: 167152610959573820,
          dataSourceName: 'fileInfoList',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '880491',
              code: 'fileName',
              name: '附件名称',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '860614',
              code: 'filePath',
              name: '附件文件路径',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '348429',
              code: 'fileServerType',
              name: '附件文件服务器类型',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '97801',
              code: 'fileSubType',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '2270309',
              code: 'fileUrl',
              name: '附件url地址',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '849423',
              code: 'tacheCode',
              name: '环节编码',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '454732',
              code: 'fileCode',
              name: '文件编码',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '871705',
              code: 'createTime',
              name: '创建时间',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '7430117',
              code: 'createStaff',
              name: '创建人',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '623253',
              code: 'fileTypeName',
              name: '附件类型',
              type: 'string',
              initialData: { type: 'static' },
            },
            {
              attrId: '463037307',
              code: 'fileType',
              name: '附件分类-大类',
              type: 'string',
              initialData: { type: 'static' },
            },
          ],
          newData: '$state.fileList$',
          operateType: 3,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 12,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource.params = [] || [];
    CMDGenerator(eventDatasetDataSource, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    });
    const eventDataapiRequest2: any = [
      {
        type: 'apiRequest',
        dataId: 167703266248804220,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '82504',
          pageJsonId: '0521965',
          sync: false,
          actionTitle: '',
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'gainDraftMsg',
          _apiCode: 'gainDraftMsg',
          _source: 'rhin',
          _serviceId: '874490760619208704',
          _serviceTitle: '获取起草人信息-hdb: gainDraftMsg',
          params: 'object',
          _sourceName: '获取起草人信息-hdb',
        },
        line_number: 13,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 167703271265702660,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '9917663',
              pageJsonId: '0521965',
              dataSourceId: 167645195103769800,
              dataSourceName: 'pageParam',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  attrId: '178022',
                  code: 'createStaff',
                  name: '属性',
                  type: 'string',
                  initialData: { type: 'static' },
                  value: {
                    type: ['customize'],
                    code: '$reply_82504.resultData.staffName$',
                  },
                  showInput: true,
                  _codePath: ['createStaff'],
                  _idpath: ['178022'],
                },
                {
                  attrId: '96527313',
                  code: 'supportedSuffix',
                  name: '支持的文件预览后缀',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['supportedSuffix'],
                  _idpath: ['96527313'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 14,
            callback1: [],
            callback2: [],
          },
          {
            type: 'console',
            dataId: 167703282086636640,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '7409377',
              pageJsonId: '0521965',
              value: ['$reply_82504$'],
            },
            line_number: 15,
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest2.params = [] || [];
    CMDGenerator(eventDataapiRequest2, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataifelse1: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '4660226',
            options: {
              useManual: true,
              useObject: false,
              context: '$state.isShowTemplate$',
              operate: '==',
              manualValue: '1',
            },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167765572935815170,
        elseIfs: [],
        line_number: 16,
        callback1: [
          {
            type: 'setVisible',
            dataId: 167765576494286850,
            options: {
              compId: 'Button_8469743',
              compLib: 'comm',
              pageJsonId: '0521965',
              compName: 'Button',
              id: '897634',
              visible: 'true',
            },
            line_number: 17,
          },
        ],
      },
    ];
    eventDataifelse1.params = [] || [];
    CMDGenerator(eventDataifelse1, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    }); // console 170055497116102370
    console.log('==附件STATE===', state);

    return () => {};
  }, []);

  useEffect(() => {
    // console 170071017750408830
    console.log('==附件组件状态变化==');
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_0521965__"
    >
      <View
        name={'布局容器'}
        className={'fixed-form-item-label-width-120'}
        backgroundType={{ type: 'cleanColor', color: undefined }}
        $$componentItem={{
          id: 'View_834125',
          uid: 'View_834125',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_834125')}
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
          colSpace={12}
          rowSpace={16}
          formCode={'Form_395851'}
          className={'fixed-form-item-label-width-120'}
          $$componentItem={{
            id: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
            uid: 'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '10px 0px 0px 0px' }}
          ref={(r: any) =>
            refs.setComponentRef(
              r,
              'Form_395851_1727917_9692158_9612234_1000722_434628_511208_810317_526148_446103',
            )
          }
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
            required={false}
            filter={'none'}
            classification={'default'}
            attr={{}}
            placeholder={'请选择'}
            fieldName={'accessory'}
            formItemIndex={0}
            $$componentItem={{
              id: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              uid: 'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              type: 'Select',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
              )
            }
            {...injectData}
          />
          <View
            name={'布局容器'}
            labelCol={8}
            wrapperCol={16}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_9310839',
              uid: 'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_9310839',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
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
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'View_22346374_875512_926873_4359147_729981_339083_0134945_145611_42193717_9310839',
              )
            }
            {...injectData}
          >
            <StdUpload
              name={'附件上传'}
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
              numberLimit={50}
              singleFileMaxSize={99}
              uploadText={'文件上传'}
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
              tipIcon={{
                type: 'question-circle',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              tipContent={'最大上次大小'}
              icon={{
                type: undefined,
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              $$componentItem={{
                id: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_40249',
                uid: 'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_40249',
                type: 'StdUpload',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ margin: '0px 0px 0px 0px' }}
              onFinishUpload={(
                file: any,
                fileList: any,
                fileId: any,
                fileSize: any,
                fileName: any,
                fileResponse: any,
              ) => {
                // console 168422735688877800
                console.log(file, file?.response?.resultMsg, '文件上传打印');
                const eventDatasetLoading2: any = [
                  {
                    type: 'setLoading',
                    dataId: 169501717461630720,
                    options: {
                      compId: 'Table_125878',
                      compLib: 'comm',
                      pageJsonId: '0521965',
                      compName: 'Table',
                      id: '275225',
                      loading: false,
                    },
                    line_number: 2,
                  },
                ];
                eventDatasetLoading2.params =
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
                  eventDatasetLoading2,
                  { file, fileList, fileId, fileSize, fileName, fileResponse },
                  'setLoading',
                  {
                    id: 'setLoading',
                    name: 'setLoading',
                    type: 'setLoading',
                    platform: 'pc',
                  },
                );
                const eventDataifelse13: any = [
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '81120545',
                        options: {
                          context: '$file.response.resultCode$',
                          operate: '==',
                          useManual: true,
                          manualValue: '0',
                        },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168422623246716860,
                    elseIfs: [
                      {
                        dataName: 'elseIf',
                        dataId: 168422635973024060,
                        children: [
                          {
                            dataName: 'action',
                            dataId: 168422638076056160,
                            children: [],
                            todoOptions: ['msgType', 'value', 'duration'],
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '431444',
                              pageJsonId: '0521965',
                              type: 'error',
                              value: '$file?.response?.resultMsg$',
                            },
                            actionObjId: 'showMessage',
                            actionObjName: 'system',
                            value: 'showMessage',
                            tips: '注意：当加载时长为0时，表示一直显示加载中。当加载时长大于0时，表示按照设置时间显示加载中。',
                            line_number: 13,
                          },
                        ],
                        condition: [],
                        value: 'elseIf',
                        desc: '失败',
                        callback: [
                          {
                            type: 'showMessage',
                            dataId: 168422638076056160,
                            options: {
                              compId: 'showMessage',
                              compName: 'system',
                              id: '431444',
                              pageJsonId: '0521965',
                              type: 'error',
                              value: '$file?.response?.resultMsg$',
                            },
                            line_number: 13,
                          },
                        ],
                      },
                    ],
                    line_number: 3,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '81120545',
                            options: {
                              context: '$file.response.resultObject.fileId$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 16842264781748392,
                        elseIfs: [],
                        line_number: 4,
                        callback1: [
                          {
                            type: 'getSelectedData',
                            dataId: 168422647817427550,
                            options: {
                              compId:
                                'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
                              compLib: 'comm',
                              pageJsonId: '0521965',
                              compName: 'Select',
                              id: '128722',
                            },
                            line_number: 5,
                            callback1: [
                              {
                                type: 'setDataSource',
                                dataId: 168422647817440350,
                                options: {
                                  compId: 'setDataSource',
                                  compName: 'page',
                                  id: '822291',
                                  pageJsonId: '537892',
                                  dataSourceId: 167152610959573820,
                                  dataSourceName: 'fileInfoList',
                                  dataSourceRelType: 'custom',
                                  dataSourceReloadFilter: [],
                                  dataSourceSetValue: [
                                    {
                                      attrId: '880491',
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
                                      attrId: '860614',
                                      code: 'filePath',
                                      name: '附件文件路径',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '348429',
                                      code: 'fileServerType',
                                      name: '附件文件服务器类型',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '97801',
                                      code: 'fileSubType',
                                      name: '属性',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                    },
                                    {
                                      attrId: '2270309',
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
                                      attrId: '849423',
                                      code: 'tacheCode',
                                      name: '环节编码',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['customize'],
                                        code: '$state.tacheCode$',
                                      },
                                    },
                                    {
                                      attrId: '454732',
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
                                      attrId: '871705',
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
                                      attrId: '7430117',
                                      code: 'createStaff',
                                      name: '创建人',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['customize'],
                                        code: '$data.pageParam.createStaff$',
                                      },
                                    },
                                    {
                                      attrId: '623253',
                                      code: 'fileTypeName',
                                      name: '附件类型',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['customize'],
                                        code: '$selectedData_128722[0].label$',
                                      },
                                    },
                                    {
                                      attrId: '463037307',
                                      code: 'fileType',
                                      name: '附件分类-大类',
                                      type: 'string',
                                      initialData: { type: 'static' },
                                      value: {
                                        type: ['customize'],
                                        code: '$selectedData_128722[0].value$',
                                      },
                                    },
                                  ],
                                  operateType: 0,
                                  onlySetPatch: true,
                                  otherObjectArrayOptions: {},
                                },
                                line_number: 6,
                                callback1: [
                                  {
                                    type: 'callParentCustomFunc',
                                    dataId: 168422647817442720,
                                    options: {
                                      compId: 'callParentCustomFunc',
                                      compName: 'system',
                                      id: '513921',
                                      pageJsonId: '0521965',
                                      pathname: '/CLS_TY_0001_0001copy1',
                                      pageId: '911894076591796224',
                                      modalPath: '/CLS_TY_0001_0001copy1',
                                      customFuncName: 'fileUpload',
                                      customFuncParams: '$data.fileInfoList$',
                                    },
                                    line_number: 7,
                                    callback1: [],
                                    callback2: [],
                                  },
                                  {
                                    type: 'console',
                                    dataId: 169700901118076350,
                                    options: {
                                      compId: 'debug',
                                      compName: 'system',
                                      id: '098585',
                                      pageJsonId: '0521965',
                                      value: ['$data.fileInfoList$'],
                                    },
                                    line_number: 8,
                                  },
                                  {
                                    type: 'ifelse',
                                    condition: [
                                      {
                                        condId: '770079',
                                        options: {
                                          context: '$state.isUpload$',
                                          operate: 'notEmpty',
                                        },
                                        conditionType: 'checkContextValue',
                                        objType: 'system',
                                        objId: 'sys',
                                      },
                                    ],
                                    dataId: 170056818833578300,
                                    elseIfs: [],
                                    line_number: 9,
                                    callback1: [
                                      {
                                        type: 'callCustomPageFunc',
                                        dataId: 170056869227635870,
                                        options: {
                                          compId: 'callCustomPageFunc',
                                          compName: 'system',
                                          id: '2316887',
                                          pageJsonId: '0521965',
                                          pathname: '/flow/audit',
                                          pageId: '874567207627108352',
                                          modalPath: '/flow/audit',
                                          customFuncName: 'addFile',
                                          customFuncParams:
                                            '$data.fileInfoList$',
                                        },
                                        line_number: 10,
                                        callback1: [],
                                        callback2: [],
                                      },
                                      {
                                        type: 'console',
                                        dataId: 170056879162562200,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '15064',
                                          pageJsonId: '0521965',
                                          value: [
                                            '===附件添加===入参',
                                            '$data.fileInfoList$',
                                          ],
                                        },
                                        line_number: 11,
                                      },
                                    ],
                                  },
                                ],
                                callback2: [],
                              },
                              {
                                type: 'console',
                                dataId: 169700890609943800,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '54807',
                                  pageJsonId: '0521965',
                                  value: ['123456'],
                                },
                                line_number: 12,
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDataifelse13.params =
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
                  eventDataifelse13,
                  { file, fileList, fileId, fileSize, fileName, fileResponse },
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
                const eventDatasetLoading3: any = [
                  {
                    type: 'setLoading',
                    dataId: 169501716221466140,
                    options: {
                      compId: 'Table_125878',
                      compLib: 'comm',
                      pageJsonId: '0521965',
                      compName: 'Table',
                      id: '327957',
                      loading: true,
                    },
                    line_number: 1,
                  },
                ];
                eventDatasetLoading3.params =
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
                  eventDatasetLoading3,
                  { file, fileList, fileId, fileSize, fileName, fileResponse },
                  'setLoading',
                  {
                    id: 'setLoading',
                    name: 'setLoading',
                    type: 'setLoading',
                    platform: 'pc',
                  },
                );
                const eventDatacustomActionCode6: any = [
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
                    line_number: 2,
                    callback1: [],
                    callback2: [],
                  },
                ];
                eventDatacustomActionCode6.params =
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
                  eventDatacustomActionCode6,
                  { file, fileList, fileId, fileSize, fileName, fileResponse },
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
                const eventDatagetSelectedData1: any = [
                  {
                    type: 'getSelectedData',
                    dataId: 167282045114744320,
                    options: {
                      compId:
                        'Input_690228_5400337_280051_232429_7501497_288005_8195412_48663836_335482_605811',
                      compLib: 'comm',
                      pageJsonId: '0521965',
                      compName: 'Select',
                      id: '6790626',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'return',
                        dataId: 168662238584408830,
                        options: {
                          compId: 'return',
                          compName: 'system',
                          id: '583295',
                          pageJsonId: '0521965',
                          returnType: 'success',
                          returnValue: '1',
                        },
                        line_number: 2,
                      },
                    ],
                    callback2: [
                      {
                        type: 'showMessage',
                        dataId: 167349109195087360,
                        options: {
                          compId: 'showMessage',
                          compName: 'system',
                          id: '88392',
                          pageJsonId: '0521965',
                          type: 'error',
                          value: '请选择附件类型！',
                        },
                        line_number: 3,
                      },
                      {
                        type: 'return',
                        dataId: 167282045906701950,
                        options: {
                          compId: 'return',
                          compName: 'system',
                          id: '344968',
                          pageJsonId: '0521965',
                          returnType: 'failure',
                          returnValue: '0',
                        },
                        line_number: 4,
                      },
                    ],
                  },
                ];
                eventDatagetSelectedData1.params = [] || [];
                CMDGenerator(eventDatagetSelectedData1, {}, 'getSelectedData', {
                  id: 'getSelectedData',
                  name: 'getSelectedData',
                  type: 'getSelectedData',
                  platform: 'pc',
                });
              }}
              ref={(r: any) =>
                refs.setComponentRef(
                  r,
                  'StdUpload_6230546_867413_538179_36057857_3505279_0434_242878_424019_1466135_40249',
                )
              }
              {...injectData}
            />
            <Text
              name={'文本'}
              content={'最大上传100M'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_701669',
                uid: 'Text_701669',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: 12,
                lineHeight: '24px',
                color: 'rgba(251, 18, 5, 1)',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_701669')}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_282318',
              uid: 'View_282318',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
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
              padding: '0px 0px 0px 0px',
              width: '100%',
              textAlign: 'right',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_282318')}
            {...injectData}
          >
            <Button
              name={'模板下载'}
              shape={null}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              type={'primary'}
              formItemIndex={3}
              labelCol={8}
              wrapperCol={16}
              icon={{
                type: 'download',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              }}
              iconType={'download'}
              hasIcon={true}
              $$componentItem={{
                id: 'Button_8469743',
                uid: 'Button_8469743',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={false}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 30px 0px 0px' }}
              onClick={(e: any) => {
                const eventDataapiRequest13: any = [
                  {
                    type: 'apiRequest',
                    dataId: 167765557740671600,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '817175',
                      pageJsonId: '0521965',
                      sync: false,
                      actionTitle: '',
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'getDcFileTemplateByCatalogCode',
                      _apiCode: 'getDcFileTemplateByCatalogCode',
                      _source: 'rhin',
                      _serviceId: '948113497661403136',
                      _serviceTitle:
                        '根据场景编码获取模板信息: getDcFileTemplateByCatalogCode',
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
                          dataKey: '817175_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          children: [
                            {
                              code: 'catalogCode',
                              name: '新增节点',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'T',
                              defaultValue: '',
                              _id: 'path.catalogCode',
                              compType: 'Input',
                              parents: ['path'],
                              id: 'path.catalogCode',
                              dataKey: '817175_path.catalogCode',
                              value: {
                                type: ['context', '$state.catalogCode$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '817175_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '817175_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '817175_body',
                        },
                      ],
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'downloadByFileId',
                        dataId: 167765565890283700,
                        options: {
                          compId: 'downloadByFileId',
                          compName: 'system',
                          id: '532905',
                          pageJsonId: '0521965',
                          data: '$reply_817175?.resultData.fileId$',
                        },
                        line_number: 2,
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest13.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest13, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_8469743')}
              {...injectData}
            />
          </View>
        </Form>
        <Table
          name={'表格'}
          isFlexColumn={false}
          extendNum={3}
          adjustModel={'auto'}
          pageSize={10}
          current={1}
          tableTitle={'表格名称'}
          headBtnNum={3}
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
              id: '883964',
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
              id: '160235',
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
              id: '255388',
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
              id: '068395',
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
          customNum={3}
          formItemIndex={0}
          labelCol={8}
          wrapperCol={16}
          dataSource={data?.fileInfoList}
          rowKey={'fileCode'}
          rowActions={[
            {
              title: '删除',
              iconPos: 'left',
              icon: { theme: 'outlined', type: 'delete' },
              type: 'delete',
              id: '648461',
              rule: "state.scene === 'V'",
              checked: true,
            },
          ]}
          extend={[
            {
              id: '385847',
              title: '下载',
              iconPos: 'left',
              icon: {
                type: 'download',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              },
              checked: true,
            },
            {
              id: '686213',
              title: '预览',
              iconPos: 'left',
              icon: {
                type: 'eye',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              },
              rule: '!(data.pageParam.supportedSuffix.test(row.fileName))',
              checked: true,
            },
          ]}
          dataSourceFromDataSourceConfig={'data.fileInfoList'}
          $$componentItem={{
            id: 'Table_125878',
            uid: 'Table_125878',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          onRowDelete={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode7: any = [
              {
                type: 'customActionCode',
                dataId: 167153035178204580,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '368337',
                  pageJsonId: '0521965',
                  code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}success(newFileInfoList)};',
                },
                line_number: 1,
                callback1: [
                  {
                    type: 'setDataSource',
                    dataId: 167153038462980130,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '756846',
                      pageJsonId: '0521965',
                      dataSourceId: 167152610959573820,
                      dataSourceName: 'fileInfoList',
                      dataSourceRelType: 'custom',
                      dataSourceReloadFilter: [],
                      dataSourceSetValue: [
                        {
                          attrId: '880491',
                          code: 'fileName',
                          name: '附件名称',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '860614',
                          code: 'filePath',
                          name: '附件文件路径',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '348429',
                          code: 'fileServerType',
                          name: '附件文件服务器类型',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '97801',
                          code: 'fileSubType',
                          name: '属性',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '2270309',
                          code: 'fileUrl',
                          name: '附件url地址',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '849423',
                          code: 'tacheCode',
                          name: '环节编码',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '454732',
                          code: 'fileCode',
                          name: '文件编码',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '871705',
                          code: 'createTime',
                          name: '创建时间',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '7430117',
                          code: 'createStaff',
                          name: '创建人',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '623253',
                          code: 'fileTypeName',
                          name: '附件类型',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                        {
                          attrId: '463037307',
                          code: 'fileType',
                          name: '附件分类-大类',
                          type: 'string',
                          initialData: { type: 'static' },
                        },
                      ],
                      newData: '$data_368337$',
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                    },
                    line_number: 2,
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 167153039376645000,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '6094173',
                          pageJsonId: '0521965',
                          pathname: '/CLS_TY_0001_0001copy1',
                          pageId: '911894076591796224',
                          modalPath: '/CLS_TY_0001_0001copy1',
                          customFuncName: 'fileUpload',
                          customFuncParams: '$data.fileInfoList$',
                        },
                        line_number: 3,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                ],
                callback2: [],
              },
            ];
            eventDatacustomActionCode7.params =
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
              eventDatacustomActionCode7,
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
            const eventDatadownloadByFileId: any = [
              {
                type: 'downloadByFileId',
                dataId: 167153043640615460,
                options: {
                  compId: 'downloadByFileId',
                  compName: 'system',
                  id: '250574',
                  pageJsonId: '0521965',
                  data: '$rowId$',
                },
                line_number: 1,
              },
            ];
            eventDatadownloadByFileId.params =
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
              eventDatadownloadByFileId,
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
          onClickBtn2={(rowId: any, row: any, index: any) => {
            const eventDatapreviewFile: any = [
              {
                type: 'previewFile',
                dataId: 169501659899501440,
                options: {
                  compId: 'previewFile',
                  compName: 'page',
                  id: '9678283',
                  pageJsonId: '0521965',
                  fileId: '$rowId$',
                },
                line_number: 1,
              },
            ];
            eventDatapreviewFile.params =
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
              eventDatapreviewFile,
              { rowId, row, index },
              'previewFile',
              {
                id: 'previewFile',
                name: 'previewFile',
                type: 'previewFile',
                platform: 'pc',
              },
            ); // console 169881822252756930
            console.log(row);
            // console 170010354733287400
            console.log(data?.pageParam);
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Table_125878')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(BusiComp0521965$$BusiComp, {
  pageId,
  hasLogin: true,
  defaultState: {
    catalogCode: '',
    scene: '',
    fileList: '',
    isShowTemplate: '',
    isUpload: '',
  },
});
