import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'Modal',
    'tsx',
    `
    import Pageview, { RootProps } from '@/components/Pageview';
    import CenterPopup from 'antd-mobile-5/es/components/center-popup';
    import Popup from 'antd-mobile-5/es/components/popup';
    import React, {
      forwardRef,
      useEffect,
      useImperativeHandle,
      useMemo,
      useState,
    } from 'react';
    import type { ModelProps, modePropsType } from './types';
    const pos = {
      sliderLeft: 'left',
      sliderRight: 'right',
      popup: 'bottom',
      dropdown: 'top',
    };
    const defaultPopupProps: ModelProps = {
      position: 'bottom',
      mode: '',
      closeOnMaskClick: true,
      destroyOnClose: false,
      showCloseButton: false,
    };
    
    const Modal = forwardRef<any, modePropsType>((props, ref) => {
      const {
        pageId,
        visible = false,
        onOk,
        onCancel,
        onClose,
        sceneCode,
        params,
        modalId,
        managerRef,
        lcdpParentRenderId,
        appId,
        getLocale,
      } = props;
    
      const [popupProps, setPopupProps] = useState<ModelProps>(defaultPopupProps);
      const [show, setShow] = useState(false);
      const style = useMemo(() => {
        const { width } = popupProps;
        switch (popupProps.mode) {
          case 'alert':
            return {
              '--min-width': width,
              '--max-width': width,
            };
    
          default:
            break;
        }
        return {};
      }, [popupProps]);
      const bodyStyle = useMemo(() => {
        const { width, height } = popupProps;
        switch (popupProps.mode) {
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
      }, [popupProps]);
    
      useEffect(() => {
        setShow(visible);
      }, [visible]);
    
      useEffect(() => {
        const modalProps = RootProps[pageId || ''] || defaultPopupProps;
        setPopupProps(modalProps);
      }, [pageId]);
      useImperativeHandle(ref, () => ({
        close: onClose,
        modalId,
      }));
    
      const MyModal = useMemo(() => {
        if (popupProps.mode === 'alert') {
          return CenterPopup;
        }
        if (popupProps.mode === 'popup') {
          return Popup;
        }
        return Popup;
      }, [popupProps.mode]);
    
      if (!MyModal) {
        return null;
      }
    
      return (
        <MyModal
          // @ts-ignore
          round
          {...popupProps}
          style={style}
          bodyClassName={\`dynamic_modal_\${pageId || ''}\`}
          bodyStyle={bodyStyle}
          visible={show}
          getContainer={document.body}
          onClose={() => {
            onClose && onClose(popupProps.destroyOnClose);
          }}
          afterClose={onCancel}
        >
          <Pageview pageSrc={pageId} />
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
