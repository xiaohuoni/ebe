import { parse2Var } from '../../../../../../../src/core/utils/compositeType';
import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/attrSpecPage';
import { expectValue } from '../../../../../../utils';

describe('template files attrSpecPage', () => {
  it('should return the correct file', () => {
    const config: any = {
      attrSpecPage: [
        {
          attrValueName: 'Value 1',
          attrValue: 'value1',
          relatedAttrSpecList: [
            {
              zattrNbr: 'attr1',
              zrelatedAttrValueList: [
                {
                  zattrValueName: 'Value 1',
                  zattrValue: 'value1',
                },
                {
                  zattrValueName: 'Value 2',
                  zattrValue: 'value2',
                },
              ],
            },
          ],
        },
        {
          attrValueName: 'Value 2',
          attrValue: 'value2',
          relatedAttrSpecList: [],
        },
      ],
      appInfo: {
        appCode: 'APP_1106842174504439808',
        appId: 'appId',
        appName: '应用名称',
      },
    };

    const expectedFileContent = `export const attrSpecPage = ${JSON.stringify(
      config?.attrSpecPage || [],
    )}
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
      }

      /**
       * 应用信息
       */
      export const appInfo = ${parse2Var(config?.appInfo)};`;

    const [filePath, resultFile] = getFile(config);
    expect(filePath).toEqual(['src', 'utils']);
    expect(resultFile.name).toEqual('attrSpecPage');
    expect(resultFile.ext).toEqual('ts');
    expectValue(expectedFileContent, resultFile.content);
    // expect(codePrettier(resultFile.content, fileType)).toEqual(codePrettier(expectedFileContent, fileType));
  });
});
