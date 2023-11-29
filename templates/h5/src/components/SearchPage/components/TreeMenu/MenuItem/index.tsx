/* eslint-disable react/no-danger */
import classnames from 'classnames';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import styles from './index.less';

interface MenuItemProps {
  item: any;
  prefix?: React.ReactNode;
  extra?: React.ReactNode;
  searchVal?: string;
  onCatalogClick: (item: any) => void;
  curCatalogId?: string;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    item,
    prefix = null,
    extra = null,
    searchVal = '',
    onCatalogClick,
    curCatalogId,
  } = props;
  const { catalogItemId, catalogItemName, catalogPath } = item;
  const level = useMemo(() => {
    if (catalogPath && catalogPath.includes(',')) {
      return catalogPath.split(',').length - 1;
    }
    return 0;
  }, [catalogPath]);

  return (
    <div
      className={styles.memuItem}
      key={catalogItemId}
      style={{ paddingLeft: `${level * 16}px` }}
    >
      <div className={styles.leftContent}>
        {prefix ? <>{prefix}</> : null}
        <div
          onClick={() => {
            onCatalogClick(item);
          }}
          className={
            curCatalogId === catalogItemId
              ? classnames(styles.catalogItemName, styles.activeItem)
              : styles.catalogItemName
          }
          dangerouslySetInnerHTML={{
            __html: searchVal
              ? catalogItemName?.replace(
                  new RegExp(searchVal, 'gi'),
                  '<span style="color:#47e">$&</span>',
                )
              : catalogItemName,
          }}
        />
      </div>
      {extra ? <div>{extra}</div> : null}
    </div>
  );
};

export default MenuItem;
