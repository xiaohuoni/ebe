import { FC } from 'react';

/**
 * 本方法主要用来包裹formItem组件，目的是为了对表单项下划线进行处理
 */
interface FormItemProps {}

const FormItem: FC<FormItemProps> = (props) => {
  // 增加form组件的classname, 使对应的customClass生效。
  let formItemClassName = '';
  const getClassName = (item: any) => {
    if (item?.children) {
      getClassName(item.children?.props);
    } else if (item?.className) {
      formItemClassName = item.className;
    }
  };
  getClassName(props);
  return (
    <div className={`lcdp-form-item ${formItemClassName}`}>
      {props.children}
    </div>
  );
};

export default FormItem;
