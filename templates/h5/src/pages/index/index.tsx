import indexPng from '@/assets/index.png';
import BaseLayout from '@/components/BaseLayout';
import { useGetApp, user } from '@lingxiteam/engine-app';
import { useSearchParams } from 'alita';
import React, { FC } from 'react';
import styles from './index.less';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = (props) => {
  const [searchParams] = useSearchParams();
  const appId = searchParams.get('appId') || '';
  const layout = searchParams.get('layout') || '';
  const debugToken = searchParams.get('debugToken') || '';
  const { appInst } = useGetApp({
    appId,
    appType: 'mobile',
  });
  const userInfo = user.getUserInfo();
  // 已登录或者有免登陆的页面
  if (
    (user && userInfo?.info && userInfo?.info?.userId) ||
    (appInst && Array.isArray(appInst?.pages) && appInst?.pages.length > 0)
  ) {
    return (
      <BaseLayout
        pages={appInst?.pages}
        appId={appId}
        layout={layout}
        debugToken={debugToken}
      />
    );
  }
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
