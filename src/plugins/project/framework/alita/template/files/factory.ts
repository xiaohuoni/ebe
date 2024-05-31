import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { parse2Var } from '../../../../../../core/utils/compositeType';
import { createResultFile } from '../../../../../../core/utils/resultHelper';
import * as factoryData from '../data/factory';
import * as pcFactoryData from '../data/pcfactory';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';
  const { componentWillMount } = config?.frontendHookMap;
  const data = isMobile ? factoryData : pcFactoryData;
  const factory = isMobile ? 'factory' : 'pcfactory';
  const file = createResultFile(
    'factory',
    'tsx',
    `import React, { useImperativeHandle, useMemo, useRef, useState, useEffect } from 'react';;
    import { isEqual } from 'lodash';
    import { mergeGetter } from '../utils/Context/context';
    import { Container } from '../utils/Context/Container';
    import { useComponentHoc } from '../utils/useComponentHoc';
    import { usePageProvider } from '@/utils/Context/Container';

  
  import {${Object.keys(data.formHash)
    .map((i) => i + ' as _' + i)
    .join(',')},${data.otherHash
      .map((i) => i + ' as _' + i)
      .join(',')}} from './${factory}/src/index.component';
  import { preprocessMethods } from '@/utils/preprocess';
  ${config?.themeCss ? 'import "@/styles/themeCss.css"' : ''}
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
    const { type, fieldProps, isContainer } = config;
    const { run } = preprocessMethods(type, {
      extraData: {}
    });

    const HOC = React.forwardRef<unknown, any>((initialProps, ref) => {
      // 属性预处理
      const props = useMemo(() => run(initialProps), [initialProps]);

      const { registerRefs, renderId } = usePageProvider();

      // 自定义组件HOC hooks  保持visible逻辑
      //@ts-ignore
      const { state, setState, onChangeHandle } = useComponentHoc(props, {
        // @ts-ignore
        config: { fieldProps },
        fieldPropsChange,
        renderId,
      });

      const compProps: any = { ...props, visible: state.visible };
  
      const compRef = useRef<Record<string, any>>({}); // 组件库的ref
  
      if (onChangeHandle) {
        compProps[fieldProps?.trigger!] = onChangeHandle;
      }
  
      if (fieldProps?.valuePropName) {
        compProps[fieldProps?.valuePropName] = state.value;
      }

      // 引擎能力增加仅同步数据的方法
      compProps.getEngineApis = () => { 
        return {
          ...props.getEngineApis(),
          onlySyncValue: (v: unknown) => {
            syncInputValue(v, state.value, (v) =>
              setState({
                value: v,
              }),
            );
          },
        };
      }
    
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
  
      // 更新refs
      const uploadRef = (refInstance?: Record<string, any>) => {
        if (refInstance) {
          compRef.current = refInstance;
        }

        const ref = mergeGetter(imperative, compRef.current);
        if (props?.$$componentItem?.uid) {
          registerRefs(ref, props?.$$componentItem?.uid)
        }
      }

      useEffect(() => {
        uploadRef();
      });

      useEffect(() => () => {
        // 注销ref
        registerRefs(null, props?.$$componentItem?.uid);
      }, []);

      ${
        componentWillMount
          ? `if(componentWillMount(initialProps?.uid, config?.type, initialProps, {}) === false){
        return null;
      }`
          : ''
      }
      // 容器类组件
      if (isContainer === true) {
        return (
          <Container visible={state.visible}>
            <Component
              {...compProps}
              {...(compProps?.extendProps || {})}
              ref={uploadRef}
            />
          </Container>
        );
      }
      // 统一处理部分逻辑
      return (
        <Component
          {...compProps}
          {...(compProps?.extendProps || {})}
          ref={uploadRef}
        />
      );
    });
  
    return HOC;
  };
  // 低代码组件中，表单组件，要根据 fieldProps 配置，操作 value 和 setValue
  ${Object.keys(data.formHash)
    .map((i) => {
      const isContainer = data.containerType.includes(i)
        ? '// 容器类组件 \n isContainer : true,'
        : '';
      return ` export const ${i} = Hoc(_${i}, {
          fieldProps: ${parse2Var(data.formHash[i])},
          ${isContainer}
          type: ${parse2Var(i)}

        });`;
    })
    .join('\n')}
    ${data.otherHash
      .map((i) => {
        const isContainer = data.containerType.includes(i)
          ? '// 容器类组件 \n isContainer : true,'
          : '';
        return `  export const ${i} = Hoc(_${i}, {
           ${isContainer}
            type: ${parse2Var(i)}
          });`;
      })
      .join('\n')}
  `,
  );

  return [['src', 'components'], file];
}
