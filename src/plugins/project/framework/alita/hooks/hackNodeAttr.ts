import { LOOPCOMPONENTS, LoopMarkSymbol } from '../../../../../constants';
import {
  CodePiece,
  IProjectSchema,
  IScope,
  LXProjectOptions,
  NodeGeneratorConfig,
  NodePlugin,
  PIECE_TYPE,
} from '../../../../../core/types';
import { getBusiCompName } from '../../../../../utils/schema/getBusiCompName';
import { generateUid } from '../../../../../utils/schema/lxschema';

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
  const { options = {} } = config!;
  const { compAssetList = [], busiCompMapping = {} } =
    options as LXProjectOptions;
  const compAssetListMapping: Record<string, any> = {};
  compAssetList.forEach((asset: any) => {
    compAssetListMapping[asset.compCode] = asset;
  });
  if (!ignoreTags.includes(nodeTags)) {
    if (!['Popover'].includes(nodeTags)) {
      pieces.push({
        type: PIECE_TYPE.ATTR,
        value: `ref={(r:any)=>setComponentRef(r, ${generateUid(nodeItem)})}`,
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
      value: 'style={{ height: "100%", ...style }}',
    });

    // 根据页面类型不同，渲染不同的id
    let renderCls = `lcdp-renderer lcdp-renderer-dynamicPage-view_box dynamic_page_${nodeItem.pageId}`;
    if (nodeItem.pageContainerType === 'BusiComp') {
      renderCls = `dynamic_boframer dynamic_boframer_${nodeItem.busiCompId}, dynamic_page_${nodeItem.busiCompId}`;
    }

    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: `className="${renderCls} __CustomClass_${nodeItem.id}__"`,
    });
  }
  // 如果是业务组件要改名字
  if (nodeTags === 'BOFramer') {
    pieces[0].value = getBusiCompName(busiCompMapping, nodeItem);
    // 业务组件的 pageId 来自 页面
    pieces.unshift({
      type: PIECE_TYPE.ATTR,
      value: `lcdpParentRenderId={renderId}`,
    });
  }
  if (nodeTags === 'TabPane' || nodeTags === 'CollapsePanel') {
    pieces.unshift({
      type: PIECE_TYPE.ATTR,
      value: `schema={{ props :{ key: '${
        nodeItem?.props?.key
      }' },style:${JSON.stringify(nodeItem?.style)}}}`,
    });
  }
  // 如果是CardHeader要改成 Card.Header，另外依赖分析那边 import 要过滤
  if (nodeTags === 'CardHeader') {
    pieces[0].value = `Card.Header`;
  }
  // 如果是 Form 给孩子打上标记 isFormRootChild
  if (nodeTags === 'Form') {
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
  // uid 全加了
  // if (nodeTags === 'CollapsePanel') {
  //   pieces.push({
  //     type: PIECE_TYPE.ATTR,
  //     value: `uid='${nodeItem?.id}'`,
  //   });
  // }
  // 循环容器 和 动态待办
  if (LOOPCOMPONENTS.includes(nodeTags)) {
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
    const otherParams = [
      { name: 'item', item: true },
      { name: 'i', item: false },
    ];
    if (
      // @ts-ignore
      nodeItem?.props?.itemKey &&
      // @ts-ignore
      nodeItem?.props?.itemKey !== 'item'
    ) {
      // @ts-ignore
      otherParams.push({ name: nodeItem?.props?.itemKey, item: true });
    }
    if (
      // @ts-ignore
      nodeItem?.props?.indexKey &&
      // @ts-ignore
      nodeItem?.props?.indexKey !== 'i'
    ) {
      // @ts-ignore
      otherParams.push({ name: nodeItem?.props?.indexKey, item: false });
    }

    const uidPiece = () => { 
      if (nodeItem[LoopMarkSymbol]?.loopType === 'innerLayer') {
        return `
         itemId = item?.[props.itemKey] || i;
        compId = getUid(compId, itemId, props.$$componentItem.id);
        `;
      }

      return `
      let compId = '${nodeItem.id}';
      let itemId = item?.[props.itemKey] || i;
      `;
    }

    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: `getEngineApis={() => {
        return {
          ...injectData.getEngineApis(),
          MemoRenderer: {
            renderer: null,
            MemoLoopItem: (props: any) => {
              ${otherParams
                .map(
                  (i) =>
                    `const ${i.name} = props[props.${
                      i.item ? 'itemKey' : 'indexKey'
                    }] ?? props?.${i.item ? 'item' : 'i'};`,
                )
                .filter(Boolean)
                .join(' ')}
              ${uidPiece()}
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

  // Pageview 容器组件需要塞入  lcdpParentRenderId={'1024261720265998336'}
  // Popover 组件里面可能用到 Pageview 所以也应该透传 parentEngineId
  if (nodeTags === 'Pageview' || nodeTags === 'Popover') {
    pieces.push({
      type: PIECE_TYPE.ATTR,
      value: `lcdpParentRenderId={parentEngineId}`,
    });
  }
  // className='View_View_938709'
  if (nodeTags === 'View') {
    if (!nodeItem?.props?.className) {
      pieces.unshift({
        type: PIECE_TYPE.ATTR,
        value: `className='View_${nodeItem?.id}'`,
      });
    }
  }

  // 如果是自定义组件要改名字
  if (compAssetListMapping[nodeTags]) {
    pieces[0].value = 'CustomComponent';
    pieces.unshift({
      type: PIECE_TYPE.ATTR,
      value: `type="${nodeTags}"`,
    });
    pieces.unshift({
      type: PIECE_TYPE.ATTR,
      value: `fileCode="${compAssetListMapping[nodeTags]?.engineFileCode}"`,
    });
  }
  return pieces;
}
