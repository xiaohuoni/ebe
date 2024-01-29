import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import { IScope, CMDGeneratorPrames } from '../core/types';
import { getImportFrom } from '../utils/depsHelper';

// const eventDataresetCurrentForm: any = [
//   {
//     type: 'resetCurrentForm',
//     dataId: 169967335981757980,
//     options: {
//       compId: 'Form_1252646',
//       compLib: 'comm',
//       pageJsonId: '0314043',
//       compName: 'Form',
//       id: '382342',
//     },
//     line_number: 1,
//   },
// ];
// eventDataresetCurrentForm.params =
//   [{ title: '事件对象', value: '$e$', name: 'e' }] || [];
// CMDGenerator(
//   eventDataresetCurrentForm,
//   { e },
//   'resetCurrentForm',
//   {
//     id: 'resetCurrentForm',
//     name: 'resetCurrentForm',
//     type: 'resetCurrentForm',
//     platform: 'pc',
//   },
// );

const getVarStr = (str: string) => {
  if (isJSVar(str)) {
    return generateVarString(str);
  }
  return `'${str}'`;
};

export function getResetCurrentForm({
  value,
  params,
  platform,
  scope,
  config = {},
}: CMDGeneratorPrames): string {
  const { options, condition, callback1 = [] } = value;
  config?.ir?.deps?.push(
    getImportFrom(
      '@lingxiteam/pcfactory/es/utils/formUtils/cmdHelper',
      'getFormByCompId',
    ),
  );
  return `const forms = getFormByCompId('${options.compId}', refs);
  // 支持循环容器中的表单重置
  (Array.isArray(forms) ? forms : [forms]).forEach(form => form?.resetFields());`;
}
