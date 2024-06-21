// $$componentItem: {
//     id: c.id,
//     platform: 'pc',
//     // Field: DformCustom,
//     // 提供给支持自定义渲染的组件传入engineEvalExp方法
//     $$engineEvalExp: (str, par) =>
//       engineEvalExp(str, par, {
//         ...cmdcontext,
//         item,
//         i,
//         getValue,
//         functorsMap,
//       }),
//   },

export type $$componentItem = {
  id: string; // 组件Id
  platform: 'pc' | 'h5'; // 组件平台
  platformType: 'ZeroCode' | 'LowCode' | 'Design';
  renderType: string; // 配置态使用
  fusionMode: boolean;
};

export type reloadSelectDataType = {
  dataSource: any[];
  labelKey?: string;
  valueKey?: string;
  childrenKey?: string;
};
