import {
  Component,
  JSONArray,
  JSONValue,
  PlatformType,
} from '@lingxiteam/types';

/**
 * 应用描述
 */
export interface IProjectSchema extends Component {
  id?: string;
  uid?: string;
  pageContainerType?: string;
  // 这是为了把 page 也当作一层组件展开
  type: string;
  dataSource?: any[];
  props?: JSONValue;
  compName?: string;
  events: any[];
  actions: any[];
  pageName: string;
  pageTitle?: string;
  pagePath: string;
  pageLayout: string;
  pageDynamicFlag: boolean;
  catalogItemId: string;
  ignoreLogin: false;
  hideNavBar: false;
  layout: string;
  searchParams: any[];
  compState: any[];
  setEvents?: JSONArray;
  editorVersion: string;
  createdEditorVersion: string;
  terminalType: string;
  extras: any;
  alias?: any;
  platformType: PlatformType;
  path: string[];
  components: IProjectSchema[];
}

export interface PackageJSON {
  name: string;
  version: string;
  description?: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  scripts?: Record<string, string>;
  engines?: Record<string, string>;
  repository?: {
    type: string;
    url: string;
  };
  private?: boolean;
  'lint-staged'?: Record<string, string | string[]>;
  gitHooks?: Record<string, string>;
}

/**
 * npm 源引入完整描述对象
 */
export interface IPublicTypeNpmInfo {
  /**
   * 源码组件名称
   */
  type?: string;
  /**
   * 源码组件库名
   */
  package: string;
  /**
   * 源码组件版本号
   */
  version?: string;
  /**
   * 是否解构
   */
  destructuring?: boolean;
  /**
   * 源码组件名称
   */
  exportName?: string;
  /**
   * 子组件名
   */
  subName?: string;
  /**
   * 组件路径
   */
  main?: string;
}

export declare type IPublicTypeNodeDataType =
  | IProjectSchema
  | Component[]
  | Component;

export declare type IPublicTypeNodeData = IProjectSchema | Component | string;
