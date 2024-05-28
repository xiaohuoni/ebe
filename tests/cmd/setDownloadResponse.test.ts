import { setDownloadResponse } from '../../src/cmd/setDownloadResponse';
import { expectValue } from '../utils';

describe('setDownloadResponse', () => {
  it('should generate the correct code for setting download response', () => {
    const generateParams = {
      value: {
        options: {
          paramsObj: {
            downloadUrl: 'https://example.com/file.pdf',
          },
        },
      },
    };

    const expectedCode = `
    // 打开/下载链接
    const link = document.createElement('a');
    const downloadUrl = "https://example.com/file.pdf";
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

    const result = setDownloadResponse(generateParams);

    expectValue(result, expectedCode);
  });
});
