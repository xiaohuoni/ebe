import React, { useState, useRef, useMemo, useImperativeHandle } from 'react';
import { message } from '@lingxiteam/engine-pc/es/components/EnhanceAntdComp';
import Modal from './Modal';
// import { Drawer } from './DynamicDrawer';
import {
  LocaleFunction,
  ModalManagerHooks,
  OpenDrawerProps,
  OpenModalProps,
} from '@lingxiteam/types';
import { lcdpApi } from '@lingxiteam/engine-platform';

interface ModalManagerProps {
  relPageId?: string;
  parseNodeBefore?: any;
  appId: string;
  getLocale?: LocaleFunction;
}

/**
 * 弹窗管理器
 * 每一个动态渲染页面需要引入一个弹窗管理器组件【只应引入一个】，他会暴露出ref供动态渲染页面使用
 * @module ModalManager
 */
const ModalManager = React.forwardRef<ModalManagerHooks, ModalManagerProps>(
  (props, ref) => {
    // relPageId为后面错误定位所需
    const { parseNodeBefore, appId } = props;
    const getLocale = props.getLocale!;
    const [ModalData, setModalData] = useState<any[]>([]);
    const [DrawerData, setDrawerData] = useState<any[]>([]);
    const [idSerial, setIdSerial] = useState<number>(0);
    const refModalData = useRef<any[]>([]);
    const refDrawerData = useRef<any[]>([]);

    /**
     *  兼容lcdapi.router
     */
    lcdpApi.setRefs('ModalManager', ref);

    // 解决取不到最新值
    useMemo(() => {
      refModalData.current = ModalData;
      refDrawerData.current = DrawerData;
    }, [ModalData, DrawerData]);

    const open = ({
      type = 'Modal',
      pageId,
      onOk,
      onCancel,
      params,
      lcdpParentRenderId,
    }: any) => {
      const instData = type === 'Modal' ? ModalData : DrawerData;
      const instMethod = type === 'Modal' ? setModalData : setDrawerData;
      if (!pageId) {
        message.error(
          getLocale(
            'Modal.missParams',
            '弹窗操作失败：缺少页面实例ID或页面路径',
          ),
        );
        return;
      }

      const targetObj = instData.find((i) => i.pageId && i.pageId === pageId);
      if (targetObj) {
        // 这个pageId已经存在一个弹窗，改为打开它
        targetObj.visible = true;
        targetObj.params = params;
        targetObj.onOk = onOk;
        targetObj.lcdpParentRenderId = lcdpParentRenderId;
        // targetObj.onCancel = onCancel;
        instMethod([...instData]);
      } else {
        const modalInstId = `D${type}_${idSerial}`;
        instMethod([
          ...instData,
          {
            modalInstId,
            pageId,
            appId,
            visible: true,
            onOk,
            params,
            lcdpParentRenderId,
            onCancel: (() => () => {
              let cancelResult;
              if (onCancel) {
                cancelResult = onCancel();
              }
              // cancelResult: 用于今后使用，如果onCancel返回false，表示取消关闭操作，不能关闭
              if (cancelResult === false) {
                return;
              }

              _close(modalInstId, null, type);
            })(),
          },
        ]);
        setIdSerial(idSerial + 1);
      }
    };

    const _close = (modalInstId: any, pageId?: any, type = 'Modal') => {
      const instData =
        type === 'Modal' ? refModalData.current : refDrawerData.current;
      const instMethod = type === 'Modal' ? setModalData : setDrawerData;

      if (modalInstId) {
        const targetIndex = instData.findIndex(
          (i) => i.modalInstId === modalInstId,
        );
        if (targetIndex !== -1) {
          instData[targetIndex].visible = false;
          instMethod([...instData]);
        }
      } else if (pageId) {
        instData
          .filter((i) => i.pageId === pageId)
          .forEach((i) => {
            i.visible = false;
          });
        instMethod([...instData]);
      }
      if (!modalInstId && !pageId) {
        instData.forEach((i) => {
          i.visible = false;
        });
        instMethod([...instData]);
      }
    };

    // 更改弹窗属性值
    const setStatue = ({
      modalInstId,
      pageId,
      type = 'model',
      propsName,
      propsValue,
    }: {
      modalInstId?: string;
      pageId?: string;
      type: 'model' | 'drawer';
      propsName: string;
      propsValue: any;
    }) => {
      const instData =
        type === 'model' ? refModalData.current : refDrawerData.current;
      const instMethod = type === 'model' ? setModalData : setDrawerData;
      if (modalInstId) {
        const targetIndex = instData.findIndex(
          (i: any) => i.modalInstId === modalInstId,
        );
        if (targetIndex !== -1) {
          instData[targetIndex][propsName] = propsValue;
          instMethod([...instData]);
        }
      } else if (pageId) {
        instData
          .filter((i: any) => i.pageId === pageId)
          .forEach((i: any) => {
            i[propsName] = propsValue;
          });
        instMethod([...instData]);
      }
    };

    useImperativeHandle<any, ModalManagerHooks>(ref, () => ({
      /**
       * 打开一个弹窗
       * @param {Object} pageOptions
       * @param {string|number} pageOptions.pageId - 要打开的页面的pageId
       * @param {Object} pageOptions.params - 要传入给打开页面的数据
       * @param {Object} pageOptions.onOk - 该弹窗确认回调
       * @param {Object} pageOptions.onCancel - 该弹窗关闭回调
       * @return {number} 此次生成的实例ID
       */
      openModal: (pageOptions: OpenModalProps) =>
        open({
          ...pageOptions,
          type: 'Modal',
        }),

      /**
       * 打开一个弹窗
       * @param {Object} pageOptions
       * @param {string|number} pageOptions.pageId - 要打开的页面的pageId
       * @param {Object} pageOptions.params - 要传入给打开页面的数据
       * @param {Object} pageOptions.onOk - 该弹窗确认回调
       * @param {Object} pageOptions.onCancel - 该弹窗关闭回调
       * @return {number} 此次生成的实例ID
       */
      openDrawer: (pageOptions: OpenDrawerProps) =>
        open({
          ...pageOptions,
          type: 'Drawer',
        }),

      /**
       * 关闭一个弹窗，不传参的话则是关闭所有弹窗
       * @param {number} [modalInstId] - 要关闭的弹窗的实例ID
       * @param {string|number} [pageId] 该弹窗的pageId，如果传入了pageId，在ModalInstId为null时则为关闭所有对应pageId的弹窗实例
       */
      closeModal: (instId, pageId) => _close(instId, pageId, 'Modal'),

      /**
       * 关闭一个推拉门，不传参的话则是关闭所有推拉门
       * @param {number} [modalInstId] - 要关闭的推拉门的实例ID
       * @param {string|number} [pageId] 该弹窗的pageId，如果传入了pageId，在ModalInstId为null时则为关闭所有对应pageId的弹窗实例
       */
      closeDrawer: (instId, pageId) => _close(instId, pageId, 'Drawer'),

      /**
       * 更改推拉门/弹窗属性 如弹窗标题
       */
      setStatue,
    }));

    return (
      <div>
        {ModalData.map((m) => (
          <Modal
            {...m}
            managerRef={ref}
            modalInstId={m.modalInstId}
            key={m.modalInstId}
            parseNodeBefore={parseNodeBefore}
            setStatue={setStatue}
            getLocale={getLocale}
          />
        ))}
        {/* {
            DrawerData.map((m) => (
              <Drawer
                {...m}
                managerRef={ref}
                modalInstId={m.modalInstId}
                key={m.modalInstId}
                parseNodeBefore={parseNodeBefore}
                setStatue={setStatue}
                getLocale={getLocale}
              />
            ))
          } */}
      </div>
    );
  },
);

ModalManager.defaultProps = {
  getLocale: (k, p) => p ?? '',
};

export default ModalManager;
