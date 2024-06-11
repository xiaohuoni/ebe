interface TransSuperObjectParams {
  refs: Record<string, any>;
  dataSnapshot: Record<string, any>;
  data?: Record<string, any>;
  sceneCode?: string;
}

const transInsts = (v: any[]) => {
  if (Array.isArray(v)) {
    // 表格自动生成行主键时，需剔除行主键
    v.forEach((_v) => {
      if (_v.__RowId__) {
        delete _v.__RowId__;
      }
    });
    // 表格绑定数据源时，添加空白行会先往数据源中添加空对象占位，故此处需删掉空白对象占位
    return v.filter((_v) => Object.keys(_v).length);
  }
  if (v) {
    return [v];
  }
  return [];
};

const useTransSuperObjectParams = (params: TransSuperObjectParams) => {
  const { refs, dataSnapshot, data = {}, sceneCode = 'U' } = params;

  const transSuperObjectParams = async (
    busiObjectIdMap: Record<
      string,
      { formId?: string; busiObjectId?: string }
    > = {},
    extServices: { sceneCode: string; actionCode: string }[] = [],
  ) => {
    const params = {
      busiObjectIds: Object.values(busiObjectIdMap)
        .map((item) => item.busiObjectId)
        .filter(Boolean),
      sceneCode,
      originalInsts: {},
      insts: {},
    } as Record<string, any>;

    const dataSourceNames = Object.keys(busiObjectIdMap);
    for (let index = 0; index < dataSourceNames.length; index++) {
      const name = dataSourceNames[index];
      const { formId, busiObjectId } = busiObjectIdMap[name];
      if (busiObjectId) {
        params.originalInsts[busiObjectId] = transInsts(dataSnapshot[name]);
        if (formId) {
          const formDataSoure = await refs[formId]?.validateFormAndScroll();
          // 说明是表单形式作为提交相应的值
          if (formDataSoure) {
            params.insts[busiObjectId] = transInsts(
              Object.assign({}, data[name], formDataSoure),
            );
          } else {
            // 其它形式，比如数组
            params.insts[busiObjectId] = transInsts(data[name]);
          }
        }
      }
    }
    // 扩展服务处理, 判断当前场景是否命中扩展服务
    if (extServices?.length) {
      const item = extServices.find((i) => i.sceneCode === sceneCode);
      if (item) {
        Object.assign(params, {
          sceneCode: item.sceneCode !== 'U' ? item.sceneCode : 'A', // 不限默认是新增
          actionCode: item.actionCode,
        });
      }
    }
    return params;
  };

  return {
    transSuperObjectParams,
  };
};

export default useTransSuperObjectParams;
