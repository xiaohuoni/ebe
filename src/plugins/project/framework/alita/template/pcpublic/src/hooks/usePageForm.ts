import { Context } from '@/utils/Context/context';
import {
  getAllForm,
  getBoframerOwnForms,
  getBOFramerOwnFormValues,
  getFieldsValue,
  getFormByCompId,
  getOwnFormValues,
  updateNodeChildren,
} from '@/utils/formUtils';
import { useContext } from 'react';

const usePageForm = (refs: Record<string, any>) => {
  const { refs: renderRefs } = useContext(Context);

  /**
   * 获取当前表单值
   */
  const getFormValue = async (compId: string): Promise<any> => {
    // 为了兼容动态渲染引擎，表单不存在 就返回空对象
    if (!refs[compId]) return Promise.resolve({});

    // 表单的情况 可能是循环容器
    if (refs[compId].compName === 'Form') {
      const forms = getFormByCompId(compId, refs);
      return getFieldsValue(forms, (form) => {
        return form?.getFieldsValue?.();
      });
    }

    if (refs[compId].compName === 'BOFramer') {
      return getBOFramerOwnFormValues(
        {
          refs,
          renderRefs,
          compId,
        },
        (form) => form?.getFieldsValue?.(),
      );
    }

    return Promise.reject(
      new Error('该组件不支持使用getFormValues获取表单数据'),
    );
  };

  /**
   * 验证并取值
   * @param compId
   */
  const validateForm = async (compId: string): Promise<any> => {
    // 为了兼容动态渲染引擎，表单不存在 就返回空对象
    if (!refs[compId]) return Promise.resolve({});

    // 表单的情况 可能是循环容器
    if (refs[compId].compName === 'Form') {
      const forms = getFormByCompId(compId, refs);
      return getFieldsValue(forms, (form) => {
        return form?.validateFormAndScroll?.();
      });
    }

    if (refs[compId].compName === 'BOFramer') {
      return getBOFramerOwnFormValues(
        {
          refs,
          renderRefs,
          compId,
        },
        (form) => form?.validateFormAndScroll?.(),
      );
    }
    return Promise.reject(
      new Error('该组件不支持使用getFormValues获取表单数据'),
    );
  };

  /**
   * 重置表单值
   * @param compId
   */
  const resetForm = (compId: string) => {
    if (!refs[compId]) return;
    const compName = refs[compId].compName;
    if (compName === 'BOFramer') {
      const forms = getBoframerOwnForms({
        currentRefs: refs,
        renderRefs,
        compId,
      });

      forms.forEach((form) => {
        form?.resetFields?.();
      });
    } else {
      const forms = getFormByCompId(compId, refs);
      // 支持循环容器中的表单重置
      (Array.isArray(forms) ? forms : [forms]).forEach((form) =>
        form?.resetFields(),
      );
    }
  };

  /**
   * 设置表单值
   * @param compId 组件id
   * @param formValues 表单值
   */
  const setFormValues = (
    compId: string,
    formValues: Record<string, any> = {},
  ) => {
    if (!refs[compId]) return;
    const compName = refs[compId].compName;

    if (compName === 'BOFramer') {
      const forms = getBoframerOwnForms({
        currentRefs: refs,
        renderRefs,
        compId,
      });

      forms.forEach((form) => {
        form?.setFieldsValue(formValues);
      });
    } else {
      refs[compId]?.setFieldsValue?.(formValues);
    }
  };

  /**
   * 校验并获取所有表单值
   * 获取页面下的所有表单，包含当前页面下的表单、页面容器下的表单、业务组件下的表单。
   * 不包含所有弹窗类组件的表单数据
   */
  const validateAllForm = () =>
    getOwnFormValues({ currentRefs: refs, renderRefs }, (form) =>
      form.validateFormAndScroll?.(false),
    );

  /**
   * 获取所有表单值 但不校验
   * 获取页面下的所有表单，包含当前页面下的表单、页面容器下的表单、业务组件下的表单。
   * 不包含所有弹窗类组件的表单数据
   */
  const getAllFormValues = () =>
    getOwnFormValues({ currentRefs: refs, renderRefs }, (form) =>
      form.getFieldsValue?.(),
    );

  /**
   * 重置所有表单
   * 获取页面下的所有表单，包含当前页面下的表单、页面容器下的表单、业务组件下的表单。
   * 不包含所有弹窗类组件的表单数据
   */
  const resetAllForm = () => {
    const forms = getAllForm({
      currentRefs: refs,
      renderRefs,
    });

    forms.forEach((form) => {
      form.resetFields();
    });
  };

  return {
    getFormValue,
    validateForm,
    resetForm,
    setFormValues,
    validateAllForm,
    getAllFormValues,
    resetAllForm,
    updateNodeChildren,
  };
};

export default usePageForm;
