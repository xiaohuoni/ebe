import moment from 'moment';

type flatTreeFunction = (data?: any[], array?: any[], key?: string) => void;

const flatTree: flatTreeFunction = (
  data = [],
  array = [],
  key = 'children',
) => {
  data.forEach((element: any) => {
    array.push(element);
    if (Array.isArray(element[key]) && element[key].length) {
      flatTree(element[key], array, key);
    }
  });
};

const deepCopy = (data: any) => JSON.parse(JSON.stringify(data));

// 模拟eval，将字符串转函数方法
const evalMyFunction = (str: any, params: any = {}) => {
  if (!str) return '';

  // eslint-disable-next-line no-control-regex
  let codeStr = str
    .replace(/^\$/, '')
    .replace(/\$$/, '')
    .replace(/\/\*.+[^\x05]*\*\//, '')
    .replace(/\n/, '');

  try {
    if (params && Array.isArray(params)) {
      const isArrowFunc = codeStr.indexOf('=>') !== -1;

      if (isArrowFunc) {
        const [funcDefine, funcBody] = codeStr.split('=>');
        codeStr = `function${funcDefine} ${funcBody}`;
      }

      // eslint-disable-next-line no-new-func
      const codeFunc = new Function(`return ${codeStr.toString()}`)();

      let funcParams: any = [];

      /**
       * TODO: 目前已知的，表格/描述列表/树形控件自定义渲染存在参数格式：
       * 1、存量数据：(text, row/item, index)   注：表格为 row，描述列表/树形控件为 item
       * 2、新数据：(renderParams)
       * 所以，需要兼容两种参数格式解析，在这边临时处理强行弥补
       */
      if (!str.match(/function.*\(renderParams\)/g)) {
        funcParams = params.map((param) => param.value);
      } else {
        const objParam: any = {};

        params.forEach((param) => {
          objParam[param.key] = param.value;
        });

        funcParams = objParam;
      }

      if (funcParams && Array.isArray(funcParams)) {
        return codeFunc(...funcParams);
      }

      return codeFunc(funcParams);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('engineEvalExp.error', error, str);
    return '';
  }

  return null;
};

// 生成随机id
const createId = (prefix?: string, id?: string | number, slength = 12) => {
  let uid = id;
  if (!uid) {
    uid = `${Math.random()}`.slice(slength);
  }
  return prefix ? `${prefix}_${uid}` : uid;
};

// 生成指定长度的英文字母+数字随机组合
const createRandomStr = (len = 20) => {
  let rdmString = '';
  for (
    ;
    rdmString.length < len;
    rdmString += Math.random().toString(36).substr(2)
  );
  return rdmString.substr(0, len);
};

// 获取最后指定字符串后的字符串
const getAfterString = (str: any, mid: any) => {
  if (str) {
    return str.split(mid).pop();
  }
  return '';
};

// 获取最后指定字符串前的字符串
const getBeforeString = (str: any, mid: any) => {
  if (str) {
    const index = str.lastIndexOf(mid);
    return str.substring(0, index);
  }
  return '';
};

const initMomentLocale = () => {
  const ordinal: any = (number: number, period: string) => {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return `${number}日`;
      case 'M':
        return `${number}月`;
      case 'w':
      case 'W':
        return `${number}周`;
      default:
        return number;
    }
  };
  moment.defineLocale('zh-cn', {
    months:
      '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
        '_',
      ),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
      '_',
    ),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'Ah点mm分',
      LTS: 'Ah点m分s秒',
      L: 'YYYY-MM-DD',
      LL: 'YYYY年MMMD日',
      LLL: 'YYYY年MMMD日Ah点mm分',
      LLLL: 'YYYY年MMMD日ddddAh点mm分',
      l: 'YYYY-MM-DD',
      ll: 'YYYY年MMMD日',
      lll: 'YYYY年MMMD日Ah点mm分',
      llll: 'YYYY年MMMD日ddddAh点mm分',
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: (hour: number, meridiem: string) => {
      if (hour === 12) {
        // eslint-disable-next-line no-param-reassign
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      }
      if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
      return hour >= 11 ? hour : hour + 12; // '中午'
    },
    meridiem: (hour, minute, isLower) => {
      const hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      }
      if (hm < 900) {
        return '早上';
      }
      if (hm < 1130) {
        return '上午';
      }
      if (hm < 1230) {
        return '中午';
      }
      if (hm < 1800) {
        return '下午';
      }
      return '晚上';
    },
    calendar: {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      sameDay: () =>
        (this as any).minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT',
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      nextDay: () =>
        (this as any).minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT',
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      lastDay: () =>
        (this as any).minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT',
      nextWeek: () => {
        const startOfWeek = moment().startOf('week');
        // eslint-disable-next-line @typescript-eslint/no-invalid-this
        const prefix =
          (this as any).unix() - startOfWeek.unix() >= 7 * 24 * 3600
            ? '[下]'
            : '[本]';
        // eslint-disable-next-line @typescript-eslint/no-invalid-this
        return (this as any).minutes() === 0
          ? `${prefix}dddAh点整`
          : `${prefix}dddAh点mm`;
      },
      lastWeek: () => {
        const startOfWeek = moment().startOf('week');
        // eslint-disable-next-line @typescript-eslint/no-invalid-this
        const prefix =
          (this as any).unix() < startOfWeek.unix() ? '[上]' : '[本]';
        // eslint-disable-next-line @typescript-eslint/no-invalid-this
        return (this as any).minutes() === 0
          ? `${prefix}dddAh点整`
          : `${prefix}dddAh点mm`;
      },
      sameElse: 'LL',
    },
    ordinalParse: /\d{1,2}(日|月|周)/,
    ordinal,
    relativeTime: {
      future: '%s内',
      past: '%s前',
      s: '几秒',
      m: '1 分钟',
      mm: '%d 分钟',
      h: '1 小时',
      hh: '%d 小时',
      d: '1 天',
      dd: '%d 天',
      M: '1 个月',
      MM: '%d 个月',
      y: '1 年',
      yy: '%d 年',
    },
    week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  });
};

