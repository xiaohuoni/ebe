import classnames from 'classnames';
import React, { useMemo } from 'react';

interface CenterLineDividerProps {
  showTitle?: boolean;
  dividerText?: string;
  titleStyle?: React.CSSProperties;
  className?: string;
  dividerColor?: string;
  customStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

const dividerClsPrefix = 'ued-divider-centerLine';

const CenterLineDivider: React.FC<CenterLineDividerProps> = (props) => {
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
  const bgProps = useMemo(() => {
    return { style: { backgroundColor: dividerColor } };
  }, [dividerColor]);
  // 高度需为px 分割线的样式才会生效
  const dividerHeight = useMemo(() => {
    const heigth = style?.height ? `${style?.height}` : '';
    if (heigth && heigth?.match('px')) {
      return parseInt(heigth.split('px')[0], 10);
    }
    // 默认值
    return 32;
  }, [style?.height]);
  return (
    <div
      style={{ ...style, ...customStyle, height: `${dividerHeight}px` }}
      className={classnames(dividerClsPrefix, className)}
      {...restProps}
    >
      <div className={`${dividerClsPrefix}-line`} {...bgProps} />
      <div className={`${dividerClsPrefix}-hexagon`}>
        <div className={`${dividerClsPrefix}-hexagon-left`}>
          <div
            className={`${dividerClsPrefix}-hexagon-left-top`}
            style={{
              height: `${dividerHeight / 2}px`,
              paddingRight: `${dividerHeight / 4}px`,
            }}
          >
            <div
              className={`${dividerClsPrefix}-hexagon-left-top-rectangle1`}
              {...bgProps}
            />
            <div
              className={`${dividerClsPrefix}-hexagon-left-top-rectangle2`}
              {...bgProps}
            />
            <div
              className={`${dividerClsPrefix}-hexagon-left-top-triangle`}
              style={
                dividerColor
                  ? {
                      borderBottomColor: dividerColor,
                      borderBottomWidth: `${dividerHeight / 2}px`,
                      borderLeftWidth: `${dividerHeight / 2}px`,
                    }
                  : {
                      borderBottomWidth: `${dividerHeight / 2}px`,
                      borderLeftWidth: `${dividerHeight / 2}px`,
                    }
              }
            />
          </div>
          <div
            className={`${dividerClsPrefix}-hexagon-left-bottom`}
            style={{
              height: `${dividerHeight / 2}px`,
              paddingRight: `${dividerHeight / 4}px`,
            }}
          >
            <div
              className={`${dividerClsPrefix}-hexagon-left-bottom-rectangle1`}
              {...bgProps}
            />
            <div
              className={`${dividerClsPrefix}-hexagon-left-bottom-rectangle2`}
              {...bgProps}
            />
            <div
              className={`${dividerClsPrefix}-hexagon-left-bottom-triangle`}
              style={
                dividerColor
                  ? {
                      borderTopColor: dividerColor,
                      borderTopWidth: `${dividerHeight / 2}px`,
                      borderLeftWidth: `${dividerHeight / 2}px`,
                    }
                  : {
                      borderTopWidth: `${dividerHeight / 2}px`,
                      borderLeftWidth: `${dividerHeight / 2}px`,
                    }
              }
            />
          </div>
        </div>
        <div
          className={`${dividerClsPrefix}-hexagon-lable`}
          style={{
            ...titleStyle,
            backgroundColor: dividerColor,
            lineHeight: `${dividerHeight}px`,
          }}
        >
          {showTitle && dividerText ? <span>{dividerText}</span> : null}
        </div>
        <div className={`${dividerClsPrefix}-hexagon-right`}>
          <div
            className={`${dividerClsPrefix}-hexagon-right-top`}
            style={{
              height: `${dividerHeight / 2}px`,
              paddingLeft: `${dividerHeight / 4}px`,
            }}
          >
            <div
              className={`${dividerClsPrefix}-hexagon-right-top-rectangle1`}
              {...bgProps}
            />
            <div
              className={`${dividerClsPrefix}-hexagon-right-top-rectangle2`}
              {...bgProps}
            />
            <div
              className={`${dividerClsPrefix}-hexagon-right-top-triangle`}
              style={
                dividerColor
                  ? {
                      borderLeftWidth: `${dividerHeight / 2}px`,
                      borderLeftColor: dividerColor,
                      borderTopWidth: `${dividerHeight / 2}px`,
                    }
                  : {
                      borderLeftWidth: `${dividerHeight / 2}px`,
                      borderTopWidth: `${dividerHeight / 2}px`,
                    }
              }
            />
          </div>
          <div
            className={`${dividerClsPrefix}-hexagon-right-bottom`}
            style={{
              height: `${dividerHeight / 2}px`,
              paddingLeft: `${dividerHeight / 4}px`,
            }}
          >
            <div
              className={`${dividerClsPrefix}-hexagon-right-bottom-rectangle1`}
              {...bgProps}
            />
            <div
              className={`${dividerClsPrefix}-hexagon-right-bottom-rectangle2`}
              {...bgProps}
            />
            <div
              className={`${dividerClsPrefix}-hexagon-right-bottom-triangle`}
              style={
                dividerColor
                  ? {
                      borderLeftWidth: `${dividerHeight / 2}px`,
                      borderLeftColor: dividerColor,
                      borderBottomWidth: `${dividerHeight / 2}px`,
                    }
                  : {
                      borderLeftWidth: `${dividerHeight / 2}px`,
                      borderBottomWidth: `${dividerHeight / 2}px`,
                    }
              }
            />
          </div>
        </div>
      </div>
      <div className={`${dividerClsPrefix}-line`} {...bgProps} />
    </div>
  );
};
export default CenterLineDivider;
