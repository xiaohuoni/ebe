import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'attrSpecPage',
    'ts',
    `export const attrSpecPage = ${JSON.stringify(config?.attrSpecPage || [])}
     export const handleAttrDataMap = (list: any[]) => {
      return  (list || []).map((item: any) => {
        // 记录子级静态数据与编码关系
        const zattrNbrValueMap: Record<any, any[]> = {};
        if (Array.isArray(item.relatedAttrSpecList) && item.relatedAttrSpecList.length) {
          const children = item.relatedAttrSpecList.map((aItem: any) => {
            if (aItem.zrelatedAttrValueList) {
              // 记录子级编码
              const zattrValues = new Set();
              // 这级只做展示不做选择
              const zChildren = aItem.zrelatedAttrValueList.map((zItem: any) => {
                zattrValues.add(zItem.zattrValue);
                return {
                  label: zItem.zattrValueName,
                  title: zItem.zattrValueName,
                  value: zItem.zattrValue,
                  isLeaf: false,
                };
              });
              zattrNbrValueMap[aItem.zattrNbr] = [...zattrValues];
              return zChildren;
            }
            return undefined;
          }).filter(Boolean).flat();
          if (children.length) {
            return {
              ...item,
              label: item.attrValueName,
              title: item.attrValueName,
              value: item.attrValue,
              relatedAttrSpecList: item.relatedAttrSpecList,
              children,
              zattrNbrValueMap,
            };
          }
        }
        return {
          ...item,
          label: item.attrValueName,
          title: item.attrValueName,
          value: item.attrValue,
          relatedAttrSpecList: item.relatedAttrSpecList,
        };
      });
      }`,
  );

  return [['src', 'utils'], file];
}
