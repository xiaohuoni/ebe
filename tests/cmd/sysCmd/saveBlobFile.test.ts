import { saveBlobFile } from '../../../src/cmd/sysCmd/saveBlobFile';
import { expectValue } from '../../utils';

describe('saveBlobFile', () => {
  it('should generate the correct code for saving a blob file', () => {
    const generateParams = {
      value: {
        options: {
          data: 'blobData',
          fileName: 'file.txt',
        },
      },
    };

    const expectedCode = `
    // 文件保存
    saveBlobFile({
      data: 'blobData',
      fileName: 'file.txt'
    })
    `;

    const result = saveBlobFile(generateParams);

    expectValue(result, expectedCode);
  });
});
