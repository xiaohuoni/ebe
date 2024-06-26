import { MODAL_CHUNK_NAME } from '../../plugins/react/const';

export const COMMON_CHUNK_NAME = {
  ExternalDepsImport: 'CommonExternalDependencyImport',
  InternalDepsImport: 'CommonInternalDependencyImport',
  ImportAliasDefine: 'CommonImportAliasDefine',
  FileVarDefine: 'CommonFileScopeVarDefine',
  FileUtilDefine: 'CommonFileScopeMethodDefine',
  FileMainContent: 'CommonFileMainContent',
  FileExport: 'CommonFileExport',
  StyleDepsImport: 'CommonStyleDepsImport',
  StyleCssContent: 'CommonStyleCssContent',
  HtmlContent: 'CommonHtmlContent',
  CustomContent: 'CommonCustomContent',
  FileGlobalDataModel: 'FileGlobalDataModel',
};

export const CLASS_DEFINE_CHUNK_NAME = {
  Start: 'CommonClassDefineStart',
  ConstructorStart: 'CommonClassDefineConstructorStart',
  ConstructorContent: 'CommonClassDefineConstructorContent',
  ConstructorEnd: 'CommonClassDefineConstructorEnd',
  StaticVar: 'CommonClassDefineStaticVar',
  StaticMethod: 'CommonClassDefineStaticMethod',
  InsVar: 'CommonClassDefineInsVar',
  InsVarMethod: 'CommonClassDefineInsVarMethod',
  InsMethod: 'CommonClassDefineInsMethod',
  InsPrivateMethod: 'CommonClassDefineInsPrivateMethod',
  End: 'CommonClassDefineEnd',
};

export const DEFAULT_LINK_AFTER = {
  [COMMON_CHUNK_NAME.ExternalDepsImport]: [],
  [COMMON_CHUNK_NAME.InternalDepsImport]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
  ],
  [COMMON_CHUNK_NAME.ImportAliasDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
  ],
  [COMMON_CHUNK_NAME.FileVarDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
  ],
  [COMMON_CHUNK_NAME.FileUtilDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
  ],
  [CLASS_DEFINE_CHUNK_NAME.Start]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine,
  ],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorStart]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
  ],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorContent]: [
    CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
  ],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorEnd]: [
    CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
    CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
  ],
  [CLASS_DEFINE_CHUNK_NAME.StaticVar]: [CLASS_DEFINE_CHUNK_NAME.Start],
  [CLASS_DEFINE_CHUNK_NAME.StaticMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsVar]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsVarMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.InsMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
  ],
  [CLASS_DEFINE_CHUNK_NAME.End]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.InsMethod,
    CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
    MODAL_CHUNK_NAME.ImperativeHandle,
    MODAL_CHUNK_NAME.PageDidMount,
    MODAL_CHUNK_NAME.PageEndRequest,
    MODAL_CHUNK_NAME.PageStateChange,
    MODAL_CHUNK_NAME.PageWillUnmount,
  ],
  [COMMON_CHUNK_NAME.FileMainContent]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine,
    CLASS_DEFINE_CHUNK_NAME.End,
  ],
  [COMMON_CHUNK_NAME.FileExport]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine,
    CLASS_DEFINE_CHUNK_NAME.End,
    COMMON_CHUNK_NAME.FileMainContent,
  ],
  [COMMON_CHUNK_NAME.StyleDepsImport]: [],
  [COMMON_CHUNK_NAME.StyleCssContent]: [COMMON_CHUNK_NAME.StyleDepsImport],
  [COMMON_CHUNK_NAME.HtmlContent]: [],
};

export const COMMON_SUB_MODULE_NAME = 'index';
