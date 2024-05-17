import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile('FormProvider', 'tsx', `
    export const FormProvider = (props: any) => {
      return props.children;
    }
  `);

  return [['src', 'utils'], file];
}