import { IProjectSchema } from './page';
import { IDependency, INpmPackage } from './deps';
import { ICompAnalyzeResult } from './analyze';

export interface IParseResult {
  containers: IContainerInfo[];
  globalUtils?: IUtilInfo;
  globalRouter?: IRouterInfo;
  project?: IProjectInfo;
  pageview?: IRouterInfo;
}

export interface IWithDependency {
  deps?: IDependency[];
}

export interface IContainerInfo extends IProjectSchema, IWithDependency {
  containerType: string;
  type: string;
  moduleName: string;
  analyzeResult?: ICompAnalyzeResult;
}

export interface IUtilInfo extends IWithDependency {}

export interface IRouterInfo extends IWithDependency {
  routes: Array<{
    path: string;
    fileName: string;
    type: string;
  }>;
  models: Array<{
    path: string;
    fileName: string;
    type: string;
  }>;
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
