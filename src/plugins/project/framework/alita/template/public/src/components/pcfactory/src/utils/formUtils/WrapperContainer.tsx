import React, { CSSProperties, FC } from 'react';
import { Col } from 'antd';
import { getTestHelperProps } from '../hooks/useTestHelper';

export interface WrapperContainerProps {
  labelAlign: any;
  name?: string;
  colon: boolean;
  wrapperStyle: CSSProperties;
  required: boolean;
  labelCol: string;
  label: any;
  showWrapperContainer: boolean;
  isFormRootChild: boolean;
  colProps: any;
  fieldName: string;
  disabled: boolean;
}

const WrapperContainer: FC<WrapperContainerProps> = props => {
  const {
    labelAlign,
    colon,
    wrapperStyle,
    children,
    required,
    labelCol,
    showWrapperContainer,
    isFormRootChild,
    fieldName,
    disabled,
  } = props;

  // 配合测试的属性
  const testProps = getTestHelperProps({ fieldName, disabled });


  if (!showWrapperContainer && !isFormRootChild) {
    return <>{children}</>;
  }

  if (!showWrapperContainer && isFormRootChild) {
    return <Col {...testProps} {...props.colProps}>{children}</Col>;
  }

  if (isFormRootChild) {
    return (
      <Col {...testProps} {...props.colProps}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: labelCol,
              textAlign: labelAlign,
            }}
          >
            {props.label && (
              <span>
                {required && (
                  <span style={{ fontSize: 12, marginRight: 4, color: '#ff4d4f' }}>*</span>
                )}
                {props.label}
                <span style={{ marginLeft: 2, marginRight: 8 }}>{colon ? ':' : ''}</span>
              </span>
            )}
          </div>
          <div style={wrapperStyle}>{children}</div>
        </div>
      </Col>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      {...testProps}
    >
      <div
        style={{
          width: labelCol,
          textAlign: labelAlign,
        }}
      >
        {props.label && (
          <span>
            {required && <span style={{ fontSize: 12, marginRight: 4, color: '#ff4d4f' }}>*</span>}
            {props.label}
            <span style={{ marginLeft: 2, marginRight: 8 }}>{colon ? ':' : ''}</span>
          </span>
        )}
      </div>
      <div style={wrapperStyle}>{children}</div>
    </div>
  );
};

export default WrapperContainer;
