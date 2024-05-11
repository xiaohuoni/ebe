import {
  CMDGeneratorPrames,
} from '../core/types';
import { parseDSSetVal, transformValueDefined } from '../core/utils/transformValueDefined';


export function getSetDataSource({ value }: CMDGeneratorPrames): string {
  const { options } = value;

  return `updateData({
    ${options.dataSourceName}: ${transformValueDefined(parseDSSetVal(options), options.dataSourceName, options?.targetDataSourcePaths?.length > 0)},
  })`;
}