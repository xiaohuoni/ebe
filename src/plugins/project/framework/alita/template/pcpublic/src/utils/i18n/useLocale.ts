import merge from 'lodash/merge';
import { useCallback, useEffect, useRef, useState } from 'react';
import { localeMonitor } from './localeMonitor';
import { replaceMessage } from './replaceMessage';
import { LanguageKeys } from './types';

type LocaleReturnType = {
  antd: Record<string, any>;
  lowcode: Record<string, any>;
};

export interface I18nOptions {
  language: LanguageKeys;
  remoteLocale?: Record<string, string>;
  locale: LocaleReturnType;

  /**
   * 通过init注册进来的多语言
   */
  configLocale: Record<string, Record<string, any>>;
}

export const useLocale = (
  i18n: I18nOptions,
  defaultLocales: Record<LanguageKeys, LocaleReturnType>,
) => {
  const { locale: loca, language = 'zh-CN', configLocale } = i18n || {};
  const [locale, setLocale] = useState<{
    antd: Record<string, any>;
    lowcode: Record<string, any>;
  }>({
    antd: {},
    lowcode: {},
  });

  const localeInfo = useRef({
    language,
    locale,
    remoteLocale: i18n.remoteLocale,
  }).current;

  /**
   * 获取当前的语种;
   * @returns
   */
  const getLocaleEnv = () => {
    return localeInfo.language;
  };

  const setLocalFn = useCallback(async () => {
    if (typeof loca === 'object') {
      setLocale(merge({ lowcode: configLocale[language] }, loca));
      return;
    }

    const defaultLocale = await defaultLocales[language as LanguageKeys];
    setLocale(merge({}, defaultLocale || {}, { lowcode: configLocale }));
  }, [loca, language]);

  useEffect(() => {
    setLocalFn();
  }, [setLocalFn]);

  // fix: 由于闭包问题引起的数据不同步，导致getLocale访问错误。
  localeInfo.language = language;
  localeInfo.remoteLocale = i18n.remoteLocale;
  localeInfo.locale = locale;

  /**
   * 获取静态语言包。硬编码
   * @param key 语言key值, 如果传入的是 xxxx.aaa 那么优先找xxxx.aaa的key，如果找不到则会找aaa
   * @param placeholder key值不存在时的占位文字
   * @param kv 替换的动态模板，语言模板可以是 "${year}年${month}月"   kv: { year: '2003', month: 12 }; 则结果为 '2003年12月';
   * @returns
   */
  const getLocale = (
    key: string,
    placeholder?: string,
    kv?: Record<string, string>,
  ) => {
    const obj: any = localeInfo.locale.lowcode;
    if (obj?.[key] || obj?.[key] === '') {
      return replaceMessage(obj?.[key], placeholder, kv);
    }
    if (key.includes('.')) {
      const keys = key.split('.');
      const newKey = keys[keys.length - 1];
      return replaceMessage(obj?.[newKey], placeholder, kv);
    }
    return replaceMessage(obj?.[key], placeholder, kv);
  };

  /**
   * 远端文字配置
   * @param key 语言key值
   * @param placeholder key值不存在时的占位文字
   * @param kv 替换的动态模板，语言模板可以是 "${year}年${month}月"   kv: { year: '2003', month: 12 }; 则结果为 '2003年12月';
   * @param id
   */
  const getLocaleLanguage = (
    id: string,
    placeholder?: string,
    kv?: Record<string, string>,
  ) => {
    const { remoteLocale } = localeInfo;
    if (!id || !remoteLocale) {
      return placeholder;
    }
    return replaceMessage(remoteLocale[id], placeholder, kv);
  };

  useEffect(() => {
    localeMonitor.emit({
      language: localeInfo.language,
      locale: localeInfo.locale,
      getLocale,
      getLocaleEnv,
      getLocaleLanguage,
    });
  }, [locale]);

  return {
    getLocaleLanguage,
    getLocale,
    getLocaleEnv,
    locale: localeInfo.locale,
    language: localeInfo.language,
  };
};
