import classnames from 'classnames';
import React, { useMemo } from 'react';

interface LeftTabDividerProps {
  showTitle?: boolean;
  dividerText?: string;
  titleStyle?: React.CSSProperties;
  className?: string;
  dividerColor?: string;
  customStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

const dividerClsPrefix = 'ued-divider-leftTab';

const LeftTabDivider: React.FC<LeftTabDividerProps> = (props) => {
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
      return style?.height;
    }
    return '32px';
  }, [style?.height]);
  return (
    <div
      style={{ ...style, ...customStyle, height: dividerHeight }}
      className={classnames(dividerClsPrefix, className)}
      {...restProps}
    >
      <div className={`${dividerClsPrefix}-bg-wrapper`}>
        <div
          className={`${dividerClsPrefix}-bg-wrapper-bg`}
          style={{ backgroundColor: dividerColor }}
        />
      </div>
      <div
        className={`${dividerClsPrefix}-lable`}
        style={{
          backgroundColor: dividerColor,
          lineHeight: dividerHeight,
          ...titleStyle,
        }}
      >
        {showTitle && dividerText ? <span>{dividerText}</span> : null}
      </div>
    </div>
  );
};
export default LeftTabDivider;
