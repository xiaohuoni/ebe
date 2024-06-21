import { useMemo } from 'react';

/**
 * 适用于[{label:"xxx", value: "xxx"}] 数据类型的控件，比如多项选择，复选框, 多列选择, 地址选择
 * @param defaultValue
 * @param max 最大数
 * @returns
 */
const useDefaultValue = (temDefaultValue: any, max?: number) => {
  const finalDefaultValue = useMemo(() => {
    let defaultValue = temDefaultValue;
    try {
      // 如果是json字符串
      defaultValue = JSON.parse(temDefaultValue);
      // 不属于对象并且数组的时候，使用原来字符串的值
      if (typeof defaultValue !== 'object') {
        defaultValue = temDefaultValue;
      }
    } catch {
      defaultValue = temDefaultValue;
    }
    // 对应数据格式时1,2 逗号分隔字符串
    if (typeof defaultValue === 'string' && defaultValue.length > 0) {
      // eslint-disable-next-line camelcase
      const new_val = `${defaultValue}`
        ?.replace(/(^\[)|(\]$)/g, '')
        ?.split(',');
      // eslint-disable-next-line camelcase
      return Array.isArray(new_val) && max ? new_val.slice(0, max) : new_val;
    }
    if (Array.isArray(defaultValue)) {
      const tem = max ? defaultValue.slice(0, max) : defaultValue;
      // @ts-ignore
      return tem.map((item) => item?.value || item);
    }
    if (Object.prototype.toString.call(defaultValue) === '[object Object]') {
      return [defaultValue].map((item) => item?.value || item);
    }
    return [];
  }, [temDefaultValue, max]);
  return finalDefaultValue;
};

export default useDefaultValue;
