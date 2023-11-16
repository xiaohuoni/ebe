import type { FC } from 'react';
import './index.less';
interface TreeMenuProps {
    catalogData: any[];
    searchVal?: string;
    onCatalogClick: (item: any) => void;
    curCatalogId: string;
}
declare const TreeMenu: FC<TreeMenuProps>;
export default TreeMenu;
