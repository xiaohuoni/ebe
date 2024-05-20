// 不建议使用环境变量，后期通一通过config来配置
// 兼容非node环境构建(如：小程序)
if (typeof process === 'undefined') {
  // eslint-disable-next-line no-global-assign
  process = { env: {} } as any;
}

const defaultAESKey = [
  'd',
  '8',
  '6',
  'd',
  '7',
  'b',
  'a',
  'b',
  '3',
  'd',
  '6',
  'a',
  'c',
  '0',
  '1',
  'a',
].join('');
const defaultDESKey = ['9', '1', 'T', 'H', 'R', 'A', 'B', 'Y'].join('');
const defaultSignHeaderKey = 'X-SIGN';

export const lxKey = [
  'd',
  '8',
  '6',
  'd',
  '7',
  'b',
  'a',
  'b',
  '3',
  'd',
  '6',
  'a',
  'c',
  '0',
  'I',
  'a',
].join('');

export const securityHeaderKey = 'XA-TYPE';

export const signSaltKey =
  process.env.LING_XI_USER_KEY_IN_COOKIE || 'X-LX-N-ID';

export const signKey =
  process.env.LING_XI_HTTP_SIGN_KEY ||
  [
    'z',
    'r',
    'T',
    '5',
    'b',
    'i',
    '2',
    'e',
    's',
    'c',
    'X',
    'i',
    'l',
    'a',
    'H',
    '1',
    'f',
    's',
    '6',
    '5',
    '3',
    'u',
    'Z',
    'i',
    'H',
    '9',
    'R',
    'W',
    'f',
    'z',
    'C',
    'S',
  ].join('');

export const signHeaderKey =
  process.env.LINGXI_HTTP_SIGN_HEADER_KEY ||
  process.env.REACT_APP_HTTP_SIGN_HEADER_KEY ||
  process.env.UMI_APP_HTTP_SIGN_HEADER_KEY ||
  process.env.FISHX_APP_HTTP_SIGN_HEADER_KEY ||
  defaultSignHeaderKey;

export const rsaPublicKey =
  process.env.LINGXI_HTTP_RSA_PUBLIC_KEY ||
  process.env.REACT_APP_HTTP_RSA_PUBLIC_KEY ||
  process.env.UMI_APP_HTTP_RSA_PUBLIC_KEY ||
  process.env.FISHX_APP_HTTP_RSA_PUBLIC_KEY;

export const rsaPrivKey =
  process.env.LINGXI_HTTP_RSA_PRIV_KEY ||
  process.env.REACT_APP_HTTP_RSA_PRIV_KEY ||
  process.env.UMI_APP_HTTP_RSA_PRIV_KEY ||
  process.env.FISHX_APP_HTTP_RSA_PRIV_KEY;

export const aesKey =
  process.env.LINGXI_HTTP_AES_KEY ||
  process.env.REACT_APP_HTTP_AES_KEY ||
  process.env.UMI_APP_HTTP_AES_KEY ||
  process.env.FISHX_APP_HTTP_AES_KEY ||
  defaultAESKey;

export const desKey =
  process.env.LINGXI_HTTP_DES_KEY ||
  process.env.REACT_APP_HTTP_DES_KEY ||
  process.env.UMI_APP_HTTP_DES_KEY ||
  process.env.FISHX_APP_HTTP_DES_KEY ||
  defaultDESKey;

export default {
  signKey,
  rsaPublicKey,
  rsaPrivKey,
  aesKey,
  desKey,
};
