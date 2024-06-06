import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/global';
import { expectValue } from '../../../../../../utils';

describe('template files global', () => {
  test('should return the correct file global', () => {
    const config: any = {
      platform: 'pc',
    };
    const expectedFileContent = `import { message, Modal, notification } from 'antd';
    // 直接引入 pcfactory 打包好的 css，不需要主工程再单独构建了
    // TODO: 组件移到项目中，这个文件从哪来？
    // import '@lingxiteam/pcfactory/dist/index.component.min.css';
    import React from 'react';
    import ReactDOM from 'react-dom';
    import lcdpApi from './utils/lcdpApi';
    import security from './utils/Security';
    security.httpEncryption.start({
      // @ts-ignore
      mode: '1.0',
    });
    window.React = React;
    window.ReactDOM = ReactDOM;
    
    /**
     * 注册在【engine-utils】包下http.js文件中用到的 antdmobile 组件, 应用勾子中使用的的到
     */
    lcdpApi.setAntd({
      message,
      notification,
      modal: Modal,
    });
    `;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['src']);
    expect(file.name).toEqual('global');
    expect(file.ext).toEqual('ts');
    expectValue(file.content, expectedFileContent);
  });
});
