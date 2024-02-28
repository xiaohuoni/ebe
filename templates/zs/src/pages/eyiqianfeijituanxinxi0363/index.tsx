// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Text, Button } from '@/components/factory';

import BusiComp734913 from '@/components/BusiComp734913';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '1064096037923282944';
const Eyiqianfeijituanxinxi0363$$Modal: React.FC<PageProps> = ({
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
    const eventDatacloseModal19: any = [
      {
        type: 'closeModal',
        dataId: '203987_1',
        options: { compId: 'page', compName: 'page', id: '134644' },
        line_number: 1,
      },
    ];
    eventDatacloseModal19.params = [] || [];
    CMDGenerator(eventDatacloseModal19, {}, 'closeModal', {
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
    const eventDatacustomActionCode236: any = [
      {
        type: 'customActionCode',
        dataId: 170530672716867070,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '992497',
          pageJsonId: '1085043',
          code: 'function main(data,state,success,fail){data.singleGroup=state.singleGroup;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 170530677329136900,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '277038',
              pageJsonId: '1085043',
              dataSourceId: 170530666392380320,
              dataSourceName: 'singleGroup',
              dataSourceRelType: 'custom',
              dataSourceSetValue: [
                {
                  code: 'groupId',
                  name: '集团编码',
                  type: 'string',
                  attrId: '0547338',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'groupName',
                  name: '集团名称',
                  type: 'string',
                  attrId: '1971242',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'groupCreditRate',
                  name: '集团征信等级',
                  type: 'string',
                  attrId: '7351416',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'belongCityText',
                  name: '归属地市',
                  type: 'string',
                  attrId: '0984954',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'belongAreaText',
                  name: '归属县市',
                  type: 'string',
                  attrId: '8013772',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'customerType',
                  name: '客户类型',
                  type: 'string',
                  attrId: '7889927',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'institutionType',
                  name: '机构类型',
                  type: 'string',
                  attrId: '3646961',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'industryCategory',
                  name: '行业大类',
                  type: 'string',
                  attrId: '956461',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'industrySubCategory',
                  name: '行业小类',
                  type: 'string',
                  attrId: '310831',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'custManagerName',
                  name: '客户经理姓名',
                  type: 'string',
                  attrId: '6090625',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'custManagerPhone',
                  name: '客户经理联系电话',
                  type: 'string',
                  attrId: '47319',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'custManagerCreditRate',
                  name: '客户经理征信等级',
                  type: 'string',
                  attrId: '287149',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'earliestOverdueTime',
                  name: '最早欠费时间',
                  type: 'string',
                  attrId: '848379',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'totalArrearage',
                  name: '累计欠费（元）',
                  type: 'string',
                  attrId: '551054',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'appliedWhiteListNum',
                  name: '已申请白名单次数（次）',
                  type: 'string',
                  attrId: '685548',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'maxOverdueMonth',
                  name: '最大逾期月数（月）',
                  type: 'string',
                  attrId: '0821674',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'cumulativeOverdueFee',
                  name: '累计逾期欠费（元）',
                  type: 'string',
                  attrId: '779962',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'appliedWhiteListDay',
                  name: '已申请白名单天数（天）',
                  type: 'string',
                  attrId: '510325',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'maxArrearageBillItem',
                  name: '最大欠费账目项',
                  type: 'string',
                  attrId: '262503',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'maxArrearageBillItemFee',
                  name: '最大欠费账目项欠费（元）',
                  type: 'string',
                  attrId: '4088433',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'lastCollectionRequireYear',
                  name: '最近一次催缴要求（近一年）',
                  type: 'string',
                  attrId: '926257',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'lastCollectionTimeYear',
                  name: '最近一次催缴时间（近一年）',
                  type: 'string',
                  attrId: '97665',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
                {
                  code: 'lastCollectionActionYear',
                  name: '最近一次催缴动作（近一年）',
                  type: 'string',
                  attrId: '85129',
                  initialData: { type: 'static', value: '' },
                  parentKey: '1',
                  parentType: 'object',
                  showInput: true,
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
              targetDataSourcePaths: [],
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode236.params = [] || [];
    CMDGenerator(eventDatacustomActionCode236, {}, 'customActionCode', {
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
      className="__CustomClass_1085043__"
    >
      <View
        className="View_View_1085043_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_1085043_1',
          uid: 'View_1085043_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '450px',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_1085043_1')}
        {...injectData}
      >
        <View
          className="View_View_500359"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_500359',
            uid: 'View_500359',
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
            padding: '0px 0px 44px 0px',
            width: '100%',
            flex: 13,
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_500359')}
          {...injectData}
        >
          <Text
            name={'集团信息风险提示'}
            content={'友情提醒：信控调整，谁经办谁负责，谁审批谁负责！'}
            textType={'span'}
            version={'1.0'}
            showHtml={false}
            $$componentItem={{
              id: 'Text_271281',
              uid: 'Text_271281',
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
              color: '#DA031C',
              backgroundColor: '#ffff80',
              letterSpacing: '',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_271281')}
            {...injectData}
          />
          <View
            className="View_View_799674"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_799674',
              uid: 'View_799674',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_799674')}
            {...injectData}
          >
            <BusiComp734913
              pageId={pageId}
              busiCompId={'1064073224944443392'}
              name={'恶意欠费纳黑申请集团'}
              fieldName={'singleGroup'}
              busiCompStates={{ singleGroup: data?.singleGroup }}
              style={{ margin: '0 0 12px 0' }}
              ref={(r: any) => refs.setComponentRef(r, 'BOFramer_087104')}
              {...injectData}
            />
          </View>
        </View>
        <View
          className="View_View_016361"
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_016361',
            uid: 'View_016361',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px 8px 0px',
            width: '100%',
            justifyContent: 'flex-end',
            margin: '24px 0px 0px 0px',
            position: 'absolute',
            left: '0',
            bottom: '0',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_016361')}
          {...injectData}
        >
          <View
            className="View_View_05065"
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_05065',
              uid: 'View_05065',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              textAlign: 'center',
              display: 'block',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '100%',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_05065')}
            {...injectData}
          >
            <Button
              name={'确认'}
              shape={null}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'default'}
              type={'primary'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_950983',
                uid: 'Button_950983',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 0px 0px 16px' }}
              onClick={(e: any) => {
                const eventDatacloseModal125: any = [
                  {
                    type: 'closeModal',
                    dataId: 170487109519929570,
                    options: {
                      compId: 'page',
                      compName: 'page',
                      id: '4917982',
                    },
                    line_number: 1,
                  },
                ];
                eventDatacloseModal125.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatacloseModal125, { e }, 'closeModal', {
                  id: 'closeModal',
                  name: 'closeModal',
                  type: 'closeModal',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Button_950983')}
              {...injectData}
            />
          </View>
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Eyiqianfeijituanxinxi0363$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: { bizId: '', sceneCode: '', bizData: '', singleGroup: '' },
});
