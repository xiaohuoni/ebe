import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const { modalDrawerMap = {} } = config!;
  const { drawer = [] } = modalDrawerMap;
  const file = createResultFile(
    'index',
    'ts',
    `import React from 'react';
    const DrawerMap:any = {
      ${drawer.map(
        (i: string) =>
          `'${i}': React.lazy(() => import(/* webpackChunkName: "modal_${i}_index" */'.${i}/index.tsx')),`,
      )}
    }
    
    export default DrawerMap;
    `,
  );

  return [['src', 'components', 'drawer'], file];
}
