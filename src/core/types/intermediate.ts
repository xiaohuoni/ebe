import { ICompAnalyzeResult } from './analyze';
import { GlobalDataSourceItemType, LXProjectOptions } from './core';
import { IDependency, INpmPackage } from './deps';
import { IProjectSchema } from './page';
export interface IParseResult {
  containers: IContainerInfo[];
  globalUtils?: IUtilInfo;
  globalRouter?: IRouterInfo;
  project?: IProjectInfo;
  pageview?: IRouterInfo;
  app?: IRunTimeConfig;
  staticFiles?: LXProjectOptions;
  models: Record<string, LXGlobalDataInfo>;
}

export interface GlobalDataInfo {
  globalDataSource: Record<
    string,
    {
      moduleName: string;
      namespace: string;
      updateFunctionName: string;
      reloadFunctionName: string;
      resetFunctionName: string;
      id: any;
      dataName: string;
      readyCompleteName: string;
      initialFunctionName: string;
    }
  >;
  type: string;
  containerType: string;
  moduleName: string;
  analyzeResult: {
    isUsingRef: boolean;
  };
}

export interface LXGlobalDataInfo extends GlobalDataSourceItemType {
  moduleName: string;
  namespace: string;
  updateFunctionName: string;
  reloadFunctionName: string;
  resetFunctionName: string;
  dataName: string;
  readyCompleteName: string;
  initialFunctionName: string;
  camelCaseName: string;
}

export interface IRunTimeConfig {
  keepalive?: string[];
}

export interface IWithDependency {
  deps?: IDependency[];
}

export interface IContainerInfo extends IProjectSchema, IWithDependency {
  containerType: string;
  type: string;
  moduleName: string;
  analyzeResult?: ICompAnalyzeResult;
  modalDrawData?: any;
  // 一些全局的数据，都从这里塞进来，好找
  global?: {
    pageTypeMap?: any;
    pagePathEnglishMapping?: any;
  };
}

export interface IUtilInfo extends IWithDependency {}

export interface IRouterInfo extends IWithDependency {
  routes: Array<{
    path: string;
    fileName: string;
    type: string;
  }>;
  pageStaticData: Array<string>;
}

/**
 * project's remarks
 */
export interface ProjectRemark {
  /** if current project only contain one container which type is `Component` */
  isSingleComponent?: boolean;
}

export interface IProjectInfo {
  css?: string;
  containersDeps?: IDependency[];
  utilsDeps?: IDependency[];
  constants?: any;
  packages: INpmPackage[];
  meta?: { name?: string; title?: string } | Record<string, any>;
  config?: Record<string, any>;
  dataSourcesTypes?: string[];
  projectRemark?: ProjectRemark;
}

export interface IPageMeta {
  router?: string;
}

/**
 * From meta
 * page title
 * router
 * spmb
 *
 * Utils
 *
 * constants
 *
 * i18n
 *
 * components
 *
 * pages
 *
 * layout
 */
