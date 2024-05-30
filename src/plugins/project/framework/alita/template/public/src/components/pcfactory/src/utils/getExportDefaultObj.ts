export const getExportDefaultObj = (obj: any) => {
  if (typeof obj === 'object') {
    if (obj.__esModule === true && Object.prototype.hasOwnProperty.call(obj, 'default')) {
      return obj.default;
    }
  }
  return obj;
};
