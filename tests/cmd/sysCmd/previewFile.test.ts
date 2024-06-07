import { previewFile } from '../../../src/cmd/sysCmd/previewFile';
import { expectValue } from '../../utils';

describe('previewFile', () => {
  it('should generate the correct code for H5 platform', () => {
    const generateParams = {
      value: {
        options: {
          fileId: 'myFileId',
          platform: 'h5',
        },
      },
    };

    const expectedCode = `
// 文件预览
  if (typeof BannerModal?.open === 'function') {
    BannerModal.open({
      fileIndex: 0,
      fileList: [{
        fileId:"myFileId",
        file: {
          fileId:"myFileId",
        },
      }],
      viewMode:undefined,
      modalHeight:undefined,
      modalWidth:undefined,
      // appId,
      // pageId: (window as any).pageId,
    });
  } else {
    previewFile({
      fileId:"myFileId",
    });
  }
`;

    const result = previewFile(generateParams);
    expectValue(result, expectedCode);
  });

  it('should generate the correct code for non-H5 platform', () => {
    const generateParams = {
      value: {
        options: {
          fileId: 'myFileId',
          platform: 'desktop',
          viewMode: 'full',
          modalHeight: '500px',
          modalWidth: '800px',
        },
      },
    };

    const expectedCode = `
// 文件预览
      if (typeof BannerModal?.open === 'function') {
        BannerModal.open({
          fileIndex: 0,
          fileList: [{
            fileId:"myFileId",
            file: {
              fileId:"myFileId",
            },
         }],
          viewMode:"full",
          modalHeight:"500px",
          modalWidth:"800px",
          // appId,
          // pageId: (window as any).pageId,
        });
      } else {
        previewFile({
          fileId:"myFileId",
        });
      }`;

    const result = previewFile(generateParams);
    expectValue(result, expectedCode);
  });
});
