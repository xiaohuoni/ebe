import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function goTo(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 轮播图·去第几页
  if(${parse2Var(options.value)}){
    const values = (${parse2Var(options.value)} || '').split(',');
    values.forEach((value: any) => {
      callComponentMethod(${parse2Var(compId)}, 'goTo',Number(value)||0)
    });
  }
  `;
  return code;
}

export default goTo;
