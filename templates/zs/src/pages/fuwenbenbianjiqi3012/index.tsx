// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加

import { Button, Form, QuillEditor, View } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const Fuwenbenbianjiqi3012$$Page: React.FC<PageProps> = ({
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
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_17679166__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_17679166_1',
          uid: 'View_17679166_1',
          type: 'View',
          ...componentItem,
        }}
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '20px 20px 20px 20px',
          flexDirection: 'column',
          overflowY: 'auto',
          width: 'auto',
        }}
        ref={(r: any) => (refs['View_17679166_1'] = r)}
        {...injectData}
      >
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_782269',
            uid: 'View_782269',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
          }}
          ref={(r: any) => (refs['View_782269'] = r)}
          {...injectData}
        >
          <Form
            name={'表单'}
            colSpan={24}
            labelCol={8}
            wrapperCol={16}
            colon={true}
            layout={'horizontal'}
            labelAlign={'right'}
            header={'标题'}
            colSpace={0}
            rowSpace={16}
            formCode={'Form_257305'}
            $$componentItem={{
              id: 'Form_257305',
              uid: 'Form_257305',
              type: 'Form',
              ...componentItem,
            }}
            disabled={false}
            visible={true}
            readOnly={false}
            style={{ padding: '0px 0px 0px 0px' }}
            ref={(r: any) => (refs['Form_257305'] = r)}
            {...injectData}
          >
            <QuillEditor
              name={'富文本编辑框'}
              titleTip={'notext'}
              tipLocation={'after'}
              tipPlacement={'top'}
              selfSpan={24}
              labelCol={8}
              wrapperCol={16}
              height={200}
              visible={true}
              imageType={'file'}
              formItemIndex={0}
              fieldName={'approveContent'}
              required={true}
              $$componentItem={{
                id: 'QuillEditor_921149',
                uid: 'QuillEditor_921149',
                type: 'QuillEditor',
                ...componentItem,
              }}
              disabled={false}
              readOnly={false}
              isFormRootChild={true}
              ref={(r: any) => (refs['QuillEditor_921149'] = r)}
              {...injectData}
            />
          </Form>
        </View>
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_6615784',
            uid: 'View_6615784',
            type: 'View',
            ...componentItem,
          }}
          disabled={false}
          readOnly={false}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            textAlign: 'center',
            margin: '20px 20px 20px 20px',
          }}
          ref={(r: any) => (refs['View_6615784'] = r)}
          {...injectData}
        >
          <Button
            name={'提交'}
            shape={null}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            disabled={false}
            visible={true}
            type={'primary'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_0458746',
              uid: 'Button_0458746',
              type: 'Button',
              ...componentItem,
            }}
            readOnly={false}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatavalidateCurrentForm104: any = [
                {
                  type: 'validateCurrentForm',
                  dataId: 166971151561638820,
                  options: {
                    compId: 'Form_257305',
                    compLib: 'comm',
                    pageJsonId: '17679166',
                    compName: 'Form',
                    id: '761234',
                  },
                  line_number: 1,
                  callback1: [
                    {
                      type: 'console',
                      dataId: 166971151898332770,
                      options: {
                        compId: 'debug',
                        compName: 'system',
                        id: '271666',
                        pageJsonId: '17679166',
                        value: ['$Form_257305$'],
                      },
                      line_number: 2,
                    },
                  ],
                  callback2: [],
                },
              ];
              eventDatavalidateCurrentForm104.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(
                eventDatavalidateCurrentForm104,
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
            ref={(r: any) => (refs['Button_0458746'] = r)}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(Fuwenbenbianjiqi3012$$Page, {
  pageId: '914793725992869888',
  hasLogin: false,
  defaultState: {},
});
