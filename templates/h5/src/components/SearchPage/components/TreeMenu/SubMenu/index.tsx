import catalogChildrenIcon from '@/assets/svg/baseLayout/catalog_children.svg';
import downIcon from '@/assets/svg/baseLayout/catalog_down.svg';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import '../index.less';
import MenuItem from '../MenuItem';

interface SubMenuProps {
  renderMenu: (data: any) => React.ReactNode;
  searchVal?: string;
  item: any;
  onCatalogClick: (item: any) => void;
  curCatalogId?: string;
}

const SubMenu: FC<SubMenuProps> = (props) => {
  const {
    renderMenu,
    item,
    searchVal = '',
    onCatalogClick,
    curCatalogId,
  } = props;
  const { children = [], open: defaultOpen = false } = item;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);
  return (
    <>
      <MenuItem
        curCatalogId={curCatalogId}
        onCatalogClick={onCatalogClick}
        item={item}
        searchVal={searchVal}
        prefix={
          <img
            src={catalogChildrenIcon}
            className="preFixIcon"
            onClick={() => {
              setOpen(!open);
            }}
            alt=""
          />
        }
        extra={
          <img
            src={downIcon}
            className={open ? 'upIcon' : 'downIcon'}
            onClick={() => {
              setOpen(!open);
            }}
            alt=""
          />
        }
      />
      <div className={open ? 'subMenuOpen' : 'subMenuClose'}>
        {renderMenu(children)}
      </div>
    </>
  );
};

export default SubMenu;
