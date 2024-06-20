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
import { parse2Var } from '../../core/utils/compositeType';
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
    const isModal =
      ir.pageContainerType === 'Modal' ||
      ir.pageContainerType === 'MobileModal';
    const isDrawer = ir.pageContainerType === 'Drawer';
    const isMobile = ir?.platform === 'h5';
    if (isModal || isDrawer) {
      if (isMobile) {
        next.ir.deps.push(getImportFrom('@/utils/Modal/Modal', 'Modal', false));
      } else {
        next.ir.deps.push(getImportFrom('antd', isModal ? 'Modal' : 'Drawer'));
      }

      const shouldUsedOnOk = () => {
        if (!isModal || !ir.events?.onOk) return '';
        return `onOk={onOk}`;
      };

      const shouldUsedOnCancel = () => {
        if (!isModal || !ir.events?.onOk) return '';
        return `onCancel={() => {
          // onCancel为内置取消处理函数，用于关闭弹窗
          // @ts-ignore
          if (onCancel !== false && onCancel) {
            onCancel();
          }
        }}`;
      };
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
        title: pageInst.modalTitle || pageInst.drawerTitle || pageInst.pageName,
        width:
          pageInst.width === 'custom'
            ? `${pageInst.customWidth}px` || 624
            : `${pageInst.width}px`,
        maskClosable: pageInst.closeOnClickOverlay !== false,
      };
      if (isModal) {
        mdProps.okText = pageInst.okText;
        mdProps.cancelText = pageInst.cancelText;
      }
      if (isMobile) {
        mdProps.width = pageInst.width;
        mdProps.height = pageInst.height;
        mdProps.mode = pageInst.mode;
        mdProps.mode = pageInst.mode;
        mdProps.showCloseButton = pageInst.showCloseButton;
        mdProps.closeOnClickOverlay = pageInst.closeOnClickOverlay;
        delete mdProps.maskClosable;
      }
      if (isDrawer) {
        mdProps.placement = pageInst.placement || 'right';
        mdProps.height =
          pageInst.width === 'custom'
            ? `${pageInst.customHeight}px` || 'auto'
            : `${pageInst.height}px`;
      }
      if (pageInst.footer === 0) {
        mdProps.footer = null;
      }
      const footerStr =
        pageInst.footer === 0
          ? 'footer={null}'
          : isDrawer
          ? `footer={<div className="ant-drawer-footer-button">
          <Button
            onClick={() => {
              // onCancel为内置取消处理函数，用于关闭弹窗
              // @ts-ignore
              if (onCancel !== false && onCancel) {
                onCancel();
              }
            }}
            btnText="${mdProps.cancelText ? mdProps.cancelText : `取消`}"
          />
          <Button
            btnText="${mdProps.okText ? mdProps.okText : '确认'} "
            onClick={onOk} type="primary" />
</div>}`
          : '';
      const attrString = Object.keys(mdProps)
        .filter((i) => !!mdProps[i])
        .map((attr) => {
          if (attr === 'title') return '';
          if (typeof mdProps[attr] === 'string') {
            return `${attr}='${mdProps[attr]}'`;
          }
          return `${attr}={${mdProps[attr]}}`;
        })
        .join('\n');
      jsxContent = `<${isMobile ? 'Modal' : ir.pageContainerType}
      title=${parse2Var(mdProps.title)}
      ${isMobile ? 'closeModal={closeModal}' : ''}
    ${attrString}
    ${footerStr}
      open={props.visible}
      destroyOnClose
      className='${isModal ? 'ued-modal-wrap' : 'ued-drawer-wrap'}'
      ${shouldUsedOnOk()}
      ${shouldUsedOnCancel()}
    >
${
  isModal && !isMobile
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
}${jsxContent}${isModal && !isMobile ? '</div>' : ''}
</${isMobile ? 'Modal' : ir.pageContainerType}>`;
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
