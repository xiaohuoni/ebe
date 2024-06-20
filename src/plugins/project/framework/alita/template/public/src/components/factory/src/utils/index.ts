import type {
  FilterWhiteSpaceFunction,
  FilterWhiteSpaceParamaters,
  GetRulesFunction,
  GetRulesParamaters,
} from './PropType';

const WUFENG_ACTIONS = {
  LcdpApis: 'apis',
  LcdpUtils: 'LcdpUtils',
};
export const SERVICE_KEY = {
  QUERY: '11',
  INNER: '12',
  PLATFORM: '14',
  STD: '13',
  RHIN: '10',
  OBJECT: '2',
  SUPER: '7',
};

export const arc4Random = (bite = 6, prefix = '') => {
  const origin = '1234567890qwertyuiopasdfghjklzxcvbnm';
  let target = prefix;
  for (let index = 0; index < bite; index += 1) {
    const start = Math.floor(Math.random() * origin.length);
    target += origin.substr(start, 1);
  }
  return target;
};

export const dataURLtoFile = (dataurl: string, format = 'png') => {
  const fileName = `${arc4Random(4)}.${format}`;
  // 获取到base64编码
  const arr = dataurl.split(',');
  // 将base64编码转为字符串
  const bstr = window.atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n); // 创建初始化为0的，包含length个元素的无符号整型数组
  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, {
    type: `image/${format}`,
  });
};

export const getRegExp = (pattern = '') => {
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

export const filterWhiteSpace: FilterWhiteSpaceFunction<
  FilterWhiteSpaceParamaters
> = (obj) => {
  const source: FilterWhiteSpaceParamaters = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (value !== undefined) {
      source[key] = value;
    }
  });
  return source;
};

export const getRules: GetRulesFunction<GetRulesParamaters> = ({
  required,
  regexp,
  message,
}) => {
  const r: FilterWhiteSpaceParamaters[] = [{ required, message }];
  if (Array.isArray(regexp)) {
    regexp.forEach((reg) => {
      const {
        enum: en,
        len,
        max,
        min,
        type,
        whitespace,
        validateTrigger,
      } = reg;
      r.push(
        filterWhiteSpace({
          enum: en,
          len,
          max,
          message: reg.message,
          min,
          required: reg.required,
          type,
          whitespace,
          validateTrigger,
          pattern: getRegExp(reg.pattern),
        }),
      );
    });
  }
  return r;
};

export const getLcdpApi = async () => {
  // eslint-disable-next-line no-return-await
  return await (window as any).wufengController.getAction(
    WUFENG_ACTIONS.LcdpApis,
  );
};

export const getRequestByMethod = async (key: string) => {
  const apis = await getLcdpApi();
  return apis[key];
};

export const getLcdpUtils = async () => {
  // eslint-disable-next-line no-return-await
  return await (window as any).wufengController.getAction(
    WUFENG_ACTIONS.LcdpUtils,
  );
};

/**
 * 获取文件编码路径
 * @param fileCode 文件编码
 * @returns
 */
export const resolveImageDownload = async (fileCode: string) => {
  if (fileCode) {
    const utils = await getLcdpUtils();
    return utils.resolveImageDownload(
      `app/file/appFileResource/downloadFileByFileCode?appId=${
        (window as any).appId
      }&fileCode=${fileCode}`,
    );
  }
  return '';
};
export const ruesEcute = (rules: any[], str: any) => {
  if (rules) {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < rules.length; index++) {
      const element = rules[index];
      const { pattern, message } = element;
      if (pattern && str) {
        if (!pattern.test(str)) {
          return message;
        }
      }
    }
  }
  return undefined;
};

// 模拟eval，将字符串转函数方法
export const evalMyFunction = (str: any, params: any = {}) => {
  if (!str) return '';

  // 去除前后$, 去除注释，去除换行
  let codeStr = str
    .replace(/^\$/, '')
    .replace(/\$$/, '')
    .replace(/\/\*.+[\s\S]*\*\//, '')
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

// rgb转16进制
export const setRgbTo16 = (str: string) => {
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
  // eslint-disable-next-line radix
  const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255);
  // eslint-disable-next-line radix
  const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255);
  // eslint-disable-next-line radix
  const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
  return `#${`0${r.toString(16)}`.slice(-2)}${`0${g.toString(16)}`.slice(
    -2,
  )}${`0${b.toString(16)}`.slice(-2)}`;
};

/**
 * 获取图形验证码路径
 * @param fileCode 文件编码
 * @returns
 */
export const resolvePicVeriryCodeDownload = async (
  validateCodeCount: string,
  random: string,
) => {
  if (`${validateCodeCount}` && `${random}`) {
    const utils = await getLcdpUtils();
    return utils.resolvePicVeriryCodeDownload(
      `app/validateCode/getValidateCodePicture?validateCodeCount=${validateCodeCount}&t=${random}`,
    );
  }
  return '';
};

