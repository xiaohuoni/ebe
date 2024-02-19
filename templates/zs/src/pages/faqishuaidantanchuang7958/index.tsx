// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import {
  Button,
  Card,
  GridView,
  HorizontalView,
  Select,
  Text,
  View,
} from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const Faqishuaidantanchuang7958$$Modal: React.FC<PageProps> = ({
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
}) => {
  const pushSceneCodeList = (options_257387: any) => {
    const eventDatasetDataSource9: any = [
      {
        type: 'setDataSource',
        dataId: 166868699359069500,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '318242',
          pageJsonId: '621037',
          dataSourceId: 166868691725665540,
          dataSourceName: 'sceneCodeLists',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '486322',
              code: 'sceneCode',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
              value: { type: ['context', '$options_257387$'], code: '' },
            },
          ],
          operateType: 0,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
        },
        line_number: 1,
        callback1: [],
        callback2: [],
      },
    ];
    eventDatasetDataSource9.params =
      [
        {
          title: '事件入参',
          name: 'options_257387',
          value: '$options_257387$',
        },
      ] || [];
    CMDGenerator(eventDatasetDataSource9, { options_257387 }, 'setDataSource', {
      id: 'setDataSource',
      name: 'setDataSource',
      type: 'setDataSource',
      platform: 'undefined',
    }); // console 166868776652416500
    console.log(data?.sceneCodeLists);
  };
  const delScenceCodeList = (options_567422: any) => {
    // console 166910740738277250
    console.log('减少元素');
    // console 166910741647436130
    console.log(options_567422);
    const eventDatasetDataSource10: any = [
      {
        type: 'setDataSource',
        dataId: 166910742289673250,
        options: {
          compId: 'setDataSource',
          compName: 'page',
          id: '886415',
          pageJsonId: '621037',
          dataSourceId: 166868691725665540,
          dataSourceName: 'sceneCodeLists',
          dataSourceRelType: 'custom',
          dataSourceReloadFilter: [],
          dataSourceSetValue: [
            {
              attrId: '486322',
              code: 'sceneCode',
              name: '属性',
              type: 'string',
              initialData: { type: 'static' },
            },
          ],
          itemIndex: '$options_567422.$',
          operateType: 2,
          onlySetPatch: true,
          otherObjectArrayOptions: {},
          itemLocateType: 'key',
          itemLocateKey: 'sceneCode',
          itemLocateKeyValue: '$options_567422$',
        },
        line_number: 3,
        callback1: [
          {
            type: 'console',
            dataId: 166910742289630430,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '2471186',
              pageJsonId: '621037',
              value: ['$data.sceneCodeLists$'],
            },
            line_number: 4,
          },
        ],
        callback2: [],
      },
    ];
    eventDatasetDataSource10.params =
      [
        {
          title: '事件入参',
          name: 'options_567422',
          value: '$options_567422$',
        },
      ] || [];
    CMDGenerator(
      eventDatasetDataSource10,
      { options_567422 },
      'setDataSource',
      {
        id: 'setDataSource',
        name: 'setDataSource',
        type: 'setDataSource',
        platform: 'undefined',
      },
    );
  };

  React.useImperativeHandle(customActionMapRef, () => ({
    pushSceneCodeList,
    delScenceCodeList,
  }));

  const onOk = () => {};

  const onCancel = () => {
    const eventDatacloseModal22: any = [
      {
        type: 'closeModal',
        dataId: '233869_1',
        options: { compId: 'page', compName: 'page', id: '877103' },
        line_number: 1,
      },
    ];
    eventDatacloseModal22.params = [] || [];
    CMDGenerator(eventDatacloseModal22, {}, 'closeModal', {
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
    const eventDataapiRequest221: any = [
      {
        type: 'apiRequest',
        dataId: 166852370051681200,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '9719128',
          pageJsonId: '621037',
          sync: true,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'querySuccessRejectOrderCount',
          _apiCode: 'querySuccessRejectOrderCount',
          _source: 'rhin',
          _serviceId: '909810403370082304',
          _serviceTitle:
            '获取审批单甩单成功次数-lzs: querySuccessRejectOrderCount',
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
              dataKey: '9719128_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '9719128_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '9719128_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'busiObjNbr',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'T',
                  _id: 'body.busiObjNbr',
                  compType: 'Input',
                  name: 'busiObjNbr',
                  parents: ['body'],
                  id: 'body.busiObjNbr',
                  dataKey: '9719128_body.busiObjNbr',
                  value: { type: ['context', '$state.orderNbr$'], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '9719128_body',
            },
          ],
          _sourceName: '获取审批单甩单成功次数-lzs',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setCompContentValue',
            dataId: 166852378323491400,
            options: {
              compId: 'Text_455302_547734',
              compLib: 'custom',
              pageJsonId: '621037',
              compName: 'Text',
              id: '5178803',
              value: '$reply_9719128?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest221.params = [] || [];
    CMDGenerator(eventDataapiRequest221, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDatasetCompContentValue3: any = [
      {
        type: 'setCompContentValue',
        dataId: 166856413425858140,
        options: {
          compId: 'Text_9147926',
          compLib: 'custom',
          pageJsonId: '621037',
          compName: 'Text',
          id: '351396',
          value: '$state.custName$',
        },
        line_number: 3,
        callback1: [],
      },
    ];
    eventDatasetCompContentValue3.params = [] || [];
    CMDGenerator(eventDatasetCompContentValue3, {}, 'setCompContentValue', {
      id: 'setCompContentValue',
      name: 'setCompContentValue',
      type: 'setCompContentValue',
      platform: 'undefined',
    });
    const eventDataapiRequest222: any = [
      {
        type: 'apiRequest',
        dataId: 166861444735384540,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '625619',
          pageJsonId: '621037',
          sync: true,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'auditOrderDistail',
          _apiCode: 'auditOrderDistail',
          _source: 'rhin',
          _serviceId: '879342105577734144',
          _serviceTitle: '审批单详情-hdb: auditOrderDistail',
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
              dataKey: '625619_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '625619_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '625619_query',
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
                  _id: 'body.instNbr',
                  compType: 'Input',
                  name: 'instNbr',
                  parents: ['body'],
                  id: 'body.instNbr',
                  dataKey: '625619_body.instNbr',
                  value: { type: ['context', '$state.orderNbr$'], code: '' },
                },
                {
                  code: 'instId',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  defaultValue: '',
                  _id: 'body.instId',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.instId',
                  dataKey: '625619_body.instId',
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '625619_body',
            },
          ],
          _sourceName: '审批单详情-hdb',
        },
        line_number: 4,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 167394052074465860,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '421928',
              pageJsonId: '621037',
              code: 'function main(data,state,success,fail){var sceneCodes=state.sceneCode.split(";");var result="";for(var i=0;i<sceneCodes.length;++i){result=result+sceneCodes[i]+","}success({catalogCode:result.substring(0,result.length-1)})};',
              actionTitle: '多个场景编码和请求参数场景编码转换',
            },
            line_number: 5,
            callback1: [
              {
                type: 'apiRequest',
                dataId: 167394052580108260,
                options: {
                  compId: 'apiRequest',
                  compName: 'system',
                  id: '727136',
                  pageJsonId: '621037',
                  sync: false,
                  method: 'post',
                  url: '/app/rhin/gateway/callRhinEngine',
                  _capabilityCode: 'qrySceneListBySceneCode',
                  _apiCode: 'qrySceneListBySceneCode',
                  _source: 'rhin',
                  _serviceId: '917684989597863936',
                  _serviceTitle:
                    '根据多个场景编码获取场景对象列表-tsm: qrySceneListBySceneCode',
                  params: 'object',
                  apiRequestSetParams: [
                    {
                      code: 'header',
                      name: '请求头参数',
                      attrType: 'object',
                      _id: 'header',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'header',
                      dataKey: '727136_header',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-0',
                    },
                    {
                      code: 'path',
                      name: '请求路径参数',
                      attrType: 'object',
                      _id: 'path',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'path',
                      dataKey: '727136_path',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-1',
                    },
                    {
                      code: 'query',
                      name: 'URL 参数',
                      attrType: 'object',
                      _id: 'query',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'query',
                      dataKey: '727136_query',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-2',
                    },
                    {
                      code: 'body',
                      name: '请求体',
                      attrType: 'object',
                      children: [
                        {
                          code: 'sceneCodes',
                          name: '多个场景编码逗号分隔',
                          attrType: 'field',
                          type: 'string',
                          mustFlag: 'F',
                          _id: 'body.sceneCodes',
                          compType: 'Input',
                          parents: ['root', 'body'],
                          id: 'body.sceneCodes',
                          dataKey: '727136_body.sceneCodes',
                          value: {
                            type: ['context', '$data_421928$'],
                            code: 'catalogCode',
                          },
                          parentType: 'object',
                          parentKey: '0-3',
                          key: '0-3-0',
                        },
                      ],
                      _id: 'body',
                      compType: 'Input',
                      parents: ['root'],
                      id: 'body',
                      dataKey: '727136_body',
                      parentType: 'object',
                      parentKey: '0',
                      key: '0-3',
                    },
                  ],
                  _sourceName: '根据多个场景编码获取场景对象列表-tsm',
                },
                line_number: 6,
                callback1: [
                  {
                    type: 'customActionCode',
                    dataId: 167394068543783000,
                    options: {
                      compId: 'customActionCode',
                      compName: 'page',
                      id: '762822',
                      pageJsonId: '621037',
                      code: 'function main(data,state,success,fail){var _reply_,_reply_2;var svcCont=JSON.parse((_reply_=reply_625619)===null||_reply_===void 0?void 0:_reply_.resultData);var catalogList=(_reply_2=reply_727136)===null||_reply_2===void 0?void 0:_reply_2.resultData;console.log(svcCont);if(svcCont.svcCont&&svcCont.svcCont.data&&svcCont.svcCont.data.content&&svcCont.svcCont.data.content.itemList&&catalogList){console.log("\\u8BBE\\u7F6E\\u573A\\u666F\\u5217\\u8868\\u6570\\u636E\\u6E90");console.log(svcCont.svcCont.data.content.itemList);console.log(catalogList);for(var i=0;i<svcCont.svcCont.data.content.itemList.length;++i){var temp=svcCont.svcCont.data.content.itemList[i];for(var j=0;j<catalogList.length;++j){var catalogInfo=catalogList[j];if(temp.childCatalogCode==catalogInfo.catalogCode){svcCont.svcCont.data.content.itemList[i].catalogName=catalogInfo.catalogName;svcCont.svcCont.data.content.itemList[i].catalogTitle=catalogInfo.catalogName+"\\u5BA1\\u6279";if(catalogInfo.isMultiInst=="1"){svcCont.svcCont.data.content.itemList[i].isMultiInst=catalogInfo.isMultiInst}}}}success({itemList:svcCont.svcCont.data.content.itemList})}};',
                      actionTitle: '设置数据源',
                    },
                    line_number: 7,
                    callback1: [
                      {
                        type: 'setDataSource',
                        dataId: 167394068543742300,
                        options: {
                          compId: 'setDataSource',
                          compName: 'page',
                          id: '31562',
                          pageJsonId: '621037',
                          dataSourceId: 166861456408925500,
                          dataSourceName: 'itemList',
                          dataSourceRelType: 'custom',
                          dataSourceReloadFilter: [],
                          dataSourceSetValue: [],
                          newData: '$data_762822.itemList$',
                          operateType: 3,
                          onlySetPatch: true,
                          otherObjectArrayOptions: {},
                        },
                        line_number: 8,
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
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest222.params = [] || [];
    CMDGenerator(eventDataapiRequest222, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });
    const eventDataapiRequest223: any = [
      {
        type: 'apiRequest',
        dataId: 166867235698711360,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '021006',
          pageJsonId: '621037',
          sync: true,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryBopUserIdByOaUserId',
          _apiCode: 'qryBopUserIdByOaUserId',
          _source: 'rhin',
          _serviceId: '910432054329229312',
          _serviceTitle:
            '通过OA工号查询对应的BOP用户-lzs: qryBopUserIdByOaUserId',
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
              dataKey: '021006_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '021006_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '021006_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'oaUserId',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.oaUserId',
                  compType: 'Input',
                  name: 'oaUserId',
                  parents: ['body'],
                  id: 'body.oaUserId',
                  dataKey: '021006_body.oaUserId',
                  value: { type: [], code: '' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '021006_body',
            },
          ],
          _sourceName: '通过OA工号查询对应的BOP用户-lzs',
        },
        line_number: 9,
        callback1: [
          {
            type: 'customActionCode',
            dataId: 166867235698706880,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '998359',
              pageJsonId: '621037',
              code: 'function main(data,state,success,fail){var oaUserResult=reply_021006;success({hasOaUserInfo:oaUserResult&&oaUserResult.resultData&&oaUserResult.resultData.length>0,oaUserList:oaUserResult.resultData,defaultUserId:oaUserResult.resultData.length===1?oaUserResult.resultData[0].userId:null})};',
            },
            line_number: 10,
            callback1: [
              {
                type: 'ifelse',
                condition: [
                  {
                    condId: '6546817',
                    options: {
                      context: '$data_998359.hasOaUserInfo$',
                      operate: '== true',
                    },
                    conditionType: 'checkContextValue',
                    objType: 'system',
                    objId: 'sys',
                  },
                ],
                dataId: 166867235698755800,
                elseIfs: [
                  {
                    dataName: 'elseIf',
                    dataId: 166867235698792930,
                    children: [
                      {
                        dataName: 'action',
                        dataId: 166867235698784930,
                        children: [
                          {
                            dataName: 'callback',
                            dataId: 166867235698741920,
                            children: [],
                            value: 'callback1',
                            params: [],
                          },
                          {
                            dataName: 'callback',
                            dataId: 166867235698717280,
                            children: [],
                            value: 'callback2',
                            params: [],
                          },
                        ],
                        todoOptions: [
                          'modalType',
                          'title',
                          'content',
                          'okText',
                          'cancelText',
                        ],
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '702002',
                          pageJsonId: '621037',
                          type: 'warning',
                          content:
                            '根据当前登陆人OA工号查询不到对应BOP工号,请联系管理员',
                          title: '查询BOP工号失败',
                        },
                        actionObjId: 'showModal',
                        actionObjName: 'page',
                        value: 'showModal',
                        line_number: 15,
                      },
                    ],
                    condition: [],
                    callback: [
                      {
                        type: 'showModal',
                        dataId: 166867235698784930,
                        options: {
                          compId: 'showModal',
                          compName: 'page',
                          id: '702002',
                          pageJsonId: '621037',
                          type: 'warning',
                          content:
                            '根据当前登陆人OA工号查询不到对应BOP工号,请联系管理员',
                          title: '查询BOP工号失败',
                        },
                        line_number: 15,
                        callback1: [],
                        callback2: [],
                      },
                    ],
                  },
                ],
                line_number: 11,
                callback1: [
                  {
                    type: 'reloadSelectData',
                    dataId: 166867240455654600,
                    options: {
                      compId: 'Select_486213',
                      compLib: 'comm',
                      pageJsonId: '621037',
                      compName: 'Select',
                      id: '2298722',
                      data: '$data_998359.oaUserList$',
                      labelKey: 'userId',
                      valueKey: 'userId',
                    },
                    line_number: 12,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '507443',
                            options: {
                              context: '$data_998359.defaultUserId$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 167048383579065800,
                        elseIfs: [],
                        line_number: 13,
                        callback1: [
                          {
                            type: 'setValue',
                            dataId: 167048385557393440,
                            options: {
                              compId: 'Select_486213',
                              compLib: 'comm',
                              pageJsonId: '621037',
                              compName: 'Select',
                              id: '679189',
                              valueList: {
                                Select_486213: '$data_998359.defaultUserId$',
                              },
                            },
                            line_number: 14,
                            callback1: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest223.params = [] || [];
    CMDGenerator(eventDataapiRequest223, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    }); // console 170485066876784450
    console.log('此时的data.itemList', data?.itemList);

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_621037__"
    >
      <View
        name={'页面'}
        $$componentItem={{
          id: 'View_621037_1',
          uid: 'View_621037_1',
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
        ref={(r: any) => (refs['View_621037_1'] = r)}
        {...injectData}
      >
        <Card
          name={'集团信息'}
          cardIconType={'middle'}
          extendNum={3}
          title={'选择集团'}
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
            id: 'Card_88942',
            uid: 'Card_88942',
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
          ref={(r: any) => (refs['Card_88942'] = r)}
          {...injectData}
        >
          <View
            name={'布局容器'}
            backgroundType={{ type: 'cleanColor', color: undefined }}
            $$componentItem={{
              id: 'View_1213064',
              uid: 'View_1213064',
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
            ref={(r: any) => (refs['View_1213064'] = r)}
            {...injectData}
          >
            <HorizontalView
              name={'左右布局'}
              $$componentItem={{
                id: 'HorizontalView_268746',
                uid: 'HorizontalView_268746',
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
              ref={(r: any) => (refs['HorizontalView_268746'] = r)}
              {...injectData}
            >
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_3880396_016015_4849573',
                  uid: 'View_3880396_016015_4849573',
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
                  width: '40%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => (refs['View_3880396_016015_4849573'] = r)}
                {...injectData}
              >
                <Text
                  name={'集团名称'}
                  content={'集团名称：'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_42328',
                    uid: 'Text_42328',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    textAlign: 'right',
                  }}
                  ref={(r: any) => (refs['Text_42328'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_3880396_016015',
                  uid: 'View_3880396_016015',
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
                  width: '80%',
                  height: '100%',
                  overflowY: 'auto',
                }}
                ref={(r: any) => (refs['View_3880396_016015'] = r)}
                {...injectData}
              >
                <Text
                  name={'文本'}
                  content={'文本'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_9147926',
                    uid: 'Text_9147926',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                  }}
                  ref={(r: any) => (refs['Text_9147926'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_3880396',
                  uid: 'View_3880396',
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
                  flexWrap: 'nowrap',
                  textAlign: 'right',
                }}
                ref={(r: any) => (refs['View_3880396'] = r)}
                {...injectData}
              >
                <Text
                  content={'成功甩单次数：'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_455302',
                    uid: 'Text_455302',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                  }}
                  ref={(r: any) => (refs['Text_455302'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_3880396_602922',
                  uid: 'View_3880396_602922',
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
                  width: '30%',
                  height: '100%',
                  overflowY: 'auto',
                  flexWrap: 'nowrap',
                }}
                ref={(r: any) => (refs['View_3880396_602922'] = r)}
                {...injectData}
              >
                <Text
                  name={'甩单成功次数Data'}
                  content={'null'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  fieldName={'successRejectOrderCount'}
                  $$componentItem={{
                    id: 'Text_455302_547734',
                    uid: 'Text_455302_547734',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                  }}
                  ref={(r: any) => (refs['Text_455302_547734'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_73037_688675',
                  uid: 'View_73037_688675',
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
                  textAlign: 'left',
                }}
                ref={(r: any) => (refs['View_73037_688675'] = r)}
                {...injectData}
              >
                <Text
                  name={'bop'}
                  content={'BOP工号选择：'}
                  textType={'span'}
                  version={'1.0'}
                  showHtml={false}
                  $$componentItem={{
                    id: 'Text_911957',
                    uid: 'Text_911957',
                    type: 'Text',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#1c242e',
                    textAlign: 'right',
                  }}
                  ref={(r: any) => (refs['Text_911957'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_73037',
                  uid: 'View_73037',
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
                  width: '80%',
                  height: '100%',
                  overflowY: 'auto',
                  textAlign: 'left',
                }}
                ref={(r: any) => (refs['View_73037'] = r)}
                {...injectData}
              >
                <Select
                  name={'下拉框'}
                  size={'small'}
                  selfSpan={''}
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
                  fieldName={'userId'}
                  $$componentItem={{
                    id: 'Select_486213',
                    uid: 'Select_486213',
                    type: 'Select',
                    ...componentItem,
                  }}
                  disabled={false}
                  visible={true}
                  readOnly={false}
                  ref={(r: any) => (refs['Select_486213'] = r)}
                  {...injectData}
                />
              </View>
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_73037_688675_255858',
                  uid: 'View_73037_688675_255858',
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
                  width: '40%',
                  height: '100%',
                  overflowY: 'auto',
                  textAlign: 'left',
                }}
                ref={(r: any) => (refs['View_73037_688675_255858'] = r)}
                {...injectData}
              />
              <View
                name={'布局容器'}
                $$componentItem={{
                  id: 'View_73037_366036',
                  uid: 'View_73037_366036',
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
                  textAlign: 'left',
                }}
                ref={(r: any) => (refs['View_73037_366036'] = r)}
                {...injectData}
              />
            </HorizontalView>
          </View>
        </Card>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_44557453',
            uid: 'View_44557453',
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
          ref={(r: any) => (refs['View_44557453'] = r)}
          {...injectData}
        >
          <Card
            name={'场景选择'}
            cardIconType={'middle'}
            extendNum={3}
            title={'场景选择'}
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
              id: 'Card_825915',
              uid: 'Card_825915',
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
            ref={(r: any) => (refs['Card_825915'] = r)}
            {...injectData}
          >
            <GridView
              name={'循环块'}
              itemKey={'item'}
              indexKey={'i'}
              pieceData={[]}
              defaultValue={[]}
              isChecked={false}
              isMultiple={true}
              columnNum={1}
              valueKey={'value'}
              span={24}
              vspace={16}
              hspace={16}
              isEditor={true}
              fieldName={'item'}
              value={data?.itemList}
              gridData={data?.itemList}
              $$componentItem={{
                id: 'GridView_52578',
                uid: 'GridView_52578',
                type: 'GridView',
                ...componentItem,
              }}
              style={{ minHeight: 40 }}
              ref={(r: any) => (refs['GridView_52578'] = r)}
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
                          <Pageview
                            name={'页面容器'}
                            pageViewCompState={{
                              sceneCode: item?.childCatalogCode,
                              itemList: item,
                              busiObjNbr: state?.orderNbr,
                              catalogName: item?.catalogName,
                              catalogTitle: item?.catalogTitle,
                            }}
                            pageSrc={functorsMap?.IF(
                              item?.isMultiInst == '1',
                              '/createRejectOrder/' + item?.childCatalogCode,
                              '/test',
                            )}
                            style={{ height: 'auto', width: '100%' }}
                            ref={(r: any) => (refs['Pageview_5476228'] = r)}
                            {...injectData}
                          />
                        </>
                      );
                    },
                  },
                };
              }}
            />
          </Card>
        </View>
        <View
          name={'布局容器'}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_398657',
            uid: 'View_398657',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '8px 8px 8px 8px',
            width: '100%',
            textAlign: 'center',
          }}
          ref={(r: any) => (refs['View_398657'] = r)}
          {...injectData}
        >
          <Popover
            options={{
              tipType: '2',
              title: '确认发起甩单',
              trigger: 'hover',
              content: '点击后将进入销售中心发起甩单页面',
              placement: 'top',
            }}
            id={'Button_458798_873596'}
            {...injectData}
          >
            <Button
              name={'确认'}
              classification={'default'}
              autoProcessFlow={false}
              flowProcessResult={'common'}
              iconPosition={'left'}
              ghost={false}
              block={false}
              size={'large'}
              type={'primary'}
              hasIcon={false}
              $$componentItem={{
                id: 'Button_458798_873596',
                uid: 'Button_458798_873596',
                type: 'Button',
                ...componentItem,
              }}
              disabled={false}
              visible={true}
              readOnly={false}
              style={{ width: 'fit-content', margin: '0px 24px 0px 0px' }}
              onClick={(e: any) => {
                const eventDatagetValue171: any = [
                  {
                    type: 'getValue',
                    dataId: 166867551517481380,
                    shielding: true,
                    options: {
                      compId: 'Select_486213',
                      compLib: 'comm',
                      pageJsonId: '621037',
                      compName: 'Select',
                      id: '443871',
                    },
                    line_number: 1,
                    callback1: [
                      {
                        type: 'ifelse',
                        shielding: true,
                        condition: [
                          {
                            condId: '756119',
                            options: {
                              context: '$value_443871$',
                              operate: 'notEmpty',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166867551958246430,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166867553193846660,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166867553763240900,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166867553763295840,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                    shielding: true,
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166867553763251140,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
                                    shielding: true,
                                  },
                                ],
                                todoOptions: [
                                  'modalType',
                                  'title',
                                  'content',
                                  'okText',
                                  'cancelText',
                                ],
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '091766',
                                  pageJsonId: '621037',
                                  type: 'info',
                                  title: '未选择BOP工号',
                                  content: '请先选择要映射的BOP工号!',
                                },
                                actionObjId: 'showModal',
                                actionObjName: 'page',
                                value: 'showModal',
                                elseIfs: [],
                                shielding: true,
                                line_number: 10,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
                            shielding: true,
                            callback: [
                              {
                                type: 'showModal',
                                dataId: 166867553763240900,
                                shielding: true,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '091766',
                                  pageJsonId: '621037',
                                  type: 'info',
                                  title: '未选择BOP工号',
                                  content: '请先选择要映射的BOP工号!',
                                },
                                line_number: 10,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 2,
                        callback1: [
                          {
                            type: 'customActionCode',
                            dataId: 166868705377528500,
                            shielding: true,
                            options: {
                              compId: 'customActionCode',
                              compName: 'page',
                              id: '2054833',
                              pageJsonId: '621037',
                              code: 'function main(data,state,success,fail){if(!data.sceneCodeLists||data.sceneCodeLists.length==0){success({hasSceneCode:"0"})}else{var str="";for(var i=0;i<data.sceneCodeLists.length;++i){str=str+","+data.sceneCodeLists[i].sceneCode}success({hasSceneCode:"1",sceneCode:str.substr(1,str.length-1)})}};',
                            },
                            line_number: 3,
                            callback1: [
                              {
                                type: 'ifelse',
                                shielding: true,
                                condition: [
                                  {
                                    condId: '844019',
                                    options: {
                                      context: '$data_2054833.hasSceneCode$',
                                      operate: '==',
                                      manualValue: '1',
                                      useManual: true,
                                      useObject: false,
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166868726585674000,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166868729743466080,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166868729965785200,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166868729965716400,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                            shielding: true,
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166868729965777250,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                            elseIfs: [],
                                            shielding: true,
                                          },
                                        ],
                                        todoOptions: [
                                          'modalType',
                                          'title',
                                          'content',
                                          'okText',
                                          'cancelText',
                                        ],
                                        options: {
                                          compId: 'showModal',
                                          compName: 'page',
                                          id: '5992112',
                                          pageJsonId: '621037',
                                          type: 'info',
                                          title: '未选择甩单场景',
                                          content: '请先选择要进行甩单的场景！',
                                        },
                                        actionObjId: 'showModal',
                                        actionObjName: 'page',
                                        value: 'showModal',
                                        elseIfs: [],
                                        shielding: true,
                                        line_number: 8,
                                      },
                                    ],
                                    condition: [],
                                    elseIfs: [],
                                    shielding: true,
                                    callback: [
                                      {
                                        type: 'showModal',
                                        dataId: 166868729965785200,
                                        shielding: true,
                                        options: {
                                          compId: 'showModal',
                                          compName: 'page',
                                          id: '5992112',
                                          pageJsonId: '621037',
                                          type: 'info',
                                          title: '未选择甩单场景',
                                          content: '请先选择要进行甩单的场景！',
                                        },
                                        line_number: 8,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ],
                                line_number: 4,
                                callback1: [
                                  {
                                    type: 'apiRequest',
                                    dataId: 166868734536396640,
                                    shielding: true,
                                    options: {
                                      compId: 'apiRequest',
                                      compName: 'system',
                                      id: '886686',
                                      pageJsonId: '621037',
                                      sync: true,
                                      method: 'post',
                                      url: '/app/rhin/gateway/callRhinEngine',
                                      _capabilityCode:
                                        'getSalesCreateRejectOrderUrl',
                                      _apiCode: 'getSalesCreateRejectOrderUrl',
                                      _source: 'rhin',
                                      _serviceId: '909366270373675008',
                                      _serviceTitle:
                                        '获取销售中心创建甩单页面URL-lzs: getSalesCreateRejectOrderUrl',
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
                                          dataKey: '886686_header',
                                        },
                                        {
                                          code: 'path',
                                          name: '请求路径参数',
                                          attrType: 'object',
                                          _id: 'path',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'path',
                                          dataKey: '886686_path',
                                        },
                                        {
                                          code: 'query',
                                          name: 'URL 参数',
                                          attrType: 'object',
                                          _id: 'query',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'query',
                                          dataKey: '886686_query',
                                        },
                                        {
                                          code: 'body',
                                          name: '请求体',
                                          attrType: 'object',
                                          children: [
                                            {
                                              code: 'orderNbr',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.orderNbr',
                                              compType: 'Input',
                                              name: 'orderNbr',
                                              parents: ['body'],
                                              id: 'body.orderNbr',
                                              dataKey: '886686_body.orderNbr',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$state.orderNbr$',
                                                ],
                                                code: '',
                                              },
                                            },
                                            {
                                              code: 'sceneCode',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.sceneCode',
                                              compType: 'Input',
                                              name: 'sceneCode',
                                              parents: ['body'],
                                              id: 'body.sceneCode',
                                              dataKey: '886686_body.sceneCode',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$data_2054833$',
                                                ],
                                                code: 'sceneCode',
                                              },
                                            },
                                            {
                                              code: 'userId',
                                              attrType: 'field',
                                              type: 'string',
                                              mustFlag: 'F',
                                              _id: 'body.userId',
                                              compType: 'Input',
                                              name: 'userId',
                                              parents: ['body'],
                                              id: 'body.userId',
                                              dataKey: '886686_body.userId',
                                              value: {
                                                type: [
                                                  'context',
                                                  '$value_443871$',
                                                ],
                                                code: '',
                                              },
                                            },
                                          ],
                                          _id: 'body',
                                          compType: 'Input',
                                          parents: [],
                                          id: 'body',
                                          dataKey: '886686_body',
                                        },
                                      ],
                                    },
                                    line_number: 5,
                                    callback1: [
                                      {
                                        type: 'showCustomModal',
                                        dataId: 166868734536355140,
                                        shielding: true,
                                        options: {
                                          compId: 'showCustomModal',
                                          compName: 'page',
                                          id: '944322',
                                          pageJsonId: '621037',
                                          modalname:
                                            '/xiaoshouzhongxinchuangjianshuaidanyemian8491',
                                          pageId: '909370493979082752',
                                          paramsObj: {
                                            createRejectOrderUrl:
                                              '$reply_886686?.resultData$',
                                          },
                                          paramsObjKeyValueMap: {
                                            createRejectOrderUrl:
                                              '$reply_886686?.resultData$',
                                            sceneCode: '',
                                          },
                                        },
                                        line_number: 6,
                                        callback1: [],
                                        callback2: [],
                                      },
                                      {
                                        type: 'setDownloadResponse',
                                        dataId: 166870218120641400,
                                        shielding: true,
                                        options: {
                                          compId: 'setDownloadResponse',
                                          compName: 'system',
                                          id: '141532',
                                          pageJsonId: '621037',
                                          paramsObj: {
                                            downloadUrl:
                                              '$reply_886686?.resultData$',
                                          },
                                          paramsObjKeyValueMap: {
                                            downloadUrl:
                                              '$reply_886686?.resultData$',
                                          },
                                        },
                                        line_number: 7,
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                              {
                                type: 'console',
                                dataId: 166868965789628130,
                                shielding: true,
                                options: {
                                  compId: 'debug',
                                  compName: 'system',
                                  id: '449388',
                                  pageJsonId: '621037',
                                  value: ['$data_2054833.hasSceneCode$'],
                                },
                                line_number: 9,
                              },
                            ],
                            callback2: [],
                          },
                        ],
                      },
                    ],
                  },
                ];
                eventDatagetValue171.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDatagetValue171, { e }, 'getValue', {
                  id: 'getValue',
                  name: 'getValue',
                  type: 'getValue',
                  platform: 'pc',
                });
                const eventDataapiRequest711: any = [
                  {
                    type: 'apiRequest',
                    dataId: 166925704654100540,
                    options: {
                      compId: 'apiRequest',
                      compName: 'system',
                      id: '747023',
                      pageJsonId: '621037',
                      sync: true,
                      method: 'post',
                      url: '/app/rhin/gateway/callRhinEngine',
                      _capabilityCode: 'querySuccessRejectOrderCount',
                      _apiCode: 'querySuccessRejectOrderCount',
                      _source: 'rhin',
                      _serviceId: '909810403370082304',
                      _serviceTitle:
                        '获取审批单甩单成功次数-lzs: querySuccessRejectOrderCount',
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
                          dataKey: '747023_header',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                          _id: 'path',
                          compType: 'Input',
                          parents: [],
                          id: 'path',
                          dataKey: '747023_path',
                        },
                        {
                          code: 'query',
                          name: 'URL 参数',
                          attrType: 'object',
                          _id: 'query',
                          compType: 'Input',
                          parents: [],
                          id: 'query',
                          dataKey: '747023_query',
                        },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'busiObjNbr',
                              attrType: 'field',
                              type: 'string',
                              mustFlag: 'T',
                              _id: 'body.busiObjNbr',
                              compType: 'Input',
                              name: 'busiObjNbr',
                              parents: ['body'],
                              id: 'body.busiObjNbr',
                              dataKey: '747023_body.busiObjNbr',
                              value: {
                                type: ['context', '$state.orderNbr$'],
                                code: '',
                              },
                            },
                          ],
                          _id: 'body',
                          compType: 'Input',
                          parents: [],
                          id: 'body',
                          dataKey: '747023_body',
                        },
                      ],
                    },
                    line_number: 11,
                    callback1: [
                      {
                        type: 'ifelse',
                        condition: [
                          {
                            condId: '85654',
                            options: {
                              useManual: true,
                              useObject: false,
                              context: '$reply_747023?.resultData$',
                              operate: '<',
                              manualValue: '3',
                            },
                            conditionType: 'checkContextValue',
                            objType: 'system',
                            objId: 'sys',
                          },
                        ],
                        dataId: 166925708795405900,
                        elseIfs: [
                          {
                            dataName: 'elseIf',
                            dataId: 166925723025092380,
                            children: [
                              {
                                dataName: 'action',
                                dataId: 166925723261344860,
                                children: [
                                  {
                                    dataName: 'callback',
                                    dataId: 166925723261365920,
                                    children: [],
                                    value: 'callback1',
                                    params: [],
                                    elseIfs: [],
                                  },
                                  {
                                    dataName: 'callback',
                                    dataId: 166925723261365020,
                                    children: [],
                                    value: 'callback2',
                                    params: [],
                                    elseIfs: [],
                                  },
                                ],
                                todoOptions: [
                                  'modalType',
                                  'title',
                                  'content',
                                  'okText',
                                  'cancelText',
                                ],
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '687973',
                                  pageJsonId: '621037',
                                  type: 'info',
                                  title: '发起甩单失败',
                                  content: '已超过最大甩单次数，无法发起甩单！',
                                },
                                actionObjId: 'showModal',
                                actionObjName: 'page',
                                value: 'showModal',
                                elseIfs: [],
                                line_number: 25,
                              },
                            ],
                            condition: [],
                            elseIfs: [],
                            callback: [
                              {
                                type: 'showModal',
                                dataId: 166925723261344860,
                                options: {
                                  compId: 'showModal',
                                  compName: 'page',
                                  id: '687973',
                                  pageJsonId: '621037',
                                  type: 'info',
                                  title: '发起甩单失败',
                                  content: '已超过最大甩单次数，无法发起甩单！',
                                },
                                line_number: 25,
                                callback1: [],
                                callback2: [],
                              },
                            ],
                          },
                        ],
                        line_number: 12,
                        callback1: [
                          {
                            type: 'getValue',
                            dataId: 166925728404935500,
                            options: {
                              compId: 'Select_486213',
                              compLib: 'comm',
                              pageJsonId: '621037',
                              compName: 'Select',
                              id: '672707',
                            },
                            line_number: 13,
                            callback1: [
                              {
                                type: 'ifelse',
                                condition: [
                                  {
                                    condId: '756119',
                                    options: {
                                      context: '$value_672707$',
                                      operate: 'notEmpty',
                                    },
                                    conditionType: 'checkContextValue',
                                    objType: 'system',
                                    objId: 'sys',
                                  },
                                ],
                                dataId: 166925728404989860,
                                elseIfs: [
                                  {
                                    dataName: 'elseIf',
                                    dataId: 166925728404990340,
                                    children: [
                                      {
                                        dataName: 'action',
                                        dataId: 166925728404992450,
                                        children: [
                                          {
                                            dataName: 'callback',
                                            dataId: 166925728404977400,
                                            children: [],
                                            value: 'callback1',
                                            params: [],
                                            elseIfs: [],
                                          },
                                          {
                                            dataName: 'callback',
                                            dataId: 166925728404958940,
                                            children: [],
                                            value: 'callback2',
                                            params: [],
                                            elseIfs: [],
                                          },
                                        ],
                                        todoOptions: [
                                          'modalType',
                                          'title',
                                          'content',
                                          'okText',
                                          'cancelText',
                                        ],
                                        options: {
                                          compId: 'showModal',
                                          compName: 'page',
                                          id: '357358',
                                          pageJsonId: '621037',
                                          type: 'info',
                                          title: '未选择BOP工号',
                                          content: '请先选择要映射的BOP工号!',
                                        },
                                        actionObjId: 'showModal',
                                        actionObjName: 'page',
                                        value: 'showModal',
                                        elseIfs: [],
                                        line_number: 24,
                                      },
                                    ],
                                    condition: [],
                                    elseIfs: [],
                                    callback: [
                                      {
                                        type: 'showModal',
                                        dataId: 166925728404992450,
                                        options: {
                                          compId: 'showModal',
                                          compName: 'page',
                                          id: '357358',
                                          pageJsonId: '621037',
                                          type: 'info',
                                          title: '未选择BOP工号',
                                          content: '请先选择要映射的BOP工号!',
                                        },
                                        line_number: 24,
                                        callback1: [],
                                        callback2: [],
                                      },
                                    ],
                                  },
                                ],
                                line_number: 14,
                                callback1: [
                                  {
                                    type: 'customActionCode',
                                    dataId: 166925728404948260,
                                    options: {
                                      compId: 'customActionCode',
                                      compName: 'page',
                                      id: '91998',
                                      pageJsonId: '621037',
                                      code: 'function main(data,state,success,fail){if(!data.sceneCodeLists||data.sceneCodeLists.length==0){success({hasSceneCode:"0"})}else{var str="";for(var i=0;i<data.sceneCodeLists.length;++i){str=str+","+data.sceneCodeLists[i].sceneCode}success({hasSceneCode:"1",sceneCode:str.substr(1,str.length-1)})}};',
                                    },
                                    line_number: 15,
                                    callback1: [
                                      {
                                        type: 'ifelse',
                                        condition: [
                                          {
                                            condId: '844019',
                                            options: {
                                              context:
                                                '$data_91998.hasSceneCode$',
                                              operate: '==',
                                              manualValue: '1',
                                              useManual: true,
                                              useObject: false,
                                            },
                                            conditionType: 'checkContextValue',
                                            objType: 'system',
                                            objId: 'sys',
                                          },
                                        ],
                                        dataId: 166925728404923230,
                                        elseIfs: [
                                          {
                                            dataName: 'elseIf',
                                            dataId: 166925728404913020,
                                            children: [
                                              {
                                                dataName: 'action',
                                                dataId: 166925728404931680,
                                                children: [
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166925728404963800,
                                                    children: [],
                                                    value: 'callback1',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                  {
                                                    dataName: 'callback',
                                                    dataId: 166925728404981120,
                                                    children: [],
                                                    value: 'callback2',
                                                    params: [],
                                                    elseIfs: [],
                                                  },
                                                ],
                                                todoOptions: [
                                                  'modalType',
                                                  'title',
                                                  'content',
                                                  'okText',
                                                  'cancelText',
                                                ],
                                                options: {
                                                  compId: 'showModal',
                                                  compName: 'page',
                                                  id: '2934775',
                                                  pageJsonId: '621037',
                                                  type: 'info',
                                                  title: '未选择甩单场景',
                                                  content:
                                                    '请先选择要进行甩单的场景！',
                                                },
                                                actionObjId: 'showModal',
                                                actionObjName: 'page',
                                                value: 'showModal',
                                                elseIfs: [],
                                                line_number: 22,
                                              },
                                            ],
                                            condition: [],
                                            elseIfs: [],
                                            callback: [
                                              {
                                                type: 'showModal',
                                                dataId: 166925728404931680,
                                                options: {
                                                  compId: 'showModal',
                                                  compName: 'page',
                                                  id: '2934775',
                                                  pageJsonId: '621037',
                                                  type: 'info',
                                                  title: '未选择甩单场景',
                                                  content:
                                                    '请先选择要进行甩单的场景！',
                                                },
                                                line_number: 22,
                                                callback1: [],
                                                callback2: [],
                                              },
                                            ],
                                          },
                                        ],
                                        line_number: 16,
                                        callback1: [
                                          {
                                            type: 'apiRequest',
                                            dataId: 166925728404921570,
                                            options: {
                                              compId: 'apiRequest',
                                              compName: 'system',
                                              id: '591567',
                                              pageJsonId: '621037',
                                              sync: true,
                                              method: 'post',
                                              url: '/app/rhin/gateway/callRhinEngine',
                                              _capabilityCode:
                                                'getSalesCreateRejectOrderUrl',
                                              _apiCode:
                                                'getSalesCreateRejectOrderUrl',
                                              _source: 'rhin',
                                              _serviceId: '909366270373675008',
                                              _serviceTitle:
                                                '获取销售中心创建甩单页面URL-lzs: getSalesCreateRejectOrderUrl',
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
                                                  dataKey: '886686_header',
                                                },
                                                {
                                                  code: 'path',
                                                  name: '请求路径参数',
                                                  attrType: 'object',
                                                  _id: 'path',
                                                  compType: 'Input',
                                                  parents: [],
                                                  id: 'path',
                                                  dataKey: '886686_path',
                                                },
                                                {
                                                  code: 'query',
                                                  name: 'URL 参数',
                                                  attrType: 'object',
                                                  _id: 'query',
                                                  compType: 'Input',
                                                  parents: [],
                                                  id: 'query',
                                                  dataKey: '886686_query',
                                                },
                                                {
                                                  code: 'body',
                                                  name: '请求体',
                                                  attrType: 'object',
                                                  children: [
                                                    {
                                                      code: 'orderNbr',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'body.orderNbr',
                                                      compType: 'Input',
                                                      name: 'orderNbr',
                                                      parents: ['body'],
                                                      id: 'body.orderNbr',
                                                      dataKey:
                                                        '886686_body.orderNbr',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$state.orderNbr$',
                                                        ],
                                                        code: '',
                                                      },
                                                    },
                                                    {
                                                      code: 'sceneCode',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'body.sceneCode',
                                                      compType: 'Input',
                                                      name: 'sceneCode',
                                                      parents: ['body'],
                                                      id: 'body.sceneCode',
                                                      dataKey:
                                                        '886686_body.sceneCode',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$data_91998$',
                                                        ],
                                                        code: 'sceneCode',
                                                      },
                                                    },
                                                    {
                                                      code: 'userId',
                                                      attrType: 'field',
                                                      type: 'string',
                                                      mustFlag: 'F',
                                                      _id: 'body.userId',
                                                      compType: 'Input',
                                                      name: 'userId',
                                                      parents: ['body'],
                                                      id: 'body.userId',
                                                      dataKey:
                                                        '886686_body.userId',
                                                      value: {
                                                        type: [
                                                          'context',
                                                          '$value_672707$',
                                                        ],
                                                        code: '',
                                                      },
                                                    },
                                                  ],
                                                  _id: 'body',
                                                  compType: 'Input',
                                                  parents: [],
                                                  id: 'body',
                                                  dataKey: '886686_body',
                                                },
                                              ],
                                            },
                                            line_number: 17,
                                            callback1: [
                                              {
                                                type: 'showCustomModal',
                                                dataId: 16692572840495972,
                                                shielding: true,
                                                options: {
                                                  compId: 'showCustomModal',
                                                  compName: 'page',
                                                  id: '686119',
                                                  pageJsonId: '621037',
                                                  modalname:
                                                    '/xiaoshouzhongxinchuangjianshuaidanyemian8491',
                                                  pageId: '909370493979082752',
                                                  paramsObj: {
                                                    createRejectOrderUrl:
                                                      '$reply_591567?.resultData$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    createRejectOrderUrl:
                                                      '$reply_591567?.resultData$',
                                                    sceneCode: '',
                                                  },
                                                  modalPath:
                                                    '/xiaoshouzhongxinchuangjianshuaidanyemian8491',
                                                },
                                                line_number: 18,
                                                callback1: [],
                                                callback2: [],
                                              },
                                              {
                                                type: 'setDownloadResponse',
                                                dataId: 166925728404934700,
                                                options: {
                                                  compId: 'setDownloadResponse',
                                                  compName: 'system',
                                                  id: '589173',
                                                  pageJsonId: '621037',
                                                  paramsObj: {
                                                    downloadUrl:
                                                      '$reply_591567?.resultData$',
                                                  },
                                                  paramsObjKeyValueMap: {
                                                    downloadUrl:
                                                      '$reply_591567?.resultData$',
                                                  },
                                                },
                                                line_number: 19,
                                              },
                                              {
                                                type: 'showMessage',
                                                dataId: 167048416042005280,
                                                options: {
                                                  compId: 'showMessage',
                                                  compName: 'system',
                                                  id: '5295415',
                                                  pageJsonId: '621037',
                                                  type: 'success',
                                                  value:
                                                    '跳转创建甩单页面成功,关闭发起甩单弹窗',
                                                },
                                                line_number: 20,
                                              },
                                              {
                                                type: 'closeModal',
                                                dataId: 167048422674786720,
                                                options: {
                                                  compId: 'closeModal',
                                                  compName: 'page',
                                                  id: '524483',
                                                  pageJsonId: '621037',
                                                },
                                                line_number: 21,
                                              },
                                            ],
                                            callback2: [],
                                          },
                                        ],
                                      },
                                      {
                                        type: 'console',
                                        dataId: 166925728404917120,
                                        options: {
                                          compId: 'debug',
                                          compName: 'system',
                                          id: '985267',
                                          pageJsonId: '621037',
                                          value: ['$data_91998.hasSceneCode$'],
                                        },
                                        line_number: 23,
                                      },
                                    ],
                                    callback2: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    callback2: [],
                  },
                ];
                eventDataapiRequest711.params =
                  [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
                CMDGenerator(eventDataapiRequest711, { e }, 'apiRequest', {
                  id: 'apiRequest',
                  name: 'apiRequest',
                  type: 'apiRequest',
                  platform: 'pc',
                });
              }}
              ref={(r: any) => (refs['Button_458798_873596'] = r)}
              {...injectData}
            />
          </Popover>
          <Button
            name={'返回'}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={true}
            block={false}
            size={'large'}
            type={'primary'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_0125392',
              uid: 'Button_0125392',
              type: 'Button',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ width: 'fit-content', margin: '0px 0px 0px 24px' }}
            onClick={(e: any) => {
              const eventDatacloseModal128: any = [
                {
                  type: 'closeModal',
                  dataId: 166925781867462000,
                  options: {
                    compId: 'closeModal',
                    compName: 'page',
                    id: '761304',
                    pageJsonId: '621037',
                  },
                  line_number: 1,
                },
              ];
              eventDatacloseModal128.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatacloseModal128, { e }, 'closeModal', {
                id: 'closeModal',
                name: 'closeModal',
                type: 'closeModal',
                platform: 'pc',
              });
            }}
            ref={(r: any) => (refs['Button_0125392'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Faqishuaidantanchuang7958$$Modal, {
  pageId: '908274270111293440',
  hasLogin: false,
  dataSource,
  defaultState: {
    bizId: '',
    sceneCode: '',
    orderNbr: '',
    instId: '',
    custName: '',
  },
});
