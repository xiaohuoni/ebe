// 1. 沙箱解析时， 执行报错。无法正常解析
// 2. eval解析时，上下文丢失
// 期望后期沙箱支持
// eslint-disable-next-line consistent-return
export const parseExpr = (code: string, context: any) => {
  try {
    // eslint-disable-next-line no-new-func
    return Function(
      'context',
      `
      with(context) {
        return eval(__parse__expr__code__)
      }
  `,
    )({
      ...context,
      // @ts-ignore
      __parse__expr__code__: code,
    });
  } catch (error) {}
};
