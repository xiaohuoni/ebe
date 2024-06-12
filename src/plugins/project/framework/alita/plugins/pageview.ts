import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../core/types';

const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as any;
    if (!ir.routes) {
      return next;
    }
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `
      import React, { useRef, useImperativeHandle } from 'react';
      import { useAppData } from 'alita';
        import { parse } from 'qs';
        import useListenProps from '@/hooks/useListenProps';
        import { Hoc } from '@/components/factory';
        import { useTopContainerHidden } from '@/utils/Context/Container';
        import { useHiddenStyle } from '@/utils/hooks';
        import classNames from 'classnames';
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
    });
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.FileVarDefine,
      content: `
      export const pageStaticData:any = {
        ${Object.keys(ir.pageStaticData)
          ?.map(
            (pageId: any) =>
              ` '${pageId}':${JSON.stringify(ir.pageStaticData[pageId])}`,
          )
          .join(',')}
      }
      const pageRouteMapping: any = {${ir.routes?.map(
        (r: any) => `'${r.pageId}':'${r.path}'`,
      )}}
        const P = (props: any) => <div>{props?.pageSrc} 页面未找到</div>;
        export const getSafePage = (target: string, routeComponents: any) => {
          let path = target;
          // 支持传进来的是 pageId
          if (!target.startsWith('/')) {
            path = pageRouteMapping[target] ?? target;
          }
          return routeComponents[path] ?? P;
        };
        const getPage = (target: string, clientRoutes: any, routeComponents: any) => {
          const { routes = [] } = clientRoutes[0];
          let path = target;
          // 支持传进来的是 pageId
          if (!target.startsWith('/')) {
            path = pageRouteMapping[target] ?? target;
          }
          const route = routes.find((r: any) => \`/\${r.path}\` === path);
          return routeComponents[route?.id] ?? P;
        };
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `

      export function parseSrc(src: string = ''): [string, any] {
        const arr = src?.split('?') as string[];
        return [arr[0], parse(arr[1])];
      }
      // 页面容器
      const Pageview = React.forwardRef<any, any>((props, ref) => {
        const { className, visible, style } = props;
        const { clientRoutes, routeComponents } = useAppData();
        const [pageState, setPageState] = useListenProps(props?.state);
        const [pageSrc, setPageSrc] = useListenProps(props?.pageSrc);

        // 页面 src 可能是带参数的如 /a?b=1&c=2
        const [path, query] = parseSrc(pageSrc);
        const pageRef = useRef<any>();
        const Page = getPage(path, clientRoutes, routeComponents);
        const isDid = useRef(false);
        // 获取上层容器是否被隐藏
        // 获取上层容器是否被隐藏
        const topHidden = useTopContainerHidden();
        const hiddenStyle = useHiddenStyle(visible, style);
        React.useImperativeHandle(ref, () => ({
          renderId: props.$$componentItem.uid,
          get customActionMap () {
            return pageRef.current?.customActionMap || {};
          },
          setPageSrc(pathname?: string, state?: any){
            if (pathname) {
              setPageSrc(pathname);
            }
            if (state) {
              setPageState(state);
            }
          }
        }))

        if (!Page) {
          return null;
        }
        
        if (isDid.current !== true) {
          // 如果上层隐藏，就不要渲染，加载接口等
          if (topHidden || !props.visible) {
            return null;
          }
        }
        isDid.current = true;
        return (
          <div
          className={classNames('lcdp-pageview', \`\${className}\`)}
          style={hiddenStyle}
        >
          <Page
            {...props}
            extraUrlParam={query}
            state={{ ...pageState, ...query }}
            ref={pageRef}
          />
          </div>
        );
      });
      // 普通页面
      export const PageComent = React.forwardRef<any, any>((props, ref) => {
        const { clientRoutes, routeComponents } = useAppData();
        // const pageRef = React.useRef<any>();
        // 页面 src 可能是带参数的如 /a?b=1&c=2
        const [path] = parseSrc(props?.pageSrc);
        const Page = getPage(path, clientRoutes, routeComponents);
        // React.useImperativeHandle(ref, () => ({
        //   get customActionMap() {
        //     return pageRef.current?.customActionMap;
        //   },
        //   onOk: () => {
        //     return pageRef.current?.onOk();
        //   },
        //   onCancel: () => {
        //     return pageRef.current?.onCancel();
        //   },
        // }));
        return <Page {...props} ref={ref} />;
      });
      export default Hoc(Pageview, { type: 'Pageview', // 容器类组件标识 \n isContainer: true });
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.FileUtilDefine,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileMainContent,
      ],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
