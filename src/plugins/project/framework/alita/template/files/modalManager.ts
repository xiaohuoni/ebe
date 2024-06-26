import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'index',
    'tsx',
    `import { getSafePage } from '@/components/common/Pageview';
${isMobile ? '' : "import DrawerMap from '@/components/drawer';"}
import ModalMap from '@/components/modal';
import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';

interface ModalManagerProps {
  parseNodeBefore?: any;
}

/**
 * 打开弹窗入参
 */
export interface OpenModalProps {
  /**
   * 页面路径
   */

  pagePath: string;
  /**
   * 弹窗的state（组件状态）
   */
  params?: Record<string, any>;
  /**
   * 父页面的容器ID，是页面的上下文中的renderId
   */
  lcdpParentRenderId: string;
  onOk: (...arg0: any[]) => void;
  onCancel: (...arg0: any[]) => void;
}

export interface StatueOption {
  modalInstId?: string;
  pagePath?: string;
  type: 'Modal' ${isMobile ? '' : "| 'Drawer'"};
  propsName: string;
  propsValue: any;
}

export interface ModalManagerHooks {
  /**
   * 弹窗打开
   * @param data
   */
  openModal: (data: OpenModalProps) => void;
  ${
    isMobile
      ? ''
      : `/**
   * 抽屉打开
   * @param data
   */
  openDrawer?: (data: OpenDrawerProps) => void;`
  }
  /**
   * 弹窗关闭
   * @param instId
   * @param pagePath
   */
  closeModal: (instId?: string, pagePath?: string) => void;
  ${
    isMobile
      ? ''
      : `/**
   * 抽屉关闭
   * @param instId
   * @param pagePath
   */
  closeDrawer?: (instId?: string, pagePath?: string) => void;`
  }
  /**
   * 设置属性
   * @param param0
   */
  setStatue?: (options: StatueOption) => void;
}
${isMobile ? '' : 'export declare type OpenDrawerProps = OpenModalProps;'}
/**
 * 弹窗管理器
 * 每一个动态渲染页面需要引入一个弹窗管理器组件【只应引入一个】，他会暴露出ref供动态渲染页面使用
 * @module ModalManager
 */
const ModalManager = React.forwardRef<ModalManagerHooks, ModalManagerProps>(
  (props, ref) => {
    const [ModalData, setModalData] = useState<any[]>([]);
    ${
      isMobile ? '' : 'const [DrawerData, setDrawerData] = useState<any[]>([]);'
    }
    const [idSerial, setIdSerial] = useState<number>(0);
    const refModalData = useRef<any[]>([]);
    const refDrawerData = useRef<any[]>([]);

    /**
     *  兼容lcdapi.router
     */
    // lcdpApi.setRefs('ModalManager', ref);

    // 解决取不到最新值
    useMemo(() => {
      refModalData.current = ModalData;
      ${isMobile ? '' : 'refDrawerData.current = DrawerData;'}
    }, [ModalData, ${isMobile ? '' : 'DrawerData'}]);
    const open = ({
      pagePath,
      onOk,
      onCancel,
      params,
      lcdpParentRenderId,
      type,
    }: any) => {
      ${
        isMobile
          ? 'const instData = ModalData;'
          : "const instData = type === 'Modal' ? ModalData : DrawerData;"
      }
      ${
        isMobile
          ? 'const instMethod = setModalData;'
          : "const instMethod = type === 'Modal' ? setModalData : setDrawerData;"
      }
      if (!pagePath) {
        console.error('弹窗操作失败：缺少页面实例ID或页面路径');
        return;
      }
      const targetObj = instData.find(
        (i) => i.pagePath && i.pagePath === pagePath,
      );
      if (targetObj) {
        // 这个pagePath已经存在一个弹窗，改为打开它
        targetObj.visible = true;
        targetObj.params = params;
        targetObj.onOk = onOk;
        targetObj.lcdpParentRenderId = lcdpParentRenderId;
        // targetObj.onCancel = onCancel;
        instMethod([...instData]);
      } else {
        const modalInstId = \`D\${type}_\${idSerial}\`;
        instMethod([
          ...instData,
          {
            modalInstId,
            pagePath,
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
    const _close = (modalInstId: any, pagePath?: any, type = 'Modal') => {
      ${
        isMobile
          ? 'const instData = refModalData.current;'
          : "const instData = type === 'Modal' ? refModalData.current : refDrawerData.current;"
      }
      ${
        isMobile
          ? 'const instMethod = setModalData;'
          : "const instMethod = type === 'Modal' ? setModalData : setDrawerData;"
      }
      if (modalInstId) {
        const targetIndex = instData.findIndex(
          (i) => i.modalInstId === modalInstId,
        );
        if (targetIndex !== -1) {
          instData[targetIndex].visible = false;
          instMethod([...instData]);
        }
      } else if (pagePath) {
        instData
          .filter((i) => i.pagePath === pagePath)
          .forEach((i) => {
            i.visible = false;
          });
        instMethod([...instData]);
      }
      if (!modalInstId && !pagePath) {
        instData.forEach((i) => {
          i.visible = false;
        });
        instMethod([...instData]);
      }
    };

    // 更改弹窗属性值
    const setStatue = ({
      modalInstId,
      pagePath,
      type = 'Modal',
      propsName,
      propsValue,
    }: StatueOption) => {
      ${
        isMobile
          ? 'const instData = refModalData.current;'
          : "const instData = type === 'Modal' ? refModalData.current : refDrawerData.current;"
      }
      ${
        isMobile
          ? 'const instMethod = setModalData;'
          : "const instMethod = type === 'Modal' ? setModalData : setDrawerData;"
      }
      if (modalInstId) {
        const targetIndex = instData.findIndex(
          (i: any) => i.modalInstId === modalInstId,
        );
        if (targetIndex !== -1) {
          instData[targetIndex][propsName] = propsValue;
          instMethod([...instData]);
        }
      } else if (pagePath) {
        instData
          .filter((i: any) => i.pagePath === pagePath)
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
       * @param {string|number} pageOptions.pagePath - 要打开的页面的pagePath
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
      ${
        isMobile
          ? ''
          : `/**
       * 打开一个弹窗
       * @param {Object} pageOptions
       * @param {string|number} pageOptions.pagePath - 要打开的页面的pagePath
       * @param {Object} pageOptions.params - 要传入给打开页面的数据
       * @param {Object} pageOptions.onOk - 该弹窗确认回调
       * @param {Object} pageOptions.onCancel - 该弹窗关闭回调
       * @return {number} 此次生成的实例ID
       */
      openDrawer: (pageOptions: OpenDrawerProps) =>
        open({
          ...pageOptions,
          type: 'Drawer',
        }),`
      }
      /**
       * 关闭一个弹窗，不传参的话则是关闭所有弹窗
       * @param {number} [modalInstId] - 要关闭的弹窗的实例ID
       * @param {string|number} [pagePath] 该弹窗的pagePath，如果传入了pagePath，在ModalInstId为null时则为关闭所有对应pagePath的弹窗实例
       */
      closeModal: (instId, pagePath) => _close(instId, pagePath, 'Modal'),
      ${
        isMobile
          ? ''
          : `/**
       * 关闭一个推拉门，不传参的话则是关闭所有推拉门
       * @param {number} [modalInstId] - 要关闭的推拉门的实例ID
       * @param {string|number} [pagePath] 该弹窗的pagePath，如果传入了pagePath，在ModalInstId为null时则为关闭所有对应pagePath的弹窗实例
       */
      closeDrawer: (instId, pagePath) => _close(instId, pagePath, 'Drawer'),`
      }
      /**
       * 更改属性 如弹窗标题
       */
      setStatue,
    }));
    console.log(ModalData);
    const renderModalOrDrawer = (data: any[], map: any) => {
      return data.map((m) => {
        const Page = getSafePage(m.pagePath, map);
        return (
          <Page
            {...m}
            pageSrc={m.pagePath}
            state={m.params}
            lcdpParentRenderId={m.lcdpParentRenderId}
            closeModal={m.onCancel}
          />
        );
      });
    };
    return (
      <div>
        {renderModalOrDrawer(ModalData, ModalMap)}
        ${isMobile ? '' : '{renderModalOrDrawer(DrawerData, DrawerMap)}'}
      </div>
    );
  },
);
export default ModalManager;
`,
  );

  return [['src', 'utils', 'ModalManager'], file];
}
