import { setWith } from 'lodash';
import type React from 'react';
import type { CSSProperties } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface AppViewProps {
  style?: CSSProperties;
  src?: string;
  fileCode?: string;
  backgroundType?: any;
}

const getImageSize = async (
  url: string,
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      resolve({
        width: image.width,
        height: image.height,
      });
    };
    image.onerror = (err) => {
      reject(err);
    };
  });
};

export { getImageSize };

const useStyle = (
  props: AppViewProps,
  ref: React.MutableRefObject<HTMLDivElement | null | undefined>,
) => {
  const { src: imgSrc, style, backgroundType = {} } = props;
  const { mode, type, color, startColor, endColor } = backgroundType || {};
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (imgSrc && type === 'image') {
      (async () => {
        try {
          setSize(await getImageSize(imgSrc));
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [imgSrc, type]);

  const getImageStyle = useCallback((): CSSProperties => {
    // 不设置图片时，要使用真实宽高
    if (!imgSrc) {
      return {};
    }
    switch (mode) {
      case 'scaleToFill':
        return {
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        };
      case 'widthFix': {
        const iStyle: CSSProperties = {
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        };
        const viewWidth = ref.current?.getBoundingClientRect().width;

        if (viewWidth && size.width) {
          iStyle.height = (size.height / size.width) * viewWidth;
          if (!iStyle.overflowY) {
            iStyle.overflowY = 'auto';
          }
        }
        return iStyle;
      }
      case 'heightFix': {
        const iStyle: CSSProperties = {
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        };
        const viewHeight = ref.current?.getBoundingClientRect().height;
        if (viewHeight && size.height) {
          iStyle.width = (size.width / size.height) * viewHeight;
          if (!iStyle.overflowX) {
            iStyle.overflowX = 'auto';
          }
        }
        return iStyle;
      }
      default:
        break;
    }
    return {};
  }, [imgSrc, mode, ref, size]);

  return useMemo(() => {
    const targetStyle: any = JSON.parse(JSON.stringify(style || {}));
    // / 兼容旧数据，如果没有背景类型，有imgSrc，说明需要设置背景图片，
    if (!type) {
      if (imgSrc) {
        setWith(targetStyle, ['backgroundImage'], `url(${imgSrc})`);
      }
      return targetStyle;
    }
    if (targetStyle.backgroundColor) {
      targetStyle.backgroundColor = undefined;
    }
    if (targetStyle.backgroundImage) {
      targetStyle.backgroundImage = undefined;
    }
    if (type === 'cleanColor') {
      targetStyle.backgroundColor = color;
    } else if (type === 'hGradient') {
      targetStyle.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    } else if (type === 'vGradient') {
      targetStyle.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    } else if (type === 'image') {
      const imageStyle: any = getImageStyle();
      Object.keys(imageStyle).forEach((key) => {
        targetStyle[key] = imageStyle[key];
      });
    }
    return targetStyle;
  }, [color, endColor, getImageStyle, startColor, style, type]);
};

export default useStyle;
