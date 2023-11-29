const regex = /^##{{.+}}##$/;
export function isLXComponent(x: any) {
  return typeof x === 'string' && regex.test(x);
}
