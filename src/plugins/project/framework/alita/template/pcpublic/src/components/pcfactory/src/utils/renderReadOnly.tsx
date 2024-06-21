import { cloneDeep } from 'lodash';

const className = 'ued-input-readonly';

// 富文本
export const renderRichText = (str: string) => {
  // eslint-disable-next-line react/no-danger
  return (
    <div
      style={{ lineHeight: 'normal' }}
      dangerouslySetInnerHTML={{ __html: str || '--' }}
    />
  );
};

// 密码输入控件
export const renderPassword = (str: string) => {
  return str ? renderReadOnly(str, { type: 'password' }) : renderReadOnly('--');
};

// 日期类型
export const renderDatePicker = (str: string | string[], separator: any) => {
  let finalStr: any = str;
  if (Array.isArray(str) && typeof separator === 'string') {
    finalStr = str.join(separator);
  }
  return renderReadOnly(finalStr || '--');
};

// 通用 单选 多选 级联 label提取
export const renderCommonList = (
  value: any,
  options: any[],
  fieldName: {
    labelKey: string;
    valueKey: string;
    childrenKey: string;
  } = {
    labelKey: 'label',
    valueKey: 'value',
    childrenKey: 'children',
  },
) => {
  const { labelKey, valueKey, childrenKey } = fieldName;
  const getLabelName = (list: any[], val: any) => {
    const row = list?.find?.((o) => o[valueKey] === val);
    return row ? row[labelKey] : '';
  };
  const loopValue = (
    list: any[],
    val: any[],
    split: string = '，',
    isCascade: boolean = false,
  ) => {
    let lastList = list || [];
    const res: any[] =
      val?.map((curVal, idx) => {
        if (Array.isArray(curVal)) {
          // TODO list获取有问题
          return loopValue(cloneDeep(lastList), curVal, '/', true);
        }
        const resStr = getLabelName(cloneDeep(lastList), curVal);
        // 级联需要把当前的list替换成children
        if (isCascade) {
          const currentRow = lastList.find((o) => o[valueKey] === curVal);
          if (currentRow?.[childrenKey]) {
            lastList = currentRow?.[childrenKey] || [];
          }
        }
        return resStr;
      }) || [];
    return res.join(split);
  };
  let label: string = '';
  if (!Array.isArray(value)) {
    label = getLabelName(options, value);
  } else {
    label = loopValue(options, value);
  }
  return renderReadOnly(label || '--');
};

export const flattenTreeData = (
  treeList: any[],
  childrenName: string = 'children',
): any[] => {
  const res: any[] = [];
  const cpList = cloneDeep(treeList);
  const loopList = (list: any[]) => {
    (list || []).forEach((o) => {
      res.push(o);
      if (o?.[childrenName] && o?.[childrenName]?.length > 0) {
        loopList(o[childrenName]);
      }
    });
  };
  loopList(cpList);
  return res;
};

const renderReadOnly = (val: string, props?: any) => {
  return <span className={className}>{val}</span>;
};

export default renderReadOnly;
