import { LingxiForwardRef } from '@lingxiteam/types';
import { Progress } from 'antd';
import classNames from 'classnames';
import { useEffect, useMemo } from 'react';
import { useListenProps } from '../utils';
import { useUpdateEffect } from '../utils/ahooks';

export interface MyProgressProps {
  visible?: boolean;
  value?: any;
  percent?: any;
  onValueRelease?: any;
  title?: string;
  style?: any;
  type?: any;
  placement?: any;
  showInfo?: boolean;
  showTitle?: boolean;
  color?: any;
  fontSize?: any;
  lineHeight?: any;
  fontWeight?: any;
  valueColor?: any;
  valueFontSize?: any;
  valueLineHeight?: any;
  valueFontWeight?: any;
  onChange?: any;
}

const prefixCls = 'ued-progress';

const MyProgress = LingxiForwardRef<any, MyProgressProps>((props, ref) => {
  const {
    visible = true,
    onValueRelease,
    title,
    style,
    placement,
    type,
    showTitle,
    color,
    fontSize,
    lineHeight,
    fontWeight,
    showInfo,
    valueColor,
    valueFontSize,
    valueLineHeight,
    valueFontWeight,
    ...restProps
  } = props;
  const { width, height, ...restStyle } = style || {};

  const [compValue, setCompValue] = useListenProps(props.value);

  useEffect(() => {
    // 更新值到value中
    props?.onChange(props.value ?? props.percent);
  }, []);

  useUpdateEffect(() => {
    // 数据源变化更新数据
    setCompValue(props.percent);
  }, [props.percent]);

  // 标题
  const renderTitle = useMemo(
    () =>
      showTitle && type === 'line' ? (
        <div
          className={`${prefixCls}-title`}
          style={{
            color,
            fontSize,
            lineHeight,
            fontWeight,
          }}
        >
          {title}
        </div>
      ) : null,
    [showTitle, title, type, color, fontSize, lineHeight, fontWeight],
  );
  // 数值
  const renderValue = useMemo(
    () =>
      showInfo ? (
        <div
          className={`${prefixCls}-value`}
          style={{
            color: valueColor,
            fontSize:
              type === 'line'
                ? restStyle?.fontSize || valueFontSize
                : valueFontSize,
            lineHeight: valueLineHeight,
            fontWeight: valueFontWeight,
          }}
        >
          {`${compValue ?? ''}%`}
        </div>
      ) : null,
    [
      showInfo,
      compValue,
      type,
      valueColor,
      valueLineHeight,
      valueFontWeight,
      valueFontSize,
      restStyle?.fontSize,
    ],
  );

  // 进度条
  const renderProgress = () => (
    <Progress
      {...restProps}
      percent={+compValue}
      type={type}
      showInfo={type === 'line' ? false : showInfo}
      format={type !== 'line' ? () => renderValue : undefined}
      style={restStyle}
    />
  );

  return visible ? (
    <div
      className={classNames({
        [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-wrapper-vertical`]:
          placement === 'vertical' && type === 'line',
      })}
      style={{ ...restStyle, width, height }}
    >
      {placement === 'vertical' && type === 'line' ? (
        <>
          <div className={`${prefixCls}-context`}>
            {renderTitle}
            {renderValue}
          </div>
          {renderProgress()}
        </>
      ) : (
        <>
          {renderTitle}
          {renderProgress()}
          {type === 'line' && renderValue}
        </>
      )}
    </div>
  ) : null;
});

export default MyProgress;
