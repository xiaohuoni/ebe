
// eslint-disable-next-line max-len
export const getCalendarLocale = (getLocale: (t: string, placelhoder?: string, tempValue?: Record<string, any>) => string | undefined, t: string, tempValue?: Record<string, any>) => {
    if (t === 'confirm') {
      return getLocale(t, '', tempValue);
    }
    return getLocale(`Calendar.${t}`, '', tempValue);
};

  