// 维度数据
export const defaultIndicatorDataSource = [
  { name: '基本素养', dataKey: 'basic', max: 6500, min: 0 },
  { name: '执行落地', dataKey: 'excution', max: 16000, min: 0 },
  { name: '守约记录', dataKey: 'manner', max: 30000, min: 0 },
  { name: '营销能力', dataKey: 'sale', max: 38000, min: 0 },
  { name: '服务能力', dataKey: 'service', max: 52000, min: 0 },
];

// 业务数据
export const defaultDataSource = [
  {
    id: '1',
    name: '吉安县白云路惠尔佳委托经营厅',
    basic: 4200,
    excution: 3000,
    manner: 20000,
    sale: 35000,
    service: 50000,
  },
  {
    id: '2',
    name: '抚州市临川区抚临路委托经营厅',
    basic: 5000,
    excution: 14000,
    manner: 28000,
    sale: 26000,
    service: 42000,
  },
];

// 雷达图提示常在的区域
export const defaultHint = {
  text: '信用',
  width: 120,
};

// 雷达图提示hover后
export const defaultRadarLevelHint = [
  {
    min: 0,
    max: 1000,
    description: '一般',
  },
  {
    min: 1000,
    max: 114000,
    description: '好',
  },
  {
    min: 114000,
    max: 142500,
    description: '极好',
  },
];
