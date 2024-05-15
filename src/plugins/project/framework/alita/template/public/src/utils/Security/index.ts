import httpEncryption from './httpEncryption';
import { createHttpSignStr, createHttpSignWithUrl } from './encipher/sign';
import { RSAEncrypt, RSADecrypt } from './encipher/rsa';
import { AESEncrypt, AESDecrypt } from './encipher/aes';
import { DESEncrypt, DESDecrypt } from './encipher/des';
import { checkToken, generateToken } from './encipher/token';
import KEYS from './const';
import { setConfig } from './config';
import { lxEncrypt } from './utils/encrypted';

const security = {
  httpEncryption,
  createHttpSignStr,
  createHttpSignWithUrl,
  RSAEncrypt,
  RSADecrypt,
  AESEncrypt,
  AESDecrypt,
  DESEncrypt,
  DESDecrypt,
  KEYS,
  checkToken,
  generateToken,
  setConfig,
  lxEncrypt,
};

export default security;
