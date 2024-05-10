import pinyin from 'pinyin';
import changeCase from 'change-case';

const busiCompMap: any = {};
export const getBusiCompName = (busiCompMapping: any, node: any) => {
  const otherType = busiCompMapping?.[node?.props?.busiCompId] ?? '';
  try {
    const pageName = node?.pageName ?? node?.props?.name;
    const name = pinyin(`${pageName}`, {
      style: 'normal',
    })
      .map((i) => [changeCase.pascalCase(i[0])])
      .join('')
      .replaceAll('/', '')
      .replaceAll('(', '')
      .replaceAll(')', '');
    if (busiCompMap[name]) {
      return busiCompMap[name] === node?.props?.busiCompId
        ? name
        : `${name}${otherType}`;
    }
    busiCompMap[name] = node?.props?.busiCompId;
    return name;
  } catch (error) {
    return `BusiComp${otherType}`;
  }
};
