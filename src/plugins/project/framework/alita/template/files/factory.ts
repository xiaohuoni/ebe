import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';
import { isFirstLetterUpperCase } from '../../../../../../core/utils/validate';
// @ts-ignore
import appconfig from '@lingxiteam/factory/lib/index.config';
import pcconfig from '@lingxiteam/pcfactory/lib/index.config';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  let cg = appconfig;
  const isMobile = config?.platform === 'h5';
  if (!isMobile) {
    cg = pcconfig;
  }
  const blackHash = ['BOFramer', 'Pageview'];

  const compHash = Object.keys(cg)
    .filter(isFirstLetterUpperCase)
    .filter((c) => !blackHash.includes(c))
    .filter(Boolean);
  const formHash = {} as any;
  const otherHash: string[] = [];
  compHash.forEach((c) => {
    if (cg[c] && cg[c].fieldProps) {
      formHash[c] = cg[c].fieldProps;
      // 远程组件是本地提供
    } else if (c !== 'RemoteComponent') {
      otherHash.push(c);
    }
  });
  const factory = isMobile ? 'factory' : 'pcfactory';
  const file = createResultFile(
    'factory',
    'tsx',
    `import { useComponentHoc } from '@lingxiteam/engine-render-core/es/hooks/useComponentHoc';
  import type { ImperativeHandleReturn } from '@lingxiteam/types';
  import { isEqual } from 'lodash';
  import React, { useImperativeHandle, useMemo } from 'react';
  
  import {${Object.keys(formHash)
    .map((i) => i + ' as _' + i)
    .join(',')},${otherHash
      .map((i) => i + ' as _' + i)
      .join(',')}} from '@lingxiteam/${factory}/es/index.component';

  export { CustomComponent } from './CustomComponent';
  export { RemoteComponent } from './RemoteComponent';
  export const syncInputValue = (
    e: unknown,
    preValue: unknown,
    setValue: (v: unknown) => void,
  ) => {
    if (!isEqual(e, preValue)) {
      setValue(e);
      return true;
    }
    return false;
  };
  
  const Hoc = (Component: any, fieldProps?:any) => {
    const fieldPropsChange = () => {};
  
    const HOC = React.forwardRef<unknown, HOCProps>((props, ref) => {
      // 自定义组件HOC hooks  保持visible逻辑
      //@ts-ignore
      const { state, setState, onChangeHandle } = useComponentHoc(props, {
        // @ts-ignore
        config: { fieldProps },
        fieldPropsChange,
      });
  
      const compProps: any = { ...props, visible: state.visible };
  
      const componentRef = React.useRef({});
  
      if (onChangeHandle) {
        compProps[fieldProps?.trigger!] = onChangeHandle;
      }
  
      if (fieldProps?.valuePropName) {
        compProps[fieldProps?.valuePropName] = state.value;
      }
  
      // 引擎能力增加仅同步数据的方法
      compProps.getEngineApis = useMemo(() => {
        return () => {
          return {
            ...props.getEngineApis(),
            onlySyncValue: (v: unknown) => {
              syncInputValue(v, state.value, (v) => setState({ value: v }));
            },
          };
        };
      }, [state.value]);
  
      useImperativeHandle(ref, () => ({
        get compName() {
          return compProps.$$componentItem.type;
        },
        get visible() {
          return state.visible;
        },
        get compId() {
          return compProps.$$componentItem.id;
        },
        setVisible(show: boolean | 'toggle') {
          setState({
            visible: show === 'toggle' ? !state.visible : show,
          });
        },
        get value() {
          return state.value;
        },
        setValue(v: unknown) {
          syncInputValue(v, state.value, (v) => setState({ value: v }));
          // if (onChangeHandle) {
          //   onChangeHandle(v);
          // }
        },
        ...componentRef.current
      }));
  
      // 统一处理部分逻辑
      return <Component {...compProps} {...(compProps?.extendProps || {})} ref= {componentRef}/>;
    });
  
    return HOC;
  };
  // 低代码组件中，表单组件，要根据 fieldProps 配置，操作 value 和 setValue
  ${Object.keys(formHash)
    .map(
      (i) =>
        `  export const ${i} = Hoc(_${i}, ${JSON.stringify(formHash[i])});`,
    )
    .join('\n')}
    ${otherHash.map((i) => `  export const ${i} = Hoc(_${i});`).join('\n')}
  `,
  );

  return [['src', 'components'], file];
}
