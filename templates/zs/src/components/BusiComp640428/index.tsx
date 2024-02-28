// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  View,
  Form,
  QuillEditor,
  HorizontalView,
  Text,
  LoopList,
  Img,
} from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '974190141528584192';
const BusiComp640428$$BusiComp: React.FC<PageProps> = ({
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

  useEffect(() => {
    const eventDataifelse6: any = [
      {
        type: 'ifelse',
        condition: [
          {
            options: { context: '$state.instNbr$', operate: 'notEmpty' },
            condId: '9742015',
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 168415696856595040,
        elseIfs: [],
        line_number: 1,
        callback1: [
          {
            type: 'apiRequest',
            dataId: 168415701810125440,
            options: {
              compId: 'apiRequest',
              compName: 'system',
              id: '858103',
              pageJsonId: '640428',
              sync: false,
              method: 'post',
              url: '/app/rhin/gateway/callRhinEngine',
              _capabilityCode: 'queryApproveResultByNbr',
              _apiCode: 'queryApproveResultByNbr',
              _source: 'rhin',
              _sourceName: '(ecc)根据订单编码查询审批计算结果',
              _serviceId: '975366857247453184',
              _serviceTitle:
                '(ecc)根据订单编码查询审批计算结果: queryApproveResultByNbr',
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
                      dataKey: '858103_root.header',
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
                      dataKey: '858103_root.path',
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
                      dataKey: '858103_root.query',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'instNbr',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'root.body.instNbr',
                          compType: 'Input',
                          name: 'instNbr',
                          parents: ['root', 'body'],
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                          id: 'root.body.instNbr',
                          dataKey: '858103_root.body.instNbr',
                          value: {
                            type: ['context', '$state.instNbr$'],
                            code: '',
                          },
                        },
                      ],
                      _id: 'root.body',
                      compType: 'Input',
                      parents: ['root'],
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                      id: 'root.body',
                      dataKey: '858103_root.body',
                    },
                  ],
                  _id: 'root',
                  compType: 'Input',
                  isRoot: true,
                  parents: [],
                  key: '0',
                  id: 'root',
                  dataKey: '858103_root',
                },
              ],
            },
            line_number: 2,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '152728',
                    options: {
                      context: '$reply_858103?.resultData.calcFlowNode$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168422782468616640,
                elseIfs: [],
                line_number: 3,
                callback1: [
                  {
                    type: 'reloadDescData',
                    dataId: 168422802963475460,
                    options: {
                      compId: 'Description_200644',
                      compLib: 'comm',
                      pageJsonId: '640428',
                      compName: 'Description',
                      id: '529369',
                      data: '$reply_858103?.resultData$',
                    },
                    line_number: 4,
                  },
                  {
                    type: 'setVisible',
                    dataId: 168422816039339360,
                    shielding: true,
                    options: {
                      compId: ['Description_200644'],
                      compLib: 'comm',
                      pageJsonId: '640428',
                      compName: 'QuillEditor',
                      id: '470204',
                      visible: 'true',
                      compid: ['Description_200644'],
                    },
                    line_number: 5,
                  },
                  {
                    type: 'setDataSource',
                    dataId: 168595438152019070,
                    options: {
                      compId: 'setDataSource',
                      compName: 'page',
                      id: '860883',
                      pageJsonId: '640428',
                      dataSourceId: 168595430974448320,
                      dataSourceName: 'triggerRoles',
                      dataSourceRelType: 'custom',
                      dataSourceSetValue: [
                        {
                          attrId: '5304807',
                          code: 'nodeName',
                          name: '角色名称',
                          type: 'string',
                          initialData: { type: 'static' },
                          showInput: false,
                        },
                      ],
                      newData: '$reply_858103?.resultData.calcFlowNodeList$',
                      operateType: 3,
                      onlySetPatch: true,
                      otherObjectArrayOptions: {},
                      targetDataSourcePaths: [],
                    },
                    line_number: 6,
                    callback1: [
                      {
                        type: 'sysSetVisible',
                        dataId: 168595445769736030,
                        options: {
                          compId: ['HorizontalView_4825763'],
                          compName: 'page',
                          id: '421502',
                          pageJsonId: '640428',
                          visible: 'true',
                          compid: ['HorizontalView_4825763'],
                        },
                        line_number: 7,
                      },
                    ],
                    callback2: [],
                  },
                ],
              },
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '76431',
                    options: {
                      context: '$reply_858103?.resultData.calcResultDesc$',
                      operate: 'notEmpty',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 168422811475450780,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 168455456169619300,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 168455459875266560,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 168455459875238240,
                            children: [],
                            value: 'callback1',
                            params: [],
                            shielding: true,
                          },
                        ],
                        todoOptions: ['compId', 'valueList'],
                        options: {
                          compId: 'QuillEditor_025724',
                          compLib: 'comm',
                          pageJsonId: '640428',
                          compName: 'QuillEditor',
                          id: '7786826',
                          valueList: {
                            QuillEditor_025724:
                              '$reply_858103?.resultData?.calcResultDesc$',
                          },
                        },
                        actionObjId: 'QuillEditor_025724',
                        actionObjName: 'QuillEditor',
                        value: 'setValue',
                        compLib: 'comm',
                        shielding: true,
                        line_number: 12,
                      },
                    ],
                    condition: [],
                    value: 'elseIf',
                    shielding: true,
                    callback: [
                      {
                        type: 'setValue',
                        dataId: 168455459875266560,
                        shielding: true,
                        options: {
                          compId: 'QuillEditor_025724',
                          compLib: 'comm',
                          pageJsonId: '640428',
                          compName: 'QuillEditor',
                          id: '7786826',
                          valueList: {
                            QuillEditor_025724:
                              '$reply_858103?.resultData?.calcResultDesc$',
                          },
                        },
                        line_number: 12,
                        callback1: [],
                      },
                    ],
                  },
                ],
                line_number: 8,
                callback1: [
                  {
                    type: 'setFormValues',
                    dataId: 168422817176161570,
                    options: {
                      compId: 'Form_270073',
                      compLib: 'comm',
                      pageJsonId: '640428',
                      compName: 'Form',
                      id: '1402673',
                      params: '$reply_858103?.resultData$',
                    },
                    line_number: 9,
                  },
                  {
                    type: 'setValue',
                    dataId: 168455496084343140,
                    options: {
                      compId: 'QuillEditor_025724',
                      compLib: 'comm',
                      pageJsonId: '640428',
                      compName: 'QuillEditor',
                      id: '5952258',
                      valueList: {
                        QuillEditor_025724:
                          '$reply_858103?.resultData.calcResultDesc$',
                      },
                    },
                    line_number: 10,
                    callback1: [],
                  },
                  {
                    type: 'setVisible',
                    dataId: 168422818217788480,
                    options: {
                      compId: ['Form_270073'],
                      compLib: 'comm',
                      pageJsonId: '640428',
                      compName: 'QuillEditor',
                      id: '382505',
                      visible: 'true',
                      compid: ['Form_270073'],
                    },
                    line_number: 11,
                  },
                ],
              },
              {
                type: 'console',
                dataId: 168455361639237760,
                options: {
                  compId: 'debug',
                  compName: 'system',
                  id: '24064',
                  pageJsonId: '640428',
                  value: [
                    '根据订单编码返回审批结果------》返回数据',
                    '$reply_858103?.resultData$',
                  ],
                },
                line_number: 13,
              },
            ],
            callback2: [],
          },
        ],
      },
    ];
    eventDataifelse6.params = [] || [];
    CMDGenerator(eventDataifelse6, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_640428__"
    >
      <View
        name={'布局容器'}
        backgroundType={{ type: 'cleanColor', color: '#ffffff' }}
        className={'pcfactory-hide-ql'}
        $$componentItem={{
          id: 'View_624683',
          uid: 'View_624683',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_624683')}
        {...injectData}
      >
        <Form
          name={'审批内容表单'}
          colSpan={6}
          labelCol={'2'}
          wrapperCol={22}
          colon={true}
          layout={'horizontal'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={0}
          rowSpace={16}
          formCode={'Form_20361'}
          backgroundType={{
            type: 'cleanColor',
            color: 'rgba(255, 255, 255, 1)',
          }}
          relationDataSource={data?.triggerApproveInfo}
          busiObjectId={''}
          className={'richTextForm'}
          $$componentItem={{
            id: 'Form_270073',
            uid: 'Form_270073',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px', margin: '12px 0px 12px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_270073')}
          {...injectData}
        >
          <QuillEditor
            name={'触发审批点'}
            titleTip={'notext'}
            tipLocation={'after'}
            tipPlacement={'top'}
            selfSpan={24}
            labelCol={'80px'}
            wrapperCol={'auto'}
            height={140}
            imageType={'file'}
            fieldName={'calcResultDesc'}
            required={false}
            formItemIndex={0}
            value={data?.triggerApproveInfo?.calcResultDesc}
            className={'richTextViewer'}
            $$componentItem={{
              id: 'QuillEditor_025724',
              uid: 'QuillEditor_025724',
              type: 'QuillEditor',
              ...componentItem,
            }}
            disabled={true}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'QuillEditor_025724')}
            {...injectData}
          />
        </Form>
        <HorizontalView
          name={'左右布局'}
          $$componentItem={{
            id: 'HorizontalView_4825763',
            uid: 'HorizontalView_4825763',
            type: 'HorizontalView',
            ...componentItem,
          }}
          disabled={false}
          visible={false}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: 'auto',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_4825763')}
          {...injectData}
        >
          <View
            className="View_View_634821"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_634821',
              uid: 'View_634821',
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
              width: '90px',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_634821')}
            {...injectData}
          >
            <Text
              name={'文本'}
              content={'触发审批角色:'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_2245854',
                uid: 'Text_2245854',
                type: 'Text',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{
                textAlign: 'left',
                lineHeight: '24px',
                color: '#666666',
                backgroundColor: 'rgba(255, 255, 255,0)',
                padding: '4px 0px 4px 0px',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_2245854')}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            className={'roleList'}
            $$componentItem={{
              id: 'View_29',
              uid: 'View_29',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 16px 0px 16px',
              width: '90%',
              height: 'auto',
              overflowY: 'hidden',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_29')}
            {...injectData}
          >
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
              fieldName={'roles'}
              gridData={data?.triggerRoles}
              valueKey={'i'}
              className={'roleList'}
              $$componentItem={{
                id: 'LoopList_323676',
                uid: 'LoopList_323676',
                type: 'LoopList',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ minHeight: 40, width: 'auto' }}
              ref={(r: any) => refs.setComponentRef(r, 'LoopList_323676')}
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
                          <View
                            className="View_View_085735"
                            name={'布局容器'}
                            backgroundType={{
                              type: 'cleanColor',
                              color: undefined,
                            }}
                            $$componentItem={{
                              id: 'View_085735',
                              uid: 'View_085735',
                              type: 'View',
                              ...componentItem,
                            }}
                            disabled={false}
                            visible={true}
                            readOnly={false}
                            style={{
                              textAlign: 'left',
                              display: 'inline-block',
                              padding: '0px 0px 0px 0px',
                              width: '0A',
                              whiteSpace: 'nowrap',
                              backgroundColor: 'transparent',
                            }}
                            ref={(r: any) =>
                              refs.setComponentRef(r, 'View_085735')
                            }
                            {...injectData}
                          >
                            <Text
                              name={'文本'}
                              content={item?.nodeName}
                              textType={'span'}
                              version={'1.0'}
                              showHtml={false}
                              $$componentItem={{
                                id: 'Text_0919693',
                                uid: 'Text_0919693',
                                type: 'Text',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              style={{
                                textAlign: 'left',
                                fontSize: null,
                                lineHeight: '24px',
                                color: '#1c242e',
                                backgroundColor: '#E6FAFF',
                                padding: '4px 10px 4px 10px',
                                borderRadius: '16px 16px 16px 16px',
                                display: 'inline-block',
                                whiteSpace: 'nowrap',
                              }}
                              ref={(r: any) =>
                                refs.setComponentRef(r, 'Text_0919693')
                              }
                              {...injectData}
                            />
                            <Img
                              name={'图片'}
                              alt={'图片'}
                              fileCode={'816de69e-0379-4c3c-a9ce-52bf68701152'}
                              $$componentItem={{
                                id: 'Img_702579',
                                uid: 'Img_702579',
                                type: 'Img',
                                ...componentItem,
                              }}
                              disabled={false}
                              visible={true}
                              readOnly={false}
                              style={{ margin: '0px 8px 0px 8px' }}
                              ref={(r: any) =>
                                refs.setComponentRef(r, 'Img_702579')
                              }
                              {...injectData}
                            />
                          </View>
                        </>
                      );
                    },
                  },
                };
              }}
            />
          </View>
        </HorizontalView>
      </View>
    </div>
  );
};

export default withPageHOC(BusiComp640428$$BusiComp, {
  pageId,
  hasLogin: true,
  defaultState: { instNbr: '' },
});
