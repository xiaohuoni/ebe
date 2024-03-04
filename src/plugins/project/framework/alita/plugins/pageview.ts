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
              ` '${modal.pageId || modal.path}':${JSON.stringify(modal)}`,
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

      const Pageview = React.forwardRef<any, any>((props, ref) => {
        const { clientRoutes, routeComponents } = useAppData();
        // 页面 src 可能是带参数的如 /a?b=1&c=2
        const [path, query] = parseSrc(props?.pageSrc);
        const Page = getPage(path, clientRoutes, routeComponents);
        return <Page ref={ref} {...query} {...props} />;
      });
      export default Pageview;
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
