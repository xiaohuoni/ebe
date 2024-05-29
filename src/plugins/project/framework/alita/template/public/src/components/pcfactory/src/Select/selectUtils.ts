export const CHECK_ALL_VALUE = 'LING_XI_CHECK_ALL';

const typeFn: any = {
  string: String,
  number: Number,
  boolean: Boolean,
};

/**
 * 处理搜索逻辑
 * @param input
 * @param option
 * @returns
 */
export const localFilterOption = (input: string = '', option: any) => {
  // 本地支持value和label过滤
  let valueFilter = false;
  if (option?.value === CHECK_ALL_VALUE) {
    // 存在全选项时，永远展示
    return true;
  }
  if (option?.value && typeof option?.value === 'string') {
    valueFilter = option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }
  if (option?.children && typeof option.children === 'string') {
    return (
      option?.children?.toLowerCase?.().indexOf(input.toLowerCase()) >= 0 ||
      valueFilter
    );
  }

  return (
    option?.label?.toLowerCase?.().indexOf(input.toLowerCase()) >= 0 ||
    valueFilter
  );
};

// 判断data类型是不是是labelInValue格式
export const isLabelInValue = (data: any) => {
  if (Object.prototype.toString.call(data) === '[object Object]') {
    if (
      Object.keys(data).includes('label') &&
      (Object.keys(data).includes('value') || Object.keys(data).includes('key'))
    ) {
      return true;
    }
  } else if (
    Object.prototype.toString.call(data) === '[object Array]' &&
    data.length
  ) {
    let isLabelInValueCount = 0;
    data.forEach((v: any) => {
      if (
        Object.keys(v).includes('label') &&
        (Object.keys(v).includes('value') || Object.keys(v).includes('key'))
      ) {
        isLabelInValueCount += 1;
      }
    });
    return isLabelInValueCount === data.length;
  }
  return false;
};
// 处理传入的的value值
export const handleFormValue = (value: any, mode?: string) => {
  let val = value;
  if (isLabelInValue(value)) {
    // 如果是绑定的值value 有label或者value的存在 那么值变成[value] value （一般的场景是页面初始化的时候，值绑定表达式）
    val = Array.isArray(value)
      ? value.map((v: any) => v?.key || v?.value)
      : value?.key || value?.value;
  }
  if (val !== undefined) {
    // 如果是多选，值是,分割的字符串的数组
    if (mode === 'multiple' && typeof value === 'string' && value.length > 0) {
      val = value.split(',');
    }
  }

  // 清空值时，val为null  antd组件会展示一个空白的选项
  if (val !== undefined && !Array.isArray(val) && mode === 'multiple') {
    val = [];
  }
  // 如果是下拉单项,空数组原样返回
  if (Array.isArray(val) && mode !== 'multiple' && val.length > 0) {
    val = val?.[0];
  }
  return val === null || val === '' ? null : val;
};

export const transformValueType = (v: any, curVal: any) => {
  const realValueType = typeof (curVal ?? '');
  if (typeFn[realValueType]) {
    try {
      return typeFn[realValueType](v);
    } catch (error) {
      return v;
    }
  }
  return v;
};

export const getRules = (min?: number, max?: number, getLocale?: any) => {
  if (!min && !max) {
    return [];
  }
  const minMsg = [];
  const maxMsg = [];
  if (min) {
    minMsg.push({
      type: 'array',
      min,
      message: getLocale?.('CheckboxGroup.minRule', { min }),
    });
  }
  if (max) {
    maxMsg.push({
      type: 'array',
      max,
      message: getLocale?.('CheckboxGroup.maxRule', { max }),
    });
  }
  return [...minMsg, ...maxMsg];
};
// 获取选中数据
export const getChangeSelectData = (
  dataSource: any[],
  val: string[] | Object,
  mode?: string,
) => {
  const v = val;
  if (mode === 'multiple') {
    if (Array.isArray(v) && v.length) {
      const sltData = dataSource.filter((c: any) =>
        v.includes(c.value?.toString()),
      );
      return sltData;
    }
    return undefined;
  }
  const sltData = dataSource.find(
    (c: any) => c.value?.toString() === v?.toString(),
  );
  return sltData ? [sltData] : undefined;
};

export const getSelectedAllData = (
  checked: boolean,
  dataSource: any[],
  value: any[],
  max?: number,
) => {
  let latestValue = [];
  const filterDataMap: any = {};
  // 获取当前数据的所有值
  const filterData = dataSource.map((val: any) => {
    filterDataMap[val?.value] = {
      ...val,
    };
    return val?.value;
  });
  // 先过滤掉出搜索后隐藏的选中项，再判断是否全选来组装最终的数据
  const hiddenValue: any[] = [];
  value?.forEach((val: any) => {
    if (!filterDataMap[val]) {
      hiddenValue.push(val);
    }
  });
  // 取消全选
  if (!checked) {
    // 仅保留过滤前的选中值
    latestValue = hiddenValue;
  } else {
    // 全选当前值+过滤前的选中值
    latestValue = hiddenValue.concat(filterData);
    if (max) {
      // 有最大可选值限制时全选只选中当前过滤数据基础下的最大数
      const list: any[] = filterData.slice(0, max);
      if (list.length < max) {
        hiddenValue?.reverse()?.forEach((v: any, i: number) => {
          if (i < max - list.length) {
            list.unshift(v);
          }
        });
      }
      latestValue = list;
    }
  }
  return latestValue;
};

// 获取当前列表数据下的全选状态
export const checkIfSelectedAll = (
  dataSource: any[],
  value: any[],
  filterValue: string = '',
) => {
  const localFilterData = dataSource.filter((d) =>
    localFilterOption(filterValue, d),
  );
  if (localFilterData?.length && Array.isArray(value)) {
    // 如果是多选，value肯定是字符串类型的数组
    const checkData = localFilterData.filter((f: any) =>
      value.includes(f.value),
    );
    return checkData?.length === localFilterData?.length;
  }
  return false;
};

/**
 * 处理下拉选项的数据
 * @param dataSource 数据源
 * @param appendDataSoure 追加在数据源的额外数据
 * @param valueKey
 * @param labelKey
 * @returns
 */
export const handleDataSource = (
  dataSource: any[],
  appendDataSoure?: any[] | Object,
  valueKey?: string,
  labelKey?: string,
) => {
  const valueKeys: any = [];
  let newDataSoure: any[] = [];
  if (Array.isArray(dataSource)) {
    dataSource.forEach((v: any) => {
      const label = v?.[labelKey || 'label'];
      const value = v?.[valueKey || 'value'] || v?.key;
      if (value) {
        valueKeys.push(value);
        newDataSoure.push({
          ...v,
          label,
          value,
        });
      }
    });
  }
  let newAppednDataSoure = [];
  if (Array.isArray(appendDataSoure) && appendDataSoure.length > 0) {
    newAppednDataSoure = appendDataSoure.filter(
      (item) => !valueKeys?.includes(item?.[valueKey || 'value'] || item?.key),
    );
  }
  if (Object.prototype.toString.call(appendDataSoure) === '[object Object]') {
    newAppednDataSoure = [appendDataSoure].filter(
      (item: any) =>
        !valueKeys?.includes(item?.[valueKey || 'value'] || item?.key),
    );
  }
  if (newAppednDataSoure?.length > 0) {
    newDataSoure = newDataSoure.concat(newAppednDataSoure);
  }
  return newDataSoure;
};
