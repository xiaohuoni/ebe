import { Context } from '@/utils/Context/context';
import {
  getFormValueByBOFramerId,
  getFormValueByFormId,
} from '@/utils/formUtils';
import { useContext } from 'react';
import {
  formCodeSubmit,
  getComponentsByCompId,
  getFieldsValueByCode,
  getFormsByBoframerId,
  validateFields,
} from '../utils/formUtils';

const usePageForm = (refs: Record<string, any>) => {
  const { refs: renderRefs } = useContext(Context);

  /**
   * 重置表单值
   * @param compId
   */
  const resetForm = (compId: string) => {
    if (!refs[compId]) return;
    const compName = refs[compId].compName;
    if (compName === 'BOFramer') {
      const forms = getFormsByBoframerId({
        refs,
        renderRefs,
        compId,
      });

      forms.forEach((form) => {
        form?.resetFields?.();
      });
    } else {
      const forms = getComponentsByCompId({ compId, refs });
      // 支持循环容器中的表单重置
      (Array.isArray(forms) ? forms : [forms]).forEach((form) =>
        form?.resetFields(),
      );
    }
  };

  /**
   * 获取当前表单值
   */
  const getFormValue = async (compId: string): Promise<any> => {
    if (!refs[compId]) return Promise.reject(new Error(`表单${compId}不存在`));
    return new Promise((resolve, reject) => {
      // 表单的情况 可能是循环容器
      if (refs[compId].compName === 'DForm') {
        if (refs[compId]?.getFieldsValue) {
          refs[compId].getFieldsValue(resolve, reject);
        }
      }

      reject(`暂不支持改组件${refs[compId].compName}`);
    });
  };

  /**
   * 验证并取值
   * @param compId
   */
  const validateForm = async (compId: string): Promise<any> => {
    if (!refs[compId]) return Promise.reject(new Error(`表单不存在`));
    const { compName } = refs[compId];
    if (!['BOFramer', 'DForm'].includes(compName))
      return Promise.reject(new Error(`表单校验并取值不支持 ${compName} 组件`));

    if (compName === 'DForm') {
      return getFormValueByFormId({ refs, compId });
    }

    // 业务组件
    return getFormValueByBOFramerId({ refs, renderRefs, compId });
  };

  /**
   * 校验并获取所有表单值
   * 获取页面下的所有表单，包含当前页面下的表单、页面容器下的表单、业务组件下的表单。
   * 不包含所有弹窗类组件的表单数据
   */
  const validateAllForm = () =>
    validateFields({ refs, renderRefs }, formCodeSubmit);

  /**
   * 获取所有表单值 但不校验
   * 获取页面下的所有表单，包含当前页面下的表单、页面容器下的表单、业务组件下的表单。
   * 不包含所有弹窗类组件的表单数据
   */
  const getAllFormValues = () =>
    validateFields({ refs, renderRefs }, getFieldsValueByCode);

  return {
    getFormValue,
    validateForm,
    validateAllForm,
    getAllFormValues,
    resetForm,
  };
};

export default usePageForm;
