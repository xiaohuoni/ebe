import {
  IScope,
  PIECE_TYPE,
  CodePiece,
  NodePlugin,
  NodeGeneratorConfig,
  IProjectSchema,
  LXProjectOptions,
} from '../../../../../core/types';

export default function hackEngineApis(
  nodeItem: IProjectSchema,
  scope: IScope,
  config?: NodeGeneratorConfig,
  next?: NodePlugin,
): CodePiece[] {
  let pieces: CodePiece[] = next ? next(nodeItem, scope, config) : [];
  const nodeTags =
    pieces[0] && pieces[0].type === 'NodeCodePieceTag' ? pieces[0].value : '';
  const ignoreTags = ['div'];
  if (!ignoreTags.includes(nodeTags)) {
    if (!['Popover'].includes(nodeTags)) {
      pieces.push({
        type: PIECE_TYPE.ATTR,
        value: `ref={(r:any)=>refs['${nodeItem.id}'] = r}`,
      });
    }
    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: '{...injectData}',
    });
  } else {
    // 页面容器可能会传 style
    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: 'style={style}',
    });
  }

  // 如果是业务组件要改名字
  if (nodeTags === 'BOFramer') {
    const { options = {} } = config!;
    const { busiCompMapping = {} } = options as LXProjectOptions;
    pieces[0].value = `BusiComp${busiCompMapping[nodeItem?.props?.busiCompId]}`;
  }
  // 如果是CardHeader要改成 Card.Header，另外依赖分析那边 import 要过滤
  if (nodeTags === 'CardHeader') {
    pieces[0].value = `Card.Header`;
  }
  // 循环容器 和 动态待办
  if (
    nodeTags === 'Loop' ||
    nodeTags === 'DynamicList' ||
    nodeTags === 'LoadMore' ||
    nodeTags === 'BlockSelect' ||
    nodeTags === 'DformList' ||
    // PC
    nodeTags === 'LoopList'
  ) {
    // Loop 不需要孩子
    pieces = pieces.filter((i) => i.type !== 'NodeCodePieceChildren');
    let LoopchildrenStr = '';
    if (nodeItem.components && config?.self) {
      // @ts-ignore
      LoopchildrenStr = config.self(nodeItem.components, scope);
    }
    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: `getEngineApis={() => {
        return {
          ...injectData.getEngineApis(),
          MemoRenderer: {
            renderer: null,
            MemoLoopItem: (props: any) => {
              const item = props[props.itemKey] ?? props?.item;
              const i = props[props.indexKey] ?? props?.i;
              return (<>${LoopchildrenStr}</>)
            },
          },
        };
      }}`,
    });
  }
  // 舍弃不渲染
  const blackComponents = ['DTalkView'];
  if (blackComponents.includes(nodeTags)) {
    return [];
  }
  return pieces;
}
