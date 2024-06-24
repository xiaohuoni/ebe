import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'px2rem',
    'ts',
    `
/**
 * 模板工程暂时有这几个字段是数字类型的，需要特殊处理
 */
export const ADD_STYLE_KEYS = ['fontSize', 'lineHeight', 'borderRadius', 'borderWidth'];

// const pxRegex = /(\d*\.?\d+)px/gi;

export const getInitialScale = () => {
  let scale = 1;
  const meta = document.querySelector('meta[name=viewport]');
  if (meta) {
    const content = meta.getAttribute('content') || '';
    const initialScale = content.match(/initial-scale=\d(.\d)*/g);
    if (initialScale) {
      const numberScale = initialScale[0].match(/\d(.\d)*/);
      if (numberScale) {
        scale = Number(numberScale[0]) || 1;
      }
    }
  }
  return scale;
};

/**
 * 像素转换
 * @param {Number} px - 750视觉稿像素
 * @return {Number} 屏幕上实际像素
 */
export const px2hd = (px: number) => /*  @__HOT_UPDATE__ @alias px2hd */{
  const ONE_REM = parseInt(document.documentElement.style.fontSize, 10) || 100;
  const SCALE = ONE_REM / 100;
  return Number((px * SCALE).toFixed(1));
};

export const toFixed = (number: number) => {
  if (number <= 1) {
    return \`\${number}px\`;
  }
  const ONE_REM = parseInt(document.documentElement.style.fontSize, 10) || 100;
  const fixed = Number(number / (ONE_REM * getInitialScale()));
  // 最大保留位数
  return \`\${Math.round(fixed * 1000) / 1000}rem\`;
};

export const createPxReplace = (m: string, $1: string) => {
  // ignoring PX Px
  if (m.indexOf('px') === -1) {
    return m;
  }
  if (!$1) {
    return m;
  }

  const pixels = parseFloat($1);
  return toFixed(pixels);
};

export const px2remUnit = (value: string) => {
  const pxReg = /(\d*\.?\d+)px/gi;
  const styleValue = value?.toString();
  if (!pxReg.test(styleValue)) {
    return styleValue;
  }
  // 正则匹配转化rem 默认 < 1px不转化
  const result = styleValue.replace(pxReg, createPxReplace);
  return result;
};

export default function px2rem(style = {}) {
  const transformObject = (object: { [x: string]: any; }, father: Record<string, any>) => {
    Object.keys(object).forEach(key => {
      let value = object[key];
      if (typeof value === 'object') {
        const sonObject = {};
        transformObject(value, sonObject);
        father[key] = sonObject;
      } else {
        value = value?.toString();
        if (ADD_STYLE_KEYS.includes(key) && !isNaN(Number(value))) {
          father[key] = toFixed(parseFloat(value));
          // 正则匹配不到时直接忽略转化
        } else {
          father[key] = px2remUnit(value);
        }
      }
    });
  };

  const source = {};
  transformObject(style, source);
  return source;
}

 `,
  );

  return [['src', 'utils'], file];
}
