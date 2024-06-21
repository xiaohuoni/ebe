import { EngineBaseProps } from '@lingxiteam/types';
import { SwipeAction } from 'antd-mobile-5';
import React, { ReactNode } from 'react';
import Icon from '../../Icon';
import IconED from '../../Icon/IconED';
// import { useFuncExpExecute } from '../../utils/hooks/useFuncExpExecute';

export interface SwipeActionProps {
  btnBackgroundColor: string;
  checked: boolean;
  iconPos: 'left' | 'right';
  rule?: string;
  icon?: Record<string, any>;
  disabled?: string;
  isIcon?: boolean;
  value?: string;
  title: string;
}

interface MySwipeProps {
  closeOnAction?: boolean;
  closeOnTouchOutside?: boolean;
  isEdit: boolean;
  children: ReactNode;
  swipeAction: [SwipeActionProps];
  getEngineApis?: EngineBaseProps['getEngineApis'];
  $$componentItem?: EngineBaseProps['$$componentItem'];
  rowData?: any;
  index?: string | number;
  swipActionClick?: Record<string, any>;
  getEdEngineApi?: any;
}

const CustomButton: React.FC<MySwipeProps> = (props) => {
  const {
    isEdit,
    children,
    closeOnAction = false,
    closeOnTouchOutside = false,
    swipeAction,
    getEngineApis,
    rowData,
    index: rowIndex,
    $$componentItem,
    swipActionClick,
    getEdEngineApi,
  } = props;

  const getActionText = (swipeAction: [SwipeActionProps]) => {
    const actionArray: any[] = [];
    swipeAction?.forEach((item: SwipeActionProps, index: number) => {
      const {
        btnBackgroundColor,
        checked,
        iconPos,
        rule,
        icon,
        disabled,
        isIcon,
        value,
        title,
      } = item;

      let view = <></>;
      let iconView = <></>;
      let viewHidden: boolean | unknown = false;
      let viewDisabled: boolean | unknown = true;
      if (icon) {
        const svgContent =
          (icon?.iconFileInfo && icon?.iconFileInfo?.svgContent) || null;
        if (isEdit) {
          iconView = (
            <IconED
              {...icon}
              svgContent={svgContent}
              getEdEngineApi={getEdEngineApi}
              $$componentItem={props.$$componentItem}
            />
          );
        } else {
          iconView = (
            <Icon
              {...icon}
              className=""
              svgContent={svgContent}
              getEngineApis={getEngineApis as any}
              name={value || String(index)}
              $$componentItem={$$componentItem as any}
            />
          );
        }
      }
      if (!isEdit) {
        viewDisabled = false;
        if (getEngineApis) {
          const { sandBoxSafeRun } = getEngineApis();
          if (rule) {
            viewHidden = sandBoxSafeRun(rule, {
              item: rowData,
              index: rowIndex,
            });
          }
          if (disabled) {
            viewDisabled = sandBoxSafeRun(disabled, {
              item: rowData,
              index: rowIndex,
            });
          }
        }
      }
      if (iconPos === 'left') {
        view = (
          <div>
            {iconView}
            {title}
          </div>
        );
      } else {
        view = (
          <div>
            {title}
            {iconView}
          </div>
        );
      }
      if (isIcon) {
        view = <>{iconView}</>;
      }
      if (checked && !viewHidden) {
        actionArray.push({
          color: btnBackgroundColor,
          key: `${rowIndex}-${index}`,
          text: view,
          onClick: () => {
            if (!viewDisabled) {
              const myOnClick = swipActionClick?.[value || ''];
              if (myOnClick) {
                myOnClick(rowData, rowIndex);
              }
            }
          },
        });
      }
    });
    return actionArray;
  };

  return (
    <SwipeAction
      closeOnAction={closeOnAction}
      closeOnTouchOutside={closeOnTouchOutside}
      rightActions={getActionText(swipeAction)}
    >
      {children}
    </SwipeAction>
  );
};

export default CustomButton;
