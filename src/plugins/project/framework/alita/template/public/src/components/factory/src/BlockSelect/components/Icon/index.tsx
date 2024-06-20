import { EngineBaseProps } from '@lingxiteam/types';
import type { FC } from 'react';
import MyIcon from '../../../Icon';
import {
  circleNormalIcon,
  circleSelectedIcon,
  squareNormalIcon,
  squareSelectedIcon,
} from '../../assets';
import '../../index.less';

const prefixCls = 'lcdp-blockselect';

export interface IconProps {
  selectImg?: any;
  normalImg?: any;
  onChange?: (e: any) => void;
  checked?: boolean;
  index?: number;
  restItem?: any;
  iconPosition?: any;
  className?: any;
  defaultIcon?: any;
  selectIconColor?: any;
  normalIconColor?: any;
  name?: string;
  getEngineApis: EngineBaseProps['getEngineApis'];
  $$componentItem: EngineBaseProps['$$componentItem'];
}

const Icon: FC<IconProps> = (props) => {
  const {
    selectImg,
    normalImg,
    onChange,
    checked = false,
    index,
    restItem,
    iconPosition,
    className,
    defaultIcon,
    selectIconColor,
    normalIconColor,
    getEngineApis,
    name,
  } = props;

  const { compatConfig } = getEngineApis?.() || {};

  const myOnClick = (e: any) => {
    if (compatConfig?.cmd?.stopPropagation) {
      e.stopPropagation();
    }
    if (onChange) {
      onChange({
        restItem,
        index,
      });
    }
  };

  const myClassName =
    iconPosition === 'left' ? `${prefixCls}-icon` : `${prefixCls}-iconRight`;

  if (defaultIcon === 'square') {
    if (checked) {
      return squareSelectedIcon(myOnClick, `${myClassName} ${className}`);
    }
    return squareNormalIcon(myOnClick, myClassName);
  }
  if (defaultIcon === 'circle') {
    if (checked) {
      return circleSelectedIcon(myOnClick, `${myClassName} ${className}`);
    }
    return circleNormalIcon(myOnClick, myClassName);
  }
  if (checked) {
    if (typeof selectImg === 'string') {
      return (
        <img
          onClick={myOnClick}
          src={selectImg}
          alt=""
          className={`${myClassName} ${className}`}
        />
      );
    }
    return (
      <MyIcon
        {...selectImg}
        onClick={myOnClick}
        className={`${myClassName}`}
        style={{ color: selectIconColor }}
        getEngineApis={getEngineApis}
        name={name}
        $$componentItem={props.$$componentItem}
      />
    );
  }
  if (typeof normalImg === 'string') {
    return (
      <img onClick={myOnClick} src={normalImg} alt="" className={myClassName} />
    );
  }
  // eslint-disable-next-line max-len
  return (
    <MyIcon
      {...normalImg}
      onClick={myOnClick}
      className={myClassName}
      style={{ color: normalIconColor }}
      getEngineApis={getEngineApis}
      name={name}
      $$componentItem={props.$$componentItem}
    />
  );
};

export default Icon;
