export interface IUseTool {
  /**
   * 组件的refs
   */
  refs: Record<string, any>;
}
export const useTool = (props: IUseTool) => {
  const { refs } = props;

  const getValue = (id: string, stateName?: string) => {
    if (stateName) {
      return refs?.[id]?.[stateName];
    }
    return refs?.[id]?.value;
  };

  const setValue = (ids: string[], valueList: Record<string, any>) => {
    if (Array.isArray(ids)) {
      ids.forEach((id) => {
        if (valueList[id]) {
          refs?.[id]?.setValue(valueList[id]);
        }
      });
    } else {
      console.error('传入的组件ID数据异常');
    }
  };
  const getVisible = (id: string) => {
    return refs?.[id]?.visible || true;
  };

  const setVisible = (
    ids: string[],
    visibleList: Record<string, boolean | 'toggle'>,
  ) => {
    if (Array.isArray(ids)) {
      ids.forEach((id) => {
        if (visibleList[id] === 'toggle') {
          refs?.[id]?.setVisible(!getVisible(id));
        } else {
          refs?.[id]?.setVisible(visibleList[id]);
        }
      });
    } else {
      console.error('传入的组件ID数据异常');
    }
  };

  const getRequired = (id: string) => {
    return refs?.[id]?.required || false;
  };

  const setRequired = (
    ids: string[],
    visibleList: Record<string, boolean | 'toggle'>,
  ) => {
    if (Array.isArray(ids)) {
      ids.forEach((id) => {
        if (visibleList[id] === 'toggle') {
          refs?.[id]?.setRequired(!getRequired(id));
        } else {
          refs?.[id]?.setRequired(visibleList[id]);
        }
      });
    } else {
      console.error('传入的组件ID数据异常');
    }
  };
  return {
    getValue,
    setValue,
    getVisible,
    setVisible,
    getRequired,
    setRequired,
  };
};
