import { LXProjectOptions, ResultFile } from '../../../../../../../core';
import { createResultFile } from '../../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'index',
    'tsx',
    `
import React, { FC, useState } from 'react';
import { Button, Drawer, Row, Space } from 'antd';
import { catchErrorBoundary } from './catchErrorBoundary';
import type { FallbackRenderProps } from './catchErrorBoundary';
import styles from './index.less';

interface ErrorBoundaryProps extends FallbackRenderProps {}

const ErrorBoundary: FC<ErrorBoundaryProps> = (props) => {
  const { error, componentStack, compName } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.errorBoundary}>
      <div className={styles.engineErrorBoundary}>
        <div className={styles.warnIcon}>!</div>
        <div className={styles.text}>
          组件加载失败，点击<span onClick={() => setOpen(true)}>查看详情</span>
        </div>
      </div>
      <Drawer
        title="组件渲染错误"
        width={640}
        placement="right"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        className={styles.errorDetail}
        footer={
          <Row justify='end'><Button type='primary' onClick={() => setOpen(false)}>知道了</Button></Row>
        }
      >
        <div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>组件名称</span>：{compName}
          </div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>错误信息</span>：{error.message}
          </div>
          <div className={styles.row}>
            <span className={styles.rowTitle}>错误堆栈</span>:
            <div>{componentStack || error.stack}</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

const WithCatchErrorBoundary = <T extends Record<string, any>>(WrappedComponent: React.ComponentClass<T> | React.FunctionComponent<T>, options: { compName: string }) => catchErrorBoundary(WrappedComponent, props => <ErrorBoundary {...props} />, options);

export { 
  WithCatchErrorBoundary,
};
  
export default ErrorBoundary;

`,
  );

  return [['src', 'components', 'common', 'ErrorBoundary'], file];
}
