import closeIcon from '@/assets/svg/baseLayout/close.svg';
import hideMenuIcon from '@/assets/svg/baseLayout/hide_menu.svg';
import menuIcon from '@/assets/svg/baseLayout/menu.svg';
import { useGetApp } from '@lingxiteam/engine-app';
import { connect, useLocation, useSearchParams } from 'alita';
import { Popup } from 'antd-mobile-5';
import React, { useEffect, useState } from 'react';
import BaseLayout from '../BaseLayout';
import './index.less';

// const defaultLangItem = { label: '简体中文', value: 'zh-CN' };

// const items = [
//   defaultLangItem,
//   { label: '繁体中文（中国香港）', value: 'zh-HK' },
//   { label: '英语（美式）', value: 'en-US' },
// ];

const Layout = (props: any) => {
  const { dispatch /* locale */ } = props;
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const appId = searchParams.get('appId') || '';
  const layout = searchParams.get('layout') || '';
  const debugToken = searchParams.get('debugToken') || '';
  const useLocale = searchParams.get('useLocale');
  const [showHide, setShowHide] = useState(false);
  const { appInst } = useGetApp({
    appId,
    appType: 'mobile',
  });

  const initalLocale = async () => {
    const language = await dispatch({
      type: 'locale/initLanguage',
      payload: {
        // appLocaleInfo,
      },
    });
    await dispatch({
      type: 'locale/updateLanguage',
      payload: {
        language,
      },
    });
    await dispatch({
      type: 'app/setAppState',
      payload: {
        appDidLoad: true,
      },
    });
  };

  useEffect(() => {
    initalLocale();
  }, []);

  const localIndex = () => {
    // 是否有配置首页
    const indexPage = appInst?.pages?.find(
      (page: { pagePath: string }) => page.pagePath === '/index',
    );
    if (!indexPage && location?.pathname === '/') {
      // 未配置首页，则跳转到默认的首页
      return true;
    }
    return false;
  };
  // 判断是否是本地的首页
  const isLocalIndex = localIndex() || layout !== 'BaseLayout';

  return (
    <>
      {/* <Selector
        options={items}
        value={[locale.language]}
        onChange={(arr, extend) => {
          dispatch({
            type: 'locale/updateLanguage',
            payload: {
              language: arr[0],
            },
          });
        }}
      /> */}
      {isLocalIndex ? null : (
        <>
          {showHide ? (
            <div
              className="hideMenuBtn"
              onClick={() => {
                setShowHide(false);
                setVisible(true);
              }}
            >
              <img src={hideMenuIcon} className="hideMenuIcon" alt="" />
            </div>
          ) : (
            <>
              <div
                className="filterBtn"
                onClick={() => {
                  setVisible(true);
                }}
              >
                <img src={menuIcon} className="menuIcon" alt="" />
                <span>菜单</span>
              </div>
              <img
                src={closeIcon}
                className="closeIcon"
                onClick={() => {
                  setShowHide(true);
                }}
                alt=""
              />
            </>
          )}
          <Popup
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
            position="left"
            bodyStyle={{ width: '100vw', height: '100vh' }}
          >
            <BaseLayout
              onClose={() => {
                setVisible(false);
              }}
              pages={appInst?.pages}
              debugToken={debugToken}
              appId={appId}
              layout={layout}
              showClose
              closeClick={() => {
                setVisible(false);
              }}
              useLocale={useLocale}
            />
          </Popup>
        </>
      )}
    </>
  );
};
export default connect(({ locale }: any) => ({ locale }))(Layout);
