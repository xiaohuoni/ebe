import classnames from 'classnames';
import React, { useMemo } from 'react';
import './index.less';

export interface MyStepItemProps {
  index: number;
  label?: string;
  color?: string;
  active?: number;
  onClick?: (e: any) => void;
}

const prefixCls = 'lcdp-stepprocess';
const StepItem: React.FC<MyStepItemProps> = (props) => {
  const { index, label, color } = props;
  const active = useMemo(() => {
    const i = props.active ? Number(props.active) : 0;
    return i < 0 ? 0 : i;
  }, [props.active]);

  return (
    <div className={classnames(`${prefixCls}-item`)}>
      <div>
        <div
          className={`${prefixCls}-dot`}
          style={index <= active ? { color } : { color: '#E5E5E5' }}
          onClick={props.onClick}
        />
        <div
          className={classnames(`${prefixCls}-line`, {
            [`${prefixCls}-noneRight`]: index === active,
          })}
          style={index <= active ? { color } : { color: '#E5E5E5' }}
        />
      </div>
      <div className={`${prefixCls}-label`} onClick={props.onClick}>
        {label}
      </div>
    </div>
  );
};

export default StepItem;
