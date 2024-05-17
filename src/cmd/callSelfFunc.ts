import { parse2Var } from '../core/utils/compositeType';
import { CMDGeneratorPrames } from '../core/types';
const getSaleEventName = (eventName: any) => {
  const sale =
    /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(eventName) &&
    !/^(?:abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/.test(
      eventName,
    );
  return sale ? eventName : `event_${eventName}`;
};

export function callSelfFunc({ value, platform, scope, config }: CMDGeneratorPrames): string {
    const { paramsObj, customFuncName, customFuncParams } = value.options;
   const params = customFuncParams === 'object' ? paramsObj : customFuncParams;
  return `// 调用当前页面自定义事件 \n customActionMap?.${getSaleEventName(customFuncName)}(${params ? parse2Var(params) : ''})`;
}
