// @ts-ignore
import security from '@/utils/Security';

// pc/app预览HTML文件图片接口补充签名
const addFileUrlSign = (content: string) => {
  if (!content) return '';
  // 正则匹配 补充接口签名 src="server/app/file/file/id/1061551015062036480?appId=887537336814669824"
  const newStr = content.replace(
    /src=\"server\/app\/file\/file\/id\/[0-9]+\?appId=[0-9]+\"/g,
    (str: string) => {
      const url = str.slice(5, -1); // 去掉src=""
      return `src="${security.httpEncryption.buildXSignUrl(url)}"`;
    },
  );
  return newStr;
};

export { addFileUrlSign };
