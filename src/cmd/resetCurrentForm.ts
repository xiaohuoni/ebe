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
// 同名的事件增加后缀
const count = {} as any;

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
  let suffix = '';
  if (count[value.type]) {
    suffix = count[value.type];
    count[value.type] += 1;
  } else {
    count[value.type] = 1;
  }
  return `const forms${suffix} = getFormByCompId('${options.compId}', refs);
  // 支持循环容器中的表单重置
  (Array.isArray(forms${suffix}) ? forms${suffix} : [forms${suffix}]).forEach(form => form?.resetFields());`;
}
