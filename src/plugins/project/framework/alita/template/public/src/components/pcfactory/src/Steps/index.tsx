import { Icon } from '@lingxiteam/icons';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Steps } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import FactoryIcon from '../Icon';
import { useListenProps } from '../utils';
import { useLocale } from '../utils/hooks/useLocale';
import { CheckCircle, Vector } from './constant';

export interface MyStepsProps {
  visible: boolean;
  stepsOptions: any | any[];
  defaultStepsOptions: any;
  valName: string;
  staticService: any;
  dataSource?: any;
  options?: any;
  current?: any;
  onValueRelease?: any;
  onChange?: any;
  alias: any;
  labelPlacement: 'horizontal' | 'vertical';
  stepStyle: 'number' | 'icon' | 'dot';
  size: 'small' | 'default';
  iconSetting: IconSettingItem[];
}

interface IconSettingItem {
  label: string;
  value: 'wait' | 'process' | 'finish' | 'error';
  isUsePrimary?: boolean; // 是否应用主题
  icon?: any; // 图标信息
  color?: string; // 颜色
}
const getDefaultIconSetting = (getLocale: any) =>
  [
    {
      label: getLocale?.('Steps.wait'),
      value: 'wait',
    },
    {
      label: getLocale?.('Steps.process'),
      value: 'process',
    },
    {
      label: getLocale?.('Steps.finish'),
      value: 'finish',
    },
    {
      label: getLocale?.('Steps.error'),
      value: 'error',
    },
  ] as IconSettingItem[];
