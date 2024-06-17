import { parsePlugins } from './core';
import babelTransform from './core/babelTransform';
import patchObjectParenthesis from './plugins/patchObjectParenthesis';
import semicolon from './plugins/semicolon';

// 插件按照从上到下的顺序执行
// 简单的字符串处理，可以直接从此添加插件自行处理，防止过多的if分支
const plugins = [semicolon, patchObjectParenthesis];

const { runPluginBegin, runPluginTransformCode, runPluginEnd } =
  parsePlugins(plugins);

/**
 * 编译代码
 * @param code
 */
const compile = (code: string) => {
  try {
    // 执行插件启动
    runPluginBegin(code);

    // babel内置转化
    let target = babelTransform(code, { buildCode: compile });

    // 执行插件的代码转化函数
    target = runPluginTransformCode(target);

    // 执行插件的结束函数
    target = runPluginEnd(target);

    // 返回目标
    return target;
  } catch (error) {
    console.error(code, 'code编译失败:', error);
    return code;
  }
};

export default compile;
