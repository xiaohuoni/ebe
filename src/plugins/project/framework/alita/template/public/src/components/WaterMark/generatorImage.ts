/**
 * 将角度转成弧度
 * @param degrees 角度
 * @returns 弧度
 */
const degreesToRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

/**
 * 计算原始矩形旋转后占用的面积
 * @param sourceWidth 原始宽度
 * @param sourceHeight 原始高度
 * @param degrees 旋转角度逆时针 0 - 360°
 */
const calculateRotateSize = (
  _sourceWidth: number,
  _sourceHeight: number,
  _degrees: number,
): {
  width: number;
  height: number;
} => {
  switch (_degrees) {
    case 0:
    case 180:
    case 360:
      return { width: _sourceWidth, height: _sourceHeight };
    case 90:
    case 270:
      return { width: _sourceHeight, height: _sourceWidth };
    default:
      break;
  }

  let sourceWidth = _sourceWidth;
  let sourceHeight = _sourceHeight;
  let degrees = _degrees;

  if (degrees > 90 && degrees < 180) {
    degrees = 180 - degrees;
    sourceWidth = _sourceHeight;
    sourceHeight = _sourceWidth;
  } else if (degrees > 180 && degrees < 270) {
    degrees = 270 - degrees;
    // sourceWidth = _sourceHeight;
    // sourceHeight = _sourceWidth;
  } else if (degrees > 270 && degrees < 360) {
    degrees = 360 - degrees;
    sourceWidth = _sourceHeight;
    sourceHeight = _sourceWidth;
  }

  // 旋转弧度
  const radians = degreesToRadians(degrees);

  const widthA = sourceWidth * Math.cos(radians);

  const heightA = sourceWidth * Math.sin(radians);

  const widthB = sourceHeight * Math.sin(radians);

  const heightB = sourceHeight * Math.cos(radians);

  const res = {
    width: Math.ceil(widthA + widthB),
    height: Math.ceil(heightA + heightB),
  };

  return res;
};

const laodImage = (baseData: string): Promise<HTMLImageElement> =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = baseData;
    img.onload = () => {
      resolve(img);
    };
  });

/**
 * 生成水印图片
 * @param content 水印内容
 * @param width 宽度
 * @param height 高度
 * @param fontSize 字号大小
 * @param fontColor 字体颜色
 * @param alpha 透明度
 * @param angle 旋转角度
 */
const generatorImage = async (
  content: string,
  width: number,
  height: number,
  fontSize: number,
  fontColor: string,
  alpha: number,
  angle: number,
): Promise<string | null> => {
  // 文字行高
  const lineHeight = fontSize + 2;

  const sourceCanvas = document.createElement('canvas');
  const sourceCtx = sourceCanvas.getContext('2d') as CanvasRenderingContext2D;

  sourceCanvas.width = width;
  sourceCanvas.height = height;
  sourceCtx.font = `300 ${fontSize}px Microsoft YaHei`;
  sourceCtx.globalAlpha = alpha;
  sourceCtx.fillStyle = fontColor;

  const strList = [];

  const measureTextWidth = (str: string) => {
    return sourceCtx.measureText(str).width;
  };

  // 回车替换成空格 多个空格合并成一个
  const nextStr = content.replace(/\n/g, ' ').replace(/\s{2,}/, ' ');
  let length = 0;
  let currentLine = '';
  while (length < nextStr.length) {
    const char = nextStr[length];
    const newLine = currentLine + char;
    if (measureTextWidth(newLine) < 300) {
      currentLine = newLine;
    } else {
      currentLine = '';
      strList.push({
        x: 0,
        content: newLine,
      });
    }
    length += 1;
  }

  // 最后一行文字没有填充满 计算居中偏移量
  if (currentLine) {
    strList.push({
      x: (width - measureTextWidth(currentLine)) / 2,
      content: currentLine,
    });
  }

  // 根据行数计算起始位置
  const contentHeight = strList.length * 26;
  let offsetY = (height - contentHeight) / 2;
  offsetY = offsetY < 0 ? 0 : offsetY;

  // 逐行添加文字
  for (let i = 0; i < strList.length; i += 1) {
    const { x, content } = strList[i];
    const y = (i + 1) * lineHeight + offsetY;
    sourceCtx.fillText(content, x, y);
  }

  // 图片base64
  let imgBase64 = sourceCanvas.toDataURL('image/png');

  // 存在角度旋转
  if (angle > 0) {
    const nextCanvas = document.createElement('canvas');
    const nextCtx = nextCanvas.getContext('2d') as CanvasRenderingContext2D;
    const { width: nextWidth, height: nextHeight } = calculateRotateSize(
      width,
      height,
      angle,
    );
    nextCanvas.width = nextWidth;
    nextCanvas.height = nextHeight;
    const img = await laodImage(imgBase64);
    const _offsetX = -img.width / 2;
    const _offsetY = -img.height / 2;
    nextCtx.translate(nextWidth / 2, nextHeight / 2);
    nextCtx.rotate(-degreesToRadians(angle));
    nextCtx.drawImage(img, _offsetX, _offsetY, img.width, img.height);
    imgBase64 = nextCanvas.toDataURL('image/png');
  }
  return imgBase64;
};

export default generatorImage;
