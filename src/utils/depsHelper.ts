export const getImportFrom = (
  pkg: string,
  type: string,
  destructuring = true,
  exportName?: string,
  version = '*',
  dependencyType = 'External',
) => {
  return {
    package: pkg,
    type: type,
    exportName: type ?? exportName,
    version,
    dependencyType,
    destructuring,
  };
};

export const getImportsFrom = (
  pkg: string,
  types: string[],
  destructuring = true,
  _?: string,
  version = '*',
  dependencyType = 'External',
) => {
  return types.map((p) => {
    return getImportFrom(
      pkg,
      p,
      destructuring,
      // 按数组插入时，不支持传递 exportName
      p,
      version,
      dependencyType,
    );
  });
};
