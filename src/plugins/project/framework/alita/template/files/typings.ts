import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'typings.d',
    'ts',
    `
    import 'alita/typings';
 `,
  );

  return [[], file];
}
