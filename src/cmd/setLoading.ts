import {
    CMDGeneratorPrames,
  } from '../core/types';
  export function setLoading({ value }: CMDGeneratorPrames): string {
      const { loading, compId } = value;
      return `// 加载loading \n  refs[${compId}]?.setLoading?.(!!${loading});\n`;
    }
    