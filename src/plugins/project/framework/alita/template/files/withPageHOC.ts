import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';
  const transformHasAppId = config?.transformHasAppId;
  const file = createResultFile(
    'withPageHOC',
    'tsx',
    `
import React, { useContext, useRef, useMemo } from 'react';
import ExpBusiObjModal from '@/components/common/ExpBusiObjModal';
import { createRenderId } from '@/utils/customFuncMapping';
import ImportBusiObjModal from '@/components/ImportBusiObjModal';
import ExpSQLServiceModal from '@/components/ExpSQLServiceModal';
import { PageProvider } from '@/utils/Context/Container';
import locales from '@/utils/i18n/locales';
import { i18n } from '@/utils/i18n';
import AwaitHandleData from '@/utils/AwaitHandleData';
import { Context } from './Context/context';


export interface PageProps {
  CMDGenerator?: any;
  [key: string]: any;
}
export interface PageHOCOptions {
  renderId: string;
  dataSource?: any[];
  hasLogin?: boolean;
}

export const withPageHOC = (
  WrappedComponent: React.FC<PageProps>,
  options: PageHOCOptions,
) => {
  return React.forwardRef((props: any, ref) => {
    const renderId = props?.$$componentItem?.uid ?? options.renderId;
    const refs = useRef<Record<string, any>>({}).current;

    const { refs: renerRefs, ${
      transformHasAppId ? `appId,` : ''
    } } = useContext(Context);
    const { getLocale } = i18n.useLocale(
        {
          locale: props.i18n?.locale!,
          remoteLocale: props.i18n?.remoteLocale,
          language: props.i18n?.language!,
          configLocale: {},
        },
        locales,
    );
    const ExpBusiObjModalRef = React.useRef<any>();
    const ExpSQLServiceModalRef = React.useRef<any>();
    const ImportBusiObjModalRef = React.useRef<any>();

    const awaitHandleData = useMemo(() => new AwaitHandleData(), []);
    const customActionId = useMemo(() => createRenderId(renderId), []);

    const basicContext = useMemo(() => ({
      ExpBusiObjModalRef,
      ExpSQLServiceModalRef,
      ImportBusiObjModalRef,
      refs,
      customActionId,
      renderId,
    }), []);
    return (
      <>
      <PageProvider value={{
        renderId,
        runAwaitQueue: (comId: string) => {
          awaitHandleData.runQueue(comId, refs);
        },
        registerRefs: (ref, id) => {
          if (ref) {
            // @ts-ignore
            refs[id] = ref;
          }
          renerRefs.setSystemRef(renderId, refs);
        }
      }}>
        <WrappedComponent
            {...props}
            ref={ref}
            awaitHandleData={awaitHandleData}
            basicContext={basicContext}
          />
        </PageProvider>
        ${
          isMobile
            ? ''
            : `<ExpBusiObjModal
          ref={ExpBusiObjModalRef}
          key={\`ExpBusiObjModal-\${renderId}\`}
          getLocale={getLocale}
        />`
        }
        ${
          isMobile
            ? ''
            : `<ImportBusiObjModal
      ref={ImportBusiObjModalRef}
      key={\`ImportBusiObjModal-\${renderId}\`}
       ${transformHasAppId ? `appId={appId}` : ''}
      getLocale={getLocale}
      />`
        }
    ${
      isMobile
        ? ''
        : `<ExpSQLServiceModal
      ref={ExpSQLServiceModalRef}
      key={\`ExpSQLServiceModal-\${renderId}\`}
      // TODO: 控件内部还存在需要 appId 的场景${
        transformHasAppId ? `\n appId={appId}` : ''
      }
      getLocale={getLocale}
    />`
    }
      </>
    );
  });
};
`,
  );

  return [['src', 'utils'], file];
}
