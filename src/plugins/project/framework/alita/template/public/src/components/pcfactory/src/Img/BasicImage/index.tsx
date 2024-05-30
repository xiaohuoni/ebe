import React, { useEffect, useState, useRef } from 'react';

const MyImage = (props: any) => {
  const { defaultSrc, errorSrc, alt, getContainerStyle, imgDisplay, style, ...restProps } = props;
  const imageRef = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(props.src);
  const [imgStyle, setImgStyle] = useState({});
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    if (props.src) {
      setSrc(props.src);
    }
  }, [props.src]);


  // useEffect(() => {
  //   if (imageRef.current) {
  //     if (props.src) {
  //       imageRef.current.onload = () => {
  //         if (getContainerStyle && imgDisplay) {
  //           const { width, height } = getContainerStyle();
  //           const i_width = imageRef.current?.width || style.width;
  //           const i_height = imageRef.current?.height || style.width;
  //           if (imgDisplay === 'fillcut') {
  //             // 以图片最大的
  //             setImgStyle({
  //               width: Math.max(width, i_width),
  //               height: Math.max(height, i_height),
  //             });
  //           }
  //         }
  //         // setSrc(props.src);
  //       };
  //       imageRef.current.onerror = () => setSrc(errorSrc);
  //       imageRef.current.src = props.src;
  //     } else if(errorSrc) {
  //       setSrc(errorSrc)
  //     } else {
  //       setSrc(props.defaultSrc);
  //     }
  //   }
  // }, [props.src, errorSrc, defaultSrc]);

  // return <img {...restProps}  ref={imageRef} alt={alt} style={{ ...style, ...imgStyle }} />;

  const myStyle = { ...style, ...imgStyle };
  // TODO 目前需要优先展示默认图片（默认图片由配置人员配置），当图片加载完成后，再展示真实图片，（@苏楠有没有更好办好）
  return (
    <>
      <img
        {...restProps}
        style={complete ? myStyle : { ...myStyle, display: 'none' }}
        src={src}
        alt={alt}
        ref={imageRef}
        onLoad={() => {
          setComplete(true);
          if (getContainerStyle && imgDisplay) {
            const { width, height } = getContainerStyle();
            const iWidth = imageRef.current?.width || style.width;
            const iHeight = imageRef.current?.height || style.width;
            if (imgDisplay === 'fillcut') {
              // 以图片最大的
              setImgStyle({
                width: Math.max(width, iWidth),
                height: Math.max(height, iHeight),
              });
            }
          }
        }}
        onError={() => {
          setSrc(errorSrc);
          setComplete(true);
        }}
      />
      {!complete && <img {...restProps} alt={alt} src={props.defaultSrc} style={myStyle} />}
    </>
  );
};

export default MyImage;
