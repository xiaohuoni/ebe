import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
export function setDownloadResponse({ value }: CMDGeneratorPrames): string {
  const { options } = value;
  const { paramsObj } = options;
  const { downloadUrl } = paramsObj || {};
  return `
    // 打开/下载链接
    const link = document.createElement('a');
    const downloadUrl = ${parse2Var(downloadUrl)};
    // 如果要打开的链接非字符串类型，说明配置有误
    if (typeof downloadUrl !== 'string') {
      console.error("链接非字符串类型")
    } else {
      link.href = downloadUrl;
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  `;
}
