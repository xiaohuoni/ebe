import { Col, Row } from 'antd';
import type { RowProps } from 'antd/lib/row';
import React from 'react';
import useBackgroundStyle from '../View/useBackgroundStyle';

export interface MyRowProps extends RowProps {
  colSpan?: number;
  visible?: boolean;
  gutterVertical: number;
  gutterHorizontal: number;
  children?: React.ReactNode[];
  backgroundType?: any;
  appId?: string;
  getEngineApis?: any;
}

const MyRow: React.FC<MyRowProps> = (props) => {
  const {
    children,
    style,
    colSpan,
    visible = true,
    className,
    gutterVertical = 0,
    gutterHorizontal = 0,
    backgroundType,
    getEngineApis,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};

  const { backgroundStyle } = useBackgroundStyle({
    engineApis,
    backgroundType,
    appId: restProps?.appId,
    mode: 'engine',
  });

  const renderChildren = () => {
    // children可能是单个React元素（这种事情发生在普通的嵌套写法里）
    const childrenarr = React.isValidElement(children) ? [children] : children;
    return (childrenarr || []).map((c, i) => (
      <Col span={colSpan} key={i}>
        {c}
      </Col>
    ));
  };
  return visible ? (
    <Row
      gutter={[gutterHorizontal, gutterVertical]}
      {...restProps}
      // @ts-ignore
      data-compid={props?.['data-compid']}
      style={{
        ...backgroundStyle,
        ...style,
      }}
      className={className}
    >
      {renderChildren()}
    </Row>
  ) : null;
};

export default MyRow;
