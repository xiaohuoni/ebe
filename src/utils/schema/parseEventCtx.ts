/**
 * 事件对象拼装白名单
 * 注意：由于异步动作的关系，实际上在指令系统里调用preventDefault和stopPropagation很可能没有意义（需要其他方法辅助）
 * 这里只是补上避免指令系统报错
 */
const FILTER_EVENT_OBJ_KEY = [
  'target',
  'currentTarget',
  'clientX',
  'clientY',
  'pageX',
  'pageY',
  'altKey',
  'charCode',
  'ctrlKey',
  'key',
  'keyCode',
  'metaKey',
  'repeat',
  'shiftKey',
  'screenX',
  'screenY',
  'preventDefault',
  'stopPropagation',
];

/**
 * 解析事件上下文/参数
 */
const parseEventCtx = (options: { eventCfg: any; args: any[] }) => {
  const {
    eventCfg, // 事件的配置
    args, // 运行时事件真实参数
  } = options;

  const topparam: any = {};
  const _paramnames = [...new Set(eventCfg.params.map((o: any) => o.name))];

  eventCfg.params.forEach((_p: any) => {
    const _ind = _paramnames.indexOf(_p.name);
    // 需要判断是否解构赋值，是的话需要还原解构赋值
    // 这种方法不能100%还原任意表达式
    if (/^{.+}$/g.test(_p.name)) {
      const keys = _p.name.match(/[a-zA-Z]+/g);
      const _fuc = eval(`(${_p.name}) => {
            return {${keys.join(',')}};
          }`);
      const _param = _fuc(args[_ind] || {});
      Object.keys(_param).forEach((k) => {
        topparam[k] = _param[k];
      });
    } else {
      topparam[_p.name] = args[_ind];
    }

    // 事件参数持久化
    if (topparam?.[_p.name]?.persist) {
      // 如果他有persist，那么我们认为这是一个React合成事件
      // 由于事件池特性，我们不能在异步函数里获取到合成事件的原始内容
      // 因此我们将自己构建一个事件对象，这个事件对象并不是全功能的要注意
      const ourEobj: any = {};
      FILTER_EVENT_OBJ_KEY.forEach((k) => {
        ourEobj[k] = topparam[_p.name][k];
      });
      topparam[_p.name] = ourEobj;
    }
  });

  return topparam;
};

export default parseEventCtx;
