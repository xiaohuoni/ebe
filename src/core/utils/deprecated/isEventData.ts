// 判断是否是 code，在代码生成的时候，可能有些是模版文件生成的代码字符串，需要被原样放到产物中
export function isEventData(x: any) {
  return typeof x === 'object' && x && x.id && x.value;
}
