/* eslint-disable react/react-in-jsx-scope */
import { LingxiForwardRef } from '@lingxiteam/types';
import { useThrottleFn } from 'ahooks';
import { Button, DotLoading } from 'antd-mobile-5';
import { useEffect, useImperativeHandle, useMemo, useState } from 'react';
import Icon from '../Icon';
import useCompState from '../utils/hooks/useCompState';
import { useListenToggleBoolean } from '../utils/hooks/useToggleBoolean';
import './index.less';

export interface MyButtonProps {
  [x: string]: any;
  name: any;
  children: any;
  mImagePostion: any;
  icontype: any;
  style?: any;
  status?: string;
  className: string;
}

// const prefixCls = 'lcdp-button';

const MyButton = LingxiForwardRef<unknown, MyButtonProps>((props, ref) => {
  // eslint-disable-next-line max-len
  const {
    name,
    children,
    className,
    mImagePostion,
    icontype,
    style,
    type,
    shape,
    size,
    disabled: propsDisabled,
    onClick,
    fill,
    loadingText,
    loading,
    visible,
    btnIcon,
    getEngineApis,
  } = props;
  const [disabled, setDisabled] = useListenToggleBoolean(propsDisabled); // 兼容旧数据
  const [innerLoading, setLoading] = useListenToggleBoolean(loading);
  const [myChildren, setChildren] = useState(children || name);
  const { dataState } = getEngineApis?.() || {};
  const { stateIcon, stateTip } = useCompState({ dataState, type: 'loading' });

  useImperativeHandle(ref, () => ({
    setDisabled,
    get disabled() {
      return disabled;
    },
    setValue(v: any) {
      setChildren(v);
    },
    get value() {
      return myChildren;
    },
    setLoading,
  }));

  const { run } = useThrottleFn(
    (e) => {
      e.stopPropagation();
      onClick && onClick(e);
    },
    {
      wait: 200,
      trailing: false,
    },
  );
  if (style) {
    if (style.padding && !style.height) {
      style.height = 'auto';
    }
  }
  const color = useMemo(() => {
    // 兼容旧数据
    switch (type) {
      case 'ghost':
        return 'primary';
      case 'dashed':
      case 'text':
      case 'link':
        return 'default';
      default:
        return type;
    }
  }, [type]);

  useEffect(() => {
    setChildren(children);
  }, [children]);
  const mFill = useMemo(() => {
    // 兼容旧数据
    if (type === 'ghost') {
      return 'outline';
    }

    return fill;
  }, [type, fill]);
  const myStyle = useMemo(() => {
    const _style = { display: 'flex', alignItems: 'center', ...style };
    let justifyContent = 'center';
    switch (style?.textAlign) {
      case 'left':
        justifyContent = 'flex-start';
        break;
      case 'right':
        justifyContent = 'flex-end';
        break;
      default:
        justifyContent = 'center';
        break;
    }
    return { justifyContent, ..._style };
  }, [style]);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  if (!visible) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <></>;
  }
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Button
      style={{ ...myStyle }}
      loading={innerLoading}
      onClick={run}
      shape={shape}
      loadingText={loadingText ?? stateTip}
      loadingIcon={stateIcon || <DotLoading color="currentColor" />}
      disabled={disabled}
      size={size}
      color={color}
      fill={mFill}
      type={type}
      block
      className={`lcdp-button-type-${type} ${className}`}
    >
      {/** @ts-ignore */}
      {mImagePostion === 'left' && btnIcon && (
        <Icon
          icon={icontype}
          style={{ marginRight: '8px', fontSize: myStyle?.fontSize || '14px' }}
          getEngineApis={props.getEngineApis}
          name={props.name}
          $$componentItem={props.$$componentItem}
        />
      )}
      {/** 如果children是数字0 的话，会导致不显示 */}
      <span style={{ display: 'inline-block' }}>
        {(typeof myChildren === 'number' ? `${myChildren}` : myChildren) ||
          name}
      </span>
      {/** @ts-ignore */}
      {mImagePostion === 'right' && btnIcon && (
        <Icon
          icon={icontype}
          style={{ marginLeft: '8px', fontSize: myStyle?.fontSize || '14px' }}
          getEngineApis={props.getEngineApis}
          name={props.name}
          $$componentItem={props.$$componentItem}
        />
      )}
    </Button>
  );
});

MyButton.displayName = 'Button';

export default MyButton;
