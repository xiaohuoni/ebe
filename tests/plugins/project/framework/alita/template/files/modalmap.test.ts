import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/modalmap';
import { expectValue } from '../../../../../../utils';

describe('getFile', () => {
  it('should return the correct file modalmap', () => {
    const config: any = {
      modalDrawerMap: {
        modal: ['/modal1', '/modal2', '/modal3'],
      },
    };
    const expectedContent = `import React from 'react';
    const ModalMap:any = {
      '/modal1': React.lazy(() => import(/* webpackChunkName: "modal_/modal1_index" */'./modal1/index.tsx')),
      '/modal2': React.lazy(() => import(/* webpackChunkName: "modal_/modal2_index" */'./modal2/index.tsx')),
      '/modal3': React.lazy(() => import(/* webpackChunkName: "modal_/modal3_index" */'./modal3/index.tsx'))
    }
    
    export default ModalMap;
    `;
    const expectedFilePath = ['src', 'components', 'modal'];
    const [directories, file] = getFile(config);
    expect(directories).toEqual(expectedFilePath);
    expect(file.name).toEqual('index');
    expect(file.ext).toEqual('ts');
    expectValue(file.content, expectedContent);
  });
});
