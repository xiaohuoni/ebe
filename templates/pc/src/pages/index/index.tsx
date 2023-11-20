import indexPng from '@/assets/index.png';
import React, { FC } from 'react';
import styles from './index.less';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <div className={styles.indexPage}>
      <img src={indexPng} className={styles.indexImg} alt="" />
      <div className={styles.indexText}>
        欢迎登录使用{process.env.SYSTEM_NAME || '灵犀平台'}
      </div>
      <div
        onClick={() => {
          props.history.push('/ceshi1071');
        }}
      >
        暂无登录
      </div>
    </div>
  );
};

export default HomePage;
