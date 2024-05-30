import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'global',
    'ts',
    `;
${
  isMobile
    ? `import * as DynamicForm from '@lingxiteam/dform';
import {
  messageApi as message,
  Modal,
} from '@lingxiteam/engine-app/es/components/MessageApi';`
    : `import { message, Modal, notification } from 'antd';
// 直接引入 pcfactory 打包好的 css，不需要主工程再单独构建了
// TODO: 组件移到项目中，这个文件从哪来？
// import '@lingxiteam/pcfactory/dist/index.component.min.css';`
}
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
`,
  );

  return [['src'], file];
}
