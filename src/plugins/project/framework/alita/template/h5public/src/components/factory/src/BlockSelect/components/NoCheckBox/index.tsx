import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import '../../index.less';
import type { IconProps } from '../Icon';

const prefixCls = 'lcdp-blockselect';
interface NoCheckBoxProps extends IconProps {
  index?: number;
  restItem?: any;
  col?: number;
  space?: number;
  style?: React.CSSProperties;
  valueKey?: string;
}

const NoCheckBox: FC<NoCheckBoxProps> = (props) => {
  // 去除非选则模式下的默认选中框
  // const { checked, style, children, onChange, getEngineApis, ...restProps } = props;
  const { style, children, onChange, getEngineApis, ...restProps } = props;
  const { compatConfig } = getEngineApis?.() || {};
  const myStyle = { ...style } || {};
  if (restProps?.restItem?.myBSHidden === 'hidden') {
    myStyle.display = 'none';
  } else if (myStyle.display === 'none') {
    delete myStyle.display;
  }
  return (
    <div
      style={myStyle}
      className={classNames(
        `${prefixCls}-blockSelect`,
        `${prefixCls}-showIcon`,
        // { [`${prefixCls}-select`]: checked }
      )}
      onClick={(e: any) => {
        if (compatConfig?.cmd?.stopPropagation) {
          e.stopPropagation();
        }
        if (onChange) {
          onChange({
            restItem: props.restItem,
            index: props.index,
          });
        }
      }}
    >
      <div className={`${prefixCls}-content`}>{children}</div>
    </div>
  );
};

export default NoCheckBox;
