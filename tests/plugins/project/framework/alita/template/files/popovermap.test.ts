import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/popovermap';
import { expectValue } from '../../../../../../utils';

describe('getFile', () => {
  it('should return the correct file popovermap', () => {
    const config: any = {
      modalDrawerMap: {
        popover: ['/popover1', '/popover2', '/popover3'],
      },
    };
    const expectedContent = `import React from 'react';
    const PopoverMap:any = {
      '/popover1': React.lazy(() => import(/* webpackChunkName: "popover_/popover1_index" */'./popover1/index.tsx')),
      '/popover2': React.lazy(() => import(/* webpackChunkName: "popover_/popover2_index" */'./popover2/index.tsx')),
      '/popover3': React.lazy(() => import(/* webpackChunkName: "popover_/popover3_index" */'./popover3/index.tsx'))
    }
    
    export default PopoverMap;
    `;
    const expectedFilePath = ['src', 'components', 'popover'];
    const [directories, file] = getFile(config);
    expect(directories).toEqual(expectedFilePath);
    expect(file.name).toEqual('index');
    expect(file.ext).toEqual('ts');
    expectValue(file.content, expectedContent);
  });
});
