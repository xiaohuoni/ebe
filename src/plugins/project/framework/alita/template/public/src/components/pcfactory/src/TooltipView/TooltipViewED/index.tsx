import { TooltiProps } from '../PropsType';
import { useToolTipView } from '../hooks';

const TooltipViewED: React.FC<TooltiProps> = (props) => {
  const ToolTipViewComp = useToolTipView(props);

  return ToolTipViewComp;
};

export default TooltipViewED;
