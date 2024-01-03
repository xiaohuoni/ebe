// 注意: 出码模块正在调试
import React from 'react';

import { Button, DForm, DformInput, View } from '@/components/factory';

import Popover from '@/components/Popover';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

import { setPageNavBar } from 'alita';

const Ceshi1071$$Page: React.FC<PageProps> = ({
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
    console.log(124);

    setPageNavBar({
      pagePath: '/ceshi1071',
      navBar: {
        pageTitle: '页面标题自定义',
        hideNavBar: false,
      },
    });

    return () => {};
  }, []);

  useEffect(() => {
    console.log(functorsMap?.SUM(10, 20, 30));
  });

  return (
    <div style={style}>
      <View
        name={'布局容器1'}
        visible={true}
        $$componentItem={{
          id: 'View_4060305',
          uid: 'View_4060305',
          type: 'View',
          ...componentItem,
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'static',
          padding: '12px 0px 12px 0px',
          width: '100%',
          borderStyle: 'solid',
          borderWidth: 0,
          borderRadius: '0px 0px 0px 0px',
          border: '0px',
        }}
        ref={(r: any) => (refs['View_4060305'] = r)}
        {...injectData}
      >
        <DForm
          name={'表单'}
          formCode={'DForm_038646'}
          autoLineFeed={true}
          failScroll={true}
          errorFlag={true}
          hiddenBorder={'0'}
          itemHasStar={true}
          $$componentItem={{
            id: 'DForm_038646',
            uid: 'DForm_038646',
            type: 'DForm',
            ...componentItem,
          }}
          visible={true}
          style={{ width: 'auto' }}
          ref={(r: any) => (refs['DForm_038646'] = r)}
          {...injectData}
        >
          <DformInput
            name={'单行输入'}
            postfix={''}
            postfixIconPosition={'before'}
            dformType={'DformInput'}
            title={'标题1'}
            placeholder={'请输入'}
            clear={true}
            positionType={'horizontal'}
            status={'1'}
            inputType={'text'}
            fieldProps={'fff'}
            $$componentItem={{
              id: 'DformInput_8100247',
              uid: 'DformInput_8100247',
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
            onChange={(value: any) => {
              const eventDatasysSetValue: any = [
                {
                  type: 'sysSetValue',
                  dataId: 170314291780330430,
                  options: {
                    compId: ['DformInput_203169'],
                    pageJsonId: '181337953',
                    compName: 'system',
                    id: '570535',
                    valueList: { DformInput_203169: '$value$' },
                    compid: ['DformInput_203169'],
                  },
                  path: [170314290104851800],
                  line_number: 1,
                  callback1: [],
                },
              ];
              eventDatasysSetValue.params =
                [
                  { title: '单行输入框取值', value: '$value$', name: 'value' },
                ] || [];
              CMDGenerator(eventDatasysSetValue, { value }, 'sysSetValue', {
                id: 'sysSetValue',
                name: 'sysSetValue',
                type: 'sysSetValue',
                platform: 'h5',
              });

              const eventData: any = [
                {
                  type: 'sysSetValue',
                  dataId: 170314291780330430,
                  options: {
                    compId: ['DformInput_203169'],
                    pageJsonId: '181337953',
                    compName: 'system',
                    id: '570535',
                    valueList: { DformInput_203169: '$value$' },
                    compid: ['DformInput_203169'],
                  },
                  path: [170314290104851800],
                  line_number: 1,
                  callback1: [],
                },
              ];
              eventData.params =
                [
                  { title: '单行输入框取值', value: '$value$', name: 'value' },
                ] || [];
              CMDGenerator(eventData, { value }, 'onChange', {
                id: 'DformInput_8100247',
                name: 'DformInput_8100247',
                type: 'DformInput',
                platform: 'h5',
              });
            }}
            ref={(r: any) => (refs['DformInput_8100247'] = r)}
            {...injectData}
          />
          <DformInput
            name={'单行输入'}
            postfix={''}
            postfixIconPosition={'before'}
            dformType={'DformInput'}
            title={'标题2'}
            placeholder={'请输入'}
            clear={true}
            positionType={'horizontal'}
            status={'1'}
            inputType={'text'}
            fieldProps={'fsdfsdds'}
            $$componentItem={{
              id: 'DformInput_203169',
              uid: 'DformInput_203169',
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
            ref={(r: any) => (refs['DformInput_203169'] = r)}
            {...injectData}
          />
        </DForm>
      </View>
      <Popover
        page={{
          pagePath: '/kapian9555',
          pageId: '1052397738087833600',
          pageName: 'kapian',
          options: [
            { name: '业务主键', code: 'bizId' },
            { name: '业务场景', code: 'sceneCode' },
            { name: '业务数据', code: 'bizData' },
          ],
          tipType: '1',
          placement: 'bottom',
        }}
        {...injectData}
      >
        <Button
          name={'按钮'}
          btnIcon={false}
          type={'primary'}
          size={'large'}
          loading={false}
          mImagePostion={'left'}
          shape={'default'}
          status={'1'}
          children={state?.title}
          $$componentItem={{
            id: 'Button_7815635',
            uid: 'Button_7815635',
            type: 'Button',
            ...componentItem,
          }}
          visible={true}
          readOnly={false}
          disabled={false}
          style={{ textAlign: 'center' }}
          ref={(r: any) => (refs['Button_7815635'] = r)}
          {...injectData}
        />
      </Popover>
    </div>
  );
};

export default withPageHOC(Ceshi1071$$Page, {
  appId: '1024143353417228288',
  pageId: '1024143466269171712',
  hasLogin: true,
  dataSource: [
    {
      id: 169891588296195260,
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
      id: 169958147710874270,
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
  ],
  defaultState: { bizId: '', sceneCode: '', bizData: '', title: '' },
});
