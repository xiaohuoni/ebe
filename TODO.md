- [x] import 信息
- [x] JSX View 页面组件
- [x] props 处理
- [x] 组件 event 事件
- [x] 页面 event 事件
- [x] 数据源
- [x] 页面生命周期
- [x] engine apis 支持
- [x] 循环列表
- [x] mobile setPageNavBar
- [x] Web Worker
- [x] 免登录 dsl 中有 ignoreLogin
- [x] pc templates
- [x] pc solutions - pc 段的插件集
- [x] solutions 依赖区分
- [x] 业务组件 BOFramer 优先级高
- [x] 页面容器
- [x] 一键生成 zip
- [x] node: 根据 appId 查询所有页面的 dsl
- [x] node: 根据页面 dsl 分析用到的业务组件，并获取对应的 dsl
- [x] 浏览器端出码
- [x] node: 服务端出码
- [x] 页面容器，style 应该传递
- [x] 页面容器动态查找页面，可能是带参数或者是拼接字符找到对应页面
- [x] 页面类型为弹窗
- [x] 特殊组件: 表单增删控件，当前环境里面塞了变量 i 处理的时候，需要去掉
- [x] 特殊组件: CardHeader
- [x] 特殊组件: DTalkView 不要渲染，丢弃
- [x] 特殊组件: DynamicList
- [x] keepalive dsl 中有 pageDynamicFlag
- [x] BASE_URL 请求的主路径支持配置
- [x] 页面 index 冲突
- [x] 页面类型为气泡卡片
- [x] popoverSetting 消息提示，是组件属性，但是逻辑是给他加一个父级容器
- [x] addToAwaitQueue @lingxiteam/engine-render-core/es/utils/AwaitHandleData
- [x] form item fieldProps - setValue
- [x] form item ref 是处理过的
- [x] prettier 格式化规则使用 alita/prettier
- [x] 命令源码化 - console
- [x] .app-mobile/src/pages/sousuotanchuang0020/index.tsx:246 ReferenceError: getStaticDataSourceService is not defined
- [x] closeModel 关闭弹窗
- [x] urlParam url 参数需要全局
- [x] 循环和列表等容器，命令需要传递，item 和 i ，MemoLoopItem 的组件的事件中
- [x] 自定义当前控件样式 customStyle innerStyle
- [x] 自定义内部空间样式 customClass
- [x] 国际化
- [x] pc 端弹窗
- [x] bug 0?.00% . 的前后是数字的时候，不能改成 ?.
- [x] pc 端 Form 渲染存在差异
- [x] 表单组件需要标记父级 compType isFormRootChild extendProps
- [x] 循环容器 itemKey
- [x] js 变量行尾分号 - 平台额外添加的，意义不明，去除
- [x] 组件属性 staticData
- [x] basicStatus 2 为隐藏 3 不可交互 4 只读
- [x] 命令源码化 - ifelse
- [x] 命令源码化增加插件 - 允许命令解析式 import 新对象
- [x] 命令源码化 - resetCurrentForm
- [x] 表格数据导出
- [x] pc form 非表单组件 布局异常 extendProps 如何传递
- [x] dataSource 独立文件
- [x] 支持同目录写入多个文件
- [x] 修复指令传参错误
- [x] customFuctions 自定义事件 options - 不可用，函数需要上下文
- [x] customFuctions 自定义事件 组件内方案
- [x] pc 端 Popover
- [x] 检查语法错误，舍弃代码
- [x] customFuctions 自定义事件,唯一 name 重复，改用 eventCode
- [x] 命令 callParentCustomFunc 用于调用父级页面自定义方法 engineRelation
- [ ] 命令 callCustomPageFunc 调用任意页面方法
- [ ] visible 需要兼容动态指令显隐 和 basicStatus(已实现)
- [ ] 应用勾子？-- 内部发起都处理，若移除 createApp 则需要重新处理
- [ ] 应用勾子 pageDidMount 这个应该在页面处理
- [ ] 组件 pc 端 GridView 选中状态样式
- [ ] bug 表格导出需要点两次才有效，第一次请求数据都成功，但是发起任务的数据为空
- [ ] 页面开启免登录，页面里面又绑定了用户信息，怎么处理？
- [ ] 显隐规则配置错误时，如何处理？比如 用户配置 basicStatus "$data.xxxxxxx.list$".length?2:1 实际上不存在 xxxxxxx
- [ ] Cascader onClickStaticOption packages/pcFactory/src/index.enPreprocess.ts
- [ ] findAppPolymerizationInfo createApp 加个配置不请求
- [ ] 移动端 text 组件的 compLib 为 'antd-mobile',
- [ ] context 补齐 packages/render/src/renderer/BaseRenderer.tsx#L67 调试服务器 http://172.21.72.205:8088/
- [ ] 数据源清理，只保留必须的字段
- [ ] 表格数据导入
- [x] pc Table ref getTableSelected
- [ ] pageview 是否应该按需载入？
- [x] 业务组件 pageId 来自页面 pageId
- [x] 业务组件拥有自己的数据源

资产 DSL - 林喜 PC 端 实习生打卡 DICT 指令源码化？源数据 dataSource 清理？

决策标准：

正反：

用户高代码维护/用户使用感受/长远考虑/可读性

反方： 1、代码执行上下文，参数 2、每个指令翻译工作量很大 - 200 多个 3、

场景： 自然语言操作 DSL（规则整理）

DSL 插入？

DSL 理解？ DSL 规范要求，规范检测。运营分析埋点 - 生成插件插入规则。

4.0 版本？年底

http://172.21.72.205:8088/