const prefixCls = 'ued-step-wrap';
const MySteps = LingxiForwardRef<any, MyStepsProps>((props, ref) => {
  const engineApis = props?.getEngineApis?.();
  const { getLocale } = useLocale(engineApis);

  const {
    defaultStepsOptions,
    staticService,
    visible = true,
    dataSource,
    options,
    onValueRelease,
    onChange,
    $$componentItem,
    getEngineApis,
    stepsOptions,
    labelPlacement,
    stepStyle,
    size,
    iconSetting = getDefaultIconSetting(getLocale),
    alias = {},
    ...restProps
  } = props;
  const {
    icon: iconAlias = 'icon', // 图标别名
    description: descriptionAlias = 'description', // 描述别名
    disabled: disabledAlias = 'disabled', // 禁用别名
    status: statusAlias = 'status', // 状态别名
    subTitle: subTitleAlias = 'subTitle', // 副标题别名
    title: titleAlias = 'title', // 标题别名
    id: idAlias = 'id', // 唯一ID别名
  } = alias || {};

  const [current, setCurrent] = useListenProps(props.current);
  const [innerDataSource, setInnerDataSource] = useState<any[]>([]);

  useEffect(() => {
    // 数据绑定
    if (Array.isArray(dataSource)) {
      // 绑定数据源
      setInnerDataSource(dataSource);
      setCurrent(
        props.current ||
          dataSource.findIndex((i) => i[statusAlias] === 'process') ||
          0,
      );
    } else if (stepsOptions && Array.isArray(stepsOptions)) {
      // 步骤设置
      setCurrent(
        props.current ||
          stepsOptions.findIndex((i) => i[statusAlias] === 'process') ||
          0,
      );
      setInnerDataSource(stepsOptions);
    }
  }, [JSON.stringify(stepsOptions), JSON.stringify(dataSource)]);

  // useEffect(() => {
  //   if (current === undefined) {
  //     // 设置初始步骤值
  //     if (onValueRelease) {
  //       onValueRelease(0);
  //     }
  //   }
  // }, [current]);
  /**
   * 默认图标的渲染，当用户未设置图标时，使用默认图标，当用户设置了图标设置后，默认图标更改为用户的图标设置
   * @param item
   */
  const renderDefaultIcon = (item: any) => {
    const iconItem = iconSetting.find(
      (i: any) => i.value === item[statusAlias],
    );
    const currentColor = iconItem?.isUsePrimary
      ? undefined
      : item.color || iconItem?.color;
    const style = {
      fontSize: size === 'default' ? '18px' : '16px',
      color: currentColor,
    };
    if (iconItem?.icon) {
      return (
        <FactoryIcon
          mode="custom"
          style={style}
          iconItems={[{ ...iconItem }]} // 图标优先展示iconItems的颜色，但是这里需要将用户设置的颜色优先级提高
          getEngineApis={getEngineApis}
          engineApis={{ service: getEngineApis?.() }}
          $$componentItem={$$componentItem}
          className=""
        />
      );
    }
    return (
      <>
        <Icon
          style={style}
          component={item[statusAlias] === 'finish' ? CheckCircle : Vector}
        />
      </>
    );
  };

  /**
   * 步骤条图标渲染
   * @param item
   * @param index
   * @returns
   */
  const renderStepIcon = (item: any, index: number) => {
    const iconValue = item[iconAlias];
    const iconItem = iconSetting.find(
      (i: any) => i.value === item[statusAlias],
    );
    const currentColor = iconItem?.isUsePrimary
      ? undefined
      : item.color || iconItem?.color;
    // 存量无状态的默认状态
    const status = item[statusAlias] || (index === 0 ? 'process' : 'wait');
    switch (stepStyle) {
      case 'number':
        return (
          <div
            className={classNames({
              [`${prefixCls}-numberBox`]: true,
              [`${prefixCls}-numberBox-${size}`]: true,
              [`${prefixCls}-${status}`]: true,
            })}
            style={{
              borderColor: currentColor,
              color: status === 'process' ? '' : currentColor,
              background: status === 'process' ? currentColor : '',
            }}
          >
            {index + 1}
          </div>
        );
      case 'icon': {
        const style = {
          fontSize: size === 'default' ? '18px' : '16px',
          color: item.color,
        };
        // 如果数据没有图标内容，返回默认的图标配置
        if (
          !iconValue ||
          iconValue.isIconFont === false ||
          Object.keys(iconValue || {}).length === 0
        ) {
          return renderDefaultIcon(item);
        }
        // 字符串代表使用fileID或者url展示图标
        if (typeof iconValue === 'string') {
          // 判断数字字符串
          item[iconAlias] = {
            iconFile: iconValue.startsWith('http')
              ? {
                  fileHttp: iconValue,
                  fileSubType: 'ICON_IMAGE',
                }
              : {
                  fileCode: iconValue,
                  fileSubType: 'ICON_IMAGE',
                },
          };
        }
        // 否则为自定义配置的
        return (
          <FactoryIcon
            style={style}
            mode="custom"
            iconItems={[item]}
            getEngineApis={getEngineApis}
            engineApis={{ service: getEngineApis?.() }}
            $$componentItem={$$componentItem}
            className=""
          />
        );
      }

      case 'dot':
        return (
          <div
            className={classNames({
              [`${prefixCls}-dot`]: true,
              [`${prefixCls}-dot-${size}`]: true,
              [`${prefixCls}-dot-${status}`]: true,
            })}
            style={{ background: currentColor }}
          />
        );

      default:
        return null;
    }
  };

  useImperativeHandle(ref, () => ({
    setStepsOptions(options: any[]) {
      if (Array.isArray(options)) {
        setInnerDataSource(options);
      }
    },
    get current() {
      return +current;
    },
    setCurrent(_current: any) {
      onCurrentChange(+_current);
    },
    setStepByOptions(
      options: {
        step: string;
        status: 'wait' | 'process' | 'finish' | 'error';
      }[],
    ) {
      const newData = innerDataSource.map((i, index) => {
        const item = options.find(
          (j) => j.step === i[idAlias] || +j.step === index,
        );
        if (item && item.status) {
          i[statusAlias] = item.status;
        }
        return i;
      });
      setInnerDataSource(newData);
    },
  }));

  /**
   * 步骤切换
   */
  const onCurrentChange = (
    index: number,
    dataSource: any = innerDataSource,
  ) => {
    setCurrent(index);
    const newData = dataSource.map((item: any, i: number) => {
      if (i === index) {
        return {
          ...item,
          [statusAlias]: 'process',
        };
      }
      if (i < index) {
        return {
          ...item,
          [statusAlias]: 'finish',
        };
      }
      return {
        ...item,
        [statusAlias]: item[statusAlias] === 'error' ? 'error' : 'wait',
      };
    });
    setInnerDataSource(newData);
  };

  return visible ? (
    <Steps
      {...restProps}
      labelPlacement={stepStyle === 'dot' ? 'vertical' : labelPlacement} // 点状标签位置只能在下方
      current={current}
      onChange={(c) => {
        if (onChange && !innerDataSource[c]?.[disabledAlias]) {
          onChange(c, innerDataSource[c]);
          onCurrentChange(c);
        }
      }}
    >
      {(innerDataSource || []).map((opt: any, i: number) => (
        <Steps.Step
          status={opt[statusAlias]}
          title={opt[titleAlias]}
          subTitle={opt[subTitleAlias]}
          description={opt[descriptionAlias]}
          disabled={!!opt[disabledAlias]}
          key={opt[idAlias]}
          style={{ ...(opt[disabledAlias] ? { cursor: 'not-allowed' } : {}) }}
          icon={
            <div className={`${prefixCls}-iconItem-${size}`}>
              {renderStepIcon(opt, i)}
            </div>
          }
        />
      ))}
    </Steps>
  ) : null;
});

export default MySteps;
