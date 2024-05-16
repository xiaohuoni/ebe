import changeCase from 'change-case';
import pinyin from 'pinyin';

const busiCompMap: any = {};
export const getBusiCompName = (busiCompMapping: any, node: any) => {
  const otherType = busiCompMapping?.[node?.props?.busiCompId] ?? '';
  try {
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
      return busiCompMap[name] === otherType
        ? name
        : `${name}${otherType}`;
    }
    busiCompMap[name] = otherType;
    return name;
  } catch (error) {
    return `BusiComp${otherType}`;
  }
};
