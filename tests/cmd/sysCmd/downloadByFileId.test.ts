import { downloadByFileId } from '../../../src/cmd/sysCmd/downloadByFileId';
import { expectValue } from '../../utils';

describe('downloadByFileId', () => {
  it('should generate the correct code for downloading a file by file code', () => {
    const generateParams = {
      value: {
        options: {
          data: 'fileData',
          fileName: 'myFile',
          fileResourceType: 'file',
          fileCode: 'myFileCode',
        },
      },
    };

    const expectedCode = `// 文件下载
    downloadByFileCode({
      fileCode:"myFileCode",
      newFileName: "myFile",
      getLocale:()=>{},
      // appId,
      // pageId,
    })`;

    const result = downloadByFileId(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for downloading a file by file id', () => {
    const generateParams = {
      value: {
        options: {
          data: 'fileData',
          fileName: 'myFile',
          fileResourceType: 'server',
          fileCode: '',
        },
      },
    };

    const expectedCode = `// 文件下载
    batchDownloadFileByIds({
      fileIds: "fileData",
      newFileName: "myFile",
      zip: false,
      getLocale:()=>{},
    })
    `;

    const result = downloadByFileId(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for downloading multiple files by file id', () => {
    const generateParams = {
      value: {
        options: {
          data: ['fileData1', 'fileData2'],
          fileName: 'myFile',
          fileResourceType: 'server',
          fileCode: '',
        },
      },
    };

    const expectedCode = `// 文件下载
    batchDownloadFileByIds({
      fileIds: ["fileData1","fileData2"],
      newFileName: "myFile",
      zip: false,
      getLocale:()=>{},
    })
    `;

    const result = downloadByFileId(generateParams);

    expectValue(result, expectedCode);
  });

  it('should generate the correct code for an invalid file resource type', () => {
    const generateParams = {
      value: {
        options: {
          data: 'fileData',
          fileName: 'myFile',
          fileResourceType: 'invalid',
          fileCode: '',
        },
      },
    };

    const expectedCode = '// 文件下载:[错误数据]';

    const result = downloadByFileId(generateParams);

    expectValue(result, expectedCode);
  });
});
