import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useListenToggleBoolean } from '../utils/hooks/useToggleBoolean';
import './index.less';
import StepItem from './StepItem';
import VStepItem from './VStepItem';

export interface MyStepProcessProps {
  active: number;
  visible: boolean;
  dataSource: any[];
  style?: React.CSSProperties;
  name?: string;
  disabled?: boolean;
  direction?: string; // 新增属性:方向
  onChange?: (index: number) => void;
  refData?: any[];
  refDisabled: boolean;
}

const prefixCls = 'lcdp-stepprocess';

const StepProcess = LingxiForwardRef<any, MyStepProcessProps>((props, ref) => {
  const {
    name,
    style,
    dataSource = [],
    disabled: myDisabled,
    visible = true,
    onChange,
    active: myactive = 0,
    $$componentItem,
    getEngineApis,
    direction,
    refData,
    refDisabled,
    ...restProps
  } = props;
  const [active, setActive] = useState(myactive);
  const [disabled, setDisabled] = useListenToggleBoolean(myDisabled);
  const [data, setData] = useState<MyStepProcessProps['dataSource']>([]);

  useEffect(() => {
    setData(dataSource);
  }, [JSON.stringify(dataSource)]);

  // 处理旧动作监听
  useEffect(() => {
    if (Array.isArray(refData)) {
      setData(refData);
    }
  }, [refData]);

  // 处理旧动作监听
  useEffect(() => {
    if (typeof refDisabled === 'boolean') {
      setDisabled(refDisabled);
    }
  }, [refDisabled]);

  useImperativeHandle(ref, () => ({
    // setValue: (options: any[]) => {
    //   if (Array.isArray(options)) {
    //     setData(options);
    //   }
    // },
    // setDisabled,
    get disabled() {
      return disabled;
    },
    // setStatus: (status: string) => {
    //   setDisabled(`${status}` !== '1');
    // },
    // setEditor: (e: boolean) => {
    //   setDisabled(false);
    // },
  }));
  const renderStep = () => {
    return data?.map((item, index) => {
      if (!item?.label) {
        return null;
      }
      if (direction && direction === 'vertical') {
        return (
          <VStepItem
            {...restProps}
            {...item}
            key={item.value}
            disabled={disabled}
            index={index}
            active={active}
            onClick={() => {
              if (!disabled) {
                if (onChange) {
                  setActive(index);
                  onChange(index);
                }
              }
            }}
          />
        );
      }
      return (
        <StepItem
          {...restProps}
          {...item}
          key={item.value}
          disabled={disabled}
          index={index}
          active={active}
          onClick={() => {
            if (!disabled) {
              if (onChange) {
                setActive(index);
                onChange(index);
              }
            }
          }}
        />
      );
    });
  };
  if (!visible) {
    return <></>;
  }
  return (
    <div style={{ ...style, overflowY: 'auto' }}>
      <div
        className={
          direction && direction === 'vertical'
            ? `${prefixCls}-vertical`
            : `${prefixCls}-stepProcess`
        }
      >
        {renderStep()}
      </div>
    </div>
  );
});

export default StepProcess;
