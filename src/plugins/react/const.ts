export const REACT_CHUNK_NAME = {
  RenderStart: 'ReactComponentRenderStart',
  RenderPre: 'ReactComponentRenderPre',
  RenderEnd: 'ReactComponentRenderEnd',
  RenderJSX: 'ReactComponentRenderJSX',
  DidMountStart: 'ReactComponentDidMountStart',
  DidMountEnd: 'ReactComponentDidMountEnd',
  DidMountContent: 'ReactComponentDidMountContent',
  DidUpdateStart: 'ReactComponentDidUpdateStart',
  DidUpdateEnd: 'ReactComponentDidUpdateEnd',
  DidUpdateContent: 'ReactComponentDidUpdateContent',
  WillUnmountStart: 'ReactComponentWillUnmountStart',
  WillUnmountEnd: 'ReactComponentWillUnmountEnd',
  WillUnmountContent: 'ReactComponentWillUnmountContent',
  RenderLoading: 'ReactComponentRenderLoading',
};

export const LIFE_CYCLE_CHUNK_NAME = {
  CallLifeCycleHooks: 'CallLifeCycleHooks',
  UseMountStart: 'UseMountStart',
  UseMountEnd: 'UseMountEnd',
  UseMountContent: 'UseMountContent',
  UseUnMountStart: 'UseUnMountStart',
  UseUnMountContent: 'UseUnMountContent',
  UseUnMountEnd: 'UseUnMountEnd',
  UseStateUpdateStart: 'UseStateUpdateStart',
  UseStateUpdateContent: 'UseStateUpdateContent',
  UseStateUpdateEnd: 'UseStateUpdateEnd',
  UseImperativeHandleStart: 'UseImperativeHandleStart',
  UseImperativeHandleContent: 'UseImperativeHandleContent',
  UseImperativeHandleEnd: 'UseImperativeHandleEnd',
};

export const MODAL_CHUNK_NAME = {
  OnOk: 'ModalEventOnOk',
  OnCancel: 'ModalEventOnCancel',
  ImperativeHandle: 'ModalEventUseImperativeHandle',
  PageDidMount: 'PageDidMount',
  PageStateChange: 'PageStateChange',
  PageWillUnmount: 'PageWillUnmount',
  PageEndRequest: 'PageEndRequest',
};

export const BOFRAMER_CHUNK_NAME = {
  SetMapState: 'BOFramerSetState',
  ControlVisible: 'ControlVisible',
};

export const CUSTOM_ACTION_CHUNK_NAME = {
  Map: 'CustomActionMap',
  ImperativeHandle: 'CustomActionMapUseImperativeHandle',
  DidMount: 'DidMount',
  WillUnmount: 'WillUnmount',
};

export const DATA_SOURCE_CHUNK_NAME = {
  CallDataSource: 'CallDataSource',
  CallGlobalDataSource: 'CallGlobalDataSource',
};
export const PAGE_TOOL_CHUNK_NAME = {
  PageTooL: 'PageTooL',
  UseSuperObjectHook: 'UseSuperObjectHookCall',
  useMergeContextCallHook: 'useMergeContextCallHook',
  PageHookFile: 'PageHookFile',
  CallContainerHook: 'CallContainerHook',
  CallUsePageFormHook: 'CallUsePageFormHook',
};
