/* eslint-disable jsx-a11y/alt-text */
import { QRCode, QRCodeType } from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import { ImageViewer } from 'antd-mobile-5';
import { useEffect, useMemo, useRef, useState } from 'react';
import closeIcon from '../DformFile/assets/closeIcon.png';
import { setRgbTo16 } from '../utils';
import { logoSizeTrans } from './const';
import './index.less';

export interface QRCodeProps extends QRCodeType {
  visible: boolean;
  customClass: string;
  content: string;
  isLogo?: boolean;
  fileCode?: string;
  src?: string;
  srcType?: string;
}
const prefixCls = 'lcdp-qrcode';
const MyQRCode = LingxiForwardRef<any, QRCodeProps>((props, ref) => {
  // eslint-disable-next-line max-len
  const {
    visible = true,
    content,
    onClick,
    onLongTouch,
    className,
    isLogo,
    fileCode,
    src,
    srcType,
    color: rbgaColor,
    logoSize: logoSizeData,
    getEngineApis,
  } = props;
  const codeRef = useRef<any>();
  const { getAppFileUrlByFileCode } = getEngineApis();
  const [show, setShow] = useState(false);
  const [logoSrc, setLogoSrc] = useState<any>();

  // 自定义二维码logo
  useEffect(() => {
    if (!isLogo) {
      setLogoSrc(null);
      return;
    }
    if (srcType === 'fileCode' && fileCode) {
      (async () => {
        setLogoSrc(getAppFileUrlByFileCode(fileCode));
      })();
    } else if (srcType === 'src' && src && src.length > 0) {
      setLogoSrc(src);
    }
  }, [src, isLogo, fileCode, srcType]);

  const color = useMemo(() => {
    if (!rbgaColor) return;
    // eslint-disable-next-line consistent-return
    return setRgbTo16(rbgaColor);
  }, [rbgaColor]);
  // @ts-ignore
  const logoSize = useMemo(
    () => logoSizeData && logoSizeTrans[logoSizeData],
    [logoSizeData],
  );

  // 二维码信息只传string类型
  const qrCodeContent = useMemo(() => {
    if (content) {
      return typeof content === 'string' ? content : JSON.stringify(content);
    }
    return content;
  }, [content]);

  return visible ? (
    <>
      <QRCode
        // @ts-ignore
        ref={codeRef}
        {...props}
        className={`${prefixCls} ${className}`}
        style={{ ...props.style, display: 'block' }}
        content={qrCodeContent}
        color={color}
        logoSize={logoSize}
        logoSrc={logoSrc}
        onLongTouch={onLongTouch}
        onClick={(url?: string, content?: string) => {
          if (onClick) {
            onClick(url, content);
          } else {
            setShow(true);
          }
        }}
      />
      {show && (
        <div
          className={`${prefixCls}-img-close`}
          onClick={() => setShow(false)}
        >
          <img src={closeIcon} />
        </div>
      )}
      {show && codeRef?.current?.url ? (
        <ImageViewer
          image={codeRef.current.url}
          visible={show}
          onClose={() => {
            setShow(false);
          }}
        />
      ) : null}
    </>
  ) : (
    <></>
  );
});

export default MyQRCode;
