import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'ts',
    `import React from 'react';
    const DrawerMap:any = {
      '/tanchuang': React.lazy(() => import(/* webpackChunkName: "modal_tanchuang_index" */'./tanchuang/index.tsx')),
    }
    
    export default DrawerMap;
    `,
  );

  return [['src', 'components', 'drawer'], file];
}
