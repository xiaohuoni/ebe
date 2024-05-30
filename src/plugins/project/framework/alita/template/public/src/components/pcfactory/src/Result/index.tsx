import React from 'react';
import { Result as AntdResult } from 'antd';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';

export interface MyResultProps {
  status: 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';
  title: string;
  subTitle: string;
  style?: any;
  visible: boolean;
}

const Result: React.FC<MyResultProps> = (props) => {
  const { status, title, subTitle, visible, style, ...restProps } = props;
  const finalStyle = useHiddenStyle(visible, style);
  return <AntdResult status={status} title={title} subTitle={subTitle} style={finalStyle} {...restProps} />;
};

export default Result;
