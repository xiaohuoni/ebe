import { useToolTipView } from '../hooks';
import { TooltiProps } from '../PropsType';

const TooltipViewED: React.FC<TooltiProps> = (props) => {
  const ToolTipViewComp = useToolTipView(props);

  return ToolTipViewComp;
};

export default TooltipViewED;
