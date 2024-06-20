import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';

export interface MyConditionprops {
  visible?: boolean;
  style?: React.CSSProperties;
  type?: 'remove' | 'hidden';
  onClick?: () => void;
  className: string;
}

const Condition = LingxiForwardRef<any, MyConditionprops>((props, ref) => {
  const {
    children,
    className,
    visible,
    style = {},
    type = 'remove',
    onClick,
  } = props;

  const newStyle = React.useMemo(() => {
    if (type === 'hidden' && visible === false) {
      return {
        ...style,
        display: 'none',
      };
    }
    return style;
  }, [visible, style, type]);

  if (type === 'hidden') {
    return (
      <span style={newStyle} onClick={onClick} className={className}>
        {children}
      </span>
    );
  }

  return visible ? (
    <span style={newStyle} onClick={onClick} className={className}>
      {children}
    </span>
  ) : null;
});

Condition.displayName = 'Condition';

export default Condition;
