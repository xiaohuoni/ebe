import emptyPng from '@/assets/index.png';
import smileIcon from '@/assets/svg/baseLayout/line.svg';
import FlowLayout from '@/components/FlowLayout';
import SearchPage from '@/components/SearchPage';
import { getApis } from '@lingxiteam/engine-app';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import './index.less';

const PAGE_TABS = [
  { title: '页面', key: 'page' },
  { title: '流程', key: 'flow' },
];
interface BaseLayoutProps {
  onClose?: () => void;
  pages?: any[];
  debugToken?: string;
  appId: string;
  layout: string;
  showClose?: boolean;
  closeClick?: () => void;
  useLocale?: string | null;
}

const BaseLayout: FC<BaseLayoutProps> = (props: any) => {
  const {
    appId,
    layout,
    debugToken,
    onClose,
    pages,
    showClose = false,
    closeClick,
    useLocale,
  } = props || {};
  const [curKey, setCurKey] = useState('page');
  const [pageCatalogs, setPageCatalogs] = useState<any[]>([]);
  const api = getApis({ appId });
  useEffect(() => {
    if (appId && layout === 'BaseLayout') {
      if (appId) {
        (async () => {
          let targetData: any[] = [
            {
              catalogItemName: '全部分组',
              catalogItemId: 'all',
            },
            {
              catalogItemName: '预置分组',
              catalogItemId: '-1',
            },
          ];
          // 获取目录数据
          const pageCatalogs = await api.qryAppPageCatalogs({
            appId,
            catalogType: 'APPPAGE',
          });
          if (pageCatalogs && pageCatalogs.length) {
            targetData = [...targetData, ...pageCatalogs];
          }
          setPageCatalogs(targetData);
        })();
      }
    }
  }, [appId]);

  const headerView = (
    <div className="header">
      {PAGE_TABS.map((item) => {
        const { title, key } = item;
        return (
          <div
            key={key}
            className={curKey === key ? 'activeItem' : 'hederItem'}
            onClick={() => {
              setCurKey(key);
            }}
          >
            {title}
            {curKey === key ? (
              <div className="activeBorder">
                <img src={smileIcon} className="semicircle" alt="" />
              </div>
            ) : null}
          </div>
        );
      })}
      {showClose ? (
        <div
          className="closeText"
          onClick={() => {
            if (closeClick) {
              closeClick();
            }
          }}
        >
          关闭
        </div>
      ) : null}
    </div>
  );
  if (appId && layout === 'BaseLayout') {
    return (
      <div>
        {headerView}
        {curKey === 'page' ? (
          <SearchPage
            pageCatalogs={pageCatalogs}
            pageData={pages}
            layout={layout}
            debugToken={debugToken}
            appId={appId}
            onClose={onClose}
            useLocale={useLocale}
          />
        ) : (
          <FlowLayout />
        )}
      </div>
    );
  }
  return (
    <div className="emptyPage">
      <img src={emptyPng} className="emptyImg" alt="" />
      <div className="emptyText">
        欢迎登录使用{process.env.SYSTEM_NAME || '灵犀平台'}
      </div>
      <div>暂未配置/index 默认页面</div>
    </div>
  );
};

export default BaseLayout;
