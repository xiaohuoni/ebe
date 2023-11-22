import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    '.env',
    '',
    `
    # 请求地址前缀
    REACT_APP_REQUEST_PREFIX=../server/
    
    # http加密 1.0(参数签名)  2.0(rsa加密)  3.0(aes加密)  4.0(des 加密)
    LCDP_HTTP_SECURITY_MODE=1.0
    
    
    # TODO 以下变量最好迁移到 .env.development
    # 大吉大利端口号
    PORT=8888
    
    # 以下配置请在.env.local文件里设置
    # HJD地址
    #LCDP_SERVICE_URL=http://10.10.179.140:8857/HJD/lcdp-app/server/
    #开发环境地址
    LCDP_SERVICE_URL=http://172.21.72.205:10000/lcdp-app/server/
    #HJE 环境变量
    # LCDP_SERVICE_URL=http://10.10.179.140:8896/HJE/lcdp-app/server/
    #HJE DICT 环境变量
    # LCDP_SERVICE_URL=http://10.10.176.190:9013/HJE-DICT/lcdp-app/server/
    #HJD 福建个审
    #LCDP_SERVICE_URL=http://10.10.179.140:8857/HJD/lcdp-app/server/
 `,
  );

  return [[], file];
}
