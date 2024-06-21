import React from 'react';
import { $$componentItem } from '../interfaces/types';

export interface ComponentProps {
  $$componentItem?: $$componentItem;
  [key: string]: any;
}

function defaultTransformProps(props: ComponentProps) {
  const { basicStatus, fieldName, name, ...restProps } = props;
  const newProps = {
    fieldProps: fieldName,
    title: name,
    ...(restProps as any),
    status: `${basicStatus}`,
  };
  return newProps;
}

const withTransformProps = (
  Componnent: React.FC<any>,
  transformProps: (props: any) => any = defaultTransformProps,
) => {
  const WrappedComponent: React.FC<ComponentProps> = (props) => {
    const { forwardedRef, ...rest } = props;
    const newProps = rest?.$$componentItem?.fusionMode
      ? transformProps(rest)
      : rest;
    return <Componnent ref={forwardedRef} {...newProps} />;
  };
  return React.forwardRef((props: ComponentProps, ref) => {
    return <WrappedComponent {...props} forwardedRef={ref} />;
  });
};

export { withTransformProps };
