import { Icon } from '@lingxiteam/icons';
import { EngineBaseProps, LingxiForwardRef } from '@lingxiteam/types';
import { Steps } from 'antd-mobile-5';
import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import FactoryIcon from '../Icon';
import { useListenToggleBoolean } from '../utils/hooks/useToggleBoolean';
import { CheckCircle, Vector } from './constant';
import './index.less';

const getDefaultIconSetting = (
  getEngineApis: EngineBaseProps['getEngineApis'],
) => {
  const { getLocale } = getEngineApis();
  return [
    {
      label: getLocale('StepBar.wait', '等待状态'),
      value: 'wait',
    },
    {
      label: getLocale('StepBar.process', '处理中状态'),
      value: 'process',
    },
    {
      label: getLocale('StepBar.finish', '完成状态'),
      value: 'finish',
    },
    {
      label: getLocale('StepBar.error', '错误状态'),
      value: 'error',
    },
  ] as IconSettingItem[];
};

const { Step } = Steps;
interface IconSettingItem {
  label: string;
  value: 'wait' | 'process' | 'finish' | 'error';
  isUsePrimary?: boolean; // 是否应用主题
  icon?: any; // 图标信息
  color?: string; // 颜色
}
export interface MyStepProcessProps {
  active: number;
  visible: boolean;
  stepType?: 'normal' | 'navigation'; // 步骤类型
  dataSource: any[]; // 来自关联数据源的数据 FIXME：可以通过预处理统一为一个变量，后续处理
  iconItems?: any[]; // 来自步骤设置的数据 FIXME：可以通过预处理统一为一个变量，后续处理
  style?: React.CSSProperties;
  name?: string;
  disabled?: boolean;
  stepStyle: 'number' | 'icon' | 'dot'; // 图表样式
  size: 'small' | 'normal'; // 步骤条尺寸
  direction: 'horizontal' | 'vertical'; // 新增属性:方向
  onChange?: (index: number, step: any) => void;
  oldDataSource?: any[]; // 存量旧的数据
  iconSetting?: IconSettingItem[]; // 默认图标设置
  alias?: {
    title: string;
    id: string;
    description?: string;
    disabled?: string;
    status?: string;
    subTitle?: string;
    icon?: string;
  };
}

const prefixCls = 'lcdp-stepprocess';

