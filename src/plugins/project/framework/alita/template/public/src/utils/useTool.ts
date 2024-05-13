export interface IUseTool {
  /**
   * 组件的refs
   */
  refs: Record<string, any>;
}
export const useTool = (props: IUseTool) => {

  const {
      refs,
  } = props;

  const getValue = (id: string, stateName?: string) => {
      if (stateName) {
          return refs?.[id]?.[stateName];
      }
      return refs?.[id]?.value;
  };

  const setValue = (ids: Record<string, any> | string, value?: any ) => {
    if(Object.prototype.toString.call(ids) === '[object Object]') {
      Object.keys(ids).forEach(id => {
      if (ids[id]) {
        refs?.[id]?.setValue(ids[id]);
      }
    })
    }
    else if (typeof ids === 'string' && value !== undefined) {
      refs?.[ids]?.setValue(value);
    } else {
      console.error('传入的组件ID数据异常')
    }
  };
  const getVisible = (id: string) => {
    return refs?.[id]?.visible || true;
  };

  const setVisible = (ids: Record<string, boolean | 'toggle'> | string, value?: any) => {
    if(Object.prototype.toString.call(ids) === '[object Object]') {
      Object.keys(ids).forEach(id => {
      if (ids[id]) {
        if (ids[id] === 'toggle') {
          refs?.[id]?.setVisible(!getVisible(id));
        } else {
          refs?.[id]?.setVisible(ids[id]);
        }
      }
    })
    }
    else if (typeof ids === 'string' && value !== undefined) {
      refs?.[ids]?.setVisible(value);
    } else {
      console.error('传入的组件ID数据异常')
    }
  };

  const getRequired = (id: string) => {
    return refs?.[id]?.required || false;
  };

  const setRequired = (ids: Record<string, boolean | 'toggle'> | string, value?: any) => {
    if(Object.prototype.toString.call(ids) === '[object Object]') {
      Object.keys(ids).forEach(id => {
      if (ids[id]) {
        if (ids[id] === 'toggle') {
          refs?.[id]?.setVisible(!getRequired(id));
        } else {
          refs?.[id]?.setVisible(ids[id]);
        }
      }
    })
    }
    else if (typeof ids === 'string' && value !== undefined) {
      refs?.[ids]?.setVisible(value);
    } else {
      console.error('传入的组件ID数据异常')
    }
  };

  /**
   * 调用控件的内部方法
   * @param comId  id
   * @param methodName 方法名
   * @param args 参数
   */
  const callComponentMethod = (comId: string, methodName: string, ...args: any[]) => {
    if (refs?.[comId]) {
      refs?.[comId]?.[methodName]?.(...args);
    } else {
      console.error('组件' + comId + '不存在');
    }
  };
  
  return {
      getValue,
      setValue,
      getVisible,
      setVisible,
      getRequired,
      setRequired,
      callComponentMethod
  }
};