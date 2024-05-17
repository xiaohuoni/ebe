import { FunctorDefine } from './types';
import { security } from '@lingxiteam/assets';

const defaultAESKey = 'd86d7bab3d6ac01a';

export const AES_ENCRYPT = FunctorDefine({
  label: '内容加密',
  type: 'AES_ENCRYPT',
  value: "AES_ENCRYPT('text')",
  functor(x: any) {
    if ([null, undefined, ''].includes(x as any)) {
      return '';
    }
    return security.AESEncrypt(x, security.KEYS.aesKey || defaultAESKey);
  },
  define: ['将内容进行AES方式加密'],
  description: {
    tips: [],
    title: '(待加密内容)',
  },
  example: {
    tips: [],
    title: '()',
  },
  groupsName: ['加密函数'],
});
