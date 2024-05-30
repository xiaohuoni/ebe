import React, { useEffect, useImperativeHandle, useState } from 'react';
// @ts-ignore
import IconPlaceholder from './assets/placeholder.png';
import Img from './BasicImage';

export interface MyImgProps {
  visible?: boolean;
  name?: string;
  alt: string;
  imgSrc?: string;
  fileId?: string;
  src: string;
  fileName?: string;
  fileCode?: string;
  errorSrc?: string;
  srcType?: 'fileCode' | 'src'
  style?: React.CSSProperties;
  getContainerStyle?: () => React.CSSProperties;
  imgDisplay?: string;
  onClick?: () => void;
  getEngineApis?: any;
}

const MyImg = React.forwardRef<any, MyImgProps>((props, ref) => {
  const {
    visible = true,
    alt,
    fileId,
    src,
    fileName = '',
    fileCode,
    srcType,
    getEngineApis,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};

  const [imgSrc, setImgSrc] = useState<string>();
  const [errorSrc, setErrorSrc] = useState<string>();


  useEffect(() => {
    // srcType设置兼容存量数据，当存量数据无srcType时根据旧的资源优先级进行赋值
    let mySrcType = srcType;
    if (!mySrcType) { // 存量数据判断，建议三个月以上的时间之后再进行删除
      if (fileCode) {
        mySrcType = 'fileCode';
      } else {
        mySrcType = 'src';
      }
    }
    if (mySrcType === 'fileCode' && fileCode) {
      setImgSrc(engineApis?.service?.getAppFileUrlByFileCode(fileCode));
    } else {
      setImgSrc(src);
    }
  }, [src, fileName, fileId, srcType, fileCode]);

  useEffect(() => {
    if (props.errorSrc) {
      const tempSrc = engineApis?.service?.getAppFileUrlByFileCode(props.errorSrc);
      setErrorSrc(tempSrc);
    }
  }, [props.errorSrc]);

  useImperativeHandle(ref, () => ({
    setSrc: (href: string) => {
      setImgSrc(href);
    },
    setCompFileId: (fileId: string) => {
      setImgSrc(engineApis?.service?.getAppFileUrlById(fileId));
    },
    get value() {
      return { url: imgSrc };
    },
  }));

  return visible ? (
    <Img {...restProps} src={imgSrc} alt={alt} errorSrc={errorSrc} defaultSrc={IconPlaceholder} />
  ) : null;
});
export default MyImg;
