import { LingxiForwardRef } from '@lingxiteam/types';
import { Button } from 'antd';
import type { ButtonProps } from 'antd/lib/button';
import React, { useImperativeHandle, useMemo } from 'react';
import CommIcon from '../Icon';
import type { IconCfg } from '../Icon/PropsType';
import { useListenProps, useListenToggleBoolean } from '../utils';
import useDoubleClick from '../utils/hooks/useDoubleClick';

const WrapperButton = ({ children }: Record<string, any>) =>
  React.cloneElement(children, {
    className: `ued-button-wrap ${children.props.className || ''}`,
  });

export interface MyButtonProps extends ButtonProps {
  visible?: boolean;
  name?: string;
  iconPosition?: string;
  selfSpan?: any;
  style?: any;
  _component?: any;
  colSpan?: string;
  hidden?: boolean;
  compType?: string;
  pageState?: any;
  pagePublicState?: any;
  classification?: any;
  autoProcessFlow?: any;
  flowProcessResult?: any;
  hasIcon?: boolean; // 是否有按钮图标
  loadingText?: string;
  btnText?: string;
  icon?: IconCfg;
  getEngineApis?: any;
}

const MyButton = LingxiForwardRef<any, MyButtonProps>((props, ref) => {
  const {
    visible = true,
    name,
    iconPosition: iconPositionProps,
    selfSpan,
    colSpan,
    hidden,
    compType,
    pageState,
    pagePublicState,
    classification,
    autoProcessFlow,
    flowProcessResult,
    icon: iconProps = {},
    style,
    block,
    hasIcon: hasIconProp,
    loadingText,
    btnText: btnTextProp,
    getEngineApis,
    $$componentItem,
    onDoubleClick,
    onClick,
    ...restProps
  } = props;

  const events = useDoubleClick({
    clickName: 'onClick',
    doubleClickName: 'onDoubleClick',
    events: {
      onClick,
      onDoubleClick,
    },
  });
  const [loading, setLoading] = useListenToggleBoolean(props.loading);
  const [disabled, setDisabled] = useListenToggleBoolean(props.disabled);

  const [btnText, setBtnText] = useListenProps<string | undefined>(
    btnTextProp || name,
  );
  const [icon, setIcon] = useListenProps(iconProps);
  const { svgContent, ...iconRest } = icon;

  const [hasIcon, setHasIcon] = useListenProps(hasIconProp);

  const [iconPosition, setIconPosition] = useListenProps(iconPositionProps);

  useImperativeHandle(ref, () => ({
    disabled,
    changeContent(contentData: any) {
      if (contentData?.name) {
        setBtnText(contentData.name);
        delete contentData.name;
        if (contentData?.theme) {
          setHasIcon(true);
          if (!iconPosition) {
            setIconPosition('left');
          }
          // icon 接收的是type 需要转化
          setIcon({ ...contentData, type: contentData.iconType });
        }
      }
    },
    setLoading,
    setDisabled,
  }));

  const myStyle = useMemo(() => {
    let curWidth = 'fit-content';
    if (style?.width) {
      // 自定义宽度优先级最高
      curWidth = style?.width;
    } else if (block) {
      // 设置按钮为块
      curWidth = '100%';
    } else {
      curWidth = 'fit-content';
    }
    return { width: curWidth, ...style };
  }, [style, block]);

  return visible ? (
    <WrapperButton>
      <Button
        {...restProps}
        style={{ ...(myStyle || {}) }}
        loading={loading}
        disabled={disabled}
        {...events}
      >
        {iconPosition === 'left' && hasIcon && (
          // @ts-ignore
          <CommIcon
            svgContent={svgContent}
            icon={iconRest}
            getEngineApis={getEngineApis}
          />
        )}
        {loading ? loadingText : btnText || name}
        {iconPosition === 'right' && hasIcon && (
          // @ts-ignore
          <CommIcon
            svgContent={svgContent}
            icon={iconRest}
            getEngineApis={getEngineApis}
          />
        )}
      </Button>
    </WrapperButton>
  ) : null;
});

export default MyButton;
export { WrapperButton };
