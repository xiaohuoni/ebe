import {
  Component,
  JSONArray,
  JSONValue,
  PlatformType,
} from '@lingxiteam/types';
import { LoopMarkSymbol } from '../../constants';

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
  events: any;
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
  // 业务组件的真实代码
  busiComp?: any;
  customClass?: string;
  customFuctions?: any[];
  busiCompId?: string;
  pageId?: string;
  // 全局数据源
  globalDataSource: any;
  [LoopMarkSymbol]?: {
    /**
     * 父循环容器的组件id
     */
    parentLoopId?: string;
    loopType?:
      | 'outerLayer' /** 最外层循环容器 */
      | 'innerLayer' /** 内层循环容器 */;
  };
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
