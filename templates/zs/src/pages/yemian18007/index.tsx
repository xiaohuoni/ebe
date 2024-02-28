// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, Card, Form, Input, Button } from '@/components/factory';

import Pageview from '@/components/Pageview';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '917739110552064000';
const Yemian18007$$Page: React.FC<PageProps> = ({
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

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_5210986__"
    >
      <View
        className="View_View_5210986_1"
        name={'页面'}
        $$componentItem={{
          id: 'View_5210986_1',
          uid: 'View_5210986_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_5210986_1')}
        {...injectData}
      >
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          extendNum={3}
          title={'表单-页面'}
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
            id: 'Card_485027',
            uid: 'Card_485027',
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
          ref={(r: any) => refs.setComponentRef(r, 'Card_485027')}
          {...injectData}
        >
          <Pageview
            name={'页面容器'}
            pageViewCompState={{}}
            pageSrc={'/biaodan2899'}
            pageId={'917738986538536960'}
            style={{ height: 'auto', width: '100%' }}
            ref={(r: any) => refs.setComponentRef(r, 'Pageview_217088')}
            {...injectData}
            parentEngineId={parentEngineId}
          />
        </Card>
        <Card
          name={'卡片'}
          cardIconType={'middle'}
          extendNum={3}
          title={'页面1（复制）'}
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
            id: 'Card_0889776',
            uid: 'Card_0889776',
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
          ref={(r: any) => refs.setComponentRef(r, 'Card_0889776')}
          {...injectData}
        >
          <Pageview
            name={'页面容器'}
            pageViewCompState={{}}
            pageSrc={'/yemian18007copy'}
            pageId={'917740319912513536'}
            style={{ height: 'auto', width: '100%' }}
            ref={(r: any) => refs.setComponentRef(r, 'Pageview_020085')}
            {...injectData}
            parentEngineId={parentEngineId}
          />
        </Card>
        <Form
          name={'表单'}
          colSpan={8}
          labelCol={8}
          wrapperCol={16}
          colon={true}
          layout={'vertical'}
          labelAlign={'right'}
          header={'标题'}
          colSpace={16}
          rowSpace={16}
          formCode={'Form_26087'}
          $$componentItem={{
            id: 'Form_26087_909456',
            uid: 'Form_26087_909456',
            type: 'Form',
            ...componentItem,
          }}
          disabled={false}
          visible={true}
          readOnly={false}
          style={{ padding: '0px 0px 0px 0px' }}
          ref={(r: any) => refs.setComponentRef(r, 'Form_26087_909456')}
          {...injectData}
        >
          <Input
            name={'页面1 控件'}
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
            fieldName={'a'}
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
              id: 'Input_3307815_86359934',
              uid: 'Input_3307815_86359934',
              type: 'Input',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            ref={(r: any) => refs.setComponentRef(r, 'Input_3307815_86359934')}
            {...injectData}
          />
          <Button
            name={'按钮'}
            shape={null}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            disabled={false}
            type={'default'}
            labelCol={8}
            wrapperCol={16}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_522422',
              uid: 'Button_522422',
              type: 'Button',
              ...componentItem,
            }}
            visible={true}
            readOnly={false}
            isFormRootChild={true}
            schema={{
              compType: 1,
              props: {
                formItemIndex: 1,
                style: undefined,
                selfSpan: undefined,
              },
            }}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDataapiRequest747: any = [
                {
                  type: 'apiRequest',
                  dataId: 169986665214508160,
                  options: {
                    compId: 'apiRequest',
                    compName: 'system',
                    id: '201211',
                    pageJsonId: '5210986',
                    sync: false,
                    method: 'post',
                    url: '/app/rhin/gateway/callRhinEngine',
                    _capabilityCode: 'qryTestService',
                    _apiCode: 'qryTestService',
                    _source: 'rhin',
                    _sourceName: '测试服务-tsm',
                    _serviceId: '1041278455666233344',
                    _serviceTitle: '测试服务-tsm: qryTestService',
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
                            dataKey: '201211_root.header',
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
                            dataKey: '201211_root.path',
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
                            dataKey: '201211_root.query',
                          },
                          {
                            code: 'body',
                            name: '请求体',
                            attrType: 'object',
                            children: [
                              {
                                code: 'name',
                                name: '新增节点',
                                attrType: 'field',
                                type: 'string',
                                mustFlag: 'F',
                                defaultValue: '',
                                _id: 'root.body.name',
                                compType: 'Input',
                                parents: ['root', 'body'],
                                parentType: 'object',
                                parentKey: '0-3',
                                key: '0-3-0',
                                id: 'root.body.name',
                                dataKey: '201211_root.body.name',
                                value: { type: ['customize'], code: '田善铭' },
                              },
                            ],
                            _id: 'root.body',
                            compType: 'Input',
                            parents: ['root'],
                            parentType: 'object',
                            parentKey: '0',
                            key: '0-3',
                            id: 'root.body',
                            dataKey: '201211_root.body',
                          },
                        ],
                        _id: 'root',
                        compType: 'Input',
                        isRoot: true,
                        parents: [],
                        key: '0',
                        id: 'root',
                        dataKey: '201211_root',
                      },
                    ],
                  },
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventDataapiRequest747.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDataapiRequest747, { e }, 'apiRequest', {
                id: 'apiRequest',
                name: 'apiRequest',
                type: 'apiRequest',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_522422')}
            {...injectData}
          />
        </Form>
      </View>
    </div>
  );
};

export default withPageHOC(Yemian18007$$Page, {
  pageId,
  hasLogin: false,
  defaultState: {},
});
