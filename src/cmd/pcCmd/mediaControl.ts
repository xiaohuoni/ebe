import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function mediaControl(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, updateMediaState } = options;

  const code = `
    // 动画容器·动画控制
    callComponentMethod(
      ${parse2Var(compId)}, 
      'onOperationAudio',
      ${parse2Var(updateMediaState)}
    )
    `;

  return code;
}

export default mediaControl;
