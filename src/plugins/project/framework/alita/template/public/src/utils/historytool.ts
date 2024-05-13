import Qs from 'qs';



export const HISTORYTYPES = {
  replace: 'replace',
  push: 'push',
  window: 'window',
  portal: 'portal',

} 
export interface HistoryReplaceProps {
  history: any;
  pathname: string;
  search: string | {};
  state: {};
}

/**
 * 生成唯一id
 * @param prefix
 * @param id
 * @param slength
 * @returns
 */
const createId = (prefix?: string, id?: string, slength: number = 12) => {
  let uid = id;
  if (!uid) {
    uid = Math.random().toString().slice(slength);
  }
  return prefix ? prefix + '_' + uid : uid;
};

const historyFunc = (type: 'replace' | 'push' | 'window' | 'portal' ) => (params: HistoryReplaceProps) => {
  const { history, pathname, search, state } = params;
  if (type === 'window') {
    window.open(createUrl(false, params), '_blank');
    return
  } else if (type === 'portal') {
    if ((window.parent as any)?.portal) {
      (window.parent as any).portal?.openMenu({ menuUrl: createUrl(true, params), params: params.search });
    }
    return;
  }

  if (pathname.startsWith('http://', 0) || pathname.startsWith('https://', 0)) {
    window.location.replace(pathname);
  } else if (type) {
    let urlParamsStr = '';
    let mPathName = pathname;
    if (pathname.indexOf('?') > -1) {
      const urlArr = pathname.split('?');
      if (urlArr[0]) {
        mPathName = urlArr[0];
      }
      if (urlArr[1]) {
        urlParamsStr = urlArr[1];
      }
    }

    let realSearch = '';
    if (typeof search === 'object' && !Array.isArray(search)) {
      realSearch = Qs.stringify(search);
    } else if (typeof search === 'string') {
      realSearch = search;
    }
    const tmpQuery: any = Qs.parse(realSearch || '');
    if (urlParamsStr) {
      Object.assign(tmpQuery, Qs.parse(urlParamsStr));
    }
    history[type]({
      pathname: mPathName,
      search: Qs.stringify(tmpQuery),
      state,
    });
  }
};
const createUrl = (isPortal: boolean, params: HistoryReplaceProps) => {
  const { pathname, search } = params;
  let url = '';
  if (
    pathname.startsWith('http://', 0) ||
    pathname.startsWith('https://', 0) ||
    isPortal
  ) {
    url = pathname;
  } else {
    const urlArr = window.location?.hash?.split('?');
    if (urlArr[1]) {
      url = urlArr[1];
    }
    url =
      window.location.origin +
      window.location.pathname +
      '#' +
      pathname +
      '?' +
      url;
    let realSearch = '';
    if (typeof search === 'object' && !Array.isArray(search)) {
      realSearch = Qs.stringify({ ...search });
    } else if (typeof search === 'string') {
      realSearch = search;
    }
    if (realSearch?.length > 0) {
      url = url + '&' + realSearch;
    }
  }
  return url;
};
const historyPush = historyFunc('push');
const historyReplace = historyFunc('replace');
const historytool = (type: 'replace' | 'push' | 'window' | 'portal', historyParmas: HistoryReplaceProps ) => {
    if (historyParmas.state) {
        const _k = createId();
        window.sessionStorage.setItem(_k, JSON.stringify(historyParmas.state));
    }
  switch (type) {
    case 'replace':
      historyReplace(historyParmas);
      break;
    case 'push':
      historyPush(historyParmas);
      break;
    case 'window':
      window.open(createUrl(false, historyParmas), '_blank');
      break;
    case 'portal':
      if ((window.parent as any)?.portal) {
        (window.parent as any).portal?.openMenu({ menuUrl: createUrl(true, historyParmas), params: historyParmas.search });
      }
      break;
    default:
      historyPush(historyParmas);
      break;
  }
}
export default {
  createId,
  historytool,
};