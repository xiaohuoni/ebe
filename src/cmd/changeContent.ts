import { parse2Var } from '../core/utils/compositeType';
import {
  CMDGeneratorPrames,
} from '../core/types';

export function changeContent({ value }: CMDGeneratorPrames): string {
  const { name,  compId, theme, iconType, fontAddress, isIconFont, iconFileInfo, iconFile} = value.options;
  let param = {
    name: name,
    iconType,
    fontAddress,
    isIconFont,
    iconFileInfo,
    hasIcon:!!(iconType|| theme || fontAddress || Object.keys(iconFile || {}).length || Object.keys(iconFileInfo || {}).length)
  };

  return `// 按钮更改内容 \n callComponentMethod('${compId}', 'changeContent', ${parse2Var(param)})` ;
}
