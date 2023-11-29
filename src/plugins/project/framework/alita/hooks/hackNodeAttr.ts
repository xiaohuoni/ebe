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
    // TODO: 反正好奇怪，再塞一个 ref
    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: `ref={(r:any)=>refs['${nodeItem.id}'] = r}`,
    });
    // TODO: 注入属性，直接这么传好怪，但是要写 with Component 感觉更怪
    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: '{...injectData}',
    });
  }
  // 如果是业务组件要改名字
  if (nodeTags === 'BOFramer') {
    const { options = {} } = config!;
    const { busiCompMapping = {} } = options as LXProjectOptions;
    pieces[0].value = `BusiComp${busiCompMapping[nodeItem?.props?.busiCompId]}`;
  }
  if (nodeTags === 'Loop') {
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
              const item = props[props.itemKey];
              return (${LoopchildrenStr})
            },
          },
        };
      }}`,
    });
  }
  return pieces;
}
