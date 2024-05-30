import capabilities from '../clientCapabilities';
import message from './message';

const showError = () => message.warn('[lcdp-security]: 当前环境不支持cookie');

const CookieUtil = {
  get(name: string) {
    if (!capabilities.cookie) {
      showError();
      return null;
    }
    const cookieName: string = `${encodeURIComponent(name)}=`;
    const cookieStart: number = document.cookie.indexOf(cookieName);
    let cookieValue: string | null = null;
    let cookieEnd: number;
  
    if (cookieStart > -1) {
      cookieEnd = document.cookie.indexOf(';', cookieStart);
      if (cookieEnd === -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd),
      );
    }
  
    return cookieValue;
  },
  
  set(name: string, value: string, expires: Date, path: string, domain: string, secure: boolean) {
    if (!capabilities.cookie) {
      showError();
      return;
    }
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
    if (expires instanceof Date) {
      cookieText += `; expires=${expires.toUTCString()}`;
    }
  
    if (path) {
      cookieText += `; path=${path}`;
    }
  
    if (domain) {
      cookieText += `; domain=${domain}`;
    }
  
    if (secure) {
      cookieText += '; secure';
    }
  
    document.cookie = cookieText;
  },
  
  unset(name: string, path: string, domain: string, secure: boolean) {
    this.set(name, '', new Date(0), path, domain, secure);
  },
};

export const getSaltValue = (saltKey: string) => CookieUtil.get(saltKey);
  
export default CookieUtil;
