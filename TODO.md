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
- [ ] findAppPolymerizationInfo createApp 加个配置不请求
- [ ] form onValuesChange - listenerOnValueChange
- [ ] 移动端 text 组件的 compLib 为 'antd-mobile',
- [ ] context 补齐 packages/render/src/renderer/BaseRenderer.tsx#L67
- [x] 命令源码化 - console
- [ ] bug 0?.00% . 的前后是数字的时候，不能改成 ?.
- [ ] 数据源清理，只保留必须的字段
- [x] .app-mobile/src/pages/sousuotanchuang0020/index.tsx:246 ReferenceError: getStaticDataSourceService is not defined
- [ ] 命令 callParentCustomFunc 用于调用父级页面自定义方法
- [x] closeModel 关闭弹窗
- [ ] urlParam url 参数需要全局
- [ ] 循环和列表等容器，命令需要传递，item 和 i ，MemoLoopItem 的组件的事件中

调试服务器 http://172.21.72.205:8088/

资产DSL - 林喜
PC 端 实习生打卡
DICT
指令源码化
源数据 dataSource 清理
