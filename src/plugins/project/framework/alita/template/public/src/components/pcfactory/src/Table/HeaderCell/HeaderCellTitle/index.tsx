import React from 'react';
import TooltipViewEG from '../../../TooltipView';
import TooltipViewED from '../../../TooltipView/TooltipViewED';
import type { HeaderCellTitleProps } from '../../types/headerCell';
import type { FuncCode } from '../../types/contentStyle';


const HeaderCellTitle: React.FC<HeaderCellTitleProps> = (props) => {
  const {
    size,
    column,
    mode = 'editor',
    funcExpExecute,
    engineApis,
  } = props;

  const {
    title,
    titleLineNum,
    titleTip,
  } = column || {};

  const {
    type,
    content,
    icon,
    placement,
    iconPlacement,
  } = titleTip || {};

  const lineHeight = size === 'small' ? 16 : 20;
  const isTitleLineNumSet = typeof titleLineNum === 'number' && titleLineNum > 0;
  const TooltipView = mode === 'editor' ? TooltipViewED : TooltipViewEG;

  const handleContent = () => {
    if ((content as FuncCode)?.code && funcExpExecute) {
      return funcExpExecute((content as FuncCode).code, []);
    }

    return content;
  };

  const realContent = handleContent();

  const realTitle = isTitleLineNumSet ? (
    <span
      className="ued-control-line-number"
      style={{
        lineHeight: `${lineHeight}px`,
        maxHeight: `${lineHeight * titleLineNum}px`,
        WebkitLineClamp: titleLineNum,
      }}
      title={title}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: title || '' }}
    />
  // eslint-disable-next-line react/no-danger
  ) : <span dangerouslySetInnerHTML={{ __html: title || '' }} />;

  return titleTip && realContent ? (
    <TooltipView
      label={realTitle}
      wrapperClassName="ued-table-header-cell-title-tip-wrapper"
      iconClassName="ued-table-header-cell-title-tip-wrapper-icon"
      tipContent={realContent}
      tipIcon={icon}
      titleTip={type}
      tipLocation={iconPlacement}
      tipPlacement={placement}
      engineApis={engineApis}
    />
  ) : <>{realTitle}</>;
};

export default HeaderCellTitle;
