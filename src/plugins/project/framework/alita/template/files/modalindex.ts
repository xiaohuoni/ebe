import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'tsx',
    `import Toast from 'antd-mobile-5/es/components/toast';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Modal from './Modal';
import { modePropsType, openModalRef, openModalType } from './types';

const ModalManager = forwardRef<openModalRef, modePropsType>((props, ref) => {
  // @ts-ignore
  const { parseNodeBefore, getLocale } = props;
  const [modalMap, setModalMap] = useState({}) as any;
  const ModalSerialRef = useRef(0);
  let serial = ModalSerialRef.current;
  const openModal = ({
    pageId,
    modalPath,
    params,
    onOk,
    onCancel,
    appId,
    lcdpParentRenderId,
  }: openModalType) => {
    if (!pageId && !modalPath) {
      Toast.show({
        icon: 'fail',
        content: '弹窗操作失败',
      });
      return;
    }
    const modal = modalMap?.[pageId];
    if (modal && modal.modalPath === modalPath) {
      setModalMap({
        ...modalMap,
        [pageId]: {
          ...modal,
          onOk,
          onCancel,
          params,
          visible: true,
          lcdpParentRenderId,
        },
      });
    } else {
      const modalId = \`DModal_\${serial}\`;
      // 不存在时，初始化一个新的弹出框
      const initialModalProps = {
        visible: true,
        params,
        onOk,
        onCancel,
        modalId,
        appId,
        lcdpParentRenderId,
        onClose: (() => (isDestroy: boolean) => {
          initialModalProps.visible = false;
          setModalMap({
            ...modalMap,
            [pageId]: initialModalProps,
          });
          if (isDestroy) {
            delete modalMap[pageId];
            setModalMap({
              ...modalMap,
            });
          }
          // @ts-ignore
        })(modalId),
      };
      setModalMap({
        ...modalMap,
        [pageId]: initialModalProps,
      });
      serial += 1;
    }
  };

  const close = (modalId: string, pageId: string) => {
    let canClose = false;
    if (pageId) {
      const modal = modalMap[pageId];
      if (modal) {
        modal.visible = false;
        setModalMap({ ...modalMap });
        canClose = true;
      }
    } else if (modalId) {
      const modal = Object.values(modalMap).filter(
        (m: any) => m.modalId === modalId,
      );
      if (modal) {
        // @ts-ignore
        modal.visible = false;
        setModalMap({ ...modalMap });
        canClose = true;
      }
    }
    if (!canClose) {
      Object.values(modalMap).forEach((m: any) => m.visible === false);
      setModalMap({ ...modalMap });
    }
  };

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal: close,
  }));

  const showModel = () => {
    return Object.keys(modalMap).map((pageId: string) => {
      const m = modalMap[pageId];
      return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <Modal
          key={m.modalId}
          {...m}
          pageId={pageId}
          managerRef={ref}
          parseNodeBefore={parseNodeBefore}
          getLocale={getLocale}
        />
      );
    });
  };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <>{showModel()}</>;
});

export default ModalManager;
`,
  );

  return [['src', 'utils', 'Modal'], file];
}
