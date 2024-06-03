import * as cmd from '../../cmd';
interface AllDebugDataProps {
  cmdHash?: any;
}
const allDebugData: AllDebugDataProps = {};

export const getDebugData = () => {
  return allDebugData;
};

const debugPrintCmd = true;
export const printCmdList = () => {
  if (!debugPrintCmd) return;
  const { cmdHash = {} } = allDebugData;

  const cmdList = Object.keys(cmdHash)?.filter(
    (key) => typeof (cmd as any)[key] !== 'function',
  );
  console.log('当前源码缺少的指令数:', cmdList.length);
  console.log('当前源码缺少的指令: ', [...cmdList]);
};

export const LogTagsHash: any = {
  preProcessor: {
    tag: '前置处理器',
    progress: 1,
  },
  schemaParser: {
    tag: '数据解析器',
    progress: 2,
    childProcess: {
      aaa: {
        tag: 'aaa',
        progress: 1,
      },
    },
  },
  containers: {
    tag: '页面生成',
    progress: 3,
  },
  dataSources: {
    tag: '数据源生成',
    progress: 4,
  },
  app: {
    tag: '运行时配置',
    progress: 5,
  },
  pageview: {
    tag: '页面视图',
    progress: 6,
  },
  router: {
    tag: '路由生成',
    progress: 7,
  },
  appConfig: {
    tag: '项目配置',
    progress: 8,
  },
  packageJSON: {
    tag: '项目依赖',
    progress: 9,
  },
  globalDataSource: {
    tag: '全局数据源',
    progress: 10,
  },
  end: {
    tag: '出码生成完成',
    progress: 999,
  },
};
