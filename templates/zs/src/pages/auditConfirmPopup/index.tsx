// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';

import { View, HorizontalView, Text, Button } from '@/components/factory';

import { useEffect } from 'react';

import { PageProps, withPageHOC } from '@/utils/withPageHOC';

const pageId = '917353379070562304';
const AuditConfirmPopup$$Modal: React.FC<PageProps> = ({
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
  const onCancel = () => {
    const eventDatacloseModal92: any = [
      {
        type: 'closeModal',
        dataId: 167032259731382370,
        options: {
          compId: 'closeModal',
          compName: 'page',
          id: '922356',
          pageJsonId: '958791',
        },
        line_number: 1,
      },
    ];
    eventDatacloseModal92.params = [] || [];
    CMDGenerator(eventDatacloseModal92, {}, 'closeModal', {
      id: 'closeModal',
      name: 'closeModal',
      type: 'closeModal',
      platform: 'undefined',
    });
    const eventDataokCallbackData1: any = [
      {
        type: 'okCallbackData',
        dataId: 167032257835473300,
        options: {
          compId: 'okCallbackData',
          compName: 'page',
          id: '0030167',
          pageJsonId: '958791',
        },
        line_number: 2,
      },
    ];
    eventDataokCallbackData1.params = [] || [];
    CMDGenerator(eventDataokCallbackData1, {}, 'okCallbackData', {
      id: 'okCallbackData',
      name: 'okCallbackData',
      type: 'okCallbackData',
      platform: 'undefined',
    });
  };

  React.useImperativeHandle(forwardedRef, () => ({
    onCancel,
  }));

  useEffect(() => {
    const eventDataifelse293: any = [
      {
        type: 'ifelse',
        condition: [
          {
            condId: '496939',
            options: { context: '$state.nextStaffName$', operate: 'empty' },
            conditionType: 'checkContextValue',
            objType: 'system',
            objId: 'sys',
          },
        ],
        dataId: 167360148704479870,
        elseIfs: [
          {
            dataName: 'elseIf',
            dataId: 167593348131503550,
            children: [
              {
                dataName: 'action',
                dataId: 167593349154715600,
                children: [],
                todoOptions: ['visible', 'selectComp'],
                options: {
                  compId: ['HorizontalView_549178_3085413_528218'],
                  compLib: 'custom',
                  pageJsonId: '958791',
                  compName: 'View',
                  id: '5167585',
                  visible: 'true',
                  compid: ['HorizontalView_549178_3085413_528218'],
                },
                actionObjId: 'View_398957_6809206_665471',
                actionObjName: 'View',
                value: 'setVisible',
                compLib: 'custom',
                line_number: 4,
              },
            ],
            condition: [],
            callback: [
              {
                type: 'setVisible',
                dataId: 167593349154715600,
                options: {
                  compId: ['HorizontalView_549178_3085413_528218'],
                  compLib: 'custom',
                  pageJsonId: '958791',
                  compName: 'View',
                  id: '5167585',
                  visible: 'true',
                  compid: ['HorizontalView_549178_3085413_528218'],
                },
                line_number: 4,
              },
            ],
          },
        ],
        line_number: 1,
        callback1: [
          {
            type: 'setVisible',
            dataId: 167360150671616400,
            options: {
              compId: ['HorizontalView_549178_3085413_528218'],
              compLib: 'custom',
              pageJsonId: '958791',
              compName: 'View',
              id: '854236',
              visible: '',
              compid: ['HorizontalView_549178_3085413_528218'],
            },
            line_number: 2,
          },
          {
            type: 'setVisible',
            dataId: 167593327819898700,
            options: {
              compId: 'View_218669',
              compLib: 'custom',
              pageJsonId: '958791',
              compName: 'View',
              id: '04586',
              visible: 'true',
            },
            line_number: 3,
          },
        ],
      },
    ];
    eventDataifelse293.params = [] || [];
    CMDGenerator(eventDataifelse293, {}, 'ifelse', {
      id: 'ifelse',
      name: 'ifelse',
      type: 'ifelse',
      platform: 'undefined',
    });

    return () => {};
  }, []);

  useEffect(() => {});

  return (
    <div
      style={{ height: '100%', ...style }}
      className="__CustomClass_958791__"
    >
      <View
        name={'页面'}
        visible={true}
        $$componentItem={{
          id: 'View_958791_1_1768424',
          uid: 'View_958791_1_1768424',
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
        ref={(r: any) => refs.setComponentRef(r, 'View_958791_1_1768424')}
        {...injectData}
      >
        <HorizontalView
          name={'左右布局'}
          visible={false}
          disabled={false}
          readOnly={false}
          $$componentItem={{
            id: 'HorizontalView_549178_800114',
            uid: 'HorizontalView_549178_800114',
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
          ref={(r: any) =>
            refs.setComponentRef(r, 'HorizontalView_549178_800114')
          }
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_398957_82413',
              uid: 'View_398957_82413',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_398957_82413')}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={'审批单号：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_481171_606426',
                uid: 'Text_481171_606426',
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
              ref={(r: any) => refs.setComponentRef(r, 'Text_481171_606426')}
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_251956_128608',
              uid: 'View_251956_128608',
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
            ref={(r: any) => refs.setComponentRef(r, 'View_251956_128608')}
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={state?.instNbr}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_770672_00828',
                uid: 'Text_770672_00828',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: '14px',
                lineHeight: '24px',
                color: '#999',
                letterSpacing: '',
              }}
              ref={(r: any) => refs.setComponentRef(r, 'Text_770672_00828')}
              {...injectData}
            />
          </View>
        </HorizontalView>
        <HorizontalView
          name={'左右布局'}
          visible={false}
          disabled={false}
          readOnly={false}
          $$componentItem={{
            id: 'HorizontalView_549178_3085413_528218_7337728',
            uid: 'HorizontalView_549178_3085413_528218_7337728',
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
            refs.setComponentRef(
              r,
              'HorizontalView_549178_3085413_528218_7337728',
            )
          }
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_398957_6809206_665471_878381',
              uid: 'View_398957_6809206_665471_878381',
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_398957_6809206_665471_878381')
            }
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={'下一环节：'}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_481171_187786_537629_073717',
                uid: 'Text_481171_187786_537629_073717',
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_481171_187786_537629_073717')
              }
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_251956_174864_13805_9114867',
              uid: 'View_251956_174864_13805_9114867',
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_251956_174864_13805_9114867')
            }
            {...injectData}
          >
            <Text
              name={'文本'}
              visible={true}
              content={state?.nextTacheName}
              textType={'span'}
              version={'1.0'}
              showHtml={false}
              $$componentItem={{
                id: 'Text_770672_295256_8373623_008353',
                uid: 'Text_770672_295256_8373623_008353',
                type: 'Text',
                ...componentItem,
              }}
              style={{ fontSize: '14px', lineHeight: '24px', color: '#999' }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_770672_295256_8373623_008353')
              }
              {...injectData}
            />
          </View>
        </HorizontalView>
        <HorizontalView
          name={'左右布局'}
          visible={false}
          disabled={false}
          readOnly={false}
          $$componentItem={{
            id: 'HorizontalView_549178_3085413_528218',
            uid: 'HorizontalView_549178_3085413_528218',
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
          ref={(r: any) =>
            refs.setComponentRef(r, 'HorizontalView_549178_3085413_528218')
          }
          {...injectData}
        >
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_398957_6809206_665471',
              uid: 'View_398957_6809206_665471',
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_398957_6809206_665471')
            }
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
                id: 'Text_481171_187786_537629',
                uid: 'Text_481171_187786_537629',
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
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_481171_187786_537629')
              }
              {...injectData}
            />
          </View>
          <View
            name={'布局容器'}
            visible={true}
            $$componentItem={{
              id: 'View_251956_174864_13805',
              uid: 'View_251956_174864_13805',
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
            ref={(r: any) =>
              refs.setComponentRef(r, 'View_251956_174864_13805')
            }
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
                id: 'Text_770672_295256_8373623',
                uid: 'Text_770672_295256_8373623',
                type: 'Text',
                ...componentItem,
              }}
              style={{
                fontSize: 16,
                lineHeight: '24px',
                color: '#1677ff',
                letterSpacing: '',
              }}
              ref={(r: any) =>
                refs.setComponentRef(r, 'Text_770672_295256_8373623')
              }
              {...injectData}
            />
          </View>
        </HorizontalView>
        <View
          name={'最后环节展示布局容器'}
          visible={false}
          disabled={false}
          readOnly={false}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_218669',
            uid: 'View_218669',
            type: 'View',
            ...componentItem,
          }}
          style={{
            display: 'block',
            flexDirection: 'column',
            padding: '0px 0px 0px 0px',
            width: '100%',
            textAlign: 'center',
          }}
          ref={(r: any) => refs.setComponentRef(r, 'View_218669')}
          {...injectData}
        >
          <Text
            name={'文本'}
            content={'您的流程已完结'}
            textType={'span'}
            version={'1.0'}
            visible={true}
            showHtml={false}
            $$componentItem={{
              id: 'Text_7922464',
              uid: 'Text_7922464',
              type: 'Text',
              ...componentItem,
            }}
            disabled={false}
            readOnly={false}
            style={{
              fontSize: 16,
              lineHeight: '24px',
              color: '#1c242e',
              textAlign: 'center',
              letterSpacing: '',
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Text_7922464')}
            {...injectData}
          />
        </View>
        <View
          name={'布局容器'}
          visible={true}
          backgroundType={{ type: 'cleanColor', color: undefined }}
          $$componentItem={{
            id: 'View_969983_1581134',
            uid: 'View_969983_1581134',
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
          ref={(r: any) => refs.setComponentRef(r, 'View_969983_1581134')}
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
              id: 'Button_162085_0330527',
              uid: 'Button_162085_0330527',
              type: 'Button',
              ...componentItem,
            }}
            style={{ width: 'fit-content' }}
            onClick={(e: any) => {
              const eventDatacloseModal138: any = [
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
              eventDatacloseModal138.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDatacloseModal138, { e }, 'closeModal', {
                id: 'closeModal',
                name: 'closeModal',
                type: 'closeModal',
                platform: 'pc',
              });
              const eventDataokCallbackData5: any = [
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
              eventDataokCallbackData5.params =
                [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
              CMDGenerator(eventDataokCallbackData5, { e }, 'okCallbackData', {
                id: 'okCallbackData',
                name: 'okCallbackData',
                type: 'okCallbackData',
                platform: 'pc',
              });
            }}
            ref={(r: any) => refs.setComponentRef(r, 'Button_162085_0330527')}
            {...injectData}
          />
        </View>
      </View>
    </div>
  );
};

export default withPageHOC(AuditConfirmPopup$$Modal, {
  pageId,
  hasLogin: false,
  defaultState: {
    bizId: '',
    sceneCode: '',
    instNbr: '',
    nextStaffName: '',
    nextTacheName: '',
  },
});
