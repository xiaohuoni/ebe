## @lingxiteam/code-creator RFC

## 使用

```js
// 解决方案的配置
const option = {
  template,
  plugins,
  postProcessors,
  extraContextData,
};

// 生成一个解决方案
const solution = createSolution(option);

// 生成一个解决方案实例
const runner = solution();

// 仅生成当前页面
const page = runner.createPage(schema);

// 生成一个可执行项目
const pkg = runner.createPkg(scheme);

// 生成 zip
await publishers.zip({
  project: pkg, // 上一步生成的 project
  outputPath: '/path/to/your/output/dir', // 输出目录
  projectSlug: 'lingxi-project-slug', // 项目标识
});
```

## 实现

### 前置处理

#### preparer

preparer 是准备给 checker 和 runner 用的 context，基于 schema 分析结果

#### checker

对分析结果做一些必要性的监测校验，简单的比如 schema 是否完整

#### runner

解决方案的执行者，同样的数据，针对不同的解决方案，产出不同

### 解决方案

#### h5

针对移动端平台的解决方案，包含执行插件和模版等内容

#### pc

针对 pc 平台的解决方案，包含执行插件和模版等内容

### postprocessor

后置处理器，对最终产物做一个后置优化，如 prettier 等
