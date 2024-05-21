import {
  EngineApisServiceType,
  LocaleFunction,
  PlatformExportUtilsType,
} from '@lingxiteam/types';

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

export interface ImportBusiObjModalProps extends BaseModalProps {
  // appId: string;
  // pageId: string;
  getLocale?: LocaleFunction;
}
