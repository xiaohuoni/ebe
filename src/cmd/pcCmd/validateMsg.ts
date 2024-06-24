import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function validateMsg(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, validateStatus, help } = options;

  const code = `
    // 日期选择·校验成功
    callComponentMethod(
      ${parse2Var(compId)}, 
      'changeValidateStatus',
      ${parse2Var(validateStatus)},
      ${parse2Var(help)},
    )
    `;

  return code;
}

export default validateMsg;
