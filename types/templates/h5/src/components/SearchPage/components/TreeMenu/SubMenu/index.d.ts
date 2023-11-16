import type { FC } from 'react';
import React from 'react';
import '../index.less';
interface SubMenuProps {
    renderMenu: (data: any) => React.ReactNode;
    searchVal?: string;
    item: any;
    onCatalogClick: (item: any) => void;
    curCatalogId?: string;
}
declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
