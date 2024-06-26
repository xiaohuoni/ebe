import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function changeContent({ value }: CMDGeneratorPrames): string {
  const {
    name,
    compId,
    theme,
    iconType,
    fontAddress,
    isIconFont,
    iconFileInfo,
    iconFile,
  } = value.options;
  let param = {
    name: name,
    iconType,
    theme,
    fontAddress,
    isIconFont,
    iconFileInfo,
    hasIcon: !!(
      iconType ||
      theme ||
      fontAddress ||
      Object.keys(iconFile || {}).length ||
      Object.keys(iconFileInfo || {}).length
    ),
  };

  return `// 按钮更改内容\n callComponentMethod('${compId}', 'changeContent', ${parse2Var(
    param,
  )})`;
}
