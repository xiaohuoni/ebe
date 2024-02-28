// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { Description } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import dataSource from './dataSource.json';

const pageId = '887951573912219648';
const BusiComp371631$$BusiComp: React.FC<PageProps> = ({
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
    const eventDatacustomActionCode: any = [
      {
        type: 'customActionCode',
        dataId: 166331041399530000,
        options: {
          compId: 'customActionCode',
          compName: 'page',
          id: '8612794',
          pageJsonId: '371631',
          code: 'function main(data,state,success,fail){data.bankAccount=state.bankAccount;success()};',
        },
        line_number: 1,
        callback1: [
          {
            type: 'setDataSource',
            dataId: 166331043869274180,
            options: {
              compId: 'setDataSource',
              compName: 'page',
              id: '549767',
              pageJsonId: '371631',
              dataSourceId: 166331037861203940,
              dataSourceName: 'bankAccount',
              dataSourceRelType: 'custom',
              dataSourceReloadFilter: [],
              dataSourceSetValue: [
                {
                  code: 'isGovEnterprise',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '是否政企专户',
                  defaultValue: '',
                  name: '是否政企专户',
                  attrId: '48437',
                  initialData: { type: 'static', value: '是否政企专户' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'payeeAcctCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '收款方账号',
                  defaultValue: '',
                  name: '收款方账号',
                  attrId: '0761343',
                  initialData: { type: 'static', value: '收款方账号' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'payeeAcctName',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '收款方户名',
                  defaultValue: '',
                  name: '收款方户名',
                  attrId: '31429',
                  initialData: { type: 'static', value: '收款方户名' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'paymentAcctCode',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '账户方账号',
                  defaultValue: '',
                  name: '账户方账号',
                  attrId: '450593',
                  initialData: { type: 'static', value: '账户方账号' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'paymentAcctName',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '转账方户名',
                  defaultValue: '',
                  name: '转账方户名',
                  attrId: '328941',
                  initialData: { type: 'static', value: '转账方户名' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'paymentBankName',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '转账方银行',
                  defaultValue: '',
                  name: '转账方银行',
                  attrId: '035588',
                  initialData: { type: 'static', value: '转账方银行' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'postscript',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '附言',
                  defaultValue: '',
                  name: '附言',
                  attrId: '1508282',
                  initialData: { type: 'static', value: '附言' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'summary',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '摘要',
                  defaultValue: '',
                  name: '摘要',
                  attrId: '707428',
                  initialData: { type: 'static', value: '摘要' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'tradeAmount',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '交易金额（元）',
                  defaultValue: '',
                  name: '交易金额（元）',
                  attrId: '234074',
                  initialData: { type: 'static', value: '交易金额（元）' },
                  parentKey: '1',
                  parentType: 'object',
                },
                {
                  code: 'tradeTime',
                  attrType: 'field',
                  type: 'string',
                  mustFlag: 'F',
                  exampleValue: '交易时间',
                  defaultValue: '',
                  name: '交易时间',
                  attrId: '9655165',
                  initialData: { type: 'static', value: '交易时间' },
                  parentKey: '1',
                  parentType: 'object',
                },
              ],
              operateType: 1,
              onlySetPatch: true,
              otherObjectArrayOptions: {},
            },
            line_number: 2,
            callback1: [],
            callback2: [],
          },
        ],
        callback2: [],
      },
    ];
    eventDatacustomActionCode.params = [] || [];
    CMDGenerator(eventDatacustomActionCode, {}, 'customActionCode', {
      id: 'customActionCode',
      name: 'customActionCode',
      type: 'customActionCode',
      platform: 'undefined',
    });
  });

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_371631__"
    >
      <Description
        name={'描述列表'}
        visible={true}
        columns={[
          {
            title: '转账方户名',
            key: 'paymentAcctName',
            dataIndex: 'paymentAcctName',
            label: '转账方户名',
            id: '9630972',
            customRendering: undefined,
          },
          {
            title: '转账方银行',
            key: 'paymentBankName',
            dataIndex: 'paymentBankName',
            label: '转账方银行',
            id: '445916',
            customRendering: undefined,
          },
          {
            title: '账户方账号',
            key: 'paymentAcctCode',
            dataIndex: 'paymentAcctCode',
            label: '账户方账号',
            id: '5403',
            customRendering: undefined,
          },
          {
            title: '交易时间',
            key: 'tradeTime',
            dataIndex: 'tradeTime',
            label: '交易时间',
            id: '9078628',
            customRendering: undefined,
          },
          {
            title: '交易金额（元）',
            key: 'tradeAmount',
            dataIndex: 'tradeAmount',
            label: '交易金额(元)',
            id: '10351',
            customRendering: undefined,
          },
          {
            title: '摘要',
            key: 'summary',
            dataIndex: 'summary',
            label: '摘要',
            id: '3947914',
            customRendering: undefined,
          },
          {
            title: '附言',
            key: 'postscript',
            dataIndex: 'postscript',
            label: '附言',
            id: '437975',
            span: 24,
            customRendering: undefined,
          },
          {
            title: '收款方户名',
            key: 'payeeAcctName',
            dataIndex: 'payeeAcctName',
            label: '收款方户名',
            id: '474279',
            customRendering: undefined,
          },
          {
            title: '收款方账号',
            key: 'payeeAcctCode',
            dataIndex: 'payeeAcctCode',
            label: '收款方账号',
            id: '129715',
            customRendering: undefined,
          },
          {
            title: '是否政企专户',
            key: 'isGovEnterprise',
            dataIndex: 'isGovEnterprise',
            label: '是否政企专户',
            id: '113371',
            customRendering: undefined,
          },
        ]}
        bordered={false}
        labelWidth={undefined}
        colSpan={8}
        colon={true}
        labelAlign={'left'}
        dataSource={data?.bankAccount}
        descColumns={[
          {
            title: '转账方户名',
            key: 'paymentAcctName',
            dataIndex: 'paymentAcctName',
            label: '转账方户名',
            id: '9630972',
          },
          {
            title: '转账方银行',
            key: 'paymentBankName',
            dataIndex: 'paymentBankName',
            label: '转账方银行',
            id: '445916',
          },
          {
            title: '账户方账号',
            key: 'paymentAcctCode',
            dataIndex: 'paymentAcctCode',
            label: '账户方账号',
            id: '5403',
          },
          {
            title: '交易时间',
            key: 'tradeTime',
            dataIndex: 'tradeTime',
            label: '交易时间',
            id: '9078628',
          },
          {
            title: '交易金额（元）',
            key: 'tradeAmount',
            dataIndex: 'tradeAmount',
            label: '交易金额(元)',
            id: '10351',
          },
          {
            title: '摘要',
            key: 'summary',
            dataIndex: 'summary',
            label: '摘要',
            id: '3947914',
          },
          {
            title: '附言',
            key: 'postscript',
            dataIndex: 'postscript',
            label: '附言',
            id: '437975',
            span: 24,
          },
          {
            title: '收款方户名',
            key: 'payeeAcctName',
            dataIndex: 'payeeAcctName',
            label: '收款方户名',
            id: '474279',
          },
          {
            title: '收款方账号',
            key: 'payeeAcctCode',
            dataIndex: 'payeeAcctCode',
            label: '收款方账号',
            id: '129715',
          },
          {
            title: '是否政企专户',
            key: 'isGovEnterprise',
            dataIndex: 'isGovEnterprise',
            label: '是否政企专户',
            id: '113371',
          },
        ]}
        labelSize={'120px'}
        $$componentItem={{
          id: 'Description_6207903',
          uid: 'Description_6207903',
          type: 'Description',
          ...componentItem,
        }}
        ref={(r: any) => refs.setComponentRef(r, 'Description_6207903')}
        {...injectData}
      />
    </div>
  );
};

export default withPageHOC(BusiComp371631$$BusiComp, {
  pageId,
  hasLogin: true,
  dataSource,
  defaultState: { bankAccount: '' },
});