const transImageFile = (fileName: string, imageDataURL: any) => {
  const imageBytes = window.atob(imageDataURL.split(',')[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  const arrayBuffer = new ArrayBuffer(imageBytes.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < imageBytes.length; i++) {
    uint8Array[i] = imageBytes.charCodeAt(i);
  }
  const mimeType = imageDataURL.split(',')[0].match(/:(.*?);/)[1];
  const newFile = new File([uint8Array], fileName, {
    type: mimeType || 'image/jpeg',
  });
  return newFile;
};

/**
 * 压缩图片
 * @param file 文件
 * @param pictureQuality 压缩率，如果传入maxSizeKB 会根据压缩率逐步-0.2进行压缩
 * @param maxSizeKB 压缩至多大 kb
 * @param compressionNumber 压缩次数compressionNumber
 * @returns 返回图片
 */
export const transformFile = (
  file: any,
  quality = 0.9,
  maxSizeKB?: number,
  compressionNumber?: number,
) => {
  /**
   * 针对图片进行压缩,如果图片大小超过压缩阈值,则执行压缩,否则不压缩
   */
  // 判断是否是图片类型
  const pictureQuality = quality;
  const device = compressionNumber || 8;
  if (typeof FileReader === 'undefined') {
    return file;
  }
  // 如果当前文件大小已经小于指定的大小直径返回
  if (maxSizeKB && file?.size) {
    if (file.size / 1024 < maxSizeKB) {
      return file;
    }
  }

  return new Promise((resolve) => {
    // 声明FileReader文件读取对象
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // 生成canvas画布
      const canvas = document.createElement('canvas');
      // 生成img
      const img = document.createElement('img') as any;
      img.src = reader.result;
      img.onload = () => {
        const ctx = canvas.getContext('2d') as any;
        // 原始图片宽度、高度
        const originImageWidth = img.width;
        const originImageHeight = img.height;
        // 目标尺寸
        let targetWidth = originImageWidth;
        let targetHeight = originImageHeight;
        // 当图片的宽度或者高度大于指定的最大宽度或者最大高度时,进行缩放图片
        // 如果有传入maxSizeKB，使用原始大小
        if (!maxSizeKB) {
          // 默认最大尺度的尺寸限制在（1920 * 1080）
          const maxWidth = 1920;
          const maxHeight = 1080;
          const ratio = maxWidth / maxHeight;
          if (originImageWidth > maxWidth || originImageHeight > maxHeight) {
            // 超过最大宽高比例
            if (originImageWidth / originImageHeight > ratio) {
              // 宽度取最大宽度值maxWidth,缩放高度
              targetWidth = maxWidth;
              targetHeight = Math.round(
                maxWidth * (originImageHeight / originImageWidth),
              );
            } else {
              // 高度取最大高度值maxHeight,缩放宽度
              targetHeight = maxHeight;
              targetWidth = Math.round(
                maxHeight * (originImageWidth / originImageHeight),
              );
            }
          }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // 清除画布
        ctx.clearRect(0, 0, targetWidth, targetHeight);
        // 绘制图片
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        // quality值越小,图像越模糊,默认图片质量为0.92
        // 只有设置类型'image/jpeg'压缩才会生效

        let imageDataURL = canvas.toDataURL(
          'image/jpeg',
          pictureQuality,
        ) as any;
        if (maxSizeKB && device > 0) {
          let L = true;
          let quality = 0;
          let newFile: any;
          newFile = transImageFile(file.name, imageDataURL);
          if (newFile.size / 1024 < maxSizeKB) {
            resolve(newFile);
          } else {
            // 二分法进行压缩
            // eslint-disable-next-line no-plusplus
            for (let index = 1; index <= device; index++) {
              imageDataURL = canvas.toDataURL(
                'image/jpeg',
                L ? (quality += 1 / 2 ** index) : (quality -= 1 / 2 ** index),
              );
              newFile = transImageFile(file.name, imageDataURL);
              newFile.size / 1024 > maxSizeKB ? (L = false) : (L = true);
            }
            resolve(newFile);
          }
        } else {
          const newFile = transImageFile(file.name, imageDataURL);
          resolve(newFile);
        }
      };
    };
    reader.onerror = () => file;
  })
    .then((res) => res)
    .catch(() => file);
};

// 将MB、KB转换成Bytes
export const convertToBytes = (size: string) => {
  if (typeof size !== 'string') return 0;
  const unit = size.match(/[a-zA-Z]+/)?.[0]?.toUpperCase() || 'B';
  const value = parseFloat(size);
  const units: any = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
  };
  return value * (units[unit] || 0);
};
