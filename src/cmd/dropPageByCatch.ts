import { CMDGeneratorPrames } from '../core/types';
import { getImportFrom } from '../utils/depsHelper';
// import { dropByCacheKey } from 'alita';

// dropByCacheKey('/list');
export function dropPageByCatch({
  value,
  config = {},
}: CMDGeneratorPrames): string {
  const { options, type, dataId } = value;
  const { dropPathname } = options;
  if (dropPathname) {
    config?.ir?.deps?.push(getImportFrom('alita', 'dropByCacheKey'));
    return `dropByCacheKey('${dropPathname}');`;
  }
  return '';
}
