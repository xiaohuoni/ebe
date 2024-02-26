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
  Text,
  LoopList,
  Row,
} from '@/components/factory';

import BusiComp0521965 from '@/components/BusiComp0521965';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1034026434206994432';
const ClsGl_0003_0002$$Page: React.FC<PageProps> = ({
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
    // console 169500817748584580
    console.log('反炸审批上线-组件状态', state, urlParam);
    const eventDatacustomActionCode263: any = [
      {
        type: 'customActionCode',
        dataId: 169500832947174430,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '410346',
          pageJsonId: '088762',
          code: 'function main(data,state,success,fail){var itemList=state.itemList;if(itemList&&itemList.attrList&&itemList.attrList.length>0){for(var i=0;i<itemList.attrList.length;++i){var attr=itemList.attrList[i];data.factoryForm[attr.attrCode]=attr.attrValue}}data.fileInfoList=itemList.fileInfo;success()}',
        },
        line_number: 2,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 169500852546289730,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '4324004',
              pageJsonId: '088762',
              dataSourceId: 169500814544075940,
              dataSourceName: 'factoryForm',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  attrId: '300844',
                  code: 'modelName',
                  name: '模型名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['modelName'],
                  _idpath: ['300844'],
                },
                {
                  attrId: '9425446',
                  code: 'submitUserName',
                  name: '提交人名称',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['submitUserName'],
                  _idpath: ['9425446'],
                },
                {
                  attrId: '255613',
                  code: 'submitUserId',
                  name: '提交人工号',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['submitUserId'],
                  _idpath: ['255613'],
                },
                {
                  attrId: '180619',
                  code: 'modelSubmitDate',
                  name: '模型提交时间',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['modelSubmitDate'],
                  _idpath: ['180619'],
                },
                {
                  attrId: '170136',
                  code: 'unLineDesc',
                  name: '下线说明',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['unLineDesc'],
                  _idpath: ['170136'],
                },
                {
                  attrId: '424732',
                  code: 'estimateShutDown',
                  name: '预计关停量',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['estimateShutDown'],
                  _idpath: ['424732'],
                },
                {
                  attrId: '019899',
                  code: 'modelType',
                  name: '模型类别',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['modelType'],
                  _idpath: ['019899'],
                },
                {
                  attrId: '3216084',
                  code: 'shutDownTime',
                  name: '关停时间',
                  type: 'string',
                  initialData: { type: 'static' },
                  showInput: true,
                  _codePath: ['shutDownTime'],
                  _idpath: ['3216084'],
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 3,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode263.params = [] || [];
    CMDGenerator(eventDatacustomActionCode263, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_088762__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_088762_1',
          uid: 'View_088762_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_088762_1')}
        {...injectData}
      >
        <Divider
          name={'分割线'}
          orientation={'center'}
          type={'horizontal'}
          dashed={false}
          dividerText={'反诈审批下线场景'}
          showTitle={true}
          $$componentItem={{
            id: 'Divider_586993',
            uid: 'Divider_586993',
            type: 'Divider',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ margin: '12px 0 12px 0', height: 'auto' }}
          ref={(r: any) => refs.setComponentRef(r, 'Divider_586993')}
          {...injectData}
        />
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_8144002',
            uid: 'View_8144002',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_8144002')}
          {...injectData}
        >
          <HorizontalView
            name={'左右布局'}
            formItemIndex={0}
            $$componentItem={{
              id: 'HorizontalView_0291925',
              uid: 'HorizontalView_0291925',
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
              height: '0A',
              overflowY: 'auto',
              margin: '0px 0px 0px 0px',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_0291925')}
            {...injectData}
          >
            <View
              name={'布局容器'}
              $$componentItem={{
                id: 'View_033895',
                uid: 'View_033895',
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
              ref={(r: any) => refs.setComponentRef(r, 'View_033895')}
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
                formCode={'Form_4311097'}
                className={'beforeStyle'}
                $$componentItem={{
                  id: 'Form_205237',
                  uid: 'Form_205237',
                  type: 'Form',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                style={{ padding: '0px 0px 0px 0px' }}
                ref={(r: any) => refs.setComponentRef(r, 'Form_205237')}
                {...injectData}
              >
                <Checkbox
                  name={'审批场景'}
                  titleTip={'text'}
                  tipLocation={'after'}
                  tipPlacement={'top'}
                  text={'反诈审批下线'}
                  selfSpan={8}
                  labelCol={8}
                  wrapperCol={16}
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
                    id: 'Checkbox_419234',
                    uid: 'Checkbox_419234',
                    type: 'Checkbox',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Checkbox_419234')}
                  {...injectData}
                />
                <View
                  name={'布局容器'}
                  backgroundType={{ type: 'cleanColor', color: undefined }}
                  $$componentItem={{
                    id: 'View_625682',
                    uid: 'View_625682',
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
                  ref={(r: any) => refs.setComponentRef(r, 'View_625682')}
                  {...injectData}
                />
                <Input
                  name={'场景最高审批等级'}
                  size={'default'}
                  selfSpan={8}
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
                  formItemIndex={2}
                  className={'fixed-form-item-label-width-150'}
                  value={state?.itemList?.approveGradeName}
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
                    id: 'Input_382153',
                    uid: 'Input_382153',
                    type: 'Input',
                    ...componentItem,
                  }}
                  disabled={true}
                  visible={true}
                  readOnly={false}
                  isFormRootChild={true}
                  ref={(r: any) => refs.setComponentRef(r, 'Input_382153')}
                  {...injectData}
                />
              </Form>
            </View>
          </HorizontalView>
        </View>
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
          formCode={'Form_161132'}
          fieldName={'factoryForm'}
          relationDataSource={data?.factoryForm}
          busiObjectId={''}
          $$componentItem={{
            id: 'Form_161132',
            uid: 'Form_161132',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_161132')}
          {...injectData}
        >
          <Input
            name={'模型名称'}
            size={'default'}
            selfSpan={24}
            labelCol={'2'}
            wrapperCol={22}
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
            tipIcon={{
              theme: 'outlined',
              type: 'question-circle',
              isIconFont: false,
            }}
            fieldName={'modelName'}
            value={data?.factoryForm?.modelName}
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
              id: 'Input_729798',
              uid: 'Input_729798',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_729798')}
            {...injectData}
          />
          <Input
            name={'提交人姓名'}
            size={'default'}
            selfSpan={12}
            labelCol={'4'}
            wrapperCol={20}
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
            tipIcon={{
              theme: 'outlined',
              type: 'question-circle',
              isIconFont: false,
            }}
            fieldName={'submitUserName'}
            value={data?.factoryForm?.submitUserName}
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
              id: 'Input_144693',
              uid: 'Input_144693',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_144693')}
            {...injectData}
          />
          <Input
            name={'模型提交时间'}
            size={'default'}
            selfSpan={12}
            labelCol={'4'}
            wrapperCol={20}
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
            tipIcon={{
              theme: 'outlined',
              type: 'question-circle',
              isIconFont: false,
            }}
            fieldName={'modelSubmitDate'}
            value={data?.factoryForm?.modelSubmitDate}
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
              id: 'Input_914039',
              uid: 'Input_914039',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_914039')}
            {...injectData}
          />
          <TextArea
            name={'下线说明'}
            selfSpan={24}
            labelCol={'2'}
            wrapperCol={22}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={3}
            fieldName={'unLineDesc'}
            value={data?.factoryForm?.unLineDesc}
            $$componentItem={{
              id: 'TextArea_996429',
              uid: 'TextArea_996429',
              type: 'TextArea',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'TextArea_996429')}
            {...injectData}
          />
          <Input
            name={'预计关停量'}
            size={'default'}
            selfSpan={12}
            labelCol={'4'}
            wrapperCol={20}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'个/天'}
            postfixIconPosition={'after'}
            required={true}
            placeholder={'请输入'}
            formItemIndex={4}
            tipIcon={{
              theme: 'outlined',
              type: 'question-circle',
              isIconFont: false,
            }}
            fieldName={'estimateShutDown'}
            value={data?.factoryForm?.estimateShutDown}
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
              id: 'Input_74987',
              uid: 'Input_74987',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_74987')}
            {...injectData}
          />
          <View
            name={'布局容器'}
            labelCol={8}
            wrapperCol={16}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_387122',
              uid: 'View_387122',
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
                formItemIndex: 5,
                style: undefined,
                selfSpan: undefined,
              },
            }}
            style={{
              textAlign: 'left',
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_387122')}
            {...injectData}
          />
          <Input
            name={'模型类别'}
            size={'default'}
            selfSpan={12}
            labelCol={'4'}
            wrapperCol={20}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={''}
            postfixIconPosition={'before'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={6}
            tipIcon={{
              theme: 'outlined',
              type: 'question-circle',
              isIconFont: false,
            }}
            fieldName={'modelType'}
            value={data?.factoryForm?.modelType}
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
              id: 'Input_369685',
              uid: 'Input_369685',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_369685')}
            {...injectData}
          />
          <Input
            name={'关停时间'}
            size={'default'}
            selfSpan={12}
            labelCol={'4'}
            wrapperCol={20}
            titleTip={'notext'}
            tipLocation={'after'}
            tipContent={''}
            tipPlacement={'top'}
            prefixIconPosition={'before'}
            postfix={'分钟'}
            postfixIconPosition={'after'}
            required={false}
            placeholder={'请输入'}
            formItemIndex={7}
            tipIcon={{
              theme: 'outlined',
              type: 'question-circle',
              isIconFont: false,
            }}
            fieldName={'shutDownTime'}
            value={data?.factoryForm?.shutDownTime}
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
              id: 'Input_555904',
              uid: 'Input_555904',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={true}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_555904')}
            {...injectData}
          />
        </Form>
        <Text
          name={'审核人'}
          content={'审核人:'}
          textType={'span'}
          version={'1.0'}
          showHtml={false}
          formItemIndex={8}
          $$componentItem={{
            id: 'Text_614669',
            uid: 'Text_614669',
            type: 'Text',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{
            textAlign: 'left',
            fontSize: '14px',
            lineHeight: '24px',
            color: '#1c242e',
            backgroundColor: 'rgba(255, 255, 255,0)',
            padding: '0px 0px 0px 12px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'Text_614669')}
          {...injectData}
        />
        <LoopList
          name={'循环列表'}
          mode={1}
          pieceData={[]}
          defaultValue={[]}
          columnNum={1}
          span={24}
          vspace={16}
          hspace={16}
          itemKey={'item'}
          indexKey={'i'}
          valueKey={'handerList'}
          fieldName={'reviewerList'}
          gridData={data?.reviewerList}
          $$componentItem={{
            id: 'LoopList_293045',
            uid: 'LoopList_293045',
            type: 'LoopList',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{ minHeight: 40 }}
          ref={(r: any) => refs.setComponentRef(r, 'LoopList_293045')}
          {...injectData}
          getEngineApis={() => {
            return {
              ...injectData.getEngineApis(),
              MemoRenderer: {
                renderer: null,
                MemoLoopItem: (props: any) => {
                  const item = props[props.itemKey] ?? props?.item;
                  const i = props[props.indexKey] ?? props?.i;
                  return (
                    <>
                      <Row
                        name={'行容器'}
                        colSpan={3}
                        gutterHorizontal={0}
                        gutterVertical={0}
                        backgroundType={{
                          type: 'cleanColor',
                          color: undefined,
                        }}
                        $$componentItem={{
                          id: 'Row_353067',
                          uid: 'Row_353067',
                          type: 'Row',
                          ...componentItem,
                        }}
                        disabled={false}
                        visible={true}
                        readOnly={false}
                        ref={(r: any) => refs.setComponentRef(r, 'Row_353067')}
                        {...injectData}
                      >
                        <View
                          name={'布局容器'}
                          backgroundType={{
                            type: 'cleanColor',
                            color: undefined,
                          }}
                          $$componentItem={{
                            id: 'View_707748',
                            uid: 'View_707748',
                            type: 'View',
                            ...componentItem,
                          }}
                          disabled={false}
                          visible={true}
                          readOnly={false}
                          style={{
                            textAlign: 'right',
                            display: 'block',
                            flexDirection: 'column',
                            padding: '0px 0px 0px 0px',
                            width: '100%',
                          }}
                          ref={(r: any) =>
                            refs.setComponentRef(r, 'View_707748')
                          }
                          {...injectData}
                        >
                          <Text
                            name={'审核人工号'}
                            content={item?.handleStaffCode}
                            textType={'span'}
                            version={'1.0'}
                            showHtml={false}
                            $$componentItem={{
                              id: 'Text_362492',
                              uid: 'Text_362492',
                              type: 'Text',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{
                              textAlign: 'right',
                              fontSize: '14px',
                              lineHeight: '24px',
                              color: '#1c242e',
                              backgroundColor: 'rgba(255, 255, 255,0)',
                            }}
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'Text_362492')
                            }
                            {...injectData}
                          />
                        </View>
                        <View
                          name={'布局容器'}
                          backgroundType={{
                            type: 'cleanColor',
                            color: undefined,
                          }}
                          $$componentItem={{
                            id: 'View_464676',
                            uid: 'View_464676',
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
                          ref={(r: any) =>
                            refs.setComponentRef(r, 'View_464676')
                          }
                          {...injectData}
                        >
                          <Text
                            name={'审核人姓名'}
                            content={item?.handleStaffName}
                            textType={'span'}
                            version={'1.0'}
                            showHtml={false}
                            $$componentItem={{
                              id: 'Text_962866',
                              uid: 'Text_962866',
                              type: 'Text',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{
                              textAlign: 'left',
                              fontSize: '14px',
                              lineHeight: '24px',
                              color: '#1c242e',
                              backgroundColor: 'rgba(255, 255, 255,0)',
                            }}
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'Text_962866')
                            }
                            {...injectData}
                          />
                        </View>
                      </Row>
                    </>
                  );
                },
              },
            };
          }}
        />
        <BusiComp0521965
          busiCompId={'922396081753948160'}
          name={'附件'}
          busiCompStates={{
            catalogCode: state?.catalogCode,
            scene: state?.scene,
            fileList: data?.fileInfoList,
          }}
          style={{ margin: '0 0 12px 0' }}
          ref={(r: any) => refs.setComponentRef(r, 'BOFramer_95531')}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(ClsGl_0003_0002$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
