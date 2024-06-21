import classNames from 'classnames';
import React, { FC } from 'react';

interface ColItemProps {
  /**
   * 索引行号
   */
  index?: number;

  style?: React.CSSProperties;
  className?: string;
  gutter?: string;
}

const prefixCls = 'lcdp-col-item';
const ColItem: FC<ColItemProps> = (props) => {
  const { style, className, gutter = 0, index } = props;
  return (
    <div
      style={{ marginLeft: index === 0 ? 0 : gutter, ...style }}
      className={classNames(prefixCls, className)}
    >
      {props.children}
    </div>
  );
};

ColItem.defaultProps = {
  index: 0,
};

export default ColItem;
