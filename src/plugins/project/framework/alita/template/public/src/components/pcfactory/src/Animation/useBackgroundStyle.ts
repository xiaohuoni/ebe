import { useEffect, useMemo, useState } from 'react';

interface BackgroundConfig {
  backgroundType?: any;
  mode?: string;
  appId?: string;
  engineApis?: any;
}
const useBackgroundStyle = (props: BackgroundConfig) => {
  const {
    backgroundType,
    mode = 'editor',
    appId,
    engineApis,
  } = props || {};
  
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const code = backgroundType?.image?.fileCode;
    if (code) {
      (async () => {
        try {
          if (mode === 'editor' && engineApis) {
            let func: any;
            if (typeof engineApis === 'function') {
              const apis = engineApis();
              if (apis.getAppFileUrlByFileCode) {
                func = apis.getAppFileUrlByFileCode;
              }
            } else if (typeof engineApis?.getAppFileUrlByFileCode === 'function') {
              func = engineApis.getAppFileUrlByFileCode;
            }
            if (func) {
              setImgSrc(await func({ appId: window.appId, fileCode: code }));
            }
          } else if (mode === 'engine') {
            setImgSrc(await engineApis?.service?.getAppFileUrlByFileCode(code, { appId }));
          }
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [mode, backgroundType?.image?.fileCode]);

  const backgroundStyle = useMemo(() => {
    if (backgroundType) {
      const { type, color, image, imageType } = backgroundType || {};
      const { fileUrl } = image || {};
      const obj: any = {};
      if (type === 'image') {
        let url = '';
        if (imageType === 'custom') {
          url = fileUrl;
        } else {
          url = imgSrc;
        }
        obj.backgroundImage = `url(${url})`;
        obj.backgroundRepeat = 'no-repeat';
        obj.backgroundPosition = 'center center';
        obj.backgroundSize = '100% 100%';
      } else if (type === 'cleanColor') {
        obj.backgroundColor = color;
      }
      return obj;
    }
    return {};
  }, [backgroundType, imgSrc]);
  return { backgroundStyle };
};

export default useBackgroundStyle;
