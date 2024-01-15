import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'styleInject',
    'ts',
    `export const styleInject = (css: string, id: string = 'id'): void => {
    // __CustomClass_16482__ id
    if (typeof document === 'undefined') {
      return;
    }
  
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style') as any;
    style.type = 'text/css';
    style.id = \`__CustomClass_\${id}__\`;
    head.appendChild(style);
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  };
  `,
  );

  return [['src', 'utils'], file];
}
