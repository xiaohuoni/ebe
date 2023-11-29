import { Dropdown, SearchBar } from 'antd-mobile-5';
import type { FC } from 'react';
import React, { useRef, useState } from 'react';
import SearchPanel from '../SearchPanel';
import styles from './index.less';

interface SearchViewProps {
  onSearch: (value: string) => void;
  onClear: () => void;
  onChange: (value: string) => void;
  pageCatalogs: any[];
  onCatalogClick: (data: any) => void;
  curCatalogId?: string;
}

const SearchView: FC<SearchViewProps> = (props) => {
  const {
    onSearch,
    onClear,
    onChange,
    pageCatalogs,
    onCatalogClick,
    curCatalogId,
  } = props;
  const [dropdownTitle, setDropdownTitle] = useState('全部分组');
  const curRef = useRef();
  const myCatalogClick = (item: any) => {
    const { catalogItemName } = item;
    setDropdownTitle(catalogItemName);
    onCatalogClick(item);
    if (curRef && curRef?.current) {
      curRef?.current?.close();
    }
  };
  return (
    <div className={styles.searchView}>
      <div className={styles.leftFilter}>
        <Dropdown ref={curRef}>
          <Dropdown.Item
            key="group"
            title={
              <span className={styles.dropdownTitle}>{dropdownTitle}</span>
            }
          >
            <SearchPanel
              pageCatalogs={pageCatalogs}
              onCatalogClick={myCatalogClick}
              curCatalogId={curCatalogId}
            />
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className={styles.rightSearch}>
        <SearchBar
          placeholder="搜索页面名称"
          onSearch={onSearch}
          onClear={onClear}
          onChange={onChange}
          onFocus={() => {
            if (curRef && curRef?.current) {
              curRef?.current?.close();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchView;
