import {
  CMDGeneratorPrames,
} from '../core/types';
export function getValue({ value }: CMDGeneratorPrames): string {
    const { id, compId } = value;
    return `// 获取组件的值 \n const value_${id} = getValue(${compId});\n`;
  }
  