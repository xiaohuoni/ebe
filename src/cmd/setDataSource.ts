import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import {
  IScope,
  CompositeValueGeneratorOptions,
  CMDGeneratorPrames,
} from '../core/types';


export function getSetDataSource({ value }: CMDGeneratorPrames): string {
  const { options, type, dataId } = value;
  console.log(options.dataSourceSetValue);
  return `updateData({
    ${options.dataSourceName}: {
      param1: '11'
    },
  })`;
}
