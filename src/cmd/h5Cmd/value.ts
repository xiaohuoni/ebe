import { CMDGeneratorPrames } from '../../core/types';
import { getValue } from '../sysCmd';

export function value(generateParams: CMDGeneratorPrames): string {
  return getValue(generateParams);
}
