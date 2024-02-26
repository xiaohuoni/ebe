// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Divider,
  HorizontalView,
  Form,
  Checkbox,
  Input,
  TextArea,
  Img,
  Text,
  Table,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '900639219600035840';
const ClsJc_0011_0001$$Page: React.FC<PageProps> = ({
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
    const eventDataifelse251: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '56263',
            options: { context: '$state.itemList$', operate: 'notEmpty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 166132402524071650,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 168543198435356900,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '550496',
              pageJsonId: '537892',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'getSysConfigCacheByCode',
              _apiCode: 'getSysConfigCacheByCode',
              _source: 'rhin',
              _sourceName: '根据分组和编码获取缓存配置-zzz',
              _serviceId: '889805005870690304',
              _serviceTitle:
                '根据分组和编码获取缓存配置-zzz: getSysConfigCacheByCode',
              valueType: 'object',
              params: 'object',
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
                      dataKey: '550496_root.header',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'root.path',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-1',
                      id: 'root.path',
                      dataKey: '550496_root.path',
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
                      dataKey: '550496_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'cfCode',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.cfCode',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.cfCode',
                          dataKey: '550496_root.body.cfCode',
                          value: {
                            type: ['customize'],
                            code: 'MOA_LCDP_APP_URL',
                          },
                        },
                        {
                          code: 'cfGroupCode',
                          name: '新增节点',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          defaultValue: '',
                          _id: 'root.body.cfGroupCode',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-1',
                          id: 'root.body.cfGroupCode',
                          dataKey: '550496_root.body.cfGroupCode',
                          value: { type: ['customize'], code: 'LCDP' },
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                      id: 'root.body',
                      dataKey: '550496_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '550496_root',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'console',
                dataId: 168543214535456450,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '5156832',
                  pageJsonId: '537892',
                  value: ['$reply_550496?.resultData.cfValue$', '这里'],
                },
                line_number: 3,
              },
              {
                type: 'customActionCode',
                dataId: 168543210514514800,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '103108',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var item=state.itemList;data.sceneSubmit=item;var factorForm={};var attrList=item.attrList;for(var i=0;i<attrList.length;i++){if(attrList[i].attrValueDesc!=null){factorForm[attrList[i].attrCode]=attrList[i].attrValueDesc}else{factorForm[attrList[i].attrCode]=attrList[i].attrValue}}data.factorForm=factorForm;data.sceneSubmit.approveGrade=item.approveGrade;data.sceneSubmit.approveGradeName=item.approveGradeName;success(factorForm)};',
                  actionTitle: '设置界面初始化值',
                },
                line_number: 4,
                callback1: [
                  {
                    type: 'setValue',
                    dataId: 168543210514505400,
                    options: {
                      compId:
                        'Input_361479_887285_2150708_0235518_772568_273065_8955167_941493',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Input',
                      id: '330241',
                      value: '$state.itemList.approveGradeName$',
                      valueList: {
                        Input_361479_887285_2150708_0235518_772568_273065_8955167_941493:
                          '$state.itemList.approveGradeName$',
                      },
                    },
                    line_number: 5,
                    callback1: [],
                  },
                  {
                    type: 'ifelse',
                    condition: [
                      {
                        condId: '0857822',
                        options: { context: '$data_103108$', operate: 'empty' },
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                      {
                        options: {
                          useManual: true,
                          useObject: false,
                          context: '$state.scene$',
                          operate: '==',
                          manualValue: 'V',
                        },
                        condId: '236859',
                        connector: '&&',
                        conditionType: 'checkContextValue',
                        objType: 'system',
                        objId: 'sys',
                      },
                    ],
                    dataId: 168543210514583700,
                    elseIfs: [],
                    line_number: 6,
                    callback1: [
                      {
                        type: 'setVisible',
                        dataId: 168543210514535420,
                        options: {
                          compId: 'Table_5369494',
                          compLib: 'comm',
                          pageJsonId: '537892',
                          compName: 'Table',
                          id: '549324',
                          visible: '',
                        },
                        line_number: 7,
                      },
                    ],
                  },
                  {
                    type: 'setSrc',
                    dataId: 168543210514524670,
                    options: {
                      compId: 'Img_0558442',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Img',
                      id: '779506',
                      value:
                        '$reply_550496?.resultData.cfValue+"/lcdp-app/server/app/file/file/id/"+data.factorForm.argeReminderPhot+"?X-B-AUTH=1&X-B-TARGET-ID=892698540070318080&appId=871672424566726656"$',
                    },
                    line_number: 8,
                    callback1: [],
                  },
                  {
                    type: 'setSrc',
                    dataId: 168543210514559140,
                    options: {
                      compId: 'Img_3701356',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Img',
                      id: '5132268',
                      value:
                        '$reply_550496?.resultData.cfValue+"/lcdp-app/server/app/file/file/id/"+data.factorForm.creditControlPhot+"?X-B-AUTH=1&X-B-TARGET-ID=892698540070318080&appId=871672424566726656"$',
                    },
                    line_number: 9,
                    callback1: [],
                  },
                  {
                    type: 'setSrc',
                    dataId: 168543210514555800,
                    options: {
                      compId: 'Img_414869',
                      compLib: 'comm',
                      pageJsonId: '537892',
                      compName: 'Img',
                      id: '629927',
                      value:
                        '$reply_550496?.resultData.cfValue+"/lcdp-app/server/app/file/file/id/"+data.factorForm.artificialAuditPhot+"?X-B-AUTH=1&X-B-TARGET-ID=892698540070318080&appId=871672424566726656"$',
                    },
                    line_number: 10,
                    callback1: [],
                  },
                  {
                    type: 'customActionCode',
                    dataId: 168543210514530400,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '047223',
                      pageJsonId: '537892',
                      code: 'function main(data,state,success,fail){var head=document.head||document.getElementsByTagName("head")[0];var appId="871672424566726656";var appendCss=function appendCss(code,appId){var style=document.createElement("link");style.setAttribute("rel","stylesheet");style.setAttribute("href","server/app/file/appFileResource/downloadFileByFileCode?appId=".concat(appId,"&fileCode=").concat(code,"&X-B-AUTH=1&X-B-TARGET-ID=876477551371075584"));head.appendChild(style)};var appendJs=function appendJs(code){var script=document.createElement("script");script.type="text/javascript";script.async=false;script.setAttribute("src","server/app/file/appFileResource/downloadFileByFileCode?appId=".concat(appId,"&fileCode=").concat(code,"&X-B-AUTH=1&X-B-TARGET-ID=876477551371075584"));script.onload=success;head.appendChild(script)};appendCss("viewercss",appId);appendJs("viewerjs",appId)};',
                    },
                    line_number: 11,
                    callback1: [
                      {
                        type: 'customActionCode',
                        dataId: 168543210514580030,
                        options: {
                          compId: 'customActionCode',
                          compName: 'page',
                          id: '0533847',
                          pageJsonId: '537892',
                          code: 'function main(data,state,success,fail){var viewer=new Viewer(document.querySelector(".myImg1"),{navbar:false,toolbar:false,viewed:function viewed(){viewer.zoomTo(1)}});var viewer1=new Viewer(document.querySelector(".myImg2"),{navbar:false,toolbar:false,viewed:function viewed(){viewer1.zoomTo(1)}});var viewer2=new Viewer(document.querySelector(".myImg3"),{navbar:false,toolbar:false,viewed:function viewed(){viewer2.zoomTo(1)}})};',
                        },
                        line_number: 12,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                    callback2: [],
                  },
                  {
                    type: 'console',
                    dataId: 168543210514562900,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '8874616',
                      pageJsonId: '537892',
                      value: [
                        '$"https://lxdev.iwhalecloud.com/HJD/lcdp-app/server/app/file/file/id/"+data.factorForm.argeReminderPhot+"?X-B-AUTH=1&X-B-TARGET-ID=892698540070318080&appId=871672424566726656"$',
                      ],
                    },
                    line_number: 13,
                  },
                  {
                    type: 'console',
                    dataId: 168543210514515680,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '6630436',
                      pageJsonId: '537892',
                      value: [
                        '$"https://lxdev.iwhalecloud.com/HJD/lcdp-app/server/app/file/file/id/"+data.factorForm.creditControlPhot+"?X-B-AUTH=1&X-B-TARGET-ID=892698540070318080&appId=871672424566726656"$',
                      ],
                    },
                    line_number: 14,
                  },
                  {
                    type: 'console',
                    dataId: 168543210514583970,
                    options: {
                      compId: 'debug',
                      compName: 'system',
                      id: '3106712',
                      pageJsonId: '537892',
                      value: [
                        '$"https://lxdev.iwhalecloud.com/HJD/lcdp-app/server/app/file/file/id/"+data.factorForm.artificialAuditPhot+"?X-B-AUTH=1&X-B-TARGET-ID=892698540070318080&appId=871672424566726656"$',
                      ],
                    },
                    line_number: 15,
                  },
                ],
                callback2: [],
              },
            ],
            callback2: [],
          },
          {
            type: 'setDisable',
            dataId: 166436756146657440,
            options: {
              compId: 'Form_412511_107682',
              compLib: 'comm',
              pageJsonId: '537892',
              compName: 'Form',
              id: '089897',
              disabled: 'true',
            },
            line_number: 16,
          },
        ],
      },
    ];
    eventDataifelse251.params = [] || [];
    CMDGenerator(eventDataifelse251, {}, 'ifelse', {
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
      className="__CustomClass_537892__"
    >
      <View
        name={'页面'}
        className={'fixed-form-item-label-width-120'}
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
          padding: '0px 0px 0px 0px',
          overflowY: 'visible',
          width: '100.',
          overflow: 'hidden',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_537892_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'欠费催缴预警工单'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_719552',
            uid: 'Divider_719552',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_719552')}
          {...injectData}
        />
        <View
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
                  id: 'Form_4311097_9385662_1929847_738917_68642_323428_851069',
                  uid: 'Form_4311097_9385662_1929847_738917_68642_323428_851069',
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
                    'Form_4311097_9385662_1929847_738917_68642_323428_851069',
                  )
                }
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'欠费催缴预警工单'}
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
                    id: 'Checkbox_882584_5289015_934499_57326296_002468_16388665_884328_37295',
                    uid: 'Checkbox_882584_5289015_934499_57326296_002468_16388665_884328_37295',
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
                      'Checkbox_882584_5289015_934499_57326296_002468_16388665_884328_37295',
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
                    id: 'Input_361479_887285_2150708_0235518_772568_273065_8955167_941493',
                    uid: 'Input_361479_887285_2150708_0235518_772568_273065_8955167_941493',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) =>
                    refs.setComponentRef(
                      r,
                      'Input_361479_887285_2150708_0235518_772568_273065_8955167_941493',
                    )
                  }
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
        </View>
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
          formCode={'Form_412511'}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.factorForm}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_412511_107682',
            uid: 'Form_412511_107682',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          onValuesChange={() => {
            const eventDatasetDataSource218: any = [
              {
                type: 'setDataSource',
                dataId: 166633594394094370,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '4956564',
                  pageJsonId: '537892',
                  dataSourceId: 166124254360037760,
                  dataSourceName: 'factorForm',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '2715976',
                      code: 'userBelongType',
                      name: '预警工单汇总信息',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511_107682', 'getFieldsValue'],
                        code: 'userBelongType',
                      },
                    },
                    {
                      attrId: '7714173',
                      code: 'argeReminderPhot',
                      name: '业务数据图片欠费催缴情况',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '0905764',
                      code: 'argeReminder',
                      name: '业务数据图片欠费催缴情况',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '709937',
                      code: 'creditControlPhot',
                      name: '信控管理预警情况',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '753858',
                      code: 'creditControl',
                      name: '信控管理预警情况',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '874818',
                      code: 'artificialAuditPhot',
                      name: '人工审批影响客户集团欠费增长情况',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '472915',
                      code: 'artificialAudit',
                      name: '人工审批影响客户集团欠费增长情况',
                      type: 'string',
                      initialData: { type: 'static' },
                    },
                    {
                      attrId: '528582',
                      code: 'workOrderDesc',
                      name: '工单说明',
                      type: 'string',
                      initialData: { type: 'static' },
                      value: {
                        type: ['form', 'Form_412511_107682', 'getFieldsValue'],
                        code: 'workOrderDesc',
                      },
                    },
                  ],
                  onlySetPatch: true,
                },
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventDatasetDataSource218.params = [] || [];
            CMDGenerator(eventDatasetDataSource218, {}, 'setDataSource', {
              id: 'setDataSource',
              name: 'setDataSource',
              type: 'setDataSource',
              platform: 'pc',
            });
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_412511_107682')}
          {...injectData}
        >
          <Input
            name={'预警工单汇总信息'}
            size={'default'}
            selfSpan={8}
            labelCol={'8'}
            wrapperCol={'16'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            fieldName={'earlyWarning'}
            value={data?.factorForm?.userBelongType}
            formItemIndex={0}
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
              id: 'Input_earlyWarning_7796984',
              uid: 'Input_earlyWarning_7796984',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_earlyWarning_7796984')
            }
            {...injectData}
          />
          <TextArea
            name={'工单说明'}
            selfSpan={24}
            labelCol={8}
            wrapperCol={16}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={false}
            placeholder={'请输入'}
            fieldName={'workOrderDesc'}
            value={data?.factorForm?.workOrderDesc}
            formItemIndex={1}
            $$componentItem={{
              id: 'Input_workOrderDesc_0965433',
              uid: 'Input_workOrderDesc_0965433',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Input_workOrderDesc_0965433')
            }
            {...injectData}
          />
        </Form>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6870919',
            uid: 'View_6870919',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_6870919')}
          {...injectData}
        >
          <Img
            name={'欠费催缴'}
            alt={'图片'}
            src={'xx'}
            className={'myImg1'}
            $$componentItem={{
              id: 'Img_0558442',
              uid: 'Img_0558442',
              type: 'Img',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: '100%', height: '200px' }}
            ref={(r: any) => refs.setComponentRef(r, 'Img_0558442')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_697731',
              uid: 'View_697731',
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
              textAlign: 'center',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_697731')}
            {...injectData}
          >
            <Text
              name={'预警清单'}
              content={'点击查看欠费催缴预警清单信息'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_036009_590309',
                uid: 'Text_036009_590309',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: '#108EE9',
                textAlign: 'center',
              }}
              onClick={() => {
                const eventDatadownloadByFileId83: any = [
                  {
                    type: 'downloadByFileId',
                    dataId: 166979156643940770,
                    options: {
                      compId: 'downloadByFileId',
                      compName: 'system',
                      id: '421771225',
                      pageJsonId: '537892',
                      data: '$data.factorForm.argeReminder$',
                    },
                    line_number: 1,
                  },
                ];
                eventDatadownloadByFileId83.params = [] || [];
                CMDGenerator(
                  eventDatadownloadByFileId83,
                  {},
                  'downloadByFileId',
                  {
                    id: 'downloadByFileId',
                    name: 'downloadByFileId',
                    type: 'downloadByFileId',
                    platform: 'pc',
                  },
                );
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_036009_590309')}
              {...injectData}
            />
          </View>
          <HorizontalView
            name={'左右布局'}
            $$componentItem={{
              id: 'HorizontalView_065557',
              uid: 'HorizontalView_065557',
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
              lineHeight: '200px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_065557')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_3532197',
                uid: 'View_3532197',
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
                width: '50%',
                height: '100%',
                overflowY: 'auto',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_3532197')}
              {...injectData}
            >
              <Img
                name={'信控管理'}
                alt={'图片'}
                src={'11'}
                className={'myImg2'}
                $$componentItem={{
                  id: 'Img_3701356',
                  uid: 'Img_3701356',
                  type: 'Img',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ height: '100%' }}
                ref={(r: any) => refs.setComponentRef(r, 'Img_3701356')}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_850696',
                uid: 'View_850696',
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
                width: '50%',
                height: '100%',
                overflowY: 'auto',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_850696')}
              {...injectData}
            >
              <Img
                name={'欠费增长'}
                alt={'图片'}
                src={'xx'}
                className={'myImg3'}
                $$componentItem={{
                  id: 'Img_414869',
                  uid: 'Img_414869',
                  type: 'Img',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                ref={(r: any) => refs.setComponentRef(r, 'Img_414869')}
                {...injectData}
              />
            </View>
          </HorizontalView>
          <HorizontalView
            name={'左右布局'}
            $$componentItem={{
              id: 'HorizontalView_666431',
              uid: 'HorizontalView_666431',
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
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_666431')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_873478',
                uid: 'View_873478',
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
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_873478')}
              {...injectData}
            >
              <Text
                name={'信控管理'}
                content={'点击查看信控管理预警清单信息'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_036009',
                  uid: 'Text_036009',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: '#108EE9',
                  textAlign: 'center',
                }}
                onClick={() => {
                  const eventDatadownloadByFileId84: any = [
                    {
                      type: 'downloadByFileId',
                      dataId: 166979160256649150,
                      options: {
                        compId: 'downloadByFileId',
                        compName: 'system',
                        id: '680826',
                        pageJsonId: '537892',
                        data: '$data.factorForm.creditControl$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatadownloadByFileId84.params = [] || [];
                  CMDGenerator(
                    eventDatadownloadByFileId84,
                    {},
                    'downloadByFileId',
                    {
                      id: 'downloadByFileId',
                      name: 'downloadByFileId',
                      type: 'downloadByFileId',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Text_036009')}
                {...injectData}
              />
            </View>
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_663994',
                uid: 'View_663994',
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
              }}
              ref={(r: any) => refs.setComponentRef(r, 'View_663994')}
              {...injectData}
            >
              <Text
                name={'欠费增长'}
                content={'点击查看人工审批影响集团客户欠费增长情况清单信息'}
                textType={'span'}
                version={'1.0'}
                showHtml={false}
                $$componentItem={{
                  id: 'Text_500119',
                  uid: 'Text_500119',
                  type: 'Text',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: 'rgba(86, 150, 231, 1)',
                  textAlign: 'center',
                  letterSpacing: '',
                }}
                onClick={() => {
                  const eventDatadownloadByFileId85: any = [
                    {
                      type: 'downloadByFileId',
                      dataId: 166979162930287170,
                      options: {
                        compId: 'downloadByFileId',
                        compName: 'system',
                        id: '166694',
                        pageJsonId: '537892',
                        data: '$data.factorForm.artificialAudit$',
                      },
                      line_number: 1,
                    },
                  ];
                  eventDatadownloadByFileId85.params = [] || [];
                  CMDGenerator(
                    eventDatadownloadByFileId85,
                    {},
                    'downloadByFileId',
                    {
                      id: 'downloadByFileId',
                      name: 'downloadByFileId',
                      type: 'downloadByFileId',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Text_500119')}
                {...injectData}
              />
            </View>
          </HorizontalView>
        </View>
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
          rowActions={[]}
          extend={[
            {
              id: '5476746',
              title: '下载',
              iconPos: 'left',
              icon: { theme: 'outlined', type: 'download', isIconFont: false },
              checked: true,
            },
          ]}
          rowKey={'fileCode'}
          dataSourceFromDataSourceConfig={'data.fileInfoList'}
          $$componentItem={{
            id: 'Table_5369494',
            uid: 'Table_5369494',
            type: 'Table',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{ margin: '10px 0px 0px 0px' }}
          onRowDelete={(rowId: any, row: any, index: any) => {
            const eventDatacustomActionCode722: any = [
              {
                type: 'customActionCode',
                dataId: 166192918606345900,
                options: {
                  compId: 'customActionCode',
                  compName: 'page',
                  id: '8342055',
                  pageJsonId: '537892',
                  code: 'function main(data,state,success,fail){var newFileInfoList=[];for(var i=0;i<data.fileInfoList.length;i++){if(data.fileInfoList[i].fileCode!=rowId){newFileInfoList.push(data.fileInfoList[i])}}data.sceneSubmit.fileInfo=newFileInfoList;success(newFileInfoList)};',
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
                    callback1: [
                      {
                        type: 'callParentCustomFunc',
                        dataId: 166193296648446750,
                        options: {
                          compId: 'callParentCustomFunc',
                          compName: 'system',
                          id: '773871',
                          pageJsonId: '537892',
                          pathname: '/commonAuditOrder',
                          pageId: '872682457815691264',
                          customFuncName: 'getFactor',
                          customFuncParams: '$data.sceneSubmit$',
                          modalPath: '/commonAuditOrder',
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
            eventDatacustomActionCode722.params =
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
              eventDatacustomActionCode722,
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
            const eventDatadownloadByFileId86: any = [
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
            eventDatadownloadByFileId86.params =
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
              eventDatadownloadByFileId86,
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
          ref={(r: any) => refs.setComponentRef(r, 'Table_5369494')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsJc_0011_0001$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
