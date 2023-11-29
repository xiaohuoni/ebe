import { SearchBar } from 'antd-mobile-5';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import TreeMenu from '../TreeMenu';
import styles from './index.less';
import { findNodesWithKeyword } from './utils';

const SearchBarStyle = {
  '--background': '#fff',
  height: '36px',
};
interface SearchPanelProps {
  pageCatalogs: any[];
  onCatalogClick: (data: any) => void;
  curCatalogId: string;
}
const SearchPanel: FC<SearchPanelProps> = (props) => {
  const { pageCatalogs = [], onCatalogClick, curCatalogId = '' } = props;

  const [searchVal, setSearchVal] = useState('');
  const catalogData = useMemo(() => {
    if (searchVal) {
      return findNodesWithKeyword(pageCatalogs, searchVal);
    }
    return pageCatalogs;
  }, [searchVal]);
  return (
    <div className={styles.searchPanel}>
      <div className={styles.groupSearch}>
        <SearchBar
          style={SearchBarStyle}
          placeholder="搜索分组名称"
          onSearch={setSearchVal}
          onCancel={() => {
            setSearchVal('');
          }}
          onChange={(val) => {
            // 搜索栏清空数据，则展示所有数据
            if (!val) {
              setSearchVal('');
            }
          }}
        />
      </div>
      <div className={styles.groupData}>
        <TreeMenu
          curCatalogId={curCatalogId}
          catalogData={catalogData}
          searchVal={searchVal}
          onCatalogClick={onCatalogClick}
        />
      </div>
    </div>
  );
};

export default SearchPanel;
