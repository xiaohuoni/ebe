import moment from 'moment';

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
