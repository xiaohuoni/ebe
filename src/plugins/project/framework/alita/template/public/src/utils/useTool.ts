import { updateNodeChildren } from './formUtils';

const toBool = (v: string | boolean, defaultValue?: any) => {
  let val = v;
  if ([null, undefined].includes(val as any) && defaultValue !== undefined) {
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
  const { addToAwaitQueue } = context;

  const asyncGetValue = (id: string, stateName?: string) => {
    if (stateName) {
      return Promise.resolve(refs?.[id]?.[stateName]);
      // return refs?.[id]?.[stateName];
    }
    // return refs?.[id]?.value;
    return Promise.resolve(refs?.[id]?.value);
  };

  const getValue = (id: string, stateName?: string) => {
    if (stateName) {
      // @ts-ignore
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
    if (methodName === 'getValue') {
      return refs?.[comId]?.value;
    }
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
   * 获取联动数据值
   * @param attrDataMap  静态数据
   * @param aNbr a端值
   * @param zNbr z端值
   * @param targetValue 关联值
   */
  const getTriggerRelDataSource = (
    attrDataMap: Record<string, any[]>,
    aNbr: any,
    zNbr: any,
    targetValue?: any,
  ) => {
    if (attrDataMap) {
      // 用于处理联动规则的工具方法
      // 下拉清空，返回z端数据
      if (
        targetValue === undefined ||
        (Array.isArray(targetValue) && targetValue.length === 0)
      ) {
        return attrDataMap?.[zNbr] || [];
      }
      const res = attrDataMap?.[aNbr]?.find((i) => {
        const targetValueArr = Array.isArray(targetValue)
          ? targetValue[0]
          : targetValue;
        return i.value === targetValueArr;
      });
      if (res && res.relatedAttrSpecList) {
        const targetRelRule = res.relatedAttrSpecList.find(
          (i: any) => i.zattrNbr === zNbr,
        );
        return targetRelRule
          ? targetRelRule.zrelatedAttrValueList.map((o: any) => ({
              label: o.zattrValueName,
              value: o.zattrValue,
            }))
          : [];
      }
      return [];
    }
    return undefined;
  };

  return {
    getValue,
    asyncGetValue,
    setValue,
    getVisible,
    setVisible,
    getRequired,
    setRequired,
    callComponentMethod,
    setDisabled,
    getDisabled,
    clearValue,
    asyncCallComponentMethod,
    updateNodeChildren,
    getTriggerRelDataSource,
  };
};
