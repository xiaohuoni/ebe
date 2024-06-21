import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import LxDashed from './LxDashed';
import LxSolid from './LxSolid';

export interface MyDividerProps {
  style?: React.CSSProperties;
  dividerText?: string;
  showTitle?: boolean;
  type?: 'horizontal' | 'vertical' | undefined;
  titleColor?: string;
  titleFontSize?: string;
  titleLineHeight?: string;
  titleFontWeight?: string;
  dashed?: boolean;
  dashedWidth?: number;
  dashedMargin?: number;
  width?: number;
  height?: number;
  status?: string;
  visible?: boolean;
}

const MyDivider = LingxiForwardRef<any, MyDividerProps>((props, ref) => {
  const {
    style,
    dividerText,
    showTitle = false,
    type,
    titleColor,
    titleFontSize,
    titleLineHeight,
    titleFontWeight,
    dashed,
    dashedWidth = 4,
    dashedMargin = 4,
    visible,
    ...restProps
  } = props;

  const dividerStyle = () => {
    let s = { ...style };
    if (type === 'vertical') {
      // 设置默认值
      s = { width: '1px', height: '12px', ...s }; // 垂直
    } else {
      s = { width: '100%', height: '1px', ...s }; // 水平
    }
    return s;
  };
  const titleStyle = () => {
    return {
      color: titleColor,
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
      fontWeight: titleFontWeight,
    };
  };

  if (!visible) {
    return null;
  }

  if (type === 'horizontal' && dashed) {
    return (
      <LxDashed
        showTitle={showTitle}
        dividerText={dividerText}
        titleStyle={titleStyle()}
        dashedWidth={dashedWidth}
        dashedMargin={dashedMargin}
        style={dividerStyle()}
        {...restProps}
      />
    );
  }
  return (
    <LxSolid
      showTitle={showTitle}
      dividerText={dividerText}
      style={dividerStyle()}
      type={type}
      titleStyle={titleStyle()}
      {...restProps}
    />
  );
});

MyDivider.displayName = 'MyDivider';

export default MyDivider;
