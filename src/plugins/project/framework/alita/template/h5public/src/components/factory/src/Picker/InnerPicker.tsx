import { LingxiForwardRef } from '@lingxiteam/types';
import Picker from 'antd-mobile-5/es/components/picker';
import { useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { useListenToggleBoolean } from '../utils/hooks/useToggleBoolean';

export interface PickerProps {
  visible: boolean;
  onPopViewCancel?: () => void;
  onChange?: (e: any, e2: any) => void;
  data: Record<string, any>[];
  title: string;
  style: Record<string, any>;
  closeOnMaskClick: boolean;
}
const MyPicker = LingxiForwardRef<any, PickerProps>((props, ref) => {
  const {
    onChange = () => {},
    visible = false,
    onPopViewCancel,
    getEngineApis,
    title,
    style,
    closeOnMaskClick = true,
    className,
  } = props;
  const [data, setData] = useState<any>([]);
  const [show, setShow] = useListenToggleBoolean(visible);
  const { getLocale } = getEngineApis?.() || {};

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  useImperativeHandle(ref, () => ({
    visible: show,
    setVisible: setShow,
    setData,
  }));

  const onClose = () => {
    setShow(false);
  };

  const onMyDismiss = () => {
    if (onPopViewCancel) {
      onPopViewCancel();
    }
    onClose();
  };

  const getItem = useCallback(
    (val) => data?.find((item: any) => item.value === val),
    [data],
  );

  const onOk = (v: string | any[]) => {
    onClose();
    if (v && Array.isArray(v) && v.length > 0) {
      if (typeof onChange === 'function') {
        onChange(v[0], getItem(v[0]));
      }
    }
  };

  return (
    <Picker
      className={className}
      closeOnMaskClick={closeOnMaskClick}
      style={style}
      cancelText={getLocale?.('cancelText', '取消')}
      confirmText={getLocale?.('confirm', '确定')}
      title={title}
      visible={show}
      columns={data ? [data] : []}
      onConfirm={onOk}
      onClose={onMyDismiss}
    />
  );
});

MyPicker.displayName = 'InnerPicker';

export default MyPicker;
