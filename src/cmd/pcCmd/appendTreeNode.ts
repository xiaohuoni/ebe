import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

// 加载子节点数据
export function appendTreeNode(generateParams: CMDGeneratorPrames): string {
  const { value = {} } = generateParams;
  const {
    nodeKey,
    data = '',
    compId,
    selectable: temSelectable = undefined,
    key,
    title,
  } = value.options;
  if (nodeKey) {
    const selectable = temSelectable ? parse2Var(temSelectable) : undefined;
    return `// 加载树形控件子节点数据 \n const newData = refs?.[${parse2Var(
      compId,
    )}]?.dataSource.filter((e: any) => e) || [];
     const odata = ${parse2Var(data || [])};
     // 调用树形控件设置数据
     callComponentMethod(${parse2Var(
       compId,
     )}, 'setDataSource', updateNodeChildren(${parse2Var(
      nodeKey,
    )}, odata, newData, ${parse2Var(key)}, ${parse2Var(title)}, ${selectable}))
    `;
  } else {
    return `// appendTreeNode \\ console.error('数据异常：appendTreeNode 中的nodeKey未空')`;
  }
}
