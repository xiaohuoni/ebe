import type { FormInstance } from 'antd/es/form';
import { useContext, createContext } from 'react';
import type { FormLayout } from 'antd/es/form/Form';
import type { ColProps } from 'antd/es/col';

export type StatusType = 'disabled' | 'readonly';

export type MonitorFn = (v: unknown, type: StatusType) => void;

export interface FormContextProps {

  /**
   * 是否在表单内
   */
  inForm: true;

  /**
   * 表单实例
   */
  form: FormInstance;

  /**
   * 状态下发
   */
  statusMonitor: {
    addListener: (fn: MonitorFn) => void,
    removeListener: (fn: MonitorFn) => void,
  };

  /**
   * 布局
   */
  layout: FormLayout,

  /**
   * 每行列数
   */
  colSpan?: 2 | 3 | 4 | 6 | 8 | 12 | 24;

  /**
   * 标题占比
   */
  labelCol: ColProps;

  /**
   * 内容占比
   */
  wrapperCol: ColProps;

  /**
   * 冒号
   */
  colon: boolean;

  /**
   * 标签对齐方式
   */
  labelAlign?: 'left' | 'right';

  /**
   * 上报子组件关系
   * @param uid 组件uid
   * @param fieldName 字段名
   * @returns
   */
  uploadChildRelation: (uid: string, fieldName: string) => void;

  /**
   * 打印模式
   */
  printMode?: boolean;

  /**
   * 上传设置值预处理方法
   * @param fileProps 字段名
   * @param fn 处理函数
   * @returns
   */
  preproccessSetFormValues: (fileProps: string, fn: (value: any) => any) => void;

  /**
   * 行间距
   */
  rowSpace: string | number

  /**
   * 列间距
   */
  colSpace: string | number
}

export interface NoopInFormProps {

  /**
   * 是否在表单内
   */
  inForm: false;
}

export const formContext = createContext<FormContextProps | NoopInFormProps>({
  inForm: false,
});
type FormEDContextProps = Pick<FormContextProps, 'colSpace' | 'colon' | 'labelAlign' | 'labelCol' | 'rowSpace' | 'colSpan' | 'layout' | 'wrapperCol'>
export const formEDContext = createContext<Partial<FormEDContextProps>>({});

formContext.displayName = 'PCFactoryFormContext';
formEDContext.displayName = 'PCFactoryFormEdContext';

const FormProvider = formContext.Provider;
const FormEDProvider = formEDContext.Provider;

const useForm = () => {
  return useContext(formContext);
};

const useEDForm = () => {
  return useContext(formEDContext);
};

export {
  FormProvider,
  useForm,
  useEDForm,
  FormEDProvider,
};
