import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/env';
import { expectValueIgnoreWhitespace } from '../../../../../../utils';
describe('template files env', () => {
  test('should return the correct file env', () => {
    const config: any = {
      baseUrl: 'exe.com/',
    };

    const expectedFileContent = `# 请求地址前缀
    REACT_APP_REQUEST_PREFIX=../server/
    
    # http加密 1.0(参数签名)  2.0(rsa加密)  3.0(aes加密)  4.0(des 加密)
    LCDP_HTTP_SECURITY_MODE=1.0
    
    # TODO 以下变量最好迁移到 .env.development
    # 大吉大利端口号
    PORT=8888
    
    # 以下配置请在.env.local文件里设置
    #环境地址
    # LCDP_SERVICE_URL=exe.com/lcdp-app/server/
     `;

    const [directories, file] = getFile(config);

    expect(directories).toEqual([]);
    expect(file.name).toEqual('.env');
    expect(file.ext).toEqual('');
    expectValueIgnoreWhitespace(file.content, expectedFileContent);
  });
});
