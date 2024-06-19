import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'useMergeContext',
    'ts',
    `
import { useContext, useMemo, useRef } from 'react';
import { history } from 'alita';
import { parse } from 'qs';
import BannerModal from '@/components/common/BannerModal';
import { api } from '@/services/api';
import { useTopContainerHidden } from '@/utils/Context/Container';
import { i18n } from '@/utils/i18n';
import locales from '@/utils/i18n/locales';
import { getStateListener } from '@/utils/StateListener';
import { Context } from '@/utils/Context/context';
import lcdpApi from '@/utils/lcdpApi';
import { sandBoxLoadModule } from '@/utils/sandBoxLoadModule';
import Sandbox from '@/utils/sandbox';
import * as functorsMap from '@/utils/functors';
import { messageApi } from '@/utils/messageApi';
import AwaitHandleData from '@/utils/AwaitHandleData';
import { appInfo } from '@/utils/attrSpecPage';
import { useLocation } from 'alita';


// 设置默认属性
BannerModal.defaultProps = {
  // @ts-ignore 
  api,
};

const getStaticDataSourceService = (
  ds: any[],
  labelKey: string,
  valueKey: string,
) => {
  if (!ds?.length) return [];
  if (!labelKey || !valueKey) return ds;
  return ds.map((item) => ({
    label: item[labelKey],
    value: item[valueKey],
  }));
};

/**
 * 获取信息
 */
export const useGetPageInfo = (props: Record<string, any>) => {
  const location = useLocation();

    /**
     * url参数
     */
    const urlParam = useMemo(() => {
      const queryParams = parse((location?.search ?? '?')?.split('?')[1]);
      return {
        ...queryParams,
        ...props.urlParam,
      };
    }, [props.urlParam]);

      const routerData = useMemo(() => 
    history?.location?.state ||
    JSON.parse(window.sessionStorage.getItem(urlParam._k) || '{}'), [])


    return {
      urlParam,
      lcdpApi,
      routerData,
      addToAwaitQueue: (
        compId: string,
        functionName: string,
        ...args: any[]
      ) => props.awaitHandleData.addToAwaitQueue(compId, functionName, ...args)
  }
}

/**
 * 生成基础上下文
 * @param baseContext
 */
const useMergeContext = (
  props: Record<string, any>,
  basicContext: Record<string, any> = {},
) => {

  // 指令定时器存储
  const actionTimerRef = useRef<Record<string, any>>({
    timeout: {},
    interval: {},
  });

  const { getLocaleLanguage, getLocale, getLocaleEnv, locale, language } =
      i18n.useLocale(
        {
          locale: props.i18n?.locale!,
          remoteLocale: props.i18n?.remoteLocale,
          language: props.i18n?.language!,
          configLocale: {},
        },
        locales,
    );
  
  const {
    ModalManagerRef,
    appId,
    attrDataMap,
  } = useContext(Context);

  // 清除定时器
  const clearActionTimer = (timerName: string) => {
    const actionTimer = actionTimerRef.current;
    if (actionTimer.interval?.[timerName]) {
      clearInterval(actionTimer.interval[timerName]);
      actionTimer.interval[timerName] = null;
    }
    if (actionTimer.timeout?.[timerName]) {
      clearTimeout(actionTimer.timeout[timerName]);
      actionTimer.timeout[timerName] = null;
    }
  };

  // 增加指令定时器
  const addActionTimer = (
    type: 'interval' | 'timeout' = 'timeout',
    timerName: string,
    callback: () => void,
    time: number = 0,
  ) => {
    const actionTimer = actionTimerRef.current;
    clearActionTimer(type);
    const delay = time > 0 ? +time : 0;
    if (type === 'interval') {
      actionTimer.interval[timerName] = setInterval(() => {
        callback?.();
      }, delay);
    }
    if (type === 'timeout') {
      actionTimer.interval[timerName] = setTimeout(() => {
        callback?.();
      }, delay);
    }
  };

const sandBoxRun = (
    code: string,
    extendAllowMap: Record<string, any> = {},
  ) => {
    return Sandbox.run(code, {
      ...context,
      ...extendAllowMap,
    });
  };

  const sandBoxSafeRun = (
    code: string,
    extendAllowMap: Record<string, any> = {},
  ) => {
    try {
      return sandBoxRun(code, extendAllowMap);
      // eslint-disable-next-line no-empty
    } catch {}
    return undefined;
  }

  const context: Record<string, any> = {
    ...basicContext,
    clearActionTimer,
    addActionTimer,
    api,
    ModalManagerRef,
    attrDataMap,
    functorsMap,
    messageApi,
    routerData:
    getStaticDataSourceService,
    // closeModal: (modalId: string) => {
    //   ModalManagerRef.current?.closeModal(modalId, basicContext.renderId);
    // },
    lcdpParentRenderId: props.lcdpParentRenderId,
    sandBoxRun,
    sandBoxSafeRun,
    appInfo,
  };
  
  return {
    context,
    getEngineApis: () => {
      return {
        compatConfig: {},
        BannerModal,
        stateListener: getStateListener(basicContext.renderId),
        ...api,
        downloadFileByFileCode: () => null,
        downloadByFileId: () => null,
        getLocaleLanguage,
        getLocale,
        getLocaleEnv,
        locale,
        language,
        useTopContainerHidden,
        // 打开弹窗能力
        openModal: (data: any) =>
          ModalManagerRef.current?.openModal({
            appId,
            ...data,
          }),
        getVisible: (compId: string) => {
          // @ts-ignore
          return context.refs?.[compId]?.visible;
        },
        sandBoxLoadModule: (
          code: string,
          options?: {
            dependencies?: Record<string, any>;
            allowMap?: Record<string, any>;
          },
        ) => {
          return sandBoxLoadModule(code, context, undefined, options);
        },
        sandBoxRun,
        sandBoxSafeRun,
        service: {
          ...api,
        },
      };
    },
  };
};

export default useMergeContext;


`,
  );

  return [['src', 'hooks'], file];
}
