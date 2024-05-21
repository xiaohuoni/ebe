import React from 'react';

export interface IconFontType {
  className?: string;
  style?: React.CSSProperties;
  iconClass?: string;
  width?: number;
  height?: number;
}

const IconFont: React.FC<IconFontType> = (props) => {
  const { className, style, iconClass, width = 13, height = 13 } = props;
  return iconClass ? (
    <svg
      className={className} // eslint-disable-line
      style={style}
      aria-hidden="true"
      width={width}
      height={height}
    >
      <use xlinkHref={`#${iconClass}`} />
    </svg>
  ) : null;
};

export default IconFont;
