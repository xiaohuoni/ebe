/* eslint-disable consistent-return */
import { LingxiForwardRef } from '@lingxiteam/types';
import { Swiper } from 'antd-mobile-5';
import classNames from 'classnames';
import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';
import './index.less';

export interface MyCarouselProps {
  data?: any[];
  visible?: boolean;
  components?: any[];
  direction: string;
  vertical?: boolean;
  style: any;
  selectedIndex: number;
  pageIndicatorStyle: string;
  dots?: boolean;
  slideWidth?: number;
  slideSize: number;
  cellSpacing?: number;
  trackOffset: number;
  autoplayInterval?: number;
  newAutoplayInterval: number;
  isDataSourceLoading: boolean;
  infinite: boolean;
  dotStyle?: any;
  dotColor?: string;
  onClick?: (index: number, item?: any) => void;
  onIndexChange?: (index: number) => void;
  children?: any[];
}

const prefixCls = 'lcdp-swiper';
const MyCarousel = LingxiForwardRef<any, MyCarouselProps>((props, ref) => {
  const {
    components,
    isDataSourceLoading,
    data = [],
    children,
    // autoplay,
    vertical,
    direction,
    style = {},
    selectedIndex,
    pageIndicatorStyle,
    slideWidth,
    slideSize,
    dots,
    autoplayInterval,
    newAutoplayInterval,
    infinite,
    dotStyle = {},
    dotColor,
    onIndexChange,
    onClick,
    visible,
    ...restProps
  } = props;
  const { MemoRenderer, px2rem, getLocale } = props.getEngineApis();
  const { MemoLoopItem, renderer } = MemoRenderer;

  const swiperRef = useRef<any>(null);

  const [index, setIndex] = useState(selectedIndex);
  const showChildren = useMemo(() => {
    // 存量无isDataSourceLoading
    if (typeof isDataSourceLoading === 'undefined') {
      if (Array.isArray(data) && data.length > 0) {
        return false;
      }
      return true;
    }
    return !isDataSourceLoading;
  }, [data, isDataSourceLoading]);

  // useEffect(() => {
  //   // 处理自定义数据后, 跑马灯不自动开始循环问题
  //   if (Array.isArray(data) && data.length > 0) {
  //     setOther(!autoplay);
  //     setTimeout(() => {
  //       setOther(autoplay);
  //     });
  //   }
  // }, [data]);

  useImperativeHandle(ref, () => ({
    swipeNext: () => {
      if (swiperRef.current) {
        swiperRef.current.swipeNext();
      }
      if (!children)
        return {
          status: false,
          msg: getLocale(
            'Carousel.switchEmpty',
            '轮播图组件没有内容，无法切换',
          ),
        };
      if (showChildren) {
        if (infinite) {
          if (index === children.length - 1) {
            return { status: true, targetIndex: 0 };
          }
          return { status: true, targetIndex: index + 1 };
        }
        if (index === children.length - 1) {
          return {
            status: false,
            msg: getLocale('Carousel.isLast', '已是最后一项'),
          };
        }
        return { status: true, targetIndex: index + 1 };
      }
      if (infinite) {
        if (index === data.length - 1) {
          return { status: true, targetIndex: 0, targetData: data[0] };
        }
        return {
          status: true,
          targetIndex: index + 1,
          targetData: data[index + 1],
        };
      }
      if (index === data.length - 1) {
        return {
          status: false,
          msg: getLocale('Carousel.isLast', '已是最后一项'),
        };
      }
      return {
        status: true,
        targetIndex: index + 1,
        targetData: data[index + 1],
      };
    },
    swipePrev: () => {
      if (swiperRef.current) {
        swiperRef.current.swipePrev();
      }
      if (!children)
        return {
          status: false,
          msg: getLocale(
            'Carousel.switchEmpty',
            '轮播图组件没有内容，无法切换',
          ),
        };
      if (showChildren) {
        // 循环
        if (infinite) {
          if (!index) {
            return { status: true, targetIndex: children.length - 1 };
          }
          return { status: true, targetIndex: index - 1 };
        }
        if (!index) {
          return {
            status: false,
            msg: getLocale('Carousel.isFirst', '已是第一项'),
          };
        }
        return { status: true, targetIndex: index - 1 };
      }
      if (infinite) {
        if (!index) {
          return {
            status: true,
            targetIndex: data.length - 1,
            targetData: data[data.length - 1],
          };
        }
        return {
          status: true,
          targetIndex: index - 1,
          targetData: data[index - 1],
        };
      }
      if (!index) {
        return {
          status: false,
          msg: getLocale('Carousel.isFirst', '已是第一项'),
        };
      }
      return {
        status: true,
        targetIndex: index - 1,
        targetData: data[index - 1],
      };
    },
    swipeTo: (i: number) => {
      if (swiperRef.current) {
        swiperRef.current.swipeTo(i);
      }
      if (!children)
        return {
          status: false,
          msg: getLocale(
            'Carousel.switchEmpty',
            '轮播图组件没有内容，无法切换',
          ),
        };
      if (showChildren) {
        if (children[i]) return { status: true, targetIndex: i };
        return {
          status: false,
          msg: getLocale('Carousel.noExist', '轮播图组件没有此项'),
        };
      }
      if (data[i]) return { status: true, targetIndex: i, targetData: data[i] };
      return {
        status: false,
        msg: getLocale('Carousel.noExist', '轮播图组件没有此项'),
      };
    },
  }));

  if (!visible) {
    return <></>;
  }

  const mDirection = useMemo(() => {
    if (direction) return direction;
    if (vertical) {
      return 'vertical';
    }
    return 'horizontal';
  }, [direction, vertical]) as 'vertical' | 'horizontal' | undefined;

  // @ts-ignore
  const mSlideSize = useMemo(() => {
    if (slideSize || slideSize === 0) return slideSize;
    if (slideWidth || slideWidth === 0) {
      if (slideWidth) return slideWidth * 100;
      return 0;
    }
  }, [slideWidth, slideSize]);
  // @ts-ignore
  const mAutoplayInterval = useMemo(() => {
    if (newAutoplayInterval || newAutoplayInterval === 0) {
      if (newAutoplayInterval) return newAutoplayInterval * 1000;
      return 0;
    }
    if (autoplayInterval || autoplayInterval === 0) {
      return autoplayInterval;
    }
  }, [autoplayInterval, newAutoplayInterval]);

  // @ts-ignore
  const indicator = useMemo(() => {
    if (!dots || pageIndicatorStyle === 'noneStyle') return () => null;
  }, [dots, pageIndicatorStyle]);

  // @ts-ignore
  const indicatorProps: any = useMemo(() => {
    switch (pageIndicatorStyle) {
      case 'defaultStyle':
        return {
          style: px2rem({
            '--active-dot-color': dotColor || '#4477EE',
            '--dot-border-radius': dotStyle.borderRadius || '2px',
            '--dot-color': 'rgba(28, 36, 46, 0.15)',
            ...dotStyle,
          }),
        };
      case 'oneStyle':
        return {
          style: px2rem({
            '--active-dot-color': dotColor || '#4477EE',
            '--active-dot-size': '3px',
            '--dot-border-radius': dotStyle.borderRadius || '2px',
            '--dot-color': 'rgba(28, 36, 46, 0.15)',
            ...dotStyle,
          }),
        };
      case 'twoStyle':
        return {
          style: px2rem({
            '--active-dot-color': dotColor || '#4477EE',
            '--dot-spacing': '0',
            '--dot-size': '13px',
            '--dot-border-radius': dotStyle.borderRadius || '2px',
            '--dot-color': 'rgba(28, 36, 46, 0.15)',
            ...dotStyle,
          }),
        };
      default:
    }
  }, [pageIndicatorStyle, dotStyle, dotColor]);

  const renderSwiperChild = (
    childs: any,
    isSwiper = false,
  ): React.ReactNode => {
    if (!childs) return null;
    return childs.map((child: any, index: number) => {
      const { props: childProps } = child;
      if (!React.isValidElement(child)) {
        if (isSwiper) {
          return (
            <Swiper.Item
              key={index}
              onClick={() => {
                if (onClick) onClick(index);
              }}
            >
              {child}
            </Swiper.Item>
          );
        }
        return child;
      }
      const isArray = Array.isArray(childProps.children);

      if (
        childProps.children &&
        ((isArray && !!childProps.children.length) ||
          (!isArray &&
            childProps.children.type &&
            !!Object.keys(childProps.children).length))
      ) {
        const newChilds = React.Children.toArray(childProps?.children);
        if (isSwiper) {
          return (
            <Swiper.Item
              key={index}
              onClick={() => {
                if (onClick) onClick(index);
              }}
            >
              {React.cloneElement(
                child,
                childProps,
                renderSwiperChild(newChilds),
              )}
            </Swiper.Item>
          );
        }
        return React.cloneElement(
          child,
          childProps,
          renderSwiperChild(newChilds),
        );
      }
      if (isSwiper) {
        return (
          <Swiper.Item
            key={index}
            onClick={() => {
              if (onClick) onClick(index);
            }}
          >
            {child}
          </Swiper.Item>
        );
      }
      return child;
    });
  };

  const mProps = {
    indicatorProps,
  } as any;
  if (indicator) mProps.indicator = indicator;

  return (
    <div
      className={classNames({
        [`${prefixCls}`]: mDirection !== 'vertical',
        [`${prefixCls}-vertical`]: mDirection === 'vertical',
      })}
      style={{ ...style, overflow: 'hidden' }}
    >
      <Swiper
        {...restProps}
        {...mProps}
        ref={swiperRef}
        direction={mDirection}
        defaultIndex={selectedIndex}
        loop={infinite}
        slideSize={mSlideSize}
        autoplayInterval={mAutoplayInterval}
        // autoplay={other}
        onIndexChange={(i) => {
          setIndex(i);
          if (onIndexChange) onIndexChange(i);
        }}
        style={{
          '--height': '100%',
          '--width': '100%',
        }}
      >
        {showChildren
          ? (renderSwiperChild(children, true) as any)
          : data.map((item, i) => {
              const renderProps = {
                item,
                i,
                __render__: props.__render__,
                renderer,
                itemId: `${i}`,
                compId: props.$$componentItem.uid,
              };
              return (
                <Swiper.Item
                  key={i}
                  onClick={() => {
                    if (onClick) onClick(index, item);
                  }}
                >
                  <MemoLoopItem {...renderProps} />
                </Swiper.Item>
              );
            })}
      </Swiper>
    </div>
  );
});

MyCarousel.displayName = 'Carousel';

export default MyCarousel;
