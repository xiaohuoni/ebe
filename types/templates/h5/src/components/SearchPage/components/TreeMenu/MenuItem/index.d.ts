import type { FC } from 'react';
import React from 'react';
interface MenuItemProps {
    item: any;
    prefix?: React.ReactNode;
    extra?: React.ReactNode;
    searchVal?: string;
    onCatalogClick: (item: any) => void;
    curCatalogId?: string;
}
declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