const StepProcess = LingxiForwardRef<any, MyStepProcessProps>((props, ref) => {
  const {
    style,
    dataSource,
    disabled: myDisabled,
    visible = true,
    onChange,
    $$componentItem,
    getEngineApis,
    direction,
    stepStyle = 'dot', // 存量是点状
    alias,
    size = 'normal',
    iconSetting = getDefaultIconSetting(props.getEngineApis),
    iconItems,
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
  const [current, setCurrent] = useState<number>();
  const [disabled, setDisabled] = useListenToggleBoolean(myDisabled);
  // 存量的data
  const [data, setData] = useState<MyStepProcessProps['dataSource']>([]);

  useEffect(() => {
    // 步骤条有两个数据来源：数据源绑定与自定义数据设置，优先级：数据源绑定 > 自定义数据设置
    if (Array.isArray(dataSource)) {
      setData(dataSource);
      setCurrent(
        dataSource.findIndex((i) => i[statusAlias] === 'process') || 0,
      );
    } else {
      console.warn('步骤条未绑定数据源，将采用自定义设置的步骤进行展示');
      setCurrent(
        iconItems?.findIndex((i) => i[statusAlias] === 'process') || 0,
      );
      setData(iconItems || []);
    }
  }, [JSON.stringify(dataSource), JSON.stringify(iconItems)]);

  useImperativeHandle(ref, () => ({
    setDisabled,
    get disabled() {
      return disabled;
    },
    setStatus: (status: string) => {
      setDisabled(`${status}` !== '1');
    },
    setEditor: (e: boolean) => {
      setDisabled(false);
    },
    setDataSource(options: any[]) {
      if (Array.isArray(options)) {
        setData(options);
      }
    },
    get current() {
      return current || 0;
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
      const newData = data.map((i, index) => {
        const item = options.find(
          (j) => j.step === i[idAlias] || +j.step === index,
        );
        if (item && item.status) {
          i[statusAlias] = item.status;
        }
        return i;
      });
      setData(newData);
    },
  }));

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
      fontSize: size === 'normal' ? '18px' : '16px',
      color: currentColor,
    };
    if (iconItem?.icon) {
      return (
        // @ts-ignore
        <FactoryIcon
          mode="custom"
          iconItems={[{ ...iconItem, ...style }]} // 图标优先展示iconItems的颜色，但是这里需要将用户设置的颜色优先级提高
          getEngineApis={getEngineApis}
          $$componentItem={$$componentItem}
          name="图标"
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
    switch (stepStyle) {
      case 'number':
        return (
          <div
            className={classNames({
              [`${prefixCls}-numberBox`]: true,
              [`${prefixCls}-numberBox-${size}`]: true,
              [`${prefixCls}-${item[statusAlias]}`]: true,
            })}
            style={{
              borderColor: currentColor,
              color: item[statusAlias] === 'process' ? '' : currentColor,
              background: item[statusAlias] === 'process' ? currentColor : '',
            }}
          >
            {index + 1}
          </div>
        );
      case 'icon':
        // 如果数据没有图标内容，返回默认的图标配置
        if (
          !iconValue ||
          iconValue.isIconFont === false ||
          Object.keys(iconValue || {}).length === 0
        ) {
          return renderDefaultIcon(item);
        }
        // eslint-disable-next-line no-case-declarations
        const style = {
          fontSize: size === 'normal' ? '18px' : '16px',
        };
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
          // @ts-ignore
          <FactoryIcon
            style={{ color: item.color, ...style }}
            mode="custom"
            iconItems={[item]}
            getEngineApis={getEngineApis}
            $$componentItem={$$componentItem}
            name="图标"
          />
        );

      case 'dot':
        return (
          <div
            className={classNames({
              [`${prefixCls}-dot`]: true,
              [`${prefixCls}-dot-${size}`]: true,
              [`${prefixCls}-dot-${item[statusAlias]}`]: true,
            })}
            style={{ background: currentColor }}
          />
        );

      default:
        return null;
    }
  };

  /**
   * 步骤条标题与副标题的渲染
   * @param item
   * @returns
   */
  const renderTitle = (item: any) => {
    return (
      <div className={`${prefixCls}-title`}>
        <div>{item[titleAlias]}</div>
        <div className={`${prefixCls}-subTitle`}>{item[subTitleAlias]}</div>
      </div>
    );
  };

  /**
   * 步骤条的描述渲染
   * @param item
   * @returns
   */
  const renderDirection = (item: any) => {
    return (
      <div className={`${prefixCls}-description`}>
        <div>{item[descriptionAlias]}</div>
      </div>
    );
  };

  /**
   * 步骤切换
   */
  const onCurrentChange = (
    index: number,
    dataSource: MyStepProcessProps['dataSource'] = data,
  ) => {
    setCurrent(index);
    const newData = dataSource.map((item, i) => {
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
    setData(newData);
  };

  const renderSteps = () => {
    return data.reduce((acc, cur, curIndex: number) => {
      acc.push(
        <Step
          status={cur[statusAlias]}
          title={renderTitle(cur)}
          description={renderDirection(cur)}
          icon={
            <div
              onClick={() => {
                // 设置了点击事件就暴露切换事件，antd没有提供对用的切换事件，需要自己在节点增加
                if (onChange && !disabled && !cur[disabledAlias]) {
                  onChange(curIndex, cur);
                  onCurrentChange(curIndex);
                }
              }}
            >
              {renderStepIcon(cur, curIndex)}
            </div>
          }
        />,
      );
      // 点状且设置导航型要加入 ‘>’ 图标
      if (
        props.stepType === 'navigation' &&
        stepStyle !== 'dot' &&
        curIndex !== data.length - 1
      ) {
        acc.push(
          <div className={`${prefixCls}-arrow`}>
            <Icon type="right" />
          </div>,
        );
      }
      return acc;
    }, []);
  };

  if (!visible) {
    return <></>;
  }

  return (
    <div style={{ ...style, overflowY: 'auto' }}>
      <div
        className={classNames({
          [`${prefixCls}-stepProcess`]: true,
          [`${prefixCls}-stepProcess-vertical`]:
            direction === 'vertical' && props.stepType !== 'navigation', // 垂直样式
          [`${prefixCls}-stepProcess-navigate`]:
            props.stepType === 'navigation' && stepStyle !== 'dot', // 导航样式
        })}
      >
        <Steps
          current={current}
          direction={props.stepType === 'navigation' ? 'horizontal' : direction}
          className={`${prefixCls}-start-content`}
        >
          {renderSteps()}
        </Steps>
      </div>
    </div>
  );
});

export default StepProcess;
