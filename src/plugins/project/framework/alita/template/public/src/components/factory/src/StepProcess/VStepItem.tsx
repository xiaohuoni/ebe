import React, { useMemo } from 'react';
import './index.less';

export interface VStepItemProps {
  index?: number;
  label?: string;
  color?: string;
  active?: number;
  onClick?: (e: any) => void;
}

const prefixCls = 'lcdp-stepprocess-vertical-item';
const VStepItem: React.FC<VStepItemProps> = (props) => {
  const { index = 0, label, color, onClick } = props;
  const active = useMemo(() => {
    const i = props.active ? Number(props.active) : 0;
    return i < 0 ? 0 : i;
  }, [props.active]);

  return (
    <div className={`${prefixCls}`}>
      <div
        className={`${prefixCls}-indicator`}
        style={index < active ? { color } : { color: '#E5E5E5' }}
      >
        <div className={`${prefixCls}-icon-container`}>
          <span
            className={`${prefixCls}-icon-dot`}
            style={index <= active ? { color } : { color: '#E5E5E5' }}
            onClick={onClick}
          />
        </div>
      </div>
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-content-title`} onClick={onClick}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default VStepItem;
