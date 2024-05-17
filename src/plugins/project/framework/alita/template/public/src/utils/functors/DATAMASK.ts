/* eslint-disable no-extend-native,no-param-reassign,no-self-compare,eqeqeq,no-bitwise,no-fallthrough */

import { FunctorDefine } from './types';

type DataMaskType = 'mobile' | 'email' | 'ID' | 'phone' | 'default' | 'service';

if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    if (this == null) {
      throw new TypeError(`can't convert ${this} to object`);
    }
    let str = `${this}`;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // 确保 count 是一个 31 位的整数。这样我们就可以使用如下优化的算法。
    // 当前（2014 年 8 月），绝大多数浏览器都不能支持 1 << 28 长的字符串，所以：
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    let rpt = '';
    for (;;) {
      if ((count & 1) == 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    return rpt;
  };
}

const defaultDataMaskProcess = (inputstr: String) => {
  // 通用规则脱敏为 保留前后2位，中间脱敏，如果不足5位，最后一位为脱敏
  if (inputstr.length < 5) {
    return inputstr.replace(/.$/g, '*');
  }
  const count = inputstr.length - 4;
  return inputstr.replace(/(^.{2})(.*)(.{2}$)/g, `$1${'*'.repeat(count)}$3`);
};

const processDataMaskValue = (inputstr: String, type: DataMaskType = 'default') => {
  // 待脱敏数据类型检测提示
  if (typeof inputstr !== 'string') {
    // 数字类型自动转换
    if (typeof inputstr === 'number') {
      inputstr = (inputstr as number).toString();
    } else {
      console.error(`待脱敏数据${inputstr}类型：${typeof inputstr}，不是string类型`);
      return inputstr;
    }
  }

  // 后端脱敏（service）的情况下也是原样返回
  if (!inputstr || !type || type === 'service') {
    return inputstr;
  }
  // 注意，下面这个switch的条件穿透是故意为之，不break
  // 目的是，当具体的配置违背第一层格式表达式时，可以自动回退到保底通用规则
  // 如果认为这样不规范，那就每一个条件就加上else return defaultDataMaskProcess(inputstr);即可
  switch (type) {
    case 'mobile':
      // 手机，手机遮4-7位
      if (inputstr.match(/^1[3-9]\d{9}$/g)) {
        return inputstr.replace(/(^\d{3})(\d*)(\d{4}$)/g, `$1${'*'.repeat(4)}$3`);
      }
    case 'email':
      // 电子邮箱，都只保留前两位
      if (inputstr.match(/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,9})$/i)) {
        const arr = inputstr.split('@');
        const firstp = `${arr[0].substring(0, 2)}${'*'.repeat(arr[0].length - 2)}`;
        const secondp = `${arr[1].substring(0, 2)}${'*'.repeat(arr[1].length - 2)}`;
        return `${firstp}@${secondp}`;
      }
    case 'ID':
      // 居民身份证号
      if (inputstr.match(/^\d{17}(\d|X)$/g)) {
        return inputstr.replace(/(^\d{4})(\d*)(.{2}$)/g, `$1${'*'.repeat(12)}$3`);
      }
    case 'phone':
      // 固话，固话逻辑是保留前3位，遮4-7位
      if (inputstr.match(/^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/g)) {
        return `${inputstr.substring(0, 3)}${'*'.repeat(4)}${inputstr.substring(7)}`;
      }
    default:
      // 回归保底通用规则
      return defaultDataMaskProcess(inputstr);
  }
};

export const DATAMASK = FunctorDefine({
  label: '数据脱敏',
  type: 'DATAMASK',
  value: "DATAMASK('88888888@test.com', 'email')",
  functor: processDataMaskValue,
  define: [
    '对敏感信息进行脱敏',
    'email: 邮件脱敏，phone: 手机脱敏，ID: 身份证脱敏，common: 通用',
  ],
  description: {
    tips: [],
    title: '(文本)',
  },
  example: {
    tips: ['电子邮箱，@前后两段，只保留前两位'],
    title: "('88888888@test.com', 'email')，结果：88******@te******",
  },
  groupsName: '字符串函数',
});
