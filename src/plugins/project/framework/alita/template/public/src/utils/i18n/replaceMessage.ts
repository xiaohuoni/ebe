import { isUndefined } from 'lodash';

/**
 * 替换动态模板
 * @param template
 * @param kv
 * @returns
 */
export function replaceMessage(
  template?: string,
  placeholder?: string,
  kv?: Record<string, string>
): string {
  if (isUndefined(template)) {
    return placeholder ?? '';
  }

  if (typeof template === 'string' && /@\{\w+\}/.test(template)) {
    if (kv) {
      return template.replace(/@\{\w+\}/g, (str: string) => {
        const key = str.slice(2, -1);
        return kv[key] ?? '';
      });
    }
    return template.replace(/@\{\w+\}/g, '');
  }

  return template ?? '';
}
