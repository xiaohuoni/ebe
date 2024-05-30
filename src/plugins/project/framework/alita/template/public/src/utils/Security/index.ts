import { setConfig } from './config';
import KEYS from './const';
import { AESDecrypt, AESEncrypt } from './encipher/aes';
import { DESDecrypt, DESEncrypt } from './encipher/des';
import { RSADecrypt, RSAEncrypt } from './encipher/rsa';
import { createHttpSignStr, createHttpSignWithUrl } from './encipher/sign';
import { checkToken, generateToken } from './encipher/token';
import httpEncryption from './httpEncryption';
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
