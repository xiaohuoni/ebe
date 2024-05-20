// @ts-ignore
import React from 'react';
import Loadable from 'react-loadable';

/**
 * 通用的加载中组件
 * @param {Object} props
 */
export const LoadingComponennt = (props: any) => {
  // console.log("加载中组件", props);
  return null;
};

const loaderHelper = (loaderRet: any, loading = LoadingComponennt) => {
  // console.log("loaderHelper", arguments);
  if (loaderRet === undefined) {
    throw new Error('请传入参数，格式： import("xxx")');
  }
  return Loadable({
    loader: () => loaderRet,
    loading,
  });
};

export const ContainerView = (Com: any) => (props: any) => {
  const { forwardedRef, ...restProps } = props;
  return <Com {...restProps} ref={forwardedRef} />;
};

export default loaderHelper;
