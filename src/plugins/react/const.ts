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
};

export const MODAL_CHUNK_NAME = {
  OnOk: 'ModalEventOnOk',
  OnCancel: 'ModalEventOnCancel',
  ImperativeHandle: 'ModalEventUseImperativeHandle',
  PageDidMount:'PageDidMount',
  PageStateChange:'PageStateChange',
  PageWillUnmount:'PageWillUnmount',
  PageEndRequest:'PageEndRequest',
};

export const CUSTOM_ACTION_CHUNK_NAME = {
  Map: 'CustomActionMap',
  ImperativeHandle: 'CustomActionMapUseImperativeHandle',
  DidMount:'DidMount',
  WillUnmount:'WillUnmount',
};

export const DATA_SOURCE_CHUNK_NAME = {
  CallDataSource: 'CallDataSource',
};
export const PAGE_TOOL_CHUNK_NAME = {
  PageTooL: 'PageTooL',
};
