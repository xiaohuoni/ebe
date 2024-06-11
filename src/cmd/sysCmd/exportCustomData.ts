import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { transformValueDefined } from '../../core/utils/transformValueDefined';
import { GeneratorCallbackWithThenCatch } from '../utils';

const SERVICE_CUSTOM_EXPORT_TYPE: any = {
  query: 'customQuery', // 解析服务
  std: 'orchestrationService', // 编排服务
  rhin: 'externalQuery', // 外部服务(低代码运营平台的原子服务)
  object: 'objectService', // 业务对象生成服务
  inner: 'internalService', // 高代码服务
  platform: 'platformService', // 平台服务
};

export function exportCustomData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { exportSheet = [], custFileName, id, async } = value.options || {};
  let sheetList = [...exportSheet];

  // 兼容存量数据
  if (!exportSheet || !Array.isArray(exportSheet)) {
    sheetList = [value.options];
  }

  const funcTopCode: string[] = [];

  const exportSheetList = sheetList.map((item, i) => {
    const { apiRequestSetParams, custSheetName, serviceData, ...resetItem } =
      item;
    const { _source } = serviceData;
    const root = apiRequestSetParams ? apiRequestSetParams[0] : undefined;
    let [code, topCode] = transformValueDefined(apiRequestSetParams, '');
    if (topCode) {
      funcTopCode.push(topCode);
    }

    if (root && root.isRoot) {
      const parametersName = `parameters_${id}_${item.id || ''}`;
      funcTopCode.push(`
         const ${parametersName} = ${code};
        `);
      code = `${parametersName}.${root.code}`;
    }

    return {
      serviceData,
      ...resetItem,
      custSheetName,
      parameters: `$${code}$`,
      objType: SERVICE_CUSTOM_EXPORT_TYPE[_source],
      source: _source,
    };
  });

  return `
  // 导出自定义数据
    ${funcTopCode.join(';')}
    ${GeneratorCallbackWithThenCatch(
      `exportCustomDataFile(
         ${parse2Var(exportSheetList)},
         ${parse2Var({
           async,
           custFileName,
         })},
        )
      `,
      generateParams,
      {
        sync: async,
        topFuncAsync: true,
        alwayCatch: true,
      },
    )}
  `;
}
