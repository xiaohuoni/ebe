const isAbsolutePath = (path: string) => {
  return /^(http:\/\/|https:\/\/|file:\/\/|\/)/.test(path);
};

const prePath = (newPath: string) => {
  let path = newPath;
  if (path.endsWith('/')) {
    path = path.slice(0, path.length - 1);
  }
  const step = path.split('/');
  if (isAbsolutePath(path)) {
    if (path.startsWith('/') && step.length <= 2) {
      return path;
    }
    if (/^(http:\/\/|https:\/\/|file:\/\/|\/)/.test(path) && step.length <= 3) {
      return path;
    }
  }
  return step.splice(0, step.length - 1).join('/');
};

export const join = (...paths: string[]) => {
  return (paths || []).reduce((target, p = '', index) => {
    const tLast = target[target.length - 1];
    const pFirst = p[0];
    let result = '';

    if (index === 0) {
      result = p;
    } else if (tLast === '/' && pFirst === '/') {
      result = `${target}${p.slice(1)}`;
    } else if (tLast !== '/' && pFirst !== '/') {
      result = `${target}/${p}`;
    } else {
      result = `${target}${p}`;
    }

    return result.split('..').reduce((target, p, i) => {
      if (i === 0) {
        return p;
      }
      return prePath(target) + p;
    }, '');
  }, '');
};
