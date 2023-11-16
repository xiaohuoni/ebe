import type { FC } from 'react';
interface SearchPanelProps {
    pageCatalogs: any[];
    onCatalogClick: (data: any) => void;
    curCatalogId: string;
}
declare const SearchPanel: FC<SearchPanelProps>;
export default SearchPanel;
