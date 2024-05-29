import classnames from 'classnames';
import React from 'react';

interface LeftTopDividerProps {
  showTitle?: boolean;
  dividerText?: string;
  titleStyle?: React.CSSProperties;
  className?: string;
  dividerColor?: string;
  customStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

const dividerClsPrefix = 'ued-divider-leftTop-line';

const LeftTopDivider: React.FC<LeftTopDividerProps> = (props) => {
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
  return (
    <div
      style={{ ...style, ...customStyle }}
      className={classnames('ued-divider-leftTop', className)}
      {...restProps}
    >
      {showTitle && dividerText ? (
        <div style={titleStyle} className="ued-divider-leftTop-text">
          {dividerText}
        </div>
      ) : null}
      <div className={dividerClsPrefix}>
        <div className={`${dividerClsPrefix}-bg-wrapper`}>
          <div
            className={`${dividerClsPrefix}-bg-wrapper-bg`}
            style={{ borderColor: dividerColor }}
          />
        </div>
        <div
          className={`${dividerClsPrefix}-label`}
          style={{ backgroundColor: dividerColor }}
        >
          {showTitle && dividerText ? <span>{dividerText}</span> : null}
        </div>
      </div>
    </div>
  );
};
export default LeftTopDivider;
