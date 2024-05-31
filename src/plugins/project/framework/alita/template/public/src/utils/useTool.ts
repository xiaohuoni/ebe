import { useContext } from 'react';
import { Context } from './Context/context';
import {
  getAllForm,
  getBoframerOwnForms,
  getBOFramerOwnFormValues,
  getFieldsValue,
  getFormByCompId,
  getOwnFormValues,
} from './formUtils';

const toBool = (v: string | boolean, defaultValue?: any) => {
  let val = v;
  if ([null, undefined].includes(val) && defaultValue !== undefined) {
    val = defaultValue;
  }

  if (val === 'true') {
    return true;
  }
  if (val === 'false') {
    return false;
  }

  return val;
};

export interface ToolsContext {
  addToAwaitQueue: (
    compId: string,
    functionName: string,
    ...args: any[]
  ) => void;
}

export const useTool = (refs: Record<string, any>, context: ToolsContext) => {
  const { refs: renderRefs } = useContext(Context);

  const { addToAwaitQueue } = context;

  const getValue = (id: string, stateName?: string) => {
    if (stateName) {
      return Promise.resolve(refs?.[id]?.[stateName]);
      // return refs?.[id]?.[stateName];
    }
    // return refs?.[id]?.value;
    return Promise.resolve(refs?.[id]?.value);
  };

  const setValue = (ids: Record<string, any> | string, value?: any) => {
    if (Object.prototype.toString.call(ids) === '[object Object]') {
      Object.keys(ids).forEach((id) => {
        if (ids[id]) {
          refs?.[id]?.setValue(ids[id]);
        }
      });
    } else if (typeof ids === 'string' && value !== undefined) {
      refs?.[ids]?.setValue(value);
    } else {
      console.error('传入的组件ID数据异常');
    }
  };
  const getVisible = (id: string) => {
    return refs?.[id]?.visible ?? true;
  };

  const setVisible = (
    ids: Record<string, boolean | 'toggle'> | string,
    value?: any,
  ) => {
    if (Object.prototype.toString.call(ids) === '[object Object]') {
      Object.keys(ids).forEach((id) => {
        // if ([undefined, null].includes(ids[id])) {
        if (ids[id] === 'toggle') {
          refs?.[id]?.setVisible(!getVisible(id));
        } else {
          refs?.[id]?.setVisible(toBool(ids[id], true));
        }
        // }
      });
    } else if (typeof ids === 'string' && value !== undefined) {
      refs?.[ids]?.setVisible(value);
    } else {
      console.error('传入的组件ID数据异常');
    }
  };

  const getRequired = (id: string) => {
    return refs?.[id]?.required || false;
  };

  const setRequired = (
    ids: Record<string, boolean | 'toggle'> | string,
    value?: any,
  ) => {
    if (Object.prototype.toString.call(ids) === '[object Object]') {
      Object.keys(ids).forEach((id) => {
        // if (ids[id]) {
        if (ids[id] === 'toggle') {
          refs?.[id]?.setRequired(!getRequired(id));
        } else {
          refs?.[id]?.setRequired(toBool(ids[id], false));
        }
        // }
      });
    } else if (typeof ids === 'string' && value !== undefined) {
      refs?.[ids]?.setRequired(value);
    } else {
      console.error('传入的组件ID数据异常');
    }
  };

  const getDisabled = (id: string) => {
    return refs?.[id]?.disabled || false;
  };

  const setDisabled = (
    ids: Record<string, boolean | 'toggle' | 'false' | 'true'> | string,
    value?: any,
  ) => {
    if (Object.prototype.toString.call(ids) === '[object Object]') {
      Object.keys(ids).forEach((id) => {
        // if (ids[id]) {
        if (ids[id] === 'toggle') {
          refs?.[id]?.setDisabled(!getDisabled(id));
        } else {
          refs?.[id]?.setDisabled(toBool(ids[id], false));
        }
        // }
      });
    } else if (typeof ids === 'string' && value !== undefined) {
      refs?.[ids]?.setDisabled(value);
    } else {
      console.error('传入的组件ID数据异常');
    }
  };

  /**
   * 清空值
   */
  const clearValue = (compId: string) => {
    if (!refs[compId]) {
      console.warn(`当前组件ID=${compId}不存在，有可能已经删除或未初始化`);
      return;
    }

    if (typeof refs[compId]?.clearValue === 'function') {
      refs[compId]?.clearValue();
      return;
    }

    if (typeof refs[compId]?.setValue === 'function') {
      refs[compId]?.setValue(null);
      return;
    }
    console.error(`当前组件ID=${compId}的clearValue方法不存在`);
  };

  /**
   * 调用控件的内部方法
   * @param comId  id
   * @param methodName 方法名
   * @param args 参数
   */
  const callComponentMethod = (
    comId: string,
    methodName: string,
    ...args: any[]
  ) => {
    if (refs?.[comId]) {
      return refs?.[comId]?.[methodName]?.(...args);
    } else {
      // console.error('组件' + comId + '不存在');
      addToAwaitQueue(comId, methodName, ...args);
    }
  };

  /**
   * 调用控件的内部方法
   * @param comId  id
   * @param methodName 方法名
   * @param args 参数
   */
  const asyncCallComponentMethod = (
    comId: string,
    methodName: string,
    ...args: any[]
  ) =>
    new Promise((resolve, reject) => {
      if (refs?.[comId]) {
        resolve(refs?.[comId]?.[methodName]?.(...args));
      } else {
        // resolve(undefined);
        resolve(addToAwaitQueue(comId, methodName, ...args));
        // reject(new Error('组件' + comId + '不存在'));
      }
    });

  /**
   * 获取当前表单值
   */
  const getFormValue = async (compId: string): Promise<any> => {
    // 表单不存在 就返回null
    if (!refs[compId]) return Promise.reject(new Error('组件不存在'));

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
    // 表单不存在 就返回null
    if (!refs[compId]) return Promise.reject(new Error('组件不存在'));

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
  const setFormValues = (compId: string, formValues: Record<string, any>) => {
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
    getValue,
    setValue,
    getVisible,
    setVisible,
    getRequired,
    setRequired,
    callComponentMethod,
    setDisabled,
    getDisabled,
    getFormValue,
    validateForm,
    resetForm,
    clearValue,
    setFormValues,
    asyncCallComponentMethod,
    validateAllForm,
    getAllFormValues,
    resetAllForm,
  };
};
