import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/drawermap';
import { expectValue } from '../../../../../../utils';

describe('getFile', () => {
  it('should return the correct file drawermap', () => {
    const config: any = {
      modalDrawerMap: {
        drawer: ['/Drawer1', '/Drawer2', '/Drawer3'],
      },
    };
    const expectedContent = `import React from 'react';
    const DrawerMap:any = {
      '/Drawer1': React.lazy(() => import(/* webpackChunkName: "drawer_/Drawer1_index" */'./Drawer1/index.tsx')),
      '/Drawer2': React.lazy(() => import(/* webpackChunkName: "drawer_/Drawer2_index" */'./Drawer2/index.tsx')),
      '/Drawer3': React.lazy(() => import(/* webpackChunkName: "drawer_/Drawer3_index" */'./Drawer3/index.tsx'))
    }
    
    export default DrawerMap;
    `;
    const expectedFilePath = ['src', 'components', 'drawer'];
    const [directories, file] = getFile(config);
    expect(directories).toEqual(expectedFilePath);
    expect(file.name).toEqual('index');
    expect(file.ext).toEqual('ts');
    expectValue(file.content, expectedContent);
  });
});