const getRegExp = (pattern = '') => {
  if (/^\/[\w\W]+\/[i|m|g|I|M|G]{0,3}$/.test(pattern)) {
    // 如果是 / 结尾
    const location =
      pattern.length -
      pattern
        .split('')
        .reverse()
        .findIndex((w) => w === '/') -
      1; // 找到 '/'
    if (location === pattern.length - 1) {
      return new RegExp(pattern.substr(1, pattern.length - 2));
    }
    return new RegExp(
      pattern.substr(1, location - 1),
      pattern.substring(location + 1),
    );
  }
  return new RegExp(pattern);
};

// rgb转16进制
const setRgbTo16 = (str: string) => {
  const reg = /^(rgb|RGB)/;
  if (!reg.test(str) || !/^(rgba|RGBA)/.test(str)) {
    return str;
  }
  const values = str
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',');
  const a = parseFloat(values[3] || '1');
  const r = Math.floor(a * parseInt(values[0], 10) + (1 - a) * 255);
  const g = Math.floor(a * parseInt(values[1], 10) + (1 - a) * 255);
  const b = Math.floor(a * parseInt(values[2], 10) + (1 - a) * 255);
  return `#${`0${r.toString(16)}`.slice(-2)}${`0${g.toString(16)}`.slice(
    -2,
  )}${`0${b.toString(16)}`.slice(-2)}`;
};

// 判断图片是否存在
const isImgUrl = (imgurl: any) =>
  new Promise((resolve, reject) => {
    const ImgObj = new Image();
    ImgObj.onload = (res) => {
      resolve(res);
    };
    ImgObj.onerror = (err) => {
      reject(err);
    };
    ImgObj.src = imgurl;
  });

/**
 * @description: 根据文本计算大概宽度
 */
const getTextWidth = (text: string, fontSize: number = 12) => {
  // 创建临时元素
  const _span = document.createElement('span');
  _span.innerText = text;
  // 设置文字大小
  _span.style.fontSize = `${fontSize}px`;
  document.body.appendChild(_span);
  // 获取span的宽度
  const width = _span.offsetWidth;
  document.body.removeChild(_span);
  return width;
};

// 验证字符串是否是非负整数
const checkNumber = (str: any) => {
  // 非负整数
  const numReg = /^\d*$/;
  return numReg.test(str);
};

const isDynamicProperty = (str?: any) => {
  if (typeof str !== 'string') {
    return false;
  }
  return str.startsWith('$') && str.endsWith('$');
};

export {
  flatTree,
  deepCopy,
  evalMyFunction,
  createId,
  createRandomStr,
  initMomentLocale,
  getAfterString,
  getBeforeString,
  getRegExp,
  setRgbTo16,
  isImgUrl,
  getTextWidth,
  checkNumber,
  isDynamicProperty,
};
