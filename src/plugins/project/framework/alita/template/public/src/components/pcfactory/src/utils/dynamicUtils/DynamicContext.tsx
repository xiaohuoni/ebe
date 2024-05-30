import { useContext, createContext } from 'react';

export interface DynamicDataContext {

  /**
   * 是否在动态数据容器内
   */
  _innerDynamicDataContainer: boolean;

  /**
   * 动态数据容器内表单引用集合
   */
  formsRefMap: Record<string, any>;

  /**
   *
   * @param formCode 动态数据编码
   * @param formRef 表单引用
   * @returns
   */
  updateFormChildRef: (formCode: string, formRef: any) => void;

  /**
   * 表单内容变动回调
   * @param formCode 表单编码
   * @param changedFieldName 表单变动字段
   * @param changedFieldValue 表单变动值
   * @returns
   */
  onFormChange: (formCode: string, changedFieldName: string, changedFieldValue: unknown) => void;

  /**
   * 表单，目前提供给自定义组件使用
   */
  form: {

    /**
     * 获取动态容器表单值
     * @returns
     */
    getFieldsValue: () => Record<string, any>;

    /**
     * 重置动态容器
     * @returns
     */
    resetFields: () => void;

    /**
     * 设置表单值
     * @param assignData
     * @returns
     */
    setFieldsValue: (assignData: Record<string, unknown>) => void;

    /**
     * 监听表单值变化
     * @param formCode
     * @param fieldCode
     * @returns
     */
    useWatch: (formCode: string, fieldCode: string) => unknown;
  }
}

export interface NoopInDynamicContainerProps {

  /**
   * 是否在动态数据容器内
   */
  _innerDynamicDataContainer: false;

  form: DynamicDataContext['form']
}

export const dynamicDataContext = createContext<DynamicDataContext | NoopInDynamicContainerProps>({
  _innerDynamicDataContainer: false,
  form: {
    getFieldsValue: () => { console.warn('请在动态容器下使用getFieldsValue方法'); return {}; },
    resetFields: () => { console.warn('请在动态容器下使用resetFields方法'); },
    setFieldsValue: () => { console.warn('请在动态容器下使用resetFields方法'); },
    useWatch: (formCode: string, fieldCode: string) => { console.warn('请在动态容器下使用useWatch方法'); },
  },
});

dynamicDataContext.displayName = 'PCFactoryDynamicDataContext';


const useDynamicData = () => {
  return useContext(dynamicDataContext);
};

const DynamicDataProvider = dynamicDataContext.Provider;

export {
  DynamicDataProvider,
  useDynamicData,
};
