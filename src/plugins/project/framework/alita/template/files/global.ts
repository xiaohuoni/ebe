import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';

  const file = createResultFile(
    'global',
    'ts',
    `
// 直接引入 pcfactory 打包好的 css，不需要主工程再单独构建了
// TODO: 组件移到项目中，这个文件从哪来？
// import '@lingxiteam/pcfactory/dist/index.component.min.css';
import lcdpApi from './utils/lcdpApi';
import security from './utils/Security';
security.httpEncryption.start({
  // @ts-ignore
  mode: '1.0',
});
`,
  );

  return [['src'], file];
}
