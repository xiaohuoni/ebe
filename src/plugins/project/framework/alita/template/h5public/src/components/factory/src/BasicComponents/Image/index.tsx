import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

export interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  defaultSrc?: string;
  errorSrc?: string;
}

const MyImage: FC<ImageProps> = (props) => {
  const { defaultSrc, errorSrc, ...restProps } = props;
  const imageRef = useRef<HTMLImageElement>();
  const [src, setSrc] = useState(props.defaultSrc);

  useEffect(() => {
    imageRef.current = new Image();
  }, []);

  useEffect(() => {
    if (props.src && imageRef.current) {
      imageRef.current.onload = () => setSrc(props.src);
      imageRef.current.onerror = () => setSrc(errorSrc);
      imageRef.current.src = props.src;
    }
  }, [props.src, errorSrc]);

  return <img {...restProps} src={src} alt="" />;
};

export default MyImage;
