import React, { useMemo } from 'react';
import classnames from 'classnames';

interface LeftCardDividerProps {
  showTitle?: boolean;
  dividerText?: string;
  titleStyle?: React.CSSProperties;
  className?: string;
  dividerColor?: string;
  customStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

const dividerClsPrefix = 'ued-divider-leftCard';

const LeftCardDivider: React.FC<LeftCardDividerProps> = (props) => {
  const {
    showTitle,
    dividerText,
    titleStyle,
    className,
    dividerColor = '',
    style,
    customStyle,
    ...restProps
  } = props;
  // 高度需为px 分割线的样式才会生效
  const dividerHeight = useMemo(() => {
    const heigth = style?.height ? `${style?.height}` : '';
    if (heigth && heigth?.match('px')) {
      return heigth;
    }
    // 默认值
    return '32px';
  }, [style?.height]);
  const triangleLeftWidth = useMemo(() => {
    if (dividerHeight?.match('px')) {
      const _height: number = parseInt(dividerHeight.split('px')[0], 10);
      return _height / 2.747; // tan(70°)
    }
    return 12;
  }, [dividerHeight]);
  return (
    <div
      style={{ ...style, ...customStyle, height: dividerHeight }}
      className={classnames(dividerClsPrefix, className)}
      {...restProps}
    >
      <div
        className={`${dividerClsPrefix}-lable`}
        style={{
          ...titleStyle,
          backgroundColor: dividerColor,
          lineHeight: dividerHeight,
        }}
      >
        <div className={`${dividerClsPrefix}-lable-text`}>{showTitle && dividerText ? dividerText : ''}</div>
      </div>
      <div className={`${dividerClsPrefix}-parallelogram1`} style={{ backgroundColor: dividerColor }} />
      <div
        className={`${dividerClsPrefix}-triangle`}
        style={dividerColor ? {
          borderBottomWidth: dividerHeight,
          borderBottomColor: dividerColor,
          borderLeft: `${triangleLeftWidth}px solid transparent`,
        } : {
          borderBottomWidth: dividerHeight,
          borderLeft: `${triangleLeftWidth}px solid transparent`,
        }}
      />
      <div className={`${dividerClsPrefix}-parallelogram2`} style={{ backgroundColor: dividerColor }} />
    </div>
  );
};
export default LeftCardDivider;
