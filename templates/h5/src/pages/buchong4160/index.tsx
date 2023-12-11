// 注意: 出码模块正在调试
import React from 'react';

import {
  Button,
  DForm,
  DformInput,
  DformList,
  Icon,
  Text,
  View,
} from '@lingxiteam/factory/es/index.component';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { setPageNavBar } from 'alita';

const Buchong4160$$Page: React.FC<PageProps> = ({
  data,
  CMDGenerator,
  injectData,
  refs,
  state,
  functorsMap,
  getValue,
  componentItem,
  style,
}) => {
  useEffect(() => {
    setPageNavBar({
      pagePath: '/buchong4160',
      navBar: {
        pageTitle: 'buchong',
        hideNavBar: false,
      },
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div style={style}>
      <View
        name={'页面'}
        backgroundType={{ type: 'cleanColor', color: 'rgba(255, 255, 255, 1)' }}
        $$componentItem={{
          id: 'View_072186_1',
          uid: 'View_072186_1',
          type: 'View',
          ...componentItem,
        }}
        visible={true}
        style={{
          height: '100%',
          display: 'block',
          padding: '12px 12px 12px 12px',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
        ref={(r: any) => (refs['View_072186_1'] = r)}
        {...injectData}
      >
        <DForm
          name={'表单'}
          formCode={'DForm_6775836'}
          autoLineFeed={true}
          failScroll={true}
          errorFlag={true}
          hiddenBorder={'0'}
          itemHasStar={true}
          genRuleType={'key'}
          formType={'normal'}
          relationDataSource={data?.nothing}
          $$componentItem={{
            id: 'DForm_6775836',
            uid: 'DForm_6775836',
            type: 'DForm',
            ...componentItem,
          }}
          visible={true}
          style={{ width: 'auto' }}
          onValuesChange={(...args: unknown[]) => {
            const eventData: any = [
              {
                type: 'setDataSource',
                dataId: 170227657938980320,
                options: {
                  compId: 'page',
                  compName: 'page',
                  id: '524439',
                  pageJsonId: '072186',
                  dataSourceId: '170227655613979650',
                  dataSourceName: 'nothing',
                  dataSourceRelType: 'custom',
                  dataSourceReloadFilter: [],
                  dataSourceSetValue: [
                    {
                      attrId: '2606065',
                      code: 'param',
                      name: '属性',
                      type: 'string',
                      initialData: { type: 'static', value: '123' },
                      showInput: true,
                      value: { type: ['customize'], code: '$allValues.param$' },
                    },
                  ],
                  onlySetPatch: true,
                },
                path: [170227657938978880],
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventData.params =
              [
                {
                  title: '变化值',
                  value: '$values$',
                  name: 'values',
                  attrType: 'object',
                },
                {
                  title: '表单所有值',
                  value: '$allValues$',
                  name: 'allValues',
                  attrType: 'object',
                },
              ] || [];
            CMDGenerator(eventData, args, 'onValuesChange', {
              id: 'DForm_6775836',
              name: 'DForm_6775836',
              type: 'DForm',
              platform: 'h5',
            });
          }}
          ref={(r: any) => (refs['DForm_6775836'] = r)}
          {...injectData}
        >
          <DformList
            name={'表单增删控件'}
            formListType={'list'}
            defaultValue={data?.pageTsData}
            title={'随行人员'}
            status={'1'}
            fieldProps={'er'}
            uniqueField={'err'}
            $$componentItem={{
              id: 'DformList_84924',
              uid: 'DformList_84924',
              type: 'DformList',
              ...componentItem,
            }}
            visible={true}
            disabled={false}
            readOnly={false}
            style={{ margin: '10px 0 0 0' }}
            onClick={(...args: unknown[]) => {
              const eventData: any = [
                {
                  type: 'setDataSource',
                  dataId: 170227694058930180,
                  options: {
                    compId: 'setDataSource',
                    compName: 'system',
                    id: '3011143',
                    pageJsonId: '072186',
                    dataSourceId: 170227692020044350,
                    dataSourceName: 'pageTsData',
                    dataSourceRelType: 'custom',
                    dataSourceSetValue: [
                      {
                        attrId: '985469',
                        code: 'param',
                        name: '属性',
                        type: 'string',
                        initialData: { type: 'static' },
                        showInput: false,
                        value: { type: ['customize'], code: '1' },
                      },
                    ],
                    operateType: 0,
                    onlySetPatch: true,
                    otherObjectArrayOptions: {},
                    targetDataSourcePaths: [],
                  },
                  path: [170227693863192350],
                  line_number: 1,
                  callback1: [],
                  callback2: [],
                },
              ];
              eventData.params = [] || [];
              CMDGenerator(eventData, args, 'onClick', {
                id: 'DformList_84924',
                name: 'DformList_84924',
                type: 'DformList',
                platform: 'h5',
              });
            }}
            ref={(r: any) => (refs['DformList_84924'] = r)}
            {...injectData}
            getEngineApis={() => {
              return {
                ...injectData.getEngineApis(),
                MemoRenderer: {
                  renderer: null,
                  MemoLoopItem: (props: any) => {
                    const item = props[props.itemKey];
                    const i = props[props.indexKey];
                    return (
                      <>
                        <View
                          name={'布局容器1'}
                          visible={true}
                          backgroundType={{
                            type: 'cleanColor',
                            color: '#F0F9FF',
                          }}
                          $$componentItem={{
                            id: 'View_375119',
                            uid: 'View_375119',
                            type: 'View',
                            ...componentItem,
                          }}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '10px 20px 10px 12px',
                            width: '100%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            borderRadius: 6,
                            margin: '12px 0px 0px 0px',
                            alignItems: 'center',
                          }}
                          ref={(r: any) => (refs['View_375119'] = r)}
                          {...injectData}
                        >
                          <View
                            name={'布局容器2'}
                            visible={true}
                            $$componentItem={{
                              id: 'View_905979',
                              uid: 'View_905979',
                              type: 'View',
                              ...componentItem,
                            }}
                            style={{
                              display: 'block',
                              padding: '0',
                              width: 'auto',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                              flex: 1,
                              margin: 0,
                            }}
                            ref={(r: any) => (refs['View_905979'] = r)}
                            {...injectData}
                          >
                            <Text
                              name={'文本输入'}
                              children={'李霄云'}
                              $$componentItem={{
                                id: 'Text_483519',
                                uid: 'Text_483519',
                                type: 'Text',
                                ...componentItem,
                              }}
                              visible={true}
                              style={{
                                color: '#333',
                                fontSize: 14,
                                fontWeight: 600,
                                margin: '0px 10px 0px 0px',
                              }}
                              ref={(r: any) => (refs['Text_483519'] = r)}
                              {...injectData}
                            />
                            <Text
                              name={'文本输入'}
                              children={i?.param}
                              showHtml={false}
                              $$componentItem={{
                                id: 'Text_641937',
                                uid: 'Text_641937',
                                type: 'Text',
                                ...componentItem,
                              }}
                              visible={true}
                              style={{
                                color: '#333',
                                fontSize: 14,
                                fontWeight: 600,
                                margin: '0px 10px 0px 0px',
                              }}
                              ref={(r: any) => (refs['Text_641937'] = r)}
                              {...injectData}
                            />
                            <Text
                              name={'文本输入'}
                              children={'成都市 武侯区'}
                              $$componentItem={{
                                id: 'Text_186135',
                                uid: 'Text_186135',
                                type: 'Text',
                                ...componentItem,
                              }}
                              visible={true}
                              style={{
                                display: 'block',
                                color: '#999',
                                fontSize: 12,
                                margin: '6px 0px 0px 0px',
                              }}
                              ref={(r: any) => (refs['Text_186135'] = r)}
                              {...injectData}
                            />
                          </View>
                          <View
                            name={'布局容器3'}
                            visible={true}
                            $$componentItem={{
                              id: 'View_850852',
                              uid: 'View_850852',
                              type: 'View',
                              ...componentItem,
                            }}
                            style={{
                              display: 'block',
                              padding: '0',
                              width: 'auto',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                              margin: 0,
                              height: 'auto',
                            }}
                            ref={(r: any) => (refs['View_850852'] = r)}
                            {...injectData}
                          >
                            <Icon
                              name={'图标'}
                              status={'1'}
                              mode={'normal'}
                              icon={{
                                type: 'delete',
                                theme: 'outlined',
                                fontAddress: '',
                                isIconFont: false,
                                iconFileInfo: {},
                              }}
                              size={'sm'}
                              theme={'outlined'}
                              $$componentItem={{
                                id: 'Icon_416283',
                                uid: 'Icon_416283',
                                type: 'Icon',
                                ...componentItem,
                              }}
                              visible={true}
                              disabled={false}
                              readOnly={false}
                              style={{
                                border: '0px',
                                color: '#848485',
                                fontSize: 14,
                              }}
                              onClick={(...args: unknown[]) => {
                                const eventData: any = [
                                  {
                                    type: 'setDataSource',
                                    dataId: 170227697156903970,
                                    options: {
                                      compId: 'setDataSource',
                                      compName: 'system',
                                      id: '975405',
                                      pageJsonId: '072186',
                                      dataSourceId: 170227692020044350,
                                      dataSourceName: 'pageTsData',
                                      dataSourceRelType: 'custom',
                                      dataSourceSetValue: [
                                        {
                                          attrId: '985469',
                                          code: 'param',
                                          name: '属性',
                                          type: 'string',
                                          initialData: { type: 'static' },
                                          showInput: false,
                                        },
                                      ],
                                      operateType: 2,
                                      onlySetPatch: true,
                                      otherObjectArrayOptions: {},
                                      targetDataSourcePaths: [],
                                    },
                                    path: [170227696933124800],
                                    line_number: 1,
                                    callback1: [],
                                    callback2: [],
                                  },
                                ];
                                eventData.params =
                                  [
                                    {
                                      title: '事件对象',
                                      value: '$e$',
                                      name: 'e',
                                    },
                                  ] || [];
                                CMDGenerator(eventData, args, 'onClick', {
                                  id: 'Icon_416283',
                                  name: 'Icon_416283',
                                  type: 'Icon',
                                  platform: 'h5',
                                });
                              }}
                              ref={(r: any) => (refs['Icon_416283'] = r)}
                              {...injectData}
                            />
                          </View>
                        </View>
                      </>
                    );
                  },
                },
              };
            }}
          />
          <DformInput
            name={'属性'}
            postfix={''}
            postfixIconPosition={'before'}
            dformType={'DformInput'}
            title={'属性'}
            placeholder={'请输入'}
            clear={true}
            positionType={'horizontal'}
            status={'1'}
            inputType={'text'}
            defaultValue={data?.nothing?.param}
            fieldProps={'param'}
            $$componentItem={{
              id: 'DformInput_725531',
              uid: 'DformInput_725531',
              type: 'DformInput',
              ...componentItem,
            }}
            visible={true}
            disabled={false}
            readOnly={false}
            style={{
              inputContent: '1',
              inputBorderRadius: '4px 4px 4px 4px',
              textAlign: 'right',
            }}
            ref={(r: any) => (refs['DformInput_725531'] = r)}
            {...injectData}
          />
        </DForm>
        <Button
          name={'按钮'}
          btnIcon={false}
          type={'primary'}
          size={'large'}
          loading={false}
          mImagePostion={'left'}
          shape={'default'}
          status={'1'}
          children={'按钮'}
          $$componentItem={{
            id: 'Button_626085',
            uid: 'Button_626085',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          disabled={false}
          readOnly={false}
          style={{ textAlign: 'center' }}
          onClick={(...args: unknown[]) => {
            const eventData: any = [
              {
                type: 'showAppCustomModal',
                dataId: 170227873791231700,
                options: {
                  compId: 'showAppCustomModal',
                  compName: 'system',
                  id: '387105',
                  pageJsonId: '072186',
                  modalname: '/model7813',
                  pageId: '1049266938740068352',
                  modalPath: '/model7813',
                },
                path: [170227872404674940],
                line_number: 1,
                callback1: [],
                callback2: [],
              },
            ];
            eventData.params =
              [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
            CMDGenerator(eventData, args, 'onClick', {
              id: 'Button_626085',
              name: 'Button_626085',
              type: 'Button',
              platform: 'h5',
            });
          }}
          ref={(r: any) => (refs['Button_626085'] = r)}
          {...injectData}
        />
      </View>
    </div>
  );
};

export default withPageHOC(Buchong4160$$Page, {
  appId: '1024143353417228288',
  pageId: '1051387196217495552',
  hasLogin: false,
  dataSource: [
    {
      id: '170227655613979650',
      name: 'nothing',
      description: 'nothing',
      source: 'custom',
      type: 'object',
      filterParams: [],
      outParams: [
        {
          attrId: '2606065',
          code: 'param',
          name: '属性',
          type: 'string',
          initialData: { type: 'static', value: '123' },
          showInput: true,
        },
      ],
      config: { hooks: [] },
      rootOutParams: { type: 'static', value: '' },
    },
    {
      id: '170227655613900540',
      name: 'list',
      description: 'list',
      source: 'custom',
      type: 'objectArray',
      filterParams: [],
      outParams: [
        {
          attrId: '007221',
          code: 'param',
          name: '属性',
          type: 'string',
          initialData: { type: 'static' },
          showInput: false,
        },
      ],
      config: { hooks: [] },
      rootOutParams: { type: 'static', value: '[{param:1},{param:}]2' },
    },
    {
      id: 170227692020044350,
      name: 'pageTsData',
      description: 'pageTsData',
      source: 'custom',
      type: 'objectArray',
      filterParams: [],
      outParams: [
        {
          attrId: '985469',
          code: 'param',
          name: '属性',
          type: 'string',
          initialData: { type: 'static' },
          showInput: false,
        },
      ],
      config: { hooks: [] },
    },
  ],
  defaultState: { bizId: '', sceneCode: '', bizData: '' },
});
