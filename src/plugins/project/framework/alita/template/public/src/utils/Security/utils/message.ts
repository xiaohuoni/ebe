/* eslint-disable no-console */

const prefixNameSapce = '[lcdp-security]';

const message = {
  log: (...args: any) => {
    console.log(prefixNameSapce, ...args);
  },
  warn: (...args: any) => {
    console.warn(prefixNameSapce, ...args);
  },
  error: (...args: any) => {
    console.error(prefixNameSapce, ...args);
  },
};

export default message;
