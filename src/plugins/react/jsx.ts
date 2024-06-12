import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
  IScope,
  NodeGeneratorConfig,
  NodePlugin,
} from '../../core/types';
import { createReactNodeGenerator } from '../../core/utils/nodeToJSX';
import { Scope } from '../../core/utils/Scope';
import { getImportFrom } from '../../utils/depsHelper';
import { REACT_CHUNK_NAME } from './const';

export interface PluginConfig {
  fileType?: string;
  nodeTypeMapping?: Record<string, string>;
  nodePlugins?: NodePlugin[];
}

const pluginFactory: BuilderComponentPluginFactory<PluginConfig> = (
  config?,
) => {
  const cfg = {
    fileType: FileType.TSX,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    nodeTypeMapping: {} as Record<string, string>,
    ...config,
  };

  const { nodeTypeMapping } = cfg;

  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IContainerInfo;
    const generatorPlugins: NodeGeneratorConfig = {
      ...cfg,
      tagMapping: (v) => nodeTypeMapping[v] || v,
      ...next.contextData,
      ir,
    };
    const generator = createReactNodeGenerator(generatorPlugins);

    const scope: IScope = Scope.createRootScope();
    let jsxContent = generator(ir, scope);
    const isModal = ir.pageContainerType === 'Modal';
    const isBrawer = ir.pageContainerType === 'Drawer';
    if (isModal || isBrawer) {
      next.ir.deps.push(getImportFrom('antd', isModal ? 'Modal' : 'Drawer'));
      // {
      //   path: '/tanchuang',
      //   fileName: '/tanchuang',
      //   type: '/tanchuang',
      //   pageId: '1117744049718599680',
      //   width: 624,
      //   closeOnClickOverlay: false,
      //   pageContainerType: 'Modal',
      //   pageName: '弹窗',
      //   customWidth: 624,
      //   customHeight: 500,
      // }
      const pageInst = ir?.modalDrawData;
      const mdProps: any = {
        title: pageInst.modalTitle || pageInst.pageName,
        width:
          pageInst.width === 'custom'
            ? pageInst.customWidth || 624
            : pageInst.width,
        height:
          pageInst.width === 'custom'
            ? pageInst.customHeight || 'auto'
            : pageInst.height,
        okText: pageInst.okText,
        cancelText: pageInst.cancelText,
        placement: pageInst.placement || 'right',
        maskClosable: pageInst.closeOnClickOverlay !== false,
      };
      if (pageInst.footer === 0) {
        mdProps.footer = null;
      }
      const footerStr =
        pageInst.footer === 0
          ? 'footer={null}'
          : isBrawer
          ? `footer={<div className="ant-drawer-footer-button">
  <Button onClick={() => {
    // onCancel为内置取消处理函数，用于关闭弹窗
    // @ts-ignore
    if (onCancel !== false && onCancel) {
      onCancel();
    }
  }}>
    {${
      mdProps.cancelText
        ? mdProps.cancelText
        : `getLocale('cancelText', '取消')`
    } }
  </Button>
  <Button onClick={onOk} type="primary">
    {${mdProps.okText ? mdProps.okText : `getLocale('okText', '确认')`} }
  </Button>
</div>}`
          : '';

      jsxContent = `<${ir.pageContainerType}
      title='${mdProps.title}'
    ${mdProps.width ? `width='${mdProps.width}'` : ''}
    ${mdProps.height ? `height='${mdProps.height}'` : ''}
    ${mdProps.okText ? `okText='${mdProps.okText}'` : ''}
    ${mdProps.cancelText ? `cancelText='${mdProps.cancelText}'` : ''}
    ${mdProps.placement ? `placement='${mdProps.placement}'` : ''}
    maskClosable={${mdProps.maskClosable}}
    ${footerStr}
      open={props.visible}
      destroyOnClose
      className='${isModal ? 'ued-modal-wrap' : 'ued-drawer-wrap'}'
      onOk={onOk}
      onCancel={() => {
        // onCancel为内置取消处理函数，用于关闭弹窗
        // @ts-ignore
        if (onCancel !== false && onCancel) {
          onCancel();
        }
      }}
    >
${
  isModal
    ? `<div
style={
  ${JSON.stringify(
    pageInst.height
      ? {
          height: pageInst.height,
          overflow: 'auto',
        }
      : {
          overflowX: 'auto',
        },
  )}}
>`
    : ''
}${jsxContent}${isModal ? '</div>' : ''}
</${ir.pageContainerType}>`;
    }
    // next.ir.deps.push(getImportFrom('react', 'useRef'));
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: cfg.fileType,
      name: REACT_CHUNK_NAME.RenderJSX,
      content: `${jsxContent}`,
      linkAfter: [REACT_CHUNK_NAME.RenderStart, REACT_CHUNK_NAME.RenderPre],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
