import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'types',
    'ts',
    `import { BaseRendererProps, EngineLifeCycleType, IPublicComponentLiftCycle, MetaPluginType } from '@lingxiteam/engine-render';
import { LanguageKeys } from '@lingxiteam/engine-utils';
import {
  BaseDynamicPageType,
  EngineApisServiceType,
  EngineBaseProps,
  LocaleFunction,
  MetaXPlugin,
  PlatformExportUtilsType,
  type ModalManagerHooks,
  IPublicSchemaType,
  PlatformAppConfig,
} from '@lingxiteam/types';

export interface AccountDivideModalOpenOptions {
  payCycle: string;
  startDate: string;
  endDate: string;
  list: any[];
  totalAmount: number;
  oldList: any[];
  payCycleAfter: string;
  adAfterList: any[];
  adStartDateAfter: string;
  adOperationType: string;
}

/**
 * AccountDivideModal弹窗暴露方法
 */
export interface AccountDivideModalHooks {
  open(options: AccountDivideModalOpenOptions): void;
  close(): void;
}

export interface ExpBusiObjModalOptions {
  busiObjectId: string;
}

export interface ExpBusiObjModalCustomOptions {
  busiObjectId: string;
  attrs: any[];
  custFileName: string;
  exportType?: 'field' | 'temp'; // 导出字段类型：选中字段｜导出模板
  tempParams?: any; // 导出模板文件参数
  onSuccess(): void;
  onFail(): void;
}

/**
 * ExpBusiObjModal弹窗
 */
export interface ExpBusiObjModalHooks {
  open(data: ExpBusiObjModalOptions): void;
  close(): void;
  openWithCustFields(data: ExpBusiObjModalCustomOptions): void;
}

export interface ExpSQLServiceModalOptions {
  sqlServiceCode: string;
  sqlServiceFields: any[];
  attrs: any[];
  custFileName: string;
  exportType?: 'field' | 'temp'; // 导出字段类型：选中字段｜导出模板
  tempParams?: any; // 导出模板文件参数
  onSuccess(): void;
  onFail(): void;
}

/**
 * ExpSQLServiceModal弹窗
 */
export interface ExpSQLServiceModalHooks {
  openWithCustFields(data: ExpSQLServiceModalOptions): void;
  close(): void;
}

export interface ImportBusiObjModalHooks {
  openWithCustFields: any;
}

/**
 * 弹窗基础入参
 */
export interface BaseModalProps {
  appId?: string;
  pageId?: string;
  appInst?: unknown;
  api: EngineApisServiceType;
  utils: PlatformExportUtilsType;
}


export interface ModifiedEngineLifeCycleType extends EngineLifeCycleType {
  engineWillRender?: (schema: IPublicSchemaType, appConfig?: PlatformAppConfig) => void;
}

/**
 * 引擎页面props
 */
export interface DynamicPageProps extends BaseDynamicPageType {

  /**
   * 是否可开启调试器
   */
  debuggable?: boolean;
  prefixCls?: string;
  // 以下弹窗抽屉模式下才会传入的属性
  // 弹窗/抽屉实例
  managerRef?: { current: ModalManagerHooks };
  // 弹窗/抽屉实例id
  modalInstId?: string;
  onCancel?: () => void;

  /**
   * @deprecated 禁止使用，后续废弃， 调用功能组件能力 参数
   */
  injectMethod?: Record<string, any>;

  /**
   * 引擎生命周期 提供给组件使用
   */
  engineliftCycle?: ModifiedEngineLifeCycleType;

  /**
   * 响应式数据监听
   */
  installPlugin?: ({ meta }: { meta: MetaPluginType }) => void;

  /**
   * 暴漏内置插件 供外界使用
   * @param param0
   * @returns
   */
  innerPluginComplete?: ({ metax }: { metax: MetaXPlugin }) => void;

  /**
   * 目前只有pc有
   */
  flowTraceRelId?: string; // 流程跟踪关联id

  /**
   * 扩展的组件引用refs
   */
  extendsRefs?: Record<string, any>;

  /**
   * @description 当前容器的uid前缀 例如：页面容器。boframer组件需要
   */
  uidPrefix?: string;

  /**
   * 组件生命周期
   */
  componentLiftCycle?: IPublicComponentLiftCycle;

  /**
   * 自定义引擎能力
   */
  customEngineApi?: Record<string, any>;

  /**
   * @description 是否启用DSL别名功能，配置后会优先读取alias字段，若无alias则走type字段
   * @default false
   */
  enableAlias?: boolean;

  /**
   * 修正组件属性
   */
  patchComponentProps?: BaseRendererProps['patchComponentProps'];

  /**
   * 多语言配置
   */
  i18n?: {

    /**
     * 支持的静态语言包，主要用来配置静态展示的文字，例如：antd内置文本、按钮的文字等。
     */
    locale?: () => Promise<{
      antd: Record<string, any>;
      lowcode: Record<string, any>;
    }>;

    /**
     * 远端的语言包文件
     * 按照key为id  value为文字的格式
     */
    remoteLocale?: Record<string | number, string>;

    /**
     * 当前语言
     */
    language: LanguageKeys;

    /**
     * 设置多语言
     */
    setLocale: PlatformExportUtilsType['setLocale'];
  };
}

/**
 * 引擎页面方法
 */
export interface DynamicPageHooks {
  onMDOK(): void;
  onMDCancel(): any;
}

/**
 * 业务组件属性
 */
export interface BOFramerProps {
  busiCompId: string;
  appId: string;
  pageId: string;
  params?: Record<string, any>;
  onValuesChange?: (v: Record<string, any>, v2: Record<string, any>) => void;
  visible?: boolean;
  style?: React.CSSProperties;
  busiCompStates: Record<string, any>;
  lcdpParentRenderId: string; // 父页面ID，调用父页面的时候使用
  parseNodeBefore?: () => any;
  getEngineApis: EngineBaseProps['getEngineApis'];
  getLocale: LocaleFunction;
  useEffectLoading?: boolean;
  usePageEndRequest?: () => void;
}
 `,
  );

  return [['src'], file];
}
