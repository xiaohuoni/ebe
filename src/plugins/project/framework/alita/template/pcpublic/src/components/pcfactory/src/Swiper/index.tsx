import { Icon as LegacyIcon } from '@lingxiteam/icons';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Carousel } from 'antd';
import classnames from 'classnames';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

export interface MySwiperProps {
  /** 数据源 */
  data?: any[];
  itemType?: string;
  itemValue?: string;
  itemLink?: string;

  /** 录播时间 */
  autoplay?: boolean;

  /** 方向 */
  dotPosition?: 'top' | 'bottom' | 'left' | 'right';

  /** 是否显示面板指示点 */
  dots?: boolean;

  /** 自定义样式 */
  style?: React.CSSProperties;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
  visible?: any;
  current?: number;
  doNext?: any;
  doPrev?: any;
  className?: string;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  arrowsDisplay?: any;
}
const Swiper = LingxiForwardRef<any, MySwiperProps>((props, ref) => {
  const {
    visible = true,
    current,
    doNext,
    doPrev,
    data = [],
    itemType = 'type',
    itemValue = 'value',
    itemLink = 'link',
    style,
    className,
    slidesToShow = 1,
    slidesToScroll = 1,
    dotPosition,
    arrows,
    arrowsDisplay,
    getEngineApis,
    ...restProps
  } = props;
  const { historyPush } = getEngineApis();
  // @ts-ignore
  const { subclassName, width, height, ...restStyle } = style;
  const iscross = dotPosition === 'top' || dotPosition === 'bottom'; // 横向的
  // 自适应高度
  useEffect(() => {
    const c = document.getElementsByClassName('ued-swiper-wrap')[0];
    const cHeight = c?.clientHeight;
    if (cHeight) {
      (
        document.getElementsByClassName('slick-slider')[0] as any
      ).style.height = `${cHeight}px`;
    }
  }, []);

  const carouselRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    prev() {
      carouselRef?.current?.prev();
    },
    next() {
      carouselRef?.current?.next();
    },
    goTo(current: number) {
      if (current) {
        if (current - 1 < 0) {
          return;
        }
        // 从1开始
        carouselRef?.current?.goTo(current - 1);
      }
    },
  }));

  const renderItem = (item: any) => {
    const value = item[itemValue];
    const link = item[itemLink];

    const divStyle = {
      background: `url('${value}') center no-repeat`,
      backgroundSize: 'cover',
      height,
    };
    return (
      <div
        style={divStyle}
        onClick={() => {
          switch (itemType) {
            case 'link':
              window.open(link, '_blank');
              break;
            case 'route': // 跳转路由
              historyPush?.(link);
              break;
            case 'img': // TODO
            case 'video': // TODO
            default:
              break;
          }
        }}
      />
    );
  };

  const smallerThan200 = () => {
    return height && height.indexOf('px') > -1 && +height.split('px')[0] <= 200;
  };

  return visible ? (
    <div
      className={classnames('ued-swiper-wrap', className)}
      style={{ ...restStyle, width, height }}
    >
      {arrows && (
        <div
          className={classnames(
            'ued-swiper-icon',
            iscross ? 'left' : 'up',
            arrowsDisplay,
            smallerThan200() ? 'small' : '',
          )}
          onClick={() => {
            if (carouselRef.current) {
              carouselRef?.current?.prev();
            }
          }}
        >
          <LegacyIcon type={iscross ? 'left' : 'up'} />
        </div>
      )}
      <Carousel
        ref={carouselRef}
        {...restProps}
        slidesToShow={Number(slidesToShow)}
        slidesToScroll={Number(slidesToScroll)}
        dotPosition={dotPosition}
      >
        {Array.isArray(data)
          ? data.map((item, index) => (
              <div key={index} className={subclassName}>
                {renderItem(item)}
              </div>
            ))
          : null}
      </Carousel>
      {arrows && (
        <div
          className={classnames(
            'ued-swiper-icon',
            iscross ? 'right' : 'down',
            arrowsDisplay,
            smallerThan200() ? 'small' : '',
          )}
          onClick={() => {
            if (carouselRef.current) {
              carouselRef?.current?.next();
            }
          }}
        >
          <LegacyIcon type={iscross ? 'right' : 'down'} />
        </div>
      )}
    </div>
  ) : null;
});

export default Swiper;
