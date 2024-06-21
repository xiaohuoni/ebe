import { LingxiForwardRef } from '@lingxiteam/types';
import { Card as AntCard } from 'antd-mobile-5';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import useStyle from '../View/useStyle';
import './index.less';

const prefixCls = 'lcdp-h5-card';
export interface MyCardProps {
  // full?: CardProps['full'];
  style?: any;
  cardType?: string;
  title?: React.ReactNode;
  showHeader?: boolean;
  headerBackground?: string;
  headerType?: string;
  headerIcon?: any;
  thumb?: any;
  postfixIcon?: any;
  iconColor?: string;
  postfixIconPosition?: string;
  postfix?: string;
  postFixColor?: string;
  postFixFontSize?: string;
  headerClassName?: string;
  bodyClassName?: string;
  customStyle?: any;
  visible?: boolean;
  onHeaderClick?: (e: any) => void;
  onClick?: (e: any) => void;
  onBodyClick?: (e: any) => void;
  $$ISNEW?: boolean; // 用来区分是否是新旧数据
  src?: string;
  fileCode?: string;
  backgroundType: any;
  className: string;
}
const Card = LingxiForwardRef<any, MyCardProps>((props, ref) => {
  const {
    style,
    children,
    title,
    showHeader = true,
    headerBackground,
    headerType = 'none',
    headerIcon,
    thumb,
    postfixIcon,
    iconColor,
    postfixIconPosition = 'after',
    postfix,
    postFixColor,
    postFixFontSize,
    headerClassName,
    bodyClassName,
    onHeaderClick,
    visible,
    onBodyClick,
    onClick,
    $$ISNEW,
    src,
    fileCode,
    backgroundType = {},
    className,
    getEngineApis,
    ...restProps
  } = props;

  if (!visible) {
    return null;
  }
  const { getAppFileUrlByFileCode } = getEngineApis();
  const finialStyle = {
    ...style,
    padding: style?.padding || '12px',
  };

  const [imgSrc, setImgSrc] = useState<string>();
  const renderChildren = () => {
    return React.Children.toArray(children).map((child: any) => {
      if ($$ISNEW) {
        return React.cloneElement(child, {
          extendProps: {
            onBodyClick,
            style: finialStyle,
            isContainer: child?.props?.schema?.isContainer,
            ...restProps,
          },
        });
      }
      return child;
    });
  };
  const renderIcon = (
    iconInfo: any,
    iconClass = `${prefixCls}-icon`,
    color = '',
  ) => {
    if (!iconInfo) {
      return null;
    }
    let iconView = null;
    if (
      iconInfo?.iconFileInfo &&
      JSON.stringify(iconInfo?.iconFileInfo) !== '{}'
    ) {
      iconView = (
        <div
          className={iconClass || `${prefixCls}-icon`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: iconInfo?.iconFileInfo?.svgContent,
          }}
        />
      );
    } else {
      const { type, theme, isIconFont, fontAddress } = iconInfo;
      iconView = (
        <div className={iconClass || `${prefixCls}-icon`}>
          {/** @ts-ignore */}
          <Icon
            type={type}
            theme={theme}
            isIconFont={isIconFont}
            fontAddress={fontAddress}
            color={color}
            getEngineApis={getEngineApis}
          />
        </div>
      );
    }
    return iconView;
  };
  const renderTitleIcon = () => {
    switch (headerType) {
      case 'vStyle':
      case 'hStyle':
        return (
          <span
            className={
              headerType === 'vStyle'
                ? `${prefixCls}-vStyle`
                : `${prefixCls}-hStyle`
            }
          />
        );
      case 'icon':
        return renderIcon(headerIcon);
      case 'auto': // 自定义图片
        return thumb ? (
          <img src={thumb} className={`${prefixCls}-title-img`} alt="" />
        ) : null;
      default:
        return null;
    }
  };
  const headerStyle = () => {
    const { titleLineHeight, padding } = style;
    const defaultStyle = {
      ...style,
      background: headerBackground,
      titleLineHeight,
      padding: padding || '12px', // 兼容旧数据
    };
    if (props?.cardType === '2') {
      return { ...defaultStyle, border: 'none' };
    }
    delete defaultStyle.backgroundColor; // 背景区域的样式会渲染在背景当中
    return defaultStyle;
  };
  const newTitle = () => {
    if (showHeader && $$ISNEW) {
      const { titleColor, titleFontSize, titleFontWeight } = style;
      return (
        <div
          className={`${prefixCls}-title`}
          style={{
            color: titleColor,
            fontSize: titleFontSize,
            fontWeight: titleFontWeight,
          }}
        >
          {renderTitleIcon()}
          {title}
        </div>
      );
    }
    return null;
  };
  const extra = () => {
    const text = (
      <div style={{ fontSize: postFixFontSize, color: postFixColor }}>
        {postfix}
      </div>
    );
    if (postfixIconPosition === 'before') {
      return (
        <div className={classNames(`${prefixCls}-extra`, 'after381Color')}>
          {renderIcon(postfixIcon, `${prefixCls}-extra-icon`, iconColor)}
          <div className="marginRight6px">{text}</div>
        </div>
      );
    }
    return (
      <div className={classNames(`${prefixCls}-extra`, 'after381Color')}>
        <div className="marginRight2px">{text}</div>
        {renderIcon(postfixIcon, `${prefixCls}-extra-icon`, iconColor)}
      </div>
    );
  };
  useEffect(() => {
    if (backgroundType.image || fileCode) {
      (async () => {
        setImgSrc(getAppFileUrlByFileCode(backgroundType.image || fileCode));
      })();
    }
  }, [backgroundType, src, fileCode]);
  const viewRef = useRef<HTMLDivElement>();
  const restStyle = useStyle(
    {
      ...props,
      src: imgSrc,
    },
    viewRef,
  );
  return (
    <AntCard
      className={classNames(
        `${prefixCls} ${className}`,
        props?.cardType === '2'
          ? `${prefixCls}-after381-card`
          : `${prefixCls}-after381-card-default`,
      )}
      headerClassName={headerClassName}
      bodyClassName={bodyClassName}
      title={newTitle()}
      headerStyle={$$ISNEW && showHeader ? headerStyle() : { display: 'none' }}
      style={{ ...style, overflow: 'hidden', padding: 0 }}
      extra={showHeader ? extra() : null}
      bodyStyle={$$ISNEW ? { padding: '0', ...restStyle } : {}}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
          e.stopPropagation();
        }
      }}
      onHeaderClick={(e) => {
        if (onHeaderClick) {
          onHeaderClick(e);
          e.stopPropagation();
        }
      }}
    >
      {renderChildren()}
    </AntCard>
  );
});

Card.displayName = 'Card';

export default Card;
