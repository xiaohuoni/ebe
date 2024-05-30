import React, { useEffect, useState, useMemo } from 'react';
import { LingxiForwardRef } from '@lingxiteam/types';
import QrCodeWithLogo from 'qr-code-with-logo';
import { setRgbTo16, isImgUrl } from '../utils/common';
import { logoSizeTrans } from './const';
// @ts-ignore
import IconDefaultLogo from '../Img/assets/placeholder.png';

export interface MyQRCodeProps {
  visible?: boolean;
  value?: any;
  content?: string;
  isLogo?: boolean;
  srcType?: string;
  fileCode?: string;
  src?: string;
  color?: string;
  logoSize?: string;
  onClick?: (url?: string, content?: string) => void;
  getEngineApis?: any;
}

const prefixCls = 'qRCode';

const QRCode = LingxiForwardRef<any, MyQRCodeProps>((props, ref) => {
  const { content, isLogo, fileCode, src, srcType, color: rbgaColor,
    logoSize: logoSizeData, onClick, getEngineApis, visible = true, ...restProps } = props;
  const [url, setUrl] = useState<any>();
  const [logoSrc, setLogoSrc] = useState<any>();
  const [flag, setFlag] = useState(false);
  const engineApis = getEngineApis?.() || {};

  // 自定义二维码logo
  useEffect(() => {
    if (!isLogo) {
      setLogoSrc(null);
      return;
    }
    if (srcType === 'fileCode' && fileCode) {
      (async () => {
        try {
          setLogoSrc(await engineApis?.service?.getAppFileUrlByFileCode(fileCode));
        } catch (e) {
          setLogoSrc(null);
          console.log(e);
        }
      })();
    } else if (srcType === 'src' && src && src.length > 0) {
      setLogoSrc(src);
    } else {
      setLogoSrc(null);
    }
  }, [src, isLogo, fileCode, srcType]);

  const color = useMemo(() => {
    if (!rbgaColor) return undefined;
    return setRgbTo16(rbgaColor);
  }, [rbgaColor]);

  const logoSize = useMemo(() => logoSizeData && logoSizeTrans[logoSizeData], [logoSizeData]);

  const getQrCodeUrl: any = (config: any) => {
    const image = new Image();

    QrCodeWithLogo.toImage({ ...config, image }).then(() => {
      setUrl(image.src);
      setFlag(true);
    });
  };

  const setQrCodeUrl: any = async () => {
    const config: any = {
      content: typeof content === 'string' ? content : JSON.stringify(content),
      nodeQrCodeOptions: {
        margin: 2,
        color: {
          dark: color,
        },
      },
    };

    if (logoSrc) {
      try {
        await isImgUrl(logoSrc);

        getQrCodeUrl({
          ...config,
          logo: {
            logoSize,
            src: logoSrc,
            borderRadius: 4,
          },
        });
      } catch (e) {
        // 如果自定义logo图片无法加载，使用默认logo
        getQrCodeUrl({
          ...config,
          logo: {
            borderRadius: 4,
            logoSize: logoSize + 0.05,
            borderSize: 0,
            src: IconDefaultLogo,
          },
        });
      }
    } else {
      getQrCodeUrl(config);
    }
  };

  useEffect(() => {
    if (content) {
      setQrCodeUrl();
    } else {
      setFlag(false);
    }
  }, [content, color, logoSrc, logoSize]);

  return visible ? (
    <div
      className={prefixCls}
      style={{ display: 'contents' }}
      onClick={() => onClick && onClick(url, content)}
    >
      {flag && <img {...restProps} src={url} alt="" />}
    </div>
  ) : null;
});


export default QRCode;
