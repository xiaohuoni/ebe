import type { FC } from 'react';
interface SearchViewProps {
    onSearch: (value: string) => void;
    onClear: () => void;
    onChange: (value: string) => void;
    pageCatalogs: any[];
    onCatalogClick: (data: any) => void;
    curCatalogId?: string;
}
declare const SearchView: FC<SearchViewProps>;
export default SearchView;
