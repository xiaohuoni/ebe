import { FunctorDefine } from './types';
import { security } from '@lingxiteam/assets';

const defaultAESKey = 'd86d7bab3d6ac01a';

export const AES_DECRYPT = FunctorDefine({
  label: '内容解密',
  type: 'AES_DECRYPT',
  value: "AES_DECRYPT('text')",
  functor(x: any) {
    if ([null, undefined, ''].includes(x as any)) {
      return '';
    }
    return security.AESDecrypt(x, security.KEYS.aesKey || defaultAESKey);
  },
  define: ['将内容进行AES方式解密'],
  description: {
    tips: [],
    title: '(加密内容)',
  },
  example: {
    tips: [],
    title: '()',
  },
  groupsName: ['加密函数'],
});
