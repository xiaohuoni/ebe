import { Spin } from 'antd';
import TweenOne from 'rc-tween-one';
import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocale } from '../utils/hooks/useLocale';
import { AnimationOpts, useAnimation } from './useAnimation';
import useBackgroundStyle from './useBackgroundStyle';

export interface MyViewProps {
  style: React.CSSProperties;
  className: string;
  visible: boolean;
  backgroundType?: any;
  appId?: string;
  loading?: boolean;
  getEngineApis?: any;
}

export interface AnimationProps extends MyViewProps, AnimationOpts {}

const Animation = forwardRef<any, AnimationProps>((props, ref) => {
  const {
    children,
    style,
    className,
    visible = true,
    loading = false,
    backgroundType,
    effect,
    animation,
    repeat,
    reverse,
    ease,
    autoPlay,
    repeatCustom,
    left,
    top,
    xCustom,
    yCustom,
    opacity,
    scale,
    rotate,
    onChange,
    onStart,
    onEnd,
    duration,
    yoyo,
    repeatDelay,
    getEngineApis,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};

  const { getLocale, lang } = useLocale(engineApis);

  const { backgroundStyle } = useBackgroundStyle({
    backgroundType,
    appId: restProps?.appId,
    mode: 'engine',
    engineApis,
  });

  const animationOpts = {
    effect,
    animation,
    repeat,
    reverse,
    ease,
    autoPlay,
    repeatCustom,
    left,
    top,
    xCustom,
    yCustom,
    opacity,
    scale,
    rotate,
    onChange,
    onStart,
    onEnd,
    duration,
    yoyo,
    repeatDelay,
  };

  const { ...tweenOne } = useAnimation(animationOpts, ref);

  const containerRef = useRef<any>();
  const loadingRef = useRef<any>();

  const [reload, setReload] = useState<number>(0);

  const getLoadingStyle = (isShow: boolean): CSSProperties => {
    const res: CSSProperties = {};
    if (containerRef.current && loadingRef.current) {
      const containerRefProps = window.getComputedStyle(containerRef.current);
      const { offsetWidth, offsetHeight } = containerRef.current;
      const containerOffset = containerRef.current.getBoundingClientRect();
      // 获取loading基于父级的偏移量
      const loadingOffset = loadingRef.current.getBoundingClientRect();

      const offset = {
        x: loadingOffset.left - containerOffset.left,
        y: loadingOffset.top - containerOffset.top,
      };

      res.position = 'absolute';
      res.width = `${offsetWidth}px`;
      res.height = `${offsetHeight}px`;
      res.zIndex = containerRefProps.zIndex;
      res.backgroundColor = 'rgba(255,255,255,0.5)';
      res.display = 'flex';
      res.justifyContent = 'center';
      res.alignItems = 'center';
      res.left = 0;
      res.top = 0;
      if (offset.x > 0 || offset.y > 0) {
        res.transform = `translate(${-offset.x}px, ${-offset.y}px)`;
      }
    }
    if (!isShow) {
      res.display = 'none';
    }
    return res;
  };

  const renderLoadingComp = useMemo(() => {
    if (loading && loadingRef.current) {
      return (
        <div style={getLoadingStyle(true)}>
          <Spin tip={getLocale?.('loadingText')} />
        </div>
      );
    }
    return null;
  }, [loading, loadingRef.current, reload, lang]);

  useEffect(() => {
    if (loading) {
      setReload(reload + 1);
    }
  }, [loading]);

  if (!visible) return null;
  return (
    // @ts-ignore
    <TweenOne
      style={{
        ...backgroundStyle,
        ...style,
      }}
      className={className}
      // @ts-ignore
      data-compid={props?.['data-compid']}
      {...restProps}
      ref={containerRef}
      {...tweenOne}
    >
      {children}
      {/* loading 定位元素 */}
      {loading && (
        <div
          style={{
            width: 0,
            height: 0,
            position: 'relative',
            backgroundColor: 'transparent',
            visibility: loading ? 'visible' : 'hidden',
          }}
          ref={loadingRef}
        >
          {renderLoadingComp}
        </div>
      )}
    </TweenOne>
  );
});

export default Animation;
