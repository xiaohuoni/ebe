import { LocaleFunction } from '@lingxiteam/types';

export interface modePropsType {
  pageId?: string;
  visible?: boolean;
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
  getLocale: LocaleFunction;
}
export interface openModalType {
  pageId: string;
  modalPath: string;
  params: Record<string, any>;
  onOk: () => void;
  onCancel: () => void;
  appId: string;
  lcdpParentRenderId: string;
}
export interface openModalRef {
  openModal: (options: openModalType) => void;
  closeModal: (modalId: string, pageId: string) => void;
}

export interface ModelProps {
  position: 'top' | 'bottom' | 'right' | 'left';
  mode: 'alert' | 'sliderLeft' | 'sliderRight' | 'dropdown' | 'popup' | '';
  closeOnMaskClick: boolean;
  destroyOnClose: boolean;
  showCloseButton: boolean;
  width?: string;
  height?: string;
}
