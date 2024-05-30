import { Alert } from 'antd';
import React from 'react';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';

export interface MyAlertProps {
  message: string;
  name?: string;
  style?: any;
  visible: boolean;
}

const MyAlert: React.FC<MyAlertProps> = (props) => {
  const { name, visible, style, ...restProps } = props;
  const finalStyle = useHiddenStyle(visible, style);
  return (
    <div className="ued-alert">
      <Alert style={finalStyle} {...restProps} />
    </div>
  );
};

export default MyAlert;
