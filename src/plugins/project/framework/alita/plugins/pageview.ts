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
      export const RootProps = {
        ${ir.models
          ?.map(
            (modal: any) =>
              ` '${modal.pageId || modal.path}':${JSON.stringify(modal)}`,
          )
          .join(',')}
      }
      const Pages: any = {
        ${ir.routes
          ?.map(
            (route: any) => ` '${route.path}': React.lazy(
              () =>
                import(
                  /* webpackChunkName: "src__pages__${route.type}__index" */ '@/pages${route.path}'
                ),
            ),
            '${route.pageId}': React.lazy(
              () =>
                import(
                  /* webpackChunkName: "${route.pageId}" */ '@/pages${route.path}'
                ),
            )`,
          )
          .join(',')}
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

      const P = (props: any) => <div>{props?.pageSrc} 页面未找到</div>;
      const Pageview = (props: any) => {
        // 页面 src 可能是带参数的如 /a?b=1&c=2
        const [path, query] = parseSrc(props?.pageSrc);
        const Page = Pages[path] ?? P;
        return <Page {...query} {...props} />;
      };
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
