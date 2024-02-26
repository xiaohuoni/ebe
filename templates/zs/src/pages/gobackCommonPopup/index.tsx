// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Row, Form, TextArea, Button } from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '916972510371729408';
const GobackCommonPopup$$Modal: React.FC<PageProps> = ({
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
  const fillTacheRemark = (options_141226: any) => {
    const eventDatasetValue8: any = [
      {
        type: 'setValue',
        dataId: 167031094553268960,
        options: {
          compId: 'TextArea_4776246_432797_396424_203052',
          compLib: 'comm',
          pageJsonId: 30,
          compName: 'TextArea',
          id: '1309874',
          valueList: {
            TextArea_4776246_432797_396424_203052:
              '$options_141226.handleComment$',
          },
        },
        line_number: 1,
        callback1: [],
      },
    ];
    eventDatasetValue8.params =
      [
        {
          title: '事件入参',
          name: 'options_141226',
          value: '$options_141226$',
        },
      ] || [];
    CMDGenerator(eventDatasetValue8, { options_141226 }, 'setValue', {
      id: 'setValue',
      name: 'setValue',
      type: 'setValue',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    fillTacheRemark,
  }));

  useEffect(() => {
    const eventDatasetDataSource21: any = [
      {
        type: 'setDataSource',
        dataId: 166920628599431740,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '6541737',
          pageJsonId: 30,
          dataSourceId: 166920626826027500,
          dataSourceName: 'fixedParam',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '291215',
              code: 'tacheCode',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['context', '$state.tacheCode$'], code: '' },
            },
            {
              attrId: '456898',
              code: 'endLevel',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['context', '$state.endLevel$'], code: '' },
            },
            {
              attrId: '0096066',
              code: 'workItemId',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['context', '$state.workItemId$'], code: '' },
            },
            {
              attrId: '1726945',
              code: 'busiObjNbr',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['context', '$state.busiObjNbr$'], code: '' },
            },
            {
              attrId: '747001',
              code: 'workId',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['context', '$state.workId$'], code: '' },
            },
          ],
          operateType: 1,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource21.params = [] || [];
    CMDGenerator(eventDatasetDataSource21, {}, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={{ height: '100%', ...style }} className="__CustomClass_30__">
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_30_1_229696_8928726',
          uid: 'View_30_1_229696_8928726',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
          margin: '0px 0px 0px 0px',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_30_1_229696_8928726')}
        {...injectData}
      >
        <Row
          name={'行容器'}
          colSpan={12}
          gutterHorizontal={0}
          gutterVertical={0}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'Row_628506_2746863_7455035',
            uid: 'Row_628506_2746863_7455035',
            type: 'Row',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          ref={(r: any) =>
            refs.setComponentRef(r, 'Row_628506_2746863_7455035')
          }
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
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_0063102'}
            $$componentItem={{
              id: 'Form_0063102_5441816_834516_505306',
              uid: 'Form_0063102_5441816_834516_505306',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Form_0063102_5441816_834516_505306')
            }
            {...injectData}
          >
            <TextArea
              name={'处理意见'}
              selfSpan={''}
              labelCol={8}
              wrapperCol={'14'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              required={true}
              placeholder={'请输入'}
              formItemIndex={0}
              fieldName={'tacheRemark'}
              maxLength={256}
              $$componentItem={{
                id: 'TextArea_4776246_432797_396424_203052',
                uid: 'TextArea_4776246_432797_396424_203052',
                type: 'TextArea',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              isFormRootChild={true}
              style={{ height: '300px' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'TextArea_4776246_432797_396424_203052')
              }
              {...injectData}
            />
          </Form>
          <Pageview
            name={'页面容器'}
            pageViewCompState={{}}
            pageSrc={'/common/comment/listpage'}
            pageId={'907443177794400256'}
            style={{ height: '340px', width: '100%' }}
            ref={(r: any) =>
              refs.setComponentRef(r, 'Pageview_098802_42779_24032')
            }
            {...injectData}
            parentEngineId={parentEngineId}
          />
        </Row>
        <View
          name={'布局容器'}
          $$componentItem={{
            id: 'View_30_1122_56129022_411221_5151687_9291032',
            uid: 'View_30_1122_56129022_411221_5151687_9291032',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 0px 12px 0px',
            width: '100%',
            borderRadius: '0px 0px 2px 2px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 1px 0px 0px #e7e8ea inset',
          }}
          ref={(r: any) =>
            refs.setComponentRef(
              r,
              'View_30_1122_56129022_411221_5151687_9291032',
            )
          }
          {...injectData}
        >
          <Button
            name={'取消'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            classification={'default'}
            type={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_30_122_408084_070965_1557667_519805',
              uid: 'Button_30_122_408084_070965_1557667_519805',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatacloseModal136: any = [
                {
                  type: 'closeModal',
                  dataId: 166928058970586270,
                  options: {
                    compId: 'closeModal',
                    compName: 'page',
                    id: '152619',
                    pageJsonId: 30,
                  },
                  line_number: 1,
                },
              ];
              eventDatacloseModal136.params =
                [{ title: '事件对象', name: 'e', value: '$e$' }] || [];
              CMDGenerator(eventDatacloseModal136, { e }, 'closeModal', {
                id: 'closeModal',
                name: 'closeModal',
                type: 'closeModal',
                platform: 'pc',
              });
            }}
            ref={(r: any) =>
              refs.setComponentRef(
                r,
                'Button_30_122_408084_070965_1557667_519805',
              )
            }
            {...injectData}
          />
          <Button
            name={'提交'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            classification={'default'}
            type={'primary'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_30_121_490898_246542_8622692_338763',
              uid: 'Button_30_121_490898_246542_8622692_338763',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ margin: '0px 0px 0px 24px' }}
            onClick={(e: any) => {
              const eventDatavalidateCurrentForm82: any = [
                {
                  type: 'validateCurrentForm',
                  dataId: 166996280081640580,
                  options: {
                    compId: 'Form_0063102_5441816_834516_505306',
                    compLib: 'comm',
                    pageJsonId: 30,
                    compName: 'Form',
                    id: '798575',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'setLoading',
                      dataId: 166997420934389340,
                      options: {
                        compId: 'Button_30_121_490898_246542_8622692_338763',
                        compLib: 'comm',
                        pageJsonId: 30,
                        compName: 'Button',
                        id: '186972',
                        loading: true,
                      },
                      line_number: 2,
                    },
                    {
                      type: 'apiRequest',
                      dataId: 166996280081663420,
                      options: {
                        compId: 'apiRequest',
                        compName: 'system',
                        id: '7157636',
                        pageJsonId: 30,
                        sync: false,
                        method: 'post',
                        url: '/app/rhin/gateway/callRhinEngine',
                        serviceVersionId: '882904961025191936',
                        versionCode: '1.0',
                        _serviceType: 'orchestration',
                        _source: 'rhin',
                        _serviceId: '890049764606439424',
                        _serviceTitle:
                          '保存数据并流转摩卡流程-tzp: saveDataAndDealFlow',
                        params: 'object',
                        _capabilityCode: 'saveDataAndDealFlow',
                        _apiCode: 'saveDataAndDealFlow',
                        apiRequestSetParams: [
                          {
                            code: 'header',
                            name: '请求头参数',
                            attrType: 'object',
                            _id: 'header',
                            compType: 'Input',
                            parents: [],
                            id: 'header',
                            dataKey: '7157636_header',
                          },
                          {
                            code: 'path',
                            name: '请求路径参数',
                            attrType: 'object',
                            _id: 'path',
                            compType: 'Input',
                            parents: [],
                            id: 'path',
                            dataKey: '7157636_path',
                          },
                          {
                            code: 'query',
                            name: 'URL 参数',
                            attrType: 'object',
                            _id: 'query',
                            compType: 'Input',
                            parents: [],
                            id: 'query',
                            dataKey: '7157636_query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'nextTache',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.nextTache',
                                compType: 'Input',
                                name: 'nextTache',
                                parents: ['body'],
                                id: 'body.nextTache',
                                dataKey: '7157636_body.nextTache',
                                value: {
                                  type: ['customize'],
                                  code: 'APPLY_CREATE',
                                },
                              },
                              {
                                code: 'tacheCode',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.tacheCode',
                                compType: 'Input',
                                name: 'tacheCode',
                                parents: ['body'],
                                id: 'body.tacheCode',
                                dataKey: '7157636_body.tacheCode',
                                value: {
                                  type: ['datasource', 'fixedParam', 'data'],
                                  code: 'tacheCode',
                                },
                              },
                              {
                                code: 'nextStaff',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.nextStaff',
                                compType: 'Input',
                                name: 'nextStaff',
                                parents: ['body'],
                                id: 'body.nextStaff',
                                dataKey: '7157636_body.nextStaff',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'workItemId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.workItemId',
                                compType: 'Input',
                                name: 'workItemId',
                                parents: ['body'],
                                id: 'body.workItemId',
                                dataKey: '7157636_body.workItemId',
                                value: {
                                  type: ['datasource', 'fixedParam', 'data'],
                                  code: 'workItemId',
                                },
                              },
                              {
                                code: 'parentWorkItemId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.parentWorkItemId',
                                compType: 'Input',
                                name: 'parentWorkItemId',
                                parents: ['body'],
                                id: 'body.parentWorkItemId',
                                dataKey: '7157636_body.parentWorkItemId',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'isRollback',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.isRollback',
                                compType: 'Input',
                                name: 'isRollback',
                                parents: ['body'],
                                id: 'body.isRollback',
                                dataKey: '7157636_body.isRollback',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'tacheRemark',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.tacheRemark',
                                compType: 'Input',
                                name: 'tacheRemark',
                                parents: ['body'],
                                id: 'body.tacheRemark',
                                dataKey: '7157636_body.tacheRemark',
                                value: {
                                  type: [
                                    'context',
                                    '$Form_0063102_5441816_834516_505306$',
                                  ],
                                  code: 'tacheRemark',
                                },
                              },
                              {
                                code: 'mergeTitle',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.mergeTitle',
                                compType: 'Input',
                                name: 'mergeTitle',
                                parents: ['body'],
                                id: 'body.mergeTitle',
                                dataKey: '7157636_body.mergeTitle',
                              },
                              {
                                code: 'parentWorkId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.parentWorkId',
                                compType: 'Input',
                                name: 'parentWorkId',
                                parents: ['body'],
                                id: 'body.parentWorkId',
                                dataKey: '7157636_body.parentWorkId',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'orderMessage',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.orderMessage',
                                compType: 'Input',
                                name: 'orderMessage',
                                parents: ['body'],
                                id: 'body.orderMessage',
                                dataKey: '7157636_body.orderMessage',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'workId',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.workId',
                                compType: 'Input',
                                name: 'workId',
                                parents: ['body'],
                                id: 'body.workId',
                                dataKey: '7157636_body.workId',
                                value: {
                                  type: ['datasource', 'fixedParam', 'data'],
                                  code: 'workId',
                                },
                              },
                              {
                                code: 'tachePass',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.tachePass',
                                compType: 'Input',
                                name: 'tachePass',
                                parents: ['body'],
                                id: 'body.tachePass',
                                dataKey: '7157636_body.tachePass',
                                value: { type: ['customize'], code: 'goback' },
                              },
                              {
                                code: 'busiObjNbr',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.busiObjNbr',
                                compType: 'Input',
                                name: 'busiObjNbr',
                                parents: ['body'],
                                id: 'body.busiObjNbr',
                                dataKey: '7157636_body.busiObjNbr',
                                value: {
                                  type: ['datasource', 'fixedParam', 'data'],
                                  code: 'busiObjNbr',
                                },
                              },
                              {
                                code: 'endLevel',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                _id: 'body.endLevel',
                                compType: 'Input',
                                name: 'endLevel',
                                parents: ['body'],
                                id: 'body.endLevel',
                                dataKey: '7157636_body.endLevel',
                                value: {
                                  type: ['datasource', 'fixedParam', 'data'],
                                  code: 'endLevel',
                                },
                              },
                              {
                                code: 'tacheAttachments',
                                attrType: 'objectArray',
                                children: [
                                  {
                                    code: 'fileName',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.tacheAttachments.fileName',
                                    compType: 'Input',
                                    name: 'fileName',
                                    parents: ['body', 'tacheAttachments'],
                                    id: 'body.tacheAttachments.fileName',
                                    dataKey:
                                      '7157636_body.tacheAttachments.fileName',
                                  },
                                  {
                                    code: 'url',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.tacheAttachments.url',
                                    compType: 'Input',
                                    name: 'url',
                                    parents: ['body', 'tacheAttachments'],
                                    id: 'body.tacheAttachments.url',
                                    dataKey:
                                      '7157636_body.tacheAttachments.url',
                                  },
                                  {
                                    code: 'fileId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.tacheAttachments.fileId',
                                    compType: 'Input',
                                    name: 'fileId',
                                    parents: ['body', 'tacheAttachments'],
                                    id: 'body.tacheAttachments.fileId',
                                    dataKey:
                                      '7157636_body.tacheAttachments.fileId',
                                  },
                                ],
                                _id: 'body.tacheAttachments',
                                compType: 'Input',
                                name: 'tacheAttachments',
                                parents: ['body'],
                                id: 'body.tacheAttachments',
                                dataKey: '7157636_body.tacheAttachments',
                                value: { type: [], code: '' },
                              },
                              {
                                code: 'sameList',
                                attrType: 'objectArray',
                                children: [
                                  {
                                    code: 'workItemId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sameList.workItemId',
                                    compType: 'Input',
                                    name: 'workItemId',
                                    parents: ['body', 'sameList'],
                                    id: 'body.sameList.workItemId',
                                    dataKey: '7157636_body.sameList.workItemId',
                                  },
                                  {
                                    code: 'busiObjNbr',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sameList.busiObjNbr',
                                    compType: 'Input',
                                    name: 'busiObjNbr',
                                    parents: ['body', 'sameList'],
                                    id: 'body.sameList.busiObjNbr',
                                    dataKey: '7157636_body.sameList.busiObjNbr',
                                  },
                                  {
                                    code: 'tachePass',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sameList.tachePass',
                                    compType: 'Input',
                                    name: 'tachePass',
                                    parents: ['body', 'sameList'],
                                    id: 'body.sameList.tachePass',
                                    dataKey: '7157636_body.sameList.tachePass',
                                  },
                                  {
                                    code: 'workId',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sameList.workId',
                                    compType: 'Input',
                                    name: 'workId',
                                    parents: ['body', 'sameList'],
                                    id: 'body.sameList.workId',
                                    dataKey: '7157636_body.sameList.workId',
                                  },
                                  {
                                    code: 'tacheRemark',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sameList.tacheRemark',
                                    compType: 'Input',
                                    name: 'tacheRemark',
                                    parents: ['body', 'sameList'],
                                    id: 'body.sameList.tacheRemark',
                                    dataKey:
                                      '7157636_body.sameList.tacheRemark',
                                  },
                                  {
                                    code: 'nextStaff',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sameList.nextStaff',
                                    compType: 'Input',
                                    name: 'nextStaff',
                                    parents: ['body', 'sameList'],
                                    id: 'body.sameList.nextStaff',
                                    dataKey: '7157636_body.sameList.nextStaff',
                                  },
                                  {
                                    code: 'nextTache',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sameList.nextTache',
                                    compType: 'Input',
                                    name: 'nextTache',
                                    parents: ['body', 'sameList'],
                                    id: 'body.sameList.nextTache',
                                    dataKey: '7157636_body.sameList.nextTache',
                                  },
                                  {
                                    code: 'nextStaffName',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.sameList.nextStaffName',
                                    compType: 'Input',
                                    name: 'nextStaffName',
                                    parents: ['body', 'sameList'],
                                    id: 'body.sameList.nextStaffName',
                                    dataKey:
                                      '7157636_body.sameList.nextStaffName',
                                  },
                                ],
                                _id: 'body.sameList',
                                compType: 'Input',
                                name: 'sameList',
                                parents: ['body'],
                                id: 'body.sameList',
                                dataKey: '7157636_body.sameList',
                              },
                              {
                                code: 'copyUserList',
                                attrType: 'objectArray',
                                children: [
                                  {
                                    code: 'userCode',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.copyUserList.userCode',
                                    compType: 'Input',
                                    name: 'userCode',
                                    parents: ['body', 'copyUserList'],
                                    id: 'body.copyUserList.userCode',
                                    dataKey:
                                      '7157636_body.copyUserList.userCode',
                                  },
                                  {
                                    code: 'userName',
                                    attrType: 'field',
                                    type: 'string',
                                    mustFlag: 'F',
                                    _id: 'body.copyUserList.userName',
                                    compType: 'Input',
                                    name: 'userName',
                                    parents: ['body', 'copyUserList'],
                                    id: 'body.copyUserList.userName',
                                    dataKey:
                                      '7157636_body.copyUserList.userName',
                                  },
                                ],
                                _id: 'body.copyUserList',
                                compType: 'Input',
                                name: 'copyUserList',
                                parents: ['body'],
                                id: 'body.copyUserList',
                                dataKey: '7157636_body.copyUserList',
                                value: { type: [], code: '' },
                              },
                            ],
                            _id: 'body',
                            compType: 'Input',
                            parents: [],
                            id: 'body',
                            dataKey: '7157636_body',
                          },
                        ],
                        _sourceName: '保存数据并流转摩卡流程-tzp',
                      },
                      line_number: 3,
                      callback1: [
                        {
                          type: 'ifelse',
                          condition: [
                            {
                              condId: '387594',
                              options: {
                                useManual: true,
                                useObject: false,
                                context: '$reply_7157636?.resultCode$',
                                operate: '==',
                                manualValue: '0',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166996280081642300,
                          elseIfs: [],
                          line_number: 4,
                          callback1: [
                            {
                              type: 'showMessage',
                              dataId: 166996280081605220,
                              options: {
                                compId: 'showMessage',
                                compName: 'system',
                                id: '71436',
                                pageJsonId: 30,
                                type: 'success',
                                value: '流程撤回成功',
                              },
                              line_number: 5,
                            },
                            {
                              type: 'closeModal',
                              dataId: 167022541977096600,
                              options: {
                                compId: 'closeModal',
                                compName: 'page',
                                id: '156165',
                                pageJsonId: 30,
                              },
                              line_number: 6,
                            },
                            {
                              type: 'okCallbackData',
                              dataId: 167022544780383520,
                              options: {
                                compId: 'okCallbackData',
                                compName: 'page',
                                id: '280722',
                                pageJsonId: 30,
                              },
                              line_number: 7,
                            },
                          ],
                        },
                        {
                          type: 'setLoading',
                          dataId: 166996282926392640,
                          options: {
                            compId:
                              'Button_30_121_490898_246542_8622692_338763',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'Button',
                            id: '0229466',
                            loading: false,
                          },
                          line_number: 8,
                        },
                      ],
                      callback2: [
                        {
                          type: 'showMessage',
                          dataId: 166996280081692860,
                          options: {
                            compId: 'showMessage',
                            compName: 'system',
                            id: '0866795',
                            pageJsonId: 30,
                            type: 'success',
                            value: '流程撤回失败',
                          },
                          line_number: 9,
                        },
                        {
                          type: 'setLoading',
                          dataId: 166996283727967700,
                          options: {
                            compId:
                              'Button_30_121_490898_246542_8622692_338763',
                            compLib: 'comm',
                            pageJsonId: 30,
                            compName: 'Button',
                            id: '1001302',
                            loading: false,
                          },
                          line_number: 10,
                        },
                      ],
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatavalidateCurrentForm82.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatavalidateCurrentForm82,
                { e },
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
              refs.setComponentRef(
                r,
                'Button_30_121_490898_246542_8622692_338763',
              )
            }
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(GobackCommonPopup$$Modal, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {
    tacheCode: '',
    endLevel: '',
    workItemId: '',
    busiObjNbr: '',
    workId: '',
  },
});
