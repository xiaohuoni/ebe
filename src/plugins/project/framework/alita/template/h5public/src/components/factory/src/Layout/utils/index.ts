// 求和
export const sum = (numbers: { span: number }[] = []) =>
  numbers.reduce((pre, current) => pre + current.span, 0);

export const PRIVATE_SYMBOL = Symbol('privateSymbol');

// 数据重组
export const regroupNum = (
  base: number,
  numbers: { span: number; [key: symbol | string]: any }[] = [],
) => {
  const sumNumber = sum(numbers);
  const target = numbers;
  if (base > sumNumber) {
    target.push({ span: base - sumNumber, [PRIVATE_SYMBOL]: true });
  }
  return target;
};
