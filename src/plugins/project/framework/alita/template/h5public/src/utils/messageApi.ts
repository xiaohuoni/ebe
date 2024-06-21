import { Dialog, Toast } from 'antd-mobile-5';
import { isValidElement } from 'react';
import Spin from './LcdpSpin';

const toString = (text: any) => {
  const type = typeof text;
  if (!text) {
    return '';
  }
  switch (type) {
    case 'object':
      if (isValidElement(text)) {
        return text;
      }
      return JSON.stringify(text);
    case 'boolean':
    case 'number':
    case 'string':
      return text.toString();
    default:
      break;
  }
  return text;
};

// 兼容pc端message
const messageApi = {
  error: (text: string, duration = 2000) => {
    Toast.show({
      icon: 'fail',
      content: toString(text),
      duration,
      maskClickable: false,
    });
  },
  fail: (text: string, duration = 2000) => {
    Toast.show({
      icon: 'fail',
      content: toString(text),
      duration,
      maskClickable: false,
    });
  },
  success: (text: string, duration = 2000) => {
    Toast.show({
      icon: 'success',
      content: toString(text),
      duration,
      maskClickable: false,
    });
  },
  warn: (text: string, duration = 2000) => {
    Toast.show({ content: toString(text), duration, maskClickable: false });
  },
  info: (text: string, duration = 2000) => {
    Toast.show({ content: toString(text), duration, maskClickable: false });
  },
  loading: (text: string, duration = 0) => {
    Toast.show({
      icon: 'loading',
      content: toString(text),
      duration,
      maskClickable: false,
    });
  },
  destroy: () => {
    Toast.clear();
  },
  hide: () => {
    Toast.clear();
  },
};

const showAlert = ({
  title = '',
  content = '',
  okText = '知道了',
  cancelText = '取消',
  onOk = () => {},
  onCancel = () => {},
  type = 'confirm',
}) => {
  Dialog.show({
    title,
    content,
    closeOnAction: true,
    actions: [
      type === 'confirm'
        ? [
            {
              key: 'cancel',
              text: cancelText,
              onClick: onCancel,
            },
            {
              key: 'onOk',
              text: okText,
              onClick: onOk,
            },
          ]
        : [
            {
              key: 'onOk',
              text: okText,
              onClick: onOk,
            },
          ],
    ],
  });
};

// 兼容pc端Modal
const Modal = {
  success: showAlert,
  info: showAlert,
  warning: showAlert,
  error: showAlert,
  confirm: showAlert,
};

export { messageApi, Modal, Spin };
