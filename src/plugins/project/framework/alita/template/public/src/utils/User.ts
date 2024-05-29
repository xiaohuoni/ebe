import lcdpApi from './lcdpApi';
import http from './service/baseRequest';

class User {
  async init() {
    // @ts-ignore
    const userInfo = await http.get('app/logged');
    if (!userInfo?.login) {
      console.error(`登录失败`, userInfo);
      return;
    }
    lcdpApi.setData('user', userInfo.loginInfo);
  }
}

export default new User();
