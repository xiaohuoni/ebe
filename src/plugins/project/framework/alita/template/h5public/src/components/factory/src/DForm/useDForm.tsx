import { useForm } from '@lingxiteam/dform';
import { useRef, useState } from 'react';

export const useDForm: any = () => {
  const [form] = useForm();
  const formRef = useRef();
  const submitTypeRef = useRef('0');
  const formListRef = useRef({});
  const formChildRelation = useRef({});
  const resultFunRef = useRef({
    onSuccess: (e: any) => {},
    onFail: (e: any) => {},
  });
  // // 重写setFieldsValue方法
  // const originalSetFieldsValue = form.setFieldsValue;
  // form.setFieldsValue = (values) => {
  //   // 调用原始setFieldsValue方法
  //   originalSetFieldsValue.call(form, values);
  //   // 触发onValuesChange回调函数
  //   formValuesChange(values, form.getFieldsValue())
  // };

  // const { run } = useDebounceFn((values, target) => {
  //   formValuesChange(values, target.getFieldsValue());
  //   changeValues.current = {};
  // }, { wait: 20 });

  // const formProxy = new Proxy(form, {
  //   get(target, prop) {
  //     // if (prop === 'setFieldsValue') {
  //     //   console.log('=====1');
  //     //   return function (values: any) {
  //     //     // 调用原始的setFieldsValue方法
  //     //     const result = target[prop](values);
  //     //     changeValues.current = { ...changeValues.current, ...values };
  //     //     // 触发onValuesChange回调函数
  //     //     run(changeValues.current, target);
  //     //     return result;
  //     //   };
  //     // }

  //     // 对其他方法或属性的访问进行默认处理
  //     // @ts-ignore
  //     return target[prop];
  //   },
  // });

  // console.log(formProxy);
  const formCodeFunRef = useRef({
    onSuccess: (e: any) => {},
    onFail: (e: any) => {},
  });
  const [errorValues, setErrorValues] = useState<any>({});

  const uploadChildRelation = (id: string, fileProps: string) => {
    if (id && fileProps) {
      // @ts-ignore
      formChildRelation.current[fileProps] = id;
    }
  };

  return {
    form,
    submitTypeRef,
    formRef,
    formListRef,
    resultFunRef,
    uploadChildRelation,
    formChildRelation,
    formList: useRef({}).current,
    formCodeFunRef,
    errorValues,
    setErrorValues,
  };
};
