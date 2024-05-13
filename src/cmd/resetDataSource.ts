import {
  CMDGeneratorPrames,
} from '../core/types';

export function getResetDataSource({ value }: CMDGeneratorPrames): string {
  const { options } = value;
  return `resetDataSource('${options.dataSourceName}')`;
}