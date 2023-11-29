import catalogIcon from '@/assets/svg/baseLayout/catalog_default.svg';
import presetIcon from '@/assets/svg/baseLayout/catalog_preset.svg';
import type { FC } from 'react';
import React from 'react';
import './index.less';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

interface TreeMenuProps {
  catalogData: any[];
  searchVal?: string;
  onCatalogClick: (item: any) => void;
  curCatalogId: string;
}

const TreeMenu: FC<TreeMenuProps> = (props) => {
  const {
    catalogData = [],
    searchVal = '',
    onCatalogClick,
    curCatalogId,
  } = props;
  const renderMenu = (menuData: any[]) => {
    return menuData.map((item) => {
      const { children = [], catalogItemId } = item;
      if (children && children.length) {
        return (
          <SubMenu
            renderMenu={renderMenu}
            item={item}
            searchVal={searchVal}
            key={catalogItemId}
            onCatalogClick={onCatalogClick}
            curCatalogId={curCatalogId}
          />
        );
      }
      return (
        <MenuItem
          curCatalogId={curCatalogId}
          onCatalogClick={onCatalogClick}
          key={catalogItemId}
          item={item}
          prefix={
            <img
              src={catalogItemId === '-1' ? presetIcon : catalogIcon}
              className="preFixIcon"
              alt=""
            />
          }
          searchVal={searchVal}
        />
      );
    });
  };

  return <div className="treeMenu">{renderMenu(catalogData)}</div>;
};

export default TreeMenu;
