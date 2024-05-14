import type { ResolveApiPath } from '@lingxiteam/types';

export function getApiBasePath() {
  let basePath = 'server/';
  return basePath.replace(/([^/])\/*$/, '$1/');
}

// 解析 API 路径
const resolveApiPath: ResolveApiPath = (path, prefix) => /* @__HOT_UPDATE__ */ {
  const basePath = prefix || getApiBasePath();
  let apiPath = `${basePath}${path[0] === '/' ? path.slice(1) : path}`;

  if (!path) {
    apiPath = basePath;
  }
  // 避免重复添加前缀
  if (path.startsWith(basePath)) {
    apiPath = path;
  }

  return apiPath;
};

export default resolveApiPath;
