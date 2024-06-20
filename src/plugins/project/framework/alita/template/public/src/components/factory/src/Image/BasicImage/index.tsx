import React, { useEffect, useImperativeHandle, useState } from 'react';
import { AppForwardRef } from '../../BasicComponents';
import useHiddenStyle from '../../utils/hooks/useHiddenStyle';

export interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  [x: string]: any;
  defaultSrc?: any;
  src?: any;
  errorSrc?: any;
  alt?: any;
}

const MyImage = AppForwardRef<ImageProps>((props, ref) => {
  const {
    defaultSrc,
    errorSrc,
    alt,
    visible = true,
    style,
    getEngineApis,
    ...restProps
  } = props;
  const engineApis = getEngineApis?.();
  const [src, setSrc] = useState(props.src);
  const [complete, setComplete] = useState(false);
  const finStyle = useHiddenStyle(visible, style);

  useEffect(() => {
    if (props.src) {
      setSrc(props.src);
    }
  }, [props.src]);

  useImperativeHandle(ref, () => ({
    setSrc(v: string) {
      setSrc(v);
    },
    setCompFileId: (fileId: string) => {
      setSrc(engineApis.getAppFileUrlById(fileId));
    },
    get value() {
      return { url: src };
    },
  }));

  return (
    <>
      <img
        {...restProps}
        style={complete ? finStyle : { ...finStyle, display: 'none' }}
        src={src}
        alt={alt}
        onLoad={() => {
          setComplete(true);
        }}
        onError={() => {
          setSrc(errorSrc);
          setComplete(true);
        }}
      />
      {!complete && (
        <img {...restProps} alt={alt} src={props.defaultSrc} style={finStyle} />
      )}
    </>
  );
});

export default MyImage;
