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
      import { useAppData } from 'alita';
        import { parse } from 'qs';
        import React from 'react';
        import useListenProps from '@/hooks/useListenProps';
        import { Hoc } from '../factory'
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
      export const RootProps: any  = {
        ${ir.models
          ?.map(
            (modal: any) =>
              ` '${modal.path || modal.pageId}':${JSON.stringify(modal)}`,
          )
          .join(',')}
      }
      const pageRouteMapping: any = {${ir.routes?.map(
        (r: any) => `'${r.pageId}':'${r.path}'`,
      )}}
        const P = (props: any) => <div>{props?.pageSrc} 页面未找到</div>;

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

      export function parseSrc(src?: string): [string, any] {
        const arr = src?.split('?') as string[];
        return [arr[0], parse(arr[1])];
      }
      // 页面容器
      const Pageview = React.forwardRef<any, any>((props, ref) => {
        const { clientRoutes, routeComponents } = useAppData();
        const [pageState, setPageState] = useListenProps(props?.state);
        const [pageSrc, setPageSrc] = useListenProps(props?.pageSrc);

        // 页面 src 可能是带参数的如 /a?b=1&c=2
        const [path, query] = parseSrc(pageSrc);
        const pageRef = React.useRef<any>();
        const Page = getPage(path, clientRoutes, routeComponents);

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

        return <Page {...props} extraUrlParam={query} state={{ ...pageState, ...query }} ref={pageRef} />;
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
      export default Hoc(Pageview, { type: 'Pageview' });
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
