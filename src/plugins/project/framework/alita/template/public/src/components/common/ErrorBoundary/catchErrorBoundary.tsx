import * as React from 'react';

export function isAtLeastReact17(version: string): boolean {
  const major = version.match(/^([^.]+)/);
  return major !== null && parseInt(major[0], 10) >= 17;
}
let eventId = 0;
// 简单实现
function captureException() {
  return `${(eventId += 1)}`;
}
export const UNKNOWN_COMPONENT = 'unknown';

export type FallbackRenderProps = {
  error: Error;
  componentStack: string | null;
  eventId: string | null;
  resetError(): void;
  id: string;
  compName: string;
  getLocale: (
    key: string,
    placeholder?: string,
    kv?: Record<string, string>,
  ) => string;
};

export type FallbackRender = (
  errorData: FallbackRenderProps,
) => React.ReactElement;

export type ErrorBoundaryProps = {
  /**
   * A fallback component that gets rendered when the error boundary encounters an error.
   *
   * Can either provide a React Component, or a function that returns React Component as
   * a valid fallback prop. If a function is provided, the function will be called with
   * the error, the component stack, and an function that resets the error boundary on error.
   *
   */
  fallback?: React.ReactElement | FallbackRender;

  /** Called when the error boundary encounters an error */
  onError?(error: Error, componentStack: string, eventId: string): void;

  /** Called on componentDidMount() */
  onMount?(): void;

  /** Called if resetError() is called from the fallback render props function  */
  onReset?(
    error: Error | null,
    componentStack: string | null,
    eventId: string | null,
  ): void;

  /** Called on componentWillUnmount() */
  onUnmount?(
    error: Error | null,
    componentStack: string | null,
    eventId: string | null,
  ): void;

  /** Called before the error is captured by Sentry, allows for you to add tags or context using the scope */
  beforeCapture?(
    scope: any,
    error: Error | null,
    componentStack: string | null,
  ): void;
  children?: React.ReactNode | (() => React.ReactNode);

  otherProps?: Record<string, any>;
};

type ErrorBoundaryState = {
  componentStack: Required<React.ErrorInfo>['componentStack'] | null;
  error: Error | null;
  eventId: string | null;
};

const INITIAL_STATE = {
  componentStack: null,
  error: null,
  eventId: null,
};

/**
 * A ErrorBoundary component that logs errors to Sentry. Requires React >= 16.
 * NOTE: If you are a Sentry user, and you are seeing this stack frame, it means the
 * Sentry React SDK ErrorBoundary caught an error invoking your application code. This
 * is expected behavior and NOT indicative of a bug with the Sentry React SDK.
 */
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = INITIAL_STATE;

  static defaultProps = {
    otherProps: {},
  };

  public componentDidMount(): void {
    const { onMount } = this.props;
    if (onMount) {
      onMount();
    }
  }

  public componentWillUnmount(): void {
    const { error, componentStack, eventId } = this.state;
    const { onUnmount } = this.props;
    if (onUnmount) {
      onUnmount(error, componentStack, eventId);
    }
  }

  public resetErrorBoundary: () => void = () => {
    const { onReset } = this.props;
    const { error, componentStack, eventId } = this.state;
    if (onReset) {
      onReset(error, componentStack, eventId);
    }
    this.setState(INITIAL_STATE);
  };

  public componentDidCatch(
    error: Error & { cause?: Error },
    { componentStack }: React.ErrorInfo,
  ): void {
    const { beforeCapture, onError } = this.props;

    // If on React version >= 17, create stack trace from componentStack param and links
    // to to the original error using `error.cause` otherwise relies on error param for stacktrace.
    // Linking errors requires the `LinkedErrors` integration be enabled.
    if (isAtLeastReact17(React.version)) {
      const errorBoundaryError = new Error(error.message);
      errorBoundaryError.name = `React ErrorBoundary ${errorBoundaryError.name}`;
      // @ts-ignore
      errorBoundaryError.stack = componentStack;

      // Using the `LinkedErrors` integration to link the errors together.
      error.cause = errorBoundaryError;
    }

    if (beforeCapture) {
      // @ts-ignore
      beforeCapture(null, error, componentStack);
    }
    const eventId = captureException();
    if (onError) {
      // @ts-ignore
      onError(error, componentStack, eventId);
    }

    // componentDidCatch is used over getDerivedStateFromError
    // so that componentStack is accessible through state.
    // @ts-ignore
    this.setState({ error, componentStack, eventId });
  }

  public render(): React.ReactNode {
    // @ts-ignore
    const { fallback, children, otherProps } = this.props;
    const { error, componentStack, eventId } = this.state;

    if (error) {
      let element: React.ReactElement | undefined;
      if (typeof fallback === 'function') {
        // @ts-ignore
        element = fallback({
          error,
          componentStack,
          resetError: this.resetErrorBoundary,
          eventId,
          ...otherProps,
        });
      } else {
        element = fallback;
      }

      if (React.isValidElement(element)) {
        return element;
      }

      if (fallback) {
        console.warn('fallback did not produce a valid ReactElement');
      }

      // Fail gracefully if no fallback provided or is not valid
      return null;
    }

    if (typeof children === 'function') {
      return children();
    }
    return children;
  }
}

/**
 * 渲染错误边界处理
 * @param WrappedComponent 组件监听
 * @returns
 */
export function catchErrorBoundary<T>(
  WrappedComponent: React.ComponentClass<T> | React.FunctionComponent<T>,
  fallback?: ErrorBoundaryProps['fallback'],
  schema?: Record<string, any>,
) {
  return React.forwardRef<any, any>((props, ref) => {
    return (
      <ErrorBoundary fallback={fallback} otherProps={{ schema }}>
        <WrappedComponent {...props} ref={ref} />
      </ErrorBoundary>
    );
  });
}
