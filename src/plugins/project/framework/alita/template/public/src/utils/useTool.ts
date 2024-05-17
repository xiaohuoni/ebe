const toBool = (v: string | boolean) => { 
  if (v === 'true') {
    return true;
  }
  if (v === 'false') {
    return false;
  }
  return v;
}


type RefsType = Record<string, any>;

export const useTool = (refs: Record<string, any>) => {
  const getValue = (id: string, stateName?: string) => {
    if (stateName) {
      return refs?.[id]?.[stateName];
    }
    return refs?.[id]?.value;
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
    return refs?.[id]?.visible || true;
  };

  const setVisible = (
    ids: Record<string, boolean | 'toggle'> | string,
    value?: any,
  ) => {
    if (Object.prototype.toString.call(ids) === '[object Object]') {
      Object.keys(ids).forEach((id) => {
        if (ids[id]) {
          if (ids[id] === 'toggle') {
            refs?.[id]?.setVisible(!getVisible(id));
          } else {
            refs?.[id]?.setVisible(ids[id]);
          }
        }
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
        if (ids[id]) {
          if (ids[id] === 'toggle') {
            refs?.[id]?.setRequired(!getRequired(id));
          } else {
            refs?.[id]?.setRequired(ids[id]);
          }
        }
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
        if (ids[id]) {
          if (ids[id] === 'toggle') {
            refs?.[id]?.setDisabled(!getDisabled(id));
          } else {
            refs?.[id]?.setDisabled(toBool(ids[id]));
          }
        }
      });
    } else if (typeof ids === 'string' && value !== undefined) {
      refs?.[ids]?.setDisabled(value);
    } else {
      console.error('传入的组件ID数据异常');
    }
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
      refs?.[comId]?.[methodName]?.(...args);
    } else {
      console.error('组件' + comId + '不存在');
    }
  };

  /**
   * 获取当前表单值
   * TODO: 这里的逻辑缺失，缺少循环容器内嵌套表单的情况
   */
  const getFormValue = (compId: string) => { 
    // 这里逻辑肯定不对
    if (refs[compId]) {
      return refs[compId].getFieldsValue();
    }
    return null;
  }

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
  };
};
