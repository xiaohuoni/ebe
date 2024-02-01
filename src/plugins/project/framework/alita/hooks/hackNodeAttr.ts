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
    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: `className="__CustomClass_${nodeItem.id}__"`,
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
  // 如果是 Form 给孩子打上标记 isFormRootChild
  if (nodeTags === 'Form') {
    console.log('Form');
    // 先删掉孩子 再插入 isFormRootChild 再生成
    // 在 解析 dsl 那边处理或许会更好？
    pieces = pieces.filter((i) => i.type !== 'NodeCodePieceChildren');
    let LoopchildrenStr = '';
    if (nodeItem.components && config?.self) {
      // @ts-ignore
      LoopchildrenStr = config.self(
        nodeItem.components.map((item: any) => {
          // 如果被 Form 包裹的子级不是输入组件，则需要增加 schema
          if (item?.compType !== 2) {
            const schema = {
              compType: item?.compType,
              props: {
                formItemIndex: item?.props?.formItemIndex,
                style: item?.props?.style,
                selfSpan: item?.props?.selfSpan,
              },
            };
            delete item?.props?.formItemIndex;
            delete item?.props?.style;
            delete item?.props?.selfSpan;
            return {
              ...item,
              props: {
                ...item.props,
                isFormRootChild: true,
                schema,
              },
            };
          }
          return {
            ...item,
            props: {
              ...item.props,
              isFormRootChild: true,
            },
          };
        }),
      );
    }
    pieces.push({
      type: PIECE_TYPE.CHILDREN,
      value: LoopchildrenStr,
    });
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
      LoopchildrenStr = config.self(nodeItem.components, {
        ...scope,
        parent: nodeItem,
        parentType: 'Loop',
      });
    }
    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: `getEngineApis={() => {
        return {
          ...injectData.getEngineApis(),
          MemoRenderer: {
            renderer: null,
            MemoLoopItem: (props: any) => {
              const ${
                nodeItem?.props?.itemKey ?? 'item'
              } = props[props.itemKey] ?? props?.item;
              const ${
                nodeItem?.props?.indexKey ?? 'i'
              } = props[props.indexKey] ?? props?.i;
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
