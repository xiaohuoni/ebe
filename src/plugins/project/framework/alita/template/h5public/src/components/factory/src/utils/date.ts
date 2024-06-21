import moment from 'moment';
import { useMemo } from 'react';

type toDateFunction = (
  dateString?: string,
  format?: string | string[],
) => Date | undefined;

/**
 * moment 识别日期含有年月日中文的情况，Invalid Date
 * @param dataStr
 * @returns
 */
export const clearChineseStr = (
  dataStr: string,
  replaceString: string = '-',
) => {
  let targetStr = dataStr;
  if (targetStr) {
    if (targetStr.includes('年')) {
      targetStr = targetStr.replace(/年/g, replaceString);
    }
    if (targetStr.includes('月')) {
      targetStr = targetStr.replace(/月/g, replaceString);
    }
    if (targetStr.includes('日')) {
      targetStr = targetStr.replace(/日/g, '');
    }
  }
  return targetStr;
};

/**
 * 转化成Date格式
 * @param dateString 时间字符串
 * @returns
 */
export const toDate: toDateFunction = (
  dateString,
  format?: string | string[],
) => {
  if (dateString) {
    if (typeof dateString === 'string') {
      // 根据格式严格转换，转换失败时采用内置标准格式转换
      const date = moment(clearChineseStr(dateString), format, true)?.isValid()
        ? moment(clearChineseStr(dateString), format)
        : moment(clearChineseStr(dateString));
      return date.toDate();
    }
    return dateString;
  }
  return undefined;
};

/**
 * 获取距离某个时间的指定日期，例如：距离当前时间6个月的日期  subtractDate(new Date(), 6, 'months');
 * @param date 指定日期
 * @param amount 长度
 * @param unit 单位
 * @returns
 */
export const subtractDate = (
  date: moment.MomentInput,
  amount: moment.DurationInputArg1,
  unit: moment.DurationInputArg2,
) => {
  return moment(date).subtract(amount, unit).toDate();
};

/**
 * date格式化
 * @param formatter 格式化字符串 如：yyyy-MM-dd
 * @param date 日期
 * @param valueFormat 取值格式，根据取值格式转换值
 * @returns
 */
export const dateToFormatter = (
  formatter: string,
  date?: Date | string,
  valueFormat?: string | undefined,
) => {
  if (!date) {
    return undefined;
  }
  const format: string[] = [formatter];
  const transferFormat = valueFormat || formatter;
  if (valueFormat) {
    format.push(valueFormat);
  }
  if (typeof date === 'string') {
    return moment(toDate(date, format)).format(transferFormat);
  }
  return moment(date, format).format(transferFormat);
};

// 标准格式对应值
export const STANDARD_FORMAT: Record<string, string> = {
  date: 'YYYY-MM-DD',
  time: 'YYYY-MM-DD HH:mm:ss',
  month: 'YYYY-MM',
  year: 'YYYY',
  onlyTime: 'HH:mm',
  datetime: 'YYYY-MM-DD HH:mm:ss',
};

/**
 *
 * @param formatter 当前的时间格式化类型
 * @param lanEnv 语言 'zh-CN', 'zh-HK', ''
 * @returns
 */
export const useLocaleFormatter = (
  formatter: string,
  lanEnv: string | undefined,
  standardFormat?: {
    valueFormat?: 'standard' | 'show';
    mode?: string;
    extendStandardFormat?: Record<string, string>;
  },
) => {
  const { valueFormat, mode, extendStandardFormat = {} } = standardFormat || {};
  const myFormatter = useMemo(() => {
    if (
      typeof lanEnv === 'string' &&
      !['zh-CN', 'zh-HK'].includes(lanEnv) &&
      typeof formatter === 'string' &&
      formatter.length > 0
    ) {
      return clearChineseStr(formatter, '/');
    }
    return formatter;
  }, [lanEnv]);

  // 取值格式可设置为展示格式或标准格式
  const finalValueFormat = useMemo(() => {
    if (valueFormat === 'standard') {
      const FORMAT = { ...STANDARD_FORMAT, ...extendStandardFormat };
      return FORMAT[mode || 'date'] || myFormatter;
    }
    return myFormatter;
  }, [valueFormat, mode, myFormatter]);
  return {
    showFormat: myFormatter,
    valueFormat: finalValueFormat,
  };
};
