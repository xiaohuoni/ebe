import { createModuleBuilder } from './generator/ModuleBuilder';
import { createProjectBuilder } from './generator/ProjectBuilder';
import { createDiskPublisher } from './publisher/disk';
import { createZipPublisher } from './publisher/zip';

// 引入说明
import {
  CLASS_DEFINE_CHUNK_NAME,
  COMMON_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from './const/generator';

// 引入通用插件组
import esmodule from './plugins/common/esmodule';
import requireUtils from './plugins/common/requireUtils';

import prettier from './postprocessor/prettier';

// 引入全局常用工具
import * as globalUtils from './utils';

import * as CONSTANTS from './const';

export default {
  createProjectBuilder,
  createModuleBuilder,
  solutions: {},
  solutionParts: {},
  publishers: {
    disk: createDiskPublisher,
    zip: createZipPublisher,
  },
  plugins: {
    common: {
      /**
       * 处理 ES Module
       * @deprecated please use esModule
       */
      esmodule,
      esModule: esmodule,
      requireUtils,
    },
  },
  postprocessor: {
    prettier,
  },
  utils: globalUtils,
  chunkNames: {
    COMMON_CHUNK_NAME,
    CLASS_DEFINE_CHUNK_NAME,
  },
  defaultLinkAfter: {
    COMMON_DEFAULT_LINK_AFTER: DEFAULT_LINK_AFTER,
  },
  constants: CONSTANTS,
};

// 一些类型定义
// 一些工具函数
export * from './analyzer/componentAnalyzer';
// 一些常量定义
export * from './const';
export * from './generator/ChunkBuilder';
export * from './generator/CodeBuilder';
export * from './generator/ModuleBuilder';
export * from './generator/ProjectBuilder';
export * from './types';
