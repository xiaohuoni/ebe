import { FormInstance } from 'rc-field-form';
import React from 'react';

export type StatusType = 'disabled' | 'readonly';

export type MonitorFn = (v: unknown, type: StatusType) => void;
export interface DFormContextProps {
  visible?: boolean;
  isForm?: boolean;
  error?: any;
  form?: FormInstance;
  formListRef?: any;
  allDisabled?: boolean;

  /**
   * 上报组件id 和fieldProps
   */
  uploadChildRelation: (id: string, fieldProps: string) => void;

  /**
   * 状态下发
   */
  statusMonitor?: {
    addListener: (fn: MonitorFn) => void;
    removeListener: (fn: MonitorFn) => void;
  };
}
// @ts-ignore
export const DFormContext = React.createContext<DFormContextProps>({});

export const formSubmit = async (
  form: {
    submit: (
      arg0: (value: unknown) => void,
      arg1: (reason?: any) => void,
      arg2: any,
    ) => void;
  },
  isFormList: boolean,
) =>
  new Promise((resolve, reject) => {
    form.submit(resolve, reject, isFormList);
  });
export const formGetFieldsValue = async (
  form: {
    getFieldsValue: (
      arg0: (value: unknown) => void,
      arg1: (reason?: any) => void,
      arg2: any,
    ) => void;
  },
  isFormList: boolean,
) =>
  new Promise((resolve, reject) => {
    form.getFieldsValue(resolve, reject, isFormList);
  });

export const getListAllForms = (refs: Record<string, any>) => {
  const forms: any[] = [];
  Object.keys(refs).forEach((key) => {
    const compImperativeMethods = refs[key];
    if (
      compImperativeMethods?.name === 'DForm' &&
      typeof compImperativeMethods.submit === 'function'
    ) {
      forms.push(compImperativeMethods);
    }
  });
  return forms;
};

/**
 * 获取所有表单的数组
 * @param {*} callback (formValues: Array) => void;
 * @param {*} refs
 */
export const validateAndSubmitFormList = async (refs = {}) => {
  const forms = getListAllForms(refs);
  const actions = forms.map((form) => formSubmit(form, true));
  return Promise.all(actions);
};

export const validateAndGetFieldsValueFormList = async (refs = {}) => {
  const forms = getListAllForms(refs);
  const actions = forms.map((form) => formGetFieldsValue(form, true));
  return Promise.all(actions);
};

export const dformTypes = [
  {
    title: '单行输入',
    value: 'DformInput',
  },
  {
    title: '复选框',
    value: 'DCheckbox',
  },
  {
    title: '单选框',
    value: 'DformRadio',
  },
  {
    title: '多行输入',
    value: 'DformTextArea',
  },
  {
    title: '滑动开关',
    value: 'DformSwitch',
  },
  {
    title: '地址',
    value: 'DAddressPicker',
  },
  {
    title: '多列选择',
    value: 'DformSelect',
  },
  {
    title: '单项选择',
    value: 'DformPicker',
  },
  {
    title: '多项选择',
    value: 'DMultiplePicker',
  },
  {
    title: '上传图片',
    value: 'DformImagePicker',
  },
  {
    title: '上传附件',
    value: 'DformFile',
  },
  {
    title: '时间选择',
    value: 'DformDate',
  },
  {
    title: '数字输入',
    value: 'DformInputNumber',
  },
  {
    title: '评分',
    value: 'Star',
  },
];
