import { Tooltip } from 'antd';
import CommIconEG from '../../Icon';
import CommIconED from '../../Icon/IconED';
import type { UseTooltipProps } from '../PropsType';

const toolTipViewCls = 'ued-tooltip-view';
const toolTipViewIconCls = `${toolTipViewCls}-icon`;

const useToolTipView = (props: UseTooltipProps) => {
  const {
    wrapperClassName,
    iconClassName,
    titleTip,
    tipIcon,
    tipLocation,
    label = null,
    tipContent,
    tipPlacement = 'top',
    mode = 'editor',
    tipSize = 'default',
    tipWidth = '240',
    tipHeight = 'auto',
    engineApis,
  } = props;
  const CommIcon = mode === 'editor' ? CommIconED : CommIconEG;
  const renderLabel = () => {
    if (titleTip === 'text' && tipIcon) {
      return (
        <span className={wrapperClassName}>
          {tipLocation === 'before' ? (
            <>
              <Tooltip
                title={tipContent}
                mouseLeaveDelay={0.1}
                overlayClassName={toolTipViewCls}
                placement={tipPlacement}
                overlayInnerStyle={
                  tipSize === 'custom'
                    ? { maxWidth: tipWidth, maxHeight: tipHeight }
                    : {}
                }
              >
                <CommIcon
                  style={mode !== 'editor' ? { marginRight: '2px' } : {}}
                  icon={tipIcon}
                  className={`${toolTipViewIconCls} ${iconClassName}`}
                  engineApis={engineApis}
                  getEngineApis={props.getEngineApis}
                  getEdEngineApi={() => (engineApis || {}) as any}
                  $$componentItem={props.$$componentItem}
                />
              </Tooltip>
              {label}
            </>
          ) : (
            <>
              {label}
              <Tooltip
                title={tipContent}
                mouseLeaveDelay={0.1}
                overlayClassName={toolTipViewCls}
                placement={tipPlacement}
                overlayInnerStyle={
                  tipSize === 'custom'
                    ? { maxWidth: tipWidth, maxHeight: tipHeight }
                    : {}
                }
              >
                <CommIcon
                  style={mode !== 'editor' ? { marginLeft: '2px' } : {}}
                  icon={tipIcon}
                  className={`${toolTipViewIconCls} ${iconClassName}`}
                  engineApis={engineApis}
                  getEngineApis={props.getEngineApis}
                  $$componentItem={props.$$componentItem}
                  getEdEngineApi={() => (engineApis || {}) as any}
                />
              </Tooltip>
            </>
          )}
        </span>
      );
    }
    return label;
  };

  return renderLabel();
};

export { useToolTipView };
