// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, HorizontalView, Card, Tree } from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '882184557321994240';
const SceneMatrixManage$$Page: React.FC<PageProps> = ({
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
    const eventDataapiRequest503: any = [
      {
        type: 'apiRequest',
        dataId: 166193550019150180,
        options: {
          compId: 'apiRequest',
          compName: 'system',
          id: '453373',
          pageJsonId: '3361663',
          sync: false,
          method: 'post',
          url: '/app/rhin/gateway/callRhinEngine',
          _capabilityCode: 'qryCatalogToTreeNodeListByParentCode',
          _apiCode: 'qryCatalogToTreeNodeListByParentCode',
          _source: 'rhin',
          _serviceId: '877545868169199616',
          _serviceTitle:
            '根据父类目编码查询类目数据-tsm: qryCatalogToTreeNodeListByParentCode',
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
              dataKey: '453373_header',
            },
            {
              code: 'path',
              name: '请求路径参数',
              attrType: 'object',
              _id: 'path',
              compType: 'Input',
              parents: [],
              id: 'path',
              dataKey: '453373_path',
            },
            {
              code: 'query',
              name: 'URL 参数',
              attrType: 'object',
              _id: 'query',
              compType: 'Input',
              parents: [],
              id: 'query',
              dataKey: '453373_query',
            },
            {
              code: 'body',
              name: '请求体',
              attrType: 'object',
              children: [
                {
                  code: 'isQryAll',
                  name: '新增节点',
                  attrType: 'field',
                  type: 'boolean',
                  mustFlag: 'F',
                  defaultValue: 'false',
                  _id: 'body.isQryAll',
                  compType: 'Input',
                  parents: ['body'],
                  id: 'body.isQryAll',
                  dataKey: '453373_body.isQryAll',
                  value: { type: ['customize'], code: 'true' },
                },
                {
                  code: 'parentCatalogCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  _id: 'body.parentCatalogCode',
                  compType: 'Input',
                  name: 'parentCatalogCode',
                  parents: ['body'],
                  id: 'body.parentCatalogCode',
                  dataKey: '453373_body.parentCatalogCode',
                  value: { type: ['customize'], code: '-1' },
                },
              ],
              _id: 'body',
              compType: 'Input',
              parents: [],
              id: 'body',
              dataKey: '453373_body',
            },
          ],
          actionTitle: '查询场景树',
        },
        line_number: 1,
        callback1: [
          {
            type: 'reloadData',
            dataId: 166193556464423420,
            shielding: true,
            options: {
              compId: 'Tree_978091',
              compLib: 'comm',
              pageJsonId: '3361663',
              compName: 'Tree',
              id: '946312',
              data: '$reply_453373?.resultData$',
            },
            line_number: 2,
            callback1: [],
          },
          {
            type: 'console',
            dataId: 166202040001916400,
            options: {
              compId: 'debug',
              compName: 'system',
              id: '1678816',
              pageJsonId: '3361663',
              value: ['$reply_453373$'],
            },
            line_number: 3,
          },
          {
            type: 'customActionCode',
            dataId: 167877783912796060,
            options: {
              compId: 'customActionCode',
              compName: 'page',
              id: '332371',
              pageJsonId: '90041',
              code: 'function main(data,state,success,fail){var _reply_,_reply_2;console.log("\\u8FD4\\u56DE\\u7684\\u6570\\u636E:",(_reply_=reply_453373)===null||_reply_===void 0?void 0:_reply_.resultData);var result=((_reply_2=reply_453373)===null||_reply_2===void 0?void 0:_reply_2.resultData)||[];var res=[];for(var i=0;i<result.length;i++){var subRes=result[i];var childrenOne=subRes["children"]||[];var subRes2=[];for(var j=0;j<childrenOne.length;j++){var finalRes=childrenOne[j];var childrenTwo=finalRes["children"]||[];var finalRes2=[];for(var k=0;k<childrenTwo.length;k++){var lastRes=childrenTwo[k]||[];var childrenThr=lastRes["children"]||[];for(var o=0;o<childrenThr.length;o++){lastRes["children"][o]["isCheck"]=true}finalRes2.push(lastRes)}subRes2.push(finalRes2)}res.push(subRes)}console.log("\\u7ED3\\u679C\\uFF1A",res);success(result)};',
              actionTitle: '将叶节点设置为可选中',
            },
            line_number: 4,
            callback1: [
              {
                type: 'reloadData',
                dataId: 167877784856111140,
                options: {
                  compId: 'Tree_978091',
                  compLib: 'comm',
                  pageJsonId: '3361663',
                  compName: 'Tree',
                  id: '9840245',
                  labelKey: 'nodeValue',
                  nodeValueKey: 'nodeKey',
                  selectable: 'isCheck',
                  childrenKey: 'children',
                  data: '$data_332371$',
                },
                line_number: 5,
                callback1: [],
              },
            ],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDataapiRequest503.params = [] || [];
    CMDGenerator(eventDataapiRequest503, {}, 'apiRequest', {
      id: 'apiRequest',
      name: 'apiRequest',
      type: 'apiRequest',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_3361663__"
    >
      <View
        className="View_View_3361663_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_3361663_1',
          uid: 'View_3361663_1',
          type: 'View',
          ...componentItem,
        }}
        disabled={false}
        visible={true}
        readOnly={false}
        style={{
          minHeight: '100%',
          display: 'block',
          padding: '20px 20px 20px 20px',
          overflowY: 'auto',
          width: 'auto',
          height: '100%',
        }}
        ref={(r: any) => refs.setComponentRef(r, 'View_3361663_1')}
        {...injectData}
      >
        <HorizontalView
          name={'左右布局'}
          $$componentItem={{
            id: 'HorizontalView_1699304',
            uid: 'HorizontalView_1699304',
            type: 'HorizontalView',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{
            display: 'flex',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_1699304')}
          {...injectData}
        >
          <View
            className="View_View_182395"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_182395',
              uid: 'View_182395',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'block',
              padding: '0px 0px 0px 0px',
              width: '30%',
              height: '100%',
              overflowY: 'hidden',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_182395')}
            {...injectData}
          >
            <Card
              name={'卡片'}
              cardIconType={'middle'}
              title={'场景树'}
              bordered={true}
              size={'default'}
              hasHeader={true}
              hasIcon={true}
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
                id: 'Card_677682',
                uid: 'Card_677682',
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
                height: '100%',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Card_677682')}
              {...injectData}
            >
              <Tree
                name={'类目树'}
                defaultExpandAll={false}
                showLine={true}
                selectable={true}
                isAsync={false}
                treeData={[
                  {
                    title: '第一列',
                    key: 'column1',
                    selectable: true,
                    value: 'column1',
                    label: '第一列',
                    $$isParent: true,
                    children: [
                      {
                        title: '第二列',
                        key: 'column2',
                        value: 'column2',
                        selectable: true,
                        label: '第二列',
                      },
                    ],
                  },
                ]}
                showLineIcon={false}
                treeColumns={{
                  key: 'nodeKey',
                  title: 'nodeValue',
                  children: 'children',
                  selectable: 'isCheck',
                  selectedService: {
                    busiApiId: '877545868169199616',
                    busiApiNbr: 'qryCatalogToTreeNodeListByParentCode',
                    busiApiName: '根据父类目编码查询类目数据-tsm',
                    busiObjId: '877545868169199616',
                    apiParam:
                      '[{"apiId":877545868169199616,"apiParamId":877545868303417344,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"1000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868303417345,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868303417345,"serviceObjectPath":"877545868303417345","statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},"paramObjectId":877545868303417345,"paramType":"1000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868307611648,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"2000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868311805952,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868311805952,"serviceObjectPath":"877545868311805952","statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805952,"paramType":"2000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805953,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"3000","remark":"根节点，这个节点不能删除","rootServiceObjectId":877545868311805954,"serviceObject":[],"serviceObjectCode":"root","serviceObjectId":877545868311805954,"serviceObjectPath":"877545868311805954","statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805954,"paramType":"3000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805955,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"4000","remark":"根节点","rootServiceObjectId":877545868311805956,"serviceObject":[],"serviceObjectAttrs":[{"attrId":878888728903589890,"attrSpec":{"attrId":878888728903589890,"attrName":"是否全查","attrNbr":"isQryAll","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661149801670,"createStaff":50167,"defaultValue":"false","desensitizeRule":"1001","desensitizeType":"1001","exampleValue":"true","mustFlag":"F","remark":"新增节点","serviceObjAttrId":878888728903589889,"serviceObjectId":877545868311805956,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":877545868487966721,"attrSpec":{"attrId":877545868487966721,"attrName":"parentCatalogCode","attrNbr":"parentCatalogCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661150341276,"createStaff":50167,"exampleValue":"-1","mustFlag":"F","serviceObjAttrId":878890991944241152,"serviceObjectId":877545868311805956,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":877545868311805956,"serviceObjectPath":"877545868311805956","statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805956,"paramType":"4000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"},{"apiId":877545868169199616,"apiParamId":877545868311805957,"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"objId":877545868169199616,"objType":"5000","paramObject":{"compareFlag":true,"createDate":1660829638886,"createStaff":50167,"isList":"F","level":1,"parServiceObjectId":-1,"paramType":"5000","remark":"根节点","rootServiceObjectId":877545868311805958,"serviceObject":[{"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"isList":"T","level":2,"parServiceObjectId":877545868311805958,"paramType":"5000","rootServiceObjectId":877545868311805958,"serviceObject":[{"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"isList":"T","level":3,"parServiceObjectId":882189603396861952,"paramType":"5000","rootServiceObjectId":877545868311805958,"serviceObject":[{"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"isList":"T","level":4,"parServiceObjectId":882189603396861953,"paramType":"5000","rootServiceObjectId":877545868311805958,"serviceObject":[],"serviceObjectAttrs":[{"attrId":882189604369940480,"attrSpec":{"attrId":882189604369940480,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"true","mustFlag":"F","serviceObjAttrId":882189604365746176,"serviceObjectId":882189603396861954,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"营销品代领审批","mustFlag":"F","serviceObjAttrId":882189604369940481,"serviceObjectId":882189603396861954,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":877859343021883393,"attrSpec":{"attrId":877859343021883393,"attrName":"catalogType","attrNbr":"catalogType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"1003","mustFlag":"F","serviceObjAttrId":882189604369940482,"serviceObjectId":882189603396861954,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"CLS_YX_0002","mustFlag":"F","serviceObjAttrId":882189604374134784,"serviceObjectId":882189603396861954,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":876452546450206723,"attrSpec":{"attrId":876452546450206723,"attrName":"children","attrNbr":"children","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":882189604374134785,"serviceObjectId":882189603396861954,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"CLS_YX_0002_0001","mustFlag":"F","serviceObjAttrId":882189604374134786,"serviceObjectId":882189603396861954,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":881794055997313029,"attrSpec":{"attrId":881794055997313029,"attrName":"isMatrixSubType","attrNbr":"isMatrixSubType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":882189604403494912,"serviceObjectId":882189603396861954,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"}],"serviceObjectCode":"children","serviceObjectId":882189603396861954,"serviceObjectPath":"877545868311805958,882189603396861952,882189603396861953,882189603396861954","statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":882189604311220224,"attrSpec":{"attrId":882189604311220224,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"false","mustFlag":"F","serviceObjAttrId":882189604307025920,"serviceObjectId":882189603396861953,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"营销品代领","mustFlag":"F","serviceObjAttrId":882189604311220225,"serviceObjectId":882189603396861953,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":877859343021883393,"attrSpec":{"attrId":877859343021883393,"attrName":"catalogType","attrNbr":"catalogType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"1002","mustFlag":"F","serviceObjAttrId":882189604311220226,"serviceObjectId":882189603396861953,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"CLS_YX","mustFlag":"F","serviceObjAttrId":882189604311220227,"serviceObjectId":882189603396861953,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"CLS_YX_0002","mustFlag":"F","serviceObjAttrId":882189604315414528,"serviceObjectId":882189603396861953,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":881794055997313029,"attrSpec":{"attrId":881794055997313029,"attrName":"isMatrixSubType","attrNbr":"isMatrixSubType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":882189604315414529,"serviceObjectId":882189603396861953,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"}],"serviceObjectCode":"children","serviceObjectId":882189603396861953,"serviceObjectPath":"877545868311805958,882189603396861952,882189603396861953","statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":874825011020304385,"attrSpec":{"attrId":874825011020304385,"attrName":"nodeKey","attrNbr":"nodeKey","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"CLS_YX","mustFlag":"F","serviceObjAttrId":882189604214751234,"serviceObjectId":882189603396861952,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":881794055997313029,"attrSpec":{"attrId":881794055997313029,"attrName":"isMatrixSubType","attrNbr":"isMatrixSubType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"mustFlag":"F","serviceObjAttrId":882189604214751235,"serviceObjectId":882189603396861952,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":882189604210556929,"attrSpec":{"attrId":882189604210556929,"attrName":"isCheck","attrNbr":"isCheck","attrValueDataType":"1500","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"false","mustFlag":"F","serviceObjAttrId":882189604210556928,"serviceObjectId":882189603396861952,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":874825011070636037,"attrSpec":{"attrId":874825011070636037,"attrName":"nodeValue","attrNbr":"nodeValue","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"营销类","mustFlag":"F","serviceObjAttrId":882189604210556930,"serviceObjectId":882189603396861952,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":877859343021883393,"attrSpec":{"attrId":877859343021883393,"attrName":"catalogType","attrNbr":"catalogType","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"1001","mustFlag":"F","serviceObjAttrId":882189604214751232,"serviceObjectId":882189603396861952,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},{"attrId":874825011070636033,"attrSpec":{"attrId":874825011070636033,"attrName":"parentCode","attrNbr":"parentCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"-1","mustFlag":"F","serviceObjAttrId":882189604214751233,"serviceObjectId":882189603396861952,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"}],"serviceObjectCode":"resultData","serviceObjectId":882189603396861952,"serviceObjectPath":"877545868311805958,882189603396861952","statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"}],"serviceObjectAttrs":[{"attrId":842306878819315712,"attrSpec":{"attrId":842306878819315712,"attrName":"resultCode","attrNbr":"resultCode","attrValueDataType":"1200","busiTypeId":1,"statusCd":"1000"},"compareFlag":true,"createDate":1661936790975,"createStaff":50167,"exampleValue":"0","mustFlag":"F","serviceObjAttrId":882189603417833472,"serviceObjectId":877545868311805958,"statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"}],"serviceObjectCode":"root","serviceObjectId":877545868311805958,"serviceObjectPath":"877545868311805958","statusCd":"1000","statusDate":1661938748767,"tenantCode":"868768414651416576"},"paramObjectId":877545868311805958,"paramType":"5000","statusCd":"1000","statusDate":1660829638886,"tenantCode":"868768414651416576"}]',
                    request: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'header',
                          name: '请求头参数',
                          attrType: 'object',
                        },
                        {
                          code: 'path',
                          name: '请求路径参数',
                          attrType: 'object',
                        },
                        { code: 'query', name: 'URL 参数', attrType: 'object' },
                        {
                          code: 'body',
                          name: '请求体',
                          attrType: 'object',
                          children: [
                            {
                              code: 'isQryAll',
                              name: '新增节点',
                              attrType: 'field',
                              type: '1500',
                              mustFlag: 'F',
                              defaultValue: 'false',
                            },
                            {
                              code: 'parentCatalogCode',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                          ],
                        },
                      ],
                    },
                    response: {
                      code: 'root',
                      name: '根节点',
                      attrType: 'object',
                      children: [
                        {
                          code: 'resultCode',
                          attrType: 'field',
                          type: '1200',
                          mustFlag: 'F',
                        },
                        {
                          code: 'resultData',
                          attrType: 'objectArray',
                          children: [
                            {
                              code: 'nodeKey',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isMatrixSubType',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'isCheck',
                              attrType: 'field',
                              type: '1500',
                              mustFlag: 'F',
                            },
                            {
                              code: 'nodeValue',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'catalogType',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'parentCode',
                              attrType: 'field',
                              type: '1200',
                              mustFlag: 'F',
                            },
                            {
                              code: 'children',
                              attrType: 'objectArray',
                              children: [
                                {
                                  code: 'isCheck',
                                  attrType: 'field',
                                  type: '1500',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'nodeValue',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'catalogType',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'parentCode',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'nodeKey',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'isMatrixSubType',
                                  attrType: 'field',
                                  type: '1200',
                                  mustFlag: 'F',
                                },
                                {
                                  code: 'children',
                                  attrType: 'objectArray',
                                  children: [
                                    {
                                      code: 'isCheck',
                                      attrType: 'field',
                                      type: '1500',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'nodeValue',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'catalogType',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'parentCode',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'children',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'nodeKey',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                    {
                                      code: 'isMatrixSubType',
                                      attrType: 'field',
                                      type: '1200',
                                      mustFlag: 'F',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    productId: '11095',
                    api: '/app/rhin/gateway/callRhinEngine',
                    _source: 'rhin',
                    _serviceId: '877545868169199616',
                    _serviceTitle:
                      '根据父类目编码查询类目数据-tsm: qryCatalogToTreeNodeListByParentCode',
                    _capabilityCode: 'qryCatalogToTreeNodeListByParentCode',
                    _apiCode: 'qryCatalogToTreeNodeListByParentCode',
                    isServiceParam: true,
                    requestType: 'object',
                    responseType: 'object',
                  },
                }}
                treeService={{
                  appId: '871672424566726656',
                  _serviceId: '877545868169199616',
                  _source: 'rhin',
                  api: '/app/rhin/gateway/callRhinEngine',
                  key: 'nodeKey',
                  title: 'nodeValue',
                  children: 'children',
                  selectable: 'isCheck',
                }}
                checkable={false}
                showSearch={true}
                $$componentItem={{
                  id: 'Tree_978091',
                  uid: 'Tree_978091',
                  type: 'Tree',
                  ...componentItem,
                }}
                disabled={false}
                visible={true}
                readOnly={false}
                onSelect={(selectedKeys: any, { node }: any) => {
                  // console 166193901064541440
                  console.log(node?.props?.data);
                  // console 166204055980160300
                  console.log(node?.props?.data?.data?.isCheck);
                  const eventDataifelse525: any = [
                    {
                      type: 'ifelse',
                      condition: [
                        {
                          condId: '9448003',
                          options: {
                            useManual: true,
                            useObject: false,
                            context: '$node.props.data.data.isExclusiveFlow$',
                            manualValue: '1',
                            operate: '==',
                          },
                          conditionType: 'checkContextValue',
                          objType: 'system',
                          objId: 'sys',
                        },
                      ],
                      dataId: 166247607942975460,
                      elseIfs: [
                        {
                          dataName: 'elseIf',
                          dataId: 166247620895376580,
                          children: [
                            {
                              dataName: 'condition',
                              dataId: 166247632487254600,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166247632488561280,
                                  children: [],
                                  todoOptions: ['pathname', 'compState'],
                                  options: {
                                    compId: 'Pageview_99560082',
                                    compLib: 'comm',
                                    pageJsonId: '3361663',
                                    compName: 'Pageview',
                                    id: '9822228',
                                    pathname: '/jzpzfgxlcyjzys',
                                    selectedType: 'page',
                                    paramsObj: {
                                      catalogCode: '$selectedKeys[0]$',
                                      sceneCode: '$selectedKeys[0]$',
                                      sceneId: '$node.props.data.data.nodeId$',
                                      nodeObj: '$node.props.data$',
                                    },
                                    paramsObjKeyValueMap: {
                                      catalogCode: '$selectedKeys[0]$',
                                      sceneCode: '$selectedKeys[0]$',
                                      sceneId: '$node.props.data.data.nodeId$',
                                      nodeObj: '$node.props.data$',
                                    },
                                    pageId: '882205278798561280',
                                    modalPath: '/jzpzfgxlcyjzys',
                                  },
                                  actionObjId: 'Pageview_99560082',
                                  actionObjName: 'Pageview',
                                  value: 'setPageSrc',
                                  compLib: 'comm',
                                  shielding: true,
                                  line_number: 10,
                                },
                                {
                                  dataName: 'action',
                                  dataId: 168594912836760900,
                                  children: [],
                                  todoOptions: ['valueArray'],
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '593743',
                                    pageJsonId: '3361663',
                                    value: [
                                      '$node.props.data$',
                                      '所选节点情况',
                                      '$selectedKeys[0]$',
                                    ],
                                  },
                                  actionObjId: 'debug',
                                  actionObjName: 'system',
                                  value: 'console',
                                  line_number: 11,
                                },
                                {
                                  dataName: 'condition',
                                  dataId: 168636452286906340,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 168636453254751580,
                                      children: [],
                                      todoOptions: ['pathname', 'compState'],
                                      options: {
                                        compId: 'Pageview_99560082',
                                        compLib: 'comm',
                                        pageJsonId: '3361663',
                                        compName: 'Pageview',
                                        id: '297171',
                                        pathname: '/jzpzfgxlcyjzys',
                                        selectedType: 'page',
                                        paramsObj: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        paramsObjKeyValueMap: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        pageId: '882205278798561280',
                                        modalPath: '/jzpzfgxlcyjzys',
                                      },
                                      actionObjId: 'Pageview_99560082',
                                      actionObjName: 'Pageview',
                                      value: 'setPageSrc',
                                      compLib: 'comm',
                                      line_number: 13,
                                    },
                                  ],
                                  elseIfs: [],
                                  condition: [
                                    {
                                      condId: '648497',
                                      options: {
                                        context: '$selectedKeys[0]$',
                                        operate: 'notEmpty',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  value: 'condition',
                                  line_number: 12,
                                },
                              ],
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166247632488532030,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166247632488535400,
                                      children: [],
                                      todoOptions: ['pathname', 'compState'],
                                      options: {
                                        compId: 'Pageview_99560082',
                                        compLib: 'comm',
                                        pageJsonId: '3361663',
                                        compName: 'Pageview',
                                        id: '925825',
                                        pathname: '/jzpzfgxlcwjzys',
                                        selectedType: 'page',
                                        paramsObj: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        paramsObjKeyValueMap: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        pageId: '881842702843727872',
                                        modalPath: '/jzpzfgxlcwjzys',
                                      },
                                      actionObjId: 'Pageview_99560082',
                                      actionObjName: 'Pageview',
                                      value: 'setPageSrc',
                                      compLib: 'comm',
                                      shielding: true,
                                      line_number: 14,
                                    },
                                    {
                                      dataName: 'condition',
                                      dataId: 168636544711646180,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 168636545428109440,
                                          children: [],
                                          todoOptions: [
                                            'pathname',
                                            'compState',
                                          ],
                                          options: {
                                            compId: 'Pageview_99560082',
                                            compLib: 'comm',
                                            pageJsonId: '3361663',
                                            compName: 'Pageview',
                                            id: '883546',
                                            pathname: '/jzpzfgxlcwjzys',
                                            selectedType: 'page',
                                            paramsObj: {
                                              catalogCode: '$selectedKeys[0]$',
                                              sceneCode: '$selectedKeys[0]$',
                                              sceneId:
                                                '$node.props.data.data.nodeId$',
                                              nodeObj: '$node.props.data$',
                                            },
                                            paramsObjKeyValueMap: {
                                              catalogCode: '$selectedKeys[0]$',
                                              sceneCode: '$selectedKeys[0]$',
                                              sceneId:
                                                '$node.props.data.data.nodeId$',
                                              nodeObj: '$node.props.data$',
                                            },
                                            pageId: '881842702843727872',
                                            modalPath: '/jzpzfgxlcwjzys',
                                          },
                                          actionObjId: 'Pageview_99560082',
                                          actionObjName: 'Pageview',
                                          value: 'setPageSrc',
                                          compLib: 'comm',
                                          line_number: 16,
                                        },
                                      ],
                                      elseIfs: [],
                                      condition: [
                                        {
                                          condId: '648497',
                                          options: {
                                            context: '$selectedKeys[0]$',
                                            operate: 'notEmpty',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      value: 'condition',
                                      line_number: 15,
                                    },
                                  ],
                                  condition: [],
                                  desc: 'isContainsMatrixAttr = 0 不包含矩阵要素',
                                  callback: [
                                    {
                                      type: 'setPageSrc',
                                      dataId: 166247632488535400,
                                      shielding: true,
                                      options: {
                                        compId: 'Pageview_99560082',
                                        compLib: 'comm',
                                        pageJsonId: '3361663',
                                        compName: 'Pageview',
                                        id: '925825',
                                        pathname: '/jzpzfgxlcwjzys',
                                        selectedType: 'page',
                                        paramsObj: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        paramsObjKeyValueMap: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        pageId: '881842702843727872',
                                        modalPath: '/jzpzfgxlcwjzys',
                                      },
                                      line_number: 14,
                                    },
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '648497',
                                          options: {
                                            context: '$selectedKeys[0]$',
                                            operate: 'notEmpty',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 168636544711646180,
                                      elseIfs: [],
                                      line_number: 15,
                                      callback1: [
                                        {
                                          type: 'setPageSrc',
                                          dataId: 168636545428109440,
                                          options: {
                                            compId: 'Pageview_99560082',
                                            compLib: 'comm',
                                            pageJsonId: '3361663',
                                            compName: 'Pageview',
                                            id: '883546',
                                            pathname: '/jzpzfgxlcwjzys',
                                            selectedType: 'page',
                                            paramsObj: {
                                              catalogCode: '$selectedKeys[0]$',
                                              sceneCode: '$selectedKeys[0]$',
                                              sceneId:
                                                '$node.props.data.data.nodeId$',
                                              nodeObj: '$node.props.data$',
                                            },
                                            paramsObjKeyValueMap: {
                                              catalogCode: '$selectedKeys[0]$',
                                              sceneCode: '$selectedKeys[0]$',
                                              sceneId:
                                                '$node.props.data.data.nodeId$',
                                              nodeObj: '$node.props.data$',
                                            },
                                            pageId: '881842702843727872',
                                            modalPath: '/jzpzfgxlcwjzys',
                                          },
                                          line_number: 16,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              condition: [
                                {
                                  condId: '979805',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context:
                                      '$node.props.data.data.isContainsMatrixAttr$',
                                    operate: '==',
                                    manualValue: '1',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              desc: 'isContainsMatrixAttr = 1 包含矩阵要素',
                              line_number: 9,
                            },
                          ],
                          condition: [],
                          desc: 'isExclusiveFlow = 0 不是个性流程',
                          callback: [
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '979805',
                                  options: {
                                    useManual: true,
                                    useObject: false,
                                    context:
                                      '$node.props.data.data.isContainsMatrixAttr$',
                                    operate: '==',
                                    manualValue: '1',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 166247632487254600,
                              elseIfs: [
                                {
                                  dataName: 'elseIf',
                                  dataId: 166247632488532030,
                                  children: [
                                    {
                                      dataName: 'action',
                                      dataId: 166247632488535400,
                                      children: [],
                                      todoOptions: ['pathname', 'compState'],
                                      options: {
                                        compId: 'Pageview_99560082',
                                        compLib: 'comm',
                                        pageJsonId: '3361663',
                                        compName: 'Pageview',
                                        id: '925825',
                                        pathname: '/jzpzfgxlcwjzys',
                                        selectedType: 'page',
                                        paramsObj: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        paramsObjKeyValueMap: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        pageId: '881842702843727872',
                                        modalPath: '/jzpzfgxlcwjzys',
                                      },
                                      actionObjId: 'Pageview_99560082',
                                      actionObjName: 'Pageview',
                                      value: 'setPageSrc',
                                      compLib: 'comm',
                                      shielding: true,
                                      line_number: 14,
                                    },
                                    {
                                      dataName: 'condition',
                                      dataId: 168636544711646180,
                                      children: [
                                        {
                                          dataName: 'action',
                                          dataId: 168636545428109440,
                                          children: [],
                                          todoOptions: [
                                            'pathname',
                                            'compState',
                                          ],
                                          options: {
                                            compId: 'Pageview_99560082',
                                            compLib: 'comm',
                                            pageJsonId: '3361663',
                                            compName: 'Pageview',
                                            id: '883546',
                                            pathname: '/jzpzfgxlcwjzys',
                                            selectedType: 'page',
                                            paramsObj: {
                                              catalogCode: '$selectedKeys[0]$',
                                              sceneCode: '$selectedKeys[0]$',
                                              sceneId:
                                                '$node.props.data.data.nodeId$',
                                              nodeObj: '$node.props.data$',
                                            },
                                            paramsObjKeyValueMap: {
                                              catalogCode: '$selectedKeys[0]$',
                                              sceneCode: '$selectedKeys[0]$',
                                              sceneId:
                                                '$node.props.data.data.nodeId$',
                                              nodeObj: '$node.props.data$',
                                            },
                                            pageId: '881842702843727872',
                                            modalPath: '/jzpzfgxlcwjzys',
                                          },
                                          actionObjId: 'Pageview_99560082',
                                          actionObjName: 'Pageview',
                                          value: 'setPageSrc',
                                          compLib: 'comm',
                                          line_number: 16,
                                        },
                                      ],
                                      elseIfs: [],
                                      condition: [
                                        {
                                          condId: '648497',
                                          options: {
                                            context: '$selectedKeys[0]$',
                                            operate: 'notEmpty',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      value: 'condition',
                                      line_number: 15,
                                    },
                                  ],
                                  condition: [],
                                  desc: 'isContainsMatrixAttr = 0 不包含矩阵要素',
                                  callback: [
                                    {
                                      type: 'setPageSrc',
                                      dataId: 166247632488535400,
                                      shielding: true,
                                      options: {
                                        compId: 'Pageview_99560082',
                                        compLib: 'comm',
                                        pageJsonId: '3361663',
                                        compName: 'Pageview',
                                        id: '925825',
                                        pathname: '/jzpzfgxlcwjzys',
                                        selectedType: 'page',
                                        paramsObj: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        paramsObjKeyValueMap: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        pageId: '881842702843727872',
                                        modalPath: '/jzpzfgxlcwjzys',
                                      },
                                      line_number: 14,
                                    },
                                    {
                                      type: 'ifelse',
                                      condition: [
                                        {
                                          condId: '648497',
                                          options: {
                                            context: '$selectedKeys[0]$',
                                            operate: 'notEmpty',
                                          },
                                          conditionType: 'checkContextValue',
                                          objType: 'system',
                                          objId: 'sys',
                                        },
                                      ],
                                      dataId: 168636544711646180,
                                      elseIfs: [],
                                      line_number: 15,
                                      callback1: [
                                        {
                                          type: 'setPageSrc',
                                          dataId: 168636545428109440,
                                          options: {
                                            compId: 'Pageview_99560082',
                                            compLib: 'comm',
                                            pageJsonId: '3361663',
                                            compName: 'Pageview',
                                            id: '883546',
                                            pathname: '/jzpzfgxlcwjzys',
                                            selectedType: 'page',
                                            paramsObj: {
                                              catalogCode: '$selectedKeys[0]$',
                                              sceneCode: '$selectedKeys[0]$',
                                              sceneId:
                                                '$node.props.data.data.nodeId$',
                                              nodeObj: '$node.props.data$',
                                            },
                                            paramsObjKeyValueMap: {
                                              catalogCode: '$selectedKeys[0]$',
                                              sceneCode: '$selectedKeys[0]$',
                                              sceneId:
                                                '$node.props.data.data.nodeId$',
                                              nodeObj: '$node.props.data$',
                                            },
                                            pageId: '881842702843727872',
                                            modalPath: '/jzpzfgxlcwjzys',
                                          },
                                          line_number: 16,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              line_number: 9,
                              callback1: [
                                {
                                  type: 'setPageSrc',
                                  dataId: 166247632488561280,
                                  shielding: true,
                                  options: {
                                    compId: 'Pageview_99560082',
                                    compLib: 'comm',
                                    pageJsonId: '3361663',
                                    compName: 'Pageview',
                                    id: '9822228',
                                    pathname: '/jzpzfgxlcyjzys',
                                    selectedType: 'page',
                                    paramsObj: {
                                      catalogCode: '$selectedKeys[0]$',
                                      sceneCode: '$selectedKeys[0]$',
                                      sceneId: '$node.props.data.data.nodeId$',
                                      nodeObj: '$node.props.data$',
                                    },
                                    paramsObjKeyValueMap: {
                                      catalogCode: '$selectedKeys[0]$',
                                      sceneCode: '$selectedKeys[0]$',
                                      sceneId: '$node.props.data.data.nodeId$',
                                      nodeObj: '$node.props.data$',
                                    },
                                    pageId: '882205278798561280',
                                    modalPath: '/jzpzfgxlcyjzys',
                                  },
                                  line_number: 10,
                                },
                                {
                                  type: 'console',
                                  dataId: 168594912836760900,
                                  options: {
                                    compId: 'debug',
                                    compName: 'system',
                                    id: '593743',
                                    pageJsonId: '3361663',
                                    value: [
                                      '$node.props.data$',
                                      '所选节点情况',
                                      '$selectedKeys[0]$',
                                    ],
                                  },
                                  line_number: 11,
                                },
                                {
                                  type: 'ifelse',
                                  condition: [
                                    {
                                      condId: '648497',
                                      options: {
                                        context: '$selectedKeys[0]$',
                                        operate: 'notEmpty',
                                      },
                                      conditionType: 'checkContextValue',
                                      objType: 'system',
                                      objId: 'sys',
                                    },
                                  ],
                                  dataId: 168636452286906340,
                                  elseIfs: [],
                                  line_number: 12,
                                  callback1: [
                                    {
                                      type: 'setPageSrc',
                                      dataId: 168636453254751580,
                                      options: {
                                        compId: 'Pageview_99560082',
                                        compLib: 'comm',
                                        pageJsonId: '3361663',
                                        compName: 'Pageview',
                                        id: '297171',
                                        pathname: '/jzpzfgxlcyjzys',
                                        selectedType: 'page',
                                        paramsObj: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        paramsObjKeyValueMap: {
                                          catalogCode: '$selectedKeys[0]$',
                                          sceneCode: '$selectedKeys[0]$',
                                          sceneId:
                                            '$node.props.data.data.nodeId$',
                                          nodeObj: '$node.props.data$',
                                        },
                                        pageId: '882205278798561280',
                                        modalPath: '/jzpzfgxlcyjzys',
                                      },
                                      line_number: 13,
                                    },
                                  ],
                                },
                              ],
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
                              condId: '979805',
                              options: {
                                useManual: true,
                                useObject: false,
                                context:
                                  '$node.props.data.data.isContainsMatrixAttr$',
                                operate: '==',
                                manualValue: '1',
                              },
                              conditionType: 'checkContextValue',
                              objType: 'system',
                              objId: 'sys',
                            },
                          ],
                          dataId: 166247623449044770,
                          elseIfs: [
                            {
                              dataName: 'elseIf',
                              dataId: 166247628816835100,
                              children: [
                                {
                                  dataName: 'action',
                                  dataId: 166247637942130100,
                                  children: [],
                                  todoOptions: ['msgType', 'value'],
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '875106',
                                    pageJsonId: '3361663',
                                    type: 'info',
                                    value:
                                      '该场景是个性流程且不包含矩阵要素，暂不支持！',
                                  },
                                  actionObjId: 'showMessage',
                                  actionObjName: 'system',
                                  value: 'showMessage',
                                  line_number: 8,
                                },
                              ],
                              condition: [],
                              desc: 'isContainsMatrixAttr = 0 不包含矩阵要素',
                              callback: [
                                {
                                  type: 'showMessage',
                                  dataId: 166247637942130100,
                                  options: {
                                    compId: 'showMessage',
                                    compName: 'system',
                                    id: '875106',
                                    pageJsonId: '3361663',
                                    type: 'info',
                                    value:
                                      '该场景是个性流程且不包含矩阵要素，暂不支持！',
                                  },
                                  line_number: 8,
                                },
                              ],
                            },
                          ],
                          line_number: 4,
                          callback1: [
                            {
                              type: 'setPageSrc',
                              dataId: 166247630264960450,
                              shielding: true,
                              options: {
                                compId: 'Pageview_99560082',
                                compLib: 'comm',
                                pageJsonId: '3361663',
                                compName: 'Pageview',
                                id: '5933192',
                                pathname: '/jzpzgxlcyjzys',
                                selectedType: 'page',
                                paramsObj: {
                                  catalogCode: '$selectedKeys[0]$',
                                  sceneCode: '$selectedKeys[0]$',
                                  sceneId: '$node.props.data.data.nodeId$',
                                  nodeObj: '$node.props.data$',
                                },
                                paramsObjKeyValueMap: {
                                  catalogCode: '$selectedKeys[0]$',
                                  sceneCode: '$selectedKeys[0]$',
                                  sceneId: '$node.props.data.data.nodeId$',
                                  nodeObj: '$node.props.data$',
                                },
                                pageId: '884348245488148480',
                                modalPath: '/jzpzgxlcyjzys',
                              },
                              line_number: 5,
                            },
                            {
                              type: 'ifelse',
                              condition: [
                                {
                                  condId: '648497',
                                  options: {
                                    context: '$selectedKeys[0]$',
                                    operate: 'notEmpty',
                                  },
                                  conditionType: 'checkContextValue',
                                  objType: 'system',
                                  objId: 'sys',
                                },
                              ],
                              dataId: 168636463313871870,
                              elseIfs: [],
                              line_number: 6,
                              callback1: [
                                {
                                  type: 'setPageSrc',
                                  dataId: 168636464058765980,
                                  options: {
                                    compId: 'Pageview_99560082',
                                    compLib: 'comm',
                                    pageJsonId: '3361663',
                                    compName: 'Pageview',
                                    id: '65432',
                                    pathname: '/jzpzgxlcyjzys',
                                    selectedType: 'page',
                                    paramsObj: {
                                      catalogCode: '$selectedKeys[0]$',
                                      sceneCode: '$selectedKeys[0]$',
                                      sceneId: '$node.props.data.data.nodeId$',
                                      nodeObj: '$node.props.data$',
                                    },
                                    paramsObjKeyValueMap: {
                                      catalogCode: '$selectedKeys[0]$',
                                      sceneCode: '$selectedKeys[0]$',
                                      sceneId: '$node.props.data.data.nodeId$',
                                      nodeObj: '$node.props.data$',
                                    },
                                    pageId: '884348245488148480',
                                    modalPath: '/jzpzgxlcyjzys',
                                  },
                                  line_number: 7,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ];
                  eventDataifelse525.params =
                    [
                      {
                        title: '节点key(单选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys[0]$',
                        label: '节点key(单选)',
                      },
                      {
                        title: '节点keys(多选)',
                        name: 'selectedKeys',
                        value: '$selectedKeys$',
                        label: '节点keys(多选)',
                      },
                      {
                        title: '节点数据',
                        name: '{ node }',
                        value: '$node.props.data$',
                        attrType: 'object',
                        label: '节点数据',
                      },
                    ] || [];
                  CMDGenerator(
                    eventDataifelse525,
                    { selectedKeys, node },
                    'ifelse',
                    {
                      id: 'ifelse',
                      name: 'ifelse',
                      type: 'ifelse',
                      platform: 'pc',
                    },
                  );
                }}
                ref={(r: any) => refs.setComponentRef(r, 'Tree_978091')}
                {...injectData}
              />
            </Card>
          </View>
          <View
            className="View_View_8830146"
            name={'布局容器'}
            $$componentItem={{
              id: 'View_8830146',
              uid: 'View_8830146',
              type: 'View',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{
              display: 'block',
              padding: '0px 0px 0px 0px',
              width: '100%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_8830146')}
            {...injectData}
          >
            <Pageview
              name={'页面容器'}
              pageViewCompState={{}}
              pageSrc={'/gonggongshenpijibietishiyu'}
              pageId={'882436135732752384'}
              style={{ height: '100%', width: '100%' }}
              ref={(r: any) => refs.setComponentRef(r, 'Pageview_99560082')}
              {...injectData}
              parentEngineId={parentEngineId}
            />
          </View>
        </HorizontalView>
      </View>
    </div>
  );
};

export default withPageHOC(SceneMatrixManage$$Page, {
  pageId,
  hasLogin: false,
  dataSource,
  defaultState: {},
});
