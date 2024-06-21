import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import '../../index.less';
import type { IconProps } from '../Icon';
import Icon from '../Icon';

const prefixCls = 'lcdp-blockselect';
interface CheckBoxProps extends IconProps {
  index?: number;
  restItem?: any;
  col?: number;
  space?: number;
  style?: React.CSSProperties;
  valueKey?: string;
  iconPosition?: string;
  defaulIcon?: string;
  normalIconColor?: any;
  selectIconColor?: any;
}

const CheckBox: FC<CheckBoxProps> = (props) => {
  const {
    col,
    space,
    style,
    children,
    iconPosition,
    defaultIcon,
    ...iconProps
  } = props;
  const myStyle = { ...style } || {};
  if (iconProps?.restItem?.myBSHidden === 'hidden') {
    myStyle.display = 'none';
  } else if (myStyle.display === 'none') {
    delete myStyle.display;
  }
  return (
    <div style={myStyle} className={classNames(`${prefixCls}-blockSelect`)}>
      {iconPosition === 'left' && (
        <Icon
          {...iconProps}
          iconPosition={iconPosition}
          defaultIcon={defaultIcon}
        />
      )}
      <div className={`${prefixCls}-content`}>{children}</div>
      {iconPosition === 'right' && (
        <Icon
          {...iconProps}
          iconPosition={iconPosition}
          defaultIcon={defaultIcon}
        />
      )}
    </div>
  );
};

export default CheckBox;
