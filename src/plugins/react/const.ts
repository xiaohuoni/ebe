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
};

export const CUSTOM_ACTION_CHUNK_NAME = {
  Map: 'CustomActionMap',
  ImperativeHandle: 'CustomActionMapUseImperativeHandle',
};

export const DATA_SOURCE_CHUNK_NAME = {
  CallDataSource: 'CallDataSource'
}
