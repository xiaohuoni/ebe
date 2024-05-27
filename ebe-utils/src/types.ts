export interface IRulesType {
  [key: string]: IRule;
}
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
export interface IRule {
  // 是否删除的判断规则，会根据
  rule?: (props: IRulePrams) => any;
  // 如果存在 loopRule 表示循环对象是一个数组，就根据 loop 中定义的规则清理 item，loop 中的 key 为 loopRule 返回值的判断依据
  loopRule?: (item: any) => string;
  loop?: IRulesType;
}
