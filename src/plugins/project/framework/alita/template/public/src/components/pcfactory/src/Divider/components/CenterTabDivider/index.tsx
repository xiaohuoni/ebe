import classnames from 'classnames';
import React, { useMemo } from 'react';

interface CenterTabDividerProps {
  showTitle?: boolean;
  dividerText?: string;
  titleStyle?: React.CSSProperties;
  className?: string;
  dividerColor?: string;
  customStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

const dividerClsPrefix = 'ued-divider-centerTab';

const CenterTabDivider: React.FC<CenterTabDividerProps> = (props) => {
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
    const heigth = `${style?.height}`;
    if (heigth && heigth?.match('px')) {
      return heigth;
    }
    // 默认值
    return '32px';
  }, [style?.height]);
  return (
    <div
      style={{ ...style, ...customStyle, height: dividerHeight }}
      className={classnames(dividerClsPrefix, className)}
      {...restProps}
    >
      <div
        className={`${dividerClsPrefix}-bg`}
        style={{ backgroundColor: dividerColor }}
      />
      <div className={`${dividerClsPrefix}-center`}>
        <div
          className={`${dividerClsPrefix}-center-label`}
          style={{
            ...titleStyle,
            backgroundColor: dividerColor,
            lineHeight: dividerHeight,
          }}
        >
          {showTitle && dividerText ? <span>{dividerText}</span> : null}
        </div>
        <div
          className={`${dividerClsPrefix}-center-left-triangle`}
          style={{ backgroundColor: dividerColor }}
        />
        <div
          className={`${dividerClsPrefix}-center-left-border`}
          style={{ backgroundColor: dividerColor }}
        />
        <div
          className={`${dividerClsPrefix}-center-rigth-triangle`}
          style={{ backgroundColor: dividerColor }}
        />
        <div
          className={`${dividerClsPrefix}-center-rigth-border`}
          style={{ backgroundColor: dividerColor }}
        />
      </div>
    </div>
  );
};
export default CenterTabDivider;
