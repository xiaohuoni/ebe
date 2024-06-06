import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/indexpageless';
import { expectValueIgnoreWhitespace } from '../../../../../../utils';

describe('template files indexpageless', () => {
  test('should return the correct file indexpageless', () => {
    const config: any = {
      platform: 'pc',
    };
    const expectedFileContent = `.indexPage {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: calc(100vh - 90px);
      color: rgba(28, 36, 46, 45%);
      font-size: 44px;
    
      .indexText {
        margin-bottom: 25px;
        color: rgba(28, 36, 46, 85%);
        font-weight: 500;
        font-size: 34px;
      }
    
      .indexImg {
        height: 392px;
        margin-top: 280px;
      }
    }
    `;

    const [directories, file] = getFile();

    expect(directories).toEqual(['src', 'pages', 'index']);
    expect(file.name).toEqual('index');
    expect(file.ext).toEqual('less');
    expectValueIgnoreWhitespace(file.content, expectedFileContent);
  });
});
