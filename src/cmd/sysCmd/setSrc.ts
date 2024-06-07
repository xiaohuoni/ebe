import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function setSrc(generateParams: CMDGeneratorPrames): string {
  const { value, compId } = generateParams.value.options;

  const code = `// 设置资源地址
  asyncCallComponentMethod(${parse2Var(compId)}, 'setSrc', ${parse2Var(
    value,
  )})`;

  return GeneratorCallbackWithThenCatch(code, generateParams);
}

export default setSrc;
