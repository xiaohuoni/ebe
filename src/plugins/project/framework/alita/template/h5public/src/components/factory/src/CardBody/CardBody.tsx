import React from 'react';
import { AppForwardRef } from '../BasicComponents';
import './index.less';

const prefixCls = 'lcdp-card-body';
export interface MyCardBodyProps {
  style: React.CSSProperties;
  showContent?: boolean;
  visible?: boolean;
  customStyle?: any;
  onBodyClick?: (e: any) => void;
}

const CardBody = AppForwardRef<MyCardBodyProps>((props, ref) => {
  const {
    children,
    showContent = true,
    style,
    onBodyClick,
    visible = true,
  } = props;

  if (!visible) {
    return <></>;
  }
  return (
    <div
      style={style}
      className={`${prefixCls}`}
      onClick={(e) => {
        if (onBodyClick) {
          onBodyClick(e);
          e.stopPropagation();
        }
      }}
    >
      {showContent ? children : null}
    </div>
  );
});

CardBody.displayName = 'CardBody';

export default CardBody;
