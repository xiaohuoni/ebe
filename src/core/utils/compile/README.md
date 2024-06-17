# 编译插件

涵盖以下功能
1. 成员变量可选链，例如: data.a -> data?.a
2. 数组索引可选链，例如: data[0] -> data?.[0];
3. 函数调用可选链，例如: func() -> func?.();
4. 原子函数增加顶级变量，例如: IF() -> functorsMap.IF?.();
5. 低代码自定义模板语法解析。例如: "$data.a$" ?? "name" -> data.a ?? "name";
6. 代码块匿转化【渲染行态“{}”无法解析，需配置为"({})"】, 例如：({ a: 100 }) -> { a: 100 }

若后续需要增加部分简单的转化逻辑，可在`src/core/utils/compile/index.ts`中添加plugins插件。插件放在`src/core/utils/compile/plugins`内。

插件开发示例如下：

```javascript
import { defineTransform } from '../core';

/**
 * 插件示例
 */
export default defineTransform(() => {
  let hasLastSemicolon = false;
  return {
    name: 'plugin - name',
    begin: (code) => {
      // 代码编译前会优先执行这里。
      // 注意：这里不做任何代码转化
    },
    transformCode: (code: string) => {
      // 代码开始转化，执行在内置babel编译后的代码
      // 对code进行处理，处理后的code需要return;
      return '';
    },
    end(code) {
      // 代码转化结束触发。
      // 一般情况下不做修改代码。
      return '';
    },
  };
});


```