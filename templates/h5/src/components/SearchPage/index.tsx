/* eslint-disable react/no-danger */
import emptyPng from '@/assets/index.png';
import pageIcon from '@/assets/svg/baseLayout/page.svg';
import { urlUtils } from '@lingxiteam/engine-utils';
import { history } from 'alita';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import SearchView from './components/SearchView';
import './index.less';

interface SearchPageProps {
  pageCatalogs: any[];
  pageData?: any[];
  layout?: string;
  debugToken?: string;
  appId: string;
  onClose?: () => void;
}

const SearchPage: FC<SearchPageProps> = (props) => {
  const {
    pageCatalogs = [],
    pageData = [],
    layout = '',
    appId = '',
    debugToken = '',
    onClose,
  } = props;
  const [searchVal, setSearchVal] = useState('');
  const [catalogItemId, setCatalogItemId] = useState('all');
  const pageList = useMemo(() => {
    if (searchVal) {
      const newData = pageData?.filter((item) =>
        String(item?.pageName ?? '')
          .toLowerCase()
          ?.includes(searchVal.toLowerCase()),
      );
      if (catalogItemId === 'all') {
        return newData;
      }
      return newData.filter((item) => item?.catalogItemId === catalogItemId);
    }
    if (catalogItemId === 'all') {
      return pageData;
    }
    return pageData.filter((item) => item?.catalogItemId === catalogItemId);
  }, [searchVal, catalogItemId, pageData]);
  const onCatalogClick = (item: {
    catalogItemId: React.SetStateAction<string>;
  }) => {
    setCatalogItemId(item.catalogItemId);
  };
  const onPageItemClick = (item: any) => {
    if (appId) {
      const searchObj: any = { appId };
      if (layout) {
        searchObj.layout = layout;
      }
      if (debugToken) {
        searchObj.debugToken = debugToken;
      }
      const { pagePath } = item;
      if (onClose) {
        onClose();
      }
      if (pagePath) {
        if (pagePath) {
          const { modPathWithSearchObj } = urlUtils;
          history.replace(modPathWithSearchObj(pagePath, searchObj));
        }
      }
    }
  };
  return (
    <>
      <SearchView
        curCatalogId={catalogItemId}
        onCatalogClick={onCatalogClick}
        pageCatalogs={pageCatalogs}
        onSearch={setSearchVal}
        onClear={() => {
          setSearchVal('');
        }}
        onChange={(val) => {
          // 搜索栏清空数据，则展示所有数据
          if (!val) {
            setSearchVal('');
          }
        }}
      />
      <div className="pageList">
        {pageList && pageList.length ? (
          <div className="list">
            {pageList.map((item) => {
              const { pageName, pagePath, pageId } = item;
              return (
                <div
                  key={pageId}
                  className="listItem"
                  onClick={() => {
                    if (pagePath) {
                      onPageItemClick(item);
                    }
                  }}
                >
                  <img src={pageIcon} alt="" />
                  <div className="pageInfo">
                    <span
                      className="pageName"
                      dangerouslySetInnerHTML={{
                        __html: searchVal
                          ? pageName?.replace(
                              new RegExp(searchVal, 'gi'),
                              '<span style="color:#47e">$&</span>',
                            )
                          : pageName,
                      }}
                    />
                    <span
                      className="pagePath"
                      dangerouslySetInnerHTML={{
                        __html: searchVal
                          ? pagePath?.replace(
                              new RegExp(searchVal, 'gi'),
                              '<span style="color:#47e">$&</span>',
                            )
                          : pagePath,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="emptyBlock">
            <img src={emptyPng} className="emptyImg" alt="" />
            <div className="emptyText">该分组暂无页面列表数据</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
