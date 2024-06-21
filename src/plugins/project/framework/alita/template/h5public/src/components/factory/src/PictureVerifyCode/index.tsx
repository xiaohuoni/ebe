import { LingxiForwardRef } from '@lingxiteam/types';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import IconPlaceholder from './assets/placeholder.png';

export interface PictureVerifyCodeProps {
  digit?: number;
  onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  visible?: boolean;
}
// @ts-ignore
const PictureVerifyCode: React.FC<PictureVerifyCodeProps> = LingxiForwardRef<
  any,
  PictureVerifyCodeProps
>((props, ref) => {
  const { digit, onClick, style, visible, getEngineApis, ...restProps } = props;
  const { getValidateCodePicture } = getEngineApis();
  const [imgSrc, setImgSrc] = useState(IconPlaceholder);
  const getPicVerifyCode = () => {
    const newTimestamp = new Date().getTime();
    if (digit && newTimestamp) {
      try {
        const params = {
          validateCodeCount: `${digit}`,
          t: `${newTimestamp}`,
        };
        setImgSrc(getValidateCodePicture(params));
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    getPicVerifyCode();
  }, []);
  useImperativeHandle(ref, () => ({
    refreshPictureVeriryCode: () => {
      getPicVerifyCode();
    },
  }));
  const targetStyle = useMemo(() => {
    return { ...style, cursor: 'pointer' };
  }, [style]);
  if (!visible) {
    return null;
  }
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <img
      {...restProps}
      style={targetStyle}
      src={imgSrc}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else {
          // 点击事件如果有自定义则执行自定义事件，反之默认刷新验证码
          getPicVerifyCode();
        }
      }}
    />
  );
});

export default PictureVerifyCode;
