import { Icon } from '@lingxiteam/icons';
import { Button, Popover, Tooltip } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import CommIcon from '../Icon';
import type { IconCfg } from '../Icon/PropsType';
import { useLocale } from '../utils/hooks/useLocale';

interface ExtendProps {
  extend?: Array<{
    icon: IconCfg;
    iconPos: 'left' | 'right';
    id: string;
    btnType?: ButtonType;
    btnSize?: SizeType;
    isIcon?: boolean;
    rule?: string;
    visible?: boolean;
    checked?: boolean;
    value?: string;
    disabled?: boolean;
  }>;
  getEngineApis: any;
  extendNum?: number;
  $$componentItem?: any;
  prefixCls?: string;
  [key: string | number]: unknown;
}
const useExtendBtn = (props: ExtendProps) => {
  const { extend, extendNum = 3, getEngineApis, prefixCls = '' } = props;
  const engineApis = getEngineApis?.() || {};
  const { getLocale } = useLocale(engineApis);
  const { sandBoxSafeRun } = engineApis;

  const renderBtn = (btnList: any, isPopover = false, clicks: any) => {
    if (Array.isArray(btnList)) {
      return btnList.map((c, i) => {
        const {
          icon,
          iconPos,
          id,
          btnType,
          btnSize,
          isIcon,
          rule,
          visible: buttonVisible = true,
          disabled,
        } = c;
        const handleOnClick = (e: any) => {
          if (clicks[i] && typeof clicks[i] === 'function') {
            clicks[i](e);
          }
        };
        const BtnIcon = icon ? (
          <Button
            className={`${prefixCls}-extend-iconBtn`}
            type="link"
            disabled={disabled}
            key={isIcon && id}
            onClick={isIcon && handleOnClick}
          >
            {/** @ts-ignore */}
            <CommIcon
              icon={icon}
              engineApis={engineApis}
              getEngineApis={getEngineApis}
            />
          </Button>
        ) : undefined;
        const TooltipBtn = <Tooltip title={c.title}>{BtnIcon}</Tooltip>;
        try {
          if (sandBoxSafeRun(rule)) return null;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
        return (
          // eslint-disable-next-line no-nested-ternary
          buttonVisible ? (
            // eslint-disable-next-line no-nested-ternary
            isIcon ? (
              isPopover ? (
                <a>{TooltipBtn}</a>
              ) : (
                TooltipBtn
              )
            ) : isPopover ? (
              <div>
                <Button
                  disabled={disabled}
                  key={id}
                  type="link"
                  size={btnSize}
                  onClick={handleOnClick}
                >
                  {iconPos && iconPos === 'left' && icon && (
                    <CommIcon
                      icon={icon}
                      engineApis={engineApis}
                      getEngineApis={getEngineApis}
                      $$componentItem={props.$$componentItem}
                      className=""
                    />
                  )}
                  {c.title}
                  {iconPos && iconPos === 'right' && icon && (
                    <CommIcon
                      icon={icon}
                      engineApis={engineApis}
                      getEngineApis={getEngineApis}
                      $$componentItem={props.$$componentItem}
                      className=""
                    />
                  )}
                </Button>
              </div>
            ) : (
              <Button
                disabled={disabled}
                key={id}
                className={`${prefixCls}-extend-btn`}
                type={btnType}
                size={btnSize}
                onClick={handleOnClick}
              >
                {iconPos && iconPos === 'left' && icon && (
                  <CommIcon
                    icon={icon}
                    engineApis={engineApis}
                    getEngineApis={getEngineApis}
                    $$componentItem={props.$$componentItem}
                    className=""
                  />
                )}
                {c.title}
                {iconPos && iconPos === 'right' && icon && (
                  <CommIcon
                    icon={icon}
                    engineApis={engineApis}
                    getEngineApis={getEngineApis}
                    $$componentItem={props.$$componentItem}
                    className=""
                  />
                )}
              </Button>
            )
          ) : null
        );
      });
    }
    return undefined;
  };
  const renderExtendBtn = () => {
    if (Array.isArray(extend) && extend.length) {
      const showBtnList: any = []; // 需要过滤掉不展示的按钮
      const showBtnClick: any = [];
      extend.forEach((item, index) => {
        if (item.visible !== false && item?.checked !== false) {
          showBtnList.push(item);
          const clickText = item?.value || `onClickBtn${index + 1}`;
          showBtnClick.push((props as any)[clickText]);
        }
      });
      const btnList = [...showBtnList];
      const clicks = [...showBtnClick];
      const preBtn = btnList.splice(0, extendNum);
      const preClicks = clicks.splice(0, extendNum);
      const content = (
        <div className={`${prefixCls}-extend-btn-pop`}>
          {renderBtn(btnList, true, clicks)}
        </div>
      );
      return (
        <>
          {renderBtn(preBtn, false, preClicks)}
          {showBtnList.length > extendNum && (
            <Popover content={content} trigger="click">
              <Button type="link" key="more">
                {getLocale?.('more')}
                <Icon type="down" />
              </Button>
            </Popover>
          )}
        </>
      );
    }
    return null;
  };

  return {
    renderExtendBtn,
  };
};

export default useExtendBtn;
