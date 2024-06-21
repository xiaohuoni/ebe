import { LingxiForwardRef } from '@lingxiteam/types';
import TweenOne from 'rc-tween-one';
import { useEffect, useRef, useState } from 'react';
import { AnimationOpts, useAnimation } from './useAnimation';
import type { AppViewProps } from './useStyle';
import useStyle from './useStyle';

export interface AnimationProps extends AppViewProps, AnimationOpts {
  className: string;
}

const Animation = LingxiForwardRef<any, AnimationProps>((props, ref) => {
  const {
    backgroundType = {},
    fileCode,
    src,
    className,
    children,
    getEngineApis,
    $$componentItem,
    ...animationOpts
  } = props;
  const [imgSrc, setImgSrc] = useState<string>();

  const { getAppFileUrlByFileCode } = getEngineApis();
  const viewRef = useRef<HTMLDivElement>();
  const style = useStyle(
    {
      ...props,
      src: imgSrc,
    },
    viewRef,
  );

  const { visible, ...tweenOne } = useAnimation(animationOpts, ref);

  useEffect(() => {
    if (backgroundType.image || fileCode) {
      setImgSrc(
        getAppFileUrlByFileCode(backgroundType.image || fileCode, {
          appId: $$componentItem.appId,
        }),
      );
    }
  }, [backgroundType, src, fileCode]);

  if (!visible) {
    return <></>;
  }

  return (
    <TweenOne style={style} className={className} {...tweenOne}>
      {children}
    </TweenOne>
  );
});

Animation.displayName = 'Animation';

export default Animation;
