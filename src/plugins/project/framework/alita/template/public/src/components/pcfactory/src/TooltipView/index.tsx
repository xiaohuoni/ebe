import { TooltiProps } from './PropsType';
import { useToolTipView } from './hooks';

const TooltipView: React.FC<TooltiProps> = (props) => {
  const ToolTipViewComp = useToolTipView({
    ...props,
    mode: 'engine',
  });

  return ToolTipViewComp;
};

export default TooltipView;
