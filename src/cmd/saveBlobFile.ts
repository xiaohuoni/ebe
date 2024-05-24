import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
export function saveBlobFile({ value }: CMDGeneratorPrames): string {
  const { data, fileName } = value.options;
  return `// 文件保存
  saveBlobFile({
    data:${parse2Var(data)},
    fileName:${parse2Var(fileName)}
  })
  `;
}
