import { CMDGeneratorPrames } from '../core/types';
import { generateVarString, parse2Var } from '../core/utils/compositeType';
import { isJSVar } from '../core/utils/deprecated';
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
}: CMDGeneratorPrames): string {
  const { options } = value;

  return `
    resetForm(${parse2Var(options.compId)})
  `
}
