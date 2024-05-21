import changeCase from 'change-case';
import pinyin from 'pinyin';

const busiCompMap: any = {};
const busiCompNameMap: any = {};
export const getBusiCompName = (busiCompMapping: any, node: any) => {
  const otherType = busiCompMapping?.[node?.props?.busiCompId] ?? '';
  try {
    if (busiCompNameMap[otherType]) {
      return busiCompNameMap[otherType];
    }
    const pageName = node?.pageName ?? node?.label;
    const name = pinyin(`${pageName}`, {
      style: 'normal',
    })
      .map((i) => [changeCase.pascalCase(i[0])])
      .join('')
      .replaceAll('/', '')
      .replaceAll('(', '')
      .replaceAll(')', '');
    if (busiCompMap[name]) {
      const _name =
        busiCompMap[name] === otherType ? name : `${name}${otherType}`;
      busiCompNameMap[otherType] = _name;
      return _name;
    }
    busiCompNameMap[otherType] = name;
    busiCompMap[name] = otherType;
    return name;
  } catch (error) {
    return `BusiComp${otherType}`;
  }
};
