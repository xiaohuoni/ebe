import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { parse2Var } from '../../../../../../core/utils/compositeType';
import { createResultFile } from '../../../../../../core/utils/resultHelper';
import { isFirstLetterUpperCase } from '../../../../../../core/utils/validate';
// @ts-ignore
import appconfig from '@lingxiteam/factory/lib/index.config';
import pcconfig from '@lingxiteam/pcfactory/lib/index.config';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  let cg: any = appconfig;
  const isMobile = config?.platform === 'h5';
  const { componentWillMount } = config?.frontendHookMap;
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
    } else {
      otherHash.push(c);
    }
  });
  const factory = isMobile ? 'factory' : 'pcfactory';
  const file = createResultFile(
    'factory',
    'tsx',
    `import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';;
    import { isEqual } from 'lodash';
    import { mergeGetter } from '../utils/Context/context';
    import { useComponentHoc } from '../utils/useComponentHoc';
  
  import {${Object.keys(formHash)
    .map((i) => i + ' as _' + i)
    .join(',')},${otherHash
      .map((i) => i + ' as _' + i)
      .join(',')}} from '@lingxiteam/${factory}/es/index.component';
  import { preprocessMethods } from '@/utils/preprocess';

  export { CustomComponent } from './CustomComponent';
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
  
  ${componentWillMount ? componentWillMount : ''}
  export const Hoc = (Component: any, config?:any) => {
    const fieldPropsChange = () => {};
    const { type, fieldProps } = config;
    const { run } = preprocessMethods(type, {
      extraData: {}
    });

    const HOC = React.forwardRef<unknown, any>((initialProps, ref) => {
      // 属性预处理
      const props = useMemo(() => run(initialProps), [initialProps]);
      // 自定义组件HOC hooks  保持visible逻辑
      //@ts-ignore
      const { state, setState, onChangeHandle } = useComponentHoc(props, {
        // @ts-ignore
        config: { fieldProps },
        fieldPropsChange,
      });
  
      const compProps: any = { ...props, visible: state.visible };
  
      const [componentRef, setComponentRef] = useState({});
      const isDidComponentRef = useRef(false);
  
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
  
    
      let imperative: any = {
        get compName() {
          return config.type;
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
      };
  
      if (fieldProps) {
        imperative = {
          ...imperative,
          get value() {
            return compProps[fieldProps.valuePropName!];
          },
          setValue(v: unknown) {
            syncInputValue(v, compProps[fieldProps.valuePropName!], (v) => setState({ value: v }));
          },
        };
      }
  
      useImperativeHandle(ref, () =>
        mergeGetter(imperative, componentRef),
        [componentRef]
      );
      ${
        componentWillMount
          ? `if(componentWillMount(initialProps?.uid, config?.type, initialProps, {}) === false){
        return null;
      }`
          : ''
      }
  
      // 统一处理部分逻辑
      return (
        <Component
          {...compProps}
          {...(compProps?.extendProps || {})}
          ref={(ref: any) => {
            if (ref && isDidComponentRef.current === false) {
              isDidComponentRef.current = true;
              setComponentRef(ref);
            }
          }}
        />
      );
    });
  
    return HOC;
  };
  // 低代码组件中，表单组件，要根据 fieldProps 配置，操作 value 和 setValue
  ${Object.keys(formHash)
    .map(
      (i) =>
        `  export const ${i} = Hoc(_${i}, {
          fieldProps: ${parse2Var(formHash[i])},
          type: ${parse2Var(i)}
        });`,
    )
    .join('\n')}
    ${otherHash
      .map(
        (i) => `  export const ${i} = Hoc(_${i}, {
      type: ${parse2Var(i)}
    });`,
      )
      .join('\n')}
  `,
  );

  return [['src', 'components'], file];
}
