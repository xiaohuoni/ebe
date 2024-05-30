import { useToolTipView } from './hooks';
import { TooltiProps } from './PropsType';

const TooltipView: React.FC<TooltiProps> = (props) => {
  const ToolTipViewComp = useToolTipView({
    ...props,
    mode: 'engine',
  });

  return ToolTipViewComp;
};

export default TooltipView;
