import emptyImg from '@/assets/svg/baseLayout/flow_empty.png';
import type { FC } from 'react';
import React from 'react';
import styles from './index.less';

interface FlowLayoutProps {}

const FlowLayout: FC<FlowLayoutProps> = (props) => {
  return (
    <div className={styles.flowPage}>
      <img src={emptyImg} className={styles.emptyImg} alt="" />
      <div className={styles.emptyText}>功能开发中敬请期待</div>
    </div>
  );
};

export default FlowLayout;
