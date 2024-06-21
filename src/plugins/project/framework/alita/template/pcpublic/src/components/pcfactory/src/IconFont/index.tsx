import type { FC } from 'react';
import React from 'react';

interface IconFontProps extends React.HTMLProps<HTMLDivElement> {
  iconClass?: any;
}

const IconFont: FC<IconFontProps> = (props) => {
  const { className, style, iconClass, width = 13, height = 13 } = props;

  return (
    <svg
      className={className} // eslint-disable-line
      style={style}
      aria-hidden="true"
      width={width}
      height={height}
    >
      <use xlinkHref={`#${iconClass}`} />
    </svg>
  );
};

export default IconFont;
