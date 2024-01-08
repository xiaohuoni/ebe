import { ResultFile, LXProjectOptions } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'context',
    'tsx',
    `import React from 'react';

    export const Context = React.createContext<{
      ModalManagerRef: React.MutableRefObject<any>;
      refs: React.MutableRefObject<any>;
    }>({} as any);`,
  );

  return [['src', 'utils', 'Context'], file];
}
