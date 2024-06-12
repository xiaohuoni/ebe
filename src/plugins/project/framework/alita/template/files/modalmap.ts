import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const { modalDrawerMap = {} } = config!;
  const { modal = [] } = modalDrawerMap;
  const file = createResultFile(
    'index',
    'ts',
    `import React from 'react';
    const ModalMap:any = {
      ${modal.map(
        (i: string) =>
          `'${i}': React.lazy(() => import(/* webpackChunkName: "modal_${i}_index" */'.${i}/index.tsx')),`,
      )}
    }
    
    export default ModalMap;
    `,
  );

  return [['src', 'components', 'modal'], file];
}
