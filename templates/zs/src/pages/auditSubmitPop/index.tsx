// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, HorizontalView, Text, Button } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '891650785732694016';
const AuditSubmitPop$$Modal: React.FC<PageProps> = ({
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
  useEffect(() => {
    // console 167894587110662180
    console.log('======审批单提交弹窗=====');

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_958791__"
    >
      <View
        className="View_View_958791_1"
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_958791_1',
          uid: 'View_958791_1',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_958791_1')}
        {...injectData}
      >
        <HorizontalView
          name={'左右布局'}
          visible={true}
          $$componentItem={{
            id: 'HorizontalView_549178',
            uid: 'HorizontalView_549178',
            type: 'HorizontalView',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            margin: '0px 0px 8px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'HorizontalView_549178')}
          {...injectData}
        >
          <View
            className="View_View_398957"
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_398957',
              uid: 'View_398957',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '50%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_398957')}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={false}
              content={'审批单号：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              disabled={false}
              readOnly={false}
              $$componentItem={{
                id: 'Text_481171',
                uid: 'Text_481171',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: 16,
                lineHeight: '24px',
                color: '#1c242e',
                letterSpacing: '',
                textAlign: 'right',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_481171')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_251956"
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_251956',
              uid: 'View_251956',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '50%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_251956')}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={false}
              content={state?.instNbr}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              disabled={false}
              readOnly={false}
              $$componentItem={{
                id: 'Text_770672',
                uid: 'Text_770672',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: '#999',
                letterSpacing: '',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_770672')}
              {...injectData}
            />
          </View>
        </HorizontalView>
        <HorizontalView
          name={'左右布局'}
          visible={true}
          $$componentItem={{
            id: 'HorizontalView_549178_3085413',
            uid: 'HorizontalView_549178_3085413',
            type: 'HorizontalView',
            ...componentItem,
          }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 0px 0px 0px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            margin: '0px 0px 0px 0px',
          }}
          ref={(r: any) =>
            refs.setComponentRef(r, 'HorizontalView_549178_3085413')
          }
          {...injectData}
        >
          <View
            className="View_View_398957_6809206"
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_398957_6809206',
              uid: 'View_398957_6809206',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '50%',
              height: '100%',
              overflowY: 'auto',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_398957_6809206')}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={'您的审批已提交至：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_481171_187786',
                uid: 'Text_481171_187786',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: 16,
                lineHeight: '24px',
                color: '#1c242e',
                letterSpacing: '',
                textAlign: 'right',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_481171_187786')}
              {...injectData}
            />
          </View>
          <View
            className="View_View_251956_174864"
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_251956_174864',
              uid: 'View_251956_174864',
              type: 'View',
              ...componentItem,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 0px 0px 0px',
              width: '50%',
              height: '100%',
              overflowY: 'auto',
              color: '#ddd',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'View_251956_174864')}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={state?.nextStaffName}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_770672_295256',
                uid: 'Text_770672_295256',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: 16, lineHeight: '24px', color: '#1677ff' }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_770672_295256')}
              {...injectData}
            />
          </View>
        </HorizontalView>
        <View
          className="View_View_969983"
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_969983',
            uid: 'View_969983',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            textAlign: 'center',
            margin: '24px 0px 0px 0px',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_969983')}
          {...injectData}
        >
          <Button
            name={'确认'}
            shape={null}
            visible={true}
            classification={'default'}
            autoProcessFlow={false}
            flowProcessResult={'common'}
            iconPosition={'left'}
            ghost={false}
            block={false}
            size={'default'}
            disabled={false}
            type={'primary'}
            hasIcon={false}
            $$componentItem={{
              id: 'Button_162085',
              uid: 'Button_162085',
              type: 'Button',
              ...componentItem,
            }}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatacloseModal137: any = [
                {
                  type: 'closeModal',
                  dataId: 166419274743074660,
                  options: {
                    compId: 'closeModal',
                    compName: 'page',
                    id: '933848',
                    pageJsonId: '958791',
                  },
                  line_number: 1,
                },
              ];
              eventDatacloseModal137.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatacloseModal137, { e }, 'closeModal', {
                id: 'closeModal',
                name: 'closeModal',
                type: 'closeModal',
                platform: 'pc',
              });
              const eventDataokCallbackData4: any = [
                {
                  type: 'okCallbackData',
                  dataId: 166419287595161380,
                  options: {
                    compId: 'okCallbackData',
                    compName: 'page',
                    id: '24139',
                    pageJsonId: '958791',
                  },
                  line_number: 2,
                },
              ];
              eventDataokCallbackData4.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDataokCallbackData4, { e }, 'okCallbackData', {
                id: 'okCallbackData',
                name: 'okCallbackData',
                type: 'okCallbackData',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_162085')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AuditSubmitPop$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: { bizId: '', sceneCode: '', instNbr: '', nextStaffName: '' },
});
