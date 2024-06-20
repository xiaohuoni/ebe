import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'Modal',
    'tsx',
    `import CenterPopup from 'antd-mobile-5/es/components/center-popup';
import Popup from 'antd-mobile-5/es/components/popup';
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react';

export interface modePropsType {
  pageId?: string;
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: (isDestroy: boolean) => void;
  sceneCode?: string;
  params?: Record<string, any>;
  modalId?: string;
  managerRef?: Record<string, any>;
  lcdpParentRenderId?: string;
  appId: string;
  parseNodeBefore?: (node: any) => void;
  getLocale?: any;
  children?: any;
  title?: string;
  position: 'top' | 'bottom' | 'right' | 'left';
  mode: 'alert' | 'sliderLeft' | 'sliderRight' | 'dropdown' | 'popup' | '';
  closeOnMaskClick?: boolean;
  destroyOnClose: boolean;
  showCloseButton: boolean;
  width?: string;
  height?: string;
}

const Modal = forwardRef<any, modePropsType>((props, ref) => {
  const {
    open,
    onCancel,
    onClose,
    modalId,
    children,
    width,
    height,
    mode,
    destroyOnClose,
    ...other
  } = props;
  const style =
    mode === 'alert'
      ? {
          '--min-width': width,
          '--max-height': height,
        }
      : {};
  const bodyStyle = useMemo(() => {
    switch (mode) {
      case 'alert':
        return {
          width: width || '75vw',
          height,
        };
      case 'sliderLeft':
        return {
          minWidth: width || '30vw',
          width,
          borderBottomRightRadius: '8px',
          borderTopRightRadius: '8px',
          overflow: 'hidden',
        };
      case 'sliderRight':
        return {
          minWidth: width || '30vw',
          width,
          borderBottomLeftRadius: '8px',
          borderTopLeftRadius: '8px',
          overflow: 'hidden',
        };
      case 'dropdown':
        return {
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          overflow: 'hidden',
          minHeight: height || '30vh',
          height,
        };
      case 'popup':
        return {
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          overflow: 'hidden',
          minHeight: height,
          height,
          // minHeight: '30vh',
        };
      default:
        break;
    }
    return {};
  }, [mode]);
  useImperativeHandle(ref, () => ({
    close: onClose,
    modalId,
  }));
  const MyModal = useMemo(() => {
    if (mode === 'alert') {
      return CenterPopup;
    }
    if (mode === 'popup') {
      return Popup;
    }
    return Popup;
  }, [mode]);
  if (!MyModal) {
    return null;
  }
  return (
    <MyModal
      // @ts-ignore
      round
      style={style}
      bodyStyle={bodyStyle}
      visible={open}
      getContainer={document.body}
      onClose={() => {
        onClose && onClose(destroyOnClose);
      }}
      destroyOnClose={destroyOnClose}
      afterClose={onCancel}
      {...other}
      closeOnMaskClick={true}
    >
      {children}
    </MyModal>
  );
});
Modal.defaultProps = {
  getLocale: () => '',
};
export default Modal;
`,
  );

  return [['src', 'utils', 'Modal'], file];
}
