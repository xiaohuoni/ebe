import * as h5Cmd from '../../cmd/h5Cmd';
import * as pcCmd from '../../cmd/pcCmd';
import * as sysCmd from '../../cmd/sysCmd';

interface AllDebugDataProps {
  cmdHash?: any;
}
const allDebugData: AllDebugDataProps = {};

export const getDebugData = () => {
  return allDebugData;
};

const debugPrintCmd = true;
export const printCmdList = (platform: string) => {
  if (!debugPrintCmd) return;
  const { cmdHash = {} } = allDebugData;
  const platformCmd = platform === 'h5' ? h5Cmd : pcCmd;
  const cmd = { ...sysCmd, ...platformCmd };
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
      compAssetList: {
        tag: '自定义组件',
        progress: 1,
      },
      globalModels: {
        tag: '全局数据',
        progress: 2,
      },
      components: {
        tag: '组件依赖',
        progress: 3,
      },
      containers: {
        tag: '页面',
        progress: 4,
      },
      deps: {
        tag: '页面依赖',
        progress: 5,
      },
      routes: {
        tag: '路由',
        progress: 6,
      },
      model: {
        tag: '弹窗',
        progress: 7,
      },
      npm: {
        tag: '安装包',
        progress: 8,
      },
    },
  },
  generateTemplate: {
    tag: '公共文件',
    progress: 3,
  },
  containers: {
    tag: '页面生成',
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
  appConfig: {
    tag: '项目配置',
    progress: 7,
  },
  packageJSON: {
    tag: '项目依赖',
    progress: 8,
  },
  globalDataSource: {
    tag: '全局数据源',
    progress: 9,
  },
  generateExtraSlots: {
    tag: '附加插件',
    progress: 10,
  },
  end: {
    tag: '出码生成完成',
    progress: 999,
  },
};
