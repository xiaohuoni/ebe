export function isJSExpression(data: any) {
  return data && data.type === 'JSExpression' && data.extType !== 'function';
}
