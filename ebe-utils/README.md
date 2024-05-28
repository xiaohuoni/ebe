# 出码模块工具

## cli

### 工具类

#### clearLXPagesDSL

使用内定规则清理 dsl，注意传入数据是一个页面 dsl 数组，如果仅有一个页面，可以传入 [page]

```ts
const clearPages = clearLXPagesDSL(pages);
```

for 开发

在 constants.ts 中修改规则

一个 key 对应一个规则，一般规则中需要存在 rule 函数，如果对象是数组，则必须存在 loopRule 和 loop

```ts
export interface IRule {
  // 是否删除的判断规则，会根据
  rule?: (props: IRulePrams) => any;
  // 如果存在 loopRule 表示循环对象是一个数组，就根据 loop 中定义的规则清理 item，loop 中的 key 为 loopRule 返回值的判断依据
  loopRule?: (item: any) => string;
  loop?: IRulesType;
}
```

rule 函数

```ts
export interface IRulePrams {
  // 根据当前循环的数据 key，比如 data.a.c ,paths 为 ['data','a','c']
  paths: string[];
  // 此时循环中的值
  value: any;
  // 此时循环中的key
  key: string;
  // 提供的工具类，此时的值和data比较，如果是字符串相等则返回 true，如果对象和 data key-value 都相同的值会被删除，并返回清楚后的新对象
  diffraction?: (data: any) => any;
}
({ paths, value, key, diffraction }) => any;
```

##### rule

rule 函数可以返回 true 或者对象，如果返回 true 表示删除当前的对象，如果返回对象，则表示用新对象替换旧对象

属性 diffraction 为提供的工具方法

```ts
const in = {
    size: 'm',
    title: 'hellp',
    number: 123
}

const diff = {
    size:'m',
}
const out = diffraction(in,diff);

此时 out 为

const in = {
    title: 'hellp',
    number: 123
}

以上逻辑表示当 in 中的值和 diff 中的值相等时，删除
```

一般用法为

```ts
const ruleObj = {
  rule: ({ value, diffraction }) => {
    // 当对象中的某个字为xxx的时候 delete value.xxx
    const diff = {};
    return diffraction(value, diff);
  },
};
```

##### loop & loopRule

loopRule 传入数组 item 返回一个 key,比如常用到的 components 中要找到某个 组件类型。

```ts
export const lingxiDslRules: IRulesType = {
  components: {
    loopRule: (item) => item.compName,
    loop: componentsRule,
  },
};
```

返回 compName 作为 loop 的 key

```ts
const components = [
  { compName: 'A', title: 'A' },
  { compName: 'C', title: 'C' },
];

const loop = {
  A: {
    rule: () => any,
  },
  C: {
    rule: () => any,
  },
};
```

以上逻辑表示循环 components 当 item 的 compName 等于 A 时，执行 loop.A 的规则

##### 高级技巧

由于 rule 返回对象时，会覆盖旧的值，因此可以在 rule 中调用 removeObjectByRules 等方法来进一步实现内层的数据清理。

比如 View 组件的 components 也需要清理，就可以如下使用

```ts
import { removeObjectByRules } from './index';
import { IRulesType } from './types';
const isTrue = {
  rule: () => true,
};
const componentsRule: IRulesType = {
  View: {
    rule: ({ value, diffraction }) => {
      if (value?.components) {
        return removeObjectByRules(value, lingxiDslRules);
      }
    },
  },
};

export const lingxiDslRules: IRulesType = {
  components: {
    loopRule: (item) => item.compName,
    loop: componentsRule,
  },
};
```
