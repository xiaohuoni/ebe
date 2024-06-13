import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const { modalDrawerMap = {} } = config!;
  const { popover = [] } = modalDrawerMap;
  const file = createResultFile(
    'index',
    'ts',
    `import React from 'react';
    const PopoverMap:any = {
      ${popover
        .map(
          (i: string) =>
            `'${i}': React.lazy(() => import(/* webpackChunkName: "popover_${i}_index" */'.${i}/index.tsx'))`,
        )
        .join(',')}
    }
    
    export default PopoverMap;
    `,
  );

  return [['src', 'components', 'popover'], file];
}
