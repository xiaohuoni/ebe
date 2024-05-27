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
  const containerType = Object.values(isMobile ? pcconfig : appconfig)
    .filter((i: any) => i?.isContainer === true)
    .map((subi) => subi?.type);
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

  
  import {${Object.keys(formHash)
    .map((i) => i + ' as _' + i)
    .join(',')},${otherHash
      .map((i) => i + ' as _' + i)
      .join(',')}} from '@lingxiteam/${factory}/es/index.component';
  import { preprocessMethods } from '@/utils/preprocess';
  ${config?.themeCss ? 'import "../themeCss.css"' : ''}
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
      // 自定义组件HOC hooks  保持visible逻辑
      //@ts-ignore
      const { state, setState, onChangeHandle } = useComponentHoc(props, {
        // @ts-ignore
        config: { fieldProps },
        fieldPropsChange,
      });

      const { registerRefs } = usePageProvider();
  
      const compProps: any = { ...props, visible: state.visible };
  
      const compRef = useRef<Record<string, any>>({}); // 组件库的ref
  
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
  ${Object.keys(formHash)
    .map((i) => {
      const isContainer = containerType.includes(i)
        ? '// 容器类组件 \n isContainer : true,'
        : '';
      return ` export const ${i} = Hoc(_${i}, {
          fieldProps: ${parse2Var(formHash[i])},
          ${isContainer}
          type: ${parse2Var(i)}

        });`;
    })
    .join('\n')}
    ${otherHash
      .map((i) => {
        const isContainer = containerType.includes(i)
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
