import { cloneElement } from 'react';

interface WrapperFormProps {
  children: React.ReactElement;
}

const FORM_WRAPPER_CLASSNAME = 'ued-legacy-form-wrap';

const WrapperForm: React.FC<WrapperFormProps> = ({ children }) =>
  cloneElement(children, {
    className: `${FORM_WRAPPER_CLASSNAME} ${children.props.className || ''}`,
  });

export default WrapperForm;
