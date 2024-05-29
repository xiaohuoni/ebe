import { EngineApisType } from '@lingxiteam/types';
import React, { FC, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { getExportDefaultObj } from './getExportDefaultObj';

export function isAtLeastReact17(version: string): boolean {
  const major = version.match(/^([^.]+)/);
  return major !== null && parseInt(major[0], 10) >= 17;
}

const withErrorBoundary = (
  Component: React.ComponentType,
  options: {
    id: string;
    render?: (error: Error, componentStack: string | null) => React.ReactNode;
  },
) =>
  class CustomErrorModule extends React.Component {
    state: Readonly<{
      error: Error | null;
      componentStack: string | null;
    }> = {
      error: null,
      componentStack: null,
    };

    componentDidCatch(
      error: Error & { cause?: Error },
      { componentStack }: React.ErrorInfo,
    ) {
      if (isAtLeastReact17(React.version)) {
        const errorBoundaryError = new Error(error.message);
        errorBoundaryError.name = `React ErrorBoundary ${errorBoundaryError.name}`;
        errorBoundaryError.stack = componentStack;
        error.cause = errorBoundaryError;
      }

      this.setState({ error, componentStack });
    }

    render(): React.ReactNode {
      const { error, componentStack } = this.state;
      if (error) {
        if (typeof options.render === 'function') {
          return options.render(error, componentStack);
        }

        console.error(`组件${options.id}自定义渲染时出错：`, error);
        console.error(`组件${options.id}自定义渲染时出错：`, componentStack);
        return null;
      }

      return <Component {...this.props} />;
    }
  };

interface CustomModuleProps {
  /**
   * 代码
   */
  code: string;

  /**
   * 组件属性
   */
  compProps: Record<string, any>;

  /**
   * 引擎能力
   */
  sandBoxLoadModule: EngineApisType['sandBoxLoadModule'];

  /**
   * 错误组件提供的信息
   */
  errorInfo: {
    // 组件id
    id: string;

    /**
     * 自定义错误渲染信息  默认只打印错误日志，不做错误展示
     * @param error
     * @param componentStack
     * @returns
     */
    render?: (error: Error, componentStack: string | null) => React.ReactNode;
  };

  /**
   * any
   */
  allowMap?: Record<string, any>;
}

const CustomModule: FC<CustomModuleProps> = ({
  sandBoxLoadModule,
  code,
  compProps,
  errorInfo,
  allowMap,
}) => {
  // 加载到组件模块
  const Component = useMemo(() => {
    if (!code) {
      return null;
    }
    const module = sandBoxLoadModule(code, { allowMap });
    return withErrorBoundary(getExportDefaultObj(module), errorInfo);
  }, [code]);

  return Component ? <Component {...compProps} /> : null;
};

export const getJSXHtml = (
  reactNode: React.ReactElement,
  cb?: (html: string) => void,
  options: { id?: string } = {},
) => {
  const { id = `__JSX_id__${Math.random()}` } = options || {};
  let tempDOM = document.getElementById(id);
  if (!tempDOM) {
    tempDOM = document.createElement('jsx');
    tempDOM.style.display = 'none';
    tempDOM.id = id;
    document.head.appendChild(tempDOM);
  }

  ReactDOM.render(reactNode, tempDOM, () => {
    cb?.(tempDOM?.innerHTML || '');
    tempDOM?.remove();
  });
};

export default CustomModule;
