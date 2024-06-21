const usePageForm = (refs: Record<string, any>) => {
  /**
   * 获取当前表单值
   */
  const getFormValue = async (compId: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      // 为了兼容动态渲染引擎，表单不存在 就返回空对象
      if (!refs[compId]) return resolve({});

      // 表单的情况 可能是循环容器
      if (refs[compId].compName === 'DForm') {
        if (refs[compId]?.getFieldsValue) {
          refs[compId].getFieldsValue(resolve, reject);
        }
      }

      reject(`暂不支持改组件${refs[compId].compName}`);
    });
  };

  return {
    getFormValue,
  };
};

export default usePageForm;
