import { Rule } from 'antd/lib/form';
import { useState } from 'react';
import { useCreation } from '../ahooks';
import { getRegExp } from '../common';

/**
 * 通用规则获取
 * @param regexp 规则列表
 */
export const getRegexpRules = (regexp: any[] | any, getLocale?: any): any[] => {
  const _rules = [];
  if (regexp) {
    if (Array.isArray(regexp)) {
      regexp?.forEach((exp) => {
        const { pattern, message: newMsg } = exp;
        if (pattern && newMsg) {
          _rules.push({
            pattern: typeof pattern === 'string' ? getRegExp(pattern) : pattern,
            message: newMsg,
          });
        }
      });
    } else {
      _rules.push({
        pattern: typeof regexp === 'string' ? getRegExp(regexp) : regexp,
        message: getLocale?.('warnFormat') || '格式不正确',
      });
    }
  }
  return _rules;
};

/**
 * 输入型控件通用规则
 * @param param0
 * @returns
 */
const useRules = (
  {
    required,
    regexp,
    rules,
    message,
    name,
  }: {
    required: boolean;
    regexp: any[] | any;
    rules: any[];
    message?: string;
    name: string;
  },
  getLocale?: any,
  lang?: string,
): [Rule[], (data: any[]) => void] => {
  const [extendRules, setExtendRules] = useState<Rule[]>([]);
  const finalRules = useCreation<{ rules: Rule[] }>(() => {
    let _rules: Rule[] = [
      { required, message: getLocale?.('notEmpty', { name }) },
      ...getRegexpRules(regexp),
    ];
    _rules = [..._rules, ...(rules || []), ...extendRules];
    return {
      rules: _rules,
    };
  }, [required, regexp, extendRules, rules, lang]);

  return [finalRules.rules, setExtendRules];
};

export default useRules;
